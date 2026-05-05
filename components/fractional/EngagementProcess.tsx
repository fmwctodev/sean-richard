import Section from '@/components/editorial/Section';
import { ENGAGEMENT_STEPS } from '@/content/fractional';

export default function EngagementProcess() {
  return (
    <Section
      number="04"
      eyebrow="How the Engagement Works"
      title="Three steps, no {{em}}theater{{/em}}."
    >
      <div className="grid md:grid-cols-3 gap-px bg-line">
        {ENGAGEMENT_STEPS.map((step) => (
          <div
            key={step.n}
            className="bg-bg-primary p-10"
          >
            <div
              className="font-mono text-accent mb-6"
              style={{ fontSize: '13px', letterSpacing: '0.12em' }}
            >
              / {String(step.n).padStart(2, '0')}
            </div>
            <h3
              className="font-serif text-[24px] md:text-[26px] text-ink-primary mb-4"
              style={{ lineHeight: 1.1 }}
            >
              {step.title}
            </h3>
            <p className="text-ink-secondary text-[15px] leading-[1.6]">{step.body}</p>
          </div>
        ))}
      </div>
    </Section>
  );
}
