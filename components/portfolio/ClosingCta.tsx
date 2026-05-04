import { Mail, Linkedin, Github } from 'lucide-react';
import { ResumeButton } from '@/components/ResumeButton';
import { SITE } from '@/content/nav';

export default function ClosingCta() {
  return (
    <section className="px-6 py-24 border-t border-white/10">
      <div className="max-w-3xl mx-auto text-center">
        <h2 className="text-3xl md:text-5xl font-bold mb-4">Let&apos;s build something</h2>
        <p className="text-gray-400 text-lg mb-10 leading-relaxed">
          Looking for AI product engineering, full-stack execution, or a 0→1 founding
          partner? Pull the resume below or reach out directly.
        </p>

        <div className="flex flex-wrap items-center justify-center gap-4 mb-10">
          <ResumeButton variant="primary" location="portfolio_closing" />
          <a
            href={`mailto:${SITE.email}`}
            className="inline-flex items-center justify-center gap-2 px-6 py-3 border border-white/20 text-white font-semibold hover:border-accent hover:text-accent transition-colors"
          >
            <Mail size={18} />
            <span>{SITE.email}</span>
          </a>
        </div>

        <div className="flex items-center justify-center gap-6 text-gray-400">
          <a
            href={SITE.social.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 hover:text-accent transition-colors"
          >
            <Linkedin size={18} />
            LinkedIn
          </a>
          <a
            href={SITE.social.githubPersonal}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 hover:text-accent transition-colors"
          >
            <Github size={18} />
            GitHub
          </a>
        </div>
      </div>
    </section>
  );
}
