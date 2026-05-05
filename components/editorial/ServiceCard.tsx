import Link from 'next/link';
import { cn } from '@/lib/utils';

type Props = {
  num: number;
  total: number;
  title: string;
  body: string;
  href: string;
  variant?: 'default' | 'closer';
};

export default function ServiceCard({
  num,
  total,
  title,
  body,
  href,
  variant = 'default',
}: Props) {
  const isCloser = variant === 'closer';
  return (
    <Link
      href={href}
      className={cn(
        'group block p-10 transition-colors',
        'border-r border-b border-line',
        isCloser ? 'bg-bg-elevated' : 'hover:bg-bg-elevated',
      )}
    >
      <div
        className="flex justify-between mb-20 font-mono text-ink-tertiary"
        style={{ fontSize: '12px', letterSpacing: '0.12em' }}
      >
        <span>
          {String(num).padStart(2, '0')} / {String(total).padStart(2, '0')}
        </span>
        <span
          className={cn(
            'transition-transform duration-300',
            isCloser ? 'text-accent' : 'text-accent group-hover:translate-x-1',
          )}
        >
          →
        </span>
      </div>
      <h3
        className={cn(
          'font-serif text-[28px] md:text-[32px] mb-4',
          isCloser ? 'text-ink-secondary' : 'text-ink-primary',
        )}
        style={{ lineHeight: 1.05, letterSpacing: '-0.01em' }}
      >
        {title}
      </h3>
      <p className="text-ink-secondary text-[15px] leading-[1.55]">{body}</p>
    </Link>
  );
}
