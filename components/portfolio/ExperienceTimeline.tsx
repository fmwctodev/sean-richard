import MonoLabel from '@/components/editorial/MonoLabel';
import { EXPERIENCE } from '@/content/experience';

export default function ExperienceTimeline() {
  return (
    <section className="border-t border-line px-6 py-[clamp(64px,10vh,120px)]">
      <div className="max-w-[1440px] mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_2fr] gap-10 lg:gap-20">
          <div className="lg:sticky lg:top-32">
            <div className="mb-6">
              <MonoLabel variant="accent" leading="rule">
                Experience
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
              Work <span className="text-accent">history</span>.
            </h2>
          </div>

          <ol>
            {EXPERIENCE.map((entry, index) => (
              <li
                key={entry.id}
                className="py-8 border-t border-line first:border-t-0 first:pt-0"
              >
                <div className="flex flex-col md:flex-row md:items-baseline md:justify-between gap-2 mb-4">
                  <div>
                    <h3
                      className="font-sans font-bold text-ink-primary"
                      style={{
                        fontSize: '22px',
                        lineHeight: 1.15,
                        letterSpacing: '-0.015em',
                      }}
                    >
                      {entry.title}
                    </h3>
                    <p
                      className="font-mono uppercase text-accent mt-1"
                      style={{ fontSize: '11px', letterSpacing: '0.12em' }}
                    >
                      {entry.org}
                    </p>
                  </div>
                  <p
                    className="font-mono uppercase text-ink-tertiary md:text-right shrink-0"
                    style={{ fontSize: '10px', letterSpacing: '0.08em' }}
                  >
                    {entry.dates}
                    {entry.location ? ` · ${entry.location}` : ''}
                  </p>
                </div>

                {entry.summary && (
                  <p className="italic text-ink-secondary mb-4 leading-[1.55] text-[14px]">
                    {entry.summary}
                  </p>
                )}

                <ul className="space-y-2">
                  {entry.bullets.map((bullet, i) => (
                    <li
                      key={i}
                      className="text-ink-secondary text-[14px] leading-[1.55] flex gap-3"
                    >
                      <span className="text-accent shrink-0 font-mono text-[11px] mt-[3px]">
                        →
                      </span>
                      <span>{bullet}</span>
                    </li>
                  ))}
                </ul>
              </li>
            ))}
          </ol>
        </div>
      </div>
    </section>
  );
}
