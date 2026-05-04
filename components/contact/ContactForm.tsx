'use client';

import { useState, type FormEvent, type ChangeEvent } from 'react';
import { Send } from 'lucide-react';

type FormState = {
  name: string;
  email: string;
  building: string;
  reason: string;
};

const INITIAL: FormState = { name: '', email: '', building: '', reason: '' };

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
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
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
          <h2 className="text-4xl font-bold mb-4">Message Received</h2>
          <p className="text-xl text-gray-400 mb-8">
            Thank you for reaching out. If your inquiry aligns with serious business
            development, you&apos;ll hear back within 48 hours.
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
  );
}
