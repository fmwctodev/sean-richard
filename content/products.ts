export type LiveLink = {
  label: string;
  url: string;
};

export type Product = {
  id: string;
  name: string;
  tagline: string;
  stack: string[];
  bullets: string[];
  liveLinks?: LiveLink[];
};

export const SELECTED_PRODUCTS: Product[] = [
  {
    id: 'lyncbot',
    name: 'Lyncbot',
    tagline: 'AI workflow application for business communication and automation.',
    stack: ['Next.js 14', 'React 18', 'TypeScript', 'Node.js', 'Supabase', 'Netlify'],
    bullets: [
      'Designed and shipped an AI workflow application for business communication and automation, owning the full stack from UI to data layer to deployment.',
      'Built user-facing LLM features with eval-driven iteration: prompt versioning, output validation, and CI checks before deploy to catch regressions.',
      'Hardened reliability with strict TypeScript, linting, and pre-deploy verification; production deployments via Netlify.',
    ],
    liveLinks: [{ label: 'Live', url: 'https://lyncbot.netlify.app' }],
  },
  {
    id: 'builderlync',
    name: 'BuilderLync',
    tagline:
      'Contractor-focused SaaS unifying CRM, estimates, scheduling, marketing, document handling, dashboards, and AI assistants.',
    stack: [
      'React',
      'TypeScript',
      'Vite',
      'Supabase',
      'Redux Toolkit',
      'Zustand',
      'Twilio',
      'Stripe',
      'Mapbox',
      'Recharts',
    ],
    bullets: [
      'Founded and built a contractor-focused SaaS unifying CRM, estimates, scheduling, marketing automations, document handling, dashboards, and AI assistants in a single product.',
      'Implemented complex UI surface area: drag-and-drop workflow builders, dynamic forms, charts, PDF export, mapping, and rich state management across modules.',
      'Owned product architecture, technical direction, and iteration cycles informed directly by contractor user feedback.',
    ],
    liveLinks: [
      { label: 'App', url: 'https://app.builderlync.com' },
      { label: 'Field', url: 'https://field.builderlync.com' },
      { label: 'EOS', url: 'https://eos.builderlync.com' },
    ],
  },
  {
    id: 'a8l-os',
    name: 'Autom8ion Lab OS (A8L OS)',
    tagline:
      'Internal-tools-as-product platform converting manual operational processes into structured workflows and AI automations.',
    stack: [
      'React',
      'TypeScript',
      'Vite',
      'Supabase',
      'document parsing',
      'rich text',
      'flow diagrams',
      'analytics',
    ],
    bullets: [
      'Built an internal-tools-as-product platform that converts manual operational processes into structured workflows and AI-assisted automations.',
      'Shipped document and PDF parsing pipelines, rich-text editing, visual flow builders, and analytics surfaces backed by Supabase.',
    ],
    liveLinks: [{ label: 'OS', url: 'https://os.automationlab.com' }],
  },
  {
    id: 'client-web-apps',
    name: 'Client Web Apps & Automation Systems',
    tagline:
      'Production tooling for service businesses — web apps, lead-capture systems, dashboards, and CRM integrations.',
    stack: ['React', 'TypeScript', 'Next.js', 'Tailwind', 'CRM/API integrations'],
    bullets: [
      'Translated client operational pain into shipped production tooling: web apps, lead-capture systems, dashboards, and custom CRM integrations.',
      'Reduced manual work across sales, marketing, and customer follow-up for service-based businesses.',
    ],
    liveLinks: [
      { label: 'BuilderLync Field', url: 'https://field.builderlync.com' },
      { label: 'Revive Customer Success', url: 'https://success.revive-gc.com' },
      { label: 'Tarrytown Contact', url: 'https://contact.tarrytownroofing.com' },
    ],
  },
];
