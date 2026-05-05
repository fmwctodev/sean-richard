import MonoLabel from '@/components/editorial/MonoLabel';
import type { Book, BookGroup } from '@/content/books';
import { BOOKS_BY_GROUP, BOOK_GROUP_TITLES } from '@/content/books';

function BookCard({ book }: { book: Book }) {
  return (
    <article className="group relative border border-line bg-bg-elevated/40 p-5 rounded-xl overflow-hidden hover:border-accent/40 transition-colors">
      <span
        aria-hidden
        className="absolute -top-12 -right-12 w-32 h-32 rounded-full opacity-0 group-hover:opacity-100 transition-opacity"
        style={{
          background:
            'radial-gradient(circle, rgba(239, 68, 68, 0.25) 0%, transparent 70%)',
          filter: 'blur(24px)',
        }}
      />
      <h4
        className="relative font-sans font-bold text-ink-primary leading-snug mb-1"
        style={{ fontSize: '16px', letterSpacing: '-0.005em' }}
      >
        {book.title}
      </h4>
      <p
        className="relative font-mono uppercase text-ink-tertiary mb-3"
        style={{ fontSize: '10px', letterSpacing: '0.06em' }}
      >
        {book.authors.join(' · ')}
      </p>
      <p className="relative text-[14px] text-ink-secondary leading-[1.6] italic">
        {book.commentary}
      </p>
    </article>
  );
}

function BookColumn({ group }: { group: BookGroup }) {
  return (
    <div>
      <div className="mb-5">
        <MonoLabel variant="accent" leading="rule">
          {BOOK_GROUP_TITLES[group]}
        </MonoLabel>
      </div>
      <div className="space-y-3">
        {BOOKS_BY_GROUP[group].map((book) => (
          <BookCard key={book.title} book={book} />
        ))}
      </div>
    </div>
  );
}

export default function OperatingInfluences() {
  return (
    <section className="border-t border-line px-6 py-[clamp(64px,10vh,120px)]">
      <div className="max-w-[1440px] mx-auto">
        <div className="max-w-3xl mb-12">
          <div className="mb-6">
            <MonoLabel variant="accent" leading="rule">
              Operating Influences
            </MonoLabel>
          </div>
          <h2
            className="font-sans font-extrabold text-ink-primary mb-6"
            style={{
              fontSize: 'clamp(32px, 4.5vw, 56px)',
              lineHeight: 1.02,
              letterSpacing: '-0.03em',
            }}
          >
            What I read to keep the systems{' '}
            <span className="text-accent">sharp</span>.
          </h2>
          <p className="text-[18px] leading-[1.6] text-ink-secondary">
            A working list from O&rsquo;Reilly Learning. These are the books actively
            shaping how I think about security, infrastructure, and the systems my
            companies run on. Not a credential wall — a snapshot of where my technical
            discipline is sourced.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12">
          <BookColumn group="security" />
          <BookColumn group="engineering" />
        </div>
      </div>
    </section>
  );
}
