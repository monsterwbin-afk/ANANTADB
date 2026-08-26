async function run() {
  const url = 'https://www.anantagame.com/pc/gw/20260809220138/js/index_65cc8064.js';
  try {
    const res = await fetch(url);
    const text = await res.text();
    
    // Find all assets/ strings
    const regex = /"assets\/[^"]+"/g;
    const matches = text.match(regex) || [];
    const cleanMatches = matches.map(m => m.replace(/"/g, ''));
    
    console.log('Total asset matches:', cleanMatches.length);
    console.log('Distinct asset matches:');
    console.log(JSON.stringify(Array.from(new Set(cleanMatches)), null, 2));
  } catch (e: any) {
    console.error(e);
  }
}
run();
