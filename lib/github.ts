import type { RepoCategory } from '@/content/repos';

export type RepoSummary = {
  full_name: string;
  name: string;
  displayName?: string;
  description: string | null;
  html_url: string;
  homepage: string | null;
  liveUrl?: string;
  language: string | null;
  stargazers_count: number;
  pushed_at: string;
  categories: RepoCategory[];
  featured: boolean;
};

export type ReposPayload = {
  generatedAt: string;
  repos: RepoSummary[];
};
