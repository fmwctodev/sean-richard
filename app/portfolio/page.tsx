import type { Metadata } from 'next';
import HeroStrip from '@/components/portfolio/HeroStrip';
import SelectedProductsGrid from '@/components/portfolio/SelectedProductsGrid';
import OpenSourceList from '@/components/portfolio/OpenSourceList';
import ExperienceTimeline from '@/components/portfolio/ExperienceTimeline';
import EducationCredentials from '@/components/portfolio/EducationCredentials';
import VenturesGrid from '@/components/portfolio/VenturesGrid';
import ClosingCta from '@/components/portfolio/ClosingCta';
import SchemaMarkup, { JsonLd } from '@/components/seo/SchemaMarkup';
import { getPortfolioItemListSchema } from '@/lib/schema';
import type { ReposPayload } from '@/lib/github';
import reposPayload from '@/data/repos.generated.json';

export const metadata: Metadata = {
  title: 'Portfolio',
  description:
    'Selected products, open source projects, experience, education, and ventures from Sean Richard — AI product engineering, full-stack builds, and 0→1 founder work.',
  alternates: { canonical: '/portfolio' },
  openGraph: {
    title: 'Portfolio · Sean Richard',
    description:
      'AI product engineering, full-stack builds, and ventures. Download my resume or browse open source work.',
    url: 'https://seanrichard.com/portfolio',
  },
};

export default function PortfolioPage() {
  const { repos } = reposPayload as ReposPayload;

  return (
    <div>
      <SchemaMarkup path="/portfolio" pageTitle="Portfolio" />
      {repos.length > 0 && <JsonLd data={getPortfolioItemListSchema(repos)} />}

      <HeroStrip />
      <SelectedProductsGrid />
      <OpenSourceList repos={repos} />
      <ExperienceTimeline />
      <EducationCredentials />
      <VenturesGrid />
      <ClosingCta />
    </div>
  );
}
