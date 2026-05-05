import Link from 'next/link';
import Section from '@/components/editorial/Section';

export default function HomeFractionalPreview() {
  return (
    <Section
      number="03"
      eyebrow="Fractional Leadership"
      title="Executive-level strategy connected to {{em}}implementation{{/em}}."
      intro="Most companies don't need another passive advisor. They need someone who will diagnose the system, define the roadmap, lead execution, and create operational leverage. That's the work."
    >
      <Link
        href="/fractional-cmo-cto"
        className="group inline-flex items-center gap-3 px-7 py-4 rounded-full bg-accent text-bg-primary font-medium text-[15px] hover:bg-ink-primary transition-colors"
      >
        See how fractional engagements work
        <span aria-hidden className="transition-transform group-hover:translate-x-1">
          →
        </span>
      </Link>
    </Section>
  );
}
