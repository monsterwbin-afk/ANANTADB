import * as fs from 'fs';
import * as path from 'path';

const filePath = './src/articlesLocales.ts';
const content = fs.readFileSync(filePath, 'utf8');
const lines = content.split('\n');

console.log("Total lines:", lines.length);

let currentLocale: string | null = null;
const locales: Record<string, Record<string, string>> = {};

const localeStartRegex = /^\s*"([A-Z]{2,5})"\s*:\s*\{\s*$/;
const articleRegex = /^\s*"([0-9]+)"\s*:\s*(.*)$/;

for (let i = 0; i < lines.length; i++) {
  const line = lines[i];
  
  // Check for locale start
  const localeMatch = line.match(localeStartRegex);
  if (localeMatch) {
    currentLocale = localeMatch[1];
    locales[currentLocale] = {};
    console.log(`Found locale start: ${currentLocale} at line ${i + 1}`);
    continue;
  }
  
  // Check for locale end
  if (currentLocale && line.trim() === '},') {
    console.log(`Found locale end: ${currentLocale} at line ${i + 1}. Total articles: ${Object.keys(locales[currentLocale]).length}`);
    currentLocale = null;
    continue;
  }
  
  // Parse articles
  if (currentLocale) {
    // If we are in RU and reach line 305, stop or handle corruption
    if (currentLocale === 'RU' && i + 1 >= 305) {
      console.log(`Stopping RU parsing at line ${i + 1} due to known corruption.`);
      break;
    }
    
    const articleMatch = line.match(articleRegex);
    if (articleMatch) {
      const idx = articleMatch[1];
      let valStr = articleMatch[2].trim();
      // Remove trailing comma if present
      if (valStr.endsWith(',')) {
        valStr = valStr.substring(0, valStr.length - 1);
      }
      try {
        const val = JSON.parse(valStr);
        locales[currentLocale][idx] = val;
      } catch (err) {
        console.error(`Error parsing article ${idx} at line ${i + 1}:`, err.message);
        // Let's print the line snippet
        console.log("Line snippet:", line.substring(0, 100));
      }
    }
  }
}

console.log("Locales parsed successfully:", Object.keys(locales));
