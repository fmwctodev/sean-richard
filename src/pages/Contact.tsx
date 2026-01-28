import { useState } from 'react';
import { Send } from 'lucide-react';
import SEO from '@/components/SEO';
import SchemaMarkup from '@/components/SchemaMarkup';
import LastUpdated from '@/components/LastUpdated';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    building: '',
    reason: '',
  });
  const [submitted, setSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    setTimeout(() => {
      setSubmitted(true);
      setIsSubmitting(false);
      setFormData({ name: '', email: '', building: '', reason: '' });
    }, 1000);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  if (submitted) {
    return (
      <div className="min-h-screen pt-32 pb-20 px-6 flex items-center justify-center">
        <div className="max-w-2xl mx-auto text-center animate-fade-in">
          <div className="w-20 h-20 bg-accent/10 border-2 border-accent rounded-full flex items-center justify-center mx-auto mb-6">
            <Send className="text-accent" size={32} />
          </div>
          <h2 className="text-4xl font-bold mb-4">Message Received</h2>
          <p className="text-xl text-gray-400 mb-8">
            Thank you for reaching out. If your inquiry aligns with serious business development, you'll hear back
            within 48 hours.
          </p>
          <button
            onClick={() => setSubmitted(false)}
            className="text-accent hover:text-accent-dark transition-colors"
          >
            Send another message
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="pt-32 pb-20 px-6">
      <SEO
        title="Contact Sean Richard - Get in Touch"
        description="Contact Sean Richard for inquiries about AI automation, SaaS platforms, systems architecture, contractor software, and strategic business partnerships."
        path="/contact"
      />
      <SchemaMarkup path="/contact" pageTitle="Contact" />
      <div className="max-w-3xl mx-auto">
        <h1 className="text-5xl md:text-7xl font-black tracking-tighter mb-6">Contact</h1>

        <div className="mb-8 p-6 border border-white/10 bg-white/5">
          <p className="text-gray-300 leading-relaxed">
            This site represents the work and companies operated by Sean Richard, including Sitehues Media Inc, Autom8ion Lab, BuilderLync Inc, and Tarrytown Roofing LLC.
          </p>
          <p className="text-gray-400 leading-relaxed mt-3">
            Inquiries should be related to software platforms, AI automation, systems architecture, or strategic partnerships.
          </p>
        </div>

        <div className="mb-12 p-6 border border-yellow-500/30 bg-yellow-500/10">
          <p className="text-yellow-200 leading-relaxed">
            <strong>This is not a general inquiry form.</strong>
            <br />
            Use this if you're building a serious business or platform and want to discuss systems, infrastructure, or
            potential collaboration.
          </p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label htmlFor="name" className="block text-sm font-semibold mb-2">
              Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
              className="w-full px-4 py-3 bg-white/5 border border-white/10 focus:border-accent focus:outline-none transition-colors"
              placeholder="Your name"
            />
          </div>

          <div>
            <label htmlFor="email" className="block text-sm font-semibold mb-2">
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              className="w-full px-4 py-3 bg-white/5 border border-white/10 focus:border-accent focus:outline-none transition-colors"
              placeholder="your@email.com"
            />
          </div>

          <div>
            <label htmlFor="building" className="block text-sm font-semibold mb-2">
              What are you building?
            </label>
            <textarea
              id="building"
              name="building"
              value={formData.building}
              onChange={handleChange}
              required
              rows={4}
              className="w-full px-4 py-3 bg-white/5 border border-white/10 focus:border-accent focus:outline-none transition-colors resize-none"
              placeholder="Describe your business, platform, or project"
            />
          </div>

          <div>
            <label htmlFor="reason" className="block text-sm font-semibold mb-2">
              Why reach out?
            </label>
            <textarea
              id="reason"
              name="reason"
              value={formData.reason}
              onChange={handleChange}
              required
              rows={4}
              className="w-full px-4 py-3 bg-white/5 border border-white/10 focus:border-accent focus:outline-none transition-colors resize-none"
              placeholder="What specific problem are you solving? What kind of collaboration or conversation are you looking for?"
            />
          </div>

          <button
            type="submit"
            disabled={isSubmitting}
            className="w-full px-8 py-4 bg-white text-black font-semibold hover:bg-gray-200 transition-all disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
          >
            {isSubmitting ? (
              'Sending...'
            ) : (
              <>
                Send Message
                <Send size={20} />
              </>
            )}
          </button>
        </form>

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
              <span>Direct conversation about systems, execution, and real business problems</span>
            </li>
          </ul>
        </div>

        <LastUpdated date="Jan 2026" />
      </div>
    </div>
  );
}
