type Props = {
  items: readonly string[];
};

export default function MarqueeStrip({ items }: Props) {
  // Render twice for a seamless loop with `translateX(-50%)` keyframe
  const looped = [...items, ...items];
  return (
    <div className="border-y border-line bg-bg-primary/40 backdrop-blur-sm py-5 overflow-hidden">
      <div className="flex gap-12 animate-marquee whitespace-nowrap">
        {looped.map((item, i) => (
          <span
            key={i}
            className="inline-flex items-center gap-12 font-mono uppercase text-ink-secondary"
            style={{ fontSize: '13px', letterSpacing: '0.06em' }}
          >
            {item}
            <span aria-hidden className="text-accent" style={{ fontSize: '8px' }}>
              ◆
            </span>
          </span>
        ))}
      </div>
    </div>
  );
}
