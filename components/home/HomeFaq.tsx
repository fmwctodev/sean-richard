'use client';

import { ChevronDown } from 'lucide-react';
import { useState } from 'react';
import MonoLabel from '@/components/editorial/MonoLabel';
import { FAQS } from '@/content/faqs';

export default function HomeFaq() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  return (
    <section
      id="faq"
      className="border-t border-line px-6 py-[clamp(64px,10vh,120px)]"
    >
      <div className="max-w-[1440px] mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_2fr] gap-10 lg:gap-20">
          <div className="lg:sticky lg:top-32">
            <div className="mb-6">
              <MonoLabel variant="accent" leading="rule">
                Common Questions
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
              Frequently <span className="text-accent">asked</span>.
            </h2>
          </div>

          <div>
            {FAQS.map((faq, index) => (
              <div key={index} className="border-t border-line last:border-b">
                <button
                  onClick={() => setOpenFaq(openFaq === index ? null : index)}
                  className="w-full py-6 flex items-center justify-between text-left gap-6 group"
                  aria-expanded={openFaq === index}
                >
                  <span
                    className="font-sans font-semibold text-ink-primary group-hover:text-accent transition-colors"
                    style={{ fontSize: '18px', lineHeight: 1.3 }}
                  >
                    {faq.question}
                  </span>
                  <ChevronDown
                    className={`w-5 h-5 flex-shrink-0 text-ink-tertiary transition-transform duration-300 ${
                      openFaq === index ? 'rotate-180 text-accent' : ''
                    }`}
                  />
                </button>
                <div
                  className={`overflow-hidden transition-all duration-300 ${
                    openFaq === index ? 'max-h-96 pb-6' : 'max-h-0'
                  }`}
                >
                  <p className="text-ink-secondary leading-[1.6] text-[15px] max-w-[60ch]">
                    {faq.answer}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
