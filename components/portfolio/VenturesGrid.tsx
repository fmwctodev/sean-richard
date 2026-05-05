import { ExternalLink, ArrowRight } from 'lucide-react';
import Link from 'next/link';
import MonoLabel from '@/components/editorial/MonoLabel';
import { PORTFOLIO_VENTURES } from '@/content/ventures';

export default function VenturesGrid() {
  return (
    <section className="border-t border-line px-6 py-[clamp(64px,10vh,120px)]">
      <div className="max-w-[1440px] mx-auto">
        <div className="max-w-3xl mb-12">
          <div className="mb-6">
            <MonoLabel variant="accent" leading="rule">
              Ventures
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
            Where the work <span className="text-accent">lives</span>.
          </h2>
          <p className="text-[18px] leading-[1.6] text-ink-secondary">
            The portfolio of operating companies and the holding entity I run.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-4">
          {PORTFOLIO_VENTURES.map((v, i) => {
            const cardClass =
              'group relative border border-line bg-bg-elevated/40 p-7 rounded-2xl flex flex-col overflow-hidden hover:border-accent/40 hover:bg-bg-elevated transition-all';
            const cardBody = (
              <>
                <span
                  aria-hidden
                  className="absolute -bottom-12 -right-12 w-40 h-40 rounded-full opacity-0 group-hover:opacity-100 transition-opacity"
                  style={{
                    background:
                      'radial-gradient(circle, rgba(239, 68, 68, 0.3) 0%, transparent 70%)',
                    filter: 'blur(28px)',
                  }}
                />

                <div
                  className="relative font-mono mb-6 flex items-center justify-between"
                  style={{ fontSize: '13px', letterSpacing: '0.16em' }}
                >
                  <span className="text-accent">/ {String(i + 1).padStart(2, '0')}</span>
                  <span className="text-ink-tertiary uppercase">{v.category}</span>
                </div>

                <h3
                  className="relative font-sans font-bold text-ink-primary mb-3 inline-flex items-center gap-2"
                  style={{
                    fontSize: 'clamp(22px, 2.4vw, 28px)',
                    lineHeight: 1.05,
                    letterSpacing: '-0.02em',
                  }}
                >
                  {v.name.replace(/\s+(Inc|LLC)\.?$/, '')}
                  {v.internalPath ? (
                    <ArrowRight
                      size={16}
                      className="text-ink-tertiary group-hover:text-accent transition-colors"
                    />
                  ) : (
                    v.url && (
                      <ExternalLink
                        size={16}
                        className="text-ink-tertiary group-hover:text-accent transition-colors"
                      />
                    )
                  )}
                </h3>

                <p className="relative text-ink-secondary text-[15px] leading-[1.6] mb-4">
                  {v.shortPitch}
                </p>

                {v.internalPath && v.url && (
                  <p
                    className="relative font-mono text-ink-tertiary mt-auto"
                    style={{ fontSize: '11px', letterSpacing: '0.14em' }}
                  >
                    Live product →{' '}
                    <span className="text-accent">{v.url.replace(/^https?:\/\//, '')}</span>
                  </p>
                )}
              </>
            );

            if (v.internalPath) {
              return (
                <Link key={v.id} href={v.internalPath} className={cardClass}>
                  {cardBody}
                </Link>
              );
            }
            if (v.url) {
              return (
                <a
                  key={v.id}
                  href={v.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={cardClass}
                >
                  {cardBody}
                </a>
              );
            }
            return (
              <div key={v.id} className={cardClass}>
                {cardBody}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
