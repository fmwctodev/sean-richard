import type { Metadata } from 'next';
import MonoLabel from '@/components/editorial/MonoLabel';
import ClosingCta from '@/components/editorial/ClosingCta';
import OperatingInfluences from '@/components/about/OperatingInfluences';
import SchemaMarkup, { JsonLd } from '@/components/seo/SchemaMarkup';
import { VENTURES } from '@/content/ventures';
import { getReadingListSchema } from '@/lib/schema';

export const metadata: Metadata = {
  title: 'About Sean Richard | Entrepreneur, Systems Architect & Fractional Executive',
  description:
    'Learn about Sean Richard, founder of Sitehues Media, Autom8ion Lab, and BuilderLync. Sean builds AI automation, contractor SaaS, and operational systems for service-based businesses.',
  alternates: { canonical: '/about' },
  openGraph: { type: 'profile', url: 'https://seanrichard.com/about' },
};

const FOCUS_AREAS = [
  'Fractional CMO leadership for contractors',
  'Fractional CTO leadership for service-based companies and growth-stage operators',
  'AI automation for business operations',
  'Voice agents and AI-driven communication systems',
  'SaaS platform architecture for contractors',
  'CRM, pipeline, and lifecycle infrastructure',
  'Lead-to-close system design',
  'Paid media and funnel infrastructure',
  'Internal process automation and orchestration',
  'Security-aware platform and workflow design',
  'Custom software and internal tool development',
];

const PHILOSOPHY = [
  'Ownership of infrastructure and data',
  'Repeatable, documented processes',
  'Long-term scalability over short-term tactics',
  'Security, reliability, and operational clarity',
  'Real-world validation before scaling outward',
  'Strategy directly tied to implementation',
  'Technology that improves business performance',
];

