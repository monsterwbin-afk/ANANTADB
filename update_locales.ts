import * as fs from 'fs';

const translations = {
  EN: "Built by fans, for fans. Your passion is the only driving force for our continuous optimization.",
  CN: "本站由玩家爱好者自发建立。您的喜爱是我们持续优化的最高动力。",
  TW: "本站由玩家愛好者自發建立。您的喜愛是我們持續優化的最高動力。",
  JP: "ファンによって運営される非公式データベース。皆様の応援が更新を続ける最大の原動力です。",
  KR: "팬들에 의해 운영되는 비공식 데이터베이스입니다. 여러분의 사랑은 지속적인 업데이트의 원동력입니다.",
  DE: "Von Fans für Fans gemacht. Ihre Leidenschaft ist unser Antrieb für kontinuierliche Verbesserungen.",
  FR: "Créé par des fans, pour des fans. Votre passion est le moteur de notre amélioration continue.",
  IT: "Creato dai fan, per i fan. La tua passione è la nostra forza trainante per continui miglioramenti.",
  RU: "Создано фанатами для фанатов. Ваша поддержка — главный стимул для наших постоянных обновлений."
};

let content = fs.readFileSync('src/locales.ts', 'utf8');

for (const [lang, text] of Object.entries(translations)) {
  const langKey = `"${lang}": {`;
  let langIdx = content.indexOf(langKey);
  if (langIdx === -1) continue;

  const nextLangIdx = content.indexOf('": {', langIdx + 10);
  const blockEnd = nextLangIdx !== -1 ? content.lastIndexOf('}', nextLangIdx) : content.length;

  const block = content.substring(langIdx, blockEnd);
  
  const footerDescIdx = block.indexOf('"footerDesc":');
  if (footerDescIdx !== -1) {
    const endOfLine = block.indexOf('\n', footerDescIdx);
    const line = block.substring(footerDescIdx, endOfLine);
    content = content.replace(line, `${line}\n      "footerFanMadeMsg": "${text}",`);
  }
}

fs.writeFileSync('src/locales.ts', content, 'utf8');
