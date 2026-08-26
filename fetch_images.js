import https from 'https';

https.get('https://www.anantagame.com/pc/gw/20250904162009/css/index_8d610b7c.css', (res) => {
  let data = '';
  res.on('data', (chunk) => {
    data += chunk;
  });
  res.on('end', () => {
    const urls = data.match(/url\(['"]?([^'"\)]+\.(png|jpg|webp))['"]?\)/g);
    if (urls) {
      console.log('CSS Images:', [...new Set(urls)].join('\n'));
    } else {
      console.log('No CSS URLs found');
    }
  });
});

https.get('https://www.anantagame.com/pc/gw/20250904162009/js/index_7f87c600.js', (res) => {
  let data = '';
  res.on('data', (chunk) => {
    data += chunk;
  });
  res.on('end', () => {
    const urls = data.match(/"[^"]+\.(png|jpg|webp)"/g);
    if (urls) {
      console.log('JS Images:', [...new Set(urls)].join('\n'));
    } else {
      console.log('No JS URLs found');
    }
  });
});
