import Link from 'next/link';
import EditorialHeadline from './EditorialHeadline';
import MonoLabel from './MonoLabel';
import { ResumeButton } from '@/components/ResumeButton';
import type { ResumeDownloadLocation } from '@/lib/analytics';

type Props = {
  eyebrow?: string;
  title?: string;
  primaryHref?: string;
  primaryLabel?: string;
  showResume?: boolean;
  resumeLocation?: ResumeDownloadLocation;
};

export default function ClosingCta({
  eyebrow = 'Ready to build the system behind your growth?',
  title = "Tell me what you're {{em}}operating{{/em}}.",
  primaryHref = '/contact',
  primaryLabel = 'Work with Sean',
  showResume = true,
  resumeLocation = 'portfolio_closing',
}: Props) {
  return (
    <section
      className="px-6"
      style={{
        padding: 'clamp(96px, 14vh, 180px) 24px',
        background:
          'linear-gradient(180deg, var(--bg-primary, #0E0D0C) 0%, #1C1A18 100%)',
      }}
    >
      <div className="max-w-4xl mx-auto text-center">
        <div className="mb-8 flex justify-center">
          <MonoLabel variant="accent">{eyebrow}</MonoLabel>
        </div>
        <EditorialHeadline
          text={title}
          size="section"
          className="mx-auto max-w-[18ch] mb-12"
        />
        <div className="flex flex-wrap items-center justify-center gap-4">
          <Link
            href={primaryHref}
            className="inline-flex items-center gap-3 px-7 py-4 bg-accent text-bg-primary font-medium hover:bg-ink-primary transition-colors rounded-full"
          >
            {primaryLabel}{' '}
            <span aria-hidden className="transition-transform group-hover:translate-x-1">
              →
            </span>
          </Link>
          {showResume && (
            <ResumeButton
              variant="secondary"
              location={resumeLocation}
              className="rounded-full px-7 py-4 border-line-strong"
            />
          )}
        </div>
      </div>
    </section>
  );
}
