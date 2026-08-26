import React, { useEffect, useState } from 'react';
import { useLanguage } from '../context/LanguageContext';

export function Hero() {
  const [timeLeft, setTimeLeft] = useState({ d: '00', h: '00', m: '00', s: '00' });
  const { t } = useLanguage();

  useEffect(() => {
    const target = new Date('2027-01-15T00:00:00Z').getTime();
    
    const interval = setInterval(() => {
      const now = new Date().getTime();
      const diff = target - now;
      
      if (diff <= 0) {
        setTimeLeft({ d: '00', h: '00', m: '00', s: '00' });
        clearInterval(interval);
        return;
      }
      
      const d = Math.floor(diff / (1000 * 60 * 60 * 24));
      const h = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      const m = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
      const s = Math.floor((diff % (1000 * 60)) / 1000);
      
      setTimeLeft({
        d: String(d).padStart(2, '0'),
        h: String(h).padStart(2, '0'),
        m: String(m).padStart(2, '0'),
        s: String(s).padStart(2, '0')
      });
    }, 1000);
    
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="min-h-screen relative flex flex-col items-center justify-center text-center px-[5vw] pt-[100px] pb-[60px] overflow-hidden bg-hero-grid bg-hero-glow">
      <div className="relative z-10 flex flex-col items-center">
        
        <div className="inline-flex items-center gap-2 font-mono text-[0.7rem] tracking-[0.2em] uppercase text-ananta-neon border border-ananta-border px-4 py-1.5 mb-8 animate-pulse-border">
          <span className="hero-badge-dot" /> {t('hero.badge')}
        </div>
        
        <h1 className="font-display text-[clamp(4rem,10vw,9rem)] tracking-[0.08em] leading-[0.9] mb-4 text-white glow-neon drop-shadow-[0_0_40px_rgba(0,229,255,0.4)] select-none flex flex-col items-center">
          <span className="glitch-hover-effect" data-text={t('hero.t1')}>
            {t('hero.t1')}
          </span>
          <span className="glitch-hover-effect text-ananta-neon" data-text={t('hero.t2')}>
            {t('hero.t2')}
          </span>
          <span className="glitch-hover-effect text-ananta-neon2 glow-neon2 drop-shadow-none" data-text={t('hero.t3')}>
            {t('hero.t3')}
          </span>
        </h1>
        
        <p className="font-display text-[clamp(1rem,2.5vw,1.8rem)] tracking-[0.3em] text-ananta-muted mb-6">
          {t('hero.sub')}
        </p>
        
        <p className="max-w-[560px] mx-auto text-[0.95rem] font-normal text-ananta-muted leading-[1.7] mb-10">
          {t('hero.desc')}
        </p>

        {/* Countdown */}
        <div className="bg-ananta-neon/[0.05] border border-ananta-border px-6 sm:px-10 py-5 mx-auto mb-10 inline-flex gap-4 sm:gap-8 items-center backdrop-blur-sm">
          {Object.entries(timeLeft).map(([unit, value], idx) => (
            <React.Fragment key={unit}>
              <div className="flex flex-col">
                <span className="font-mono text-[0.6rem] tracking-[0.2em] uppercase text-ananta-muted mb-1 block">
                  {unit === 'd' ? t('hero.days') : unit === 'h' ? t('hero.hours') : unit === 'm' ? t('hero.mins') : t('hero.secs')}
                </span>
                <span className="font-display text-[2.4rem] tracking-[0.06em] text-ananta-neon glow-neon block leading-none">
                  {value}
                </span>
              </div>
              {idx < 3 && <div className="font-display text-[2rem] text-ananta-border mt-2">:</div>}
            </React.Fragment>
          ))}
        </div>
        
        <p className="font-mono text-[0.6rem] tracking-[0.15em] text-ananta-muted mb-8 uppercase">{t('hero.launch')}</p>

        {/* CTA */}
        <div className="flex flex-wrap justify-center gap-4">
          <a href="#know" className="font-sans text-[0.78rem] font-bold tracking-[0.15em] uppercase px-8 py-[14px] bg-ananta-neon text-ananta-bg transition-all duration-200 hover:bg-white hover:box-glow-neon hover:-translate-y-0.5 btn-clip outline-none">
            {t('hero.explore')}
          </a>
          <a href="https://www.anantagame.com" target="_blank" rel="noreferrer" className="font-sans text-[0.78rem] font-bold tracking-[0.15em] uppercase px-8 py-[13px] bg-transparent text-ananta-neon2 border border-ananta-neon2 transition-all duration-200 hover:bg-ananta-neon2 hover:text-white hover:box-glow-neon2 btn-clip outline-none">
            {t('hero.prereg')}
          </a>
        </div>

      </div>
    </section>
  );
}
