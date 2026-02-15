const cssstats = require('cssstats');
const fs = require('fs');
const path = require('path');

// Point this at your main CSS file
const cssFiles = ['styles.css', 'style.css', 'main.css', 'index.css'];
let cssContent = '';

for (const file of cssFiles) {
  const filePath = path.join(__dirname, file);
  if (fs.existsSync(filePath)) {
    cssContent += fs.readFileSync(filePath, 'utf8') + ' ';
  }
}

// Also check for CSS in HTML file
const htmlFiles = ['index.html'];
for (const file of htmlFiles) {
  const filePath = path.join(__dirname, file);
  if (fs.existsSync(filePath)) {
    const html = fs.readFileSync(filePath, 'utf8');
    const styleMatches = html.match(/<style[^>]*>([\s\S]*?)<\/style>/gi);
    if (styleMatches) {
      styleMatches.forEach(match => {
        cssContent += match.replace(/<\/?style[^>]*>/gi, '') + ' ';
      });
    }
  }
}

if (!cssContent.trim()) {
  console.log('No CSS found. Check your file paths.');
  process.exit(1);
}

const stats = cssstats(cssContent);

console.log('=== CSS ANALYSIS ===');
console.log(`Total rules: ${stats.rules.total}`);
console.log(`Total declarations: ${stats.declarations.total}`);
console.log(`Unique font sizes: ${stats.declarations.properties['font-size']?.length || 0}`);
console.log(`Unique colors: ${stats.declarations.properties.color?.length || 0}`);
console.log(`Unique background colors: ${stats.declarations.properties['background-color']?.length || 0}`);
console.log(`Media queries: ${stats.mediaQueries?.total || 0}`);

// Flag inconsistencies
const fontSizes = stats.declarations.properties['font-size'] || [];
if (fontSizes.length > 10) {
  console.log(`\nWARNING: ${fontSizes.length} different font sizes detected. Should be 5-8 max.`);
  console.log('Values:', [...new Set(fontSizes)].join(', '));
}

const colors = [...new Set([
  ...(stats.declarations.properties.color || []),
  ...(stats.declarations.properties['background-color'] || [])
])];

if (colors.length > 15) {
  console.log(`\nWARNING: ${colors.length} unique color values. Consider using CSS custom properties.`);
}
