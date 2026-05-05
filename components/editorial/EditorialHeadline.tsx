import { cn } from '@/lib/utils';

type Props = {
  /**
   * Use the literal string "{{em}}phrase{{/em}}" to mark the italic accent
   * phrase, which renders in italic accent-red. Example:
   * "I build the systems {{em}}behind operators{{/em}} who need to scale."
   */
  text: string;
  as?: 'h1' | 'h2' | 'h3';
  size?: 'hero' | 'section' | 'card';
  className?: string;
};

const SIZE_CLASSES: Record<NonNullable<Props['size']>, string> = {
  hero: 'text-[clamp(40px,7vw,96px)]',
  section: 'text-[clamp(32px,5vw,60px)]',
  card: 'text-[28px] md:text-[32px]',
};

function renderWithAccent(text: string) {
  const parts: Array<{ type: 'text' | 'em'; value: string }> = [];
  const regex = /\{\{em\}\}(.*?)\{\{\/em\}\}/g;
  let lastIndex = 0;
  let match: RegExpExecArray | null;
  while ((match = regex.exec(text)) !== null) {
    if (match.index > lastIndex) {
      parts.push({ type: 'text', value: text.slice(lastIndex, match.index) });
    }
    parts.push({ type: 'em', value: match[1] });
    lastIndex = regex.lastIndex;
  }
  if (lastIndex < text.length) {
    parts.push({ type: 'text', value: text.slice(lastIndex) });
  }
  return parts.map((p, i) =>
    p.type === 'em' ? (
      <em key={i} className="text-accent not-italic" style={{ fontStyle: 'italic' }}>
        {p.value}
      </em>
    ) : (
      <span key={i}>{p.value}</span>
    ),
  );
}

export default function EditorialHeadline({
  text,
  as: Tag = 'h2',
  size = 'section',
  className,
}: Props) {
  return (
    <Tag
      className={cn(
        'font-serif font-normal text-ink-primary',
        SIZE_CLASSES[size],
        className,
      )}
      style={{ lineHeight: size === 'hero' ? 0.95 : 1, letterSpacing: '-0.025em' }}
    >
      {renderWithAccent(text)}
    </Tag>
  );
}
