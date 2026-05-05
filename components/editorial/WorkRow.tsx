import Link from 'next/link';
import { cn } from '@/lib/utils';

type Props = {
  num: number;
  title: string;
  meta: string;
  href?: string;
  external?: boolean;
};

export default function WorkRow({ num, title, meta, href, external }: Props) {
  const isLink = Boolean(href);
  const Wrapper = isLink ? Link : 'div';
  const wrapperProps: Record<string, unknown> = isLink
    ? {
        href: href!,
        ...(external ? { target: '_blank', rel: 'noopener noreferrer' } : {}),
      }
    : {};

  return (
    <Wrapper
      {...(wrapperProps as { href: string })}
      className={cn(
        'grid grid-cols-1 md:grid-cols-[80px_1fr_220px] gap-3 md:gap-12 items-baseline py-8 border-t border-line',
        'group transition-[padding] duration-300 hover:pl-4',
        !isLink && 'cursor-default',
      )}
    >
      <span
        className="font-mono text-ink-tertiary"
        style={{ fontSize: '13px', letterSpacing: '0.06em' }}
      >
        / {String(num).padStart(2, '0')}
      </span>
      <span
        className={cn(
          'font-serif text-[clamp(28px,3.5vw,44px)] leading-none text-ink-primary transition-colors duration-300',
          isLink && 'group-hover:text-accent',
        )}
        style={{ letterSpacing: '-0.015em' }}
      >
        {title}
      </span>
      <span
        className="font-mono text-ink-tertiary uppercase md:text-right"
        style={{ fontSize: '13px', letterSpacing: '0.08em' }}
      >
        {meta}
      </span>
    </Wrapper>
  );
}
