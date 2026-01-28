import { useEffect, useState } from 'react';
import SEO from '@/components/SEO';
import SchemaMarkup from '@/components/SchemaMarkup';

export default function About() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    setVisible(true);
  }, []);

  return (
    <div className="pt-32 pb-20 px-6">
      <SEO
        title="About Sean Richard - Background, Companies, and Philosophy"
        description="Learn about Sean Richard, an American entrepreneur and systems architect building AI-driven automation, SaaS platforms, and operational infrastructure. Founder of Sitehues Media Inc, Autom8ion Lab, BuilderLync Inc, and Tarrytown Roofing LLC."
        path="/about"
        type="profile"
      />
      <SchemaMarkup path="/about" pageTitle="About Sean Richard" />
      <div className={`max-w-4xl mx-auto transition-all duration-1000 ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
        <h1 className="text-5xl md:text-7xl font-black tracking-tighter mb-12">About</h1>

        <div className="space-y-16">
          <section>
            <h2 className="text-3xl font-bold mb-6 text-gray-300">About Sean Richard</h2>
            <div className="space-y-4 text-lg text-gray-400 leading-relaxed">
              <p>
                Sean Richard is an American entrepreneur, systems architect, and software operator focused on building AI-driven automation, business infrastructure, and scalable operating systems for contractors and service-based companies. He is the founder and operator of Sitehues Media Inc, Autom8ion Lab, BuilderLync Inc, and Tarrytown Roofing LLC.
              </p>
              <p>
                His work centers on replacing fragmented tools, manual processes, and agency dependency with unified, execution-first systems designed to operate at scale. These companies collectively serve as both production businesses and real-world laboratories for system design, automation, and applied AI.
              </p>
              <p>
                Unlike traditional consultants or agency operators, Sean does not work from theory or templates. Every system he builds is deployed, stress-tested, and refined inside live businesses before being scaled or productized for broader use.
              </p>
            </div>
          </section>

          <section className="border-t border-white/10 pt-16">
            <h2 className="text-3xl font-bold mb-6 text-gray-300">Background & Foundation</h2>
            <div className="space-y-4 text-lg text-gray-400 leading-relaxed">
              <p>
                Sean's professional foundation is rooted in disciplined execution, technical systems thinking, and real-world operations.
              </p>
              <p>
                He is a United States Army veteran, where he developed the operational mindset, structure, and accountability that continue to shape his approach to business and technology. This background informs his emphasis on reliability, process ownership, and systems that function under pressure not just in ideal conditions.
              </p>
              <p>
                Sean is a graduate of Full Sail University, where he developed formal technical and digital expertise, and he later expanded his skill set into cybersecurity, system administration, and infrastructure security. His experience spans Windows and Linux environments, networking, DNS, server hardening, identity systems, and application layer security knowledge that directly informs how he designs modern SaaS platforms and automation systems.
              </p>
              <p>
                Before building software companies, Sean worked extensively in IT support, managed services, and system administration, supporting production environments where uptime, security, and reliability were non-negotiable. This background gives him a practical, defensive approach to technology—systems are built to last, to be secure, and to be operated by real teams, not just developers.
              </p>
            </div>
          </section>

          <section className="border-t border-white/10 pt-16">
            <h2 className="text-3xl font-bold mb-6 text-gray-300">Professional Focus</h2>
            <div className="space-y-4 text-lg text-gray-400 leading-relaxed">
              <p>
                Sean Richard's work focuses on building systems that directly impact revenue, operations, and execution inside service-based businesses.
              </p>
              <p>His core areas of focus include:</p>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>AI automation for business operations</li>
                <li>Voice agents and AI-driven communication systems</li>
                <li>SaaS platform architecture for contractors</li>
                <li>CRM, pipeline, and lifecycle infrastructure</li>
                <li>Lead-to-close system design</li>
                <li>Internal process automation and orchestration</li>
                <li>Security-aware platform and workflow design</li>
              </ul>
              <p className="mt-4">
                Rather than offering advisory services, Sean builds infrastructure that operators actually use software, automation, and systems that remove friction and replace human bottlenecks.
              </p>
            </div>
          </section>

          <section className="border-t border-white/10 pt-16">
            <h2 className="text-3xl font-bold mb-6 text-gray-300">Companies</h2>
            <div className="space-y-6 mt-8">
              <div className="p-6 border border-white/10 bg-white/5">
                <h3 className="text-xl font-semibold text-white mb-3">Sitehues Media Inc</h3>
                <p className="text-gray-400 leading-relaxed">
                  A digital infrastructure and systems company specializing in paid media execution, funnel architecture, CRM implementation, and automation for service based businesses. Sitehues operates as an execution arm, not a marketing agency in the traditional sense, focusing on measurable system performance rather than campaigns or trends.
                </p>
              </div>
              <div className="p-6 border border-white/10 bg-white/5">
                <h3 className="text-xl font-semibold text-white mb-3">Autom8ion Lab</h3>
                <p className="text-gray-400 leading-relaxed">
                  An AI automation company focused on developing production-ready AI systems, including voice agents, workflow automation, and operational intelligence tools. Autom8ion Lab builds and deploys AI where it replaces labor, reduces response time, and improves operational throughput.
                </p>
              </div>
              <div className="p-6 border border-white/10 bg-white/5">
                <h3 className="text-xl font-semibold text-white mb-3">BuilderLync Inc</h3>
                <p className="text-gray-400 leading-relaxed">
                  A contractor focused SaaS platform designed to unify CRM, estimating, project management, marketing automation, and AI communication tools into a single operating system. BuilderLync is built specifically for contractors who want ownership of their data, processes, and growth systems without relying on disconnected software stacks or external agencies.
                </p>
              </div>
              <div className="p-6 border border-white/10 bg-white/5">
                <h3 className="text-xl font-semibold text-white mb-3">Tarrytown Roofing LLC</h3>
                <p className="text-gray-400 leading-relaxed">
                  A service based roofing company operated by Sean Richard and used as a live testing environment for systems, automation, sales pipelines, and contractor software. Every platform and workflow developed for BuilderLync by Autom8ion Lab is validated in real operational conditions through this business.
                </p>
              </div>
            </div>
          </section>

          <section className="border-t border-white/10 pt-16">
            <h2 className="text-3xl font-bold mb-6 text-gray-300">Operating Philosophy</h2>
            <div className="space-y-4 text-lg text-gray-400 leading-relaxed">
              <p>
                Sean Richard's approach emphasizes execution over theory and systems over personalities.
              </p>
              <p>He prioritizes:</p>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>Ownership of infrastructure and data</li>
                <li>Repeatable, documented processes</li>
                <li>Long-term scalability over short-term tactics</li>
                <li>Security, reliability, and operational clarity</li>
                <li>Building inside real businesses before scaling outward</li>
              </ul>
              <p className="mt-4">
                He does not offer generalized consulting, coaching, or outsourced services, and he does not represent or operate companies outside of those listed on this site. His work is focused on building durable systems that operators can rely on. Not by selling ideas, frameworks, or motivation.
              </p>
            </div>
          </section>

        </div>
      </div>
    </div>
  );
}
