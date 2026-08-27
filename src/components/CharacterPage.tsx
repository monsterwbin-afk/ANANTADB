import React from 'react';
import { SectionLabel, SectionTitle } from './DeepDive';
import { useLanguage } from '../context/LanguageContext';
import { VideoPlayer } from './VideoPlayer';

// Base static character data with colors, images, and videos (language independent)
const CHARACTERS: Record<string, {
  image: string;
  gradientTo: string;
  video: string;
  bg: string;
}> = {
  taffy: {
    image: 'https://www.anantagame.com/pc/gw/20250904162009/assets/role-tafei_0ed12004.jpg',
    gradientTo: '#1a0a1f',
    video: 'https://www.anantagame.com/2025/0922/e6d6799d3064d53e2f473ea6d83f4179.mp4',
    bg: 'https://www.anantagame.com/pc/gw/20250904162009/assets/kv-full_f7467c2a.jpg',
  },
  richie: {
    image: 'https://www.anantagame.com/pc/gw/20250904162009/assets/role-lixi_a69544ea.jpg',
    gradientTo: '#0a1a10',
    video: 'https://www.anantagame.com/2025/0924/b09de7064df692f4abcf0b6483b41290.mp4',
    bg: 'https://www.anantagame.com/pc/gw/20250904162009/assets/full_0004_f8529268.jpg',
  },
  lykaia: {
    image: 'https://www.anantagame.com/pc/gw/20250904162009/assets/role-saimo_d1a180a7.jpg',
    gradientTo: '#1a0f0a',
    video: 'https://www.anantagame.com/2025/0922/e6d6799d3064d53e2f473ea6d83f4179.mp4',
    bg: 'https://www.anantagame.com/pc/gw/20250904162009/assets/full_0006_50878b56.jpg',
  },
  captain: {
    image: 'https://www.anantagame.com/pc/gw/20250904162009/assets/role-captain_c7ae1344.jpg',
    gradientTo: '#10101a',
    video: 'https://www.anantagame.com/2025/0924/b09de7064df692f4abcf0b6483b41290.mp4',
    bg: 'https://www.anantagame.com/pc/gw/20250904162009/assets/bg_8bda2623.jpg',
  },
  shiye: {
    image: 'https://www.anantagame.com/2026/0824/7afe1c6cbac07efe994f349199c1e226.mp4',
    gradientTo: '#1d1405',
    video: 'https://www.anantagame.com/2025/0924/b09de7064df692f4abcf0b6483b41290.mp4',
    bg: 'https://www.anantagame.com/pc/gw/20250904162009/assets/bg_8bda2623.jpg',
  },
  yinglong: {
    image: 'https://www.anantagame.com/2026/0822/677882b05d7f33d20b63e64e1bca33c8.mp4',
    gradientTo: '#0c1c24',
    video: 'https://www.anantagame.com/2025/0924/b09de7064df692f4abcf0b6483b41290.mp4',
    bg: 'https://www.anantagame.com/pc/gw/20250904162009/assets/bg_8bda2623.jpg',
  }
};

// UI Labels Translation
const LABELS: Record<string, {
  backToRoster: string;
  combatRole: string;
  element: string;
  weaponType: string;
  affiliation: string;
  skillsTitle: string;
  recommendedSynergy: string;
  awaitingData: string;
  adSlot: string;
  sponsored: string;
  disclaimer: string;
  backToDatabase: string;
  agentNotFound: string;
  showcase: string;
  combatProtocol: string;
  visualData: string;
}> = {
  EN: {
    backToRoster: '← BACK TO ROSTER',
    combatRole: 'Combat Role',
    element: 'Element',
    weaponType: 'Weapon Type',
    affiliation: 'Affiliation',
    skillsTitle: 'Skills & Abilities',
    recommendedSynergy: 'Recommended Synergy',
    awaitingData: 'Awaiting more data',
    adSlot: 'Ad Slot',
    sponsored: '[Google AdSense / Sponsorship Placement]',
    disclaimer: '* SKILL DATA SOURCED FROM PUBLIC PRE-RELEASE DEMOS AND PUBLIC TEST PREVIEWS. SUBJECT TO CHANGE.',
    backToDatabase: '← BACK TO DATABASE',
    agentNotFound: 'AGENT NOT FOUND',
    showcase: 'Gameplay Showcase',
    combatProtocol: 'Combat Protocol',
    visualData: 'Visual Data',
  },
  CN: {
    backToRoster: '← 返回探测员名册',
    combatRole: '战斗定位',
    element: '属性',
    weaponType: '武器类型',
    affiliation: '所属组织',
    skillsTitle: '技能与奥义',
    recommendedSynergy: '推荐协同编队',
    awaitingData: '等待更多数据分析',
    adSlot: '广告位',
    sponsored: '[Google AdSense / 赞助展示]',
    disclaimer: '* 技能数据来源于早期测试及官方实机公开画面。后续可能进行平衡性调整，请以公测为准。',
    backToDatabase: '← 返回数据库',
    agentNotFound: '未找到探测员',
    showcase: '实机玩法展示',
    combatProtocol: '战斗协议',
    visualData: '画面档案',
  },
  TW: {
    backToRoster: '← 返回探測員名冊',
    combatRole: '戰鬥定位',
    element: '屬性',
    weaponType: '武器類型',
    affiliation: '所屬組織',
    skillsTitle: '技能與奥義',
    recommendedSynergy: '推薦協同編隊',
    awaitingData: '等待更多數據分析',
    adSlot: '廣告位',
    sponsored: '[Google AdSense / 贊助展示]',
    disclaimer: '* 技能數據來源於早期測試及官方實機公開畫面。後續可能進行平衡性調整，請以公測為準。',
    backToDatabase: '← 返回資料庫',
    agentNotFound: '未找到探測員',
    showcase: '實機玩法展示',
    combatProtocol: '戰鬥協議',
    visualData: '畫面檔案',
  },
  JP: {
    backToRoster: '← メンバーリストへ戻る',
    combatRole: 'バトル役割',
    element: '属性',
    weaponType: '武器タイプ',
    affiliation: '所属組織',
    skillsTitle: 'スキルと能力',
    recommendedSynergy: '推奨シナジー連携',
    awaitingData: 'データ解析待ち',
    adSlot: '広告スロット',
    sponsored: '[Google AdSense / スポンサー募集]',
    disclaimer: '* スキルデータは公認テスト情報および公開デモに基づいています。正式版とは異なる場合があります。',
    backToDatabase: '← データベースへ戻る',
    agentNotFound: 'エージェントが見つかりません',
    showcase: '実機プレイ紹介',
    combatProtocol: '戦闘プロトコル',
    visualData: 'ビジュアルデータ',
  },
  KR: {
    backToRoster: '← 로스터로 돌아가기',
    combatRole: '전투 역할',
    element: '속성',
    weaponType: '무기 유형',
    affiliation: '소속',
    skillsTitle: '스킬 및 능력',
    recommendedSynergy: '추천 시너지 편성',
    awaitingData: '추가 데이터 조율 중',
    adSlot: '광고',
    sponsored: '[Google AdSense / 스폰서십 광고 배치]',
    disclaimer: '* 스킬 정보는 공식 체험판 빌드 및 공개 테스트 자료를 바탕으로 작성되어 향후 변경될 수 있습니다.',
    backToDatabase: '← 데이터베이스로 돌아가기',
    agentNotFound: '요원을 찾을 수 없습니다',
    showcase: '실제 게임플레이 쇼케이스',
    combatProtocol: '전투 프로토콜',
    visualData: '비주얼 데이터',
  },
  DE: {
    backToRoster: '← ZURÜCK ZUR LISTE',
    combatRole: 'Rolle',
    element: 'Element',
    weaponType: 'Waffenklasse',
    affiliation: 'Zugehörigkeit',
    skillsTitle: 'Fähigkeiten & Spezialangriffe',
    recommendedSynergy: 'Empfohlene Synergie',
    awaitingData: 'Warte auf weitere Daten',
    adSlot: 'Werbung',
    sponsored: '[Google AdSense / Werbeplatzierung]',
    disclaimer: '* FÄHIGKEITSDATEN BASIEREN AUF ÖFFENTLICHEN DEMOS UND KÖNNEN SICH VOR RELEASE ÄNDERN.',
    backToDatabase: '← ZURÜCK ZUR DATENBANK',
    agentNotFound: 'AGENT NICHT GEFUNDEN',
    showcase: 'Gameplay-Präsentation',
    combatProtocol: 'Kampfprotokoll',
    visualData: 'Visuelle Daten',
  },
  FR: {
    backToRoster: '← RETOUR AU ROSTER',
    combatRole: 'Rôle de combat',
    element: 'Élément',
    weaponType: 'Type d\'arme',
    affiliation: 'Affiliation',
    skillsTitle: 'Compétences & Capacités',
    recommendedSynergy: 'Synergie Recommandée',
    awaitingData: 'En attente de données',
    adSlot: 'Espace Publicitaire',
    sponsored: '[Google AdSense / Placement Sponsorisé]',
    disclaimer: '* LES COMPÉTENCES SONT BASÉES SUR LES PRÉSENTATIONS OFFICIELLES ET PEUVENT CHANGER.',
    backToDatabase: '← RETOUR À LA BASE DE DONNÉES',
    agentNotFound: 'AGENT INTROUVABLE',
    showcase: 'Présentation de Gameplay',
    combatProtocol: 'Protocole de Combat',
    visualData: 'Données Visuelles',
  },
  IT: {
    backToRoster: '← TORNA ALLA LISTA',
    combatRole: 'Ruolo',
    element: 'Elemento',
    weaponType: 'Classe d\'arma',
    affiliation: 'Affiliazione',
    skillsTitle: 'Abilità e Poteri',
    recommendedSynergy: 'Sinergia Consigliata',
    awaitingData: 'In attesa di ulteriori dati',
    adSlot: 'Spazio Pubblicitario',
    sponsored: '[Google AdSense / Sponsorizzazione]',
    disclaimer: '* DATI DELL\'ABILITÀ TRATTI DA PRATIHE UFFICIALI E PROVE PUBBLICHE, SOGGETTI A MODIFICHE.',
    backToDatabase: '← TORNA AL DATABASE',
    agentNotFound: 'AGENTE NON TROVATO',
    showcase: 'Showcase di Gameplay',
    combatProtocol: 'Protocollo di Combattimento',
    visualData: 'Dati Visivi',
  },
  RU: {
    backToRoster: '← НАЗАД К СПИСКУ',
    combatRole: 'Роль в бою',
    element: 'Стихия',
    weaponType: 'Тип оружия',
    affiliation: 'Фракция',
    skillsTitle: 'Навыки и Способности',
    recommendedSynergy: 'Рекомендуемый отряд',
    awaitingData: 'Ожидание расшифровки данных',
    adSlot: 'Рекламный блок',
    sponsored: '[Размещение Google AdSense / Спонсорство]',
    disclaimer: '* ДАННЫЕ НАВЫКОВ ПОЛУЧЕНЫ ИЗ ОФИЦИАЛЬНЫХ ДЕМО-ЗАПИСЕЙ И МОГУТ ИЗМЕНИТЬСЯ.',
    backToDatabase: '← НАЗАД К БАЗЕ ДАННЫХ',
    agentNotFound: 'АГЕНТ НЕ НАЙДЕН',
    showcase: 'Демонстрация геймплея',
    combatProtocol: 'Боевой протокол',
    visualData: 'Обзор файлов',
  }
};

