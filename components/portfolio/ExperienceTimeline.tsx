import Section from '@/components/editorial/Section';
import { EXPERIENCE } from '@/content/experience';

export default function ExperienceTimeline() {
  return (
    <Section
      number="02"
      eyebrow="Experience"
      title="Work {{em}}history{{/em}}."
    >
      <ol>
        {EXPERIENCE.map((entry, index) => (
          <li
            key={entry.id}
            className="grid grid-cols-1 md:grid-cols-[80px_1fr] gap-3 md:gap-12 py-10 border-t border-line"
          >
            <span
              className="font-mono text-ink-tertiary"
              style={{ fontSize: '13px', letterSpacing: '0.06em' }}
            >
              / {String(index + 1).padStart(2, '0')}
            </span>
            <div>
              <div className="flex flex-col md:flex-row md:items-baseline md:justify-between gap-2 mb-4">
                <div>
                  <h3
                    className="font-serif text-[24px] md:text-[28px] text-ink-primary"
                    style={{ lineHeight: 1.1, letterSpacing: '-0.01em' }}
                  >
                    {entry.title}
                  </h3>
                  <p
                    className="font-mono uppercase text-accent mt-1"
                    style={{ fontSize: '12px', letterSpacing: '0.08em' }}
                  >
                    {entry.org}
                  </p>
                </div>
                <p
                  className="font-mono uppercase text-ink-tertiary md:text-right shrink-0"
                  style={{ fontSize: '11px', letterSpacing: '0.08em' }}
                >
                  {entry.dates}
                  {entry.location ? ` · ${entry.location}` : ''}
                </p>
              </div>

              {entry.summary && (
                <p className="italic text-ink-secondary mb-4 leading-[1.55] text-[15px] font-serif">
                  {entry.summary}
                </p>
              )}

              <ul className="space-y-2">
                {entry.bullets.map((bullet, i) => (
                  <li
                    key={i}
                    className="text-ink-secondary text-[14px] leading-[1.55] flex gap-3"
                  >
                    <span className="text-accent shrink-0 font-mono text-[12px] mt-[2px]">
                      →
                    </span>
                    <span>{bullet}</span>
                  </li>
                ))}
              </ul>
            </div>
          </li>
        ))}
      </ol>
    </Section>
  );
}
