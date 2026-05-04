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
    'inline-flex items-center justify-center gap-2 px-6 py-3 bg-accent text-white font-semibold hover:bg-accent-dark transition-colors',
  secondary:
    'inline-flex items-center justify-center gap-2 px-6 py-3 border border-white/20 text-white font-semibold hover:border-accent hover:text-accent transition-colors',
  subtle:
    'inline-flex items-center gap-2 text-sm text-gray-400 hover:text-accent underline underline-offset-4 transition-colors',
  'footer-link': '',
};

export function ResumeButton({
  variant,
  location,
  className,
  children,
  showIcon = true,
}: Props) {
  return (
    <a
      href="/resume.pdf"
      download="Sean_Richard_Resume.pdf"
      onClick={() => trackResumeDownload(location)}
      className={cn(VARIANT_CLASSES[variant], className)}
    >
      {children ?? (
        <>
          {showIcon && <Download size={variant === 'subtle' ? 14 : 18} />}
          <span>Download Resume</span>
        </>
      )}
    </a>
  );
}
