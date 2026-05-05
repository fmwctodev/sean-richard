import Link from 'next/link';
import { ArrowUpRight } from 'lucide-react';
import { SELECTED_PRODUCTS } from '@/content/products';

export default function HomeSelectedWorkTeaser() {
  const teasers = SELECTED_PRODUCTS.slice(0, 3);
  return (
    <section className="px-6 py-32 border-t border-white/10">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4 mb-12">
          <div>
            <p className="text-sm text-gray-500 uppercase tracking-wider mb-4">
              ( Selected Work )
            </p>
            <h2 className="text-4xl md:text-6xl font-bold">Production work, end-to-end.</h2>
          </div>
          <Link
            href="/portfolio"
            className="group inline-flex items-center gap-2 text-accent hover:text-accent-light transition-colors font-semibold"
          >
            View Full Portfolio
            <ArrowUpRight
              size={18}
              className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform"
            />
          </Link>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {teasers.map((product) => (
            <Link
              key={product.id}
              href="/portfolio"
              className="group border border-white/10 hover:border-accent/40 p-8 flex flex-col transition-colors"
            >
              <div className="flex items-start justify-between mb-4">
                <h3 className="text-xl font-bold text-white">{product.name}</h3>
                <ArrowUpRight
                  size={18}
                  className="text-gray-500 group-hover:text-accent shrink-0"
                />
              </div>
              <p className="text-gray-400 text-sm leading-relaxed mb-6 flex-1">
                {product.tagline}
              </p>
              <div className="flex flex-wrap gap-1.5">
                {product.stack.slice(0, 4).map((tech) => (
                  <span
                    key={tech}
                    className="text-[10px] px-2 py-0.5 bg-white/5 border border-white/10 text-gray-400 rounded-full"
                  >
                    {tech}
                  </span>
                ))}
                {product.stack.length > 4 && (
                  <span className="text-[10px] px-2 py-0.5 text-gray-500">
                    +{product.stack.length - 4}
                  </span>
                )}
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
