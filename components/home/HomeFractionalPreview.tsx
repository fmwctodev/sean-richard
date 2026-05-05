import Link from 'next/link';
import MonoLabel from '@/components/editorial/MonoLabel';

export default function HomeFractionalPreview() {
  return (
    <section className="border-t border-line px-6 py-[clamp(64px,10vh,120px)] relative">
      <div className="max-w-[1440px] mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_1fr] gap-10 lg:gap-20 items-center">
          <div>
            <div className="mb-6">
              <MonoLabel variant="accent" leading="rule">
                Fractional Leadership
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
              Executive-level strategy, connected to{' '}
              <span className="text-accent">implementation</span>.
            </h2>
            <p className="text-[18px] leading-[1.6] text-ink-secondary mb-10 max-w-[58ch]">
              Most companies don&apos;t need another passive advisor. They need someone
              who will diagnose the system, define the roadmap, lead execution, and create
              operational leverage. That&apos;s the work.
            </p>
            <Link
              href="/fractional-cmo-cto"
              className="group inline-flex items-center gap-3 px-7 py-[16px] rounded-full bg-accent text-bg-primary font-semibold text-[15px] hover:bg-ink-primary transition-colors"
              style={{
                boxShadow:
                  '0 10px 40px -10px rgba(239, 68, 68, 0.5)',
              }}
            >
              See how engagements work
              <span aria-hidden className="transition-transform group-hover:translate-x-1">
                →
              </span>
            </Link>
          </div>

          {/* Right: Two big offering cards (CMO / CTO) */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {[
              { tag: 'CMO', label: 'For contractors' },
              { tag: 'CTO', label: 'For service-based & SaaS' },
            ].map((item) => (
              <div
                key={item.tag}
                className="border border-line bg-bg-elevated/50 p-8 rounded-2xl"
              >
                <div
                  className="font-mono text-accent mb-6"
                  style={{ fontSize: '13px', letterSpacing: '0.18em' }}
                >
                  FRACTIONAL
                </div>
                <div
                  className="font-sans font-extrabold text-ink-primary mb-3"
                  style={{
                    fontSize: '64px',
                    lineHeight: 1,
                    letterSpacing: '-0.04em',
                  }}
                >
                  {item.tag}
                </div>
                <p className="text-ink-secondary text-[14px] leading-[1.5]">
                  {item.label}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
