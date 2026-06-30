import Link from 'next/link';
import MonoLabel from '@/components/editorial/MonoLabel';
import ClosingCta from '@/components/editorial/ClosingCta';
import SchemaMarkup, { JsonLd } from '@/components/seo/SchemaMarkup';
import { getArticleSchema, getWebPageSchema } from '@/lib/schema';
import type { Article } from '@/content/articles';

type ArticleLayoutProps = {
  article: Article;
  children: React.ReactNode;
};

export default function ArticleLayout({ article, children }: ArticleLayoutProps) {
  const path = `/articles/${article.slug}`;
  const publishedLabel = new Date(article.publishedDate).toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  });

  return (
    <article>
      <SchemaMarkup path={path} pageTitle={article.title} />
      <JsonLd
        data={getWebPageSchema({
          path,
          title: article.title,
          description: article.description,
          dateModified: article.updatedDate ?? article.publishedDate,
          primaryImageUrl: 'https://seanrichard.com/opengraph.png',
        })}
      />
      <JsonLd data={getArticleSchema(article)} />

      <header
        className="relative px-6"
        style={{ padding: 'clamp(96px, 14vh, 160px) 24px clamp(48px, 8vh, 96px)' }}
      >
        <div className="max-w-[800px] mx-auto">
          <div className="mb-6">
            <Link
              href="/articles"
              className="font-mono uppercase text-ink-tertiary hover:text-accent-light transition-colors"
              style={{ fontSize: '12px', letterSpacing: '0.08em' }}
            >
              &larr; All articles
            </Link>
          </div>
          <div className="mb-8">
            <MonoLabel variant="accent" leading="rule">
              {article.category}
            </MonoLabel>
          </div>
          <h1
            className="font-sans font-extrabold text-ink-primary mb-8"
            style={{
              fontSize: 'clamp(36px, 5.5vw, 72px)',
              lineHeight: 1.02,
              letterSpacing: '-0.03em',
            }}
          >
            {article.title}
          </h1>
          <p
            className="text-[clamp(17px,1.4vw,21px)] leading-[1.55] text-ink-secondary mb-8"
            style={{ maxWidth: '60ch' }}
          >
            {article.description}
          </p>
          <p
            className="font-mono uppercase text-ink-tertiary"
            style={{ fontSize: '12px', letterSpacing: '0.08em' }}
          >
            By Sean Richard &middot; {publishedLabel} &middot; {article.readingMinutes} min read
          </p>
        </div>
      </header>

      <section className="border-t border-line px-6 py-[clamp(64px,10vh,120px)]">
        <div className="max-w-[800px] mx-auto article-body">{children}</div>
      </section>

      <ClosingCta resumeLocation="portfolio_closing" />
    </article>
  );
}
