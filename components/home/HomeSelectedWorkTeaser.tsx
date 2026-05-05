import Link from 'next/link';
import MonoLabel from '@/components/editorial/MonoLabel';
import { SELECTED_PRODUCTS } from '@/content/products';

export default function HomeSelectedWorkTeaser() {
  const teasers = SELECTED_PRODUCTS.slice(0, 3);
  return (
    <section className="border-t border-line px-6 py-[clamp(64px,10vh,120px)]">
      <div className="max-w-[1440px] mx-auto">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-12">
          <div>
            <div className="mb-6">
              <MonoLabel variant="accent" leading="rule">
                Selected Work
              </MonoLabel>
            </div>
            <h2
              className="font-sans font-extrabold text-ink-primary"
              style={{
                fontSize: 'clamp(32px, 4.5vw, 56px)',
                lineHeight: 1.02,
                letterSpacing: '-0.03em',
              }}
            >
              Built, shipped,{' '}
              <span className="text-accent">running in production</span>.
            </h2>
          </div>
          <Link
            href="/portfolio"
            className="group inline-flex items-center gap-2 text-accent hover:text-ink-primary transition-colors font-mono uppercase shrink-0"
            style={{ fontSize: '12px', letterSpacing: '0.12em' }}
          >
            View full portfolio
            <span aria-hidden className="transition-transform group-hover:translate-x-1">
              →
            </span>
          </Link>
        </div>

        <div className="grid md:grid-cols-3 gap-4">
          {teasers.map((product, i) => (
            <Link
              key={product.id}
              href="/portfolio"
              className="group relative border border-line bg-bg-elevated/40 p-7 rounded-2xl transition-all hover:border-accent/40 hover:bg-bg-elevated overflow-hidden"
            >
              <span
                aria-hidden
                className="absolute -bottom-12 -right-12 w-32 h-32 rounded-full opacity-0 group-hover:opacity-100 transition-opacity"
                style={{
                  background:
                    'radial-gradient(circle, rgba(239, 68, 68, 0.3) 0%, transparent 70%)',
                  filter: 'blur(20px)',
                }}
              />
              <div
                className="relative font-mono text-accent mb-8 flex items-center justify-between"
                style={{ fontSize: '13px', letterSpacing: '0.16em' }}
              >
                <span>/ {String(i + 1).padStart(2, '0')}</span>
                <span className="transition-transform group-hover:translate-x-1">→</span>
              </div>
              <h3
                className="relative font-sans font-bold text-ink-primary mb-3"
                style={{ fontSize: '24px', lineHeight: 1.1, letterSpacing: '-0.02em' }}
              >
                {product.name}
              </h3>
              <p className="relative text-ink-secondary text-[15px] leading-[1.6] mb-6">
                {product.tagline}
              </p>
              <div className="relative flex flex-wrap gap-1.5">
                {product.stack.slice(0, 4).map((tech) => (
                  <span
                    key={tech}
                    className="font-mono uppercase text-ink-tertiary border border-line px-2 py-[2px] rounded-full"
                    style={{ fontSize: '12px', letterSpacing: '0.06em' }}
                  >
                    {tech}
                  </span>
                ))}
                {product.stack.length > 4 && (
                  <span
                    className="font-mono text-ink-tertiary px-2"
                    style={{ fontSize: '12px' }}
                  >
                    +{product.stack.length - 4}
                  </span>
                )}
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
