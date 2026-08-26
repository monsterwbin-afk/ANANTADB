import fs from 'fs';
const content = fs.readFileSync('src/articlesLocales.ts', 'utf8');
console.log('File length:', content.length);
console.log('First 200 characters:');
console.log(content.substring(0, 200));
console.log('Last 200 characters:');
console.log(content.substring(content.length - 200));
