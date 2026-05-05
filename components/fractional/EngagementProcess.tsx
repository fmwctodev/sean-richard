import { ENGAGEMENT_STEPS } from '@/content/fractional';

export default function EngagementProcess() {
  return (
    <section className="px-6 py-20 border-t border-white/10">
      <div className="max-w-5xl mx-auto">
        <p className="text-sm text-gray-500 uppercase tracking-wider mb-4">
          ( How the Engagement Works )
        </p>
        <h2 className="text-3xl md:text-5xl font-bold mb-12">Three steps, no theater.</h2>
        <div className="grid md:grid-cols-3 gap-6">
          {ENGAGEMENT_STEPS.map((step) => (
            <div
              key={step.n}
              className="border border-white/10 p-8 hover:border-accent/30 transition-colors"
            >
              <div className="text-5xl font-black text-accent mb-4">{step.n}</div>
              <h3 className="text-xl font-bold text-white mb-3">{step.title}</h3>
              <p className="text-gray-300 text-sm leading-relaxed">{step.body}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
