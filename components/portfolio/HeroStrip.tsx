import MonoLabel from '@/components/editorial/MonoLabel';
import { ResumeButton } from '@/components/ResumeButton';
import { SITE } from '@/content/nav';

export default function HeroStrip() {
  return (
    <section
      className="relative px-6"
      style={{ padding: 'clamp(96px, 14vh, 160px) 24px clamp(48px, 8vh, 96px)' }}
    >
      <div className="max-w-[1440px] mx-auto">
        <div className="mb-8">
          <MonoLabel variant="accent" leading="rule">
            Portfolio
          </MonoLabel>
        </div>

        <h1
          className="font-sans font-extrabold text-ink-primary mb-8"
          style={{
            fontSize: 'clamp(44px, 7vw, 96px)',
            lineHeight: 0.96,
            letterSpacing: '-0.035em',
          }}
        >
          Built, shipped,{' '}
          <span
            className="text-accent"
            style={{ textShadow: '0 0 60px rgba(239, 68, 68, 0.45)' }}
          >
            running in production
          </span>
          .
        </h1>

        <p
          className="text-[clamp(17px,1.4vw,21px)] leading-[1.55] text-ink-secondary max-w-[60ch] mb-3"
        >
          AI Product Engineer · Full-Stack Builder · 0→1 Founder. I ship user-facing AI
          products end-to-end across Next.js, React, TypeScript, and Supabase — with
          LLM-powered workflows and AI agents in production.
        </p>
        <p
          className="font-mono uppercase text-ink-tertiary mb-10"
          style={{ fontSize: '11px', letterSpacing: '0.12em' }}
        >
          {SITE.location}
        </p>

        <div className="flex flex-wrap items-center gap-4">
          <ResumeButton variant="primary" location="portfolio_hero" />
        </div>
      </div>
    </section>
  );
}
