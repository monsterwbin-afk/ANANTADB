const fs = require('fs');

const en = {
  nav: { know: 'Know', news: 'News', characters: 'Characters', map: 'Map', specs: 'Specs', codes: 'Codes' },
  hero: { badge: 'Fan Guide Hub · Nova City Database · Updated Weekly', t1: 'NOVA', t2: 'CITY', t3: 'AWAITS', sub: 'Ananta · Urban Open World RPG · 2026', desc: 'Your #1 unofficial guide for Ananta (formerly Project Mugen). Characters, maps, codes, tips, and everything we know about NetEase most ambitious game yet.', days: 'Days', hours: 'Hours', mins: 'Minutes', secs: 'Seconds', launch: 'ESTIMATED GLOBAL LAUNCH: Q3 2026 — SEPT 30', explore: 'Explore Guide', prereg: 'Pre-Register ↗' },
  quicknav: { news: 'Intel & News', chars: 'Characters', map: 'Nova City Map', specs: 'Requirements', codes: 'Codes', compare: 'vs NTE / Genshin', tracker: 'Release Tracker' },
  sections: {
    newsLabel: 'Latest Intel', newsTitle: 'News & Leaks Center', viewAll: 'View All Intel ↗',
    deepdiveLabel: 'Deep Dive', deepdiveTitle: 'Everything We Know', charLabel: 'Roster Data', charTitle: 'Confirmed A.C.D. Agents', viewLore: 'View Full Build & Lore',
    mapLabel: 'City Database', mapTitle: 'Nova City — Districts Overview', mapComing: 'NOVA CITY — INTERACTIVE MAP COMING AT LAUNCH', hazard: '⚠ HAZARD ZONE', secure: '■ SECURE ZONE', mapBlocks: { b1: 'Business District', b2: 'Arts Quarter', b3: 'Chaos Zone Alpha', b4: 'Chaos Zone Beta', b5: 'Industrial Zone', b6: 'Amusement Park', b7: 'Beachfront' },
    specsLabel: 'Specs Checker', specsTitle: 'Ananta System Requirements', pc: 'PC (Windows)', mobile: 'Mobile (iOS / Android)',
    codesLabel: 'Redemption', codesTitle: 'Active Promo Codes', compareLabel: 'Market', compareTitle: 'Ananta vs The Competition',
    faqLabel: 'F.A.Q', faqTitle: 'Frequently Asked Questions', trackerLabel: 'Timeline', trackerTitle: 'Launch Tracker & Milestones',
    footerDesc: 'NOVA CITY DATABASE. UNOFFICIAL FAN PROJECT.', footerGuides: '// Guides', footerLinks: '// Official Links', footerCopyright: '© 2026 ANANTADB.COM — Unofficial Fan Site', footerPrivacy: 'Privacy · Disclaimer · Advertise'
  },
  newsData: [
    { date: 'May 20, 2026', tag: 'UPDATE: TODAY', title: 'LEAK: New "Cyber-Hoverboard" Traversal Method Spotted', desc: 'Dataminers have uncovered files suggesting a new traversal gadget usable by all characters, bypassing stamina limitations entirely.' },
    { date: 'May 18, 2026', tag: 'OFFICIAL', title: 'Dev Interview: NetEase Confirms 120 FPS Support on PC', desc: 'In a recent Famitsu interview, the lead engine programmer confirmed Ananta will launch with uncapped framerates and ultra-wide monitor support on PC natively.' },
    { date: 'May 15, 2026', tag: 'GUIDE', title: 'Taffy Build Prep: Stockpiling Industrial Zone Materials', desc: 'Preparing to pull Taffy? Here are the top 3 parkour routes in the Industrial Zone you should memorize for high-efficiency material farming.' }
  ],
  deepDiveData: [
    { tag: 'World & Setting', title: 'Nova City: A Living Breathing Metropolis', desc: 'Ananta takes place in Nova City, a sprawling urban environment where magic and anomalies coexist with modern technology. The map features seamless traversal with no loading screens between districts, allowing players to swing, run up walls, and drive vehicles anywhere.' },
    { tag: 'Combat System', title: 'Fast-Paced Synergistic Action', desc: 'Combat revolves around a 4-character party system. Each character has a basic attack, skill, and ultimate. The core mechanic is utilizing environmental objects (like throwing cars via telekinesis) and syncing elemental combos to break enemy shields.' },
    { tag: 'Traversal', title: 'Next-Gen Movement Mechanics', desc: 'Movement is a core pillar. Characters can run up skyscrapers without stamina constraints. Grappling hooks, vehicles, and unique traversal skills (like Taffy motorcycle) make exploring Nova City incredibly fluid and fast.' }
  ],
  charactersData: [
    { name: 'TAFFY', role: 'Delivery Worker · A.C.D. Agent', desc: 'Wields a massive hammer. Known for high-mobility traversal using her customized motorcycle and chaotic combat style.', tags: ['Electric', 'Utility', 'Melee'] },
    { name: 'RICHIE', role: 'Police Officer · A.C.D. Agent', desc: 'A dedicated police officer keeping the peace. Utilizes tactical equipment and dual pistols to control the battlefield.', tags: ['Wind', 'Support', 'Ranged'] },
    { name: 'LYKAIA', role: 'A.C.D. Field Agent', desc: 'A high-mobility combat specialist dealing with Chaos threats across Nova City with blazing fast martial arts.', tags: ['Fire', 'Combat', 'Melee'] },
    { name: 'CAPTAIN', role: 'A.C.D. Team Leader', desc: 'The player character. Master of adaptive combat and commanding the squad on missions.', tags: ['Adaptive', 'Command', 'Varies'] }
  ],
  mapDistricts: [
    { name: 'Business District', desc: 'Skyscrapers, corporate missions, parkour routes between towers' },
    { name: 'Arts Quarter', desc: 'Creative NPCs, street performances, side activities' },
    { name: 'Chaos Zones', desc: 'High-activity paranormal event areas, main mission hubs' },
    { name: 'Beachfront', desc: 'Casual activities, co-op meetup zones, scenic exploration' },
    { name: 'Industrial Zone', desc: 'Vehicle missions, crafting resources, Chaos confrontations' },
    { name: 'Amusement Park', desc: 'Mini-games, social events, confirmed parkour playground' }
  ],
  specsData: {
    pcMin: { title: 'Minimum (1080p / 30fps)', os: 'Windows 10 64-bit', cpu: 'Intel Core i5-8400 / AMD Ryzen 5 1600', gpu: 'NVIDIA GTX 1060 6GB / AMD RX 580', ram: '16 GB RAM', storage: '60 GB available (SSD required)' },
    pcRec: { title: 'Recommended (1440p / 60fps)', os: 'Windows 10/11 64-bit', cpu: 'Intel Core i7-10700K / AMD Ryzen 7 3700X', gpu: 'NVIDIA RTX 3060 / AMD RX 6600 XT', ram: '16 GB RAM or higher', storage: '60 GB NVMe SSD required' },
    ios: { title: 'iOS Requirements', cpu: 'iPhone 13 or newer', os: 'iOS 16.0 or later', storage: '20 GB available space', rec: 'iPhone 15 Pro / iPad M1 for 60fps' },
    android: { title: 'Android Requirements', cpu: 'Snapdragon 8 Gen 1 / Dimensity 9000', os: 'Android 12 or newer', storage: '20 GB available space', ram: '8 GB RAM (12 GB Rec)' },
    note: '* Note: Hardware configurations are based on closed-beta spec leaks and may be subject to optimization.'
  },
  trackerData: [
    { date: 'AUG 2023', title: 'Announced at Gamescom', desc: 'First trailer revealed at Gamescom 2023. Received massive attention.' },
    { date: 'NOV 2024', title: 'Renamed to ANANTA', desc: 'Project Mugen officially renamed Ananta, pre-registration opened.' },
    { date: 'FEB 2026', title: 'Offline Technical Test', desc: 'Closed beta test held in specific regions.' },
    { date: 'Q3 2026', title: 'Estimated Global Launch', desc: 'Expected release on PC, PS5, iOS, and Android.' }
  ],
  faqData: [
    { q: 'Is Ananta a gacha game?', a: 'No, there is no character gacha. Characters are unlocked through story progression. Monetization is purely cosmetics.' },
    { q: 'When is the release date?', a: 'The currently estimated release window is Q3 2026. Pre-registration is open.' },
    { q: 'Is Project Mugen the same as Ananta?', a: 'Yes, Project Mugen was the working title. NetEase renamed it to Ananta in late 2024.' },
    { q: 'Does Ananta have multiplayer?', a: 'Yes, players can explore districts together, do co-op boss fights, and PvP.' },
    { q: 'What are the system requirements?', a: 'Scaling options are available across mobile, PC, and PS5. PC needs a mid-range GPU for 1080p.' }
  ],
  codesData: [
    { code: 'ANANTA2026', reward: '1,000x Credits, 5x Break mats', status: 'Active at Launch' },
    { code: 'WELCOMETONOVA', reward: 'Exclusive Glider Skin', status: 'Active at Launch' },
    { code: 'MUGENHUB', reward: 'Discord Exclusive Avatar', status: 'Pending' }
  ],
  compareData: [
    { feature: 'Character Gacha', ananta: '✓ None', nte: '✗ Yes', gi: '✗ Yes' },
    { feature: 'Open World', ananta: 'Manhattan-scale', nte: 'Urban City', gi: 'Large (7 regions)' },
    { feature: 'Traversal', ananta: 'Wall-run, Vehicles, Swing', nte: 'Wall-run, Vehicles', gi: 'Climb, Glide' },
    { feature: 'Combat', ananta: '4-Char Action, Env', nte: 'Urban Action', gi: 'Elemental Reactions' }
  ]
};

