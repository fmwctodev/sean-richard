import MonoLabel from '@/components/editorial/MonoLabel';
import { FRACTIONAL_OUTCOMES } from '@/content/fractional';

export default function Outcomes() {
  return (
    <section className="border-t border-line px-6 py-[clamp(64px,10vh,120px)]">
      <div className="max-w-[1440px] mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_2fr] gap-10 lg:gap-20">
          <div className="lg:sticky lg:top-32">
            <div className="mb-6">
              <MonoLabel variant="accent" leading="rule">
                Outcomes
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
              What success <span className="text-accent">looks like</span>.
            </h2>
          </div>

          <p className="text-[18px] leading-[1.7] text-ink-secondary max-w-[60ch]">
            {FRACTIONAL_OUTCOMES}
          </p>
        </div>
      </div>
    </section>
  );
}
