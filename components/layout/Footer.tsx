import Link from 'next/link';
import { Linkedin, Github, Facebook, Mail, FileText } from 'lucide-react';
import { SITE } from '@/content/nav';
import { VENTURES } from '@/content/ventures';
import { ResumeButton } from '@/components/ResumeButton';

export default function Footer() {
  const currentYear = new Date().getFullYear();
  return (
    <footer className="border-t border-white/10 py-16 px-6 mt-20">
      <div className="max-w-6xl mx-auto">
        <p className="text-center text-lg md:text-xl text-gray-300 max-w-3xl mx-auto mb-12 leading-relaxed">
          {SITE.tagline}
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          <div>
            <h4 className="text-sm font-semibold text-white mb-4">Site</h4>
            <nav className="flex flex-col gap-2 text-sm">
              <Link href="/" className="text-gray-400 hover:text-accent transition-colors">
                Home
              </Link>
              <Link
                href="/about"
                className="text-gray-400 hover:text-accent transition-colors"
              >
                About
              </Link>
              <Link
                href="/portfolio"
                className="text-gray-400 hover:text-accent transition-colors"
              >
                Portfolio
              </Link>
              <Link
                href="/fractional-cmo-cto"
                className="text-gray-400 hover:text-accent transition-colors"
              >
                Fractional CMO/CTO
              </Link>
              <Link
                href="/contact"
                className="text-gray-400 hover:text-accent transition-colors"
              >
                Contact
              </Link>
              <ResumeButton
                variant="footer-link"
                location="footer"
                className="inline-flex items-center gap-2 text-gray-400 hover:text-accent transition-colors"
              >
                <FileText size={14} />
                <span>Resume (PDF)</span>
              </ResumeButton>
            </nav>
          </div>

          <div>
            <h4 className="text-sm font-semibold text-white mb-4">Companies</h4>
            <nav className="flex flex-col gap-2 text-sm">
              {VENTURES.map((v) =>
                v.url ? (
                  <a
                    key={v.id}
                    href={v.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-400 hover:text-accent transition-colors"
                  >
                    {v.name}
                  </a>
                ) : (
                  <span key={v.id} className="text-gray-400">
                    {v.name}
                  </span>
                ),
              )}
            </nav>
          </div>

          <div>
            <h4 className="text-sm font-semibold text-white mb-4">Connect</h4>
            <nav className="flex flex-col gap-2 text-sm">
              <a
                href={`mailto:${SITE.email}`}
                className="inline-flex items-center gap-2 text-gray-400 hover:text-accent transition-colors"
              >
                <Mail size={14} />
                <span>{SITE.email}</span>
              </a>
              <a
                href={SITE.social.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-gray-400 hover:text-accent transition-colors"
              >
                <Linkedin size={14} />
                <span>LinkedIn</span>
              </a>
              <a
                href={SITE.social.githubPersonal}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-gray-400 hover:text-accent transition-colors"
              >
                <Github size={14} />
                <span>GitHub (@fmwctodev)</span>
              </a>
              <a
                href={SITE.social.facebook}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-gray-400 hover:text-accent transition-colors"
              >
                <Facebook size={14} />
                <span>Facebook</span>
              </a>
            </nav>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-white/10 text-center text-sm text-gray-500">
          <p>
            © {currentYear} {SITE.legalEntity}. Built and operated from {SITE.location}.
          </p>
        </div>
      </div>
    </footer>
  );
}
