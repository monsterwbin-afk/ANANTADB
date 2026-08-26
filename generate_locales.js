import fs from 'fs';

const en = {
  nav: { know: 'Know', news: 'News', characters: 'Characters', map: 'Map', specs: 'Specs', codes: 'Codes' },
  hero: {
    badge: 'Fan Guide Hub · Nova City Database · Updated Weekly',
    t1: 'NOVA', t2: 'CITY', t3: 'AWAITS',
    sub: 'Ananta · Urban Open World RPG · 2026',
    desc: 'Your #1 unofficial guide for Ananta (formerly Project Mugen). Characters, maps, codes, tips, and everything we know about NetEase\\'s most ambitious game yet.',
    days: 'Days', hours: 'Hours', mins: 'Minutes', secs: 'Seconds',
    launch: 'ESTIMATED GLOBAL LAUNCH: Q3 2026 — SEPT 30',
    explore: 'Explore Guide', prereg: 'Pre-Register ↗'
  },
  quicknav: { news: 'Intel & News', chars: 'Characters', map: 'Nova City Map', specs: 'Requirements', codes: 'Codes', compare: 'vs NTE / Genshin', tracker: 'Release Tracker' },
  sections: {
    newsLabel: 'Latest Intel', newsTitle: 'News & Leaks Center', viewAll: 'View All Intel ↗',
    deepdiveLabel: 'Deep Dive', deepdiveTitle: 'Everything We Know',
    charLabel: 'Roster Data', charTitle: 'Confirmed A.C.D. Agents', viewLore: 'View Full Build & Lore',
    mapLabel: 'City Database', mapTitle: 'Nova City — Districts Overview', mapComing: 'NOVA CITY — INTERACTIVE MAP COMING AT LAUNCH', hazard: '⚠ HAZARD ZONE', secure: '■ SECURE ZONE',
    specsLabel: 'Specs Checker', specsTitle: 'Ananta System Requirements', pc: 'PC (Windows)', mobile: 'Mobile (iOS / Android)',
    codesLabel: 'Redemption', codesTitle: 'Active Promo Codes', compareLabel: 'Market', compareTitle: 'Ananta vs The Competition',
    faqLabel: 'F.A.Q', faqTitle: 'Frequently Asked Questions', trackerLabel: 'Timeline', trackerTitle: 'Launch Tracker & Milestones',
    footerDesc: 'Unofficial fan guide for Ananta (Project Mugen). Not affiliated with Naked Rain or NetEase Games. All game assets belong to their respective owners.',
    footerGuides: '// Guides', footerLinks: '// Official Links',
    footerCopyright: '© 2026 ANANTA.GG — Unofficial Fan Site', footerPrivacy: 'Privacy · Disclaimer · Advertise'
  }
};

const cn = {
  nav: { know: '情报', news: '前瞻', characters: '角色', map: '地图', specs: '配置', codes: '兑换码' },
  hero: { badge: '玩家攻略站 · 新星街区数据库 · 每周更新', t1: '新星', t2: '街区', t3: '等待探索', sub: '代号：无限大 (Ananta) · 都市开放世界RPG · 2026', desc: '最全面的《代号：无限大》非官方攻略站。包含角色图鉴、地图探索、兑换码、新手技巧，以及关于网易这款开放世界大作的所有已知情报。', days: '天', hours: '时', mins: '分', secs: '秒', launch: '预计全球公测：2026年Q3 — 9月30日', explore: '探索攻略', prereg: '前往预约 ↗' },
  quicknav: { news: '资讯与前瞻', chars: '档案库', map: '街区地图', specs: '配置需求', codes: '礼包兑换', compare: '竞品对比', tracker: '发售追踪' },
  sections: {
    newsLabel: '最新情报', newsTitle: '新闻与前瞻中心', viewAll: '查看全部情报 ↗',
    deepdiveLabel: '深度解析', deepdiveTitle: '目前已知的所有情报',
    charLabel: '角色档案', charTitle: '已确认的探测员', viewLore: '查看完整背景及出装',
    mapLabel: '城市数据', mapTitle: '新星街区 — 区域概览', mapComing: '交互式地图将在发售时上线', hazard: '⚠ 危险区域', secure: '■ 安全区域',
    specsLabel: '配置检测', specsTitle: '系统配置要求', pc: 'PC 端', mobile: '移动端',
    codesLabel: '福利中心', codesTitle: '最新兑换码', compareLabel: '竞品', compareTitle: '无限大 vs 其他大作',
    faqLabel: '常见问题', faqTitle: '经常被问到的问题', trackerLabel: '时间轴', trackerTitle: '公测进度表',
    footerDesc: '《代号：无限大》非官方粉丝攻略站。与雷火或网易游戏无关。所有游戏素材归版权方所有。',
    footerGuides: '// 快速导航', footerLinks: '// 官方链接',
    footerCopyright: '© 2026 ANANTA.GG — 饭制开发', footerPrivacy: '隐私政策 · 免责声明 · 广告合作'
  }
};

