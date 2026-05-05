import { ExternalLink } from 'lucide-react';
import { SELECTED_PRODUCTS } from '@/content/products';

export default function SelectedProductsGrid() {
  return (
    <section className="px-6 py-20 border-t border-white/10">
      <div className="max-w-6xl mx-auto">
        <div className="mb-12">
          <p className="text-sm text-gray-500 uppercase tracking-wider mb-3">
            ( Selected Products · 0→1, Built &amp; Shipped )
          </p>
          <h2 className="text-3xl md:text-5xl font-bold">Flagship work</h2>
          <p className="text-gray-300 mt-4 max-w-2xl">
            Products I&apos;ve owned end-to-end — from problem scoping through production
            deployment. Most are private codebases; a few are linked below.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {SELECTED_PRODUCTS.map((product) => (
            <article
              key={product.id}
              className="border border-white/10 hover:border-accent/40 transition-colors p-8 flex flex-col"
            >
              <header className="mb-4">
                <h3 className="text-2xl font-bold text-white mb-2">{product.name}</h3>
                <p className="text-gray-300">{product.tagline}</p>
              </header>

              <div className="flex flex-wrap gap-2 mb-6">
                {product.stack.map((tech) => (
                  <span
                    key={tech}
                    className="text-xs px-2 py-1 bg-white/5 border border-white/10 text-gray-300 rounded-full"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              <ul className="space-y-3 mb-6 flex-1">
                {product.bullets.map((bullet, i) => (
                  <li key={i} className="text-sm text-gray-300 leading-relaxed flex gap-2">
                    <span className="text-accent shrink-0">•</span>
                    <span>{bullet}</span>
                  </li>
                ))}
              </ul>

              {product.liveLinks && product.liveLinks.length > 0 && (
                <div className="flex flex-wrap gap-x-4 gap-y-2 mt-auto pt-2 border-t border-white/5">
                  {product.liveLinks.map((link) => (
                    <a
                      key={link.url}
                      href={link.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 text-sm text-accent hover:text-accent-light transition-colors"
                    >
                      <ExternalLink size={14} />
                      <span>{link.label}</span>
                    </a>
                  ))}
                </div>
              )}
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
