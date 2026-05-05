import type { Metadata } from 'next';
import EditorialHeadline from '@/components/editorial/EditorialHeadline';
import MonoLabel from '@/components/editorial/MonoLabel';
import SchemaMarkup from '@/components/seo/SchemaMarkup';
import ContactForm from '@/components/contact/ContactForm';
import { SITE } from '@/content/nav';

export const metadata: Metadata = {
  title: 'Contact Sean Richard | Fractional CMO, CTO, AI Automation & Systems',
  description:
    'Contact Sean Richard for serious inquiries related to fractional CMO support, fractional CTO leadership, AI automation, software platforms, contractor systems, and strategic partnerships.',
  alternates: { canonical: '/contact' },
};

export default function ContactPage() {
  return (
    <div>
      <SchemaMarkup path="/contact" pageTitle="Contact" />

      <section
        className="px-6"
        style={{ padding: 'clamp(96px, 14vh, 160px) 24px clamp(48px, 8vh, 80px)' }}
      >
        <div className="max-w-3xl mx-auto">
          <div className="mb-6">
            <MonoLabel variant="accent">Contact</MonoLabel>
          </div>
          <EditorialHeadline
            as="h1"
            size="hero"
            text="Tell me what you're {{em}}operating{{/em}}, what's broken, and what scale looks like."
            className="mb-8"
          />
          <p
            className="text-[clamp(17px,1.4vw,21px)] leading-[1.5] text-ink-secondary"
            style={{ maxWidth: '60ch' }}
          >
            Serious inquiries only. This isn&apos;t a general contact form.
          </p>
        </div>
      </section>

      <section className="px-6 pb-20">
        <div className="max-w-3xl mx-auto">
          <ContactForm />

          <div className="mt-16 grid md:grid-cols-[80px_1fr] gap-3 md:gap-12 items-start border-t border-line pt-12">
            <div className="font-mono text-ink-tertiary text-[13px] tracking-[0.12em]">
              /
            </div>
            <div>
              <div className="mb-3">
                <MonoLabel variant="accent">What to expect</MonoLabel>
              </div>
              <ul className="space-y-3">
                {[
                  'Qualified inquiries reviewed within 48 hours.',
                  'Direct conversation with Sean — not a sales team.',
                  'No courses, generic coaching, or low-ticket offers.',
                  'Clear discussion around systems, execution, technology, marketing infrastructure, and business outcomes.',
                  "If there's no fit, you'll be told directly.",
                ].map((line, i) => (
                  <li
                    key={i}
                    className="text-ink-secondary leading-[1.55] text-[15px] flex gap-3"
                  >
                    <span className="text-accent shrink-0 font-mono text-[12px] mt-[2px]">
                      →
                    </span>
                    <span>{line}</span>
                  </li>
                ))}
              </ul>

              <p
                className="mt-10 font-mono uppercase text-ink-tertiary"
                style={{ fontSize: '11px', letterSpacing: '0.08em' }}
              >
                Direct ·{' '}
                <a
                  href={`mailto:${SITE.email}`}
                  className="text-accent hover:text-ink-primary"
                >
                  {SITE.email}
                </a>{' '}
                · {SITE.location}
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
