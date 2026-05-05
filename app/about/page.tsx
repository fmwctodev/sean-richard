import type { Metadata } from 'next';
import LastUpdated from '@/components/LastUpdated';
import SchemaMarkup, { JsonLd } from '@/components/seo/SchemaMarkup';
import CtaBlock from '@/components/CtaBlock';
import OperatingInfluences from '@/components/about/OperatingInfluences';
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
    <div className="pt-32 pb-20 px-6">
      <SchemaMarkup path="/about" pageTitle="About Sean Richard" />
      <JsonLd data={getReadingListSchema()} />
      <div className="max-w-4xl mx-auto animate-fade-in">
        <p className="text-sm text-gray-500 uppercase tracking-wider mb-4">( About )</p>
        <h1 className="text-5xl md:text-7xl font-black tracking-tighter mb-6">
          About Sean Richard
        </h1>
        <p className="text-xl md:text-2xl text-gray-300 mb-16 leading-relaxed">
          Entrepreneur, systems architect, software operator, and fractional executive.
        </p>

        <div className="space-y-16">
          <section className="space-y-4 text-lg text-gray-400 leading-relaxed">
            <p>
              Sean Richard is an American entrepreneur, systems architect, software
              operator, and fractional executive focused on building AI-driven automation,
              business infrastructure, and scalable operating systems for contractors and
              service-based companies.
            </p>
            <p>
              He is the founder and operator of Sitehues Media Inc, Autom8ion Lab, and
              BuilderLync Inc. His work centers on replacing fragmented tools, manual
              processes, weak marketing infrastructure, and vendor dependency with unified
              systems designed for real-world execution.
            </p>
            <p>
              Unlike traditional consultants or agency operators, Sean&apos;s work is
              grounded in live operating environments. The systems he builds are deployed,
              stress-tested, refined, and validated inside active businesses before being
              scaled, productized, or applied to client environments.
            </p>
          </section>

          <section className="border-t border-white/10 pt-16">
            <h2 className="text-3xl font-bold mb-6 text-gray-300">Background &amp; Foundation</h2>
            <div className="space-y-4 text-lg text-gray-400 leading-relaxed">
              <p>
                Sean&apos;s professional foundation is rooted in disciplined execution,
                technical systems thinking, and real-world operations.
              </p>
              <p>
                He is a United States Army veteran. That background developed the
                operational mindset, structure, and accountability that continue to shape
                his approach to business and technology — and informs his emphasis on
                reliability, process ownership, and systems that function under pressure,
                not just in ideal conditions.
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
                support, managed services, technical operations, sales, marketing systems,
                and service business operations. That combination produces a practical view
                of technology: systems must be secure, usable, profitable, and maintainable
                by real teams.
              </p>
            </div>
          </section>

          <section className="border-t border-white/10 pt-16">
            <h2 className="text-3xl font-bold mb-6 text-gray-300">Professional Focus</h2>
            <p className="text-lg text-gray-400 leading-relaxed mb-6">
              Sean&apos;s work focuses on building systems that directly impact revenue,
              operations, and execution inside service-based businesses. Core areas of
              focus:
            </p>
            <ul className="grid md:grid-cols-2 gap-x-6 gap-y-2 text-gray-300 leading-relaxed mb-6">
              {FOCUS_AREAS.map((area, i) => (
                <li key={i} className="flex gap-2">
                  <span className="text-accent shrink-0">•</span>
                  <span>{area}</span>
                </li>
              ))}
            </ul>
            <p className="text-lg text-gray-400 leading-relaxed">
              Rather than offering broad advisory services, Sean works selectively with
              companies that need strategy connected to execution. His role is to design,
              build, direct, and improve the systems that allow a business to scale with
              more control and less operational drag.
            </p>
          </section>

          <section className="border-t border-white/10 pt-16">
            <h2 className="text-3xl font-bold mb-6 text-gray-300">Companies</h2>
            <div className="space-y-6">
              {VENTURES.map((v) => (
                <div key={v.id} className="p-6 border border-white/10 bg-white/5">
                  <div className="flex items-start justify-between gap-4 mb-3">
                    <h3 className="text-xl font-semibold text-white">{v.name}</h3>
                    {v.url && (
                      <a
                        href={v.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-sm text-accent hover:text-accent-light shrink-0"
                      >
                        Visit ↗
                      </a>
                    )}
                  </div>
                  <p className="text-gray-400 leading-relaxed">{v.description}</p>
                </div>
              ))}
            </div>
          </section>

          <section className="border-t border-white/10 pt-16">
            <h2 className="text-3xl font-bold mb-6 text-gray-300">Operating Philosophy</h2>
            <p className="text-lg text-gray-400 leading-relaxed mb-6">
              Sean&apos;s approach emphasizes execution over theory and systems over
              personalities. He prioritizes:
            </p>
            <ul className="grid md:grid-cols-2 gap-x-6 gap-y-2 text-gray-300 leading-relaxed mb-6">
              {PHILOSOPHY.map((p, i) => (
                <li key={i} className="flex gap-2">
                  <span className="text-accent shrink-0">•</span>
                  <span>{p}</span>
                </li>
              ))}
            </ul>
            <p className="text-lg text-gray-400 leading-relaxed">
              Sean does not offer generic coaching, motivational consulting, or
              one-size-fits-all advisory work. His work is focused on building durable
              systems that operators can rely on — systems that connect strategy,
              technology, marketing, automation, and execution.
            </p>
          </section>

          <OperatingInfluences />

          <LastUpdated date="May 2026" />
        </div>
      </div>

      <CtaBlock
        eyebrow="Ready to Build the System Behind Your Growth?"
        headline="Tell me what you're operating, what's broken, and what scale looks like."
        primaryHref="/contact"
        primaryLabel="Work With Sean"
        showResume
        resumeLocation="portfolio_closing"
      />
    </div>
  );
}
