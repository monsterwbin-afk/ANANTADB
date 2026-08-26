import React from 'react';
import { SectionLabel, SectionTitle } from './DeepDive';
import { useLanguage } from '../context/LanguageContext';
import { ARTICLES_CONTENT_I18N } from '../articlesLocales';
import { VideoPlayer } from './VideoPlayer';
import { motion, AnimatePresence } from 'motion/react';
import { X, Maximize2 } from 'lucide-react';

function parseDate(dateStr: string): Date {
  const str = dateStr.trim().toLowerCase();
  const digits = str.match(/\d+/g);
  
  if (digits && digits.length >= 3) {
    const year = parseInt(digits[0], 10);
    if (year >= 1000) {
      const month = parseInt(digits[1], 10) - 1;
      const day = parseInt(digits[2], 10);
      return new Date(year, month, day);
    }
  }

  if (digits && digits.length === 2) {
    const d0 = parseInt(digits[0], 10);
    const d1 = parseInt(digits[1], 10);
    const year = d1 >= 1000 ? d1 : d0;
    const day = d1 >= 1000 ? d0 : d1;
    
    const monthWords: Record<string, number> = {
      'january': 0, 'february': 1, 'march': 2, 'april': 3, 'may': 4, 'june': 5,
      'july': 6, 'august': 7, 'september': 8, 'october': 9, 'november': 10, 'december': 11,
      'jan': 0, 'feb': 1, 'mar': 2, 'apr': 3, 'jun': 5, 'jul': 6, 'aug': 7, 'sep': 8, 'oct': 9, 'nov': 10, 'dec': 11,
      'januar': 0, 'februar': 1, 'märz': 2, 'mai': 4, 'juni': 5, 'juli': 6, 'oktober': 9, 'dezember': 11,
      'janvier': 0, 'février': 1, 'mars': 2, 'avril': 3, 'juin': 5, 'juillet': 6, 'août': 7, 'septembre': 8, 'octobre': 9, 'novembre': 10, 'décembre': 11,
      'gennaio': 0, 'febbraio': 1, 'marzo': 2, 'aprile': 3, 'maggio': 4, 'giugno': 5, 'luglio': 6, 'agosto': 7, 'settembre': 8, 'ottobre': 9, 'dicembre': 11,
      'январь': 0, 'февраль': 1, 'март': 2, 'апрель': 3, 'май': 4, 'июнь': 5, 'июль': 6, 'август': 7, 'сентябрь': 8, 'октябрь': 9, 'ноябрь': 10, 'декабрь': 11,
      'янв': 0, 'фев': 1, 'мар': 2, 'апр': 3, 'июн': 5, 'июл': 6, 'авг': 7, 'сен': 8, 'окт': 9, 'ноя': 10, 'дек': 11,
      'мая': 4, 'июня': 5, 'мая г': 4, 'июня г': 5
    };

    const sortedKeys = Object.keys(monthWords).sort((a, b) => b.length - a.length);
    for (const key of sortedKeys) {
      if (str.includes(key)) {
        const month = monthWords[key];
        return new Date(year, month, day);
      }
    }
  }

  return new Date(0);
}

const getPinnedRank = (title: string): number => {
  return 999;
};

