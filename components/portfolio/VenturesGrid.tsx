import { ExternalLink } from 'lucide-react';
import { PORTFOLIO_VENTURES } from '@/content/ventures';

export default function VenturesGrid() {
  return (
    <section className="px-6 py-20 border-t border-white/10">
      <div className="max-w-6xl mx-auto">
        <div className="mb-12">
          <p className="text-sm text-gray-500 uppercase tracking-wider mb-3">( Ventures )</p>
          <h2 className="text-3xl md:text-5xl font-bold">Operating companies</h2>
          <p className="text-gray-300 mt-4 max-w-2xl">
            The portfolio of operating companies and the holding entity I run.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {PORTFOLIO_VENTURES.map((v) => {
            const Wrapper = v.url ? 'a' : 'div';
            return (
              <Wrapper
                key={v.id}
                {...(v.url
                  ? {
                      href: v.url,
                      target: '_blank',
                      rel: 'noopener noreferrer',
                    }
                  : {})}
                className="group border border-white/10 hover:border-accent/40 p-6 flex flex-col transition-colors"
              >
                <div className="aspect-[16/9] mb-4 overflow-hidden bg-white/5 rounded-md">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={v.image}
                    alt={v.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    loading="lazy"
                  />
                </div>
                <p className="text-xs uppercase tracking-wider text-gray-500 mb-2">
                  {v.category}
                </p>
                <h3 className="text-lg font-bold text-white mb-2 flex items-center gap-2">
                  {v.name}
                  {v.url && (
                    <ExternalLink
                      size={14}
                      className="text-gray-500 group-hover:text-accent"
                    />
                  )}
                </h3>
                <p className="text-sm text-gray-300 leading-relaxed">{v.shortPitch}</p>
              </Wrapper>
            );
          })}
        </div>
      </div>
    </section>
  );
}
