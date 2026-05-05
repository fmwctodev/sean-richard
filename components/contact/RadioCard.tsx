'use client';

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
        'group relative cursor-pointer block p-5 border transition-all',
        checked
          ? 'border-accent bg-bg-elevated'
          : 'border-line hover:border-line-strong hover:bg-bg-elevated/50',
      )}
    >
      <input
        type="radio"
        name={name}
        value={value}
        checked={checked}
        onChange={(e) => onChange(e.target.value)}
        className="sr-only"
      />
      <div className="flex items-start gap-3">
        <span
          className={cn(
            'shrink-0 w-4 h-4 rounded-full border-2 mt-[2px] transition-colors',
            checked ? 'border-accent bg-accent' : 'border-line-strong',
          )}
          aria-hidden
        />
        <div className="min-w-0">
          <p
            className={cn(
              'font-medium transition-colors',
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
