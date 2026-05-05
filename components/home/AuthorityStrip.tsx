import { Sparkles } from 'lucide-react';
import { AUTHORITY_TAGS } from '@/content/services';

export default function AuthorityStrip() {
  const looped = [...AUTHORITY_TAGS, ...AUTHORITY_TAGS, ...AUTHORITY_TAGS];
  return (
    <section
      aria-label="Capability tags"
      className="border-y border-white/10 bg-white/[0.02] py-6 overflow-hidden"
    >
      <div className="flex whitespace-nowrap animate-marquee">
        {looped.map((tag, i) => (
          <span
            key={i}
            className="inline-flex items-center text-sm md:text-base font-medium text-gray-300 mx-5 md:mx-7"
          >
            <Sparkles className="w-3.5 h-3.5 md:w-4 md:h-4 mr-2 text-accent" />
            {tag}
          </span>
        ))}
      </div>
    </section>
  );
}
