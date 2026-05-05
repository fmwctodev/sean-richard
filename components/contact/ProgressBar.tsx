type Props = {
  step: number;
  total: number;
};

export default function ProgressBar({ step, total }: Props) {
  const percent = Math.min(100, Math.max(0, (step / total) * 100));
  return (
    <div className="w-full">
      <div className="flex justify-between mb-2 items-baseline">
        <span
          className="font-mono uppercase text-ink-tertiary"
          style={{ fontSize: '13px', letterSpacing: '0.12em' }}
        >
          Step {String(step).padStart(2, '0')} / {String(total).padStart(2, '0')}
        </span>
        <span
          className="font-mono uppercase text-accent"
          style={{ fontSize: '13px', letterSpacing: '0.12em' }}
        >
          {Math.round(percent)}% Complete
        </span>
      </div>
      <div className="h-[3px] bg-bg-elevated w-full overflow-hidden rounded-full relative">
        <div
          className="h-full bg-gradient-to-r from-accent to-accent-light transition-all duration-700 ease-out rounded-full relative"
          style={{
            width: `${percent}%`,
            boxShadow: '0 0 12px rgba(239, 68, 68, 0.6)',
          }}
        >
          <span
            aria-hidden
            className="absolute right-0 top-0 h-full w-12 opacity-80"
            style={{
              background:
                'linear-gradient(90deg, transparent 0%, rgba(255, 255, 255, 0.6) 100%)',
            }}
          />
        </div>
      </div>
    </div>
  );
}
