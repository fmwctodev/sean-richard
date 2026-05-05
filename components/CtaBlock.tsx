import Link from 'next/link';
import { ArrowUpRight } from 'lucide-react';
import { ResumeButton } from '@/components/ResumeButton';
import type { ResumeDownloadLocation } from '@/lib/analytics';

type Props = {
  eyebrow?: string;
  headline: string;
  body?: string;
  primaryHref?: string;
  primaryLabel?: string;
  showResume?: boolean;
  resumeLocation?: ResumeDownloadLocation;
};

export default function CtaBlock({
  eyebrow = 'Ready to Build the System Behind Your Growth?',
  headline = "Tell me what you're operating, what's broken, and what scale looks like.",
  body,
  primaryHref = '/contact',
  primaryLabel = 'Work With Sean',
  showResume = true,
  resumeLocation = 'portfolio_closing',
}: Partial<Props> & { headline?: string }) {
  return (
    <section className="px-6 py-24 border-t border-white/10">
      <div className="max-w-3xl mx-auto text-center">
        {eyebrow && (
          <p className="text-sm text-gray-500 uppercase tracking-wider mb-4">
            ( {eyebrow} )
          </p>
        )}
        <h2 className="text-3xl md:text-5xl font-bold mb-6">{headline}</h2>
        {body && <p className="text-gray-400 text-lg mb-8 leading-relaxed">{body}</p>}
        <div className="flex flex-wrap items-center justify-center gap-4 mt-6">
          <Link
            href={primaryHref}
            className="inline-flex items-center gap-2 px-6 py-3 bg-accent text-white font-semibold hover:bg-accent-dark transition-colors"
          >
            {primaryLabel}
            <ArrowUpRight size={18} />
          </Link>
          {showResume && (
            <ResumeButton variant="secondary" location={resumeLocation} />
          )}
        </div>
      </div>
    </section>
  );
}
