type Props = {
  /** 0..1 — how complete the inquiry signal is */
  strength: number;
};

export default function QualificationSignal({ strength }: Props) {
  const clamped = Math.min(1, Math.max(0, strength));
  const radius = 16;
  const circumference = 2 * Math.PI * radius;
  const offset = circumference * (1 - clamped);

  let copy = 'Building signal...';
  if (clamped >= 1) copy = 'Strong fit signal';
  else if (clamped >= 0.66) copy = 'Signal forming';
  else if (clamped >= 0.33) copy = 'Reading inputs';

  return (
    <div className="inline-flex items-center gap-3">
      <svg
        width="40"
        height="40"
        viewBox="0 0 40 40"
        className="shrink-0"
        aria-hidden
      >
        <circle
          cx="20"
          cy="20"
          r={radius}
          fill="none"
          stroke="rgba(242, 237, 230, 0.08)"
          strokeWidth="2"
        />
        <circle
          cx="20"
          cy="20"
          r={radius}
          fill="none"
          stroke="#EF4444"
          strokeWidth="2"
          strokeLinecap="round"
          strokeDasharray={circumference}
          strokeDashoffset={offset}
          transform="rotate(-90 20 20)"
          style={{ transition: 'stroke-dashoffset 400ms ease-out' }}
        />
      </svg>
      <span
        className="font-mono uppercase text-ink-secondary"
        style={{ fontSize: '11px', letterSpacing: '0.12em' }}
      >
        {copy}
      </span>
    </div>
  );
}
