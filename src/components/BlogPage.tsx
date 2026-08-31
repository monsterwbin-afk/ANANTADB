import React, { useState, useEffect, useMemo } from 'react';
import { 
  BookOpen, 
  Search, 
  Tag, 
  Clock, 
  Heart, 
  Eye, 
  Share2, 
  ArrowLeft, 
  Check, 
  X,
  Sparkles, 
  TrendingUp, 
  Filter, 
  Copy, 
  Compass, 
  Flame,
  ChevronRight,
  User,
  Calendar,
  ExternalLink,
  Layers,
  Award,
  ThumbsUp
} from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';
import { BlogPost, INITIAL_BLOG_POSTS } from '../data/blogData';
import { BLOG_UI_I18N } from '../data/blogLocales';

interface BlogPageProps {
  initialPostId?: string;
  onNavigateHome?: () => void;
}

export function BlogPage({ initialPostId, onNavigateHome }: BlogPageProps) {
  const { lang, t } = useLanguage();

  // State: Posts - sync with INITIAL_BLOG_POSTS for latest translations and localized content
  const [posts, setPosts] = useState<BlogPost[]>(() => {
    try {
      const savedLikes = localStorage.getItem('ananta_blog_post_likes_map');
      const likesMap: Record<string, number> = savedLikes ? JSON.parse(savedLikes) : {};
      return INITIAL_BLOG_POSTS.map(p => ({
        ...p,
        initialLikes: likesMap[p.id] !== undefined ? likesMap[p.id] : p.initialLikes
      }));
    } catch (e) {
      return INITIAL_BLOG_POSTS;
    }
  });

  // State: Likes mapping
  const [likedPosts, setLikedPosts] = useState<Record<string, boolean>>(() => {
    try {
      const saved = localStorage.getItem('ananta_blog_likes');
      if (saved) return JSON.parse(saved);
    } catch (e) {}
    return {};
  });

  // Active View State: List vs Single Post
  const [activePostId, setActivePostId] = useState<string | null>(initialPostId || null);

  // Filters & Search
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [selectedTag, setSelectedTag] = useState<string | null>(null);
  const [searchQuery, setSearchQuery] = useState('');
  const [sortBy, setSortBy] = useState<'newest' | 'popular' | 'likes'>('newest');

  const [copiedToast, setCopiedToast] = useState(false);

  // Sync hash routing
  useEffect(() => {
    const handleHashChange = () => {
      const hash = window.location.hash;
      if (hash.startsWith('#/blog/post/') || hash.startsWith('#blog/post/')) {
        const id = hash.replace(/^#\/?blog\/post\//, '');
        setActivePostId(id);
        window.scrollTo({ top: 0, behavior: 'smooth' });
      } else if (hash === '#/blog' || hash === '#blog' || hash === '/blog') {
        setActivePostId(null);
      }
    };

    handleHashChange();
    window.addEventListener('hashchange', handleHashChange);
    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  // Sync back to URL when activePostId changes
  const openPost = (id: string) => {
    setActivePostId(id);
    window.history.pushState(null, '', `#/blog/post/${id}`);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const backToList = () => {
    setActivePostId(null);
    window.history.pushState(null, '', '#/blog');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  // Like a post
  const handleToggleLike = (postId: string, e?: React.MouseEvent) => {
    if (e) e.stopPropagation();
    const isCurrentlyLiked = !!likedPosts[postId];
    const newLikedMap = { ...likedPosts, [postId]: !isCurrentlyLiked };
    setLikedPosts(newLikedMap);
    localStorage.setItem('ananta_blog_likes', JSON.stringify(newLikedMap));

    const updatedPosts = posts.map(p => {
      if (p.id === postId) {
        return {
          ...p,
          initialLikes: isCurrentlyLiked ? Math.max(0, p.initialLikes - 1) : p.initialLikes + 1
        };
      }
      return p;
    });
    setPosts(updatedPosts);
    const likesMap: Record<string, number> = {};
    updatedPosts.forEach(p => { likesMap[p.id] = p.initialLikes; });
    localStorage.setItem('ananta_blog_post_likes_map', JSON.stringify(likesMap));
  };

  const copyShareLink = () => {
    navigator.clipboard.writeText(window.location.href);
    setCopiedToast(true);
    setTimeout(() => setCopiedToast(false), 2000);
  };

  // Filtered & Sorted Posts
  const filteredPosts = useMemo(() => {
    return posts.filter(post => {
      if (selectedCategory !== 'all' && post.category !== selectedCategory) {
        return false;
      }
      if (selectedTag && !post.tags.includes(selectedTag)) {
        return false;
      }
      if (searchQuery.trim()) {
        const q = searchQuery.toLowerCase();
        const title = (post.title[lang] || post.title.EN || '').toLowerCase();
        const summary = (post.summary[lang] || post.summary.EN || '').toLowerCase();
        const tagMatch = post.tags.some(t => t.toLowerCase().includes(q));
        if (!title.includes(q) && !summary.includes(q) && !tagMatch) {
          return false;
        }
      }
      return true;
    }).sort((a, b) => {
      if (sortBy === 'newest') return new Date(b.date).getTime() - new Date(a.date).getTime();
      if (sortBy === 'popular') return b.initialViews - a.initialViews;
      if (sortBy === 'likes') return b.initialLikes - a.initialLikes;
      return 0;
    });
  }, [posts, selectedCategory, selectedTag, searchQuery, sortBy, lang]);

  // All unique tags
  const allTags = useMemo(() => {
    const set = new Set<string>();
    posts.forEach(p => p.tags.forEach(t => set.add(t)));
    return Array.from(set);
  }, [posts]);

  // Active Post for Single View
  const activePost = useMemo(() => {
    if (!activePostId) return null;
    return posts.find(p => p.id === activePostId || p.slug === activePostId) || null;
  }, [activePostId, posts]);

  const ui = BLOG_UI_I18N[lang] || BLOG_UI_I18N.EN;

  // Current language localized categories
  const categoriesList = [
    { id: 'all', label: ui.catAll },
    { id: 'traversal', label: ui.catTraversal },
    { id: 'tech', label: ui.catTech },
    { id: 'combat', label: ui.catCombat },
    { id: 'lore', label: ui.catLore },
    { id: 'devlog', label: ui.catDevlog }
  ];

  // Helper for Markdown rendering
  const renderMarkdown = (text: string) => {
    if (!text) return null;
    const lines = text.split('\n');
    const elements: React.ReactNode[] = [];
    let inCodeBlock = false;
    let codeContent = '';
    let inTable = false;
    let tableRows: string[][] = [];

    lines.forEach((line, idx) => {
      // Code Block handling
      if (line.trim().startsWith('```')) {
        if (inCodeBlock) {
          elements.push(
            <pre key={`code-${idx}`} className="my-5 p-4 rounded bg-[#0b0e14] border border-ananta-border font-mono text-xs text-ananta-neon overflow-x-auto shadow-inner">
              <code>{codeContent.trim()}</code>
            </pre>
          );
          codeContent = '';
          inCodeBlock = false;
        } else {
          inCodeBlock = true;
        }
        return;
      }

      if (inCodeBlock) {
        codeContent += line + '\n';
        return;
      }

      // Markdown Headings
      if (line.startsWith('### ')) {
        elements.push(
          <h3 key={idx} className="font-display text-xl sm:text-2xl text-white tracking-wider mt-8 mb-3 flex items-center gap-2">
            <span className="w-1.5 h-4 bg-ananta-neon inline-block rounded-sm"></span>
            {line.replace('### ', '')}
          </h3>
        );
        return;
      }
      if (line.startsWith('## ')) {
        elements.push(
          <h2 key={idx} className="font-display text-2xl sm:text-3xl text-white tracking-wide mt-10 mb-4 pb-2 border-b border-ananta-border/60 flex items-center gap-3">
            <Sparkles className="w-5 h-5 text-ananta-neon glow-neon" />
            {line.replace('## ', '')}
          </h2>
        );
        return;
      }
      if (line.startsWith('# ')) {
        elements.push(
          <h1 key={idx} className="font-display text-3xl sm:text-4xl text-ananta-neon tracking-wide mt-8 mb-4">
            {line.replace('# ', '')}
          </h1>
        );
        return;
      }

      // Dividers
      if (line.trim() === '---') {
        elements.push(<hr key={idx} className="my-8 border-ananta-border/40" />);
        return;
      }

      // Images [image: URL]
      if (line.trim().startsWith('[image:') && line.trim().endsWith(']')) {
        const imageUrl = line.trim().slice(7, -1).trim();
        elements.push(
          <div key={idx} className="my-8 overflow-hidden rounded-xl border border-ananta-neon/30 shadow-[0_0_30px_rgba(0,229,255,0.15)] bg-[#0a0d14]">
            <img
              src={imageUrl}
              alt="Ananta illustration"
              referrerPolicy="no-referrer"
              className="w-full max-h-[480px] object-cover hover:scale-[1.02] transition-transform duration-700"
            />
          </div>
        );
        return;
      }

      // Bullet lists
      if (line.trim().startsWith('- ') || line.trim().startsWith('* ')) {
        const content = line.trim().substring(2);
        elements.push(
          <li key={idx} className="text-gray-300 leading-relaxed my-1.5 ml-6 list-disc marker:text-ananta-neon">
            {renderInlineMarkdown(content)}
          </li>
        );
        return;
      }

      // Numbered lists
      if (/^\d+\.\s/.test(line.trim())) {
        const match = line.trim().match(/^(\d+)\.\s(.*)/);
        if (match) {
          elements.push(
            <div key={idx} className="flex items-start gap-3 my-2 text-gray-300 leading-relaxed">
              <span className="font-mono text-xs font-bold px-2 py-0.5 rounded bg-ananta-neon/10 text-ananta-neon border border-ananta-neon/30 shrink-0">
                {match[1]}
              </span>
              <span>{renderInlineMarkdown(match[2])}</span>
            </div>
          );
          return;
        }
      }

      // Empty lines
      if (!line.trim()) {
        elements.push(<div key={idx} className="h-3" />);
        return;
      }

      // Standard paragraphs
      elements.push(
        <p key={idx} className="text-gray-300 text-sm sm:text-base leading-relaxed my-3">
          {renderInlineMarkdown(line)}
        </p>
      );
    });

    return elements;
  };

  const renderInlineMarkdown = (str: string) => {
    // Bold **text**
    const parts = str.split(/(\*\*.*?\*\*|`.*?`)/g);
    return parts.map((part, i) => {
      if (part.startsWith('**') && part.endsWith('**')) {
        return <strong key={i} className="text-white font-bold">{part.slice(2, -2)}</strong>;
      }
      if (part.startsWith('`') && part.endsWith('`')) {
        return <code key={i} className="px-1.5 py-0.5 rounded bg-black/60 border border-ananta-border font-mono text-xs text-ananta-neon">{part.slice(1, -1)}</code>;
      }
      return part;
    });
  };

  return (
    <main className="min-h-screen bg-ananta-bg pt-20 pb-24 px-[5vw] text-ananta-text relative">
      {/* Background Cyber Tech Grid */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#00e5ff05_1px,transparent_1px),linear-gradient(to_bottom,#00e5ff05_1px,transparent_1px)] bg-[size:3rem_3rem] pointer-events-none -z-10" />

      {/* Copy Toast */}
      {copiedToast && (
        <div className="fixed bottom-8 right-8 z-[999] bg-[#0a0f18] border border-ananta-neon text-ananta-neon px-5 py-3 rounded shadow-[0_0_20px_rgba(0,229,255,0.4)] font-mono text-xs uppercase flex items-center gap-2 animate-fade-in">
          <Check className="w-4 h-4" />
          <span>{ui.linkCopied}</span>
        </div>
      )}

      {/* VIEW 1: SINGLE ARTICLE READER MODE */}
      {activePost ? (
        <div className="max-w-4xl mx-auto animate-fade-in">
          {/* Top Return & Action Bar */}
          <div className="flex flex-wrap items-center justify-between gap-4 mb-8 pb-4 border-b border-ananta-border">
            <button
              onClick={backToList}
              className="flex items-center gap-2 font-mono text-xs font-bold uppercase tracking-wider text-ananta-neon hover:text-white transition-colors cursor-pointer"
            >
              <ArrowLeft className="w-4 h-4" />
              <span>{ui.backToList}</span>
            </button>

            <div className="flex items-center gap-3">
              <button
                onClick={(e) => handleToggleLike(activePost.id, e)}
                className={`flex items-center gap-2 px-3 py-1.5 rounded font-mono text-xs tracking-wider border transition-all cursor-pointer ${
                  likedPosts[activePost.id]
                    ? 'bg-pink-500/20 border-pink-500 text-pink-400 shadow-[0_0_12px_rgba(236,72,153,0.3)]'
                    : 'bg-[#0e131d] border-ananta-border text-ananta-muted hover:text-pink-400 hover:border-pink-500/50'
                }`}
              >
                <Heart className={`w-3.5 h-3.5 ${likedPosts[activePost.id] ? 'fill-pink-500' : ''}`} />
                <span>{activePost.initialLikes}</span>
              </button>

              <button
                onClick={copyShareLink}
                className="flex items-center gap-1.5 px-3 py-1.5 rounded bg-[#0e131d] border border-ananta-border font-mono text-xs text-ananta-muted hover:text-ananta-neon hover:border-ananta-neon/40 transition-colors cursor-pointer"
              >
                <Share2 className="w-3.5 h-3.5" />
                <span>{ui.share}</span>
              </button>
            </div>
          </div>

          {/* Article Header */}
          <header className="mb-10">
            <div className="flex flex-wrap items-center gap-2.5 mb-4 font-mono text-xs">
              <span className="px-2.5 py-1 rounded bg-ananta-neon/15 text-ananta-neon border border-ananta-neon/30 font-bold uppercase tracking-wider">
                {activePost.categoryLabel[lang] || activePost.categoryLabel.EN || activePost.category}
              </span>
              <span className="text-ananta-muted">·</span>
              <span className="text-ananta-muted flex items-center gap-1">
                <Calendar className="w-3.5 h-3.5" />
                {activePost.date}
              </span>
              <span className="text-ananta-muted">·</span>
              <span className="text-ananta-muted flex items-center gap-1">
                <Clock className="w-3.5 h-3.5" />
                {activePost.readTimeMin} {ui.minRead}
              </span>
            </div>

            <h1 className="font-display text-3xl sm:text-5xl text-white tracking-wide leading-[1.2] mb-6">
              {activePost.title[lang] || activePost.title.EN || activePost.title.CN}
            </h1>

            {/* Author Profile Banner */}
            <div className="flex items-center justify-between p-4 rounded bg-[#0b0f17] border border-ananta-border">
              <div className="flex items-center gap-3.5">
                <div className="w-12 h-12 rounded-full border border-ananta-neon/40 overflow-hidden bg-[#151c28] p-1 flex items-center justify-center">
                  <img src={activePost.author.avatar} alt="Author" className="w-full h-full object-contain" referrerPolicy="no-referrer" />
                </div>
                <div>
                  <div className="flex items-center gap-2">
                    <span className="font-display text-base text-white tracking-wider">{activePost.author.name}</span>
                    <span className="font-mono text-[0.65rem] px-2 py-0.5 rounded bg-ananta-neon2/20 text-ananta-neon2 border border-ananta-neon2/40 uppercase">
                      {ui.authorTag}
                    </span>
                  </div>
                  <p className="font-mono text-xs text-ananta-muted mt-0.5">
                    {activePost.author.role[lang] || activePost.author.role.EN} · {activePost.author.handle}
                  </p>
                </div>
              </div>

              <div className="hidden sm:flex items-center gap-4 text-xs font-mono text-ananta-muted">
                <span className="flex items-center gap-1">
                  <Eye className="w-4 h-4 text-ananta-neon" />
                  {activePost.initialViews + 1}
                </span>
                <span className="flex items-center gap-1">
                  <Heart className="w-4 h-4 text-pink-400" />
                  {activePost.initialLikes}
                </span>
              </div>
            </div>
          </header>

          {/* Featured Cover Image */}
          {activePost.coverImage && (
            <div className="mb-10 rounded-lg overflow-hidden border border-ananta-border shadow-[0_0_30px_rgba(0,0,0,0.5)]">
              <img 
                src={activePost.coverImage} 
                alt="Cover" 
                className="w-full max-h-[440px] object-cover" 
                referrerPolicy="no-referrer" 
              />
            </div>
          )}

          {/* Article Body */}
          <article className="prose prose-invert max-w-none mb-16 text-ananta-text">
            {renderMarkdown(activePost.content[lang] || activePost.content.CN || activePost.content.EN)}
          </article>

          {/* Tags */}
          <div className="flex flex-wrap items-center gap-2 mb-12 pt-6 border-t border-ananta-border">
            <span className="font-mono text-xs text-ananta-muted flex items-center gap-1.5 mr-2">
              <Tag className="w-3.5 h-3.5 text-ananta-neon" />
              {ui.tagsLabel}
            </span>
            {activePost.tags.map(tag => (
              <span 
                key={tag} 
                className="font-mono text-xs px-3 py-1 rounded bg-[#0b0f17] border border-ananta-border text-ananta-muted"
              >
                #{tag}
              </span>
            ))}
          </div>

          {/* Pure Like & Appreciation Section (No Comments) */}
          <section className="p-8 sm:p-10 rounded-xl bg-[#0a0e16] border border-ananta-border/80 shadow-[0_0_30px_rgba(0,0,0,0.6)] relative overflow-hidden text-center">
            <div className="absolute -top-24 left-1/2 -translate-x-1/2 w-96 h-48 bg-pink-500/10 rounded-full blur-3xl pointer-events-none" />
            <div className="relative z-10 max-w-lg mx-auto flex flex-col items-center">
              <div className="font-mono text-xs text-ananta-neon tracking-[0.2em] uppercase mb-3 flex items-center gap-2">
                <Sparkles className="w-3.5 h-3.5" />
                <span>{ui.readerAppreciation}</span>
              </div>
              
              <h3 className="font-display text-2xl text-white tracking-wide mb-2">
                {ui.enjoyedArticle}
              </h3>
              <p className="text-gray-400 text-xs sm:text-sm leading-relaxed mb-6 font-sans">
                {ui.likeDesc}
              </p>

              {/* Big Interactive Like Button */}
              <button
                onClick={(e) => handleToggleLike(activePost.id, e)}
                className={`group relative flex items-center justify-center gap-3 px-8 py-3.5 rounded-full font-mono text-sm tracking-wider font-bold transition-all duration-300 cursor-pointer shadow-lg active:scale-95 ${
                  likedPosts[activePost.id]
                    ? 'bg-gradient-to-r from-pink-500 to-rose-600 text-white shadow-[0_0_25px_rgba(236,72,153,0.5)] border border-pink-400'
                    : 'bg-[#121824] hover:bg-pink-500/20 text-gray-300 hover:text-pink-300 border border-ananta-border hover:border-pink-500/60 shadow-[0_0_15px_rgba(0,0,0,0.5)]'
                }`}
              >
                <Heart 
                  className={`w-5 h-5 transition-transform duration-300 group-hover:scale-125 ${
                    likedPosts[activePost.id] ? 'fill-white text-white animate-bounce' : 'text-pink-400'
                  }`} 
                />
                <span>
                  {likedPosts[activePost.id] ? ui.liked : ui.likePost}
                </span>
                <span className="px-2 py-0.5 rounded-full bg-black/40 text-xs font-mono border border-white/20">
                  {activePost.initialLikes}
                </span>
              </button>

              {/* Secondary Navigation & Share */}
              <div className="flex items-center gap-4 mt-8 pt-6 border-t border-ananta-border/40 w-full justify-center">
                <button
                  onClick={copyShareLink}
                  className="flex items-center gap-1.5 px-4 py-2 rounded bg-[#0f141f] border border-ananta-border hover:border-ananta-neon/50 text-ananta-muted hover:text-ananta-neon font-mono text-xs transition-colors cursor-pointer"
                >
                  <Share2 className="w-3.5 h-3.5" />
                  <span>{ui.share}</span>
                </button>
                <button
                  onClick={backToList}
                  className="flex items-center gap-1.5 px-4 py-2 rounded bg-[#0f141f] border border-ananta-border hover:border-white/50 text-ananta-muted hover:text-white font-mono text-xs transition-colors cursor-pointer"
                >
                  <ArrowLeft className="w-3.5 h-3.5" />
                  <span>{ui.backToList}</span>
                </button>
              </div>
            </div>
          </section>
        </div>
      ) : (
        /* VIEW 2: BLOG INDEX / HERO / ARTICLE GRID */
        <div className="max-w-7xl mx-auto">
          {/* Main Top Header */}
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12 pb-8 border-b border-ananta-border">
            <div>
              <div className="flex items-center gap-2 font-mono text-xs text-ananta-neon tracking-[0.2em] uppercase mb-2">
                <span className="w-2 h-2 rounded-full bg-ananta-neon animate-ping"></span>
                <span>{ui.devlogIntel}</span>
              </div>
              <h1 className="font-display text-4xl sm:text-6xl text-white tracking-wider">
                {ui.blogHeading}
              </h1>
              <p className="text-ananta-muted text-xs sm:text-sm max-w-2xl mt-2 leading-relaxed">
                {ui.blogSubheading}
              </p>
            </div>
          </div>

          {/* Author Profile Highlight Bar */}
          <div className="mb-10 p-6 rounded-lg bg-[#0b0f17] border border-ananta-border relative overflow-hidden">
            <div className="absolute top-0 right-0 w-64 h-64 bg-ananta-neon/5 rounded-full blur-3xl pointer-events-none" />
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 relative z-10">
              <div className="flex items-center gap-4">
                <div className="w-16 h-16 rounded-full border-2 border-ananta-neon p-1 bg-[#121824] shrink-0">
                  <img src="https://www.anantagame.com/pc/gw/20260811115527/assets/icon-studio_68622482.svg" alt="Captain" className="w-full h-full object-contain" referrerPolicy="no-referrer" />
                </div>
                <div>
                  <div className="flex items-center gap-2">
                    <h2 className="font-display text-xl text-white tracking-wider">Captain Alex // {ui.specialAgent}</h2>
                    <span className="px-2 py-0.5 rounded bg-ananta-neon/15 border border-ananta-neon/40 font-mono text-[0.65rem] text-ananta-neon font-bold uppercase">
                      {ui.verified}
                    </span>
                  </div>
                  <p className="text-gray-400 text-xs mt-1 max-w-xl leading-relaxed">
                    {ui.authorBio}
                  </p>
                </div>
              </div>

              {/* Quick Stats */}
              <div className="flex items-center gap-6 border-t md:border-t-0 md:border-l border-ananta-border/60 pt-4 md:pt-0 md:pl-6">
                <div>
                  <div className="font-mono text-lg font-bold text-white">{posts.length}</div>
                  <div className="font-mono text-[0.65rem] text-ananta-muted uppercase">{ui.articlesStat}</div>
                </div>
                <div>
                  <div className="font-mono text-lg font-bold text-ananta-neon">17.2K+</div>
                  <div className="font-mono text-[0.65rem] text-ananta-muted uppercase">{ui.readsStat}</div>
                </div>
                <div>
                  <div className="font-mono text-lg font-bold text-pink-400">3.8K+</div>
                  <div className="font-mono text-[0.65rem] text-ananta-muted uppercase">{ui.likesStat}</div>
                </div>
              </div>
            </div>
          </div>

          {/* Search, Categories & Filter Controls */}
          <div className="space-y-4 mb-10">
            {/* Category Pills & Search */}
            <div className="flex flex-col lg:flex-row items-stretch lg:items-center justify-between gap-4">
              {/* Category selector */}
              <div className="flex flex-wrap items-center gap-2">
                {categoriesList.map(cat => (
                  <button
                    key={cat.id}
                    onClick={() => {
                      setSelectedCategory(cat.id);
                      setSelectedTag(null);
                    }}
                    className={`px-4 py-2 rounded font-mono text-xs font-bold tracking-wider uppercase transition-all cursor-pointer ${
                      selectedCategory === cat.id && !selectedTag
                        ? 'bg-ananta-neon text-black shadow-[0_0_12px_rgba(0,229,255,0.4)]'
                        : 'bg-[#0c1017] border border-ananta-border text-ananta-muted hover:text-white hover:border-ananta-neon/40'
                    }`}
                  >
                    {cat.label}
                  </button>
                ))}
              </div>

              {/* Search Bar */}
              <div className="relative min-w-[280px]">
                <Search className="w-4 h-4 text-ananta-muted absolute left-3.5 top-1/2 -translate-y-1/2 pointer-events-none" />
                <input
                  type="text"
                  placeholder={ui.searchPlaceholder}
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full pl-10 pr-9 py-2 rounded bg-[#0c1017] border border-ananta-border text-xs text-white font-mono placeholder:text-gray-500 focus:border-ananta-neon focus:outline-none"
                />
                {searchQuery && (
                  <button
                    onClick={() => setSearchQuery('')}
                    className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-white cursor-pointer"
                  >
                    <X className="w-3.5 h-3.5" />
                  </button>
                )}
              </div>
            </div>

            {/* Active Tag Filter Indicator */}
            {selectedTag && (
              <div className="flex items-center gap-2 font-mono text-xs text-ananta-neon bg-ananta-neon/10 border border-ananta-neon/30 px-3 py-1.5 rounded w-fit">
                <Tag className="w-3.5 h-3.5" />
                <span>{ui.filterPrefix} #{selectedTag}</span>
                <button onClick={() => setSelectedTag(null)} className="ml-2 hover:text-white cursor-pointer">
                  <X className="w-3.5 h-3.5" />
                </button>
              </div>
            )}
          </div>

          {/* Articles Grid */}
          {filteredPosts.length === 0 ? (
            <div className="py-20 text-center rounded-lg border border-dashed border-ananta-border bg-[#0a0d14]">
              <Compass className="w-12 h-12 text-ananta-muted mx-auto mb-3 opacity-40" />
              <p className="font-mono text-sm text-ananta-muted">
                {ui.noArticlesFound}
              </p>
              <button
                onClick={() => {
                  setSelectedCategory('all');
                  setSelectedTag(null);
                  setSearchQuery('');
                }}
                className="mt-4 px-4 py-2 rounded border border-ananta-neon/40 text-ananta-neon font-mono text-xs uppercase hover:bg-ananta-neon/10 transition-colors cursor-pointer"
              >
                {ui.clearFilters}
              </button>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredPosts.map(post => (
                <div
                  key={post.id}
                  onClick={() => openPost(post.id)}
                  className="group flex flex-col justify-between rounded-lg bg-[#0b0f17] border border-ananta-border overflow-hidden hover:border-ananta-neon/70 transition-all duration-300 hover:shadow-[0_0_25px_rgba(0,229,255,0.15)] cursor-pointer"
                >
                  <div>
                    {/* Card Cover */}
                    <div className="relative aspect-[16/9] w-full overflow-hidden bg-black">
                      <img
                        src={post.coverImage}
                        alt="Blog Cover"
                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                        referrerPolicy="no-referrer"
                      />
                      <div className="absolute top-3 left-3">
                        <span className="px-2.5 py-1 rounded bg-black/80 backdrop-blur-md text-ananta-neon border border-ananta-neon/40 font-mono text-[0.65rem] font-bold uppercase tracking-wider">
                          {post.categoryLabel[lang] || post.categoryLabel.EN || post.category}
                        </span>
                      </div>
                      {post.featured && (
                        <div className="absolute top-3 right-3">
                          <span className="flex items-center gap-1 px-2 py-0.5 rounded bg-pink-500 text-white font-mono text-[0.65rem] font-bold uppercase shadow-lg">
                            <Flame className="w-3 h-3" /> FEATURED
                          </span>
                        </div>
                      )}
                    </div>

                    {/* Card Content */}
                    <div className="p-5">
                      <div className="flex items-center gap-3 font-mono text-[0.7rem] text-ananta-muted mb-2.5">
                        <span>{post.date}</span>
                        <span>·</span>
                        <span className="flex items-center gap-1">
                          <Clock className="w-3 h-3" />
                          {post.readTimeMin} {ui.minRead}
                        </span>
                      </div>

                      <h3 className="font-display text-lg text-white group-hover:text-ananta-neon transition-colors line-clamp-2 leading-snug mb-3">
                        {post.title[lang] || post.title.EN || post.title.CN}
                      </h3>

                      <p className="text-gray-400 text-xs line-clamp-3 leading-relaxed mb-4">
                        {post.summary[lang] || post.summary.EN || post.summary.CN}
                      </p>

                      {/* Tag list */}
                      <div className="flex flex-wrap gap-1.5 mb-2">
                        {post.tags.slice(0, 3).map(tag => (
                          <span
                            key={tag}
                            onClick={(e) => {
                              e.stopPropagation();
                              setSelectedTag(tag);
                            }}
                            className="font-mono text-[0.65rem] px-2 py-0.5 rounded bg-[#101622] text-ananta-muted hover:text-ananta-neon hover:border-ananta-neon/40 border border-ananta-border/40 transition-colors"
                          >
                            #{tag}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>

                  {/* Card Bottom Meta */}
                  <div className="p-5 pt-0 border-t border-ananta-border/30 mt-2 flex items-center justify-between text-xs font-mono text-ananta-muted">
                    <div className="flex items-center gap-3">
                      <span className="flex items-center gap-1">
                        <Eye className="w-3.5 h-3.5 text-ananta-neon" />
                        {post.initialViews}
                      </span>
                      <button
                        onClick={(e) => handleToggleLike(post.id, e)}
                        className={`flex items-center gap-1 hover:text-pink-400 transition-colors ${
                          likedPosts[post.id] ? 'text-pink-400' : ''
                        }`}
                      >
                        <Heart className={`w-3.5 h-3.5 ${likedPosts[post.id] ? 'fill-pink-500 text-pink-500' : ''}`} />
                        <span>{post.initialLikes}</span>
                      </button>
                    </div>

                    <span className="flex items-center gap-1 text-ananta-neon group-hover:translate-x-1 transition-transform font-bold">
                      {ui.readMore} <ChevronRight className="w-3.5 h-3.5" />
                    </span>
                  </div>
                </div>
              ))}
            </div>
          )}

          {/* Tag Cloud Bar */}
          <div className="mt-16 p-6 rounded-lg bg-[#0a0d14] border border-ananta-border">
            <h4 className="font-mono text-xs tracking-wider uppercase text-ananta-muted mb-4 flex items-center gap-2">
              <Tag className="w-3.5 h-3.5 text-ananta-neon" />
              <span>{ui.allHotTags}</span>
            </h4>
            <div className="flex flex-wrap gap-2">
              {allTags.map(tag => (
                <button
                  key={tag}
                  onClick={() => setSelectedTag(tag === selectedTag ? null : tag)}
                  className={`px-3 py-1 rounded font-mono text-xs transition-colors cursor-pointer ${
                    selectedTag === tag
                      ? 'bg-ananta-neon text-black font-bold'
                      : 'bg-[#0f141f] border border-ananta-border text-ananta-muted hover:text-white hover:border-ananta-neon/40'
                  }`}
                >
                  #{tag}
                </button>
              ))}
            </div>
          </div>
        </div>
      )}
    </main>
  );
}
