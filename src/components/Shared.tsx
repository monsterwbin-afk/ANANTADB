import React, { useState, useEffect, useRef } from 'react';
import { Globe, ChevronDown, Menu, X } from 'lucide-react';
import { useLanguage, Language } from '../context/LanguageContext';

export function Navbar() {
  const [langOpen, setLangOpen] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [mobileLangOpen, setMobileLangOpen] = useState(false);
  const { lang, setLang, t } = useLanguage();
  const langRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (langRef.current && !langRef.current.contains(event.target as Node)) {
        setLangOpen(false);
      }
    }
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const langs = [
    { code: 'EN', name: 'English' },
    { code: 'CN', name: '中文 (简体)' },
    { code: 'TW', name: '中文 (繁體)' },
    { code: 'JP', name: '日本語' },
    { code: 'KR', name: '한국어' },
    { code: 'DE', name: 'Deutsch' },
    { code: 'FR', name: 'Français' },
    { code: 'IT', name: 'Italiano' },
    { code: 'RU', name: 'Русский' }
  ];

  const menuItems = [
    { label: t('nav.know'), href: '#know' },
    { label: t('nav.news'), href: '#news' },
    { label: t('nav.toolkit'), href: '#toolkit' },
    { label: t('nav.characters'), href: '#characters' },
    { label: t('nav.map'), href: '#map' },
    { label: t('nav.specs'), href: '#specs' },
    { label: t('nav.codes'), href: '#codes' }
  ];

  return (
    <>
      <nav className="fixed top-0 left-0 right-0 z-[900] flex items-center justify-between px-[5vw] h-16 bg-[#080a0f]/85 backdrop-blur-md border-b border-ananta-border">
        <a href="/" className="font-display text-2xl tracking-[0.12em] text-ananta-neon no-underline glow-neon">
          ANANTADB<span className="text-ananta-neon2 glow-neon2">.</span>COM
        </a>
        
        {/* Desktop Navigation */}
        <div className="hidden sm:flex items-center gap-8">
          {menuItems.map(item => (
            <a 
              key={item.href} 
              href={item.href} 
              className="nav-link text-[0.65rem] font-mono tracking-[0.15em] uppercase text-ananta-muted no-underline transition-colors duration-200 hover:text-ananta-neon hover:glow-neon"
            >
              {item.label}
            </a>
          ))}
          
          <div className="relative" ref={langRef}>
            <button 
              onClick={() => setLangOpen(!langOpen)}
              className="flex items-center gap-1.5 text-ananta-muted hover:text-ananta-neon transition-colors duration-200 font-mono text-[0.65rem] uppercase tracking-wider pl-4 border-l border-ananta-border cursor-pointer outline-none"
            >
              <Globe className="w-4 h-4" />
              <span>{lang}</span>
              <ChevronDown className={`w-3 h-3 transition-transform duration-200 ${langOpen ? 'rotate-180' : ''}`} />
            </button>
            
            {langOpen && (
              <div className="absolute top-10 right-0 w-32 bg-[#0a0d14] border border-ananta-border rounded-sm shadow-[0_0_15px_rgba(0,0,0,0.5)] overflow-hidden">
                {langs.map(l => (
                  <button
                    key={l.code}
                    onClick={() => {
                      setLang(l.code as Language);
                      setLangOpen(false);
                    }}
                    className={`w-full text-left px-4 py-2.5 font-mono text-[0.65rem] tracking-wider transition-colors outline-none cursor-pointer ${lang === l.code ? 'text-ananta-neon bg-ananta-neon/[0.05]' : 'text-ananta-muted hover:text-white hover:bg-white/5'}`}
                  >
                    {l.name}
                  </button>
                ))}
              </div>
            )}
          </div>
        </div>

        {/* Mobile Navigation Trigger */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="flex sm:hidden items-center justify-center p-2 text-ananta-muted hover:text-ananta-neon transition-colors cursor-pointer outline-none"
        >
          {mobileMenuOpen ? <X className="w-6 h-6 animate-fade-in" /> : <Menu className="w-6 h-6 animate-fade-in" />}
        </button>
      </nav>

      {/* Mobile Menu Drawer/Modal container */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 top-16 bg-[#080a0f]/95 z-[800] backdrop-blur-lg flex flex-col justify-between p-[6vw] border-t border-ananta-border animate-fade-in">
          <div className="flex flex-col gap-6 py-4">
            {menuItems.map(item => (
              <a
                key={item.href}
                href={item.href}
                onClick={() => setMobileMenuOpen(false)}
                className="text-xl font-display uppercase tracking-wider text-ananta-text hover:text-ananta-neon transition-colors py-2 border-b border-ananta-border/30"
              >
                {item.label}
              </a>
            ))}
          </div>

          <div className="pb-8">
            <button
              onClick={() => setMobileLangOpen(!mobileLangOpen)}
              className="w-full flex items-center justify-between border border-ananta-border px-4 py-3 text-ananta-text hover:text-ananta-neon font-mono text-xs uppercase tracking-wider rounded-sm outline-none cursor-pointer bg-ananta-bg2/40"
            >
              <span className="flex items-center gap-2">
                <Globe className="w-4 h-4 text-ananta-neon" />
                {langs.find(l => l.code === lang)?.name || 'Language'}
              </span>
              <ChevronDown className={`w-3 h-3 transition-transform duration-200 ${mobileLangOpen ? 'rotate-180' : ''}`} />
            </button>

            {mobileLangOpen && (
              <div className="grid grid-cols-2 gap-1 mt-2 p-2 border border-ananta-border rounded-sm bg-[#0a0d14] max-h-48 overflow-y-auto">
                {langs.map(l => (
                  <button
                    key={l.code}
                    onClick={() => {
                      setLang(l.code as Language);
                      setMobileLangOpen(false);
                      setMobileMenuOpen(false);
                    }}
                    className={`text-left p-2.5 font-mono text-[0.65rem] tracking-wider rounded-sm cursor-pointer outline-none ${lang === l.code ? 'text-ananta-neon bg-ananta-neon/[0.05]' : 'text-ananta-muted hover:text-white hover:bg-white/5'}`}
                  >
                    {l.name}
                  </button>
                ))}
              </div>
            )}
          </div>
        </div>
      )}
    </>
  );
}

