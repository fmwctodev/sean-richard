'use client';

import { usePathname } from 'next/navigation';
import RainingLetters from './RainingLetters';

const RAINING_LETTERS_OPACITY: Record<string, string> = {
  '/': 'opacity-[0.12]',
  '/portfolio': 'opacity-[0.08]',
  '/contact': 'opacity-[0.08]',
};

const SUPPRESS_ON: ReadonlyArray<string> = ['/about', '/fractional-cmo-cto'];

export default function BackgroundCanvas() {
  const pathname = usePathname();

  if (SUPPRESS_ON.includes(pathname)) {
    return (
      <div
        aria-hidden="true"
        className="fixed inset-0 z-0 pointer-events-none bg-[radial-gradient(ellipse_at_top,_rgba(239,68,68,0.05),_transparent_60%)]"
      />
    );
  }

  const opacity = RAINING_LETTERS_OPACITY[pathname] ?? 'opacity-[0.08]';

  return (
    <div
      aria-hidden="true"
      className={`fixed inset-0 z-0 pointer-events-none ${opacity}`}
    >
      <RainingLetters />
    </div>
  );
}
