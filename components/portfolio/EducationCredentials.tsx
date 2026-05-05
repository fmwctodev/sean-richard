import { GraduationCap, Award, ExternalLink } from 'lucide-react';
import { DEGREES, CERTIFICATION_LINKS } from '@/content/education';

export default function EducationCredentials() {
  return (
    <section className="px-6 py-20 border-t border-white/10">
      <div className="max-w-6xl mx-auto">
        <div className="mb-12">
          <p className="text-sm text-gray-500 uppercase tracking-wider mb-3">
            ( Education &amp; Credentials )
          </p>
          <h2 className="text-3xl md:text-5xl font-bold">Academic &amp; certifications</h2>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          <div>
            <h3 className="flex items-center gap-2 text-xl font-bold text-white mb-6">
              <GraduationCap size={22} className="text-accent" />
              Education
            </h3>
            <ul className="space-y-6">
              {DEGREES.map((degree, i) => (
                <li
                  key={i}
                  className="border border-white/10 p-5 hover:border-white/20 transition-colors"
                >
                  <p className="font-semibold text-white">{degree.credential}</p>
                  <p className="text-gray-300 text-sm mt-1">{degree.school}</p>
                  <p className="text-gray-500 text-xs mt-2">
                    {degree.dates}
                    {degree.status ? ` · ${degree.status}` : ''}
                  </p>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="flex items-center gap-2 text-xl font-bold text-white mb-6">
              <Award size={22} className="text-accent" />
              Certifications
            </h3>
            <ul className="space-y-3">
              {CERTIFICATION_LINKS.map((cert) => (
                <li key={cert.url}>
                  <a
                    href={cert.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group flex items-center justify-between gap-3 border border-white/10 hover:border-accent/40 px-4 py-3 transition-colors"
                  >
                    <div className="min-w-0">
                      <p className="text-sm font-semibold text-white group-hover:text-accent transition-colors">
                        {cert.label}
                      </p>
                      <p className="text-xs text-gray-500 mt-0.5 truncate">
                        {cert.source}
                      </p>
                    </div>
                    <ExternalLink
                      size={16}
                      className="text-gray-500 group-hover:text-accent shrink-0"
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
