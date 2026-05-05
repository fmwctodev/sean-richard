export type FractionalOffering = {
  id: 'cmo' | 'cto';
  anchor: string;
  badge: string;
  title: string;
  headline: string;
  body: string[];
  bestFit: string;
  includes: string[];
  outcome: string;
};

export const FRACTIONAL_OFFERINGS: FractionalOffering[] = [
  {
    id: 'cmo',
    anchor: 'cmo',
    badge: 'Fractional CMO',
    title: 'Fractional CMO for Contractors',
    headline: 'Fractional CMO for contractors ready to build a real growth system.',
    body: [
      "Most contractors don't need another marketing vendor. They need senior-level marketing leadership that understands lead generation, sales follow-up, CRM infrastructure, local market positioning, paid media, automation, and operational capacity.",
      'As a fractional CMO, I help contractors replace scattered campaigns and disconnected vendors with a unified growth system: offer positioning, lead generation strategy, sales pipeline design, paid media direction, CRM and follow-up infrastructure, reporting, and accountability across the full customer acquisition process.',
    ],
    bestFit:
      'Roofing, solar, remodeling, restoration, exterior, home service, and construction-related companies that want structured growth without hiring a full-time CMO.',
    includes: [
      'Growth strategy and market positioning',
      'Paid ads strategy across Google, Meta, and other channels',
      'Funnel and landing page architecture',
      'CRM, pipeline, and lead nurture strategy',
      'Sales process and appointment-setting infrastructure',
      'Local SEO and Google Business Profile direction',
      'Offer development and campaign planning',
      'Marketing team / vendor oversight',
      'Reporting, attribution, and performance review',
      'AI-assisted lead handling and follow-up systems',
    ],
    outcome:
      'A cleaner, more accountable customer acquisition system built around real numbers, operational capacity, and long-term scalability.',
  },
  {
    id: 'cto',
    anchor: 'cto',
    badge: 'Fractional CTO',
    title: 'Fractional CTO for Service-Based Companies and Growth-Stage Operators',
    headline: 'Fractional CTO for companies that need technology leadership without full-time overhead.',
    body: [
      'Many growing companies rely on disconnected tools, fragile automations, vendor-built systems, and software decisions made without a clear technical roadmap. That creates operational drag, security gaps, poor data visibility, and expensive rebuilds later.',
      "As a fractional CTO, I help companies make better technology decisions, design stronger infrastructure, evaluate software and vendors, plan automation, improve data flow, and build systems that support scale. The focus isn't technology for its own sake — it's operational leverage.",
    ],
    bestFit:
      "Service-based companies, contractors, SaaS startups, agencies, and operational teams that need executive-level technology direction but aren't ready for a full-time CTO.",
    includes: [
      'Technology roadmap and system architecture',
      'Software stack review and vendor evaluation',
      'CRM, automation, and workflow design',
      'AI automation strategy and implementation planning',
      'Data structure, reporting, and analytics planning',
      'Cybersecurity-aware infrastructure review',
      'Internal tool and SaaS product planning',
      'Development team / vendor oversight',
      'Technical documentation and process mapping',
      'Automation opportunity audits',
    ],
    outcome:
      'A clear technology roadmap, cleaner systems, better vendor decisions, and infrastructure that supports growth instead of slowing it down.',
  },
];

export const ENGAGEMENT_STEPS = [
  {
    n: 1,
    title: 'Systems Review',
    body:
      'Initial diagnostic: current state, bottlenecks, vendor landscape, data flow, gaps. Output: a written assessment with prioritized recommendations.',
  },
  {
    n: 2,
    title: 'Roadmap & Engagement Scope',
    body:
      'Defined deliverables, cadence, and outcomes. Monthly retainer or scoped project, depending on fit.',
  },
  {
    n: 3,
    title: 'Execution & Oversight',
    body:
      'I lead implementation directly or oversee internal teams and vendors. Weekly working sessions, async progress reporting, and continuous iteration.',
  },
];

export const WHO_THIS_IS_FOR = [
  'Contractors and service businesses doing $1M–$10M+ that need real growth infrastructure.',
  "SaaS startups and agencies that need senior technical direction but aren't yet hiring a full-time CTO.",
  'Operators who want strategy directly tied to execution — not theory.',
];

export const WHO_THIS_IS_NOT_FOR = [
  'Pre-revenue startups looking for free advisory.',
  'Companies expecting generic coaching, motivational consulting, or one-size-fits-all playbooks.',
  "Engagements where leadership won't make decisions or commit to execution.",
];

export const FRACTIONAL_OUTCOMES =
  'What success looks like in a typical engagement: predictable lead flow with attribution, reduced vendor sprawl, documented operational systems, AI/automation deployed against real bottlenecks, clean data and reporting, and a leadership team that can defend technical and marketing decisions to investors or partners.';
