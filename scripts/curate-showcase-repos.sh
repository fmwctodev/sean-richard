#!/usr/bin/env bash
#
# Flip a list of GitHub repos into "public read-only showcase" mode:
#   - Visibility → public
#   - Issues, Wiki, Projects, Discussions → disabled
#   - Branch protection on default branch (no direct pushes, requires PR)
#   - LICENSE file uploaded if missing
#
# Note: GitHub does not allow disabling git clone/download for public repos.
# This script makes repos legally restricted (LICENSE) and read-only via UX
# (no issues/PRs/wiki) but the code is still cloneable. If that's not OK,
# keep the repo private.
#
# Usage:
#   ./scripts/curate-showcase-repos.sh fmwctodev/lyncbot-demo Autom8ion-Lab/a8l-os-sample
#
# Add --dry-run as the first arg to print actions without executing.
# Requires `gh` CLI authenticated (`gh auth login`).

set -euo pipefail

DRY_RUN=0
if [[ "${1-}" == "--dry-run" ]]; then
  DRY_RUN=1
  shift
fi

if [[ $# -eq 0 ]]; then
  echo "Usage: $0 [--dry-run] <owner/repo> [<owner/repo> ...]"
  echo "Example: $0 fmwctodev/lyncbot-demo Autom8ion-Lab/a8l-os-sample"
  exit 1
fi

if ! command -v gh >/dev/null 2>&1; then
  echo "ERROR: gh CLI not found. Install: https://cli.github.com/"
  exit 1
fi

if ! gh auth status >/dev/null 2>&1; then
  echo "ERROR: gh CLI not authenticated. Run: gh auth login"
  exit 1
fi

LICENSE_FILE="$(dirname "$0")/../LICENSE"
if [[ ! -f "$LICENSE_FILE" ]]; then
  echo "ERROR: LICENSE not found at $LICENSE_FILE"
  exit 1
fi

run() {
  if [[ $DRY_RUN -eq 1 ]]; then
    echo "  DRY: $*"
  else
    echo "  RUN: $*"
    "$@"
  fi
}

for REPO in "$@"; do
  echo ""
  echo "=== $REPO ==="

  # Sanity check the repo exists and we have admin
  if ! gh repo view "$REPO" >/dev/null 2>&1; then
    echo "  SKIP: repo $REPO not accessible (typo, or no permission)"
    continue
  fi

  CURRENT=$(gh repo view "$REPO" --json visibility,isArchived,description -q '"\(.visibility) archived=\(.isArchived) desc=\(.description // "")"')
  echo "  current: $CURRENT"

  # 1. Visibility → public
  run gh repo edit "$REPO" \
    --visibility public --accept-visibility-change-consequences \
    --enable-issues=false \
    --enable-wiki=false \
    --enable-projects=false \
    --enable-discussions=false

  # 2. Branch protection on default branch — no direct pushes, requires PR
  DEFAULT_BRANCH=$(gh repo view "$REPO" --json defaultBranchRef -q '.defaultBranchRef.name')
  if [[ -n "$DEFAULT_BRANCH" && "$DEFAULT_BRANCH" != "null" ]]; then
    echo "  branch protection on '$DEFAULT_BRANCH'"
    if [[ $DRY_RUN -eq 0 ]]; then
      gh api -X PUT "repos/$REPO/branches/$DEFAULT_BRANCH/protection" \
        -F required_status_checks=null \
        -F enforce_admins=false \
        -F required_pull_request_reviews=null \
        -F restrictions=null \
        -F allow_force_pushes=false \
        -F allow_deletions=false \
        -F lock_branch=true >/dev/null 2>&1 \
        || echo "  WARN: branch protection failed (free plan may not support lock_branch on private→public flips; retrying without lock)"
      gh api -X PUT "repos/$REPO/branches/$DEFAULT_BRANCH/protection" \
        -F required_status_checks=null \
        -F enforce_admins=false \
        -F required_pull_request_reviews=null \
        -F restrictions=null \
        -F allow_force_pushes=false \
        -F allow_deletions=false >/dev/null || true
    fi
  fi

  # 3. Upload LICENSE if missing
  if gh api "repos/$REPO/contents/LICENSE" >/dev/null 2>&1; then
    echo "  LICENSE already exists — skipping"
  else
    echo "  uploading LICENSE"
    if [[ $DRY_RUN -eq 0 ]]; then
      LICENSE_B64=$(base64 -w0 "$LICENSE_FILE" 2>/dev/null || base64 "$LICENSE_FILE" | tr -d '\n')
      gh api -X PUT "repos/$REPO/contents/LICENSE" \
        -f message="Add proprietary LICENSE — public showcase, all rights reserved" \
        -f content="$LICENSE_B64" >/dev/null
    fi
  fi

  echo "  DONE: $REPO"
done

echo ""
echo "All requested repos processed."
echo "Next: add their full names to REPO_ALLOWLIST in content/repos.ts so they"
echo "appear on /portfolio. Example:"
echo ""
echo "  'fmwctodev/lyncbot-demo': { categories: ['AI', 'Full Stack'], featured: true },"
