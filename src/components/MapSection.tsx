import React, { useState, useEffect } from 'react';
import { SectionLabel, SectionTitle } from './DeepDive';
import { useLanguage } from '../context/LanguageContext';
import { motion, AnimatePresence } from 'motion/react';
import { MapPin, Navigation, Info, Compass } from 'lucide-react';
import { MAP_BASE64_PLACEHOLDER } from './MapPlaceholderData';

const mapTranslations: Record<string, Record<string, string>> = {
  EN: {
    coords: 'COORDS',
    status: 'OPERATIVE PATROL SECTOR // TARGET REGISTERED',
    loading: 'DATALINK STABILIZING...'
  },
  CN: {
    coords: '坐标',
    status: '巡逻扇区 // 目标已登记',
    loading: '数据链路稳定中...'
  },
  TW: {
    coords: '坐標',
    status: '巡邏扇區 // 目標已登記',
    loading: '數據鏈路穩定中...'
  },
  JP: {
    coords: '座標',
    status: 'パトロールセクター // ターゲット登録完了',
    loading: 'データリンク接続中...'
  },
  KR: {
    coords: '좌표',
    status: '순찰 구역 // 대상 등록 완료',
    loading: '데이터 링크 안정화 중...'
  },
  DE: {
    coords: 'KOORDINATEN',
    status: 'EINSATZ-PATROUILLENSEKTOR // ZIEL SIND REGISTRIERT',
    loading: 'DATENVERBINDUNG SYNCHRONISIERT...'
  },
  FR: {
    coords: 'COORDONNÉES',
    status: 'SECTEUR DE PATROUILLE OPÉRATIONNEL // CIBLE ENREGISTRÉE',
    loading: 'STABILISATION DE LA LIAISON...'
  },
  IT: {
    coords: 'COORDINATE',
    status: 'SETTORE DI PATTUGLIAMENTO OPERATIVO // BERSAGLIO REGISTRATO',
    loading: 'CONNESSIONE DATI IN CORSO...'
  },
  RU: {
    coords: 'КООРДИНАТЫ',
    status: 'ОПЕРАТИВНЫЙ СЕКТОР ПАТРУЛИРОВАНИЯ // ЦЕЛЬ ЗАРЕГИСТРИРОВАНА',
    loading: 'СТАБИЛИЗАЦИЯ КАНАЛА ДАННЫХ...'
  }
};

