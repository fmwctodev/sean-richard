import { Helmet } from 'react-helmet-async';

interface SchemaMarkupProps {
  path?: string;
  pageTitle?: string;
}

const BASE_URL = 'https://seanrichard.com';

const PAGE_NAMES: Record<string, string> = {
  '/': 'Home',
  '/about': 'About',
  '/contact': 'Contact'
};

function getBreadcrumbSchema(path: string, pageTitle?: string) {
  const items = [
    {
      "@type": "ListItem",
      "position": 1,
      "name": "Home",
      "item": BASE_URL
    }
  ];

  if (path !== '/') {
    items.push({
      "@type": "ListItem",
      "position": 2,
      "name": pageTitle || PAGE_NAMES[path] || path.replace('/', ''),
      "item": `${BASE_URL}${path}`
    });
  }

  return {
    "@type": "BreadcrumbList",
    "@id": `${BASE_URL}${path}#breadcrumb`,
    "itemListElement": items
  };
}

export default function SchemaMarkup({ path = '/', pageTitle }: SchemaMarkupProps) {
  const consolidatedSchema = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "WebSite",
        "@id": `${BASE_URL}/#website`,
        "name": "Sean Richard",
        "url": BASE_URL,
        "description": "Personal website of Sean Richard, entrepreneur and systems architect focused on AI automation and business infrastructure.",
        "publisher": { "@id": `${BASE_URL}/#sean-richard` },
        "inLanguage": "en-US"
      },
      getBreadcrumbSchema(path, pageTitle),
      {
        "@type": "Person",
        "@id": `${BASE_URL}/#sean-richard`,
        "name": "Sean Richard",
        "url": `${BASE_URL}/`,
        "description": "Sean Richard is an American entrepreneur, systems architect, and software operator focused on building AI-driven automation, business infrastructure, and scalable operating systems for contractors and service-based companies. He is the founder and operator of Sitehues Media Inc, Autom8ion Lab, BuilderLync Inc, and Tarrytown Roofing LLC.",
        "nationality": {
          "@type": "Country",
          "name": "United States"
        },
        "alumniOf": {
          "@type": "CollegeOrUniversity",
          "name": "Full Sail University"
        },
        "jobTitle": [
          "Founder",
          "Systems Architect",
          "Software Operator",
          "Entrepreneur"
        ],
        "knowsAbout": [
          "AI automation",
          "SaaS platforms",
          "Scalable operating systems",
          "Business systems",
          "Marketing automation",
          "CRM architecture",
          "Contractor software",
          "Operations",
          "Full stack development",
          "Voice AI systems"
        ],
        "worksFor": [
          { "@id": `${BASE_URL}/#sitehues-media-inc` },
          { "@id": `${BASE_URL}/#autom8ion-lab` },
          { "@id": `${BASE_URL}/#builderlync-inc` },
          { "@id": `${BASE_URL}/#tarrytown-roofing-llc` }
        ],
        "founderOf": [
          { "@id": `${BASE_URL}/#sitehues-media-inc` },
          { "@id": `${BASE_URL}/#autom8ion-lab` },
          { "@id": `${BASE_URL}/#builderlync-inc` },
          { "@id": `${BASE_URL}/#tarrytown-roofing-llc` }
        ],
        "sameAs": [
          "https://www.linkedin.com/in/a8l-sean-richard/",
          "https://github.com/Autom8ion-Lab"
        ]
      },
      {
        "@type": "Organization",
        "@id": `${BASE_URL}/#sitehues-media-inc`,
        "name": "Sitehues Media Inc",
        "legalName": "Sitehues Media Inc",
        "url": "https://sitehues.agency/",
        "description": "Sitehues Media Inc is a digital infrastructure and systems company specializing in paid media execution, funnel architecture, CRM systems, and automation for service-based businesses.",
        "industry": "Digital Marketing and Business Systems",
        "areaServed": "United States",
        "founder": { "@id": `${BASE_URL}/#sean-richard` },
        "knowsAbout": [
          "Paid advertising systems",
          "CRM architecture",
          "Marketing automation",
          "Lead generation infrastructure",
          "Business systems"
        ],
        "sameAs": [
          "https://sitehues.agency/"
        ]
      },
      {
        "@type": "Organization",
        "@id": `${BASE_URL}/#autom8ion-lab`,
        "name": "Autom8ion Lab",
        "legalName": "Autom8ion Lab",
        "url": BASE_URL,
        "description": "Autom8ion Lab develops AI-powered automation systems, including AI voice agents, workflow automation, and operational AI tools for real businesses.",
        "industry": "Artificial Intelligence and Automation",
        "areaServed": "United States",
        "founder": { "@id": `${BASE_URL}/#sean-richard` },
        "knowsAbout": [
          "AI voice agents",
          "Workflow automation",
          "Operational AI",
          "CRM-connected AI systems"
        ]
      },
      {
        "@type": "Organization",
        "@id": `${BASE_URL}/#builderlync-inc`,
        "name": "BuilderLync Inc",
        "legalName": "BuilderLync Inc",
        "url": BASE_URL,
        "description": "BuilderLync Inc is a SaaS platform providing an all-in-one operating system for contractors, unifying CRM, estimating, project management, marketing automation, and AI communication tools.",
        "industry": "Construction Software and SaaS",
        "areaServed": "United States",
        "founder": { "@id": `${BASE_URL}/#sean-richard` },
        "knowsAbout": [
          "Contractor software",
          "SaaS platforms",
          "CRM systems",
          "Project management",
          "AI communication tools"
        ]
      },
      {
        "@type": "Organization",
        "@id": `${BASE_URL}/#tarrytown-roofing-llc`,
        "name": "Tarrytown Roofing LLC",
        "legalName": "Tarrytown Roofing LLC",
        "url": BASE_URL,
        "description": "Tarrytown Roofing LLC is a service-based roofing company operated by Sean Richard and used as a real-world testing environment for systems, automation, and contractor software.",
        "industry": "Roofing and Construction Services",
        "areaServed": "United States",
        "founder": { "@id": `${BASE_URL}/#sean-richard` },
        "knowsAbout": [
          "Roofing services",
          "Service business operations",
          "Process optimization",
          "Automation testing"
        ]
      }
    ]
  };

  return (
    <Helmet>
      <script type="application/ld+json">
        {JSON.stringify(consolidatedSchema)}
      </script>
    </Helmet>
  );
}