const jp = {
  nav: { know: '情報', news: 'ニュース', characters: 'キャラ', map: 'マップ', specs: '動作環境', codes: 'コード' },
  hero: { badge: 'ファンガイドハブ · ノヴァシティデータベース · 毎週更新', t1: 'ノヴァ', t2: 'シティ', t3: '待機中', sub: 'Ananta · アーバンオープンワールドRPG · 2026', desc: '『Project Mugen（Ananta）』の非公式ガイド。キャラクター、マップ、コード、ヒントなど、最新のオープンワールドRPGのすべてをお届けします。', days: '日', hours: '時間', mins: '分', secs: '秒', launch: 'リリース予定: 2026年第3四半期 — 9月30日', explore: 'ガイドを見る', prereg: '事前登録 ↗' },
  quicknav: { news: 'インテル＆ニュース', chars: 'キャラクター', map: 'ノヴァシティマップ', specs: 'システム要件', codes: 'コード', compare: 'vs NTE / 原神', tracker: 'リリース追跡' },
  sections: {
    newsLabel: '最新情報', newsTitle: 'インテル＆ニュース', viewAll: 'すべて見る ↗',
    deepdiveLabel: '特報', deepdiveTitle: '詳細情報',
    charLabel: '名簿', charTitle: 'エージェント一覧', viewLore: '詳細を表示',
    mapLabel: '都市情報', mapTitle: 'マップとエリア', mapComing: 'インタラクティブマップはリリース時に後悔', hazard: '⚠ 危険ゾーン', secure: '■ 安全ゾーン',
    specsLabel: '動作環境', specsTitle: 'システム要件', pc: 'PC用', mobile: 'スマホ用',
    codesLabel: 'コード', codesTitle: '現在有効なコード', compareLabel: '比較', compareTitle: '他ゲームとの比較',
    faqLabel: 'FAQ', faqTitle: 'よくある質問', trackerLabel: '日程', trackerTitle: 'リリースまでの道のり',
    footerDesc: 'Ananta (Project Mugen)の非公式ファンサイト。NetEase Gamesとは関係ありません。', footerGuides: '// ガイド', footerLinks: '// 公式リンク',
    footerCopyright: '© 2026 ANANTA.GG', footerPrivacy: 'プライバシーポリシー'
  }
};

const kr = {
  nav: { know: '정보', news: '뉴스', characters: '캐릭터', map: '지도', specs: '사양', codes: '코드' },
  hero: { badge: '팬 가이드 허브 · 매주 업데이트', t1: '노바', t2: '시티', t3: '오픈 예정', sub: 'Ananta · 어반 오픈 월드 RPG · 2026', desc: 'Ananta(프로젝트 무겐)를 위한 비공식 가이드. 게임에 대한 모든 것을 알려드립니다.', days: '일', hours: '시간', mins: '분', secs: '초', launch: '예상 글로벌 출시: 2026년 3분기', explore: '가이드 탐색', prereg: '사전 예약 ↗' },
  quicknav: { news: '뉴스', chars: '캐릭터', map: '지도', specs: '사양', codes: '코드', compare: '비교', tracker: '트래커' },
  sections: {
    newsLabel: '최신 정보', newsTitle: '뉴스 센터', viewAll: '모두 보기 ↗',
    deepdiveLabel: '심층 분석', deepdiveTitle: '모든 정보', charLabel: '캐릭터', charTitle: 'A.C.D. 요원', viewLore: '자세히 보기',
    mapLabel: '도시 정보', mapTitle: '구역 개요', mapComing: '출시 시 인터랙티브 맵 제공', hazard: '⚠ 위험', secure: '■ 안전',
    specsLabel: '사양', specsTitle: '시스템 요구 사항', pc: 'PC', mobile: '모바일',
    codesLabel: '코드', codesTitle: '최신 코드', compareLabel: '비교', compareTitle: '타 게임 비교',
    faqLabel: 'FAQ', faqTitle: '자주 묻는 질문', trackerLabel: '타임라인', trackerTitle: '출시 일정',
    footerDesc: '비공식 팬 사이트입니다. 넷이즈 게임즈와 무관합니다.', footerGuides: '// 가이드', footerLinks: '// 공식 링크',
    footerCopyright: '© 2026 ANANTA.GG', footerPrivacy: '개인정보 처리방침'
  }
};

