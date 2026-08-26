import React, { useState, useEffect } from 'react';
import { Shield, FileText, User, Mail, ArrowLeft } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

interface LegalPageProps {
  initialTab?: string;
  onBack: () => void;
}

export function LegalPage({ initialTab = '#privacy', onBack }: LegalPageProps) {
  const { lang } = useLanguage();
  const [activeTab, setActiveTab] = useState<'privacy' | 'terms' | 'about'>('privacy');

  // Map application language to handled locales
  const activeLang = (['CN', 'TW', 'JP', 'KR', 'DE', 'FR', 'IT', 'RU'].includes(lang) ? lang : 'EN') as 'CN' | 'TW' | 'JP' | 'KR' | 'DE' | 'FR' | 'IT' | 'RU' | 'EN';

  // Sync activeTab with URL hash
  useEffect(() => {
    if (initialTab === '#disclaimer' || initialTab === '#terms') {
      setActiveTab('terms');
    } else if (initialTab === '#about') {
      setActiveTab('about');
    } else {
      setActiveTab('privacy');
    }
  }, [initialTab]);

  // Scroll to top on tab change
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [activeTab]);

  // Translation data dict
  const dictionary = {
    CN: {
      back: '返回数据库',
      tabs: {
        privacy: '隐私政策',
        terms: '服务与免责',
        about: '关于与联系',
      },
      privacy: {
        title: '隐私政策 (Privacy Policy)',
        updated: '更新日期: 2026年5月20日',
        p1: '欢迎访问 ANANTADB.COM（下称“我们”或“本站”）。本站高度重视您的隐私，本隐私协议旨在向您说明在您使用本站各项功能时，我们如何处理有关数据。',
        sec1_title: '一、 数据收集与本地存储 (LocalStorage/SessionStorage)',
        sec1_desc1: '1. 本站提供角色数据、装备对比、行动力/体力统计计算、游戏礼包码兑换状态追踪等功能。',
        sec1_desc2: '2. 为了维护您的配置（例如：您标记已激活的兑换码、您所收藏的角色、最近对比的武器状态等），本站需要借助您浏览器自带的 LocalStorage（本地存储） 技术将数据保存在您的本地浏览器中。',
        sec1_desc3: '3. 我们绝不会在任何云端服务器中收集、传输这些本地离线操作。这些数据仅用于优化您在本站的单端浏览体验，您可以随时通过清除浏览器缓存和缓存数据的方式直接抹除相关记录。',
        sec2_title: '二、 第三方服务与 Cookie 声明',
        sec2_intro: '为了支持本站的服务器租用、带宽等基本运维资金流，我们可能会引入第三方分析及广告服务：',
        sec2_b1_title: 'Google AdSense：',
        sec2_b1_desc: '作为第三方广告供应商，Google 可能会在我们的网站上展示广告。Google 也会使用 Cookie（包括双击 DART Cookie）在您访问本站及其他合作网站后，基于您的浏览历史投放符合您潜在兴趣的广告。',
        sec2_b2_desc: '您可以随时访问 Google 广告与隐私说明，或根据需要通过浏览器自带的隐私保护设置拒绝、停用此类 Cookie 并退订个性化广告服务。',
        sec2_b3_title: 'Google Analytics (流量监测)：',
        sec2_b3_desc: '本站可能会采用 Google Analytics 等服务，监测分析本站的全球日常访问数据。Google 可能会对此进行 IP 粗略定位与设备行为记录（它们不包含您的任何敏感实名信息）。',
        sec3_title: '三、 数据安全保障',
        sec3_desc: '我们通过部署全站 HTTPS 协议加密传输技术确保您的访问连接具备最高安全性，防止您在查阅游戏数据时遭遇第三方的监测或流量挟持。',
        sec4_title: '四、 隐私政策的更新',
        sec4_desc: '我们可能会随着产品功能的扩展或法律、广告联盟政策的要求随时更新本隐私政策，建议您定期关注此页面。',
        sec5_title: '五、 欧盟 GDPR 通用数据保护条例合规声明',
        sec5_desc: '根据欧洲通用数据保护条例 (GDPR)，欧盟及欧洲经济区用户享有以下完整权利：(1) 访问、更正或要求删除保存在本地浏览器中的缓存偏好数据；(2) 限制或拒绝参与本站的匿名统计与广告追踪。您可以随时通过清除浏览器缓存和 LocalStorage 或修改 Google 广告偏好设置来实现这些操作。',
        sec6_title: '六、 美国加州 CCPA 消费者隐私法案合规声明',
        sec6_desc: '根据加州消费者隐私法案 (CCPA)，加州居民有权了解其被收集的数据、要求删除相关数据，并拒绝“出售”个人信息。本站绝不销售或向第三方转让您的任何个人隐私数据，本站工具产生的所有配置皆由您在本地端持有。您可以访问网络广告倡议组织 (NAI) 退订页面来停用相关定位 Cookie。',
        sec7_title: '七、 针对未成年保护与 COPPA 儿童隐私合规声明',
        sec7_desc: '我们严格遵守美国儿童在线隐私保护法案 (COPPA) 规范。本站不以 13 岁以下儿童作为服务或定向推广对象，亦绝不主动收集、保存其个人信息。如果您作为家长发现您的孩子在本站缓存了个人偏好并有安全疑虑，请随时联系站长，我们将尽最大努力协助配合清理。',
        sec8_title: '八、 Cookie 管理与个人数据控制权',
        sec8_desc: '您对自己的隐私数据拥有完全的自主控制权。您可以通过浏览器设置随时拦截、拒绝或删除 Cookie，通过访问 Google 广告中心停用个性化广告，并随时通过清除浏览器缓存数据抹除本站所有的本地历史记录。',
      },
      terms: {
        title: '免责与服务条款 (Terms & Disclaimer)',
        updated: '更新日期: 2026年5月20日',
        notice: '重要声明：',
        notice_body: 'ANANTADB.COM 是一个专门为《Ananta》（代号：无限 / Project Mugen 及网易官方关联企划）玩家群体建立的非官方、非盈利性同人数据库网站。本站与游戏原开发商、运营商（网易网之易/NetEase Games）及任何关联子公司无任何官方合作或从属关系。',
        sec1_title: '一、 非官方同人性质声明',
        sec2_title: '二、 版权及游戏素材归属',
        sec2_desc1: '1. 本站展示的所有游戏图像、原画、三维立绘素材、文本背景故事、角色基本属性、注册商标名称、游戏标志标识及相关知识产权，均归原版权所有方或游戏开发商/原设计画师所有。',
        sec2_desc2: '2. 本站对于上述素材仅在“合理使用（Fair Use）”条款及同人创作规范框架内进行整理、收录与教学研究使用。如果版权拥有方认为某些素材引发了侵权疑虑，请随时联系我们，我们将第一时间下架或修改相关内容。',
        sec3_title: '三、 数据准确性免责说明',
        sec3_desc1: '1. 本站发布的内容包含：官方公开档案、官方测试公开信息、理论攻略及推断预设等。',
        sec3_desc2: '2. 我们不保证所有数据库字段及前瞻攻略在游戏未来正式公测或新版本上线时与官方数据100%一致。请玩家以游戏客户端内的实际版本更新说明为准。因参考本站策略、装备或流派推荐所产生的数据损耗或决策，本站不承担任何法律连带赔偿责任。',
        sec4_title: '四、 安全健康游戏提示',
        sec4_desc: '请支持合法官方渠道。不要利用任何不正当的外挂辅助破坏《Ananta》或其他同人交互工具，共同营造绿色健康的交流网络环境。',
      },
      about: {
        title: '关于我们与联系方式 (About & Contact)',
        subtitle: '让有温度的创作，连接Nova City的每一个人',
        body1: '你好！我是 ANANTADB.COM 的独立站长。和所有期待《Ananta》的小伙伴一样，我被它精美的都市二次元画风、飞檐走壁的流畅跑酷和精美的机车追逐机制深深吸引。',
        body2: '本站建立的初衷是方便全球玩家，尤其是无阻碍的多语言切换，向大家展示最新的角色档案、装备对比武器攻略等。站内的每一次代码编辑、每一条数据核对均由我个人在工作之余独立完成。',
        body3: '本站是一个有真实人情味、积极更新维护、致力于服务玩家的长线项目。我们将随着《Ananta》每一次内测及未来公测持续保持数据库迭代，提供更高质量的计算工具与玩法推荐！',
        creator: '站长 / Creator',
        creator_sub: 'Independent Developer',
        contact_title: '五、 联系我们与需求建议沟通',
        contact_desc: '如果您发现站内的角色数值、地图名称有误；如果您需提交版权整改移除，请直接通过以下邮箱建立联系：',
        email_label: '站长直达邮箱 (Direct Email)',
        note: '* 我们承诺在收到您的建议反馈或整改合规邮件后，会在 24-48 小时内为您回复协助。',
      },
    },
    TW: {
      back: '返回資料庫',
      tabs: {
        privacy: '隱私政策',
        terms: '服務與免責',
        about: '關於與聯繫',
      },
      privacy: {
        title: '隱私政策 (Privacy Policy)',
        updated: '更新日期: 2026年5月20日',
        p1: '歡迎訪問 ANANTADB.COM（下稱「我們」或「本站」）。本站高度重視您的隱私，本隱私協議旨在向您說明在您使用本站各項功能時，我們如何處理有關數據。',
        sec1_title: '一、 數據收集與本地存儲 (LocalStorage/SessionStorage)',
        sec1_desc1: '1. 本站提供角色數據、裝備對比、行動力/體力統計計算、遊戲禮包碼兌換狀態追蹤等功能。',
        sec1_desc2: '2. 為了維護您的配置（例如：您標記已激活的兌換碼、您所收藏的角色、最近對比的武器狀態等），本站需要借助您瀏覽器自帶的 LocalStorage（本地存儲） 技術將數據保存在您的本地瀏覽器中。',
        sec1_desc3: '3. 我們絕不會在任何雲端服務端中收集、傳輸這些本地離線操作。這些數據僅用於優化您在本站的單端瀏覽體驗，您可以隨時通過清除瀏覽器快取和快取數據的方式直接抹除相關記錄。',
        sec2_title: '二、 第三方服務與 Cookie 聲明',
        sec2_intro: '為了支持本站的伺服器租用、頻寬等基本運維資金流，我們可能會引入第三方分析及廣告服務：',
        sec2_b1_title: 'Google AdSense：',
        sec2_b1_desc: '作為第三方廣告供應商，Google 可能會在我們的網站上展示廣告。Google 也會使用 Cookie（包括雙擊 DART Cookie）在您訪問本站及其他合作網站後，基於您的瀏覽歷史投放符合您潛在興趣的廣告。',
        sec2_b2_desc: '您可以隨時訪問 Google 廣告與隱私說明，或根據需要通過瀏覽器自帶的隱私保護設置拒絕、停用此類 Cookie 並退訂個性化廣告服務。',
        sec2_b3_title: 'Google Analytics (流量監測)：',
        sec2_b3_desc: '本站可能會採用 Google Analytics 等服務，監測分析本站的全球日常訪問數據。Google 可能會對此進行 IP 粗略定位與設備行為記錄（它們不包含您的任何敏感實名資訊）。',
        sec3_title: '三、 數據安全保障',
        sec3_desc: '我們通過部署全站 HTTPS 協定加密傳輸技術確保您的訪問連接具備最高安全性，防止您在查閱遊戲數據時遭遇第三方的監測或流量挾持。',
        sec4_title: '四、 隱私政策的更新',
        sec4_desc: '我們可能會隨著產品功能的擴展或法律、廣告聯盟政策的要求隨時更新本隱私政策，建議您定期關注此頁面。',
        sec5_title: '五、 歐盟 GDPR 通用數據保護條例合規聲明',
        sec5_desc: '根據歐洲通用數據保護條例 (GDPR)，歐盟及歐洲經濟區用戶享有以下完整權利：(1) 訪問、更正或要求刪除保存在本地瀏覽器中的快取偏好數據；(2) 限制或拒絕參與本站的匿名統計與廣告追蹤。您可以隨時通過清除瀏覽器快取和 LocalStorage 或修改 Google 廣告偏好設置來實現這些操作。',
        sec6_title: '六、 美國加州 CCPA 消費者隱私法案合規聲明',
        sec6_desc: '根據加州消費者隱私法案 (CCPA)，加州居民有權了解其被收集的數據、要求刪除相關數據，並拒絕「出售」個人信息。本站絕不銷售或向第三方轉讓您的任何個人隱私數據，本站工具產生的所有配置皆由您在本地端持有。您可以訪問網絡廣告倡議組織 (NAI) 退訂頁面來停用相關定位 Cookie。',
        sec7_title: '七、 針對未成年保護與 COPPA 兒童隱私合規聲明',
        sec7_desc: '我們嚴格遵守美國兒童線上隱私保護法案 (COPPA) 規範。本站不以 13 歲以下兒童作為服務或定向推廣對象，亦絕不主動收集、保存其個人信息。如果您作為家長發現您的孩子在本站快取了個人偏好並有安全疑慮，請隨時聯繫站長，我們將盡最大努力協助配合清理。',
        sec8_title: '八、 Cookie 管理與個人數據控制權',
        sec8_desc: '您對自己的隱私數據擁有完全的自主控制權。您可以通過瀏覽器設置隨時攔截、拒絕或刪除 Cookie，通過訪問 Google 廣告中心停用個性化廣告，並隨時通過清除瀏覽器快取數據抹除本站所有的本地歷史記錄。',
      },
      terms: {
        title: '免責與服務條款 (Terms & Disclaimer)',
        updated: '更新日期: 2026年5月20日',
        notice: '重要聲明：',
        notice_body: 'ANANTADB.COM 是一個專門為《Ananta》（代號：無限 / Project Mugen 及網易官方關聯企劃）玩家群體建立的非官方、非營利性同人資料庫網站。本站與遊戲原開發商、運營商（網易網之易/NetEase Games）及任何關聯子公司無任何官方合作或從屬關係。',
        sec1_title: '一、 非官方同人性質聲明',
        sec2_title: '二、 版權及遊戲素材歸屬',
        sec2_desc1: '1. 本站展示的所有遊戲圖像、原畫、三維立繪素材、文本背景故事、角色基本屬性、註冊商標名稱、遊戲標誌標識及相關智慧財產權，均歸原版權所有方或遊戲開發商/原設計畫師所有。',
        sec2_desc2: '2. 本站對於上述素材僅在「合理使用（Fair Use）」條款及同人創作規範框架內進行整理、收錄與教學研究使用。如果版權擁有方認為某些素材引發了侵權疑慮，請隨時聯繫我們，我們將第一時間下架或修改相關內容。',
        sec3_title: '三、 數據準確性免責說明',
        sec3_desc1: '1. 本站發布的內容包含：官方公開檔案、官方測試公開資訊、理論攻略及推斷預設等。',
        sec3_desc2: '2. 我們不保證所有資料庫欄位及前瞻攻略在遊戲未來正式公測或新版本上線時與官方數據100%一致。請玩家以遊戲用戶端內的實際版本更新說明為准。因參考本站策略、裝備或流派推薦所產生的數據損耗或決策，本站不承擔任何法律連帶賠償責任。',
        sec4_title: '四、 安全健康遊戲提示',
        sec4_desc: '請支持合法官方渠道。不要利用任何不正當的外掛輔助破壞《Ananta》或其他同人交互工具，共同營造綠色健康的交流網路環境。',
      },
      about: {
        title: '關於我們與聯繫方式 (About & Contact)',
        subtitle: '讓有溫度的創作，連接Nova City的每一個人',
        body1: '你好！我是 ANANTADB.COM 的獨立站長。和所有期待《Ananta》的小夥伴一樣，我被它精美的都市二次元畫風、飛簷走壁的流暢跑酷和精美的機車追蹤機制深深吸引。',
        body2: '本站建立的初衷是方便全球玩家，尤其是無阻礙的多語言切換，向大家展示最新的角色檔案、裝備對比武器攻略等。站內的每一次代碼編輯、每一條數據核對均由我個人在工作之餘獨立完成。',
        body3: '本站是一個有真實人情味、積極更新維護、致力於服務玩家長線專案。我們將隨著《Ananta》每一次內測及未來公測持續保持資料庫迭代，提供更高品質的計算工具與玩法推薦！',
        creator: '站長 / Creator',
        creator_sub: 'Independent Developer',
        contact_title: '五、 聯繫我們與需求建議溝通',
        contact_desc: '如果您發現站內的角色數值、地圖名稱有誤；如果您需提交版權整改移除，請直接通過以下郵箱建立聯繫：',
        email_label: '站長直達郵箱 (Direct Email)',
        note: '* 我們承諾在收到您的建議反饋或整改合規郵件後，會在 24-48 小時內為您回復協助。',
      },
    },
    JP: {
      back: 'データベースに戻る',
      tabs: {
        privacy: 'プライバシーポリシー',
        terms: '免責事項・利用規約',
        about: '運営者について・連絡先',
      },
      privacy: {
        title: 'プライバシーポリシー (Privacy Policy)',
        updated: '改定日: 2026年5月20日',
        p1: 'ANANTADB.COM（以下「当サイト」）へお越しいただきありがとうございます。当サイトは、お客様のプライバシーを重視しており、当サイトの各機能を利用する際にお客様のデータがどのように取り扱われるかを説明します。',
        sec1_title: '一、 データ収集とローカルストレージ (LocalStorage/SessionStorage)',
        sec1_desc1: '1. 当サイトは、キャラクターデータベース、装備・武器比較、スタミナ計算機、シリアルコードの引き換え履歴などの機能を提供しています。',
        sec1_desc2: '2. お客様の設定（引き換え済みのコード、お気に入りキャラクター、最近比較した武器システムなど）を保存するため、ブラウザ標準の LocalStorage（ローカルストレージ） テクノロジーを使用しています。',
        sec1_desc3: '3. 当サイトが、これらのローカルデータを外部のクラウドサーバー等に送信・収集することは一切ありません。データはお使いのブラウザ内のみに保持され、ブラウザのキャッシュやデータを削除することで、いつでも消去できます。',
        sec2_title: '二、 サードパーティサービスと Cookie について',
        sec2_intro: 'サーバ維持費、高帯域幅の運用資金などを補うため、第三者による分析ツールおよび広告サービスを導入する場合があります。',
        sec2_b1_title: 'Google AdSense：',
        sec2_b1_desc: '当サイトでは広告配信のためにGoogle AdSense等を利用する場合があります。Googleは、Cookieを使用して利用者が過去に当サイトや他のウェブサイトにアクセスした際の情報に基づいて適切な広告を表示します。',
        sec2_b2_desc: '利用者は、Googleの広告設定でパーソナライズ広告を無効にできます。または、ブラウザの設定でCookieを無効にすることも可能です。',
        sec2_b3_title: 'Google Analytics（アクセス解析）：',
        sec2_b3_desc: '当サイトでは、アクセスの傾向を分析するためにGoogle Analyticsを導入する場合があります。Googleは匿名化されたトラフィックデータを収集しますが、個人を特定する情報は含まれません。',
        sec3_title: '三、 データの安全保護',
        sec3_desc: '全ページで HTTPS 暗号化通信プロトコル を導入しています。これにより、データのやり取りが第三者に盗聴・改ざんされるのを防ぎ、安全な閲覧環境を提供します。',
        sec4_title: '四、 プライバシーポリシーの更新',
        sec4_desc: '当サイトは、サービス内容の拡充や広告掲載ポリシー、法的環境の変化に伴い、本方針をいつでも更新する権利を留保します。最新情報は、適宜このページでご確認ください。',
        sec5_title: '五、 欧州 GDPR への準拠およびユーザーの権利',
        sec5_desc: 'GDPRに基づき、欧州連合（EU）の居住者は、自己の個人データに関して次の権利を有します。(1) ブラウザにキャッシュされたデータへのアクセス、訂正、または削除の請求。(2) 匿名化されたアクセス解析や広告追跡に対する制限または異議申し立て。これらの権利を行使するには、ブラウザのキャッシュおよびLocalStorageをクリアするか、Googleの「広告設定」を変更してください。',
        sec6_title: '六、 カリフォルニア州消費者プライバシー法 (CCPA) への準拠',
        sec6_desc: 'CCPAに基づき、カリフォルニア州の居住者は、自己の情報が収集・使用されているかを知る権利、その情報の削除を要求する権利、および個人情報の「販売」を拒否する権利を有します。当サイトは、いかなる個人情報も販売または第三者に譲渡しません。すべての構成は、クライアントのローカルブラウザ内で自己完結しています。Network Advertising Initiative (NAI) のオプトアウトページから、サードパーティのクッキーによる広告追跡を無効化できます。',
        sec7_title: '七、 未成年保護および COPPA への準拠',
        sec7_desc: '当サイトは、米国の児童オンラインプライバシー保護法（COPPA）を厳格に遵守します。13歳未満の児童から意図的に個人情報を収集することはなく、13歳未満の児童をターゲットとしたサービスやコンテンツは提供していません。誤ってデータが蓄積されていると思われる場合は、お気軽にお問い合わせください。',
        sec8_title: '八、 クッキー（Cookie）の管理とオプトアウトの方法',
        sec8_desc: 'ユーザーは自身の個人データを完全に制御する権利を持っています。ブラウザの設定からCookieをブロックまたは削除できるほか、Googleの「マイ広告センター」にて広告パーソナライズを無効にできます。また、ブラウザ履歴およびキャッシュの消去により、当サイト内の全ての設定をいつでも完全にリセット可能です。',
      },
      terms: {
        title: '免責事項と利用規約 (Terms & Disclaimer)',
        updated: '改定日: 2026年5月20日',
        notice: '重要なお知らせ：',
        notice_body: 'ANANTADB.COM は、『Ananta』（旧称：Project Mugen / 代号：無限大、およびNetEase Gamesの関連企画）のプレイヤーコミュニティのために構築された非公式・非営利のファンデータベースサイトです。原作開発会社、運営会社（NetEase Games）およびその子会社とは一切関係ありません。',
        sec1_title: '一、 非公式ファンプロジェクトの趣旨',
        sec2_title: '二、 著作権およびゲーム素材の帰属',
        sec2_desc1: '1. 当サイトに掲載されているすべてのゲーム画像、原画、3Dモデル、キャラクター設定、ゲームロゴ、登録商標、その他一切の知的財産権は、ゲーム開発会社、運営元（NetEase Games）または原著作者に帰属します。',
        sec2_desc2: '2. 当サイトは、これらの素材をファンガイドの補助ツールとしての「フェアユース（合理的使用）」の枠組み内で引用・紹介・研究目的にて使用しています。権利を所有する皆様が、権利侵害などを発見され修正または削除を求める場合は、いつでもご連絡ください。確認後、速やかに対応いたします。',
        sec3_title: '三、 情報の正確性および免責',
        sec3_desc1: '1. 当サイトに掲載している情報は、一部公式発表、ベータテスト（CBT）データ、検証データ、コミュニティの分析に基づいています。',
        sec3_desc2: '2. 正式サービス開始時やアップデート後の数値データが当サイトの内容と完全に一致することを保証いたしません。実際のステータス等はゲームクライアントに準拠してください。当サイトの攻略情報、お勧め装備等の引用により発生した損失やトラブルについて、当サイトは一切の法的連帯責任を負いません。',
        sec4_title: '四、 健康的なゲームプレイの推奨',
        sec4_desc: 'プレイヤーの皆様はぜひ公式リリース版をサポートし、チートや不正ツールを使用せず、健全なゲームコミュニティの維持にご協力ください。',
      },
      about: {
        title: '運営者について・連絡先 (About & Contact)',
        subtitle: '温かみのある創作で、新星（Nova City）をすべての旅人とつなぐ',
        body1: 'はじめまして！ANANTADB.COM の運営者（管理人）です。私も皆様と同様に、『Ananta』の美しいサイバーパンク都市アニメ調デザイン、ビルを駆け上る爽快なアクロバット、そしてスリリングなバイクチェイスに魅了され、このゲームを楽しみに待っています。',
        body2: '当サイトを立ち上げた主な動機は、世界中のプレイヤーが使いやすい多言語データベース（特に快適な中英日韓の切り替え）を通じて、最新キャラクター情報や装備比較などを体験できるようにするためです。当サイトの開発・コーディングからデータの検証に至るまで、すべてのプロジェクト管理は個人の趣味の範囲で、日々の余暇時間に対処されています。',
        body3: '当サイトは、プレイヤーの皆様のために構築された、活発にアップデートを継続する暖かみのある長期的な愛好家プロジェクトです！今後の内測テスト、それに続くグローバル正式ローンチに向けて継続的に機能を追加してまいります。',
        creator: '管理人 / Creator',
        creator_sub: 'Independent Developer',
        contact_title: 'お問い合わせ先',
        contact_desc: '万が一、ページ内の不正確な数値、翻訳ミス、または誤ったマップ・名称等を見つけた場合、あるいは著作権侵害の修正・削除のご依頼等は、下記メールアドレスまでご連絡をお願いいたします。',
        email_label: '直通メール (Direct Email)',
        note: '* ご提案もしくは合規依頼のメールをいただき次第、通常 24〜48 時間以内に折り返しまたは即座のご対応をさせていただきます。',
      },
    },
    KR: {
      back: '데이터베이스로 돌아가기',
      tabs: {
        privacy: '개인정보처리방침',
        terms: '서비스 및 면책조항',
        about: '소개 및 연락처',
      },
      privacy: {
        title: '개인정보처리방침 (Privacy Policy)',
        updated: '업데이트 날짜: 2026년 5월 20일',
        p1: 'ANANTADB.COM(이하 "당사" 또는 "본 사이트")을 방문해 주셔서 감사합니다. 당사는 귀하의 개인정보를 매우 소중히 여기며, 본 정책을 통해 귀하가 본 사이트의 도구 및 기능을 이용할 때 데이터가 어떻게 취급되는지 안내드립니다.',
        sec1_title: '1. 데이터 수집 및 로컬 스토리지 (LocalStorage/SessionStorage)',
        sec1_desc1: '1. 본 사이트는 캐릭터 데이터, 장비 지표 비교, 스태미나 계산기, 쿠폰/교환 코드 사용 기록 기능 등을 제공합니다.',
        sec1_desc2: '2. 사용자의 브라우저 설정을 지속적으로 유지하기 위해(예: 사용한 코드 표시, 즐겨찾기 캐릭터 등록 등) 브라우저 기본의 LocalStorage(로컬 스토리지) 기술을 활용하여 데이터를 브라우저 내에 저장합니다.',
        sec1_desc3: '3. 당사는 온라인 서버로 이러한 데이터나 비공개 기록들을 수집 또는 전송하지 않으며, 전적으로 귀하의 로컬 기기 내에서 처리됩니다. 브라우저 쿠키 또는 캐시를 정리해 언제든 모든 흔적을 깨끗이 지울 수 있습니다.',
        sec2_title: '2. 타사 서비스 및 쿠키(Cookie) 규정',
        sec2_intro: '서버 대역폭 부하 분담, 플랫폼 운영 안정화 등을 위해 타사의 광고 플랫폼 및 분석 플랫폼을 활용할 수 있습니다.',
        sec2_b1_title: 'Google AdSense:',
        sec2_b1_desc: 'Google은 타사 광고 대행사로서 당사의 웹사이트에 퍼스널라이즈 광고를 배치할 수 있습니다. 광고 송출 목적 하에, 브라우저의 쿠키를 수집하여 사이트 방문 통계를 바탕으로 타겟 맞춤 광고를 제안합니다.',
        sec2_b2_desc: '사용자는 언제든 구글 광고 및 개인정보 보호정책 설정을 통해 이러한 표적 광고를 수신 거부하거나 브라우저 쿠키 사용을 중지시킬 수 있습니다.',
        sec2_b3_title: 'Google Analytics（액세스 분석）：',
        sec2_b3_desc: '본 웹사이트 분석을 위해 IP나 접속 환경 등의 일반 로그 데이터를 트래킹할 수 있습니다. 수집된 로그는 정량적인 품질개선 목적 외 유출 통로가 개방되어 있지 않으며 직접 개인 식별은 불가합니다.',
        sec3_title: '3. 데이터 보안',
        sec3_desc: '당사는 데이터 통신을 보호하기 위해 전 구간 HTTPS 암호화 프로토콜을 적용하였습니다. 제3자에 의한 도중에 탈취될 우려로부터 전 영역을 방어합니다.',
        sec4_title: '4. 변경에 관한 공지',
        sec4_desc: '개인정보 처리방침은 웹의 규정이나 제휴사의 보충 규율에 따라 재조정될 수 있습니다. 정기적으로 내용을 고지해주시는 것을 추천해 드립니다.',
        sec5_title: '5. 유럽 연합 GDPR 개인정보 보호 권리 장전',
        sec5_desc: '유럽 GDPR 법률에 따라 EU 거주자는 자사 기기 환경에서 생성된 로컬 데이터에 대해 다음과 같은 완전한 권리를 갖습니다: (1) 로컬 스토리지 데이터에 대한 접근 및 정정, 영구 삭제 요청. (2) 타사 쿠키 분석 도구의 수집 제한 및 반대. 브라우저의 설정 메뉴를 통해 언제든 데이터 처리를 즉시 차단할 수 있습니다.',
        sec6_title: '6. 미국 캘리포니아 CCPA 준수 고지',
        sec6_desc: '미국 캘리포니아 CCPA 가이드에 따라 사용자는 자신의 데이터가 전송, 가공, 판매되는지 투명하게 알 권리를 보장받습니다. ANANTADB.COM은 개인 정보를 판매하거나 임대하지 않으며, 모든 장치 설정은 유저 본인의 브라우저 내에만 정체되어 있습니다. NAI 오프트아웃 사이트를 통해 타사의 맞춤 광고를 일괄 통제할 수 있습니다.',
        sec7_title: '7. COPPA 아동용 서비스 제한 사항',
        sec7_desc: '당사는 미국 COPPA 아동 온라인 보호법을 준수합니다. 본 웹사이트는 만 13세 미만 아동의 데이터를 고의로 수집하거나 광고 대상자로 표적하지 않습니다. 보호자 분께서 정보 누출 등이 염려되시는 경우, 자사의 이메일 주소로 접수해주시면 확인 즉시 캐싱 기록을 정리하도록 지침을 안내해 드립니다.',
        sec8_title: '8. 쿠키 및 캐시 제어권 안내',
        sec8_desc: '귀하는 본 사이트에서 수집되는 데이터에 대해 영구한 제어권을 보유합니다. 브라우저 환경 설정에서 쿠키 거부를 지정하거나 Google 공식 광고 설정을 조정하여 기호에 맞는 서핑 환경을 구성할 수 있습니다.',
      },
      terms: {
        title: '서비스 및 면책조항 (Terms & Disclaimer)',
        updated: '업데이트 날짜: 2026년 5월 20일',
        notice: '중요 공지사항:',
        notice_body: 'ANANTADB.COM은 《아난타》(프로젝트 무한 / Project Mugen 및 NetEase Games 사의 연관 전개 프로젝트) 유저분들을 위한 비공식 및 비영리 팬 동인 웹사이트입니다. 게임 개발 본사 및 해당 관계 법인(NetEase Games 및 배급사)과는 아무런 고용 관계 또는 대리점 파트너십을 갖지 않고 있음을 명확히 합니다.',
        sec1_title: '1. 비공식 동인 연합 성명',
        sec2_title: '2. 지적재산권과 이미지 등 소재 귀속',
        sec2_desc1: '1. 본 사이트에 표시되는 모든 게임 이미지, 캐릭터 일러스트 및 3D 그래픽 모델, 세부 보조 데이터, 명패, 등록 상표 명 등은 전적으로 게임 개발 본사인 NetEase Games 또는 해당 크리에이터 측에 소유권이 귀속됩니다.',
        sec2_desc2: '2. 당사는 본 자원들을 비공식 유저 정보 가이드라인 제작을 위한 \'공정 이용(Fair Use)\' 선상에서 비영리·비상업 목적하에 수집 가공하고 있습니다. 만일 정합 권리자분께서 침해 요소에 대해 피드백 및 삭제 청구를 표하실 시, 접수 수 시간 이내에 조치를 완료할 것임을 말씀드립니다.',
        sec3_title: '3. 통계 오차 및 한계',
        sec3_desc1: '1. 당사가 수집하는 정보들은 공개된 테스팅 가용 정보, 유저 통계, 베타테스트(CBT) 정보들을 배경으로 삼습니다.',
        sec3_desc2: '2. 향후 정식 글로벌 발매 릴리즈 시 개발사의 미세 밸런싱 패치로 달라질 수 있으므로 절대 자사의 사양이 100% 공식과 일치한다고 단언해 드릴 수 없습니다. 자문 정보 혹은 오차 활용으로 발생한 손실 등에 대해선 법적 분쟁 배상 책임을 지지 않음을 미리 알립니다.',
        sec4_title: '4. 건전한 이용 문화',
        sec4_desc: '어떠한 경우에도 외부 비인가 변조 툴이나 핵 프로그램을 유포·이용하는 것을 지양하여 쾌적한 공유 네트워크 교류 공간을 유지하는 데 동참해 주시기를 바랍니다.',
      },
      about: {
        title: '소개 및 연락처 (About & Contact)',
        subtitle: '유저와 노바 시티(Nova City)를 잇는 정성스러운 가이드 서비스',
        body1: '안녕하세요! ANANTADB.COM을 설계하고 기획한 개인 개발자이자 웹마스터입니다. 여러분과 마찬가지로 《아난타》(프로젝트 무한)의 감각적인 도시 라이프스타일, 빌딩 정복 파쿠르 액션, 스피디한 바이크 질주 시퀀스에 매료되어 이번 발매를 손꼽아 갈망하고 있습니다.',
        body2: '이 웹서비스는 글로벌 친구들을 위해, 특히 언어의 어떠한 전환 지연 장애 없이 다국어 전환 지점을 탑재해 편히 탐색하도록 개인 여유 시간에 제작하고 있습니다. 이 모든 로직 및 검산과 데이터들은 순수 본인의 자발적인 노력으로 갱신하는 산물입니다.',
        body3: '이 데이터베이스는 실제 관리자가 밀착 케어하며 정기적인 라이프 사이클로 성실히 갱신해 나가는 지속 관리형 동인 프로젝트입니다. 테스트가 전개되고 추후 정식 가동될 때까지 도구 편의성과 인프라들을 업그레이드 하겠습니다.',
        creator: '기획 및 운영자 / Creator',
        creator_sub: 'Independent Developer',
        contact_title: '연락 안내 및 메일함',
        contact_desc: '만약 오타나 누락 데이터, 혹은 저작권 시정 교체나 기술 공동 기획 아이디어가 필요한 상황에 놓인 경우 우려 없이 자사 메일함으로 노크 주시길 바랍니다.',
        email_label: '직통 이메일 (Direct Email)',
        note: '* 모든 건의 사항이나 지적 접수 사항들은 보통 24~48시간 이내에 보정 보완 회신을 약속드립니다.',
      },
    },
    EN: {
      back: 'Back to Database',
      tabs: {
        privacy: 'Privacy Policy',
        terms: 'Terms & Disclaimer',
        about: 'About & Contact',
      },
      privacy: {
        title: 'PRIVACY POLICY',
        updated: 'Effective Date: May 20, 2026',
        p1: 'Welcome to ANANTADB.COM ("we", "our", or "the site"). We are deeply committed to protecting your privacy. This Privacy Policy informs you how we manage and treat data when you browse and use our tools and guides.',
        sec1_title: '1. Information Collection & LocalStorage',
        sec1_desc1: '1. We provide interactive tools such as character databases, equipment stat comparisons, stamina generators, and promo code redemption status logs.',
        sec1_desc2: '2. To remember your settings (such as codes you redeemed, favorited teammates, and compared equipment states), this site holds values inside your local browser storage using LocalStorage.',
        sec1_desc3: '3. We never trace, upload, or transmit these private offline caches to external central databases or servers. Data resides in your browser and can be instantly cleared by purging your browser cookies and caches.',
        sec2_title: '2. Cookies and Third-Party Advertising',
        sec2_intro: 'To fund our high-speed server bandwidth, worldwide CDNs, and operational costs, we may implement third-party analysis and advertising solutions:',
        sec2_b1_title: 'Google AdSense:',
        sec2_b1_desc: 'Google, as a third-party vendor, uses cookies to serve ads on our site. Google\'s use of advertising cookies enables it and its partners to serve ads to our users based on their visit to our site and/or other sites on the Internet.',
        sec2_b2_desc: 'Users may opt-out of personalized advertising by visiting Google\'s official Ad settings pages or by manually setting cookie preferences inside their browser.',
        sec2_b3_title: 'Analytics & Tracking Logs:',
        sec2_b3_desc: 'We may enforce Google Analytics to analyze global audience flows, browser resolutions, and platform navigation metrics. This dataset is anonymous and does not target individual identities.',
        sec3_title: '3. Transmission Security',
        sec3_desc: 'This application enforces secure HTTPS across all channels, guaranteeing your visual sessions are fully shielded against malicious man-in-the-middle snooping.',
        sec4_title: '4. Dynamic Refactoring',
        sec4_desc: 'We reserve the right to revise this document at any turn to comply with fresh web standards or advertising directives.',
        sec5_title: '5. General Data Protection Regulation (GDPR) compliance',
        sec5_desc: 'Under GDPR, EU residents hold absolute rights regarding their data: (1) Right to access, rectify, or erase your cached configuration; (2) Right to restrict or object to the anonymous analytical tracking. To exercise these rights, clear your browser Cache & LocalStorage, or adjust your Google Ad Settings.',
        sec6_title: '6. California Consumer Privacy Act (CCPA) compliance',
        sec6_desc: 'Under CCPA, California residents are entitled to know what data is cached, request deletion, and opt-out of the sale of personal information. ANANTADB.COM does not sell or distribute personal data. All data is processed on the client\'s end. You can opt-out of third-party cookie targeting by visiting the Network Advertising Initiative opt-out page.',
        sec7_title: '7. Children\'s Online Privacy Protection Act (COPPA) compliance',
        sec7_desc: 'We strictly comply with COPPA requirements. We do not knowingly target or collect any personal information from children under the age of 13. If you believe a child has submitted data, please contact us immediately to have it purged.',
        sec8_title: '8. Cookie Policy & How to Control Your Data',
        sec8_desc: 'You have complete control over your data. You can block or delete cookies through your browser settings, disable personalized ads via Google\'s official Ad settings, and completely wipe all site preferences by clearing browser cookies and site storage.',
      },
      terms: {
        title: 'TERMS OF SERVICE & DISCLAIMER',
        updated: 'Effective Date: May 20, 2026',
        notice: 'IMPORTANT NOTICE:',
        notice_body: 'ANANTADB.COM is an unofficial, non-profit, educational fan-made database and companion website dedicated to the upcoming game "Ananta" (developed/published by NetEase Games). We are in no way affiliated, associated, authorized, endorsed by, or officially connected with NetEase Games or any of its subsidiaries.',
        sec1_title: '1. Unofficial Fan Alliance Statement',
        sec2_title: '2. Intellectual Property & Fair Use',
        sec2_desc1: '1. All in-game assets, character artwork, profiles, statistical descriptions, and unregistered trademark logos associated with "Ananta" are the sole property of NetEase Games or original artists.',
        sec2_desc2: '2. This content is curated on our platform under "Fair Use" principles for educational, informational, and community support purposes. If you are a copyright holder requesting take-down or correction, please email us directly.',
        sec3_title: '3. Database Limits & Precautions',
        sec3_desc1: '1. We aggregate public testing previews, official trailers, open technical parameters, and community assessments.',
        sec3_desc2: '2. We cannot promise 100% calibration with the eventual public game client on global launch. Always treat statistics as open estimates. We do not assume any legal liability for gameplay results caused by choosing tactics here.',
        sec4_title: '4. Healthy Gaming',
        sec4_desc: 'Please support official platforms. Do not introduce unauthorized hacks or performance mods, in order to protect our clean gaming space.',
      },
      about: {
        title: 'ABOUT & CONTACT DETAILS',
        subtitle: 'A warm fan companion database built with love for Nova City',
        body1: 'Hello! I am the creator and webmaster behind ANANTADB.COM. Like many other players waiting for "Ananta" (Project Mugen), I am thoroughly fascinated by its high-flying city traversal, spectacular motor stunts, and cyber anime aesthetics.',
        body2: 'This fan project is engineered from scratch. The mission is to offer gamers around the globe an intuitive, lightweight, and modern database workspace displaying weapon calculations, characters lore database, and events calendars without any translation delay.',
        body3: 'This database is actively maintained, curated, and optimized by an active human creator in their personal spare hours. We will keep updating this index as CBT and global release plans proceed!',
        creator: 'Creator',
        creator_sub: 'Ananta Devotee',
        contact_title: 'Feedback Box',
        contact_desc: 'If you spot wrong metrics index, broken images, spelling typos, or would like to submit a copyright notice or layout suggestion, please reach us:',
        email_label: 'Contact Email',
        note: '* We pledge to read and reply to all constructive feedback within 24 to 48 hours.',
      },
    },
    DE: {
      back: 'Zurück zur Datenbank',
      tabs: {
        privacy: 'Datenschutz',
        terms: 'Nutzungsbedingungen & Haftungsausschluss',
        about: 'Über uns & Kontakt',
      },
      privacy: {
        title: 'DATENSCHUTZERKLÄRUNG',
        updated: 'Inkrafttreten: 20. Mai 2026',
        p1: 'Willkommen bei ANANTADB.COM ("wir", "uns" oder "die Website"). Wir nehmen den Schutz Ihrer Privatsphäre sehr ernst. Diese Datenschutzerklärung informiert Sie darüber, wie wir Daten verarbeiten, wenn Sie unsere Tools und Anleitungen nutzen.',
        sec1_title: '1. Datenerhebung & LocalStorage',
        sec1_desc1: '1. Wir bieten interaktive Tools wie Charakterdatenbanken, Ausrüstungs-Statistikvergleiche, Ausdauerrechner und den Einlösestatus von Promo-Codes.',
        sec1_desc2: '2. Um Ihre Einstellungen (wie bereits eingelöste Codes, favorisierte Charaktere und verglichere Ausrüstungszustände) zu speichern, nutzt diese Website LocalStorage in Ihrem lokalen Browser.',
        sec1_desc3: '3. Wir erfassen, übertragen oder speichern diese privaten Offline-Inhalte niemals auf externen Servern. Die Daten verbleiben auf Ihrem Gerät und können jederzeit durch das Löschen von Browser-Cookies und -Caches entfernt werden.',
        sec2_title: '2. Cookies und Drittanbieter-Anzeigen',
        sec2_intro: 'Zur Finanzierung unserer Serverbandbreite, CDNs und Betriebskosten nutzen wir Analyse- und Werbelösungen von Drittanbietern:',
        sec2_b1_title: 'Google AdSense:',
        sec2_b1_desc: 'Google verwendet als Drittanbieter Cookies zur Schaltung von Anzeigen auf unserer Website. Die Verwendung von Anzeigen-Cookies ermöglicht es Google und seinen Partnern, Anzeigen basierend auf Ihren Besuchen auf dieser oder anderen Websites im Internet zu schalten.',
        sec2_b2_desc: 'Sie können die personalisierte Werbung in den Einstellungen für Google-Werbung deaktivieren oder Ihre Cookie-Präferenzen im Browser anpassen.',
        sec2_b3_title: 'Analytik & Tracking-Protokolle:',
        sec2_b3_desc: 'Wir nutzen Google Analytics, um Besucherströme, Auflösungen und Navigationsmetriken anonymisiert zu analysieren. Diese Daten lassen keinen Rückschluss auf Ihre Person zu.',
        sec3_title: '3. Übertragungssicherheit',
        sec3_desc: 'Diese Anwendung erzwingt sicheres HTTPS auf allen Kanälen. Dadurch ist Ihre Verbindung vollständig gegen unbefugte Zugriffe geschützt.',
        sec4_title: '4. Änderungen der Richtlinie',
        sec4_desc: 'Wir behalten uns das Recht vor, diese Datenschutzerklärung anzupassen, um neuen Standards oder rechtlichen Vorgaben zu entsprechen.',
        sec5_title: '5. Einhaltung der Datenschutz-Grundverordnung (DSGVO)',
        sec5_desc: 'Gemäß DSGVO haben EU-Bürger das Recht auf Auskunft, Berichtigung, Sperrung oder Löschung ihrer lokalen Browserdaten sowie das Recht, der anonymen Analyse- und Werbeverfolgung zu widersprechen. Sie können diese Rechte jederzeit durch Löschen der Browserdaten oder Anpassung der Google-Werbeeinstellungen ausüben.',
        sec6_title: '6. Einhaltung des California Consumer Privacy Act (CCPA)',
        sec6_desc: 'Einwohner Kaliforniens haben das Recht zu erfahren, welche Daten erfasst werden, die Löschung zu verlangen und dem Verkauf persönlicher Daten zu widersprechen. ANANTADB.COM verkauft keine persönlichen Daten. Die Steuerung der Drittanbieter-Werbung ist über die NAI-Opt-out-Seite möglich.',
        sec7_title: '7. Jugendschutz und Einhaltung des COPPA',
        sec7_desc: 'Wir halten uns strikt an die Richtlinien des Children\'s Online Privacy Protection Act (COPPA). Wir erfassen wissentlich keine Daten von Kindern unter 13 Jahren und richten unsere Website nicht an diese Altersgruppe.',
        sec8_title: '8. Cookie-Richtlinie und Datenverwaltung',
        sec8_desc: 'Sie behalten die volle Kontrolle über Ihre Daten. Sie können Cookies in den Browsereinstellungen blockieren, personalisierte Werbung in den Google-Anzeigeneinstellungen deaktivieren und Ihren lokalen Speicher jederzeit löschen.',
      },
      terms: {
        title: 'NUTZUNGSBEDINGUNGEN & HAFTUNGSAUSSCHLUSS',
        updated: 'Inkrafttreten: 20. Mai 2026',
        notice: 'WICHTIGER HINWEIS:',
        notice_body: 'ANANTADB.COM ist eine inoffizielle, gemeinnützige, fan-erstellte Datenbank und Begleiter-Website für das kommende Spiel "Ananta" (entwickelt und veröffentlicht von NetEase Games). Wir stehen in keiner Verbindung zu NetEase Games oder deren Tochtergesellschaften.',
        sec1_title: '1. Inoffizielle Fan-Allianz',
        sec2_title: '2. Geistiges Eigentum & Fair Use',
        sec2_desc1: '1. Alle Assets, Charakter-Artworks, Profile, Statistiken und Logos im Zusammenhang mit "Ananta" sind das alleinige Eigentum von NetEase Games oder den ursprünglichen Schöpfern.',
        sec2_desc2: '2. Diese Inhalte werden auf unserer Plattform im Rahmen des "Fair Use"-Prinzips für Bildungs- und Informationszwecke bereitgestellt. Wenn Sie Urheberrechtsinhaber sind und eine Entfernung wünschen, kontaktieren Sie uns bitte per E-Mail.',
        sec3_title: '3. Datenbankgrenzen und Vorsichtsmaßnahmen',
        sec3_desc1: '1. Wir tragen Informationen aus öffentlichen Tests, offizielle Parameter und Empfehlungen aus der Community zusammen.',
        sec3_desc2: '2. Wir können keine 100-prozentige Übereinstimmung mit dem finalen Spiel garantieren. Betrachten Sie alle Statistiken als Schätzwerte. Wir übernehmen keine Haftung für Spielergebnisse, die auf hier getroffenen Auswahlen basieren.',
        sec4_title: '4. Verantwortungsvolles Spielen',
        sec4_desc: 'Bitte unterstützen Sie die offizielle Plattform des Herstellers. Nutzen Sie keine unautorisierten Hacks oder Mods, um eine faire Spielumgebung für alle zu bewahren.',
      },
      about: {
        title: 'ÜBER UNS & KONTAKT',
        subtitle: 'Eine liebevoll erstellte Fan-Datenbank für Nova City',
        body1: 'Hallo! Ich bin der Entwickler und Webmaster von ANANTADB.COM. Wie viele andere Spieler, die sehnsüchtig auf "Ananta" (Project Mugen) warten, bin ich von den rasanten Fortbewegungsmöglichkeiten, Motorrad-Stunts und dem großartigen Cyber-Anime-Stil fasziniert.',
        body2: 'Dieses Fan-Projekt wurde von Grund auf selbst entwickelt. Mein Ziel ist es, Spielern weltweit eine übersichtliche und moderne Datenbank zu bieten – inklusive Ausrüstungsrechneren, Charakter-Guides und Event-Kalendern ohne Verzögerungen.',
        body3: 'Diese Datenbank wird in meiner persönlichen Freizeit aktiv gepflegt und optimiert. Ich werde diesen Dienst kontinuierlich erweitern, sobald neue Testphasen oder Veröffentlichungspläne bekannt werden!',
        creator: 'Urheber',
        creator_sub: 'Ananta-Enthusiast',
        contact_title: 'Feedback-Box',
        contact_desc: 'Wenn Sie Fehler in den Werten, fehlerhafte Bilder, Tippfehler entdecken oder einen Urheberrechtshinweis übermitteln möchten, erreichen Sie uns hier:',
        email_label: 'Kontakt-E-Mail',
        note: '* Ich bemühe mich, jedes konstruktive Feedback innerhalb von 24 bis 48 Stunden zu beantworten.',
      },
    },
    FR: {
      back: 'Retour à la base de données',
      tabs: {
        privacy: 'Confidentialité',
        terms: 'Conditions & Clause de non-responsabilité',
        about: 'À propos & Contact',
      },
      privacy: {
        title: 'POLITIQUE DE CONFIDENTIALITÉ',
        updated: 'Date d\'effet : 20 mai 2026',
        p1: 'Bienvenue sur ANANTADB.COM ("nous", "notre" ou "le site"). Nous accordons une grande importance à la protection de votre vie privée. Cette politique vous explique comment nous gérons vos données lorsque vous utilisez nos outils.',
        sec1_title: '1. Collecte de données & LocalStorage',
        sec1_desc1: '1. Nous proposons des outils interactifs tels que des bases de données de personnages, des comparateurs d\'équipements et le suivi de codes de réduction.',
        sec1_desc2: '2. Pour enregistrer vos choix (comme vos favoris et les codes déjà utilisés), ce site stocke des valeurs localement dans votre navigateur via le LocalStorage.',
        sec1_desc3: '3. Nous ne transférons JAMAIS ces données privées vers des serveurs externes. Elles restent sur votre appareil et peuvent être supprimées en vidant vos cookies et le cache de votre navigateur.',
        sec2_title: '2. Cookies et publicités tierces',
        sec2_intro: 'Pour financer nos serveurs et coûts opérationnels, nous pouvons faire appel à des partenaires d\'analyse et de publicité :',
        sec2_b1_title: 'Google AdSense :',
        sec2_b1_desc: 'Google utilise des cookies pour diffuser des annonces adaptées sur notre site. Ces cookies lui permettent, ainsi qu\'à ses partenaires, d\'adapter les publicités en fonction de vos visites.',
        sec2_b2_desc: 'Vous pouvez désactiver la publicité personnalisée dans les paramètres de Google Ads ou configurer la gestion des cookies directement dans votre navigateur.',
        sec2_b3_title: 'Analyses & Statistiques :',
        sec2_b3_desc: 'We use Google Analytics to study anonymously site metrics. Aucune donnée nominative n\'est collectée.',
        sec3_title: '3. Sécurité des transmissions',
        sec3_desc: 'L\'application impose une connexion HTTPS sécurisée sur toutes les pages pour protéger vos sessions de navigation.',
        sec4_title: '4. Modifications de la politique',
        sec4_desc: 'Nous nous réservons le droit de modifier ce document à tout moment afin de nous adapter aux nouvelles normes du web.',
        sec5_title: '5. Conformité au Règlement Général sur la Protection des Données (RGPD)',
        sec5_desc: 'Conformément au RGPD, les résidents de l\'Union Européenne disposent de droits d\'accès, de rectification et d\'effacement de leurs données locales, ainsi que du droit d\'opposition au suivi analytique anonyme. Ces droits s\'exercent en vidant le cache du navigateur ou via les paramètres d\'annonces Google.',
        sec6_title: '6. Conformité à la loi CCPA (Californie)',
        sec6_desc: 'Les résidents californiens peuvent demander l\'accès à leurs données, leur suppression et s\'opposer à leur vente. ANANTADB.COM ne vend aucune information personnelle. Vous pouvez refuser la publicité ciblée via la page de désinscription de la NAI.',
        sec7_title: '7. Protection des mineurs et conformité COPPA',
        sec7_desc: 'Nous respectons scrupuleusement la loi COPPA. Nous ne collectons pas sciemment d\'informations relatives aux enfants de moins de 13 ans. Contactez-nous si vous constatez une collecte involontaire pour suppression.',
        sec8_title: '8. Gestion des Cookies et Contrôle de vos Données',
        sec8_desc: 'Vous contrôlez pleinement vos données de navigation. Vous pouvez bloquer ou effacer les cookies via votre navigateur, refuser les annonces ciblées sur Google Ads, ou réinitialiser le site en vidant votre cache local.',
      },
      terms: {
        title: 'CONDITIONS D\'UTILISATION & CLAUSE DE NON-RESPONSABILITÉ',
        updated: 'Date d\'effet : 20 mai 2026',
        notice: 'NOTE IMPORTANTE :',
        notice_body: 'ANANTADB.COM est une base de données de fans, à but non lucratif et éducatif, dédiée au futur jeu "Ananta" (développé par NetEase Games). Nous ne sommes en aucun cas affiliés ou officiellement associés à NetEase Games.',
        sec1_title: '1. Alliance non officielle de fans',
        sec2_title: '2. Propriété intellectuelle & Fair Use',
        sec2_desc1: '1. Tous les graphismes, profils de personnages, caractéristiques et logos liés à "Ananta" demeurent la propriété exclusive de NetEase Games ou de leurs créateurs.',
        sec2_desc2: '2. Ces contenus sont mis à disposition pour information et entraide de la communauté sous le principe de l\'usage équitable ("Fair Use"). Si vous êtes détenteur de droits et souhaitez un retrait, veuillez nous contacter.',
        sec3_title: '3. Limites des données et précautions',
        sec3_desc1: '1. Nous regroupons des informations de tests publics, des données techniques publiques et des avis de la communauté.',
        sec3_desc2: '2. Nous ne pouvons pas garantir une correspondance totale avec la version finale du jeu lors de sa sortie globale. Utilisez ces informations comme des estimations.',
        sec4_title: '4. Jeu responsable',
        sec4_desc: 'Merci de soutenir le produit officiel. N\'utilisez pas de logiciels de triche afin de préserver un espace de jeu agréable et équitable pour tous.',
      },
      about: {
        title: 'À PROPOS & DEVISE',
        subtitle: 'Un guide chaleureux conçu avec passion pour les explorateurs de Nova City',
        body1: 'Bonjour ! Je suis le créateur et administrateur de ANANTADB.COM. Comme de nombreux joueurs qui attendent "Ananta" (Project Mugen), je suis fasciné par son gameplay urbain dynamique, ses cascades en moto et son style anime futuriste.',
        body2: 'Ce projet a été codé entièrement à la main sur mon temps libre. Mon objectif est d\'offrir aux joueurs du monde entier un espace rapide, épuré et moderne d\'informations.',
        body3: 'Cette base de données est mise à jour et perfectionnée régulièrement afin de proposer le meilleur outil possible à mesure que les phases de test avancent !',
        creator: 'Créateur',
        creator_sub: 'Passionné d\'Ananta',
        contact_title: 'Boîte aux lettres',
        contact_desc: 'Si vous repérez une erreur dans les statistiques, un bug visuel, ou souhaitez proposer une amélioration, n\'hésitez pas à me joindre :',
        email_label: 'Adresse e-mail de contact',
        note: '* Je lis et réponds à tous les retours constructifs sous 24 à 48 heures.',
      },
    },
    IT: {
      back: 'Torna al database',
      tabs: {
        privacy: 'Privacy',
        terms: 'Termini e limitazioni di responsabilità',
        about: 'Chi siamo e contatti',
      },
      privacy: {
        title: 'INFORMATIVA SULLA PRIVACY',
        updated: 'Data di entrata in vigore: 20 maggio 2026',
        p1: 'Benvenuto su ANANTADB.COM ("noi", "nostro" o "il sito"). Ci impegniamo al massimo per proteggere la tua privacy. Questa informativa descrive come gestiamo i dati durante l\'uso delle nostre risorse.',
        sec1_title: '1. Raccolta dati & LocalStorage',
        sec1_desc1: '1. Forniamo strumenti interattivi come database dei personaggi, comparatori di statistiche per l\'equipaggiamento e tracking dei codici riscatto.',
        sec1_desc2: '2. Per memorizzare le tue preferenze locali (come i codici già usati o i tuoi eroi preferiti), questo sito si avvale della memoria locale del browser (LocalStorage).',
        sec1_desc3: '3. Non inviamo o salviamo mai queste informazioni personali su server centrali. I dati rimangono sul tuo browser e possono essere eliminati in qualsiasi momento svuotando cookie e cache.',
        sec2_title: '2. Cookie e pubblicità di terze parti',
        sec2_intro: 'Al fine di finanziare la banda del server, la CDN globale e i costi operativi, potremmo utilizzare servizi di analisi e pubblicità esterni:',
        sec2_b1_title: 'Google AdSense:',
        sec2_b1_desc: 'Google, come fornitore terzo, utilizza i cookie per pubblicare annunci personalizzati sul nostro sito, adatti alle abitudini ed interessi dei visitatori.',
        sec2_b2_desc: 'Gli utenti possono disattivare la personalizzazione degli annunci accedendo alle impostazioni degli annunci Google o tramite le opzioni del proprio browser.',
        sec2_b3_title: 'Statistiche di navigazione:',
        sec2_b3_desc: 'Utilizziamo Google Analytics per valutare l\'audience del sito e le sezioni più visitate in forma del tutto anonima e priva di identificazione personale.',
        sec3_title: '3. Sicurezza delle trasmissioni',
        sec3_desc: 'Tutto il traffico del sito web avviene tramite protocollo crittografato HTTPS sicuro per garantire sessioni protette da eventuali intercettazioni.',
        sec4_title: '4. Modifiche dell\'informativa',
        sec4_desc: 'Ci riserviamo il diritto di aggiornare questo documento per adeguarci a nuovi requisiti tecnici o normativi.',
        sec5_title: '5. Conformità al Regolamento Generale sulla Protezione dei Dati (GDPR)',
        sec5_desc: 'Ai sensi del GDPR, i residenti dell\'Unione Europea hanno il diritto di accesso, rettifica e cancellazione delle proprie impostazioni locali, nonché il diritto di opporsi al tracciamento analitico anonimo. Tali opzioni sono gestibili cancellando la cache del browser o modificando le preferenze Google Ads.',
        sec6_title: '6. Conformità al California Consumer Privacy Act (CCPA)',
        sec6_desc: 'I cittadini della California possono richiedere l\'accesso ai propri dati, la cancellazione e opporsi alla vendita degli stessi. ANANTADB.COM non vende alcuna informazione personale. È possibile disattivare la pubblicità mirata tramite il portale NAI.',
        sec7_title: '7. Tutela dei minori e conformità COPPA',
        sec7_desc: 'Rispettiamo appieno le normative COPPA statunitensi. Non raccogliamo consapevolmente alcuna informazione riguardante minori di 13 anni né indirizziamo la nostra piattaforma a tale pubblico.',
        sec8_title: '8. Gestione dei Cookie e Controllo Utente',
        sec8_desc: 'Conserve il pieno controllo sui tuoi dati. Puoi rifiutare o rimuovere i cookie dalle impostazioni del browser, limitare la personalizzazione degli annunci Google o azzerare il database cancellando la cache locale.',
      },
      terms: {
        title: 'TERMINI DI SERVIZIO & LIMITAZIONE DI RESPONSABILITÀ',
        updated: 'Data di entrata in vigore: 20 maggio 2026',
        notice: 'AVVISO IMPORTANTE:',
        notice_body: 'ANANTADB.COM è un database amatoriale, no-profit ed educativo realizzato da fan e dedicato al futuro videogioco "Ananta" (sviluppato e pubblicato da NetEase Games). Non siamo in alcun modo associati o approvati da NetEase Games.',
        sec1_title: '1. Dichiarazione di indipendenza',
        sec2_title: '2. Proprietà intellettuale & Fair Use',
        sec2_desc1: '1. Tutti i materiali di gioco, illustrazioni dei personaggi, tabelle di dati e marchi associati ad "Ananta" appartengono esclusivamente a NetEase Games o ai rispettivi creatori.',
        sec2_desc2: '2. Tali risorse sono impiegate sotto il principio del "Fair Use" (Uso Leale) per scopi informativi ed educativi a supporto della community di giocatori. Contattateci per qualsiasi richiesta di rimozione.',
        sec3_title: '3. Limitazioni delle informazioni',
        sec3_desc1: '1. Raccogliamo dati provenienti da Beta chiuse, fonti pubbliche aperte e feedback dei giocatori.',
        sec3_desc2: '2. Non possiamo garantire l\'esatto allineamento con le specifiche finali del gioco al lancio globale. Le statistiche sono stime indicative.',
        sec4_title: '4. Correttezza e Fair Play',
        sec4_desc: 'Ti invitiamo a supportare sempre i canali ufficiali del distributore e a non fare uso di modifiche non autorizzate o trucchi.',
      },
      about: {
        title: 'INFO SUL SITO & CONTATTI',
        subtitle: 'Un compagno di viaggio virtuale sviluppato con passione per Nova City',
        body1: 'Ciao! Sono l\'ideatore e amministratore di ANANTADB.COM. Proprio come te, attendo con fervore l\'uscita di "Ananta" (Project Mugen), conquistato dalle spettacolari dinamiche di movimento urbano e dal fantastico stile grafico anime.',
        body2: 'Questo progetto è stato costruito interamente da zero nel mio tempo libero, con l\'obiettivo di offrire ai fan di tutto il mondo un hub veloce, ordinato e completo.',
        body3: 'Il database è mantenuto costantemente aggiornato e rifinito per assicurare informazioni costantemente fresche ed utili.',
        creator: 'Autore',
        creator_sub: 'Grande appassionato di Ananta',
        contact_title: 'Invia feedback',
        contact_desc: 'Se riscontri statistiche errate, immagini non caricate correttamente o errori di battitura, puoi segnalarmeli qui:',
        email_label: 'E-mail di contatto',
        note: '* Cerco di rispondere a tutte le mail costruttive nel giro di 24-48 ore.',
      },
    },
    RU: {
      back: 'Назад к базе данных',
      tabs: {
        privacy: 'Конфиденциальность',
        terms: 'Условия и отказ от ответственности',
        about: 'О нас и контакты',
      },
      privacy: {
        title: 'ПОЛИТИКА КОНФИДЕНЦИАЛЬНОСТИ',
        updated: 'Вступает в силу: 20 мая 2026 г.',
        p1: 'Добро пожаловать на ANANTADB.COM («мы», «наш» или «сайт»). Мы со всей ответственностью относимся к вашей приватности. Эта политика объясняет, как мы обрабатываем ваши данные при использовании наших инструментов.',
        sec1_title: '1. Сбор информации и LocalStorage',
        sec1_desc1: '1. Мы предоставляем интерактивные инструменты, такие как база данных персонажей, сравнение характеристик снаряжения и отслеживание промокодов.',
        sec1_desc2: '2. Чтобы сайт запоминал ваши локальные настройки (например, использованные промокоды или избранных героев), мы сохраняем эти параметры на вашем устройстве с помощью LocalStorage.',
        sec1_desc3: '3. Мы не отправляем эти локальные данные на наши серверы или третьим лицам. Они хранятся исключительно в вашем браузере и могут быть стерты путем очистки файлов cookies и кеша.',
        sec2_title: '2. Сookies и реклама сторонних партнеров',
        sec2_intro: 'Для покрытия расходов на хостинг, серверную пропускную способность и глобальную сеть доставки контента (CDN) мы можем использовать сторонние сервисы аналитики и рекламы:',
        sec2_b1_title: 'Google AdSense:',
        sec2_b1_desc: 'Google использует файлы cookie для показа персонализированной рекламы клиентам на основе их предпочтений и посещений нашего и других ресурсов в сети.',
        sec2_b2_desc: 'Пользователи могут настроить или полностью отключить показ таргетированной рекламы в системном меню настроек аккаунта Google Ads.',
        sec2_b3_title: 'Аналитика и веб-трекинг:',
        sec2_b3_desc: 'Мы используем Google Analytics, чтобы анонимно собирать технические метрики посещений для улучшения функционала. Эти записи не раскрывают вашу личность.',
        sec3_title: '3. Безопасность соединений',
        sec3_desc: 'Все разделы сайта используют криптографическое шифрование HTTPS, что защищает трафик от возможного перехвата злоумышленниками.',
        sec4_title: '4. Изменения политики',
        sec4_desc: 'Мы оставляем за собой право периодически обновлять этот текст в соответствии с новыми веб-стандартами.',
        sec5_title: '5. Соответствие Общему регламенту по защите данных (GDPR)',
        sec5_desc: 'В соответствии с регламентом GDPR жители ЕС имеют право на доступ, исправление, ограничение и удаление своих локальных настроек, а также на отказ от анонимного аналитического отслеживания. Данные функции доступны в настройках рекламы Google или при очистке кэша браузера.',
        sec6_title: '6. Соответствие Закону Калифорнии о конфиденциальности потребителей (CCPA)',
        sec6_desc: 'Резиденты Калифорнии имеют право знать, какие данные собираются, требовать их удаления и отказываться от их продажи. ANANTADB.COM не продает личную информацию. Отказаться от целевой рекламы можно на официальном портале NAI.',
        sec7_title: '7. Защита детей и соответствие закону COPPA',
        sec7_desc: 'Мы строго соблюдаем закон США о защите конфиденциальности детей в Интернете (COPPA). Мы не собираем информацию о детях до 13 лет и не нацеливаем рекламу на данную категорию лиц.',
        sec8_title: '8. Управление файлами Cookie и личными данными',
        sec8_desc: 'Вы обладаете полным контролем над своими действиями на сайте. Вы можете заблокировать файлы cookie в браузере, настроить персонализацию в рекламном кабинете Google или стереть данные, очистив кэш.',
      },
      terms: {
        title: 'УСЛОВИЯ ИСПОЛЬЗОВАНИЯ И ОТКАЗ ОТ ОТВЕТСТВЕННОСТИ',
        updated: 'Вступает в силу: 20 мая 2026 г.',
        notice: 'ВАЖНОЕ ПРЕДУПРЕЖДЕНИЕ:',
        notice_body: 'ANANTADB.COM — это неофициальная, некоммерческая, фанатская база данных по грядущей игре "Ananta" (разрабатываемой и издаваемой NetEase Games). Этот проект никоим образом не связан напрямую с компанией NetEase Games.',
        sec1_title: '1. Статус неофициального сообщества',
        sec2_title: '2. Интеллектуальная собственность и добросовестное использование',
        sec2_desc1: '1. Все изображения из игры, эскизы, логотипы и названия, связанные с "Ananta", являются интеллектуальной собственностью компании NetEase Games.',
        sec2_desc2: '2. Все материалы размещаются в справочных и ознакомительных целях на правах добросовестного использования ("Fair Use"). Авторы контента могут в любой момент связаться с нами для удаления.',
        sec3_title: '3. Ограничения базы данных',
        sec3_desc1: '1. Показатели собираются из открытых источников тестирования и закрытых бета-обзоров.',
        sec3_desc2: '2. Мы не можем гарантировать полное совпадение параметров с финальной версией игры в день релиза. Используйте данные как ориентировочные.',
        sec4_title: '4. Fair Play и честная игра',
        sec4_desc: 'Пожалуйста, поддерживайте официальных дистрибьюторов. Не используйте пиратские утилиты и читы для поддержания дружелюбного духа игры.',
      },
      about: {
        title: 'О САЙТЕ И КОНТАКТНЫЕ ДАННЫЕ',
        subtitle: 'Уютная база знаний, созданная с любовью к Нова-Сити',
        body1: 'Привет! Я разработчик и создатель ANANTADB.COM. Как и вы, я с огромным нетерпением жду релиза "Ananta" (Project Mugen), восхищенный ее паркуром на небоскребах, трюками на байках и потрясающим аниме-дизайном.',
        body2: 'Этот проект написан мной вручную в свободное время, чтобы предоставить глобальному комьюнити понятные инструменты, руководства и расписания событий на родных языках.',
        body3: 'База данных постоянно проверяется и корректируется вручную для своевременного исправления ошибок.',
        creator: 'Автор проекта',
        creator_sub: 'Преданный фанат Ananta',
        contact_title: 'Обратная связь',
        contact_desc: 'Если вы заметили неточность в характеристиках снаряжения, нерабочую картинку или хотите отправить отзывы или предложения по дизайну, пишите мне:',
        email_label: 'Контактный E-mail',
        note: '* Я читаю и отвечаю на все конструктивные сообщения в течение 24–48 часов.',
      },
    },
  };

  const t = dictionary[activeLang];

  return (
    <div className="pt-24 pb-16 px-[5vw] min-h-[85vh] bg-ananta-bg flex flex-col items-center animate-fade-in text-ananta-text">
      <div className="w-full max-w-4xl">
        {/* Back Button & Header */}
        <div className="flex items-center justify-between mb-8 pb-4 border-b border-ananta-border/35">
          <button
            onClick={onBack}
            className="flex items-center gap-2 text-xs font-mono tracking-wider text-ananta-muted hover:text-ananta-neon transition-colors cursor-pointer outline-none uppercase"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>{t.back}</span>
          </button>
        </div>

        {/* Tab Navigation */}
        <div className="grid grid-cols-3 gap-2 sm:gap-4 mb-8">
          <button
            onClick={() => setActiveTab('privacy')}
            className={`flex flex-col sm:flex-row items-center justify-center gap-2 py-4 border rounded-sm transition-all cursor-pointer text-center sm:text-left ${
              activeTab === 'privacy'
                ? 'border-ananta-neon bg-ananta-neon/[0.03] text-ananta-neon font-bold shadow-[0_0_15px_rgba(var(--neon-rgb),0.1)]'
                : 'border-ananta-border bg-ananta-bg2/30 text-ananta-muted hover:text-ananta-text hover:border-ananta-text/30'
            }`}
          >
            <Shield className="w-4 h-4" />
            <span className="text-xs uppercase font-mono tracking-wider">
              {t.tabs.privacy}
            </span>
          </button>

          <button
            onClick={() => setActiveTab('terms')}
            className={`flex flex-col sm:flex-row items-center justify-center gap-2 py-4 border rounded-sm transition-all cursor-pointer text-center sm:text-left ${
              activeTab === 'terms'
                ? 'border-ananta-neon bg-ananta-neon/[0.03] text-ananta-neon font-bold shadow-[0_0_15px_rgba(var(--neon-rgb),0.1)]'
                : 'border-ananta-border bg-ananta-bg2/30 text-ananta-muted hover:text-ananta-text hover:border-ananta-text/30'
            }`}
          >
            <FileText className="w-4 h-4" />
            <span className="text-xs uppercase font-mono tracking-wider">
              {t.tabs.terms}
            </span>
          </button>

          <button
            onClick={() => setActiveTab('about')}
            className={`flex flex-col sm:flex-row items-center justify-center gap-2 py-4 border rounded-sm transition-all cursor-pointer text-center sm:text-left ${
              activeTab === 'about'
                ? 'border-ananta-neon bg-ananta-neon/[0.03] text-ananta-neon font-bold shadow-[0_0_15px_rgba(var(--neon-rgb),0.1)]'
                : 'border-ananta-border bg-ananta-bg2/30 text-ananta-muted hover:text-ananta-text hover:border-ananta-text/30'
            }`}
          >
            <User className="w-4 h-4" />
            <span className="text-xs uppercase font-mono tracking-wider">
              {t.tabs.about}
            </span>
          </button>
        </div>

        {/* Content Card */}
        <div className="border border-ananta-border bg-ananta-bg2/50 backdrop-blur-md p-6 sm:p-10 rounded-sm">
          {activeTab === 'privacy' && (
            <div className="prose prose-invert max-w-none text-ananta-text leading-relaxed font-sans text-sm space-y-6">
              <h2 className="font-display text-3xl text-white tracking-wider mb-2">{t.privacy.title}</h2>
              <p className="text-xs font-mono text-ananta-muted uppercase tracking-wider">{t.privacy.updated}</p>
              
              <div className="h-px bg-ananta-border my-6"></div>

              <p>{t.privacy.p1}</p>

              <h3 className="font-mono text-xs uppercase tracking-[0.15em] text-ananta-neon font-bold pt-4">{t.privacy.sec1_title}</h3>
              <p>
                {t.privacy.sec1_desc1}
                <br />
                {t.privacy.sec1_desc2}
                <br />
                {t.privacy.sec1_desc3}
              </p>

              <h3 className="font-mono text-xs uppercase tracking-[0.15em] text-ananta-neon font-bold pt-4">{t.privacy.sec2_title}</h3>
              <p>{t.privacy.sec2_intro}</p>
              <ul className="list-disc pl-6 space-y-2">
                <li>
                  <strong>{t.privacy.sec2_b1_title}</strong> {t.privacy.sec2_b1_desc}
                </li>
                <li>
                  {t.privacy.sec2_b2_desc}
                </li>
                <li>
                  <strong>{t.privacy.sec2_b3_title}</strong> {t.privacy.sec2_b3_desc}
                </li>
              </ul>

              <h3 className="font-mono text-xs uppercase tracking-[0.15em] text-ananta-neon font-bold pt-4">{t.privacy.sec3_title}</h3>
              <p>{t.privacy.sec3_desc}</p>

              <h3 className="font-mono text-xs uppercase tracking-[0.15em] text-ananta-neon font-bold pt-4">{t.privacy.sec4_title}</h3>
              <p>{t.privacy.sec4_desc}</p>

              {t.privacy.sec5_title && (
                <>
                  <h3 className="font-mono text-xs uppercase tracking-[0.15em] text-ananta-neon font-bold pt-4">{t.privacy.sec5_title}</h3>
                  <p>{t.privacy.sec5_desc}</p>
                </>
              )}
              {t.privacy.sec6_title && (
                <>
                  <h3 className="font-mono text-xs uppercase tracking-[0.15em] text-ananta-neon font-bold pt-4">{t.privacy.sec6_title}</h3>
                  <p>{t.privacy.sec6_desc}</p>
                </>
              )}
              {t.privacy.sec7_title && (
                <>
                  <h3 className="font-mono text-xs uppercase tracking-[0.15em] text-ananta-neon font-bold pt-4">{t.privacy.sec7_title}</h3>
                  <p>{t.privacy.sec7_desc}</p>
                </>
              )}
              {t.privacy.sec8_title && (
                <>
                  <h3 className="font-mono text-xs uppercase tracking-[0.15em] text-ananta-neon font-bold pt-4">{t.privacy.sec8_title}</h3>
                  <p>{t.privacy.sec8_desc}</p>
                </>
              )}
            </div>
          )}

          {activeTab === 'terms' && (
            <div className="prose prose-invert max-w-none text-ananta-text leading-relaxed font-sans text-sm space-y-6">
              <h2 className="font-display text-3xl text-white tracking-wider mb-2">{t.terms.title}</h2>
              <p className="text-xs font-mono text-ananta-muted uppercase tracking-wider">{t.terms.updated}</p>
              
              <div className="h-px bg-ananta-border my-6"></div>

              <h3 className="font-mono text-xs uppercase tracking-[0.15em] text-ananta-neon font-bold pt-4">{t.terms.sec1_title}</h3>
              <p className="bg-ananta-neon2/10 border border-ananta-neon2/20 p-4 font-mono text-[0.78rem] leading-relaxed rounded-sm text-white">
                <strong>{t.terms.notice}</strong>
                <br />
                {t.terms.notice_body}
              </p>

              <h3 className="font-mono text-xs uppercase tracking-[0.15em] text-ananta-neon font-bold pt-4">{t.terms.sec2_title}</h3>
              <p>
                {t.terms.sec2_desc1}
                <br />
                {t.terms.sec2_desc2}
              </p>

              <h3 className="font-mono text-xs uppercase tracking-[0.15em] text-ananta-neon font-bold pt-4">{t.terms.sec3_title}</h3>
              <p>
                {t.terms.sec3_desc1}
                <br />
                {t.terms.sec3_desc2}
              </p>

              <h3 className="font-mono text-xs uppercase tracking-[0.15em] text-ananta-neon font-bold pt-4">{t.terms.sec4_title}</h3>
              <p>{t.terms.sec4_desc}</p>
            </div>
          )}

          {activeTab === 'about' && (
            <div className="prose prose-invert max-w-none text-ananta-text leading-relaxed font-sans text-sm space-y-6">
              <h2 className="font-display text-3xl text-white tracking-wider mb-2">{t.about.title}</h2>
              <p className="text-xs font-mono text-ananta-muted uppercase tracking-wider">{t.about.subtitle}</p>
              
              <div className="h-px bg-ananta-border my-6"></div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-center">
                <div className="md:col-span-2 space-y-4">
                  <p>{t.about.body1}</p>
                  <p>{t.about.body2}</p>
                  <p>{t.about.body3}</p>
                </div>
                <div className="bg-ananta-neon/[0.03] border border-ananta-border p-6 rounded-sm">
                  <div className="w-16 h-16 rounded-full bg-ananta-neon/10 mx-auto flex items-center justify-center mb-3">
                    <User className="w-8 h-8 text-ananta-neon" />
                  </div>
                  <div className="text-center mb-4 border-b border-ananta-border/50 pb-3">
                    <h4 className="font-mono text-xs uppercase tracking-wider text-white">{t.about.creator}</h4>
                    <p className="text-xs text-ananta-muted font-mono mt-1">{t.about.creator_sub}</p>
                  </div>
                  <ul className="text-[0.7rem] font-mono text-ananta-muted space-y-2">
                    <li className="flex justify-between gap-2"><strong className="text-ananta-neon">SITE:</strong> <span>ANANTADB.COM</span></li>
                    <li className="flex justify-between gap-2"><strong className="text-ananta-neon">CREATOR:</strong> <span>monster-wbin</span></li>
                    <li className="flex justify-between gap-2"><strong className="text-ananta-neon">REPO:</strong> <a href="https://github.com/monster-wbin/ANANTA" target="_blank" rel="noopener noreferrer" className="hover:text-white underline">monster-wbin/ANANTA</a></li>
                    <li className="flex justify-between gap-2"><strong className="text-ananta-neon">ESTABLISHED:</strong> <span>2024-12-05</span></li>
                    <li className="flex justify-between gap-2"><strong className="text-ananta-neon">LICENSE:</strong> <span className="text-right">CC BY-NC-ND 4.0</span></li>
                  </ul>
                </div>
              </div>

              <h3 className="font-mono text-xs uppercase tracking-[0.15em] text-ananta-neon font-bold pt-4">{t.about.contact_title}</h3>
              <p>{t.about.contact_desc}</p>

              <div className="bg-ananta-bg flex items-center gap-3 p-4 border border-ananta-border rounded-sm max-w-md">
                <Mail className="w-5 h-5 text-ananta-neon" />
                <div>
                  <p className="text-xs text-ananta-muted font-mono uppercase tracking-wider">{t.about.email_label}</p>
                  <a href="mailto:monster.wbin@gmail.com" className="text-white hover:text-ananta-neon font-mono text-sm underline select-all">
                    monster.wbin@gmail.com
                  </a>
                </div>
              </div>

              <div className="mt-4 text-xs text-ananta-muted leading-relaxed">
                {t.about.note}
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
