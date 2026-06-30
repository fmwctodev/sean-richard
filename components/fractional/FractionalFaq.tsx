import MonoLabel from '@/components/editorial/MonoLabel';
import { FRACTIONAL_FAQS, type FractionalFaqAudience } from '@/content/fractional';

type FractionalFaqProps = {
  audience?: Exclude<FractionalFaqAudience, 'all'>;
};

export default function FractionalFaq({ audience }: FractionalFaqProps = {}) {
  const faqs = audience
    ? FRACTIONAL_FAQS.filter((f) => f.audience === 'all' || f.audience === audience)
    : FRACTIONAL_FAQS;

  return (
    <section
      id="faq"
      className="border-t border-line px-6 py-[clamp(64px,10vh,120px)]"
    >
      <div className="max-w-[1440px] mx-auto">
        <div className="max-w-3xl mb-12">
          <div className="mb-6">
            <MonoLabel variant="accent" leading="rule">
              Common Questions
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
            Questions buyers ask <span className="text-accent">before</span> the call.
          </h2>
        </div>

        <div className="max-w-[900px] divide-y divide-line border-y border-line">
          {faqs.map((faq, i) => (
            <details
              key={faq.question}
              className="group py-6"
              open={i === 0}
            >
              <summary className="flex cursor-pointer items-start justify-between gap-6 list-none">
                <h3
                  className="font-sans font-semibold text-ink-primary leading-snug"
                  style={{ fontSize: 'clamp(18px, 1.8vw, 22px)', letterSpacing: '-0.01em' }}
                >
                  {faq.question}
                </h3>
                <span
                  aria-hidden
                  className="shrink-0 text-accent font-mono mt-1 transition-transform group-open:rotate-45"
                  style={{ fontSize: '20px' }}
                >
                  +
                </span>
              </summary>
              <p className="mt-4 text-[16px] leading-[1.7] text-ink-secondary max-w-[72ch]">
                {faq.answer}
              </p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}
