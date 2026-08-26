import * as fs from 'fs';

const en = {
  0: `
# PREVIEW: New "Cyber-Hoverboard" Traversal Method Spotted

*Recently uncovered files from the closed testing realm indicate a major addition to the traversal sandbox in Nova City: the Cyber-Hoverboard.*

## The Mobility Paradigm Shift
Traversal in Ananta has always been a key focus, with characters possessing grappling hooks, wall-running capabilities, and unique movement skills. However, the Cyber-Hoverboard introduces a universal traversal mechanic accessible to all agents, regardless of their intrinsic mobility kit.

## Key Features & Mechanics
- **Universal Access:** Unlike Taffy's specialized motorcycle, the hoverboard can be deployed by any operative in the field.
- **Momentum Preservation:** The board appears to retain the kinetic energy from jumps and drops, meaning players can string together parkour moves, leap off skyscrapers, and deploy the board mid-air for massive speed boosts.
- **Combat Integration:** Preliminary data suggests the hoverboard isn't just for travel. Characters might be able to initiate specific aerial combo attacks while riding, turning traversal seamlessly into combat engagement.

## Strategic Implications
This gadget significantly alters how players will navigate the expansive districts of Nova City. Previously inaccessible rooftops or wide gaps between corporate towers might now be easily traversed without relying heavily on nearby grapple points. It emphasizes a dynamic, player-driven exploration flow.

*Note: As this is based on pre-release test information, mechanics are subject to balancing and potential redesigns prior to the official launch.*
  `,
  1: `
# Dev Interview: NetEase Confirms 120 FPS Support on PC

*In a comprehensive discussion with Famitsu, the lead engine architect for Ananta provided exciting technical details regarding the PC version of the game, highlighting a commitment to a premium desktop experience.*

## Uncapped Performance
For PC enthusiasts, the headline news is the confirmed support for high framerates. The engine is being designed from the ground up to support native 120 FPS, and even uncapped framerates if the hardware permits. This is a significant leap for the genre, ensuring ultra-smooth combat and traversal, particularly crucial for Ananta's fast-paced, high-mobility action.

## Native Ultra-Wide Integration
Furthermore, the developer confirmed native support for ultra-wide (21:9) and super ultra-wide (32:9) monitors. Instead of merely zooming or cropping the field of view, the game's UI and rendering pipeline will dynamically adapt, offering an expansive view of Nova City's sprawling skyline and chaotic combat sectors.

## Engine Scalability
The interview also touched upon the engine's scalability. While providing high-end features for PC, the team emphasized their optimization efforts to ensure stable performance across mobile and consoles, without compromising the core visual identity or seamless open-world traversal.
  `,
  2: `
# Taffy Build Prep: Stockpiling Industrial Zone Materials

*With Taffy emerging as a fan favorite from the early previews, many are already strategizing their progression paths. Her heavy reliance on mechanical components makes the Industrial Zone your primary farming ground.*

## Why Target the Industrial Zone?
Taffy’s unique gear, particularly enhancements for her customized motorcycle and massive hammer, require specialized high-density alloys and cyber-conductors. These materials are heavily concentrated in the dilapidated sectors of the Industrial Zone.

## Top 3 Parkour Routes for Material Farming

1. **The Foundry Circuit:**
   - **Start:** Abandoned Smelting Plant Checkpoint.
   - **Pathing:** Utilize the exposed piping on the exterior walls to ascend. Chain wall-runs across the suspended catwalks.
   - **Loot:** High chance for refined alloy drops from minor mechanized enemies and hidden supply caches on the upper levels.

2. **Scrap Yard Sprint:**
   - **Start:** Outskirts Scrap Hub.
   - **Pathing:** A frantic, horizontal route. Focus on ground-level traversal and short-range grapple points between rusted out vehicle husks.
   - **Loot:** Excellent for mass collecting basic mechanical parts and low-tier energy cores. Quick loop time.

3. **Cooling Tower Summit (High Risk):**
   - **Start:** Sector 4 Reactor Base.
   - **Pathing:** A vertical climb requiring precise use of stamina (if any) and chaining aerial dashes. The environment is heavily irradiated (Chaos field).
   - **Loot:** Contains elite enemies that drop rare cyber-conductors essential for high-level tuning.

## Preparation is Key
Farming efficiently requires knowing the routes and having a combat squad capable of dealing with the heavily armored mechanized threats typical of this district. Equip agents with Electric or Adaptive elements to break through their defenses quickly.
  `
};

const TARGET_LANGS = {
  CN: 'zh-CN',
  TW: 'zh-TW',
  JP: 'ja',
  KR: 'ko',
  DE: 'de',
  FR: 'fr',
  IT: 'it',
  RU: 'ru'
};

async function translateText(text: string, to: string) {
  const url = 'https://translate.googleapis.com/translate_a/single?client=gtx&sl=en&tl=' + to + '&dt=t&q=' + encodeURIComponent(text);
  const res = await fetch(url);
  const json = await res.json();
  return json[0].map((item: any) => item[0]).join('');
}

async function run() {
  const output: Record<string, Record<number, string>> = { EN: en };
  for (const [langKey, langCode] of Object.entries(TARGET_LANGS)) {
    console.log('Translating to ' + langKey);
    output[langKey] = {};
    for (const [articleId, text] of Object.entries(en)) {
      try {
        const translated = await translateText(text, langCode);
        output[langKey][Number(articleId)] = translated;
      } catch (e) {
        console.error(e);
        output[langKey][Number(articleId)] = text; // fallback
      }
      await new Promise(r => setTimeout(r, 200));
    }
  }

  const fileContent = 'export const ARTICLES_CONTENT_I18N: Record<string, Record<number, string>> = ' + JSON.stringify(output, null, 2) + ';\n';
  fs.writeFileSync('src/articlesLocales.ts', fileContent, 'utf8');
}

run().catch(console.error);
