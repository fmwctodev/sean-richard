import { ExternalLink } from 'lucide-react';
import MonoLabel from '@/components/editorial/MonoLabel';
import { DEGREES, CERTIFICATION_LINKS } from '@/content/education';

export default function EducationCredentials() {
  return (
    <section className="border-t border-line px-6 py-[clamp(64px,10vh,120px)]">
      <div className="max-w-[1440px] mx-auto">
        <div className="max-w-3xl mb-12">
          <div className="mb-6">
            <MonoLabel variant="accent" leading="rule">
              Education &amp; Credentials
            </MonoLabel>
          </div>
          <h2
            className="font-sans font-extrabold text-ink-primary"
            style={{
              fontSize: 'clamp(32px, 4.5vw, 56px)',
              lineHeight: 1.02,
              letterSpacing: '-0.03em',
            }}
          >
            Academic &amp; <span className="text-accent">certifications</span>.
          </h2>
        </div>

        <div className="grid md:grid-cols-2 gap-12">
          <div>
            <div className="mb-5">
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
                    className="font-sans font-semibold text-ink-primary mb-1"
                    style={{ fontSize: '17px', lineHeight: 1.3 }}
                  >
                    {degree.credential}
                  </p>
                  <p
                    className="font-mono uppercase text-accent mb-1"
                    style={{ fontSize: '13px', letterSpacing: '0.08em' }}
                  >
                    {degree.school}
                  </p>
                  <p
                    className="font-mono uppercase text-ink-tertiary"
                    style={{ fontSize: '12px', letterSpacing: '0.06em' }}
                  >
                    {degree.dates}
                    {degree.status ? ` · ${degree.status}` : ''}
                  </p>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <div className="mb-5">
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
                      <p
                        className="font-sans font-semibold text-ink-primary group-hover:text-accent transition-colors"
                        style={{ fontSize: '16px' }}
                      >
                        {cert.label}
                      </p>
                      <p
                        className="font-mono uppercase text-ink-tertiary mt-1 truncate"
                        style={{ fontSize: '12px', letterSpacing: '0.06em' }}
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
      </div>
    </section>
  );
}