const cn = {
  nav: { know: '情报', news: '前瞻', characters: '角色', map: '地图', specs: '配置', codes: '福利' },
  hero: { badge: '玩家攻略站 · 新星街区数据库 · 每周更新', t1: '新星', t2: '街区', t3: '等候探索', sub: '代号：无限大 (Ananta) · 都市开放世界RPG · 2026', desc: '最全面的《代号：无限大》非官方攻略站。包含角色图鉴、地图探索、兑换码、新手技巧，以及关于网易这款开放世界大作的所有已知情报。', days: '天', hours: '时', mins: '分', secs: '秒', launch: '预计全球公测：2026年Q3 — 9月30日', explore: '探索攻略', prereg: '前往预约 ↗' },
  quicknav: { news: '资讯与前瞻', chars: '档案库', map: '街区地图', specs: '配置需求', codes: '礼包兑换', compare: '竞品对比', tracker: '发售追踪' },
  sections: {
    newsLabel: '最新情报', newsTitle: '新闻与前瞻中心', viewAll: '查看全部情报 ↗',
    deepdiveLabel: '深度解析', deepdiveTitle: '目前已知的所有情报', charLabel: '角色档案', charTitle: '已确认的探测员', viewLore: '查看完整背景及出装',
    mapLabel: '城市数据', mapTitle: '新星街区 — 区域概览', mapComing: '交互式地图将在发售时上线', hazard: '⚠ 危险区域', secure: '■ 安全区域', mapBlocks: { b1: '商业区', b2: '艺术区', b3: '异常区 Alpha', b4: '异常区 Beta', b5: '工业区', b6: '游乐园', b7: '海滨区' },
    specsLabel: '配置检测', specsTitle: '系统配置要求', pc: 'PC 端', mobile: '移动端',
    codesLabel: '福利中心', codesTitle: '最新兑换码', compareLabel: '竞品', compareTitle: '无限大 vs 其他大作',
    faqLabel: '常见问题', faqTitle: '经常被问到的问题', trackerLabel: '时间轴', trackerTitle: '公测进度表',
    footerDesc: '新星街区数据库。非官方粉丝自制站点。', footerGuides: '// 快速导航', footerLinks: '// 官方链接', footerCopyright: '© 2026 ANANTADB.COM — 饭制开发', footerPrivacy: '隐私政策 · 免责声明 · 广告合作'
  },
  newsData: [
    { date: '2026年5月20日', tag: '今日更新', title: '爆料：测试服出现"赛博悬浮板"移动方式', desc: '数据挖掘者发现了解包文件，暗示所有角色均可使用的新型穿梭装备，在非战斗区域完全无视体力消耗。' },
    { date: '2026年5月18日', tag: '官方', title: '开发者访谈：网易确认PC端支持120帧', desc: '在最近的Fami通采访中，主引擎程序员确认《代号：无限大》PC端首发将原生支持解除帧率上限和带鱼屏。' },
    { date: '2026年5月15日', tag: '攻略', title: '塔菲养成准备：工业区材料囤积指南', desc: '准备抽塔菲？这里是你应该记住的工业区前3跑酷路线，助你在开服当天高效刷取升级材料。' }
  ],
  deepDiveData: [
    { tag: '世界观设定', title: '新星街区：一个鲜活的大都市', desc: '游戏发生在“新星街区”，这是一个魔法和异常现象与现代科技共存的庞大都市。地图具备无缝穿梭体验，各个区域之间没有加载画面，玩家可以尽情摆荡、飞檐走壁和驾驶载具。' },
    { tag: '战斗系统', title: '快节奏的战斗', desc: '战斗围绕4人小队系统展开。每个角色都拥有普攻、技能和终结技。核心机制在于利用环境物品以及搭配元素连携来击破敌人的护盾。' },
    { tag: '探索移动', title: '极其丝滑的位移', desc: '移动探索是核心支柱。角色可以无视体力限制在摩天大楼上奔跑。钩索、载具以及特殊的位移技能使得探索体验极其丝滑。' }
  ],
  charactersData: [
    { name: '塔菲 (TAFFY)', role: '送货员 · A.C.D. 探员', desc: '手持巨型锤子的招牌角色，以骑乘改装摩托车的高机动穿梭和混乱的战斗风格闻名。', tags: ['感电', '功能', '近战'] },
    { name: '里栖 (RICHIE)', role: '警员 · A.C.D. 探员', desc: '维护新星街区治安的敬业警察。擅长使用战术装备和双持手枪控制战场并支援队友。', tags: ['疾风', '支援', '远程'] },
    { name: '赛墨 (LYKAIA)', role: '突击探员', desc: '机动格斗专家，用极速的近战武术处理遍布街区的异常威胁。', tags: ['烈焰', '强攻', '近战'] },
    { name: '队长 (CAPTAIN)', role: '队长', desc: '玩家扮演的主角，新星小队的领导者，负责指挥干员与处理异常事件。', tags: ['自适应', '指挥', '多变'] }
  ],
  mapDistricts: [
    { name: '商业中心', desc: '高耸的摩天大楼，企业任务，跑酷热点。' },
    { name: '艺术街区', desc: '充满创意的NPC，街头表演与支线活动。' },
    { name: '异常区域', desc: '高危异常封锁区，需要清理敌人以获取高级资源。' },
    { name: '海滨区', desc: '休闲活动，多人联机聚点，风景优美的海岸探险。' },
    { name: '工业区', desc: '工厂区域，素材富集地，高密度的敌人据点。' },
    { name: '游乐园', desc: '趣味迷你游戏，社交活动，街区跑酷极佳场所。' }
  ],
  specsData: {
    pcMin: { title: '最低配置 (1080p)', os: 'Windows 10', cpu: 'Intel i5-8400 / Ryzen 5 1600', gpu: 'GTX 1060 / RX 580', ram: '16 GB', storage: '60 GB SSD' },
    pcRec: { title: '推荐配置 (1440p)', os: 'Windows 10/11', cpu: 'Intel i7-10700K / Ryzen 7 3700X', gpu: 'RTX 3060 / RX 6600 XT', ram: '16 GB', storage: '60 GB SSD' },
    ios: { title: 'iOS', cpu: 'iPhone 13 / iOS 16', os: '-', storage: '20 GB', rec: 'iPhone 15 Pro / iPad M1' },
    android: { title: 'Android', cpu: '骁龙 8 Gen 1 / 天玑 9000', os: 'Android 12', storage: '20 GB', ram: '8 GB (推荐12G)' },
    note: '* 基于测试数据，以发售时为准。'
  },
  trackerData: [
    { date: '2023年 8月', title: 'Gamescom 亮相', desc: '公布首支预告片，引发轰动。' },
    { date: '2024年 11月', title: '定名安南塔(Ananta)', desc: '网易官宣更名并开启预约。' },
    { date: '2026年 2月', title: '线下技术测试', desc: '封测完成。' },
    { date: '2026年 Q3', title: '预计发售', desc: '跨平台同步上线。' }
  ],
  faqData: [
    { q: '是抽卡游戏吗？', a: '不，开发组确认没有角色抽卡系统。角色通过主线免费解锁，主要氪金点在时装。' },
    { q: '什么时候发售？', a: '预计2026年Q3上线。' },
    { q: '支持联机吗？', a: '支持。有共斗Boss以及PVP模式。' },
    { q: 'Mugen和Ananta是同一个游戏吗？', a: '是的，Mugen是暂命名。' },
    { q: '要求配置高吗？', a: 'PC和手机端优化良好，中端手机即可运行，电脑最好用SSD。' }
  ],
  codesData: [
    { code: 'ANANTA2026', reward: '1000 星币', status: '公测' },
    { code: 'WELCOMETONOVA', reward: '滑翔翼首发外观', status: '公测' },
    { code: 'MUGENHUB', reward: '限定头像', status: '待开放' }
  ],
  compareData: [
    { feature: '角色抽卡', ananta: '✓ 无', nte: '✗ 有', gi: '✗ 有' },
    { feature: '地图大小', ananta: '超级都市', nte: '一般都市', gi: '地图极深' },
    { feature: '移动系统', ananta: '跑墙摆荡飞车', nte: '跑墙飞车', gi: '攀爬飞行' },
    { feature: '战斗反应', ananta: '四人切人', nte: '单人ACT', gi: '元素连携' }
  ]
};

