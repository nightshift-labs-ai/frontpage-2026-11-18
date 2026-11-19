// Renders page/index.html to entry.png (1024 x 1024) with headless Chromium through Playwright,
// and writes a 300 px wide preview to out/preview300.png for a legibility check.
// Usage: PW_NODE_MODULES=<dir of node_modules holding playwright> node tools/render.mjs
import { createRequire } from 'node:module';
import { mkdirSync, statSync } from 'node:fs';
import { fileURLToPath, pathToFileURL } from 'node:url';
import { dirname, join } from 'node:path';

const root = join(dirname(fileURLToPath(import.meta.url)), '..');
const require = createRequire(join(process.env.PW_NODE_MODULES, 'noop.js'));
const { chromium } = require('playwright');

const browser = await chromium.launch();
try {
  const page = await browser.newPage({ viewport: { width: 1024, height: 1024 }, deviceScaleFactor: 1 });
  await page.route('**/*', r => (r.request().url().startsWith('file:') ? r.continue() : r.abort()));
  await page.goto(pathToFileURL(join(root, 'page', 'index.html')).href);
  await page.evaluate(() => document.fonts.ready);
  // report any text box that overflows its card, so clipped text is caught before it ships
  const over = await page.evaluate(() => [...document.querySelectorAll('.card, #also, #foot, #mast')]
    .filter(e => e.scrollHeight > e.clientHeight + 1 || e.scrollWidth > e.clientWidth + 1)
    .map(e => (e.querySelector('.hl') || e).textContent.slice(0, 50)));
  if (over.length) console.log('OVERFLOW:', over);
  await page.screenshot({ path: join(root, 'entry.png'), type: 'png' });
  mkdirSync(join(root, 'out'), { recursive: true });
  await page.setViewportSize({ width: 1024, height: 1024 });
  const small = await browser.newPage({ viewport: { width: 300, height: 300 }, deviceScaleFactor: 1 });
  await small.setContent(`<body style="margin:0"><img src="data:image/png;base64,${(await import('node:fs')).readFileSync(join(root, 'entry.png')).toString('base64')}" style="width:300px;height:300px"></body>`);
  await small.screenshot({ path: join(root, 'out', 'preview300.png') });
  console.log('entry.png bytes:', statSync(join(root, 'entry.png')).size);
} finally {
  await browser.close();
}