export function AdSlot() {
  return (
    <div className="bg-ananta-neon/[0.02] border border-dashed border-ananta-neon/10 p-6 text-center font-mono text-[0.6rem] tracking-[0.15em] text-ananta-muted uppercase mx-[5vw]">
      Advertisement
    </div>
  );
}

export function Footer() {
  const { lang, t } = useLanguage();

  const getFooterTexts = () => {
    if (lang === 'CN') {
      return {
        privacy: '隐私政策',
        terms: '免责与条款',
        about: '关于与联系',
        fanMsg: '本站由游戏爱好者自发建立。您的喜爱是我们持续更新优化的动力。'
      };
    }
    if (lang === 'TW') {
      return {
        privacy: '隱私政策',
        terms: '免責與條款',
        about: '關於與聯繫',
        fanMsg: '本站由遊戲愛好者自發建立。您的喜愛是我們持續更新優化的動力。'
      };
    }
    if (lang === 'JP') {
      return {
        privacy: 'プライバシーポリシー',
        terms: '免責事項・利用規約',
        about: '会社概要・お問い合わせ',
        fanMsg: 'ファンによって運営される非公式データベース。皆様の応援が更新を続ける最大の原動力です。'
      };
    }
    if (lang === 'KR') {
      return {
        privacy: '개인정보처리방침',
        terms: '서비스 및 면책조항',
        about: '소개 및 연락처',
        fanMsg: '팬들에 의해 운영되는 비공식 데이터베이스입니다. 여러분의 사랑은 지속적인 업데이트의 원동력입니다.'
      };
    }
    if (lang === 'DE') {
      return {
        privacy: 'Privacy Policy',
        terms: 'Terms & Disclaimer',
        about: 'About & Contact',
        fanMsg: 'Von Fans für Fans gemacht. Ihre Leidenschaft ist unser Antrieb für kontinuierliche Verbesserungen.'
      };
    }
    if (lang === 'FR') {
      return {
        privacy: 'Privacy Policy',
        terms: 'Terms & Disclaimer',
        about: 'About & Contact',
        fanMsg: 'Créé par des fans, pour des fans. Votre passion est le moteur de notre amélioration continue.'
      };
    }
    if (lang === 'IT') {
      return {
        privacy: 'Privacy Policy',
        terms: 'Terms & Disclaimer',
        about: 'About & Contact',
        fanMsg: 'Creato dai fan, per i fan. La tua passione è la nostra forza trainante per continui miglioramenti.'
      };
    }
    if (lang === 'RU') {
      return {
        privacy: 'Privacy Policy',
        terms: 'Terms & Disclaimer',
        about: 'About & Contact',
        fanMsg: 'Создано фанатами для фанатов. Ваша поддержка — главный стимул для наших постоянных обновлений.'
      };
    }
    return {
      privacy: 'Privacy Policy',
      terms: 'Terms & Disclaimer',
      about: 'About & Contact',
      fanMsg: 'Built by fans, for fans. Your passion is the driving force for our continuous optimization.'
    };
  };

  const footerTexts = getFooterTexts();

  return (
    <>
      <footer className="border-t border-ananta-border px-[5vw] py-10 grid grid-cols-1 lg:grid-cols-3 gap-10">
        <div className="flex flex-col mb-4 lg:mb-0">
          <a href="/" className="font-display text-[1.4rem] tracking-[0.12em] text-ananta-neon no-underline glow-neon mb-3 block">
            ANANTADB<span className="text-ananta-neon2 glow-neon2">.</span>COM
          </a>
          <p className="text-[0.78rem] text-ananta-muted leading-[1.7] max-w-sm">
            {t('sections.footerDesc')}
          </p>
          <p className="text-[0.75rem] text-ananta-muted opacity-80 leading-[1.7] max-w-sm mt-3 pt-3 border-t border-ananta-border/30">
            {footerTexts.fanMsg}
          </p>
        </div>
        
        <div>
          <h4 className="font-mono text-[0.6rem] tracking-[0.2em] uppercase text-ananta-muted mb-4">{t('sections.footerGuides')}</h4>
          <ul className="list-none space-y-2.5">
            {[
              { label: t('sections.deepdiveTitle'), href: '#know' },
              { label: t('nav.characters'), href: '#characters' },
              { label: t('nav.map'), href: '#map' },
              { label: 'ACD AGENT TOOLKIT', href: '#toolkit' },
              { label: t('nav.codes'), href: '#codes' },
              { label: t('quicknav.compare'), href: '#compare' }
            ].map((item) => (
              <li key={item.href}>
                <a href={item.href} className="text-[0.82rem] text-ananta-text transition-colors duration-150 hover:text-ananta-neon">{item.label}</a>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h4 className="font-mono text-[0.6rem] tracking-[0.2em] uppercase text-ananta-muted mb-4">{t('sections.footerLinks')}</h4>
          <ul className="list-none space-y-2.5">
            {[
              { label: 'anantagame.com ↗', href: 'https://www.anantagame.com' },
              { label: 'Twitter / X ↗', href: 'https://x.com/Ananta_EN' },
              { label: 'Discord ↗', href: 'https://discord.gg/ananta' },
              { label: 'YouTube ↗', href: 'https://www.youtube.com/@Ananta_Game' },
              { label: 'Reddit ↗', href: 'https://www.reddit.com/r/AnantaOfficial/' }
            ].map((link) => (
              <li key={link.label}>
                <a href={link.href} target="_blank" rel="noreferrer" className="text-[0.82rem] text-ananta-text transition-colors duration-150 hover:text-ananta-neon">{link.label}</a>
              </li>
            ))}
          </ul>
        </div>
      </footer>
      <div className="border-t border-ananta-border px-[5vw] py-4 flex flex-col sm:flex-row justify-between items-center gap-3 font-mono text-[0.6rem] tracking-[0.1em] text-ananta-muted">
        <span>{t('sections.footerCopyright')}</span>
        <div className="flex flex-wrap gap-x-4 gap-y-2 justify-center">
          <a href="/privacy" className="hover:text-ananta-neon transition-colors uppercase">{footerTexts.privacy}</a>
          <span>·</span>
          <a href="/disclaimer" className="hover:text-ananta-neon transition-colors uppercase">{footerTexts.terms}</a>
          <span>·</span>
          <a href="/about" className="hover:text-ananta-neon transition-colors uppercase">{footerTexts.about}</a>
        </div>
      </div>
    </>
  );
}
