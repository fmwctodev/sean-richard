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
  'cohere-ai',
  'DuckAssistBot',
  'Meta-ExternalAgent',
  'YouBot',
  'Diffbot',
];

/**
 * /robots.txt — served via a Route Handler instead of the MetadataRoute.Robots
 * API so we can emit non-standard comment directives (notably the llms.txt
 * pointer for AI crawlers that don't probe /llms.txt by convention).
 */
export function GET() {
  const lines: string[] = [];

  lines.push('# Search engines');
  for (const bot of SEARCH_BOTS) {
    lines.push(`User-agent: ${bot}`);
    lines.push('Allow: /');
    lines.push('');
  }

  lines.push('# AI crawlers (explicit allowlist for authority + citation)');
  for (const bot of AI_BOTS) {
    lines.push(`User-agent: ${bot}`);
    lines.push('Allow: /');
    lines.push('');
  }

  lines.push('# Default');
  lines.push('User-agent: *');
  lines.push('Allow: /');
  lines.push('Disallow: /api/');
  lines.push('Disallow: /_*');
  lines.push('Disallow: /preview/');
  lines.push('');

  lines.push(`Sitemap: ${SITE.url}/sitemap.xml`);
  lines.push('');

  // Informational pointer for AI crawlers (not a formal robots.txt directive)
  lines.push(`# LLMs: ${SITE.url}/llms.txt`);

  return new Response(lines.join('\n'), {
    headers: {
      'Content-Type': 'text/plain; charset=utf-8',
      'Cache-Control': 'public, max-age=3600, must-revalidate',
    },
  });
}
