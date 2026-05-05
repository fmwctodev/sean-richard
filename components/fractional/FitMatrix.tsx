import { Check, X } from 'lucide-react';
import { WHO_THIS_IS_FOR, WHO_THIS_IS_NOT_FOR } from '@/content/fractional';

export default function FitMatrix() {
  return (
    <section className="px-6 py-20 border-t border-white/10">
      <div className="max-w-5xl mx-auto">
        <p className="text-sm text-gray-500 uppercase tracking-wider mb-4">( Fit Check )</p>
        <h2 className="text-3xl md:text-5xl font-bold mb-12">
          Who this is for — and who it isn&apos;t.
        </h2>

        <div className="grid md:grid-cols-2 gap-6">
          <div className="border border-emerald-500/30 bg-emerald-500/5 p-8">
            <div className="flex items-center gap-2 mb-6">
              <Check className="text-emerald-400" size={20} />
              <h3 className="text-lg font-bold text-emerald-300">Who This Is For</h3>
            </div>
            <ul className="space-y-3">
              {WHO_THIS_IS_FOR.map((item, i) => (
                <li
                  key={i}
                  className="text-gray-300 leading-relaxed text-sm flex gap-2"
                >
                  <span className="text-emerald-400 shrink-0">•</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="border border-red-500/30 bg-red-500/5 p-8">
            <div className="flex items-center gap-2 mb-6">
              <X className="text-red-400" size={20} />
              <h3 className="text-lg font-bold text-red-300">Who This Is Not For</h3>
            </div>
            <ul className="space-y-3">
              {WHO_THIS_IS_NOT_FOR.map((item, i) => (
                <li
                  key={i}
                  className="text-gray-300 leading-relaxed text-sm flex gap-2"
                >
                  <span className="text-red-400 shrink-0">•</span>
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