const EXTRA_LOCALIZED_CHARS: Record<string, Record<string, {
  name: string;
  role: string;
  type: string;
  element: string;
  weapon: string;
  affiliation: string;
  desc: string;
  skills: { name: string; desc: string }[];
}>> = {
  EN: {
    dila: {
      name: 'DILA',
      role: 'Meteor Investigator · Celestial Greatsword',
      type: 'Combat',
      element: 'Gravity',
      weapon: 'Celestial Greatsword',
      affiliation: 'Nova City Investigation Agency',
      desc: 'A cryptic, reserved girl shrouded in mystery who investigates a major meteor disaster in Nova City. Shaking the battlefield with supreme cosmic authority, she wields a colossal space greatsword and manipulates localized gravitation with rumors of assuming a titan form.',
      skills: [
        { name: 'Meteor Slices (Basic)', desc: 'Swings her immense celestial greatsword in wide arcs of absolute gravitational energy, slicing through defense lines and applying weight marks.' },
        { name: 'Gravity Well (Skill)', desc: 'Manipulates localized gravity to form a miniature black hole, dragging all surrounding enemies together and dealing heavy gravitational collapse damage.' },
        { name: 'Cosmic Devastation (Ultimate)', desc: 'Summons a colossal, planet-shaking meteor storm from the deep universe, decimating the battlefield and granting her temporary titanic cosmic supremacy.' }
      ]
    },
    alan: {
      name: 'ALAN',
      role: 'Charismatic Model · Echoing Ice Yo-Yo',
      type: 'Combat',
      element: 'Frost',
      weapon: 'Dual High-Tech Ice Yo-Yos',
      affiliation: 'Freelance / Nova City Socialites',
      desc: 'A charming, highly friendly student and part-time model from an influential family. Known city-wide as a friendly social butterfly, he chooses freedom over cozy privilege and fights using dual high-tech spinning yo-yos that release frost snowflake trails.',
      skills: [
        { name: 'Yo-Yo Spin (Basic)', desc: 'Flicks twin spinning high-tech yo-yos forward in synchronized loops, dealing continuous physical damage and building frost stacks.' },
        { name: 'Glacial Flow (Skill)', desc: 'Slides along the battlefield on a frozen trail of glittering snow crystals, leaving frozen shockwaves that delay and freeze touched targets.' },
        { name: 'Blizzard Horizon (Ultimate)', desc: 'Launches his yo-yos to orbit at supersonic speeds, summoning a massive cryogenic dome that freezes and immobilizes all surrounding enemies in a crystalline blizzard.' }
      ]
    },
    mechanika: {
      name: 'MECHANIKA',
      role: 'Shorewater Ghost Engineer · Machine Awakener',
      type: 'Support',
      element: 'Sonic',
      weapon: 'Live-Sound Audio Amplifiers',
      affiliation: 'Shorewater Industries',
      desc: 'An eccentric, high-energy "ghost worker" at Shorewater Industries nicknamed Meg who possesses the unique Esper ability to bring electronics and machines to life. Known for throwing massive mechanized rock concerts, having tight bonds to Taffy, and an immense love for golden french fries.',
      skills: [
        { name: 'Sonic Beeps (Basic)', desc: 'Fires dynamic shockwave-emitting remote tuners to shoot high-frequency audio beams that strip enemy shielding properties.' },
        { name: 'Machine Awakening (Skill)', desc: 'Breathes consciousness into nearby mechanical nodes, summoning self-animating small helper droids that periodically restore allies\' energy, shoot bullets, and snack on fries.' },
        { name: 'Live Metal Concert (Ultimate)', desc: 'Stages a spectacular rock concert dropping gigantic subwoofers from orbit, jamming enemy communication with heavy sound riffs and boosting allies\' elemental power.' }
      ]
    }
  },
  CN: {
    dila: {
      name: '迪拉 (DILA)',
      role: '陨石调查员 · 星河大剑',
      type: '强攻',
      element: '重力',
      weapon: '宇宙星河大剑',
      affiliation: '新星城市调查局',
      desc: '调查新星都市陨石灾难的神秘少女，少言寡语且充满谜团。手握巨型双手大剑，能自如控制星辰重力与坠落陨石之力，并传言具有化身宇宙巨灵形态的惊人威力。',
      skills: [
        { name: '星流裂空斩 (普通攻击)', desc: '挥舞巨型星辰大剑进行大范围重力弧形扫击，轻松斩断敌阵并在敌人身体上附加质量印记。' },
        { name: '重力坍缩奇点 (元素战技)', desc: '御使重力扭曲局部时空，在前方汇聚一个吸引一切混沌生命的黑洞，实施超重低压粉碎。' },
        { name: '寰宇陨星湮灭 (元素爆发)', desc: '沟通深空召唤漫天巨大的星际陨石倾泻战场，伴随着大剑闪耀与令人震撼的重力波，造成毁天灭地的爆发伤害。' }
      ]
    },
    alan: {
      name: '阿兰 (ALAN)',
      role: '魅力男模 · 极寒旋转溜溜球',
      type: '强攻',
      element: '霜息',
      weapon: '高科技双持冰溜溜球',
      affiliation: '自由职业 / 新星潮玩社',
      desc: '温和开朗、极具亲和力的兼职男模与大学生。作为城中有名的社交蝴蝶，他放弃舒心特权选择拥抱自由，并熟练操纵一对能绽放灿烂冰雪特效的轻便指尖Yo-Yo陀螺进行战斗。',
      skills: [
        { name: '悠悠冰轮转 (普通攻击)', desc: '甩出两颗冰蓝指正轻陀螺切出优雅回旋圆弧，倾注高频物理与霜寒割裂损伤。' },
        { name: '傲雪凝寒流 (元素战技)', desc: '踏着由闪烁雪花结晶铺成的寒冰轨道瞬间滑行，留留下一地推移型冰冻冲击，减慢碰触敌群。' },
        { name: '绝对零度·冰裂暴风 (元素爆发)', desc: '将悠悠球推至超音速自转极限，在新星都市的战场开辟庞大晶莹的暴风雪穹顶，冰封冻结敌阵中所有单位。' }
      ]
    },
    mechanika: {
      name: '阿尼卡 (MECHANIKA)',
      role: '幽灵工人 · 机械生命师',
      type: '支援',
      element: '音波',
      weapon: '自主智能放大音响',
      affiliation: '肖尔沃特工业',
      desc: '肖尔沃特工业（Shorewater）活力四射的天才少女发明家，绰号Meg。拥有让机器电器自行活化的超能力，经常举办热闹非凡的无人工摇滚音乐会。热爱炸薯条，是塔菲最硬核的拍档。',
      skills: [
        { name: '电波调谐闪 (普通攻击)', desc: '电声调谐枪射出重叠的高频电音音波微粒，迅速削弱目标的抵挡防护盾。' },
        { name: '幽灵机械唤醒 (元素战技)', desc: '用超能力唤醒周围的电子配件零件，瞬时拼装出智能自运行的辅助哨兵机器人，在周围盘旋并射击。' },
        { name: '重金属自主电音节 (元素爆发)', desc: '开启热烈劲爆的全场摇滚演唱会，太空重音响从天而降轰塌正面防御，并让全体队员获得大幅声波同频强化。' }
      ]
    }
  },
  TW: {
    dila: {
      name: '迪拉 (DILA)',
      role: '隕石調查員 · 星河大劍',
      type: '強攻',
      element: '重力',
      weapon: '宇宙星河大劍',
      affiliation: '新星城市調查局',
      desc: '調查新星都市隕石災難的神秘少女，少言寡語且充滿謎團。手握巨型雙手大劍，能自如控制星辰重力與墜落隕石之力，並傳言具有化身宇宙巨靈形態的驚人威力。',
      skills: [
        { name: '星流裂空斬 (普通攻擊)', desc: '揮舞巨型星辰大劍進行大範圍重力弧形掃擊，輕鬆斬斷敵陣並在敵人身體上附加質量印記。' },
        { name: '重力坍縮奇點 (元素戰技)', desc: '御使重力扭曲局部時空，在前方彙聚一個吸引一切混沌生命的黑洞，實施超重低壓粉碎。' },
        { name: '寰宇隕星湮滅 (元素爆發)', desc: '溝通深空召喚漫天巨大的星際隕石傾瀉戰場，伴隨著大劍閃耀與令人震撼的重力波，造成毀天滅地的爆發傷害。' }
      ]
    },
    alan: {
      name: '阿蘭 (ALAN)',
      role: '魅力男模 · 極寒旋轉溜溜球',
      type: '強攻',
      element: '霜息',
      weapon: '高科技雙持冰溜溜球',
      affiliation: '自由職業 / 新星潮玩社',
      desc: '溫和開朗、極具親和力的兼職男模與大學生。作為城中有名的社交蝴蝶，他放棄舒心特權選擇擁抱自由，並熟練操縱一對能綻放燦爛冰雪特效的輕便指尖Yo-Yo陀螺進行戰鬥。',
      skills: [
        { name: '悠悠冰輪轉 (普通攻擊)', desc: '甩出兩顆冰藍指正輕陀螺切出優雅回旋圓弧，傾注高頻物理與霜寒割裂損傷。' },
        { name: '傲雪凝寒流 (元素戰技)', desc: '踏著由閃爍雪花結晶鋪成的寒冰軌道瞬間滑行，留下一地推移型冰凍衝擊，減慢碰觸敵群。' },
        { name: '絕對零度·冰裂風暴 (元素爆發)', desc: '將悠悠球推至超音速自轉極限，在新星都市的戰場開闢龐大晶瑩的暴風雪穹頂，冰封凍結敵陣中所有單位。' }
      ]
    },
    mechanika: {
      name: '阿尼卡 (MECHANIKA)',
      role: '幽靈工人 · 機械生命師',
      type: '支援',
      element: '音波',
      weapon: '自主智能放大音響',
      affiliation: '肖爾沃特工業',
      desc: '肖爾沃特工業（Shorewater）活力四射的天才少女發明家，綽號Meg。擁有讓機器電器自行活化的超能力，經常舉辦熱鬧非凡の無人工搖滾音樂會。熱愛炸薯條，是塔菲最硬核的拍檔。',
      skills: [
        { name: '電波調諧閃 (普通攻擊)', desc: '電聲調諧槍射出重疊的高頻電音音波微粒，迅速削弱目標的抵擋防護盾。' },
        { name: '幽靈機械喚醒 (元素戰技)', desc: '用超能力喚醒周圍的電子配件零件，瞬時拼裝出智能自運行的輔助哨兵機器人，在周圍盤旋並射擊。' },
        { name: '重金屬自主電音節 (元素爆發)', desc: '開啟熱烈勁爆的全場搖滾音樂會，太空重音響從天而降轟塌正面防禦，並讓全體隊員獲得大幅聲波同頻強化。' }
      ]
    }
  },
  JP: {
    dila: {
      name: 'ディラ (DILA)',
      role: 'ノーブル・ヘイレス · 特殊調査員',
      type: 'アタッカー',
      element: 'シャドウ',
      weapon: 'ブラッディ・パラソル',
      affiliation: 'フロンティア・ギルド',
      desc: '世界中で爆発的な話題となったゴスロリ吸血鬼風美少女。黒의ミニドレスと赤いリボンが特徴。パラソル型ハイテク兵器と黒影の力を操り、優雅で圧倒的な破壊力を見せる。',
      skills: [
        { name: 'ミッドナイト・ワルツ (通常攻撃)', desc: 'パラソルを優雅に振るい、物理とシャドウを融合させた流麗な連撃を展開する。' },
        { name: 'スカーレット・サイフォン (スキル)', desc: 'パラソルを広げて前方の攻撃を防御し、周囲のエネルギーを吸収して自身の攻撃力を強化する。' },
        { name: 'ゴシック・レクイエム (アルティメット)', desc: '吸血鬼の禁忌の力を解放し、影のブラックホールを形成。敵を一網打尽にして赤い薔薇の花びらとともに爆発させる。' }
      ]
    },
    alan: {
      name: 'アラン (ALAN)',
      role: 'エリート剣士 · 格闘スペシャリスト',
      type: 'アタッカー',
      element: '氷結',
      weapon: 'タキオン・カタナ',
      affiliation: 'A.C.D. 抜刀課',
      desc: '青髪のクールで端正な近接アタッカー。タキオン・カタナを用いた神速 of 居合抜きモーションは圧倒的な美しさを伴い、ノバ市のビル群の中で華麗な斬撃を繰り出していく。',
      skills: [
        { name: 'ソニック・エッジ (通常攻撃)', desc: 'カタナを流れるように操る音速の5段居合斬りを放つ。' },
        { name: 'フラッシュ・ダッシュ斬り (スキル)', desc: '一瞬で敵の背後にワープし、極限の抜刀術で敵を硬直させ、氷結의 爪痕を残す。' },
        { name: '絶対零度・次元裂開 (アルティメット)', desc: '超加速状態で前方広範囲に凄まじい次元斬撃の嵐を浴びせ、凍てつく空間とすべての敵を真っ二つに裂く。' }
      ]
    },
    mechanika: {
      name: 'メカニカ (MECHANIKA)',
      role: 'マスターメカニック · 武器エンジニア',
      type: 'サポート',
      element: '熱溶',
      weapon: 'パワーレンチ＆ランチャー',
      affiliation: 'A.C.D. 整備チーム',
      desc: '後ろ前に被ったキャップとピンクのツインテールがトレードマークの活発な少女。ノバ市の凄腕整備士であり、タフィーとは大の親友。スパナや工具を巧みに使ってバトル支援を行う。',
      skills: [
        { name: 'レンチ・フルスイング (通常攻撃)', desc: '超大型の工具用スパナレンチを振り回し、重厚なアーマーをもねじ破る物理・熱溶打撃を与える。' },
        { name: 'エンジン・ブースト (スキル)', desc: '小型の燃料電池を設置。メンバーの攻撃速度を大幅に引き上げ、特殊移動の消費スタミナを無効化する。' },
        { name: 'サーマイト・ドロップ (アルティメット)', desc: '軌道上から試作型ハイテク重機甲弾を投下。大爆発とともに熱溶スラグの海を作り出し、敵を継続的な燃焼に追い込む。' }
      ]
    }
  },
  KR: {
    dila: {
      name: '딜라 (DILA)',
      role: '귀족의 혈통 · 이상 조사관',
      type: '딜러',
      element: '그림자',
      weapon: '블러디 우산총',
      affiliation: '프런티어 길드',
      desc: '붉은 안광과 블랙 미니 드레스, 레드 리본 조합으로 글로벌 팬아트가 쏟아진 고딕 뱀파이어 미녀. 첨단 우산형 병기로 우아하면서도 치명적인 그림자 속성 광역 저격 플레이를 선사한다.',
      skills: [
        { name: '미드나잇 왈츠 (일반 공격)', desc: '우산을 우아하게 휘두르고 쏘아 강렬한 그림자 콤보 공격을 유도합니다.' },
        { name: '스칼렛 사이펀 (전투 스킬)', desc: '우산을 전개해 피해를 완벽 방어하고, 공격 충격을 흡수해 파티 전체의 차징 위력을 증폭합니다.' },
        { name: '고딕 레퀴엠 (필살기)', desc: '심연의 흡혈 에너지를 개방해 적을 한곳으로 고정시킨 후 거대한 붉은 장미 형상의 붕괴 폭발을 일으킵니다.' }
      ]
    },
    alan: {
      name: '아란 (ALAN)',
      role: '엘리트 검사 요원',
      type: '딜러',
      element: '빙결',
      weapon: '중형 타키온 검',
      affiliation: 'A.C.D. 참격대',
      desc: '냉혹하고 수려한 외모를 지닌 청발 도객. 절정의 검투 솜씨로 도시 속 유례없는 쾌적한 콤보 연속기 자취를 남기며 광풍을 일으킨다.',
      skills: [
        { name: '음속 비검 연격 (일반 공격)', desc: '매끄럽고 정밀한 5단계 발도 검기 공격으로 대상에게 높은 연속 물리 참격을 가합니다.' },
        { name: '섬영 기습 (전투 스킬)', desc: '차원 뒤편으로 기동해 지나간 경로상의 모든 타깃을 일시에 동결시키는 광속 발도술.' },
        { name: '절대영도·참화천광 (필살기)', desc: '공간의 한계 저항치까지 오버클럭해 전방에 수만 번의 동결 검기를 뿌려 막대한 단일 및 범위 빙결 피해를 입칩니다.' }
      ]
    },
    mechanika: {
      name: '메카니카 (MECHANIKA)',
      role: '기계 명장 · 전술 정비관',
      type: '서포터',
      element: '화염',
      weapon: '충전식 헤비 렌치',
      affiliation: 'A.C.D. 부품 정비팀',
      desc: '야구모자를 뒤로 쓴 열정 넘치는 핑크 헤어 소녀. 도시 전역에 소문난 천재 기계 엔지니어로 태피와 극도로 긴밀해 정비 파트너로 활약한다.',
      skills: [
        { name: '헤비 오버드라이브 스매시 (일반 공격)', desc: '압도적인 전동 에너지를 두른 거대 렌치를 내려쳐서 적의 보호막과 단단한 장갑 게이지를 단숨에 해체합니다.' },
        { name: '고효율 초점 동력원 (전투 스킬)', desc: '지면에 중력 동력 코어를 방출하여 영역 내부 파티원의 장전 및 화염 속성 고열 에너지를 극대화합니다.' },
        { name: '서마이트 캐논 유도격 (필살기)', desc: '궤도 융합 전술 미사일을 직격 유도하여 착탄 위치에 융해성 불폭풍을 일으켜 장기 유도 화염 열상을 부여합니다.' }
      ]
    }
  },
  DE: {
    dila: {
      name: 'DILA',
      role: 'Edle Erbin · Ermittlerin',
      type: 'Kampf',
      element: 'Schatten',
      weapon: 'Vampirischer Parasol',
      affiliation: 'Grenzsyndikat',
      desc: 'Ein wunderschönes Gothic-Vampirmädchen mit geheimnisvollen Vampirkräften. Sie ist weltweit für ihr auffälliges Kleid bekannt und nutzt einen modernen Parasol für schattenhafte Magie.',
      skills: [
        { name: 'Mitternachtsanmut (Standard)', desc: 'Schwingt ihren Parasol elegant für verheerende Schattenkombos.' },
        { name: 'Scharlachrotes Absaugen (Spezial)', desc: 'Erstellt ein kinetisches Schattenfeld, das feindliche Energie absorbiert und den Angriffsbonus des Teams erhöht.' },
        { name: 'Gotisches Requiem (Ultimate)', desc: 'Setzt unkontrollierbare rohe Dunkelenergie frei, um die Zeit zu verlangsamen und flächendeckenden Schattenschaden zu verursachen.' }
      ]
    },
    alan: {
      name: 'ALAN',
      role: 'Eliteschwertkämpfer · Kampfspezialist',
      type: 'Kampf',
      element: 'Frost',
      weapon: 'Tachyonen-Katana',
      affiliation: 'A.C.D. Klingeneinheit',
      desc: 'Ein cooler, attraktiver Schwertkämpfer mit blauen Haaren. Sein Tachyonen-Katana ermöglicht rasante Angriffe mit atemberaubender visueller Dynamik auf den Cyberpunk-Straßen von Nova City.',
      skills: [
        { name: 'Schallklinge (Standard)', desc: 'Führt bis zu 5 schnelle vertikale und horizontale Schwerthiebe mit extrem präziser Wirkung aus.' },
        { name: 'Schattenlose Attacke (Spezial)', desc: 'Dascht hinter den Gegner für einen meisterhaften, raumtrennenden Angriff und hinterlässt eine langanhaltende Frostspur.' },
        { name: 'Absoluter Nullpunktschnitt (Ultimate)', desc: 'Tritt in einen Zustand extrem beschleunigter Kampfbewegungen ein, um den Frostschaden auf das Maximum anzuheben.' }
      ]
    },
    mechanika: {
      name: 'MECHANIKA',
      role: 'Meisteringenieurin · Taktischer Support',
      type: 'Unterstützung',
      element: 'Feuer',
      weapon: 'Power-Schraubenschlüssel',
      affiliation: 'A.C.D. Werkstatt',
      desc: 'Ein fröhliches pinkhaariges Mädchen mit umgedrehter Kappe. Sie ist eine angesehene Waffenmeisterin und Ingenieurin in Nova City und steht Taffy sehr nahe.',
      skills: [
        { name: 'Schwerer Schraubenschlag (Standard)', desc: 'Schwingt ihren riesigen motorisierten Schraubenschlüssel, um gegnerische Panzerungen und Schilde sofort zu knacken.' },
        { name: 'Energie-Boost (Spezial)', desc: 'Stellt einen Generator auf, der die Angriffsgeschwindigkeit und den Feuerschaden des verbündeten Teams drastisch erhöht.' },
        { name: 'Thermit-Kernschlag (Ultimate)', desc: 'Ruft ein Raketenluftfeuer herbei, das beim Aufprall ein flüssiges Flammenmeer hinterlässt und kontinuierlichen Feuerschaden verursacht.' }
      ]
    }
  },
  FR: {
    dila: {
      name: 'DILA',
      role: 'Héritière Noble · Enquêtrice',
      type: 'Combat',
      element: 'Ombre',
      weapon: 'Ombrelle Vampirique',
      affiliation: 'Syndicat de la Frontière',
      desc: 'Une magnifique fille vampire gothique à l\'héritage mystérieux. Mondialement célèbre pour sa superbe robe noire et ses rubans rouges, elle combat avec une ombrelle de pointe.',
      skills: [
        { name: 'Grâce de Minuit (Basique)', desc: 'Utilise son ombrelle pour réaliser des attaques fluides infligeant des dégâts d\'Ombre.' },
        { name: 'Siphon Écarlate (Spécial)', desc: 'Génère un champ d\'Ombre défensif qui draine l\'énergie ennemie pour augmenter l\'attaque du groupe.' },
        { name: 'Requiem Gothique (Ultime)', desc: 'Libère de l\'énergie chaotique pure pour geler temporairement le temps dans une zone et infliger de lourds dégâts d\'Ombre.' }
      ]
    },
    alan: {
      name: 'ALAN',
      role: 'Épéiste d\'Élite · Expert Tactique',
      type: 'Combat',
      element: 'Gel',
      weapon: 'Katana Tachyonique',
      affiliation: 'Escouade de Lames A.C.D.',
      desc: 'Un bretteur cool aux cheveux bleus doté d\'une vitesse fulgurante. Son katana tachyonique produit des effets visuels magnifiques en découpant le chaos de Nova City.',
      skills: [
        { name: 'Lame Sonique (Basique)', desc: 'Enchaîne jusqu\'à 5 coups d\'épée rapides verticaux et horizontaux.' },
        { name: 'Frappe Instantanée (Spécial)', desc: 'Se téléporte instantanément derrière l\'adversaire pour une coupe glaciale tranchante qui ralentit la vitesse de déplacement.' },
        { name: 'Entaille Zéro Absolu (Ultime)', desc: 'Déclenche une rafale infinie de coupes supersoniques dévastant les cibles d\'une tempête de Gel.' }
      ]
    },
    mechanika: {
      name: 'MECHANIKA',
      role: 'Ingénieur en Chef · Soutien Tactique',
      type: 'Soutien',
      element: 'Feu',
      weapon: 'Clé Électrique Lourde',
      affiliation: 'Atelier A.C.D.',
      desc: 'Fille enthousiaste aux cheveux roses avec une casquette portée à l\'envers. Maître en ingénierie de l\'armement à Nova City, elle est la meilleure amie de Taffy.',
      skills: [
        { name: 'Frappe de Clé Lourde (Basique)', desc: 'Fracasse le sol avec sa clé lourde pour détruire instantanément la jauge de bouclier des adversaires.' },
        { name: 'Survoltage d\'Énergie (Spécial)', desc: 'Déploie un générateur qui booste la vitesse d\'attaque et les dégâts de Feu du groupe.' },
        { name: 'Frappe de Cœur Thermite (Ultime)', desc: 'Invoque un missile tactique lourd qui explose et laisse des flaques de lave infligeant des brûlures persistantes.' }
      ]
    }
  },
  IT: {
    dila: {
      name: 'DILA',
      role: 'Erede Nobile · Investigatrice',
      type: 'Combattimento',
      element: 'Ombra',
      weapon: 'Ombrello Vampirico',
      affiliation: 'Sito della Frontiera',
      desc: 'Splendida ragazza vampira gotica dai misteriosi poteri scuri. Amatissima per il suo abito con nastri rossi, manipola i campi d\'ombra con il suo ombrello hi-tech.',
      skills: [
        { name: 'Grazia di Mezzanotte (Base)', desc: 'Sferra fendenti aggraziati infliggendo importanti danni d\'Ombra.' },
        { name: 'Sifone Scarlatto (Speciale)', desc: 'Crea una barriera oscura che drena energia dai nemici per potenziare temporaneamente il proprio team.' },
        { name: 'Requiem Gotico (Ultimate)', desc: 'Manipola l\'energia oscura per alterare il tempo locale, infliggendo massicci danni d\'area.' }
      ]
    },
    alan: {
      name: 'ALAN',
      role: 'Spadaccino d\'Elite · Esperto di Lame',
      type: 'Combattimento',
      element: 'Gelo',
      weapon: 'Katana Tachionico',
      affiliation: 'Squadra Lame A.C.D.',
      desc: 'Affascinante guerriero dai capelli blu. Le sue tecniche di Katana offrono animazioni spettacolari che congelano la minaccia di Nova City.',
      skills: [
        { name: 'Lama Sonica (Base)', desc: 'Fino a 5 rapidi tagli verticali ed orizzontali di eccezionale precisione.' },
        { name: 'Taglio Istantaneo (Speciale)', desc: 'Supera i nemici all\'istante infondendoli di ghiaccio, bloccandone i movimenti per un breve periodo.' },
        { name: 'Fendente Zero Assoluto (Ultimate)', desc: 'Rilascia un sovraccarico di tagli tachionici in un ciclone di Gelo ad altissima potenza.' }
      ]
    },
    mechanika: {
      name: 'MECHANIKA',
      role: 'Ingegnere Capo · Supporto Tattico',
      type: 'Supporto',
      element: 'Fuoco',
      weapon: 'Chiave di Potenza Pesante',
      affiliation: 'Officina A.C.D.',
      desc: 'Ragazza vulcanica dai capelli rosa e cappellino girato. Famosissima a Nova City per i suoi progetti di armi, condivide forti legami con Taffy.',
      skills: [
        { name: 'Schiacciata di Chiave Pesante (Base)', desc: 'Abbatte la sua enorme chiave per frantumare istantaneamente armature nemiche e scudi protettivi.' },
        { name: 'Sovraccarico Motore (Speciale)', desc: 'Posiziona un generatore compatto che aumenta la velocità e l\'energia elementale di Fuoco dei compagni.' },
        { name: 'Attacco Thermite Core (Ultimate)', desc: 'Lancia un missile pesante incendiario, creando una pozza di fuoco fuso che infligge danni da bruciatura continui.' }
      ]
    }
  },
  RU: {
    dila: {
      name: 'ДИЛА (DILA)',
      role: 'Дворянка · Искательница',
      type: 'Бой',
      element: 'Тень',
      weapon: 'Мистический зонт',
      affiliation: 'Орден Границы',
      desc: 'Готическая девочка-вампир из скрытного древнего клана. Популярна благодаря роскошному платью с алыми лентами. Орудует теневым зонтом-бластером.',
      skills: [
        { name: 'Полночная грация (Базовый)', desc: 'Элегантно атакует зонтом, выпуская пронизывающие снаряды Теневого урона.' },
        { name: 'Малиновый вампиризм (Особый)', desc: 'Выставляет теневой барьер, поглощающий энергию целей и превращающий её в бафф атаки для союзников.' },
        { name: 'Готический реквием (Ультимейт)', desc: 'Освобождает ураган чаотических сил Тьмы, замедляя ход времени и стирая врагов в пыль мощным взрывом.' }
      ]
    },
    alan: {
      name: 'АЛАН (ALAN)',
      role: 'Элитный мечник · Специалист',
      type: 'Бой',
      element: 'Мороз',
      weapon: 'Тахионная катана',
      affiliation: 'Дивизион клинков A.C.D.',
      desc: 'Крутой синеволосый мастер молниеносного боя на мечах. Его смертоносные ледяные выпады наносят огромные урон и выглядят максимально зрелищно.',
      skills: [
        { name: 'Звуковой клинок (Базовый)', desc: 'Наносит до 5 быстрых вертикальных и горизонтальных режущих ударов клинком.' },
        { name: 'Мгновенный выпад (Особый)', desc: 'Телепортируется за спину оппонентов с замораживающей атакой, временно сковывая их движения в лед.' },
        { name: 'Рассечение Абсолютного нуля (Ультимейт)', desc: 'В режиме перегрузки наносит сотни круговых ударов невероятной разрушительной силы в стихии Мороза.' }
      ]
    },
    mechanika: {
      name: 'МЕХАНИКА (MECHANIKA)',
      role: 'Магистр инженерии · Поддержка',
      type: 'Поддержка',
      element: 'Огонь',
      weapon: 'Тяжелый пневмоключ',
      affiliation: 'Мастерская A.C.D.',
      desc: 'Жизнерадостная девочка с розовыми волосами и надетой задом наперед кепкой. Инженер от бога и лучший друг озорной Таффи.',
      skills: [
        { name: 'Сокрушающий удар ключа (Базовый)', desc: 'Бьет тяжелым гаечным ключом, мгновенно пробивая силовую броню и преграждающие щиты врага.' },
        { name: 'Ускорение генератора (Особый)', desc: 'Создает силовой излучатель, повышающий скорость нанесения ударов и добавляющий союзникам урон Огнем.' },
        { name: 'Термитный удар из космоса (Ультимейт)', desc: 'Направляет тяжелую тактическую ракету, образующую озеро кипящей лавы с мощным эффектом длительного возгорания.' }
      ]
    }
  }
};

