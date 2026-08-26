const urls = [
  'https://www.anantagame.com/pc/gw/20250904162009/assets/role-ailun_0ed12004.jpg',
  'https://www.anantagame.com/pc/gw/20250904162009/assets/role-ailun_d1a180a7.jpg',
  'https://www.anantagame.com/pc/gw/20250904162009/assets/role-ailun_a69544ea.jpg',
  'https://www.anantagame.com/pc/gw/20250904162009/assets/role-ailun.jpg',
  'https://www.anantagame.com/pc/gw/20250904162009/assets/role-wanxi_0ed12004.jpg',
  'https://www.anantagame.com/pc/gw/20250904162009/assets/role-wanxi_d1a180a7.jpg',
  'https://www.anantagame.com/pc/gw/20250904162009/assets/role-wanxi_a69544ea.jpg',
  'https://www.anantagame.com/pc/gw/20250904162009/assets/role-wanxi.jpg',
  'https://www.anantagame.com/pc/gw/20250904162009/assets/role-dila_0ed12004.jpg',
  'https://www.anantagame.com/pc/gw/20250904162009/assets/role-dila_d1a180a7.jpg',
  'https://www.anantagame.com/pc/gw/20250904162009/assets/role-dila_a69544ea.jpg',
  'https://www.anantagame.com/pc/gw/20250904162009/assets/role-dila.jpg',
  'https://www.anantagame.com/pc/gw/20250904162009/assets/role-mika_0ed12004.jpg',
  'https://www.anantagame.com/pc/gw/20250904162009/assets/role-mika_d1a180a7.jpg',
  'https://www.anantagame.com/pc/gw/20250904162009/assets/role-mika_a69544ea.jpg',
  'https://www.anantagame.com/pc/gw/20250904162009/assets/role-mika.jpg',
];

async function run() {
  for (const url of urls) {
    try {
      const res = await fetch(url, { method: 'HEAD' });
      if (res.ok) {
        console.log(`[${res.status}] FOUND: ${url}`);
      }
    } catch {
      // Ignore
    }
  }
}

run();
