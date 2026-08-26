import React from 'react';
import { useLanguage } from '../context/LanguageContext';

export function SectionLabel({ text }: { text: string }) {
  return (
    <div className="font-mono text-[0.65rem] tracking-[0.25em] uppercase text-ananta-neon mb-3 flex items-center gap-2.5">
      <span className="text-ananta-muted">//</span> {text}
    </div>
  );
}

export function SectionTitle({ text, className = "" }: { text: string, className?: string }) {
  return (
    <h2 className={`font-display text-[clamp(2rem,4vw,3.2rem)] tracking-[0.06em] text-white mb-12 ${className}`}>
      {text}
    </h2>
  );
}

function getDeepDiveSidebarTranslations(lang: string) {
  const dict: Record<string, {
    quickFactsHeader: string;
    confirmedFeaturesHeader: string;
    facts: { label: string; value: string }[];
    features: { label: string; value: string }[];
  }> = {
    EN: {
      quickFactsHeader: '// Quick Facts',
      confirmedFeaturesHeader: '// Confirmed Features',
      facts: [
        { label: 'Developer', value: 'Naked Rain / NetEase' },
        { label: 'Former Name', value: 'Project Mugen' },
        { label: 'Platforms', value: 'PC · PS5 · iOS · Android' },
        { label: 'Price', value: 'Free to Play' },
        { label: 'Gacha', value: 'NO — Removed' },
        { label: 'Est. Launch', value: 'Q3 2026' },
        { label: 'Pre-Registrations', value: '17M+' },
        { label: 'City Size', value: '~Manhattan' },
        { label: 'Dev Team Size', value: '700–800' },
      ],
      features: [
        { label: 'Open World', value: '✓ Confirmed' },
        { label: 'Multiplayer Co-op', value: '✓ Confirmed' },
        { label: 'PvP Mode', value: '✓ Confirmed' },
        { label: 'Cross-Platform', value: '✓ Confirmed' },
        { label: 'Character Gacha', value: '✗ Removed' },
        { label: 'Vehicle Customization', value: '✓ Confirmed' },
      ]
    },
    CN: {
      quickFactsHeader: '// 关键信息',
      confirmedFeaturesHeader: '// 已确认特色',
      facts: [
        { label: '开发商', value: '网易 / 飞雨工作室' },
        { label: '曾用名', value: '代号：无限大' },
        { label: '支持平台', value: 'PC · PS5 · iOS · Android' },
        { label: '售价', value: '免费游玩' },
        { label: '抽卡机制', value: '无 — 已取消' },
        { label: '预计发售时间', value: '2026年 第三季度' },
        { label: '全网预约量', value: '突破1700万' },
        { label: '城市地图体量', value: '约等于真实曼哈顿' },
        { label: '研发团队规模', value: '约 700–800 人' },
      ],
      features: [
        { label: '开放世界探索', value: '✓ 已确认' },
        { label: '多人联机共斗', value: '✓ 已确认' },
        { label: 'PVP 竞技模式', value: '✓ 已确认' },
        { label: '跨平台互通', value: '✓ 已确认' },
        { label: '角色抽卡', value: '✗ 已取消' },
        { label: '载具改装定制', value: '✓ 已确认' },
      ]
    },
    TW: {
      quickFactsHeader: '// 關鍵信息',
      confirmedFeaturesHeader: '// 已確認特色',
      facts: [
        { label: '開發商', value: '網易 / 飛雨工作室' },
        { label: '曾用名', value: '代號：無限大' },
        { label: '支持平台', value: 'PC · PS5 · iOS · Android' },
        { label: '售價', value: '免費遊玩' },
        { label: '抽卡機制', value: '無 — 已取消' },
        { label: '預計發售時間', value: '2026年 第三季度' },
        { label: '全網預約量', value: '突破1700萬' },
        { label: '城市地圖體量', value: '約等於真實曼哈頓' },
        { label: '研發團隊規模', value: '約 700–800 人' },
      ],
      features: [
        { label: '開放世界探索', value: '✓ 已確認' },
        { label: '多人聯機共鬥', value: '✓ 已確認' },
        { label: 'PVP 競技模式', value: '✓ 已確認' },
        { label: '跨平台互通', value: '✓ 已確認' },
        { label: '角色抽卡', value: '✗ 已取消' },
        { label: '載具改裝定制', value: '✓ 已確認' },
      ]
    },
    JP: {
      quickFactsHeader: '// クイックファクト',
      confirmedFeaturesHeader: '// 確認済み機能',
      facts: [
        { label: '開発会社', value: 'Naked Rain / NetEase' },
        { label: '旧タイトル名', value: 'Project Mugen' },
        { label: '対応ハード', value: 'PC · PS5 · iOS · Android' },
        { label: '価格体系', value: '基本プレイ無料' },
        { label: 'ガチャ要素', value: 'なし — 廃止決定' },
        { label: '発売予定時期', value: '2026年 Q3' },
        { label: '事前登録者数', value: '1700万人突破' },
        { label: 'マップ規模', value: 'マンハッタン相当' },
        { label: '開発人数', value: '約 700–800 名' },
      ],
      features: [
        { label: 'オープンワールド', value: '✓ 確定' },
        { label: '協力プレイ (マルチ)', value: '✓ 確定' },
        { label: 'PvP対戦モード', value: '✓ 確定' },
        { label: 'マルチプラットフォーム', value: '✓ 確定' },
        { label: 'キャラクターガチャ', value: '✗ 廃止' },
        { label: '車両カスタム要素', value: '✓ 確定' },
      ]
    },
    KR: {
      quickFactsHeader: '// 주요 정보',
      confirmedFeaturesHeader: '// 확정된 콘텐츠',
      facts: [
        { label: '개발사', value: 'Naked Rain / NetEase' },
        { label: '이전 타이틀명', value: 'Project Mugen' },
        { label: '지원 기기', value: 'PC · PS5 · iOS · Android' },
        { label: '가격 모델', value: '부분 무료화 (F2P)' },
        { label: '가챠 방식', value: '없음 — 폐지됨' },
        { label: '정식 출시 시기', value: '2026년 3분기 예정' },
        { label: '사전 예약 수', value: '1700만 돌파' },
        { label: '도시 맵 크기', value: '맨해튼 복제 규격' },
        { label: '개발팀 인원', value: '약 700–800 명' },
      ],
      features: [
        { label: '오픈 월드 플레이', value: '✓ 확정됨' },
        { label: '멀티플레이어 코옵', value: '✓ 확정됨' },
        { label: 'PVP 경쟁 모드', value: '✓ 확정됨' },
        { label: '크로스 플랫폼 플레이', value: '✓ 확정됨' },
        { label: '캐릭터 가챠', value: '✗ 영구 폐지' },
        { label: '탈것 커스텀마이징', value: '✓ 확정됨' },
      ]
    },
    DE: {
      quickFactsHeader: '// Wichtige Fakten',
      confirmedFeaturesHeader: '// Bestätigte Features',
      facts: [
        { label: 'Entwickler', value: 'Naked Rain / NetEase' },
        { label: 'Früherer Name', value: 'Project Mugen' },
        { label: 'Plattformen', value: 'PC · PS5 · iOS · Android' },
        { label: 'Preis', value: 'Kostenlos (F2P)' },
        { label: 'Gacha', value: 'NEIN — Entfernt' },
        { label: 'Est. Launch', value: 'Q3 2026' },
        { label: 'Vorregistrierungen', value: 'Über 17 Mio.' },
        { label: 'Stadtgröße', value: 'Ca. Manhattan-Maßstab' },
        { label: 'Teamgröße', value: '700–800 Personen' },
      ],
      features: [
        { label: 'Open World', value: '✓ Bestätigt' },
        { label: 'Mehrspieler-Koop', value: '✓ Bestätigt' },
        { label: 'PvP-Modus', value: '✓ Bestätigt' },
        { label: 'Crossplay', value: '✓ Bestätigt' },
        { label: 'Charakter-Gacha', value: '✗ Entfernt' },
        { label: 'Fahrzeuganpassung', value: '✓ Bestätigt' },
      ]
    },
    FR: {
      quickFactsHeader: '// Faits rapides',
      confirmedFeaturesHeader: '// Caractéristiques confirmées',
      facts: [
        { label: 'Développeur', value: 'Naked Rain / NetEase' },
        { label: 'Ancien nom', value: 'Project Mugen' },
        { label: 'Plateformes', value: 'PC · PS5 · iOS · Android' },
        { label: 'Prix', value: 'Gratuit (F2P)' },
        { label: 'Gacha', value: 'NON — Supprimé' },
        { label: 'Sortie estimée', value: 'T3 2026' },
        { label: 'Pré-inscriptions', value: '17M+' },
        { label: 'Taille de la ville', value: 'Échelle de Manhattan' },
        { label: 'Nombre de devs', value: '700-800 personnes' },
      ],
      features: [
        { label: 'Monde ouvert', value: '✓ Confirmé' },
        { label: 'Multijoueur coop', value: '✓ Confirmé' },
        { label: 'Mode PvP', value: '✓ Confirmé' },
        { label: 'Cross-plateforme', value: '✓ Confirmé' },
        { label: 'Gacha personnages', value: '✗ Supprimé' },
        { label: 'Tuning de véhicules', value: '✓ Confirmé' },
      ]
    },
    IT: {
      quickFactsHeader: '// Fatti rapidi',
      confirmedFeaturesHeader: '// Caratteristiche confermate',
      facts: [
        { label: 'Sviluppatore', value: 'Naked Rain / NetEase' },
        { label: 'Nome precedente', value: 'Project Mugen' },
        { label: 'Piattaforme', value: 'PC · PS5 · iOS · Android' },
        { label: 'Prezzo', value: 'Gratuito (F2P)' },
        { label: 'Gacha', value: 'NO — Rimosso' },
        { label: 'Uscita stimata', value: 'Q3 2026' },
        { label: 'Preregistrazioni', value: 'Oltre 17M' },
        { label: 'Dimensione mappa', value: 'Scala Manhattan' },
        { label: 'Team di sviluppo', value: '700-800 persone' },
      ],
      features: [
        { label: 'Open World', value: '✓ Confermato' },
        { label: 'Coop multigiocatore', value: '✓ Confermato' },
        { label: 'Modalità PvP', value: '✓ Confermato' },
        { label: 'Sincronizzazione', value: '✓ Confermato' },
        { label: 'Gacha personaggi', value: '✗ Rimosso' },
        { label: 'Tuning dei veicoli', value: '✓ Confermato' },
      ]
    },
    RU: {
      quickFactsHeader: '// Краткие факты',
      confirmedFeaturesHeader: '// Подтвержденные особенности',
      facts: [
        { label: 'Разработчик', value: 'Naked Rain / NetEase' },
        { label: 'Прежнее имя', value: 'Project Mugen' },
        { label: 'Платформы', value: 'PC · PS5 · iOS · Android' },
        { label: 'Цена', value: 'Бесплатно (F2P)' },
        { label: 'Гача система', value: 'НЕТ — Удалена' },
        { label: 'Планируемый релиз', value: 'Q3 2026' },
        { label: 'Предрегистрации', value: '17 млн+' },
        { label: 'Размер города', value: 'Масштаб Манхэттена' },
        { label: 'Штат разработчиков', value: '700–800 чел.' },
      ],
      features: [
        { label: 'Открытый мир', value: '✓ Подтверждено' },
        { label: 'Совместный режим', value: '✓ Подтверждено' },
        { label: 'Режим PvP', value: '✓ Подтверждено' },
        { label: 'Кроссплатформа', value: '✓ Подтверждено' },
        { label: 'Гача персонажей', value: '✗ Удалено' },
        { label: 'Кастомизация авто', value: '✓ Подтверждено' },
      ]
    },
  };

  return dict[lang as keyof typeof dict] || dict.EN;
}

