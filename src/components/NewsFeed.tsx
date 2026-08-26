import React from 'react';
import { SectionLabel, SectionTitle } from './DeepDive';
import { useLanguage } from '../context/LanguageContext';

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

export const NEWS_IMAGES: Record<number, string> = {
  0: "/src/assets/images/news_hoverboard_1779588672628.png",
  1: "/src/assets/images/news_pc_120fps_1779588687873.png",
  2: "/src/assets/images/news_industrial_materials_1779588705055.png",
  3: "https://www.anantagame.com/pc/gw/20250904162009/assets/kv-full_f7467c2a.jpg",
  4: "https://www.anantagame.com/pc/gw/20250904162009/assets/full_0006_50878b56.jpg",
  5: "https://www.anantagame.com/pc/gw/20250904162009/assets/bg_8bda2623.jpg"
};

const getPinnedRank = (title: string): number => {
  return 999;
};

export function NewsFeed() {
  const { t } = useLanguage();
  
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
    pinned: getPinnedRank(item.title) !== 999
  }));

  const sortedNews = [...news].sort((a, b) => {
    const rankA = getPinnedRank(a.title);
    const rankB = getPinnedRank(b.title);
    if (rankA !== 999 && rankB === 999) return -1;
    if (rankA === 999 && rankB !== 999) return 1;
    if (rankA !== 999 && rankB !== 999) return rankA - rankB;
    return b.parsedDate.getTime() - a.parsedDate.getTime();
  });

  const displayedNews = sortedNews.slice(0, 9);

  return (
    <section id="news" className="px-[5vw] py-20 bg-ananta-bg border-b border-ananta-border">
      <div className="flex flex-col md:flex-row md:items-end justify-between mb-12">
        <div>
          <SectionLabel text={t('sections.newsLabel')} />
          <SectionTitle text={t('sections.newsTitle')} className="!mb-0" />
        </div>
        <a href="/news/all" className="font-mono text-[0.65rem] tracking-[0.15em] text-ananta-neon uppercase mt-4 md:mt-0 hover:glow-neon transition-all decoration-transparent border-b border-ananta-neon/30 hover:border-ananta-neon pb-1 w-max">
          {t('sections.viewAll')}
        </a>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {displayedNews.map((item, idx) => (
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
    </section>
  );
}
