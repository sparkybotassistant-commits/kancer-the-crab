const puppeteer = require('puppeteer');
const path = require('path');
const fs = require('fs');

const OUTPUT_DIR = './screenshots';
const VIEWPORTS = {
  desktop: { width: 1440, height: 900 },
  mobile: { width: 390, height: 844 }
};

async function capturesite(page, url, name, viewport) {
  await page.setViewport(viewport);
  try {
    await page.goto(url, { waitUntil: 'networkidle2', timeout: 30000 });
  } catch(e) {
    console.log(`Timeout loading ${url}, continuing with partial load...`);
  }
  await new Promise(r => setTimeout(r, 3000));
  await page.screenshot({ path: path.join(OUTPUT_DIR, `${name}-full.png`), fullPage: true });
  await page.screenshot({ path: path.join(OUTPUT_DIR, `${name}-hero.png`), fullPage: false });
  const midpoint = await page.evaluate(() => Math.floor(document.body.scrollHeight / 2));
  await page.evaluate(pos => window.scrollTo(0, pos), midpoint);
  await new Promise(r => setTimeout(r, 500));
  await page.screenshot({ path: path.join(OUTPUT_DIR, `${name}-mid.png`), fullPage: false });
  await page.evaluate(() => window.scrollTo(0, document.body.scrollHeight));
  await new Promise(r => setTimeout(r, 500));
  await page.screenshot({ path: path.join(OUTPUT_DIR, `${name}-bottom.png`), fullPage: false });
  console.log(`Captured: ${name}`);
}

async function run(sites) {
  if (fs.existsSync(OUTPUT_DIR)) fs.rmSync(OUTPUT_DIR, { recursive: true });
  fs.mkdirSync(OUTPUT_DIR, { recursive: true });
  const browser = await puppeteer.launch({ headless: true, args: ['--no-sandbox', '--disable-setuid-sandbox'] });
  const page = await browser.newPage();
  page.on('requestfailed', req => console.log(`FAILED: ${req.url()}`));
  page.on('pageerror', err => console.log(`JS ERROR: ${err.message}`));
  for (const [name, url] of Object.entries(sites)) {
    await capturesite(page, url, `${name}-desktop`, VIEWPORTS.desktop);
    await capturesite(page, url, `${name}-mobile`, VIEWPORTS.mobile);
  }
  await browser.close();
  console.log('Screenshots saved to ./screenshots/');
}

const sites = {
  teletech: 'https://www.teletech.events/',
  ours: 'https://sparkybotassistant-commits.github.io/kancer-the-crab/',
  hvnter: 'https://hvnter.net/',
  doron: 'https://www.doronsupply.com/'
};

run(sites);
