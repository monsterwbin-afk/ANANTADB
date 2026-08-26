import * as fs from 'fs';

const content = fs.readFileSync('src/articlesLocales.ts', 'utf8');
const languages = ['EN', 'CN', 'TW', 'JP', 'KR', 'DE', 'FR', 'IT', 'RU'];

function extractLangBlock(lang: string, nextLang?: string): string {
  const startMarker = `"${lang}": {`;
  const startIdx = content.indexOf(startMarker);
  if (startIdx === -1) return '';
  const blockStart = startIdx + startMarker.length;
  if (nextLang) {
    const nextMarker = `"${nextLang}": {`;
    const endIdx = content.indexOf(nextMarker);
    if (endIdx !== -1) return content.substring(blockStart, endIdx).trim();
  }
  return content.substring(blockStart).trim();
}

for (let i = 0; i < languages.length; i++) {
  const lang = languages[i];
  const nextLang = languages[i + 1];
  const block = extractLangBlock(lang, nextLang);
  
  console.log(`\n=================== ${lang} ===================`);
  
  const regex = /"(\d+)":\s*"/g;
  let match;
  const keys: number[] = [];
  while ((match = regex.exec(block)) !== null) {
    keys.push(Number(match[1]));
  }
  console.log('Keys present:', keys);
}
