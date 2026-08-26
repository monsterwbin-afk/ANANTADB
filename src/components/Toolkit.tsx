import React, { useState, useEffect } from 'react';
import { useLanguage } from '../context/LanguageContext';
import { Zap, CheckSquare, Users, Trash2, Plus, Clock, Sparkles, Flame, Wind, HelpCircle, RefreshCw } from 'lucide-react';

const toolkitTranslations: Record<string, any> = {
  EN: {
    label: 'Player Tools',
    title: 'ACD AGENT TOOLKIT',
    sub: 'Your daily essential web companion for scheduling stamina recovery, planning team compositions, and tracking missions.',
    tabs: { resin: 'Stamina Tracker', checklist: 'Daily Memo', team: 'Squad Builder' },
    resin: {
      title: 'Interference Energy Tracker',
      desc: 'Set your current Energy. The system calculates regeneration timelines based on 1 point per 6 minutes.',
      current: 'Current Energy',
      max: 'Max Limit (240)',
      fullAt: 'Fully Recharged At',
      targetLabel: 'Calculate Target Reaching Time',
      targetPlaceholder: 'Enter target (e.g. 180)',
      hrs: 'hours',
      mins: 'minutes',
      today: 'Today',
      tomorrow: 'Tomorrow',
      overcapped: 'Energy is already full! Use it in districts to avoid waste.',
      timeNeeded: 'Time needed to reach {t} Energy:',
      projection: 'Stamina Forecast',
      hoursLabel: 'In {h} Hours',
      points: 'pts'
    },
    checklist: {
      title: 'Agent Daily & Weekly Memo',
      desc: 'Progress resets automatically. Saved locally on your browser.',
      daily: 'Daily Anomalies',
      weekly: 'Weekly Conquests',
      clear: 'Reset Checked',
      empty: 'No tasks. Click Reset to re-populate.',
      tasks: {
        d1: 'Clear 4 Daily Anomaly Zones',
        d2: 'Check-in Daily Express Guild & Dispatch',
        d3: 'Collect daily gift rewards from Taffy',
        d4: 'Participate in street random events',
        w1: 'Suppressed Fracture World High-Threat Bosses (3/3)',
        w2: 'Buy materials from Nova City Convenience Shop',
        w3: 'Complete District Investigation Quests',
        w4: 'Verify active redemption promo codes on AnantaDB.com'
      }
    },
    team: {
      title: 'Tactical Squad Synergizer',
      desc: 'Draft your four-agent team to analyze synergistic combat attributes and core elemental response combos.',
      element: 'Element',
      role: 'Archetype',
      synergy: 'Squad Synergies',
      noSynergy: 'No active combat synergy yet. Add agents to build active reactions.',
      emptySlot: 'Empty Slot',
      pickAgent: 'Draft Agent',
      choose: 'Select an Agent to assign',
      agents: {
        TAFFY: { name: 'TAFFY', element: 'Electric', role: 'Main Melee DPS' },
        RICHIE: { name: 'RICHIE', element: 'Wind', role: 'Support & CC' },
        LYKAIA: { name: 'LYKAIA', element: 'Fire', role: 'Aerial Combat Expert' },
        CAPTAIN: { name: 'CAPTAIN', element: 'Adaptive', role: 'Commander' }
      },
      deployed: 'Deployed',
      cancel: 'Cancel',
      combos: {
        overload: { title: 'Electric & Fire: Overload Burst', desc: 'Triggers area-of-effect elemental explosion, stripping shields and stunning elite enemies for 3.5 seconds.' },
        swirl: { title: 'Wind & Fire: Tornado Swirl', desc: 'Diffuses flames into a massive fiery vortex, amplifying Fire damage scaling by 30% over a wider radius.' },
        charge: { title: 'Electric & Wind: Kinetic Storm', desc: 'Creates a static gravity well pulling smaller anomalies together, shocking them continuously for 120% ATK.' },
        allConfirmed: { title: 'ACD Special Taskforce', desc: 'Squad comprises 100% official ACD field professionals. Global district movement speed boosted by 15%.' },
        balance: { title: 'Diverse Operation Team', desc: 'Three or more distinct elements. Squad damage reduction increased by 8%.' }
      }
    }
  },
  CN: {
    label: '刚需工具箱',
    title: '新星探测员专属工具箱',
    sub: '助您智能计算时空干涉力饱和时间、科学模拟最佳配队、跟踪日常备忘的随身利器，大幅提高游戏开荒效率。',
    tabs: { resin: '干涉力计算器', checklist: '每日记事本', team: '战术配队模拟' },
    resin: {
      title: '时空干涉力 (Resin) 实时预估',
      desc: '调整当前累积的干涉力（体力），系统根据 1点/6分钟 的标准流速，智能推算全满及指定目标的精确恢复时段。',
      current: '当前干涉力',
      max: '体力上限 (240)',
      fullAt: '体力溢出饱和时间',
      targetLabel: '指定目标体力计算',
      targetPlaceholder: '输入目标（例如 180）',
      hrs: '小时',
      mins: '分钟',
      today: '今天',
      tomorrow: '明天',
      overcapped: '体力已被填满！请尽快前往街区扫荡，避免出现溢出浪费。',
      timeNeeded: '恢复到 {t} 点体力所需时间：',
      projection: '未来体力值预测表',
      hoursLabel: '{h} 小时后',
      points: '点'
    },
    checklist: {
      title: '异常清除备忘清单',
      desc: '任务记录将保存在您的浏览器本地，可一键重置当前状态。',
      daily: '每日探险异常 (Daily)',
      weekly: '每周巨兽征讨 (Weekly)',
      clear: '重置所有勾选',
      empty: '清单空空如也，可点击右侧重置。',
      tasks: {
        d1: '每日街区异常扫荡 (4/4)（每日委托）',
        d2: '前往快递公司登记签到，并分发街区派遣任务（街区派遣）',
        d3: '在新星商业街区寻找塔菲，领取每日探员赠礼（每日赠礼）',
        d4: '处理一次随机发生的街头异常突发事件（街头事件）',
        w1: '征讨高危异常巨兽，消耗周本减半奖励次数 (3/3)（周本任务）',
        w2: '购买新星中央便利店的每周限购突破资源（每周商店）',
        w3: '完成当周街区探究与社会学研学（街区研学）',
        w4: '在 AnantaDB.com 查看是否出现未兑换的活跃礼包码（礼包兑换）'
      }
    },
    team: {
      title: '战术小队配队与元素连携',
      desc: '挑选大名单中的4名探员组成突击小队。系统将自动解析元素共鸣、反应链条及全队伤害增幅指标。',
      element: '属性',
      role: '干员定位',
      synergy: '当前获得的连携加成效果',
      noSynergy: '当前小队尚未激活任何共鸣反应。请添加探测员以获取共鸣加成。',
      emptySlot: '空虚待命位置',
      pickAgent: '分派探测员',
      choose: '选择以下探测员进入干预小队：',
      agents: {
        TAFFY: { name: '塔菲', element: '感电', role: '近战主力输出' },
        RICHIE: { name: '里栖', element: '疾风', role: '支援与控制' },
        LYKAIA: { name: '赛墨', element: '烈焰', role: '空战专家' },
        CAPTAIN: { name: '队长', element: '自适应', role: '指挥官' }
      },
      deployed: '已部署',
      cancel: '取消',
      combos: {
        overload: { title: '感电 & 烈焰：超载崩陷爆发', desc: '引发高额范围元素破甲判定，能大面积摧毁敌人白条（护盾）并削减精英怪行动条 3.5秒。' },
        swirl: { title: '疾风 & 烈焰：扩散龙卷风', desc: '扩散火种在爆炎点激起大型气旋，处于攻击范围内的敌军受到的烈焰伤害提升 30%。' },
        charge: { title: '感电 & 疾风：高磁聚引风暴', desc: '构建高压磁场漩涡，重力牵引弱小异常体朝风暴中心聚拢，并施加 120% 行动攻击的感电伤害。' },
        allConfirmed: { title: '新星特遣署高阶干员协同', desc: '队伍全部由 ACD 特遣署成员组成，干员处于城镇街区时，移速和跑酷飞檐走壁速度提升 15%。' },
        balance: { title: '自适应全能战术平衡', desc: '队员包含3种或以上不同元素类型时，全小队抗性与伤害减免提升 8%。' }
      }
    }
  },
  TW: {
    label: '剛需工具箱',
    title: '新星探測員專屬工具箱',
    sub: '助您智能計算時空干涉力飽和時間、科學模擬最佳配隊、跟蹤日常備忘的隨身利器，大幅提高遊戲開荒效率。',
    tabs: { resin: '干涉力計算器', checklist: '每日記事本', team: '戰術配隊模擬' },
    resin: {
      title: '時空干涉力 (Resin) 即時預估',
      desc: '調整當前累積的干涉力（體力），系統根據 1點/6分鐘 的標準流速，智能推算全滿及指定目標的精確恢復時段。',
      current: '當前干涉力',
      max: '體力上限 (240)',
      fullAt: '體力溢出飽和時間',
      targetLabel: '指定目標體力計算',
      targetPlaceholder: '輸入目標（例如 180）',
      hrs: '小時',
      mins: '分鐘',
      today: '今天',
      tomorrow: '明天',
      overcapped: '體力已被填滿！請儘快前往街區掃蕩，避免出現溢出浪費。',
      timeNeeded: '恢復到 {t} 點體力所需時間：',
      projection: '未來體力值預測表',
      hoursLabel: '{h} 小时後',
      points: '點'
    },
    checklist: {
      title: '異常清除備忘清單',
      desc: '任務記錄將保存在您的瀏覽器本地，可一鍵重置當前狀態。',
      daily: '每日冒險異常 (Daily)',
      weekly: '每周巨獸征討 (Weekly)',
      clear: '重置所有勾選',
      empty: '清單空空如也，可點擊右側重置。',
      tasks: {
        d1: '每日街區異常掃蕩 (4/4)（每日委託）',
        d2: '前往快遞公司登記簽到，並分發街區派遣任務（街區派遣）',
        d3: '在新星商業街區尋找塔菲，領取每日探員贈禮（每日贈禮）',
        d4: '處理一次隨機發生的街頭異常突發事件（街頭事件）',
        w1: '征討高危異常巨獸，消耗周本減半獎勵次數 (3/3)（周本任務）',
        w2: '購買新星中央便利店的每周限購突破資源（每周商店）',
        w3: '完成當周街區探究與社會學研學（街區研學）',
        w4: '在 AnantaDB.com 查看是否出現未兌換的活躍禮包碼（禮包兌換）'
      }
    },
    team: {
      title: '戰術小隊配隊與元素連攜',
      desc: '挑選大名單中的4名探員組成突擊小隊。系統將自動解析元素共鳴、反應鏈條及全隊傷害增幅指標。',
      element: '屬性',
      role: '干員定位',
      synergy: '當前獲得的連攜加成效果',
      noSynergy: '當前小隊尚未激活任何共鳴反應。請添加探測員以獲取共鳴加成。',
      emptySlot: '空虛待命位置',
      pickAgent: '分派探測員',
      choose: '選擇以下探測員進入干預小隊：',
      agents: {
        TAFFY: { name: '塔菲', element: '感電', role: '近戰主力輸出' },
        RICHIE: { name: '里棲', element: '疾風', role: '支援與控制' },
        LYKAIA: { name: '賽墨', element: '烈焰', role: '空戰專家' },
        CAPTAIN: { name: '隊長', element: '自適應', role: '指揮官' }
      },
      deployed: '已部署',
      cancel: '取消',
      combos: {
        overload: { title: '感電 & 烈焰：超載崩陷爆發', desc: '引發高額範圍元素破甲判定，能大面積摧毀敵人白條（護盾）並削減精英怪行動條 3.5秒。' },
        swirl: { title: '疾風 & 烈焰：擴散龍捲風', desc: '擴散火種在爆炎點激起大型氣旋，處於攻擊範圍內的敵軍受到的烈焰傷害提升 30%。' },
        charge: { title: '感电 & 疾風：高磁聚引風暴', desc: '構建高壓磁場漩渦，重力牽引弱小異常体朝風暴中心聚攏，並施加 120% 行動攻擊的感電傷害。' },
        allConfirmed: { title: '新星特遣署高階干員協同', desc: '隊伍全部由 ACD 特遣署成員組成，干員處於城鎮街區時，移速和跑酷飛簷走壁速度提升 15%。' },
        balance: { title: '自適應全能戰術平衡', desc: '隊員包含3種 or 以上不同元素類型時，全小隊抗性與傷害減免提升 8%。' }
      }
    }
  },
  JP: {
    label: 'エージェントツール',
    title: 'ACDエージェント便利ツール',
    sub: 'スタミナ回復の追跡、編成シミュレーション、ミッション管理に役立つ統合ツールです。',
    tabs: { resin: 'スタミナ計算', checklist: 'デイリーメモ', team: 'チーム編成' },
    resin: {
      title: '時空干渉力 (Resin) リアルタイム予測',
      desc: '現在のエネルギー（スタミナ）を設定すると、6分に1回復するペースに基づいて、全回復や目標値に達する時間を正確に算出します。',
      current: '現在の干渉力',
      max: 'スタミナ上限 (240)',
      fullAt: '全回復予測時刻',
      targetLabel: '目標の干渉力時間計算',
      targetPlaceholder: '目標値を入力 (例: 180)',
      hrs: '時間',
      mins: '分',
      today: '今日',
      tomorrow: '明日',
      overcapped: 'スタミナが満タンです！溢れるのを防ぐために、早めに消費しましょう。',
      timeNeeded: 'スタミナが {t} に達するまでの時間：',
      projection: '未来の干渉力推移予測',
      hoursLabel: '{h} 時間後',
      points: 'ポイント'
    },
    checklist: {
      title: '異常クリア備忘録（タスク一覧）',
      desc: '進行状況はブラウザのローカルストレージに保存され、毎日自動でリセット可能です。',
      daily: 'デイリーミッション',
      weekly: 'ウィークリーミッション',
      clear: '選択したのをリセット',
      empty: 'タスクがありません。',
      tasks: {
        d1: 'デイリー異常調査を4回クリア（デイリー依頼）',
        d2: 'クロネコ宅急便などでログイン＆派遣活動（街区派遣）',
        d3: '新星エリアのタフィーからデイリーギフトを受け取る（デイリープレゼント）',
        d4: '街中のランダムエンカウント事件を解決（ストリート事件）',
        w1: '高脅威なボスを撃破し、週ボス報酬を受け取る (3/3)（周回ボス）',
        w2: '新星中央コンビニで週制限の育成素材を購入（週刊ショップ）',
        w3: '当週の街区調査・社会学研究クエストを達成（街区研究）',
        w4: 'AnantaDB.com で最新の引き換えコードをチェック（コード引き換え）'
      }
    },
    team: {
      title: '戦略部隊・元素シナジー分析',
      desc: '一覧から4名のエージェントを選択してチームを編成し、元素反応やチームバフを自動解析します。',
      element: '属性',
      role: 'タイプ',
      synergy: '適応されるシナジー効果',
      noSynergy: 'シナジーはまだありません。エージェントを追加してください。',
      emptySlot: '待機中スロット',
      pickAgent: '探員を選択する',
      choose: 'エージェントを追加する：',
      agents: {
        TAFFY: { name: 'タフィー', element: '感電', role: 'メイン近接DPS' },
        RICHIE: { name: 'リチー', element: '疾風', role: 'サポート＆CC' },
        LYKAIA: { name: 'ライカイア', element: '烈焔', role: '空中戦闘専門' },
        CAPTAIN: { name: 'キャプテン', element: 'アダプティブ', role: '司令官' }
      },
      deployed: '配備済',
      cancel: 'キャンセル',
      combos: {
        overload: { title: '感電 ＆ 烈焔：過負荷バースト', desc: '広範囲のシールドに大ダメージを与え、エリートモンスターを 3.5秒間 気絶させます。' },
        swirl: { title: '疾風 ＆ 烈焔：拡散竜巻', desc: '炎を拡散させ大規模な竜巻を形成し、攻撃範囲内の敵への炎属性ダメージを 30% 上昇させます。' },
        charge: { title: '感電 ＆ 疾風：高磁重力ストーム', desc: '強力な重力異常を生成し小型の敵を引き寄せるとともに、攻撃力の 120% の感電持続ダメージを与えます。' },
        allConfirmed: { title: 'A.C.D.公式機動部隊', desc: 'メンバー全員が公式のA.C.D.エージェントです。街区での移動速度とパルクール速度が 15% 上昇します。' },
        balance: { title: 'マルチ戰術バランスライン', desc: 'チームに3つ以上の異なる元素が存在する場合、全メンバーの被ダメージが 8% 減少します。' }
      }
    }
  },
  KR: {
    label: '에이전트 헬퍼',
    title: 'ACD 대원 전용 도구함',
    sub: '스태미나 회복 추적, 추천 파티 구성 시뮬레이터, 일일 임무 기록 및 성장을 돕는 도구입니다.',
    tabs: { resin: '스태미나 계산기', checklist: '일일 캘린더', team: '파티 시뮬레이터' },
    resin: {
      title: '시공 간섭력 (Resin) 실시간 예측',
      desc: '현재 에너지(스태미나)를 설정하면, 6분에 1 회복되는 효율에 따라 완전 회복 및 목표치 달성 소요 시간을 예측합니다.',
      current: '현재 시공 간섭력',
      max: '스태미나 한도 (240)',
      fullAt: '완전 충전 예정 시각',
      targetLabel: '지정 목표 시간 계산',
      targetPlaceholder: '목표 수치 입력 (예: 180)',
      hrs: '시간',
      mins: '분',
      today: '오늘',
      tomorrow: '내일',
      overcapped: '스태미나가 가득 찼습니다! 낭비를 방지하기 위해 구역 던전에서 어서 사용하세요.',
      timeNeeded: '스태미나가 {t} 포인트에 달하기까지 필요한 시간:',
      projection: '미래 스태미나 추이 예측',
      hoursLabel: '{h} 시간 후',
      points: 'pt'
    },
    checklist: {
      title: '임무 클리어 체크리스트',
      desc: '진행 상황은 브라우저 로컬 저장소에 안전하게 보존되며 언제든 초기화 가능합니다.',
      daily: '일일 이상 임무',
      weekly: '주간 토벌 임무',
      clear: '체크 항목 초기화',
      empty: '임무 리스트가 비어 있습니다.',
      tasks: {
        d1: '일일 의뢰 구역 4회 이상 소탕 (일일 던전)',
        d2: '택배사 출석 체크 및 대원 파견 수령 (구역 파견)',
        d3: '네오 시티 상가에서 타피와 조우하여 일일 선물 수령 (일일 선물)',
        d4: '무작위 거리 돌발 이상 사전 해결 (길거리 랜덤 이벤트)',
        w1: '고위험 침식 보스 처치 주간 전리품 획득 (3/3) (주간 레이드)',
        w2: '상가 점포에서 주간 성장 재료 패키지 구매 (주간 상점)',
        w3: '구역 탐사 연구 및 어반 라이프 학술 퀘스트 완수 (구역 연구)',
        w4: 'AnantaDB.com 에서 최신 활성화 코드 사용 여부 검증 (쿠폰 사용)'
      }
    },
    team: {
      title: '전술 스쿼드 연계 및 일치 분석',
      desc: '대원 리스트 중 4명을 선택하여 팀을 빌드하면 스쿼드 시너지와 원소 보너스를 자동 평가합니다.',
      element: '속성',
      role: '포지션',
      synergy: '현재 활성화된 연계 보너스',
      noSynergy: '활성화된 시너지가 없습니다. 에이전트를 스쿼드에 배정하세요.',
      emptySlot: '대기 중인 슬롯',
      pickAgent: '에이전트 지정',
      choose: '배정할 대원을 선택하세요:',
      agents: {
        TAFFY: { name: '타피', element: '감전', role: '메인 근접 DPS' },
        RICHIE: { name: '리치', element: '돌풍', role: '서포트 & CC' },
        LYKAIA: { name: '라이카이아', element: '화염', role: '공중 전투 전문' },
        CAPTAIN: { name: '캡틴', element: '적응형', role: '지휘관' }
      },
      deployed: '배치됨',
      cancel: '취소',
      combos: {
        overload: { title: '감전 & 화염: 과부하 붕괴 폭발', desc: '광범위한 원소 보호막을 지우고 엘리트 등급 이하의 적을 3.5초간 기절 상태로 만듭니다.' },
        swirl: { title: '돌풍 & 화염: 확산 소용돌이', desc: '주변으로 화염을 퍼뜨리는 돌풍을 발생시키고 범위 내 모든 적들의 화염 피해를 30% 가중시킵니다.' },
        charge: { title: '감전 & 돌풍: 고자기 인력 스톰', desc: '초고압 자기장 블랙홀을 형성해 잡몹들을 끌어당기고, 아군 공격력의 120% 에 달하는 감전 지속 피해를 줍니다.' },
        allConfirmed: { title: 'ACD 기동특무대 전문 배정', desc: '팀원 전체가 정식 ACD 소속 대원입니다. 구역 맵 내 이동 및 파르쿠르 벽타기 속도가 15% 빨라집니다.' },
        balance: { title: '올라운더 멀티 전술 밸런스', desc: '팀 내 서로 다른 원소속성이 3종 이상인 경우, 아군 전체의 받는 피해량이 8% 감소합니다.' }
      }
    }
  }
};