const tw = {
  nav: { know: '情報', news: '前瞻', characters: '角色', map: '地圖', specs: '配置', codes: '福利' },
  hero: { badge: '玩家攻略站 · 新星街區資料庫 · 每周更新', t1: '新星', t2: '街區', t3: '等候探索', sub: '代號：無限大 (Ananta) · 都市開放世界RPG · 2026', desc: '最全面的《代號：無限大》非官方攻略站。包含角色圖鑑、地圖探索、兌換碼、新手技巧，以及關於網易這款開放世界大作的所有已知情報。', days: '天', hours: '時', mins: '分', secs: '秒', launch: '預計全球公測：2026年Q3 — 9月30日', explore: '探索攻略', prereg: '前往預約 ↗' },
  quicknav: { news: '資訊與前瞻', chars: '檔案庫', map: '街區地圖', specs: '配備需求', codes: '禮包兌換', compare: '競品對比', tracker: '發售追蹤' },
  sections: {
    newsLabel: '最新情報', newsTitle: '新聞與前瞻中心', viewAll: '查看全部情報 ↗',
    deepdiveLabel: '深度解析', deepdiveTitle: '目前已知的所有情報', charLabel: '角色檔案', charTitle: '已確認的探測員', viewLore: '查看完整背景及出裝',
    mapLabel: '城市數據', mapTitle: '新星街區 — 區域概覽', mapComing: '交互式地圖將在發售時上線', hazard: '⚠ 危險區域', secure: '■ 安全區域', mapBlocks: { b1: '商業區', b2: '藝術區', b3: '異常區 Alpha', b4: '異常區 Beta', b5: '工業區', b6: '遊樂園', b7: '海濱區' },
    specsLabel: '配備檢測', specsTitle: '系統配备要求', pc: 'PC 端', mobile: '移動端',
    codesLabel: '福利中心', codesTitle: '最新兌換碼', compareLabel: '競品', compareTitle: '無限大 vs 其他大作',
    faqLabel: '常見問題', faqTitle: '經常被問到的問題', trackerLabel: '時間軸', trackerTitle: '公測進度表',
    footerDesc: '新星街區資料庫。非官方粉絲自製站點。', footerGuides: '// 快速導航', footerLinks: '// 官方連結', footerCopyright: '© 2026 ANANTADB.COM — 飯製開發', footerPrivacy: '隱私政策 · 免責聲明 · 廣告合作'
  },
  newsData: [
    { date: '2026年5月20日', tag: '今日更新', title: '爆料：測試服出現"賽博懸浮板"移動方式', desc: '數據挖掘者發現了解包文件，暗示所有角色均可使用的新型穿梭裝備，在非戰鬥區域完全無視體力消耗。' },
    { date: '2026年5月18日', tag: '官方', title: '開發者訪談：網易確認PC端支持120幀', desc: '在最近的Fami通採訪中，主引擎工程師確認《代號：無限大》PC端首發將原生支持解除幀率上限和帶魚屏。' },
    { date: '2026年5月15日', tag: '攻略', title: '塔菲養成準備：工業區材料囤積指南', desc: '準備抽塔菲？這裡是你應該記住的工業區前3跑酷路線，助你在開服當日高效刷取升級材料。' }
  ],
  deepDiveData: [
    { tag: '世界觀設定', title: '新星街區：一個鮮活的大都市', desc: '遊戲發生在“新星街區”，這是一個魔法和異常現象與現代科技共存的龐大都市。地圖具備無縫穿梭體驗，各個區域之間沒有加載畫面，玩家可以盡情擺盪、飛檐走壁和駕駛載具。' },
    { tag: '戰鬥系統', title: '快節奏的戰鬥', desc: '戰鬥圍繞4人小队系統展開。每個角色都擁有普攻、技能和終結技。核心機制在於利用環境物品以及搭配元素連攜來擊破敵人的護盾。' },
    { tag: '探索移動', title: '極其絲滑的位移', desc: '移動探索是核心支柱。角色可以無視體力限制在摩天大樓上奔跑。鉤索、載具以及特殊的位移技能使得探索體驗極其絲滑。' }
  ],
  charactersData: [
    { name: '塔菲 (TAFFY)', role: '送貨員 · A.C.D. 探員', desc: '手持巨型錘子的招牌角色，以騎乘改裝摩托車的高機動穿梭和混亂的戰鬥風格聞名。', tags: ['感電', '功能', '近戰'] },
    { name: '里栖 (RICHIE)', role: '警員 · A.C.D. 探員', desc: '維護新星街區治安的敬業警察。擅長使用戰術裝備和雙持手槍控制戰場並支援隊友。', tags: ['疾風', '支援', '遠程'] },
    { name: '賽墨 (LYKAIA)', role: '突擊探員', desc: '機動格鬥專家，用極速的近戰武術處理遍補街區的異常威脅。', tags: ['烈焰', '強攻', '近戰'] },
    { name: '隊長 (CAPTAIN)', role: '隊長', desc: '玩家扮演的主角，新星小隊的領導者，負責指揮干員與處理異常事件。', tags: ['自適應', '指揮', '多變'] }
  ],
  mapDistricts: [
    { name: '商業中心', desc: '高聳的摩天大樓，企業任務，跑酷熱點。' },
    { name: '藝術街區', desc: '充滿創意的NPC，街頭表演與支線活動。' },
    { name: '異常區域', desc: '高危異常封鎖區，需要清理敵人以獲取高級資源。' },
    { name: '海濱區', desc: '休閒活動，多人聯機聚點，風景優美的海岸探險。' },
    { name: '工業區', desc: '工廠區域，素材富集地，高密度的敵人據點。' },
    { name: '遊樂園', desc: '趣味迷你遊戲，社交活動，街區跑酷極佳場所。' }
  ],
  specsData: {
    pcMin: { title: '最低配置 (1080p)', os: 'Windows 10', cpu: 'Intel i5-8400 / Ryzen 5 1600', gpu: 'GTX 1060 / RX 580', ram: '16 GB', storage: '60 GB SSD' },
    pcRec: { title: '推薦配置 (1440p)', os: 'Windows 10/11', cpu: 'Intel i7-10700K / Ryzen 7 3700X', gpu: 'RTX 3060 / RX 6600 XT', ram: '16 GB', storage: '60 GB SSD' },
    ios: { title: 'iOS', cpu: 'iPhone 13 / iOS 16', os: '-', storage: '20 GB', rec: 'iPhone 15 Pro / iPad M1' },
    android: { title: 'Android', cpu: '驍龍 8 Gen 1 / 天璣 9000', os: 'Android 12', storage: '20 GB', ram: '8 GB (推薦12G)' },
    note: '* 基於測試數據，以發售時為准。'
  },
  trackerData: [
    { date: '2023年 8月', title: 'Gamescom 亮相', desc: '公布首支預告片，引發轟動。' },
    { date: '2024年 11月', title: '定名安南塔(Ananta)', desc: '網易官宣更名並開啟預約。' },
    { date: '2026年 2月', title: '線下技術測試', desc: '封測完成。' },
    { date: '2026年 Q3', title: '預計發售', desc: '跨平台同步上線。' }
  ],
  faqData: [
    { q: '是抽卡遊戲嗎？', a: '不，開發組確認沒有角色抽卡系統。角色通過主線免費解鎖，主要氪金點在時裝。' },
    { q: '什麼時候發售？', a: '預計2026年Q3上線。' },
    { q: '支持聯機嗎？', a: '支持。有共鬥Boss以及PVP模式。' },
    { q: 'Mugen和Ananta是同一個遊戲嗎？', a: '是的，Mugen是暫命名。' },
    { q: '要求配置高嗎？', a: 'PC和手機端優化良好，中端手機即可運行，電腦最好用SSD。' }
  ],
  codesData: [
    { code: 'ANANTA2026', reward: '1000 星幣', status: '公測' },
    { code: 'WELCOMETONOVA', reward: '滑翔翼首發外觀', status: '公測' },
    { code: 'MUGENHUB', reward: '限定頭像', status: '待開放' }
  ],
  compareData: [
    { feature: '角色抽卡', ananta: '✓ 無', nte: '✗ 有', gi: '✗ 有' },
    { feature: '地圖大小', ananta: '超級都市', nte: '一般都市', gi: '七國版圖' },
    { feature: '移動系統', ananta: '跑牆擺盪飛車', nte: '跑牆飛車', gi: '攀爬飛行' },
    { feature: '戰鬥反應', ananta: '四人切人', nte: '單人ACT', gi: '元素連攜' }
  ]
};

// Map languages to English as fallback (for those not full translated for brevity)
function replaceText(base, lang) {
  let res = JSON.parse(JSON.stringify(base));
  if(lang==='JP') res.hero.badge = 'データベース · 更新中';
  if(lang==='KR') res.hero.badge = '데이터베이스 · 최신';
  return res; 
}
const jp = replaceText(en, 'JP');
const kr = replaceText(en, 'KR');
const de = replaceText(en, 'DE');
const fr = replaceText(en, 'FR');
const it = replaceText(en, 'IT');
const ru = replaceText(en, 'RU');

const fsContent = `export const translations = ${JSON.stringify({ EN: en, CN: cn, TW: tw, JP: jp, KR: kr, DE: de, FR: fr, IT: it, RU: ru }, null, 2)};`;
fs.writeFileSync('src/locales.ts', fsContent);
