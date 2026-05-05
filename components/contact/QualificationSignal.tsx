type Props = {
  /** 0..1 — how complete the inquiry signal is */
  strength: number;
};

export default function QualificationSignal({ strength }: Props) {
  const clamped = Math.min(1, Math.max(0, strength));
  const radius = 18;
  const circumference = 2 * Math.PI * radius;
  const offset = circumference * (1 - clamped);

  let copy = 'Cold start';
  let copyClass = 'text-ink-tertiary';
  if (clamped >= 1) {
    copy = 'Strong fit ⚡';
    copyClass = 'text-accent';
  } else if (clamped >= 0.83) {
    copy = 'Locking in';
    copyClass = 'text-accent';
  } else if (clamped >= 0.5) {
    copy = 'Signal forming';
    copyClass = 'text-ink-secondary';
  } else if (clamped >= 0.16) {
    copy = 'Reading inputs';
    copyClass = 'text-ink-secondary';
  }

  const isCharged = clamped >= 1;

  return (
    <div className="inline-flex items-center gap-3">
      <div className="relative shrink-0">
        <svg width="44" height="44" viewBox="0 0 44 44" aria-hidden>
          <circle
            cx="22"
            cy="22"
            r={radius}
            fill="none"
            stroke="rgba(242, 237, 230, 0.08)"
            strokeWidth="2.5"
          />
          <circle
            cx="22"
            cy="22"
            r={radius}
            fill="none"
            stroke="#EF4444"
            strokeWidth="2.5"
            strokeLinecap="round"
            strokeDasharray={circumference}
            strokeDashoffset={offset}
            transform="rotate(-90 22 22)"
            style={{
              transition: 'stroke-dashoffset 600ms cubic-bezier(0.22, 1, 0.36, 1)',
              filter: isCharged
                ? 'drop-shadow(0 0 6px rgba(239, 68, 68, 0.7))'
                : 'none',
            }}
          />
        </svg>
        {isCharged && (
          <span
            aria-hidden
            className="absolute inset-0 rounded-full pointer-events-none animate-pulse-ring border border-accent"
          />
        )}
      </div>
      <span
        className={`font-mono uppercase transition-colors ${copyClass}`}
        style={{ fontSize: '13px', letterSpacing: '0.12em' }}
      >
        {copy}
      </span>
    </div>
  );
}
