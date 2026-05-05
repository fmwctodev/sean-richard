import { FRACTIONAL_OUTCOMES } from '@/content/fractional';

export default function Outcomes() {
  return (
    <section className="px-6 py-20 border-t border-white/10">
      <div className="max-w-3xl mx-auto">
        <p className="text-sm text-gray-500 uppercase tracking-wider mb-4">( Outcomes )</p>
        <h2 className="text-3xl md:text-5xl font-bold mb-8">
          What success looks like.
        </h2>
        <p className="text-lg text-gray-300 leading-relaxed">{FRACTIONAL_OUTCOMES}</p>
      </div>
    </section>
  );
}
