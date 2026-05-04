#!/usr/bin/env node
/**
 * Build-time GitHub repo fetcher.
 *
 * Reads the allowlist from `content/repos.ts`, hits the GitHub REST API for
 * every handle in `GITHUB_HANDLES`, dedupes, filters to allowlisted repos,
 * and writes a minimal JSON shape to `data/repos.generated.json`.
 *
 * On API failure, falls back to the cached JSON if it exists. Only fails the
 * build when there's no cached file at all.
 */
import { readFile, writeFile, mkdir } from 'node:fs/promises';
import { existsSync } from 'node:fs';
import { fileURLToPath } from 'node:url';
import path from 'node:path';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const ROOT = path.resolve(__dirname, '..');
const ALLOWLIST_PATH = path.join(ROOT, 'content', 'repos.ts');
const OUT_DIR = path.join(ROOT, 'data');
const OUT_PATH = path.join(OUT_DIR, 'repos.generated.json');

const TOKEN = process.env.GITHUB_TOKEN;

// Tiny TS-as-text parser. We don't run a TS compiler at prebuild time; we just
// scrape the literals out of `content/repos.ts`. This keeps the build fast and
// dependency-free. If the format changes, update this regex.
async function readAllowlist() {
  const src = await readFile(ALLOWLIST_PATH, 'utf8');

  const handlesMatch = src.match(
    /GITHUB_HANDLES\s*=\s*\[([^\]]+)\]/,
  );
  if (!handlesMatch) {
    throw new Error('Could not parse GITHUB_HANDLES from content/repos.ts');
  }
  const handles = [...handlesMatch[1].matchAll(/['"]([^'"]+)['"]/g)].map(
    (m) => m[1],
  );

  // Pull out the REPO_ALLOWLIST object body — everything between the opening
  // brace after `REPO_ALLOWLIST` and the closing brace at column 0 followed by
  // a semicolon. We then walk it line-by-line to collect entries.
  const body = src.match(/REPO_ALLOWLIST[^=]*=\s*\{([\s\S]*?)\n\};/);
  if (!body) {
    return { handles, allowlist: {} };
  }

  const allowlist = {};
  // Match only uncommented entries: skip lines starting with // (after optional whitespace).
  const entryRegex =
    /^\s*['"]([^'"]+)['"]\s*:\s*\{([^}]*)\}/gm;
  for (const m of body[1].matchAll(entryRegex)) {
    const key = m[1];
    const props = m[2];
    if (/^\s*\/\//.test(m[0])) continue;

    const categoriesMatch = props.match(/categories\s*:\s*\[([^\]]*)\]/);
    const categories = categoriesMatch
      ? [...categoriesMatch[1].matchAll(/['"]([^'"]+)['"]/g)].map((x) => x[1])
      : [];
    const featuredMatch = props.match(/featured\s*:\s*(true|false)/);
    const displayNameMatch = props.match(/displayName\s*:\s*['"]([^'"]+)['"]/);
    const liveUrlMatch = props.match(/liveUrl\s*:\s*['"]([^'"]+)['"]/);

    allowlist[key] = {
      categories,
      featured: featuredMatch ? featuredMatch[1] === 'true' : false,
      ...(displayNameMatch ? { displayName: displayNameMatch[1] } : {}),
      ...(liveUrlMatch ? { liveUrl: liveUrlMatch[1] } : {}),
    };
  }
  return { handles, allowlist };
}

async function fetchHandle(handle) {
  const url = `https://api.github.com/users/${handle}/repos?type=owner&sort=updated&per_page=100`;
  const headers = {
    Accept: 'application/vnd.github+json',
    'User-Agent': 'seanrichard-portfolio-build',
  };
  if (TOKEN) headers.Authorization = `Bearer ${TOKEN}`;

  const res = await fetch(url, { headers });
  if (!res.ok) {
    if (res.status === 403) {
      const reset = res.headers.get('x-ratelimit-reset');
      const resetAt = reset ? new Date(Number(reset) * 1000).toISOString() : 'unknown';
      throw new Error(
        `GitHub API rate-limited for handle '${handle}'. Reset at ${resetAt}.`,
      );
    }
    throw new Error(
      `GitHub API ${res.status} for handle '${handle}': ${await res.text()}`,
    );
  }
  return res.json();
}

async function loadCache() {
  if (!existsSync(OUT_PATH)) return null;
  try {
    return JSON.parse(await readFile(OUT_PATH, 'utf8'));
  } catch {
    return null;
  }
}

async function main() {
  const { handles, allowlist } = await readAllowlist();
  const allowlistKeys = Object.keys(allowlist);

  console.log(`[fetch-github-repos] handles: ${handles.join(', ')}`);
  console.log(`[fetch-github-repos] allowlisted repos: ${allowlistKeys.length}`);

  if (allowlistKeys.length === 0) {
    console.warn(
      '[fetch-github-repos] No repos in REPO_ALLOWLIST — writing empty payload. Add entries to content/repos.ts to surface repos on /portfolio.',
    );
    await mkdir(OUT_DIR, { recursive: true });
    await writeFile(
      OUT_PATH,
      JSON.stringify(
        { generatedAt: new Date().toISOString(), repos: [] },
        null,
        2,
      ),
    );
    return;
  }

  let raw;
  try {
    const results = await Promise.all(handles.map(fetchHandle));
    raw = results.flat();
  } catch (err) {
    console.error(`[fetch-github-repos] ${err.message}`);
    const cache = await loadCache();
    if (cache) {
      console.warn(
        '[fetch-github-repos] Falling back to cached repos.generated.json',
      );
      return;
    }
    console.error('[fetch-github-repos] No cache available. Failing build.');
    process.exit(1);
  }

  const seen = new Set();
  const filtered = [];
  for (const repo of raw) {
    if (seen.has(repo.full_name)) continue;
    seen.add(repo.full_name);
    const entry = allowlist[repo.full_name];
    if (!entry) continue;

    filtered.push({
      full_name: repo.full_name,
      name: repo.name,
      ...(entry.displayName ? { displayName: entry.displayName } : {}),
      description: repo.description,
      html_url: repo.html_url,
      homepage: repo.homepage,
      ...(entry.liveUrl ? { liveUrl: entry.liveUrl } : {}),
      language: repo.language,
      stargazers_count: repo.stargazers_count ?? 0,
      pushed_at: repo.pushed_at,
      categories: entry.categories,
      featured: entry.featured ?? false,
    });
  }

  filtered.sort((a, b) => {
    if (a.featured !== b.featured) return a.featured ? -1 : 1;
    return new Date(b.pushed_at).getTime() - new Date(a.pushed_at).getTime();
  });

  const payload = {
    generatedAt: new Date().toISOString(),
    repos: filtered,
  };

  await mkdir(OUT_DIR, { recursive: true });
  await writeFile(OUT_PATH, JSON.stringify(payload, null, 2));
  console.log(
    `[fetch-github-repos] Wrote ${filtered.length} repos to ${path.relative(ROOT, OUT_PATH)}`,
  );
}

main().catch((err) => {
  console.error('[fetch-github-repos] Unexpected failure:', err);
  process.exit(1);
});
