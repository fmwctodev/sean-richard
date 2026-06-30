import type { Metadata } from 'next';
import Link from 'next/link';
import AvailabilityEyebrow from '@/components/editorial/AvailabilityEyebrow';
import FractionalOfferingSection from '@/components/fractional/FractionalOfferingSection';
import EngagementProcess from '@/components/fractional/EngagementProcess';
import FractionalFaq from '@/components/fractional/FractionalFaq';
import ClosingCta from '@/components/editorial/ClosingCta';
import SchemaMarkup, { JsonLd } from '@/components/seo/SchemaMarkup';
import { FRACTIONAL_OFFERINGS } from '@/content/fractional';
import { getFractionalServicesSchema, getFractionalFaqSchema } from '@/lib/schema';

export const metadata: Metadata = {
  title: 'Fractional CMO for Contractors | Sean Richard',
  description:
    'Fractional CMO services for contractors and home-service companies. Senior marketing leadership across paid media, CRM, funnel infrastructure, sales pipeline design, and lead-to-close automation — without hiring a full-time CMO.',
  alternates: { canonical: '/fractional-cmo-contractors' },
};

export default function FractionalCmoContractorsPage() {
  const cmo = FRACTIONAL_OFFERINGS.find((o) => o.id === 'cmo')!;

  return (
    <div>
      <SchemaMarkup
        path="/fractional-cmo-contractors"
        pageTitle="Fractional CMO for Contractors"
      />
      <JsonLd data={getFractionalServicesSchema('fractional-cmo')} />
      <JsonLd data={getFractionalFaqSchema('cmo', '/fractional-cmo-contractors')} />

      <section
        className="relative px-6"
        style={{ padding: 'clamp(96px, 14vh, 160px) 24px clamp(48px, 8vh, 96px)' }}
      >
        <div className="max-w-[1440px] mx-auto">
          <div className="mb-10">
            <AvailabilityEyebrow detail="Fractional CMO engagements" />
          </div>

          <h1
            className="font-sans font-extrabold text-ink-primary mb-8 max-w-[24ch]"
            style={{
              fontSize: 'clamp(44px, 7vw, 96px)',
              lineHeight: 0.96,
              letterSpacing: '-0.035em',
            }}
          >
            Fractional CMO for contractors ready to build a real{' '}
            <span
              className="text-accent"
              style={{ textShadow: '0 0 60px rgba(239, 68, 68, 0.45)' }}
            >
              growth system
            </span>
            .
          </h1>

          <p
            className="text-[clamp(17px,1.4vw,21px)] leading-[1.55] text-ink-primary font-medium mb-6"
            style={{ maxWidth: '60ch' }}
          >
            Sean Richard provides fractional CMO support for contractors and home-service
            companies &mdash; senior marketing leadership across paid media, CRM, funnel
            infrastructure, sales pipeline design, and lead-to-close automation, without
            the cost of a full-time CMO.
          </p>
          <p
            className="text-[clamp(17px,1.4vw,21px)] leading-[1.55] text-ink-secondary mb-12"
            style={{ maxWidth: '60ch' }}
          >
            I help contractors replace scattered campaigns and disconnected vendors with
            a unified growth system designed around real numbers, operational capacity,
            and long-term scalability.
          </p>
          <Link
            href="/contact"
            className="group inline-flex items-center gap-3 px-8 py-[18px] rounded-full bg-accent text-bg-primary font-semibold text-[15px] hover:bg-ink-primary transition-colors"
            style={{ boxShadow: '0 10px 40px -10px rgba(239, 68, 68, 0.6)' }}
          >
            Apply to work with Sean
            <span aria-hidden className="transition-transform group-hover:translate-x-1">
              →
            </span>
          </Link>
        </div>
      </section>

      <FractionalOfferingSection offering={cmo} />
      <EngagementProcess />
      <FractionalFaq audience="cmo" />
      <ClosingCta
        eyebrow="Apply to work with Sean"
        title="Qualified inquiries reviewed within 48 hours."
        accentWord="48 hours"
        primaryHref="/contact"
        primaryLabel="Apply to work with Sean"
        resumeLocation="portfolio_closing"
      />
    </div>
  );
}