function getValueClass(value: string, label?: string) {
  const v = value.toLowerCase();
  const l = label ? label.toLowerCase() : '';
  if (v.includes('✓') || v.includes('yes') || v.includes('confirmed') || v.includes('17m') || v.includes('1700万') || v.includes('17 mil') || v.includes('17 млн')) {
    return "text-ananta-neon glow-neon";
  }
  if (v.includes('✗') || v.includes('no') || v.includes('removed') || v.includes('없음') || v.includes('폐지') || v.includes('无') || v.includes('取消') || v.includes('なし') || v.includes('廃止') || v.includes('nein') || v.includes('entfernt') || v.includes('non') || v.includes('retiré') || v.includes('supprimé') || v.includes('нет') || v.includes('удален')) {
    return "text-ananta-neon2";
  }
  if (v.includes('q3 2026') || v.includes('2026년') || v.includes('2026年')) {
    return "text-ananta-gold";
  }
  if (l.includes('platform') || l.includes('preis') || l.includes('price') || l.includes('售价') || l.includes('價格') || l.includes('価格') || l.includes('가격') || l.includes('지원 기기')) {
    return "text-ananta-neon glow-neon";
  }
  return "text-white";
}

export function DeepDive() {
  const { t, lang } = useLanguage();
  const sidebarTrans = getDeepDiveSidebarTranslations(lang);
  const blocksData = (typeof t('deepDiveData') === 'object' ? t('deepDiveData') : []) as any[];
  const accentClasses = [
    { accent: '' },
    { accent: 'accent-neon2 text-ananta-neon2' },
    { accent: 'accent-gold text-ananta-gold' },
    { accent: 'accent-purple text-[#a855f7]' }
  ];

  const blocks = blocksData.map((b: any, i: number) => ({
    ...b,
    accent: accentClasses[i]?.accent || ''
  }));

  return (
    <section id="know" className="px-[5vw] py-20 bg-ananta-bg">
      <SectionLabel text={t('sections.deepdiveLabel')} />
      <SectionTitle text={t('sections.deepdiveTitle')} />
      
      <div className="grid grid-cols-1 lg:grid-cols-[1.2fr_1fr] gap-12 items-start">
        <div className="flex flex-col gap-5">
          {blocks.map((b, i) => (
            <div key={i} className={`know-block border border-ananta-border p-6 bg-ananta-bg2 relative overflow-hidden transition-colors duration-200 hover:border-ananta-neon/30 ${b.accent.split(' ')[0]}`}>
              <div className={`font-mono text-[0.6rem] tracking-[0.2em] uppercase mb-2 ${b.accent ? b.accent.split(' ')[1] : 'text-ananta-neon'}`}>
                {b.tag}
              </div>
              <h3 className="font-display text-[1.2rem] tracking-[0.06em] text-white mb-2.5">{b.title}</h3>
              <p className="text-[0.85rem] text-ananta-muted leading-[1.7]">{b.desc}</p>
            </div>
          ))}
        </div>

        {/* Stats Sidebar */}
        <div className="sticky top-[84px]">
          <div className="bg-ananta-bg2 border border-ananta-border p-7 mb-4">
            <div className="font-mono text-[0.6rem] tracking-[0.2em] uppercase text-ananta-muted mb-5">
              {sidebarTrans.quickFactsHeader}
            </div>
            {sidebarTrans.facts.map((fact, idx) => (
              <StatRow
                key={idx}
                label={fact.label}
                value={fact.value}
                valueClass={getValueClass(fact.value, fact.label)}
                isLast={idx === sidebarTrans.facts.length - 1}
              />
            ))}
          </div>

          <div className="bg-ananta-bg2 border border-ananta-border p-7">
            <div className="font-mono text-[0.6rem] tracking-[0.2em] uppercase text-ananta-muted mb-5">
              {sidebarTrans.confirmedFeaturesHeader}
            </div>
            {sidebarTrans.features.map((feat, idx) => (
              <StatRow
                key={idx}
                label={feat.label}
                value={feat.value}
                valueClass={getValueClass(feat.value, feat.label)}
                isLast={idx === sidebarTrans.features.length - 1}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function StatRow({ label, value, valueClass = "text-white", isLast = false }: { key?: React.Key, label: string, value: string, valueClass?: string, isLast?: boolean }) {
  return (
    <div className={`flex justify-between items-center py-2.5 text-[0.82rem] ${!isLast ? 'border-b border-ananta-border' : ''}`}>
      <span className="text-ananta-muted">{label}</span>
      <span className={`font-mono text-[0.78rem] font-bold ${valueClass}`}>{value}</span>
    </div>
  );
}
