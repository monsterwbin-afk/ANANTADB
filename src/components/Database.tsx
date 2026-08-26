import React from 'react';
import { SectionLabel, SectionTitle } from './DeepDive';
import { useLanguage } from '../context/LanguageContext';

export function CodesSection() {
  const { t } = useLanguage();
  
  const baseCodes = [
    { code: 'NOVACITY2026', reward: 'Launch Celebration Reward (Est.)', note: 'Official — At Launch', status: 'Pending Launch', state: 'pending' },
    { code: 'ANANTADAY1', reward: 'Day 1 Player Pack (Est.)', note: 'Community Prediction', status: 'Pending Launch', state: 'pending' },
    { code: 'PREREGBONUS', reward: 'Pre-Registration Reward', note: 'Official — Pre-reg Confirmed', status: 'At Launch', state: 'pending' },
  ];
  const cdInfo = (typeof t('codesData') === 'object' ? t('codesData') : []) as any[];
  const codes = baseCodes.map((base, i) => {
    const cd = cdInfo[i] || {};
    return {
      ...base,
      code: cd.code || base.code,
      reward: cd.reward || base.reward,
      status: cd.status || base.status
    };
  });
  
  return (
    <section id="codes" className="px-[5vw] py-20 bg-ananta-bg">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between mb-8">
        <div>
          <SectionLabel text={t('sections.codesLabel')} />
          <SectionTitle text={t('sections.codesTitle')} className="!mb-0" />
        </div>
        <div className="font-mono text-[0.65rem] tracking-[0.15em] text-ananta-muted uppercase flex items-center gap-2 mt-4 sm:mt-0">
          <span className="codes-status-dot" /> {t('sections.codesStatusAtLaunch') || 'Pre-launch — Codes Active at Launch'}
        </div>
      </div>

      <div className="overflow-x-auto">
        <table className="w-full border-collapse border border-ananta-border min-w-[600px]">
          <thead>
            <tr>
              {['Code', 'Reward', 'Source', 'Status'].map(th => {
                const key = `hdr${th}` as 'hdrCode' | 'hdrReward' | 'hdrSource' | 'hdrStatus';
                return (
                  <th key={th} className="font-mono text-[0.6rem] tracking-[0.2em] uppercase text-ananta-muted p-3.5 px-5 text-left border-b border-ananta-border bg-ananta-bg2">
                    {t(`sections.${key}`) || th}
                  </th>
                );
              })}
            </tr>
          </thead>
          <tbody>
            {codes.map((c: any, i: number) => (
              <CodeRow 
                key={i}
                code={c.code} 
                reward={c.reward} 
                note={c.note} 
                status={c.status} 
                state={c.state} 
              />
            ))}
            <tr className="hover:bg-ananta-neon/[0.03] transition-colors border-b border-ananta-border last:border-0">
              <td className="p-3.5 px-5 font-mono text-[0.82rem] text-ananta-neon tracking-[0.08em]">—</td>
              <td colSpan={3} className="p-3.5 px-5 text-[0.85rem] text-ananta-muted text-center">
                {t('sections.codesMore') || 'More codes will appear here as Ananta launches. Bookmark this page!'}
              </td>
            </tr>
          </tbody>
        </table>
      </div>
      <p className="mt-4 font-mono text-[0.62rem] tracking-[0.12em] text-ananta-muted">
        {t('sections.codesHowRedeem') || '// HOW TO REDEEM: Open Settings → Redeem Code → Enter code → Claim (method confirmed from Beta)'}
      </p>
    </section>
  );
}

function CodeRow({ code, reward, note, status, state }: any) {
  return (
    <tr className="hover:bg-ananta-neon/[0.03] transition-colors border-b border-ananta-border last:border-0">
      <td className="p-3.5 px-5 font-mono text-[0.82rem] text-ananta-neon tracking-[0.08em]">{code}</td>
      <td className="p-3.5 px-5 text-[0.85rem] text-ananta-text">{reward}</td>
      <td className="p-3.5 px-5 text-[0.72rem] text-ananta-muted italic">{note}</td>
      <td className="p-3.5 px-5">
        <span className="font-mono text-[0.6rem] tracking-[0.1em] uppercase px-2.5 py-1 rounded-[2px] bg-ananta-gold/[0.15] text-ananta-gold border border-ananta-gold/30">
          {status}
        </span>
      </td>
    </tr>
  );
}