// Localized character description and skill values
function getLocalizedCharacters(lang: string): Record<string, {
  name: string;
  role: string;
  type: string;
  element: string;
  weapon: string;
  affiliation: string;
  desc: string;
  skills: { name: string; desc: string }[];
}> {
  const data: Record<string, Record<string, any>> = {
    EN: {
      taffy: {
        name: 'TAFFY',
        role: 'Delivery Worker · A.C.D. Agent',
        type: 'Utility',
        element: 'Electric',
        weapon: 'Hammer',
        affiliation: 'A.C.D.',
        desc: 'The poster girl of Ananta. A delivery worker wielding a massive hammer. Known for high-mobility traversal using her customized motorcycle and chaotic combat style.',
        skills: [
          { name: 'Smash Delivery (Basic)', desc: 'Swings her giant hammer for a 3-hit combo dealing physical damage.' },
          { name: 'Express Drive (Skill)', desc: 'Summons her motorcycle to rush forward, dealing Electric damage and knocking smaller enemies into the air. Grants temporary Super Armor.' },
          { name: 'Same-Day Delivery (Ultimate)', desc: 'Leaps into the air and crashes down with immense force, creating an Electric shockwave that stuns surrounding Chaos entities.' }
        ]
      },
      richie: {
        name: 'RICHIE',
        role: 'Police Officer · A.C.D. Agent',
        type: 'Support',
        element: 'Wind',
        weapon: 'Pistols',
        affiliation: 'N.C.P.D',
        desc: 'A dedicated police officer keeping the peace in Nova City. Utilizes tactical equipment and dual pistols to control the battlefield and support her allies.',
        skills: [
          { name: 'Suppressing Fire (Basic)', desc: 'Fires calculated shots from her dual pistols. Can be fired while strafing.' },
          { name: 'Tactical Flash (Skill)', desc: 'Throws a flashbang that blinds nearby enemies and applies a debuff that reduces their defense for 8 seconds.' },
          { name: 'Backup Protocol (Ultimate)', desc: 'Calls in a tactical drone strike that creates a persistent Wind field, continuously staggering enemies caught within.' }
        ]
      },
      lykaia: {
        name: 'SEYMOUR',
        role: 'A.C.D. Field Agent',
        type: 'Combat',
        element: 'Fire',
        weapon: 'Gauntlets',
        affiliation: 'A.C.D.',
        desc: 'Featured prominently in the 10-minute gameplay reveal. A high-mobility combat specialist shown dealing with Chaos threats across Nova City.',
        skills: [
          { name: 'Rapid Strike (Basic)', desc: 'A blazing fast 5-hit martial arts combo.' },
          { name: 'Ignition Kick (Skill)', desc: 'A devastating forward kick coated in flames. Can be charged for additional damage and guard-break.' },
          { name: 'Nova Burst (Ultimate)', desc: 'Unleashes stored kinetic energy in a massive explosive radius, gaining increased attack speed for 15 seconds afterward.' }
        ]
      },
      captain: {
        name: 'CAPTAIN',
        role: 'A.C.D. Team Leader',
        type: 'Command',
        element: 'Adaptive',
        weapon: 'Varies',
        affiliation: 'A.C.D.',
        desc: 'The player character and leader of the Nova City squad. Tasked with managing agents, dealing with Chaos events, and piecing together the overarching mysteries of the city itself.',
        skills: [
          { name: 'Adaptive Strikes (Basic)', desc: 'A versatile attack combo that changes depending on the currently equipped Core.' },
          { name: 'Command Dash (Skill)', desc: 'A quick evasive maneuver that leaves behind a holographic decoy.' },
          { name: 'Override (Ultimate)', desc: 'Taps into the city\'s network to briefly reveal enemy weaknesses and boost the entire squad\'s critical rate.' }
        ]
      },
      shiye: {
        name: 'SHIYE',
        role: 'Finance Officer · A.C.D. Investigator',
        type: 'Support',
        element: 'Aether',
        weapon: 'Tactical Technology Tablet',
        affiliation: 'A.C.D.',
        desc: '"I handle the cash, you handle the fighting." An old friend of the Captain. Extremely intelligent and well-versed in various advanced technologies, she oversees all field financial operations in Nova City.',
        skills: [
          { name: 'Funding Calculation (Basic)', desc: 'Fires high-tech holographic calculations at targets, dealing Aether damage and tagging them for resource refunds.' },
          { name: 'Aether Shielding Matrix (Skill)', desc: 'Deploys a digital shielding matrix that absorbs damage based on current squad funding, granting teammates continuous regeneration.' },
          { name: 'Budget Overhaul (Ultimate)', desc: 'Taps into the financial database to optimize squad resources, resetting cooldowns of allies\' active skills and increasing overall tactical efficiency.' }
        ]
      },
      yinglong: {
        name: 'WEI YINGLONG',
        role: '21st Director · A.C.D. Agent',
        type: 'Combat',
        element: 'Frost',
        weapon: 'Lingyun Azure Staff',
        affiliation: 'Chongxiao Lingyun / A.C.D.',
        desc: 'As the 21st Director of Lingyun, she manages the ancient temple, watches over the villagers, and keeps her troublemaking sister under tight control. She wields supreme cryogenic powers with martial art elegance.',
        skills: [
          { name: 'Azure Pierce (Basic)', desc: 'Strikes gracefully with her Azure Staff, dealing physical and Frost damage in a 4-hit combo.' },
          { name: 'Lingyun Cyclone (Skill)', desc: 'Spins her staff rapidly to create a freezing vortex that draws in nearby enemies, dealing continuous Frost damage and slowing their movement.' },
          { name: 'Dragon\'s Frostfall (Ultimate)', desc: 'Leaps high and summons the ancient frost dragon spirit to crash down, freezing all enemies in a massive radius and granting herself Cryo-enhanced strikes for 12 seconds.' }
        ]
      }
    },
    CN: {
      taffy: {
        name: '塔菲 (TAFFY)',
        role: '送货员 · A.C.D. 探员',
        type: '功能',
        element: '感电',
        weapon: '巨锤',
        affiliation: 'A.C.D. 特别探测科',
        desc: '《代号：无限大》招牌广告看板娘。手持巨型蓄力锤的长腿送货少女。不仅能在极速驾驶改装摩托时进行超高机动的屋脊摆荡与街区移动，其战法更是极尽混乱和破坏力。',
        skills: [
          { name: '急速达派送 (普通攻击)', desc: '挥舞巨大的粉色战锤进行3重连击，造成大额物理伤害，最后一下额外附带破击效果。' },
          { name: '限时极速漂移 (元素战技)', desc: '召唤特制的改装摩托车向正前方高速撞击，造成感电伤害并击飞小型敌人。充能期间获得短暂的霸体保护。' },
          { name: '同城当日达 (元素爆发)', desc: '跃入高空以雷霆之势猛击地面，瞬间引发强力电子崩溃冲击波，使范围内所有异常混沌实体瘫痪控制。' }
        ]
      },
      richie: {
        name: '里栖 (RICHIE)',
        role: '警员 · A.C.D. 探员',
        type: '支援',
        element: '疾风',
        weapon: '双持手枪',
        affiliation: '新星城市警察局 (N.C.P.D)',
        desc: '一位兢兢业业维护新星街区日常治安的温柔警官。擅长精巧战术装备和中距离双持连发手枪进行牵制，提供极佳的控场和充能充值加成。',
        skills: [
          { name: '强制压制射击 (普通攻击)', desc: '双枪快速而精准地开火射击。可以在侧向滑行与战术空翻进程中进行连续移动射击。' },
          { name: '战术震撼催泪弹 (元素战技)', desc: '投掷一枚定制极风闪光眩晕手榴弹，使周围敌人失明、减速，并施加减少15%防御力的减益效果，持续8秒。' },
          { name: '空中重火力支援 (元素爆发)', desc: '呼叫警界重装无人潜行机，在目标区域持续释放风暴力场，不断吸附、聚拢并硬直其内的敌人。' }
        ]
      },
      lykaia: {
        name: '赛墨 (SEYMOUR)',
        role: '突击 · A.C.D. 探员',
        type: '强攻',
        element: '烈焰',
        weapon: '高能拳刃',
        affiliation: 'A.C.D. 战术攻坚队',
        desc: '在长达十分钟的主线实机PV中担任主角。具备无与伦比的极速跑图能力与空中近战连击。作为精锐战术冲锋队员，擅长运用狂风暴雨般的火焰重拳粉碎一切城市里的“混沌”怪兽。',
        skills: [
          { name: '狂澜瞬袭 (普通攻击)', desc: '结合街舞与泰拳风流的迅捷5段式拳脚混合重击。' },
          { name: '烈浪穿心踢 (元素战技)', desc: '以炽热烈浪包裹小腿进行穿刺性的强力飞踢。长按可增加蓄力条以获得极高打断力和大幅火焰爆发。' },
          { name: '超星核熔爆发 (元素爆发)', desc: '瞬间引爆高能拳刃中所积攒的超限动能，造成致命范围火焰伤害，并在接下来的15秒内令自身攻击速度翻倍。' }
        ]
      },
      captain: {
        name: '队长 (CAPTAIN)',
        role: 'A.C.D. 队长',
        type: '主控',
        element: '自适应',
        weapon: '多武装切换',
        affiliation: 'A.C.D. 特别行动班',
        desc: '玩家所扮演的主角，新星探测小队的战术领袖。其职责一方面是指挥调配不同风格的干员们，另一方面则是深入现场清理异象事件，并探寻整座新星高墙背后不为人知的远古真相。',
        skills: [
          { name: '流动武器拟化 (普通攻击)', desc: '多功能自适应制式拳刃与光剑复合攻击。招式和出刀轨迹会根据当前装填的核心属性发生巨变。' },
          { name: '跃迁撤离迷彩 (元素战技)', desc: '迅速朝任意方向产生一段战术滑步侧闪，并在原处凝聚一个可以持续挑衅引诱附近敌人的光学雷达全息诱饵。' },
          { name: '重组网络超频 (元素爆发)', desc: '强行接入新星基站的中枢电网进行战术支援，立即弱点扫描全部对手弱项，同时为我方所有队员提供极高爆发的暴击加成。' }
        ]
      },
      shiye: {
        name: '石野 (SHIYE)',
        role: '财务官 · A.C.D. 探测员',
        type: '支援',
        element: '以太',
        weapon: '战术科技终端',
        affiliation: 'A.C.D. 特别行动班',
        desc: '“我负责管钱，你负责打架。”队长的老朋友。精通各种先进技术，极具聪明才智，统筹着新星城所有的实地财务运营。',
        skills: [
          { name: '精准预算结算 (普通攻击)', desc: '操纵高能投影数据进行快速攻击，对敌人造成以太属性伤害，并标记目标进行资金回收。' },
          { name: '以太防御屏障 (元素战技)', desc: '部署全息战术终端形成强力科技屏障，吸收受到的所有属性伤害，同时为队友提供持续以太能量回复。' },
          { name: '财务重组协议 (元素爆发)', desc: '全面重组战场战术分配，优化小队技能冷却，重置队友技能并大幅提升全体队员的作战效率与防御能力。' }
        ]
      },
      yinglong: {
        name: '魏莹珑 (WEI YINGLONG)',
        role: '重霄凌云第21代掌门 · A.C.D. 探测员',
        type: '强攻',
        element: '极寒',
        weapon: '碧空长枪',
        affiliation: '重霄凌云 / A.C.D.',
        desc: '作为重霄凌云第21代掌门，她统管着宗门古庙，照顾村落中的孩子们，并时刻约束着那爱惹麻烦的妹妹。在战斗中，她将极寒冰雪之力与飘逸的枪术完美融合。',
        skills: [
          { name: '碧空流光闪 (普通攻击)', desc: '手持长枪进行优雅的四段枪刺，造成物理与极寒属性伤害。' },
          { name: '凌云枪舞 · 霜风 (元素战技)', desc: '高速舞动长枪形成极寒旋风，将周围的敌人吸附至枪尖，造成持续极寒伤害并大幅减速。' },
          { name: '苍龙覆雪斩 (元素爆发)', desc: '跃入半空，引动古老霜龙之灵降临战阵，对大范围内的所有敌人进行强力寒冬震击，使敌人陷入冰冻状态，并获得12秒的寒霜附魔。' }
        ]
      }
    },
    TW: {
      taffy: {
        name: '塔菲 (TAFFY)',
        role: '送貨員 · A.C.D. 探員',
        type: '功能',
        element: '感電',
        weapon: '巨錘',
        affiliation: 'A.C.D. 特別探測科',
        desc: '《代號：無限大》招牌廣告看板娘。手持巨型蓄力錘的長腿送貨少女。不僅能在極速駕駛改裝摩托時進行超高機動的屋脊擺盪與街區移動，其戰法更是極盡混亂和破壞力。',
        skills: [
          { name: '急速達派送 (普通攻擊)', desc: '揮舞巨大的粉色戰錘進行3重連擊，造成大額物理傷害，最後一下額外附帶破擊效果。' },
          { name: '限時極速漂移 (元素戰技)', desc: '召喚特制的改裝摩托車向正前方高速撞擊，造成感電傷害並擊飛小型敵人。充能期間獲得短暫的霸體保護。' },
          { name: '同城當日達 (元素爆發)', desc: '躍入高空以雷霆之勢猛擊地面，瞬間引發強力電子崩潰衝擊波，使範圍內所有異常混沌實體癱瘓控制。' }
        ]
      },
      richie: {
        name: '里棲 (RICHIE)',
        role: '警員 · A.C.D. 探員',
        type: '支援',
        element: '疾風',
        weapon: '雙持手槍',
        affiliation: '新星城市警察局 (N.C.P.D)',
        desc: '一位兢兢業業維護新星街區日常治安的溫柔警官。擅長精巧戰術裝備和中距離雙持連發手槍進行牽制，提供極佳的控場和充能充值加成。',
        skills: [
          { name: '強制壓制射擊 (普通攻擊)', desc: '雙槍快速而精準地開火射擊。可以在側向滑行與戰術空翻進程中進行連續移動射擊。' },
          { name: '戰術震撼催淚彈 (元素戰技)', desc: '投擲一枚定制極風閃光眩暈手榴彈，使周圍敵人失明、減速，並施加減少15%防禦力的減益效果，持續8秒。' },
          { name: '空中重火力支援 (元素爆發)', desc: '呼叫警界重裝無人潛行機，在目標區域持續釋放風暴力場，不斷吸附、聚攏並硬直其內的敵人。' }
        ]
      },
      lykaia: {
        name: '賽墨 (SEYMOUR)',
        role: '突擊 · A.C.D. 探員',
        type: '強攻',
        element: '烈焰',
        weapon: '高能拳刃',
        affiliation: 'A.C.D. 戰術攻堅隊',
        desc: '在長達十分鐘的主線實機PV中擔任主角。具備無與倫比的極速跑圖能力與空中近戰連擊。作為精銳戰術衝鋒隊員，擅長運用狂風暴雨般的火燄重拳粉碎一切城市裡的“混沌”怪獸。',
        skills: [
          { name: '狂瀾瞬襲 (普通攻擊)', desc: '結合街舞與泰拳風流的迅捷5段式拳腳混合重擊。' },
          { name: '烈浪穿心踢 (元素戰技)', desc: '以熾熱烈浪包裹小腿進行穿刺性的強力飛踢。長按可增加蓄力條以獲得極高打斷力和大幅火燄爆發。' },
          { name: '超星核熔爆發 (元素爆發)', desc: '瞬間引爆高能拳刃中所積攢的超限動能，造成致命範圍火燄傷害，並在接下來的15秒內令自身攻擊速度翻倍。' }
        ]
      },
      captain: {
        name: '隊長 (CAPTAIN)',
        role: 'A.C.D. 隊長',
        type: '主控',
        element: '自適應',
        weapon: '多武裝切換',
        affiliation: 'A.C.D. 特別行動班',
        desc: '玩家所扮演的主角，新星探測小隊的戰術領袖。其職責一方面是指配調度不同風格的干員們，另一方面則是深入現場清理異象事件，並探尋整座新星高牆背後不為人知的遠古真相。',
        skills: [
          { name: '流動武器擬化 (普通攻擊)', desc: '多功能自適應制式拳刃與光劍複合攻擊。招式和出刀軌跡會根據當前裝填的核心屬性發生巨變。' },
          { name: '躍遷撤離迷彩 (元素戰技)', desc: '迅速朝任意方向產生一段戰術滑步側閃，並在原處凝聚一個可以持續挑釁引誘附近敵人的光學雷達全息誘餌。' },
          { name: '重組網絡超頻 (元素爆發)', desc: '強行接入新星基站的中樞電網進行戰術支援，立即弱點掃描全部對手弱項，同時為我方所有隊員提供極高爆發的暴擊加成。' }
        ]
      },
      shiye: {
        name: '石野 (SHIYE)',
        role: '財務官 · A.C.D. 探測員',
        type: '支援',
        element: '乙太',
        weapon: '戰術科技終端',
        affiliation: 'A.C.D. 特別行動班',
        desc: '「我負責管錢，你負責打架。」隊長的老朋友。精通各種先進技術，極具聰明才智，統籌著新星城所有的實地財務營運。',
        skills: [
          { name: '精準預算結算 (普通攻擊)', desc: '操縱高能投影數據進行快速攻擊，對敵人造成乙太屬性傷害，並標記目標進行資金回收。' },
          { name: '乙太防禦屏障 (元素戰技)', desc: '部署全息戰術終端形成強力科技屏障，吸收受到的所有屬性傷害，同時為隊友提供持續乙太能量回復。' },
          { name: '財務重組協定 (元素爆發)', desc: '全面重組戰場戰術分配，優化小隊技能冷卻，重置隊友技能並大幅提升全體隊員的作戰效率與防禦能力。' }
        ]
      },
      yinglong: {
        name: '魏瑩瓏 (WEI YINGLONG)',
        role: '重霄凌雲第21代掌門 · A.C.D. 探測員',
        type: '強攻',
        element: '極寒',
        weapon: '碧空長槍',
        affiliation: '重霄凌雲 / A.C.D.',
        desc: '作為重霄凌雲第21代掌門，她統管著宗門古廟，照顧村落中的孩子們，並時刻約束著那愛惹麻煩的妹妹。在戰鬥中，她將極寒冰雪之力與飄逸的槍術完美融合。',
        skills: [
          { name: '碧空流光閃 (普通攻擊)', desc: '手持長槍進行優雅的四段槍刺，造成物理與極寒屬性傷害。' },
          { name: '凌雲槍舞 · 霜風 (元素戰技)', desc: '高速舞動長槍形成極寒旋風，將周圍的敵人吸附至槍尖，造成持續極寒傷害並大幅減速。' },
          { name: '蒼龍覆雪斬 (元素爆發)', desc: '躍入半空，引動古老霜龍之靈降臨戰陣，對大範圍內的所有敵人進行強力寒冬震擊，使敵人陷入冰凍狀態，並獲得12秒的寒霜附魔。' }
        ]
      }
    },
    JP: {
      taffy: {
        name: 'タフィ (TAFFY)',
        role: '配達員 · A.C.D. エージェント',
        type: 'ユーティリティ',
        element: '電撃',
        weapon: '巨大ハンマー',
        affiliation: 'A.C.D.',
        desc: '『Ananta』の看板娘。巨大なハンマーを振るうロングレッグ配達少女。カスタムバイクを巧みに操り、驚異的な移動力で摩天楼を飛び回り、自由奔放でド派手なバトルスタイルを展開する。',
        skills: [
          { name: 'スマッシュデリバリー (通常攻撃)', desc: '巨大なハンマーを力強く振り回し、3連続で大ダメージの物理攻撃を繰り出す。' },
          { name: 'エクスプレスドリフト (スキル)', desc: '特製バイクを召喚して前方へ高速突進。電撃ダメージを与えて周囲の敵をノックアップさせ、突進中はスーパーアーマー状態になる。' },
          { name: '即日配達スペシャル (アルティメット)', desc: '空中へ高く飛び上がり、凄まじい衝撃とともに地面を強振。一瞬で強力な放電ショックウェーブを放ち、周囲の混沌異変体をスタンさせる。' }
        ]
      },
      richie: {
        name: 'リキ (RICHIE)',
        role: '警官 · A.C.D. エージェント',
        type: 'サポート',
        element: '疾風',
        weapon: 'ダブルハンドガン',
        affiliation: 'ノバ市警察 (N.C.P.D)',
        desc: '穏やかで正義感あふれる女性警察官。様々な戦術ガジェットを駆使し、ダブルハンドガンによる中距離射撃で戦場をコントロールするサポートのスペシャリスト。',
        skills: [
          { name: '制圧掃射 (通常攻撃)', desc: '二丁拳銃で素早く正確に連続射撃を行う。ダッシュや戦術回避アクションの最中でも移動しながら撃ち続けることが可能。' },
          { name: 'タクティカル・フラッシュ (スキル)', desc: '特製の強風フラッシュグレネードを投擲し、敵の目を眩ませる。速度を低下させるとともに、8秒間敵の防御力を15%低下させる。' },
          { name: 'ドローン・ストライク (アルティメット)', desc: 'N.C.P.D戦術支援ドローンを召喚。一定時間持続する嵐のフィールドを形成し、フィールド内の敵を連続ノックバック＆吸引する。' }
        ]
      },
      lykaia: {
        name: 'サイモ (SEYMOUR)',
        role: '突撃 · A.C.D. エージェント',
        type: 'アタッカー',
        element: '烈火',
        weapon: 'パワーナックル',
        affiliation: 'A.C.D. 急襲班',
        desc: '10分間の実機先行プレイ映像で主人公を務めたアタッカー。圧倒的なスピードとスタイリッシュな接近戦を得意とし、火炎の強力パンチで混沌の異変を粉砕する。',
        skills: [
          { name: 'フェニックス・ストライク (通常攻撃)', desc: 'ストリートダンスとムエタイを融合させた、目にも留まらぬ速さの5段打撃コンボ。' },
          { name: 'イグニッション・キック (スキル)', desc: '足に激しい炎を纏い強烈な飛び蹴りを放つ。長押しするとチャージされ、敵の盾（ガード）を大破させる強力な一撃になる。' },
          { name: 'ノヴァバースト (アルティメット)', desc: 'ナックルに蓄積されたエネルギーを一瞬で解放し、大規模な爆発炎上ダメージを与える。発動後15秒間、自身の攻撃速度が大幅に向上する。' }
        ]
      },
      captain: {
        name: '隊長 (CAPTAIN)',
        role: 'A.C.D. チームリーダー',
        type: 'コマンダー',
        element: '適応/無属性',
        weapon: '多属性武装',
        affiliation: 'A.C.D. 特捜小隊',
        desc: 'プレイヤー自身が演じる新星部隊の若きリーダー。個性の強いエージェントたちを巧みに指揮し、事件を解明するとともに世界の真実に迫る。',
        skills: [
          { name: 'アダプティブコンボ (通常攻撃)', desc: '自適応の光剣と拳銃を交えた万能戦闘シークエンス。自身が装備しているコアの属性によって攻撃エフェクトや効果が変化する。' },
          { name: 'タクティカルホログラム (スキル)', desc: '指定方向に素早くステップ回避しつつ、その場に敵を挑発し続ける光学デコイを設置する。' },
          { name: 'オーバーライド超頻 (アルティメット)', desc: '街のデータネットワークにシステム割り込み。すべての敵の弱点を直ちに開示し、チーム全員のクリティカル率を一定時間大きく上昇させる。' }
        ]
      },
      shiye: {
        name: '石野 (SHIYE)',
        role: '財務官 · A.C.D. エージェント',
        type: 'サポート',
        element: 'エーテル',
        weapon: '戦術テクノロジー端末',
        affiliation: 'A.C.D.',
        desc: '「私はお金の管理を、あなたは戦いを担当するの。」隊長の昔からの友人。高度な先端技術に精通し、並外れた知性を持ち、ノバ市におけるすべての実地財務運営を統括している。',
        skills: [
          { name: '精密予算精算 (通常攻撃)', desc: 'ホログラフィックデータを用いて素早く攻撃し、敵にエーテル属性ダメージを与えて資金リサイクルタグを付与する。' },
          { name: 'エーテル・バリア (スキル)', desc: 'ハイテク戦術端末を展開して強固な電磁バリアを生成。敵の攻撃を吸収するとともに、味方のエーテルエネルギーを継続回復する。' },
          { name: '財務再構築プロトコル (アルティメット)', desc: '戦場のリソース配分を再構築して味方のスキルクールダウンをリセットし、小隊全員の攻撃効率と耐久力を飛躍的に向上させる。' }
        ]
      },
      yinglong: {
        name: 'ウェイ・インロン (WEI YINGLONG)',
        role: '凌雲第21代門主 · A.C.D.',
        type: 'アタッカー',
        element: '氷結',
        weapon: '碧空長槍',
        affiliation: '凌雲 / A.C.D.',
        desc: '凌雲の第21代門主として、古の寺院を管理し、村の子供たちの世話をしながら、トラブルメーカーの妹を厳しく見守っている。卓越した槍術と極低温の力を操る。',
        skills: [
          { name: '碧空の流星突 (通常攻撃)', desc: '長槍で優雅な4段突きを繰り出し、物理および氷結ダメージを与える。' },
          { name: '凌雲槍舞・霜風 (スキル)', desc: '槍を高速で回転させて凍てつく渦を生み出し、周囲の敵を引き寄せながら持続的な氷結ダメージと減速効果を与える。' },
          { name: '蒼龍降雪の刃 (必殺技)', desc: '空中へ跳躍し、古の霜龍の精霊を召喚して地表に叩きつける。広範囲의 敵を氷結状態にし、自身に12秒間、氷結属性の追撃効果を付与する。' }
        ]
      }
    },
    KR: {
      taffy: {
        name: '타피 (TAFFY)',
        role: '배달원 · A.C.D. 요원',
        type: '유틸리티',
        element: '전기',
        weapon: '대형 해머',
        affiliation: 'A.C.D.',
        desc: '『Ananta』의 간판 소녀. 대형 해머를 휘두르는 고속 질주 배달원. 자신만의 커스텀 오토바이를 소환하여 엄청난 기동성으로 도시를 활보하며, 시원시원하고 혼란스러운 전투 메커니즘을 선보인다.',
        skills: [
          { name: '익스프레스 스매시 (일반 공격)', desc: '자이언트 해머를 3연속 휘둘러 대상에게 큰 물리 피해를 줍니다.' },
          { name: '한계돌파 드라이브 (전투 스킬)', desc: '오토바이로 질주하여 전기 속성 피해를 입히고 주변 적들을 에어본 시킵니다. 질주 중에는 슈퍼 아머가 제공됩니다.' },
          { name: '당일 번개 배송 (필살기)', desc: '하늘 높이 도약한 뒤 대지에 강력한 전하 충격을 가해 주변의 모든 혼돈 개체들을 마비 제어합니다.' }
        ]
      },
      richie: {
        name: '리치 (RICHIE)',
        role: '경찰 · A.C.D. 요원',
        type: '서포트',
        element: '바람',
        weapon: '듀얼 권총',
        affiliation: 'N.C.P.D',
        desc: '노바 시티의 평화를 수호하는 경찰관. 정교한 전술 장비와 중거리 포격을 활용해 아군을 완벽히 백업하고 전장을 입체적으로 통제하는 전장의 제어자.',
        skills: [
          { name: '강제 위력 제압 (일반 공격)', desc: '듀얼 권총으로 아크로바틱하게 이동하며 빠르고 정확하게 적에게 탄막을 발사합니다.' },
          { name: '전술 플래시백 (전투 스킬)', desc: '공기 압축식 바람 수류탄을 던져 적들의 눈을 멀게 하고, 8초간 방어력을 15% 깎는 디버프를 겁니다.' },
          { name: '백업 프로токол (필살기)', desc: '경찰 특수 지원 드론을 긴급 호출하여 바람 칼날 폭풍 지대를 설정해 적들을 한곳으로 빨아들이고 무력화합니다.' }
        ]
      },
      lykaia: {
        name: '세이모어 (SEYMOUR)',
        role: '전투 · A.C.D. 요원',
        type: '딜러',
        element: '화염',
        weapon: '에너지 권갑',
        affiliation: 'A.C.D. 돌격팀',
        desc: '10분 분량의 게임플레이 공식 영상의 주인공. 극한의 무술 실력과 번개 같은 이동기로 무장해 적들의 약점들을 단번에 돌파해 버리는 돌격 대장.',
        skills: [
          { name: '블레이징 메테오 (일반 공격)', desc: '화려한 격투술과 펀치를 조합하여 화염 피해를 주는 강력한 5단계 격투 콤보를 시전합니다.' },
          { name: '이그니션 크래시 (전투 스킬)', desc: '불꽃을 휘감은 강렬한 날아차기를 시전합니다. 차지하여 발동하면 파괴 능력이 폭증해 적들의 가드를 부숴 버립니다.' },
          { name: '초신성 블래스트 (필살기)', desc: '권갑에 응축된 운동 에너지를 일시에 전방으로 방출해 치명적인 대폭발을 유도하고, 15초 동안 공격 속도를 대폭 끌어올립니다.' }
        ]
      },
      captain: {
        name: '캡틴 (CAPTAIN)',
        role: 'A.C.D. 팀 리더',
        type: '커맨더',
        element: '적응',
        weapon: '적응형 웨폰',
        affiliation: 'A.C.D. 스쿼드',
        desc: '플레이어가 직접 플레이하는 주역이자 노바 시티 팀의 총사령관. 각 탐원들과 전장 자원을 능수능란하게 조율해 나가며, 도시를 뒤흔드는 진실을 파헤쳐 갑니다.',
        skills: [
          { name: '변형 연격 코어 (일반 공격)', desc: '현재 장착된 속성 코어 종류에 따라 투사체와 특수 콤보 액션 효과가 다채롭게 변경되는 만능 연격 비법.' },
          { name: '홀로그램 스웨이 (전투 스킬)', desc: '원하는 방향으로 부드럽게 기동 대피하며 전장에 적의 시선을 영구적으로 사로잡는 전술 홀로그램 디코이를 소환합니다.' },
          { name: '중추 지휘 오버로드 (필살기)', desc: '도시 네트워크 광핵에 순간적인 하이재킹 제어를 단행, 적의 실시간 아킬레스건 약점을 파악하고 팀 전원의 치명 성향을 부여합니다.' }
        ]
      },
      shiye: {
        name: '시예 (SHIYE)',
        role: '재무관 · A.C.D. 요원',
        type: '서포트',
        element: '에테르',
        weapon: '전술 테크 패드',
        affiliation: 'A.C.D.',
        desc: '"돈 관리는 내가 하고, 싸움은 너가 해." 대장의 오랜 친구. 첨단 과학기술에 능통하고 지혜로워 노바 시티의 모든 실무 재정 운영을 전담하고 있다.',
        skills: [
          { name: '정밀 정산 분석 (일반 공격)', desc: '홀로그램 데이터 레이저를 투사하여 타겟에게 에테르 속성 피해를 입히고 자금 환급 낙인을 남깁니다.' },
          { name: '에테르 실딩 매트릭스 (전투 스킬)', desc: '디지털 방어 장벽을 전개하여 아군이 받는 원소 피해를 흡수하고 분대원들에게 초당 에너지를 지속 회복시킵니다.' },
          { name: '예산 재배정 프로토콜 (필살기)', desc: '팀 리소스를 실시간으로 최적화하여 동료들의 스킬 쿨타임을 리셋하고 공격력과 작전 효율을 대폭 끌어올립니다.' }
        ]
      },
      yinglong: {
        name: '웨이 잉롱 (WEI YINGLONG)',
        role: '릉운 제21대 장문 · A.C.D. 요원',
        type: '전투',
        element: '빙결',
        weapon: '벽공 장창',
        affiliation: '릉운 / A.C.D.',
        desc: '릉운의 제21대 장문로서 사원을 지키고 롱치 마을 아이들을 보살피며, 말썽꾸러기 여동생을 철저히 감시한다. 빙결 원소와 우아한 창술을 사용해 적을 격퇴한다.',
        skills: [
          { name: '벽공 유광 찌르기 (일반 공격)', desc: '장창으로 우아한 4단 찌르기 공격을 가해 물리 및 빙결 피해를 입힙니다.' },
          { name: '릉운 창무 · 서리 바람 (전투 스킬)', desc: '창을 빠르게 회전시켜 서리 폭풍을 일으켜 주위 적을 끌어당기고 지속적인 빙결 피해와 감속 디버프를 부여합니다.' },
          { name: '창룡 하설 참격 (필살기)', desc: '공중으로 도약해 고대 장벽에 서리 용의 영혼을 강림시켜 광범위한 적을 빙결 상태로 만들고, 12초 동안 서리 강화 평타 속성을 획득합니다.' }
        ]
      }
    }
  };

  const selected = data[lang] || data.EN;
  return selected;
}

