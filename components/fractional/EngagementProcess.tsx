import MonoLabel from '@/components/editorial/MonoLabel';
import { ENGAGEMENT_STEPS } from '@/content/fractional';

export default function EngagementProcess() {
  return (
    <section className="border-t border-line px-6 py-[clamp(64px,10vh,120px)]">
      <div className="max-w-[1440px] mx-auto">
        <div className="max-w-3xl mb-12">
          <div className="mb-6">
            <MonoLabel variant="accent" leading="rule">
              How the Engagement Works
            </MonoLabel>
          </div>
          <h2
            className="font-sans font-extrabold text-ink-primary"
            style={{
              fontSize: 'clamp(32px, 4.5vw, 56px)',
              lineHeight: 1.02,
              letterSpacing: '-0.03em',
            }}
          >
            Three steps, no <span className="text-accent">theater</span>.
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-4">
          {ENGAGEMENT_STEPS.map((step) => (
            <div
              key={step.n}
              className="group relative border border-line bg-bg-elevated/40 p-8 rounded-2xl overflow-hidden"
            >
              <span
                aria-hidden
                className="absolute -top-12 -right-12 w-32 h-32 rounded-full opacity-0 group-hover:opacity-100 transition-opacity"
                style={{
                  background:
                    'radial-gradient(circle, rgba(239, 68, 68, 0.3) 0%, transparent 70%)',
                  filter: 'blur(28px)',
                }}
              />
              <div
                className="relative font-sans font-extrabold text-accent mb-6"
                style={{
                  fontSize: '64px',
                  lineHeight: 1,
                  letterSpacing: '-0.04em',
                  textShadow: '0 0 40px rgba(239, 68, 68, 0.4)',
                }}
              >
                0{step.n}
              </div>
              <h3
                className="relative font-sans font-bold text-ink-primary mb-3"
                style={{ fontSize: '20px', lineHeight: 1.2, letterSpacing: '-0.015em' }}
              >
                {step.title}
              </h3>
              <p className="relative text-ink-secondary text-[14px] leading-[1.6]">
                {step.body}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
