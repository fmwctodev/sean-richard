import Link from 'next/link';
import Section from '@/components/editorial/Section';
import WorkRow from '@/components/editorial/WorkRow';
import { SELECTED_PRODUCTS } from '@/content/products';

export default function HomeSelectedWorkTeaser() {
  const teasers = SELECTED_PRODUCTS.slice(0, 3);
  return (
    <Section
      number="04"
      eyebrow="Selected Work"
      title="Built, shipped, and {{em}}running in production{{/em}}."
      intro="0→1 product engineering across AI workflow apps, contractor SaaS, and operational platforms — owned end-to-end from UI to deployment."
    >
      <div>
        {teasers.map((product, i) => (
          <WorkRow
            key={product.id}
            num={i + 1}
            title={product.name}
            meta={product.stack.slice(0, 3).join(' · ')}
            href="/portfolio"
          />
        ))}
        <div className="border-t border-line" />
        <div className="mt-12">
          <Link
            href="/portfolio"
            className="group inline-flex items-center gap-2 text-accent hover:text-ink-primary transition-colors font-mono uppercase"
            style={{ fontSize: '12px', letterSpacing: '0.12em' }}
          >
            View full portfolio
            <span
              aria-hidden
              className="transition-transform group-hover:translate-x-1"
            >
              →
            </span>
          </Link>
        </div>
      </div>
    </Section>
  );
}
