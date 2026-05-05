'use client';

import { useState, useMemo, useEffect, type FormEvent } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { Send, Check, Zap } from 'lucide-react';
import { trackEvent } from '@/lib/analytics';
import MonoLabel from '@/components/editorial/MonoLabel';
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
  { value: 'Startup / pre-revenue', label: 'Pre-revenue', description: 'Building, not yet earning.' },
  { value: 'Under $1M/year', label: 'Under $1M/yr', description: 'Past revenue, pre-systems.' },
  { value: '$1M–$5M/year', label: '$1M–$5M/yr', description: 'Sweet spot for fractional support.' },
  { value: '$5M–$10M/year', label: '$5M–$10M/yr', description: 'Scaling operations, decision time.' },
  { value: '$10M+/year', label: '$10M+/yr', description: 'Mature, infrastructure matters.' },
  {
    value: 'Internal platform or venture-backed project',
    label: 'Platform / venture-backed',
    description: 'Internal tools, funded build.',
  },
];

const TOTAL_STEPS = 4;

const STEP_HEADLINES: { eyebrow: string; headline: string; accent: string }[] = [
  { eyebrow: 'Step 01 — Identity', headline: 'Who are you?', accent: 'you' },
  { eyebrow: 'Step 02 — Operations', headline: 'What are you operating?', accent: 'operating' },
  { eyebrow: 'Step 03 — Calibration', headline: 'What kind of help?', accent: 'help' },
  { eyebrow: 'Step 04 — Diagnosis', headline: "What's the actual problem?", accent: 'problem' },
];

function renderHeadline(text: string, accent: string) {
  const idx = text.toLowerCase().indexOf(accent.toLowerCase());
  if (idx === -1) return text;
  const before = text.slice(0, idx);
  const word = text.slice(idx, idx + accent.length);
  const after = text.slice(idx + accent.length);
  return (
    <>
      {before}
      <span
        className="text-accent"
        style={{ textShadow: '0 0 40px rgba(239, 68, 68, 0.5)' }}
      >
        {word}
      </span>
      {after}
    </>
  );
}

