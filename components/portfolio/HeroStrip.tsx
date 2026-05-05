import EditorialHeadline from '@/components/editorial/EditorialHeadline';
import MonoLabel from '@/components/editorial/MonoLabel';
import { ResumeButton } from '@/components/ResumeButton';
import { SITE } from '@/content/nav';

export default function HeroStrip() {
  return (
    <section
      className="px-6"
      style={{ padding: 'clamp(96px, 14vh, 160px) 24px clamp(48px, 8vh, 96px)' }}
    >
      <div className="max-w-[1440px] mx-auto">
        <div className="mb-6">
          <MonoLabel variant="accent">Portfolio</MonoLabel>
        </div>
        <EditorialHeadline
          as="h1"
          size="hero"
          text="Built, shipped, and {{em}}running in production{{/em}}."
          className="mb-8"
        />
        <p
          className="text-[clamp(17px,1.4vw,21px)] leading-[1.5] text-ink-secondary mb-4"
          style={{ maxWidth: '60ch' }}
        >
          AI Product Engineer · Full-Stack Builder · 0→1 Founder. I ship user-facing AI
          products end-to-end across Next.js, React, TypeScript, and Supabase — with
          LLM-powered workflows and AI agents in production.
        </p>
        <p className="text-[14px] text-ink-tertiary font-mono">{SITE.location}</p>
        <div className="mt-10">
          <ResumeButton variant="primary" location="portfolio_hero" />
        </div>
      </div>
    </section>
  );
}
