import Link from 'next/link';
import MonoLabel from '@/components/editorial/MonoLabel';

type Teaser = {
  badge: string;
  headline: string;
  audience: string;
  body: string;
  href: string;
  cta: string;
};

const TEASERS: Teaser[] = [
  {
    badge: 'Fractional CMO',
    headline: 'For contractors and home-service companies.',
    audience: 'Contractors doing $1M–$10M+ in revenue who need senior marketing leadership without hiring a full-time CMO.',
    body: 'Senior marketing leadership across paid media, CRM, funnel infrastructure, sales pipeline design, lead-to-close automation, and vendor oversight. Built for contractors who need accountable growth, not another marketing vendor.',
    href: '/fractional-cmo-contractors',
    cta: 'Fractional CMO services',
  },
  {
    badge: 'Fractional CTO',
    headline: 'For service businesses, SaaS, and growth-stage operators.',
    audience: 'Service-based companies, SaaS startups, agencies, and growth-stage operators that need executive-level technology direction without a full-time CTO.',
    body: 'Executive-level technology direction across roadmap, software stack review, automation architecture, AI implementation planning, vendor oversight, cybersecurity posture review, and IT operations direction. Hands-on IT and cybersecurity background informs every recommendation.',
    href: '/fractional-cto-service-businesses',
    cta: 'Fractional CTO services',
  },
];

export default function FractionalSplitTeasers() {
  return (
    <section className="border-t border-line px-6 py-[clamp(64px,10vh,120px)]">
      <div className="max-w-[1440px] mx-auto">
        <div className="max-w-3xl mb-12">
          <div className="mb-6">
            <MonoLabel variant="accent" leading="rule">
              Two Practices
            </MonoLabel>
          </div>
          <h2
            className="font-sans font-extrabold text-ink-primary"
            style={{
              fontSize: 'clamp(32px, 4.5vw, 56px)',
              lineHeight: 1.02,
              letterSpacing: '-0.03em',
            }}
          >
            Pick the one built{' '}
            <span className="text-accent">for your company</span>.
          </h2>
        </div>

        <div className="grid md:grid-cols-2 gap-4">
          {TEASERS.map((t) => (
            <Link
              key={t.href}
              href={t.href}
              className="group relative border border-line bg-bg-elevated/40 p-8 rounded-2xl overflow-hidden hover:border-accent/40 transition-colors flex flex-col"
            >
              <span
                aria-hidden
                className="absolute -top-12 -right-12 w-40 h-40 rounded-full opacity-0 group-hover:opacity-100 transition-opacity"
                style={{
                  background:
                    'radial-gradient(circle, rgba(239, 68, 68, 0.3) 0%, transparent 70%)',
                  filter: 'blur(28px)',
                }}
              />
              <div className="relative mb-5">
                <MonoLabel variant="accent" leading="rule">
                  {t.badge}
                </MonoLabel>
              </div>
              <h3
                className="relative font-sans font-bold text-ink-primary mb-4"
                style={{ fontSize: '24px', lineHeight: 1.15, letterSpacing: '-0.015em' }}
              >
                {t.headline}
              </h3>
              <p className="relative text-ink-secondary leading-[1.6] text-[15px] mb-4">
                {t.audience}
              </p>
              <p className="relative text-ink-secondary leading-[1.6] text-[15px] mb-6 flex-1">
                {t.body}
              </p>
              <span
                className="relative inline-flex items-center gap-2 font-mono uppercase text-accent group-hover:text-ink-primary transition-colors"
                style={{ fontSize: '13px', letterSpacing: '0.06em' }}
              >
                {t.cta}
                <span aria-hidden className="transition-transform group-hover:translate-x-1">
                  →
                </span>
              </span>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
