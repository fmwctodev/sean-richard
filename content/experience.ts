export type ExperienceEntry = {
  id: string;
  title: string;
  org: string;
  dates: string;
  location?: string;
  summary?: string;
  bullets: string[];
};

export const EXPERIENCE: ExperienceEntry[] = [
  {
    id: 'builderlync',
    title: 'Founder & Product Architect',
    org: 'BuilderLync Inc.',
    dates: 'Mar 2025 – Present',
    location: 'Delaware, US',
    bullets: [
      'Lead product, engineering, and GTM for a contractor-focused SaaS platform modernizing trades operations with AI assistants and workflow automation.',
      'Architect platform modules across CRM, estimates, scheduling, marketing automation, and dashboards — making the product and engineering tradeoffs end-to-end.',
      'Drive investor relations, partnerships, and positioning while remaining hands-on in product specs and implementation.',
    ],
  },
  {
    id: 'autom8ion-lab',
    title: 'Founder & AI Systems Architect',
    org: 'Autom8ion Lab',
    dates: 'Nov 2017 – Present',
    location: 'Florida, US',
    summary:
      'Marketing-automation consultancy that evolved into an AI systems shop building agent-driven workflows and LLM-powered tooling for service businesses.',
    bullets: [
      'Build and ship AI-powered automation systems across content workflows, ad and CRM operations, lead handling, reporting, and customer communication — with prompt iteration and eval checks before deploy.',
      'Map manual processes, design automation architecture, integrate CRMs and external services, and deploy tailored systems into live production environments.',
      'Own discovery, scoping, technical execution, QA, and handoff for each engagement.',
    ],
  },
  {
    id: 'techy',
    title: 'Franchise Owner / Technical Operations Lead',
    org: 'Techy',
    dates: '2020 – 2023',
    location: 'Clermont & Leesburg, FL',
    bullets: [
      'Operated multi-location electronics retail/repair franchises with B2B/B2C sales, custom builds, and onsite technical services.',
    ],
  },
  {
    id: 'xda-developers',
    title: 'Senior Member / Technical Contributor',
    org: 'XDA Developers',
    dates: '2014 – Present',
    bullets: [
      'Long-running technical contributor in the Android and mobile development community — debugging, recovery workflows, and device-level systems.',
    ],
  },
  {
    id: 'earlier',
    title: 'Operations · Sales · Tech Support · Service',
    org: 'Jandar Travel · SupportKing.com / OneClickRoot · U.S. Army',
    dates: '2007 – 2020',
    bullets: [
      'Cross-functional leadership across operations, sales/marketing systems, B2B reporting, technical support, and mission-critical execution.',
    ],
  },
];
