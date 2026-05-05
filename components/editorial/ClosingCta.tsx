import Link from 'next/link';
import MonoLabel from './MonoLabel';
import { ResumeButton } from '@/components/ResumeButton';
import type { ResumeDownloadLocation } from '@/lib/analytics';

type Props = {
  eyebrow?: string;
  /** Plain text. Use accentWord to highlight a single word in red glow. */
  title?: string;
  /** Word inside `title` to render with the accent glow treatment. */
  accentWord?: string;
  primaryHref?: string;
  primaryLabel?: string;
  showResume?: boolean;
  resumeLocation?: ResumeDownloadLocation;
};

function renderTitleWithAccent(title: string, accentWord?: string) {
  if (!accentWord) return title;
  const idx = title.toLowerCase().indexOf(accentWord.toLowerCase());
  if (idx === -1) return title;
  const before = title.slice(0, idx);
  const word = title.slice(idx, idx + accentWord.length);
  const after = title.slice(idx + accentWord.length);
  return (
    <>
      {before}
      <span
        className="text-accent"
        style={{ textShadow: '0 0 60px rgba(239, 68, 68, 0.5)' }}
      >
        {word}
      </span>
      {after}
    </>
  );
}

export default function ClosingCta({
  eyebrow = 'Ready to build the system behind your growth?',
  title = "Tell me what you're operating.",
  accentWord = 'operating',
  primaryHref = '/contact',
  primaryLabel = 'Work with Sean',
  showResume = true,
  resumeLocation = 'portfolio_closing',
}: Props) {
  return (
    <section className="border-t border-line px-6 py-[clamp(96px,14vh,180px)] relative overflow-hidden">
      <span
        aria-hidden
        className="absolute inset-0 opacity-60"
        style={{
          background:
            'radial-gradient(ellipse at center, rgba(239, 68, 68, 0.12) 0%, transparent 60%)',
        }}
      />

      <div className="relative max-w-4xl mx-auto text-center">
        <div className="mb-8 flex justify-center">
          <MonoLabel variant="accent" leading="dot">
            {eyebrow}
          </MonoLabel>
        </div>

        <h2
          className="font-sans font-extrabold text-ink-primary mb-12"
          style={{
            fontSize: 'clamp(40px, 6vw, 84px)',
            lineHeight: 0.98,
            letterSpacing: '-0.035em',
          }}
        >
          {renderTitleWithAccent(title, accentWord)}
        </h2>

        <div className="flex flex-wrap items-center justify-center gap-4">
          <Link
            href={primaryHref}
            className="group inline-flex items-center gap-3 px-8 py-[18px] rounded-full bg-accent text-bg-primary font-semibold text-[15px] hover:bg-ink-primary transition-colors"
            style={{
              boxShadow: '0 10px 40px -10px rgba(239, 68, 68, 0.6)',
            }}
          >
            {primaryLabel}
            <span aria-hidden className="transition-transform group-hover:translate-x-1">
              →
            </span>
          </Link>
          {showResume && (
            <ResumeButton
              variant="secondary"
              location={resumeLocation}
              className="rounded-full"
            />
          )}
        </div>
      </div>
    </section>
  );
}
