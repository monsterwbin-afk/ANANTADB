import React, { useEffect } from 'react';
import { useLanguage } from '../context/LanguageContext';

interface SEOManagerProps {
  currentHash: string;
}

export function SEOManager({ currentHash }: SEOManagerProps) {
  const { lang, t } = useLanguage();

  useEffect(() => {
    let title = 'Ananta Database & Fan Guide – Nova City Wiki, Codes & Tips';
    let description = 'Your ultimate unofficial companion wiki and technical toolkit for Ananta (Project Mugen) by NetEase Games. Live stamina calculators, character profiles, codes, and map guides.';

    const newsData = (typeof t('newsData') === 'object' ? t('newsData') : []) as any[];
    const charData = (typeof t('charactersData') === 'object' ? t('charactersData') : []) as any[];

    // Localized Base Default metadata depending on lang
    const defaultMeta: Record<string, { title: string; desc: string }> = {
      EN: {
        title: 'Ananta Database & Fan Guide – Nova City Wiki, Codes & Tips',
        desc: 'Your ultimate unofficial companion wiki and technical toolkit for Ananta (Project Mugen) by NetEase Games. Live stamina calculators, character profiles, codes, and map guides.'
      },
      CN: {
        title: 'Ananta 数据库 – 《代号：无限大》玩家 Wiki 攻略、兑换码与实用工具箱',
        desc: '《代号：无限大》(Ananta) 官方非正式玩家攻略和技术工具箱，提供角色技能图鉴、体力计算器、每周进度追踪、兑换码及系统配置查询。'
      },
      TW: {
        title: 'Ananta 數據庫 – 《代號：無限大》玩家 Wiki 攻略、兌換碼與實用工具箱',
        desc: '《代號：無限大》(Ananta) 官方非正式玩家攻略和技術工具箱，提供角色技能圖鑑、體力計算器、每周進度追蹤、兌換碼及系統配置查詢。'
      },
      JP: {
        title: 'Ananta データベース & 攻略Wiki – 新星市コード・キャラ攻略・スタミナ計算',
        desc: 'NetEase Games開発の都市型オープンワールドRPG『Ananta（旧Project Mugen）』の非公式ファン攻略データベース。スタミナ計算機や交換コード、キャラWiki。'
      },
      KR: {
        title: 'Ananta 데이터베이스 & 팬 가이드 – 노바 시티 위키, 캐릭터 정보, 리딤 코드',
        desc: "넷이즈 게임즈의 도시형 오픈월드 RPG 'Ananta'의 비공식 팬 가이드 및 유틸리티 툴킷. 캐릭터 위키, 스태미나 계산기, 최신 리딤 코드 제공."
      },
      DE: {
        title: 'Ananta Datenbank & Fan-Guide – Nova City Wiki, Codes & Tools',
        desc: 'Ihr ultimatives inoffizielles Wiki- und Toolkit für Ananta (Project Mugen) von NetEase. Live-Stamina-Rechner, Charakterprofile, Codes und Karte.'
      },
      FR: {
        title: 'Ananta Base de Données & Guide – Wiki Nova City, Codes & Outils',
        desc: 'Votre guide et outil non-officiel ultime pour Ananta (Project Mugen) par NetEase Games. Calculateur d\'endurance, fiches de personnages, codes et cartes.'
      },
      IT: {
        title: 'Ananta Database & Guida – Wiki Nova City, Codici & Strumenti',
        desc: 'La tua guida e toolkit non ufficiale per Ananta (Project Mugen) di NetEase. Calcolatore di energia, profili dei personaggi, codici e mappe.'
      },
      RU: {
        title: 'Ananta База Данных & Фан-Гайд – Вики Нова-Сити, Коды и Инструменты',
        desc: 'Ваша база данных и технический фан-инструментарий для Ananta (Project Mugen) от NetEase Games. Калькулятор выносливости, профили персонажей, коды и карты.'
      }
    };

    const base = defaultMeta[lang] || defaultMeta.EN;
    title = base.title;
    description = base.desc;

    // Route-specific metadata adjustments
    if (currentHash === '#/news/all') {
      const titles: Record<string, string> = {
        EN: 'Latest Intel & News Updates Center',
        CN: '最新情报与更新中心',
        TW: '最新情報與更新中心',
        JP: '最新ニュース・アップデート一覧',
        KR: '최신 뉴스 및 업데이트 센터',
        DE: 'Neuigkeiten & Updates-Center',
        FR: 'Actualités & Centre de Mises à jour',
        IT: 'Ultime Novità e Centro Aggiornamenti',
        RU: 'Последние Новости и Обновления'
      };
      const descs: Record<string, string> = {
        EN: 'Stay updated with the latest active developer logs, gameplay trailers, global technical tests, and release announcements for Ananta.',
        CN: '浏览有关《代号：无限大》(Ananta) 的最新开发实机演示、技术测试及官方公告，第一时间掌握新星城的动态。',
        TW: '瀏覽有關《代號：無限大》(Ananta) 的最新開發實機演示、技術測試及官方公告，第一時間掌握新星城的動態。',
        JP: 'Anantaに関する最新デベロッパーログ、プレイ動画、グローバルテクニカルテスト情報、リリース告知をお知らせします。',
        KR: 'Ananta에 관한 최신 개발자 피드백, 실기 플레이 영상, 글로벌 테크니컬 테스트 모집 일정 및 공식 발표를 한눈에 확인하세요.',
        DE: 'Bleiben Sie auf dem Laufenden mit den neuesten Entwickler-Logs, Gameplay-Trailern und globalen Ankündigungen für Ananta.',
        FR: 'Restez informé des derniers journaux de développement, bandes-annonces et annonces mondiales pour Ananta.',
        IT: 'Resta aggiornato con gli ultimi log degli sviluppatori, trailer di gioco e annunci globali per Ananta.',
        RU: 'Будьте в курсе последних дневников разработчиков, игровых трейлеров и глобальных анонсов Ananta.'
      };
      title = `${titles[lang] || titles.EN} | ANANTADB`;
      description = descs[lang] || descs.EN;
    } else if (currentHash.startsWith('#/news/article/')) {
      const idxStr = currentHash.replace('#/news/article/', '');
      const idx = parseInt(idxStr, 10);
      if (!isNaN(idx) && newsData[idx]) {
        const art = newsData[idx];
        title = `${art.title} | Ananta News`;
        description = art.desc || description;
      }
    } else if (currentHash.startsWith('#/wiki/characters/')) {
      const charId = currentHash.replace('#/wiki/characters/', '');
      const charIndices: Record<string, number> = { taffy: 0, richie: 1, lykaia: 2, captain: 3 };
      const charIdx = charIndices[charId];
      if (charIdx !== undefined && charData[charIdx]) {
        const char = charData[charIdx];
        const name = char.name || charId.toUpperCase();
        const role = char.role || '';
        
        const titles: Record<string, string> = {
          EN: `${name} Build, Skills & Lore Profile Guide`,
          CN: `${name} 角色技能图鉴、战斗连招与推荐搭配攻略`,
          TW: `${name} 角色技能圖鑑、戰鬥連招與推薦搭配攻略`,
          JP: `${name} のスキル・ビルド・声優・キャラクター評価`,
          KR: `${name} 스킬 조합, 추천 세팅, 성우 및 프로필 가이드`,
          DE: `${name} – Leitfaden zu Builds, Fähigkeiten & Hintergrund`,
          FR: `${name} – Guide de build, compétences & histoire`,
          IT: `${name} – Guida a build, abilità & lore`,
          RU: `${name} – Гайд по сборке, навыкам и истории`
        };

        const descs: Record<string, string> = {
          EN: `Deep dive into character ${name} (${role}). Get comprehensive data on special active skills, element tags, weapon compatibility, and lore bios.`,
          CN: `深度解析新星城探测员 ${name} (${role})。提供其特殊主动技能、星盘加点、战术定位、武器相性及详细背景故事档案。`,
          TW: `深度解析新星城探測員 ${name} (${role})。提供其特殊主動技能、星盤加點、戰術定位、武器相性及詳細背景故事檔案。`,
          JP: `新星市の調査員 ${name} (${role}) のキャラクターデータベース。スキルの倍率、星座システム、おすすめ武器、プロフィール詳細を解説。`,
          KR: `노바 시티 요원 ${name} (${role}) 의 종합 정보 데이터베이스. 고유 액티브 스킬, 추천 시너지 시트, 성우 정보 및 세부 스토리를 확인하세요.`,
          DE: `Erfahren Sie alles über Agent ${name} (${role}). Analysen zu Fertigkeiten, Team-Synergien und Hintergrundgeschichten.`,
          FR: `Découvrez en détail l\'agent ${name} (${role}). Analyse des compétences, des synergies d\'équipe et de sa biographie.`,
          IT: `Analisi approfondita dell\'agente ${name} (${role}). Scopri abilità, sinergie di squadra e biografia.`,
          RU: `Подробный разбор агента ${name} (${role}). Сборки, синергия отрядов, механики умений и биография.`
        };

        title = `${titles[lang] || titles.EN} | ANANTADB`;
        description = descs[lang] || descs.EN;
      }
    } else if (['#privacy', '#disclaimer', '#terms', '#about'].includes(currentHash)) {
      const titles: Record<string, string> = {
        '#privacy': { EN: 'Privacy Policy', CN: '隐私政策', TW: '隱私政策', JP: 'プライバシーポリシー', KR: '개인정보처리방침', DE: 'Datenschutzerklärung', FR: 'Politique de Confidentialité', IT: 'Informativa sulla Privacy', RU: 'Политика Конфиденциальности' },
        '#disclaimer': { EN: 'Disclaimer & Terms', CN: '免责声明与服务条款', TW: '免責聲明與服務條款', JP: '免責事項・利用規約', KR: '면책조항 및 이용약관', DE: 'Haftungsausschluss', FR: 'Clause de non-responsabilité', IT: 'Termini e Condizioni', RU: 'Отказ от ответственности' },
        '#terms': { EN: 'Terms of Service', CN: '服务协议', TW: '服務協議', JP: '利用規約', KR: '이용약관', DE: 'Nutzungsbedingungen', FR: 'Conditions d\'utilisation', IT: 'Termini di Servizio', RU: 'Условия использования' },
        '#about': { EN: 'About US & Feedback', CN: '关于我们与反馈通道', TW: '關於我們與反饋通道', JP: '当サイトについて・お問い合わせ', KR: '소개 및 피드백', DE: 'Über uns & Kontakt', FR: 'À propos & Contact', IT: 'Chi Siamo & Feedback', RU: 'О нас и Обратная связь' }
      }[currentHash] || { EN: 'Compliance Policy' };

      title = `${titles[lang as keyof typeof titles] || titles.EN} | ANANTADB`;
      description = `Read the official dynamic compliance policies, cookies usage permissions, and publisher transparency disclosures for ANANTADB.COM.`;
    }

    // Apply document updates
    document.title = title;

    // Meta Description Update
    let metaDesc = document.querySelector('meta[name="description"]');
    if (!metaDesc) {
      metaDesc = document.createElement('meta');
      metaDesc.setAttribute('name', 'description');
      document.head.appendChild(metaDesc);
    }
    metaDesc.setAttribute('content', description);

    // Open Graph (OG) Tags Update for Rich Social Sharing Previews
    const updateOrCreateMeta = (attrName: string, attrVal: string, content: string) => {
      let element = document.querySelector(`meta[${attrName}="${attrVal}"]`);
      if (!element) {
        element = document.createElement('meta');
        element.setAttribute(attrName, attrVal);
        document.head.appendChild(element);
      }
      element.setAttribute('content', content);
    };

    updateOrCreateMeta('property', 'og:title', title);
    updateOrCreateMeta('property', 'og:description', description);
    updateOrCreateMeta('property', 'og:type', 'website');
    updateOrCreateMeta('property', 'og:url', window.location.href);
    updateOrCreateMeta('name', 'twitter:title', title);
    updateOrCreateMeta('name', 'twitter:description', description);

  }, [currentHash, lang, t]);

  return null;
}
