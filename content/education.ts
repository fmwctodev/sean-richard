export type Degree = {
  credential: string;
  school: string;
  dates: string;
  status?: string;
};

export const DEGREES: Degree[] = [
  {
    credential: 'B.S., Cyber/Computer Forensics & Counterterrorism',
    school: 'Full Sail University',
    dates: 'Aug 2023 – Aug 2026',
    status: 'Nearly complete',
  },
  {
    credential: 'A.S., Information Technology',
    school: 'Full Sail University',
    dates: 'Completed',
  },
  {
    credential: 'A.S., Digital Marketing',
    school: 'Southern New Hampshire University',
    dates: 'Aug 2021 – Aug 2023',
  },
];

export type CertificationLink = {
  label: string;
  source: string;
  url: string;
};

export const CERTIFICATION_LINKS: CertificationLink[] = [
  {
    label: 'LinkedIn Learning Certifications',
    source: 'Google Drive · multiple courses',
    url: 'https://drive.google.com/drive/folders/13IYf7nyBoajfRLH0BgBWGtxF4iSd0npI?usp=drive_link',
  },
  {
    label: 'Anthropic Certifications',
    source: 'Google Drive · Claude / Anthropic skills',
    url: 'https://drive.google.com/drive/folders/1S5sJ7RXNfGjCidSgArzf7nXvKETPZLlP?usp=sharing',
  },
  {
    label: 'LinkedIn Profile · Certifications',
    source: 'Full certification list on LinkedIn',
    url: 'https://www.linkedin.com/in/a8l-sean-richard/details/certifications/',
  },
];
