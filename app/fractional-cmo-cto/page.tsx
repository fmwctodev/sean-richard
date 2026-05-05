import type { Metadata } from 'next';
import FractionalHero from '@/components/fractional/FractionalHero';
import WhyFractional from '@/components/fractional/WhyFractional';
import FractionalOfferingSection from '@/components/fractional/FractionalOfferingSection';
import EngagementProcess from '@/components/fractional/EngagementProcess';
import FitMatrix from '@/components/fractional/FitMatrix';
import Outcomes from '@/components/fractional/Outcomes';
import ClosingCta from '@/components/editorial/ClosingCta';
import SchemaMarkup, { JsonLd } from '@/components/seo/SchemaMarkup';
import { FRACTIONAL_OFFERINGS } from '@/content/fractional';
import { getFractionalServicesSchema } from '@/lib/schema';

export const metadata: Metadata = {
  title: 'Fractional CMO & CTO Services | Sean Richard',
  description:
    'Fractional CMO and CTO support for contractors, service businesses, and growth-stage operators. Senior leadership across marketing, technology, AI automation, and infrastructure — without full-time overhead.',
  alternates: { canonical: '/fractional-cmo-cto' },
};

export default function FractionalPage() {
  return (
    <div>
      <SchemaMarkup path="/fractional-cmo-cto" pageTitle="Fractional CMO/CTO" />
      <JsonLd data={getFractionalServicesSchema()} />

      <FractionalHero />
      <WhyFractional />
      {FRACTIONAL_OFFERINGS.map((offering) => (
        <FractionalOfferingSection key={offering.id} offering={offering} />
      ))}
      <EngagementProcess />
      <FitMatrix />
      <Outcomes />
      <ClosingCta
        eyebrow="Apply to Work With Sean"
        title="Qualified inquiries reviewed within {{em}}48 hours{{/em}}."
        primaryHref="/contact"
        primaryLabel="Apply to Work With Sean"
        resumeLocation="portfolio_closing"
      />
    </div>
  );
}