export default function ContactForm() {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState<FormState>(INITIAL);
  const [submitted, setSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [recentlyValidated, setRecentlyValidated] = useState<Set<keyof FormState>>(
    new Set(),
  );

  const handleRadioChange = (name: keyof FormState) => (value: string) => {
    setFormData((prev) => ({ ...prev, [name]: value }));
    flashFieldValidated(name);
  };

  const flashFieldValidated = (key: keyof FormState) => {
    setRecentlyValidated((prev) => new Set([...prev, key]));
    setTimeout(() => {
      setRecentlyValidated((prev) => {
        const next = new Set(prev);
        next.delete(key);
        return next;
      });
    }, 700);
  };

  const fieldValid = useMemo(() => ({
    name: formData.name.trim() !== '',
    email: /\S+@\S+\.\S+/.test(formData.email),
    building: formData.building.trim().length >= 10,
    help_type: formData.help_type !== '',
    company_stage: formData.company_stage !== '',
    problem: formData.problem.trim().length >= 20,
  }), [formData]);

  const isStepValid = useMemo(() => {
    switch (step) {
      case 1:
        return fieldValid.name && fieldValid.email;
      case 2:
        return fieldValid.building;
      case 3:
        return fieldValid.help_type && fieldValid.company_stage;
      case 4:
        return fieldValid.problem;
      default:
        return false;
    }
  }, [step, fieldValid]);

  const overallStrength = useMemo(() => {
    const requiredKeys = [
      'name',
      'email',
      'building',
      'help_type',
      'company_stage',
      'problem',
    ] as const;
    const filled = requiredKeys.filter((k) => fieldValid[k]).length;
    return filled / requiredKeys.length;
  }, [fieldValid]);

  // Watch for individual field validation transitions to flash success
  useEffect(() => {
    (Object.keys(fieldValid) as (keyof typeof fieldValid)[]).forEach((key) => {
      if (fieldValid[key] && !recentlyValidated.has(key as keyof FormState)) {
        // Only flash on the FIRST time it becomes valid this session
        const wasInvalid = (window as any).__lastValid?.[key] === false;
        if (wasInvalid) {
          flashFieldValidated(key as keyof FormState);
        }
      }
    });
    (window as any).__lastValid = fieldValid;
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [fieldValid]);

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

      // POST to /__forms.html — the static HTML file Netlify recognizes
      // as a form-submission endpoint when @netlify/plugin-nextjs is in
      // use. POSTing to "/" returns 405 because Next.js has no handler there.
      const response = await fetch('/__forms.html', {
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
        setError(
          `Submission failed (status ${response.status}). Please try again, or email sean@sitehues.com directly.`,
        );
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
        initial={{ opacity: 0, scale: 0.96 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5, ease: 'easeOut' }}
        className="min-h-[40vh] flex items-center justify-center"
      >
        <div className="max-w-2xl mx-auto text-center relative">
          <motion.div
            initial={{ scale: 0, rotate: -45 }}
            animate={{ scale: 1, rotate: 0 }}
            transition={{ delay: 0.15, type: 'spring', stiffness: 220 }}
            className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-accent/15 border border-accent mb-8 relative"
          >
            <span
              aria-hidden
              className="absolute inset-0 rounded-full"
              style={{ boxShadow: '0 0 60px rgba(239, 68, 68, 0.5)' }}
            />
            <Check className="text-accent relative" size={36} strokeWidth={2.5} />
          </motion.div>
          <div className="mb-6">
            <MonoLabel variant="accent" leading="dot">
              Inquiry Received · Strong Fit Signal
            </MonoLabel>
          </div>
          <h2
            className="font-sans font-extrabold text-ink-primary mb-6 max-w-[24ch] mx-auto"
            style={{
              fontSize: 'clamp(32px, 5vw, 56px)',
              lineHeight: 0.98,
              letterSpacing: '-0.03em',
            }}
          >
            Qualified inquiries reviewed within{' '}
            <span
              className="text-accent"
              style={{ textShadow: '0 0 60px rgba(239, 68, 68, 0.5)' }}
            >
              48 hours
            </span>
            .
          </h2>
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

  const labelClass = 'block font-mono uppercase text-ink-secondary mb-3';
  const labelStyle = { fontSize: '11px', letterSpacing: '0.12em' };

  const fieldClass = (key: keyof FormState) => {
    const isValid = fieldValid[key as keyof typeof fieldValid];
    const flashing = recentlyValidated.has(key);
    return [
      'w-full px-4 py-[14px] bg-bg-elevated border focus:outline-none transition-all text-ink-primary placeholder:text-ink-tertiary rounded-lg',
      flashing
        ? 'border-accent shadow-[0_0_0_3px_rgba(239,68,68,0.25)]'
        : isValid
          ? 'border-accent/40'
          : 'border-line focus:border-accent',
    ].join(' ');
  };

  const headlineFor = STEP_HEADLINES[step - 1];

  return (
    <form
      name="contact"
      method="POST"
      data-netlify="true"
      data-netlify-honeypot="bot-field"
      action="/__forms.html"
      onSubmit={handleSubmit}
      className="space-y-10 relative"
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

      {/* HEADER: progress + qualification signal + step dots */}
      <div className="flex flex-col gap-6">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4">
          <div className="flex-1 max-w-[420px]">
            <ProgressBar step={step} total={TOTAL_STEPS} />
          </div>
          <QualificationSignal strength={overallStrength} />
        </div>

        {/* Step dots */}
        <div className="flex items-center gap-3">
          {Array.from({ length: TOTAL_STEPS }).map((_, i) => {
            const stepNum = i + 1;
            const isActive = stepNum === step;
            const isPast = stepNum < step;
            return (
              <div key={stepNum} className="flex items-center gap-3">
                <button
                  type="button"
                  onClick={() => stepNum < step && setStep(stepNum)}
                  disabled={stepNum > step}
                  className={`relative w-8 h-8 rounded-full font-mono text-[11px] flex items-center justify-center transition-all ${
                    isActive
                      ? 'bg-accent text-bg-primary'
                      : isPast
                        ? 'bg-accent/15 border border-accent text-accent hover:bg-accent/25 cursor-pointer'
                        : 'bg-bg-elevated border border-line text-ink-tertiary cursor-not-allowed'
                  }`}
                  style={
                    isActive
                      ? { boxShadow: '0 0 24px rgba(239, 68, 68, 0.5)' }
                      : undefined
                  }
                  aria-label={`Step ${stepNum}`}
                  aria-current={isActive ? 'step' : undefined}
                >
                  {isPast ? <Check size={14} strokeWidth={3} /> : stepNum}
                </button>
                {i < TOTAL_STEPS - 1 && (
                  <div
                    className={`h-px w-8 transition-colors ${
                      isPast ? 'bg-accent' : 'bg-line'
                    }`}
                  />
                )}
              </div>
            );
          })}
        </div>
      </div>

      {error && (
        <div className="p-4 border border-accent/40 bg-accent/5 text-ink-primary text-[14px] rounded-lg">
          {error}
        </div>
      )}

      {/* STEP CONTENT */}
      <div className="min-h-[320px] relative">
        <AnimatePresence mode="wait">
          <motion.div
            key={step}
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -24 }}
            transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
            className="space-y-6"
          >
            <div>
              <div className="mb-3">
                <MonoLabel variant="accent">{headlineFor.eyebrow}</MonoLabel>
              </div>
              <h2
                className="font-sans font-extrabold text-ink-primary max-w-[24ch]"
                style={{
                  fontSize: 'clamp(28px, 4vw, 44px)',
                  lineHeight: 1.02,
                  letterSpacing: '-0.03em',
                }}
              >
                {renderHeadline(headlineFor.headline, headlineFor.accent)}
              </h2>
            </div>

            {step === 1 && (
              <div className="space-y-5">
                <div>
                  <label htmlFor="name-input" className={labelClass} style={labelStyle}>
                    Name
                  </label>
                  <div className="relative">
                    <input
                      id="name-input"
                      type="text"
                      autoFocus
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      required
                      className={fieldClass('name')}
                      placeholder="Your name"
                    />
                    <FieldCheck visible={fieldValid.name} />
                  </div>
                </div>
                <div>
                  <label htmlFor="email-input" className={labelClass} style={labelStyle}>
                    Email
                  </label>
                  <div className="relative">
                    <input
                      id="email-input"
                      type="email"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      required
                      className={fieldClass('email')}
                      placeholder="your@email.com"
                    />
                    <FieldCheck visible={fieldValid.email} />
                  </div>
                </div>
                <div>
                  <label htmlFor="company-input" className={labelClass} style={labelStyle}>
                    Company{' '}
                    <span className="text-ink-tertiary normal-case font-sans tracking-normal">
                      (optional)
                    </span>
                  </label>
                  <input
                    id="company-input"
                    type="text"
                    value={formData.company}
                    onChange={(e) =>
                      setFormData({ ...formData, company: e.target.value })
                    }
                    className={fieldClass('company' as keyof FormState)}
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
                <div className="relative">
                  <textarea
                    id="building-input"
                    autoFocus
                    value={formData.building}
                    onChange={(e) =>
                      setFormData({ ...formData, building: e.target.value })
                    }
                    required
                    rows={6}
                    className={`${fieldClass('building')} resize-none`}
                    placeholder="Describe your business, platform, or project. The more specific the better."
                  />
                  <FieldCheck visible={fieldValid.building} top="14px" />
                </div>
                <CharCounter current={formData.building.length} min={10} />
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
                <div className="relative">
                  <textarea
                    id="problem-input"
                    autoFocus
                    value={formData.problem}
                    onChange={(e) =>
                      setFormData({ ...formData, problem: e.target.value })
                    }
                    required
                    rows={7}
                    className={`${fieldClass('problem')} resize-none`}
                    placeholder="Briefly explain the current bottleneck, goal, or system you need help with."
                  />
                  <FieldCheck visible={fieldValid.problem} top="14px" />
                </div>
                <CharCounter current={formData.problem.length} min={20} />
              </div>
            )}
          </motion.div>
        </AnimatePresence>
      </div>

      {/* STEP CONTROLS */}
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

        <SubmitButton
          step={step}
          isStepValid={isStepValid}
          isSubmitting={isSubmitting}
          totalSteps={TOTAL_STEPS}
          fillStrength={overallStrength}
        />
      </div>
    </form>
  );
}

function FieldCheck({ visible, top = '50%' }: { visible: boolean; top?: string }) {
  return (
    <AnimatePresence>
      {visible && (
        <motion.span
          initial={{ scale: 0, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          exit={{ scale: 0, opacity: 0 }}
          transition={{ duration: 0.25, ease: 'backOut' }}
          aria-hidden
          className="absolute right-3 inline-flex items-center justify-center w-6 h-6 rounded-full bg-accent text-bg-primary"
          style={{
            top,
            transform: top === '50%' ? 'translateY(-50%)' : undefined,
            boxShadow: '0 0 16px rgba(239, 68, 68, 0.5)',
          }}
        >
          <Check size={14} strokeWidth={3} />
        </motion.span>
      )}
    </AnimatePresence>
  );
}

function CharCounter({ current, min }: { current: number; min: number }) {
  const met = current >= min;
  return (
    <div className="flex items-center justify-between mt-2">
      <p
        className="font-mono uppercase"
        style={{ fontSize: '11px', letterSpacing: '0.06em' }}
      >
        <span className={met ? 'text-accent' : 'text-ink-tertiary'}>
          {current} chars
        </span>
        <span className="text-ink-tertiary"> · min {min}</span>
      </p>
      {met && (
        <motion.span
          initial={{ opacity: 0, x: 4 }}
          animate={{ opacity: 1, x: 0 }}
          className="font-mono uppercase text-accent inline-flex items-center gap-1"
          style={{ fontSize: '11px', letterSpacing: '0.12em' }}
        >
          <Check size={11} strokeWidth={3} /> Threshold cleared
        </motion.span>
      )}
    </div>
  );
}

function SubmitButton({
  step,
  isStepValid,
  isSubmitting,
  totalSteps,
  fillStrength,
}: {
  step: number;
  isStepValid: boolean;
  isSubmitting: boolean;
  totalSteps: number;
  fillStrength: number;
}) {
  const isFinal = step === totalSteps;
  const fillPercent = Math.round(fillStrength * 100);

  return (
    <button
      type="submit"
      disabled={!isStepValid || isSubmitting}
      className={`group relative inline-flex items-center gap-3 px-7 py-[14px] rounded-full font-semibold text-[14px] transition-all overflow-hidden ${
        isStepValid
          ? 'bg-accent text-bg-primary'
          : 'bg-bg-elevated text-ink-tertiary cursor-not-allowed border border-line'
      }`}
      style={
        isStepValid
          ? { boxShadow: '0 8px 32px -8px rgba(239, 68, 68, 0.6)' }
          : undefined
      }
    >
      {/* Energy charge indicator on final submit */}
      {isFinal && isStepValid && (
        <span
          aria-hidden
          className="absolute inset-0 bg-gradient-to-r from-accent-light to-accent opacity-0 group-hover:opacity-100 transition-opacity"
        />
      )}

      <span className="relative z-10 flex items-center gap-2">
        {isFinal ? (
          isSubmitting ? (
            <>
              <span className="inline-block w-3 h-3 rounded-full bg-bg-primary animate-pulse" />
              Submitting…
            </>
          ) : (
            <>
              <Zap size={15} fill="currentColor" />
              Submit Inquiry · {fillPercent}% Charged
            </>
          )
        ) : (
          <>
            Next
            <span aria-hidden className="transition-transform group-hover:translate-x-1">
              →
            </span>
          </>
        )}
      </span>
    </button>
  );
}
