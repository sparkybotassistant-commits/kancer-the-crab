const puppeteer = require('puppeteer');
const { AxePuppeteer } = require('@axe-core/puppeteer');

(async () => {
  const browser = await puppeteer.launch({
    headless: true,
    args: ['--no-sandbox']
  });
  const page = await browser.newPage();
  await page.goto('https://sparkybotassistant-commits.github.io/kancer-the-crab/', {
    waitUntil: 'networkidle2'
  });
  
  const results = await new AxePuppeteer(page).analyze();
  console.log('=== ACCESSIBILITY AUDIT ===');
  console.log(`Violations: ${results.violations.length}`);
  
  results.violations.forEach(v => {
    console.log(`\nRULE: ${v.id} (${v.impact})`);
    console.log(`${v.description}`);
    console.log(`Help: ${v.helpUrl}`);
    v.nodes.forEach(node => {
      console.log(`Element: ${node.html.slice(0, 100)}`);
    });
  });
  
  if (results.violations.length === 0) {
    console.log('No accessibility violations found!');
  }
  
  await browser.close();
})();
