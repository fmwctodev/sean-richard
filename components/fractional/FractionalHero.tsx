import Link from 'next/link';
import { ArrowUpRight } from 'lucide-react';

export default function FractionalHero() {
  return (
    <section className="px-6 pt-32 pb-16">
      <div className="max-w-5xl mx-auto">
        <p className="text-sm text-gray-500 uppercase tracking-wider mb-4">
          ( Fractional Leadership )
        </p>
        <h1 className="text-4xl sm:text-5xl md:text-7xl font-black tracking-tighter text-white leading-tight mb-8">
          Fractional CMO and CTO support for operators who need systems, not more noise.
        </h1>
        <p className="text-xl md:text-2xl text-gray-300 max-w-3xl leading-relaxed mb-10">
          I help contractors, service businesses, and growth-stage companies build the
          marketing, technology, automation, and operational infrastructure required to
          scale with more control.
        </p>
        <Link
          href="/contact"
          className="group inline-flex items-center gap-2 px-6 py-3 bg-accent text-white font-semibold hover:bg-accent-dark transition-colors"
        >
          Apply to Work With Sean
          <ArrowUpRight
            size={18}
            className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform"
          />
        </Link>
      </div>
    </section>
  );
}
