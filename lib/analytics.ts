type GtagFn = (
  command: 'event' | 'config' | 'js',
  targetOrEvent: string | Date,
  params?: Record<string, unknown>,
) => void;

declare global {
  interface Window {
    gtag?: GtagFn;
    dataLayer?: unknown[];
  }
}

export type ResumeDownloadLocation =
  | 'portfolio_hero'
  | 'portfolio_closing'
  | 'home_hero'
  | 'footer';

export function trackEvent(
  name: string,
  params?: Record<string, unknown>,
): void {
  if (typeof window === 'undefined') return;
  if (typeof window.gtag !== 'function') return;
  window.gtag('event', name, params);
}

export function trackResumeDownload(location: ResumeDownloadLocation): void {
  trackEvent('download_resume', { location });
}