export function NewsCenterPage() {

  const { t, lang } = useLanguage();
  const newsData = (typeof t('newsData') === 'object' ? t('newsData') : []) as any[];

  const tagClasses = [
    'bg-ananta-neon text-ananta-bg ring-ananta-neon font-bold',
    'bg-transparent text-[#a855f7] ring-[#a855f7]',
    'bg-transparent text-ananta-gold ring-ananta-gold',
    'bg-transparent text-ananta-neon ring-ananta-neon'
  ];

  const news = newsData.map((item: any, idx: number) => ({
    ...item,
    originalIndex: idx,
    tagClass: tagClasses[idx % tagClasses.length],
    parsedDate: parseDate(item.date),
    pinned: item.pinned === true || getPinnedRank(item.title) !== 999
  }));

  const sortedNews = [...news].sort((a, b) => {
    // Manually pinned items are absolute top priority
    const isManualA = a.pinned && ('pinned' in a) && a.pinned === true;
    const isManualB = b.pinned && ('pinned' in b) && b.pinned === true;
    if (isManualA && !isManualB) return -1;
    if (!isManualA && isManualB) return 1;

    const rankA = getPinnedRank(a.title);
    const rankB = getPinnedRank(b.title);
    if (rankA !== 999 && rankB === 999) return -1;
    if (rankA === 999 && rankB !== 999) return 1;
    if (rankA !== 999 && rankB !== 999) return rankA - rankB;
    return b.parsedDate.getTime() - a.parsedDate.getTime();
  });

  return (
    <div className="bg-ananta-bg min-h-screen pt-[120px] pb-20">
      <div className="max-w-7xl mx-auto px-[5vw]">
        <div className="mb-12">
          <SectionLabel text="NOVA CITY DATABASE" />
          <SectionTitle text={t('sections.newsTitle')} className="!mb-4" />
          <p className="text-ananta-muted font-mono text-sm tracking-wider uppercase">
            {lang === 'CN' ? "围绕 Ananta 计划的最新情报" :
             lang === 'TW' ? "圍繞 Ananta 計劃的最新情報" :
             lang === 'JP' ? "Ananta Projectに関する最新情報" :
             lang === 'KR' ? "Ananta Project 관련 최신 정보" :
             lang === 'DE' ? "Neueste Informationen rund um das Ananta-Projekt" :
             lang === 'FR' ? "Dernières informations concernant le projet Ananta" :
             lang === 'IT' ? "Ultime informazioni sul Progetto Ananta" :
             lang === 'RU' ? "Последняя информация о проекте Ananta" :
             "Latest Intel surrounding Ananta Project"}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {sortedNews.map((item, idx) => (
            <a key={idx} href={`/news/article/${item.originalIndex}`} className="group block bg-ananta-bg2 border border-ananta-border p-6 transition-all duration-300 hover:border-ananta-neon/50 hover:bg-ananta-neon/[0.02]">
              <div className="flex items-center justify-between mb-4">
                <span className={`font-mono text-[0.55rem] tracking-[0.15em] uppercase px-2 py-0.5 ring-1 ${item.tagClass}`}>
                  {item.tag}
                </span>
                <span className="font-mono text-[0.6rem] text-ananta-muted uppercase tracking-[0.1em]">
                  {item.date}
                </span>
              </div>
              <h3 className="font-display text-[1.2rem] tracking-[0.05em] text-white leading-tight mb-3 group-hover:text-ananta-neon transition-colors">
                {item.title}
              </h3>
              <p className="text-[0.8rem] text-ananta-muted leading-[1.6]">
                {item.desc}
              </p>
            </a>
          ))}
        </div>
      </div>
    </div>
  );
}

function getArticleContentIndex(articleIndex: number, article?: any): number {
  if (article && typeof article.contentIdx === 'number') {
    return article.contentIdx;
  }
  const mapping: Record<number, number> = {
    0: 26,
    1: 3,
    2: 4,
    3: 0,
    4: 1,
    5: 2,
    6: 5,
    7: 6,
    8: 7,
    9: 8,
    10: 9,
    11: 10,
    12: 28,
    13: 12,
    14: 27,
    15: 14,
    16: 15,
    17: 16,
    18: 17,
    19: 18,
    20: 19,
    21: 20,
    22: 21,
    23: 22,
    24: 23,
    25: 24,
    26: 25
  };
  return mapping[articleIndex] !== undefined ? mapping[articleIndex] : articleIndex;
}

