const lighthouse = require('lighthouse');
const puppeteer = require('puppeteer');

(async () => {
  const browser = await puppeteer.launch({
    headless: true,
    args: ['--no-sandbox', '--disable-setuid-sandbox']
  });
  const port = new URL(browser.wsEndpoint()).port;
  
  const result = await lighthouse('https://sparkybotassistant-commits.github.io/kancer-the-crab/', {
    port,
    output: 'json',
    onlyCategories: ['performance', 'accessibility', 'best-practices', 'seo']
  });
  
  const { categories } = result.lhr;
  console.log('=== LIGHTHOUSE AUDIT ===');
  console.log(`Performance: ${Math.round(categories.performance.score * 100)}/100`);
  console.log(`Accessibility: ${Math.round(categories.accessibility.score * 100)}/100`);
  console.log(`Best Practices: ${Math.round(categories['best-practices'].score * 100)}/100`);
  console.log(`SEO: ${Math.round(categories.seo.score * 100)}/100`);
  
  // Print specific failures
  const audits = result.lhr.audits;
  console.log('\n=== FAILURES & WARNINGS ===');
  for (const [key, audit] of Object.entries(audits)) {
    if (audit.score !== null && audit.score < 1) {
      console.log(`FAIL: ${audit.title} — ${audit.description?.slice(0, 100)}`);
    }
  }
  
  await browser.close();
})();
