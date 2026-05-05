import Link from 'next/link';
import { ArrowUpRight } from 'lucide-react';

export default function HomeFractionalPreview() {
  return (
    <section className="px-6 py-32 border-t border-white/10">
      <div className="max-w-5xl mx-auto">
        <p className="text-sm text-gray-500 uppercase tracking-wider mb-4">
          ( Fractional Leadership )
        </p>
        <h2 className="text-4xl md:text-6xl font-bold mb-8">
          Executive-level strategy connected to implementation.
        </h2>
        <p className="text-xl text-gray-400 max-w-3xl leading-relaxed mb-10">
          Most companies don&apos;t need another passive advisor. They need someone who will
          diagnose the system, define the roadmap, lead execution, and create operational
          leverage. That&apos;s the work.
        </p>
        <Link
          href="/fractional-cmo-cto"
          className="group inline-flex items-center gap-2 px-6 py-3 bg-accent text-white font-semibold hover:bg-accent-dark transition-colors"
        >
          See How Fractional Engagements Work
          <ArrowUpRight
            size={18}
            className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform"
          />
        </Link>
      </div>
    </section>
  );
}
