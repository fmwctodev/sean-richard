import { EXPERIENCE } from '@/content/experience';

export default function ExperienceTimeline() {
  return (
    <section className="px-6 py-20 border-t border-white/10">
      <div className="max-w-6xl mx-auto">
        <div className="mb-12">
          <p className="text-sm text-gray-500 uppercase tracking-wider mb-3">( Experience )</p>
          <h2 className="text-3xl md:text-5xl font-bold">Work history</h2>
        </div>

        <ol className="relative border-l border-white/10 ml-3 space-y-12">
          {EXPERIENCE.map((entry) => (
            <li key={entry.id} className="pl-8 relative">
              <span className="absolute -left-[7px] top-1 w-3 h-3 rounded-full bg-accent border-2 border-black" />
              <div className="flex flex-col md:flex-row md:items-baseline md:justify-between gap-1 mb-3">
                <div>
                  <h3 className="text-xl md:text-2xl font-bold text-white">
                    {entry.title}
                  </h3>
                  <p className="text-accent text-sm md:text-base">{entry.org}</p>
                </div>
                <p className="text-sm text-gray-500 md:text-right shrink-0">
                  {entry.dates}
                  {entry.location ? ` · ${entry.location}` : ''}
                </p>
              </div>

              {entry.summary && (
                <p className="italic text-gray-300 mb-3 leading-relaxed">{entry.summary}</p>
              )}

              <ul className="space-y-2">
                {entry.bullets.map((bullet, i) => (
                  <li
                    key={i}
                    className="text-gray-300 text-sm leading-relaxed flex gap-2"
                  >
                    <span className="text-accent shrink-0">•</span>
                    <span>{bullet}</span>
                  </li>
                ))}
              </ul>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
