import type { MetadataRoute } from 'next';
import { SITE } from '@/content/nav';

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    { url: `${SITE.url}/`, lastModified: new Date('2026-06-26') },
    { url: `${SITE.url}/about`, lastModified: new Date('2026-06-29') },
    { url: `${SITE.url}/portfolio`, lastModified: new Date('2026-05-05') },
    { url: `${SITE.url}/fractional-cmo-cto`, lastModified: new Date('2026-06-29') },
    { url: `${SITE.url}/fractional-cmo-contractors`, lastModified: new Date('2026-06-29') },
    { url: `${SITE.url}/fractional-cto-service-businesses`, lastModified: new Date('2026-06-29') },
    { url: `${SITE.url}/contact`, lastModified: new Date('2026-05-05') },
    { url: `${SITE.url}/builderlync`, lastModified: new Date('2026-05-05') },
    { url: `${SITE.url}/privacy`, lastModified: new Date('2026-05-05') },
    { url: `${SITE.url}/terms`, lastModified: new Date('2026-05-05') },
  ];
}