export function CharacterPage({ characterId }: { characterId: string }) {
  const { lang } = useLanguage();
  const idLower = characterId.toLowerCase();

  const baseChar = CHARACTERS[idLower];
  const localizedChars = getLocalizedCharacters(lang);
  const localizedChar = localizedChars[idLower];
  const lbl = LABELS[lang] || LABELS.EN;

  if (!baseChar || !localizedChar) {
    return (
      <div className="min-h-[80vh] flex items-center justify-center bg-ananta-bg pt-20">
        <div className="text-center">
          <h1 className="font-display text-4xl text-white mb-4">{lbl.agentNotFound}</h1>
          <a href="/" className="text-ananta-neon font-mono hover:underline">{lbl.backToDatabase}</a>
        </div>
      </div>
    );
  }

  // Merge base static fields with localized text fields
  const char = {
    ...baseChar,
    ...localizedChar
  };

  return (
    <div className="bg-ananta-bg min-h-screen pt-[60px]">
      {/* Hero Banner Layer */}
      <div className="relative h-[60vh] w-full overflow-hidden border-b border-ananta-border">
        {/* Background Video/Image fallback */}
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-ananta-bg/60 mix-blend-multiply z-10"></div>
          <div className="absolute inset-0 bg-gradient-to-t from-ananta-bg via-transparent to-transparent z-10"></div>
          <img src={char.bg} alt="Background" referrerPolicy="no-referrer" className="w-full h-full object-cover opacity-30" />
        </div>

        <div className="absolute inset-0 z-20 flex px-[5vw] items-center">
          <div className="flex gap-12 items-center w-full max-w-7xl mx-auto">
            {/* Portrait */}
            <div className="w-[30%] max-w-[400px] aspect-[3/4] border border-ananta-neon/30 bg-ananta-bg3 relative overflow-hidden group shadow-[0_0_50px_rgba(0,229,255,0.1)]">
              {char.image.endsWith('.mp4') ? (
                <video
                  src={char.image}
                  autoPlay
                  loop
                  muted
                  playsInline
                  className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
              ) : (
                <img
                  src={char.image}
                  alt={char.name}
                  referrerPolicy="no-referrer"
                  onError={(e) => {
                    e.currentTarget.src = 'https://images.unsplash.com/photo-1578632767115-351597cf2477?q=80&w=600&auto=format&fit=crop';
                  }}
                  className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
              )}
              <div className="absolute inset-0 char-gradient opacity-80" />
              <div className="absolute bottom-4 left-4 border-l-2 border-ananta-neon pl-3">
                <div className="text-white font-display text-4xl">{char.name}</div>
                <div className="font-mono text-[0.65rem] tracking-[0.2em] text-ananta-neon uppercase">{char.role}</div>
              </div>
            </div>

            {/* Quick Stats Grid */}
            <div className="flex-1">
              <a href="/" className="inline-block font-mono text-[0.65rem] tracking-[0.2em] text-ananta-muted uppercase hover:text-white mb-6">{lbl.backToRoster}</a>
              
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 bg-ananta-bg2/80 backdrop-blur-md border border-ananta-border p-6 mb-8">
                <div>
                  <div className="font-mono text-[0.55rem] text-ananta-muted uppercase tracking-[0.1em] mb-1">{lbl.combatRole}</div>
                  <div className="font-bold text-white uppercase text-sm tracking-wider">{char.type}</div>
                </div>
                <div>
                  <div className="font-mono text-[0.55rem] text-ananta-muted uppercase tracking-[0.1em] mb-1">{lbl.element}</div>
                  <div className="font-bold text-[#a855f7] uppercase text-sm tracking-wider">{char.element}</div>
                </div>
                <div>
                  <div className="font-mono text-[0.55rem] text-ananta-muted uppercase tracking-[0.1em] mb-1">{lbl.weaponType}</div>
                  <div className="font-bold text-white uppercase text-sm tracking-wider">{char.weapon}</div>
                </div>
                <div>
                  <div className="font-mono text-[0.55rem] text-ananta-muted uppercase tracking-[0.1em] mb-1">{lbl.affiliation}</div>
                  <div className="font-bold text-[#00e5ff] uppercase text-sm tracking-wider">{char.affiliation}</div>
                </div>
              </div>

              <div className="text-ananta-muted text-sm leading-[1.8] max-w-2xl border-l-[1px] border-ananta-border pl-6">
                {char.desc}
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-[5vw] py-20 flex gap-16 flex-col lg:flex-row">
        
        {/* Main Content Area */}
        <div className="flex-1 space-y-16">
          {/* Skills Section */}
          <section>
            <SectionLabel text={lbl.combatProtocol} />
            <SectionTitle text={`${char.name} - ${lbl.skillsTitle}`} />
            
            <div className="space-y-6">
              {char.skills.map((skill: any, idx: number) => (
                <div key={idx} className="bg-ananta-bg2 border border-ananta-border p-6 flex gap-6 group hover:border-ananta-neon/40 transition-colors">
                   <div className="w-16 h-16 shrink-0 bg-ananta-bg border border-white/5 flex items-center justify-center font-mono text-2xl text-ananta-neon/30 group-hover:text-ananta-neon group-hover:glow-neon transition-all">
                      0{idx + 1}
                   </div>
                   <div>
                     <h3 className="font-display text-xl text-white mb-2">{skill.name}</h3>
                     <p className="text-[0.85rem] text-ananta-muted leading-[1.7]">{skill.desc}</p>
                   </div>
                </div>
              ))}
            </div>
            <p className="mt-4 font-mono text-[0.6rem] tracking-[0.15em] text-ananta-muted uppercase block">
              {lbl.disclaimer}
            </p>
          </section>

          {/* Gameplay Showcase */}
          <section>
            <SectionLabel text={lbl.visualData} />
            <SectionTitle text={lbl.showcase} />
            
            <div className="w-full">
              <VideoPlayer src={char.video} />
            </div>
          </section>
        </div>

        {/* Sidebar */}
        <div className="w-full lg:w-[350px] space-y-8">
           {/* Team Comps (Placeholder) */}
           <div className="bg-ananta-bg2 border border-ananta-border p-6">
             <h4 className="font-mono text-[0.7rem] tracking-[0.2em] text-ananta-neon uppercase mb-4 pb-2 border-b border-ananta-border">
               {lbl.recommendedSynergy}
             </h4>
             <ul className="space-y-4">
                <li className="flex gap-3 items-center">
                  <div className="w-10 h-10 bg-ananta-bg border border-white/10 rounded-full flex items-center justify-center text-xs opacity-50">?</div>
                  <div>
                    <div className="text-white text-sm">TBA Support</div>
                    <div className="text-[0.65rem] text-ananta-muted uppercase tracking-wider">{lbl.awaitingData}</div>
                  </div>
                </li>
                <li className="flex gap-3 items-center">
                  <div className="w-10 h-10 bg-ananta-bg border border-white/10 rounded-full flex items-center justify-center text-xs opacity-50">?</div>
                  <div>
                    <div className="text-white text-sm">TBA Burst</div>
                    <div className="text-[0.65rem] text-ananta-muted uppercase tracking-wider">{lbl.awaitingData}</div>
                  </div>
                </li>
             </ul>
           </div>

           {/* Build Guide Ad Slot */}
           <div className="w-full h-[300px] border border-ananta-border border-dashed flex flex-col items-center justify-center text-center p-6 pb-8 bg-ananta-bg2/50 relative overflow-hidden">
                <div className="absolute inset-0 opacity-[0.03] bg-[radial-gradient(#fff_1px,transparent_1px)] [background-size:16px_16px]" />
                <span className="font-mono text-[0.65rem] tracking-[0.1em] text-ananta-muted uppercase mb-4 relative z-10 px-2 py-0.5 bg-ananta-bg border border-ananta-border">
                  {lbl.adSlot}
                </span>
                <span className="text-ananta-muted/50 text-[0.75rem] max-w-[200px] relative z-10 leading-relaxed font-mono">
                  {lbl.sponsored}
                </span>
           </div>
        </div>

      </div>
    </div>
  );
}
