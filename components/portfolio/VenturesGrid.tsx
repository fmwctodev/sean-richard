import { ExternalLink } from 'lucide-react';
import Section from '@/components/editorial/Section';
import { PORTFOLIO_VENTURES } from '@/content/ventures';

export default function VenturesGrid() {
  return (
    <Section
      number="04"
      eyebrow="Ventures"
      title="Where the work {{em}}lives{{/em}}."
      intro="The portfolio of operating companies and the holding entity I run."
    >
      <ul>
        {PORTFOLIO_VENTURES.map((v, i) => {
          const Wrapper = v.url ? 'a' : 'div';
          return (
            <li key={v.id}>
              <Wrapper
                {...(v.url
                  ? {
                      href: v.url,
                      target: '_blank',
                      rel: 'noopener noreferrer',
                    }
                  : {})}
                className="group grid grid-cols-1 md:grid-cols-[80px_1fr_220px] gap-3 md:gap-12 items-baseline py-8 border-t border-line transition-[padding] duration-300 hover:pl-4"
              >
                <span
                  className="font-mono text-ink-tertiary"
                  style={{ fontSize: '13px', letterSpacing: '0.06em' }}
                >
                  / {String(i + 1).padStart(2, '0')}
                </span>
                <span
                  className="font-serif text-[clamp(24px,3vw,36px)] leading-none text-ink-primary group-hover:text-accent transition-colors duration-300 inline-flex items-center gap-3"
                  style={{ letterSpacing: '-0.015em' }}
                >
                  {v.name.replace(/\s+(Inc|LLC)\.?$/, '')}
                  {v.url && (
                    <ExternalLink
                      size={14}
                      className="text-ink-tertiary group-hover:text-accent transition-colors"
                    />
                  )}
                </span>
                <span
                  className="font-mono text-ink-tertiary uppercase md:text-right"
                  style={{ fontSize: '11px', letterSpacing: '0.08em' }}
                >
                  {v.category}
                </span>
              </Wrapper>
              <p className="md:pl-[92px] pb-6 text-ink-secondary text-[14px] leading-[1.6] max-w-[60ch]">
                {v.shortPitch}
              </p>
            </li>
          );
        })}
      </ul>
    </Section>
  );
}
