import type { Metadata } from 'next';
import EditorialHeadline from '@/components/editorial/EditorialHeadline';
import MonoLabel from '@/components/editorial/MonoLabel';
import Section from '@/components/editorial/Section';
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

      <section
        className="px-6"
        style={{ padding: 'clamp(96px, 14vh, 160px) 24px clamp(48px, 8vh, 96px)' }}
      >
        <div className="max-w-[1440px] mx-auto">
          <div className="mb-6">
            <MonoLabel variant="accent">About</MonoLabel>
          </div>
          <EditorialHeadline
            as="h1"
            size="hero"
            text="Entrepreneur, systems architect, and {{em}}fractional executive{{/em}}."
            className="mb-8 max-w-[20ch]"
          />
        </div>
      </section>

      <Section number="01" eyebrow="Opening" title="Who I am.">
        <div className="space-y-5 text-[17px] leading-[1.7] text-ink-secondary max-w-[65ch]">
          <p className="first-paragraph">
            Sean Richard is an American entrepreneur, systems architect, software operator,
            and fractional executive focused on building AI-driven automation, business
            infrastructure, and scalable operating systems for contractors and service-based
            companies.
          </p>
          <p>
            He is the founder and operator of Sitehues Media Inc, Autom8ion Lab, and
            BuilderLync Inc. His work centers on replacing fragmented tools, manual
            processes, weak marketing infrastructure, and vendor dependency with unified
            systems designed for real-world execution.
          </p>
          <p>
            Unlike traditional consultants or agency operators, Sean&apos;s work is grounded
            in live operating environments. The systems he builds are deployed,
            stress-tested, refined, and validated inside active businesses before being
            scaled, productized, or applied to client environments.
          </p>
        </div>
      </Section>

      <Section number="02" eyebrow="Background" title="Foundation, military, technical depth.">
        <div className="space-y-5 text-[17px] leading-[1.7] text-ink-secondary max-w-[65ch]">
          <p className="first-paragraph">
            Sean&apos;s professional foundation is rooted in disciplined execution,
            technical systems thinking, and real-world operations.
          </p>
          <p>
            He is a United States Army veteran. That background developed the operational
            mindset, structure, and accountability that continue to shape his approach to
            business and technology — and informs his emphasis on reliability, process
            ownership, and systems that function under pressure, not just in ideal
            conditions.
          </p>
          <p>
            Sean is a graduate of Full Sail University with formal technical and digital
            training, and he has expanded his expertise across cybersecurity, system
            administration, software architecture, marketing systems, automation, and
            business operations. His experience spans Windows and Linux environments,
            networking, DNS, server infrastructure, application-layer security, CRM
            systems, funnel architecture, paid media infrastructure, SaaS product
            development, and AI implementation.
          </p>
          <p>
            Before building software and automation companies, Sean worked across IT
            support, managed services, technical operations, sales, marketing systems, and
            service business operations. That combination produces a practical view of
            technology: systems must be secure, usable, profitable, and maintainable by
            real teams.
          </p>
        </div>
      </Section>

      <Section number="03" eyebrow="Professional Focus" title="Where the work {{em}}lands{{/em}}.">
        <p className="text-[17px] leading-[1.7] text-ink-secondary max-w-[60ch] mb-8 first-paragraph">
          Sean&apos;s work focuses on building systems that directly impact revenue,
          operations, and execution inside service-based businesses. Core areas of focus:
        </p>
        <ul className="grid md:grid-cols-2 gap-x-10 gap-y-3 max-w-[1100px] mb-8">
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
        <p className="text-[17px] leading-[1.7] text-ink-secondary max-w-[60ch]">
          Rather than offering broad advisory services, Sean works selectively with
          companies that need strategy connected to execution. His role is to design,
          build, direct, and improve the systems that allow a business to scale with more
          control and less operational drag.
        </p>
      </Section>

      <Section number="04" eyebrow="Operating Companies" title="Companies I {{em}}run{{/em}}.">
        <div className="space-y-px bg-line">
          {VENTURES.map((v, i) => (
            <div
              key={v.id}
              className="bg-bg-primary p-8 grid grid-cols-1 md:grid-cols-[80px_1fr_120px] gap-3 md:gap-12 items-baseline"
            >
              <span
                className="font-mono text-ink-tertiary"
                style={{ fontSize: '13px', letterSpacing: '0.06em' }}
              >
                / {String(i + 1).padStart(2, '0')}
              </span>
              <div>
                <h3
                  className="font-serif text-[22px] md:text-[24px] text-ink-primary mb-1"
                  style={{ lineHeight: 1.1, letterSpacing: '-0.01em' }}
                >
                  {v.name}
                </h3>
                <p
                  className="font-mono uppercase text-accent mb-3"
                  style={{ fontSize: '11px', letterSpacing: '0.08em' }}
                >
                  {v.category}
                </p>
                <p className="text-ink-secondary leading-[1.55] text-[14px] max-w-[60ch]">
                  {v.description}
                </p>
              </div>
              {v.url && (
                <a
                  href={v.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-mono uppercase text-accent hover:text-ink-primary transition-colors md:text-right"
                  style={{ fontSize: '11px', letterSpacing: '0.06em' }}
                >
                  Visit ↗
                </a>
              )}
            </div>
          ))}
        </div>
      </Section>

      <OperatingInfluences />

      <Section number="06" eyebrow="Operating Philosophy" title="Execution over {{em}}theory{{/em}}.">
        <p className="text-[17px] leading-[1.7] text-ink-secondary max-w-[60ch] mb-8 first-paragraph">
          Sean&apos;s approach emphasizes execution over theory and systems over
          personalities. He prioritizes:
        </p>
        <ul className="grid md:grid-cols-2 gap-x-10 gap-y-3 max-w-[1100px] mb-8">
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
          one-size-fits-all advisory work. His work is focused on building durable systems
          that operators can rely on — systems that connect strategy, technology,
          marketing, automation, and execution.
        </p>
      </Section>

      <ClosingCta resumeLocation="portfolio_closing" />
    </div>
  );
}
