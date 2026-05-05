export type Venture = {
  id: string;
  name: string;
  legalName: string;
  shortPitch: string;
  description: string;
  category: string;
  image: string;
  url?: string;
  internalPath?: string;
  industry: string;
  knowsAbout: string[];
  expandedSections: { heading: string; body: string }[];
};

export const VENTURES: Venture[] = [
  {
    id: 'sitehues-media-inc',
    name: 'Sitehues Media Inc',
    legalName: 'Sitehues Media Inc',
    shortPitch:
      'Digital infrastructure and execution for service-based businesses — paid media, funnels, CRM, automation.',
    description:
      'Sitehues Media Inc is a digital infrastructure and systems company specializing in paid media execution, funnel architecture, CRM systems, and automation for service-based businesses.',
    category: 'Digital Infrastructure',
    image: '/assets/images/sitehues-media.png',
    url: 'https://sitehues.agency/',
    industry: 'Digital Marketing and Business Systems',
    knowsAbout: [
      'Paid advertising systems',
      'CRM architecture',
      'Marketing automation',
      'Lead generation infrastructure',
      'Business systems',
    ],
    expandedSections: [
      {
        heading: 'Company Overview',
        body: 'Sitehues Media is a digital infrastructure and execution company built for service-based businesses that need predictable growth systems. It focuses on paid media execution, funnel architecture, and CRM infrastructure designed to produce measurable results, not vanity metrics.',
      },
      {
        heading: 'Key Capabilities',
        body: 'The company delivers paid advertising systems, conversion-focused funnels, CRM configuration, and automated lead nurturing designed to move prospects from first touch to closed deal with minimal friction.',
      },
      {
        heading: 'Operational Approach',
        body: 'Sitehues Media operates inside live production environments, validating systems through real client campaigns before standardizing and scaling execution frameworks across industries.',
      },
    ],
  },
  {
    id: 'autom8ion-lab',
    name: 'Autom8ion Lab',
    legalName: 'Autom8ion Lab',
    shortPitch:
      'AI voice agents, workflow automation, and operational AI tools built for live business environments.',
    description:
      'Autom8ion Lab develops AI-powered automation systems, including AI voice agents, workflow automation, and operational AI tools for real businesses.',
    category: 'AI Automation',
    image: '/assets/images/autom8ion-lab.png',
    url: 'https://autom8ionlab.com',
    industry: 'Artificial Intelligence and Automation',
    knowsAbout: [
      'AI voice agents',
      'Workflow automation',
      'Operational AI',
      'CRM-connected AI systems',
    ],
    expandedSections: [
      {
        heading: 'Company Overview',
        body: 'Autom8ion Lab is an AI automation company focused on building production-ready systems for real business operations. It develops AI solutions that replace manual workflows, reduce response time, and improve operational throughput.',
      },
      {
        heading: 'Key Capabilities',
        body: 'The platform includes AI voice agents, workflow automation, internal process orchestration, and system-to-system integrations designed for reliability and scale.',
      },
      {
        heading: 'Technical Implementation',
        body: 'Solutions are built for deployment in live environments, emphasizing uptime, security, and seamless integration with existing business infrastructure rather than experimental or demo-based AI tools.',
      },
    ],
  },
  {
    id: 'builderlync-inc',
    name: 'BuilderLync Inc',
    legalName: 'BuilderLync Inc',
    shortPitch:
      'Contractor-focused SaaS unifying CRM, estimates, scheduling, marketing, and AI assistants in one operating system.',
    description:
      'BuilderLync Inc is a SaaS platform providing an all-in-one operating system for contractors, unifying CRM, estimating, project management, marketing automation, and AI communication tools.',
    category: 'Contractor SaaS',
    image: '/assets/images/builderlync.png',
    url: 'https://builderlync.com',
    internalPath: '/builderlync',
    industry: 'Construction Software and SaaS',
    knowsAbout: [
      'Contractor software',
      'SaaS platforms',
      'CRM systems',
      'Project management',
      'AI communication tools',
    ],
    expandedSections: [
      {
        heading: 'Company Overview',
        body: 'BuilderLync is a contractor-focused SaaS platform designed to unify CRM, estimating, project management, marketing automation, and AI communication tools into a single operating system. It replaces fragmented software stacks with a centralized, execution-driven platform.',
      },
      {
        heading: 'Key Features',
        body: 'The platform supports lead-to-close workflows, pipeline management, project tracking, automated communication, and AI-assisted follow-up across multiple teams and job sites.',
      },
      {
        heading: 'Technical Implementation',
        body: 'Built with modern web technologies and designed for scalability, BuilderLync is architected to support high concurrency, real-time updates, and long-term data ownership for contractors.',
      },
    ],
  },
  {
    id: 'sean-scott-richard-llc',
    name: 'Sean Scott Richard LLC',
    legalName: 'Sean Scott Richard LLC',
    shortPitch:
      'Holding, advisory, and fractional executive work across technology, marketing, AI automation, and business infrastructure.',
    description:
      "Sean Scott Richard LLC is Sean's holding and advisory entity for consulting, investments, fractional executive work, and select strategic partnerships.",
    category: 'Holding · Advisory · Fractional Leadership',
    image: '/assets/images/autom8ion-lab.png',
    industry: 'Consulting and Fractional Executive Services',
    knowsAbout: [
      'Fractional CMO',
      'Fractional CTO',
      'Advisory',
      'Strategic operating partnerships',
      'Investments',
    ],
    expandedSections: [
      {
        heading: 'Overview',
        body: 'Supports advisory, investment, fractional executive, and strategic operating work across technology, marketing, AI automation, and business infrastructure. Operates as the engagement vehicle for select fractional CMO and CTO engagements with contractors, service businesses, SaaS startups, and growth-stage operators.',
      },
    ],
  },
];

export const PORTFOLIO_VENTURES = VENTURES;
export const HOMEPAGE_VENTURES = VENTURES;