function getCompareData(lang: string) {
  const translations: Record<string, {
    featureHeader: string; colAnanta?: string; colNte?: string; colGi?: string;
    footerNote: string;
    rows: { feature: string, ananta: { v: string, t: string }, nte: { v: string, t: string }, gi: { v: string, t: string } }[]
  }> = {
    EN: {
      colAnanta: 'ANANTA', colNte: 'NTE', colGi: 'Genshin Impact',
      featureHeader: 'Feature',
      footerNote: '* Data sourced from official trailers, developer interviews, and community testing. Some Ananta details are pre-launch estimates.',
      rows: [
        { feature: 'Character Gacha', ananta: { v: '✓ None', t: 'check' }, nte: { v: '✗ Yes', t: 'cross' }, gi: { v: '✗ Yes', t: 'cross' } },
        { feature: 'Open World Size', ananta: { v: 'Manhattan-scale', t: 'text' }, nte: { v: 'Urban City', t: 'text' }, gi: { v: 'Large (7 regions)', t: 'text' } },
        { feature: 'Platforms', ananta: { v: 'PC · PS5 · Mobile', t: 'text' }, nte: { v: 'PC · PS5 · Mobile', t: 'text' }, gi: { v: 'PC · PS4/5 · Mobile', t: 'text' } },
        { feature: 'Setting', ananta: { v: 'Modern Urban', t: 'text' }, nte: { v: 'Modern Urban', t: 'text' }, gi: { v: 'Fantasy World', t: 'text' } },
        { feature: 'NPC AI System', ananta: { v: '✓ 24/7 Reactive', t: 'check' }, nte: { v: '~ Basic', t: 'partial' }, gi: { v: '~ Basic', t: 'partial' } },
        { feature: 'Traversal', ananta: { v: 'Grapple · Parkour · Vehicles', t: 'text' }, nte: { v: 'Parkour · Vehicles', t: 'text' }, gi: { v: 'Gliding · Climbing', t: 'text' } },
        { feature: 'PvP Mode', ananta: { v: '✓ Confirmed', t: 'check' }, nte: { v: '~ Limited', t: 'partial' }, gi: { v: '✗ No PvP', t: 'cross' } },
        { feature: 'Cross-Platform Play', ananta: { v: '✓ Full', t: 'check' }, nte: { v: '✓ Full', t: 'check' }, gi: { v: '~ Partial', t: 'partial' } },
        { feature: 'Business Model', ananta: { v: 'Cosmetics Only', t: 'text' }, nte: { v: 'Character Gacha', t: 'text' }, gi: { v: 'Character + Weapon Gacha', t: 'text' } },
        { feature: 'Release Status', ananta: { v: 'Q3 2026 (Est.)', t: 'partial' }, nte: { v: '✓ Live (Apr 2026)', t: 'check' }, gi: { v: '✓ Live (2020)', t: 'check' } },
      ]
    },
    CN: {
      colAnanta: '代号：无限大', colNte: '异环', colGi: '原神',
      featureHeader: '对比项',
      footerNote: '* 数据源自官方预告片、开发者访谈及社区测试。部分代号：无限大细节为发售前预测估算。',
      rows: [
        { feature: '角色抽卡', ananta: { v: '✓ 无', t: 'check' }, nte: { v: '✗ 有', t: 'cross' }, gi: { v: '✗ 有', t: 'cross' } },
        { feature: '开放世界地图', ananta: { v: '真实曼哈顿比例', t: 'text' }, nte: { v: '现代都市比例', t: 'text' }, gi: { v: '辽阔提瓦特大陆', t: 'text' } },
        { feature: '支持平台', ananta: { v: 'PC · PS5 · 移动端', t: 'text' }, nte: { v: 'PC · PS5 · 移动端', t: 'text' }, gi: { v: 'PC · PS4/5 · 移动端', t: 'text' } },
        { feature: '世界背景', ananta: { v: '现代都市异能', t: 'text' }, nte: { v: '现代都市异能', t: 'text' }, gi: { v: '奇幻冒险世界', t: 'text' } },
        { feature: 'NPC AI生态', ananta: { v: '✓ 24/7即时反应', t: 'check' }, nte: { v: '~ 基础循环', t: 'partial' }, gi: { v: '~ 基础循环', t: 'partial' } },
        { feature: '跑图机制', ananta: { v: '摆荡、攀爬、丰富载具', t: 'text' }, nte: { v: '攀爬、载具', t: 'text' }, gi: { v: '滑翔、攀爬', t: 'text' } },
        { feature: 'PVP 竞技', ananta: { v: '✓ 已确认有', t: 'check' }, nte: { v: '~ 部分模式', t: 'partial' }, gi: { v: '✗ 无 PVP', t: 'cross' } },
        { feature: '跨平台互通', ananta: { v: '✓ 完全互通', t: 'check' }, nte: { v: '✓ 完全互通', t: 'check' }, gi: { v: '~ 部分限制', t: 'partial' } },
        { feature: '商业模式', ananta: { v: '仅外观收费', t: 'text' }, nte: { v: '角色抽卡付费', t: 'text' }, gi: { v: '角色及武器抽卡', t: 'text' } },
        { feature: '公测/上线时间', ananta: { v: '2026年Q3（预计）', t: 'partial' }, nte: { v: '✓ 已公测 (2026年4月)', t: 'check' }, gi: { v: '✓ 已公测 (2020年)', t: 'check' } },
      ]
    },
    TW: {
      colAnanta: '代號：無限大', colNte: '異環', colGi: '原神',
      featureHeader: '對比項',
      footerNote: '* 劇源自官方預告片、開發者訪談及社區測試。部分代號：無限大細節為發售前預測估算。',
      rows: [
        { feature: '角色抽卡', ananta: { v: '✓ 無', t: 'check' }, nte: { v: '✗ 有', t: 'cross' }, gi: { v: '✗ 有', t: 'cross' } },
        { feature: '開放世界地圖', ananta: { v: '真實曼哈頓比例', t: 'text' }, nte: { v: '現代都市比例', t: 'text' }, gi: { v: '遼闊提瓦特大陸', t: 'text' } },
        { feature: '支持平台', ananta: { v: 'PC · PS5 · 移動端', t: 'text' }, nte: { v: 'PC · PS5 · 移動端', t: 'text' }, gi: { v: 'PC · PS4/5 · 移動端', t: 'text' } },
        { feature: '世界背景', ananta: { v: '現代都市異能', t: 'text' }, nte: { v: '現代都市異能', t: 'text' }, gi: { v: '奇幻冒險世界', t: 'text' } },
        { feature: 'NPC AI生態', ananta: { v: '✓ 24/7即時反應', t: 'check' }, nte: { v: '~ 基礎循環', t: 'partial' }, gi: { v: '~ 基礎循環', t: 'partial' } },
        { feature: '跑圖機制', ananta: { v: '擺盪、攀爬、豐富載具', t: 'text' }, nte: { v: '攀爬、載具', t: 'text' }, gi: { v: '滑翔、攀爬', t: 'text' } },
        { feature: 'PVP 競技', ananta: { v: '✓ 已確認有', t: 'check' }, nte: { v: '~ 部分模式', t: 'partial' }, gi: { v: '✗ 無 PVP', t: 'cross' } },
        { feature: '跨平台互通', ananta: { v: '✓ 完全互通', t: 'check' }, nte: { v: '✓ 完全互通', t: 'check' }, gi: { v: '~ 部分限制', t: 'partial' } },
        { feature: '商業模式', ananta: { v: '僅外觀收費', t: 'text' }, nte: { v: '角色抽卡付費', t: 'text' }, gi: { v: '角色及武器抽卡', t: 'text' } },
        { feature: '公測/上線時間', ananta: { v: '2026年Q3（預計）', t: 'partial' }, nte: { v: '✓ 已公測 (2026年4月)', t: 'check' }, gi: { v: '✓ 已公測 (2020年)', t: 'check' } },
      ]
    },
    JP: {
      colAnanta: 'ANANTA (Project Mugen)', colNte: 'Neverness to Everness', colGi: '原神',
      featureHeader: '項目',
      footerNote: '* データは公式PV、開発者インタビュー、コミュニティテストから引用されています。一部の内容は、リリース前の推測値を含みます。',
      rows: [
        { feature: 'キャラガチャ', ananta: { v: '✓ なし', t: 'check' }, nte: { v: '✗ あり', t: 'cross' }, gi: { v: '✗ あり', t: 'cross' } },
        { feature: 'オープンワールド規模', ananta: { v: 'マンハッタン実物大', t: 'text' }, nte: { v: '近代都市の街並み', t: 'text' }, gi: { v: '広大な7国エリア', t: 'text' } },
        { feature: '対応機種', ananta: { v: 'PC · PS5 · モバイル', t: 'text' }, nte: { v: 'PC · PS5 · モバイル', t: 'text' }, gi: { v: 'PC · PS4/5 · モバイル', t: 'text' } },
        { feature: 'ゲームジャンル', ananta: { v: '現代都市・魔能', t: 'text' }, nte: { v: '現代都市・魔能', t: 'text' }, gi: { v: 'ファンタジー世界', t: 'text' } },
        { feature: 'NPCの行動AI', ananta: { v: '✓ 24時間リアル連動', t: 'check' }, nte: { v: '~ 基本アクション', t: 'partial' }, gi: { v: '~ 基本アクション', t: 'partial' } },
        { feature: '移動システム', ananta: { v: 'ワイヤー、バイク/車', t: 'text' }, nte: { v: 'パルクール、乗物', t: 'text' }, gi: { v: '滑空、壁登り', t: 'text' } },
        { feature: 'PvP対戦', ananta: { v: '✓ 搭載確定', t: 'check' }, nte: { v: '~ 一部予定', t: 'partial' }, gi: { v: '✗ なし', t: 'cross' } },
        { feature: 'クロスプレイ', ananta: { v: '✓ フル対応', t: 'check' }, nte: { v: '✓ フル対応', t: 'check' }, gi: { v: '~ 一部制限', t: 'partial' } },
        { feature: '課金方式', ananta: { v: 'スキン・外見のみ', t: 'text' }, nte: { v: 'キャラガチャ', t: 'text' }, gi: { v: 'キャラ・武器ガチャ', t: 'text' } },
        { feature: '配信状況/時期', ananta: { v: '2026年 Q3 (予定)', t: 'partial' }, nte: { v: '✓ 配信中 (2026年4月)', t: 'check' }, gi: { v: '✓ 配信中 (2020年)', t: 'check' } },
      ]
    },
    KR: {
      colAnanta: '아난타 (프로젝트 무한)', colNte: 'NTE (이환)', colGi: '원신',
      featureHeader: '비교 항목',
      footerNote: '* 데이터는 공식 트레일러, 개발진 인터뷰 및 커뮤니티 테스트를 기반으로 합니다. Ananta 관련 일부 정보는 출시 전 예상 수치입니다.',
      rows: [
        { feature: '캐릭터 가챠', ananta: { v: '✓ 없음', t: 'check' }, nte: { v: '✗ 있음', t: 'cross' }, gi: { v: '✗ 있음', t: 'cross' } },
        { feature: '오픈 월드 스케일', ananta: { v: '맨해튼 규격 크기', t: 'text' }, nte: { v: '현대 도시 규격', t: 'text' }, gi: { v: '방대한 7개 지역', t: 'text' } },
        { feature: '지원 플랫폼', ananta: { v: 'PC · PS5 · 모바일', t: 'text' }, nte: { v: 'PC · PS5 · 모바일', t: 'text' }, gi: { v: 'PC · PS4/5 · 모바일', t: 'text' } },
        { feature: '배경 콘셉트', ananta: { v: '어반 현대 판타지', t: 'text' }, nte: { v: '어반 현대 판타지', t: 'text' }, gi: { v: '정통 판타지 세계', t: 'text' } },
        { feature: 'NPC AI 상호작용', ananta: { v: '✓ 24/7 연동 반응', t: 'check' }, nte: { v: '~ 기본 루틴', t: 'partial' }, gi: { v: '~ 기본 루틴', t: 'partial' } },
        { feature: '이동 메커니즘', ananta: { v: '그래플 · 바이크 · 차량', t: 'text' }, nte: { v: '파르쿠르 · 차량', t: 'text' }, gi: { v: '비행 · 벽 타기', t: 'text' } },
        { feature: 'PvP 게임 모드', ananta: { v: '✓ 확정 탑재', t: 'check' }, nte: { v: '~ 제한적 모드', t: 'partial' }, gi: { v: '✗ PvP 지원 제로', t: 'cross' } },
        { feature: '크로스플레이 지원', ananta: { v: '✓ 완벽 지원', t: 'check' }, nte: { v: '✓ 완벽 지원', t: 'check' }, gi: { v: '~ 부분 지원', t: 'partial' } },
        { feature: '비즈니스 모델', ananta: { v: '외형 치장품 독점', t: 'text' }, nte: { v: '캐릭터 뽑기 중심', t: 'text' }, gi: { v: '캐릭터 및 무기 뽑기', t: 'text' } },
        { feature: '출시 현황', ananta: { v: '2026년 3분기 (예정)', t: 'partial' }, nte: { v: '✓ 성황리 운영 (2026년 4월)', t: 'check' }, gi: { v: '✓ 성황리 운영 (2020년)', t: 'check' } },
      ]
    },
    DE: {
      colAnanta: 'ANANTA', colNte: 'NTE', colGi: 'Genshin Impact',
      featureHeader: 'Feature',
      footerNote: '* Daten stammen aus offiziellen Trailern, Entwicklerinterviews und Community-Tests. Einige Details zu Ananta sind Schätzungen vor dem Release.',
      rows: [
        { feature: 'Charakter-Gacha', ananta: { v: '✓ Keines', t: 'check' }, nte: { v: '✗ Ja', t: 'cross' }, gi: { v: '✗ Ja', t: 'cross' } },
        { feature: 'Open-World-Größe', ananta: { v: 'Manhattan-Maßstab', t: 'text' }, nte: { v: 'Moderne Großstadt', t: 'text' }, gi: { v: 'Sehr groß (7 Regionen)', t: 'text' } },
        { feature: 'Plattformen', ananta: { v: 'PC · PS5 · Mobil', t: 'text' }, nte: { v: 'PC · PS5 · Mobil', t: 'text' }, gi: { v: 'PC · PS4/5 · Mobil', t: 'text' } },
        { feature: 'Szenario', ananta: { v: 'Modernes urbanes Abenteuer', t: 'text' }, nte: { v: 'Moderne Stadt', t: 'text' }, gi: { v: 'Fantasiewelt (Teyvat)', t: 'text' } },
        { feature: 'NPC-KI-System', ananta: { v: '✓ Reaktiv (24/7)', t: 'check' }, nte: { v: '~ Einfach', t: 'partial' }, gi: { v: '~ Einfach', t: 'partial' } },
        { feature: 'Fortbewegung', ananta: { v: 'Greifhaken · Parkour · Fahrzeuge', t: 'text' }, nte: { v: 'Parkour · Fahrzeuge', t: 'text' }, gi: { v: 'Gleiten · Klettern', t: 'text' } },
        { feature: 'PvP-Modus', ananta: { v: '✓ Bestätigt', t: 'check' }, nte: { v: '~ Eingeschränkt', t: 'partial' }, gi: { v: '✗ Kein PvP', t: 'cross' } },
        { feature: 'Crossplay', ananta: { v: '✓ Vollständig', t: 'check' }, nte: { v: '✓ Vollständig', t: 'check' }, gi: { v: '~ Teilweise', t: 'partial' } },
        { feature: 'Geschäftsmodell', ananta: { v: 'Nur Kosmetika', t: 'text' }, nte: { v: 'Charakter-Schmiede', t: 'text' }, gi: { v: 'Charaktere- & Waffen-Gacha', t: 'text' } },
        { feature: 'Release-Status', ananta: { v: 'Q3 2026 (Schätzung)', t: 'partial' }, nte: { v: '✓ Live (April 2026)', t: 'check' }, gi: { v: '✓ Live (Seit 2020)', t: 'check' } },
      ]
    },
    FR: {
      colAnanta: 'ANANTA', colNte: 'NTE', colGi: 'Genshin Impact',
      featureHeader: 'Caractéristique',
      footerNote: "* Données issues des bandes-annonces officielles, des interviews de développeurs et des tests communautaires. Certains détails d'Ananta sont des estimations pré-lancement.",
      rows: [
        { feature: 'Gacha personnages', ananta: { v: '✓ Aucun', t: 'check' }, nte: { v: '✗ Oui', t: 'cross' }, gi: { v: '✗ Oui', t: 'cross' } },
        { feature: 'Taille du monde', ananta: { v: 'Échelle de Manhattan', t: 'text' }, nte: { v: 'Métropole moderne', t: 'text' }, gi: { v: 'Immense (7 nations)', t: 'text' } },
        { feature: 'Plateformes', ananta: { v: 'PC · PS5 · Mobile', t: 'text' }, nte: { v: 'PC · PS5 · Mobile', t: 'text' }, gi: { v: 'PC · PS4/5 · Mobile', t: 'text' } },
        { feature: 'Univers', ananta: { v: 'Urbain contemporain', t: 'text' }, nte: { v: 'Urbain contemporain', t: 'text' }, gi: { v: 'Médiéval Fantasy', t: 'text' } },
        { feature: 'IA des PNJ', ananta: { v: '✓ Réactive (24/7)', t: 'check' }, nte: { v: '~ Basique', t: 'partial' }, gi: { v: '~ Basique', t: 'partial' } },
        { feature: 'Déplacements', ananta: { v: 'Grappin · Parkour · Véhicules', t: 'text' }, nte: { v: 'Parkour · Véhicules', t: 'text' }, gi: { v: 'Planer · Escalade', t: 'text' } },
        { feature: 'Mode PvP', ananta: { v: '✓ Confirmé', t: 'check' }, nte: { v: '~ Limité', t: 'partial' }, gi: { v: '✗ Aucun PvP', t: 'cross' } },
        { feature: 'Cross-plateforme', ananta: { v: '✓ Intégral', t: 'check' }, nte: { v: '✓ Intégral', t: 'check' }, gi: { v: '~ Partiel', t: 'partial' } },
        { feature: 'Modèle économique', ananta: { v: 'Cosmétiques uniquement', t: 'text' }, nte: { v: 'Gacha de personnages', t: 'text' }, gi: { v: 'Gacha personnages & armes', t: 'text' } },
        { feature: 'Date de sortie', ananta: { v: 'T3 2026 (Est.)', t: 'partial' }, nte: { v: '✓ En ligne (Avril 2026)', t: 'check' }, gi: { v: '✓ En ligne (Depuis 2020)', t: 'check' } },
      ]
    },
    IT: {
      colAnanta: 'ANANTA', colNte: 'NTE', colGi: 'Genshin Impact',
      featureHeader: 'Caratteristica',
      footerNote: '* Dati tratti da trailer ufficiali, interviste agli sviluppatori e test comunitari. Alcuni dettagli su Ananta sono stime pre-rilascio.',
      rows: [
        { feature: 'Gacha personaggi', ananta: { v: '✓ Nessuno', t: 'check' }, nte: { v: '✗ Sì', t: 'cross' }, gi: { v: '✗ Sì', t: 'cross' } },
        { feature: 'Dimensioni mappa', ananta: { v: 'Scala Manhattan', t: 'text' }, nte: { v: 'Metropoli moderna', t: 'text' }, gi: { v: 'Vasta (7 nazioni)', t: 'text' } },
        { feature: 'Piattaforme', ananta: { v: 'PC · PS5 · Mobile', t: 'text' }, nte: { v: 'PC · PS5 · Mobile', t: 'text' }, gi: { v: 'PC · PS4/5 · Mobile', t: 'text' } },
        { feature: 'Scenario', ananta: { v: 'Fantasy urbano moderno', t: 'text' }, nte: { v: 'Fantasy urbano moderno', t: 'text' }, gi: { v: 'Fantasy classico', t: 'text' } },
        { feature: 'Intelligenza NPC', ananta: { v: '✓ Reattiva (24/7)', t: 'check' }, nte: { v: '~ Semplice', t: 'partial' }, gi: { v: '~ Semplice', t: 'partial' } },
        { feature: 'Spostamenti', ananta: { v: 'Rampino · Parkour · Automobili', t: 'text' }, nte: { v: 'Parkour · Veicoli', t: 'text' }, gi: { v: 'Volo · Scalata', t: 'text' } },
        { feature: 'Modalità PvP', ananta: { v: '✓ Confermato', t: 'check' }, nte: { v: '~ Limitato', t: 'partial' }, gi: { v: '✗ No PvP', t: 'cross' } },
        { feature: 'Cross-Platform', ananta: { v: '✓ Completo', t: 'check' }, nte: { v: '✓ Completo', t: 'check' }, gi: { v: '~ Parziale', t: 'partial' } },
        { feature: 'Monetizzazione', ananta: { v: 'Solo cosmetici', t: 'text' }, nte: { v: 'Gacha di personaggi', t: 'text' }, gi: { v: 'Gacha personaggi e armi', t: 'text' } },
        { feature: 'Stato di rilascio', ananta: { v: 'Q3 2026 (Stima)', t: 'partial' }, nte: { v: '✓ Attivo (Apr 2026)', t: 'check' }, gi: { v: '✓ Attivo (Dal 2020)', t: 'check' } },
      ]
    },
    RU: {
      colAnanta: 'ANANTA', colNte: 'NTE', colGi: 'Genshin Impact',
      featureHeader: 'Особенность',
      footerNote: '* Данные взяты из официальных трейлеров, интервью с разработчиками и тестирования сообщества. Некоторые параметры проекта Ananta являются оценками до запуска.',
      rows: [
        { feature: 'Гача купоны', ananta: { v: '✓ Отсутствует', t: 'check' }, nte: { v: '✗ Есть', t: 'cross' }, gi: { v: '✗ Есть', t: 'cross' } },
        { feature: 'Масштаб мира', ananta: { v: 'Масштаб Манхэттена', t: 'text' }, nte: { v: 'Современный мегаполис', t: 'text' }, gi: { v: 'Огромный (7 регионов)', t: 'text' } },
        { feature: 'Платформы', ananta: { v: 'PC · PS5 · Смартфоны', t: 'text' }, nte: { v: 'PC · PS5 · Смартфоны', t: 'text' }, gi: { v: 'PC · PS4/5 · Смартфоны', t: 'text' } },
        { feature: 'Сеттинг игры', ananta: { v: 'Городское фэнтези', t: 'text' }, nte: { v: 'Городское фэнтези', t: 'text' }, gi: { v: 'Классическое фэнтези', t: 'text' } },
        { feature: 'Реакция ИИ жителей', ananta: { v: '✓ Адаптивная (24/7)', t: 'check' }, nte: { v: '~ Простая', t: 'partial' }, gi: { v: '~ Простая', t: 'partial' } },
        { feature: 'Перемещение', ananta: { v: 'Крюк · Паркур · Транспорт', t: 'text' }, nte: { v: 'Паркур · Мотоциклы', t: 'text' }, gi: { v: 'Планирование · Подъем', t: 'text' } },
        { feature: 'Режим PvP', ananta: { v: '✓ Подтвержден', t: 'check' }, nte: { v: '~ Ограничен', t: 'partial' }, gi: { v: '✗ Без PvP', t: 'cross' } },
        { feature: 'Совместимость платформ', ananta: { v: '✓ Полная', t: 'check' }, nte: { v: '✓ Полная', t: 'check' }, gi: { v: '~ Частичная', t: 'partial' } },
        { feature: 'Монетизация', ananta: { v: 'Косметика (Скины)', t: 'text' }, nte: { v: 'Гача персонажей', t: 'text' }, gi: { v: 'Гача героев и оружия', t: 'text' } },
        { feature: 'Статус проекта', ananta: { v: 'Q3 2026 (Оценка)', t: 'partial' }, nte: { v: '✓ Доступен (Апр 2026)', t: 'check' }, gi: { v: '✓ Доступен (С 2020 г.)', t: 'check' } },
      ]
    },
  };
  return translations[lang] || translations.EN;
}

