import Section from '@/components/editorial/Section';
import { FRACTIONAL_OUTCOMES } from '@/content/fractional';

export default function Outcomes() {
  return (
    <Section
      number="06"
      eyebrow="Outcomes"
      title="What success {{em}}looks like{{/em}}."
    >
      <p className="text-[18px] leading-[1.7] text-ink-secondary max-w-[60ch]">
        {FRACTIONAL_OUTCOMES}
      </p>
    </Section>
  );
}
