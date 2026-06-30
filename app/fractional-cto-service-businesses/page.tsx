import type { Metadata } from 'next';
import Link from 'next/link';
import AvailabilityEyebrow from '@/components/editorial/AvailabilityEyebrow';
import FractionalOfferingSection from '@/components/fractional/FractionalOfferingSection';
import EngagementProcess from '@/components/fractional/EngagementProcess';
import FractionalFaq from '@/components/fractional/FractionalFaq';
import ClosingCta from '@/components/editorial/ClosingCta';
import SchemaMarkup, { JsonLd } from '@/components/seo/SchemaMarkup';
import { FRACTIONAL_OFFERINGS } from '@/content/fractional';
import {
  getFractionalServicesSchema,
  getFractionalFaqSchema,
  getWebPageSchema,
} from '@/lib/schema';

export const metadata: Metadata = {
  title: 'Fractional CTO for Service Businesses | Sean Richard',
  description:
    'Fractional CTO services for service-based companies, SaaS startups, agencies, and growth-stage operators. Technology roadmap, software stack review, automation architecture, AI implementation, vendor oversight, and cybersecurity-aware infrastructure — without the cost of a full-time CTO.',
  alternates: { canonical: '/fractional-cto-service-businesses' },
};

export default function FractionalCtoServiceBusinessesPage() {
  const cto = FRACTIONAL_OFFERINGS.find((o) => o.id === 'cto')!;

  return (
    <div>
      <SchemaMarkup
        path="/fractional-cto-service-businesses"
        pageTitle="Fractional CTO for Service Businesses"
      />
      <JsonLd
        data={getWebPageSchema({
          path: '/fractional-cto-service-businesses',
          title: 'Fractional CTO for Service Businesses | Sean Richard',
          description:
            'Fractional CTO services for service-based companies, SaaS startups, agencies, and growth-stage operators. Technology roadmap, software stack review, automation architecture, AI implementation, vendor oversight, and cybersecurity-aware infrastructure — without the cost of a full-time CTO.',
          dateModified: '2026-06-29',
          primaryImageUrl: 'https://seanrichard.com/opengraph.png',
        })}
      />
      <JsonLd data={getFractionalServicesSchema('fractional-cto')} />
      <JsonLd data={getFractionalFaqSchema('cto', '/fractional-cto-service-businesses')} />

      <section
        className="relative px-6"
        style={{ padding: 'clamp(96px, 14vh, 160px) 24px clamp(48px, 8vh, 96px)' }}
      >
        <div className="max-w-[1440px] mx-auto">
          <div className="mb-10">
            <AvailabilityEyebrow detail="Fractional CTO engagements" />
          </div>

          <h1
            className="font-sans font-extrabold text-ink-primary mb-8 max-w-[24ch]"
            style={{
              fontSize: 'clamp(44px, 7vw, 96px)',
              lineHeight: 0.96,
              letterSpacing: '-0.035em',
            }}
          >
            Fractional CTO for service businesses that need technology leadership without{' '}
            <span
              className="text-accent"
              style={{ textShadow: '0 0 60px rgba(239, 68, 68, 0.45)' }}
            >
              full-time overhead
            </span>
            .
          </h1>

          <p
            className="text-[clamp(17px,1.4vw,21px)] leading-[1.55] text-ink-primary font-medium mb-6"
            style={{ maxWidth: '60ch' }}
          >
            Sean Richard provides fractional CTO support for service-based companies,
            SaaS startups, agencies, and growth-stage operators &mdash; executive-level
            technology direction with hands-on IT operations and cybersecurity-aware
            infrastructure experience.
          </p>
          <p
            className="text-[clamp(17px,1.4vw,21px)] leading-[1.55] text-ink-secondary mb-12"
            style={{ maxWidth: '60ch' }}
          >
            I help companies make better technology decisions, design stronger
            infrastructure, evaluate software and vendors, plan automation, and build
            systems that support scale instead of slowing it down.
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

      <FractionalOfferingSection offering={cto} />
      <EngagementProcess />
      <FractionalFaq audience="cto" />
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
