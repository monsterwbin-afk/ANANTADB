import React, { useState } from 'react';
import { SectionLabel, SectionTitle } from './DeepDive';
import { ChevronDown } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

export function FAQSection() {
  const { t } = useLanguage();
  const faqs = (typeof t('faqData') === 'object' ? t('faqData') : []) as any[];

  return (
    <section className="px-[5vw] py-20 bg-ananta-bg border-t border-ananta-border">
      <SectionLabel text={t('sections.faqLabel')} />
      <SectionTitle text={t('sections.faqTitle')} />
      
      <div className="max-w-3xl mx-auto flex flex-col gap-4">
        {faqs.map((faq, i) => (
          <FAQItem key={i} question={faq.q} answer={faq.a} isOpen={false} />
        ))}
      </div>
    </section>
  );
}

const FAQItem: React.FC<{ question: string; answer: string; isOpen?: boolean }> = ({ question, answer }) => {
  const [open, setOpen] = useState(false);

  return (
    <div 
      className={`border transition-colors duration-200 ${open ? 'bg-ananta-bg2 border-ananta-neon/30' : 'bg-ananta-bg border-ananta-border hover:border-ananta-neon/20'}`}
    >
      <button 
        onClick={() => setOpen(!open)}
        className="w-full text-left px-6 py-5 flex items-center justify-between outline-none"
      >
        <span className="font-display text-[1.1rem] tracking-[0.05em] text-white">{question}</span>
        <ChevronDown className={`w-5 h-5 text-ananta-neon transition-transform duration-300 ${open ? 'rotate-180' : ''}`} />
      </button>
      <div 
        className={`overflow-hidden transition-all duration-300 ease-in-out ${open ? 'max-h-40 opacity-100' : 'max-h-0 opacity-0'}`}
      >
        <div className="px-6 pb-6 text-[0.85rem] text-ananta-muted leading-[1.7]">
          {answer}
        </div>
      </div>
    </div>
  );
}
