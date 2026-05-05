import Link from 'next/link';
import { SITE } from '@/content/nav';
import { VENTURES } from '@/content/ventures';
import { ResumeButton } from '@/components/ResumeButton';

export default function Footer() {
  const currentYear = new Date().getFullYear();
  return (
    <footer className="border-t border-line py-12 px-6">
      <div className="max-w-[1440px] mx-auto">
        <p
          className="text-center text-ink-tertiary font-mono uppercase"
          style={{ fontSize: '12px', letterSpacing: '0.06em' }}
        >
          © {currentYear} {SITE.legalEntity} · Built &amp; operated from {SITE.location}
        </p>

        <div className="mt-10 grid grid-cols-1 md:grid-cols-3 gap-10 max-w-5xl mx-auto">
          <div>
            <h4
              className="font-mono uppercase text-ink-secondary mb-4"
              style={{ fontSize: '13px', letterSpacing: '0.12em' }}
            >
              Site
            </h4>
            <nav className="flex flex-col gap-2 text-[15px]">
              <Link href="/" className="text-ink-secondary hover:text-ink-primary transition-colors">
                Home
              </Link>
              <Link
                href="/about"
                className="text-ink-secondary hover:text-ink-primary transition-colors"
              >
                About
              </Link>
              <Link
                href="/portfolio"
                className="text-ink-secondary hover:text-ink-primary transition-colors"
              >
                Portfolio
              </Link>
              <Link
                href="/fractional-cmo-cto"
                className="text-ink-secondary hover:text-ink-primary transition-colors"
              >
                Fractional CMO/CTO
              </Link>
              <Link
                href="/contact"
                className="text-ink-secondary hover:text-ink-primary transition-colors"
              >
                Contact
              </Link>
              <ResumeButton
                variant="footer-link"
                location="footer"
                className="text-ink-secondary hover:text-ink-primary transition-colors"
              >
                Resume (PDF)
              </ResumeButton>
            </nav>
          </div>

          <div>
            <h4
              className="font-mono uppercase text-ink-secondary mb-4"
              style={{ fontSize: '13px', letterSpacing: '0.12em' }}
            >
              Companies
            </h4>
            <nav className="flex flex-col gap-2 text-[15px]">
              {VENTURES.map((v) =>
                v.url ? (
                  <a
                    key={v.id}
                    href={v.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-ink-secondary hover:text-ink-primary transition-colors"
                  >
                    {v.name.replace(/\s+(Inc|LLC)\.?$/, '')}
                  </a>
                ) : (
                  <span key={v.id} className="text-ink-secondary">
                    {v.name.replace(/\s+(Inc|LLC)\.?$/, '')}
                  </span>
                ),
              )}
            </nav>
          </div>

          <div>
            <h4
              className="font-mono uppercase text-ink-secondary mb-4"
              style={{ fontSize: '13px', letterSpacing: '0.12em' }}
            >
              Connect
            </h4>
            <nav className="flex flex-col gap-2 text-[15px]">
              <a
                href={`mailto:${SITE.email}`}
                className="text-ink-secondary hover:text-ink-primary transition-colors"
              >
                {SITE.email}
              </a>
              <a
                href={SITE.social.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="text-ink-secondary hover:text-ink-primary transition-colors"
              >
                LinkedIn
              </a>
              <a
                href={SITE.social.githubPersonal}
                target="_blank"
                rel="noopener noreferrer"
                className="text-ink-secondary hover:text-ink-primary transition-colors"
              >
                GitHub (@fmwctodev)
              </a>
              <a
                href={SITE.social.facebook}
                target="_blank"
                rel="noopener noreferrer"
                className="text-ink-secondary hover:text-ink-primary transition-colors"
              >
                Facebook
              </a>
            </nav>
          </div>
        </div>

        <p className="mt-12 text-center text-ink-tertiary font-serif italic text-[15px]">
          {SITE.tagline}
        </p>
      </div>
    </footer>
  );
}