const de = {
  nav: { know: 'Wissen', news: 'News', characters: 'Charaktere', map: 'Karte', specs: 'Specs', codes: 'Codes' },
  hero: { badge: 'Fan-Guide-Hub · Wöchentlich aktualisiert', t1: 'NOVA', t2: 'CITY', t3: 'ERWARTET', sub: 'Ananta · Urbanes Open World RPG · 2026', desc: 'Dein inoffizieller #1 Guide für Ananta. Charaktere, Karten, Codes und mehr.', days: 'Tage', hours: 'Stdn', mins: 'Min', secs: 'Sek', launch: 'RELEASE: Q3 2026', explore: 'Entdecken', prereg: 'Vorregistrieren ↗' },
  quicknav: { news: 'News', chars: 'Charaktere', map: 'Karte', specs: 'System', codes: 'Codes', compare: 'Vergleich', tracker: 'Release Tracker' },
  sections: {
    newsLabel: 'Intel', newsTitle: 'Neue Leaks', viewAll: 'Alle ansehen ↗',
    deepdiveLabel: 'Deep Dive', deepdiveTitle: 'Alles was wir wissen', charLabel: 'Kader', charTitle: 'Agenten', viewLore: 'Lore ansehen',
    mapLabel: 'Karte', mapTitle: 'Bezirksübersicht', mapComing: 'KARTE ZUM LAUNCH VERFÜGBAR', hazard: '⚠ GEFAHR', secure: '■ SICHER',
    specsLabel: 'Specs', specsTitle: 'Systemanforderungen', pc: 'PC', mobile: 'Mobile',
    codesLabel: 'Codes', codesTitle: 'Aktive Codes', compareLabel: 'Markt', compareTitle: 'Vergleich',
    faqLabel: 'FAQ', faqTitle: 'Häufige Fragen', trackerLabel: 'Zeitleiste', trackerTitle: 'Meilensteine',
    footerDesc: 'Inoffizielles Fanprojekt. Nicht mit NetEase verbunden.', footerGuides: '// Guides', footerLinks: '// Links',
    footerCopyright: '© 2026 ANANTA.GG', footerPrivacy: 'Datenschutz'
  }
};

const fr = {
  nav: { know: 'Savoir', news: 'News', characters: 'Persos', map: 'Carte', specs: 'Config', codes: 'Codes' },
  hero: { badge: 'Hub Fan · Mis à jour chaque semaine', t1: 'NOVA', t2: 'CITY', t3: 'ATTEND', sub: 'Ananta · RPG en Monde Ouvert · 2026', desc: 'Votre guide non officiel pour Ananta. Personnages, cartes, codes et astuces.', days: 'Jours', hours: 'Heures', mins: 'Min', secs: 'Sec', launch: 'LANCEMENT: T3 2026', explore: 'Explorer', prereg: 'Pré-inscription ↗' },
  quicknav: { news: 'News', chars: 'Personnages', map: 'Carte', specs: 'Système', codes: 'Codes', compare: 'Comparaison', tracker: 'Suivi' },
  sections: {
    newsLabel: 'Intel', newsTitle: 'Dernières Infos', viewAll: 'Voir tout ↗',
    deepdiveLabel: 'Infos', deepdiveTitle: 'Tout ce que l on sait', charLabel: 'Liste', charTitle: 'Agents', viewLore: 'Voir détails',
    mapLabel: 'Carte', mapTitle: 'Les Quartiers', mapComing: 'CARTE DISPO A LA SORTIE', hazard: '⚠ DANGER', secure: '■ SÛR',
    specsLabel: 'Config', specsTitle: 'Configuration', pc: 'PC', mobile: 'Mobile',
    codesLabel: 'Codes', codesTitle: 'Codes actifs', compareLabel: 'Marché', compareTitle: 'Comparaison',
    faqLabel: 'FAQ', faqTitle: 'Questions', trackerLabel: 'Temps', trackerTitle: 'Étapes',
    footerDesc: 'Projet de fan non officiel. Non lié à NetEase.', footerGuides: '// Guides', footerLinks: '// Liens',
    footerCopyright: '© 2026 ANANTA.GG', footerPrivacy: 'Confidentialité'
  }
};

