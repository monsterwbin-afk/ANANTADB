export interface BlogPost {
  id: string;
  title: Record<string, string>;
  slug: string;
  summary: Record<string, string>;
  content: Record<string, string>;
  category: 'tech' | 'combat' | 'lore' | 'traversal' | 'devlog';
  categoryLabel: Record<string, string>;
  tags: string[];
  coverImage: string;
  author: {
    name: string;
    role: Record<string, string>;
    avatar: string;
    handle: string;
  };
  date: string;
  readTimeMin: number;
  initialLikes: number;
  initialViews: number;
  featured?: boolean;
}

export const INITIAL_BLOG_POSTS: BlogPost[] = [
  {
    id: "4",
    slug: "do-you-really-know-what-story-ananta-is-trying-to-tell",
    category: "lore",
    categoryLabel: {
      CN: "世界观 · 剧情解读",
      TW: "世界觀 · 劇情解讀",
      EN: "Worldview & Lore Breakdown",
      JP: "世界観・ストーリー解説",
      KR: "세계관 · 스토리 심층 분석",
      DE: "Weltbild & Story-Analyse",
      FR: "Univers & Analyse de l'Histoire",
      IT: "Ambientazione & Analisi della Trama",
      RU: "Лор и разбор сюжета"
    },
    tags: [
      "无限大",
      "世界观",
      "剧情解析",
      "混厄对策局",
      "无限扳机",
      "新启市",
      "重霄市",
      "都市传说",
      "Ananta"
    ],
    coverImage: "https://www.anantagame.com/pc/gw/20250904162009/assets/role-tafei_0ed12004.jpg",
    author: {
      name: "Captain Alex",
      role: {
        EN: "Site Webmaster & Veteran Player",
        CN: "本站站长 · 资深玩家",
        TW: "本站站長 · 資深玩家",
        JP: "ファンサイト管理人・古参プレイヤー",
        KR: "사이트 관리자 · 열혈 유저",
        DE: "Seitenbetreiber & Veteranen-Spieler",
        FR: "Créateur du site & Joueur Vétéran",
        IT: "Creatore del sito & Giocatore Veterano",
        RU: "Создатель сайта и опытный игрок"
      },
      avatar: "https://www.anantagame.com/pc/gw/20260811115527/assets/icon-studio_68622482.svg",
      handle: "@CaptainAlex"
    },
    date: "2026-07-06",
    readTimeMin: 5,
    initialLikes: 1890,
    initialViews: 28400,
    featured: true,
    title: {
      CN: "这游戏到底讲了个什么故事你知道嘛？",
      TW: "這遊戲到底講了個什麼故事你知道嘛？",
      EN: "Do You Really Know What Story Ananta Is Trying to Tell?",
      JP: "『無限大（Ananta）』が描く物語の正体、知っていますか？",
      KR: "이 게임이 도대체 어떤 이야기를 다루는지 아시나요?",
      DE: "Weißt du eigentlich, welche Geschichte Ananta wirklich erzählt?",
      FR: "Savez-vous vraiment quelle histoire raconte Ananta ?",
      IT: "Sai davvero che storia racconta Ananta?",
      RU: "А вы знаете, о чем на самом деле рассказывает сюжет Ananta?"
    },
    summary: {
      CN: "聊了不抽卡、聊了战斗与城市，但《无限大》究竟讲了一个怎样的故事？都市传说成真、“现实”与“混厄”并存的世界。你扮演空降新启市的对策局队长兼网红调查员“无限扳机”，从零开始涨粉、招募奇特伙伴、穿梭于两座城市之间，在拯救世界与体验烟火日常中寻找平衡。",
      TW: "聊了不抽卡、聊了戰鬥與城市，但《無限大》究竟講了一個怎樣的故事？都市傳說成真、「現實」與「混厄」並存的世界。你扮演空降新啟市的對策局隊長兼網紅調查員「無限扳機」，從零開始漲粉、招募奇特夥伴、穿梭於兩座城市之間，在拯救世界與體驗煙火日常中尋找平衡。",
      EN: "We've talked about zero gacha, stylish combat, and gorgeous cities, but what is Ananta's overarching story actually about? A world where urban legends turn real and 'Reality' coexists with 'Chaos.' You play as 'Infinite Trigger,' an A.C.D. captain and rookie influencer in Nova City, gaining followers, recruiting eccentric partners, and balancing saving the world with enjoying urban nightlife across two distinct cities.",
      JP: "ガチャ撤廃や爽快な戦闘、美しい街並みばかりが話題ですが、『無限大』は一体どんな物語を描いているのでしょうか？都市伝説が現実化し、「日常」と「混厄（カオス）」が隣り合わせの世界。プレイヤーは新啓市に降り立った対策局の隊長兼インフルエンサー「無限トリガー」となり、フォロワーを増やし、個性豊かな仲間を集め、世界の救済と人間味あふれる都会暮らしの両立を目指します。",
      KR: "가챠 폐지와 화려한 액션, 멋진 도시에 대해 많은 이야기를 나눴지만, 과연 《무한대》는 어떤 스토리를 품고 있을까요? 도시 전설이 현실이 되고 '현실'과 '혼액'이 공존하는 세계. 플레이어는 신치시에 갓 부임한 대책국 대장이자 인플루언서인 '무한 트리거'가 되어 팔로워를 모으고, 독특한 동료들을 영입하며 세계를 구하는 동시에 활기찬 도시의 일상을 즐기게 됩니다.",
      DE: "Wir haben über das Null-Gacha-Modell, die Kämpfe und die lebendige Metropole gesprochen – aber worum geht es in der Story von Ananta eigentlich? Eine Welt, in der urbane Legenden real sind und Realität auf Chaos trifft. Als A.C.D.-Ermittler und Influencer 'Infinite Trigger' sammelst du Follower, rekrutierst exzentrische Gefährten und balancierst Weltenrettung mit dem pulsierenden Großstadtleben.",
      FR: "Nous avons parlé de la fin du gacha, des combats dynamiques et des villes grandioses, mais que raconte véritablement Ananta ? Dans un monde où les légendes urbaines prennent vie et où réalité côtoie le Chaos, vous incarnez 'Infinite Trigger', capitaine de l'A.C.D. et influenceur débutant à Nova City, qui gagne des abonnés, recrute des partenaires hauts en couleur et concilie sauvetage du monde et vie citadine animée.",
      IT: "Abbiamo parlato dell'assenza di gacha, del sistema di combattimento e della splendida città, ma qual è la vera storia di Ananta? Un mondo in cui le leggende metropolitane diventano realtà e la vita quotidiana convive con il Chaos. Nei panni di 'Infinite Trigger', capitano dell'A.C.D. e aspirante influencer a Nova City, accumuli follower, recluti alleati eccentrici e trovi il perfetto equilibrio tra salvare il mondo e goderti la vita cittadina.",
      RU: "Мы говорили об отмене гачи, боевой системе и красоте открытого мира, но какая история лежит в основе Ananta? Мир, где городские легенды стали явью, а реальность переплетена с Хаосом. В роли капитана A.C.D. и начинающего блогера «Бесконечный курок» в Нова-Сити вы набираете подписчиков, собираете команду чудаков и балансируете между спасением мира и колоритной городской жизнью."
    },
    content: {
      CN: `# 这游戏到底讲了个什么故事你知道嘛？

之前写了好几篇关于《无限大》的博客，聊了它不抽卡、聊了它战斗好玩、聊了它城市做得漂亮。但好像一直没正经说过一件事——这游戏到底讲了个什么故事？

今天就来聊聊这个。

---

### 一个“都市传说成真”的世界

《无限大》的故事背景设定在一个与地球类似但又不太一样的现代世界。最大的区别是什么？**都市传说全部成真了**。

你小时候听过的那些怪谈、那些“朋友的朋友的朋友遇到过”的离奇故事——在这个世界里，它们都是真的。人类与超自然现象共存，街头可能随时出现一些你解释不了的东西。

用官方的话说，这是一个 **“现实”与“异常”并存的世界**。

现实的部分是：有咖啡店、有地铁、有外卖、有社交媒体，你可以在街边买个奶茶然后蹲在路边刷手机。异常的部分是：路边的自动售货机可能突然站起来自己走两步，或者你等红绿灯的时候发现那个红绿灯其实是个长着眼睛的生物在帮你指挥交通。

**“混厄”** ——这是游戏里对所有这些超自然现象的总称。它诞生于人类嘈杂混乱的意识，形态千奇百怪。有些混厄是良性的，会在城市里帮人类干活，比如充当红绿灯；有些是恶性的，会对城市安全造成威胁。连人和汽车都可能变成混厄。

开发团队说了一句话我觉得特别到位：“*一个与现实完全一样的世界会显得枯燥乏味，所以我们加入了现实中不存在的元素——'混沌'。*”他们的目的，就是让玩家体验到 **“现实中不可能实现的体验”** 。

---

### 你扮演的是谁？

在这个世界里，你扮演的是“混厄对策局”的王牌调查员。

“混厄对策局”的英文缩写是 **A.C.D.（Anti-Chaos Directorate）**，是专门负责应对“混厄”现象以及超自然犯罪的官方机关。简单说就是专门管那些怪东西的政府部门。

你的代号叫 **“无限扳机”（Infinite Trigger）** ，是对策局特遣队的队长——空降到新启市，人脉、声望、资源全从零开始攒。

但跟一般游戏里那种“天降猛男拯救世界”的套路不太一样，你的身份挺特别的。制作人给你安排了一个非常21世纪的设定：**你是个网红**。

你想在新启市站稳脚跟？先涨粉。你想招募伙伴？先涨粉。你想推动剧情？还是先涨粉。

在这个世界里，社交媒体是你的核心武器。你得靠发动态、搞直播、解决事件来积累声望，一步步从零粉丝变成城市级大V。而且你还可以在警察、黑客、配送员等不同职业身份之间自由切换，每个身份能做的事都不一样。

这个设定我觉得挺有意思的——不是在扮演一个“天选之人”，而是在扮演一个努力在这个城市里混出名堂的普通人。只不过这个普通人恰好会打一些超自然怪物。

---

### 伙伴们

当然，你不会一个人单干。

你要重建一支独属于你自己的团队。团队成员都挺有特色的：

- **塔菲**，代号“幻速骑士”，对策局的新人调查员。人生准则就三条：不做麻烦的事、报酬越多越好、工作五分钟偷懒两小时。梦想是进入传说中的“特异科”。
- **班茜**，代号“撼灵之彩”，街头涂鸦艺术家，充满破坏与创造欲。
- **亚兰**，代号“城间漫游”，游走于城市的情报商，跟谁都能谈笑风生。
- **梅卡妮卡**，代号“机械精灵”，能让机械“活过来”的幽灵员工，喜欢吃炸薯条。

每个人都奇形怪状的，但每个人都挺有意思。你的任务就是把这群人凑到一起，重建对策局的团队。

---

### 这座城市里还有什么？

除了“混厄对策局”这个官方机构，新启市还有不少其他势力在活跃：

- **新启统理院**：新启市的政府机关。
- **新启巡卫署**：维持城市日常秩序、应对常规犯罪的机构，会协助混厄对策局。
- **谜面帮 / 绿鬼帮**：盘踞城市已久的组织，与混厄关系密切。
- **蓝猫物流、犬魔社**：游戏里的其他势力，你可以为他们完成任务。
- **鹰庭银行**：新启市的著名银行，据说跟“所罗门的宝藏”有关联。

城市里还有各种地标：**新岸区**是市中心和CBD；**音潮俱乐部**是午夜狂欢的去处；**狂悖街区**是街头文化的聚集地，飙车、涂鸦、滑板、街头篮球什么都有；**千集条商业街**是吃喝玩乐的聚集地。

甚至连市民都在用一款叫 **“叭卜”** 的社交软件——你可以用它跟伙伴们联络感情。

---

### 两座城市，两种生活

目前游戏公布了两座城市。

**新启市**是第一座，一座依海而建的西式现代滨海都会。跨海大桥、绕城高速、沙滩排球、空中酒吧——典型的国际化大都市。

**重霄市**是第二座，主角的家乡。设计灵感直接取材上海和杭州两座城市——东方明珠、外滩天际线、武康路，跟西湖、雷峰塔、龙井村融合在一起。一座兼具现代活力与东方韵味的都市。

两座城市之间可以坐飞机往返——不是传送点那种“刷一下就过去了”，是有过渡动画的那种。

一座是赛博纽约，一座是赛博杭州加赛博上海。在同一个游戏里体验两种完全不同的城市风貌——这个野心确实不小。

---

### 所以到底讲了个什么故事？

总结一下：

你是一个刚到新启市的“混厄对策局”调查员，代号“无限扳机”。你的任务是应对城市里层出不穷的超自然现象（混厄），保护这座城市的安全。同时你还要重建团队、积累声望、当上网红——因为在这个世界里，社交影响力就是你最大的武器。

在这个过程中，你会遇到各种奇形怪状的伙伴和敌人，探索城市的每一个角落，顺便逐步揭开自己的记忆之谜——是的，主角似乎也有一段被遗忘的过去。

但跟很多“苦大仇深拯救世界”的游戏不一样，《无限大》给人的感觉更像一个年轻人来到一座新城市，努力生活、交朋友、找工作（顺便打打怪物）的故事。

危机的确存在，城市确实有危险。但与此同时，你可以在午夜去音潮俱乐部狂欢，去狂悖街区赢个飞车冠军，去千集条商业街打电动喝下午茶看电影。

危机与日常总是交替到来。你可以选择去对抗潜藏于城市阴影中的异常威胁，也可以在霓虹灯下体验充满烟火气的都市生活——选择权在你手上。

我觉得这种“既要拯救世界又要过日子”的设定，比单纯的“勇者打魔王”有意思多了。`,
      TW: `# 這遊戲到底講了個什麼故事你知道嘛？

之前寫了好幾篇關於《無限大》的博客，聊了它不抽卡、聊了它戰鬥好玩、聊了它城市做得漂亮。但好像一直沒正經說過一件事——這遊戲到底講了個什麼故事？

今天就來聊聊這個。

---

### 一個「都市傳說成真」的世界

《無限大》的故事背景設定在一個與地球類似但又不太一樣的現代世界。最大的區別是什麼？**都市傳說全部成真了**。

你小時候聽過的那​​些怪談、那些「朋友的朋友的朋友遇到過」的離奇故事——在這個世界裡，它們都是真的。人類與超自然現象共存，街頭可能隨時出現一些你解釋不了的東西。

用官方的話說，這是一個 **「現實」與「異常」並存的世界**。

現實的部分是：有咖啡店、有地鐵、有外賣、有社交媒體，你可以在街邊買個奶茶然後蹲在路邊滑手機。異常的部分是：路邊的自動販賣機可能突然站起來自己走兩步，或者你等紅綠燈的時候發現那個紅綠燈其實是個長著眼睛的生物在幫你指揮交通。

**「混厄」** ——這是遊戲裡對所有這些超自然現象的總稱。它誕生於人類嘈雜混亂的意識，形態千奇百怪。有些混厄是良性的，會在城市裡幫人類幹活，比如充當紅綠燈；有些是惡性的，會對城市安全造成威脅。連人和汽車都可能變成混厄。

開發團隊說了一句話我覺得特別到位：「*一個與現實完全一樣的世界會顯得枯燥乏味，所以我們加入了現實中不存在的元素——'混沌'。*」他們的目的，就是讓玩家體驗到 **「現實中不可能實現的體驗」** 。

---

### 你扮演的是誰？

在這個世界裡，你扮演的是「混厄對策局」的王牌調查員。

「混厄對策局」的英文縮寫是 **A.C.D.（Anti-Chaos Directorate）**，是專門負責應對「混厄」現象以及超自然犯罪的官方機關。簡單說就是專門管那些怪東西的政府部門。

你的代號叫 **「無限扳機」（Infinite Trigger）** ，是對策局特遣隊的隊長——空降到新啟市，人脈、聲望、資源全從零開始攢。

但跟一般遊戲裡那種「天降猛男拯救世界」的套路不太一樣，你的身份挺特別的。製作人給你安排了一個非常21世紀的設定：**你是個網紅**。

你想在新啟市站穩腳跟？先漲粉。你想招募夥伴？先漲粉。你想推動劇情？還是先漲粉。

在這個世界裡，社交媒體是你的核心武器。你得靠發動態、搞直播、解決事件來積累聲望，一步步從零粉絲變成城市級大V。而且你還可以在警察、黑客、配送員等不同職業身份之間自由切換，每個身份能做的事都不一樣。

這個設定我覺得挺有意思的——不是在扮演一個「天選之人」，而是在扮演一個努力在這個城市裡混出名堂的普通人。只不過這個普通人恰好會打一些超自然怪物。

---

### 夥伴們

當然，你不會一個人單幹。

你要重建一支獨屬於你自己的團隊。團隊成員都挺有特色的：

- **塔菲**，代號「幻速騎士」，對策局的新人調查員。人生準則就三條：不做麻煩的事、報酬越多越好、工作五分鐘偷懶兩小時。夢想是進入傳說中的「特異科」。
- **班茜**，代號「撼靈之彩」，街頭塗鴉藝術家，充滿破壞與創造欲。
- **亞蘭**，代號「城間漫遊」，遊走於城市的情報商，跟誰都能談笑風生。
- **梅卡妮卡**，代號「機械精靈」，能讓機械「活過來」的幽靈員工，喜歡吃炸薯條。

每個人都奇形怪狀的，但每個人都挺有意思。你的任務就是把這群人湊到一起，重建對策局的團隊。

---

### 這座城市裡還有什麼？

除了「混厄對策局」這個官方機構，新啟市還有不少其他勢力在活躍：

- **新啟統理院**：新啟市的政府機關。
- **新啟巡衛署**：維持城市日常秩序、應對常規犯罪的機構，會協助混厄對策局。
- **謎面幫 / 綠鬼幫**：盤踞城市已久的組織，與混厄關係密切。
- **藍貓物流、犬魔社**：遊戲裡的其他勢力，你可以為他們完成任務。
- **鷹庭銀行**：新啟市的著名銀行，據說跟「所羅門的寶藏」有關聯。

城市裡還有各種地標：**新岸區**是市中心和CBD；**音潮俱樂部**是午夜狂歡的去處；**狂悖街區**是街頭文化的聚集地，飆車、塗鴉、滑板、街頭籃球什麼都有；**千集條商業街**是吃喝玩樂的聚集地。

甚至連市民都在用一款叫 **「叭卜」** 的社交軟體——你可以用它跟夥伴們聯絡感情。

---

### 兩座城市，兩種生活

目前遊戲公布了兩座城市。

**新啟市**是第一座，一座依海而建的西式現代濱海都會。跨海大橋、繞城高速、沙灘排球、空中酒吧——典型的國際化大都市。

**重霄市**是第二座，主角的家鄉。設計靈感直接取材上海和杭州兩座城市——東方明珠、外灘天際線、武康路，跟西湖、雷峰塔、龍井村融合在一起。一座兼具現代活力與東方韻味的都市。

兩座城市之間可以坐飛機往返——不是傳送點那種「刷一下就過去了」，是有過渡動畫的那種。

一座是賽博紐約，一座是賽博杭州加賽博上海。在同一個遊戲裡體驗兩種完全不同的城市風貌——這個野心確實不小。

---

### 所以到底講了個什麼故事？

總結一下：

你是一個剛到新啟市的「混厄對策局」調查員，代號「無限扳機」。你的任務是應對城市裡層出不窮的超自然現象（混厄），保護這座城市的安全。同時你還要重建團隊、積累聲望、當上網紅——因為在這個世界裡，社交影響力就是你最大的武器。

在這個過程中，你會遇到各種奇形怪狀的夥伴和敵人，探索城市的每一個角落，順便逐步揭開自己的記憶之謎——是的，主角似乎也有一段被遺忘的過去。

但跟很多「苦大仇深拯救世界」的遊戲不一樣，《無限大》給人的感覺更像一個年輕人來到一座新城市，努力生活、交朋友、找工作（順便打打怪物）的故事。

危機的確存在，城市確實有危險。但與此同時，你可以在午夜去音潮俱樂部狂歡，去狂悖街區贏個飛車冠軍，去千集條商業街打電動喝下午茶看電影。

危機與日常總是交替到來。你可以選擇去對抗潛藏於城市陰影中的異常威脅，也可以在霓虹燈下體驗充滿煙火氣的都市生活——選擇權在你手上。

我覺得這種「既要拯救世界又要過日子」的設定，比單純的「勇者打魔王」有意思多了。`,
      EN: `# Do You Really Know What Story Ananta Is Trying to Tell?

I've written several posts covering Ananta—how it abolished character gacha, how dynamic the combat feels, and how stunning its metropolitan landscapes look. But we never sat down and answered the most fundamental question: **What is this game's story actually about?**

Let's dive deep into that today.

---

### A World Where Urban Legends Turn Real

Ananta is set in a modern world strikingly similar to ours, yet fundamentally altered by one truth: **Every urban legend you've ever heard is real.**

Those childhood ghost stories, bizarre rumors, and eerie "a friend of a friend saw this" anecdotes—in this universe, they genuinely exist. Humanity coexists with paranormal occurrences, and an unexplained phenomenon could manifest on any street corner at any moment.

In the official lore's words, this is a world where **"Everyday Reality" and "Anomalies" coexist.**

The "reality" aspect means familiar pleasures: cozy coffee shops, metro lines, food deliveries, and social media apps. You can grab bubble tea on the sidewalk while scrolling through your feed. The "anomaly" aspect means a street vending machine might suddenly sprout legs and walk away, or the traffic light you're waiting at turns out to be a living entity with blinking eyes directing vehicles.

**"Chaos" (混厄)** is the overarching umbrella term for all these supernatural anomalies. Born from the noisy, turbulent subconscious thoughts of human civilization, Chaos manifests in infinite shapes. Some are harmless and symbiotic, working ordinary municipal jobs; others are malevolent entities threatening civic safety. Even ordinary humans and automobiles can undergo Chaos corruption.

The development team phrased it brilliantly: *"A world completely identical to reality would feel monotonous, so we introduced the element nonexistent in real life—'Chaos.' Our goal is to let players experience what is impossible in the real world."*

---

### Who Exactly Are You Playing As?

In this world, you step into the shoes of an ace operative within the **Anti-Chaos Directorate (A.C.D.)**.

The A.C.D. is the dedicated government agency tasked with investigating Chaos anomalies and handling supernatural crimes. To put it simply: the official agency in charge of keeping weird things under control.

Your operative callsign is **"Infinite Trigger."** As the newly assigned leader of an A.C.D. special task force parachuting into Nova City, you start from total scratch—zero local connections, zero reputation, and zero spare resources.

Yet unlike the clichéd "chosen one descends to save the universe" trope, your identity comes with a uniquely 21st-century twist: **You are an influencer.**

Want to establish a foothold in Nova City? Gain followers. Want to recruit reliable crew members? Gain followers. Want to advance the narrative? You need more followers.

In this universe, social media is your greatest tactical weapon. By publishing vlogs, hosting live-streams, and resolving civic incidents, you climb from zero clout to a recognized citywide micro-celebrity. Moreover, you can freely switch between civilian personas—police officer, hacker, or delivery courier—each unlocking unique urban interactions.

It's a refreshing premise: you aren't playing a brooding messiah, but rather an energetic young adult striving to make a name in a sprawling metropolis, who happens to battle supernatural monstrosities along the way.

---

### Your Eccentric Crew

Naturally, you won't be tackling the chaos alone.

Your primary mission is rebuilding your own A.C.D. strike team, composed of memorable and offbeat personalities:

- **Taffy** (Callsign *Phantom Rider*): An A.C.D. rookie investigator whose life philosophy consists of three golden rules: avoid hassle, maximize pay, and slack off for two hours after five minutes of work. Her ultimate dream is joining the legendary *Special Division*.
- **Bansy** (Callsign *Chromatic Soul*): A wild street graffiti artist driven by an explosive impulse for both destruction and creation.
- **Alan** (Callsign *Urban Wanderer*): A smooth-talking urban information broker who has friends in every dark corner of the city.
- **Mechanika** (Callsign *Machine Sprite*): A ghostly technician capable of literally bringing machinery to life, who harbors an obsession with french fries.

Each member is eccentric, but brimming with charisma. Your job is rallying this ragtag group into an elite investigative unit.

---

### What Else Lies Within Nova City?

Beyond the official jurisdiction of the A.C.D., Nova City pulses with diverse factions:

- **Nova City Governance Council**: The municipal civil government.
- **Nova City Patrol Bureau**: The civil police force managing routine crime, often coordinating perimeter security with the A.C.D.
- **Riddle Gang / Green Ghost Gang**: Long-established underground syndicates deeply entangled with Chaos energy black markets.
- **Blue Cat Logistics & Cyno-Demon Club**: Auxiliary organizations offering lucrative freelance contracts.
- **Aethelgard Bank (Eagle Court Bank)**: A historic financial titan rumored to guard ties to King Solomon's ancient treasure.

The metropolis is packed with distinct urban districts: **New Coast** serves as the gleaming financial CBD; **Soundwave Club** is the hotspot for midnight EDM raves; **Paradox District** is the epicenter of street culture (street racing, skateparks, graffiti, streetball); while **Thousand Gathering Bazaar** is a bustling hub for foodies and shopping.

Citizens even connect via an in-universe social app called **"BaBu"**, allowing you to chat and build relationships with your team.

---

### Two Megacities, Two Contrasting Lifestyles

Currently, two sprawling megacities have been revealed:

**Nova City** is the first: a Western-inspired coastal metropolis framed by grand suspension bridges, coastal expressways, sunlit beach volleyball, and rooftop sky-lounges.

**Chongxiao City** is the second: the protagonist's hometown. Its aesthetic merges the serene historical heritage of Hangzhou (West Lake, Leifeng Pagoda, Longjing tea hills) with the cybernetic glamour of modern Shanghai (Oriental Pearl Tower, The Bund skyline, Wukang Road).

Traveling between both cities isn't a jarring black-screen teleport—it features a fully animated passenger airliner transit sequence.

Experiencing Cyberpunk New York and Cyberpunk Hangzhou/Shanghai within a single seamless universe reflects an extraordinary creative ambition.

---

### So What is the Core Story Really About?

To sum it up:

You are a newly arrived A.C.D. investigator codenamed **"Infinite Trigger"**. Your mandate is solving escalating supernatural Chaos anomalies to safeguard Nova City, while simultaneously rebuilding your squad, growing your online following, and making a name as an influencer.

Along the journey, you'll encounter eccentric allies and dangerous syndicates, uncover every corner of the cityscape, and piece together the forgotten fragments of your own past memory.

Unlike solemn, brooding "doom-and-gloom" apocalypse narratives, Ananta feels more like the coming-of-age story of a young protagonist moving to an exciting metropolis—finding work, making loyal friends, and enjoying life (while occasionally beating up supernatural monsters).

Real crises loom in the shadows, but between battles, you can party at Soundwave Club until dawn, drift through the Paradox District, or enjoy coffee and arcade games at the bazaar.

Crisis and mundane everyday life constantly intertwine. Whether you choose to hunt down eldritch threats or soak in the neon glow of city nightlife, the choice is entirely yours.

And honestly, that balance of "saving the world while truly living in it" is infinitely more compelling than another generic savior story.`,
      JP: `# 『無限大（Ananta）』が描く物語の正体、知っていますか？

これまで『無限大』に関する記事を何本か執筆し、ガチャ完全撤廃の衝撃、スタイリッシュなアクション、そして圧巻のオープンワールド都市の作り込みについて語ってきました。しかし、最も根源的な疑問について、まだじっくり触れていませんでした――**「このゲームは、一体どんな物語を描いているのか？」**

今回は、その核心に迫っていきます。

---

### 「都市伝説が現実になった」世界

『無限大』の舞台は、私たちが暮らす地球とよく似ていながら、決定的に異なる現代社会です。最大の違いは何か？ **すべての都市伝説が現実として存在する点**です。

幼い頃に耳にした怪談や、「友達の友達が遭遇した」という奇妙な噂話――この世界では、それらすべてが本物です。人類と超常現象が当たり前のように隣り合わせで共存し、街角にはいつでも科学で説明のつかない存在が現れます。

公式の言葉を借りるなら、ここは **「日常」と「異常」が混ざり合う世界** です。

「日常」の側面では、カフェ、地下鉄、フードデリバリー、SNSが普及し、道端でタピオカミルクティーを飲みながらスマホをいじることができます。一方で「異常」の側面では、道端の自動販売機が突然二足歩行を始めたり、赤信号で待っていたら信号機自体が生きた目玉を持って交通整理をしていたりします。

**「混厄（Chaos）」** ――これが作中で発生するあらゆる超自然現象の総称です。人間の雑多で混沌とした意識から生まれ、その姿形は千差万別。信号機のように都市インフラを手伝う無害な混厄もいれば、市民を脅かす凶暴な混厄も存在します。人間や車ですら混厄化することがあります。

開発チームの言葉が非常に印象的でした。「*現実と全く同じ世界では退屈してしまう。だからこそ、現実にはない『混沌』という要素を取り入れました。私たちの狙いは、プレイヤーに『現実では絶対に不可能な体験』を届けることです。*」

---

### あなたは何者として生きるのか？

この世界でプレイヤーが演じるのは、「混厄対策局」のエース調査員です。

「混厄対策局」の正式名称は **A.C.D.（Anti-Chaos Directorate）**。混厄現象や超常犯罪の対処を一手に担う公的治安機関、つまり「怪異専門の政府機関」です。

あなたのコードネームは **「無限トリガー（Infinite Trigger）」**。新啓市（Nova City）に単身着任した対策局特遣隊の隊長ですが、人脈も名声もリソースもゼロからのスタートとなります。

しかし、従来の「天から舞い降りた救世主が世界を救う」というステレオタイプとは大きく異なります。プロデューサーが用意した極めて現代的な設定、それは――**「主人公がインフルエンサーである」** という点です。

新啓市で足場を固めたい？ まずフォロワーを増やしましょう。仲間をスカウトしたい？ まずフォロワーです。ストーリーを進めるためにも、やはりフォロワー数が必要です。

この世界において、SNSは最大の武器です。日常の投稿やライブ配信、事件の解決を通じて街中の評判を集め、フォロワー0から都市レベルのトップインフルエンサーへと上り詰めていきます。さらに、警察官、ハッカー、配達員といった職業身分を自由に切り替えることができ、身分ごとに異なるアクションや捜査が可能になります。

「選ばれし勇者」ではなく、「大都会で一旗揚げようと奮闘する若者」として生きる――この泥臭くもポップな設定が、非常に魅力的です。

---

### 個性豊かな仲間たち

もちろん、孤独な戦いではありません。

プレイヤーは、自分だけの対策局チームを再建していくことになります。集まるメンバーはどれも強烈な個性派揃いです。

- **タフィー（幻速の騎士）**：対策局の新人調査員。座右の銘は「面倒事はパス」「報酬は多ければ多いほど良い」「5分働いて2時間サボる」。伝説の「特異科」への配属を夢見ています。
- **班茜（バンシー / 魂揺るがす色彩）**：破壊と創造の衝動に溢れる、ストリートグラフィティアーティスト。
- **亜蘭（アラン / 街の漫遊者）**：裏通りに精通し、誰とでも軽快に打ち解ける凄腕情報屋。
- **メカニカ（機械の妖精）**：機械に命を吹き込むことができる幽霊系エンジニア。フライドポテトが大好物。

誰もが一癖も二癖もあるキャラクターばかり。彼らを束ね、信頼で結ばれた最高のチームを作り上げることがあなたの役目です。

---

### 街を取り巻く組織とロケーション

混厄対策局以外にも、新啓市には多彩な勢力が蠢いています。

- **新啓統理院**：都市の最高行政機関。
- **新啓巡衛署**：日常の治安維持や一般犯罪を担当し、対策局と連携する警察組織。
- **謎面組 / 緑鬼組**：裏社会を牛耳り、混厄エネルギーの闇流通に関与する危険な組織。
- **ブルーキャット物流・犬魔社**：プレイヤーが依頼を受けて任務をこなせる民間組織。
- **鷹庭銀行（Aethelgard Bank）**：ソロモンの秘宝と関係があると噂される巨大名門銀行。

都市内のロケーションも充実しています。超高層ビルが連なる金融街 **「新岸区」**、夜通し盛り上がる **「音潮クラブ」**、ドリフトやスケボー、バスケなどのストリートカルチャーの聖地 **「狂悖街区」**、食べ歩きやショッピングが楽しめる **「千集条商店街」**。

市民たちは **「叭卜（BaBu）」** という専用SNSを使っており、仲間たちとのメッセージのやり取りも楽しめます。

---

### 2つの巨大都市、2つの異なる生活

現在公開されているのは2つの都市です。

1つ目は **「新啓市（Nova City）」**。海沿いに広がる西欧風の現代ベイサイドメガロポリス。巨大な吊り橋、湾岸高速道路、ビーチバレー、スカイバーが広がる開放的な国際都市です。

2つ目は **「重霄市（Chongxiao City）」**。主人公の故郷であり、上海と杭州の風景が融合したオリエンタルサイバーシティ。西湖や雷峰塔、茶畑の風情と、東方明珠や外灘の摩天楼が共存しています。

この2都市間は、暗転ロードではなく、旅客機に搭乗する専用の移動シークエンスで結ばれています。サイバーパンク・ニューヨークとサイバーパンク上海×杭州を一本のゲームで味わえるという、途方もないスケールです。

---

### 結局のところ、どんな物語なのか？

まとめると、こういうことです。

あなたは新啓市に降り立った混厄対策局の新人隊長であり、インフルエンサーの **「無限トリガー」**。あなたの使命は、街で多発する怪異「混厄」を鎮圧して市民の安全を守りつつ、チームを再建し、SNSでバズって影響力を高めること。

その過程で奇想天外な仲間や敵と出会い、街の隅々まで探索し、やがて主人公自身の失われた記憶の謎にも迫っていきます。

重苦しい「絶望に抗う世界の救済」ではなく、『無限大』が描くのは、**「大都会にやってきた若者が、懸命に暮らし、友達を作り、仕事をこなし（ついでに怪異を退治する）青春群像劇」** です。

危機は確かに存在します。しかしそれと同時に、夜中にクラブで踊り明かし、ストリートレースで優勝し、商店街でクレープを食べて映画を見る日常も存在します。

世界の救済と、かけがえのない都会暮らし。そのどちらも全力で楽しむ――この欲張りな生き方こそが、『無限大』の真髄なのです。`,
      KR: `# 이 게임이 도대체 어떤 이야기를 다루는지 아시나요?

그동안 《무한대》에 대해 여러 편의 글을 쓰며 가챠 완전 폐지, 박진감 넘치는 액션, 그리고 정교하게 빚어낸 오픈월드 도시에 대해 이야기했습니다. 하지만 가장 근본적인 질문 하나를 놓치고 있었습니다. **"도대체 이 게임은 어떤 이야기를 하려는 걸까?"**

오늘은 바로 그 세계관과 스토리에 대해 자세히 짚어보고자 합니다.

---

### '도시 전설이 현실이 된' 세계

《무한대》의 무대는 우리가 살아가는 현실과 닮아 있으면서도 결정적으로 다른 현대 세계입니다. 가장 큰 차이가 무엇일까요? 바로 **모든 도시 전설과 괴담이 현실로 존재한다는 점**입니다.

어릴 적 들었던 괴담, "친구의 친구가 겪었다"는 기묘한 이야기들이 이 세계에서는 모두 실재합니다. 인류는 초자연적 현상과 일상적으로 공존하며, 길모퉁이를 돌 때마다 과학으로 설명할 수 없는 기현상과 마주칩니다.

공식 설정에 따르면 이곳은 **'일상'과 '이상(異常)'이 공존하는 세계**입니다.

일상의 영역에는 익숙한 카페, 지하철, 배달 음식, SNS가 존재하여 길거리에서 밀크티를 마시며 스마트폰을 넘겨볼 수 있습니다. 반면 이상의 영역에서는 길가의 자동판매기가 벌떡 일어나 걸어 다니거나, 신호 대기 중에 마주친 신호등이 살아있는 눈을 깜빡이며 교통 정리를 해 주기도 합니다.

**'혼액(Chaos, 混厄)'** ――이것이 게임 속에 등장하는 모든 초자연 현상을 통칭하는 용어입니다. 인간의 복잡하고 혼란스러운 무의식에서 탄생한 혼액은 천차만별의 형태를 띱니다. 신호등처럼 도시 인프라를 돕는 무해한 혼액이 있는가 하면, 시민의 생명을 위협하는 흉악한 혼액도 존재합니다. 심지어 사람이나 자동차마저 혼액으로 변질될 수 있습니다.

개발진의 한마디가 매우 인상적입니다. *"현실과 똑같은 세계는 너무나 지루합니다. 그래서 우리는 현실에 없는 '혼돈'이라는 요소를 더했습니다. 우리의 목표는 유저들에게 '현실에서는 결코 경험할 수 없는 특별한 체험'을 선사하는 것입니다."*

---

### 플레이어는 누구인가?

이 세계에서 플레이어는 초자연 현상 전담 기관인 '혼액 대책국'의 에이스 조사관 역할을 맡습니다.

'혼액 대책국'의 영문 명칭은 **A.C.D. (Anti-Chaos Directorate)**로, 혼액 이상 현상과 초자연 범죄를 전담하는 공공 치안 정부 기관입니다.

플레이어의 코드네임은 **'무한 트리거(Infinite Trigger)'**. 신치시(Nova City)에 갓 부임한 대책국 특임대 팀장이지만, 인맥도 명성도 기반도 전무한 상태에서 맨땅에 헤딩하듯 커리어를 시작해야 합니다.

하지만 흔한 '하늘에서 뚝 떨어진 영웅이 세계를 구한다'는 진부한 클리셰와는 거리가 멉니다. 제작진은 21세기 감성에 딱 맞는 파격적인 설정을 부여했습니다. 바로 **'플레이어가 인플루언서'**라는 점입니다.

신치시에 자리를 잡고 싶다면? 먼저 팔로워를 모아야 합니다. 믿음직한 동료를 영입하고 싶다면? 팔로워가 필요합니다. 스토리를 진행하기 위해서도 SNS 영향력이 필수적입니다.

이 세계에서 소셜 미디어는 가장 강력한 무기입니다. 일상 브이로그를 올리고, 라이브 방송을 켜며, 사건을 해결해 평판을 쌓아 팔로워 0명에서 도시 최고의 스타 인플루언서로 성장해 나갑니다. 또한 경찰, 해커, 택배 배달원 등 다양한 직업 신분을 넘나들며 각기 다른 방식으로 도시를 누빌 수 있습니다.

'선택받은 초월적 구원자'가 아니라, '대도시에서 성공하기 위해 치열하게 살아가는 현실적인 청춘'을 플레이한다는 점이 무척 신선하고 매력적입니다.

---

### 개성 넘치는 동료들

물론 홀로 외롭게 싸우는 것은 아닙니다.

플레이어는 와해된 대책국 팀을 새롭게 재건해야 하며, 모여드는 동료들은 하나같이 독특한 개성을 뽐냅니다.

- **타피 (환속의 기사)**: 대책국 신입 조사관. 인생 철칙은 단 세 가지: 귀찮은 일 피하기, 보수는 많을수록 좋다, 5분 일하고 2시간 쉬기. 전설의 '특이과' 배속을 꿈꿉니다.
- **반시 (영혼을 흔드는 색채)**: 파괴와 창조의 욕구로 가득 찬 거리의 그래피티 아티스트.
- **알란 (도시의 방랑자)**: 골목 구석구석을 꿰뚫고 있으며 누구와도 금세 친해지는 베테랑 정보 브로커.
- **메카니카 (기계 요정)**: 기계에 생명을 불어넣을 수 있는 유령 같은 엔지니어. 감자튀김을 유독 좋아합니다.

어딘가 나사 하나 빠진 듯 유쾌한 동료들을 하나로 모아 최고의 수사팀을 구축하는 것이 주된 임무입니다.

---

### 도시의 다양한 세력과 핫플레이스

혼액 대책국 외에도 신치시에는 다양한 세력들이 활동하고 있습니다.

- **신치 통리원**: 신치시의 최고 행정 자치 정부.
- **신치 순위서**: 일상 치안 유지와 일반 범죄를 담당하며 대책국을 지원하는 경찰 조직.
- **미면파 / 녹귀파**: 도시 암흑가를 지배하며 혼액 에너지 밀매에 연루된 위험 조직.
- **블루캣 물류, 견마사**: 유저가 프리랜서로 의뢰를 수주할 수 있는 민간 단체.
- **에델가드 은행 (Eagle Court Bank)**: 솔로몬의 보물과 연관되어 있다는 소문이 도는 유서 깊은 대형 은행.

도시 내 명소 역시 다채롭습니다. 초고층 마천루가 즐비한 금융 중심지 **'신안구(CBD)'**, 밤새도록 EDM 비트가 울려 퍼지는 **'음조 클럽'**, 스트리트 레이싱, 스케이트보드, 길거리 농구의 성지인 **'광패 구역'**, 맛집과 쇼핑몰이 밀집한 **'천집조 상점가'**까지.

시민들은 **'바부(BaBu)'**라는 인게임 메신저 앱을 사용하며, 동료들과 메시지를 주고받으며 유대감을 쌓을 수 있습니다.

---

### 두 개의 거대 도시, 두 가지의 삶

현재 공개된 도시는 총 2개입니다.

첫 번째는 **'신치시(Nova City)'**. 바다를 끼고 발달한 서구풍 현대 메트로폴리스로, 웅장한 연륙교, 해안 고속도로, 비치발리볼 코트, 루프탑 바가 어우러진 국제도시입니다.

두 번째는 주인공의 고향인 **'중소시(Chongxiao City)'**. 서호, 뇌봉탑, 용정차 마을 등 항저우의 고즈넉한 정취와 동방명주, 와이탄 등 상하이의 화려한 스카이라인이 공존하는 오리엔탈 사이버 도시입니다.

두 도시 간의 이동은 단순한 로딩 암전이 아니라, 비행기에 탑승하는 실감 나는 환승 컷씬으로 연출됩니다. 사이버펑크 뉴욕과 사이버펑크 상하이·항저우를 하나의 게임에서 넘나들 수 있는 거대한 스케일입니다.

---

### 결국 어떤 이야기인가?

한 줄로 요약하자면 다음과 같습니다.

플레이어는 신치시에 갓 도착한 A.C.D. 조사관이자 인플루언서 **'무한 트리거'**가 되어, 도시 곳곳에서 터져 나오는 초자연 현상(혼액)을 해결해 도시를 지키는 한편, 팀을 재건하고 SNS 스타로 발돋움해야 합니다.

그 과정에서 기상천외한 동료와 적들을 만나 도시 구석구석을 누비고, 점차 주인공 자신의 잃어버린 과거 기억의 실마리를 풀어가게 됩니다.

무겁고 암울하기만 한 '세계 멸망을 막는 구원기'가 아니라, 《무한대》는 **'대도시에 첫발을 내딛은 청년이 치열하게 생활하고, 친구를 사귀고, 일을 해나가는(그러면서 괴물도 때려잡는) 생동감 넘치는 청춘 어반 판타지'**입니다.

위협은 분명 존재합니다. 하지만 동시에 심야 클럽에서 춤추고, 스트리트 레이스에서 우승하며, 카페 거리에서 디저트를 먹고 영화를 보는 눈부신 일상도 함께합니다.

세계를 구하는 일과 사람 냄새 나는 도시 생활을 즐기는 일. 그 둘의 균형을 맞추는 특별한 여정이 바로 《무한대》가 들려주고자 하는 진짜 이야기입니다.`,
      DE: `# Weißt du eigentlich, welche Geschichte Ananta wirklich erzählt?

Ich habe bereits mehrere Blogbeiträge über Ananta geschrieben – darüber, dass es kein Gacha gibt, wie dynamisch sich das Kampfsystem anfühlt und wie spektakulär die offenen Städte gestaltet sind. Aber über eine fundamentale Frage haben wir bisher noch nicht ausführlich gesprochen: **Wovon handelt die Geschichte dieses Spiels eigentlich?**

Lasst uns heute genau das beleuchten.

---

### Eine Welt, in der urbane Legenden Realität sind

Die Hintergrundgeschichte von Ananta spielt in einer modernen Welt, die unserer Erde sehr ähnlich ist, sich jedoch in einem entscheidenden Punkt unterscheidet: **Urbane Legenden sind hier alle wahr geworden.**

All die unheimlichen Geistergeschichten aus deiner Kindheit, bizarre Gerüchte und unheimliche „Ein Freund eines Freundes hat das erlebt“-Erzählungen – in dieser Welt existieren sie tatsächlich. Die Menschheit koexistiert mit paranormalen Phänomenen, und an jeder Straßenecke kann jederzeit etwas auftauchen, das sich mit gewöhnlicher Wissenschaft nicht erklären lässt.

Wie die Entwickler es offiziell beschreiben: Es ist eine Welt, in der **„Realität“ und „Anomalie“ nebeneinander existieren**.

Der reale Teil umfasst alltägliche Dinge: gemütliche Cafés, U-Bahnen, Essenslieferdienste und soziale Netzwerke. Du kannst am Straßenrand einen Bubble Tea trinken und dabei auf deinem Smartphone durch den Feed scrollen. Der anomale Teil: Ein Verkaufsautomat am Gehweg steht plötzlich auf zwei Beinen auf und läuft los, oder die Ampel, an der du wartest, entpuppt sich als lebendiges Wesen mit blinzelnden Augen, das den Verkehr regelt.

**„Chaos“ (混厄)** – das ist der offizielle Sammelbegriff des Spiels für all diese übernatürlichen Anomalien. Entstanden aus dem lauten, unruhigen Unterbewusstsein der menschlichen Zivilisation, manifestiert sich das Chaos in zahllosen Formen. Einige Chaos-Wesen sind friedlich und verrichten alltägliche Arbeiten in der Stadt, wie etwa als lebende Ampel; andere sind bösartig und stellen eine echte Bedrohung für die öffentliche Sicherheit dar. Sogar Menschen und Automobile können der Chaos-Verderbnis anheimfallen.

Das Entwicklerteam brachte es treffend auf den Punkt: *„Eine Welt, die völlig identisch mit der Realität ist, wäre eintönig und langweilig. Deshalb haben wir ein Element eingeführt, das es in der echten Welt nicht gibt – das 'Chaos'. Unser Ziel ist es, den Spielern ein Erlebnis zu bieten, das in der Realität unmöglich wäre.“*

---

### Wen verkörperst du als Spieler?

In dieser Welt schlüpfst du in die Rolle eines Elite-Ermittlers des **Anti-Chaos Directorate (A.C.D.)**.

Das A.C.D. (混厄对策局) ist die offizielle Regierungsbehörde, die speziell für die Untersuchung von Chaos-Phänomenen und übernatürlicher Kriminalität zuständig ist – kurz gesagt, die staatliche Behörde zur Eindämmung aller bizarren Vorfälle.

Dein operativer Codename lautet **„Infinite Trigger“ (无限扳机)**. Als frisch ernannter Einsatzleiter einer Sondereinheit des A.C.D. wirst du nach Nova City (新启市) entsandt – und musst Kontakte, Ansehen und Ressourcen völlig von null an aufbauen.

Doch anders als beim typischen Klischee des „auserwählten Erlösers, der vom Himmel herabsteigt, um die Welt zu retten“, haben dir die Macher ein unverwechselbares Setting des 21. Jahrhunderts verpasst: **Du bist ein Social-Media-Influencer.**

Du willst in Nova City Fuß fassen? Sammle zuerst Follower. Du willst fähige Gefährten rekrutieren? Sammle Follower. Du willst die Hauptstory vorantreiben? Auch dafür brauchst du eine wachsende Fangemeinde.

In dieser Welt sind soziale Medien deine stärkste Waffe. Durch das Veröffentlichen von Posts und Vlogs, das Starten von Livestreams und das Lösen von Vorfällen baust du deine Bekanntheit aus, bis du dich vom unbekannten Account mit 0 Followern zu einer stadtweiten Berühmtheit hochgearbeitet hast. Zudem kannst du frei zwischen verschiedenen zivilen Identitäten wie Polizist, Hacker oder Lieferkurier wechseln – jede Rolle eröffnet dir völlig andere Interaktionsmöglichkeiten.

Dieses Konzept ist herrlich erfrischend: Du spielst keinen weltfremden Messias, sondern einen ehrgeizigen jungen Menschen, der versucht, sich in einer gewaltigen Metropole einen Namen zu machen – und der ganz nebenbei in der Lage ist, paranormale Monster zur Strecke zu bringen.

---

### Deine Gefährten

Natürlich ziehst du nicht allein ins Feld.

Deine Aufgabe ist es, eine eigene, schlagkräftige A.C.D.-Spezialeinheit neu aufzubauen. Deine Teammitglieder sind allesamt faszinierende Persönlichkeiten:

- **Taffy** (Codename *Phantom Rider* / 幻速骑士): Eine junge Nachwuchs-Ermittlerin des A.C.D. mit drei unverrückbaren Lebensgrundsätzen: Vermeide unnötigen Ärger, maximiere das Gehalt und mache nach fünf Minuten Arbeit erst einmal zwei Stunden Pause. Ihr großer Traum ist die Aufnahme in die legendäre „Spezialabteilung“.
- **Bansy** (Codename *Chromatic Soul* / 撼灵之彩): Eine wilde Street-Art- und Graffiti-Künstlerin voller explosiver Zerstörungs- und Schöpfungslust.
- **Alan** (Codename *Urban Wanderer* / 城间漫游): Ein geschickter Informationsbroker, der sich wie ein Fisch im Wasser durch die Metropole bewegt und mit jedem ins Gespräch kommt.
- **Mechanika** (Codename *Machine Sprite* / 机械精灵): Eine geisterhafte Mitarbeiterin, die Maschinen buchstäblich zum Leben erwecken kann und eine Schwäche für knusprige Pommes frites hegt.

Jedes Mitglied hat seine Eigenheiten, sprüht aber vor Charme. Es liegt an dir, diese bunte Truppe zusammenzuführen und das Ansehen des A.C.D. wiederherzustellen.

---

### Was gibt es sonst noch in dieser Stadt?

Neben der staatlichen Behörde des A.C.D. tummeln sich in Nova City zahlreiche weitere Fraktionen:

- **Nova City Governance Council (新启统理院)**: Die oberste zivile Stadtverwaltung von Nova City.
- **Nova City Patrol Bureau (新启巡卫署)**: Die städtische Polizeibehörde, die für die alltägliche Ordnung und gewöhnliche Kriminalität sorgt und das A.C.D. unterstützt.
- **Riddle Gang / Green Ghost Gang (谜面帮 / 绿鬼帮)**: Seit Langem in der Unterwelt etablierte Syndikate mit tiefen Verbindungen zu Chaos-Phänomenen.
- **Blue Cat Logistics & Cyno-Demon Club (蓝猫物流、犬魔社)**: Weitere Organisationen in der Metropole, für die du lukrative Aufträge erledigen kannst.
- **Aethelgard Bank (Eagle Court Bank / 鹰庭银行)**: Eine renommierte Großbank in Nova City, um die sich Gerüchte über König Salomons legendären Schatz ranken.

Auch an markanten Schauplätzen mangelt es nicht: **New Coast (新岸区)** ist das moderne Geschäftszentrum voller Wolkenkratzer; der **Soundwave Club (音潮俱乐部)** ist der Hotspot für mitternächtliche Partys; der **Paradox District (狂悖街区)** ist das pulsierende Herz der Straßenkultur mit illegalen Rennen, Graffiti, Skateparks und Streetball; und der **Thousand Gathering Bazaar (千集条商业街)** lädt zum Schlemmen, Shoppen und Verweilen ein.

Sogar die Einwohner der Stadt nutzen eine universelle Social-App namens **„BaBu“ (叭卜)**, mit der du direkt mit deinen Gefährten chatten und Bindungen vertiefen kannst.

---

### Zwei Megastädte, zwei Lebenswelten

Bislang wurden zwei gewaltige Metropolen im Spiel vorgestellt.

**Nova City (新启市)** ist die erste: Eine am Meer gelegene, modern-westlich inspirierte Küstenmetropole. Gewaltige Hängebrücken, urbane Stadtautobahnen, Beachvolleyball am Strand und Rooftop-Skybars – das klassische Flair einer internationalen Weltstadt.

**Chongxiao City (重霄市)** ist die zweite Metropole und die Heimatstadt des Protagonisten. Ihr Design ist eine direkte Hommage an Shanghai und Hangzhou: Wahrzeichen wie der Oriental Pearl Tower, die Skyline des Bund und die Wukang Road verschmelzen harmonisch mit dem Westsee, der Leifeng-Pagode und den traditionellen Teeplantagen des Longjin-Dorfes. Eine Stadt voller moderner Cyberpunk-Dynamik und zeitlosem fernöstlichem Charme.

Reisen zwischen den beiden Metropolen geschehen nicht über einfache Ladebildschirme, sondern über eine vollwertige Flugzeug-Reisesequenz mit stimmungsvollen Zwischenanimationen.

Eine Stadt im Stile eines Cyberpunk-New-York, die andere eine Fusion aus Cyberpunk-Hangzhou und Cyberpunk-Shanghai: Zwei vollkommen unterschiedliche urbane Atmosphären in ein und demselben Spiel erlebbar zu machen, zeugt von beachtlichem Ehrgeiz.

---

### Worum geht es am Ende also wirklich?

Zusammenfassend:

Du bist ein frisch in Nova City eingetroffener A.C.D.-Ermittler mit dem Codenamen „Infinite Trigger“. Deine Mission ist es, die zahllosen übernatürlichen Chaos-Ereignisse in der Stadt einzudämmen und die Sicherheit der Bürger zu gewährleisten. Gleichzeitig baust du dein Team wieder auf, gewinnst Follower und wirst zum gefeierten Stadt-Influencer – denn sozialer Einfluss ist in dieser Welt deine schärfste Waffe.

Auf dieser Reise begegnest du skurrilen Verbündeten und gefährlichen Gegnern, erkundest jeden Winkel der Megastadt und lüftest Schritt für Schritt das Geheimnis deiner eigenen vergessenen Vergangenheit.

Anders als viele düstere, weltuntergangsschwere Endzeit-RPGs fühlt sich *Ananta* wie die mitreißende Geschichte eines jungen Menschen an, der in eine neue Großstadt zieht: um dort zu leben, Freunde zu finden, Karriere zu machen – und ganz nebenbei paranormale Bedrohungen abzuwehren.

Die Gefahren sind real und die Stadt ist nicht ohne Risiko. Doch zwischen den Gefechten kannst du bis spät in die Nacht im Soundwave Club feiern, im Paradox District Rennmeisterschaften gewinnen oder im Basar Kaffee trinken, Spielhallen besuchen und Filme schauen.

Krise und pulsierender Alltag wechseln sich ständig ab. Du kannst dich in die Schatten stürzen, um übernatürliche Gefahren zu bekämpfen, oder dich ganz dem lebendigen Nachtleben unter Neonlichtern hingeben – die Entscheidung liegt ganz bei dir.

Und dieses Konzept – die Welt zu retten und gleichzeitig das Leben in vollen Zügen zu genießen – ist um ein Vielfaches spannender als das ewig gleiche Heldenepos.`,
      FR: `# Savez-vous vraiment quelle histoire raconte Ananta ?

J'ai déjà rédigé plusieurs articles de blog sur Ananta : nous avons parlé de la suppression totale du gacha, de son système de combat exaltant et de la beauté époustouflante de ses environnements urbains. Mais une question fondamentale n'avait pas encore été véritablement abordée : **Quelle est l'histoire que ce jeu raconte réellement ?**

Plongeons aujourd'hui dans les profondeurs de son scénario et de son univers.

---

### Un monde où les légendes urbaines prennent vie

L'histoire d'Ananta se déroule dans un monde contemporain très similaire au nôtre, avec toutefois une distinction majeure : **toutes les légendes urbaines y sont devenues réelles.**

Ces histoires de fantômes de votre enfance, ces rumeurs étranges et ces récits mystérieux que « l'ami d'un ami a vécus » sont, dans cet univers, absolument authentiques. L'humanité cohabite au quotidien avec des phénomènes paranormaux, et des événements inexplicables peuvent surgir à chaque coin de rue.

Pour reprendre les termes officiels des développeurs, il s'agit d'un monde où **« Réalité » et « Anomalie » coexistent**.

La dimension réelle se traduit par des éléments familiers : cafés chaleureux, lignes de métro, livraisons de repas à domicile et réseaux sociaux. Vous pouvez acheter un bubble tea au coin d'une rue et vous asseoir sur le trottoir pour faire défiler vos flux d'actualités. La dimension anormale : un distributeur automatique de boissons peut soudainement se lever sur deux jambes et s'éloigner, ou le feu tricolore auquel vous attendez s'avère être une créature vivante dotée d'un œil qui dirige elle-même la circulation.

**Le « Chaos » (混厄)** — c'est le terme générique employé dans le jeu pour désigner l'ensemble de ces manifestations surnaturelles. Né du subconscient collectif turbulent et désordonné de l'humanité, le Chaos prend des formes infinies et déroutantes. Certaines entités du Chaos sont inoffensives et aident aux services municipaux, comme faire office de feux de signalisation ; d'autres sont malveillantes et menacent gravement la sécurité publique. Même les êtres humains et les véhicules peuvent subir une corruption par le Chaos.

L'équipe de développement a résumé leur vision de façon très juste : *« Un monde totalement identique à la réalité deviendrait rapidement monotone. C'est pourquoi nous avons intégré un élément inexistant dans le monde réel : le 'Chaos'. Notre objectif est de faire vivre aux joueurs des expériences impossibles dans la vie réelle. »*

---

### Qui incarnez-vous dans ce monde ?

Dans cet univers, vous incarnez un enquêteur d'élite du **Bureau de Gestion du Chaos**, abrégé en **A.C.D. (Anti-Chaos Directorate)**.

L'A.C.D. (混厄对策局) est l'agence gouvernementale officielle chargée de contenir les anomalies liées au Chaos et de réprimer la criminalité surnaturelle — en clair, le ministère chargé de gérer toutes les créatures et phénomènes étranges.

Votre nom de code opérationnel est **« Infinite Trigger » (无限扳机)**. En tant que capitaine de l'escouade spéciale de l'A.C.D. fraîchement parachuté à Nova City (新启市), vous commencez de zéro : sans réseau, sans réputation et sans ressources.

Cependant, loin du cliché habituel du « sauveur providentiel venu du ciel pour sauver l'univers », les créateurs vous ont attribué un rôle résolument ancré dans le XXIe siècle : **vous êtes un créateur de contenu / influenceur.**

Vous voulez vous faire une place à Nova City ? Gagnez d'abord des abonnés. Vous voulez recruter des équipiers ? Gagnez des abonnés. Vous voulez progresser dans l'intrigue ? Gagnez encore des abonnés !

Dans ce monde, les réseaux sociaux constituent votre arme la plus puissante. En publiant des vlogs, en lançant des diffusions en direct et en résolvant des crises urbaines, vous forgez votre notoriété et passez d'un profil inconnu avec zéro abonné à une véritable célébrité municipale. De plus, vous pouvez alterner librement entre plusieurs identités civiles — policier, hacker ou livreur — chacune débloquant des actions et des approches d'enquête uniques.

Ce parti-pris est rafraîchissant : vous ne jouez pas un élu divin au destin tragique, mais un jeune adulte plein d'ambition qui s'efforce de réussir sa vie dans une immense métropole, et qui se trouve avoir le talent d'affronter des monstres paranormaux.

---

### Vos équipiers

Bien entendu, vous n'opérerez pas seul.

Votre mission consiste à reconstituer votre propre unité spéciale de l'A.C.D., entouré de coéquipiers hauts en couleur :

- **Taffy** (Nom de code *Phantom Rider* / 幻速骑士) : Jeune enquêtrice débutante à l'A.C.D., dont la philosophie se résume à trois règles d'or : fuir les ennuis, maximiser la rémunération et prendre deux heures de pause après cinq minutes de travail. Son rêve ultime est d'intégrer la légendaire « Division Spéciale ».
- **Bansy** (Nom de code *Chromatic Soul* / 撼灵之彩) : Artiste de street-art et de graffiti urbain, animée d'une soif débordante de destruction et de création.
- **Alan** (Nom de code *Urban Wanderer* / 城间漫游) : Courtier en informations rusé, qui sillonne la ville et noue des contacts chaleureux avec tout le monde.
- **Mechanika** (Nom de code *Machine Sprite* / 机械精灵) : Une employée spectrale capable d'insuffler la vie aux mécanismes électroniques et industriels, et qui a un faible irrésistible pour les frites.

Chaque équipier a son tempérament singulier, mais tous regorgent de charme. Votre tâche consiste à rassembler ces personnalités et à reconstruire la réputation de l'A.C.D.

---

### Que trouve-t-on d'autre à Nova City ?

Au-delà de l'A.C.D., de multiples factions animent la vie de Nova City :

- **Le Conseil de Gouvernance de Nova City (新启统理院)** : L'organe suprême de l'administration municipale.
- **Le Bureau de Patrouille de Nova City (新启巡卫署)** : Les forces de police chargées de l'ordre public quotidien et de la criminalité ordinaire, qui collaborent avec l'A.C.D.
- **Le Gang de l'Énigme / Gang du Démon Vert (谜面帮 / 绿鬼帮)** : Des organisations criminelles implantées de longue date dans les bas-fonds, étroitement liées au trafic d'énergie du Chaos.
- **Blue Cat Logistics & Cyno-Demon Club (蓝猫物流、犬魔社)** : D'autres organisations locales pour lesquelles vous pouvez accomplir des missions de mercenaire rémunérées.
- **La Banque Aethelgard (Eagle Court Bank / 鹰庭银行)** : Une grande institution financière réputée de Nova City, dont la rumeur dit qu'elle est liée au trésor du Roi Salomon.

La ville regorge également de lieux emblématiques : **New Coast (新岸区)** est le quartier d'affaires et centre financier étincelant ; le **Soundwave Club (音潮俱乐部)** est le sanctuaire des fêtes nocturnes et raves électro ; le **Paradox District (狂悖街区)** est l'épicentre de la culture de rue avec courses de voitures, graffiti, skateparks et streetball ; et le **Thousand Gathering Bazaar (千集条商业街)** réunit boutiques branchées, arcades et street food.

Les citoyens utilisent même une application sociale universelle baptisée **« BaBu » (叭卜)**, qui vous permet de discuter directement avec vos partenaires et de renforcer vos liens d'amitié.

---

### Deux mégapoles, deux styles de vie

À ce jour, le jeu a dévoilé deux gigantesques métropoles.

**Nova City (新启市)** est la première : une métropole maritime moderne d'inspiration occidentale bordée par l'océan. Ponts suspendus majestueux, voies express côtières, terrains de beach-volley et bars panoramiques sur les toits incarnent le dynamisme d'une capitale internationale.

**Chongxiao City (重霄市)** est la seconde, ville natale du protagoniste. Son architecture puise directement son inspiration dans Shanghai et Hangzhou : des symboles comme la Perle de l'Orient, la silhouette du Bund et la rue Wukang s'harmonisent avec le lac de l'Ouest, la pagode Leifeng et les collines de théiers du village de Longjing. Une métropole alliant vitalité cyberpunk futuriste et poésie orientale traditionnelle.

Les déplacements entre ces deux villes ne se font pas par un simple écran de chargement noir, mais via une véritable séquence de vol en avion de ligne avec animations soignées.

D'un côté un New York cyberpunk, de l'autre une fusion cyberpunk entre Hangzhou et Shanghai : expérimenter deux visions urbaines totalement différentes au sein d'un même jeu témoigne d'une ambition remarquable.

---

### Alors, quelle est véritablement la morale de l'histoire ?

En résumé :

Vous êtes un enquêteur de l'A.C.D. tout juste débarqué à Nova City sous le pseudonyme « Infinite Trigger ». Votre mission consiste à juguler les innombrables manifestations du Chaos pour protéger la cité, tout en reconstituant votre équipe, en gagnant des abonnés et en vous imposant comme influenceur en vue — car l'impact social est votre arme suprême.

Tout au long de cette aventure, vous ferez la connaissance d'alliés fascinants et de redoutables rivaux, explorerez chaque recoin urbain et lèverez peu à peu le voile sur vos propres souvenirs oubliés.

Loin des RPGs post-apocalyptiques sombres et désespérés, *Ananta* offre le récit vibrant d'un jeune arrivant dans une grande ville : travailler dur, nouer des amitiés durables, profiter de la vie urbaine (tout en terrassant des monstres paranormaux au passage).

Les menaces sont réelles, mais entre deux batailles, vous pouvez danser jusqu'au bout de la nuit au Soundwave Club, remporter des courses urbaines au Paradox District ou savourer un café et jouer aux bornes d'arcade au bazar.

Crise et vie quotidienne s'entrecroisent en permanence. Que vous choisissiez d'affronter les ténèbres du Chaos ou de profiter de la chaleur des néons de la ville, le choix vous appartient entièrement.

Et concilier le sauvetage du monde avec le plaisir authentique de la vie urbaine rend cette aventure infiniment plus passionnante qu'un récit héroïque ordinaire.`,
      IT: `# Sai davvero che storia racconta Ananta?

Ho già scritto diversi articoli su Ananta per parlare dell'eliminazione totale del gacha, del dinamismo del sistema di combattimento e della straordinaria bellezza della sua metropoli open world. Ma c'è una domanda fondamentale che non avevamo ancora approfondito sul serio: **Che storia racconta davvero questo gioco?**

Oggi esploriamo a fondo proprio questo aspetto.

---

### Un mondo in cui le leggende metropolitane diventano realtà

L'ambientazione di Ananta è collocata in un mondo moderno molto simile alla Terra, ma con una differenza sostanziale: **tutte le leggende metropolitane sono diventate reali.**

Tutte le storie di fantasmi che ascoltavi da bambino, le dicerie più bizzarre e i racconti del tipo «è successo all'amico di un amico» in questo universo esistono per davvero. L'umanità convive quotidianamente con fenomeni paranormali e all'angolo di ogni strada possono manifestarsi eventi inspiegabili in qualsiasi istante.

Nelle parole ufficiali degli sviluppatori, si tratta di un mondo in cui **«Realtà» e «Anomalia» coesistono**.

Il lato reale comprende gli aspetti più familiari: caffetterie accoglienti, linee della metropolitana, consegne a domicilio e social network. Puoi comprare un bubble tea e sederti sul marciapiede a scorrere i post sul telefono. Il lato anomalo: un distributore automatico di bevande lungo la strada può improvvisamente alzarsi su due gambe e camminare, oppure il semaforo a cui sei fermo si rivela essere una creatura vivente con tanto di occhi che dirige il traffico.

**«Chaos» (混厄)** — è il termine generale usato nel gioco per definire tutte queste manifestazioni soprannaturali. Nato dal subconscio disordinato e tumultuoso della civiltà umana, il Chaos assume forme infinite. Alcune entità del Chaos sono benevole e aiutano nei servizi cittadini; altre sono malvagie e costituiscono una grave minaccia per la sicurezza pubblica. Persino le persone e le automobili possono subire la corruzione del Chaos.

Il team di sviluppo ha espresso perfettamente questo concetto: *«Un mondo del tutto identico alla realtà risulterebbe monotono e noioso. Per questo abbiamo introdotto un elemento inesistente nella vita reale: il 'Chaos'. Il nostro obiettivo è permettere ai giocatori di vivere esperienze impossibili nel mondo reale.»*

---

### Chi interpreti nel gioco?

In questo universo vesti i panni di un investigatore d'élite dell'**Anti-Chaos Directorate (A.C.D.)**.

L'A.C.D. (混厄对策局) è l'agenzia governativa ufficiale incaricata di fronteggiare le anomalie del Chaos e contrastare i crimini soprannaturali — in parole semplici, il dipartimento statale preposto al controllo dei fenomeni paranormali.

Il tuo nome in codice operativo è **«Infinite Trigger» (无限扳机)**. Nei panni del capitano della squadra speciale dell'A.C.D. appena trasferito a Nova City (新启市), devi costruire contatti, reputazione e risorse partendo totalmente da zero.

Tuttavia, a differenza del classico cliché del «prescelto sceso dal cielo per salvare il mondo», i creatori ti hanno riservato un ruolo modernissimo: **sei un influencer sui social media.**

Vuoi affermarti a Nova City? Prima devi guadagnare follower. Vuoi reclutare compagni fidati? Devi guadagnare follower. Vuoi far progredire la trama principale? Servono ancora più follower!

In questo mondo, i social network sono la tua arma più potente. Pubblicando aggiornamenti, trasmettendo in live-streaming e risolvendo crisi urbane, accresci la tua reputazione fino a trasformarti da account sconosciuto con zero follower in una vera star della metropoli. Inoltre puoi passare liberamente da un'identità all'altra — poliziotto, hacker o corriere espresso — sbloccando abilità e approcci di indagine completamente differenti.

È una premessa davvero stimolante: non interpreti una figura messianica distaccata, ma un giovane pieno di grinta che cerca di realizzarsi in una grande città e che, all'occorrenza, sa come sconfiggere mostri paranormali.

---

### La tua squadra di compagni

Ovviamente non affronterai tutto da solo.

La tua missione include la ricostruzione di una squadra speciale dell'A.C.D., composta da personalità uniche e indimenticabili:

- **Taffy** (Nome in codice *Phantom Rider* / 幻速骑士): Giovane recluta dell'A.C.D. con tre regole di vita imprescindibili: evitare qualsiasi seccatura, massimizzare il compenso e fare due ore di pausa dopo cinque minuti di lavoro. Il suo sogno è entrare nella leggendaria «Divisione Speciale».
- **Bansy** (Nome in codice *Chromatic Soul* / 撼灵之彩): Artista di strada e graffitara ribelle, mossa da una carica esplosiva di creatività e distruzione.
- **Alan** (Nome in codice *Urban Wanderer* / 城间漫游): Esperto informatore metropolitano, abile nel muoversi nei vicoli e nel fare amicizia con chiunque.
- **Mechanika** (Nome in codice *Machine Sprite* / 机械精灵): Una dipendente spettrale capace di infondere vita nei congegni meccanici, con una passione smodata per le patatine fritte.

Ognuno ha le sue stranezze, ma tutti traboccano di carisma. Il tuo compito è unire queste personalità e riportare in auge la squadra dell'A.C.D.

---

### Cos'altro si nasconde a Nova City?

Oltre all'A.C.D., a Nova City operano diverse altre fazioni:

- **Consiglio di Governo di Nova City (新启统理院)**: L'amministrazione civile della metropoli.
- **Ufficio di Pattuglia di Nova City (新启巡卫署)**: La polizia urbana incaricata dell'ordine pubblico e della criminalità comune, che collabora con l'A.C.D.
- **Riddle Gang / Green Ghost Gang (谜面帮 / 绿鬼帮)**: Organizzazioni criminali storiche dei bassifondi, profondamente legate al traffico di energia del Chaos.
- **Blue Cat Logistics & Cyno-Demon Club (蓝猫物流、犬魔社)**: Altre organizzazioni cittadine per cui è possibile svolgere lucrosi incarichi da freelance.
- **Banca Aethelgard (Eagle Court Bank / 鹰庭银行)**: Celebre istituto bancario di Nova City, attorno a cui circolano voci su un legame con il tesoro di Re Salomone.

La città offre quartieri iconici: **New Coast (新岸区)** è il moderno centro finanziario e commerciale; il **Soundwave Club (音潮俱乐部)** è il punto di ritrovo per i rave notturni; il **Paradox District (狂悖街区)** è il cuore pulsante della cultura street tra corse clandestine, graffiti, skate e streetball; e il **Thousand Gathering Bazaar (千集条商业街)** è il paradiso dello shopping e dello street food.

I cittadini utilizzano un'applicazione social chiamata **«BaBu» (叭卜)**, con cui puoi chattare con i tuoi compagni e approfondire le relazioni.

---

### Due megalopoli, due stili di vita

Finora sono state svelate due grandi città.

**Nova City (新启市)** è la prima: una moderna metropoli costiera di stampo occidentale. Grandi ponti sospesi, autostrade panoramiche, beach volley sulla spiaggia e sky-lounge sui tetti, con l'atmosfera dinamica di una capitale globale.

**Chongxiao City (重霄市)** è la seconda, città natale del protagonista. Il suo design è ispirato a Shanghai e Hangzhou: monumenti come la Oriental Pearl Tower, la skyline del Bund e Wukang Road si fondono con il Lago dell'Ovest, la Pagoda Leifeng e le piantagioni di tè di Longjing. Una città che unisce il dinamismo cyberpunk orientale al fascino della tradizione.

Gli spostamenti tra le due megalopoli avvengono attraverso una sequenza di volo su un aereo di linea con tanto di animazioni immersive, senza interruzioni improvvise.

Vivere contemporaneamente una New York cyberpunk e una fusione cyberpunk di Shanghai e Hangzhou all'interno dello stesso gioco dimostra un'ambizione straordinaria.

---

### In conclusione: che storia è davvero?

Riassumendo:

Sei un investigatore dell'A.C.D. appena giunto a Nova City con il nome in codice «Infinite Trigger». Il tuo obiettivo è contenere le incessanti manifestazioni del Chaos per difendere la città, ricostruire la tua squadra, guadagnare follower e affermarti come influencer — perché in questo mondo l'influenza social è la tua arma principale.

Lungo questo cammino incontrerai alleati stravaganti e temibili rivali, esplorerai ogni scorcio della metropoli e farai luce a poco a poco sui misteri del tuo passato dimenticato.

Lungi dall'essere il solito action cupo e apocalittico, *Ananta* racconta la vivace storia di un giovane che arriva in una nuova città per realizzarsi, stringere amicizie e vivere la quotidianità (trovandosi di tanto in tanto ad affrontare mostri paranormali).

I pericoli ci sono, ma tra una battaglia e l'altra puoi fare festa al Soundwave Club fino all'alba, vincere gare al Paradox District o goderti un caffè e i videogiochi al bazar.

Crisi e vita quotidiana si alternano continuamente. Che tu decida di combattere le anomalie nell'ombra o di immergerti nelle luci al neon della città, la scelta spetta solo a te.

E conciliare il salvataggio del mondo con il piacere di viverlo rende questa storia infinitamente più affascinante di qualsiasi favola eroica convenzionale.`,
      RU: `# А вы знаете, о чем на самом деле рассказывает сюжет Ananta?

Мы уже написали несколько статей об Ananta: о революционном отказе от гачи, кинематографичной боевой системе и красоте мегаполиса в открытом мире. Но мы так и не ответили подробно на один фундаментальный вопрос: **О чем же на самом деле повествует сюжет этой игры?**

Давайте сегодня разберем это во всех деталях.

---

### Мир, где городские легенды стали явью

Сюжет Ananta разворачивается в современном мире, который во многом напоминает нашу Землю, но обладает одним ключевым отличием: **все городские легенды здесь стали чистой правдой.**

Те детские страшилки, странные слухи и мистические истории из разряда «друг моего друга лично это видел» в этой вселенной существуют на самом деле. Человечество привычно сосуществует со сверхъестественными явлениями, и прямо посреди улицы в любую секунду может возникнуть нечто необъяснимое.

По выражению самих разработчиков, это мир, где **«Повседневная реальность» и «Аномалии» существуют бок о бок**.

Реальная часть включает привычные радости жизни: уютные кофейни, метрополитен, службы доставки еды и социальные сети. Вы можете купить чай с шариками на углу и присесть на скамейку, пролистывая ленту в смартфоне. Аномальная часть: автомат с газировкой на тротуаре может внезапно встать на ноги и зашагать по улице, а светофор, на котором вы ждете зеленый свет, оказывается живым существом с моргающим глазом, самолично регулирующим движение.

**«Хаос» (混厄 / Chaos)** — это официальный общий термин игры для обозначения всех подобных паранормальных явлений. Рожденный из беспокойного, хаотичного подсознания человеческой цивилизации, Хаос принимает бесконечное множество причудливых форм. Некоторые сущности Хаоса безобидны и помогают городским службам; другие представляют серьезную угрозу общественной безопасности. Даже люди и автомобили могут подвергаться искажению Хаосом.

Команда разработчиков очень точно охарактеризовала свою концепцию: *«Мир, полностью идентичный реальности, показался бы скучным и пресным. Поэтому мы добавили элемент, которого нет в настоящей жизни — 'Хаос'. Наша цель — подарить игрокам опыт, который принципиально невозможен в реальном мире.»*

---

### За кого вы играете?

В этом мире вы берете на себя роль элитного следователя из **Управления по противодействию Хаосу** — **A.C.D. (Anti-Chaos Directorate)**.

A.C.D. (混厄对策局) — это официальный правительственный орган, отвечающий за расследование аномалий Хаоса и пресечение паранормальной преступности. Проще говоря, это государственное ведомство по контролю за потусторонними явлениями.

Ваш оперативный позывной — **«Бесконечный курок» (Infinite Trigger / 无限扳机)**. В качестве новоназначенного командира спецотряда A.C.D., прибывшего в Нова-Сити (新启市), вы начинаете с абсолютного нуля: без связей, без репутации и без ресурсов.

Однако, в отличие от заезженного штампа об «избранном спасителе, спустившемся с небес спасать вселенную», сценаристы наделили героя очень актуальным образом 21 века: **вы — блогер и инфлюенсер.**

Хотите закрепиться в Нова-Сити? Сначала наберите подписчиков. Хотите завербовать надежных напарников? Набирайте подписчиков. Хотите продвинуться по сюжету? Вам снова нужны подписчики!

В этом мире социальные сети — ваше главное тактическое оружие. Публикуя посты и влоги, проводя стримы и расследуя происшествия, вы зарабатываете известность и шаг за шагом превращаетесь из никому не известного новичка в городскую знаменитость. Более того, вы можете свободно переключаться между гражданскими профессиями — полицейским, хакером или курьером доставки, — и каждая роль открывает совершенно разные способы взаимодействия с городом.

Такой подход выглядит по-настоящему свежо: вы играете не за пафосного мессию, а за энергичного молодого человека, который стремится сделать себе имя в огромном мегаполисе и попутно умеет расправляться со сверхъестественными чудовищами.

---

### Ваши напарники

Разумеется, действовать в одиночку вам не придется.

Ваша задача — заново сформировать собственную оперативную группу A.C.D., состоящую из колоритных и запоминающихся персонажей:

- **Тэффи** (Позывной *Призрачная гонщица* / 幻速骑士): Молодая сотрудница A.C.D., чье жизненное кредо состоит из трех правил: избегать лишних хлопот, получать как можно больше денег и после пяти минут работы отдыхать два часа. Ее мечта — попасть в легендарный «Спецотдел».
- **Бэнси** (Позывной *Краски души* / 撼灵之彩): Уличная граффити-художница, переполненная неудержимой жаждой разрушения и творчества.
- **Алан** (Позывной *Городской скиталец* / 城间漫游): Ловкий информатор, знающий каждый темный переулок и способный найти общий язык с кем угодно.
- **Механика** (Позывной *Машинная фея* / 机械精灵): Загадочная сотрудница, способная буквально «оживлять» механизмы, обожающая картошку фри.

Каждый из них по-своему эксцентричен, но невероятно харизматичен. Ваша задача — объединить этих чудаков и возродить репутацию A.C.D.

---

### Что еще есть в этом городе?

Помимо официального ведомства A.C.D., в Нова-Сити активно действуют и другие силы:

- **Городской совет Нова-Сити (新启统理院)**: Высший орган гражданского управления городом.
- **Патрульная служба Нова-Сити (新启巡卫署)**: Полицейское ведомство, отвечающее за ежедневный правопорядок и обычные преступления, сотрудничающее с A.C.D.
- **Банда Загадок / Банда Зеленых Призраков (谜面帮 / 绿鬼帮)**: Старейшие криминальные синдикаты трущоб, тесно связанные с нелегальным оборотом энергии Хаоса.
- **Логистика «Синий кот» и Клуб Кино-Демонов (蓝猫物流、犬魔社)**: Другие городские организации, для которых можно выполнять прибыльные контракты.
- **Банк Этельгард (Eagle Court Bank / 鹰庭银行)**: Знаменитый финансовый институт Нова-Сити, о котором ходят слухи о связи с сокровищами царя Соломона.

В городе также полно ярких районов: **Нью-Кост (新岸区)** — деловой центр с небоскребами; **Клуб «Звуковая волна» (音潮俱乐部)** — эпицентр ночных рейвов; **Район Парадоксов (狂悖街区)** — сердце уличной культуры с нелегальными гонками, граффити, скейтбордингом и стритболом; а **Торговая улица Тысячи Собраний (千集条商业街)** — центр шопинга, развлечений и вкусной еды.

Горожане общаются через фирменное мобильное приложение **«BaBu» (叭卜)**, позволяющее переписываться с напарниками и укреплять дружбу.

---

### Две мегаполии, два разных стиля жизни

На данный момент в игре представлены два гигантских мегаполиса.

**Нова-Сити (新启市)** — первый: прибрежный мегаполис в современном западном стиле с вантовыми мостами, прибрежными скоростными шоссе, пляжным волейболом и скай-барами на крышах.

**Чунсяо (重霄市)** — второй мегаполис и родной город главного героя. Его облик вдохновлен Шанхаем и Ханчжоу: телебашня Восточная жемчужина, набережная Вайтань и улица Укан гармонично соседствуют с озером Сиху, пагодой Лэйфэн и чайными плантациями Лунцзин. Город, сочетающий футуристическую киберпанк-динамику и восточное очарование.

Путешествия между городами происходят не через скучный черный экран загрузки, а через полноценную анимационную сцену перелета на пассажирском авиалайнере.

Сочетание киберпанк-Нью-Йорка и киберпанк-Ханчжоу с Шанхаем в рамках одной игры — это невероятно смелый и масштабный замысел.

---

### Так о чем же этот сюжет на самом деле?

Подведем итог:

Вы — новоприбывший следователь A.C.D. с позывным «Бесконечный курок». Ваша задача — расследовать аномалии Хаоса и защищать город, попутно заново собирая команду, набирая популярность и становясь топ-блогером — ведь в этом мире влияние в соцсетях является вашим сильнейшим оружием.

В ходе этого путешествия вы встретите верных друзей и опасных противников, исследуете каждый уголок мегаполиса и шаг за шагом раскроете тайну собственного забытого прошлого.

В отличие от мрачных историй о спасении умирающего мира, *Ananta* дарит ощущение яркого молодежного приключения о человеке, приехавшем в большой город: строить карьеру, заводить друзей, наслаждаться жизнью (и между делом побеждать потусторонних монстров).

Угрозы вполне реальны, но между битвами вы можете тусоваться в клубе до рассвета, побеждать в уличных гонках или пить кофе и играть в аркады в торговом квартале.

Кризис и яркая городская жизнь постоянно сменяют друг друга. Вы можете отправиться на охоту за аномалиями или раствориться в неоновых огнях мегаполиса — выбор всегда за вами.

И возможность спасать мир, не забывая по-настоящему жить в нем, делает эту историю в разы увлекательнее любого привычного эпоса о героях.`,
    },
  },
  {
    id: "3",
    slug: "what-makes-ananta-truly-different-player-perspective",
    category: "devlog",
    categoryLabel: {
      EN: "Player Insights & Deep Dive",
      CN: "玩家观察 · 深度思考",
      TW: "玩家觀察 · 深度思考",
      JP: "プレイヤー考察・独自視点",
      KR: "유저 관찰기 · 심층 분석",
      DE: "Spieler-Einblicke & Analyse",
      FR: "Regard de Joueur & Analyse",
      IT: "Analisi del Giocatore & Approfondimento",
      RU: "Мнение игрока и аналитика"
    },
    tags: [
      "无限大",
      "玩家观察",
      "不抽卡",
      "单机质感",
      "开放世界",
      "新启市",
      "重霄市",
      "科隆试玩",
      "Ananta"
    ],
    coverImage: "https://www.anantagame.com/pc/gw/20250904162009/assets/kv-full_f7467c2a.jpg",
    author: {
      name: "Captain Alex",
      role: {
        EN: "Site Webmaster & Veteran Player",
        CN: "本站站长 · 资深玩家",
        TW: "本站站長 · 資深玩家",
        JP: "ファンサイト管理人・古参プレイヤー",
        KR: "사이트 관리자 · 열혈 유저",
        DE: "Seitenbetreiber & Veteranen-Spieler",
        FR: "Créateur du site & Joueur Vétéran",
        IT: "Creatore del sito & Giocatore Veterano",
        RU: "Создатель сайта и опытный игрок"
      },
      avatar: "https://www.anantagame.com/pc/gw/20260811115527/assets/icon-studio_68622482.svg",
      handle: "@CaptainAlex"
    },
    date: "2026-06-18",
    readTimeMin: 6,
    initialLikes: 2430,
    initialViews: 35800,
    featured: true,
    title: {
      CN: "《无限大》到底哪里不一样？一个普通玩家的观察",
      TW: "《無限大》到底哪裡不一樣？一個普通玩家的觀察",
      EN: "What Makes Ananta Truly Different? An Ordinary Gamer's Perspective",
      JP: "『無限大（Ananta）』は一体何が違うのか？一人の一般プレイヤーの考察",
      KR: "《무한대》는 도대체 무엇이 다른가? 한 평범한 유저의 관찰기",
      DE: "Was macht Ananta wirklich anders? Die Beobachtung eines ganz normalen Spielers",
      FR: "En quoi Ananta est-il vraiment différent ? Le regard d'un joueur ordinaire",
      IT: "Cosa rende Ananta davvero diverso? Il punto di vista di un giocatore qualunque",
      RU: "Чем на самом деле уникальна Ananta? Наблюдения простого игрока"
    },
    summary: {
      CN: "从“二次元GTA”到“单机动作游戏套了二游的皮”，《无限大》身上贴满了各种标签。但它真正打动我的，是“不像谁”——彻底掀桌子的零抽卡商业模式、单机级别的电影化叙事与动作手感、充满呼吸感与反馈的活人城市，以及新启与重霄的双城审美。",
      TW: "從「二次元GTA」到「單機動作遊戲套了二遊的皮」，《無限大》身上貼滿了各種標籤。但它真正打動我的，是「不像誰」——徹底掀桌子的零抽卡商業模式、單機級別的電影化敘事與動作手感、充滿呼吸感與反饋的活人城市，以及新啟與重霄的雙城審美。",
      EN: "From 'Anime GTA' to 'single-player action in gacha clothing,' Ananta has received countless labels. But what truly makes it different is simple: it refuses to copy anyone. A zero-gacha model, cinematic action storytelling, living responsive cities, and dual-city aesthetics.",
      JP: "「アニメ版GTA」から「ソシャゲの皮をかぶったスタンドアローン」まで、様々なレッテルを貼られてきた『無限大』。しかし真の魅力は「誰の真似でもないこと」――ガチャ完全撤廃、家庭用アクション並みの演出、生きている街とNPC、そして新啓と重霄の2大都市。",
      KR: "'서브컬처 GTA'부터 '패키지 액션에 씌운 수집형 껍데기'까지, 온갖 라벨이 붙었던 《무한대》. 하지만 진짜 특별한 점은 바로 '그 누구도 닮지 않았다'는 것입니다. 가챠 완전 폐지, 싱글 패키지급 내러티브와 손맛, 살아 숨쉬는 NPC와 도시 생태계까지.",
      DE: "Von 'Anime-GTA' bis 'Singleplayer im Gacha-Gewand' – Ananta wurde mit vielen Etiketten versehen. Doch was wirklich begeistert, ist seine Einzigartigkeit: Ein kompromissloses Null-Gacha-Modell, kinoreife Action, lebendige NPCs und zwei völlig unterschiedliche Metropolen.",
      FR: "De 'GTA animé' à 'jeu solo déguisé en gacha', Ananta a reçu de nombreuses étiquettes. Mais sa véritable force réside dans son originalité absolue : modèle 100% sans gacha, narration cinématographique digne d'un jeu solo, PNJ vivants et dualité urbaine unique.",
      IT: "Da 'GTA anime' a 'gioco d'azione per giocatore singolo mascherato da gacha', Ananta ha ricevuto innumerevoli etichette. Ma ciò che colpisce davvero è la sua totale unicità: un modello senza gacha, narrazione cinematografica, NPC vivi e due megalopoli distinte.",
      RU: "От «аниме-GTA» до «одиночного экшена под видом гачи» — Ananta вешали разные ярлыки. Но главное ее отличие — она ни на кого не похожа: полный отказ от гачи, кинематографичный сюжет уровня сюжетных игр, живые NPC и контраст двух городов."
    },
    content: {
      CN: `# 《无限大》到底哪里不一样？一个普通玩家的观察

最近《无限大》的消息铺天盖地，定档1月15日，科隆试玩也放出来了。作为一个从2023年首曝就开始关注的老粉，我看过太多讨论，也听过太多说法——“二次元GTA”“单机动作游戏套了二游的皮”“网易又在画饼”——褒贬不一，说什么的都有。

但我琢磨了很久，觉得这些标签都不太对。

《无限大》真正让我觉得“不一样”的地方，其实是三个字：**不像谁**。

它不像市面上任何一款二次元开放世界游戏。IGN那篇试玩标题直接用了“Weird”这个词，说它是一大堆想法的奇怪混合体，但可能真的能行。我觉得这个评价挺到位的——它不是照着某个模板抄出来的，它真的在尝试一些别人没敢试的东西。

---

### 第一个不一样：不抽卡，彻底掀桌子

这条最狠。

官方确认过了，《无限大》所有角色全部通过剧情免费解锁，不搞抽卡，不搞专武，营收只靠外观和载具付费。制作人接受采访的时候说得很直白：**希望所有玩家都能体验到每个角色的故事**。

你想想，这些年二游的核心商业模式是什么？抽卡。角色放池子里，玩家氪金去捞，这是行业铁律。结果《无限大》直接说“我们不搞这套”——业内有人说这是对二游抽卡体系的正面挑战，我觉得说得轻了，这基本上就是**掀桌子**。

当然会有人问：不抽卡怎么赚钱？开发团队七八百人，投了这么多钱，回本靠什么？老实说我也没完全想通。但从目前的信息来看，付费点主要在车辆改装、痛车涂装、房子翻修，还有角色外观。你可以不花一分钱玩到所有角色和所有剧情，想花钱就买套好看的衣服或者搞一辆炫酷的痛车。

这个模式在二游里真的没见过。Fami通的采访标题直接问开发团队“没有角色抽卡真的没问题吗”——连日本媒体都觉得不可思议。但制作团队的态度很坚决，就是要这么做。

说实话，这种“我想不通他们怎么赚钱”的感觉，反而让我更想玩了。

---

### 第二个不一样：玩起来像单机，不像二游

这是科隆试玩之后很多媒体的共同感受。

IGN中国的试玩报告说得特别直白：《无限大》是把一套单机动作冒险游戏的动作内核、过场表现力，还有多角色多线交叉叙事手法，塞进了一款二次元都市开放世界游戏里。

我自己看了试玩视频，确实能感受到这一点。

15分钟的DEMO里，主角先跟一群混混来一场“如龙式”的街头徒手格斗，接着是一场好莱坞电影风格的都市追车戏——危急时刻的QTE、镜头紧随主角一路化险为夷的画面，那种紧张感和节奏感，真的像在玩一部单机作品。

IGN的编辑说“一瞬间让我以为玩的是一款单机作品”——我看了也有同感。

而且这次科隆试玩有个非常意外的安排：**男主角辰宿完全没有出场**。整个剧情模式由新角色**瓔瓏**全程担当。这说明什么？说明《无限大》可能不是单一主角叙事，而是多角色多线交叉叙事。一个敢让主角在试玩里不出场的游戏，胆子确实不小。

---

### 第三个不一样：城市是活的，NPC是有脾气的

这个可能是我个人最期待的部分。

很多开放世界游戏的城市就是个背景板，NPC站在那儿重复同一句台词，你撞他一下他“啊”一声就没了。《无限大》明显不想这么做。

重霄市的龙栖村试玩里，有个玩家开车撞倒了一个NPC，那人摔倒之后掉了手机。捡起来一看，手机上是他跟别人正在聊天的记录。连NPC手机里的聊天记录都专门做了内容设计——这种细节真的让人服气。

还有更离谱的。你在村子里朝正在闲聊的村民椅子上扔个井盖，对方身体一晃差点摔下去，然后一脸错愕地看着你。NPC不会机械重复同样的台词，他们融入日常的生活细节刻画十分用心。甚至有人推测NPC可能会随着游戏内时间流转改变自身行动。

我之前在另一篇博客里写过，在新启市穿着潮牌路过，路人会主动凑过来击掌——这不是预设动画，是你真的能跟这个城市互动。你在这个世界里的每个动作，好像都能得到反馈。

这种城市生态，我在别的二游里真的没见过。

---

### 第四个不一样：两座城市，两种完全不同的审美

新启市和重霄市。

新启是西式现代滨海都会，跨海大桥、空中酒吧、沙滩排球，典型的国际化大都市。重霄市融合了杭州和上海的地标——西湖、雷峰塔、龙井村，还有东方明珠、外滩、武康路。

而且这两座城市之间可以坐飞机往返，不是传送点那种“刷一下过去了”，是真的有过渡动画。

一座是赛博纽约，一座是赛博杭州加赛博上海。在同一个游戏里体验两种完全不同的城市风貌——这个想法本身就挺大胆的。而且重霄市刻意淡化了传统开放世界的地图边界，转而聚焦“场地”概念，从街机厅到茶馆，每个地方都有自己的氛围和玩法。

更绝的是你可以切换不同的职业身份来体验这座城市——警察、黑客、配送员。不同身份能做的事不一样，里希是警察就能盘问NPC，赛默是黑客就能搞入侵。同一个城市，换一个身份看到的是完全不同的世界。

---

### 说句实话

当然，它也不是没有让人担心的地方。

IGN的试玩也提到，游戏在本质上还是比较传统的。跨端开发的限制摆在那里，画面不可能按PC和PS5的上限来定调。早期PC安装包据说有250GB，优化到底怎么样还是个问号。而且它想做的事情实在太多了——街头格斗、追车戏、跑酷、潜行、开放世界探索——这些东西揉在一起，到底能不能顺畅地融合，只有正式上线才知道。

IGN德国那边的编辑试玩之后说，希望正式版能证明自己是个更厉害的“惊喜包”——我觉得这个心态挺对的，保持期待但也别盲目吹。

但话说回来，一个敢不抽卡、敢让主角在试玩里不出场、敢把单机动作游戏的手感塞进二游框架里的游戏——不管最后成不成，至少它敢不一样。

市面上不缺那种“照着成功模板抄一遍”的游戏。《无限大》走的是另一条路。它可能翻车，也可能真的捅破天花板。但作为玩家，我觉得这种“敢不一样”的态度本身就值得被看到。

2027年1月15日。到时候进去逛一圈，好坏自己说了算。`,
      TW: `# 《無限大》到底哪裡不一樣？一個普通玩家的觀察

最近《無限大》的消息鋪天蓋地，定檔1月15日，科隆試玩也放出來了。作為一個從2023年首曝就開始關注的老粉，我看過太多討論，也聽過太多說法——「二次元GTA」「單機動作遊戲套了二遊的皮」「網易又在畫大餅」——褒貶不一，說什麼的都有。

但我琢磨了很久，覺得這些標籤都不太對。

《無限大》真正讓我覺得「不一樣」的地方，其實是三個字：**不像誰**。

它不像市面上任何一款二次元開放世界遊戲。IGN那篇試玩標題直接用了「Weird」這個詞，說它是一大堆想法的奇怪混合體，但可能真的能行。我覺得這個評價挺到位的——它不是照著某個模板抄出來的，它真的在嘗試一些別人沒敢試的東西。

---

### 第一個不一樣：不抽卡，徹底掀桌子

這條最狠。

官方確認過了，《無限大》所有角色全部通過劇情免費解鎖，不搞抽卡，不搞專武，營收只靠外觀和載具付費。製作人接受採訪的時候說得很直白：**希望所有玩家都能體驗到每個角色的故事**。

你想想，這些年二遊的核心商業模式是什麼？抽卡。角色放池子裡，玩家課金去撈，這是行業鐵律。結果《無限大》直接說「我們不搞這套」——業內有人說這是對二遊抽卡體系的正面挑戰，我覺得說得輕了，這基本上就是**掀桌子**。

當然會有人問：不抽卡怎麼賺錢？開發團隊七八百人，投了這麼多錢，回本靠什麼？老實說我也沒完全想通。但從目前的信息來看，付費點主要在車輛改裝、痛車塗裝、房子翻修，還有角色外觀。你可以不花一分錢玩到所有角色和所有劇情，想花錢就買套好看的衣服或者搞一輛炫酷的痛車。

這個模式在二遊裡真的沒見過。Fami通的採訪標題直接問開發團隊「沒有角色抽卡真的沒問題嗎」——連日本媒體都覺得不可思議。但製作團隊的態度很堅決，就是要這麼做。

說實話，這種「我想不通他們怎麼賺錢」的感覺，反而讓我更想玩了。

---

### 第二個不一樣：玩起來像單機，不像二遊

這是科隆試玩之後很多媒體的共同感受。

IGN中國的試玩報告說得特別直白：《無限大》是把一套單機動作冒險遊戲的動作內核、過場表現力，還有多角色多線交叉敘事手法，塞進了一款二次元都市開放世界遊戲裡。

我自己看了試玩視頻，確實能感受到這一點。

15分鐘的DEMO裡，主角先跟一群混混來一場「如龍式」的街頭徒手格鬥，接著是一場好萊塢電影風格的都市追車戲——危急時刻的QTE、鏡頭緊隨主角一路化險為夷的畫面，那種緊張感和節奏感，真的像在玩一部單機作品。

IGN的編輯說「一瞬間讓我以為玩的是一款單機作品」——我看了也有同感。

而且這次科隆試玩有個非常意外的安排：**男主角辰宿完全沒有出場**。整個劇情模式由新角色**瓔瓏**全程擔當。這說明什麼？說明《無限大》可能不是單一主角敘事，而是多角色多線交叉敘事。一個敢讓主角在試玩裡不出場的遊戲，膽子確實不小。

---

### 第三個不一樣：城市是活的，NPC是有脾氣的

這個可能是我個人最期待的部分。

很多開放世界遊戲的城市就是個背景板，NPC站在那兒重複同一句台詞，你撞他一下他「啊」一聲就沒了。《無限大》明顯不想這麼做。

重霄市的龍棲村試玩裡，有個玩家開車撞倒了一個NPC，那人摔倒之後掉了手機。撿起來一看，手機上是他跟別人正在聊天的記錄。連NPC手機裡的聊天記錄都專門做了內容設計——這種細節真的讓人服氣。

還有更離譜的。你在村子裡朝正在閒聊的村民椅子上扔個井蓋，對方身體一晃差點摔下去，然後一臉錯愕地看著你。NPC不會機械重複同樣的台詞，他們融入日常的生活細節刻畫十分用心。甚至有人推測NPC可能會隨著遊戲內時間流轉改變自身行動。

我之前在另一篇博客裡寫過，在新啟市穿著潮牌路過，路人會主動湊過來擊掌——這不是預設動畫，是你真的能跟這個城市互動。你在這個世界裡的每個動作，好像都能得到反饋。

這種城市生態，我在別的二遊裡真的沒見過。

---

### 第四個不一樣：兩座城市，兩種完全不同的審美

新啟市和重霄市。

新啟是西式現代濱海都會，跨海大橋、空中酒吧、沙灘排球，典型的國際化大都市。重霄市融合了杭州和上海的地標——西湖、雷峰塔、龍井村，還有東方明珠、外灘、武康路。

而且這兩座城市之間可以坐飛機往返，不是傳送點那種「刷一下過去了」，是真的有過渡動畫。

一座是賽博紐約，一座是賽博杭州加賽博上海。在同一個遊戲裡體驗兩種完全不同的城市風貌——這個想法本身就挺大膽的。而且重霄市刻意淡化了傳統開放世界的地圖邊界，轉而聚焦「場地」概念，從街機廳到茶館，每個地方都有自己的氛圍和玩法。

更絕的是你可以切換不同的職業身份來體驗這座城市——警察、黑客、配送員。不同身份能做的事不一樣，里希是警察就能盤問NPC，賽默是黑客就能搞入侵。同一個城市，換一個身份看到的是完全不同的世界。

---

### 說句實話

當然，它也不是沒有讓人擔心的地​​方。

IGN的試玩也提到，遊戲在本質上還是比較傳統的。跨端開發的限制擺在那裡，畫面不可能按PC和PS5的上限來定調。早期PC安裝包據說有250GB，優化到底怎麼樣還是個問號。而且它想做的事情實在太多了——街頭格鬥、追車戲、跑酷、潛行、開放世界探索——這些東西揉在一起，到底能不能順暢地融合，只有正式上線才知道。

IGN德國那邊的編輯試玩之後說，希望正式版能證明自己是個更厲害的「驚喜包」——我覺得這個心態挺對的，保持期待但也別盲目吹。

但話說回來，一個敢不抽卡、敢讓主角在試玩裡不出場、敢把單機動作遊戲的手感塞進二遊框架裡​​的遊戲——不管最後成不成，至少它敢不一樣。

市面上不缺那種「照著成功模板抄一遍」的遊戲。《無限大》走的是另一條路。它可能翻車，也可能真的捅破天花板。但作為玩家，我覺得這種「敢不一樣」的態度本身就值得被看到。

2027年1月15日。到時候進去逛一圈，好壞自己說了算。`,
      EN: `# What Makes Ananta Truly Different? An Ordinary Gamer's Perspective

Lately, news about Ananta has been everywhere—the release date locked in for January 15, and hands-on impressions pouring out of Gamescom. As an old-school fan following the project since its 2023 reveal, I have seen endless debates and contradictory hot takes: "Anime GTA," "a single-player action game masquerading as a gacha," or "NetEase selling snake oil."

I spent a long time reflecting on all of this, and I realized none of those labels fit.

What genuinely makes Ananta feel "different" comes down to three simple words: **It copies nobody**.

It doesn't feel like any other anime open-world game currently on the market. IGN's hands-on headline famously called it "Weird"—a curious cocktail of audacious ideas that might actually work. That hits the nail on the head: it wasn't cloned from an existing industry template; it is genuinely daring to attempt what others haven't.

---

### Difference #1: Zero Gacha — Flipping the Entire Table

This is by far the boldest move.

The official team has confirmed: **all playable characters in Ananta are unlocked 100% free through story progression**. No character banners, no signature weapon gachas. Revenue relies purely on cosmetic skins, vehicle tuning, and apartment styling. The producer stated in interviews with total sincerity: *"We want every single player to experience every character's story."*

Think about this: what has been the foundational monetization engine of anime gaming for a decade? Gacha pulls. Trapping beloved characters behind RNG coin-flips is treated as industry dogma. Yet Ananta brazenly proclaims, "We aren't doing that." Pundits call this a bold challenge to the gacha model; I think that's an understatement—it's **flipping the entire table**.

Naturally, people wonder: *How will they turn a profit?* With a studio of 700–800 developers and astronomical production costs, how do they recoup? Honestly, I haven't fully solved that riddle either. But confirmed monetization focuses on vehicle custom parts, itasha wrap liveries, apartment renovations, and character cosmetics. You can experience 100% of the roster and lore without spending a single cent.

Famitsu's interview headline asked the dev team straight: *"Is it really okay to launch without character gacha?"* Even seasoned Japanese gaming journalists were stunned. But the team stood firm. That baffling mystery of "how will they profit?" honestly makes me respect and anticipate it even more.

---

### Difference #2: Plays Like Single-Player, Not a Gacha

This was the universal verdict across press previews at Gamescom.

IGN China put it bluntly: *Ananta takes the core combat feel, cinematic set-pieces, and multi-character cross-narrative techniques of a premier single-player action-adventure and embeds them inside an anime urban open world.*

Watching the playtest videos, that distinction is instantly palpable.

In the 15-minute demo, the protagonist starts with a *Yakuza*-style bare-knuckle brawl against street thugs, transitioning seamlessly into a Hollywood-caliber high-speed car chase—complete with intense QTEs and dynamic camera tracking through narrow city streets. The adrenaline and pacing genuinely feel like a premium standalone console title.

IGN's previewer remarked: *"For a moment, it genuinely made me forget I was looking at an online live-service title."*

Furthermore, the Gamescom demo made an astonishing creative choice: **the male protagonist Chen Su did not appear at all**. The entire narrative segment was spearheaded by the newly introduced character **Ying Long**. What does that signify? It hints that Ananta might not rely on a single Mary-Sue protagonist POV, but rather a multi-perspective ensemble narrative. A game confident enough to bench its primary hero in its flagship public demo has serious courage.

---

### Difference #3: A Living City Where NPCs Have Real Attitudes

This is arguably the aspect I am most hyped for.

In most open-world titles, cities are merely static dioramas. NPCs stand rooted in place, endlessly repeating one voice line. If you bump into them, they let out a canned grunt and resume idling. Ananta clearly refuses that shortcut.

In the Longqi Village demo in Chongxiao City, a player accidentally bumped an NPC with a car. The civilian fell over and dropped his smartphone. When the player picked it up, the screen actually displayed an in-progress chat message conversation the NPC was having with a friend. Designing bespoke in-universe chat logs inside an unnamed NPC's dropped phone—that level of obsessive micro-detail commands pure respect.

It gets crazier: if you hurl a manhole cover onto a chair where two villagers are chatting, one of them stumbles, nearly falls over, and shoots you a bewildered, furious glare. NPCs don't roboticly loop generic lines; their everyday routines are meticulously animated, with rumors suggesting their daily schedules dynamically shift alongside in-game time.

As I noted in an earlier article, strolling through Nova City in trendy streetwear can prompt pedestrians to actively approach you for a high-five. These aren't pre-rendered cutscenes; they are real-time reactive sandbox systems. Every action you take reverberates through the world.

---

### Difference #4: Two Cities, Two Diametrically Opposed Aesthetics

**Nova City** versus **Chongxiao City**.

Nova City is a sleek, Western-influenced coastal metropolis—sprawling suspension bridges, rooftop sky-bars, beachfront volleyball, and bustling financial districts. In stark contrast, Chongxiao City weaves the cultural heritage of Hangzhou and Shanghai together—West Lake, Leifeng Pagoda, Longjing tea plantations alongside the Oriental Pearl Tower, The Bund, and Wukang Road.

Better yet, traveling between both megacities involves taking an airliner with a dedicated transit sequence, rather than a generic loading-screen teleport.

One is Cyberpunk New York; the other is Cyberpunk Hangzhou fused with Cyberpunk Shanghai. Experiencing two completely distinct architectural philosophies in one seamless title is an extraordinary ambition. Chongxiao also de-emphasizes rigid map boundaries, focusing on atmospheric "venues"—from buzzing retro arcade parlors to tranquil traditional tea houses.

To top it all off, you can switch between civilian identities to experience the city—police officer, hacker, or delivery courier. A police officer can interrogate citizens, while a hacker can breach municipal networks. The same street corner looks completely different depending on whose shoes you wear.

---

### Honest Truths & Lingering Questions

Of course, it's not without valid concerns.

IGN's coverage noted that foundational mechanics remain grounded in classical action principles. Cross-platform mobile parity imposes real technical ceilings—visual fidelity won't fully match PS5 exclusive blockbusters. Early PC test builds were rumored to clock in at a staggering 250 GB, leaving real questions about launch-day optimization. Furthermore, blending street brawls, vehicle chases, parkour, stealth, and massive sandbox exploration into one cohesive package is notoriously difficult.

As IGN Germany thoughtfully summarized: *We hope the final launch proves to be a magnificent surprise.* That is the ideal mindset: genuine optimism balanced with grounded expectations.

Yet at the end of the day, a project bold enough to abolish character gachas, leave its main hero out of major demos, and infuse the weight of single-player action into a live-service framework deserves praise.

The market has plenty of games that follow safe, copy-paste formulas. Ananta chose a different path. It might stumble, or it might smash through the ceiling. But as a player, that courage to be **different** deserves to be celebrated.

January 15, 2027. When the gates open, step in and judge for yourself.`,
      JP: `# 『無限大（Ananta）』は一体何が違うのか？一人の一般プレイヤーの考察

最近、『無限大（Ananta）』の話題で持ちきりです。2027年1月15日のリリース日が確定し、Gamescom（ケルン）での実機試玩プレイも公開されました。2023年の初報から追い続けてきた古参ファンとして、これまで無数の議論を見てきました。「アニメ版GTA」「ソシャゲの皮を被った家庭用アクション」「またNetEaseの大風呂敷か」――賛否両論、様々な声が飛び交っています。

しかし、じっくりと考え抜いた末、私はどのレッテルも的を射ていないと感じました。

『無限大』が本当に「他と違う」と感じさせる核心、それはたった一言に尽きます――**「誰の真似でもないこと」**。

このゲームは、現在市場にあるどのアニメ調オープンワールドとも似ていません。IGNのプレイレポート記事はタイトルに「Weird（奇妙・独特）」という単語を使い、「無数のアイデアの奇妙な混合体だが、本当に大成功するかもしれない」と評しました。まさに言い得て妙です。既存のヒット作の型をなぞるのではなく、誰も試さなかった領域へ本気で挑んでいるのです。

---

### 違いその1：ガチャ完全撤廃、業界のテーブルをひっくり返す

これが最大の衝撃でした。

公式が正式に発表した通り、**『無限大』の全プレイアブルキャラクターはメインストーリー進行によって完全無料で解放されます**。キャラガチャなし、専用武器ガチャなし。マネタイズはコスチューム衣装、乗り物のカスタマイズ、住宅のリノベーションのみ。プロデューサーはインタビューで率直に語りました。「すべてのプレイヤーに、全キャラクターの物語を体験してほしい」と。

考えてみてください。ここ10年のアニメ系ゲームの絶対的収益モデルは何だったでしょうか？ ガチャです。魅力的なキャラクターをガチャに入れ、課金させるのが業界の鉄則でした。それを『無限大』は「うちはやらない」と言い切ったのです。業界内では「ガチャ構造への挑戦」などと言われていますが、生ぬるい。これは事実上の**「ちゃぶ台返し」**です。

当然、「どうやって採算を取るのか？」「700〜800人の開発陣と巨額の開発費をどう回収するのか？」という疑問は湧きます。正直、私にも完全には分かりません。しかし現時点の情報を見る限り、愛車を痛車にペイントしたり、部屋を改装したり、お気に入りの衣装を買うことにお金を使う仕組みです。1円も払わずに全キャラ・全ストーリーを味わい尽くすことができます。

ファミ通のインタビュー記事のタイトルは、開発陣に対して直球で「キャラガチャなしで本当に大丈夫なのか？」と問いかけました。日本の大手メディアですら驚愕したのです。それでも開発陣の意志は揺らぎませんでした。「どうやって儲けるのか見当もつかない」というこの規格外のスタンスこそが、私をますますワクワクさせます。

---

### 違いその2：ソシャゲではなく、まるで家庭用単体アクションのプレイフィール

これはGamescomで実際に試遊した世界各国のメディアが共通して抱いた感想です。

IGN中国のレポートは非常に明快でした。「『無限大』は、家庭用アクションアドベンチャーの操作感、映画的カットシーンの演出力、そして複数キャラクターによる群像劇の手法を、アニメ調都市オープンワールドの中に詰め込んだ作品だ」と。

プレイ映像を見れば、その言葉の意味がよく分かります。

15分間のデモでは、主人公が街のチンピラ相手に『龍が如く』さながらのステゴロ（素手格闘）を繰り広げ、直後にハリウッド映画顔負けのハイウェイカーチェイスへ突入します。緊迫したQTE、主人公の危機一髪を追い続けるダイナミックなカメラワーク。その緊張感とリズムは、完全に一級品のシングルプレイヤー作品そのものです。

IGNの記者は「一瞬、自分が遊んでいるのが買い切りの家庭用ゲームだと錯覚した」と述べていましたが、見ている私も全く同じ感覚を覚えました。

さらに今回の試遊デモには驚くべき仕掛けがありました。**男性主人公の「辰宿」が一切登場しなかったのです**。デモ全編のストーリーを新キャラクター「瓔瓏（インロン）」が一手に担っていました。これが何を意味するか？ 『無限大』は単一の主人公視点ではなく、複数のキャラクター視点が交錯するマルチプロット群像劇である可能性が高いということです。看板主人公を試遊デモから外すゲームなど、並大抵の度胸ではありません。

---

### 違いその3：街が生きており、NPCが感情を持っている

個人的に最も期待しているのがこの部分です。

従来のオープンワールドゲームにおいて、都市はただの背景パネルになりがちでした。NPCは定位置に立ち尽くし、同じ台詞をリピートし、ぶつかっても一言うめくだけ。『無限大』はそのような安易な妥協を明確に拒絶しています。

重霄市（ちょうしょうし）の龍栖村（りゅうせいそん）のデモでは、あるプレイヤーが車でNPCを撥ねてしまう場面がありました。倒れたNPCの手からスマートフォンが転がり落ち、それを拾い上げると、画面にはそのNPCが友人としていたチャットのやり取りがそのまま表示されていました。名もなき村人の落としたスマホのチャット履歴まで専用に作り込まれている――この狂気じみたディテールへのこだわりに脱帽しました。

さらに、村で雑談している村人の椅子にマンホールの蓋を投げつけると、相手はバランスを崩して転びそうになり、目を丸くして怒りの表情でこちらを睨みつけてきます。NPCは機械的に同じ台詞を繰り返さず、生活感あふれるリアクションを返してくれます。ゲーム内時間の経過に伴い行動パターンが変化する仕様も噂されています。

以前のブログでも触れましたが、新啓市でストリートファッションを着て歩くと、通りすがりのNPCが自ら近寄ってハイタッチを求めてきます。これは単なる固定アニメーションではなく、プレイヤーが本当に街とインタラクションしている証拠です。世界へのあらゆる行動に、手応えのある反応が返ってきます。

---

### 違いその4：2つの巨大都市、全く異なる2つの美学

**「新啓市（Nova City）」**と**「重霄市（Chongxiao City）」**。

新啓市は、巨大な海上大橋、スカイラウンジ、ビーチバレーが広がる西欧風の近代ベイサイドメガロポリス。一方の重霄市は、西湖、雷峰塔、龍井村といった杭州の景勝地と、東方明珠や外灘、武康路といった上海の歴史・近代ランドマークが融合したオリエンタルサイバーシティです。

しかもこの2都市間は、単なる暗転ワープではなく、旅客機に搭乗する専用の移動シークエンスが用意されています。

サイバーパンク・ニューヨークと、サイバーパンク杭州×上海。1つのゲームの中で完全に異なる2つの都市美学を体験できる――この構想自体が極めて野心的です。また重霄市では境界線の存在感を薄め、ゲームセンターから伝統茶館まで、場所ごとの「空間の空気感」と遊びにフォーカスしています。

さらに素晴らしいのは、警察官、ハッカー、配達員など、異なる職業身分を切り替えて街を体験できる点です。警察官の「里希」ならNPCを尋問でき、ハッカーの「赛默」なら都市システムにハッキングを仕掛けられます。同じ交差点でも、身分を変えることで全く別の世界が広がるのです。

---

### 正直な懸念と期待

もちろん、懸念点がゼロというわけではありません。

IGNの試遊でも指摘されたように、アクションの基本構造には堅実で伝統的な部分もあります。スマートフォンを含むマルチプラットフォーム展開の宿命として、PS5専用のハイエンドAAAタイトルと全く同じグラフィック上限を求めることはできません。PC版の初期テストクライアントが250GBに達したという噂もあり、最適化がどこまで仕上がっているかは未知数です。また、格闘、カーチェイス、パルクール、ステルス、自由探索といった膨大な要素が破綻なく調和するかは、正式サービスを迎えて初めて判明します。

IGNドイツの記者が「製品版がさらに驚異的な“サプライズボックス”であることを証明してほしい」と語ったように、期待を寄せつつも冷静に見守る姿勢が大切でしょう。

しかし、ガチャを捨て去り、試遊で主人公を隠し、家庭用アクションの重厚な手応えをオープンワールドに注ぎ込んだこの作品――成否はどうあれ、少なくとも「果敢に他と違う道を選んだ」その気概は本物です。

既存の成功テンプレートを真似ただけの安全なゲームは、世の中にいくらでもあります。『無限大』はその対極を走っています。失敗するかもしれないし、ゲーム業界の常識を覆すかもしれません。しかし一人のプレイヤーとして、この「人と違うことを恐れない姿勢」を心から応援したいのです。

2027年1月15日。街のゲートが開いたら、自らの足で飛び込んで、その真価を確かめましょう。`,
      KR: `# 《무한대(Ananta)》는 도대체 무엇이 다른가? 한 평범한 유저의 관찰기

최근 《무한대》에 관한 소식이 온 인터넷을 뒤덮고 있습니다. 2027년 1월 15일 출시일 확정 소식과 함께 게임스컴(Gamescom) 현장 실기 시연 빌드까지 공개되었습니다. 2023년 첫 공개 당시부터 지금까지 지켜봐 온 오랜 팬으로서, 그동안 수많은 평가와 논쟁을 접했습니다. "서브컬처판 GTA다", "싱글 패키지 액션에 모바일 껍데기만 씌웠다", "넷이즈의 전형적인 희망고문이다" 등 호불호와 온갖 추측이 난무했습니다.

하지만 오랫동안 곰곰이 생각해보니, 그 어떤 수식어도 이 게임의 본질을 정확히 담아내지 못하고 있었습니다.

《무한대》가 저에게 진정으로 "다르다"고 느끼게 만든 이유는 단 세 글자입니다. **"누구도 닮지 않았다."**

이 게임은 현재 시장에 나와 있는 그 어떤 서브컬처 오픈월드와도 궤를 달리합니다. IGN의 체험기 헤드라인은 대담하게도 'Weird(기묘하고 독특한)'라는 단어를 사용하며, "수많은 야심찬 아이디어들이 뒤섞인 기묘한 혼합체이지만, 어쩌면 정말로 대성공을 거둘지도 모른다"고 평가했습니다. 저는 이 평가가 매우 정확하다고 생각합니다. 기존의 성공 공식을 베낀 것이 아니라, 그 누구도 감히 시도하지 못했던 영역에 도전하고 있기 때문입니다.

---

### 첫 번째 차별점: 가챠 완전 폐지, 업계의 판을 엎어버리다

가장 충격적인 대목입니다.

공식 개발진이 거듭 확인했습니다. **《무한대》의 모든 플레이어블 캐릭터는 메인 스토리 진행을 통해 100% 무료로 획득할 수 있습니다.** 캐릭터 뽑기도 없고, 전용 무기 가챠도 없습니다. 수익 모델은 오직 캐릭터 외형 스킨, 차량 튜닝, 하우징 인테리어뿐입니다. 총괄 프로듀서는 인터뷰에서 "모든 유저가 모든 캐릭터의 서사를 온전히 경험하길 바란다"고 진솔하게 밝혔습니다.

생각해보십시오. 지난 10년 동안 수집형 게임의 핵심 비즈니스 모델이 무엇이었습니까? 가챠였습니다. 매력적인 캐릭터를 한정 픽업에 넣고 유저들의 과금을 유도하는 것은 업계의 불문율이었습니다. 그런데 《무한대》는 "우리는 그런 거 안 하겠다"고 선언했습니다. 업계에서는 가챠 시스템에 대한 정면 도전이라고 말하지만, 제 생각엔 도전 수준이 아니라 아예 **밥상을 엎어버린 격**입니다.

물론 누구나 의문을 품습니다. "뽑기가 없는데 개발비를 어떻게 회수하지? 700~800명에 달하는 거대 개발팀을 어떻게 유지하지?" 솔직히 저 역시 속 시원한 해답을 찾지는 못했습니다. 하지만 현재 공개된 정보에 따르면, 차량 개조, 이타샤 도색, 주거 공간 리모델링, 패션 의상이 핵심 과금 요소입니다. 단 1원도 쓰지 않고 모든 캐릭터와 스토리를 즐길 수 있습니다.

일본 패미통(Famitsu) 인터뷰 헤드라인마저 개발진에게 "캐릭터 가챠가 없어도 정말 괜찮은 겁니까?"라고 직접 물었을 정도입니다. 일본 미디어조차 경악한 것이죠. 하지만 개발팀의 태도는 확고했습니다. "어떻게 돈을 벌겠다는 건지 도무지 이해할 수 없다"는 이 기묘한 느낌이, 역설적으로 게이머로서의 기대감을 한층 더 끌어올립니다.

---

### 두 번째 차별점: 모바일 게임이 아닌 싱글 패키지 액션의 손맛

게임스컴 시연 직후 국내외 주요 미디어들이 한목소리로 감탄한 부분입니다.

IGN 차이나의 체험기는 매우 직설적이었습니다. "《무한대》는 싱글 액션 어드벤처의 손맛과 타격감, 헐리우드급 컷씬 연출, 그리고 다중 캐릭터 옴니버스 교차 서사 기법을 서브컬처 도시 오픈월드라는 그릇에 담아낸 작품이다."

실제 시연 영상을 보면 그 차이를 몸으로 느낄 수 있습니다.

15분짜리 데모에서 주인공은 길거리 양아치들과 《용과 같이》 스타일의 맨손 난투 액션을 벌인 뒤, 곧바로 헐리우드 블록버스터를 연상케 하는 도심 추격전으로 전환됩니다. 위기 상황에서의 박진감 넘치는 QTE와 주인공을 밀착 추적하는 카메라 앵글은 흡사 명작 콘솔 싱글 게임을 즐기는 듯한 몰입감을 줍니다.

IGN 에디터가 "순간 내가 지금 패키지 싱글 게임을 하고 있는 착각이 들었다"고 고백했는데, 영상을 보는 저 역시 깊이 공감했습니다.

게다가 이번 시연에는 매우 이례적인 연출이 있었습니다. **남주인공 '진수(辰宿)'가 데모에 전혀 등장하지 않았다는 점**입니다. 전체 스토리 모드를 신규 캐릭터 **'영롱(瓔瓏)'**이 단독으로 이끌었습니다. 이것이 의미하는 바는 무엇일까요? 《무한대》가 단일 주인공 중심이 아닌, 여러 캐릭터의 시점이 얽히고설키는 군상극 구조를 채택했을 가능성을 시사합니다. 대표 주인공을 공개 시연 데모에서 과감히 제외할 수 있는 배짱, 결코 흔치 않습니다.

---

### 세 번째 차별점: 살아 숨 쉬는 도시, 감정을 가진 NPC

개인적으로 가장 손꼽아 기다리는 매력 포인트입니다.

대다수 오픈월드 게임의 도시는 정적인 세트장에 불과합니다. NPC는 늘 같은 자리에 서서 똑같은 대사를 읊조리고, 부딪혀도 맥없는 신음 한마디 내뱉고 제자리로 돌아갑니다. 하지만 《무한대》는 다릅니다.

중소시(重霄市) 용서촌(龙栖村) 시연 도중, 한 플레이어가 차로 NPC를 들이받는 사고가 있었습니다. 쓰러진 주민이 손에서 스마트폰을 떨어뜨렸는데, 주워 확인해보니 화면에 그 NPC가 친구와 실제로 나누고 있던 메신저 대화 내용이 그대로 적혀 있었습니다. 이름 없는 마을 주민의 스마트폰 채팅 로그까지 일일이 디자인해 두었다는 사실에 감탄을 금치 못했습니다.

더 놀라운 디테일도 있습니다. 벤치에서 담소를 나누던 주민의 의자에 맨홀 뚜껑을 던지자, 주민이 휘청거리며 넘어질 뻔하더니 당황과 분노가 뒤섞인 표정으로 플레이어를 노려봅니다. 기계적인 반복 대사 대신, 일상에 완벽히 녹아든 현실적인 디테일을 구현했습니다. 인게임 시간에 따라 NPC의 이동 경로와 행동 양식이 실시간으로 변화한다는 분석도 나오고 있습니다.

이전 글에서도 언급했듯, 신치시(新启市)에서 스트리트 패션을 입고 걸어가면 지나가던 행인이 먼저 다가와 하이파이브를 건넵니다. 이것은 고정된 연출이 아닌, 도시와 진정으로 교감하는 시스템입니다. 플레이어의 모든 행동에 세상이 생생하게 반응합니다.

---

### 네 번째 차별점: 두 개의 거대 도시, 극과 극의 미학

**신치시(Nova City)**와 **중소시(Chongxiao City)**.

신치시가 거대한 연륙교, 루프탑 바, 해변 비치발리볼이 어우러진 세련된 서구풍 해양 메트로폴리스라면, 중소시는 서호(西湖), 뇌봉탑, 용정차 마을 등 항저우의 고즈넉한 풍경과 동방명주, 와이탄, 우캉루 등 상하이의 근현대 랜드마크가 융합된 오리엔탈 사이버 도시입니다.

더욱이 두 도시 사이의 이동은 단순한 로딩 텔레포트가 아니라, 비행기에 탑승하는 전용 환승 연출을 거치도록 설계되었습니다.

사이버펑크 뉴욕과 사이버펑크 항저우·상하이. 하나의 게임 안에서 전혀 다른 두 개의 도시 미학을 동시에 체험할 수 있다는 발상 자체가 대단히 과감합니다. 또한 중소시는 억지스러운 맵 경계선을 허물고, 레트로 오락실부터 전통 찻집에 이르기까지 '공간의 분위기와 즐길 거리'에 집중했습니다.

가장 흥미로운 점은 경찰, 해커, 배달원 등 다양한 직업 신분을 전환하며 도시를 탐험할 수 있다는 것입니다. 리시(Rishi)는 경찰 신분으로 NPC를 불심검문할 수 있고, 세이모어(Seymour)는 해커로서 도시 보안망을 침투할 수 있습니다. 같은 골목길이라도 어떤 신분으로 서 있느냐에 따라 완전히 다른 세계가 펼쳐집니다.

---

### 솔직한 생각과 우려

물론 완벽한 장밋빛 미래만 있는 것은 아닙니다.

IGN 체험기에서도 지적했듯, 액션의 근본 시스템 자체는 정통파 액션의 문법을 따르고 있습니다. 모바일 환경을 고려한 멀티플랫폼 개발의 태생적 한계로 인해, 그래픽 퀄리티를 순수 PS5 독점작 수준에 맞출 수는 없습니다. 초기 PC 클라이언트 용량이 무려 250GB에 달했다는 소문이 있었던 만큼, 최종 최적화 완성도는 여전히 검증받아야 할 과제입니다. 맨손 격투, 카체이싱, 파쿠르, 잠입, 방대한 오픈월드 탐험이라는 방대한 요소들이 유기적으로 융합될 수 있을지는 정식 서비스 이후에나 판가름 날 것입니다.

독일 IGN 에디터가 "정식 출시 버전이 한층 더 놀라운 '특급 선물상자'임을 스스로 증명해내길 바란다"고 평했듯, 맹목적인 찬양보다는 차분한 기대감을 유지하는 것이 옳을 것입니다.

그러나 캐릭터 뽑기를 전면 철폐하고, 시연 데모에서 주인공을 과감히 감추며, 콘솔 싱글 패키지의 손맛을 오픈월드에 구현해낸 이 대담한 시도만큼은 진심으로 박수를 보내고 싶습니다.

안전한 성공 공식을 복제한 양산형 게임들은 이미 넘쳐납니다. 《무한대》는 다른 길을 선택했습니다. 혹여 실패할 수도 있고, 서브컬처의 새 지평을 열 수도 있습니다. 하지만 게이머로서, "남들과 다를 수 있는 용기" 그 자체만으로도 충분히 지켜볼 가치가 있습니다.

2027년 1월 15일. 문이 열리면 직접 뛰어들어 보고, 그 진가를 스스로 판단해 보시길 바랍니다.`,
      DE: `# Was macht Ananta wirklich anders? Die Beobachtung eines ganz normalen Spielers

In den letzten Wochen überschlagen sich die Nachrichten zu Ananta: Der finale Release-Termin steht für den 15. Januar 2027 fest, und die ersten Gameplay-Eindrücke von der Gamescom sind da. Als Fan der ersten Stunde, der das Projekt seit der ersten Ankündigung im Jahr 2023 begleitet, habe ich unzählige Diskussionen verfolgt: „Anime-GTA“, „ein Singleplayer-Actionspiel im Gacha-Pelz“ oder „NetEase verspricht wieder das Blaue vom Himmel“.

Doch nach reiflicher Überlegung passen all diese Etiketten nicht wirklich.

Was Ananta für mich wahrhaft einzigartig macht, lässt sich in vier Worten zusammenfassen: **Es kopiert niemanden**.

Es unterscheidet sich grundlegend von jedem bisherigen Anime-Open-World-Titel. IGN wählte für seinen Anspielbericht treffend das Wort „Weird“ – ein faszinierender Mix gewagter Ideen, der tatsächlich aufgehen könnte. Genau das trifft den Nagel auf den Kopf: Dieses Spiel folgt keiner ausgetretenen Schablone, sondern wagt Experimente, an die sich bisher niemand herangetraut hat.

---

### Unterschied Nr. 1: Null Gacha – Das gesamte System wird auf den Kopf gestellt

Das ist der radikalste Schritt.

Die Entwickler haben es offiziell bestätigt: **Sämtliche spielbaren Charaktere in Ananta werden zu 100 % kostenlos über die Hauptstory freigeschaltet.** Keine Charakter-Banner, keine Waffenziehungen. Einnahmen werden ausschließlich über kosmetische Outfits, Fahrzeugmodifikationen und Apartment-Design generiert. Der Produzent brachte es im Interview auf den Punkt: *„Wir möchten, dass jeder Spieler die Geschichte jedes einzelnen Charakters erleben kann.“*

Man muss sich vor Augen führen: Was war über ein Jahrzehnt lang das unumstößliche Geschäftsmodell des Anime-Genres? Gacha-Banner. Charaktere hinter Zufallsziehungen zu sperren, galt als eisernes Gesetz. Ananta erklärt schlicht: „Wir machen da nicht mit.“ Das ist nicht nur eine Herausforderung des Status quo – es ist ein **vollständiger Paradigmenwechsel**.

Natürlich fragt sich jeder: Wie finanziert man ein Team von 700 bis 800 Entwicklern ohne Gacha? Ehrlich gesagt weiß ich es auch nicht genau. Doch die Konzentration auf Fahrzeugtuning, Itasha-Lackierungen und Fashion zeigt einen erfrischenden Weg.

Famitsu fragte die Entwickler direkt: *„Funktioniert das wirklich ohne Charakter-Gacha?“* Selbst japanische Fachjournalisten waren verblüfft. Doch das Team bleibt standhaft. Genau diese Unberechenbarkeit macht das Warten umso spannender.

---

### Unterschied Nr. 2: Spielgefühl wie ein vollwertiges Singleplayer-Actionspiel

Diesen Eindruck teilten fast alle Journalisten auf der Gamescom.

IGN China formulierte es treffend: *Ananta nimmt das Kampffeeling, die cineastische Inszenierung und die verzweigte Erzählweise moderner Singleplayer-Action-Adventures und bettet sie in eine urbane Anime-Open-World ein.*

In den Gameplay-Demos wird das sofort spürbar: Die 15-minütige Demo beginnt mit einer brachialen Faustkampf-Prügelei im Stile von *Yakuza*, die nahtlos in eine kinoreife Verfolgungsjagd übergeht – inklusive intensiver QTEs und dynamischer Kameraführung. Das Tempo und die Wucht erinnern frappierend an hochwertige Konsolen-Exklusivtitel.

Zudem überraschte die Gamescom-Demo mit einer mutigen Entscheidung: **Der männliche Hauptcharakter Chen Su trat überhaupt nicht auf.** Stattdessen trug die neu enthüllte Heldin **Ying Long** das gesamte Geschehen. Das deutet darauf hin, dass Ananta kein starres Einzelhelden-Konzept verfolgt, sondern eine facettenreiche Ensemble-Erzählung bietet.

---

### Unterschied Nr. 3: Eine lebendige Stadt mit charakterstarken NPCs

Das ist der Aspekt, auf den ich mich persönlich am meisten freue.

In den meisten Open-World-Titeln sind Städte leblose Kulissen. NPCs stehen starr an Straßenecken, wiederholen dieselbe Zeile und geben bei Berührung nur ein monotones Stöhnen von sich. Ananta bricht mit dieser Trägheit.

In der Demo des Dorfes Longqi in Chongxiao stieß ein Spieler versehentlich einen Fußgänger mit dem Auto an. Der Passant stürzte und verlor sein Smartphone. Als der Spieler es aufhob, zeigte der Bildschirm einen echten, ausformulierten Chatverlauf des NPCs mit einem Freund. Selbst die Chatprotokolle namenloser Passanten wurden eigens geschrieben – diese Detailverliebtheit ist beispiellos.

Wirft man einen Gullydeckel auf eine Bank, auf der sich zwei Dorfbewohner unterhalten, geraten sie ins Straucheln und blicken den Spieler fassungslos und empört an. NPCs spulen keine Standardphrasen ab, sondern reagieren organisch auf ihre Umwelt.

Wie ich bereits im letzten Blog schrieb: Schlendert man in modischer Streetwear durch Nova City, kommen Passanten spontan für ein High-Five herüber. Das sind keine geskripteten Zwischensequenzen, sondern echte interaktive Systeme.

---

### Unterschied Nr. 4: Zwei Megastädte – Zwei grundverschiedene Ästhetiken

**Nova City** und **Chongxiao City**.

Nova City ist eine glitzernde, westlich inspirierte Küstenmetropole mit Hängebrücken, Skybars und Strandpromenaden. Chongxiao City hingegen verbindet historische Wahrzeichen von Hangzhou und Shanghai – den Westsee, die Leifeng-Pagode, den Oriental Pearl Tower und den Bund zu einem faszinierenden orientalischen Cyberpunk-Gemälde.

Reisen zwischen beiden Metropolen geschehen nicht über einfache Ladebildschirme, sondern über atmosphärische Flugsequenzen.

Darüber hinaus schlüpft man in verschiedene Berufsrollen: Polizist, Hacker oder Kurier. Als Polizist kann man Passanten befragen; als Hacker verschafft man sich Zugriff auf städtische Netzwerke. Dieselbe Straße eröffnet je nach Identität völlig neue Perspektiven.

---

### Ein ehrliches Fazit

Natürlich bleiben berechtigte Fragen offen: Multiplattform-Entwicklung verlangt technische Kompromisse, und ob die gigantische Vielfalt aus Schlägereien, Verfolgungsjagden, Parkour und Stealth zu einem harmonischen Ganzen verschmilzt, wird erst der finale Release beweisen.

Doch ein Spiel, das den Mut besitzt, Gacha-Mechaniken komplett zu streichen und kompromisslos eigene Wege zu gehen, verdient Respekt.

Am 15. Januar 2027 öffnen sich die Tore. Dann können wir selbst erleben, wie weit diese Vision trägt.`,
      FR: `# En quoi Ananta est-il vraiment différent ? Le regard d'un joueur ordinaire

Ces derniers temps, les nouvelles autour d'Ananta se multiplient : date de sortie calée au 15 janvier 2027 et retours enthousiastes de la Gamescom. En tant que fan de la première heure suivant le projet depuis son annonce en 2023, j'ai vu défiler d'innombrables débats : « GTA version anime », « simple jeu d'action solo déguisé en gacha » ou « promesses démesurées de NetEase ».

Après mûre réflexion, aucune de ces étiquettes ne correspond à la réalité.

Ce qui rend Ananta véritablement différent tient en quelques mots : **Il ne ressemble à aucun autre**.

Il ne suit le modèle d'aucun monde ouvert anime existant. Le compte-rendu d'IGN a qualifié l'expérience de « Weird » (étrange et singulière), soulignant un cocktail audacieux d'idées qui pourrait bel et bien créer la surprise. C'est exactement cela : loin de copier une formule éculée, Ananta explore des territoires vierges.

---

### Première différence : Zéro Gacha — Un coup de pied dans la fourmilière

C'est sans conteste la décision la plus radicale.

L'équipe l'a officiellement confirmé : **tous les personnages jouables d'Ananta se débloquent gratuitement à 100 % via l'histoire principale.** Aucun tirage de personnage, aucune loterie d'armes exclusives. Les revenus reposent uniquement sur les skins cosmétiques, la personnalisation des véhicules et l'aménagement des logements. Le producteur l'a affirmé en toute franchise : *« Nous voulons que chaque joueur puisse vivre l'histoire de chaque personnage. »*

Pendant plus d'une décennie, le modèle incontournable des RPG animés a été le système de tirages aléatoires. Ananta brise ce dogme avec audace. Certains parlent de défi lancé au marché ; c'est en réalité **un véritable chamboulement de l'industrie**.

Naturellement, tout le monde s'interroge : comment rentabiliser un studio de 700 à 800 personnes sans gacha ? Les achats se concentreront sur les pièces de tuning, les livrées itasha et la mode. Vous pourrez profiter de l'intégralité des héros et de l'intrigue sans débourser un centime.

Famitsu a même demandé directement aux développeurs : *« Est-ce vraiment viable sans gacha de personnages ? »* Même les journalistes japonais étaient stupéfaits. Mais l'équipe est restée inébranlable.

---

### Deuxième différence : Les sensations d'un vrai jeu d'action solo

C'est le constat unanime dressé par les journalistes lors des sessions d'essai à la Gamescom.

IGN Chine l'a résumé sans détour : *Ananta intègre le dynamisme des combats, la mise en scène cinématographique et la narration chorale des grands jeux d'action-aventure solo au cœur d'un monde ouvert urbain animé.*

Dans la démo de 15 minutes, le héros commence par une bagarre de rue à mains nues digne de la saga *Yakuza*, avant d'enchaîner sur une course-poursuite survoltée avec des QTE hollywoodiens et une caméra dynamique.

De plus, la démo a osé une surprise de taille : **le héros masculin Chen Su n'apparaissait pas du tout.** C'est la nouvelle venue **Ying Long** qui a porté l'intégralité du scénario. Cela prouve qu'Ananta mise sur une narration chorale à plusieurs perspectives.

---

### Troisième différence : Une ville vivante et des PNJ expressifs

C'est l'aspect que j'attends avec le plus d'impatience.

Dans la majorité des mondes ouverts, les passants ne sont que du décor immobile. Ananta adopte une approche radicalement différente.

Dans le village de Longqi à Chongxiao, un joueur a accidentellement heurté un passant en voiture. Le civil a lâché son téléphone en tombant : en le ramassant, on pouvait lire de véritables messages de conversation avec un proche. Une attention aux détails tout simplement bluffante.

Si vous lancez une plaque d'égout vers des villageois qui discutent, ils trébuchent et vous fusillent du regard. En tenue branchée à Nova City, des passants viennent spontanément vous saluer d'un « high-five ». Chaque geste dans ce monde produit une réaction vivante.

---

### Quatrième différence : Deux métropoles aux esthétiques opposées

**Nova City** et **Chongxiao City**.

Nova City est une métropole maritime côtière d'inspiration occidentale avec ponts suspendus, sky-bars et beach-volley. Chongxiao City associe la sérénité du lac de l'Ouest et de la pagode Leifeng à Hangzhou aux gratte-ciels du Bund et de l'Oriental Pearl Tower à Shanghai dans une vision cyberpunk orientale spectaculaire.

Les voyages entre ces métropoles se font à bord d'avions de ligne immersifs avec de véritables animations.

Vous pouvez en outre endosser des identités professionnelles civiles — policier, hacker, livreur — pour découvrir la ville sous des angles inédits.

---

### Vérités sincères et attentes

Bien sûr, des interrogations subsistent : l'optimisation multiplateforme exigera des compromis, et fusionner combat, pilotage, parkour et infiltration reste un immense défi.

Comme l'a souligné IGN Allemagne : *Espérons que le jeu final prouve être une merveilleuse boîte à surprises.*

Mais un projet qui a le courage de supprimer le gacha, d'effacer les formules faciles et d'offrir des sensations de pur jeu d'action mérite toute notre attention. Rendez-vous le 15 janvier 2027 !`,
      IT: `# Cosa rende Ananta davvero diverso? Il punto di vista di un giocatore qualunque

Ultimamente le notizie su Ananta sono ovunque: data di uscita confermata per il 15 gennaio 2027 e le prime impressioni giocabili direttamente dalla Gamescom. Da appassionato che segue il progetto fin dal primo annuncio del 2023, ho letto ogni genere di commento: «GTA in salsa anime», «gioco d'azione travestito da gacha» o «l'ennesima promessa esagerata».

Eppure, nessuna di queste definizioni coglie nel segno.

Ciò che rende Ananta davvero speciale è semplice: **Non copia nessuno**.

Non assomiglia a nessun altro titolo anime open world presente sul mercato. IGN ha utilizzato il termine «Weird» per descrivere la miscela unica di idee audaci che potrebbe davvero funzionare. È proprio questo: non un clone di formule preconfezionate, ma un tentativo coraggioso di fare ciò che nessun altro ha osato.

---

### La prima grande differenza: Zero Gacha — Ribaltare il tavolo

Questa è la mossa più rivoluzionaria.

Gli sviluppatori lo hanno confermato ufficialmente: **tutti i personaggi giocabili si sbloccano al 100% gratuitamente tramite la storia principale**. Nessun banner per i personaggi, nessun gacha per le armi. La monetizzazione si basa esclusivamente su elementi estetici, verniciature itasha per auto e arredo per appartamenti. Il produttore lo ha detto chiaramente: *«Vogliamo che ogni giocatore possa vivere la storia di tutti i personaggi.»*

Per un decennio intero i gacha sono stati il dogma dei giochi anime. Ananta dice con fermezza: «Noi non lo facciamo». Più che una sfida al sistema, è un vero e proprio **ribaltamento del tavolo**.

---

### La seconda differenza: Dinamiche da vero action per giocatore singolo

Questo è stato il responso unanime della critica alla Gamescom.

IGN China lo ha riassunto alla perfezione: *Ananta racchiude il combat system, la regia cinematografica e la narrazione corale tipica dei migliori action-adventure per giocatore singolo all'interno di un open world urbano in stile anime.*

Dai combattimenti corpo a corpo stile *Yakuza* agli inseguimenti mozzafiato con QTE hollywoodiani, il ritmo di gioco e la fluidità ricordano le migliori produzioni per console.

Inoltre, la demo della Gamescom ha fatto una scelta coraggiosa: **il protagonista maschile Chen Su non è comparso affatto**, lasciando l'intera scena alla nuova eroina **Ying Long**. Questo evidenzia come Ananta punti su una narrazione corale a prospettive multiple.

---

### La terza differenza: Una città viva e interattiva

Questo è forse l'aspetto che attendo con maggiore entusiasmo.

Nei classici open world i passanti sono solo sfondi statici. Ananta rifiuta questa scorciatoia: a Chongxiao, urtando un passante, questo fa cadere il cellulare e sullo schermo si possono leggere veri messaggi di chat con un amico.

Lanciando un tombino verso gli abitanti seduti in piazza, questi inciampano e ti guardano sdegnati. Camminando a Nova City con abiti trendy, i passanti si avvicinano per darti il cinque. Ogni azione produce risposte dinamiche dall'ambiente.

---

### La quarta differenza: Il contrasto tra Nova City e Chongxiao City

**Nova City** e **Chongxiao City**.

Nova City è una scintillante metropoli costiera occidentale con ponti sospesi, beach volley e rooftop bar. Chongxiao City fonde il Lago dell'Ovest e la Pagoda Leifeng di Hangzhou con l'Oriental Pearl Tower e il Bund di Shanghai in un vibrante cyberpunk orientale.

I viaggi tra le due città prevedono vere sequenze di volo su aerei di linea anziché noiosi teletrasporti istantanei. Inoltre, è possibile alternare ruoli cittadini come poliziotto, hacker o corriere per vivere la metropoli da prospettive sempre nuove.

---

### Considerazioni sincere

Ci sono naturalmente sfide aperte: l'ottimizzazione multipiattaforma richiederà grande cura, e amalgamare risse, inseguimenti, parkour ed esplorazione è un'impresa complessa.

Come ha sintetizzato IGN Germania: *Ci auguriamo che la versione finale si riveli una splendida sorpresa.*

Ma un gioco che ha il coraggio di abolire i gacha e battere sentieri inesplorati merita tutto il nostro rispetto. Il 15 gennaio 2027 scopriremo la risposta!`,
      RU: `# Чем на самом деле уникальна Ananta? Наблюдения простого игрока

В последнее время новости об Ananta звучат отовсюду: дата релиза назначена на 15 января 2027 года, а с выставки Gamescom подоспели первые впечатления от демоверсии. Как преданный фанат, следящий за проектом с первого анонса 2023 года, я наслушался самых разных ярлыков: «аниме-GTA», «одиночный слэшер в обертке мобилки», «очередные невыполнимые обещания».

Но ни один из этих ярлыков не отражает суть.

Главное отличие Ananta от всех остальных проектов формулируется просто: **Она никого не копирует**.

Она не похожа ни на одну существующую аниме-игру в открытом мире. Рецензия IGN метко охарактеризовала ее словом «Weird» (странная и необычная) — смелый коктейль смелых идей, который вполне может совершить революцию. Так и есть: разработчики не копируют чужие шаблоны, а смело идут туда, куда другие боялись ступить.

---

### Отличие №1: Полный отказ от гачи — слом привычных правил

Это самый радикальный и смелый шаг.

Разработчики официально подтвердили: **все игровые персонажи в Ananta открываются на 100% бесплатно по ходу сюжета**. Никаких баннеров с крутками персонажей и сигнатурного оружия. Монетизация держится исключительно на косметических костюмах, тюнинге автомобилей, итася-раскрасках и обустройстве квартир. Продюсер прямо заявил: *«Мы хотим, чтобы каждый игрок смог пережить историю каждого героя без преград.»*

Десять лет аниме-индустрия держалась на гаче. Ananta говорит: «Мы в это не играем». Это не просто вызов — это **настоящий переворот всех правил**.

---

### Отличие №2: Ощущается как полноценный сюжетный экшен

К этому выводу единогласно пришли игровые журналисты на Gamescom.

IGN China высказалась прямо: *Ananta объединяет боевую систему, кинематографичные катсцены и ансамблевое повествование лучших сюжетных экшенов в формате городского аниме-опенворлда.*

В 15-минутной демоверсии герой начинает с уличного рукопашного боя в духе серии *Yakuza*, после чего действие перерастает в динамичную кинематографичную погоню с QTE в лучших традициях Голливуда.

Кроме того, разработчики пошли на неожиданный шаг: **главный герой Чэнь Су вообще не появился в демо**. Всю сюжетную линию вела новая героиня **Ин Лун**, что подтверждает глубокую ансамблевую структуру сюжета.

---

### Отличие №3: Живой город и реагирующие NPC

Пожалуй, это то, чего я жду больше всего.

В большинстве игр открытого мира горожане — лишь неподвижные декорации. В Ananta всё иначе: если сбить пешехода в деревне Лунци, он роняет телефон, на экране которого можно прочесть настоящую переписку с другом.

Если бросить крышку люка в лавочку с беседующими жителями, они пошатнутся и бросят на вас возмущенный взгляд. А прогуливаясь по Нова-Сити в модной одежде, вы увидите, как прохожие подходят дать вам пять.

---

### Отличие №4: Две мегаполии — два разных мира

**Нова-Сити** и **Чунсяо**.

Нова-Сити — это залитый солнцем западный прибрежный мегаполис с вантовыми мостами, пляжным волейболом и барами на крышах. Чунсяо гармонично сочетает озеро Сиху и пагоду Лэйфэн в Ханчжоу с небоскребами Вайтань и телебашней в Шанхае в стиле восточного киберпанка.

Путешествия между городами проходят через реалистичные сцены перелета на лайнере, а смена профессий (полицейский, хакер, курьер) открывает город с совершенно новых сторон.

---

### Честные сомнения и выводы

Разумеется, впереди немало испытаний: оптимизация для ПК и мобильных платформ потребует филигранной работы, а бесшовное объединение боев, погонь, паркура и стелса — задача повышенной сложности.

Как отметила немецкая редакция IGN: *Будем надеяться, что релизная версия окажется великолепной коробкой с сюрпризами.*

Но проект, который нашел в себе смелость отказаться от гачи и пойти своим уникальным путем, заслуживает искреннего уважения. 15 января 2027 года мы сможем оценить всё сами!`,
    }
  },
  {
  "id": "2",
  "slug": "ananta-worldview-organizations-terms-and-character-codenames",
  "category": "lore",
  "categoryLabel": {
    "EN": "Lore & Worldbuilding",
    "CN": "世界观考据 · 核心设定",
    "TW": "世界觀考據 · 核心設定",
    "JP": "世界観考察・重要用語",
    "KR": "세계관 고증 · 핵심 설정",
    "DE": "Lore & Worldbuilding",
    "FR": "Univers & Lore",
    "IT": "Lore & Terminologia",
    "RU": "Лор и терминология"
  },
  "tags": [
    "世界观",
    "设定考据",
    "角色代号",
    "新启市",
    "混厄对策局",
    "Ananta",
    "Lore"
  ],
  "coverImage": "https://www.anantagame.com/pc/gw/20250904162009/assets/full_0006_50878b56.jpg",
  "author": {
    "name": "Captain Alex",
    "role": {
      "EN": "Special Intelligence Agent & Lore Archivist",
      "CN": "特别调查专员 · 档案考据员",
      "TW": "特別調查專員 · 檔案考據員",
      "JP": "特務調査官・アーカイブ研究員",
      "KR": "특별 조사관 · 세계관 연구원",
      "DE": "Sonderermittler & Lore-Archivar",
      "FR": "Agent d'investigation & Archiviste du Lore",
      "IT": "Agente investigativo & Archivista del Lore",
      "RU": "Специальный агент и архивариус лора"
    },
    "avatar": "https://www.anantagame.com/pc/gw/20260811115527/assets/icon-studio_68622482.svg",
    "handle": "@CaptainAlex"
  },
  "date": "2026-06-10",
  "readTimeMin": 5,
  "initialLikes": 928,
  "initialViews": 7450,
  "featured": true,
  "title": {
    "CN": "《无限大》世界观中一些核心的术语、组织和角色代号，你知道多少？",
    "TW": "《無限大》世界觀中一些核心的術語、組織和角色代號，你知道多少？",
    "EN": "Core Terminology, Organizations, and Character Codenames in Ananta: How Many Do You Know?",
    "JP": "『Ananta（無限大）』世界観の重要用語・組織・キャラクターコードネーム総まとめ！",
    "KR": "《무한대(Ananta)》 세계관 속 핵심 용어, 조직 및 캐릭터 코드네임 총정리!",
    "DE": "Wichtige Begriffe, Organisationen und Codenamen in der Welt von Ananta",
    "FR": "Terminologie clé, organisations et noms de code des personnages d’Ananta",
    "IT": "Terminologia fondamentale, organizzazioni e nomi in codice dei personaggi di Ananta",
    "RU": "Ключевые термины, фракции и кодовые имена персонажей в мире Ananta"
  },
  "summary": {
    "CN": "深入整理《代号：无限大》世界观核心档案：从混厄对策局(A.C.D.)、新启统理院到特异科；从新启市各大街区、原初之湖到凌云市；从“无限扳机”等全员代号到混厄超常现象全解析！",
    "TW": "深入整理《代號：無限大》世界觀核心檔案：從混厄對策局(A.C.D.)、新啟統理院到特異科；從新啟市各大街區、原初之湖到凌雲市；從「無限扳機」等全員代號到混厄超常現象全解析！",
    "EN": "An essential dossier of Ananta’s worldbuilding: explore the Anti-Chaos Directorate (A.C.D.), Nova City's districts, Lake of Origin, Ling Yun City, character codenames (Infinite Trigger, Taffy, etc.), and Chaos phenomena.",
    "JP": "『Ananta』の世界観を徹底解説！混厄対策局（A.C.D.）や新啓市の各区画、原初の湖、凌雲市、主要キャラクターのコードネーム（無限トリガー、タフィ等）、混厄現象や超能力設定を網羅。",
    "KR": "《무한대》 세계관 총망라: 혼액대책국(A.C.D.)과 노바 시티 자치 기구부터 주요 구역, 원초의 호수, 능운시, 전 캐릭터 코드네임(무한 방아쇠 등), 공명자 초능력과 카오스 현상까지 완벽 분석!",
    "DE": "Umfassender Überblick über das Worldbuilding von Ananta: Von der Anti-Chaos Directorate (A.C.D.) und Nova City über den See des Ursprungs bis hin zu Codenamen wie Infinite Trigger und dem Chaos-Phänomen.",
    "FR": "Guide complet du lore d'Ananta : découvrez la Direction Anti-Chaos (A.C.D.), les quartiers de Nova City, le Lac de l'Origine, Ling Yun City, les noms de code des personnages (Infinite Trigger, etc.) et les mystères du Chaos.",
    "IT": "Guida completa all'universo di Ananta: dalla Direzione Anti-Chaos (A.C.D.) e i distretti di Nova City al Lago delle Origini, Ling Yun City, i nomi in codice dei personaggi e i fenomeni Chaos.",
    "RU": "Полный справочник по вселенной Ananta: от Бюро по борьбе с Хаосом (A.C.D.) и районов Нова-Сити до Изначального озера, Линъюня, кодовых имен персонажей (Infinite Trigger) и природы явления Хаоса."
  },
  "content": {
    "CN": "# 《无限大》世界观中一些核心的术语、组织和角色代号，你知道多少？\n\n*从官方反超常组织“混厄对策局”到繁华的沿海都会“新启市”，从主角“无限扳机”到各路身怀绝技的超能力调查员——带你全面起底《代号：无限大》的核心世界观设定！*\n\n## 🏛️ 组织与势力\n- **混厄对策局 (A.C.D.)**：全称 Anti-Chaos Directorate，玩家所属的官方组织。专门负责应对“混厄”现象和超自然犯罪，调查员有权要求市民配合调查。\n- **新启统理院**：新启市的政府机关。\n- **新启巡卫署**：新启市负责维持日常秩序和应对常规犯罪的机构，会协助混厄对策局。\n- **谜面帮 / 绿鬼帮**：盘踞在城市中的组织，与“混厄”现象关系密切。\n- **特异科**：对策局内的一个传说中的部门，是许多调查员（如塔菲）的终极目标。\n\n## 🌆 城市与地点\n- **新启市 (Nova City)**：游戏的主要舞台之一，一座旅游业发达的沿海都会，拥有跨海大桥。\n- **新岸区**：新启市的市中心和CBD，最繁华的地方。\n- **狂悖街区**：新启市街头文化的聚集地，混杂着各类边缘势力。\n- **清河区**：具有浓厚东方风情的老城区。\n- **原初之湖**：新启市周边的一处重要地标，可能与世界观底层秘密有关。\n- **凌云市**：已曝光的第二座超大城市，兼具东方美学与赛博朋克风貌。\n\n## 🔥 核心现象与概念\n- **混厄 (Chaos)**：游戏中主要的超自然异常灾害现象，能侵蚀现实、产生怪物（混厄体）。\n- **混厄体 (Chaos Entities)**：由混厄侵蚀或产生的怪物/异象。\n- **混厄波长 / 混厄能**：描述混厄活跃程度或作为能量来源的物理量，可被特定仪器监测。\n- **异象事件**：由混厄引发的超自然治安事件。\n- **共鸣者 / 超能力**：部分人类觉醒了操控特殊能量（如引力、念力、元素）的能力。\n\n## 👤 角色代号与称谓\n- **无限扳机 (Infinite Trigger)**：主角（玩家）的特殊代号/身份，拥有极为特殊的体质和能力。\n- **调查员 (Investigators)**：混厄对策局外勤特工的统称。\n- **塔菲 (Taffy)**：对策局调查员，标志性武器为巨锤，骑摩托车，梦想进入特异科。\n- **亚兰 (Alan)**：对策局调查员，擅长近战格斗与战术。\n- **班茜 (Bansy)**：街头艺术家风格的调查员，擅长涂鸦与爆破。\n- **梅卡妮卡 (Mechanika)**：机械师天才少女，精通各类机械改装与重火器。\n- **狄菈 (Dila)**：神秘优雅的调查员，拥有独特的引力/念力控制能力。",
    "TW": "# 《無限大》世界觀中一些核心的術語、組織和角色代號，你知道多少？\n\n*從官方反超常組織「混厄對策局」到繁華的沿海都會「新啟市」，從主角「無限扳機」到各路身懷絕技的超能力調查員——帶你全面起底《代號：無限大》的核心世界觀設定！*\n\n## 🏛️ 組織與勢力\n- **混厄對策局 (A.C.D.)**：全稱 Anti-Chaos Directorate，玩家所屬的官方組織。專門負責應對「混厄」現象和超自然犯罪，調查員有權要求市民配合調查。\n- **新啟統理院**：新啟市的政府機關。\n- **新啟巡衛署**：新啟市負責維持日常秩序和應對常規犯罪的機構，會協助混厄對策局。\n- **謎面幫 / 綠鬼幫**：盤踞在城市中的組織，與「混厄」現象關係密切。\n- **特異科**：對策局內的一個傳說中的部門，是許多調查員（如塔菲）的終極目標。\n\n## 🌆 城市與地點\n- **新啟市 (Nova City)**：遊戲的主要舞台之一，一座旅遊業發達的沿海都會，擁有跨海大橋。\n- **新岸區**：新啟市的市中心和CBD，最繁華的地方。\n- **狂悖街區**：新啟市街頭文化的聚集地，混雜著各類邊緣勢力。\n- **清河區**：具有濃厚東方風情的老城區。\n- **原初之湖**：新啟市周邊的一處重要地標，可能與世界觀底層秘密有關。\n- **凌雲市**：已曝光的第二座超大城市，兼具東方美學與賽博朋克風貌。\n\n## 🔥 核心現象與概念\n- **混厄 (Chaos)**：遊戲中主要的超自然異常災害現象，能侵蝕現實、產生怪物（混厄體）。\n- **混厄體 (Chaos Entities)**：由混厄侵蝕或產生的怪物/異象。\n- **混厄波長 / 混厄能**：描述混厄活躍程度或作為能量來源的物理量，可被特定儀器監測。\n- **異象事件**：由混厄引發的超自然治安事件。\n- **共鳴者 / 超能力**：部分人類覺醒了操控特殊能量（如引力、念力、元素）的能力。\n\n## 👤 角色代號與稱謂\n- **無限扳機 (Infinite Trigger)**：主角（玩家）的特殊代號/身份，擁有極為特殊的體質和能力。\n- **調查員 (Investigators)**：混厄對策局外勤特工的統稱。\n- **塔菲 (Taffy)**：對策局調查員，標誌性武器為巨錘，騎摩托車，夢想進入特異科。\n- **亞蘭 (Alan)**：對策局調查員，擅長近戰格鬥與戰術。\n- **班茜 (Bansy)**：街頭藝術家風格的調查員，擅長塗鴉與爆破。\n- **梅卡妮卡 (Mechanika)**：機械師天才少女，精通各類機械改裝與重火器。\n- **狄菈 (Dila)**：神秘優雅的調查員，擁有獨特的引力/念力控制能力。",
    "EN": "# Core Terminology, Organizations, and Character Codenames in Ananta: How Many Do You Know?\n\n*From the official supernatural crisis agency \"Anti-Chaos Directorate (A.C.D.)\" to the bustling coastal metropolis of \"Nova City\", and from the protagonist \"Infinite Trigger\" to an elite roster of Esper investigators—explore the foundational worldbuilding of Ananta!*\n\n## 🏛️ Organizations & Factions\n- **Anti-Chaos Directorate (A.C.D.)**: The official supernatural agency to which the player belongs. Specifically responsible for dealing with \"Chaos\" phenomena and supernatural crimes; investigators have the authority to request citizen cooperation.\n- **Nova City Governing Council**: The supreme administrative governmental body of Nova City.\n- **Nova City Patrol Bureau**: The civil law enforcement agency maintaining daily public order and handling conventional crime, actively coordinating with the A.C.D.\n- **Riddle Gang / Green Ghost Gang**: Underground syndicate factions entrenched in the city, deeply entwined with Chaos anomalies.\n- **Special Branch (Special Anomalies Division)**: A legendary classified department within the A.C.D., serving as the ultimate career goal for many investigators (such as Taffy).\n\n## 🌆 Cities & Key Locations\n- **Nova City (新启市)**: One of the primary stages of the game—a prosperous coastal metropolis renowned for tourism, featuring an iconic sea-crossing bridge.\n- **New Coast District**: The central business district (CBD) and beating heart of Nova City, the most bustling and futuristic area.\n- **Paradox Street**: The epicenter of Nova City's street culture, bustling with diverse fringe factions and underground energies.\n- **Qinghe District**: A historic heritage district steeped in rich traditional Eastern charm.\n- **Lake of Origin (Lake Primordial)**: A vital landmark on the outskirts of Nova City, suspected to be tied to foundational secrets of the universe.\n- **Ling Yun City**: The newly revealed second mega-city, combining traditional Eastern aesthetics with futuristic cyberpunk architecture.\n\n## 🔥 Core Phenomena & Concepts\n- **Chaos (混厄)**: The primary supernatural disaster phenomenon in the game, capable of eroding reality and spawning anomalous monsters (Chaos Entities).\n- **Chaos Entities (混厄体)**: Aberrations and monsters spawned or corrupted by Chaos energy.\n- **Chaos Wavelength / Chaos Energy**: Physical metrics describing Chaos activity levels or harvested as energy, measurable with specialized instruments.\n- **Anomaly Incidents**: Supernatural public security crises triggered by Chaos outbreaks.\n- **Resonators / Espers**: Humans who have awakened the power to manipulate supernatural energy (such as gravity, telekinesis, or elements).\n\n## 👤 Character Codenames & Titles\n- **Infinite Trigger**: The unique codename and identity of the protagonist (the player), possessing an extraordinary constitution and abilities.\n- **Investigators**: The collective title for field operative agents of the Anti-Chaos Directorate.\n- **Taffy**: A Directorate investigator wielding a signature colossal warhammer, riding a custom motorcycle, and aspiring to enter the Special Branch.\n- **Alan**: A Directorate investigator skilled in tactical combat and close-quarters melee.\n- **Bansy**: A street artist investigator specializing in explosive graffiti techniques.\n- **Mechanika**: A prodigy engineer girl mastering mechanical retrofits and heavy weaponry.\n- **Dila**: A mysterious and elegant investigator possessing unique gravitational and telekinetic manipulation powers.",
    "JP": "# 『Ananta（無限大）』世界観の重要用語・組織・キャラクターコードネーム総まとめ！\n\n*公的超常事件対策機関「混厄対策局」から活気あふれる沿海大都市「新啓市」、主人公「無限トリガー」から個性豊かな能力者たちまで——『Ananta』の緻密な世界観設定を一挙解説！*\n\n## 🏛️ 組織と勢力\n- **混厄対策局 (A.C.D.)**：正式名称 Anti-Chaos Directorate。プレイヤーが所属する公的組織。「混厄」現象や超自然犯罪の対処を専門とし、捜査官は市民への調査協力を要請する権限を持つ。\n- **新啓統理院**：新啓市の最高行政機関・政府機関。\n- **新啓巡衛署**：新啓市の日常的な治安維持や通常犯罪を担当する警察機関。混厄対策局と連携して捜査支援を行う。\n- **謎面組 / 緑鬼組**：都市の裏社会に潜むストリート組織。「混厄」現象と深い繋がりを持つ。\n- **特異科**：対策局内で伝説とされる極秘エリート部署。タフィなど多くの新米捜査官の憧れの的。\n\n## 🌆 都市と重要スポット\n- **新啓市 (Nova City)**：物語のメイン舞台。観光産業が発展した活気あふれる沿海メガロポリスで、壮大な海上大橋を有する。\n- **新岸区 (CBD)**：新啓市の中心街・ビジネス街で、最も繁華な超高層ビル群が立ち並ぶエリア。\n- **狂悖街区 (パラドックス・ストリート)**：ストリートカルチャーの聖地。多種多様なアンダーグラウンド勢力が混在する。\n- **清河区**：豊かな東洋情緒が漂う歴史ある旧市街地。\n- **原初之湖 (原初の湖)**：新啓市近郊に位置する重要ランドマーク。世界観の根本的な謎に深く関わっているとされる。\n- **凌雲市 (Ling Yun City)**：新たに公開された第2の巨大都市。東洋美学とサイバーパンクが融合した壮大な景観を誇る。\n\n## 🔥 核心概念と超常現象\n- **混厄 (Chaos)**：現実を侵食し、怪物（混厄体）を生み出す本作の根源的な超自然災害現象。\n- **混厄体 (Chaos Entities)**：混厄によって浸食・変異した怪物や異形の存在。\n- **混厄波長 / 混厄エネルギー**：混厄の活性度を示す指標、またはエネルギー源としての物理量。専用の測定器で検知可能。\n- **異象事件**：混厄の暴走によって引き起こされる超常治安事件。\n- **共鳴者 / 超能力 (Esper)**：重力、念動力、元素などの特殊エネルギーを操る能力に覚醒した人間。\n\n## 👤 キャラクターコードネームと呼称\n- **無限トリガー (Infinite Trigger)**：主人公（プレイヤー）の特殊コードネーム・身分。極めて特殊な体質と能力を持つ。\n- **捜査官 (Investigators)**：混厄対策局に所属する外勤エージェントの総称。\n- **タフィ (Taffy)**：対策局の捜査官。巨大ハンマーを操り、バイクを乗り回す。特異科入りを目指している。\n- **アラン (Alan)**：対策局の捜査官。近接格闘と戦術指揮に長けている。\n- **バンシー (Bansy)**：ストリートアーティスト風の捜査官。グラフィティアートと爆薬を操る。\n- **メカニカ (Mechanika)**：天才メカニック少女。あらゆる機械の改造と重火器の扱いに精通している。\n- **ディラ (Dila)**：神秘的で優雅な捜査官。独自の引力・念動力制御能力を持つ。",
    "KR": "# 《무한대(Ananta)》 세계관 속 핵심 용어, 조직 및 캐릭터 코드네임 총정리!\n\n*공식 초상 현상 대응 기구 '혼액대책국'부터 번화한 해안 메가시티 '노바 시티(신계시)', 주인공 '무한 방아쇠'와 개성 넘치는 에스퍼 조사관들까지——《무한대》의 핵심 세계관 설정을 한눈에 정리해 드립니다!*\n\n## 🏛️ 조직 및 주요 세력\n- **혼액대책국 (A.C.D.)**：Anti-Chaos Directorate의 약칭. 플레이어가 소속된 공식 기구. '혼액(Chaos)' 현상 및 초자연 범죄를 전담하며, 조사관은 시민에게 협조를 요청할 공적 권한을 가집니다.\n- **신계통리원 (Nova City Council)**：노바 시티의 정부 및 최고 행정 기관.\n- **신계순위서 (Patrol Bureau)**：노바 시티의 일상 치안 유지와 일반 범죄를 담당하는 경찰 기관으로 대책국을 지원합니다.\n- **미면방 / 녹귀방 (Riddle Gang / Green Ghost)**：도시 뒷골목에 암약하며 '혼액' 현상과 밀접하게 연관된 조직.\n- **특이과 (Special Branch)**：대책국 내부에서 전설로 불리는 극비 엘리트 부서로, 타피 등 많은 신입 조사관들의 최종 목표입니다.\n\n## 🌆 도시 및 주요 명소\n- **신계시 (Nova City)**：게임의 주요 무대. 번화한 관광 산업과 웅장한 해상 대교를 자랑하는 해안 대도시.\n- **신안구 (CBD)**：노바 시티의 도심 및 핵심 비즈니스 지구로 가장 번화한 랜드마크 중심지.\n- **광패 거리 (Paradox District)**：스트리트 문화의 중심지로 다양한 언더그라운드 세력이 공존하는 구역.\n- **청하구 (Qinghe District)**：동양적인 정취가 짙게 묻어나는 유서 깊은 옛 시가지.\n- **원초의 호수 (Lake of Origin)**：노바 시티 외곽의 주요 랜드마크로 세계관의 근원적 비밀과 연결된 장소.\n- **능운시 (Ling Yun City)**：새롭게 공개된 제2의 메가시티로 동양적 미학과 사이버펑크 감성이 공존하는 도시.\n\n## 🔥 핵심 개념 및 초자연 현상\n- **혼액 (Chaos)**：현실을 잠식하고 괴물(혼액체)을 만들어내는 주요 초자연 이상 재해 현상.\n- **혼액체 (Chaos Entities)**：혼액의 침식으로 생성되거나 변이된 괴물 및 이상 현상.\n- **혼액 파장 / 혼액 에너지**：혼액의 활성도를 나타내거나 에너지원으로 활용되는 물리량으로 특수 기기로 측정 가능.\n- **이상 사건 (Anomaly Incidents)**：혼액의 폭주로 인해 발생하는 초자연 치안 사건.\n- **공명자 / 초능력 (Esper)**：중력, 염동력, 원소 등 특수 에너지를 다루는 능력에 각성한 인류.\n\n## 👤 캐릭터 코드네임 및 직함\n- **무한 방아쇠 (Infinite Trigger)**：주인공(플레이어)의 특수 코드네임이자 신분으로 특별한 체질과 능력을 지님.\n- **조사관 (Investigators)**：혼액대책국 현장 요원들의 총칭.\n- **타피 (Taffy)**：대책국 조사관. 거대한 해머를 주무기로 사용하며 바이크를 타고 특이과 진입을 꿈꿈.\n- **아란 (Alan)**：대책국 조사관. 근접 격투 및 전술 기동에 능함.\n- **반시 (Bansy)**：스트리트 아티스트 스타일의 조사관으로 그래피티와 폭발 기술에 능숙함.\n- **메카니카 (Mechanika)**：천재 기계공 소녀로 기계 개조 및 중화기 운용에 정통함.\n- **디라 (Dila)**：신비롭고 우아한 조사관으로 고유한 중력/염동력 조작 능력을 보유함.",
    "DE": "# Wichtige Begriffe, Organisationen und Codenamen in der Welt von Ananta\n\n*Von der paranormalen Behörde „Anti-Chaos Directorate (A.C.D.)“ über die pulsierende Küstenmetropole Nova City bis hin zum Protagonisten „Infinite Trigger“ und einem Team einzigartiger Esper-Ermittler – hier ist die ultimative Übersicht über das Worldbuilding von Ananta!*\n\n## 🏛️ Organisationen & Fraktionen\n- **Anti-Chaos Directorate (A.C.D.)**: Die offizielle Behörde, der der Spieler angehört. Zuständig für die Bekämpfung von „Chaos“-Phänomenen und paranormalen Verbrechen; Ermittler sind befugt, die Kooperation von Bürgern einzufordern.\n- **Nova City Magistrat (Stadtrat)**: Die oberste Verwaltungs- und Regierungsbehörde von Nova City.\n- **Nova City Streifendienst (Patrol Bureau)**: Die reguläre Polizeibehörde zur Aufrechterhaltung der öffentlichen Ordnung, die mit der A.C.D. kooperiert.\n- **Riddle Gang / Green Ghost Gang**: Unterwelt-Banden der Metropole, die eng mit Chaos-Anomalien verstrickt sind.\n- **Spezialabteilung für Anomalien (Special Branch)**: Eine legendäre Elite-Abteilung innerhalb der A.C.D. und das ultimative Ziel vieler Ermittler (wie Taffy).\n\n## 🌆 Städte & Wichtige Orte\n- **Nova City (新启市)**: Der Hauptschauplatz des Spiels – eine florierende Küstenmetropole mit regem Tourismus und imposanten Seebrücken.\n- **New Coast District (CBD)**: Das Finanz- und Geschäftszentrum von Nova City, das lebendigste Viertel der Stadt.\n- **Paradox Street (狂悖街区)**: Der Hotspot der städtischen Straßenkultur, in dem verschiedene Randgruppen aufeinandertreffen.\n- **Qinghe-Bezirk**: Ein historisches Viertel voller traditioneller fernöstlicher Atmosphäre.\n- **See des Ursprungs (Lake of Origin)**: Ein markanter Ort am Stadtrand von Nova City, der vermutlich mit fundamentalen Geheimnissen der Spielwelt verknüpft ist.\n- **Ling Yun City**: Die enthüllte zweite Megacity, die fernöstliche Ästhetik nahtlos mit Cyberpunk-Architektur verbindet.\n\n## 🔥 Kernphänomene & Konzepte\n- **Chaos (混厄)**: Das zentrale übernatürliche Katastrophenphänomen, das die Realität zersetzt und Monster (Chaos-Wesen) hervorbringt.\n- **Chaos-Wesen (Chaos Entities)**: Durch Chaos-Einfluss mutierte oder erschaffene Kreaturen und Phänomene.\n- **Chaos-Wellenlänge / Chaos-Energie**: Physikalische Kennzahlen zur Messung der Chaos-Aktivität, die mit Spezialgeräten erfasst werden können.\n- **Anomalie-Vorfälle**: Übernatürliche Sicherheitskrisen, die durch plötzliche Chaos-Ausbrüche ausgelöst werden.\n- **Resonatoren / Espers (Übernatürliche)**: Menschen, die die Gabe erweckt haben, paranormale Energien (wie Gravitation, Telekinese oder Elemente) zu kontrollieren.\n\n## 👤 Codenamen & Charaktere\n- **Infinite Trigger**: Der besondere Deckname und die Identität des Protagonisten (Spielers) mit einzigartiger Konstitution und Begabung.\n- **Ermittler (Investigators)**: Die allgemeine Bezeichnung für die Außendienstagenten der Anti-Chaos Directorate.\n- **Taffy**: Ermittlerin der Direktion, bekannt für ihren gigantischen Hammer und ihr Motorrad; strebt den Eintritt in die Spezialabteilung an.\n- **Alan**: Ermittler der Direktion, versiert im Nahkampf und in taktischen Operationen.\n- **Bansy**: Ermittlerin im Street-Art-Stil, spezialisiert auf Graffiti und Sprengstoff.\n- **Mechanika**: Ein geniales Mechaniker-Mädchen, das jede Art von Maschinenmodifikation und schwere Feuerwaffen meistert.\n- **Dila**: Eine geheimnisvolle und elegante Ermittlerin mit der Fähigkeit zur Gravitations- und Telekinesekontrolle.",
    "FR": "# Terminologie clé, organisations et noms de code des personnages d’Ananta\n\n*De l'agence paranormale officielle « Direction Anti-Chaos (A.C.D.) » à la métropole côtière animée de « Nova City », du héros au nom de code « Infinite Trigger » à une troupe d'enquêteurs Espers d'élite – découvrez tous les secrets de l'univers d'Ananta !*\n\n## 🏛️ Organisations & Factions\n- **Direction Anti-Chaos (A.C.D.)** : L'organisation gouvernementale à laquelle appartient le joueur. Spécialement chargée de neutraliser les phénomènes de « Chaos » et la criminalité surnaturelle ; les enquêteurs disposent de l'autorité requise pour solliciter l'aide des citoyens.\n- **Conseil d'Administration de Nova City** : L'organe administratif et gouvernemental suprême de Nova City.\n- **Bureau des Patrouilles de Nova City** : Les forces de l'ordre ordinaires assurant la sécurité publique et prêtant main-forte à l'A.C.D.\n- **Gang Riddle / Gang des Fantômes Verts** : Organisations criminelles clandestines de la ville, étroitement liées aux anomalies du Chaos.\n- **Division des Singularités (Branche Spéciale)** : Département d'élite légendaire de l'A.C.D., objectif ultime de nombreux enquêteurs (comme Taffy).\n\n## 🌆 Villes & Lieux Notables\n- **Nova City (新启市)** : Le théâtre principal de l'aventure – une métropole côtière prospère et touristique, dotée de gigantesques ponts maritimes.\n- **Quartier de New Coast (CBD)** : Le centre d'affaires et le cœur battant de Nova City, le secteur le plus animé.\n- **Rue Paradox (狂悖街区)** : Le temple de la culture urbaine où se côtoient diverses factions marginales.\n- **District de Qinghe** : Un quartier historique imprégné d'une profonde atmosphère orientale traditionnelle.\n- **Lac de l'Origine (Lake of Origin)** : Un site emblématique en périphérie de Nova City, potentiellement lié aux plus grands mystères du monde.\n- **Ling Yun City** : La deuxième mégapole révélée, mariant esthétique orientale et verticalité cyberpunk.\n\n## 🔥 Phénomènes & Concepts Clés\n- **Chaos (混厄)** : Le principal fléau surnaturel du jeu, capable de corrompre la réalité et d'engendrer des monstres (Entités du Chaos).\n- **Entités du Chaos (Chaos Entities)** : Monstres et apparitions nés de la corruption du Chaos.\n- **Longueur d'onde / Énergie du Chaos** : Grandeurs physiques mesurant le degré d'activité du Chaos et détectables par des instruments de pointe.\n- **Incidents d'Anomalie** : Événements de crise surnaturelle déclenchés par des résurgences de Chaos.\n- **Résonateurs / Espers (Surdoués)** : Humains ayant éveillé la faculté de manipuler des énergies spéciales (gravité, télékinésie, éléments).\n\n## 👤 Noms de Code & Rôles des Personnages\n- **Infinite Trigger** : Le nom de code unique du protagoniste (joueur), doté d'une constitution et d'aptitudes hors du commun.\n- **Enquêteurs (Investigators)** : Terme générique désignant les agents de terrain de la Direction Anti-Chaos.\n- **Taffy** : Enquêtrice de la Direction armée d'un marteau colossal, motarde intrépide aspirant à intégrer la Division des Singularités.\n- **Alan** : Enquêteur de la Direction, expert en combat tactique rapproché.\n- **Bansy** : Enquêtrice au look d'artiste urbaine, virtuose du graffiti et des explosifs.\n- **Mechanika** : Jeune fille prodige de la mécanique, experte en personnalisation d'engins et armes lourdes.\n- **Dila** : Enquêtrice mystérieuse et élégante maîtrisant la gravité et la télékinésie.",
    "IT": "# Terminologia fondamentale, organizzazioni e nomi in codice dei personaggi di Ananta\n\n*Dall'agenzia paranormale ufficiale «Direzione Anti-Chaos (A.C.D.)» alla splendida metropoli costiera di Nova City, dal protagonista «Infinite Trigger» alla squadra di investigatori Esper d'élite – ecco la guida completa al mondo di Ananta!*\n\n## 🏛️ Organizzazioni e Fazioni\n- **Direzione Anti-Chaos (A.C.D.)**: L'agenzia governativa ufficiale a cui appartiene il giocatore. Incaricata di contrastare i fenomeni «Chaos» e i crimini paranormali; gli investigatori hanno la facoltà di richiedere la collaborazione dei cittadini.\n- **Consiglio Direttivo di Nova City**: Il massimo organo governativo e amministrativo di Nova City.\n- **Ufficio Pattuglie di Nova City**: Il corpo di polizia ordinario incaricato della sicurezza quotidiana, che collabora con l'A.C.D.\n- **Riddle Gang / Green Ghost Gang**: Bande clandestine della malavita urbana legate a doppio filo alle manifestazioni del Chaos.\n- **Divisione Singolarità (Sezione Speciale)**: Reparto d'élite leggendario e riservato dell'A.C.D., massima aspirazione di molti investigatori (come Taffy).\n\n## 🌆 Città e Luoghi di Rilievo\n- **Nova City (新启市)**: Il palcoscenico principale del gioco: una radiosa metropoli costiera a vocazione turistica con maestosi ponti marittimi.\n- **New Coast District (CBD)**: Il distretto finanziario e centro nevralgico della città, l'area più vivace e moderna.\n- **Paradox Street (狂悖街区)**: Il centro nevralgico della cultura urbana, crocevia di svariate sottoculture metropolitane.\n- **Distretto di Qinghe**: Un suggestivo quartiere storico dal fascino orientale tradizionale.\n- **Lago delle Origini (Lake of Origin)**: Importante punto di riferimento nei dintorni di Nova City, verosimilmente legato ai segreti più profondi dell'universo di gioco.\n- **Ling Yun City**: La seconda megalopoli recentemente svelata, connubio perfetto tra estetica orientale e cyberpunk futuristico.\n\n## 🔥 Concetti Fondamentali e Fenomeni\n- **Chaos (混厄)**: La calamità soprannaturale principale del gioco, in grado di corrodere la realtà e generare mostruosità (Entità del Chaos).\n- **Entità del Chaos (Chaos Entities)**: Creature mostruose e aberrazioni nate dalla contaminazione del Chaos.\n- **Lunghezza d'onda / Energia Chaos**: Parametri fisici che descrivono l'attività del Chaos, rilevabili tramite apposita strumentazione.\n- **Incidenti Anomali**: Emergenze di sicurezza pubblica generate da improvvise manifestazioni di Chaos.\n- **Risonatori / Esper**: Esseri umani che hanno risvegliato il potere di manipolare energie soprannaturali (gravità, telecinesi, elementi).\n\n## 👤 Nomi in Codice e Personaggi\n- **Infinite Trigger**: Il nome in codice speciale del protagonista (giocatore), dotato di abilità e caratteristiche fisiche uniche.\n- **Investigatori (Investigators)**: Denominazione comune degli agenti operativi sul campo della Direzione Anti-Chaos.\n- **Taffy**: Investigatrice dell'agenzia armata di un gigantesco maglio, pilota di moto che ambisce a entrare nella Divisione Singolarità.\n- **Alan**: Investigatore dell'agenzia, maestro nel combattimento corpo a corpo e nelle tattiche d'assalto.\n- **Bansy**: Investigatrice dallo stile street artist, specializzata in graffiti ed esplosivi.\n- **Mechanika**: Ragazza prodigio della meccanica, esperta in modifiche a veicoli e armi pesanti.\n- **Dila**: Investigatrice misteriosa ed elegante, dotata di poteri unici di controllo gravitazionale e telecinetico.",
    "RU": "# Ключевые термины, фракции и кодовые имена персонажей в мире Ananta\n\n*От официального паранормального агентства «Бюро по борьбе с Хаосом (A.C.D.)» до сияющего прибрежного мегаполиса Нова-Сити, от главного героя под кодовым именем «Infinite Trigger» до отряда одаренных эсперов — представляем полный гид по лору и вселенной Ananta!*\n\n## 🏛️ Организации и Фракции\n- **Бюро по борьбе с Хаосом (A.C.D.)**: Официальная государственная организация, в которой состоит игрок. Специализируется на противодействии феноменам «Хаоса» и паранормальным преступлениям; следователи уполномочены требовать содействия граждан.\n- **Управляющий Совет Нова-Сити**: Высший правительственный и административный орган Нова-Сити.\n- **Патрульная служба Нова-Сити**: Полицейское ведомство, отвечающее за повседневный правопорядок и оказывающее содействие A.C.D.\n- **Банда Загадочников / Банда Зеленых Призраков**: Подпольные группировки города, тесно связанные с феноменом Хаоса.\n- **Особый отдел аномалий**: Легендарное засекреченное спецподразделение внутри A.C.D., высшая цель многих следователей (например, Таффи).\n\n## 🌆 Города и Ключевые Локации\n- **Нова-Сити (新启市)**: Главная сцена событий — процветающий прибрежный мегаполис с развитым туризмом и грандиозными морскими мостами.\n- **Район Нью-Кост (CBD)**: Деловой и финансовый центр Нова-Сити, самый оживленный район города.\n- **Улица Парадоксов (狂悖街区)**: Эпицентр уличной культуры, где собираются представители различных неформальных группировок.\n- **Район Цинхэ (Qinghe)**: Исторический старый квартал с выраженным восточным колоритом.\n- **Изначальное озеро (Lake of Origin)**: Важнейший ориентир в окрестностях Нова-Сити, возможно, связанный с фундаментальными тайнами мироздания.\n- **Город Линъюнь (Ling Yun City)**: Вторая раскрытая сверхкрупная метрополия, сочетающая восточную эстетику и киберпанк.\n\n## 🔥 Ключевые Концепции и Сверхъестественные Феномены\n- **Хаос (混厄 / Chaos)**: Главная аномальная катастрофа игры, способная разъедать ткань реальности и порождать чудовищ (сущностей Хаоса).\n- **Сущности Хаоса (Chaos Entities)**: Монстры и аномальные порождения, порожденные эрозией Хаоса.\n- **Длина волны Хаоса / Энергия Хаоса**: Физические величины, отражающие активность Хаоса или служащие источником энергии; фиксируются специальными приборами.\n- **Аномальные инциденты**: Паранормальные происшествия, спровоцированные вспышками Хаоса.\n- **Резонаторы / Эсперы (Сверхспособности)**: Люди, пробудившие в себе силу управления особыми видами энергии (гравитация, телекинез, стихии).\n\n## 👤 Кодовые Имена и Персонажи\n- **Infinite Trigger (Бесконечный Спусковой Крючок)**: Особый позывной и статус главного героя (игрока), обладающего уникальной физиологией и способностями.\n- **Следователи (Investigators)**: Общее наименование полевых агентов Бюро по борьбе с Хаосом.\n- **Таффи (Taffy)**: Следовательница Бюро с массивным боевым молотом; водит байк и мечтает попасть в Особый отдел.\n- **Алан (Alan)**: Следователь Бюро, мастер ближнего рукопашного боя и тактических операций.\n- **Банси (Bansy)**: Следовательница в стиле уличного художника, эксперт по граффити и взрывотехнике.\n- **Механика (Mechanika)**: Гениальная девушка-механик, непревзойденный специалист по модификации техники и тяжелому вооружению.\n- **Дила (Dila)**: Загадочная и элегантная следовательница, управляющая гравитацией и телекинезом."
  }
},
  {
    id: '1',
    slug: 'from-player-to-webmaster-why-i-built-this-site',
    category: 'devlog',
    categoryLabel: {
      EN: 'Player Story & DevLog',
      CN: '玩家随笔 · 创站故事',
      TW: '玩家隨筆 · 創站故事',
      JP: 'プレイヤー手記・サイト開設話',
      KR: '유저 이야기 · 사이트 개설기',
      DE: 'Spieler-Story & DevLog',
      FR: 'Histoire de Joueur & DevLog',
      IT: 'Storia del Giocatore & DevLog',
      RU: 'История игрока и блог'
    },
    tags: ['Ananta', '无限大', '从玩家到站长', '新启市', '玩家故事'],
    coverImage: 'https://www.anantagame.com/pc/gw/20260809220138/assets/kv-full_3f817e35.jpg',
    author: {
      name: 'Captain Alex',
      role: {
        EN: 'Site Webmaster & Ananta Player',
        CN: '本站站长 · 资深玩家',
        TW: '本站站長 · 資深玩家',
        JP: 'ファンサイト管理人・プレイヤー',
        KR: '사이트 관리자 · 일반 유저',
        DE: 'Seitenbetreiber & Spieler',
        FR: 'Créateur du site & Joueur',
        IT: 'Creatore del sito & Giocatore',
        RU: 'Создатель сайта и игрок'
      },
      avatar: 'https://www.anantagame.com/pc/gw/20260811115527/assets/icon-studio_68622482.svg',
      handle: '@CaptainAlex'
    },
    date: '2026-06-01',
    readTimeMin: 4,
    initialLikes: 1560,
    initialViews: 23800,
    featured: true,
    title: {
      EN: 'From Player to Webmaster: Why I Built This Website for Ananta',
      CN: '从玩家到站长：我为什么为《无限大》做了这个网站',
      TW: '從玩家到站長：我為什麼為《無限大》做了這個網站',
      JP: 'プレイヤーから管理人へ：私が『Ananta』のためにこのサイトを作った理由',
      KR: '한 유저에서 사이트 관리자로: 내가 《무한대》 정보 사이트를 만든 이유',
      DE: 'Vom Spieler zum Webmaster: Warum ich diese Website für Ananta gebaut habe',
      FR: 'De joueur à créateur de site : Pourquoi j\'ai conçu ce portail pour Ananta',
      IT: 'Da giocatore a creatore: Perché ho realizzato questo sito per Ananta',
      RU: 'От игрока к создателю сайта: почему я создал этот портал для Ananta'
    },
    summary: {
      EN: 'From seeing the first 2023 PV to the 2024 gacha-free announcement and the final release on January 15, 2027. Here is the honest story of an ordinary fan who waited four years and built a clean database.',
      CN: '说实话，一开始我根本没想过要做网站。我就是个普通玩家，每天刷刷B站。从2023年第一次曝光，到2024年宣布取消抽卡，再到2027年1月15日正式上线，记录这四年的等待与建站故事。',
      TW: '說實話，一開始我根本沒想過要做網站。我就是個普通玩家，每天刷刷B站。從2023年第一次曝光，到2024年宣布取消抽卡，再到2027年1月15日正式上線，記錄這四年的等待與建站故事。',
      JP: '最初はサイトを作るなんて夢にも思っていませんでした。2023年の初報から2024年のガチャ撤廃発表、そして2027年1月15日のリリースまで、4年間待ち続けた一人のプレイヤーの物語。',
      KR: '처음에는 웹사이트를 만들 생각조차 없었습니다. 2023년 첫 공개부터 2024년 가챠 폐지 소식, 그리고 2027년 1월 15일 정식 출시까지 4년 동안 기다린 유저의 솔직한 고백.',
      DE: 'Ehrlich gesagt hatte ich anfangs nicht vor, eine Website zu erstellen. Hier ist meine persönliche Geschichte als Fan von 2023 bis zum Release 2027.',
      FR: 'Pour être honnête, je n\'avais jamais prévu de créer un site web. Voici l\'histoire d\'un joueur ordinaire qui a attendu Ananta pendant quatre ans.',
      IT: 'Onestamente, all\'inizio non pensavo affatto di creare un sito web. Ecco la mia storia di attesa e dedizione per Ananta dal 2023 al 2027.',
      RU: 'Честно говоря, изначально я даже не думал делать сайт. Это история простого игрока, который ждал игру четыре года.'
    },
    content: {
      CN: `说实话，一开始我根本没想过要做网站。

我就是个普通玩家，每天刷刷B站、看看游戏资讯的那种。2023年《无限大》第一次曝光的时候，我跟大家一样，看了PV觉得“哇画面不错”，然后就划过去了——毕竟这些年二次元开放世界画饼的游戏见得多了，谁知道能不能真的做出来。

但后来事情开始变得不一样了。

2024年某个晚上，我刷到一条新闻：《无限大》宣布永久取消角色抽卡池，所有可操控角色全部通过主线剧情免费解锁。我当时直接从床上坐起来了。

玩过二次元游戏的都懂这意味着什么。抽卡，那是多少游戏的核心收入来源？角色放卡池里，玩家氪金去捞，这是行业惯例了好吧。《无限大》倒好，直接说“我们不搞这套，只卖外观”。说实话，我第一反应是不太信——这能回本吗？网易这么大一个公司，投了那么多钱做开放世界，图什么？

但越不信就越想挖。我跑去把能找到的所有预告、实机演示、开发访谈全看了一遍，结果越看越上头。

先说战斗。垃圾桶扣人头，这个谁想出来的？还有网球拍、工地大锤、路边的自行车，随手抄起来就能打。那帮开发人员是不是成龙电影看多了？但真的很有意思啊，比那种“抽出五星武器然后站桩放技能”的套路新鲜太多了。

再说城市。我看过一个演示，玩家操控角色穿着一身潮牌从NPC旁边经过，那路人居然主动凑过来击掌，还跟着音乐扭了两下。还有个细节，有个人快坐到椅子上的时候，你可以提前把椅子抽走，那人就直接摔地上了。我当时笑出来了——这城市是活的，不是那种NPC都跟木桩子一样戳在那里的样板间。

最让我觉得离谱的是场景。西湖、东方明珠，全都有现实原型。甚至还能扫码买饮料。你能想象吗？在游戏里掏出手机对着自动售货机扫一下，然后角色真的会拿到一罐饮料喝起来。我朋友跟我说“这玩意儿就是个赛博上海”，我觉得他说得一点没错。

后来我查到这款游戏背后是网易的Naked Rain工作室，开发团队有七八百人。七八百人是什么概念？做几年，砸几个亿，然后跟你说“角色全免费”……说实话我还是想不通他们怎么赚钱，但这种“我想不通”的感觉反而让我更想关注了。

然后就开始了漫长到令人崩溃的等待。

2023年公布，中间官方经常一两个月没有任何动静。每次出新PV，B站弹幕直接炸成一片；没有消息的时候，就只能反复刷以前的演示视频解馋。我那段时间每天起床第一件事就是搜“无限大 最新消息”，恨不得把它设成浏览器主页。等了几个月，又等了一年，再等一年……一直到2027年1月15日，才真正等到上线。

等太久了。真的太久。

有一天半夜，我又在翻那些翻来覆去看过几十遍的老视频，突然冒出一个念头：我干吗不自己弄个地方？把所有能找到的资讯、预告、试玩报告都整理到一块儿，不用每次到处翻。就当给自己做的资料库，顺便也能给其他等到快疯了的玩家看一看。

于是这个网站就出现了。

它没有什么高大上的商业计划，也不是什么创业项目。就是我一个普通玩家在等游戏上线的时候，闲着也是闲着，做了个“课外作业”。我把能找到的《无限大》相关信息都搬过来了，偶尔写写自己的猜想和期待——比如“新启市会不会真的有夜店可以蹦迪”、“那些可以举起来的物件到底有多少种”，诸如此类有的没的。

如果你也在等《无限大》上线，或者你单纯好奇这款“不抽卡的二次元开放世界到底长什么样”，欢迎常来看看。这地方不会有什么独家内幕消息，我也没有那个本事。但至少，我把能整理的东西都整理得清清楚楚了。

2027年1月15日已经过了。如果你已经玩上了，那你懂的——这座城市值得等待。

如果你还没进去逛过，那……赶紧的吧，我在新启市等你。

——一个等了《无限大》整整四年的普通玩家`,
      TW: `說實話，一開始我根本沒想過要做網站。

我就是個普通玩家，每天刷刷B站、看看遊戲資訊的那種。2023年《無限大》第一次曝光的時候，我跟大家一樣，看了PV覺得「哇畫面不錯」，然後就滑過去了——畢竟這些年二次元開放世界畫大餅的遊戲見得多了，誰知道能不能真的做出來。

但後來事情開始變得不一樣了。

2024年某個晚上，我刷到一條新聞：《無限大》宣布永久取消角色抽卡池，所有可操控角色全部通過主線劇情免費解鎖。我當時直接從床上坐起來了。

玩過二次元遊戲的都懂這意味著什麼。抽卡，那是多少遊戲的核心收入來源？角色放卡池裡，玩家課金去撈，這是行業慣例了好吧。《無限大》倒好，直接說「我們不搞這套，只賣外觀」。說實話，我第一反應是不太信——這能回本嗎？網易這麼大一個公司，投了那麼多錢做開放世界，圖什麼？

但越不信就越想挖。我跑去把能找到的所有預告、實機演示、開發訪談全看了一遍，結果越看越上頭。

先說戰鬥。垃圾桶扣人頭，這個誰想出來的？還有網球拍、工地大錘、路邊的自行車，隨手抄起來就能打。那幫開發人員是不是成龍電影看多了？但真的很有意思啊，比那種「抽出五星武器然後站樁放技能」的套路新鮮太多了。

再說城市。我看過一個演示，玩家操控角色穿著一身潮牌從NPC旁邊經過，那路人居然主動湊過來擊掌，還跟著音樂扭了兩下。還有個細節，有個人快坐到椅子上的時候，你可以提前把椅子抽走，那人就直接摔地上了。我當時笑出來了——這城市是活的，不是那種NPC都跟木樁子一樣戳在那裡的樣板間。

最讓我覺得離譜的是場景。西湖、東方明珠，全都有現實原型。甚至還能掃碼買飲料。你能想像嗎？在遊戲裡掏出手機對著自動售貨機掃一下，然後角色真的會拿到一罐飲料喝起來。我朋友跟我說「這玩意兒就是個賽博上海」，我覺得他說得一點沒錯。

後來我查到這款遊戲背後是網易的Naked Rain工作室，開發團隊有七八百人。七八百人是什麼概念？做幾年，砸幾個億，然後跟你說「角色全免費」……說實話我還是想不通他們怎麼賺錢，但這種「我想不通」的感覺反而讓我更想關注了。

然後就開始了漫長到令人崩潰的等待。

2023年公布，中間官方經常一兩個月沒有任何動靜。每次出新PV，B站彈幕直接炸成一片；沒有消息的時候，就只能反覆刷以前的演示視頻解饞。我那段時間每天起床第一件事就是搜「無限大 最新消息」，恨不得把它設成瀏覽器首頁。等了幾個月，又等了一年，再等一年……一直到2027年1月15日，才真正等到上線。

等太久了。真的太久。

有一天半夜，我又在翻那些翻來覆去看過幾十遍的老視頻，突然冒出一個念頭：我幹嗎不自己弄個地方？把所有能找到的資訊、預告、試玩報告都整理到一塊兒，不用每次到處翻。就當給自己做的資料庫，順便也能給其他等到快瘋了的玩家看一看。

於是這個網站就出現了。

它沒有什麼高大上的商業計劃，也不是什麼創業項目。就是我一個普通玩家在等遊戲上線的時候，閒著也是閒著，做了個「課外作業」。我把能找到的《無限大》相關資訊都搬過來了，偶爾寫寫自己的猜想和期待——比如「新啟市會不會真的有夜店可以蹦迪」、「那些可以舉起來的物件到底有多少種」，諸如此類有的沒的。

如果你也在等《無限大》上線，或者你單純好奇這款「不抽卡的二次元開放世界到底長什麼樣」，歡迎常來看看。這地方不會有什麼獨家內幕消息，我也沒有那個本事。但至少，我把能整理的東西都整理得清清楚楚了。

2027年1月15日已經過了。如果你已經玩上了，那你懂的——這座城市值得等待。

如果你還沒進去逛過，那……趕緊的吧，我在新啟市等你。

——一個等了《無限大》整整四年的普通玩家`,
      EN: `To be honest, I never planned on making a website in the first place.

I was just an everyday gamer, the kind who browses Bilibili, YouTube, and gaming news every evening. When Ananta (Project Mugen) was first revealed back in 2023, my reaction was just like everyone else's: "Wow, visuals look neat," and then I scrolled past. After all, we've seen so many anime open-world games promise the moon over the years—who knew if it would ever actually release?

Then things took an unexpected turn.

One night in 2024, I saw a headline: Ananta officially announced the permanent removal of all character gacha pools—every playable agent would be unlocked for free through the main story. I literally sat straight up in bed.

Anyone who plays anime games knows what this means. Gacha banners are the primary lifeblood and revenue stream for the entire genre. Locking characters behind 50/50 coin flips is industry standard. Yet here was Ananta, boldly stating, "We won't do that. We will only monetize cosmetics and skins." To be frank, my immediate thought was pure disbelief: *Can they actually recoup their costs? NetEase poured massive budgets into this open world—what on earth is their plan?*

The more skeptical I was, the deeper I dug. I binged every single trailer, gameplay showcase, and developer interview available. And the more I watched, the more hooked I became.

Let's start with combat. Who came up with slamming a street dumpster over an enemy's head? Tennis rackets, construction sledgehammers, bicycles parked on the sidewalk—you can grab almost anything on the street and swing it. Did the dev team grow up bingeing Jackie Chan action movies? But it felt so refreshing compared to the stale loop of "pull 5-star weapon, stand in place, and spam rotation skills."

Then look at the city. In one showcase, a player walked past an NPC wearing streetwear; the pedestrian actually strolled over for a high-five and grooved along with the background beat. In another clip, someone was about to sit down on a public bench, and the player pulled the bench away—the NPC fell straight onto the floor. I burst out laughing. This city felt genuinely alive, not like a sterile showroom full of wooden NPCs stuck in place.

What blew my mind most were the real-world references: West Lake, Oriental Pearl Tower, real metropolitan landmarks. You can even scan QR codes to buy drinks from vending machines! Imagine pulling out an in-game phone, scanning the machine, and having your character grab a chilled can to drink on the sidewalk. A friend said, "This thing is literally Cyberpunk Shanghai," and he wasn't wrong.

Later I learned it was developed by NetEase's Naked Rain studio with 700 to 800 developers. What does 700+ people mean? Years of production, hundreds of millions in budget, and then telling everyone, "All characters are completely free." I still couldn't figure out how they planned to make money, but that very confusion made me follow it obsessively.

And then began the agonizing, endless wait.

Announced in 2023, the official team would often go completely silent for months. Whenever a new PV dropped, comment sections exploded; when there was no news, we had to rewatch old gameplay clips over and over to satisfy the itch. Every morning, the first thing I searched was "Ananta latest updates"—I almost set it as my browser homepage. Months passed, one year passed, another year passed... until January 15, 2027, when it finally launched.

We waited so long. Truly, so long.

One late night, while rewatching an old clip for the 50th time, a thought crossed my mind: *Why don't I build a place myself?* A single hub to collect all trailers, patch logs, and playtest reports in one tidy spot, so I wouldn't have to hunt across 10 different platforms every time. A personal knowledge base, and maybe something helpful for fellow fans who were also losing their minds waiting.

And that's how this website was born.

It has no grand business pitch or venture startup goals. It was just a passionate player with time on his hands doing a little "side homework." I archived every piece of Ananta info I could find, occasionally writing my own theories and wishlists—like whether Xinqi City would feature dance clubs, or how many throwable objects would be interactive.

If you've been waiting for Ananta, or if you're just curious about what a zero-gacha anime open world feels like, you're always welcome here. You won't find exclusive leaked scoops—I don't have that kind of insider access. But I have organized everything cleanly, with care.

January 15, 2027 has arrived. If you're already roaming the streets, you know—this city was worth every second of the wait.

If you haven't jumped in yet... well, what are you waiting for? I'll be seeing you in Xinqi City.

— An ordinary player who waited four whole years for Ananta`,
      JP: `正直なところ、最初はサイトを作るなんて夢にも思っていませんでした。

私はただの一般プレイヤーで、毎日動画サイトを見たりゲームの最新情報を眺めたりするようなごく普通のオタクでした。2023年に『無限大（Ananta）』が初公開された時も、「おっ、グラフィック綺麗だな」と思った程度で、すぐに画面をスクロールしてしまいました。ここ数年、アニメ調オープンワールドの「大風呂敷」には散々慣れていましたし、本当に完成するのか疑問だったからです。

しかし、事態は思わぬ方向へと動き始めました。

2024年のある夜、ふと流れてきたニュースを目にしました。「『無限大』はキャラクターのガチャ（課金召喚）を永久に廃止し、すべてのプレイアブルキャラクターをメインストーリーで完全無料配布する」。私はベッドから飛び起きました。

ソシャゲを遊んでいる人なら、これが何を意味するか分かるはずです。ガチャはゲーム会社の最大の収益源であり、新キャラをガチャに入れて課金させるのは業界の常識です。それなのに『無限大』は「うちはキャラガチャをやらない、衣装と見た目だけ売る」と言い切ったのです。正直、最初は信じられませんでした。「これで開発費を回収できるのか？ NetEaseほどの巨大企業が莫大な資金を投じて、一体何を目指しているんだ？」と。

しかし疑えば疑うほど、気になって調べずにはいられなくなりました。公開されている予告映像、実機プレイ動画、開発者インタビューを片っ端から見漁り、気づけばすっかり夢中になっていました。

まず戦闘。敵の頭にゴミ箱をすっぽり被せるなんて、誰が考えたんでしょう？ テニスラケット、工事現場の巨大ハンマー、道端の自転車まで、周囲の物を手当たり次第に拾って振り回せる。開発スタッフはジャッキー・チェンの映画の見すぎじゃないかと思いましたが、最高に面白い。「星5武器を引いて棒立ちでスキルを回す」というマンネリから完全に解き放たれていました。

次に街の作り込み。ある実機デモで、ストリートファッションを着たキャラがNPCの横を通り過ぎると、通行人が自らハイタッチを求めてきて、BGMに合わせて体を揺らしていました。ベンチに座ろうとしているNPCの直前で椅子を引っこ抜くと、そのまま尻もちをつく細かいギミックまでありました。思わず笑ってしまいました――この街は生きている。棒立ちのマネキンが並ぶだけの見本市ではないと。

極めつけは実在都市のオマージュです。西湖や東方明珠など、現実の街並みが息づいています。極めつけはQRコード決済で自販機のジュースを買うギミック。ゲーム内でスマホを取り出してピッとかざし、実際に缶を受け取って飲む。「これ、サイバーパンク上海じゃないか」と友人が言っていましたが、まさにその通りでした。

後から知ったのですが、開発を担当するNaked Rainスタジオには700〜800人ものスタッフが在籍しているそうです。700人以上の規模で数年かけて何億もの開発費を投じ、その上で「キャラは全員無料」……。ビジネスモデルとしては相変わらず理解不能ですが、その「理解できなさ」が逆に私の熱量を加速させました。

そして、気が遠くなるほど長い待機期間が始まりました。

2023年の発表以降、公式は平気で1〜2ヶ月沈黙することがありました。新PVが出ればコメント欄は大盛り上がり、情報がない時期は過去の動画を何度も見返して飢えを凌ぐ日々。毎朝起きるたびに「無限大 最新情報」と検索し、ブラウザのトップページに設定したいほどでした。数ヶ月待ち、1年待ち、また1年待ち……そうしてついに、2027年1月15日の正式リリースを迎えたのです。

本当に、本当に長い4年間でした。

ある日の深夜、何十回も見返した古いデモ動画を眺めていた時、ふと思い立ちました。
「こんなに探すのが大変なら、いっそ自分で情報サイトを作ってしまえばいいのでは？」
見つけたニュース、PV、プレイレポートを一箇所に整理しておけば、毎回あちこち検索し直す必要もありません。自分専用のデータベースとして、そして同じように待ち焦がれている仲間たちにも見てもらえればと。

そうして生まれたのが、このウェブサイトです。

大層なビジネス計画でもなければ、起業プロジェクトでもありません。ただの一人のプレイヤーが、ゲームを待ちながら作った「自主制作の宿題」のようなものです。集められる限りの情報を整理し、たまに「新啓市には本当に踊れるクラブがあるのかな」「持ち上げられるオブジェクトは何種類あるんだろう」といった妄想を書き留めてきました。

もしあなたも『無限大』を待っていた一人なら、あるいは「ガチャのないアニメ調オープンワールドってどんなゲームなんだろう」と気になって訪れたなら、ぜひ気軽に立ち寄ってください。独占スクープなんてありませんが、手に入る情報はどこよりも分かりやすく整理してあります。

2027年1月15日はすでに過ぎました。もしすでに街を駆け回っているなら、もうお分かりでしょう――この街は、待つ価値が確かにあったと。

まだ街に足を踏み入れていないなら……さあ、急いでください。新啓市でお待ちしています！

――『無限大』を4年間待ち続けた、ある一般プレイヤーより`,
      KR: `솔직히 말씀드리면, 처음에는 웹사이트를 만들 생각조차 전혀 없었습니다.

저는 그저 매일 유튜브를 보고 게임 뉴스를 찾아보는 평범한 게이머 중 한 명이었습니다. 2023년 《무한대(Ananta)》가 처음 공개되었을 때도 다른 분들과 마찬가지로 "와, 그래픽 좋네" 하고 그냥 넘겼습니다. 지난 몇 년간 서브컬처 오픈월드 신작들의 '장밋빛 공약'을 너무 많이 봐왔기에, 과연 진짜로 완성될 수 있을지 의문이었기 때문입니다.

하지만 이후 상황이 완전히 달라지기 시작했습니다.

2024년 어느 날 밤, 한 편의 뉴스를 보게 되었습니다. 《무한대》가 캐릭터 가챠(뽑기) 시스템을 영구 폐지하고, 모든 플레이어블 캐릭터를 메인 스토리 진행을 통해 100% 무료로 지급하겠다고 공식 선언한 것입니다. 저는 침대에서 그대로 벌떡 일어났습니다.

서브컬처 게임을 해보신 분들은 이것이 무엇을 의미하는지 잘 아실 겁니다. 가챠 뽑기는 게임사의 핵심 수입원입니다. 캐릭터를 뽑기에 넣고 유저들이 과금하게 만드는 것은 업계의 불문율이었습니다. 그런데 《무한대》는 "우리는 그런 거 안 한다, 오직 외형 스킨만 팔겠다"고 선언한 것입니다. 솔직히 제 첫 반응은 의심이었습니다. '이러면 개발비는 어떻게 회수하지? 넷이즈 같은 대기업이 막대한 돈을 쏟아부어 오픈월드를 만들면서 도대체 무엇을 노리는 거지?'

하지만 의심이 깊어질수록 더 파고들고 싶어졌습니다. 공개된 모든 트레일러, 실기 플레이 영상, 개발자 인터뷰를 샅샅이 찾아보았고, 볼 때마다 점점 더 빠져들었습니다.

먼저 전투입니다. 쓰레기통을 적의 머리에 냅다 씌우는 액션은 도대체 누구 아이디어였을까요? 테니스 라켓, 공사장 해머, 길가에 세워진 자전거까지 손에 잡히는 대로 주워 들고 싸울 수 있습니다. 개발진이 성룡 영화를 너무 많이 본 게 아닌가 싶었지만, 정말 신선하고 재미있었습니다. '5성 무기를 뽑아서 제자리에 서서 스킬만 쿨마다 돌리는' 뻔한 방식보다 훨씬 흥미로웠습니다.

도시의 디테일도 압도적이었습니다. 한 실기 영상에서 스트리트 패션을 입은 캐릭터가 지나가자, 지나가던 NPC가 먼저 다가와 하이파이브를 건네고 음악에 맞춰 몸을 흔들더군요. 벤치에 앉으려는 사람의 의자를 슬쩍 빼버리면 그대로 바닥에 엉덩방아를 찧는 디테일까지 있었습니다. 저도 모르게 웃음이 터졌습니다. 이 도시는 살아있었습니다. 멀뚱히 서 있는 마네킹 같은 NPC들의 전시장이 아니었습니다.

가장 놀라웠던 것은 현실 도시의 오마주였습니다. 서호와 동방명주 같은 실제 랜드마크가 녹아있었고, 인게임에서 스마트폰을 꺼내 자판기 QR코드를 스캔하면 캐릭터가 실제로 시원한 음료를 뽑아 마시는 장면까지 있었습니다. 친구가 "이거 완전 사이버펑크 상하이네"라고 했는데, 정말 딱 맞는 말이었습니다.

나중에 알고 보니 이 게임 뒤에는 넷이즈 Naked Rain 스튜디오의 700~800명에 달하는 거대한 개발팀이 있었습니다. 700명이 넘는 인원이 몇 년 동안 수천억을 쏟아붓고 나서 "캐릭터는 전원 무료"라니... 솔직히 지금도 어떻게 수익을 낼지 다 이해되지는 않지만, 그 '이해할 수 없음'이 저를 더 열광하게 만들었습니다.

그리고 피를 말리는 긴 기다림이 시작되었습니다.

2023년 첫 발표 이후, 공식은 종종 한두 달씩 아무런 소식도 내놓지 않았습니다. 새 PV가 나오면 커뮤니티가 뒤집어졌고, 소식이 없을 때는 예전 영상을 수십 번씩 돌려보며 갈증을 달랬습니다. 매일 아침 눈뜨자마자 "무한대 최신 소식"을 검색하는 것이 일상이었습니다. 몇 달을 기다리고, 1년을 기다리고, 또 1년을 기다려... 마침내 2027년 1월 15일 정식 출시를 맞이했습니다.

정말 너무나도 긴 기다림이었습니다.

어느 날 새벽, 수십 번도 넘게 본 예전 플레이 영상을 다시 보다가 문득 이런 생각이 들었습니다.
'어차피 이렇게 힘들게 찾을 바에야, 내가 직접 한곳에 모아두면 어떨까?'
찾아낸 모든 정보, 트레일러, 테스트 후기를 깔끔하게 정리해 두면 매번 여기저기 헤맬 필요가 없으니까요. 나를 위한 자료실이자, 나와 똑같이 기다림에 지친 유저들을 위한 공간을 만들자고 생각했습니다.

그렇게 이 사이트가 탄생했습니다.

거창한 사업 계획도, 스타트업 프로젝트도 아닙니다. 그저 한 명의 평범한 유저가 게임 출시를 기다리며 틈틈이 완성한 '개인 숙제' 같은 공간입니다. 찾을 수 있는 모든 《무한대》 정보를 이곳으로 모아두었고, "신치시(新启市)에는 진짜 춤출 수 있는 클럽이 있을까?", "집어 던질 수 있는 사물은 몇 종류나 될까?" 같은 소소한 상상과 기대도 적어두었습니다.

여러분도 《무한대》를 기다려오셨거나, '캐릭터 뽑기가 없는 서브컬처 오픈월드'가 과연 어떤 모습일지 궁금하시다면 언제든 편하게 들러주세요. 독점 내부 유출 정보 같은 대단한 것은 없지만, 적어도 찾을 수 있는 모든 정보만큼은 깔끔하고 정확하게 정리해 두었습니다.

2027년 1월 15일은 이미 지났습니다. 이미 게임 속에 접속해 계신다면 잘 아실 겁니다. 이 도시는 기다릴 만한 가치가 충분했다는 것을요.

아직 신치시에 발을 들이지 않으셨다면... 서두르세요. 신치시에서 기다리고 있겠습니다!

—— 《무한대》를 4년 동안 기다린 평범한 유저 올림`,
      DE: `# Vom Spieler zum Webmaster: Warum ich diese Website für Ananta erstellt habe

Ehrlich gesagt hatte ich anfangs überhaupt nicht vor, eine Website zu erstellen.

Ich war einfach ein ganz normaler Gamer, der sich abends auf YouTube, Reddit und Bilibili die neuesten Gaming-Nachrichten anschaute. Als 《Ananta (Project Mugen)》 2023 zum ersten Mal enthüllt wurde, dachte ich wie die meisten anderen: "Wow, sieht fantastisch aus" – und scrollte weiter. Nach so vielen vollmundigen Ankündigungen im Anime-Open-World-Genre wusste schließlich niemand, ob daraus jemals ein fertiges Spiel werden würde.

Doch dann änderte sich alles.

Eines Abends im Jahr 2024 las ich eine Nachricht, die mich buchstäblich aus dem Bett riss: 《Ananta》 kündigte offiziell an, das Charakter-Gacha-System dauerhaft zu streichen. Sämtliche spielbaren Agenten sollten über die Hauptstory zu 100 % kostenlos freischaltbar sein.

Jeder, der Gacha- und Anime-RPGs spielt, weiß genau, was das bedeutet. Charakter-Banner sind die Haupteinnahmequelle des gesamten Genres. Charaktere hinter 50/50-Chancen zu sperren und Spieler zum Zahlen zu bewegen, ist der feste Industriestandard. Und dann kommt Ananta und sagt: "Wir machen das nicht. Wir monetarisieren ausschließlich kosmetische Skins und Outfits." Ehrlich gesagt war meine erste Reaktion pures Misstrauen: *Können sie die Kosten überhaupt wieder einspielen? NetEase investiert riesige Summen in eine vollwertige Open World – was ist hier der Plan?*

Aber je skeptischer ich war, desto tiefer wollte ich graben. Ich schaute mir jeden einzelnen Trailer, jede Gameplay-Präsentation und jedes Entwickler-Interview an. Und je mehr ich sah, desto begeisterter wurde ich.

Fangen wir beim Kampfsystem an. Einem Gegner einen Mülleimer über den Kopf zu stülpen – wer denkt sich so etwas aus? Tennisschläger, Vorschlaghämmer von Baustellen, Fahrräder am Straßenrand: Man kann fast jeden Gegenstand in der Stadt greifen und als Waffe einsetzen. Haben die Entwickler zu viele Jackie-Chan-Filme geschaut? Aber es war so herrlich erfrischend im Vergleich zum ewigen Einerlei von "Zieh eine 5-Sterne-Waffe, bleib starr stehen und spule deine Skill-Rotationen ab".

Und dann die Stadt: In einer Gameplay-Demo spazierte der Charakter in Streetwear an einem Passanten vorbei, und der NPC kam tatsächlich herüber, gab ein High-Five und tanzte zum Beat der Musik. In einem anderen Clip wollte sich ein Passant gerade auf eine Bank setzen; der Spieler zog die Bank weg und der NPC landete unsanft auf dem Boden. Ich musste lauthals lachen – diese Stadt lebt! Es ist kein steriler Showroom voller starrer Schaufensterpuppen.

Am meisten faszinierten mich die realen Schauplätze: Westsee, Oriental Pearl Tower, echte Metropol-Wahrzeichen. Man kann sogar QR-Codes an Automaten scannen, um Getränke zu kaufen! Das Smartphone im Spiel zücken, den Automaten scannen und eine eiskalte Dose öffnen – ein Freund meinte treffend: "Das ist buchstäblich Cyberpunk Shanghai."

Später erfuhr ich, dass das Naked Rain Studio von NetEase mit über 700 bis 800 Entwicklern an dem Projekt arbeitet. Mehr als 700 Entwickler! Jahre an Produktionszeit, hunderte Millionen Budget, und dann verkünden sie: "Alle Charaktere sind kostenlos." Aus geschäftlicher Sicht konnte ich es immer noch kaum fassen, aber genau dieses Unverständnis machte mich umso neugieriger.

Und dann begann das zermürbende, endlos lange Warten.

Nach der Enthüllung 2023 herrschte oft monatelang Funkstille. Sobald ein neuer Trailer erschien, explodierten die Kommentarspalten; gab es keine Neuigkeiten, schauten wir alte Clips in Dauerschleife. Jeden Morgen suchte ich als Erstes nach "Ananta Neuigkeiten". Monate vergingen, ein Jahr verging, noch ein Jahr... bis zum 15. Januar 2027, als das Spiel endlich offiziell startete.

Wir haben so lange gewartet. Wirklich unendlich lange.

Eines Nachts, als ich mir zum fünfzigsten Mal einen alten Gameplay-Clip ansah, kam mir ein Gedanke: *Warum baue ich nicht selbst eine Anlaufstelle?* Einen zentralen Hub, an dem alle Trailer, Gameplay-Analysen und Testberichte übersichtlich gesammelt sind, damit man nicht jedes Mal zehn Plattformen durchsuchen muss. Ein persönliches Archiv für mich und ein nützlicher Treffpunkt für alle Fans, die genauso sehnsüchtig warteten.

So entstand diese Website.

Dahinter steckt kein Business-Plan und kein Start-up-Projekt. Es war einfach die "Fleißarbeit" eines leidenschaftlichen Spielers während der langen Wartezeit. Ich habe alle auffindbaren Infos zu Ananta zusammengetragen und meine eigenen Theorien aufgeschrieben – ob es in Nova City Clubs zum Tanzen gibt oder wie viele greifbare Objekte in der Welt existieren.

Wenn du ebenfalls auf Ananta gewartet hast oder einfach neugierig bist, wie sich eine Anime-Open-World ganz ohne Charakter-Gacha anfühlt, bist du hier jederzeit herzlich willkommen. Exklusive Leaks wirst du hier nicht finden, aber dafür alle echten Fakten, sauber und mit Herzblut aufbereitet.

Der 15. Januar 2027 ist da. Wenn du bereits durch die Straßen von Nova City streifst, weißt du: Diese Stadt war jede einzelne Sekunde des Wartens wert.

Und falls du die Stadt noch nicht betreten hast... worauf wartest du noch? Wir sehen uns in Nova City!

— Ein ganz normaler Spieler, der vier Jahre lang auf Ananta gewartet hat`,
      FR: `# De joueur à créateur de site : Pourquoi j'ai conçu ce portail pour Ananta

Pour être tout à fait honnête, je n'avais absolument jamais prévu de créer un site web au départ.

J'étais juste un joueur ordinaire, du genre à parcourir YouTube, Reddit et les sites d'actualités gaming chaque soir. Lorsque 《Ananta (Project Mugen)》 a été révélé pour la première fois en 2023, ma réaction a été identique à celle de tout le monde : "Ouah, la direction artistique est superbe", puis j'ai continué à faire défiler mon flux. Après tout, nous avons vu tant de projets d'action-RPG en monde ouvert promettre la lune ces dernières années sans jamais aboutir.

Mais les choses ont pris une tournure inattendue.

Un soir de 2024, je suis tombé sur une annonce fracassante : 《Ananta》 annonçait officiellement la suppression définitive et totale de tout système de gacha pour les personnages. Chaque agent jouable serait débloqué à 100 % gratuitement via la progression dans l'histoire principale. Je me suis littéralement redressé d'un bond sur mon lit.

Tous ceux qui jouent aux gachas et RPGs animés comprennent le séisme que cela représente. Les bannières de tirage constituent le modèle économique fondamental de tout le secteur. Enfermer les personnages derrière des tirages à 50/50 payants est la norme absolue. Et là, Ananta déclarait tranquillement : "Nous refusons ce modèle. Nous ne vendrons que des éléments cosmétiques et des tenues." Ma première pensée a été un scepticisme total : *Comment peuvent-ils rentabiliser un tel projet ? NetEase a investi des sommes colossales dans un monde ouvert urbain d'une telle envergure — quelle est leur stratégie ?*

Plus j'étais sceptique, plus je voulais creuser. J'ai dévoré chaque bande-annonce, chaque extrait de gameplay et chaque interview des développeurs. Et plus je regardais, plus j'étais conquis.

Parlons d'abord des combats : enfoncer une poubelle sur la tête d'un voyou dans la rue, qui a eu cette idée géniale ? Des raquettes de tennis, des masses de chantier, des vélos garés sur le trottoir... vous pouvez ramasser quasiment n'importe quel objet urbain et frapper avec. Les développeurs ont-ils passé leur jeunesse devant les films de Jackie Chan ? C'était tellement rafraîchissant par rapport à la routine habituelle : "Invoquez une arme 5 étoiles, restez immobile et lancez vos rotations de sorts".

Et que dire de la ville ! Dans une démonstration, le personnage vêtu d'un style urbain croisait un passant, et le PNJ venait spontanément lui taper dans la main avant de danser au rythme de la musique. Dans un autre clip, un passant s'apprêtait à s'asseoir sur un banc public ; le joueur a retiré le banc à la dernière seconde et le PNJ est tombé par terre. J'ai éclaté de rire : cette métropole est vivante ! Ce n'est pas un décor de vitrine figé avec des mannequins immobiles.

Le plus impressionnant reste l'hommage aux véritables métropoles : le lac de l'Ouest, la tour de la Perle de l'Orient, des gratte-ciels monumentaux. On peut même scanner des QR codes sur les distributeurs automatiques pour acheter des boissons ! Sortir son téléphone en jeu, scanner la machine et boire une canette fraîche sur le trottoir... Un ami m'a dit : "C'est littéralement un Cyberpunk Shanghai", et il avait parfaitement raison.

J'ai ensuite découvert que le studio Naked Rain de NetEase mobilisait entre 700 et 800 développeurs sur le jeu. Plus de 700 personnes ! Des années de production, des centaines de millions de budget, pour ensuite proclamer : "Tous les personnages sont entièrement gratuits." D'un point de vue purement commercial, cela me dépassait toujours, mais ce mystère n'a fait que décupler ma passion.

Puis a débuté une attente interminable et éprouvante.

Après l'annonce de 2023, l'équipe officielle restait parfois silencieuse pendant des mois. Dès qu'un nouveau trailer sortait, les communautés s'enflammaient ; en période de calme plat, nous revisionnions les anciens extraits en boucle pour tromper notre impatience. Chaque matin, mon premier réflexe était de chercher "Ananta actualités". Les mois ont passé, une année s'est écoulée, puis une autre... jusqu'au 15 janvier 2027, date du lancement mondial officiel.

Nous avons attendu si longtemps. Vraiment très longtemps.

Une nuit, en regardant pour la cinquantième fois un ancien extrait de gameplay, une idée m'a traversé l'esprit : *Pourquoi ne pas créer moi-même un point de rassemblement ?* Un portail clair réunissant toutes les vidéos, analyses techniques et retours de tests au même endroit, pour éviter de chercher sur dix plateformes différentes. Un espace d'archives personnelles, mais aussi un repère utile pour tous les joueurs qui trépignaient d'impatience.

C'est ainsi que ce site est né.

Il n'y a aucun plan d'affaires démesuré ni projet de start-up derrière tout cela. C'est simplement le "devoir maison" d'un joueur passionné pendant ses longues heures d'attente. J'ai archivé toutes les données possibles sur Ananta et partagé mes réflexions — comme savoir s'il y aurait des discothèques pour danser à Nova City ou combien d'objets interactifs seraient projetables.

Si vous aussi vous attendiez Ananta, ou si vous êtes simplement curieux de découvrir à quoi ressemble un open-world urbain sans gacha de personnages, vous êtes ici chez vous. Vous ne trouverez pas de fuites confidentielles ici, mais toutes les informations vérifiées, soigneusement organisées.

Le 15 janvier 2027 est enfin arrivé. Si vous parcourez déjà les avenues de Nova City, vous le savez : cette ville méritait chaque seconde d'attente.

Et si vous n'avez pas encore fait le grand saut... qu'attendez-vous ? On se retrouve à Nova City !

— Un joueur ordinaire qui a attendu Ananta pendant quatre années entières`,
      IT: `# Da giocatore a creatore: Perché ho realizzato questo sito per Ananta

Onestamente, all'inizio non pensavo minimamente di realizzare un sito web.

Ero solo un normale videogiocatore, di quelli che la sera scorrono YouTube, Reddit e le notizie sul mondo dei videogiochi. Quando 《Ananta (Project Mugen)》 fu mostrato per la prima volta nel 2023, la mia reazione fu simile a quella di tutti: "Wow, grafica straordinaria", per poi passare oltre. Dopotutto, in questi anni abbiamo visto troppi annunci trionfalistici di open world anime che non sapevamo se avrebbero mai visto la luce.

Poi, però, le cose hanno preso una piega incredibile.

Una sera del 2024 mi sono imbattuto in una notizia che mi ha fatto letteralmente saltare giù dal letto: 《Ananta》 annunciava ufficialmente l'eliminazione permanente di qualsiasi sistema gacha per i personaggi. Tutti gli agenti giocabili sarebbero stati sbloccabili al 100% gratuitamente attraverso la storia principale.

Chiunque giochi a titoli anime sa cosa significhi tutto questo. I banner gacha sono il pilastro economico fondamentale dell'intero settore. Vincolare i personaggi a percentuali di estrazione del 50/50 e spingere i giocatori a spendere è la regola consolidata. E invece Ananta dichiara con fermezza: "Noi non adotteremo questo modello. Venderemo esclusivamente costumi ed elementi estetici." La mia primissima reazione è stata di totale scetticismo: *Come faranno a rientrare dei costi? NetEase ha investito cifre colossali in un open world urbano — qual è la loro strategia?*

Ma più ero scettico, più volevo approfondire. Ho guardato tutti i trailer, i video di gameplay reale e le interviste agli sviluppatori disponibili. E più guardavo, più ne rimanevo rapito.

Partiamo dal combattimento: infilare un bidone della spazzatura in testa a un teppista per strada, a chi è venuta questa idea? Racchette da tennis, martelli giganti da cantiere, biciclette parcheggiate sul marciapiede: puoi afferrare e brandire quasi qualsiasi oggetto urbano circostante. Gli sviluppatori hanno fatto un'indigestione di film di Jackie Chan? Eppure era incredibilmente divertente e innovativo rispetto al classico schema "pesca un'arma a 5 stelle, resta immobile e spamma rotazioni di abilità".

E guardate la città: in una sessione di prova, il personaggio vestito con abiti streetwear camminava vicino a un passante, e il PNG si avvicinava spontaneamente per dare il cinque e ballare a tempo di musica. In un altro filmato, qualcuno stava per sedersi su una panchina; il giocatore ha sfilato la panchina un istante prima e il passante è caduto a terra. Sono scoppiato a ridere: questa metropoli è viva! Non è il solito manichino fermo in una città finta.

L'aspetto più strabiliante restano i riferimenti a luoghi reali: il Lago dell'Ovest, la Oriental Pearl Tower, autentici monumenti metropolitani. Si possono persino scansionare i codici QR ai distributori per comprare bibite! Estrarre lo smartphone in gioco, scansionare il distributore e bere una lattina fresca sul marciapiede... Un amico mi ha detto: "È letteralmente una Cyberpunk Shanghai", e aveva perfettamente ragione.

In seguito ho scoperto che lo studio Naked Rain di NetEase impiega tra i 700 e gli 800 sviluppatori per il progetto. Oltre 700 persone! Anni di lavoro, centinaia di milioni di budget, per poi annunciare: "Tutti i personaggi sono gratis." Dal punto di vista economico non riuscivo a capacitarmene, ma proprio questo mistero mi ha spinto a seguire il gioco con passione maniacale.

E così è iniziata una lunghissima, estenuante attesa.

Dopo l'annuncio del 2023, il team ufficiale restava spesso in silenzio per mesi. Quando usciva un nuovo trailer, i forum impazzivano; nei periodi di calma piatta, guardavamo e riguardavamo i vecchi filmati per ingannare il tempo. Ogni mattina cercavo "Ananta ultime notizie". Sono passati mesi, è passato un anno, poi un altro ancora... fino al 15 gennaio 2027, data del debutto ufficiale.

Abbiamo aspettato tantissimo. Davvero tanto tempo.

Una notte, riguardando per l'ennesima volta un vecchio video di gameplay, mi è balenata un'idea in testa: *Perché non creo io stesso un punto di riferimento?* Un portale ordinato dove raccogliere tutti i trailer, i resoconti di prova e gli approfondimenti in un unico posto, senza dover cercare su dieci piattaforme diverse. Un archivio personale, ma anche uno spazio utile per tutti i fan che stavano fremendo nell'attesa.

Ed è così che è nato questo sito web.

Non c'è nessun piano aziendale ambizioso né mire da startup. È semplicemente il "lavoro di casa" di un appassionato mentre aspettava l'uscita del gioco. Ho raccolto tutte le informazioni reperibili su Ananta e scritto le mie riflessioni — come se a Nova City ci saranno locali notturni per ballare o quanti tipi di oggetti interattivi si potranno lanciare.

Se anche tu stavi aspettando Ananta, o se sei semplicemente curioso di vedere come sia un open world anime senza gacha di personaggi, sei il benvenuto. Non troverai fughe di notizie segrete, ma tutte le informazioni verificate e organizzate con la massima cura.

Il 15 gennaio 2027 è ormai alle spalle. Se stai già esplorando Nova City, lo sai bene: questa città valeva ogni singolo secondo di attesa.

E se non sei ancora sceso in strada... cosa aspetti? Ci vediamo a Nova City!

— Un giocatore qualunque che ha aspettato Ananta per quattro lunghi anni`,
      RU: `# От игрока к создателю сайта: почему я создал этот портал для Ananta

Честно говоря, изначально я даже не думал делать сайт.

Я был самым обычным игроком, который каждый вечер листал YouTube, Reddit, Bilibili и игровые новости. Когда в 2023 году состоялся первый анонс 《Ananta (Project Mugen)》, моя реакция была такой же, как у всех: "Ого, картинка классная", после чего я просто пролистал ленту дальше. В конце концов, за последние годы мы видели слишком много громких обещаний аниме-игр с открытым миром, и никто не знал, доведут ли проект до релиза.

Но затем события приняли совершенно неожиданный поворот.

Однажды ночью в 2024 году я наткнулся на новость, от которой буквально подскочил на кровати: авторы 《Ananta》 официально объявили о полной и окончательной отмене гачи персонажей. Все игровые агенты будут открываться на 100% бесплатно по мере прохождения основного сюжета.

Любой, кто играет в аниме-игры, прекрасно понимает, что это значит. Баннеры персонажей — главный источник дохода для всего жанра. Прятать героев за рулетками 50/50 и собирать донаты — незыблемый стандарт индустрии. И тут выходит Ananta со словами: "Мы не будем этого делать. Мы монетизируем исключительно скины и косметику." Честно скажу, первой реакцией было недоверие: *Смогут ли они вообще окупить разработку? NetEase вложила гигантские бюджеты в открытый мир — в чем их расчет?*

Но чем больше я сомневался, тем сильнее хотелось разобраться. Я пересмотрел все трейлеры, геймплейные демонстрации и интервью с разработчиками. И чем больше я смотрел, тем сильнее влюблялся в эту игру.

Начнем с боевой системы. Надеть мусорный бак на голову врагу на улице — кому вообще пришла в голову такая гениальная идея? Теннисные ракетки, строительные кувалды, велосипеды на тротуаре — можно поднять с земли практически любой предмет и пойти в атаку. Разработчики пересмотрели фильмов с Джеки Чаном? Но это же безумно весело и свежо по сравнению с привычной рутиной: "выбей пятизвездочное оружие, встань столбом и прожимай навыки по откату".

А сам город! В одном из геймплейных роликов персонаж в стильной уличной одежде проходил мимо прохожего, и тот сам подошел, дал пять и начал пританцовывать в такт музыке. В другом клипе прохожий собирался сесть на скамейку, игрок выдернул скамейку в последний момент, и NPC комично плюхнулся на землю. Я рассмеялся в голос — этот город по-настоящему живой! Это не застывшая витрина с манекенами.

Но больше всего поразили реальные локации: озеро Сиху, телебашня Восточная жемчужина, узнаваемые ориентиры мегаполиса. В игре можно даже сканировать QR-коды на автоматах, чтобы купить напиток! Достать внутриигровой смартфон, навести камеру на автомат и выпить баночку лимонада на тротуаре... Друг сказал мне: "Это же буквально Киберпанк Шанхай", и он попал в самую точку.

Позже я узнал, что над игрой в студии Naked Rain трудится от 700 до 800 разработчиков. Более 700 человек! Годы разработки, сотни миллионов бюджета, и при этом: "Все персонажи бесплатны." С точки зрения бизнеса это до сих пор кажется невероятным, но именно это сделало ожидание столь захватывающим.

А затем началось долгое, мучительное ожидание.

После анонса в 2023 году разработчики порой замолкали на месяцы. Выход каждого нового трейлера взрывал сообщество, а в периоды затишья мы пересматривали старые ролики до дыр. Каждое утро начиналось с поиска "новости Ananta". Проходили месяцы, прошел год, затем еще один... пока 15 января 2027 года игра наконец не вышла официально.

Мы ждали так долго. Действительно очень долго.

Однажды глубокой ночью, пересматривая старый геймплей в пятидесятый раз, я подумал: *Почему бы мне не сделать единый портал?* Место, где собраны все трейлеры, отчеты о тестах и разборы механик, чтобы не искать информацию по десяткам разных платформ. Личный архив и полезная база для других игроков, которые так же извелись в ожидании.

Так и появился этот сайт.

Здесь нет грандиозного бизнес-плана или стартап-амбиций. Это просто искренняя работа обычного игрока, коротавшего время в ожидании релиза. Я бережно собрал всю найденную информацию об Ananta и делился своими размышлениями — например, будут ли в Нова-Сити ночные клубы или сколько предметов окружения можно бросать во врагов.

Если вы тоже ждали Ananta или вам просто любопытно взглянуть на аниме-RPG в открытом мире без гачи персонажей — добро пожаловать. Здесь нет инсайдерских сливов, но вся проверенная информация разложена по полочкам.

15 января 2027 года уже наступило. Если вы уже гуляете по улицам Нова-Сити, вы и сами знаете: этот город стоил каждой секунды ожидания.

А если вы еще не в игре... чего же вы ждете? До встречи в Нова-Сити!

— Простой игрок, который ждал Ananta целых четыре года`
    }
  }
];
