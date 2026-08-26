async function run() {
  const url = 'https://www.anantagame.com/';
  try {
    const res = await fetch(url);
    const text = await res.text();
    
    // Find all js script tags or references in the HTML
    const regex = /src="([^"]+)"/g;
    let match;
    const scripts = [];
    while ((match = regex.exec(text)) !== null) {
      if (match[1].endsWith('.js')) {
        scripts.push(match[1]);
      }
    }
    
    // Also look for hrefs or scripts in the lower body of the HTML
    const hrefRegex = /href="([^"]+\.js)"/g;
    while ((match = hrefRegex.exec(text)) !== null) {
      scripts.push(match[1]);
    }
    
    // Let's print out all found script files
    console.log('Found scripts:', scripts);
    
    // If we have scripts, let's fetch the first few and look for asset strings inside them!
    for (const src of scripts) {
      const fullUrl = src.startsWith('http') ? src : `https://www.anantagame.com${src}`;
      console.log(`Checking script: ${fullUrl}`);
      try {
        const jsRes = await fetch(fullUrl);
        const jsText = await jsRes.text();
        console.log(`JS Length: ${jsText.length}`);
        
        // Find role- images or references
        const roleRegex = /assets\/[a-zA-Z0-9_-]+\.[a-zA-Z0-9]+/g;
        const roleMatches = jsText.match(roleRegex) || [];
        const filtered = roleMatches.filter(m => m.includes('role') || m.includes('char') || m.includes('panel') || m.includes('shiye'));
        if (filtered.length > 0) {
          console.log(`Found relevant references in ${src}:`, Array.from(new Set(filtered)).slice(0, 20));
        }
      } catch (e: any) {
        console.error(`Error checking ${src}:`, e.message);
      }
    }
  } catch (e: any) {
    console.error(e);
  }
}
run();
