import Link from 'next/link';
import MonoLabel from '@/components/editorial/MonoLabel';
import type { Article } from '@/content/articles';

export default function ArticleCard({ article }: { article: Article }) {
  const publishedLabel = new Date(article.publishedDate).toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'short',
    day: 'numeric',
  });

  return (
    <Link
      href={`/articles/${article.slug}`}
      className="group relative block border border-line bg-bg-elevated/40 p-7 rounded-2xl overflow-hidden hover:border-accent/40 transition-colors"
    >
      <span
        aria-hidden
        className="absolute -top-12 -right-12 w-40 h-40 rounded-full opacity-0 group-hover:opacity-100 transition-opacity"
        style={{
          background:
            'radial-gradient(circle, rgba(239, 68, 68, 0.3) 0%, transparent 70%)',
          filter: 'blur(28px)',
        }}
      />
      <div className="relative mb-5">
        <MonoLabel variant="accent" leading="rule">
          {article.category}
        </MonoLabel>
      </div>
      <h2
        className="relative font-sans font-bold text-ink-primary mb-3"
        style={{ fontSize: '24px', lineHeight: 1.15, letterSpacing: '-0.015em' }}
      >
        {article.title}
      </h2>
      <p className="relative text-ink-secondary leading-[1.6] text-[15px] mb-6">
        {article.excerpt}
      </p>
      <p
        className="relative font-mono uppercase text-ink-tertiary"
        style={{ fontSize: '12px', letterSpacing: '0.08em' }}
      >
        {publishedLabel} &middot; {article.readingMinutes} min read
      </p>
    </Link>
  );
}
