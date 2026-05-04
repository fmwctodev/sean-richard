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

export const CERTIFICATIONS: string[] = [
  'Networking Foundations (LinkedIn Learning)',
  'Linux Command Line',
  'OSHA 10HR',
  'Marketing on Twitter',
  'Phonlab Smartphone Technician',
];