export function CompareSection() {
  const { t, lang } = useLanguage();
  const data = getCompareData(lang);

  return (
    <section id="compare" className="px-[5vw] py-20 bg-ananta-bg">
      <SectionLabel text={t('sections.compareLabel')} />
      <SectionTitle text={t('sections.compareTitle')} />
      
      <div className="overflow-x-auto overflow-y-hidden">
        <table className="w-full border-collapse border border-ananta-border min-w-[700px]">
          <thead>
            <tr>
              <th className="p-5 font-display text-[0.75rem] tracking-[0.1em] text-left border-b border-ananta-border bg-ananta-bg2 text-ananta-muted font-sans font-bold uppercase">
                {data.featureHeader}
              </th>
              <th className="p-5 font-display text-[1.1rem] tracking-[0.1em] text-center border-b border-ananta-border bg-ananta-bg2 text-ananta-neon">{data.colAnanta || 'ANANTA'}</th>
              <th className="p-5 font-display text-[1.1rem] tracking-[0.1em] text-center border-b border-ananta-border bg-ananta-bg2 text-[#a855f7]">{data.colNte || 'NTE'}</th>
              <th className="p-5 font-display text-[1.1rem] tracking-[0.1em] text-center border-b border-ananta-border bg-ananta-bg2 text-ananta-gold">{data.colGi || 'Genshin Impact'}</th>
            </tr>
          </thead>
          <tbody>
            {data.rows.map((row, i) => (
              <tr key={i} className="hover:bg-white/[0.02] transition-colors border-b border-ananta-border last:border-0">
                <td className="p-3.5 px-5 text-[0.82rem] font-semibold text-ananta-muted text-left border-b border-ananta-border whitespace-nowrap">{row.feature}</td>
                <td className="p-3.5 px-5 text-[0.82rem] text-center border-b border-ananta-border"><FormatVal item={row.ananta} /></td>
                <td className="p-3.5 px-5 text-[0.82rem] text-center border-b border-ananta-border"><FormatVal item={row.nte} /></td>
                <td className="p-3.5 px-5 text-[0.82rem] text-center border-b border-ananta-border"><FormatVal item={row.gi} /></td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <p className="mt-4 text-[0.75rem] text-ananta-muted">{data.footerNote}</p>
    </section>
  );
}

function FormatVal({ item }: { item: {v: string, t: string} }) {
  if (item.t === 'check') return <span className="text-[#4ade80] text-[1.1rem]">{item.v}</span>;
  if (item.t === 'cross') return <span className="text-ananta-neon2 text-[1.1rem]">{item.v}</span>;
  if (item.t === 'partial') return <span className="text-ananta-gold text-[0.8rem] font-bold">{item.v}</span>;
  return <span className="text-ananta-text">{item.v}</span>;
}

export function TrackerSection() {
  const { t } = useLanguage();
  const baseEvents = [
    { done: true },
    { done: true },
    { done: true },
    { done: true },
    { done: false },
    { done: false },
  ];
  const tr = (typeof t('trackerData') === 'object' ? t('trackerData') : []) as any[];
  const events = baseEvents.map((base, i) => {
    const d = tr[i] || {};
    return {
      ...base,
      date: d.date || '',
      title: d.title || '',
      desc: d.desc || ''
    };
  }).filter((x: any) => x.title);

  return (
    <section id="tracker" className="px-[5vw] py-20 bg-ananta-bg2">
      <SectionLabel text={t('sections.trackerLabel')} />
      <SectionTitle text={t('sections.trackerTitle')} />
      
      <div className="relative pl-10 max-w-[800px] timeline-border">
         {events.map((ev, i) => (
           <div key={i} className="relative pb-10">
             <div className={`absolute -left-[34px] top-1 w-3 h-3 rounded-full border-2 bg-ananta-bg ${
               ev.done 
                ? 'border-ananta-neon bg-ananta-neon shadow-[0_0_12px_rgba(0,229,255,0.4)]' 
                : 'border-ananta-gold shadow-[0_0_12px_rgba(240,180,41,0.4)] animate-pulse'
             }`} />
             <div className="font-mono text-[0.65rem] tracking-[0.15em] text-ananta-muted mb-1.5">{ev.date}</div>
             <div className="font-display text-[1.1rem] tracking-[0.06em] text-white mb-1.5">{ev.title}</div>
             <p className="text-[0.8rem] text-ananta-muted leading-[1.6]">{ev.desc}</p>
           </div>
         ))}
      </div>
    </section>
  );
}
