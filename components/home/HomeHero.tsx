import Link from 'next/link';
import AvailabilityEyebrow from '@/components/editorial/AvailabilityEyebrow';
import { ResumeButton } from '@/components/ResumeButton';

export default function HomeHero() {
  return (
    <section
      id="hero"
      className="relative px-6"
      style={{
        padding: 'clamp(64px, 10vh, 120px) 24px clamp(64px, 10vh, 120px)',
        minHeight: '92vh',
      }}
    >
      <div className="max-w-[1440px] mx-auto h-full">
        <div className="grid grid-cols-1 lg:grid-cols-[minmax(0,1.5fr)_minmax(0,1fr)] gap-10 lg:gap-[clamp(40px,6vw,80px)] items-center min-h-[80vh]">
          {/* LEFT — copy, CTAs */}
          <div>
            <div className="mb-10 animate-fade-in">
              <AvailabilityEyebrow detail="Fractional engagements" />
            </div>

            <h1
              className="font-sans font-extrabold text-ink-primary mb-8 animate-slide-up"
              style={{
                fontSize: 'clamp(44px, 7vw, 96px)',
                lineHeight: 0.96,
                letterSpacing: '-0.035em',
              }}
            >
              I build the systems{' '}
              <span
                className="text-accent"
                style={{ textShadow: '0 0 60px rgba(239, 68, 68, 0.45)' }}
              >
                behind operators
              </span>
              <br />
              who need to scale.
            </h1>

            <p className="text-[clamp(17px,1.4vw,21px)] leading-[1.55] text-ink-secondary max-w-[58ch] mb-10 animate-slide-up">
              Fractional CMO/CTO, AI automation, and contractor SaaS — designed and
              deployed inside live businesses, not theory decks.{' '}
              <span className="text-ink-primary font-medium">
                I own four operating companies.
              </span>{' '}
              The systems get tested before they get sold.
            </p>

            <div className="flex flex-wrap items-center gap-4 animate-slide-up">
              <Link
                href="/contact"
                className="group relative inline-flex items-center gap-3 px-8 py-[18px] rounded-full bg-accent text-bg-primary font-semibold text-[15px] transition-all overflow-hidden"
                style={{
                  boxShadow:
                    '0 0 0 1px rgba(255, 255, 255, 0.06) inset, 0 10px 40px -10px rgba(239, 68, 68, 0.6)',
                }}
              >
                <span className="relative z-10">Work with Sean</span>
                <span
                  aria-hidden
                  className="relative z-10 transition-transform group-hover:translate-x-1"
                >
                  →
                </span>
                <span
                  aria-hidden
                  className="absolute inset-0 bg-gradient-to-r from-accent via-accent-light to-accent opacity-0 group-hover:opacity-100 transition-opacity"
                />
              </Link>
              <Link
                href="/portfolio"
                className="inline-flex items-center px-8 py-[18px] rounded-full border border-line-strong text-ink-primary font-medium text-[15px] hover:border-ink-primary hover:bg-bg-elevated transition-all"
              >
                View portfolio
              </Link>
              <ResumeButton variant="subtle" location="home_hero" />
            </div>
          </div>

          {/* RIGHT — headshot with glow ring */}
          <div className="relative flex justify-center lg:justify-end animate-fade-in">
            <div className="relative">
              {/* Glow halo behind headshot */}
              <div
                aria-hidden
                className="absolute inset-0 -m-12 rounded-full"
                style={{
                  background:
                    'radial-gradient(circle at center, rgba(239, 68, 68, 0.35) 0%, rgba(239, 68, 68, 0.08) 45%, transparent 70%)',
                  filter: 'blur(40px)',
                }}
              />
              {/* Subtle ring */}
              <div
                aria-hidden
                className="absolute inset-0 -m-3 rounded-full border border-accent/30"
                style={{
                  boxShadow:
                    '0 0 60px rgba(239, 68, 68, 0.2), inset 0 0 60px rgba(239, 68, 68, 0.1)',
                }}
              />
              {/* Headshot */}
              <div className="relative w-[260px] sm:w-[320px] md:w-[380px] lg:w-[420px]">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src="/assets/headshots/sean-richard.png"
                  alt="Sean Richard - Professional Headshot"
                  className="relative w-full h-auto"
                  width={550}
                  height={700}
                  loading="eager"
                  fetchPriority="high"
                />
              </div>
              {/* Tech-y corner brackets */}
              <CornerBracket position="top-left" />
              <CornerBracket position="top-right" />
              <CornerBracket position="bottom-left" />
              <CornerBracket position="bottom-right" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function CornerBracket({
  position,
}: {
  position: 'top-left' | 'top-right' | 'bottom-left' | 'bottom-right';
}) {
  const positionClasses: Record<typeof position, string> = {
    'top-left': '-top-2 -left-2 border-t border-l',
    'top-right': '-top-2 -right-2 border-t border-r',
    'bottom-left': '-bottom-2 -left-2 border-b border-l',
    'bottom-right': '-bottom-2 -right-2 border-b border-r',
  };
  return (
    <span
      aria-hidden
      className={`absolute w-5 h-5 border-accent/50 ${positionClasses[position]}`}
    />
  );
}