export function NewsArticlePage({ articleIndex }: { articleIndex: number }) {
  const { t, lang } = useLanguage();
  const [zoomedImage, setZoomedImage] = React.useState<string | null>(null);

  React.useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        setZoomedImage(null);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  const newsData = (typeof t('newsData') === 'object' ? t('newsData') : []) as any[];
  
  const article = newsData[articleIndex];
  
  const contentIdx = getArticleContentIndex(articleIndex, article);
  const markdownText = ARTICLES_CONTENT_I18N[lang]?.[contentIdx] || `
# Awaiting Decryption
*Data for this intel file is currently corrupted or missing... Please check back later.*
  `;

  if (!article) {
    return (
      <div className="min-h-[80vh] flex items-center justify-center bg-ananta-bg pt-20">
        <div className="text-center">
          <h1 className="font-display text-4xl text-white mb-4">ARTICLE NOT FOUND</h1>
          <a href="/news/all" className="text-ananta-neon font-mono hover:underline">← BACK TO NEWS CENTER</a>
        </div>
      </div>
    );
  }

  const renderMarkdown = (text: string) => {
    // 1. Process inline bold, italic, and links beautifully
    const formatInline = (lineText: string) => {
      const parts = lineText.split(/(\*\*.*?\*\*|\*.*?\*|\[.*?\]\(.*?\))/g);
      return parts.map((part, i) => {
        if (part.startsWith('**') && part.endsWith('**')) {
          return <strong key={i} className="text-white font-bold tracking-wide">{part.slice(2, -2)}</strong>;
        }
        if (part.startsWith('*') && part.endsWith('*')) {
          return <em key={i} className="italic text-white/90">{part.slice(1, -1)}</em>;
        }
        if (part.startsWith('[') && part.includes('](') && part.endsWith(')')) {
          const match = part.match(/\[(.*?)\]\((.*?)\)/);
          if (match) {
            return (
              <a 
                key={i} 
                href={match[2]} 
                target="_blank" 
                rel="noopener noreferrer" 
                className="text-ananta-neon hover:underline font-mono text-[0.9em] hover:text-ananta-neon/80 transition-colors"
              >
                {match[1]}
              </a>
            );
          }
        }
        return part;
      });
    };

    // Replace double escaped newlines with real newlines for split
    const normalizedText = text.replace(/\\n/g, '\n');
    
    return normalizedText.split('\n').map((line, idx) => {
      line = line.trim();
      if (!line) return <div key={idx} className="h-2" />;
      
      // Robust video element detection (anywhere in line, ignoring bracket spacing)
      if (line.includes('[video:')) {
        const videoMatch = line.match(/\[video:\s*(.*?)\s*\]/);
        if (videoMatch) {
          const videoUrl = videoMatch[1];
          return (
            <div key={idx} className="my-8 aspect-video w-full rounded border border-ananta-border overflow-hidden bg-black relative z-10 shadow-[0_0_30px_rgba(0,0,0,0.5)]">
              <VideoPlayer src={videoUrl} />
            </div>
          );
        }
      }

      // Robust image element detection
      if (line.includes('[image:')) {
        const imageMatch = line.match(/\[image:\s*(.*?)\s*\]/);
        if (imageMatch) {
          let imageUrl = imageMatch[1];
          if (imageUrl.includes('reddit.com/media?url=')) {
            try {
              const urlParam = new URL(imageUrl).searchParams.get('url');
              if (urlParam) {
                imageUrl = decodeURIComponent(urlParam);
              }
            } catch (e) {
              // fallback
            }
          }
          return (
            <div key={idx} className="my-8 w-full rounded border border-ananta-border overflow-hidden bg-black/40 relative z-10 flex justify-center">
              <div 
                className="relative cursor-zoom-in group overflow-hidden rounded border border-ananta-border/40 hover:border-ananta-neon/40 transition-colors"
                onClick={() => setZoomedImage(imageUrl)}
              >
                <img 
                  src={imageUrl} 
                  alt="" 
                  referrerPolicy="no-referrer" 
                  className="max-w-full h-auto object-cover max-h-[500px] transition-transform duration-300 group-hover:scale-[1.01]" 
                />
                <div className="absolute inset-0 bg-black/25 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <div className="bg-black/80 backdrop-blur-md px-4 py-2 rounded-full border border-white/10 flex items-center gap-2 text-xs text-white font-mono tracking-wider scale-95 group-hover:scale-100 transition-transform duration-300 shadow-lg">
                    <Maximize2 className="w-3.5 h-3.5 text-ananta-neon" />
                    <span>{lang === 'CN' || lang === 'TW' ? '点击放大' : 'CLICK TO ZOOM'}</span>
                  </div>
                </div>
              </div>
            </div>
          );
        }
      }

      // Standard markdown image ![]()
      if (line.includes('![') && line.includes('](')) {
        const match = line.match(/!\[(.*?)\]\((.*?)\)/);
        if (match) {
          const alt = match[1];
          let url = match[2];
          if (url.includes('reddit.com/media?url=')) {
            try {
              const urlParam = new URL(url).searchParams.get('url');
              if (urlParam) {
                url = decodeURIComponent(urlParam);
              }
            } catch (e) {
              // fallback
            }
          }
          return (
            <div key={idx} className="my-8 w-full rounded border border-ananta-border overflow-hidden bg-black/40 relative z-10 flex justify-center shadow-[0_0_30px_rgba(0,0,0,0.4)]">
              <div 
                className="relative cursor-zoom-in group overflow-hidden rounded border border-ananta-border/40 hover:border-ananta-neon/40 transition-colors"
                onClick={() => setZoomedImage(url)}
              >
                <img 
                  src={url} 
                  alt={alt} 
                  referrerPolicy="no-referrer" 
                  className="max-w-full h-auto object-cover max-h-[500px] transition-transform duration-300 group-hover:scale-[1.01]" 
                />
                <div className="absolute inset-0 bg-black/25 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <div className="bg-black/80 backdrop-blur-md px-4 py-2 rounded-full border border-white/10 flex items-center gap-2 text-xs text-white font-mono tracking-wider scale-95 group-hover:scale-100 transition-transform duration-300 shadow-lg">
                    <Maximize2 className="w-3.5 h-3.5 text-ananta-neon" />
                    <span>{lang === 'CN' || lang === 'TW' ? '点击放大' : 'CLICK TO ZOOM'}</span>
                  </div>
                </div>
              </div>
            </div>
          );
        }
      }

      // Headings
      if (line.startsWith('# ')) {
        return <h1 key={idx} className="text-2xl md:text-3xl font-display font-bold text-white mb-6 mt-10 tracking-tight leading-snug">{formatInline(line.replace('# ', ''))}</h1>;
      }
      if (line.startsWith('## ')) {
        return <h2 key={idx} className="text-xl md:text-2xl font-display font-semibold text-white mb-4 mt-8 border-l-2 border-ananta-neon pl-3 tracking-wide">{formatInline(line.replace('## ', ''))}</h2>;
      }
      if (line.startsWith('### ')) {
        return <h3 key={idx} className="text-lg md:text-xl font-display font-semibold text-white mb-3 mt-6">{formatInline(line.replace('### ', ''))}</h3>;
      }
      if (line.startsWith('---')) {
        return <hr key={idx} className="my-8 border-ananta-border" />;
      }

      // Blockquote / Italic Intro
      if (line.startsWith('*') && line.endsWith('*') && !line.startsWith('**')) {
        return (
          <p key={idx} className="italic text-ananta-muted text-[0.95rem] border-l-2 border-ananta-neon/40 pl-4 py-2 my-6 bg-ananta-bg2/30 rounded-r leading-relaxed">
            {formatInline(line.replace(/\*/g, ''))}
          </p>
        );
      }

      // List Items (Unordered)
      if (line.startsWith('- ')) {
        return (
          <li key={idx} className="ml-6 list-disc mb-2 text-ananta-muted text-[0.95rem] leading-[1.8] marker:text-ananta-neon/80">
            {formatInline(line.replace('- ', ''))}
          </li>
        );
      }

      // List Items (Ordered)
      if (/^\d+\. /.test(line)) {
        const markerMatch = line.match(/^(\d+\. )/);
        const marker = markerMatch ? markerMatch[0] : '';
        return (
          <li key={idx} className="ml-6 list-decimal mb-2 text-ananta-muted text-[0.95rem] leading-[1.8] marker:text-ananta-neon/80 font-bold">
            <span className="font-normal">{formatInline(line.substring(marker.length))}</span>
          </li>
        );
      }
      
      // Default paragraphs
      return <p key={idx} className="mb-4 text-[0.95rem] text-ananta-muted leading-[1.8]">{formatInline(line)}</p>;
    });
  };

  return (
    <div className="bg-ananta-bg min-h-screen pt-[60px]">
       
       <div className="relative border-b border-ananta-border bg-ananta-bg2/50 overflow-hidden">
          <div className="absolute inset-0 opacity-[0.02] bg-[radial-gradient(#fff_1px,transparent_1px)] [background-size:24px_24px]" />
          <div className="max-w-7xl mx-auto px-[5vw] pt-20 pb-16 relative z-10">
             <a href="/news/all" className="inline-block font-mono text-[0.65rem] tracking-[0.2em] text-ananta-muted uppercase hover:text-white mb-8">← BACK TO NEWS CENTER</a>
             
             <div className="flex flex-col md:flex-row md:items-end justify-between mb-8">
                <div>
                   <div className="flex items-center gap-4 mb-6">
                      <span className="font-mono text-[0.65rem] tracking-[0.15em] uppercase text-ananta-neon px-3 py-1 ring-1 ring-ananta-neon/30 bg-ananta-neon/5">
                        {article.tag}
                      </span>
                      <span className="font-mono text-[0.7rem] text-ananta-muted tracking-widest">
                        {article.date}
                      </span>
                   </div>
                   
                   <h1 className="font-display text-3xl md:text-5xl lg:text-6xl text-white leading-tight max-w-4xl">
                      {article.title}
                   </h1>
                </div>
             </div>
          </div>
       </div>

       <div className="max-w-7xl mx-auto px-[5vw] py-16">
          <div className="prose prose-invert max-w-none">
             {renderMarkdown(markdownText)}
          </div>
          
          <div className="mt-20 pt-8 border-t border-ananta-border flex justify-between items-center">
             <div className="text-xs font-mono text-ananta-muted tracking-wide uppercase">
                END OF INTEL
             </div>
             <a href="/news/all" className="text-sm font-mono text-ananta-neon uppercase tracking-wider hover:underline flex items-center gap-2">
               Next Intel →
             </a>
          </div>
       </div>

       {/* Lightbox / Zoom Overlay */}
       <AnimatePresence>
         {zoomedImage && (
           <motion.div
             initial={{ opacity: 0 }}
             animate={{ opacity: 1 }}
             exit={{ opacity: 0 }}
             transition={{ duration: 0.2 }}
             className="fixed inset-0 z-[9999] flex items-center justify-center p-4 md:p-8 bg-black/95 backdrop-blur-md cursor-zoom-out select-none"
             onClick={() => setZoomedImage(null)}
           >
             <div className="absolute top-4 right-4 md:top-6 md:right-6 flex items-center gap-4">
               <span className="hidden md:inline font-mono text-[0.7rem] text-ananta-muted tracking-widest uppercase">
                 {lang === 'CN' || lang === 'TW' ? 'ESC 键或点击任意处关闭' : 'Press ESC or Click anywhere to close'}
               </span>
               <button 
                 onClick={(e) => { e.stopPropagation(); setZoomedImage(null); }}
                 className="p-3 rounded-full border border-white/10 bg-white/5 hover:bg-white/15 text-white/80 hover:text-white transition-all transform hover:scale-105 active:scale-95 cursor-pointer"
               >
                 <X className="w-5 h-5" />
               </button>
             </div>

             <motion.div
               initial={{ scale: 0.95, opacity: 0 }}
               animate={{ scale: 1, opacity: 1 }}
               exit={{ scale: 0.95, opacity: 0 }}
               transition={{ type: "spring", damping: 28, stiffness: 380 }}
               className="relative max-w-[95vw] sm:max-w-4xl max-h-[85vh] flex flex-col items-center justify-center"
               onClick={(e) => e.stopPropagation()}
             >
               <img 
                 src={zoomedImage} 
                 alt="Intel Preview" 
                 referrerPolicy="no-referrer" 
                 className="max-w-full max-h-[80vh] rounded-lg border border-white/10 shadow-[0_0_60px_rgba(0,0,0,0.9)] object-contain cursor-zoom-out"
                 onClick={() => setZoomedImage(null)}
               />
             </motion.div>
           </motion.div>
         )}
       </AnimatePresence>
    </div>
  );
}
