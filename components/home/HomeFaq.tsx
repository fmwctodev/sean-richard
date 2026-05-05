'use client';

import { ChevronDown } from 'lucide-react';
import { useState } from 'react';
import Section from '@/components/editorial/Section';
import { FAQS } from '@/content/faqs';

export default function HomeFaq() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  return (
    <Section
      id="faq"
      number="05"
      eyebrow="Common Questions"
      title="Frequently {{em}}asked{{/em}}."
    >
      <div className="max-w-[60ch]">
        {FAQS.map((faq, index) => (
          <div key={index} className="border-t border-line last:border-b">
            <button
              onClick={() => setOpenFaq(openFaq === index ? null : index)}
              className="w-full py-6 flex items-center justify-between text-left gap-6 group"
              aria-expanded={openFaq === index}
            >
              <span className="font-serif text-[20px] md:text-[22px] text-ink-primary group-hover:text-accent transition-colors">
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
              <p className="text-ink-secondary leading-[1.55] text-[16px]">
                {faq.answer}
              </p>
            </div>
          </div>
        ))}
      </div>
    </Section>
  );
}
