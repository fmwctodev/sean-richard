import Link from 'next/link';
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
        {VENTURES.map((v) => {
          const label = v.name.replace(/\s+(Inc|LLC)\.?$/, '');
          const linkClass =
            'font-serif italic text-[20px] md:text-[22px] leading-none text-ink-primary hover:text-accent transition-colors';
          let nameNode;
          if (v.internalPath) {
            nameNode = (
              <Link href={v.internalPath} className={linkClass}>
                {label}
              </Link>
            );
          } else if (v.url) {
            nameNode = (
              <a
                href={v.url}
                target="_blank"
                rel="noopener noreferrer"
                className={linkClass}
              >
                {label}
              </a>
            );
          } else {
            nameNode = (
              <span className="font-serif italic text-[20px] md:text-[22px] leading-none text-ink-primary">
                {label}
              </span>
            );
          }
          return (
            <li
              key={v.id}
              className="flex items-baseline justify-between gap-4 py-[18px] border-b border-line"
            >
              {nameNode}
              <span
                className="font-mono uppercase text-ink-tertiary text-right shrink-0"
                style={{ fontSize: '13px', letterSpacing: '0.06em' }}
              >
                {v.category}
              </span>
            </li>
          );
        })}
      </ul>
    </aside>
  );
}
