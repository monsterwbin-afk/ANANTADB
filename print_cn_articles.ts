import * as fs from 'fs';

const content = fs.readFileSync('src/articlesLocales.ts', 'utf8');

// Find the "CN" block
const cnStart = content.indexOf('"CN": {');
const twStart = content.indexOf('"TW": {');

if (cnStart !== -1 && twStart !== -1) {
  const cnBlock = content.substring(cnStart, twStart);
  console.log('CN block line previews:');
  
  // Find entries like "key": "value"
  // Since some values have escaped double quotes, we must handle multiline/escaped characters.
  // Let's use a regex to find all keys in CN block
  const regex = /"(\d+)":\s*"([\s\S]*?)(?="\s*"\d+"\s*:|^\s*\}\s*,?|\s*"TW":)/gm;
  let match;
  while ((match = regex.exec(cnBlock)) !== null) {
    const key = match[1];
    const val = match[2];
    console.log(`Key ${key}: ${val.substring(0, 100).replace(/\n/g, ' ')}...`);
  }
} else {
  console.log('Could not find CN or TW blocks');
}
