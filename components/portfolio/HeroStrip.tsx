import { HyperText } from '@/components/ui/HyperText';
import { ResumeButton } from '@/components/ResumeButton';
import { SITE } from '@/content/nav';

export default function HeroStrip() {
  return (
    <section className="px-6 pt-32 pb-16">
      <div className="max-w-6xl mx-auto">
        <p className="text-sm text-gray-500 uppercase tracking-wider mb-4">( Portfolio )</p>
        <div className="flex justify-start">
          <HyperText
            text="Sean Richard"
            className="text-5xl sm:text-6xl md:text-8xl font-black tracking-tighter text-white"
            duration={1200}
            animateOnLoad={false}
          />
        </div>
        <p className="text-xl md:text-2xl text-gray-300 mt-6 max-w-3xl leading-relaxed">
          AI Product Engineer · Full-Stack Builder · 0→1 Founder
        </p>
        <p className="text-base text-gray-300 mt-4 max-w-2xl leading-relaxed">
          Full-stack product engineer who ships user-facing AI products end-to-end. Two-time
          founder building Next.js / React / TypeScript applications backed by Supabase,
          with LLM-powered workflows and AI agents in production.{' '}
          <span className="text-gray-500">{SITE.location}</span>
        </p>

        <div className="flex flex-wrap items-center gap-4 mt-10">
          <ResumeButton variant="primary" location="portfolio_hero" />
        </div>
      </div>
    </section>
  );
}
