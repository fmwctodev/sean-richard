import type { MetadataRoute } from 'next';
import { SITE } from '@/content/nav';

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date();
  return [
    {
      url: `${SITE.url}/`,
      lastModified,
      changeFrequency: 'weekly',
      priority: 1.0,
    },
    {
      url: `${SITE.url}/about`,
      lastModified,
      changeFrequency: 'monthly',
      priority: 0.9,
    },
    {
      url: `${SITE.url}/portfolio`,
      lastModified,
      changeFrequency: 'weekly',
      priority: 0.9,
    },
    {
      url: `${SITE.url}/fractional-cmo-cto`,
      lastModified,
      changeFrequency: 'monthly',
      priority: 0.95,
    },
    {
      url: `${SITE.url}/contact`,
      lastModified,
      changeFrequency: 'monthly',
      priority: 0.7,
    },
    {
      url: `${SITE.url}/privacy`,
      lastModified,
      changeFrequency: 'yearly',
      priority: 0.3,
    },
    {
      url: `${SITE.url}/terms`,
      lastModified,
      changeFrequency: 'yearly',
      priority: 0.3,
    },
  ];
}
