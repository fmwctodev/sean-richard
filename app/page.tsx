import type { Metadata } from 'next';
import HomeHero from '@/components/home/HomeHero';
import HomeOperatingPanel from '@/components/home/HomeOperatingPanel';
import AuthorityStrip from '@/components/home/AuthorityStrip';
import HomeServices from '@/components/home/HomeServices';
import HomeFractionalPreview from '@/components/home/HomeFractionalPreview';
import HomeSelectedWorkTeaser from '@/components/home/HomeSelectedWorkTeaser';
import HomeFaq from '@/components/home/HomeFaq';
import HomeCta from '@/components/home/HomeCta';
import SchemaMarkup, { JsonLd } from '@/components/seo/SchemaMarkup';
import { getFaqSchema } from '@/lib/schema';

export const metadata: Metadata = {
  title: 'Sean Richard | Fractional CMO/CTO, AI Automation, Founder of Autom8ion Lab',
  description:
    'Sean Richard is an American entrepreneur, systems architect, and fractional CMO/CTO based in Palm Coast, Florida. Founder of Autom8ion Lab, Sitehues Media, and BuilderLync — building AI automation, contractor SaaS, IT systems, and cybersecurity-aware infrastructure for service-based companies.',
  alternates: { canonical: '/' },
};

export default function HomePage() {
  return (
    <div className="pt-20">
      <SchemaMarkup path="/" pageTitle="Home" />
      <JsonLd data={getFaqSchema()} />
      <HomeHero />
      <HomeOperatingPanel />
      <AuthorityStrip />
      <HomeServices />
      <HomeFractionalPreview />
      <HomeSelectedWorkTeaser />
      <HomeFaq />
      <HomeCta />
    </div>
  );
}
