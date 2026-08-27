import React from 'react';
import { SectionLabel, SectionTitle } from './DeepDive';
import { useLanguage } from '../context/LanguageContext';

export function Characters() {
  const { t } = useLanguage();
  
  const charData = (typeof t('charactersData') === 'object' ? t('charactersData') : []) as any[];
  
  const baseRoster = [
    {
      id: 'taffy',
      image: 'https://www.anantagame.com/pc/gw/20250904162009/assets/role-tafei_0ed12004.jpg',
      gradientTo: '#1a0a1f',
      typeClass: 'text-ananta-gold border-ananta-gold bg-ananta-gold/10',
    },
    {
      id: 'richie',
      image: 'https://www.anantagame.com/pc/gw/20250904162009/assets/role-lixi_a69544ea.jpg',
      gradientTo: '#0a1a10',
      typeClass: 'text-[#4ade80] border-[#4ade80] bg-[#4ade80]/10',
    },
    {
      id: 'lykaia',
      image: 'https://www.anantagame.com/pc/gw/20250904162009/assets/role-saimo_d1a180a7.jpg',
      gradientTo: '#1a0f0a',
      typeClass: 'text-ananta-neon2 border-ananta-neon2 bg-ananta-neon2/10',
    },
    {
      id: 'captain',
      image: 'https://www.anantagame.com/pc/gw/20250904162009/assets/role-captain_c7ae1344.jpg',
      gradientTo: '#10101a',
      typeClass: 'text-ananta-neon border-ananta-neon bg-ananta-neon/10',
    },
    {
      id: 'shiye',
      image: 'https://www.anantagame.com/2026/0824/7afe1c6cbac07efe994f349199c1e226.mp4',
      gradientTo: '#1d1405',
      typeClass: 'text-[#f59e0b] border-[#f59e0b] bg-[#f59e0b]/10',
    },
    {
      id: 'yinglong',
      image: 'https://www.anantagame.com/2026/0822/677882b05d7f33d20b63e64e1bca33c8.mp4',
      gradientTo: '#0c1c24',
      typeClass: 'text-ananta-neon border-ananta-neon bg-ananta-neon/10',
    }
  ];

  const roster = baseRoster.map((base, i) => {
    const cd = charData[i] || {};
    return {
      ...base,
      name: cd.name || 'UNKNOWN',
      role: cd.role || 'Agent',
      type: cd.tags?.[1] || 'Agent',
      desc: cd.desc || 'Classified.',
      tags: cd.tags || []
    };
  });

  return (
    <section id="characters" className="px-[5vw] py-20 bg-ananta-bg2">
      <SectionLabel text={t('sections.charLabel')} />
      <SectionTitle text={t('sections.charTitle')} />
      
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
        {roster.map(char => (
          <a href={`/wiki/characters/${char.id}`} key={char.id} className="group flex flex-col bg-ananta-bg border border-ananta-border overflow-hidden transition-all duration-300 hover:border-ananta-neon/40 hover:-translate-y-1 hover:shadow-[0_8px_32px_rgba(0,229,255,0.1)] focus:outline-none focus:border-ananta-neon">
            <div className="w-full aspect-[3/4] bg-ananta-bg3 relative overflow-hidden flex items-end justify-center char-portrait-bg" style={{ '--tw-gradient-to': char.gradientTo } as React.CSSProperties}>
              {char.image.endsWith('.mp4') ? (
                <video
                  src={char.image}
                  autoPlay
                  loop
                  muted
                  playsInline
                  className="absolute inset-0 w-full h-full object-cover opacity-80 group-hover:opacity-100 transition-opacity duration-300"
                />
              ) : (
                <img
                  src={char.image}
                  alt={char.name}
                  referrerPolicy="no-referrer"
                  onError={(e) => {
                    e.currentTarget.src = 'https://images.unsplash.com/photo-1578632767115-351597cf2477?q=80&w=600&auto=format&fit=crop';
                  }}
                  className="absolute inset-0 w-full h-full object-cover opacity-80 group-hover:opacity-100 transition-opacity duration-300"
                />
              )}
              <div className="char-gradient absolute inset-0" />
              
              <span className={`absolute top-3 right-3 font-mono text-[0.55rem] tracking-[0.15em] uppercase px-2 py-0.5 border ${char.typeClass}`}>
                {char.type}
              </span>
            </div>
            
            <div className="p-4 flex flex-col flex-1">
              <h3 className="font-display text-[1.3rem] tracking-[0.08em] text-white mb-1 group-hover:text-ananta-neon transition-colors">{char.name}</h3>
              <div className="text-[0.72rem] text-ananta-muted font-semibold tracking-[0.1em] uppercase mb-2.5">{char.role}</div>
              <p className="text-[0.78rem] text-ananta-muted leading-[1.6] line-clamp-4">{char.desc}</p>
              
              <div className="flex flex-wrap gap-1 mt-3 mb-4">
                {char.tags.map(tag => (
                  <span key={tag} className="font-mono text-[0.58rem] tracking-[0.1em] px-1.5 py-0.5 bg-ananta-neon/[0.08] border border-ananta-neon/15 text-ananta-neon uppercase">
                    {tag}
                  </span>
                ))}
              </div>
              
              <div className="mt-auto pt-3 border-t border-ananta-border border-dashed font-mono text-[0.6rem] tracking-[0.1em] text-ananta-muted uppercase group-hover:text-ananta-neon group-hover:glow-neon transition-all flex items-center justify-between">
                <span>{t('sections.viewLore')}</span>
                <span>→</span>
              </div>
            </div>
          </a>
        ))}
      </div>
    </section>
  );
}
