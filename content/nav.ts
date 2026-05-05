export const SITE = {
  name: 'Sean Richard',
  shortName: 'SR',
  url: 'https://seanrichard.com',
  description:
    'Sean Richard is an entrepreneur, systems architect, and fractional CMO/CTO building AI automation, contractor SaaS, marketing infrastructure, and business systems for service-based companies. Founder and operator of Sitehues Media Inc, Autom8ion Lab, and BuilderLync Inc.',
  tagline: 'Building the systems behind modern service businesses.',
  legalEntity: 'Sean Scott Richard LLC',
  email: 'sean@sitehues.com',
  location: 'Palm Coast, FL',
  phone: '+1 689-310-2712',
  social: {
    linkedin: 'https://www.linkedin.com/in/a8l-sean-richard/',
    githubPersonal: 'https://github.com/fmwctodev',
    githubOrg: 'https://github.com/Autom8ion-Lab',
    facebook: 'https://www.facebook.com/sean.richard.shm',
  },
} as const;

export type NavLink =
  | { to: string; label: string; scrollTarget?: never }
  | { to?: never; label: string; scrollTarget: string };

export const NAV_LINKS: NavLink[] = [
  { to: '/', label: 'Home' },
  { to: '/about', label: 'About' },
  { to: '/portfolio', label: 'Portfolio' },
  { to: '/fractional-cmo-cto', label: 'Fractional CMO/CTO' },
  { to: '/contact', label: 'Contact' },
];
