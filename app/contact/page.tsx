import type { Metadata } from 'next';
import LastUpdated from '@/components/LastUpdated';
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
    <div className="pt-32 pb-20 px-6">
      <SchemaMarkup path="/contact" pageTitle="Contact" />
      <div className="max-w-3xl mx-auto">
        <p className="text-sm text-gray-500 uppercase tracking-wider mb-4">( Contact )</p>
        <h1 className="text-4xl md:text-6xl font-black tracking-tighter mb-6 leading-tight">
          Tell me what you&apos;re operating, what&apos;s broken, and what scale looks like.
        </h1>
        <p className="text-xl text-gray-300 mb-12 leading-relaxed">
          Serious inquiries only. This isn&apos;t a general contact form.
        </p>

        <div className="mb-8 p-6 border border-white/10 bg-white/5">
          <p className="text-gray-300 leading-relaxed">
            This site represents the work and companies operated by Sean Richard, including
            Sitehues Media Inc, Autom8ion Lab, BuilderLync Inc, and select fractional
            executive engagements through Sean Scott Richard LLC.
          </p>
          <p className="text-gray-400 leading-relaxed mt-3">
            Use this form if you&apos;re building or operating a serious business and want to
            discuss systems, infrastructure, AI automation, contractor growth, fractional
            CMO support, fractional CTO support, software platforms, or strategic
            partnerships.
          </p>
        </div>

        <div className="mb-12 p-6 border border-yellow-500/30 bg-yellow-500/10">
          <p className="text-yellow-200 leading-relaxed">
            <strong>This is not a general inquiry form.</strong>
            <br />
            Use this if you&apos;re building a serious business or platform and want to
            discuss systems, infrastructure, or potential collaboration.
          </p>
        </div>

        <ContactForm />

        <div className="mt-12 p-6 border border-white/10 bg-white/5">
          <h2 className="text-xl font-bold mb-4">What to Expect</h2>
          <ul className="space-y-3 text-gray-400">
            <li className="flex items-start gap-3">
              <span className="text-accent mt-1">•</span>
              <span>Qualified inquiries reviewed within 48 hours.</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-accent mt-1">•</span>
              <span>Direct conversation with Sean — not a sales team.</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-accent mt-1">•</span>
              <span>No courses, generic coaching, or low-ticket offers.</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-accent mt-1">•</span>
              <span>
                Clear discussion around systems, execution, technology, marketing
                infrastructure, and business outcomes.
              </span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-accent mt-1">•</span>
              <span>If there&apos;s no fit, you&apos;ll be told directly.</span>
            </li>
          </ul>
        </div>

        <p className="mt-8 text-sm text-gray-500 text-center">
          Email direct:{' '}
          <a
            href={`mailto:${SITE.email}`}
            className="text-accent hover:text-accent-light"
          >
            {SITE.email}
          </a>{' '}
          · {SITE.location}
        </p>

        <LastUpdated date="May 2026" />
      </div>
    </div>
  );
}
