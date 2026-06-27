export type ServiceCard = {
  id: string;
  title: string;
  body: string;
  href: string;
};

export const SERVICES: ServiceCard[] = [
  {
    id: 'fractional-cmo',
    title: 'Fractional CMO for Contractors',
    body:
      'Senior marketing leadership for contractors building a real growth system: offer positioning, paid media direction, CRM and funnel infrastructure, sales pipeline design, and accountable performance reporting.',
    href: '/fractional-cmo-cto#cmo',
  },
  {
    id: 'fractional-cto',
    title: 'Fractional CTO for Service-Based Companies',
    body:
      'Executive-level technology direction without full-time overhead: roadmap, software stack review, automation architecture, AI implementation planning, vendor oversight, cybersecurity posture review, and IT infrastructure direction.',
    href: '/fractional-cmo-cto#cto',
  },
  {
    id: 'ai-automation',
    title: 'AI & Automation Systems',
    body:
      'Production-ready AI: voice agents, workflow automation, internal operating systems, document processing, and custom AI tools deployed into live business environments — not demos.',
    href: '/portfolio',
  },
  {
    id: 'business-operations',
    title: 'Business Operations Infrastructure',
    body:
      'Connected operational systems for service businesses: CRM and pipeline architecture, lead-to-close workflows, internal process automation, reporting, and ownership of the customer lifecycle.',
    href: '/contact',
  },
  {
    id: 'product-development',
    title: 'Full-Stack Product & Platform Development',
    body:
      'Founder-grade product engineering: Next.js / React / TypeScript applications, Supabase backends, LLM-powered features with eval-driven iteration, and CI/CD that ships to production reliably.',
    href: '/portfolio',
  },
];

export const AUTHORITY_TAGS = [
  'AI Automation',
  'Contractor SaaS',
  'Fractional CMO',
  'Fractional CTO',
  'CRM Systems',
  'Paid Media Infrastructure',
  'Business Operations',
  'Software Architecture',
  'Cybersecurity',
  'IT Infrastructure',
];