// Fallback logic for German, French, Italian, Russian
const fillFallbacks = () => {
  const keys = ['DE', 'FR', 'IT', 'RU'];
  const mapping: { [key: string]: string } = {
    DE: 'EN', FR: 'EN', IT: 'EN', RU: 'EN'
  };
  keys.forEach(k => {
    const parentCode = mapping[k];
    toolkitTranslations[k] = JSON.parse(JSON.stringify(toolkitTranslations[parentCode]));
    // Apply clean translated overrides for high polish
    if (k === 'DE') {
      toolkitTranslations[k].label = 'ACD-Tools';
      toolkitTranslations[k].title = 'ACD-Agenten-Toolkit';
      toolkitTranslations[k].tabs = { resin: 'Stamina-Tracker', checklist: 'Tägliche Info', team: 'Kombinationsplaner' };
      toolkitTranslations[k].checklist.daily = 'Tägliche Anomalien';
      toolkitTranslations[k].checklist.weekly = 'Wöchentliche Eroberungen';
      toolkitTranslations[k].checklist.clear = 'Zurücksetzen';
      toolkitTranslations[k].checklist.empty = 'Keine Aufgaben. Klicken Sie zum Zurücksetzen.';
      toolkitTranslations[k].checklist.tasks = {
        d1: '4 tägliche Anomaliezonen beseitigen',
        d2: 'Täglicher Express-Guild-Check-in & Dispatch',
        d3: 'Tägliche Geschenke von Taffy sammeln',
        d4: 'Teilnehmen an straßenrandom-Events',
        w1: 'Hohe Bedrohung Bosse in Fracture World unterdrücken (3/3)',
        w2: 'Materialien im Nova City Convenience Shop kaufen',
        w3: 'Distrikt-Untersuchungsquests abschließen',
        w4: 'Aktive Einlösungscodes auf AnantaDB.com überprüfen'
      };
      toolkitTranslations[k].team.element = 'Element';
      toolkitTranslations[k].team.role = 'Rolle';
      toolkitTranslations[k].team.synergy = 'Squad-Synergien';
      toolkitTranslations[k].team.noSynergy = 'Noch keine aktive Kampfsynergie. Fügen Sie Agenten hinzu, um aktive Reaktionen zu erstellen.';
      toolkitTranslations[k].team.emptySlot = 'Leerer Slot';
      toolkitTranslations[k].team.pickAgent = 'Agent auswählen';
      toolkitTranslations[k].team.choose = 'Wählen Sie einen Agenten zum Zuweisen aus';
      toolkitTranslations[k].team.combos = {
        overload: { title: 'Elektrik & Feuer: Überlastungsausbruch', desc: 'Löst eine Flächen-Elementexplosion aus, die Schilde abbaut und Elitefeinde für 3,5 Sekunden betäubt.' },
        swirl: { title: 'Wind & Feuer: Tornado Wirbel', desc: 'Diffundiert Flammen zu einem massiven feurigen Wirbel, der den Feuerschaden um 30% über einen breiteren Radius verstärkt.' },
        charge: { title: 'Elektrik & Wind: Kinetischer Sturm', desc: 'Erzeugt einen statischen Gravitationsbrunnen, der kleinere Anomalien zusammenzieht und sie kontinuierlich mit 120% ATK schockiert.' },
        allConfirmed: { title: 'ACD Spezialtaskforce', desc: 'Squad besteht zu 100% aus offiziellen ACD-Feldprofis. Die globale Distriktsbewegungsgeschwindigkeit um 15% erhöht.' },
        balance: { title: 'Diverse Operationsmannschaft', desc: 'Drei oder mehr verschiedene Elemente. Der Squad-Schadensminderung wird um 8% erhöht.' }
      };
      toolkitTranslations[k].team.agents = {
        TAFFY: { name: 'TAFFY', element: 'Elektrik', role: 'Haupt Nahkampf DPS' },
        RICHIE: { name: 'RICHIE', element: 'Wind', role: 'Unterstützung & CC' },
        LYKAIA: { name: 'LYKAIA', element: 'Feuer', role: 'Luftkampf Experte' },
        CAPTAIN: { name: 'KAPITÄN', element: 'Adaptiv', role: 'Kommandant' }
      };
      toolkitTranslations[k].team.deployed = 'Deployed';
      toolkitTranslations[k].team.cancel = 'Abbrechen';
    } else if (k === 'FR') {
      toolkitTranslations[k].label = 'Outils ACD';
      toolkitTranslations[k].title = 'Boîte d’outils ACD';
      toolkitTranslations[k].tabs = { resin: 'Suivi Endurance', checklist: 'Mémo Quotidien', team: 'Simulateur d’Équipe' };
      toolkitTranslations[k].checklist.daily = 'Anomalies Quotidiennes';
      toolkitTranslations[k].checklist.weekly = 'Conquêtes Hebdomadaires';
      toolkitTranslations[k].checklist.clear = 'Réinitialiser';
      toolkitTranslations[k].checklist.empty = 'Aucune tâche. Cliquez pour réinitialiser.';
      toolkitTranslations[k].checklist.tasks = {
        d1: 'Nettoyer 4 zones d’anomalie quotidiennes',
        d2: 'Vérification quotidienne & Dispatch',
        d3: 'Collecter les récompenses quotidiennes de Taffy',
        d4: 'Participer aux événements de rue aléatoires',
        w1: 'Bosses à haute menace du Monde Fracturé (3/3)',
        w2: 'Acheter des matériaux dans la boutique Nova City',
        w3: 'Compléter les quêtes d’investigation de district',
        w4: 'Vérifier les codes promo actifs sur AnantaDB.com'
      };
      toolkitTranslations[k].team.element = 'Élément';
      toolkitTranslations[k].team.role = 'Archetype';
      toolkitTranslations[k].team.synergy = 'Synergies d’Équipe';
      toolkitTranslations[k].team.noSynergy = 'Aucune synergie de combat active pour le moment. Ajoutez des agents pour créer des réactions actives.';
      toolkitTranslations[k].team.emptySlot = 'Emplacement Vide';
      toolkitTranslations[k].team.pickAgent = 'Sélectionner Agent';
      toolkitTranslations[k].team.choose = 'Sélectionnez un Agent à assigner';
      toolkitTranslations[k].team.combos = {
        overload: { title: 'Électricité & Feu : Explosion de Surcharge', desc: 'Déclenche une explosion élémentaire de zone, qui dépose les boucliers et stunit les ennemis d\'élite pendant 3,5 secondes.' },
        swirl: { title: 'Vent & Feu : Tourbillon de Tornade', desc: 'Diffuse les flammes en un vortex de feu massif, amplifiant les dégâts de Feu de 30% sur un rayon plus large.' },
        charge: { title: 'Électricité & Vent : Tempête Cinétique', desc: 'Crée un puits de gravité statique qui attire les petites anomalies, les électrocutant en continu pour 120% ATK.' },
        allConfirmed: { title: 'Task Force Spéciale ACD', desc: 'L\'équipe est composée à 100% de professionnels de terrain officiels de l\'ACD. Vitesse de déplacement dans les districts augmentée de 15%.' },
        balance: { title: 'Équipe d\'Opérations Diversifiée', desc: 'Trois éléments distincts ou plus. Réduction des dégâts de l\'équipe augmentée de 8%.' }
      };
      toolkitTranslations[k].team.agents = {
        TAFFY: { name: 'TAFFY', element: 'Électricité', role: 'DPS Mêlée Principal' },
        RICHIE: { name: 'RICHIE', element: 'Vent', role: 'Support & CC' },
        LYKAIA: { name: 'LYKAIA', element: 'Feu', role: 'Expert en Combat Aérien' },
        CAPTAIN: { name: 'CAPITAINE', element: 'Adaptatif', role: 'Commandant' }
      };
      toolkitTranslations[k].team.deployed = 'Déployé';
      toolkitTranslations[k].team.cancel = 'Annuler';
    } else if (k === 'IT') {
      toolkitTranslations[k].label = 'Strumenti ACD';
      toolkitTranslations[k].title = 'Kit Strumenti ACD';
      toolkitTranslations[k].tabs = { resin: 'Tracker Stamina', checklist: 'Promemoria', team: 'Costruttore di Squadra' };
      toolkitTranslations[k].checklist.daily = 'Anomalie Giornaliere';
      toolkitTranslations[k].checklist.weekly = 'Conquiste Settimanali';
      toolkitTranslations[k].checklist.clear = 'Reimposta';
      toolkitTranslations[k].checklist.empty = 'Nessuna attività. Clicca per reimpostare.';
      toolkitTranslations[k].checklist.tasks = {
        d1: 'Cancella 4 Zone di Anomalie Giornaliere',
        d2: 'Check-in quotidiano Guild Express & Dispatch',
        d3: 'Raccogli ricompense giornaliere da Taffy',
        d4: 'Partecipa ad eventi casuali di strada',
        w1: 'Boss ad Alta Minaccia del Mondo Fracture (3/3)',
        w2: 'Compra materiali dal Convenience Shop di Nova City',
        w3: 'Completa le Ricerche di Distretto',
        w4: 'Verifica codici promozionali attivi su AnantaDB.com'
      };
      toolkitTranslations[k].team.element = 'Elemento';
      toolkitTranslations[k].team.role = 'Archetipo';
      toolkitTranslations[k].team.synergy = 'Sinergie della Squadra';
      toolkitTranslations[k].team.noSynergy = 'Ancora nessuna sinergia di combattimento attiva. Aggiungi agenti per creare reazioni attive.';
      toolkitTranslations[k].team.emptySlot = 'Slot Vuoto';
      toolkitTranslations[k].team.pickAgent = 'Seleziona Agente';
      toolkitTranslations[k].team.choose = 'Seleziona un Agente da assegnare';
      toolkitTranslations[k].team.combos = {
        overload: { title: 'Elettricità & Fuoco: Burst di Sovraccarico', desc: 'Attiva un\'esplosione elementare d\'area, rimuovendo gli scudi e stordendo i nemici elite per 3,5 secondi.' },
        swirl: { title: 'Vento & Fuoco: Tornado Vortice', desc: 'Diffonde le fiamme in un vortice infuocato massivo, amplificando il danno da Fuoco del 30% su un raggio più ampio.' },
        charge: { title: 'Elettricità & Vento: Tempesta Cinetica', desc: 'Crea un pozzo di gravità statico che attrae le anomalie più piccole, urtandole continuamente per 120% ATK.' },
        allConfirmed: { title: 'Task Force Speciale ACD', desc: 'La squadra è composta al 100% da professionisti ufficiali del campo ACD. Velocità di movimento nel distretto globale aumentata del 15%.' },
        balance: { title: 'Squadra Operativa Diversa', desc: 'Tre o più elementi distinti. Riduzione dei danni della squadra aumentata dell\'8%.' }
      };
      toolkitTranslations[k].team.agents = {
        TAFFY: { name: 'TAFFY', element: 'Elettricità', role: 'DPS Melee Principale' },
        RICHIE: { name: 'RICHIE', element: 'Vento', role: 'Supporto & CC' },
        LYKAIA: { name: 'LYKAIA', element: 'Fuoco', role: 'Esperto di Combattimento Aereo' },
        CAPTAIN: { name: 'CAPITANO', element: 'Adattivo', role: 'Comandante' }
      };
      toolkitTranslations[k].team.deployed = 'Distribuito';
      toolkitTranslations[k].team.cancel = 'Annulla';
    } else if (k === 'RU') {
      toolkitTranslations[k].label = 'Инструменты ACD';
      toolkitTranslations[k].title = 'Инструментарий ACD';
      toolkitTranslations[k].tabs = { resin: 'Счетчик энергии', checklist: 'Ежедневные дела', team: 'Симулятор отряда' };
      toolkitTranslations[k].checklist.daily = 'Ежедневные Аномалии';
      toolkitTranslations[k].checklist.weekly = 'Недельные Завоевания';
      toolkitTranslations[k].checklist.clear = 'Сбросить';
      toolkitTranslations[k].checklist.empty = 'Нет задач. Нажмите для сброса.';
      toolkitTranslations[k].checklist.tasks = {
        d1: 'Очистить 4 зоны ежедневных аномалий',
        d2: 'Ежедневная проверка гильдии и диспетчерская служба',
        d3: 'Собрать ежедневные подарки у Тэффи',
        d4: 'Участвовать в уличных случайных событиях',
        w1: 'Подавление угрожающих боссов в мире Фрактура (3/3)',
        w2: 'Купить материалы в магазине Nova City',
        w3: 'Завершить квесты расследования районов',
        w4: 'Проверить активные промокоды на AnantaDB.com'
      };
      toolkitTranslations[k].team.element = 'Элемент';
      toolkitTranslations[k].team.role = 'Архетип';
      toolkitTranslations[k].team.synergy = 'Синергия Отряда';
      toolkitTranslations[k].team.noSynergy = 'Пока нет активной боевой синергии. Добавьте агентов, чтобы создать активные реакции.';
      toolkitTranslations[k].team.emptySlot = 'Пустой Слот';
      toolkitTranslations[k].team.pickAgent = 'Выбрать Агента';
      toolkitTranslations[k].team.choose = 'Выберите Агента для назначения';
      toolkitTranslations[k].team.combos = {
        overload: { title: 'Электричество & Огонь: Разряд Перенапряжения', desc: 'Запускает элементарную взрывную волну по площади, снимая щиты и оглушая элитных врагов на 3,5 секунды.' },
        swirl: { title: 'Ветер & Огонь: Торнадо Вихрь', desc: 'Рассеивает пламя в огромный огненный вихрь, увеличивая урон огнем на 30% на большем радиусе.' },
        charge: { title: 'Электричество & Ветер: Кинетическая Буря', desc: 'Создает статическое гравитационное углубление, притягивающее мелкие аномалии и непрерывно поражающее их током на 120% АТК.' },
        allConfirmed: { title: 'Спецотряд ACD', desc: 'Отряд состоит на 100% из официальных полевых профессионалов ACD. Глобальная скорость передвижения по району увеличена на 15%.' },
        balance: { title: 'Разнообразная Оперативная Команда', desc: 'Три или более различных элемента. Снижение урона отряда увеличено на 8%.' }
      };
      toolkitTranslations[k].team.agents = {
        TAFFY: { name: 'ТАФФИ', element: 'Электричество', role: 'Основной ближний DPS' },
        RICHIE: { name: 'РИЧИ', element: 'Ветер', role: 'Поддержка & CC' },
        LYKAIA: { name: 'ЛАЙКА', element: 'Огонь', role: 'Эксперт по воздушному бою' },
        CAPTAIN: { name: 'КАПИТАН', element: 'Адаптивный', role: 'Командир' }
      };
      toolkitTranslations[k].team.deployed = 'Развёрнут';
      toolkitTranslations[k].team.cancel = 'Отмена';
    }
  });
};
fillFallbacks();

