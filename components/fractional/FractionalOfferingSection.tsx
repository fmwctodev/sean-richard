import { Sparkles } from 'lucide-react';
import type { FractionalOffering } from '@/content/fractional';

export default function FractionalOfferingSection({
  offering,
}: {
  offering: FractionalOffering;
}) {
  return (
    <section
      id={offering.anchor}
      className="px-6 py-20 border-t border-white/10 scroll-mt-24"
    >
      <div className="max-w-5xl mx-auto">
        <span className="inline-block text-xs font-semibold uppercase tracking-wider px-3 py-1 bg-accent/10 text-accent border border-accent/30 rounded-full mb-6">
          {offering.badge}
        </span>
        <h2 className="text-3xl md:text-5xl font-bold mb-8 leading-tight">
          {offering.headline}
        </h2>
        <div className="space-y-4 text-lg text-gray-300 leading-relaxed mb-12 max-w-3xl">
          {offering.body.map((p, i) => (
            <p key={i}>{p}</p>
          ))}
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          <div>
            <h3 className="text-xs font-semibold uppercase tracking-wider text-gray-500 mb-3">
              Best Fit
            </h3>
            <p className="text-gray-300 leading-relaxed mb-8">{offering.bestFit}</p>

            <h3 className="text-xs font-semibold uppercase tracking-wider text-gray-500 mb-3">
              Outcome
            </h3>
            <p className="text-gray-300 leading-relaxed">{offering.outcome}</p>
          </div>

          <div>
            <h3 className="text-xs font-semibold uppercase tracking-wider text-gray-500 mb-3">
              What This Can Include
            </h3>
            <ul className="space-y-2">
              {offering.includes.map((item, i) => (
                <li
                  key={i}
                  className="flex items-start gap-2 text-gray-300 text-sm leading-relaxed"
                >
                  <Sparkles className="w-3.5 h-3.5 mt-1 text-accent shrink-0" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
