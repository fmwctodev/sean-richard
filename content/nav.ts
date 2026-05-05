export const SITE = {
  name: 'Sean Richard',
  shortName: 'SR',
  url: 'https://seanrichard.com',
  description:
    'Sean Richard is an American entrepreneur, systems architect, and software operator focused on building AI-driven automation, business infrastructure, and scalable operating systems for contractors and service-based companies. He is the founder and operator of Sitehues Media Inc, Autom8ion Lab, and BuilderLync Inc.',
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
  { to: '/contact', label: 'Contact' },
];