const CONFIRMED_AGENTS = [
  { id: 'TAFFY', name: 'TAFFY / 塔菲', element: 'Electric / 感電', badge: 'Electric', role: 'Main Melee DPS', image: 'https://www.anantagame.com/pc/gw/20250904162009/assets/role-tafei_0ed12004.jpg', color: '#eab308' },
  { id: 'RICHIE', name: 'RICHIE / 里栖', element: 'Wind / 疾風', badge: 'Wind', role: 'Support & CC', image: 'https://www.anantagame.com/pc/gw/20250904162009/assets/role-lixi_a69544ea.jpg', color: '#4ade80' },
  { id: 'LYKAIA', name: 'LYKAIA / 赛墨', element: 'Fire / 烈焰', badge: 'Fire', role: 'Aerial Combat Expert', image: 'https://www.anantagame.com/pc/gw/20250904162009/assets/role-saimo_d1a180a7.jpg', color: '#ff4d6d' },
  { id: 'CAPTAIN', name: 'CAPTAIN / 隊長', element: 'Adaptive / 自適應', badge: 'Adaptive', role: 'Commander', image: 'https://www.anantagame.com/pc/gw/20250904162009/assets/role-captain_c7ae1344.jpg', color: '#00e5ff' }
];

export function ToolkitSection() {
  const { lang } = useLanguage();
  const tLocal = toolkitTranslations[lang] || toolkitTranslations['EN'];
  const [activeTab, setActiveTab] = useState<'resin' | 'checklist' | 'team'>('resin');

  // Resin variables
  const [currentResin, setCurrentResin] = useState<number>(120);
  const [targetResin, setTargetResin] = useState<string>('180');
  const [resinTimeInfo, setResinTimeInfo] = useState({ fullTime: '', fullDay: '', hoursNeeded: 0, minutesNeeded: 0 });

  // Checklist variables
  const [checklist, setChecklist] = useState<{ id: string; completed: boolean; textKey: string; isWeekly: boolean }[]>([]);

  // Team variables
  const [selectedSquad, setSelectedSquad] = useState<(typeof CONFIRMED_AGENTS[0] | null)[]>([null, null, null, null]);
  const [isPickerOpen, setIsPickerOpen] = useState<number | null>(null);

  // Initialize checklist from localStorage
  useEffect(() => {
    const defaultTasks = [
      { id: 'd1', completed: false, textKey: 'd1', isWeekly: false },
      { id: 'd2', completed: false, textKey: 'd2', isWeekly: false },
      { id: 'd3', completed: false, textKey: 'd3', isWeekly: false },
      { id: 'd4', completed: false, textKey: 'd4', isWeekly: false },
      { id: 'w1', completed: false, textKey: 'w1', isWeekly: true },
      { id: 'w2', completed: false, textKey: 'w2', isWeekly: true },
      { id: 'w3', completed: false, textKey: 'w3', isWeekly: true },
      { id: 'w4', completed: false, textKey: 'w4', isWeekly: true }
    ];

    try {
      const stored = localStorage.getItem('ananta_acd_toolkit_checklist');
      if (stored) {
        const parsed = JSON.parse(stored);
        // Sync with textKey updates if any
        const synced = defaultTasks.map(t => {
          const match = parsed.find((p: any) => p.id === t.id);
          return { ...t, completed: match ? match.completed : false };
        });
        setChecklist(synced);
      } else {
        setChecklist(defaultTasks);
      }
    } catch {
      setChecklist(defaultTasks);
    }
  }, []);

  const handleToggleCheck = (id: string) => {
    const updated = checklist.map(item => item.id === id ? { ...item, completed: !item.completed } : item);
    setChecklist(updated);
    localStorage.setItem('ananta_acd_toolkit_checklist', JSON.stringify(updated));
  };

  const handleResetChecklist = () => {
    const reseted = checklist.map(item => ({ ...item, completed: false }));
    setChecklist(reseted);
    localStorage.setItem('ananta_acd_toolkit_checklist', JSON.stringify(reseted));
  };

  // Compute resin timeline
  useEffect(() => {
    const limit = 240;
    const minutesPerPoint = 6;
    if (currentResin >= limit) {
      setResinTimeInfo({ fullTime: '', fullDay: '', hoursNeeded: 0, minutesNeeded: 0 });
      return;
    }
    const neededPoints = limit - currentResin;
    const totalMinutesNeeded = neededPoints * minutesPerPoint;

    const targetTime = new Date(Date.now() + totalMinutesNeeded * 60 * 1000);
    const hourString = String(targetTime.getHours()).padStart(2, '0');
    const minuteString = String(targetTime.getMinutes()).padStart(2, '0');
    
    // Check if tomorrow
    const isTomorrow = targetTime.getDate() !== new Date().getDate();
    const dayLabel = isTomorrow ? tLocal.resin.tomorrow : tLocal.resin.today;

    setResinTimeInfo({
      fullTime: `${hourString}:${minuteString}`,
      fullDay: dayLabel,
      hoursNeeded: Math.floor(totalMinutesNeeded / 60),
      minutesNeeded: totalMinutesNeeded % 60
    });
  }, [currentResin, tLocal]);

  // Handle Team pickers
  const handleAssignAgent = (emptySlotIndex: number, agentId: string) => {
    const chosen = CONFIRMED_AGENTS.find(a => a.id === agentId);
    if (!chosen) return;
    
    // Prevent duplicates in team
    const nextSquad = [...selectedSquad];
    const existingIndex = nextSquad.findIndex(a => a && a.id === agentId);
    if (existingIndex !== -1) {
      nextSquad[existingIndex] = null;
    }

    nextSquad[emptySlotIndex] = chosen;
    setSelectedSquad(nextSquad);
    setIsPickerOpen(null);
  };

  const handleRemoveAgent = (index: number) => {
    const nextSquad = [...selectedSquad];
    nextSquad[index] = null;
    setSelectedSquad(nextSquad);
  };

  const computeActiveCombos = () => {
    const activeIds = selectedSquad.filter((x): x is typeof CONFIRMED_AGENTS[0] => x !== null);
    if (activeIds.length === 0) return [];

    const activeCombos: any[] = [];
    const elements = activeIds.map(a => a.badge);
    const hasElectric = elements.includes('Electric');
    const hasFire = elements.includes('Fire');
    const hasWind = elements.includes('Wind');

    if (hasElectric && hasFire) {
      activeCombos.push(tLocal.team.combos.overload);
    }
    if (hasWind && hasFire) {
      activeCombos.push(tLocal.team.combos.swirl);
    }
    if (hasElectric && hasWind) {
      activeCombos.push(tLocal.team.combos.charge);
    }

    // All Confirmed ACD agents (4 slots filled with official agents)
    const filledCount = activeIds.length;
    if (filledCount === 4) {
      activeCombos.push(tLocal.team.combos.allConfirmed);
    }

    // Balances elements (3 or more distinct elements)
    const distinctElements = new Set(elements).size;
    if (distinctElements >= 3) {
      activeCombos.push(tLocal.team.combos.balance);
    }

    return activeCombos;
  };

  const currentCombos = computeActiveCombos();

  // Helper calculation for custom Target Energy point
  const getTargetCalculatedMsg = () => {
    const num = parseInt(targetResin);
    if (!targetResin || isNaN(num)) {
      return { msg: '', type: 'empty' };
    }
    if (num <= currentResin) {
      if (lang === 'CN' || lang === 'TW') {
        return { msg: '目标数值低于或等于当前体力，已达成！', type: 'info' };
      } else if (lang === 'JP') {
        return { msg: '目標が現在のスタミナ以下です。すでに達成されています！', type: 'info' };
      } else if (lang === 'KR') {
        return { msg: '목표치가 현재 스태미나 이하입니다. 이미 달성되었습니다!', type: 'info' };
      } else {
        return { msg: 'Target is lower than or equal to current stamina. Already reached!', type: 'info' };
      }
    }
    if (num > 240) {
      if (lang === 'CN' || lang === 'TW') {
        return { msg: '目标数值超过了最大体力上限 240。', type: 'warn' };
      } else if (lang === 'JP') {
        return { msg: '目標値が最大上限の240を超えています。', type: 'warn' };
      } else if (lang === 'KR') {
        return { msg: '목표치가 최대 한도인 240을 초과했습니다.', type: 'warn' };
      } else {
        return { msg: 'Target exceeds max stamina limit of 240.', type: 'warn' };
      }
    }
    
    const needed = num - currentResin;
    const mins = needed * 6;
    const h = Math.floor(mins / 60);
    const m = mins % 60;
    
    const targetDate = new Date(Date.now() + mins * 60 * 1000);
    const timeStr = `${String(targetDate.getHours()).padStart(2, '0')}:${String(targetDate.getMinutes()).padStart(2, '0')}`;
    const dateLabel = targetDate.getDate() !== new Date().getDate() ? tLocal.resin.tomorrow : tLocal.resin.today;
    
    const durationStr = h > 0 ? `${h} ${tLocal.resin.hrs} ${m} ${tLocal.resin.mins}` : `${m} ${tLocal.resin.mins}`;
    const resultMsg = `${tLocal.resin.timeNeeded.replace('{t}', String(num))} ${durationStr} (${dateLabel} ${timeStr})`;
    return { msg: resultMsg, type: 'success' };
  };

  return (
    <section id="toolkit" className="px-[5vw] py-20 bg-ananta-bg border-t border-b border-ananta-border relative">
      <div className="absolute top-0 right-0 w-44 h-44 bg-ananta-neon/5 rounded-full blur-3xl pointer-events-none" />
      
      <div className="relative z-10">
        <div className="flex flex-col items-center text-center mb-12">
          <span className="font-mono text-[0.6rem] tracking-[0.25em] text-ananta-neon uppercase mb-3 px-3 py-1 bg-ananta-neon/5 border border-ananta-neon/20 rounded-sm">
            🛡️ {tLocal.label}
          </span>
          <h2 className="font-display text-[clamp(2rem,4vw,3.2rem)] tracking-[0.06em] text-white">
            {tLocal.title}
          </h2>
          <p className="max-w-[620px] text-[0.85rem] text-ananta-muted leading-[1.6] mt-3">
            {tLocal.sub}
          </p>
        </div>

        {/* Tab Header Selector */}
        <div className="flex border-b border-ananta-border justify-center gap-1 mb-10 max-w-xl mx-auto">
          {(['resin', 'checklist', 'team'] as const).map(tab => {
            const isActive = activeTab === tab;
            let icon = <Zap className="w-3.5 h-3.5" />;
            if (tab === 'checklist') icon = <CheckSquare className="w-3.5 h-3.5" />;
            if (tab === 'team') icon = <Users className="w-3.5 h-3.5" />;

            return (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`py-3 px-5 flex items-center gap-2 font-mono text-[0.7rem] uppercase tracking-wider border-b-2 transition-all duration-200 outline-none ${isActive ? 'text-ananta-neon border-ananta-neon glow-neon bg-ananta-neon/[0.02]' : 'text-ananta-muted border-transparent hover:text-white hover:bg-white/[0.02]'}`}
              >
                {icon}
                {tLocal.tabs[tab]}
              </button>
            );
          })}
        </div>

        {/* Tab 1: Resin Tracker */}
        {activeTab === 'resin' && (
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 max-w-5xl mx-auto bg-ananta-bg2/40 border border-ananta-border p-6 sm:p-10 rounded-sm backdrop-blur-sm shadow-xl">
            {/* Left controller */}
            <div className="lg:col-span-7 flex flex-col justify-between">
              <div>
                <h3 className="text-lg font-display text-white mb-2 flex items-center gap-2">
                  <Zap className="w-5 h-5 text-ananta-neon" /> {tLocal.resin.title}
                </h3>
                <p className="text-[0.8rem] text-ananta-muted mb-8">{tLocal.resin.desc}</p>

                {/* Slider bar */}
                <div className="bg-ananta-bg border border-ananta-border p-5 rounded-sm mb-6">
                  <div className="flex justify-between items-center mb-3">
                    <span className="font-mono text-[0.7rem] text-ananta-muted uppercase tracking-wider">{tLocal.resin.current}</span>
                    <span className="font-display text-2xl text-ananta-neon">{currentResin} <span className="font-mono text-xs text-ananta-muted">/ 240</span></span>
                  </div>
                  
                  <input
                    type="range"
                    min="0"
                    max="240"
                    value={currentResin}
                    onChange={(e) => setCurrentResin(parseInt(e.target.value))}
                    className="w-full xl:h-1.5 h-2 bg-[#0c101a] appearance-none rounded-lg accent-ananta-neon cursor-pointer"
                  />
                  
                  <div className="flex justify-between font-mono text-[0.55rem] text-ananta-muted mt-2">
                    <span>0 {tLocal.resin.points}</span>
                    <span>120</span>
                    <span>180</span>
                    <span>240 {tLocal.resin.points}</span>
                  </div>
                </div>

                {/* Target calculation */}
                <div className="bg-ananta-bg/50 border border-ananta-border p-5 rounded-sm">
                  <label className="block font-mono text-[0.7rem] text-ananta-muted uppercase tracking-wider mb-2">
                    🎯 {tLocal.resin.targetLabel}
                  </label>
                  <div className="flex gap-4">
                    <input
                      type="number"
                      placeholder={tLocal.resin.targetPlaceholder}
                      value={targetResin}
                      onChange={(e) => setTargetResin(e.target.value)}
                      min="0"
                      max="240"
                      className="bg-ananta-bg border border-ananta-border font-mono text-[0.85rem] px-3 py-2 text-white placeholder-ananta-muted outline-none focus:border-ananta-neon w-40 rounded-sm"
                    />
                  </div>
                  {(() => {
                    const result = getTargetCalculatedMsg();
                    if (!result.msg) return null;
                    const colorClass = result.type === 'success' ? 'text-[#4ade80]' : result.type === 'warn' ? 'text-[#f87171]' : 'text-ananta-muted';
                    return (
                      <div className={`mt-3 text-[0.75rem] ${colorClass} font-mono flex items-center gap-1.5`}>
                        <Clock className="w-3.5 h-3.5 inline" />
                        <span>{result.msg}</span>
                      </div>
                    );
                  })()}
                </div>
              </div>
            </div>

            {/* Right statistics output */}
            <div className="lg:col-span-5 border-t lg:border-t-0 lg:border-l border-ananta-border pt-8 lg:pt-0 lg:pl-10 flex flex-col justify-center">
              {currentResin >= 240 ? (
                <div className="text-center p-6 bg-ananta-neon/5 border border-dashed border-ananta-neon/20 rounded-sm">
                  <span className="text-ananta-neon text-3xl block mb-2 font-mono">⚠️ 240/240</span>
                  <p className="text-xs text-ananta-muted font-mono leading-relaxed">{tLocal.resin.overcapped}</p>
                </div>
              ) : (
                <div className="space-y-6">
                  {/* Saturation time */}
                  <div>
                    <span className="font-mono text-[0.6rem] tracking-[0.2em] text-ananta-muted uppercase block mb-1">
                      {tLocal.resin.fullAt}
                    </span>
                    <div className="flex items-baseline gap-2">
                      <span className="text-[0.8rem] font-mono text-white/80">{resinTimeInfo.fullDay}</span>
                      <span className="text-[2.6rem] font-display text-ananta-neon tracking-wider leading-none glow-neon">
                        {resinTimeInfo.fullTime}
                      </span>
                    </div>
                    <span className="font-mono text-[0.6rem] text-ananta-muted block mt-1">
                      (Approx. {resinTimeInfo.hoursNeeded} {tLocal.resin.hrs} {resinTimeInfo.minutesNeeded} {tLocal.resin.mins})
                    </span>
                  </div>

                  {/* Future Forecast Grid */}
                  <div className="border-t border-ananta-neon/20 pt-5">
                    <span className="font-mono text-[0.6rem] tracking-[0.15em] text-ananta-neon uppercase block mb-3.5 flex items-center gap-1.5">
                      <Clock className="w-3.5 h-3.5" /> {tLocal.resin.projection}
                    </span>
                    <div className="grid grid-cols-2 gap-3">
                      {[2, 4, 8, 12].map(hrs => {
                        const calculated = Math.min(240, currentResin + Math.floor((hrs * 60) / 6));
                        return (
                          <div key={hrs} className="bg-ananta-bg/80 border border-ananta-border p-3 rounded-sm flex justify-between items-center">
                            <span className="font-mono text-[0.62rem] text-ananta-muted">{tLocal.resin.hoursLabel.replace('{h}', String(hrs))}</span>
                            <span className={`font-mono text-[0.8rem] font-bold ${calculated === 240 ? 'text-[#ff4d6d]' : 'text-white'}`}>
                              {calculated} <span className="text-[0.55rem] text-ananta-muted">/240</span>
                            </span>
                          </div>
                        );
                      })}
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>
        )}

        {/* Tab 2: User Checklist / Memo */}
        {activeTab === 'checklist' && (
          <div className="max-w-4xl mx-auto bg-ananta-bg2/40 border border-ananta-border p-6 sm:p-10 rounded-sm backdrop-blur-sm shadow-xl">
            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-8 pb-4 border-b border-ananta-border">
              <div>
                <h3 className="text-lg font-display text-white mb-1 flex items-center gap-2">
                  <CheckSquare className="w-5 h-5 text-ananta-neon" /> {tLocal.checklist.title}
                </h3>
                <p className="text-[0.75rem] text-ananta-muted font-mono">{tLocal.checklist.desc}</p>
              </div>
              <button
                onClick={handleResetChecklist}
                className="mt-4 sm:mt-0 font-mono text-[0.62rem] tracking-[0.1em] uppercase flex items-center gap-1.5 border border-ananta-border px-3.5 py-1.5 hover:border-ananta-neon hover:text-ananta-neon text-ananta-muted transition-all duration-200 outline-none"
              >
                <RefreshCw className="w-3.5 h-3.5" /> {tLocal.checklist.clear}
              </button>
            </div>

            {/* Daily section */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
              {/* Daily Column */}
              <div>
                <div className="inline-flex items-center gap-2 mb-4">
                  <span className="w-2 h-2 rounded-full bg-ananta-neon animate-pulse" />
                  <h4 className="font-mono text-[0.68rem] font-bold tracking-[0.2em] text-ananta-neon uppercase">{tLocal.checklist.daily}</h4>
                </div>
                
                <div className="space-y-3.5">
                  {checklist.filter(x => !x.isWeekly).map(item => (
                    <div 
                      key={item.id}
                      onClick={() => handleToggleCheck(item.id)}
                      className={`p-4 border border-ananta-border cursor-pointer flex items-start gap-3 transition-colors duration-150 ${item.completed ? 'bg-ananta-neon/[0.03] border-ananta-neon/30 opacity-60' : 'bg-ananta-bg/30 hover:bg-ananta-bg/70 hover:border-white/20'}`}
                    >
                      <input 
                        type="checkbox"
                        checked={item.completed}
                        onChange={() => {}} // Hanlded by outer container click
                        className="mt-0.5 rounded-sm border-ananta-border text-ananta-neon focus:ring-opacity-0 accent-ananta-neon pointer-events-none"
                      />
                      <span className={`text-[0.8rem] leading-[1.4] transition-all select-none ${item.completed ? 'line-through text-ananta-muted' : 'text-white'}`}>
                        {tLocal.checklist.tasks[item.textKey]}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Weekly Column */}
              <div>
                <div className="inline-flex items-center gap-2 mb-4">
                  <span className="w-2 h-2 rounded-full bg-ananta-neon2 animate-pulse" />
                  <h4 className="font-mono text-[0.68rem] font-bold tracking-[0.2em] text-ananta-neon2 uppercase">{tLocal.checklist.weekly}</h4>
                </div>

                <div className="space-y-3.5">
                  {checklist.filter(x => x.isWeekly).map(item => (
                    <div 
                      key={item.id}
                      onClick={() => handleToggleCheck(item.id)}
                      className={`p-4 border border-ananta-border cursor-pointer flex items-start gap-3 transition-colors duration-150 ${item.completed ? 'bg-ananta-neon2/[0.03] border-ananta-neon2/30 opacity-60' : 'bg-ananta-bg/30 hover:bg-ananta-bg/70 hover:border-white/20'}`}
                    >
                      <input 
                        type="checkbox"
                        checked={item.completed}
                        onChange={() => {}}
                        className="mt-0.5 rounded-sm border-ananta-border text-ananta-neon2 focus:ring-opacity-0 accent-ananta-neon2 pointer-events-none"
                      />
                      <span className={`text-[0.8rem] leading-[1.4] transition-all select-none ${item.completed ? 'line-through text-ananta-muted' : 'text-white'}`}>
                        {tLocal.checklist.tasks[item.textKey]}
                      </span>
                    </div>
                  ))}
                  {checklist.length === 0 && (
                    <p className="text-[0.8rem] text-ananta-muted text-center py-6">{tLocal.checklist.empty}</p>
                  )}
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Tab 3: Squad Builder */}
        {activeTab === 'team' && (
          <div className="max-w-5xl mx-auto bg-ananta-bg2/40 border border-ananta-border p-6 sm:p-10 rounded-sm backdrop-blur-sm shadow-xl">
            <h3 className="text-lg font-display text-white mb-1.5 flex items-center gap-2 justify-center">
              <Users className="w-5 h-5 text-ananta-neon" /> {tLocal.team.title}
            </h3>
            <p className="text-[0.78rem] text-ananta-muted text-center max-w-lg mx-auto mb-10">{tLocal.team.desc}</p>

            {/* Squad 4 Slots Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-10">
              {selectedSquad.map((agent, i) => {
                const hasAgent = agent !== null;
                
                return (
                  <div key={i} className="relative group">
                    {hasAgent ? (
                      <div 
                        className="border border-ananta-border rounded-sm overflow-hidden bg-ananta-bg/90 transition-all duration-300 hover:border-ananta-neon hover:box-glow-neon flex flex-col relative"
                        style={{ borderBottom: `3px solid ${agent.color}` }}
                      >
                        {/* Remove button */}
                        <button 
                          onClick={() => handleRemoveAgent(i)}
                          className="absolute top-2 right-2 z-20 bg-black/60 p-1.5 text-ananta-muted hover:text-[#ff4d6d] rounded-sm transition-colors cursor-pointer"
                        >
                          <Trash2 className="w-3.5 h-3.5" />
                        </button>

                        <div className="h-44 overflow-hidden relative">
                          <img 
                            src={agent.image} 
                            alt={agent.name} 
                            referrerPolicy="no-referrer"
                            className="w-full h-full object-cover grayscale-[30%] group-hover:grayscale-0 transition-all duration-500 group-hover:scale-105" 
                          />
                          <div className="absolute inset-0 bg-gradient-to-t from-ananta-bg to-transparent" />
                          <span 
                            className="absolute bottom-2 left-3 font-mono text-[0.55rem] tracking-wider uppercase border px-2 py-0.5"
                            style={{ borderColor: agent.color, color: agent.color, backgroundColor: `${agent.color}15` }}
                          >
                            {tLocal.team.agents && tLocal.team.agents[agent.id] ? tLocal.team.agents[agent.id].element : agent.badge}
                          </span>
                        </div>

                        <div className="p-4">
                          <h4 className="font-display text-white text-[0.95rem] tracking-wide mb-1 truncate">
                            {tLocal.team.agents && tLocal.team.agents[agent.id] ? tLocal.team.agents[agent.id].name : agent.name.split(' / ')[0]}
                          </h4>
                          <span className="font-mono text-[0.6rem] text-ananta-muted tracking-wide block uppercase">
                            {tLocal.team.role}: {tLocal.team.agents && tLocal.team.agents[agent.id] ? tLocal.team.agents[agent.id].role : agent.role}
                          </span>
                        </div>
                      </div>
                    ) : (
                      <div 
                        onClick={() => setIsPickerOpen(i)}
                        className="h-[246px] border border-dashed border-ananta-border hover:border-ananta-neon bg-ananta-bg/30 hover:bg-ananta-neon/[0.02]/30 flex flex-col items-center justify-center p-5 text-center cursor-pointer transition-all duration-200"
                      >
                        <div className="w-10 h-10 border border-ananta-border group-hover:border-ananta-neon group-hover:text-ananta-neon rounded-full flex items-center justify-center text-ananta-muted transition-colors mb-3">
                          <Plus className="w-5 h-5" />
                        </div>
                        <span className="font-display text-[0.8rem] text-white/50 block mb-1 uppercase tracking-wide group-hover:text-white">
                          {tLocal.team.emptySlot}
                        </span>
                        <span className="font-mono text-[0.6rem] text-ananta-muted tracking-wider block uppercase group-hover:text-ananta-neon">
                          {tLocal.team.pickAgent}
                        </span>
                      </div>
                    )}

                    {/* Selector Droplist dropdown popover inside card */}
                    {isPickerOpen === i && (
                      <div className="absolute inset-0 z-30 bg-[#080a0f] border border-ananta-neon flex flex-col justify-between p-4 rounded-sm animate-fade-in">
                        <div>
                          <span className="font-display text-[0.75rem] text-ananta-neon block uppercase tracking-wide mb-3 pb-1.5 border-b border-ananta-neon/20">
                            🛡️ {tLocal.team.choose}
                          </span>
                          <div className="space-y-2">
                            {CONFIRMED_AGENTS.map(candidate => {
                              const isAlreadyInTeam = selectedSquad.some(s => s && s.id === candidate.id);
                              const agentTrans = tLocal.team.agents && tLocal.team.agents[candidate.id];
                              
                              return (
                                <button
                                  key={candidate.id}
                                  onClick={() => handleAssignAgent(i, candidate.id)}
                                  className={`w-full text-left p-2.5 border border-ananta-border hover:border-ananta-neon relative flex items-center gap-2 rounded-sm transition-all outline-none ${isAlreadyInTeam ? 'opacity-40 border-dashed hover:border-ananta-border hover:bg-transparent' : 'bg-ananta-bg hover:bg-ananta-neon/5'}`}
                                >
                                  <div className="w-7 h-7 rounded-full overflow-hidden border border-ananta-border flex-shrink-0">
                                    <img src={candidate.image} className="w-full h-full object-cover" referrerPolicy="no-referrer" alt="" />
                                  </div>
                                  <div className="min-w-0">
                                    <span className="font-display text-[0.78rem] text-white block truncate leading-tight select-none">
                                      {agentTrans ? agentTrans.name : candidate.name.split(' / ')[0]}
                                    </span>
                                    <span className="font-mono text-[0.55rem] text-ananta-muted block truncate select-none">
                                      {agentTrans ? agentTrans.element : candidate.badge}
                                    </span>
                                  </div>
                                  {isAlreadyInTeam && (
                                    <span className="absolute right-2 font-mono text-[0.45rem] uppercase text-ananta-muted border border-ananta-border px-1.5 py-0.5 rounded-sm">
                                      {tLocal.team.deployed || 'Deployed'}
                                    </span>
                                  )}
                                </button>
                              );
                            })}
                          </div>
                        </div>

                        <button 
                          onClick={() => setIsPickerOpen(null)}
                          className="w-full border border-ananta-border py-1.5 mt-4 text-[0.62rem] text-ananta-muted uppercase hover:text-white hover:border-white transition-all rounded-sm font-mono outline-none"
                        >
                          {tLocal.team.cancel || 'Cancel'}
                        </button>
                      </div>
                    )}
                  </div>
                );
              })}
            </div>

            {/* Synergies feedback */}
            <div className="border border-ananta-border p-6 rounded-sm bg-ananta-bg/40 max-w-4xl mx-auto">
              <h4 className="font-mono text-[0.65rem] tracking-[0.2em] uppercase text-ananta-muted mb-4 pb-2 border-b border-ananta-border flex items-center gap-1.5">
                <Sparkles className="w-3.5 h-3.5 text-ananta-neon" /> {tLocal.team.synergy}
              </h4>

              {currentCombos.length > 0 ? (
                <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                  {currentCombos.map((combo, i) => (
                    <div key={i} className="p-4 bg-ananta-neon/[0.02] border border-ananta-neon/15 rounded-sm flex gap-3 flex-col sm:flex-row sm:items-start animate-fade-in">
                      <div className="w-8 h-8 rounded-full bg-ananta-neon/10 border border-ananta-neon/30 flex items-center justify-center flex-shrink-0 text-ananta-neon">
                        {combo.title.includes('Fire') ? <Flame className="w-4 h-4 text-ananta-neon2" /> : combo.title.includes('Wind') ? <Wind className="w-4 h-4 text-[#4ade80]" /> : <Sparkles className="w-4 h-4 text-ananta-neon" />}
                      </div>
                      <div>
                        <h5 className="font-display text-white text-[0.85rem] tracking-wide mb-1 leading-tight">{combo.title}</h5>
                        <p className="text-[0.74rem] text-ananta-muted leading-relaxed font-normal">{combo.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>
              ) : (
                <div className="text-center py-8">
                  <span className="text-ananta-muted font-mono text-[0.78rem] block">{tLocal.team.noSynergy}</span>
                  <span className="text-[0.65rem] text-ananta-muted/50 font-mono mt-1.5 block uppercase tracking-widest leading-relaxed">
                    Try picking a character with Electric and another with Fire/Wind to spark an elemental feedback!
                  </span>
                </div>
              )}
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
