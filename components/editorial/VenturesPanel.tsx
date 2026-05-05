import MonoLabel from './MonoLabel';
import { VENTURES } from '@/content/ventures';

export default function VenturesPanel() {
  return (
    <aside>
      <div className="mb-6">
        <MonoLabel variant="tertiary" leading="rule">
          Currently operating
        </MonoLabel>
      </div>
      <ul className="border-t border-line">
        {VENTURES.map((v) => (
          <li
            key={v.id}
            className="flex items-baseline justify-between gap-4 py-[18px] border-b border-line"
          >
            {v.url ? (
              <a
                href={v.url}
                target="_blank"
                rel="noopener noreferrer"
                className="font-serif italic text-[20px] md:text-[22px] leading-none text-ink-primary hover:text-accent transition-colors"
              >
                {v.name.replace(/\s+(Inc|LLC)\.?$/, '')}
              </a>
            ) : (
              <span className="font-serif italic text-[20px] md:text-[22px] leading-none text-ink-primary">
                {v.name.replace(/\s+(Inc|LLC)\.?$/, '')}
              </span>
            )}
            <span
              className="font-mono uppercase text-ink-tertiary text-right shrink-0"
              style={{ fontSize: '11px', letterSpacing: '0.06em' }}
            >
              {v.category}
            </span>
          </li>
        ))}
      </ul>
    </aside>
  );
}
