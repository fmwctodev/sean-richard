import Link from 'next/link';
import EditorialHeadline from '@/components/editorial/EditorialHeadline';
import AvailabilityEyebrow from '@/components/editorial/AvailabilityEyebrow';
import VenturesPanel from '@/components/editorial/VenturesPanel';
import { ResumeButton } from '@/components/ResumeButton';

export default function HomeHero() {
  return (
    <section
      id="hero"
      className="relative px-6"
      style={{ padding: 'clamp(64px, 10vh, 120px) 24px clamp(80px, 12vh, 160px)' }}
    >
      <div className="max-w-[1440px] mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-[minmax(0,1.5fr)_minmax(0,1fr)] gap-10 lg:gap-[clamp(40px,6vw,80px)] items-start">
          <div>
            <div className="mb-10 animate-fade-in">
              <AvailabilityEyebrow detail="Fractional engagements" />
            </div>

            <EditorialHeadline
              as="h1"
              size="hero"
              text="I build the systems {{em}}behind operators{{/em}} who need to scale."
              className="mb-9 animate-slide-up"
            />

            <p className="text-[clamp(17px,1.4vw,21px)] leading-[1.5] text-ink-secondary max-w-[60ch] mb-12 animate-slide-up">
              Fractional CMO/CTO, AI automation, and contractor SaaS — designed and
              deployed inside live businesses, not theory decks. I own four operating
              companies. The systems get tested before they get sold.
            </p>

            <div className="flex flex-wrap items-center gap-4 animate-slide-up">
              <Link
                href="/contact"
                className="group inline-flex items-center gap-3 px-7 py-[18px] rounded-full bg-accent text-bg-primary font-medium text-[15px] hover:bg-ink-primary transition-colors"
              >
                Work with Sean
                <span
                  aria-hidden
                  className="transition-transform group-hover:translate-x-1"
                >
                  →
                </span>
              </Link>
              <Link
                href="/portfolio"
                className="inline-flex items-center px-7 py-[18px] rounded-full border border-line-strong text-ink-primary font-medium text-[15px] hover:border-ink-primary transition-colors"
              >
                View portfolio
              </Link>
              <ResumeButton variant="subtle" location="home_hero" />
            </div>
          </div>

          <div className="lg:self-end animate-fade-in">
            <VenturesPanel />
          </div>
        </div>
      </div>
    </section>
  );
}
