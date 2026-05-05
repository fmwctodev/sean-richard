import Section from '@/components/editorial/Section';
import MonoLabel from '@/components/editorial/MonoLabel';
import type { Book, BookGroup } from '@/content/books';
import { BOOKS_BY_GROUP, BOOK_GROUP_TITLES } from '@/content/books';

function BookCard({ book }: { book: Book }) {
  return (
    <article className="border-t border-line py-5">
      <h4
        className="font-serif text-[17px] md:text-[18px] text-ink-primary leading-snug mb-1"
        style={{ letterSpacing: '-0.005em' }}
      >
        {book.title}
      </h4>
      <p
        className="font-mono uppercase text-ink-tertiary mb-3"
        style={{ fontSize: '10px', letterSpacing: '0.06em' }}
      >
        {book.authors.join(' · ')}
      </p>
      <p className="text-[14px] text-ink-secondary leading-[1.6] italic font-serif">
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
      <div>
        {BOOKS_BY_GROUP[group].map((book) => (
          <BookCard key={book.title} book={book} />
        ))}
      </div>
    </div>
  );
}

export default function OperatingInfluences() {
  return (
    <Section
      number="05"
      eyebrow="Operating Influences"
      title="What I read to keep the systems {{em}}sharp{{/em}}."
      intro="A working list from O&rsquo;Reilly Learning. These are the books actively shaping how I think about security, infrastructure, and the systems my companies run on. Not a credential wall — a snapshot of where my technical discipline is sourced."
    >
      <div className="grid md:grid-cols-2 gap-12">
        <BookColumn group="security" />
        <BookColumn group="engineering" />
      </div>
    </Section>
  );
}
