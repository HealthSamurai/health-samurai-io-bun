/**
 * Renders Webflow DevLink AppearanceForm component to static HTML.
 * 
 * Usage:
 *   bun --tsconfig-override tsconfig.devlink.json scripts/render-appearance-form.tsx
 */
import React from 'react';
import { renderToStaticMarkup } from 'react-dom/server';
import { AppearanceForm } from '../devlink/AppearanceForm';

const fullHtml = renderToStaticMarkup(React.createElement(AppearanceForm));

// Remove "not supported" placeholders
let html = fullHtml.replace(/<div>This builtin is not currently supported: [^<]+<\/div>/g, '');

// Remove the video-frame-popup divs
html = html.replace(/<div class="video-frame-popup">[\s\S]*?<\/div><\/div>/g, '');

// Save raw and processed
await Bun.write('public/devlink/appearance-form-raw.html', fullHtml);
await Bun.write('public/devlink/appearance-form.html', html);

// Also save the module CSS
const moduleCss = await Bun.file('devlink/AppearanceForm.module.css').text();
await Bun.write('public/devlink/appearance-form.css', moduleCss);

console.log(`Raw HTML: ${fullHtml.length} bytes`);
console.log(`Processed HTML: ${html.length} bytes`);
console.log(`CSS: ${moduleCss.length} bytes`);
