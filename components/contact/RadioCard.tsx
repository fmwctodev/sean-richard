'use client';

import { Check } from 'lucide-react';
import { cn } from '@/lib/utils';

type Props = {
  name: string;
  value: string;
  label: string;
  description?: string;
  checked: boolean;
  onChange: (value: string) => void;
};

export default function RadioCard({
  name,
  value,
  label,
  description,
  checked,
  onChange,
}: Props) {
  return (
    <label
      className={cn(
        'group relative cursor-pointer block p-5 border rounded-xl overflow-hidden transition-all',
        checked
          ? 'border-accent bg-bg-elevated'
          : 'border-line hover:border-line-strong hover:bg-bg-elevated/50',
      )}
      style={
        checked
          ? { boxShadow: '0 0 0 1px rgba(239, 68, 68, 0.4), 0 8px 24px -8px rgba(239, 68, 68, 0.45)' }
          : undefined
      }
    >
      {/* Hover/selected accent glow corner */}
      <span
        aria-hidden
        className={cn(
          'absolute -top-12 -right-12 w-32 h-32 rounded-full transition-opacity',
          checked ? 'opacity-100' : 'opacity-0 group-hover:opacity-60',
        )}
        style={{
          background:
            'radial-gradient(circle, rgba(239, 68, 68, 0.3) 0%, transparent 70%)',
          filter: 'blur(24px)',
        }}
      />

      <input
        type="radio"
        name={name}
        value={value}
        checked={checked}
        onChange={(e) => onChange(e.target.value)}
        className="sr-only"
      />
      <div className="relative flex items-start gap-3">
        <span
          className={cn(
            'shrink-0 w-5 h-5 rounded-full border-2 mt-[2px] flex items-center justify-center transition-all',
            checked
              ? 'border-accent bg-accent'
              : 'border-line-strong group-hover:border-ink-tertiary',
          )}
          aria-hidden
        >
          {checked && (
            <Check size={11} strokeWidth={3} className="text-bg-primary" />
          )}
        </span>
        <div className="min-w-0">
          <p
            className={cn(
              'font-sans font-semibold transition-colors',
              checked ? 'text-ink-primary' : 'text-ink-primary',
            )}
            style={{ fontSize: '15px' }}
          >
            {label}
          </p>
          {description && (
            <p className="text-ink-tertiary text-[13px] leading-[1.5] mt-1">
              {description}
            </p>
          )}
        </div>
      </div>
    </label>
  );
}
