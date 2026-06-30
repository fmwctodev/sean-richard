import { SITE } from '@/content/nav';
import { VENTURES } from '@/content/ventures';
import { FAQS } from '@/content/faqs';
import { BOOKS } from '@/content/books';
import { FRACTIONAL_FAQS, type FractionalFaqAudience } from '@/content/fractional';

const BASE_URL = SITE.url;

const PAGE_NAMES: Record<string, string> = {
  '/': 'Home',
  '/about': 'About',
  '/portfolio': 'Portfolio',
  '/fractional-cmo-cto': 'Fractional CMO/CTO',
  '/fractional-cmo-contractors': 'Fractional CMO for Contractors',
  '/fractional-cto-service-businesses': 'Fractional CTO for Service Businesses',
  '/contact': 'Contact',
  '/privacy': 'Privacy Policy',
  '/terms': 'Terms of Service',
  '/builderlync': 'BuilderLync',
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
        email: SITE.email,
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

export function getFractionalServicesSchema(filterId?: 'fractional-cmo' | 'fractional-cto') {
  const offerings = [
    {
      id: 'fractional-cmo',
      name: 'Fractional CMO for Contractors',
      description:
        'Senior marketing leadership for contractors building accountable growth systems across lead generation, paid media, CRM, sales process, follow-up automation, reporting, and vendor oversight.',
      url: `${BASE_URL}/fractional-cmo-contractors`,
      serviceType: 'Fractional CMO',
      areaServed: 'United States',
    },
    {
      id: 'fractional-cto',
      name: 'Fractional CTO for Service-Based Companies',
      description:
        'Executive-level technology direction without full-time overhead: technology roadmap, software stack review, automation architecture, AI implementation planning, vendor oversight, and cybersecurity-aware system design.',
      url: `${BASE_URL}/fractional-cto-service-businesses`,
      serviceType: 'Fractional CTO',
      areaServed: 'United States',
    },
  ];

  const filtered = filterId ? offerings.filter((o) => o.id === filterId) : offerings;

  return {
    '@context': 'https://schema.org',
    '@graph': filtered.map((o) => ({
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
    '@type': 'ItemList',
    '@id': `${BASE_URL}/about#operating-influences`,
    name: 'Operating Influences — Sean Richard reading list',
    description:
      "Books actively shaping Sean Richard's thinking on security, infrastructure, and the systems his companies run on.",
    itemListOrder: 'https://schema.org/ItemListOrderAscending',
    numberOfItems: BOOKS.length,
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
        genre: book.category,
        ...(book.isbn ? { isbn: book.isbn } : {}),
      },
    })),
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

export function getFractionalFaqSchema(
  audience?: Exclude<FractionalFaqAudience, 'all'>,
  pagePath: string = '/fractional-cmo-cto',
) {
  const filtered = audience
    ? FRACTIONAL_FAQS.filter((f) => f.audience === 'all' || f.audience === audience)
    : FRACTIONAL_FAQS;

  return {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    '@id': `${BASE_URL}${pagePath}#faq`,
    mainEntity: filtered.map((faq) => ({
      '@type': 'Question',
      name: faq.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: faq.answer,
      },
    })),
  };
}

export function getBuilderLyncSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'SoftwareApplication',
    '@id': `${BASE_URL}/builderlync#software`,
    name: 'BuilderLync',
    alternateName: 'BuilderLync Inc',
    applicationCategory: 'BusinessApplication',
    operatingSystem: 'Web',
    url: 'https://builderlync.com',
    sameAs: ['https://builderlync.com', `${BASE_URL}/#builderlync-inc`],
    description:
      'BuilderLync is an operating system for builders and contractors. It consolidates CRM, estimating, project management, lead routing, client communication, marketing automation, and AI-assisted workflows into a single platform built for the way home-service and construction businesses actually run.',
    creator: { '@id': `${BASE_URL}/#sean-richard` },
    publisher: { '@id': `${BASE_URL}/#sean-richard` },
    offers: { '@type': 'Offer', category: 'SaaS' },
    audience: {
      '@type': 'BusinessAudience',
      audienceType: 'Contractors, builders, and home-service businesses',
    },
  };
}

const BUILDERLYNC_FAQS = [
  {
    question: 'What is BuilderLync?',
    answer:
      'BuilderLync is an operating system for builders and contractors. It unifies CRM, estimating, project management, lead routing, client communication, marketing automation, and AI-assisted follow-up into a single platform built for home-service and construction businesses.',
  },
  {
    question: 'Who is BuilderLync built for?',
    answer:
      'BuilderLync is built for builders, contractors, and home-service businesses that want to run lead generation, project management, client communication, and field operations from one connected platform instead of stitching together multiple disconnected tools.',
  },
  {
    question: 'What does BuilderLync replace?',
    answer:
      'BuilderLync replaces the typical contractor software stack of a separate CRM, separate project management tool, separate estimating software, separate marketing automation, and manual lead follow-up. Everything lives in one system with shared data.',
  },
  {
    question: 'Who founded BuilderLync?',
    answer:
      'BuilderLync was founded by Sean Richard, an entrepreneur and systems architect based in Palm Coast, Florida. Sean also operates Sitehues Media Inc and Autom8ion Lab, which inform how BuilderLync handles marketing infrastructure and AI automation.',
  },
  {
    question: 'Where can I sign up or learn more?',
    answer:
      'Visit builderlync.com to sign up, request a demo, or learn more about the platform. For partnership or strategic inquiries, contact Sean Richard directly through seanrichard.com/contact.',
  },
  {
    question: 'How does BuilderLync relate to Autom8ion Lab and Sitehues Media?',
    answer:
      'BuilderLync, Autom8ion Lab, and Sitehues Media are three separate companies operated by Sean Richard. Autom8ion Lab develops the AI automation patterns and Sitehues Media runs the digital infrastructure work that informs how BuilderLync handles AI communication and marketing automation inside the platform.',
  },
];

export function getBuilderLyncFaqSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    '@id': `${BASE_URL}/builderlync#faq`,
    mainEntity: BUILDERLYNC_FAQS.map((faq) => ({
      '@type': 'Question',
      name: faq.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: faq.answer,
      },
    })),
  };
}

export const BUILDERLYNC_FAQ_DATA = BUILDERLYNC_FAQS;

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

