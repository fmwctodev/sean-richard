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
      className="min-h-screen flex flex-col justify-start px-4 md:px-6 pt-8 md:pt-20 pb-0 relative overflow-hidden"
    >
      <div className="max-w-7xl mx-auto w-full relative">
        <p className="text-center text-sm text-gray-400 uppercase tracking-wider mb-4">
          Entrepreneur · Systems Architect · Fractional CMO/CTO
        </p>
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
            <h2 className="text-2xl sm:text-3xl font-bold animate-slide-up mb-4 text-center px-4">
              I build revenue, technology, and automation systems for operators who need
              execution — not theory.
            </h2>

            <p className="text-base text-gray-400 leading-relaxed animate-slide-up text-center px-4 mb-6 max-w-md">
              I help contractors, service businesses, and growth-stage companies design the
              systems behind scale: AI automation, marketing infrastructure, CRM
              architecture, operational workflows, software platforms, and executive-level
              technology strategy.
            </p>

            <div className="flex flex-col items-center gap-3 mb-2">
              <Link
                href="/contact"
                className="relative z-30 group cursor-pointer animate-scale-in"
              >
                <div className="w-28 h-28 rounded-full border-2 border-white/20 flex items-center justify-center hover:border-accent transition-all duration-300">
                  <div className="text-center">
                    <div className="text-xs font-semibold mb-1">Work With</div>
                    <ArrowUpRight className="w-4 h-4 mx-auto mb-1" />
                    <div className="text-xs font-semibold">Sean</div>
                  </div>
                </div>
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
          <div className="hidden md:flex flex-row justify-between items-start gap-8 relative z-10">
            <div className="md:w-3/5 text-left">
              <h2 className="text-4xl lg:text-5xl font-bold animate-slide-up mb-6 leading-tight">
                I build revenue, technology, and automation systems for operators who need
                execution — not theory.
              </h2>
              <p className="text-lg text-gray-400 leading-relaxed animate-slide-up max-w-xl mb-4">
                I help contractors, service businesses, and growth-stage companies design the
                systems behind scale: AI automation, marketing infrastructure, CRM
                architecture, operational workflows, software platforms, and executive-level
                technology strategy.
              </p>
              <p className="text-sm text-gray-500 leading-relaxed animate-slide-up max-w-xl">
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

            <div className="md:w-2/5 flex justify-end">
              <Link href="/contact" className="relative group cursor-pointer animate-scale-in">
                <div className="w-36 h-36 rounded-full border-2 border-white/20 flex items-center justify-center hover:border-accent transition-all duration-300 hover:rotate-12">
                  <div className="text-center">
                    <div className="text-sm font-semibold mb-1">Work With</div>
                    <ArrowUpRight className="w-5 h-5 mx-auto mb-1" />
                    <div className="text-sm font-semibold">Sean</div>
                  </div>
                </div>
              </Link>
            </div>
          </div>

          {/* Centered Headshot */}
          <div className="absolute inset-x-0 top-[420px] md:top-[180px] z-20 animate-scale-in pointer-events-none flex justify-center">
            <div className="w-[260px] sm:w-[300px] md:w-[380px] lg:w-[450px] opacity-95">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="/assets/headshots/sean-richard.png"
                alt="Sean Richard - Professional Headshot"
                className="w-full h-auto"
                width={550}
                height={700}
                loading="eager"
                fetchPriority="high"
              />
            </div>
          </div>

          {/* Marquee Banners */}
          <div className="absolute bottom-[-80px] md:bottom-0 left-0 right-0">
            <div className="bg-red-600 transform -rotate-3 py-4 md:py-5 overflow-hidden relative z-10 -mx-16 md:-mx-20">
              <div className="flex whitespace-nowrap animate-marquee">
                {[...HERO_MARQUEE_TAGS, ...HERO_MARQUEE_TAGS, ...HERO_MARQUEE_TAGS].map(
                  (tag, index) => (
                    <span
                      key={index}
                      className="inline-flex items-center text-xl sm:text-2xl md:text-2xl lg:text-3xl font-bold text-white mx-6 md:mx-8"
                    >
                      <Sparkles className="w-5 h-5 md:w-6 md:h-6 mr-3 md:mr-4 text-yellow-300" />
                      {tag}
                    </span>
                  ),
                )}
              </div>
            </div>

            <div className="bg-red-600 transform rotate-3 py-4 md:py-5 overflow-hidden -mt-1 md:-mt-2 relative z-30 -mx-16 md:-mx-20">
              <div className="flex whitespace-nowrap animate-marquee-reverse">
                {[...HERO_MARQUEE_TAGS, ...HERO_MARQUEE_TAGS, ...HERO_MARQUEE_TAGS].map(
                  (tag, index) => (
                    <span
                      key={index}
                      className="inline-flex items-center text-xl sm:text-2xl md:text-2xl lg:text-3xl font-bold text-white mx-6 md:mx-8"
                    >
                      <Sparkles className="w-5 h-5 md:w-6 md:h-6 mr-3 md:mr-4 text-yellow-300" />
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