export function MapSection() {
  const { t, lang } = useLanguage();
  const [activeId, setActiveId] = useState<number | null>(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const [isTouch, setIsTouch] = useState(false);
  const [loadedSrc, setLoadedSrc] = useState<string | null>(null);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    checkMobile();
    window.addEventListener('resize', checkMobile);

    const handleTouch = () => {
      setIsTouch(true);
    };
    window.addEventListener('touchstart', handleTouch, { passive: true });

    return () => {
      window.removeEventListener('resize', checkMobile);
      window.removeEventListener('touchstart', handleTouch);
    };
  }, []);

  const targetSrc = isMobile ? '/map1.jpg' : '/map.jpg';

  useEffect(() => {
    setIsLoaded(false);
    const img = new Image();
    
    // 1. Assign handlers BEFORE setting src to prevent race condition (especially for cached images on mobile)
    img.onload = () => {
      setLoadedSrc(targetSrc);
      setIsLoaded(true);
    };
    
    img.onerror = () => {
      setLoadedSrc(targetSrc);
      setIsLoaded(true); // Fallback to reveal map instead of spinning forever if request fails
    };
    
    img.src = targetSrc;
    
    // 2. Immediate synchronous check if already cached by browser
    if (img.complete) {
      setLoadedSrc(targetSrc);
      setIsLoaded(true);
    }

    // 3. Safety fallback timer: force reveal after 1.5s under bad mobile network to prevent infinite loop
    const safetyTimer = setTimeout(() => {
      setLoadedSrc(targetSrc);
      setIsLoaded(true);
    }, 1500);

    return () => {
      clearTimeout(safetyTimer);
      img.onload = null;
      img.onerror = null;
    };
  }, [targetSrc]);
  
  const baseDistricts = [
    { 
      id: 0,
      name: 'Sunset Speed District', 
      desc: 'An extreme speed paradise beyond limits, sacred ground for street racers and parkour artists.', 
      color: '#00e5ff',
      x: '12.4%',
      y: '34.6%'
    },
    { 
      id: 1,
      name: 'Downtown', 
      desc: 'Towering skyscrapers and corporate towers, main mission hubs and daily aerial traversal.', 
      color: '#a855f7',
      x: '35.3%',
      y: '26.5%'
    },
    { 
      id: 2,
      name: 'New Coast District', 
      desc: 'Where trendsetting fashion meets futuristic tech, full of creative NPCs and active lifestyles.', 
      color: '#ff4d6d',
      x: '61.0%',
      y: '28.5%'
    },
    { 
      id: 3,
      name: 'Qianbo Alley', 
      desc: 'Atmospheric lanes filled with local community warmth, urban legends, and secrets.', 
      color: '#4ade80',
      x: '17.8%',
      y: '54.5%'
    },
    { 
      id: 4,
      name: 'Marina District', 
      desc: 'Scenic coastlines and azure beaches, local coop meetups, and watercraft activities.', 
      color: '#f0b429',
      x: '39.0%',
      y: '53.3%'
    },
    { 
      id: 5,
      name: 'Future Port', 
      desc: 'Industrial docks and automated shipping facilities, hiding corporate espionage and cargo conflicts.', 
      color: '#38bdf8',
      x: '64.8%',
      y: '66.6%'
    },
  ];

  const mapDistrictsData = (typeof t('mapDistricts') === 'object' ? t('mapDistricts') : []) as any[];

  const districts = baseDistricts.map((base, i) => {
    const d = mapDistrictsData[i] || {};
    return {
      ...base,
      name: d.name || base.name,
      desc: d.desc || base.desc
    };
  });

  return (
    <section id="map" className="px-[5vw] py-20 bg-ananta-bg2 border-t border-ananta-border">
      <SectionLabel text={t('sections.mapLabel')} />
      <SectionTitle text={t('sections.mapTitle')} />
      
      <div className="grid grid-cols-1 lg:grid-cols-[1fr_320px] gap-8 mt-8">
        
        {/* Interactive Map Wrapper with original aspect ratio alignment */}
        <div className="relative flex flex-col gap-2">
          {/* Map instructions bar */}
          <div className="flex items-center justify-between text-xs text-ananta-muted border-b border-ananta-border pb-2 px-1">
            <div className="flex items-center gap-1.5 font-mono">
              <Compass className="w-3.5 h-3.5 text-ananta-neon animate-spin" style={{ animationDuration: '6s' }} />
              <span>{t('sections.mapSubtitle') || 'ACTIVE NOVA CITY MAP NAVIGATION INTERACTIVE'}</span>
            </div>
            <div className="flex items-center gap-1">
              <Info className="w-3 h-3" />
              <span>{t('sections.mapHover') || 'Hover points to explore district profiles'}</span>
            </div>
          </div>

          <div 
            id="interactive-map-container"
            className="aspect-[1447/736] w-full bg-ananta-bg3 border border-ananta-border relative overflow-hidden rounded-lg shadow-2xl shadow-black/60 select-none group"
            style={{
              backgroundImage: `url(${isLoaded ? targetSrc : MAP_BASE64_PLACEHOLDER})`,
              backgroundSize: '100% 100%',
              backgroundPosition: 'center',
              backgroundRepeat: 'no-repeat',
              filter: isLoaded ? 'none' : 'blur(4px) saturate(0.8)',
              transition: 'filter 0.4s cubic-bezier(0.25, 1, 0.5, 1), background-image 0.4s ease-in-out'
            }}
          >
            {/* Cybernetic holographic scanline and vignette overlay when preloading */}
            {!isLoaded && (
              <div className="absolute inset-0 flex flex-col items-center justify-center bg-black/45 backdrop-blur-[2px] z-30">
                <div className="flex flex-col items-center gap-3">
                  {/* Neon custom status spinner */}
                  <div className="relative w-10 h-10 flex items-center justify-center">
                    <span className="absolute inline-flex w-full h-full rounded-full border-2 border-ananta-neon/20 animate-pulse" />
                    <div className="w-8 h-8 border-2 border-transparent border-t-ananta-neon border-r-ananta-neon rounded-full animate-spin" style={{ animationDuration: '0.8s' }} />
                  </div>
                  <span className="text-[0.62rem] tracking-[0.15em] font-mono font-medium text-ananta-neon uppercase animate-pulse">
                    {mapTranslations[lang]?.loading || 'DATALINK STABILIZING...'}
                  </span>
                </div>
              </div>
            )}

            {/* Ambient vignette layer */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-black/10 pointer-events-none" />

            {/* Custom Interactive Marker Pins */}
            {districts.map((d, index) => {
              const isActive = activeId === index;
              return (
                <div
                  key={d.id}
                  id={`map-pin-${d.id}`}
                  className="absolute cursor-pointer group/marker"
                  style={{
                    left: d.x,
                    top: d.y,
                    transform: 'translate(-50%, -50%)',
                    zIndex: isActive ? 40 : 20,
                  }}
                  onMouseEnter={() => !isTouch && !isMobile && setActiveId(index)}
                  onMouseLeave={() => !isTouch && !isMobile && setActiveId(null)}
                  onClick={() => setActiveId((prev) => (prev === index ? null : index))}
                >
                  {/* Glowing core container */}
                  <div className="relative flex items-center justify-center w-8 h-8">
                    {/* Ring pulsing loops */}
                    <span 
                      className="absolute inline-flex w-full h-full rounded-full opacity-40 animate-ping" 
                      style={{ 
                        backgroundColor: d.color,
                        animationDuration: isActive ? '1s' : '2.5s'
                      }} 
                    />
                    
                    {/* Active secondary larger pulse */}
                    {isActive && (
                      <span 
                        className="absolute inline-flex w-14 h-14 rounded-full opacity-10 animate-pulse border"
                        style={{ borderColor: d.color }}
                      />
                    )}

                    {/* Highly polished center visual dot */}
                    <div 
                      className="w-4 h-4 rounded-full relative flex items-center justify-center transition-transform duration-300 shadow-[0_0_12px_rgba(0,0,0,0.8)]"
                      style={{ 
                        backgroundColor: d.color,
                        transform: isActive ? 'scale(1.25)' : 'scale(1)',
                        boxShadow: `0 0 14px ${d.color}, 0 0 4px ${d.color} inset`
                      }}
                    >
                      {/* Inner dark sight spot */}
                      <div className="w-1.5 h-1.5 bg-black rounded-full" />
                    </div>
                  </div>

                  {/* Absolute localized label text banner visible directly on map */}
                  <div 
                    className="absolute top-8 left-1/2 -translate-x-1/2 px-2 py-0.5 rounded border pointer-events-none transition-all duration-300"
                    style={{
                      background: 'rgba(5, 5, 8, 0.85)',
                      backdropFilter: 'blur(4px)',
                      borderColor: isActive ? d.color : 'rgba(255, 255, 255, 0.12)',
                      boxShadow: isActive ? `0 0 10px ${d.color}33` : 'none',
                    }}
                  >
                    <span 
                      className="text-[0.68rem] tracking-wider uppercase font-bold font-mono inline-block text-center whitespace-nowrap"
                      style={{ color: isActive ? '#ffffff' : 'rgba(255, 255, 255, 0.7)' }}
                    >
                      {d.name}
                    </span>
                  </div>

                  {/* Glowing directional stem pointer when hovered */}
                  {isActive && (
                    <div className="absolute top-full left-1/2 -translate-x-1/2 w-[1px] h-3 bg-gradient-to-b opacity-60 mt-0.5" style={{ from: d.color, to: 'transparent' }} />
                  )}
                </div>
              );
            })}

            {/* Premium, interactive overlay profile card (Desktop) */}
            <AnimatePresence>
              {activeId !== null && (
                <motion.div
                  initial={{ opacity: 0, y: 15 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 15 }}
                  transition={{ duration: 0.2 }}
                  className="hidden md:block absolute bottom-4 left-4 right-4 md:right-auto md:max-w-md p-5 border shadow-2xl rounded-lg pointer-events-none"
                  style={{
                    backgroundColor: 'rgba(9, 9, 14, 0.94)',
                    borderColor: districts[activeId].color,
                    boxShadow: `0 10px 30px -5px rgba(0, 0, 0, 0.8), 0 0 15px ${districts[activeId].color}1a`,
                    backdropFilter: 'blur(12px)'
                  }}
                >
                  <div className="flex items-start justify-between">
                    <div className="flex items-center gap-2">
                      <div className="w-3 h-3 rounded-full animate-pulse" style={{ backgroundColor: districts[activeId].color, boxShadow: `0 0 8px ${districts[activeId].color}` }} />
                      <h4 className="text-sm font-black text-white tracking-wider uppercase font-mono">{districts[activeId].name}</h4>
                    </div>
                    <span className="text-[0.55rem] tracking-widest uppercase font-mono px-1.5 py-0.5 bg-white/5 border border-white/5 rounded text-ananta-muted">
                      {(mapTranslations[lang]?.coords || 'COORDS')} {districts[activeId].x} / {districts[activeId].y}
                    </span>
                  </div>
                  <p className="text-xs text-white/95 leading-relaxed mt-2.5 font-sans">
                    {districts[activeId].desc}
                  </p>
                  <div className="flex items-center gap-2 mt-4 text-[0.62rem] text-ananta-muted font-mono border-t border-white/5 pt-2.5">
                    <Navigation className="w-3 h-3 text-white/40" />
                    <span>{mapTranslations[lang]?.status || 'OPERATIVE PATROL SECTOR // TARGET REGISTERED'}</span>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          {/* Premium, interactive overlay profile card (Mobile - displayed outside/below the map to avoid clipping) */}
          <AnimatePresence>
            {activeId !== null && (
              <motion.div
                initial={{ opacity: 0, height: 0, marginTop: 0 }}
                animate={{ opacity: 1, height: 'auto', marginTop: 12 }}
                exit={{ opacity: 0, height: 0, marginTop: 0 }}
                transition={{ duration: 0.2 }}
                className="block md:hidden p-4 border rounded-lg bg-ananta-bg3"
                style={{
                  borderColor: districts[activeId].color,
                  boxShadow: `0 4px 15px -3px ${districts[activeId].color}22`,
                }}
              >
                <div className="flex items-start justify-between">
                  <div className="flex items-center gap-2">
                    <div className="w-2.5 h-2.5 rounded-full animate-pulse" style={{ backgroundColor: districts[activeId].color, boxShadow: `0 0 6px ${districts[activeId].color}` }} />
                    <h4 className="text-sm font-bold text-white tracking-wider uppercase font-mono">{districts[activeId].name}</h4>
                  </div>
                  <span className="text-[0.55rem] tracking-widest uppercase font-mono px-1.5 py-0.5 bg-white/5 border border-white/5 rounded text-ananta-muted">
                    {(mapTranslations[lang]?.coords || 'COORDS')} {districts[activeId].x} / {districts[activeId].y}
                  </span>
                </div>
                <p className="text-xs text-white/95 leading-relaxed mt-2.5 font-sans">
                  {districts[activeId].desc}
                </p>
                <div className="flex items-center gap-2 mt-3.5 text-[0.62rem] text-ananta-muted font-mono border-t border-white/5 pt-2">
                  <Navigation className="w-3 h-3 text-white/40" />
                  <span>{mapTranslations[lang]?.status || 'OPERATIVE PATROL SECTOR // TARGET REGISTERED'}</span>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>

        {/* Dynamic Legend Sidebar */}
        <div className="flex flex-col gap-3.5 pt-7">
          <div className="text-xs font-bold text-ananta-muted uppercase tracking-widest font-mono mb-1 flex items-center gap-2 px-1">
            <span className="w-1.5 h-1.5 bg-ananta-neon rounded-full" />
            <span>{t('sections.mapLegend') || 'Map Legend Zones'}</span>
          </div>

          <div className="flex flex-col gap-3 max-h-[100%] overflow-y-auto pr-1">
            {districts.map((d, index) => {
              const isActive = activeId === index;
              return (
                <div 
                  key={d.id} 
                  id={`legend-card-${d.id}`}
                  className="bg-ananta-bg border p-4 flex items-start gap-4 transition-all duration-300 cursor-pointer rounded-md relative overflow-hidden"
                  style={{ 
                    borderColor: isActive ? d.color : 'rgba(255, 255, 255, 0.04)',
                    boxShadow: isActive ? `0 4px 15px -3px ${d.color}22` : 'none',
                    background: isActive ? 'rgba(20, 20, 30, 0.4)' : undefined
                  }}
                  onMouseEnter={() => !isTouch && !isMobile && setActiveId(index)}
                  onMouseLeave={() => !isTouch && !isMobile && setActiveId(null)}
                  onClick={() => setActiveId((prev) => (prev === index ? null : index))}
                >
                  {/* Glowing stripe accent border for active list item */}
                  {isActive && (
                    <div className="absolute left-0 top-0 bottom-0 w-[3px]" style={{ backgroundColor: d.color }} />
                  )}

                  <div 
                    className="w-2.5 h-2.5 rounded-full mt-1 shrink-0 transition-shadow duration-300" 
                    style={{ 
                      backgroundColor: d.color, 
                      boxShadow: isActive ? `0 0 12px 2px ${d.color}` : `0 0 8px ${d.color}`
                    }} 
                  />
                  <div>
                    <div className="text-[0.82rem] font-bold text-white mb-1 tracking-wide">{d.name}</div>
                    <div className="text-[0.68rem] text-ananta-muted leading-relaxed line-clamp-3 md:line-clamp-none">{d.desc}</div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}

