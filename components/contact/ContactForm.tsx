'use client';

import { useState, useMemo, type FormEvent } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { Send } from 'lucide-react';
import { trackEvent } from '@/lib/analytics';
import MonoLabel from '@/components/editorial/MonoLabel';
import EditorialHeadline from '@/components/editorial/EditorialHeadline';
import ProgressBar from './ProgressBar';
import QualificationSignal from './QualificationSignal';
import RadioCard from './RadioCard';

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

const HELP_TYPES: { value: string; label: string; description: string }[] = [
  {
    value: 'Fractional CMO for contractors',
    label: 'Fractional CMO',
    description: 'Senior marketing leadership for contractors building a real growth system.',
  },
  {
    value: 'Fractional CTO – technology leadership',
    label: 'Fractional CTO',
    description: 'Technology direction without full-time overhead.',
  },
  {
    value: 'AI automation systems',
    label: 'AI automation',
    description: 'Voice agents, workflow automation, internal AI tools.',
  },
  {
    value: 'Software or SaaS platform build',
    label: 'Platform build',
    description: 'Full-stack SaaS or internal platform engineered end-to-end.',
  },
  {
    value: 'CRM – marketing infrastructure',
    label: 'CRM / Marketing infra',
    description: 'CRM implementation, funnel architecture, lead nurture systems.',
  },
  {
    value: 'Strategic partnership',
    label: 'Strategic partnership',
    description: 'Investor, partner, or strategic operating collaboration.',
  },
  {
    value: 'Other serious inquiry',
    label: 'Something else serious',
    description: "Doesn't fit the above but you want to talk.",
  },
];

const COMPANY_STAGES: { value: string; label: string; description: string }[] = [
  {
    value: 'Startup / pre-revenue',
    label: 'Pre-revenue',
    description: 'Building, not yet earning.',
  },
  {
    value: 'Under $1M/year',
    label: 'Under $1M/yr',
    description: 'Past revenue, pre-systems.',
  },
  {
    value: '$1M–$5M/year',
    label: '$1M–$5M/yr',
    description: 'Sweet spot for fractional support.',
  },
  {
    value: '$5M–$10M/year',
    label: '$5M–$10M/yr',
    description: 'Scaling operations, decision time.',
  },
  {
    value: '$10M+/year',
    label: '$10M+/yr',
    description: 'Mature, infrastructure matters.',
  },
  {
    value: 'Internal platform or venture-backed project',
    label: 'Platform / venture-backed',
    description: 'Internal tools, funded build.',
  },
];

const TOTAL_STEPS = 4;

const STEP_HEADLINES = [
  { eyebrow: 'Step one', headline: 'Who are you?' },
  { eyebrow: 'Step two', headline: 'What are you operating?' },
  { eyebrow: 'Step three', headline: 'What kind of help?' },
  { eyebrow: 'Step four', headline: "What's the actual problem?" },
] as const;

