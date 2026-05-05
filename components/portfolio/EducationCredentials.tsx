import { ExternalLink } from 'lucide-react';
import Section from '@/components/editorial/Section';
import MonoLabel from '@/components/editorial/MonoLabel';
import { DEGREES, CERTIFICATION_LINKS } from '@/content/education';

export default function EducationCredentials() {
  return (
    <Section
      number="03"
      eyebrow="Education &amp; Credentials"
      title="Academic &amp; {{em}}certifications{{/em}}."
    >
      <div className="grid md:grid-cols-2 gap-12">
        <div>
          <div className="mb-6">
            <MonoLabel variant="tertiary" leading="rule">
              Education
            </MonoLabel>
          </div>
          <ul>
            {DEGREES.map((degree, i) => (
              <li
                key={i}
                className="py-5 border-t border-line last:border-b"
              >
                <p
                  className="font-serif text-[19px] md:text-[20px] text-ink-primary mb-1"
                  style={{ lineHeight: 1.2 }}
                >
                  {degree.credential}
                </p>
                <p
                  className="font-mono uppercase text-accent mb-1"
                  style={{ fontSize: '11px', letterSpacing: '0.08em' }}
                >
                  {degree.school}
                </p>
                <p
                  className="font-mono uppercase text-ink-tertiary"
                  style={{ fontSize: '10px', letterSpacing: '0.06em' }}
                >
                  {degree.dates}
                  {degree.status ? ` · ${degree.status}` : ''}
                </p>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <div className="mb-6">
            <MonoLabel variant="tertiary" leading="rule">
              Certifications
            </MonoLabel>
          </div>
          <ul>
            {CERTIFICATION_LINKS.map((cert) => (
              <li key={cert.url} className="border-t border-line last:border-b">
                <a
                  href={cert.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex items-center justify-between gap-4 py-5 transition-colors"
                >
                  <div className="min-w-0">
                    <p className="font-serif text-[18px] text-ink-primary group-hover:text-accent transition-colors">
                      {cert.label}
                    </p>
                    <p
                      className="font-mono uppercase text-ink-tertiary mt-1 truncate"
                      style={{ fontSize: '10px', letterSpacing: '0.06em' }}
                    >
                      {cert.source}
                    </p>
                  </div>
                  <ExternalLink
                    size={16}
                    className="text-ink-tertiary group-hover:text-accent shrink-0 transition-colors"
                  />
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </Section>
  );
}
