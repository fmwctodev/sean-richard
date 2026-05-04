export const GITHUB_HANDLES = ['fmwctodev', 'Autom8ion-Lab'] as const;
export type GitHubHandle = (typeof GITHUB_HANDLES)[number];

export type RepoCategory = 'AI' | 'Full Stack' | 'Cyber' | 'IT';

export type AllowlistEntry = {
  categories: RepoCategory[];
  featured?: boolean;
  displayName?: string;
  liveUrl?: string;
};

/**
 * Allowlist of repos to surface on /portfolio.
 *
 * Keys are full repo names: `<owner>/<repo>`. Repos NOT in this map are excluded
 * from the build output. Add new entries here to make repos visible — the
 * `prebuild` script (`scripts/fetch-github-repos.mjs`) reads this file at build
 * time, hits the GitHub API for both `fmwctodev` and `Autom8ion-Lab`, and writes
 * the filtered shape to `data/repos.generated.json`.
 *
 * Tags are manual because GitHub's `topics` field rarely matches portfolio
 * framing (e.g. a Next.js + Supabase build can be both AI and Full Stack here).
 */
export const REPO_ALLOWLIST: Record<string, AllowlistEntry> = {
  // Populate during launch — examples:
  // 'Autom8ion-Lab/lyncbot-core': { categories: ['AI', 'Full Stack'], featured: true },
  // 'fmwctodev/forensics-lab':    { categories: ['Cyber'] },
};

export const ALL_CATEGORIES: RepoCategory[] = ['AI', 'Full Stack', 'Cyber', 'IT'];
