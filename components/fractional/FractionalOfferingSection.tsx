import Section from '@/components/editorial/Section';
import MonoLabel from '@/components/editorial/MonoLabel';
import type { FractionalOffering } from '@/content/fractional';

const NUMBER_BY_ID: Record<FractionalOffering['id'], string> = {
  cmo: '02',
  cto: '03',
};

export default function FractionalOfferingSection({
  offering,
}: {
  offering: FractionalOffering;
}) {
  return (
    <Section
      id={offering.anchor}
      number={NUMBER_BY_ID[offering.id]}
      eyebrow={offering.badge}
      title={offering.headline}
      className="scroll-mt-24"
    >
      <div className="space-y-6 text-[17px] leading-[1.7] text-ink-secondary mb-12 max-w-[60ch]">
        {offering.body.map((p, i) => (
          <p key={i}>{p}</p>
        ))}
      </div>

      <div className="grid md:grid-cols-2 gap-x-12 gap-y-10 max-w-[1100px]">
        <div>
          <div className="mb-4">
            <MonoLabel variant="tertiary" leading="rule">
              Best Fit
            </MonoLabel>
          </div>
          <p className="text-ink-secondary leading-[1.6] text-[16px] mb-10">
            {offering.bestFit}
          </p>

          <div className="mb-4">
            <MonoLabel variant="tertiary" leading="rule">
              Outcome
            </MonoLabel>
          </div>
          <p className="text-ink-secondary leading-[1.6] text-[16px]">
            {offering.outcome}
          </p>
        </div>

        <div>
          <div className="mb-4">
            <MonoLabel variant="tertiary" leading="rule">
              What This Can Include
            </MonoLabel>
          </div>
          <ul className="space-y-3">
            {offering.includes.map((item, i) => (
              <li
                key={i}
                className="flex items-start gap-3 text-ink-secondary leading-[1.5] text-[15px]"
              >
                <span className="text-accent shrink-0 font-mono text-[12px] mt-[2px]">
                  →
                </span>
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </Section>
  );
}
