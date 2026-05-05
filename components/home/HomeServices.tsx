import Link from 'next/link';
import { ArrowUpRight } from 'lucide-react';
import { SERVICES } from '@/content/services';

export default function HomeServices() {
  return (
    <section id="services" className="py-20 md:py-24 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="mb-16 max-w-3xl">
          <p className="text-sm text-gray-500 uppercase tracking-wider mb-4">( Services )</p>
          <h2 className="text-4xl md:text-6xl font-bold mb-6">
            Where strategy, systems, and execution meet.
          </h2>
          <p className="text-xl text-gray-300 leading-relaxed">
            I work with a limited number of businesses where the problem isn&apos;t
            marketing, technology, or operations in isolation — it&apos;s the absence of a
            connected system. My work focuses on building that system.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {SERVICES.map((service) => (
            <Link
              key={service.id}
              href={service.href}
              className="group border border-white/10 hover:border-accent/50 transition-colors p-8 flex flex-col"
            >
              <div className="flex items-start justify-between mb-4">
                <h3 className="text-xl md:text-2xl font-bold group-hover:text-accent transition-colors">
                  {service.title}
                </h3>
                <ArrowUpRight
                  size={18}
                  className="text-gray-500 group-hover:text-accent shrink-0"
                />
              </div>
              <p className="text-gray-300 leading-relaxed text-sm">{service.body}</p>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
