import type { MetadataRoute } from 'next';
import { SITE } from '@/content/nav';

const SEARCH_BOTS = [
  'Googlebot',
  'Bingbot',
  'Slurp',
  'DuckDuckBot',
  'Baiduspider',
  'YandexBot',
  'Applebot',
];

const AI_BOTS = [
  'GPTBot',
  'ChatGPT-User',
  'OAI-SearchBot',
  'Google-Extended',
  'Applebot-Extended',
  'CCBot',
  'ClaudeBot',
  'Claude-Web',
  'anthropic-ai',
  'PerplexityBot',
  'Perplexity-User',
  'Bytespider',
  'cohere-ai',
  'DuckAssistBot',
  'Meta-ExternalAgent',
  'YouBot',
  'Diffbot',
];

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      ...SEARCH_BOTS.map((userAgent) => ({ userAgent, allow: '/' })),
      ...AI_BOTS.map((userAgent) => ({ userAgent, allow: '/' })),
      {
        userAgent: '*',
        allow: '/',
        disallow: ['/api/', '/_*', '/preview/'],
      },
    ],
    sitemap: `${SITE.url}/sitemap.xml`,
  };
}
