import React, { useState } from 'react';
import { BookOpen, Clock, Heart, Eye, ChevronRight, Flame } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';
import { INITIAL_BLOG_POSTS } from '../data/blogData';

const widgetI18n: Record<string, any> = {
  CN: {
    title: '博客攻略',
    sub: '主页精选六个官方与社区专属的深度原创高分图文攻略',
    readMore: '阅读全文',
    minRead: '分钟阅读',
    viewAll: '查看全部攻略'
  },
  TW: {
    title: '博客攻略',
    sub: '主頁精選六個官方與社區專屬的深度原創高分圖文攻略',
    readMore: '閱讀全文',
    minRead: '分鐘閱讀',
    viewAll: '查看全部攻略'
  },
  EN: {
    title: 'Blog Guides',
    sub: 'Featured six high-quality deep original guides from official and community veterans',
    readMore: 'Read Article',
    minRead: 'min read',
    viewAll: 'View All Articles'
  },
  JP: {
    title: 'ブログ攻略',
    sub: '公式およびコミュニティ厳選の高品質なオリジナル攻略ガイド6選',
    readMore: '詳細を読む',
    minRead: '分で読める',
    viewAll: 'すべての記事を見る'
  },
  KR: {
    title: '블로그 공략',
    sub: '공식 및 커뮤니티 베테랑들이 전하는 6가지 고품질 오리지널 심층 공략',
    readMore: '기사 읽기',
    minRead: '분 소요',
    viewAll: '모든 공략 보기'
  },
  DE: {
    title: 'Blog-Leitfäden',
    sub: 'Die sechs besten detaillierten Original-Guides von Entwicklern und Community-Veteranen',
    readMore: 'Weiterlesen',
    minRead: 'Min. Lesezeit',
    viewAll: 'Alle Artikel anzeigen'
  },
  FR: {
    title: 'Guides de Blog',
    sub: 'Sélection de six guides originaux approfondis rédigés par l\'équipe et la communauté',
    readMore: 'Lire l\'article',
    minRead: 'min de lecture',
    viewAll: 'Voir tous les articles'
  },
  IT: {
    title: 'Guide del Blog',
    sub: 'Selezionate sei guide originali e approfondite curate dal team e dai veterani',
    readMore: 'Leggi Articolo',
    minRead: 'min lettura',
    viewAll: 'Mostra tutti gli articoli'
  },
  RU: {
    title: 'Руководства блога',
    sub: 'Шесть лучших подробных оригинальных руководств от разработчиков и ветеранов сообщества',
    readMore: 'Читать',
    minRead: 'мин. чтения',
    viewAll: 'Все руководства'
  }
};

