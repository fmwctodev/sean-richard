import type { Metadata } from 'next';
import MonoLabel from '@/components/editorial/MonoLabel';
import ArticleCard from '@/components/articles/ArticleCard';
import ClosingCta from '@/components/editorial/ClosingCta';
import SchemaMarkup, { JsonLd } from '@/components/seo/SchemaMarkup';
import { getWebPageSchema } from '@/lib/schema';
import { ARTICLES } from '@/content/articles';

export const metadata: Metadata = {
  title: 'Articles | Sean Richard — Fractional Leadership, AI Automation, Operations',
  description:
    'Articles by Sean Richard on fractional CMO and CTO leadership, AI automation, contractor SaaS, and operational systems for service-based businesses.',
  alternates: { canonical: '/articles' },
};

export default function ArticlesPage() {
  const sorted = [...ARTICLES].sort((a, b) =>
    b.publishedDate.localeCompare(a.publishedDate),
  );

  return (
    <div>
      <SchemaMarkup path="/articles" pageTitle="Articles" />
      <JsonLd
        data={getWebPageSchema({
          path: '/articles',
          title: 'Articles | Sean Richard',
          description:
            'Articles by Sean Richard on fractional CMO and CTO leadership, AI automation, contractor SaaS, and operational systems for service-based businesses.',
          dateModified: '2026-06-29',
          primaryImageUrl: 'https://seanrichard.com/opengraph.png',
        })}
      />

      <section
        className="relative px-6"
        style={{ padding: 'clamp(96px, 14vh, 160px) 24px clamp(48px, 8vh, 96px)' }}
      >
        <div className="max-w-[1440px] mx-auto">
          <div className="max-w-3xl mb-12">
            <div className="mb-8">
              <MonoLabel variant="accent" leading="rule">
                Articles
              </MonoLabel>
            </div>
            <h1
              className="font-sans font-extrabold text-ink-primary mb-6"
              style={{
                fontSize: 'clamp(40px, 6vw, 84px)',
                lineHeight: 0.98,
                letterSpacing: '-0.035em',
              }}
            >
              Writing on{' '}
              <span
                className="text-accent"
                style={{ textShadow: '0 0 60px rgba(239, 68, 68, 0.45)' }}
              >
                what actually works
              </span>{' '}
              in fractional leadership and operating systems.
            </h1>
            <p className="text-[clamp(17px,1.4vw,21px)] leading-[1.55] text-ink-secondary max-w-[60ch]">
              Short, specific pieces on fractional CMO and CTO work, AI automation
              inside service businesses, and the operational systems that make growth
              survive scale. Written from inside the work, not over it.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-4">
            {sorted.map((article) => (
              <ArticleCard key={article.slug} article={article} />
            ))}
          </div>
        </div>
      </section>

      <ClosingCta resumeLocation="portfolio_closing" />
    </div>
  );
}
