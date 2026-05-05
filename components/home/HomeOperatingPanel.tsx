import VenturesPanel from '@/components/editorial/VenturesPanel';
import MonoLabel from '@/components/editorial/MonoLabel';

/**
 * Stand-alone "Currently operating" section — sits below the hero so the
 * companies are still load-bearing proof, but the hero stays focused on
 * the headline + headshot wow-moment.
 */
export default function HomeOperatingPanel() {
  return (
    <section className="border-t border-line px-6 py-16">
      <div className="max-w-[1440px] mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_2fr] gap-10 lg:gap-[clamp(40px,6vw,80px)] items-start">
          <div className="lg:sticky lg:top-32">
            <MonoLabel variant="accent" leading="rule">
              The proof
            </MonoLabel>
            <h2
              className="font-sans font-bold text-ink-primary mt-4"
              style={{
                fontSize: 'clamp(28px, 3.5vw, 48px)',
                lineHeight: 1.05,
                letterSpacing: '-0.025em',
              }}
            >
              I don&apos;t just{' '}
              <span className="text-accent">serve operators</span>.<br />
              I am one.
            </h2>
            <p className="text-ink-secondary text-[15px] leading-[1.6] mt-5 max-w-md">
              These are real businesses, not case studies. They generate revenue, employ
              people, and run on the systems I build.
            </p>
          </div>

          <VenturesPanel />
        </div>
      </div>
    </section>
  );
}
