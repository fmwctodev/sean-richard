import Section from '@/components/editorial/Section';
import ServiceCard from '@/components/editorial/ServiceCard';
import { SERVICES } from '@/content/services';

export default function HomeServices() {
  const total = SERVICES.length;
  return (
    <Section
      id="services"
      number="01"
      eyebrow="Services"
      title="Where strategy, systems, and {{em}}execution{{/em}} meet."
      intro="I work with a limited number of businesses where the problem isn't marketing, technology, or operations in isolation — it's the absence of a connected system. My work focuses on building that system."
    >
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 border-t border-line">
        {SERVICES.map((service, i) => (
          <ServiceCard
            key={service.id}
            num={i + 1}
            total={total}
            title={service.title}
            body={service.body}
            href={service.href}
          />
        ))}
        <ServiceCard
          num={total + 1}
          total={total + 1}
          title="Not sure which fits?"
          body="Most engagements start with a systems review. Tell me what you're operating and what's broken — I'll tell you whether I'm the right person and where to start."
          href="/contact"
          variant="closer"
        />
      </div>
    </Section>
  );
}
