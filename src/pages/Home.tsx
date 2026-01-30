import { Link, useLocation } from 'react-router-dom';
import { ArrowUpRight, Sparkles, ChevronDown } from 'lucide-react';
import { useEffect, useRef, useState } from 'react';
import { HyperText } from '@/components/ui/hyper-text';
import { ExpandableCard } from '@/components/ui/expandable-card';
import SEO from '@/components/SEO';
import SchemaMarkup from '@/components/SchemaMarkup';
import LastUpdated from '@/components/LastUpdated';

export default function Home() {
  const [visibleSections, setVisibleSections] = useState<Set<string>>(new Set());
  const observerRef = useRef<IntersectionObserver | null>(null);
  const location = useLocation();

  useEffect(() => {
    if (location.state?.scrollTo) {
      setTimeout(() => {
        const section = document.getElementById(location.state.scrollTo);
        if (section) {
          section.scrollIntoView({ behavior: 'smooth' });
        }
      }, 100);
      window.history.replaceState({}, document.title);
    }
  }, [location.state]);

  useEffect(() => {
    observerRef.current = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setVisibleSections((prev) => new Set(prev).add(entry.target.id));
          }
        });
      },
      { threshold: 0.1 }
    );

    document.querySelectorAll('[data-animate]').forEach((el) => {
      observerRef.current?.observe(el);
    });

    return () => observerRef.current?.disconnect();
  }, []);

  const services = [
    'Systems Architecture',
    'AI Automation',
    'Digital Infrastructure',
    'Business Operations',
    'Full Stack Development',
    'Marketing Systems',
  ];

  const projects = [
    {
      title: 'BuilderLync Platform',
      category: ['SaaS', 'Development'],
      gradient: 'from-cyan-500 to-blue-500',
    },
    {
      title: 'AI Voice Agents',
      category: ['AI', 'Automation'],
      gradient: 'from-orange-500 to-red-500',
    },
    {
      title: 'CRM Infrastructure',
      category: ['Systems', 'Integration'],
      gradient: 'from-emerald-500 to-teal-500',
    },
    {
      title: 'Marketing Automation',
      category: ['Marketing', 'Workflow'],
      gradient: 'from-purple-500 to-pink-500',
    },
    {
      title: 'Business Intelligence',
      category: ['Analytics', 'Data'],
      gradient: 'from-blue-500 to-indigo-500',
    },
    {
      title: 'Operational Systems',
      category: ['Operations', 'Testing'],
      gradient: 'from-amber-500 to-orange-500',
    },
  ];

  const servicesList = [
    {
      title: 'AI & Automation',
      description: 'Production-ready AI systems including voice agents, workflow automation, and intelligent operational tools for real business environments.',
      features: ['AI Voice Agents', 'Workflow Automation', 'Smart Business Tools'],
    },
    {
      title: 'Business Operations',
      description: 'Strategic operational systems that optimize business processes through integrated technology and data-driven decision making.',
      features: ['Process Optimization', 'Operational Testing', 'Live Data Integration'],
    },
    {
      title: 'Cybersecurity & Compliance',
      description: 'Robust security frameworks and compliance solutions that protect your digital assets while meeting industry standards and regulations.',
      features: ['Security Architecture', 'Compliance Auditing', 'Risk Assessment'],
    },
    {
      title: 'Data Management & Analytics',
      description: 'Comprehensive data solutions that transform raw information into actionable insights through advanced analytics and visualization.',
      features: ['Data Pipeline Design', 'Business Intelligence', 'Predictive Analytics'],
    },
    {
      title: 'Full Stack Development',
      description: 'End-to-end software development from concept to deployment, specializing in SaaS platforms and business management systems.',
      features: ['SaaS Platform Development', 'Custom Software Solutions', 'API Development'],
    },
    {
      title: 'Systems Architecture',
      description: 'Comprehensive system design and infrastructure planning that integrates marketing, CRM, and automation for scalable business operations.',
      features: ['Enterprise System Design', 'Infrastructure Planning', 'Scalability Architecture'],
    },
  ];

  const faqs = [
    {
      question: 'Who is Sean Richard?',
      answer: 'Sean Richard is an American entrepreneur, systems architect, and software operator based in the United States. He is a graduate of Full Sail University and focuses on building AI-driven automation, business infrastructure, and scalable operating systems for contractors and service-based companies.'
    },
    {
      question: 'What companies does Sean Richard operate?',
      answer: 'Sean Richard founded and operates four companies: Sitehues Media Inc (digital infrastructure and marketing systems), Autom8ion Lab (AI automation and voice agents), BuilderLync Inc (contractor SaaS platform), and Tarrytown Roofing LLC (service business used for real-world system validation).'
    },
    {
      question: 'What is Sean Richard\'s professional focus?',
      answer: 'Sean Richard specializes in systems architecture, AI automation, SaaS platform development, and business operations infrastructure. His work centers on building production-ready systems that integrate CRM, marketing automation, and AI tools for service-based businesses and contractors.'
    },
    {
      question: 'What is BuilderLync?',
      answer: 'BuilderLync Inc is a SaaS platform providing an all-in-one operating system for contractors. It unifies CRM, estimating, project management, marketing automation, and AI communication tools into a single platform, replacing fragmented software stacks with a centralized system.'
    },
    {
      question: 'What is Autom8ion Lab?',
      answer: 'Autom8ion Lab is an AI automation company that develops production-ready systems including AI voice agents, workflow automation, and operational AI tools. The company builds solutions designed for deployment in live business environments.'
    }
  ];

  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": faqs.map(faq => ({
      "@type": "Question",
      "name": faq.question,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": faq.answer
      }
    }))
  };

  return (
    <div className="pt-20">
      <SEO
        title="Sean Richard - Entrepreneur and Systems Architect"
        description="Sean Richard is an American entrepreneur, systems architect, and software operator focused on building AI-driven automation, business infrastructure, and scalable operating systems for contractors and service-based companies. He is the founder and operator of Sitehues Media Inc, Autom8ion Lab, BuilderLync Inc, and Tarrytown Roofing LLC."
        path="/"
      />
      <SchemaMarkup path="/" pageTitle="Home" />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      {/* Hero Section */}
      <section
        id="hero"
        data-animate
        className="min-h-screen flex flex-col justify-start px-4 md:px-6 pt-8 md:pt-20 pb-0 relative overflow-hidden"
      >
        <div className="max-w-7xl mx-auto w-full relative">
          <div className="text-center mb-2 md:mb-4 animate-fade-in flex justify-center">
            <HyperText
              text="Sean Richard"
              className="text-4xl sm:text-5xl md:text-8xl lg:text-9xl font-black tracking-tighter text-white"
              duration={1200}
            />
          </div>

          <div className="relative min-h-[600px] sm:min-h-[650px] md:min-h-[600px] lg:min-h-[700px]">
            {/* Mobile Layout */}
            <div className="md:hidden flex flex-col items-center relative z-10">
              <div className="flex items-center justify-between w-full px-2 mb-4">
                <h2 className="text-3xl sm:text-4xl font-bold animate-slide-up">
                  Systems
                </h2>
                <h2 className="text-3xl sm:text-4xl font-bold animate-slide-up">
                  Architect
                </h2>
              </div>

              <p className="text-base text-gray-400 leading-relaxed animate-slide-up text-center px-4 mb-6 max-w-sm">
                I build AI-driven platforms, automation systems, and operational infrastructure designed for operators, not theory.
              </p>

              <Link to="/contact" className="relative z-30 group cursor-pointer animate-scale-in mb-4">
                <div className="w-28 h-28 rounded-full border-2 border-white/20 flex items-center justify-center hover:border-accent transition-all duration-300">
                  <div className="text-center">
                    <div className="text-xs font-semibold mb-1">Hire Me</div>
                    <ArrowUpRight className="w-4 h-4 mx-auto mb-1" />
                    <div className="text-xs font-semibold">For Projects</div>
                  </div>
                </div>
              </Link>
            </div>

            {/* Desktop Layout */}
            <div className="hidden md:flex flex-row justify-between items-start gap-8 relative z-10">
              <div className="md:w-2/5 text-left">
                <h2 className="text-6xl lg:text-7xl font-bold animate-slide-up mb-8">
                  Systems
                </h2>
                <p className="text-xl text-gray-400 leading-relaxed animate-slide-up max-w-sm">
                  I build AI-driven platforms, automation systems, and operational infrastructure designed for operators, not theory.
                </p>
              </div>

              <div className="md:w-2/5 text-right flex flex-col items-end">
                <h2 className="text-6xl lg:text-7xl font-bold animate-slide-up mb-8">
                  Architect
                </h2>
                <Link to="/contact" className="relative group cursor-pointer animate-scale-in">
                  <div className="w-36 h-36 rounded-full border-2 border-white/20 flex items-center justify-center hover:border-accent transition-all duration-300 hover:rotate-12">
                    <div className="text-center">
                      <div className="text-sm font-semibold mb-1">Hire Me</div>
                      <ArrowUpRight className="w-5 h-5 mx-auto mb-1" />
                      <div className="text-sm font-semibold">For Projects</div>
                    </div>
                  </div>
                </Link>
              </div>
            </div>

            {/* Centered Headshot */}
            <div className="absolute inset-x-0 top-[120px] md:top-0 z-20 animate-scale-in pointer-events-none flex justify-center">
              <div className="w-[280px] sm:w-[320px] md:w-[450px] lg:w-[550px]">
                <img
                  src="/assets/headshots/sean-richard.png"
                  alt="Sean Richard - Professional Headshot"
                  className="w-full h-auto"
                />
              </div>
            </div>

            {/* Marquee Banners */}
            <div className="absolute bottom-0 left-0 right-0">
              {/* Top banner - behind headshot */}
              <div className="bg-red-600 transform -rotate-2 md:-rotate-3 py-3 md:py-5 overflow-hidden relative z-10 -mx-8 md:-mx-20">
                <div className="flex whitespace-nowrap animate-marquee">
                  {[...services, ...services, ...services].map((service, index) => (
                    <span key={index} className="inline-flex items-center text-sm sm:text-base md:text-2xl lg:text-3xl font-bold text-white mx-4 md:mx-8">
                      <Sparkles className="w-4 h-4 md:w-6 md:h-6 mr-2 md:mr-4 text-yellow-300" />
                      {service}
                    </span>
                  ))}
                </div>
              </div>

              {/* Bottom banner - in front of headshot */}
              <div className="bg-red-600 transform rotate-2 md:rotate-3 py-3 md:py-5 overflow-hidden -mt-1 md:-mt-2 relative z-30 -mx-8 md:-mx-20">
                <div className="flex whitespace-nowrap animate-marquee-reverse">
                  {[...services, ...services, ...services].map((service, index) => (
                    <span key={index} className="inline-flex items-center text-sm sm:text-base md:text-2xl lg:text-3xl font-bold text-white mx-4 md:mx-8">
                      <Sparkles className="w-4 h-4 md:w-6 md:h-6 mr-2 md:mr-4 text-yellow-300" />
                      {service}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Portfolio Section */}
      <section
        id="projects"
        data-animate
        className={`py-32 px-6 transition-opacity duration-1000 ${
          visibleSections.has('projects') ? 'opacity-100' : 'opacity-0'
        }`}
      >
        <div className="max-w-7xl mx-auto">
          <div className="mb-16">
            <p className="text-sm text-gray-500 uppercase tracking-wider mb-4">( Latest Portfolio )</p>
            <h2 className="text-4xl md:text-6xl font-bold">Companies and Projects</h2>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <ExpandableCard
              title="Sitehues Media Inc."
              description="Digital Infrastructure"
              src="/assets/images/sitehues-media.png"
              className="aspect-[4/3]"
              classNameExpanded="[&_h4]:text-white [&_h4]:font-medium [&_h4]:text-xl"
            >
              <h4>Company Overview</h4>
              <p>
                Sitehues Media is a digital infrastructure and execution company built for service-based businesses
                that need predictable growth systems. It focuses on paid media execution, funnel architecture, and
                CRM infrastructure designed to produce measurable results, not vanity metrics.
              </p>
              <h4>Key Capabilities</h4>
              <p>
                The company delivers paid advertising systems, conversion-focused funnels, CRM configuration, and
                automated lead nurturing designed to move prospects from first touch to closed deal with minimal friction.
              </p>
              <h4>Operational Approach</h4>
              <p>
                Sitehues Media operates inside live production environments, validating systems through real client
                campaigns before standardizing and scaling execution frameworks across industries.
              </p>
            </ExpandableCard>

            <ExpandableCard
              title="Autom8ion Lab"
              description="AI Automation"
              src="/assets/images/autom8ion-lab.png"
              className="aspect-[4/3]"
              classNameExpanded="[&_h4]:text-white [&_h4]:font-medium [&_h4]:text-xl"
            >
              <h4>Company Overview</h4>
              <p>
                Autom8ion Lab is an AI automation company focused on building production-ready systems for real
                business operations. It develops AI solutions that replace manual workflows, reduce response time,
                and improve operational throughput.
              </p>
              <h4>Key Capabilities</h4>
              <p>
                The platform includes AI voice agents, workflow automation, internal process orchestration, and
                system-to-system integrations designed for reliability and scale.
              </p>
              <h4>Technical Implementation</h4>
              <p>
                Solutions are built for deployment in live environments, emphasizing uptime, security, and seamless
                integration with existing business infrastructure rather than experimental or demo-based AI tools.
              </p>
            </ExpandableCard>

            <ExpandableCard
              title="BuilderLync Inc."
              description="Contractor SaaS"
              src="/assets/images/builderlync.png"
              className="aspect-[4/3]"
              classNameExpanded="[&_h4]:text-white [&_h4]:font-medium [&_h4]:text-xl"
            >
              <h4>Company Overview</h4>
              <p>
                BuilderLync is a contractor-focused SaaS platform designed to unify CRM, estimating, project
                management, marketing automation, and AI communication tools into a single operating system.
                It replaces fragmented software stacks with a centralized, execution-driven platform.
              </p>
              <h4>Key Features</h4>
              <p>
                The platform supports lead-to-close workflows, pipeline management, project tracking, automated
                communication, and AI-assisted follow-up across multiple teams and job sites.
              </p>
              <h4>Technical Implementation</h4>
              <p>
                Built with modern web technologies and designed for scalability, BuilderLync is architected to
                support high concurrency, real-time updates, and long-term data ownership for contractors.
              </p>
            </ExpandableCard>

            <ExpandableCard
              title="Tarrytown Roofing LLC"
              description="Live Operations"
              src="/assets/images/tarrytown-roofing.png"
              className="aspect-[4/3]"
              classNameExpanded="[&_h4]:text-white [&_h4]:font-medium [&_h4]:text-xl"
            >
              <h4>Company Overview</h4>
              <p>
                Tarrytown Roofing is a service-based roofing company operated as a real-world testing environment
                for systems, automation, and contractor software. It functions as a live production business,
                not a demonstration brand.
              </p>
              <h4>Key Operations</h4>
              <p>
                The company manages residential and commercial roofing projects while running fully integrated
                sales pipelines, CRM workflows, and automated communication systems.
              </p>
              <h4>Operational Role</h4>
              <p>
                Tarrytown Roofing is used to validate software, automation, and operational frameworks under
                real market conditions before they are deployed into SaaS platforms and client systems.
              </p>
            </ExpandableCard>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section
        id="services"
        data-animate
        className={`py-32 px-6 transition-opacity duration-1000 ${
          visibleSections.has('services') ? 'opacity-100' : 'opacity-0'
        }`}
      >
        <div className="max-w-7xl mx-auto">
          <div className="mb-16">
            <p className="text-sm text-gray-500 uppercase tracking-wider mb-4">( Our Services )</p>
            <h2 className="text-4xl md:text-6xl font-bold">Where Skill Meets Impact</h2>
          </div>

          <div className="space-y-8">
            {servicesList.map((service, index) => (
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

      {/* FAQ Section */}
      <section
        id="faq"
        data-animate
        className={`py-32 px-6 transition-opacity duration-1000 ${
          visibleSections.has('faq') ? 'opacity-100' : 'opacity-0'
        }`}
      >
        <div className="max-w-4xl mx-auto">
          <div className="mb-16">
            <p className="text-sm text-gray-500 uppercase tracking-wider mb-4">( Common Questions )</p>
            <h2 className="text-4xl md:text-6xl font-bold">Frequently Asked</h2>
          </div>

          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <div
                key={index}
                className="border border-white/10 hover:border-white/20 transition-colors"
              >
                <button
                  onClick={() => setOpenFaq(openFaq === index ? null : index)}
                  className="w-full p-6 flex items-center justify-between text-left"
                >
                  <span className="text-lg md:text-xl font-semibold pr-4">{faq.question}</span>
                  <ChevronDown
                    className={`w-5 h-5 flex-shrink-0 transition-transform duration-300 ${
                      openFaq === index ? 'rotate-180' : ''
                    }`}
                  />
                </button>
                <div
                  className={`overflow-hidden transition-all duration-300 ${
                    openFaq === index ? 'max-h-96' : 'max-h-0'
                  }`}
                >
                  <p className="px-6 pb-6 text-gray-400 leading-relaxed">{faq.answer}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section
        id="cta"
        data-animate
        className={`py-32 px-6 border-t border-white/10 transition-opacity duration-1000 ${
          visibleSections.has('cta') ? 'opacity-100' : 'opacity-0'
        }`}
      >
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-5xl font-bold mb-8">Ready to Build Something Great?</h2>
          <p className="text-xl text-gray-400 mb-12">
            Let's discuss how we can create innovative solutions for your business
          </p>
          <Link
            to="/contact"
            className="group inline-flex items-center gap-2 px-8 py-4 bg-accent text-white font-semibold hover:bg-accent-dark transition-all"
          >
            Get In Touch
            <ArrowUpRight size={20} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
          </Link>
          <LastUpdated date="Jan 2026" />
        </div>
      </section>
    </div>
  );
}
