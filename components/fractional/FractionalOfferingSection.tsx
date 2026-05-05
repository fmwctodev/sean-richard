import MonoLabel from '@/components/editorial/MonoLabel';
import type { FractionalOffering } from '@/content/fractional';

export default function FractionalOfferingSection({
  offering,
}: {
  offering: FractionalOffering;
}) {
  return (
    <section
      id={offering.anchor}
      className="border-t border-line px-6 py-[clamp(64px,10vh,120px)] scroll-mt-24"
    >
      <div className="max-w-[1440px] mx-auto">
        <div className="mb-12 max-w-3xl">
          <div className="mb-6">
            <MonoLabel variant="accent" leading="rule">
              {offering.badge}
            </MonoLabel>
          </div>
          <h2
            className="font-sans font-extrabold text-ink-primary mb-8"
            style={{
              fontSize: 'clamp(32px, 4.5vw, 56px)',
              lineHeight: 1.02,
              letterSpacing: '-0.03em',
            }}
          >
            {offering.headline.includes('contractors') ? (
              <>
                Fractional CMO for contractors ready to build a real{' '}
                <span className="text-accent">growth system</span>.
              </>
            ) : (
              <>
                Fractional CTO for companies that need technology leadership without{' '}
                <span className="text-accent">full-time overhead</span>.
              </>
            )}
          </h2>
          <div className="space-y-4 text-[17px] leading-[1.7] text-ink-secondary">
            {offering.body.map((p, i) => (
              <p key={i}>{p}</p>
            ))}
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-px bg-line border border-line rounded-2xl overflow-hidden">
          <div className="bg-bg-elevated/40 p-8">
            <div className="mb-4">
              <MonoLabel variant="tertiary" leading="rule">
                Best Fit
              </MonoLabel>
            </div>
            <p className="text-ink-secondary leading-[1.6] text-[15px] mb-10">
              {offering.bestFit}
            </p>

            <div className="mb-4">
              <MonoLabel variant="accent" leading="rule">
                Outcome
              </MonoLabel>
            </div>
            <p className="text-ink-primary leading-[1.6] text-[15px]">
              {offering.outcome}
            </p>
          </div>

          <div className="bg-bg-primary p-8">
            <div className="mb-5">
              <MonoLabel variant="tertiary" leading="rule">
                What This Can Include
              </MonoLabel>
            </div>
            <ul className="space-y-3">
              {offering.includes.map((item, i) => (
                <li
                  key={i}
                  className="flex items-start gap-3 text-ink-secondary leading-[1.5] text-[14px]"
                >
                  <span className="text-accent shrink-0 font-mono text-[11px] mt-[2px]">
                    →
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
