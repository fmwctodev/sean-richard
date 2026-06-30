import type { Metadata } from 'next';
import Link from 'next/link';
import { ArrowUpRight, ArrowRight } from 'lucide-react';
import MonoLabel from '@/components/editorial/MonoLabel';
import SchemaMarkup, { JsonLd } from '@/components/seo/SchemaMarkup';
import {
  BUILDERLYNC_FAQ_DATA,
  getBuilderLyncSchema,
  getBuilderLyncFaqSchema,
  getWebPageSchema,
} from '@/lib/schema';

export const metadata: Metadata = {
  title: 'BuilderLync | Operating System for Builders and Contractors',
  description:
    'BuilderLync is an operating system for builders and contractors — CRM, estimating, project management, lead routing, client communication, and AI-assisted workflows in one platform. Founded by Sean Richard.',
  alternates: { canonical: '/builderlync' },
  openGraph: {
    type: 'website',
    url: 'https://seanrichard.com/builderlync',
    title: 'BuilderLync | Operating System for Builders and Contractors',
    description:
      'A single operating system for the way contractors and home-service businesses actually run — not a stitched stack of disconnected tools. Founded by Sean Richard.',
  },
};

const CAPABILITIES = [
  {
    eyebrow: '01',
    title: 'CRM and lead pipeline',
    body: 'Capture leads from every source, route them automatically, and move every opportunity through a single connected pipeline from first touch to closed deal.',
  },
  {
    eyebrow: '02',
    title: 'Estimating and project management',
    body: 'Build estimates, convert them to jobs, and run projects through scheduling, document handling, and field operations without leaving the platform.',
  },
  {
    eyebrow: '03',
    title: 'Client communication and AI follow-up',
    body: 'Email, SMS, and AI-assisted follow-up live next to the deal record. The same platform that captures the lead nurtures it, books it, and runs it.',
  },
  {
    eyebrow: '04',
    title: 'Marketing automation, inside the same system',
    body: 'Marketing campaigns, drip sequences, reactivation, and review requests run from the same data layer that powers the CRM and project records — no syncs, no exports.',
  },
];

const AUDIENCE = [
  'Roofing, exterior, and home-service contractors who run sales-driven trades',
  'Custom builders and remodelers who need real project management depth',
  'Service businesses tired of stitching CRM, PM, and marketing tools together',
  'Owner-operators who want one connected system instead of five disconnected ones',
];

