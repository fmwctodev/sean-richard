import type { Metadata } from 'next';
import HeroStrip from '@/components/portfolio/HeroStrip';
import SelectedProductsGrid from '@/components/portfolio/SelectedProductsGrid';
import ExperienceTimeline from '@/components/portfolio/ExperienceTimeline';
import EducationCredentials from '@/components/portfolio/EducationCredentials';
import VenturesGrid from '@/components/portfolio/VenturesGrid';
import ClosingCta from '@/components/portfolio/ClosingCta';
import SchemaMarkup from '@/components/seo/SchemaMarkup';

export const metadata: Metadata = {
  title: 'Portfolio',
  description:
    'Selected products, experience, education, and ventures from Sean Richard — AI product engineering, full-stack builds, and 0→1 founder work.',
  alternates: { canonical: '/portfolio' },
  openGraph: {
    title: 'Portfolio · Sean Richard',
    description:
      'AI product engineering, full-stack builds, and ventures. Download my resume or browse live products.',
    url: 'https://seanrichard.com/portfolio',
  },
};

export default function PortfolioPage() {
  return (
    <div>
      <SchemaMarkup path="/portfolio" pageTitle="Portfolio" />
      <HeroStrip />
      <SelectedProductsGrid />
      <ExperienceTimeline />
      <EducationCredentials />
      <VenturesGrid />
      <ClosingCta />
    </div>
  );
}
