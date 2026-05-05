import EditorialHeadline from './EditorialHeadline';
import MonoLabel from './MonoLabel';
import { cn } from '@/lib/utils';

type Props = {
  number?: string;
  eyebrow?: string;
  title?: string;
  intro?: string;
  children?: React.ReactNode;
  id?: string;
  className?: string;
  contentClassName?: string;
  /** When true, the section uses no number column — useful for hero etc. */
  flush?: boolean;
};

export default function Section({
  number,
  eyebrow,
  title,
  intro,
  children,
  id,
  className,
  contentClassName,
  flush = false,
}: Props) {
  return (
    <section
      id={id}
      className={cn(
        'border-t border-line py-[clamp(64px,10vh,120px)] px-6',
        className,
      )}
    >
      <div className="max-w-[1440px] mx-auto">
        {(eyebrow || title || intro) && (
          <div
            className={cn(
              'mb-[clamp(48px,7vh,80px)]',
              flush
                ? ''
                : 'grid grid-cols-1 md:grid-cols-[80px_1fr] gap-x-[clamp(24px,4vw,60px)] gap-y-3 items-start',
            )}
          >
            {!flush && (
              <div className="font-mono text-ink-tertiary pt-3 text-[13px] tracking-[0.12em]">
                {number ?? ''}
              </div>
            )}
            <div>
              {eyebrow && (
                <div className="mb-3">
                  <MonoLabel variant="accent">{eyebrow}</MonoLabel>
                </div>
              )}
              {title && (
                <EditorialHeadline
                  text={title}
                  size="section"
                  className="max-w-[22ch]"
                />
              )}
              {intro && (
                <p className="mt-6 text-[18px] leading-[1.55] text-ink-secondary max-w-[60ch]">
                  {intro}
                </p>
              )}
            </div>
          </div>
        )}
        <div className={contentClassName}>{children}</div>
      </div>
    </section>
  );
}
