import Section from '@/components/editorial/Section';
import MonoLabel from '@/components/editorial/MonoLabel';
import { WHO_THIS_IS_FOR, WHO_THIS_IS_NOT_FOR } from '@/content/fractional';

export default function FitMatrix() {
  return (
    <Section
      number="05"
      eyebrow="Fit Check"
      title="Who this is for — and who it {{em}}isn't{{/em}}."
    >
      <div className="grid md:grid-cols-2 gap-px bg-line">
        <div className="bg-bg-primary p-10">
          <div className="mb-6">
            <MonoLabel variant="accent" leading="rule">
              Who This Is For
            </MonoLabel>
          </div>
          <ul className="space-y-3">
            {WHO_THIS_IS_FOR.map((item, i) => (
              <li
                key={i}
                className="text-ink-secondary leading-[1.55] text-[15px] flex gap-3"
              >
                <span className="text-accent shrink-0 font-mono text-[12px] mt-[2px]">
                  →
                </span>
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>

        <div className="bg-bg-elevated p-10">
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
    </Section>
  );
}
