import React, { useState, useEffect } from 'react';
import { LanguageProvider } from './context/LanguageContext';
import { Navbar, Footer, AdSlot } from './components/Shared';
import { Hero } from './components/Hero';
import { QuickNav } from './components/QuickNav';
import { NewsFeed } from './components/NewsFeed';
import { DeepDive } from './components/DeepDive';
import { Characters } from './components/Characters';
import { MapSection } from './components/MapSection';
import { CodesSection, CompareSection, TrackerSection } from './components/Database';
import { FAQSection } from './components/FAQ';
import { SystemRequirements } from './components/SystemRequirements';
import { CharacterPage } from './components/CharacterPage';
import { ToolkitSection } from './components/Toolkit';
import { LegalPage } from './components/Legal';
import { NewsCenterPage, NewsArticlePage } from './components/NewsPage';
import { BlogPage } from './components/BlogPage';
import { VotingWidget } from './components/VotingWidget';
import { SEOManager } from './components/SEOManager';

function Home() {
  return (
    <>
      <Hero />
      <QuickNav />
      
      {/* Structural layout representing desktop sticky sidebar side-by-side with homepage modules */}
      <div className="flex flex-col lg:flex-row gap-8 items-start relative max-w-[100vw]">
        {/* Left main flow (the original homepage blocks) */}
        <div className="flex-1 w-full lg:w-[73%] xl:w-[75%] min-w-0">
          <NewsFeed />
          
          {/* Mobile middle section independent card (hidden on PC desktop) */}
          <div className="lg:hidden px-[5vw] pb-10 bg-ananta-bg">
            <VotingWidget />
          </div>

          <DeepDive />
          <ToolkitSection />
          <Characters />
          <MapSection />
          <CodesSection />
          <CompareSection />
          <FAQSection />
          <SystemRequirements />
          <TrackerSection />
          <AdSlot />
        </div>

        {/* Right Sticky Column (visible on PC desktop, hidden on Mobile) */}
        <div className="hidden lg:block lg:w-[27%] xl:w-[25%] lg:sticky lg:top-[5rem] self-start shrink-0 pr-[5vw] pt-20">
          <VotingWidget />
        </div>
      </div>
    </>
  );
}

export default function App() {
  const getRouteState = () => {
    const hash = window.location.hash;
    const path = window.location.pathname;
    
    if (hash && hash !== '#') {
      return hash;
    }
    
    if (path && path !== '/') {
      if (path.startsWith('/blog')) {
        return '#' + path;
      }
      if (path.startsWith('/news/article/')) {
        return '#' + path;
      }
      if (path === '/news/all' || path === '/news/all/') {
        return '#/news/all';
      }
      if (path.startsWith('/wiki/characters/')) {
        return '#' + path;
      }
      const legalPaths = ['/privacy', '/disclaimer', '/terms', '/about'];
      if (legalPaths.includes(path)) {
        return '#' + path.substring(1);
      }
      const legalPathsTrailing = ['/privacy/', '/disclaimer/', '/terms/', '/about/'];
      if (legalPathsTrailing.includes(path)) {
        return '#' + path.substring(1).replace(/\/$/, '');
      }
    }
    
    return '#';
  };

  const [currentHash, setCurrentHash] = useState(getRouteState());

  useEffect(() => {
    // Intercept clicks on local standard links to maintain single-page application speed
    const handleLinkClick = (e: MouseEvent) => {
      let target = e.target as HTMLElement | null;
      while (target && target.tagName !== 'A') {
        target = target.parentElement;
      }
      if (target && target.tagName === 'A') {
        const href = target.getAttribute('href');
        if (href && href.startsWith('/') && !href.startsWith('//')) {
          e.preventDefault();
          window.history.pushState(null, '', href);
          window.dispatchEvent(new Event('popstate'));
        }
      }
    };
    document.addEventListener('click', handleLinkClick);
    return () => document.removeEventListener('click', handleLinkClick);
  }, []);

  useEffect(() => {
    const handleNavigation = () => {
      const newHash = getRouteState();
      const wasWiki = currentHash.startsWith('#/wiki/characters/');
      const isWiki = newHash.startsWith('#/wiki/characters/');
      const wasNews = currentHash.startsWith('#/news/');
      const isNews = newHash.startsWith('#/news/');
      const wasBlog = currentHash.startsWith('#/blog') || currentHash.startsWith('#blog');
      const isBlog = newHash.startsWith('#/blog') || newHash.startsWith('#blog');
      
      const legalHashes = ['#privacy', '#disclaimer', '#terms', '#about'];
      const wasLegal = legalHashes.includes(currentHash);
      const isLegal = legalHashes.includes(newHash);
      
      // Trigger a React state change and re-render if transitioning to/from special pages
      if (isWiki || wasWiki || isLegal || wasLegal || isNews || wasNews || isBlog || wasBlog || newHash !== currentHash) {
        setCurrentHash(newHash);
      }

      if (isWiki || isLegal || isNews || isBlog) {
        // Scroll to top
        window.scrollTo(0, 0);
      } else if (wasWiki || wasLegal || wasNews || wasBlog) {
        // Leaving special sub-page to a home page section:
        setTimeout(() => {
          const hash = window.location.hash;
          if (hash && hash !== '#') {
            const elementId = hash.replace('#', '');
            const element = document.getElementById(elementId);
            if (element) {
              element.scrollIntoView({ behavior: 'smooth' });
            } else {
              window.scrollTo(0, 0);
            }
          } else {
            window.scrollTo(0, 0);
          }
        }, 100);
      }
    };
    
    window.addEventListener('hashchange', handleNavigation);
    window.addEventListener('popstate', handleNavigation);
    return () => {
      window.removeEventListener('hashchange', handleNavigation);
      window.removeEventListener('popstate', handleNavigation);
    };
  }, [currentHash]);

  const renderContent = () => {
    if (currentHash.startsWith('#/blog') || currentHash.startsWith('#blog') || currentHash === '/blog') {
      const postId = currentHash.includes('/post/') ? currentHash.split('/post/')[1] : undefined;
      return (
        <BlogPage 
          initialPostId={postId}
          onNavigateHome={() => {
            window.history.pushState(null, '', '/');
            window.dispatchEvent(new Event('popstate'));
          }}
        />
      );
    }
    if (currentHash.startsWith('#/news/article/')) {
      const idxStr = currentHash.replace('#/news/article/', '');
      return <NewsArticlePage articleIndex={parseInt(idxStr) || 0} />;
    }
    if (currentHash === '#/news/all') {
      return <NewsCenterPage />;
    }
    if (currentHash.startsWith('#/wiki/characters/')) {
      const charName = currentHash.replace('#/wiki/characters/', '');
      return <CharacterPage characterId={charName} />;
    }
    if (['#privacy', '#disclaimer', '#terms', '#about'].includes(currentHash)) {
      return (
        <LegalPage 
          initialTab={currentHash} 
          onBack={() => {
            window.history.pushState(null, '', '/');
            window.dispatchEvent(new Event('popstate'));
          }} 
        />
      );
    }
    return <Home />;
  };

  return (
    <LanguageProvider>
      <SEOManager currentHash={currentHash} />
      <div className="min-h-screen">
        <Navbar />
        {renderContent()}
        <Footer />
      </div>
    </LanguageProvider>
  );
}
