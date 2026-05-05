'use client';

import { type ReactNode } from 'react';
import { Download } from 'lucide-react';
import { cn } from '@/lib/utils';
import { trackResumeDownload, type ResumeDownloadLocation } from '@/lib/analytics';

type Variant = 'primary' | 'secondary' | 'subtle' | 'footer-link';

type Props = {
  variant: Variant;
  location: ResumeDownloadLocation;
  className?: string;
  children?: ReactNode;
  showIcon?: boolean;
};

const VARIANT_CLASSES: Record<Variant, string> = {
  primary:
    'inline-flex items-center justify-center gap-2 px-7 py-[18px] rounded-full bg-accent text-bg-primary font-medium text-[15px] hover:bg-ink-primary transition-colors',
  secondary:
    'inline-flex items-center justify-center gap-2 px-7 py-[18px] rounded-full border border-line-strong text-ink-primary font-medium text-[15px] hover:border-ink-primary transition-colors',
  subtle:
    'inline-flex items-center gap-2 font-mono uppercase text-ink-secondary hover:text-accent border-b border-line-strong hover:border-accent pb-1 transition-colors',
  'footer-link': '',
};

const SUBTLE_STYLE = { fontSize: '13px', letterSpacing: '0.04em' } as const;

export function ResumeButton({
  variant,
  location,
  className,
  children,
  showIcon = true,
}: Props) {
  const isSubtle = variant === 'subtle';
  return (
    <a
      href="/resume.pdf"
      download="Sean_Richard_Resume.pdf"
      onClick={() => trackResumeDownload(location)}
      className={cn(VARIANT_CLASSES[variant], className)}
      style={isSubtle ? SUBTLE_STYLE : undefined}
    >
      {children ?? (
        <>
          {showIcon && variant !== 'subtle' && <Download size={16} />}
          <span>{isSubtle ? 'Resume ↓' : 'Download Resume'}</span>
        </>
      )}
    </a>
  );
}
