import { SITE } from '@/content/nav';
import { VENTURES } from '@/content/ventures';
import { FAQS } from '@/content/faqs';
import { BOOKS } from '@/content/books';

const BASE_URL = SITE.url;

const PAGE_NAMES: Record<string, string> = {
  '/': 'Home',
  '/about': 'About',
  '/portfolio': 'Portfolio',
  '/fractional-cmo-cto': 'Fractional CMO/CTO',
  '/contact': 'Contact',
  '/privacy': 'Privacy Policy',
  '/terms': 'Terms of Service',
};

function breadcrumbSchema(path: string, pageTitle?: string) {
  const items: Array<Record<string, unknown>> = [
    {
      '@type': 'ListItem',
      position: 1,
      name: 'Home',
      item: BASE_URL,
    },
  ];

  if (path !== '/') {
    items.push({
      '@type': 'ListItem',
      position: 2,
      name: pageTitle || PAGE_NAMES[path] || path.replace('/', ''),
      item: `${BASE_URL}${path}`,
    });
  }

  return {
    '@type': 'BreadcrumbList',
    '@id': `${BASE_URL}${path}#breadcrumb`,
    itemListElement: items,
  };
}

function organizationNode(v: (typeof VENTURES)[number]) {
  return {
    '@type': 'Organization',
    '@id': `${BASE_URL}/#${v.id}`,
    name: v.name,
    legalName: v.legalName,
    url: v.url ?? BASE_URL,
    description: v.description,
    industry: v.industry,
    areaServed: 'United States',
    founder: { '@id': `${BASE_URL}/#sean-richard` },
    knowsAbout: v.knowsAbout,
    ...(v.url ? { sameAs: [v.url] } : {}),
  };
}

export function getCoreSchemaGraph(path: string, pageTitle?: string) {
  return {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'WebSite',
        '@id': `${BASE_URL}/#website`,
        name: SITE.name,
        url: BASE_URL,
        description:
          'Personal website of Sean Richard, entrepreneur and systems architect focused on AI automation and business infrastructure.',
        publisher: { '@id': `${BASE_URL}/#sean-richard` },
        inLanguage: 'en-US',
      },
      breadcrumbSchema(path, pageTitle),
      {
        '@type': 'Person',
        '@id': `${BASE_URL}/#sean-richard`,
        name: SITE.name,
        alternateName: 'Sean Scott Richard',
        givenName: 'Sean',
        familyName: 'Richard',
        url: `${BASE_URL}/`,
        image: `${BASE_URL}/assets/headshots/sean-richard.png`,
        description: SITE.description,
        disambiguatingDescription:
          'Sean Richard, American entrepreneur and fractional CMO/CTO based in Palm Coast, Florida. Founder and operator of Autom8ion Lab, Sitehues Media Inc, and BuilderLync Inc. Not to be confused with other public figures sharing the name.',
        nationality: { '@type': 'Country', name: 'United States' },
        homeLocation: {
          '@type': 'Place',
          address: {
            '@type': 'PostalAddress',
            addressLocality: 'Palm Coast',
            addressRegion: 'FL',
            addressCountry: 'US',
          },
        },
        email: `mailto:${SITE.email}`,
        alumniOf: [
          {
            '@type': 'CollegeOrUniversity',
            name: 'Full Sail University',
            url: 'https://www.fullsail.edu',
          },
          {
            '@type': 'CollegeOrUniversity',
            name: 'Southern New Hampshire University',
            url: 'https://www.snhu.edu',
          },
        ],
        jobTitle: [
          'Founder',
          'Entrepreneur',
          'Systems Architect',
          'AI Product Engineer',
          'Fractional CMO',
          'Fractional CTO',
        ],
        knowsAbout: [
          'AI automation',
          'Fractional CMO',
          'Fractional CTO',
          'Contractor SaaS',
          'AI voice agents',
          'Workflow automation',
          'Full stack development',
          'SaaS platforms',
          'Scalable operating systems',
          'Marketing automation',
          'Paid media infrastructure',
          'CRM architecture',
          'Lead generation systems',
          'Contractor software',
          'Cyber security',
          'Operations infrastructure',
          'LLM-powered workflows',
          'Next.js',
          'Supabase',
          'TypeScript',
        ],
        knowsLanguage: 'en-US',
        worksFor: VENTURES.filter((v) => v.id !== 'sean-scott-richard-llc').map(
          (v) => ({ '@id': `${BASE_URL}/#${v.id}` }),
        ),
        founderOf: VENTURES.map((v) => ({ '@id': `${BASE_URL}/#${v.id}` })),
        sameAs: [
          SITE.social.linkedin,
          SITE.social.githubPersonal,
          SITE.social.githubOrg,
          SITE.social.facebook,
          'https://autom8ionlab.com',
          'https://builderlync.com',
          'https://sitehues.agency',
        ],
      },
      ...VENTURES.map(organizationNode),
    ],
  };
}

export function getFractionalServicesSchema() {
  const offerings = [
    {
      id: 'fractional-cmo',
      name: 'Fractional CMO for Contractors',
      description:
        'Senior marketing leadership for contractors building accountable growth systems across lead generation, paid media, CRM, sales process, follow-up automation, reporting, and vendor oversight.',
      url: `${BASE_URL}/fractional-cmo-cto#cmo`,
      serviceType: 'Fractional CMO',
      areaServed: 'United States',
    },
    {
      id: 'fractional-cto',
      name: 'Fractional CTO for Service-Based Companies',
      description:
        'Executive-level technology direction without full-time overhead: technology roadmap, software stack review, automation architecture, AI implementation planning, vendor oversight, and security-aware system design.',
      url: `${BASE_URL}/fractional-cmo-cto#cto`,
      serviceType: 'Fractional CTO',
      areaServed: 'United States',
    },
  ];

  return {
    '@context': 'https://schema.org',
    '@graph': offerings.map((o) => ({
      '@type': 'Service',
      '@id': `${BASE_URL}/#${o.id}`,
      name: o.name,
      description: o.description,
      url: o.url,
      serviceType: o.serviceType,
      areaServed: o.areaServed,
      provider: { '@id': `${BASE_URL}/#sean-richard` },
    })),
  };
}

export function getReadingListSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'ReadAction',
    '@id': `${BASE_URL}/about#operating-influences`,
    agent: { '@id': `${BASE_URL}/#sean-richard` },
    name: 'Operating Influences — Sean Richard reading list',
    object: {
      '@type': 'ItemList',
      name: 'Operating Influences',
      itemListElement: BOOKS.map((book, index) => ({
        '@type': 'ListItem',
        position: index + 1,
        item: {
          '@type': 'Book',
          name: book.title,
          author: book.authors.map((author) => ({
            '@type': 'Person',
            name: author,
          })),
          about: book.topic,
          ...(book.isbn ? { isbn: book.isbn } : {}),
        },
      })),
    },
  };
}

export function getFaqSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: FAQS.map((faq) => ({
      '@type': 'Question',
      name: faq.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: faq.answer,
      },
    })),
  };
}

export function getAboutProfileSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'ProfilePage',
    '@id': `${BASE_URL}/about#profile`,
    url: `${BASE_URL}/about`,
    name: 'About Sean Richard',
    description:
      "Background, ventures, and operating principles of Sean Richard — entrepreneur, systems architect, and fractional CMO/CTO based in Palm Coast, Florida.",
    mainEntity: { '@id': `${BASE_URL}/#sean-richard` },
    breadcrumb: { '@id': `${BASE_URL}/about#breadcrumb` },
    inLanguage: 'en-US',
  };
}

