import { ExternalLink } from 'lucide-react';
import Section from '@/components/editorial/Section';
import { SELECTED_PRODUCTS } from '@/content/products';

export default function SelectedProductsGrid() {
  return (
    <Section
      number="01"
      eyebrow="Selected Products · 0→1, Built &amp; Shipped"
      title="Production work, owned {{em}}end-to-end{{/em}}."
      intro="UI, data layer, integrations, deployment, and iteration with real users."
    >
      <div className="grid md:grid-cols-2 gap-px bg-line">
        {SELECTED_PRODUCTS.map((product) => (
          <article
            key={product.id}
            className="bg-bg-primary p-10 flex flex-col"
          >
            <header className="mb-5">
              <h3
                className="font-serif text-[26px] md:text-[30px] text-ink-primary mb-3"
                style={{ lineHeight: 1.05, letterSpacing: '-0.01em' }}
              >
                {product.name}
              </h3>
              <p className="text-ink-secondary text-[15px] leading-[1.55]">
                {product.tagline}
              </p>
            </header>

            <div className="flex flex-wrap gap-2 mb-6">
              {product.stack.map((tech) => (
                <span
                  key={tech}
                  className="font-mono uppercase text-ink-tertiary border border-line px-2 py-[3px] rounded-full"
                  style={{ fontSize: '10px', letterSpacing: '0.06em' }}
                >
                  {tech}
                </span>
              ))}
            </div>

            <ul className="space-y-3 mb-6 flex-1">
              {product.bullets.map((bullet, i) => (
                <li
                  key={i}
                  className="text-ink-secondary text-[14px] leading-[1.55] flex gap-3"
                >
                  <span className="text-accent shrink-0 font-mono text-[12px] mt-[2px]">
                    →
                  </span>
                  <span>{bullet}</span>
                </li>
              ))}
            </ul>

            {product.liveLinks && product.liveLinks.length > 0 && (
              <div className="flex flex-wrap gap-x-5 gap-y-2 pt-5 border-t border-line">
                {product.liveLinks.map((link) => (
                  <a
                    key={link.url}
                    href={link.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 font-mono uppercase text-accent hover:text-ink-primary transition-colors"
                    style={{ fontSize: '11px', letterSpacing: '0.06em' }}
                  >
                    <ExternalLink size={13} />
                    <span>{link.label}</span>
                  </a>
                ))}
              </div>
            )}
          </article>
        ))}
      </div>
    </Section>
  );
}
