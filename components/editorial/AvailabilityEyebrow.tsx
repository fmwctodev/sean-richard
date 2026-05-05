import MonoLabel from './MonoLabel';

type Props = {
  status?: string;
  detail?: string;
  period?: string;
};

export default function AvailabilityEyebrow({
  status = 'Available',
  detail = 'Fractional engagements',
  period,
}: Props) {
  const parts = [status, detail, period].filter(Boolean);
  return <MonoLabel leading="dot">{parts.join(' · ')}</MonoLabel>;
}
