import MonoLabel from '@/components/editorial/MonoLabel';
import { BOOKS } from '@/content/books';

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

        <table className="w-full text-left border-collapse">
          <thead className="hidden md:table-header-group border-b border-line">
            <tr>
              <th
                className="font-mono uppercase text-ink-tertiary py-3 pr-6 align-bottom"
                style={{ fontSize: '11px', letterSpacing: '0.08em' }}
                scope="col"
              >
                Category
              </th>
              <th
                className="font-mono uppercase text-ink-tertiary py-3 pr-6 align-bottom"
                style={{ fontSize: '11px', letterSpacing: '0.08em' }}
                scope="col"
              >
                Title
              </th>
              <th
                className="font-mono uppercase text-ink-tertiary py-3 pr-6 align-bottom"
                style={{ fontSize: '11px', letterSpacing: '0.08em' }}
                scope="col"
              >
                Author
              </th>
              <th
                className="font-mono uppercase text-ink-tertiary py-3 align-bottom"
                style={{ fontSize: '11px', letterSpacing: '0.08em' }}
                scope="col"
              >
                Note
              </th>
            </tr>
          </thead>
          <tbody>
            {BOOKS.map((book) => (
              <tr
                key={book.title}
                className="block md:table-row border-b border-line py-5 md:py-0"
              >
                <td className="block md:table-cell md:align-top md:py-5 md:pr-6 md:whitespace-nowrap">
                  <span
                    className="font-mono uppercase text-accent"
                    style={{ fontSize: '11px', letterSpacing: '0.08em' }}
                  >
                    {book.category}
                  </span>
                </td>
                <td className="block md:table-cell md:align-top md:py-5 md:pr-6 mt-2 md:mt-0">
                  <span
                    className="font-sans font-bold text-ink-primary leading-snug"
                    style={{ fontSize: '16px', letterSpacing: '-0.005em' }}
                  >
                    {book.title}
                  </span>
                </td>
                <td className="block md:table-cell md:align-top md:py-5 md:pr-6 mt-1 md:mt-0">
                  <span
                    className="font-mono uppercase text-ink-tertiary"
                    style={{ fontSize: '12px', letterSpacing: '0.06em' }}
                  >
                    {book.authors.join(' · ')}
                  </span>
                </td>
                <td className="block md:table-cell md:align-top md:py-5 mt-3 md:mt-0">
                  <span className="text-[15px] text-ink-secondary leading-[1.6] italic">
                    {book.commentary}
                  </span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </section>
  );
}
