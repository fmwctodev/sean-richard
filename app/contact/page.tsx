import type { Metadata } from 'next';
import MonoLabel from '@/components/editorial/MonoLabel';
import SchemaMarkup from '@/components/seo/SchemaMarkup';
import ContactForm from '@/components/contact/ContactForm';
import NetlifyFormDefinition from '@/components/contact/NetlifyFormDefinition';
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
      <NetlifyFormDefinition />

      <section
        className="relative px-6"
        style={{ padding: 'clamp(96px, 14vh, 160px) 24px clamp(48px, 8vh, 80px)' }}
      >
        <div className="max-w-3xl mx-auto">
          <div className="mb-8">
            <MonoLabel variant="accent" leading="rule">
              Contact
            </MonoLabel>
          </div>
          <h1
            className="font-sans font-extrabold text-ink-primary mb-8"
            style={{
              fontSize: 'clamp(40px, 6vw, 84px)',
              lineHeight: 0.98,
              letterSpacing: '-0.035em',
            }}
          >
            Tell me what you&apos;re{' '}
            <span
              className="text-accent"
              style={{ textShadow: '0 0 60px rgba(239, 68, 68, 0.45)' }}
            >
              operating
            </span>
            , what&apos;s broken, and what scale looks like.
          </h1>
          <p className="text-[clamp(17px,1.4vw,21px)] leading-[1.55] text-ink-secondary max-w-[60ch]">
            Serious inquiries only. This isn&apos;t a general contact form.
          </p>
        </div>
      </section>

      <section className="px-6 pb-20">
        <div className="max-w-3xl mx-auto">
          <ContactForm />

          <div className="mt-16 border-t border-line pt-12">
            <div className="mb-4">
              <MonoLabel variant="accent" leading="rule">
                What to expect
              </MonoLabel>
            </div>
            <ul className="space-y-3 mb-10">
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
              className="font-mono uppercase text-ink-tertiary"
              style={{ fontSize: '13px', letterSpacing: '0.08em' }}
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
      </section>
    </div>
  );
}
