import type { Metadata } from 'next';
import LastUpdated from '@/components/LastUpdated';
import SchemaMarkup from '@/components/seo/SchemaMarkup';
import ContactForm from '@/components/contact/ContactForm';

export const metadata: Metadata = {
  title: 'Contact Sean Richard - Get in Touch',
  description:
    'Contact Sean Richard for inquiries about AI automation, SaaS platforms, systems architecture, contractor software, and strategic business partnerships.',
  alternates: { canonical: '/contact' },
};

export default function ContactPage() {
  return (
    <div className="pt-32 pb-20 px-6">
      <SchemaMarkup path="/contact" pageTitle="Contact" />
      <div className="max-w-3xl mx-auto">
        <h1 className="text-5xl md:text-7xl font-black tracking-tighter mb-6">Contact</h1>

        <div className="mb-8 p-6 border border-white/10 bg-white/5">
          <p className="text-gray-300 leading-relaxed">
            This site represents the work and companies operated by Sean Richard, including
            Sitehues Media Inc, Autom8ion Lab, BuilderLync Inc, and Tarrytown Roofing LLC.
          </p>
          <p className="text-gray-400 leading-relaxed mt-3">
            Inquiries should be related to software platforms, AI automation, systems
            architecture, or strategic partnerships.
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
              <span>Responses within 48 hours for qualified inquiries</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-accent mt-1">•</span>
              <span>No sales pitches, no upsells, no courses to buy</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-accent mt-1">•</span>
              <span>
                Direct conversation about systems, execution, and real business problems
              </span>
            </li>
          </ul>
        </div>

        <LastUpdated date="May 2026" />
      </div>
    </div>
  );
}
