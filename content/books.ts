export type BookGroup = 'security' | 'engineering';

export type Book = {
  title: string;
  authors: string[];
  group: BookGroup;
  commentary: string;
  topic: string;
  isbn?: string;
};

export const BOOKS: Book[] = [
  {
    title: 'IT Auditing: Using Controls to Protect Information Assets (3rd ed.)',
    authors: ['Mike Kegerreis', 'Mike Schiller', 'Chris Davis'],
    group: 'security',
    topic: 'IT auditing',
    commentary:
      'Reframed how I review client tech stacks for fractional CTO work — stop trusting vendor claims, document the controls.',
  },
  {
    title: 'Threat Modeling',
    authors: ['Izar Tarandach', 'Matthew J. Coles'],
    group: 'security',
    topic: 'threat modeling',
    commentary:
      'Pushed threat modeling upstream into the design phase — every BuilderLync feature gets modeled before it ships, not after.',
  },
  {
    title: 'Security-Driven Software Development',
    authors: ['Aspen Olmsted'],
    group: 'security',
    topic: 'secure software development',
    commentary:
      'Closed the gap between "we should care about security" and the actual code patterns that put it in the build.',
  },
  {
    title: 'Serious Cryptography',
    authors: ['Jean-Philippe Aumasson'],
    group: 'security',
    topic: 'applied cryptography',
    commentary:
      "Gave me the vocabulary to make real crypto decisions instead of deferring to library defaults — useful when you're handling payment flows and contractor data.",
  },
  {
    title: 'Cloud Security Handbook',
    authors: ['Eyal Estrin'],
    group: 'security',
    topic: 'cloud security',
    commentary:
      'Turned cloud security from an afterthought into a day-one architecture concern across every Supabase + Netlify build.',
  },
  {
    title: 'Python for DevOps',
    authors: ['Noah Gift', 'Kennedy Behrman', 'Alfredo Deza', 'Grig Gheorghiu'],
    group: 'engineering',
    topic: 'DevOps automation',
    commentary:
      "The bridge between scripts and production — the patterns that turned ad-hoc Autom8ion automations into systems I'd trust to run unattended.",
  },
  {
    title: 'Python Crash Course (3rd ed.)',
    authors: ['Eric Matthes'],
    group: 'engineering',
    topic: 'Python fundamentals',
    commentary:
      'A fundamentals reset — a reminder that you ship faster when the basics are sharp instead of half-remembered.',
  },
];

export const BOOKS_BY_GROUP: Record<BookGroup, Book[]> = {
  security: BOOKS.filter((b) => b.group === 'security'),
  engineering: BOOKS.filter((b) => b.group === 'engineering'),
};

export const BOOK_GROUP_TITLES: Record<BookGroup, string> = {
  security: 'Security & Cyber Systems',
  engineering: 'Engineering & Automation',
};