export default function ContactForm() {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState<FormState>(INITIAL);
  const [submitted, setSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleRadioChange = (name: keyof FormState) => (value: string) => {
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const isStepValid = useMemo(() => {
    switch (step) {
      case 1:
        return formData.name.trim() !== '' && /\S+@\S+\.\S+/.test(formData.email);
      case 2:
        return formData.building.trim().length >= 10;
      case 3:
        return formData.help_type !== '' && formData.company_stage !== '';
      case 4:
        return formData.problem.trim().length >= 20;
      default:
        return false;
    }
  }, [step, formData]);

  const overallStrength = useMemo(() => {
    let filled = 0;
    if (formData.name.trim()) filled += 1;
    if (/\S+@\S+\.\S+/.test(formData.email)) filled += 1;
    if (formData.building.trim().length >= 10) filled += 1;
    if (formData.help_type) filled += 1;
    if (formData.company_stage) filled += 1;
    if (formData.problem.trim().length >= 20) filled += 1;
    return filled / 6;
  }, [formData]);

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (step < TOTAL_STEPS) {
      if (isStepValid) setStep(step + 1);
      return;
    }
    if (!isStepValid) return;

    setIsSubmitting(true);
    setError(null);

    try {
      const form = e.currentTarget;
      const formDataObj = new FormData(form);
      const params = new URLSearchParams();
      formDataObj.forEach((value, key) => {
        if (typeof value === 'string') params.append(key, value);
      });

      const response = await fetch('/', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded;charset=UTF-8',
          Accept: 'application/x-www-form-urlencoded,*/*;q=0.8',
        },
        body: params.toString(),
      });

      if (response.ok) {
        trackEvent('contact_submit', {
          help_type: formData.help_type,
          company_stage: formData.company_stage,
        });
        setSubmitted(true);
        setFormData(INITIAL);
        setStep(1);
      } else {
        setError('Something went wrong. Please try again.');
      }
    } catch {
      setError('Network error. Please check your connection and try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  if (submitted) {
    return (
      <motion.div
        initial={{ opacity: 0, y: 12 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="min-h-[40vh] flex items-center justify-center"
      >
        <div className="max-w-2xl mx-auto text-center">
          <div className="mb-6">
            <MonoLabel variant="accent" leading="dot">
              Inquiry Received
            </MonoLabel>
          </div>
          <EditorialHeadline
            text="Qualified inquiries reviewed within {{em}}48 hours{{/em}}."
            size="section"
            className="mb-6 max-w-[24ch] mx-auto"
          />
          <p className="text-ink-secondary text-[16px] leading-[1.6] mb-8 max-w-[55ch] mx-auto">
            If there&apos;s a fit, you&apos;ll hear back from Sean directly. If not,
            you&apos;ll be told directly.
          </p>
          <button
            onClick={() => setSubmitted(false)}
            className="font-mono uppercase text-accent hover:text-ink-primary transition-colors border-b border-line-strong hover:border-accent pb-1"
            style={{ fontSize: '12px', letterSpacing: '0.12em' }}
          >
            Submit another inquiry
          </button>
        </div>
      </motion.div>
    );
  }

  const inputClass =
    'w-full px-4 py-[14px] bg-bg-elevated border border-line focus:border-accent focus:outline-none transition-colors text-ink-primary placeholder:text-ink-tertiary';
  const labelClass =
    'block font-mono uppercase text-ink-secondary mb-3';
  const labelStyle = { fontSize: '11px', letterSpacing: '0.12em' };

  const headlineFor = STEP_HEADLINES[step - 1];

  return (
    <form
      name="contact"
      method="POST"
      data-netlify="true"
      data-netlify-honeypot="bot-field"
      onSubmit={handleSubmit}
      className="space-y-10"
    >
      <input type="hidden" name="form-name" value="contact" />
      <p className="hidden">
        <label>
          Don&apos;t fill this out if you&apos;re human: <input name="bot-field" />
        </label>
      </p>

      {/* Hidden fields persist across steps so all values submit at the end */}
      <input type="hidden" name="name" value={formData.name} />
      <input type="hidden" name="email" value={formData.email} />
      <input type="hidden" name="company" value={formData.company} />
      <input type="hidden" name="building" value={formData.building} />
      <input type="hidden" name="help_type" value={formData.help_type} />
      <input type="hidden" name="company_stage" value={formData.company_stage} />
      <input type="hidden" name="problem" value={formData.problem} />

      {/* Header: progress + qualification signal */}
      <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4">
        <div className="flex-1 max-w-[420px]">
          <ProgressBar step={step} total={TOTAL_STEPS} />
        </div>
        <QualificationSignal strength={overallStrength} />
      </div>

      {error && (
        <div className="p-4 border border-accent/40 bg-accent/5 text-ink-primary text-[14px]">
          {error}
        </div>
      )}

      {/* Step content */}
      <div className="min-h-[280px]">
        <AnimatePresence mode="wait">
          <motion.div
            key={step}
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -16 }}
            transition={{ duration: 0.35 }}
            className="space-y-6"
          >
            <div>
              <div className="mb-2">
                <MonoLabel variant="accent">{headlineFor.eyebrow}</MonoLabel>
              </div>
              <EditorialHeadline
                text={headlineFor.headline}
                size="card"
                as="h2"
                className="max-w-[24ch]"
              />
            </div>

            {step === 1 && (
              <div className="space-y-5">
                <div>
                  <label htmlFor="name-input" className={labelClass} style={labelStyle}>
                    Name
                  </label>
                  <input
                    id="name-input"
                    type="text"
                    autoFocus
                    value={formData.name}
                    onChange={(e) =>
                      setFormData({ ...formData, name: e.target.value })
                    }
                    required
                    className={inputClass}
                    placeholder="Your name"
                  />
                </div>
                <div>
                  <label htmlFor="email-input" className={labelClass} style={labelStyle}>
                    Email
                  </label>
                  <input
                    id="email-input"
                    type="email"
                    value={formData.email}
                    onChange={(e) =>
                      setFormData({ ...formData, email: e.target.value })
                    }
                    required
                    className={inputClass}
                    placeholder="your@email.com"
                  />
                </div>
                <div>
                  <label htmlFor="company-input" className={labelClass} style={labelStyle}>
                    Company <span className="text-ink-tertiary normal-case font-sans tracking-normal">(optional)</span>
                  </label>
                  <input
                    id="company-input"
                    type="text"
                    value={formData.company}
                    onChange={(e) =>
                      setFormData({ ...formData, company: e.target.value })
                    }
                    className={inputClass}
                    placeholder="Company or organization"
                  />
                </div>
              </div>
            )}

            {step === 2 && (
              <div>
                <label htmlFor="building-input" className={labelClass} style={labelStyle}>
                  What are you building or operating?
                </label>
                <textarea
                  id="building-input"
                  autoFocus
                  value={formData.building}
                  onChange={(e) =>
                    setFormData({ ...formData, building: e.target.value })
                  }
                  required
                  rows={6}
                  className={`${inputClass} resize-none`}
                  placeholder="Describe your business, platform, or project. The more specific the better."
                />
                <p className="font-mono text-ink-tertiary mt-2" style={{ fontSize: '11px', letterSpacing: '0.06em' }}>
                  {formData.building.length} chars · min 10
                </p>
              </div>
            )}

            {step === 3 && (
              <div className="space-y-8">
                <div>
                  <p className={labelClass} style={labelStyle}>
                    What type of help are you looking for?
                  </p>
                  <div className="grid md:grid-cols-2 gap-3">
                    {HELP_TYPES.map((opt) => (
                      <RadioCard
                        key={opt.value}
                        name="help_type-choice"
                        value={opt.value}
                        label={opt.label}
                        description={opt.description}
                        checked={formData.help_type === opt.value}
                        onChange={handleRadioChange('help_type')}
                      />
                    ))}
                  </div>
                </div>
                <div>
                  <p className={labelClass} style={labelStyle}>
                    Estimated company stage
                  </p>
                  <div className="grid md:grid-cols-2 gap-3">
                    {COMPANY_STAGES.map((opt) => (
                      <RadioCard
                        key={opt.value}
                        name="company_stage-choice"
                        value={opt.value}
                        label={opt.label}
                        description={opt.description}
                        checked={formData.company_stage === opt.value}
                        onChange={handleRadioChange('company_stage')}
                      />
                    ))}
                  </div>
                </div>
              </div>
            )}

            {step === 4 && (
              <div>
                <label htmlFor="problem-input" className={labelClass} style={labelStyle}>
                  What problem are you trying to solve?
                </label>
                <textarea
                  id="problem-input"
                  autoFocus
                  value={formData.problem}
                  onChange={(e) =>
                    setFormData({ ...formData, problem: e.target.value })
                  }
                  required
                  rows={7}
                  className={`${inputClass} resize-none`}
                  placeholder="Briefly explain the current bottleneck, goal, or system you need help with."
                />
                <p className="font-mono text-ink-tertiary mt-2" style={{ fontSize: '11px', letterSpacing: '0.06em' }}>
                  {formData.problem.length} chars · min 20
                </p>
              </div>
            )}
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Step controls */}
      <div className="flex items-center justify-between gap-4 pt-6 border-t border-line">
        <button
          type="button"
          onClick={() => setStep(Math.max(1, step - 1))}
          disabled={step === 1}
          className="font-mono uppercase text-ink-tertiary hover:text-ink-primary disabled:opacity-30 disabled:cursor-not-allowed transition-colors"
          style={{ fontSize: '12px', letterSpacing: '0.12em' }}
        >
          ← Back
        </button>

        <button
          type="submit"
          disabled={!isStepValid || isSubmitting}
          className={`group inline-flex items-center gap-3 px-7 py-[14px] rounded-full font-medium text-[14px] transition-all ${
            isStepValid
              ? 'bg-accent text-bg-primary hover:bg-ink-primary'
              : 'bg-bg-elevated text-ink-tertiary cursor-not-allowed border border-line'
          }`}
        >
          {step < TOTAL_STEPS ? (
            <>
              Next
              <span aria-hidden className="transition-transform group-hover:translate-x-1">
                →
              </span>
            </>
          ) : isSubmitting ? (
            'Submitting...'
          ) : (
            <>
              Submit Inquiry
              <Send size={15} />
            </>
          )}
        </button>
      </div>
    </form>
  );
}
