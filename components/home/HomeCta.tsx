import Link from 'next/link';
import { ArrowUpRight } from 'lucide-react';
import LastUpdated from '@/components/LastUpdated';

export default function HomeCta() {
  return (
    <section id="cta" className="py-32 px-6 border-t border-white/10">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-3xl md:text-5xl font-bold mb-8">Ready to Build Something Great?</h2>
        <p className="text-xl text-gray-400 mb-12">
          Let&apos;s discuss how we can create innovative solutions for your business
        </p>
        <Link
          href="/contact"
          className="group inline-flex items-center gap-2 px-8 py-4 bg-accent text-white font-semibold hover:bg-accent-dark transition-all"
        >
          Get In Touch
          <ArrowUpRight
            size={20}
            className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform"
          />
        </Link>
        <LastUpdated date="May 2026" />
      </div>
    </section>
  );
}
