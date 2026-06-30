'use client';

import dynamic from 'next/dynamic';

const ContactForm = dynamic(() => import('./ContactForm'), {
  ssr: false,
  loading: () => (
    <div
      aria-hidden
      className="h-[520px] w-full rounded-2xl border border-line bg-bg-elevated/40 animate-pulse"
    />
  ),
});

export default function DynamicContactForm() {
  return <ContactForm />;
}