const it = {
  nav: { know: 'Info', news: 'News', characters: 'Eroi', map: 'Mappa', specs: 'Req', codes: 'Codici' },
  hero: { badge: 'Fan Guide Hub · Nova City Database', t1: 'NOVA', t2: 'CITY', t3: 'ATTENDE', sub: 'Ananta · RPG Urbano Open World · 2026', desc: 'La tua guida non ufficiale per Ananta. Personaggi, mappe, codici e tutto ciò che sappiamo.', days: 'Giorni', hours: 'Ore', mins: 'Min', secs: 'Sec', launch: 'LANCIO STIMATO: Q3 2026', explore: 'Esplora', prereg: 'Registrati ↗' },
  quicknav: { news: 'News', chars: 'Personaggi', map: 'Mappa', specs: 'Requisiti', codes: 'Codici', compare: 'Confronto', tracker: 'Tracker' },
  sections: {
    newsLabel: 'Intel', newsTitle: 'Notizie', viewAll: 'Vedi tutto ↗',
    deepdiveLabel: 'Info', deepdiveTitle: 'Tutto ciò che sappiamo', charLabel: 'Eroi', charTitle: 'Agenti', viewLore: 'Dettagli',
    mapLabel: 'Mappa', mapTitle: 'Quartieri', mapComing: 'MAPPA INTERATTIVA AL LANCIO', hazard: '⚠ PERICOLO', secure: '■ SICURO',
    specsLabel: 'Requisiti', specsTitle: 'Requisiti di Sistema', pc: 'PC', mobile: 'Mobile',
    codesLabel: 'Codici', codesTitle: 'Codici Attivi', compareLabel: 'Mercato', compareTitle: 'Confronto',
    faqLabel: 'FAQ', faqTitle: 'Domande Frequenti', trackerLabel: 'Timeline', trackerTitle: 'Traguardi',
    footerDesc: 'Sito dei fan non ufficiale. Nessuna affiliazione con NetEase.', footerGuides: '// Guide', footerLinks: '// Link Ufficiali',
    footerCopyright: '© 2026 ANANTA.GG', footerPrivacy: 'Privacy'
  }
};

const ru = {
  nav: { know: 'Инфо', news: 'Новости', characters: 'Герои', map: 'Карта', specs: 'ПК', codes: 'Коды' },
  hero: { badge: 'Фан-портал · Обновляется еженедельно', t1: 'NOVA', t2: 'CITY', t3: 'ЖДЕТ', sub: 'Ananta · Городская RPG · 2026', desc: 'Неофициальный гайд по Ananta (Project Mugen). Персонажи, гайды, советы.', days: 'Дней', hours: 'Часов', mins: 'Мин', secs: 'Сек', launch: 'РЕЛИЗ: 3 КВАРТАЛ 2026', explore: 'Изучить', prereg: 'Предрег ↗' },
  quicknav: { news: 'Новости', chars: 'Персонажи', map: 'Карта', specs: 'Система', codes: 'Коды', compare: 'Сравнение', tracker: 'Трекер Релиза' },
  sections: {
    newsLabel: 'Последнее', newsTitle: 'Новости', viewAll: 'Смотреть все ↗',
    deepdiveLabel: 'Глубокий анализ', deepdiveTitle: 'Всё, что мы знаем', charLabel: 'Отряд', charTitle: 'Агенты', viewLore: 'Смотреть билд',
    mapLabel: 'Город', mapTitle: 'Районы', mapComing: 'ИНТЕРАКТИВНАЯ КАРТА НА РЕЛИЗЕ', hazard: '⚠ ОПАСНО', secure: '■ БЕЗОПАСНО',
    specsLabel: 'ПК', specsTitle: 'Системные требования', pc: 'ПК', mobile: 'Мобильные',
    codesLabel: 'Коды', codesTitle: 'Промокоды', compareLabel: 'Рынок', compareTitle: 'Сравнение',
    faqLabel: 'ЧАВО', faqTitle: 'Вопросы', trackerLabel: 'Сроки', trackerTitle: 'Этапы',
    footerDesc: 'Неофициальный сайт фанатов. Не имеет связи с NetEase.', footerGuides: '// Гайды', footerLinks: '// Ссылки',
    footerCopyright: '© 2026 ANANTA.GG', footerPrivacy: 'Конфиденциальность'
  }
};

const translations = { EN: en, CN: cn, JP: jp, KR: kr, DE: de, FR: fr, IT: it, RU: ru };

fs.writeFileSync('./src/locales.ts', "export const translations = " + JSON.stringify(translations, null, 2) + ";\\n");
console.log('done locales');
