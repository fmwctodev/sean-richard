import type { Metadata } from 'next';
import HeroStrip from '@/components/portfolio/HeroStrip';
import SelectedProductsGrid from '@/components/portfolio/SelectedProductsGrid';
import ExperienceTimeline from '@/components/portfolio/ExperienceTimeline';
import EducationCredentials from '@/components/portfolio/EducationCredentials';
import VenturesGrid from '@/components/portfolio/VenturesGrid';
import ClosingCta from '@/components/portfolio/ClosingCta';
import SchemaMarkup, { JsonLd } from '@/components/seo/SchemaMarkup';
import { getWebPageSchema } from '@/lib/schema';

export const metadata: Metadata = {
  title: 'Portfolio | Sean Richard — AI Systems, SaaS, Automation & Fractional Leadership',
  description:
    "Explore Sean Richard's portfolio across AI automation, contractor SaaS, full-stack products, business infrastructure, and fractional CMO/CTO leadership.",
  alternates: { canonical: '/portfolio' },
  openGraph: {
    title: 'Portfolio · Sean Richard',
    description:
      'AI product engineering, full-stack builds, ventures, and fractional executive engagements.',
    url: 'https://seanrichard.com/portfolio',
  },
};

export default function PortfolioPage() {
  return (
    <div>
      <SchemaMarkup path="/portfolio" pageTitle="Portfolio" />
      <JsonLd
        data={getWebPageSchema({
          path: '/portfolio',
          title: 'Portfolio | Sean Richard — AI Systems, SaaS, Automation & Fractional Leadership',
          description:
            "Explore Sean Richard's portfolio across AI automation, contractor SaaS, full-stack products, business infrastructure, and fractional CMO/CTO leadership.",
          dateModified: '2026-05-05',
          primaryImageUrl: 'https://seanrichard.com/opengraph.png',
        })}
      />
      <HeroStrip />
      <SelectedProductsGrid />
      <ExperienceTimeline />
      <EducationCredentials />
      <VenturesGrid />
      <ClosingCta />
    </div>
  );
}
