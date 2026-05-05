import type { Book, BookGroup } from '@/content/books';
import { BOOKS_BY_GROUP, BOOK_GROUP_TITLES } from '@/content/books';

function BookCard({ book }: { book: Book }) {
  return (
    <article className="border border-white/10 hover:border-accent/30 transition-colors p-5">
      <h4 className="text-base font-semibold text-white leading-snug mb-1">
        {book.title}
      </h4>
      <p className="text-xs text-gray-500 mb-3">{book.authors.join(' · ')}</p>
      <p className="text-sm text-gray-300 leading-relaxed italic">{book.commentary}</p>
    </article>
  );
}

function BookColumn({ group }: { group: BookGroup }) {
  return (
    <div>
      <h3 className="text-sm font-semibold text-accent uppercase tracking-wider mb-5">
        {BOOK_GROUP_TITLES[group]}
      </h3>
      <div className="space-y-4">
        {BOOKS_BY_GROUP[group].map((book) => (
          <BookCard key={book.title} book={book} />
        ))}
      </div>
    </div>
  );
}

export default function OperatingInfluences() {
  return (
    <section className="border-t border-white/10 pt-16">
      <p className="text-sm text-gray-500 uppercase tracking-wider mb-3">
        ( Operating Influences )
      </p>
      <h2 className="text-3xl font-bold mb-4 text-gray-300">
        What I read to keep the systems sharp.
      </h2>
      <p className="text-lg text-gray-300 leading-relaxed mb-12 max-w-3xl">
        A working list from O&apos;Reilly Learning. These are the books actively shaping how
        I think about security, infrastructure, and the systems my companies run on. Not a
        credential wall — a snapshot of where my technical discipline is sourced.
      </p>

      <div className="grid md:grid-cols-2 gap-8">
        <BookColumn group="security" />
        <BookColumn group="engineering" />
      </div>
    </section>
  );
}
