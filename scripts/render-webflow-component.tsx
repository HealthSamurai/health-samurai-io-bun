/**
 * Renders Webflow DevLink components to static HTML for use in our SSR pages.
 * 
 * IMPORTANT: Must be run with --tsconfig-override tsconfig.devlink.json
 * so that JSX compiles with React runtime instead of our custom #jsx runtime.
 * 
 * Usage:
 *   bun --tsconfig-override tsconfig.devlink.json scripts/render-webflow-component.tsx
 * 
 * This script renders the Pricing component and saves:
 *   - public/devlink/pricing.html  (body content, no navbar/footer, tabs activated)
 *   - public/devlink/pricing.css   (combined CSS, safe for embedding)
 */
import React from 'react';
import { renderToStaticMarkup } from 'react-dom/server';
import { Pricing } from '../devlink/Pricing';

// ──────────────────────────────────────────────────────────────
// 1. Render the full Pricing component to static HTML
// ──────────────────────────────────────────────────────────────
const fullHtml = renderToStaticMarkup(React.createElement(Pricing));

// The devlink Pricing component includes:
//   - NewNavbar (before pricing content)
//   - Pricing sections (the content we want)
//   - Contact form section (id="form-contact") - we have our own
//   - Prefooter awards/badges
//   - Footer
//   - Modal overlays
// We strip everything except the pricing sections.
const pricingStart = fullHtml.indexOf('<section class="price-hero__section"');

// Find the end of pricing content: stop before the contact form, prefooter, or footer
const formContactStart = fullHtml.indexOf('<section id="form-contact"');
const prefooterStart = fullHtml.indexOf('<section class="g-prefooter__section"');
const prefooterAwardsStart = fullHtml.indexOf('class="prefooter-section_awards"');
const footerSectionStart = fullHtml.indexOf('class="footer-section"');
const footerStart = fullHtml.indexOf('<footer');

// Use the earliest end marker found
const endMarkers = [formContactStart, prefooterStart, prefooterAwardsStart, footerSectionStart, footerStart]
  .filter(idx => idx !== -1);
const endIdx = endMarkers.length > 0 ? Math.min(...endMarkers) : fullHtml.length;

let pricingHtml: string;
if (pricingStart !== -1) {
  pricingHtml = fullHtml.slice(pricingStart, endIdx);
  // Clean up any unclosed tags at the end
  // Count opening vs closing divs to ensure balance
  const openDivs = (pricingHtml.match(/<div/g) || []).length;
  const closeDivs = (pricingHtml.match(/<\/div>/g) || []).length;
  if (openDivs > closeDivs) {
    // Add missing closing divs
    pricingHtml += '</div>'.repeat(openDivs - closeDivs);
  }
} else {
  console.error('Warning: Could not find pricing section, using full HTML');
  pricingHtml = fullHtml;
}

// Strip <link rel="preload"> tags
pricingHtml = pricingHtml.replace(/<link rel="preload"[^>]*\/>/g, '');

// ──────────────────────────────────────────────────────────────
// 2. Activate the first tab pane ("Yearly") in each tab group
// ──────────────────────────────────────────────────────────────
// Webflow hides .w-tab-pane by default and shows .w--tab-active.
// Since we render static HTML without Webflow JS, we need to manually
// activate the first tab (Tab 1 = Yearly) in every tab group.

// Add w--tab-active to all Tab 1 panes
pricingHtml = pricingHtml.replace(
  /data-w-tab="Tab 1"([^>]*?)class="([^"]*w-tab-pane[^"]*)"/g,
  'data-w-tab="Tab 1"$1class="$2 w--tab-active"'
);

// Add w--current to all Tab 1 links
pricingHtml = pricingHtml.replace(
  /data-w-tab="Tab 1"([^>]*?)class="([^"]*w-tab-link[^"]*)"/g,
  'data-w-tab="Tab 1"$1class="$2 w--current"'
);

// ──────────────────────────────────────────────────────────────
// 3. Wrap in scoping container and save HTML
// ──────────────────────────────────────────────────────────────
// Wrap pricing content in a scoping div so the Webflow CSS 
// (which has generic class names like .container, .gap-*, etc.)
// doesn't leak to our site's header/footer.
pricingHtml = `<div class="webflow-pricing">${pricingHtml}</div>`;

const outputDir = 'public/devlink';
await Bun.write(`${outputDir}/pricing-raw.html`, fullHtml);
await Bun.write(`${outputDir}/pricing.html`, pricingHtml);
console.log(`Saved pricing HTML: ${pricingHtml.length} bytes`);

// ──────────────────────────────────────────────────────────────
// 4. Build safe CSS (no global resets that conflict with our styles)
// ──────────────────────────────────────────────────────────────
const globalCss = await Bun.file('devlink/global.css').text();
const pricingModuleCss = await Bun.file('devlink/Pricing.module.css').text();

// Extract only safe CSS from global.css that won't conflict with our Tailwind CSS.
// 
// Strategy: Parse CSS into top-level blocks and filter out:
// - normalize.css reset section
// - Bare element selectors (body {}, h1 {}, a {}, img {}, etc.)
// 
// Keep:
// - @import, @font-face declarations
// - :root CSS custom properties
// - .w-* class selectors (Webflow framework)
// - @media blocks (they contain .w-* rules)

// Bare element names that should NOT have global styles applied
const BARE_ELEMENTS = new Set([
  'html', 'body', 'h1', 'h2', 'h3', 'h4', 'h5', 'h6',
  'p', 'a', 'ul', 'ol', 'li', 'img', 'strong', 'em', 'b', 'i',
  'blockquote', 'figure', 'figcaption', 'table', 'th', 'td', 'tr',
  'article', 'aside', 'details', 'summary', 'main', 'nav', 'section',
  'header', 'footer', 'address', 'dfn', 'mark', 'small', 'sub', 'sup',
  'code', 'kbd', 'pre', 'samp', 'abbr', 'time',
  'audio', 'canvas', 'progress', 'video',
  'fieldset', 'legend', 'button', 'input', 'optgroup', 'select', 'textarea',
  '*',
]);

