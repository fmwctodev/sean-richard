import MonoLabel from '@/components/editorial/MonoLabel';
import { WHO_THIS_IS_FOR, WHO_THIS_IS_NOT_FOR } from '@/content/fractional';

export default function FitMatrix() {
  return (
    <section className="border-t border-line px-6 py-[clamp(64px,10vh,120px)]">
      <div className="max-w-[1440px] mx-auto">
        <div className="max-w-3xl mb-12">
          <div className="mb-6">
            <MonoLabel variant="accent" leading="rule">
              Fit Check
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
            Who this is for — and{' '}
            <span className="text-accent">who it isn&apos;t</span>.
          </h2>
        </div>

        <div className="grid md:grid-cols-2 gap-px bg-line border border-line rounded-2xl overflow-hidden">
          <div className="relative bg-bg-elevated/40 p-8 overflow-hidden">
            <span
              aria-hidden
              className="absolute -top-12 -left-12 w-40 h-40 rounded-full"
              style={{
                background:
                  'radial-gradient(circle, rgba(239, 68, 68, 0.2) 0%, transparent 70%)',
                filter: 'blur(32px)',
              }}
            />
            <div className="relative mb-6">
              <MonoLabel variant="accent" leading="rule">
                Who This Is For
              </MonoLabel>
            </div>
            <ul className="relative space-y-3">
              {WHO_THIS_IS_FOR.map((item, i) => (
                <li
                  key={i}
                  className="text-ink-primary leading-[1.55] text-[15px] flex gap-3"
                >
                  <span className="text-accent shrink-0 font-mono text-[12px] mt-[2px]">
                    →
                  </span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="bg-bg-elevated/20 p-8">
            <div className="mb-6">
              <MonoLabel variant="tertiary" leading="rule">
                Who This Is Not For
              </MonoLabel>
            </div>
            <ul className="space-y-3">
              {WHO_THIS_IS_NOT_FOR.map((item, i) => (
                <li
                  key={i}
                  className="text-ink-tertiary leading-[1.55] text-[15px] flex gap-3"
                >
                  <span className="text-ink-tertiary shrink-0 font-mono text-[12px] mt-[2px]">
                    ×
                  </span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