export default function BuilderLyncPage() {
  return (
    <div>
      <SchemaMarkup path="/builderlync" pageTitle="BuilderLync" />
      <JsonLd
        data={getWebPageSchema({
          path: '/builderlync',
          title: 'BuilderLync | Operating System for Builders and Contractors',
          description:
            'BuilderLync is an operating system for builders and contractors — CRM, estimating, project management, lead routing, client communication, and AI-assisted workflows in one platform. Founded by Sean Richard.',
          dateModified: '2026-05-05',
          primaryImageUrl: 'https://seanrichard.com/opengraph.png',
        })}
      />
      <JsonLd data={getBuilderLyncSchema()} />
      <JsonLd data={getBuilderLyncFaqSchema()} />

      {/* HERO */}
      <section
        className="relative px-6"
        style={{ padding: 'clamp(96px, 14vh, 160px) 24px clamp(64px, 10vh, 120px)' }}
      >
        <div className="max-w-[1440px] mx-auto">
          <div className="max-w-3xl">
            <div className="mb-8">
              <MonoLabel variant="accent" leading="rule">
                Software · Founder-built
              </MonoLabel>
            </div>

            <h1
              className="font-sans font-extrabold text-ink-primary mb-8"
              style={{
                fontSize: 'clamp(44px, 7vw, 96px)',
                lineHeight: 0.96,
                letterSpacing: '-0.035em',
              }}
            >
              BuilderLync — the{' '}
              <span
                className="text-accent"
                style={{ textShadow: '0 0 60px rgba(239, 68, 68, 0.45)' }}
              >
                operating system
              </span>{' '}
              for builders and contractors.
            </h1>

            <p className="text-[clamp(17px,1.4vw,21px)] leading-[1.55] text-ink-secondary max-w-[60ch] mb-10">
              BuilderLync is an operating system for builders and contractors. It
              consolidates CRM, estimating, project management, lead routing, client
              communication, marketing automation, and AI-assisted follow-up into a
              single platform built for the way home-service and construction
              businesses actually run.
            </p>

            <div className="flex flex-wrap items-center gap-4">
              <a
                href="https://builderlync.com"
                target="_blank"
                rel="noopener noreferrer"
                className="group relative inline-flex items-center gap-3 px-8 py-[18px] rounded-full bg-accent text-bg-primary font-semibold text-[15px] transition-all overflow-hidden"
                style={{
                  boxShadow:
                    '0 0 0 1px rgba(255, 255, 255, 0.06) inset, 0 10px 40px -10px rgba(239, 68, 68, 0.6)',
                }}
              >
                <span className="relative z-10">Visit BuilderLync</span>
                <ArrowUpRight
                  size={18}
                  aria-hidden
                  className="relative z-10 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                />
              </a>
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 px-8 py-[18px] rounded-full border border-line-strong text-ink-primary font-medium text-[15px] hover:border-ink-primary hover:bg-bg-elevated transition-all"
              >
                Talk to Sean <ArrowRight size={16} aria-hidden />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* WHAT BUILDERLYNC DOES */}
      <section
        className="border-t border-line px-6"
        style={{ padding: 'clamp(64px, 10vh, 120px) 24px' }}
      >
        <div className="max-w-[1440px] mx-auto">
          <div className="max-w-3xl mb-14">
            <div className="mb-6">
              <MonoLabel variant="accent" leading="rule">
                What BuilderLync Does
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
              One connected system, not five disconnected ones.
            </h2>
            <p className="text-[18px] leading-[1.6] text-ink-secondary">
              The platform supports lead-to-close workflows, pipeline management,
              project tracking, automated communication, and AI-assisted follow-up
              across multiple teams and job sites — from a single shared data layer.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-4">
            {CAPABILITIES.map((c) => (
              <div
                key={c.eyebrow}
                className="relative border border-line bg-bg-elevated/40 p-7 rounded-2xl flex flex-col overflow-hidden"
              >
                <div
                  className="font-mono mb-6 text-accent"
                  style={{ fontSize: '13px', letterSpacing: '0.16em' }}
                >
                  / {c.eyebrow}
                </div>
                <h3
                  className="font-sans font-bold text-ink-primary mb-3"
                  style={{
                    fontSize: 'clamp(20px, 2.2vw, 26px)',
                    lineHeight: 1.1,
                    letterSpacing: '-0.02em',
                  }}
                >
                  {c.title}
                </h3>
                <p className="text-ink-secondary text-[15px] leading-[1.6]">
                  {c.body}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* WHO IT'S FOR */}
      <section
        className="border-t border-line px-6"
        style={{ padding: 'clamp(64px, 10vh, 120px) 24px' }}
      >
        <div className="max-w-[1440px] mx-auto">
          <div className="grid lg:grid-cols-[minmax(0,1fr)_minmax(0,1.2fr)] gap-10 lg:gap-[clamp(40px,6vw,80px)]">
            <div>
              <div className="mb-6">
                <MonoLabel variant="accent" leading="rule">
                  Who It&rsquo;s For
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
                Builders and contractors who run real businesses.
              </h2>
            </div>
            <div className="space-y-3">
              {AUDIENCE.map((row) => (
                <div
                  key={row}
                  className="flex items-start gap-3 border-b border-line pb-3"
                >
                  <span
                    aria-hidden
                    className="text-accent font-mono mt-1 shrink-0"
                    style={{ fontSize: '12px' }}
                  >
                    →
                  </span>
                  <p className="text-ink-secondary text-[16px] leading-[1.55]">
                    {row}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* FOUNDER */}
      <section
        className="border-t border-line px-6"
        style={{ padding: 'clamp(64px, 10vh, 120px) 24px' }}
      >
        <div className="max-w-[1440px] mx-auto">
          <div className="max-w-3xl">
            <div className="mb-6">
              <MonoLabel variant="accent" leading="rule">
                Founder
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
              Founded by Sean Richard.
            </h2>
            <p className="text-[18px] leading-[1.65] text-ink-secondary mb-4">
              BuilderLync is one of three companies operated by{' '}
              <Link href="/about" className="text-accent hover:text-accent-light underline">
                Sean Richard
              </Link>
              , an entrepreneur and systems architect based in Palm Coast, Florida.{' '}
              <Link href="/about" className="text-accent hover:text-accent-light underline">
                Autom8ion Lab
              </Link>{' '}
              develops the AI automation patterns inside the platform, and{' '}
              <Link href="/about" className="text-accent hover:text-accent-light underline">
                Sitehues Media
              </Link>{' '}
              runs the digital infrastructure work that informs how BuilderLync handles
              marketing automation and lead generation.
            </p>
            <p className="text-[18px] leading-[1.65] text-ink-secondary">
              The platform is built by someone who runs the kinds of businesses it
              serves — not a software vendor who has only read about them.
            </p>
            <div className="mt-8">
              <Link
                href="/about"
                className="inline-flex items-center gap-2 text-accent hover:text-accent-light text-[15px] font-medium"
              >
                Read more about Sean <ArrowRight size={16} aria-hidden />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section
        className="border-t border-line px-6"
        style={{ padding: 'clamp(64px, 10vh, 120px) 24px' }}
      >
        <div className="max-w-[1440px] mx-auto">
          <div className="max-w-3xl mb-12">
            <div className="mb-6">
              <MonoLabel variant="accent" leading="rule">
                FAQ
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
              Common questions about{' '}
              <span className="text-accent">BuilderLync</span>.
            </h2>
          </div>

          <div className="max-w-3xl space-y-4">
            {BUILDERLYNC_FAQ_DATA.map((faq, i) => (
              <details
                key={faq.question}
                className="group border border-line bg-bg-elevated/40 rounded-2xl p-6 hover:border-accent/40 transition-colors"
                {...(i === 0 ? { open: true } : {})}
              >
                <summary className="flex items-start justify-between gap-4 cursor-pointer list-none">
                  <h3
                    className="font-sans font-bold text-ink-primary"
                    style={{
                      fontSize: 'clamp(18px, 1.8vw, 22px)',
                      lineHeight: 1.25,
                      letterSpacing: '-0.015em',
                    }}
                  >
                    {faq.question}
                  </h3>
                  <span
                    aria-hidden
                    className="text-accent font-mono text-lg shrink-0 transition-transform group-open:rotate-45"
                  >
                    +
                  </span>
                </summary>
                <p className="mt-4 text-ink-secondary text-[16px] leading-[1.65]">
                  {faq.answer}
                </p>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* CLOSING CTA */}
      <section
        className="border-t border-line px-6"
        style={{ padding: 'clamp(80px, 12vh, 140px) 24px' }}
      >
        <div className="max-w-3xl mx-auto text-center">
          <h2
            className="font-sans font-extrabold text-ink-primary mb-6"
            style={{
              fontSize: 'clamp(32px, 4.5vw, 56px)',
              lineHeight: 1.02,
              letterSpacing: '-0.03em',
            }}
          >
            See how BuilderLync runs your business.
          </h2>
          <p className="text-[18px] leading-[1.6] text-ink-secondary mb-10 max-w-[55ch] mx-auto">
            Sign up, request a demo, or talk to Sean about a partnership or strategic
            engagement.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-4">
            <a
              href="https://builderlync.com"
              target="_blank"
              rel="noopener noreferrer"
              className="group relative inline-flex items-center gap-3 px-8 py-[18px] rounded-full bg-accent text-bg-primary font-semibold text-[15px] transition-all overflow-hidden"
              style={{
                boxShadow:
                  '0 0 0 1px rgba(255, 255, 255, 0.06) inset, 0 10px 40px -10px rgba(239, 68, 68, 0.6)',
              }}
            >
              <span className="relative z-10">Visit BuilderLync</span>
              <ArrowUpRight
                size={18}
                aria-hidden
                className="relative z-10 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
              />
            </a>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 px-8 py-[18px] rounded-full border border-line-strong text-ink-primary font-medium text-[15px] hover:border-ink-primary hover:bg-bg-elevated transition-all"
            >
              Talk to Sean <ArrowRight size={16} aria-hidden />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
