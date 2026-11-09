import { chromium } from '/home/matthew/.npm/_npx/e41f203b7505f1fb/node_modules/playwright/index.mjs';
import fs from 'node:fs';

const BASE = process.env.BASE || 'http://127.0.0.1:4321';
const OUT = process.env.OUT || '/tmp/post-redesign-shots';
fs.mkdirSync(OUT, { recursive: true });

const slugs = [
  'hermes-vs-openclaw',
  'more-context-makes-your-agent-dumber',
  'my-agent-kept-writing-the-same-post',
  'discord-vs-telegram-agentic-work',
  'what-is-an-ai-harness',
];

const viewports = {
  desktop: { width: 1440, height: 900 },
  laptop: { width: 1180, height: 800 },
  tablet: { width: 900, height: 1200 },
  mobile: { width: 390, height: 844 },
};

const browser = await chromium.launch({ executablePath: '/usr/bin/google-chrome', args: ['--no-sandbox', '--disable-dev-shm-usage'] });
for (const slug of slugs) {
  for (const [name, vp] of Object.entries(viewports)) {
    const ctx = await browser.newContext({ viewport: vp, deviceScaleFactor: 1 });
    const page = await ctx.newPage();
    const url = `${BASE}/blog/${slug}/`;
    const resp = await page.goto(url, { waitUntil: 'networkidle', timeout: 45000 }).catch(e => null);
    if (!resp) { console.log('FAIL', slug, name); await ctx.close(); continue; }
    await page.waitForTimeout(400);
    // full page
    await page.screenshot({ path: `${OUT}/${slug}--${name}--full.png`, fullPage: true });
    // above-the-fold only (masthead view)
    await page.screenshot({ path: `${OUT}/${slug}--${name}--fold.png` });
    // measure masthead geometry
    const geo = await page.evaluate(() => {
      const m = document.querySelector('.article-masthead');
      const bg = document.querySelector('.masthead-bg');
      const content = document.querySelector('.masthead-content');
      const h1 = document.querySelector('.masthead-content h1');
      const scrim = document.querySelector('.masthead-scrim');
      const r = el => el ? el.getBoundingClientRect().toJSON() : null;
      const cs = el => el ? getComputedStyle(el) : null;
      const img = bg;
      return {
        masthead: r(m),
        bg: r(bg),
        content: r(content),
        h1: r(h1),
        scrim: r(scrim),
        contentPosition: content ? cs(content).position : null,
        bgObjectFit: bg ? cs(bg).objectFit : null,
        bgObjectPosition: bg ? cs(bg).objectPosition : null,
        bgAspect: bg ? cs(bg).aspectRatio : null,
        bgNatural: img && img.naturalWidth ? { w: img.naturalWidth, h: img.naturalHeight } : null,
        h1Font: h1 ? cs(h1).fontSize : null,
        // sample mean luminance of top/left/bottom-right regions of the bg
        scrollY: window.scrollY,
      };
    });
    fs.writeFileSync(`${OUT}/${slug}--${name}--geo.json`, JSON.stringify(geo, null, 2));
    await ctx.close();
    console.log('ok', slug, name);
  }
}
await browser.close();
console.log('done');
