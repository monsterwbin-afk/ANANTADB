import * as fs from 'fs';

const fileContent = fs.readFileSync('src/locales.ts', 'utf8');
const data = eval('(' + fileContent.replace('export const translations =', '').replace(/;$/, '') + ')');

const en = data['EN'];

const flatten = (obj: any, prefix = ''): Record<string, string> => {
  const result: Record<string, string> = {};
  for (const k in obj) {
    if (typeof obj[k] === 'object' && obj[k] !== null) {
      Object.assign(result, flatten(obj[k], prefix + k + '.'));
    } else {
      result[prefix + k] = obj[k];
    }
  }
  return result;
}

const flatEN = flatten(en);

for (const lang of Object.keys(data)) {
  if (lang === 'EN') continue;
  const flatLang = flatten(data[lang]);
  for (const k in flatEN) {
    if (!(k in flatLang)) {
      console.log(`${lang} is missing: ${k}`);
    } else if (flatLang[k] === flatEN[k] && typeof flatLang[k] === 'string' && !flatEN[k].match(/^[0-9]+$/)) {
      // It's the exact same string as English (and not a pure number)
      console.log(`${lang} has same value as EN for: ${k} -> "${flatEN[k]}"`);
    }
  }
}
