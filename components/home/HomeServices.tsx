import { ArrowUpRight, Sparkles } from 'lucide-react';

const SERVICES_LIST = [
  {
    title: 'AI & Automation',
    description:
      'Production-ready AI systems including voice agents, workflow automation, and intelligent operational tools for real business environments.',
    features: ['AI Voice Agents', 'Workflow Automation', 'Smart Business Tools'],
  },
  {
    title: 'Business Operations',
    description:
      'Strategic operational systems that optimize business processes through integrated technology and data-driven decision making.',
    features: ['Process Optimization', 'Operational Testing', 'Live Data Integration'],
  },
  {
    title: 'Cybersecurity & Compliance',
    description:
      'Robust security frameworks and compliance solutions that protect your digital assets while meeting industry standards and regulations.',
    features: ['Security Architecture', 'Compliance Auditing', 'Risk Assessment'],
  },
  {
    title: 'Data Management & Analytics',
    description:
      'Comprehensive data solutions that transform raw information into actionable insights through advanced analytics and visualization.',
    features: ['Data Pipeline Design', 'Business Intelligence', 'Predictive Analytics'],
  },
  {
    title: 'Full Stack Development',
    description:
      'End-to-end software development from concept to deployment, specializing in SaaS platforms and business management systems.',
    features: ['SaaS Platform Development', 'Custom Software Solutions', 'API Development'],
  },
  {
    title: 'Systems Architecture',
    description:
      'Comprehensive system design and infrastructure planning that integrates marketing, CRM, and automation for scalable business operations.',
    features: ['Enterprise System Design', 'Infrastructure Planning', 'Scalability Architecture'],
  },
];

export default function HomeServices() {
  return (
    <section id="services" className="py-32 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="mb-16">
          <p className="text-sm text-gray-500 uppercase tracking-wider mb-4">( Our Services )</p>
          <h2 className="text-4xl md:text-6xl font-bold">Where Skill Meets Impact</h2>
        </div>

        <div className="space-y-8">
          {SERVICES_LIST.map((service, index) => (
            <div
              key={index}
              className="group border border-white/10 hover:border-accent/50 transition-all duration-500 relative overflow-hidden"
            >
              <div className="p-8 md:p-12 flex flex-col md:flex-row justify-between items-start gap-8">
                <div className="md:w-1/3">
                  <h3 className="text-2xl md:text-4xl font-bold mb-4 group-hover:text-accent transition-colors">
                    {service.title}
                  </h3>
                </div>

                <div className="md:w-1/2">
                  <p className="text-gray-400 mb-6 leading-relaxed">{service.description}</p>
                  <ul className="space-y-2">
                    {service.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center gap-2 text-gray-300">
                        <Sparkles className="w-4 h-4 text-accent" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="flex items-center justify-center">
                  <div className="w-16 h-16 border border-white/20 group-hover:border-accent rounded-full flex items-center justify-center group-hover:rotate-45 transition-all duration-300">
                    <ArrowUpRight className="w-6 h-6" />
                  </div>
                </div>
              </div>

              <div className="absolute inset-0 bg-gradient-to-r from-accent/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
