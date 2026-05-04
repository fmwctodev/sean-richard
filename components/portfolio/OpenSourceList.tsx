'use client';

import { useMemo, useState } from 'react';
import { Github, ExternalLink, Star } from 'lucide-react';
import { ALL_CATEGORIES, type RepoCategory } from '@/content/repos';
import type { RepoSummary } from '@/lib/github';
import { cn } from '@/lib/utils';

type Filter = 'All' | RepoCategory;
const FILTERS: Filter[] = ['All', ...ALL_CATEGORIES];

const LANGUAGE_COLORS: Record<string, string> = {
  TypeScript: '#3178c6',
  JavaScript: '#f1e05a',
  Python: '#3572A5',
  Go: '#00ADD8',
  Rust: '#dea584',
  Solidity: '#AA6746',
  HTML: '#e34c26',
  CSS: '#563d7c',
  Shell: '#89e051',
  Swift: '#ffac45',
};

function timeAgo(iso: string): string {
  const seconds = Math.floor((Date.now() - new Date(iso).getTime()) / 1000);
  const intervals: Array<[number, string]> = [
    [31536000, 'year'],
    [2592000, 'month'],
    [86400, 'day'],
    [3600, 'hour'],
    [60, 'minute'],
  ];
  for (const [interval, label] of intervals) {
    const value = Math.floor(seconds / interval);
    if (value >= 1) return `${value} ${label}${value > 1 ? 's' : ''} ago`;
  }
  return 'just now';
}

export default function OpenSourceList({ repos }: { repos: RepoSummary[] }) {
  const [activeFilter, setActiveFilter] = useState<Filter>('All');

  const filtered = useMemo(() => {
    if (activeFilter === 'All') return repos;
    return repos.filter((r) => r.categories.includes(activeFilter));
  }, [repos, activeFilter]);

  return (
    <section className="px-6 py-20 border-t border-white/10">
      <div className="max-w-6xl mx-auto">
        <div className="mb-10">
          <p className="text-sm text-gray-500 uppercase tracking-wider mb-3">
            ( Open Source )
          </p>
          <h2 className="text-3xl md:text-5xl font-bold">Public repositories</h2>
          <p className="text-gray-400 mt-4 max-w-2xl">
            Auto-pulled from GitHub at build time. Filter by category — AI, full-stack,
            cyber, or IT.
          </p>
        </div>

        <div className="flex flex-wrap gap-2 mb-8">
          {FILTERS.map((f) => (
            <button
              key={f}
              onClick={() => setActiveFilter(f)}
              className={cn(
                'px-4 py-2 text-sm font-medium border transition-colors rounded-full',
                activeFilter === f
                  ? 'bg-accent text-white border-accent'
                  : 'border-white/15 text-gray-300 hover:border-white/40',
              )}
            >
              {f}
            </button>
          ))}
        </div>

        {filtered.length === 0 ? (
          <div className="border border-white/10 p-10 text-center">
            <p className="text-gray-400">
              {repos.length === 0
                ? 'Repositories will appear here once the GitHub fetch script populates the allowlist. Add entries in content/repos.ts.'
                : `No public repos in this category yet — this is where ${activeFilter.toLowerCase()} work will land.`}
            </p>
          </div>
        ) : (
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
            {filtered.map((repo) => (
              <a
                key={repo.full_name}
                href={repo.html_url}
                target="_blank"
                rel="noopener noreferrer"
                className="group border border-white/10 hover:border-accent/40 p-6 flex flex-col transition-colors"
              >
                <div className="flex items-start justify-between mb-3">
                  <div className="flex items-center gap-2 text-gray-300 group-hover:text-white">
                    <Github size={18} />
                    <span className="font-semibold">
                      {repo.displayName ?? repo.name}
                    </span>
                  </div>
                  <ExternalLink
                    size={14}
                    className="text-gray-500 group-hover:text-accent shrink-0"
                  />
                </div>

                <p className="text-sm text-gray-400 leading-relaxed flex-1 mb-4 line-clamp-3">
                  {repo.description ?? 'No description provided.'}
                </p>

                <div className="flex flex-wrap items-center gap-3 text-xs text-gray-500">
                  {repo.language && (
                    <span className="inline-flex items-center gap-1.5">
                      <span
                        className="w-2.5 h-2.5 rounded-full"
                        style={{
                          backgroundColor:
                            LANGUAGE_COLORS[repo.language] ?? '#888',
                        }}
                      />
                      {repo.language}
                    </span>
                  )}
                  {repo.stargazers_count > 0 && (
                    <span className="inline-flex items-center gap-1">
                      <Star size={12} />
                      {repo.stargazers_count}
                    </span>
                  )}
                  <span>Updated {timeAgo(repo.pushed_at)}</span>
                </div>

                <div className="flex flex-wrap gap-1.5 mt-3">
                  {repo.categories.map((c) => (
                    <span
                      key={c}
                      className="text-[10px] uppercase tracking-wider text-gray-500 border border-white/10 px-2 py-0.5 rounded"
                    >
                      {c}
                    </span>
                  ))}
                </div>
              </a>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
