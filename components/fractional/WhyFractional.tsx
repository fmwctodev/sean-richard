import MonoLabel from '@/components/editorial/MonoLabel';

export default function WhyFractional() {
  return (
    <section className="border-t border-line px-6 py-[clamp(64px,10vh,120px)]">
      <div className="max-w-[1440px] mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_2fr] gap-10 lg:gap-20">
          <div className="lg:sticky lg:top-32">
            <div className="mb-6">
              <MonoLabel variant="accent" leading="rule">
                Why Fractional
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
              Senior leadership, only when{' '}
              <span className="text-accent">you need it</span>.
            </h2>
          </div>

          <div className="space-y-6 text-[17px] leading-[1.7] text-ink-secondary max-w-[60ch]">
            <p>
              Most growing companies are stuck in one of two patterns: scattered vendors
              with no senior owner, or a leadership gap that&apos;s bleeding into
              operations. Hiring a full-time CMO or CTO is a $250K+ commitment before
              benefits — and most service businesses or growth-stage operators
              aren&apos;t ready for that.
            </p>
            <p>
              Fractional leadership fills the gap. You get senior strategy, system design,
              vendor oversight, and implementation accountability at a fraction of the
              cost — and only for as long as you need it.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
