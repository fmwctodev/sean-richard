import Link from 'next/link';
import { Linkedin, Github, Facebook, FileText } from 'lucide-react';
import { SITE } from '@/content/nav';
import { ResumeButton } from '@/components/ResumeButton';

export default function Footer() {
  return (
    <footer className="border-t border-white/10 py-12 px-6 mt-20">
      <div className="max-w-5xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-xl font-bold mb-2">{SITE.name}</h3>
            <p className="text-gray-400 text-sm leading-relaxed">
              American entrepreneur, systems architect, and software operator focused on AI
              automation and business infrastructure for service-based companies.
            </p>
          </div>

          <div>
            <h4 className="text-sm font-semibold text-gray-300 mb-3">Navigation</h4>
            <nav className="flex flex-col gap-2">
              <Link href="/" className="text-gray-400 hover:text-accent transition-colors">
                Home
              </Link>
              <Link
                href="/about"
                className="text-gray-400 hover:text-accent transition-colors"
              >
                About Sean Richard
              </Link>
              <Link
                href="/portfolio"
                className="text-gray-400 hover:text-accent transition-colors"
              >
                Portfolio
              </Link>
              <Link
                href="/contact"
                className="text-gray-400 hover:text-accent transition-colors"
              >
                Contact
              </Link>
            </nav>
          </div>

          <div>
            <h4 className="text-sm font-semibold text-gray-300 mb-3">Connect</h4>
            <nav className="flex flex-col gap-2">
              <a
                href={SITE.social.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-gray-400 hover:text-accent transition-colors"
              >
                <Linkedin size={18} />
                <span>LinkedIn</span>
              </a>
              <a
                href={SITE.social.githubPersonal}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-gray-400 hover:text-accent transition-colors"
              >
                <Github size={18} />
                <span>GitHub</span>
              </a>
              <a
                href={SITE.social.facebook}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-gray-400 hover:text-accent transition-colors"
              >
                <Facebook size={18} />
                <span>Facebook</span>
              </a>
              <ResumeButton
                variant="footer-link"
                location="footer"
                className="flex items-center gap-2 text-gray-400 hover:text-accent transition-colors"
              >
                <FileText size={18} />
                <span>Resume (PDF)</span>
              </ResumeButton>
            </nav>
          </div>
        </div>

        <div className="mt-8 pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-gray-500">
          <p>© {new Date().getFullYear()} {SITE.name}. All rights reserved.</p>
          <p>
            Founder of Sitehues Media Inc, Autom8ion Lab, and BuilderLync Inc
          </p>
        </div>
      </div>
    </footer>
  );
}
