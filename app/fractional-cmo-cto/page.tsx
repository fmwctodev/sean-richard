import type { Metadata } from 'next';
import FractionalHero from '@/components/fractional/FractionalHero';
import WhyFractional from '@/components/fractional/WhyFractional';
import FractionalSplitTeasers from '@/components/fractional/FractionalSplitTeasers';
import EngagementProcess from '@/components/fractional/EngagementProcess';
import FitMatrix from '@/components/fractional/FitMatrix';
import Outcomes from '@/components/fractional/Outcomes';
import FractionalFaq from '@/components/fractional/FractionalFaq';
import ClosingCta from '@/components/editorial/ClosingCta';
import SchemaMarkup, { JsonLd } from '@/components/seo/SchemaMarkup';
import {
  getFractionalServicesSchema,
  getFractionalFaqSchema,
  getWebPageSchema,
} from '@/lib/schema';

export const metadata: Metadata = {
  title: 'Fractional CMO & CTO Services | Sean Richard',
  description:
    'Fractional CMO and CTO services hub for contractors, service businesses, SaaS startups, and growth-stage operators. Choose the dedicated CMO or CTO practice page for offering-specific scope and FAQs.',
  alternates: { canonical: '/fractional-cmo-cto' },
};

export default function FractionalHubPage() {
  return (
    <div>
      <SchemaMarkup path="/fractional-cmo-cto" pageTitle="Fractional CMO/CTO" />
      <JsonLd
        data={getWebPageSchema({
          path: '/fractional-cmo-cto',
          title: 'Fractional CMO & CTO Services | Sean Richard',
          description:
            'Fractional CMO and CTO services hub for contractors, service businesses, SaaS startups, and growth-stage operators. Choose the dedicated CMO or CTO practice page for offering-specific scope and FAQs.',
          dateModified: '2026-06-29',
          primaryImageUrl: 'https://seanrichard.com/opengraph.png',
        })}
      />
      <JsonLd data={getFractionalServicesSchema()} />
      <JsonLd data={getFractionalFaqSchema()} />

      <FractionalHero />
      <FractionalSplitTeasers />
      <WhyFractional />
      <EngagementProcess />
      <FitMatrix />
      <Outcomes />
      <FractionalFaq />
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
