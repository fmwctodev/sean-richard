import Section from '@/components/editorial/Section';

export default function WhyFractional() {
  return (
    <Section
      number="01"
      eyebrow="Why Fractional"
      title="Senior leadership, only when {{em}}you need it{{/em}}."
    >
      <div className="space-y-6 text-[17px] leading-[1.7] text-ink-secondary max-w-[60ch]">
        <p>
          Most growing companies are stuck in one of two patterns: scattered vendors with
          no senior owner, or a leadership gap that&apos;s bleeding into operations. Hiring
          a full-time CMO or CTO is a $250K+ commitment before benefits — and most service
          businesses or growth-stage operators aren&apos;t ready for that.
        </p>
        <p>
          Fractional leadership fills the gap. You get senior strategy, system design,
          vendor oversight, and implementation accountability at a fraction of the cost —
          and only for as long as you need it.
        </p>
      </div>
    </Section>
  );
}
