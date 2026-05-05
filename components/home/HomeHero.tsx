'use client';

import Link from 'next/link';
import { ArrowUpRight, Sparkles } from 'lucide-react';
import { HyperText } from '@/components/ui/HyperText';
import { ResumeButton } from '@/components/ResumeButton';

const HERO_MARQUEE_TAGS = [
  'Systems Architecture',
  'AI Automation',
  'Fractional CMO',
  'Fractional CTO',
  'Contractor SaaS',
  'Marketing Infrastructure',
];

export default function HomeHero() {
  return (
    <section
      id="hero"
      className="min-h-[90vh] flex flex-col justify-start px-4 md:px-6 pt-8 md:pt-20 pb-0 relative overflow-hidden"
    >
      <div className="max-w-7xl mx-auto w-full relative">
        <p className="text-center text-sm text-gray-400 uppercase tracking-wider mb-4">
          Entrepreneur · Systems Architect · Fractional CMO/CTO
        </p>
        <div className="text-center mb-2 md:mb-4 animate-fade-in flex justify-center">
          <HyperText
            text="Sean Richard"
            className="text-4xl sm:text-5xl md:text-7xl lg:text-8xl font-black tracking-tighter text-white"
            duration={1200}
            animateOnLoad={false}
          />
        </div>

        <div className="relative min-h-[520px] sm:min-h-[560px] md:min-h-[540px] lg:min-h-[620px]">
          {/* Mobile Layout */}
          <div className="md:hidden flex flex-col items-center relative z-10">
            <h2 className="text-2xl sm:text-3xl font-bold mb-4 text-center px-2 leading-tight">
              I build revenue, technology, and automation systems for operators who need
              execution — not theory.
            </h2>

            <p className="text-base text-gray-300 leading-relaxed text-center px-4 mb-6 max-w-md">
              I help contractors, service businesses, and growth-stage companies design the
              systems behind scale.
            </p>

            <div className="flex flex-col items-center gap-3 mb-2">
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 px-6 py-3 bg-accent text-white font-semibold hover:bg-accent-dark transition-colors"
              >
                Work With Sean
                <ArrowUpRight size={18} />
              </Link>
              <Link
                href="/portfolio"
                className="text-sm text-gray-300 hover:text-accent underline underline-offset-4 transition-colors"
              >
                View Portfolio →
              </Link>
              <ResumeButton variant="subtle" location="home_hero" />
            </div>
          </div>

          {/* Desktop Layout */}
          <div className="hidden md:flex flex-row justify-between items-start gap-12 relative z-10">
            <div className="md:w-3/5 text-left">
              <h2 className="text-3xl lg:text-5xl font-bold mb-6 leading-tight">
                I build revenue, technology, and automation systems for operators who need
                execution — not theory.
              </h2>
              <p className="text-lg text-gray-300 leading-relaxed max-w-xl mb-4">
                I help contractors, service businesses, and growth-stage companies design the
                systems behind scale: AI automation, marketing infrastructure, CRM
                architecture, operational workflows, software platforms, and executive-level
                technology strategy.
              </p>
              <p className="text-sm text-gray-500 leading-relaxed max-w-xl">
                I don&apos;t just advise from the outside — I build, test, deploy, and refine
                systems inside live businesses.
              </p>
              <div className="mt-8 flex flex-wrap items-center gap-4">
                <Link
                  href="/contact"
                  className="inline-flex items-center gap-2 px-6 py-3 bg-accent text-white font-semibold hover:bg-accent-dark transition-colors"
                >
                  Work With Sean
                  <ArrowUpRight size={18} />
                </Link>
                <Link
                  href="/portfolio"
                  className="inline-flex items-center gap-2 px-6 py-3 border border-white/20 text-white font-semibold hover:border-accent hover:text-accent transition-colors"
                >
                  View Portfolio
                </Link>
                <ResumeButton variant="subtle" location="home_hero" />
              </div>
            </div>

            <div className="md:w-2/5 flex justify-center items-start">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="/assets/headshots/sean-richard.png"
                alt="Sean Richard - Professional Headshot"
                className="w-full max-w-[380px] lg:max-w-[440px] h-auto"
                width={550}
                height={700}
                loading="eager"
                fetchPriority="high"
              />
            </div>
          </div>

          {/* Mobile headshot — below content, not layered */}
          <div className="md:hidden mt-4 flex justify-center pointer-events-none">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/assets/headshots/sean-richard.png"
              alt="Sean Richard - Professional Headshot"
              className="w-[240px] sm:w-[280px] h-auto opacity-95"
              width={550}
              height={700}
              loading="eager"
              fetchPriority="high"
            />
          </div>

          {/* Single Marquee — softer rotation, single strip */}
          <div className="absolute bottom-0 left-0 right-0">
            <div className="bg-accent transform -rotate-1 py-4 md:py-5 overflow-hidden relative z-30 -mx-16 md:-mx-20 shadow-lg shadow-accent/20">
              <div className="flex whitespace-nowrap animate-marquee">
                {[...HERO_MARQUEE_TAGS, ...HERO_MARQUEE_TAGS, ...HERO_MARQUEE_TAGS].map(
                  (tag, index) => (
                    <span
                      key={index}
                      className="inline-flex items-center text-lg sm:text-xl md:text-2xl font-bold text-white mx-6 md:mx-8"
                    >
                      <Sparkles className="w-4 h-4 md:w-5 md:h-5 mr-3 text-white/80" />
                      {tag}
                    </span>
                  ),
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
