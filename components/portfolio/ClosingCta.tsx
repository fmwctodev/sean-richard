import Link from 'next/link';
import MonoLabel from '@/components/editorial/MonoLabel';
import { ResumeButton } from '@/components/ResumeButton';

export default function PortfolioClosingCta() {
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
            Ready to build the system behind your growth?
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
          Tell me what you&apos;re{' '}
          <span
            className="text-accent"
            style={{ textShadow: '0 0 60px rgba(239, 68, 68, 0.5)' }}
          >
            operating
          </span>
          .
        </h2>

        <div className="flex flex-wrap items-center justify-center gap-4">
          <Link
            href="/contact"
            className="group inline-flex items-center gap-3 px-8 py-[18px] rounded-full bg-accent text-bg-primary font-semibold text-[15px] hover:bg-ink-primary transition-colors"
            style={{
              boxShadow: '0 10px 40px -10px rgba(239, 68, 68, 0.6)',
            }}
          >
            Work with Sean
            <span aria-hidden className="transition-transform group-hover:translate-x-1">
              →
            </span>
          </Link>
          <ResumeButton
            variant="secondary"
            location="portfolio_closing"
            className="rounded-full"
          />
        </div>
      </div>
    </section>
  );
}
