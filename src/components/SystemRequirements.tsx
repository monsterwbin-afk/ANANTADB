import React, { useState } from 'react';
import { SectionLabel, SectionTitle } from './DeepDive';
import { useLanguage } from '../context/LanguageContext';

export function SystemRequirements() {
  const [activeTab, setActiveTab] = useState<'pc' | 'mobile'>('pc');
  const { t } = useLanguage();

  return (
    <section id="specs" className="px-[5vw] py-20 bg-ananta-bg2 border-t border-ananta-border">
      <SectionLabel text={t('sections.specsLabel')} />
      <SectionTitle text={t('sections.specsTitle')} />
      
      <div className="max-w-4xl mx-auto border border-ananta-border bg-ananta-bg">
        <div className="flex border-b border-ananta-border bg-ananta-bg2">
          <button 
            onClick={() => setActiveTab('pc')}
            className={`flex-1 py-4 font-display text-[1.1rem] tracking-[0.1em] transition-colors outline-none ${activeTab === 'pc' ? 'text-ananta-neon bg-ananta-neon/[0.05] border-b-2 border-ananta-neon glow-neon' : 'text-ananta-muted hover:text-white'}`}
          >
            {t('sections.pc')}
          </button>
          <button 
            onClick={() => setActiveTab('mobile')}
            className={`flex-1 py-4 font-display text-[1.1rem] tracking-[0.1em] transition-colors outline-none ${activeTab === 'mobile' ? 'text-ananta-neon bg-ananta-neon/[0.05] border-b-2 border-ananta-neon glow-neon' : 'text-ananta-muted hover:text-white'}`}
          >
           {t('sections.mobile')}
          </button>
        </div>

        <div className="p-6 md:p-10 pb-12">
          {activeTab === 'pc' ? (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
              <div>
                <h4 className="font-mono text-[0.65rem] tracking-[0.2em] text-ananta-muted uppercase mb-4 pb-2 border-b border-ananta-border">{t('specsData.pcMin.title')}</h4>
                <ul className="space-y-4 text-[0.82rem] text-ananta-text">
                  <li><strong className="text-white block font-mono text-[0.6rem] uppercase tracking-wider text-ananta-muted mb-0.5">OS</strong> {t('specsData.pcMin.os')}</li>
                  <li><strong className="text-white block font-mono text-[0.6rem] uppercase tracking-wider text-ananta-muted mb-0.5">CPU</strong> {t('specsData.pcMin.cpu')}</li>
                  <li><strong className="text-white block font-mono text-[0.6rem] uppercase tracking-wider text-ananta-muted mb-0.5">GPU</strong> {t('specsData.pcMin.gpu')}</li>
                  <li><strong className="text-white block font-mono text-[0.6rem] uppercase tracking-wider text-ananta-muted mb-0.5">Memory</strong> {t('specsData.pcMin.ram')}</li>
                  <li><strong className="text-white block font-mono text-[0.6rem] uppercase tracking-wider text-ananta-muted mb-0.5">Storage</strong> {t('specsData.pcMin.storage')}</li>
                </ul>
              </div>
              <div>
                <h4 className="font-mono text-[0.65rem] tracking-[0.2em] text-ananta-neon glow-neon uppercase mb-4 pb-2 border-b border-ananta-neon/30">{t('specsData.pcRec.title')}</h4>
                <ul className="space-y-4 text-[0.82rem] text-ananta-text">
                  <li><strong className="text-white block font-mono text-[0.6rem] uppercase tracking-wider text-ananta-neon/70 mb-0.5">OS</strong> {t('specsData.pcRec.os')}</li>
                  <li><strong className="text-white block font-mono text-[0.6rem] uppercase tracking-wider text-ananta-neon/70 mb-0.5">CPU</strong> {t('specsData.pcRec.cpu')}</li>
                  <li><strong className="text-white block font-mono text-[0.6rem] uppercase tracking-wider text-ananta-neon/70 mb-0.5">GPU</strong> {t('specsData.pcRec.gpu')}</li>
                  <li><strong className="text-white block font-mono text-[0.6rem] uppercase tracking-wider text-ananta-neon/70 mb-0.5">Memory</strong> {t('specsData.pcRec.ram')}</li>
                  <li><strong className="text-white block font-mono text-[0.6rem] uppercase tracking-wider text-ananta-neon/70 mb-0.5">Storage</strong> {t('specsData.pcRec.storage')}</li>
                </ul>
              </div>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
              <div>
                <h4 className="font-mono text-[0.65rem] tracking-[0.2em] text-ananta-muted uppercase mb-4 pb-2 border-b border-ananta-border">{t('specsData.ios.title')}</h4>
                <ul className="space-y-4 text-[0.82rem] text-ananta-text">
                  <li><strong className="text-white block font-mono text-[0.6rem] uppercase tracking-wider text-ananta-muted mb-0.5">CPU</strong> {t('specsData.ios.cpu')}</li>
                  <li><strong className="text-white block font-mono text-[0.6rem] uppercase tracking-wider text-ananta-muted mb-0.5">OS</strong> {t('specsData.ios.os')}</li>
                  <li><strong className="text-white block font-mono text-[0.6rem] uppercase tracking-wider text-ananta-muted mb-0.5">Storage</strong> {t('specsData.ios.storage')}</li>
                  <li><strong className="text-white block font-mono text-[0.6rem] uppercase tracking-wider text-ananta-neon/70 mb-0.5">Recommended</strong> {t('specsData.ios.rec')}</li>
                </ul>
              </div>
              <div>
                <h4 className="font-mono text-[0.65rem] tracking-[0.2em] text-[#4ade80] uppercase mb-4 pb-2 border-b border-[#4ade80]/30">{t('specsData.android.title')}</h4>
                <ul className="space-y-4 text-[0.82rem] text-ananta-text">
                  <li><strong className="text-white block font-mono text-[0.6rem] uppercase tracking-wider text-[#4ade80]/70 mb-0.5">CPU</strong> {t('specsData.android.cpu')}</li>
                  <li><strong className="text-white block font-mono text-[0.6rem] uppercase tracking-wider text-[#4ade80]/70 mb-0.5">Memory</strong> {t('specsData.android.ram')}</li>
                  <li><strong className="text-white block font-mono text-[0.6rem] uppercase tracking-wider text-[#4ade80]/70 mb-0.5">OS</strong> {t('specsData.android.os')}</li>
                  <li><strong className="text-white block font-mono text-[0.6rem] uppercase tracking-wider text-[#4ade80]/70 mb-0.5">Storage</strong> {t('specsData.android.storage')}</li>
                </ul>
              </div>
            </div>
          )}
        </div>
      </div>
      <p className="mt-4 font-mono text-[0.62rem] tracking-[0.12em] text-ananta-muted uppercase max-w-4xl mx-auto text-center">
        {t('specsData.note')}
      </p>
    </section>
  );
}
