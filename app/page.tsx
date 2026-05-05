import type { Metadata } from 'next';
import HomeHero from '@/components/home/HomeHero';
import AuthorityStrip from '@/components/home/AuthorityStrip';
import HomeServices from '@/components/home/HomeServices';
import HomeVentures from '@/components/home/HomeVentures';
import HomeFractionalPreview from '@/components/home/HomeFractionalPreview';
import HomeSelectedWorkTeaser from '@/components/home/HomeSelectedWorkTeaser';
import HomeFaq from '@/components/home/HomeFaq';
import HomeCta from '@/components/home/HomeCta';
import { JsonLd } from '@/components/seo/SchemaMarkup';
import { getFaqSchema } from '@/lib/schema';

export const metadata: Metadata = {
  title: 'Sean Richard | Systems Architect, AI Automation, Fractional CMO & CTO',
  description:
    'Sean Richard is an entrepreneur, systems architect, and fractional CMO/CTO building AI automation, contractor SaaS, marketing infrastructure, and business systems for service-based companies.',
  alternates: { canonical: '/' },
};

export default function HomePage() {
  return (
    <div className="pt-20">
      <JsonLd data={getFaqSchema()} />
      <HomeHero />
      <AuthorityStrip />
      <HomeServices />
      <HomeVentures />
      <HomeFractionalPreview />
      <HomeSelectedWorkTeaser />
      <HomeFaq />
      <HomeCta />
    </div>
  );
}
