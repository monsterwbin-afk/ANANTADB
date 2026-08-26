async function run() {
  const url = 'https://www.anantagame.com/pc/gw/20260809220138/js/index_65cc8064.js';
  try {
    const res = await fetch(url);
    const text = await res.text();
    
    // Let's find matches around 'yinglong'
    const index = text.indexOf('yinglong');
    if (index === -1) {
      console.log('No "yinglong" found in text.');
      return;
    }
    
    console.log('Found "yinglong" in JS. Extracting surrounding text...');
    
    // Let's do a regex search for any object/array entries containing yinglong
    const regex = /\{[^{}]*yinglong[^{}]*\}/gi;
    const matches = text.match(regex);
    if (matches) {
      console.log('Object matches containing yinglong:');
      matches.slice(0, 10).forEach((m, idx) => {
        console.log(`Match ${idx + 1}:`, m.substring(0, 300));
      });
    } else {
      console.log('No direct simple object matches. Printing 1000 characters around the first index:');
      console.log(text.substring(Math.max(0, index - 500), Math.min(text.length, index + 1500)));
    }
  } catch (e: any) {
    console.error(e);
  }
}
run();