export default function AboutPage() {
  return (
    <div>
      <SchemaMarkup path="/about" pageTitle="About Sean Richard" />
      <JsonLd data={getReadingListSchema()} />

      {/* HERO with headshot */}
      <section
        className="relative px-6"
        style={{ padding: 'clamp(96px, 14vh, 160px) 24px clamp(64px, 10vh, 120px)' }}
      >
        <div className="max-w-[1440px] mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-[minmax(0,1.5fr)_minmax(0,1fr)] gap-10 lg:gap-[clamp(40px,6vw,80px)] items-center">
            <div>
              <div className="mb-8">
                <MonoLabel variant="accent" leading="rule">
                  About
                </MonoLabel>
              </div>

              <h1
                className="font-sans font-extrabold text-ink-primary mb-8 max-w-[18ch]"
                style={{
                  fontSize: 'clamp(44px, 7vw, 96px)',
                  lineHeight: 0.96,
                  letterSpacing: '-0.035em',
                }}
              >
                Entrepreneur, systems architect, and{' '}
                <span
                  className="text-accent"
                  style={{ textShadow: '0 0 60px rgba(239, 68, 68, 0.45)' }}
                >
                  fractional executive
                </span>
                .
              </h1>

              <p className="text-[clamp(17px,1.4vw,21px)] leading-[1.55] text-ink-secondary max-w-[58ch]">
                Sean Richard builds AI-driven automation, business infrastructure, and
                scalable operating systems for contractors and service-based companies.
                He is the founder and operator of{' '}
                <span className="text-ink-primary font-medium">Sitehues Media Inc</span>,{' '}
                <span className="text-ink-primary font-medium">Autom8ion Lab</span>,
                and{' '}
                <span className="text-ink-primary font-medium">BuilderLync Inc</span>.
              </p>
            </div>

            <div className="relative flex justify-center lg:justify-end">
              <div className="relative">
                <div
                  aria-hidden
                  className="absolute inset-0 -m-12 rounded-full"
                  style={{
                    background:
                      'radial-gradient(circle at center, rgba(239, 68, 68, 0.35) 0%, rgba(239, 68, 68, 0.08) 45%, transparent 70%)',
                    filter: 'blur(40px)',
                  }}
                />
                <div
                  aria-hidden
                  className="absolute inset-0 -m-3 rounded-full border border-accent/30"
                />
                <div className="relative w-[240px] sm:w-[280px] md:w-[340px] lg:w-[380px]">
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
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Background & Foundation */}
      <section className="border-t border-line px-6 py-[clamp(64px,10vh,120px)]">
        <div className="max-w-[1440px] mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-[1fr_2fr] gap-10 lg:gap-20">
            <div className="lg:sticky lg:top-32">
              <div className="mb-6">
                <MonoLabel variant="accent" leading="rule">
                  Background &amp; Foundation
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
                Foundation: <span className="text-accent">military, technical depth</span>.
              </h2>
            </div>
            <div className="space-y-5 text-[17px] leading-[1.7] text-ink-secondary max-w-[65ch]">
              <p>
                Sean&apos;s professional foundation is rooted in disciplined execution,
                technical systems thinking, and real-world operations.
              </p>
              <p>
                He is a{' '}
                <span className="text-ink-primary font-medium">
                  United States Army veteran
                </span>
                . That background developed the operational mindset, structure, and
                accountability that continue to shape his approach to business and
                technology — and informs his emphasis on reliability, process ownership,
                and systems that function under pressure, not just in ideal conditions.
              </p>
              <p>
                Sean is a graduate of{' '}
                <span className="text-ink-primary font-medium">Full Sail University</span>{' '}
                with formal technical and digital training. He has expanded his expertise
                across cybersecurity, system administration, software architecture,
                marketing systems, automation, and business operations. His experience
                spans Windows and Linux environments, networking, DNS, server
                infrastructure, application-layer security, CRM systems, funnel
                architecture, paid media infrastructure, SaaS product development, and AI
                implementation.
              </p>
              <p>
                Before building software and automation companies, Sean worked across IT
                support, managed services, technical operations, sales, marketing systems,
                and service business operations. That combination produces a practical
                view of technology: systems must be{' '}
                <span className="text-ink-primary font-medium">
                  secure, usable, profitable, and maintainable by real teams
                </span>
                .
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Professional Focus */}
      <section className="border-t border-line px-6 py-[clamp(64px,10vh,120px)]">
        <div className="max-w-[1440px] mx-auto">
          <div className="max-w-3xl mb-12">
            <div className="mb-6">
              <MonoLabel variant="accent" leading="rule">
                Professional Focus
              </MonoLabel>
            </div>
            <h2
              className="font-sans font-extrabold text-ink-primary mb-6"
              style={{
                fontSize: 'clamp(32px, 4.5vw, 56px)',
                lineHeight: 1.02,
                letterSpacing: '-0.03em',
              }}
            >
              Where the work <span className="text-accent">lands</span>.
            </h2>
            <p className="text-[18px] leading-[1.6] text-ink-secondary">
              Sean&apos;s work focuses on building systems that directly impact revenue,
              operations, and execution inside service-based businesses.
            </p>
          </div>

          <ul className="grid md:grid-cols-2 lg:grid-cols-3 gap-x-10 gap-y-3 max-w-[1100px] mb-10">
            {FOCUS_AREAS.map((area, i) => (
              <li
                key={i}
                className="flex gap-3 text-ink-secondary leading-[1.5] text-[15px]"
              >
                <span className="text-accent shrink-0 font-mono text-[12px] mt-[2px]">
                  →
                </span>
                <span>{area}</span>
              </li>
            ))}
          </ul>

          <p className="text-[17px] leading-[1.7] text-ink-secondary max-w-[65ch]">
            Rather than offering broad advisory services, Sean works selectively with
            companies that need strategy connected to execution. His role is to design,
            build, direct, and improve the systems that allow a business to scale with
            more control and less operational drag.
          </p>
        </div>
      </section>

      {/* Companies */}
      <section className="border-t border-line px-6 py-[clamp(64px,10vh,120px)]">
        <div className="max-w-[1440px] mx-auto">
          <div className="max-w-3xl mb-12">
            <div className="mb-6">
              <MonoLabel variant="accent" leading="rule">
                Operating Companies
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
              Companies I <span className="text-accent">run</span>.
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-4">
            {VENTURES.map((v, i) => (
              <article
                key={v.id}
                className="group relative border border-line bg-bg-elevated/40 p-7 rounded-2xl overflow-hidden hover:border-accent/40 transition-all"
              >
                <span
                  aria-hidden
                  className="absolute -top-12 -right-12 w-40 h-40 rounded-full opacity-0 group-hover:opacity-100 transition-opacity"
                  style={{
                    background:
                      'radial-gradient(circle, rgba(239, 68, 68, 0.3) 0%, transparent 70%)',
                    filter: 'blur(28px)',
                  }}
                />
                <div
                  className="relative font-mono mb-6 flex items-center justify-between"
                  style={{ fontSize: '13px', letterSpacing: '0.16em' }}
                >
                  <span className="text-accent">/ {String(i + 1).padStart(2, '0')}</span>
                  <span className="text-ink-tertiary uppercase">{v.category}</span>
                </div>
                <h3
                  className="relative font-sans font-bold text-ink-primary mb-3"
                  style={{
                    fontSize: '22px',
                    lineHeight: 1.1,
                    letterSpacing: '-0.02em',
                  }}
                >
                  {v.name}
                </h3>
                <p className="relative text-ink-secondary leading-[1.6] text-[15px] mb-4">
                  {v.description}
                </p>
                {v.url && (
                  <a
                    href={v.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="relative inline-flex items-center gap-2 font-mono uppercase text-accent hover:text-ink-primary transition-colors"
                    style={{ fontSize: '13px', letterSpacing: '0.06em' }}
                  >
                    Visit ↗
                  </a>
                )}
              </article>
            ))}
          </div>
        </div>
      </section>

      <OperatingInfluences />

      {/* Operating Philosophy */}
      <section className="border-t border-line px-6 py-[clamp(64px,10vh,120px)]">
        <div className="max-w-[1440px] mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-[1fr_2fr] gap-10 lg:gap-20">
            <div className="lg:sticky lg:top-32">
              <div className="mb-6">
                <MonoLabel variant="accent" leading="rule">
                  Operating Philosophy
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
                Execution over <span className="text-accent">theory</span>.
              </h2>
            </div>
            <div>
              <p className="text-[17px] leading-[1.7] text-ink-secondary max-w-[60ch] mb-8">
                Sean&apos;s approach emphasizes execution over theory and systems over
                personalities. He prioritizes:
              </p>
              <ul className="grid sm:grid-cols-2 gap-x-6 gap-y-3 max-w-[60ch] mb-8">
                {PHILOSOPHY.map((p, i) => (
                  <li
                    key={i}
                    className="flex gap-3 text-ink-secondary leading-[1.5] text-[15px]"
                  >
                    <span className="text-accent shrink-0 font-mono text-[12px] mt-[2px]">
                      →
                    </span>
                    <span>{p}</span>
                  </li>
                ))}
              </ul>
              <p className="text-[17px] leading-[1.7] text-ink-secondary max-w-[60ch]">
                Sean does not offer generic coaching, motivational consulting, or
                one-size-fits-all advisory work. His work is focused on building durable
                systems that operators can rely on — systems that connect strategy,
                technology, marketing, automation, and execution.
              </p>
            </div>
          </div>
        </div>
      </section>

      <ClosingCta resumeLocation="portfolio_closing" />
    </div>
  );
}
