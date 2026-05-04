import type { Metadata } from 'next';
import HomeHero from '@/components/home/HomeHero';
import HomeVentures from '@/components/home/HomeVentures';
import HomeServices from '@/components/home/HomeServices';
import HomeFaq from '@/components/home/HomeFaq';
import HomeCta from '@/components/home/HomeCta';
import { JsonLd } from '@/components/seo/SchemaMarkup';
import { getFaqSchema } from '@/lib/schema';
import { SITE } from '@/content/nav';

export const metadata: Metadata = {
  title: 'Sean Richard - Entrepreneur and Systems Architect',
  description: SITE.description,
  alternates: { canonical: '/' },
};

export default function HomePage() {
  return (
    <div className="pt-20">
      <JsonLd data={getFaqSchema()} />
      <HomeHero />
      <HomeVentures />
      <HomeServices />
      <HomeFaq />
      <HomeCta />
    </div>
  );
}
