import Link from 'next/link';
import MonoLabel from '@/components/editorial/MonoLabel';
import { SERVICES } from '@/content/services';
import { cn } from '@/lib/utils';

export default function HomeServices() {
  const total = SERVICES.length;
  return (
    <section
      id="services"
      className="border-t border-line px-6 py-[clamp(64px,10vh,120px)]"
    >
      <div className="max-w-[1440px] mx-auto">
        <div className="max-w-3xl mb-16">
          <div className="mb-6">
            <MonoLabel variant="accent" leading="rule">
              Services
            </MonoLabel>
          </div>
          <h2
            className="font-sans font-extrabold text-ink-primary mb-6"
            style={{
              fontSize: 'clamp(32px, 4.5vw, 60px)',
              lineHeight: 1.02,
              letterSpacing: '-0.03em',
            }}
          >
            Where strategy, systems, and{' '}
            <span className="text-accent">execution</span> meet.
          </h2>
          <p className="text-[18px] leading-[1.6] text-ink-secondary">
            I work with a limited number of businesses where the problem isn&apos;t
            marketing, technology, or operations in isolation — it&apos;s the absence
            of a connected system. My work focuses on building that system.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-px bg-line border border-line rounded-2xl overflow-hidden">
          {SERVICES.map((service, i) => (
            <Link
              key={service.id}
              href={service.href}
              className="group relative bg-bg-primary p-8 transition-colors hover:bg-bg-elevated overflow-hidden"
            >
              {/* Accent corner glow on hover */}
              <span
                aria-hidden
                className="absolute -top-12 -right-12 w-32 h-32 rounded-full opacity-0 group-hover:opacity-100 transition-opacity"
                style={{
                  background:
                    'radial-gradient(circle, rgba(239, 68, 68, 0.4) 0%, transparent 70%)',
                  filter: 'blur(20px)',
                }}
              />
              <div
                className="relative flex justify-between mb-12 font-mono"
                style={{ fontSize: '13px', letterSpacing: '0.16em' }}
              >
                <span className="text-ink-tertiary">
                  {String(i + 1).padStart(2, '0')} / {String(total + 1).padStart(2, '0')}
                </span>
                <span className="text-accent transition-transform duration-300 group-hover:translate-x-1">
                  →
                </span>
              </div>
              <h3
                className="relative font-sans font-bold text-ink-primary mb-3"
                style={{ fontSize: '22px', lineHeight: 1.15, letterSpacing: '-0.015em' }}
              >
                {service.title}
              </h3>
              <p className="relative text-ink-secondary text-[15px] leading-[1.6]">
                {service.body}
              </p>
            </Link>
          ))}
          <Link
            href="/contact"
            className={cn(
              'group relative p-8 bg-bg-elevated transition-colors hover:bg-accent/5 overflow-hidden',
              'flex flex-col justify-between',
            )}
          >
            <div
              className="font-mono text-accent mb-12"
              style={{ fontSize: '13px', letterSpacing: '0.16em' }}
            >
              <div className="flex justify-between">
                <span>GET IN TOUCH</span>
                <span className="transition-transform group-hover:translate-x-1">→</span>
              </div>
            </div>
            <div>
              <h3
                className="font-sans font-bold text-ink-secondary mb-3"
                style={{ fontSize: '22px', lineHeight: 1.15, letterSpacing: '-0.015em' }}
              >
                Not sure which fits?
              </h3>
              <p className="text-ink-secondary text-[15px] leading-[1.6]">
                Most engagements start with a systems review. Tell me what you&apos;re
                operating and what&apos;s broken — I&apos;ll tell you whether I&apos;m
                the right person and where to start.
              </p>
            </div>
          </Link>
        </div>
      </div>
    </section>
  );
}
