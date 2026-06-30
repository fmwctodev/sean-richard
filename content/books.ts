export type BookCategory = 'Cybersecurity' | 'Engineering';

export type Book = {
  title: string;
  authors: string[];
  category: BookCategory;
  commentary: string;
  topic: string;
  isbn?: string;
};

export const BOOKS: Book[] = [
  {
    title: 'IT Auditing: Using Controls to Protect Information Assets (3rd ed.)',
    authors: ['Mike Kegerreis', 'Mike Schiller', 'Chris Davis'],
    category: 'Cybersecurity',
    topic: 'IT auditing',
    commentary:
      'Reframed how I review client tech stacks for fractional CTO work — stop trusting vendor claims, document the controls.',
  },
  {
    title: 'Threat Modeling',
    authors: ['Izar Tarandach', 'Matthew J. Coles'],
    category: 'Cybersecurity',
    topic: 'threat modeling',
    commentary:
      'Pushed threat modeling upstream into the design phase — every BuilderLync feature gets modeled before it ships, not after.',
  },
  {
    title: 'Security-Driven Software Development',
    authors: ['Aspen Olmsted'],
    category: 'Cybersecurity',
    topic: 'secure software development',
    commentary:
      'Closed the gap between "we should care about security" and the actual code patterns that put it in the build.',
  },
  {
    title: 'Serious Cryptography',
    authors: ['Jean-Philippe Aumasson'],
    category: 'Cybersecurity',
    topic: 'applied cryptography',
    commentary:
      "Gave me the vocabulary to make real crypto decisions instead of deferring to library defaults — useful when you're handling payment flows and contractor data.",
  },
  {
    title: 'Cloud Security Handbook',
    authors: ['Eyal Estrin'],
    category: 'Cybersecurity',
    topic: 'cloud security',
    commentary:
      'Turned cloud security from an afterthought into a day-one architecture concern across every Supabase + Netlify build.',
  },
  {
    title: 'Cybersecurity Blue Team Toolkit',
    authors: ['Nadean H. Tanner'],
    category: 'Cybersecurity',
    topic: 'defensive security operations',
    commentary:
      "A working defender's toolkit — the playbooks I lean on when fractional CTO work shifts from architecture review into hardening live client environments.",
  },
  {
    title: 'Cybersecurity Attacks – Red Team Strategies',
    authors: ['Johann Rehberger'],
    category: 'Cybersecurity',
    topic: 'red team operations',
    commentary:
      'Keeps the threat model honest — knowing how red teams actually establish persistence sharpens what gets built into BuilderLync and Autom8ion from day one.',
  },
  {
    title: 'Python for DevOps',
    authors: ['Noah Gift', 'Kennedy Behrman', 'Alfredo Deza', 'Grig Gheorghiu'],
    category: 'Engineering',
    topic: 'DevOps automation',
    commentary:
      "The bridge between scripts and production — the patterns that turned ad-hoc Autom8ion automations into systems I'd trust to run unattended.",
  },
  {
    title: 'Python Crash Course (3rd ed.)',
    authors: ['Eric Matthes'],
    category: 'Engineering',
    topic: 'Python fundamentals',
    commentary:
      'A fundamentals reset — a reminder that you ship faster when the basics are sharp instead of half-remembered.',
  },
];
