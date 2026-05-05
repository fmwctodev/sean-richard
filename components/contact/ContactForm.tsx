'use client';

import { useState, type FormEvent, type ChangeEvent } from 'react';
import { Send } from 'lucide-react';
import { trackEvent } from '@/lib/analytics';

type FormState = {
  name: string;
  email: string;
  company: string;
  building: string;
  help_type: string;
  problem: string;
  company_stage: string;
};

const INITIAL: FormState = {
  name: '',
  email: '',
  company: '',
  building: '',
  help_type: '',
  problem: '',
  company_stage: '',
};

const HELP_TYPES = [
  'Fractional CMO for contractors',
  'Fractional CTO – technology leadership',
  'AI automation systems',
  'Software or SaaS platform build',
  'CRM – marketing infrastructure',
  'Strategic partnership',
  'Other serious inquiry',
];

const COMPANY_STAGES = [
  'Startup / pre-revenue',
  'Under $1M/year',
  '$1M–$5M/year',
  '$5M–$10M/year',
  '$10M+/year',
  'Internal platform or venture-backed project',
];

export default function ContactForm() {
  const [formData, setFormData] = useState<FormState>(INITIAL);
  const [submitted, setSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    setError(null);

    try {
      const form = e.currentTarget;
      const formDataObj = new FormData(form);
      const response = await fetch('/', {
        method: 'POST',
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
        body: new URLSearchParams(formDataObj as unknown as Record<string, string>).toString(),
      });

      if (response.ok) {
        trackEvent('contact_submit', {
          help_type: formData.help_type,
          company_stage: formData.company_stage,
        });
        setSubmitted(true);
        setFormData(INITIAL);
      } else {
        setError('Something went wrong. Please try again.');
      }
    } catch {
      setError('Network error. Please check your connection and try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>,
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  if (submitted) {
    return (
      <div className="min-h-[60vh] flex items-center justify-center">
        <div className="max-w-2xl mx-auto text-center animate-fade-in">
          <div className="w-20 h-20 bg-accent/10 border-2 border-accent rounded-full flex items-center justify-center mx-auto mb-6">
            <Send className="text-accent" size={32} />
          </div>
          <h2 className="text-4xl font-bold mb-4">Inquiry Received</h2>
          <p className="text-xl text-gray-400 mb-8">
            Qualified inquiries are reviewed within 48 hours. If there&apos;s a fit,
            you&apos;ll hear back from Sean directly. If not, you&apos;ll be told directly.
          </p>
          <button
            onClick={() => setSubmitted(false)}
            className="text-accent hover:text-accent-dark transition-colors"
          >
            Submit another inquiry
          </button>
        </div>
      </div>
    );
  }

  const inputClass =
    'w-full px-4 py-3 bg-white/5 border border-white/10 focus:border-accent focus:outline-none transition-colors';

  return (
    <form
      name="contact"
      method="POST"
      data-netlify="true"
      data-netlify-honeypot="bot-field"
      onSubmit={handleSubmit}
      className="space-y-6"
    >
      <input type="hidden" name="form-name" value="contact" />
      <p className="hidden">
        <label>
          Don&apos;t fill this out if you&apos;re human: <input name="bot-field" />
        </label>
      </p>

      {error && (
        <div className="p-4 border border-red-500/30 bg-red-500/10 text-red-200">
          {error}
        </div>
      )}

      <div className="grid md:grid-cols-2 gap-6">
        <div>
          <label htmlFor="name" className="block text-sm font-semibold mb-2">
            Name <span className="text-accent">*</span>
          </label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
            className={inputClass}
            placeholder="Your name"
          />
        </div>

        <div>
          <label htmlFor="email" className="block text-sm font-semibold mb-2">
            Email <span className="text-accent">*</span>
          </label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
            className={inputClass}
            placeholder="your@email.com"
          />
        </div>
      </div>

      <div>
        <label htmlFor="company" className="block text-sm font-semibold mb-2">
          Company <span className="text-gray-500 text-xs">(optional)</span>
        </label>
        <input
          type="text"
          id="company"
          name="company"
          value={formData.company}
          onChange={handleChange}
          className={inputClass}
          placeholder="Company or organization"
        />
      </div>

      <div>
        <label htmlFor="building" className="block text-sm font-semibold mb-2">
          What are you building or operating? <span className="text-accent">*</span>
        </label>
        <textarea
          id="building"
          name="building"
          value={formData.building}
          onChange={handleChange}
          required
          rows={3}
          className={`${inputClass} resize-none`}
          placeholder="Describe your business, platform, or project"
        />
      </div>

      <div className="grid md:grid-cols-2 gap-6">
        <div>
          <label htmlFor="help_type" className="block text-sm font-semibold mb-2">
            What type of help are you looking for? <span className="text-accent">*</span>
          </label>
          <select
            id="help_type"
            name="help_type"
            value={formData.help_type}
            onChange={handleChange}
            required
            className={inputClass}
          >
            <option value="" disabled>
              Select an option
            </option>
            {HELP_TYPES.map((t) => (
              <option key={t} value={t}>
                {t}
              </option>
            ))}
          </select>
        </div>

        <div>
          <label htmlFor="company_stage" className="block text-sm font-semibold mb-2">
            Estimated company stage <span className="text-accent">*</span>
          </label>
          <select
            id="company_stage"
            name="company_stage"
            value={formData.company_stage}
            onChange={handleChange}
            required
            className={inputClass}
          >
            <option value="" disabled>
              Select a range
            </option>
            {COMPANY_STAGES.map((s) => (
              <option key={s} value={s}>
                {s}
              </option>
            ))}
          </select>
        </div>
      </div>

      <div>
        <label htmlFor="problem" className="block text-sm font-semibold mb-2">
          What problem are you trying to solve? <span className="text-accent">*</span>
        </label>
        <textarea
          id="problem"
          name="problem"
          value={formData.problem}
          onChange={handleChange}
          required
          rows={4}
          className={`${inputClass} resize-none`}
          placeholder="Briefly explain the current bottleneck, goal, or system you need help with."
        />
      </div>

      <button
        type="submit"
        disabled={isSubmitting}
        className="w-full px-8 py-4 bg-accent text-white font-semibold hover:bg-accent-dark transition-all disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
      >
        {isSubmitting ? (
          'Submitting...'
        ) : (
          <>
            Submit Inquiry
            <Send size={18} />
          </>
        )}
      </button>
    </form>
  );
}
