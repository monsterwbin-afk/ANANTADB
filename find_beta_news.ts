import { translations } from './src/locales.js';

for (const lang of Object.keys(translations)) {
  console.log(`\n--- ${lang} ---`);
  const news = (translations as any)[lang].newsData || [];
  news.forEach((x: any, i: number) => {
    console.log(`  [${i}] Title: "${x.title}" (idx: ${x.contentIdx}, date: "${x.date}")`);
  });
}
