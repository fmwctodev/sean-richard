'use client';

import { ChevronDown } from 'lucide-react';
import { useState } from 'react';
import { FAQS } from '@/content/faqs';

export default function HomeFaq() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  return (
    <section id="faq" className="py-32 px-6">
      <div className="max-w-4xl mx-auto">
        <div className="mb-16">
          <p className="text-sm text-gray-500 uppercase tracking-wider mb-4">
            ( Common Questions )
          </p>
          <h2 className="text-4xl md:text-6xl font-bold">Frequently Asked</h2>
        </div>

        <div className="space-y-4">
          {FAQS.map((faq, index) => (
            <div
              key={index}
              className="border border-white/10 hover:border-white/20 transition-colors"
            >
              <button
                onClick={() => setOpenFaq(openFaq === index ? null : index)}
                className="w-full p-6 flex items-center justify-between text-left"
                aria-expanded={openFaq === index}
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
  );
}
