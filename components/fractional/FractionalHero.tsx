import Link from 'next/link';
import EditorialHeadline from '@/components/editorial/EditorialHeadline';
import AvailabilityEyebrow from '@/components/editorial/AvailabilityEyebrow';

export default function FractionalHero() {
  return (
    <section
      className="px-6"
      style={{ padding: 'clamp(96px, 14vh, 160px) 24px clamp(48px, 8vh, 96px)' }}
    >
      <div className="max-w-[1440px] mx-auto">
        <div className="mb-10">
          <AvailabilityEyebrow detail="Fractional engagements" />
        </div>
        <EditorialHeadline
          as="h1"
          size="hero"
          text="Fractional CMO and CTO support for operators who need {{em}}systems{{/em}}, not more noise."
          className="mb-9 max-w-[24ch]"
        />
        <p
          className="text-[clamp(17px,1.4vw,21px)] leading-[1.5] text-ink-secondary mb-12"
          style={{ maxWidth: '60ch' }}
        >
          I help contractors, service businesses, and growth-stage companies build the
          marketing, technology, automation, and operational infrastructure required to
          scale with more control.
        </p>
        <Link
          href="/contact"
          className="group inline-flex items-center gap-3 px-7 py-[18px] rounded-full bg-accent text-bg-primary font-medium text-[15px] hover:bg-ink-primary transition-colors"
        >
          Apply to Work With Sean
          <span aria-hidden className="transition-transform group-hover:translate-x-1">
            →
          </span>
        </Link>
      </div>
    </section>
  );
}
