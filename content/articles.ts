export type Article = {
  slug: string;
  title: string;
  description: string;
  category: string;
  publishedDate: string;
  updatedDate?: string;
  readingMinutes: number;
  excerpt: string;
};

export const ARTICLES: Article[] = [
  {
    slug: 'fractional-cmo-roofing-contractors',
    title: 'What does a fractional CMO do for a roofing company?',
    description:
      'Most roofing companies hit a leadership gap before they hit a lead-volume problem. Here is what a fractional CMO actually does inside a contractor business — and what they do not.',
    category: 'Fractional Leadership',
    publishedDate: '2026-06-29',
    readingMinutes: 7,
    excerpt:
      'Most roofers do not have a marketing problem. They have a marketing leadership problem. A fractional CMO closes the gap between scattered vendors and a unified growth system, without the cost of a full-time hire.',
  },
];
