import React from 'react';
import { Radio, Users, Map, Gift, Scale, Calendar, Sliders } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

export function QuickNav() {
  const { lang, t } = useLanguage();

  const toolkitLabel = lang === 'CN' ? '探员工具箱' : lang === 'TW' ? '探員工具箱' : lang === 'JP' ? '便利ツール' : lang === 'KR' ? '대원 도구함' : 'Agent Toolkit';
  
  const items = [
    { icon: Radio, label: t('quicknav.news'), href: '#news' },
    { icon: Users, label: t('quicknav.chars'), href: '#characters' },
    { icon: Sliders, label: toolkitLabel, href: '#toolkit' },
    { icon: Map, label: t('quicknav.map'), href: '#map' },
    { icon: Scale, label: t('quicknav.specs'), href: '#specs' },
    { icon: Gift, label: t('quicknav.codes'), href: '#codes' },
    { icon: Calendar, label: t('quicknav.tracker'), href: '#tracker' },
  ];

  return (
    <section className="bg-ananta-bg2 border-y border-ananta-border">
      <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-7 gap-[1px] bg-ananta-border border border-ananta-border">
        {items.map((item, idx) => (
          <a 
            key={idx} 
            href={item.href} 
            className={`group bg-ananta-bg2 px-4 py-6 text-center flex flex-col items-center justify-center gap-2.5 transition-colors duration-200 hover:bg-ananta-neon/[0.06] ${idx === 6 ? 'col-span-2 md:col-span-1' : ''}`}
          >
            <item.icon className="w-8 h-8 text-ananta-text transition-all duration-200 group-hover:text-ananta-neon group-hover:glow-neon" strokeWidth={1.5} />
            <span className="text-[0.7rem] font-bold tracking-[0.12em] uppercase text-ananta-muted">
              {item.label}
            </span>
          </a>
        ))}
      </div>
    </section>
  );
}