function isBareElementSelector(selectorStr: string): boolean {
  // Check if all comma-separated selectors are bare element selectors
  const selectors = selectorStr.split(',').map(s => s.trim()).filter(Boolean);
  if (selectors.length === 0) return false;
  
  return selectors.every(sel => {
    // Strip pseudo-classes/pseudo-elements and attribute selectors for checking
    const base = sel.replace(/::?[\w-]+(\([^)]*\))?/g, '').replace(/\[[^\]]*\]/g, '').trim();
    return BARE_ELEMENTS.has(base);
  });
}

function extractSafeCss(css: string): string {
  const result: string[] = [];
  let pos = 0;
  
  // Skip the normalize.css section entirely (it's between the landmark comment and the next section)
  const normalizeStart = css.indexOf('/*! normalize.css');
  // Find the webflow-icons @font-face after normalize
  const webflowIconsIdx = css.indexOf("font-family: 'webflow-icons'", normalizeStart !== -1 ? normalizeStart : 0);
  let skipStart = normalizeStart;
  let skipEnd = -1;
  
  if (webflowIconsIdx !== -1) {
    // Find the @font-face that contains the webflow-icons
    const before = css.substring(0, webflowIconsIdx);
    skipEnd = before.lastIndexOf('@font-face');
  }
  
  while (pos < css.length) {
    // Skip whitespace
    while (pos < css.length && /\s/.test(css[pos])) pos++;
    if (pos >= css.length) break;
    
    // Are we in the normalize skip zone?
    if (skipStart !== -1 && skipEnd !== -1 && pos >= skipStart && pos < skipEnd) {
      pos = skipEnd;
      continue;
    }
    
    // Comments
    if (css[pos] === '/' && css[pos + 1] === '*') {
      const commentEnd = css.indexOf('*/', pos + 2);
      if (commentEnd === -1) break;
      // Skip normalize.css comments, keep others
      const comment = css.substring(pos, commentEnd + 2);
      if (!comment.includes('normalize.css')) {
        result.push(comment);
      }
      pos = commentEnd + 2;
      continue;
    }
    
    // @import
    if (css.substring(pos, pos + 7) === '@import') {
      const end = css.indexOf(';', pos);
      if (end === -1) break;
      result.push(css.substring(pos, end + 1));
      pos = end + 1;
      continue;
    }
    
    // @font-face
    if (css.substring(pos, pos + 10) === '@font-face') {
      const braceStart = css.indexOf('{', pos);
      if (braceStart === -1) break;
      const braceEnd = findClosingBrace(css, braceStart);
      result.push(css.substring(pos, braceEnd + 1));
      pos = braceEnd + 1;
      continue;
    }
    
    // @media or other at-rules with blocks
    if (css[pos] === '@') {
      const braceStart = css.indexOf('{', pos);
      if (braceStart === -1) break;
      const braceEnd = findClosingBrace(css, braceStart);
      result.push(css.substring(pos, braceEnd + 1));
      pos = braceEnd + 1;
      continue;
    }
    
    // :root block
    if (css.substring(pos, pos + 5) === ':root') {
      const braceStart = css.indexOf('{', pos);
      if (braceStart === -1) break;
      const braceEnd = findClosingBrace(css, braceStart);
      result.push(css.substring(pos, braceEnd + 1));
      pos = braceEnd + 1;
      continue;
    }
    
    // Regular CSS rule: selector { ... }
    const braceStart = css.indexOf('{', pos);
    if (braceStart === -1) break;
    
    const selectorStr = css.substring(pos, braceStart).trim();
    const braceEnd = findClosingBrace(css, braceStart);
    
    if (isBareElementSelector(selectorStr)) {
      // Skip bare element rules
      pos = braceEnd + 1;
      continue;
    }
    
    // Keep class-based rules
    result.push(css.substring(pos, braceEnd + 1));
    pos = braceEnd + 1;
  }
  
  return result.join('\n\n');
}

function findClosingBrace(css: string, openPos: number): number {
  let depth = 0;
  for (let i = openPos; i < css.length; i++) {
    if (css[i] === '{') depth++;
    else if (css[i] === '}') {
      depth--;
      if (depth === 0) return i;
    }
  }
  return css.length - 1;
}

const safeCss = extractSafeCss(globalCss);

// Scope the Pricing.module.css inside .webflow-pricing to prevent 
// generic class names (.container, .gap-*, etc.) from leaking to our
// site header/footer. Uses CSS nesting (supported in all modern browsers).
const scopedPricingCss = `.webflow-pricing {\n${pricingModuleCss}\n}`;

const combinedCss = `/* Webflow DevLink CSS for Pricing page */
/* Auto-generated — do not edit manually */
/* Regenerate with: bun --tsconfig-override tsconfig.devlink.json scripts/render-webflow-component.tsx */

/* === Safe Global Styles (fonts, variables, .w-* framework) === */
${safeCss}

/* === Pricing Page Styles (scoped to .webflow-pricing) === */
${scopedPricingCss}
`;

await Bun.write(`${outputDir}/pricing.css`, combinedCss);
console.log(`Saved pricing CSS: ${combinedCss.length} bytes (was ${globalCss.length + pricingModuleCss.length} bytes before filtering)`);

console.log('\nDone! Files saved to public/devlink/');
console.log('  pricing.html - HTML content (tabs pre-activated, no navbar/footer)');
console.log('  pricing.css  - Combined CSS (no global resets)');
