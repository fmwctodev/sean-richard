import Link from 'next/link';
import AvailabilityEyebrow from '@/components/editorial/AvailabilityEyebrow';

export default function FractionalHero() {
  return (
    <section
      className="relative px-6"
      style={{ padding: 'clamp(96px, 14vh, 160px) 24px clamp(48px, 8vh, 96px)' }}
    >
      <div className="max-w-[1440px] mx-auto">
        <div className="mb-10">
          <AvailabilityEyebrow detail="Fractional engagements" />
        </div>

        <h1
          className="font-sans font-extrabold text-ink-primary mb-8 max-w-[24ch]"
          style={{
            fontSize: 'clamp(44px, 7vw, 96px)',
            lineHeight: 0.96,
            letterSpacing: '-0.035em',
          }}
        >
          Fractional CMO and CTO support for operators who need{' '}
          <span
            className="text-accent"
            style={{ textShadow: '0 0 60px rgba(239, 68, 68, 0.45)' }}
          >
            systems
          </span>
          , not more noise.
        </h1>

        <p
          className="text-[clamp(17px,1.4vw,21px)] leading-[1.55] text-ink-primary font-medium mb-6"
          style={{ maxWidth: '60ch' }}
        >
          Sean Richard provides fractional CMO and CTO support for contractors,
          service-based companies, and growth-stage operators &mdash; senior marketing
          and technology leadership without full-time overhead.
        </p>
        <p
          className="text-[clamp(17px,1.4vw,21px)] leading-[1.55] text-ink-secondary mb-12"
          style={{ maxWidth: '60ch' }}
        >
          I help contractors, service businesses, and growth-stage companies build the
          marketing, technology, automation, and operational infrastructure required to
          scale with more control.
        </p>
        <Link
          href="/contact"
          className="group inline-flex items-center gap-3 px-8 py-[18px] rounded-full bg-accent text-bg-primary font-semibold text-[15px] hover:bg-ink-primary transition-colors"
          style={{
            boxShadow: '0 10px 40px -10px rgba(239, 68, 68, 0.6)',
          }}
        >
          Apply to work with Sean
          <span aria-hidden className="transition-transform group-hover:translate-x-1">
            →
          </span>
        </Link>
      </div>
    </section>
  );
}
