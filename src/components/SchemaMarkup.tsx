import { Helmet } from 'react-helmet-async';

export default function SchemaMarkup() {
  // CONSOLIDATED JSON-LD SCHEMA - Global structured data for all pages
  // DO NOT duplicate this component or create separate schemas per page
  // All @id values are PERMANENT and must NEVER be changed
  //
  // FUTURE DOMAIN UPDATES:
  // When BuilderLync or Autom8ion Lab acquire their own domains:
  // 1. Update the "url" property to the new domain
  // 2. Add a "sameAs" array containing the new domain URL
  // 3. NEVER change the @id values - they are permanent identifiers
  const consolidatedSchema = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Person",
        "@id": "https://seanrichard.com/#sean-richard",
        "name": "Sean Richard",
        "url": "https://seanrichard.com/",
        "description": "Sean Richard is an American entrepreneur, systems architect, and software operator focused on building AI-driven automation, business infrastructure, and scalable operating systems for contractors and service-based companies. He is the founder and operator of Sitehues Media Inc, Autom8ion Lab, BuilderLync Inc, and Tarrytown Roofing LLC.",
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
          "Operations"
        ],
        "worksFor": [
          { "@id": "https://seanrichard.com/#sitehues-media-inc" },
          { "@id": "https://seanrichard.com/#autom8ion-lab" },
          { "@id": "https://seanrichard.com/#builderlync-inc" },
          { "@id": "https://seanrichard.com/#tarrytown-roofing-llc" }
        ],
        "founderOf": [
          { "@id": "https://seanrichard.com/#sitehues-media-inc" },
          { "@id": "https://seanrichard.com/#autom8ion-lab" },
          { "@id": "https://seanrichard.com/#builderlync-inc" },
          { "@id": "https://seanrichard.com/#tarrytown-roofing-llc" }
        ],
        "sameAs": [
          "https://www.linkedin.com/in/a8l-sean-richard/",
          "https://github.com/Autom8ion-Lab"
        ]
      },
      {
        "@type": "Organization",
        "@id": "https://seanrichard.com/#sitehues-media-inc",
        "name": "Sitehues Media Inc",
        "legalName": "Sitehues Media Inc",
        "url": "https://sitehues.agency/",
        "description": "Sitehues Media Inc is a digital infrastructure and systems company specializing in paid media execution, funnel architecture, CRM systems, and automation for service-based businesses.",
        "industry": "Digital Marketing and Business Systems",
        "founder": { "@id": "https://seanrichard.com/#sean-richard" },
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
        "@id": "https://seanrichard.com/#autom8ion-lab",
        "name": "Autom8ion Lab",
        "legalName": "Autom8ion Lab",
        "url": "https://seanrichard.com/", // TODO: Update to actual domain when acquired
        "description": "Autom8ion Lab develops AI-powered automation systems, including AI voice agents, workflow automation, and operational AI tools for real businesses.",
        "industry": "Artificial Intelligence and Automation",
        "founder": { "@id": "https://seanrichard.com/#sean-richard" },
        "knowsAbout": [
          "AI voice agents",
          "Workflow automation",
          "Operational AI",
          "CRM-connected AI systems"
        ]
        // TODO: Add "sameAs": ["https://actual-domain.com"] when domain is acquired
      },
      {
        "@type": "Organization",
        "@id": "https://seanrichard.com/#builderlync-inc",
        "name": "BuilderLync Inc",
        "legalName": "BuilderLync Inc",
        "url": "https://seanrichard.com/", // TODO: Update to actual domain when acquired
        "description": "BuilderLync Inc is a SaaS platform providing an all-in-one operating system for contractors, unifying CRM, estimating, project management, marketing automation, and AI communication tools.",
        "industry": "Construction Software and SaaS",
        "founder": { "@id": "https://seanrichard.com/#sean-richard" },
        "knowsAbout": [
          "Contractor software",
          "SaaS platforms",
          "CRM systems",
          "Project management",
          "AI communication tools"
        ]
        // TODO: Add "sameAs": ["https://actual-domain.com"] when domain is acquired
      },
      {
        "@type": "Organization",
        "@id": "https://seanrichard.com/#tarrytown-roofing-llc",
        "name": "Tarrytown Roofing LLC",
        "legalName": "Tarrytown Roofing LLC",
        "url": "https://seanrichard.com/",
        "description": "Tarrytown Roofing LLC is a service-based roofing company operated by Sean Richard and used as a real-world testing environment for systems, automation, and contractor software.",
        "industry": "Roofing and Construction Services",
        "founder": { "@id": "https://seanrichard.com/#sean-richard" },
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
