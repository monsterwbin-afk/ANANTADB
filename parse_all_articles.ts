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
    if (endIdx !== -1) {
      return content.substring(blockStart, endIdx).trim();
    }
  }
  
  // Last language, find the closing brace before block ends or EOF
  return content.substring(blockStart).trim();
}

for (let i = 0; i < languages.length; i++) {
  const lang = languages[i];
  const nextLang = languages[i + 1];
  const block = extractLangBlock(lang, nextLang);
  
  console.log(`\n=================== LANG: ${lang} ===================`);
  
  // Parse articles by finding keys
  const keys: number[] = [];
  // Find all strings like "0": " or "10": " or "12": "
  // We can scan the block to find matches for /"(\d+)":\s*"/g
  const regex = /"(\d+)":\s*"/g;
  let match;
  const matches: { key: number; index: number }[] = [];
  while ((match = regex.exec(block)) !== null) {
    matches.push({ key: Number(match[1]), index: match.index });
  }
  
  console.log(`Found keys:`, matches.map(m => m.key));
  
  for (let j = 0; j < matches.length; j++) {
    const startObj = matches[j];
    const endIdx = (j + 1 < matches.length) ? matches[j + 1].index : block.length;
    
    // Find the actual start of string value (after the key and its quotes/colons)
    const valStartIdx = startObj.index + block.substring(startObj.index).indexOf(':') + 1;
    // Walk to the next quote
    let firstQuote = block.substring(valStartIdx).indexOf('"');
    if (firstQuote !== -1) {
      const actualValStart = valStartIdx + firstQuote + 1;
      // Extract the block value as raw text containing JSON-escaped string
      // Find the last quote
      let rawVal = block.substring(actualValStart);
      // Wait, the end of this value is right before the next key, but we need to trim the trailing quote and comma
      // Let's trim off any trailing whitespace, commas, and curly braces if it's the last article
      let endOfVal = endIdx - actualValStart;
      let valSegment = rawVal.substring(0, endOfVal).trim();
      if (valSegment.endsWith('},')) {
        valSegment = valSegment.substring(0, valSegment.length - 2).trim();
      } else if (valSegment.endsWith('}')) {
        valSegment = valSegment.substring(0, valSegment.length - 1).trim();
      }
      if (valSegment.endsWith(',')) {
        valSegment = valSegment.substring(0, valSegment.length - 1).trim();
      }
      if (valSegment.endsWith('"')) {
        valSegment = valSegment.substring(0, valSegment.length - 1);
      }
      
      // Let's unescape it to see clean text
      let unescaped = valSegment.replace(/\\n/g, '\n').replace(/\\"/g, '"');
      console.log(`  Article [${startObj.key}]: Length: ${unescaped.length} | Preview: ${unescaped.substring(0, 80).replace(/\n/g, ' ')}...`);
    }
  }
}
