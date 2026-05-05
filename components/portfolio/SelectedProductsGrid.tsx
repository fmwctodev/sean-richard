import { ExternalLink } from 'lucide-react';
import MonoLabel from '@/components/editorial/MonoLabel';
import { SELECTED_PRODUCTS } from '@/content/products';

export default function SelectedProductsGrid() {
  return (
    <section className="border-t border-line px-6 py-[clamp(64px,10vh,120px)]">
      <div className="max-w-[1440px] mx-auto">
        <div className="max-w-3xl mb-12">
          <div className="mb-6">
            <MonoLabel variant="accent" leading="rule">
              Selected Products · 0→1, Built &amp; Shipped
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
            Production work, owned{' '}
            <span className="text-accent">end-to-end</span>.
          </h2>
          <p className="text-[18px] leading-[1.6] text-ink-secondary">
            UI, data layer, integrations, deployment, and iteration with real users.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-4">
          {SELECTED_PRODUCTS.map((product, i) => (
            <article
              key={product.id}
              className="group relative border border-line bg-bg-elevated/40 p-8 rounded-2xl flex flex-col overflow-hidden hover:border-accent/40 hover:bg-bg-elevated transition-all"
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

              <div
                className="relative font-mono text-accent mb-6 flex items-center justify-between"
                style={{ fontSize: '13px', letterSpacing: '0.16em' }}
              >
                <span>/ {String(i + 1).padStart(2, '0')}</span>
                <span className="text-ink-tertiary">
                  {product.stack[0]}
                </span>
              </div>

              <h3
                className="relative font-sans font-bold text-ink-primary mb-3"
                style={{
                  fontSize: 'clamp(24px, 2.6vw, 32px)',
                  lineHeight: 1.05,
                  letterSpacing: '-0.025em',
                }}
              >
                {product.name}
              </h3>
              <p className="relative text-ink-secondary text-[15px] leading-[1.55] mb-6">
                {product.tagline}
              </p>

              <div className="relative flex flex-wrap gap-1.5 mb-6">
                {product.stack.map((tech) => (
                  <span
                    key={tech}
                    className="font-mono uppercase text-ink-tertiary border border-line px-2 py-[3px] rounded-full"
                    style={{ fontSize: '12px', letterSpacing: '0.06em' }}
                  >
                    {tech}
                  </span>
                ))}
              </div>

              <ul className="relative space-y-3 mb-6 flex-1">
                {product.bullets.map((bullet, idx) => (
                  <li
                    key={idx}
                    className="text-ink-secondary text-[15px] leading-[1.55] flex gap-3"
                  >
                    <span className="text-accent shrink-0 font-mono text-[12px] mt-[2px]">
                      →
                    </span>
                    <span>{bullet}</span>
                  </li>
                ))}
              </ul>

              {product.liveLinks && product.liveLinks.length > 0 && (
                <div className="relative flex flex-wrap gap-x-5 gap-y-2 pt-5 border-t border-line">
                  {product.liveLinks.map((link) => (
                    <a
                      key={link.url}
                      href={link.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 font-mono uppercase text-accent hover:text-ink-primary transition-colors"
                      style={{ fontSize: '13px', letterSpacing: '0.06em' }}
                    >
                      <ExternalLink size={13} />
                      <span>{link.label}</span>
                    </a>
                  ))}
                </div>
              )}
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
