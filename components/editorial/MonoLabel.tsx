import { cn } from '@/lib/utils';

type Props = {
  children: React.ReactNode;
  variant?: 'default' | 'tertiary' | 'accent';
  leading?: 'none' | 'rule' | 'dot';
  className?: string;
};

export default function MonoLabel({
  children,
  variant = 'default',
  leading = 'none',
  className,
}: Props) {
  const colorClass =
    variant === 'tertiary'
      ? 'text-ink-tertiary'
      : variant === 'accent'
        ? 'text-accent'
        : 'text-ink-secondary';

  return (
    <span
      className={cn(
        'inline-flex items-center gap-3 font-mono uppercase',
        colorClass,
        className,
      )}
      style={{ fontSize: '11px', letterSpacing: '0.12em' }}
    >
      {leading === 'rule' && (
        <span
          aria-hidden
          className="inline-block bg-accent"
          style={{ width: '24px', height: '1px' }}
        />
      )}
      {leading === 'dot' && (
        <span
          aria-hidden
          className="inline-block bg-accent rounded-full animate-pulse-dot"
          style={{ width: '8px', height: '8px' }}
        />
      )}
      {children}
    </span>
  );
}
