type Props = {
  step: number;
  total: number;
};

export default function ProgressBar({ step, total }: Props) {
  const percent = Math.min(100, Math.max(0, (step / total) * 100));
  return (
    <div className="w-full">
      <div className="flex justify-between mb-2">
        <span
          className="font-mono uppercase text-ink-tertiary"
          style={{ fontSize: '11px', letterSpacing: '0.12em' }}
        >
          Step {String(step).padStart(2, '0')} / {String(total).padStart(2, '0')}
        </span>
        <span
          className="font-mono uppercase text-accent"
          style={{ fontSize: '11px', letterSpacing: '0.12em' }}
        >
          {Math.round(percent)}%
        </span>
      </div>
      <div className="h-[2px] bg-line w-full overflow-hidden rounded-full">
        <div
          className="h-full bg-accent transition-all duration-500 ease-out rounded-full"
          style={{ width: `${percent}%` }}
        />
      </div>
    </div>
  );
}