export function BlogWidget() {
  const { lang } = useLanguage();
  const ui = widgetI18n[lang] || widgetI18n.EN;

  // Local likes tracking
  const [likedPosts, setLikedPosts] = useState<Record<string, boolean>>(() => {
    try {
      const saved = localStorage.getItem('ananta_blog_likes');
      if (saved) return JSON.parse(saved);
    } catch (e) {}
    return {};
  });

  const handlePostClick = (id: string) => {
    window.history.pushState(null, '', `#/blog/post/${id}`);
    window.dispatchEvent(new Event('popstate'));
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleViewAllClick = () => {
    window.history.pushState(null, '', `#/blog`);
    window.dispatchEvent(new Event('popstate'));
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <section id="blog-widget" className="px-[5vw] py-20 bg-ananta-bg border-t border-b border-ananta-border/40 relative">
      <div className="absolute top-0 left-0 w-64 h-64 bg-ananta-neon/5 rounded-full blur-3xl pointer-events-none" />
      
      <div className="relative z-10">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-6 mb-12">
          <div>
            <span className="font-mono text-[0.62rem] tracking-[0.25em] text-ananta-neon uppercase mb-3.5 px-3 py-1 bg-ananta-neon/5 border border-ananta-neon/20 rounded-sm inline-block">
              📚 {ui.title}
            </span>
            <h2 className="font-display text-[clamp(1.8rem,3.5vw,2.8rem)] tracking-wide text-white leading-tight">
              {ui.title}
            </h2>
            <p className="max-w-2xl text-[0.8rem] text-ananta-muted leading-relaxed mt-2.5">
              {ui.sub}
            </p>
          </div>

          <button
            onClick={handleViewAllClick}
            className="shrink-0 flex items-center gap-1.5 px-4.5 py-2.5 rounded-sm border border-ananta-neon/25 text-ananta-neon font-mono text-[0.68rem] font-bold uppercase hover:bg-ananta-neon/10 transition-all cursor-pointer shadow-[0_0_15px_rgba(0,229,255,0.08)] active:scale-95"
          >
            <span>{ui.viewAll}</span>
            <ChevronRight className="w-3.5 h-3.5" />
          </button>
        </div>

        {/* 6 Grid columns */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {INITIAL_BLOG_POSTS.slice(0, 6).map(post => {
            const isLiked = !!likedPosts[post.id];
            return (
              <div
                key={post.id}
                onClick={() => handlePostClick(post.id)}
                className="group flex flex-col justify-between rounded bg-[#0b0f17] border border-ananta-border overflow-hidden hover:border-ananta-neon/60 transition-all duration-300 hover:shadow-[0_0_20px_rgba(0,229,255,0.12)] cursor-pointer"
              >
                <div>
                  {/* Thumbnail Cover */}
                  <div className="relative aspect-[16/10] w-full overflow-hidden bg-black/50 border-b border-ananta-border/40">
                    <img
                      src={post.coverImage}
                      alt={post.title[lang] || post.title.EN}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-102"
                      referrerPolicy="no-referrer"
                    />
                    <div className="absolute top-3 left-3">
                      <span className="px-2 py-0.5 rounded bg-black/80 backdrop-blur-md text-ananta-neon border border-ananta-neon/30 font-mono text-[0.6rem] font-bold uppercase tracking-wider">
                        {post.categoryLabel[lang] || post.categoryLabel.EN || post.category}
                      </span>
                    </div>
                    {post.featured && (
                      <div className="absolute top-3 right-3 animate-pulse">
                        <span className="flex items-center gap-1 px-2 py-0.5 rounded bg-pink-600 text-white font-mono text-[0.58rem] font-bold uppercase shadow">
                          <Flame className="w-2.5 h-2.5" /> HOT
                        </span>
                      </div>
                    )}
                  </div>

                  {/* Content body */}
                  <div className="p-5">
                    <div className="flex items-center gap-2.5 font-mono text-[0.65rem] text-ananta-muted mb-2">
                      <span>{post.date}</span>
                      <span>·</span>
                      <span className="flex items-center gap-1">
                        <Clock className="w-3 h-3 text-ananta-neon" />
                        {post.readTimeMin} {ui.minRead}
                      </span>
                    </div>

                    <h3 className="font-display text-[0.98rem] text-white group-hover:text-ananta-neon transition-colors line-clamp-2 leading-snug mb-2.5">
                      {post.title[lang] || post.title.EN || post.title.CN}
                    </h3>

                    <p className="text-gray-400 text-xs line-clamp-2 leading-relaxed mb-4">
                      {post.summary[lang] || post.summary.EN || post.summary.CN}
                    </p>
                  </div>
                </div>

                {/* Bottom Meta */}
                <div className="p-5 pt-0 mt-1 flex items-center justify-between text-[0.7rem] font-mono text-ananta-muted border-t border-ananta-border/30">
                  <div className="flex items-center gap-3 pt-4">
                    <span className="flex items-center gap-1">
                      <Eye className="w-3.5 h-3.5 text-ananta-neon" />
                      {post.initialViews}
                    </span>
                    <span className={`flex items-center gap-1 ${isLiked ? 'text-pink-400' : ''}`}>
                      <Heart className={`w-3.5 h-3.5 ${isLiked ? 'fill-pink-500 text-pink-500' : ''}`} />
                      {post.initialLikes + (isLiked ? 1 : 0)}
                    </span>
                  </div>

                  <span className="flex items-center gap-0.5 text-ananta-neon group-hover:translate-x-1 transition-transform font-bold pt-4">
                    {ui.readMore} <ChevronRight className="w-3.5 h-3.5" />
                  </span>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
