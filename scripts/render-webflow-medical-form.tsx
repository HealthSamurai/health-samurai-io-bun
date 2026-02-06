/**
 * Renders Webflow DevLink Formbox component to static HTML for the /medical-form page.
 * 
 * IMPORTANT: Must be run with --tsconfig-override tsconfig.devlink.json
 * so that JSX compiles with React runtime instead of our custom #jsx runtime.
 * 
 * Usage:
 *   bun --tsconfig-override tsconfig.devlink.json scripts/render-webflow-medical-form.tsx
 * 
 * This script renders the Formbox component and saves:
 *   - public/devlink/medical-form.html  (body content, no contact form at bottom)
 *   - public/devlink/medical-form.css   (combined CSS, safe for embedding)
 *   - public/devlink/medical-form-raw.html (full unprocessed render for debugging)
 */
import React from 'react';
import { renderToStaticMarkup } from 'react-dom/server';
import { Formbox } from '../devlink/Formbox';

// ──────────────────────────────────────────────────────────────
// 1. Render the full Formbox component to static HTML
// ──────────────────────────────────────────────────────────────
const fullHtml = renderToStaticMarkup(React.createElement(Formbox));

// The Formbox component includes:
//   - Hero section (hero__section-forms)
//   - Trusted section
//   - Feature sections (no-code, FHIR, integration, embedded builder, etc.)
//   - Testimonials
//   - Appearance & Capabilities with tabs
//   - "Need a hand" form
//   - Features grid
//   - Solution Architecture with tabs
//   - Articles section
//   - Contact form section (discuss__section, id="demo") - we strip this
//
// No NewNavbar, GPrefooter, or GFooter are included in this component.

// Find the start of content — the first section
const contentStart = fullHtml.indexOf('<section');

// Find the contact form section at the bottom (we use our own)
const discussStart = fullHtml.indexOf('class="discuss__section"');
// Back up to the <section tag
let endIdx = fullHtml.length;
if (discussStart !== -1) {
  const sectionBefore = fullHtml.lastIndexOf('<section', discussStart);
  if (sectionBefore !== -1) {
    endIdx = sectionBefore;
  }
}

let pageHtml: string;
if (contentStart !== -1) {
  pageHtml = fullHtml.slice(contentStart, endIdx);
  // Balance unclosed tags
  const openDivs = (pageHtml.match(/<div/g) || []).length;
  const closeDivs = (pageHtml.match(/<\/div>/g) || []).length;
  if (openDivs > closeDivs) {
    pageHtml += '</div>'.repeat(openDivs - closeDivs);
  }
} else {
  console.error('Warning: Could not find content section, using full HTML');
  pageHtml = fullHtml;
}

// Strip stray preload links
pageHtml = pageHtml.replace(/<link rel="preload"[^>]*\/>/g, '');

// Strip "Not supported" builtin placeholders (e.g. LightboxWrapper)
pageHtml = pageHtml.replace(/<div>This builtin is not currently supported: [^<]+<\/div>/g, '');

// Strip the video-frame-popup overlay (YouTube modal triggered by click — not needed)
pageHtml = pageHtml.replace(/<div class="video-frame-popup">[\s\S]*?<\/div><\/div><\/div><\/div>/g, '');

// ── Fix image placeholder consistency for the 4 feature blocks ──
// Row 1 ("No-code Form Creation"): LightboxWrapper was directly in special__row
// without a special__img-wrp wrapper. Add an empty placeholder div so it matches
// the other rows (which have the white card styling from special__img-wrp).
pageHtml = pageHtml.replace(
  /(<div class="special__row">)(<div class="special__img-content pl-32"[^>]*id="[^"]*w-node-_6046e0ab-c70f-00c9-94f4-5f09064c78e8[^"]*")/,
  '$1<div class="special__img-wrp"></div>$2'
);

// Row 2 ("FHIR-Compliant Data"): The wrapper has class "no-shadow" which hides
// the white card background. Remove it so this row matches rows 3 and 4.
pageHtml = pageHtml.replace(
  /class="special__img-wrp no-shadow"/g,
  'class="special__img-wrp"'
);

// ── Button styling: add outline-caps class to "Book a demo" buttons ──
pageHtml = pageHtml.replace(
  /class="hs-new-button slider-link w-inline-block"><div>Book a demo<\/div>/g,
  'class="hs-new-button slider-link outline-caps w-inline-block"><div>Book a demo</div>'
);

// Add uppercase to all primary (non-outline) slider-link buttons
pageHtml = pageHtml.replace(
  /class="hs-new-button slider-link w-inline-block"><div>Try FORMS for free<\/div>/g,
  'class="hs-new-button slider-link w-inline-block" style="text-transform:uppercase"><div>Try FORMS for free</div>'
);

// ── Content overrides ──
pageHtml = pageHtml.replace(
  '>Medical Forms for Healthcare Workflows</h1>',
  ' style="grid-column:span 12">The Form Management Platform<br/>for Healthcare</h1>'
);

// Remove white card styling from hero GIF container (borders, shadow, etc.)
pageHtml = pageHtml.replace(
  '<div class="hero__img-forms col" id="w-node-_6046e0ab-c70f-00c9-94f4-5f09064c78bb-064c78aa"',
  '<div class="hero__img-forms col" id="w-node-_6046e0ab-c70f-00c9-94f4-5f09064c78bb-064c78aa" style="border:none;box-shadow:none;border-radius:0.75rem;overflow:hidden"'
);

// Replace hero description: move it full-width above the 2-col grid, keep bullets in the left column
const newDescription = `<p class="body__txt-16 transparent-65" style="margin-top:1rem">Design, manage, and run digital healthcare forms with built-in FHIR data capture and insights across the entire form lifecycle.</p>`;
const bulletList = `<ul class="body__txt-16 transparent-65" style="list-style:disc;padding-left:1.5em"><li><strong>Design once, reuse everywhere</strong><br/>Create and manage a shared library of reusable clinical forms.</li><li><strong>Modernize clinical workflows</strong><br/>Replace paper, PDFs, and siloed tools across patient and clinical journeys.</li><li><strong>Capture FHIR-aligned structured data</strong><br/>Store standardized data ready for interoperability, reporting, and exchange.</li><li><strong>Improve quality without IT bottlenecks</strong><br/>Enable clinical and operations teams to evolve forms without custom development.</li></ul>`;

// Remove original description, insert new description full-width before grid, add bullets in hero-col
pageHtml = pageHtml.replace(
  '</h1></div><div class="_3-col grid"><div class="hero-col col" id="w-node-_6046e0ab-c70f-00c9-94f4-5f09064c78b3-064c78aa"><p class="body__txt-16 transparent-65">Design, manage, and embed intelligent forms with ease. Fully customizable and compliant with healthcare standards.</p>',
  `</h1></div>${newDescription}<div class="_3-col grid"><div class="hero-col col" id="w-node-_6046e0ab-c70f-00c9-94f4-5f09064c78b3-064c78aa">${bulletList}`
);

// Replace section title
pageHtml = pageHtml.replace(
  'Tailored for Digital Health Professionals',
  'Built for healthcare platforms and providers'
);

// Remove the "Perfect for healthcare providers..." paragraph
pageHtml = pageHtml.replace(
  '<p class="special__p max-w">Perfect for healthcare providers, digital health vendors, startups, and clinical researchers looking to streamline data collection.</p>',
  ''
);

// ── Testimonial text fix ──
pageHtml = pageHtml.replace('Aidbox Forms made', 'Formbox made');

// ── Replace 4 feature block titles ──
pageHtml = pageHtml.replace('No-code Form Creation', 'Hospitals &amp; Clinics');
pageHtml = pageHtml.replace('FHIR-Compliant Data', 'EHR / PHR Vendors');
pageHtml = pageHtml.replace('Seamless Forms Integration', 'Clinical Research');
pageHtml = pageHtml.replace('Embedded Form Builder', 'Labs &amp; Telehealth');

// ── Replace 4 feature block text content ──
// Block 1: Hospitals & Clinics
pageHtml = pageHtml.replace(
  /<div class="special__text transparent-65 w-richtext" slot=""><p>Drag-and-drop Medical Form Builder interface to create intelligent medical forms\.<\/p><ul role="list" class=""><li>Real-time form view with testing capabilities\.<\/li><li>Create forms from 3000\+ ready-made templates\.<\/li><li>Generate digital forms from PDF files\.<\/li><\/ul><\/div>/,
  '<div class="special__text transparent-65 w-richtext" slot=""><p><strong>Bring order to hundreds of hospital forms</strong></p><p>Hospitals manage hundreds of paper, PDF, and digital forms that vary across departments and are hard to maintain. Updates are slow, data is fragmented, and patients are often asked to re-enter the same information.</p><p>Formbox helps hospitals:</p><ul role="list" class=""><li>Replace paper and PDF forms</li><li>Standardize forms across departments</li><li>Reuse structured FHIR data</li><li>Update forms without IT delays</li></ul><p style="margin-top:1em"><strong>Key value:</strong> consistency, quality of care, and operational efficiency.</p></div>'
);

// Block 2: EHR / PHR Vendors
pageHtml = pageHtml.replace(
  /<div class="special__text col _448 w-richtext" slot=""><p>Ensure all captured data is structured and standard-based for easy integration<\/p><ul role="list" class=""><li>Data is collected and stored according to FHIR SDC <br\/>standard\.<\/li><li>FHIR API enables data exchange with third-party apps\.<\/li><\/ul><\/div>/,
  '<div class="special__text col _448 w-richtext" slot=""><p><strong>Add a full forms system to your platform — without building one</strong></p><p>Healthcare IT vendors need powerful, flexible forms, but building and maintaining a forms system in-house creates long-term technical debt and slows product roadmaps.</p><p>Formbox helps vendors:</p><ul role="list" class=""><li>Avoid building and maintaining forms from scratch</li><li>Embed forms that look and feel native to their applications</li><li>Give clinicians and admins tools to create and update forms</li><li>Capture FHIR-native structured data without custom mapping</li><li>Reuse and version forms across customers and tenants</li><li>Support real clinical workflows, not just data entry</li></ul><p style="margin-top:1em"><strong>Key value:</strong> faster time to market, lower engineering cost, and easier enterprise adoption.</p></div>'
);

// Block 3: Clinical Research
pageHtml = pageHtml.replace(
  /<div class="special__text mw w-richtext" slot=""><p>Embed forms into apps, portals, or EHR systems using iFrames or web components\.<\/p><p>This integration guarantees user experience consistency and allows forms to be easily accessible where needed\.<\/p><\/div>/,
  '<div class="special__text mw w-richtext" slot=""><p><strong>Capture structured research data you can trust</strong></p><p>Clinical research teams rely on validated questionnaires and precise data collection, but studies often suffer from inconsistent forms, manual processes, and data that\'s hard to standardize or reuse across sites.</p><p>Formbox helps research teams:</p><ul role="list" class=""><li>Use standardized, validated questionnaires across studies</li><li>Capture FHIR-native structured data ready for analysis and exchange</li><li>Reuse and version forms across protocols and sites</li><li>Reduce manual handling and data transformation errors</li><li>Support multilingual and multi-site data collection</li></ul><p style="margin-top:1em"><strong>Key value:</strong> data quality, reproducibility, and interoperability.</p></div>'
);

// Block 4: Labs & Telehealth
pageHtml = pageHtml.replace(
  /<div class="special__text w-richtext" slot=""><p>Provide healthcare professionals with a form builder for creating and editing forms in real-time directly within your application\. <\/p><p>Embedding the Form Builder eliminates the need for developer involvement, enabling rapid form updates and customization on demand\.<\/p><\/div>/,
  '<div class="special__text w-richtext" slot=""><p><strong>Streamline digital onboarding and follow-ups</strong></p><p>Labs and telehealth providers depend on smooth pre- and post-visit workflows, but paper forms, PDFs, and disconnected tools slow patients down and create operational friction.</p><p>Formbox helps labs and telehealth teams:</p><ul role="list" class=""><li>Collect patient information digitally before or after visits</li><li>Automate form delivery and follow-ups as part of workflows</li><li>Reduce repeated data entry for patients</li><li>Capture structured FHIR data ready for downstream systems</li><li>Embed forms seamlessly into remote care experiences</li></ul><p style="margin-top:1em"><strong>Key value:</strong> faster workflows, better patient experience, and higher completion rates.</p></div>'
);

// ── SVG illustrations for each feature block ──
const svgHospitals = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 280 220" fill="none" style="width:100%;height:auto"><rect x="70" y="30" width="140" height="120" rx="8" fill="#fff" stroke="#e4e6ea" stroke-width="2"/><rect x="90" y="55" width="100" height="8" rx="4" fill="#e4e6ea"/><rect x="90" y="72" width="70" height="8" rx="4" fill="#e4e6ea"/><rect x="90" y="89" width="85" height="8" rx="4" fill="#e4e6ea"/><rect x="90" y="106" width="60" height="8" rx="4" fill="#e4e6ea"/><rect x="90" y="123" width="75" height="8" rx="4" fill="#e4e6ea"/><path d="M140 18 L140 30" stroke="#ea4a35" stroke-width="3" stroke-linecap="round"/><path d="M134 24 L146 24" stroke="#ea4a35" stroke-width="3" stroke-linecap="round"/><rect x="30" y="90" width="40" height="70" rx="6" fill="#fff" stroke="#e4e6ea" stroke-width="2"/><rect x="38" y="100" width="24" height="4" rx="2" fill="#e4e6ea"/><rect x="38" y="110" width="18" height="4" rx="2" fill="#e4e6ea"/><rect x="38" y="120" width="20" height="4" rx="2" fill="#e4e6ea"/><rect x="210" y="90" width="40" height="70" rx="6" fill="#fff" stroke="#e4e6ea" stroke-width="2"/><rect x="218" y="100" width="24" height="4" rx="2" fill="#e4e6ea"/><rect x="218" y="110" width="18" height="4" rx="2" fill="#e4e6ea"/><rect x="218" y="120" width="20" height="4" rx="2" fill="#e4e6ea"/><path d="M70 160 L30 160" stroke="#ea4a35" stroke-width="1.5" stroke-dasharray="4 3" opacity="0.5"/><path d="M210 160 L250 160" stroke="#ea4a35" stroke-width="1.5" stroke-dasharray="4 3" opacity="0.5"/><text x="140" y="185" text-anchor="middle" font-family="Inter,sans-serif" font-size="11" fill="#353b50" opacity="0.6">Standardized across departments</text></svg>`;

const svgEHR = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 280 220" fill="none" style="width:100%;height:auto"><rect x="20" y="25" width="110" height="80" rx="8" fill="#fff" stroke="#e4e6ea" stroke-width="2"/><rect x="30" y="38" width="50" height="6" rx="3" fill="#353b50" opacity="0.7"/><rect x="30" y="50" width="80" height="5" rx="2.5" fill="#e4e6ea"/><rect x="30" y="60" width="65" height="5" rx="2.5" fill="#e4e6ea"/><rect x="30" y="70" width="70" height="5" rx="2.5" fill="#e4e6ea"/><rect x="30" y="84" width="40" height="12" rx="6" fill="#ea4a35"/><rect x="150" y="25" width="110" height="80" rx="8" fill="#fff" stroke="#e4e6ea" stroke-width="2"/><rect x="160" y="38" width="50" height="6" rx="3" fill="#353b50" opacity="0.7"/><rect x="160" y="50" width="80" height="5" rx="2.5" fill="#e4e6ea"/><rect x="160" y="60" width="65" height="5" rx="2.5" fill="#e4e6ea"/><rect x="160" y="70" width="70" height="5" rx="2.5" fill="#e4e6ea"/><rect x="160" y="84" width="40" height="12" rx="6" fill="#ea4a35"/><rect x="55" y="120" width="170" height="75" rx="8" fill="#fff" stroke="#ea4a35" stroke-width="2" stroke-dasharray="6 4"/><rect x="75" y="135" width="40" height="5" rx="2.5" fill="#353b50" opacity="0.5"/><rect x="75" y="146" width="120" height="5" rx="2.5" fill="#e4e6ea"/><rect x="75" y="157" width="100" height="5" rx="2.5" fill="#e4e6ea"/><rect x="75" y="168" width="60" height="12" rx="6" fill="#ea4a35" opacity="0.8"/><path d="M75 130 L82 130 L82 137" stroke="#ea4a35" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/><text x="140" y="210" text-anchor="middle" font-family="Inter,sans-serif" font-size="11" fill="#353b50" opacity="0.6">Embed into any platform</text></svg>`;

const svgResearch = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 280 220" fill="none" style="width:100%;height:auto"><rect x="60" y="20" width="160" height="110" rx="8" fill="#fff" stroke="#e4e6ea" stroke-width="2"/><rect x="80" y="40" width="120" height="6" rx="3" fill="#353b50" opacity="0.15"/><rect x="80" y="55" width="50" height="30" rx="4" fill="#ea4a35" opacity="0.1" stroke="#ea4a35" stroke-width="1.5"/><rect x="140" y="55" width="50" height="30" rx="4" fill="#e4e6ea" opacity="0.5"/><rect x="80" y="95" width="110" height="5" rx="2.5" fill="#e4e6ea"/><rect x="80" y="106" width="80" height="5" rx="2.5" fill="#e4e6ea"/><circle cx="95" cy="70" r="6" fill="#ea4a35" opacity="0.3"/><path d="M92 70 L95 73 L100 67" stroke="#ea4a35" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/><rect x="30" y="145" width="65" height="55" rx="6" fill="#fff" stroke="#e4e6ea" stroke-width="2"/><rect x="40" y="155" width="30" height="5" rx="2.5" fill="#353b50" opacity="0.4"/><rect x="40" y="165" width="45" height="4" rx="2" fill="#e4e6ea"/><rect x="40" y="174" width="35" height="4" rx="2" fill="#e4e6ea"/><rect x="40" y="183" width="40" height="4" rx="2" fill="#e4e6ea"/><rect x="110" y="145" width="65" height="55" rx="6" fill="#fff" stroke="#e4e6ea" stroke-width="2"/><rect x="120" y="155" width="30" height="5" rx="2.5" fill="#353b50" opacity="0.4"/><rect x="120" y="165" width="45" height="4" rx="2" fill="#e4e6ea"/><rect x="120" y="174" width="35" height="4" rx="2" fill="#e4e6ea"/><rect x="120" y="183" width="40" height="4" rx="2" fill="#e4e6ea"/><rect x="190" y="145" width="65" height="55" rx="6" fill="#fff" stroke="#e4e6ea" stroke-width="2"/><rect x="200" y="155" width="30" height="5" rx="2.5" fill="#353b50" opacity="0.4"/><rect x="200" y="165" width="45" height="4" rx="2" fill="#e4e6ea"/><rect x="200" y="174" width="35" height="4" rx="2" fill="#e4e6ea"/><rect x="200" y="183" width="40" height="4" rx="2" fill="#e4e6ea"/><path d="M62 145 L90 130" stroke="#ea4a35" stroke-width="1.5" stroke-dasharray="4 3" opacity="0.4"/><path d="M140 145 L140 130" stroke="#ea4a35" stroke-width="1.5" stroke-dasharray="4 3" opacity="0.4"/><path d="M222 145 L190 130" stroke="#ea4a35" stroke-width="1.5" stroke-dasharray="4 3" opacity="0.4"/><text x="140" y="215" text-anchor="middle" font-family="Inter,sans-serif" font-size="11" fill="#353b50" opacity="0.6">Multi-site standardized data</text></svg>`;

const svgLabs = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 280 220" fill="none" style="width:100%;height:auto"><rect x="70" y="15" width="140" height="100" rx="8" fill="#fff" stroke="#e4e6ea" stroke-width="2"/><circle cx="140" cy="50" r="18" fill="#ea4a35" opacity="0.1" stroke="#ea4a35" stroke-width="1.5"/><path d="M133 50 L140 50 L140 43" stroke="#ea4a35" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/><rect x="100" y="78" width="80" height="6" rx="3" fill="#e4e6ea"/><rect x="110" y="90" width="60" height="6" rx="3" fill="#e4e6ea"/><rect x="15" y="130" width="75" height="75" rx="8" fill="#fff" stroke="#e4e6ea" stroke-width="2"/><rect x="25" y="142" width="40" height="5" rx="2.5" fill="#353b50" opacity="0.4"/><rect x="25" y="153" width="55" height="4" rx="2" fill="#e4e6ea"/><rect x="25" y="163" width="45" height="4" rx="2" fill="#e4e6ea"/><rect x="25" y="173" width="50" height="4" rx="2" fill="#e4e6ea"/><rect x="25" y="186" width="30" height="10" rx="5" fill="#ea4a35" opacity="0.8"/><path d="M52 130 L100 115" stroke="#ea4a35" stroke-width="1.5" stroke-dasharray="4 3" opacity="0.4"/><rect x="190" y="130" width="75" height="75" rx="8" fill="#fff" stroke="#e4e6ea" stroke-width="2"/><circle cx="227" cy="155" r="15" fill="#ea4a35" opacity="0.08"/><path d="M221 155 L230 155 M225 151 L225 159" stroke="#ea4a35" stroke-width="1.5" stroke-linecap="round" opacity="0.5"/><rect x="200" y="178" width="55" height="4" rx="2" fill="#e4e6ea"/><rect x="200" y="188" width="40" height="4" rx="2" fill="#e4e6ea"/><path d="M227 130 L180 115" stroke="#ea4a35" stroke-width="1.5" stroke-dasharray="4 3" opacity="0.4"/><rect x="102" y="130" width="75" height="75" rx="8" fill="#fff" stroke="#ea4a35" stroke-width="1.5" stroke-dasharray="0"/><rect x="112" y="142" width="40" height="5" rx="2.5" fill="#ea4a35" opacity="0.4"/><rect x="112" y="153" width="55" height="4" rx="2" fill="#e4e6ea"/><rect x="112" y="163" width="45" height="4" rx="2" fill="#e4e6ea"/><rect x="112" y="173" width="50" height="4" rx="2" fill="#e4e6ea"/><rect x="112" y="186" width="30" height="10" rx="5" fill="#ea4a35"/><text x="140" y="215" text-anchor="middle" font-family="Inter,sans-serif" font-size="11" fill="#353b50" opacity="0.6">Digital workflows &amp; follow-ups</text></svg>`;

// Block 1 (Hospitals): Insert SVG into the added empty img-wrp
pageHtml = pageHtml.replace(
  '<div class="special__img-wrp"></div><div class="special__img-content pl-32"',
  `<div class="special__img-wrp" style="background:#f7f8fa;padding:2.5rem">${svgHospitals}</div><div class="special__img-content pl-32"`
);

// Block 2 (EHR): Insert SVG by targeting the wrp with id ...7903
pageHtml = pageHtml.replace(
  '<div class="special__img-wrp" id="w-node-_6046e0ab-c70f-00c9-94f4-5f09064c7903-064c78aa"></div>',
  `<div class="special__img-wrp" id="w-node-_6046e0ab-c70f-00c9-94f4-5f09064c7903-064c78aa" style="background:#f7f8fa;padding:2.5rem">${svgEHR}</div>`
);

// Block 3 (Research): Insert SVG by targeting the wrp with id ...7907
pageHtml = pageHtml.replace(
  '<div class="special__img-wrp" id="w-node-_6046e0ab-c70f-00c9-94f4-5f09064c7907-064c78aa"></div>',
  `<div class="special__img-wrp" id="w-node-_6046e0ab-c70f-00c9-94f4-5f09064c7907-064c78aa" style="background:#f7f8fa;padding:2.5rem">${svgResearch}</div>`
);

// Block 4 (Labs): Insert SVG by targeting the wrp with id ...791b
pageHtml = pageHtml.replace(
  '<div class="special__img-wrp" id="w-node-_6046e0ab-c70f-00c9-94f4-5f09064c791b-064c78aa"></div>',
  `<div class="special__img-wrp" id="w-node-_6046e0ab-c70f-00c9-94f4-5f09064c791b-064c78aa" style="background:#f7f8fa;padding:2.5rem">${svgLabs}</div>`
);

// ── Replace "Appearance & Capabilities" section with bento grid ──
{
  const bentoSection = `<section class="apperance__section"><div class="bg-gray-50 py-16 sm:py-24"><div class="mx-auto max-w-2xl px-6 lg:max-w-7xl lg:px-8">
<p class="h2-style-42 text-center" style="text-align:center;font-size:2.25rem;font-weight:700;color:#1a1a1a;margin-bottom:1rem">Everything you need to run healthcare forms</p>
<p class="special__p text-center" style="text-align:center;max-width:720px;margin:0 auto 2.5rem;color:#666;font-size:1.05rem;line-height:1.6">Design, run, and evolve digital healthcare forms with all the building blocks required for real-world clinical use.</p>
<div style="display:grid;grid-template-columns:repeat(3,1fr);gap:1rem;margin-top:2rem">
${[
  { title: 'Form Builder', tags: ['No-code','Clinician-friendly','Embeddable'], desc: 'Build and edit clinical forms with rules, validation, and reusable sections — without engineering support.' },
  { title: 'Renderer', tags: ['Performance','Customizable UI','Embeddable'], desc: 'Run forms reliably in production with a fast, customizable rendering engine that delivers a consistent experience across devices and workflows.' },
  { title: 'Form Library', tags: ['Reuse','Versioning','Governance'], desc: 'Access and manage a shared catalog of 4,000+ ready-to-use, encoded forms and templates, with versioning and governance across departments, sites, or tenants.' },
  { title: 'PDF → Digital', tags: ['AI converter','Legacy','FHIR-ready'], desc: 'Convert paper and PDF forms into digital, structured forms to accelerate modernization.' },
  { title: 'Workflow Automation', tags: ['Automation','Orchestration','Production-ready'], desc: 'Configure and run workflows built around forms to support real clinical and operational use cases in production.' },
  { title: 'Form &amp; Response Storage', tags: ['FHIR-native','Secure','Reusable'], desc: 'Store form definitions and responses in a structured, FHIR-aligned format — ready for reuse, reporting, and exchange.' },
].map(c => `<div style="grid-column:span 1" class="bento-card"><div style="display:flex;flex-direction:column;height:100%;border-radius:0.75rem;background:#f3f4f6;padding:1.5rem"><div style="font-size:1.125rem;font-weight:600;color:#111827;margin-bottom:0.5rem">${c.title}</div><div style="display:flex;flex-wrap:wrap;gap:0.375rem;margin-bottom:0.75rem">${c.tags.map(t => `<span style="display:inline-flex;align-items:center;border-radius:0.375rem;background:#e5e7eb;padding:0.25rem 0.5rem;font-size:0.75rem;font-weight:500;color:#4b5563">${t}</span>`).join('')}</div><p style="font-size:0.875rem;line-height:1.5;color:#4b5563;flex:1">${c.desc}</p></div></div>`).join('\n')}
</div></div></div></section>`;

  pageHtml = pageHtml.replace(
    /<section class="apperance__section">[\s\S]*?<\/section>/,
    bentoSection
  );
}

// ── Replace "Solution Architecture" section ──
{
  const solutionSection = `<section class="solution__section"><div class="padding"><div class="container-1200"><div class="g-48-40-24"><div class="g-40"><div class="_3-col-grid"><div class="special__content" id="w-node-_6046e0ab-c70f-00c9-94f4-5f09064c79eb-064c78aa"><p class="h2-style-42">How Formbox fits into your stack</p></div></div><div style="max-width:720px"><p class="paragraph-18 transparent-65" style="margin-bottom:0.75rem">Formbox can be used as a standalone forms platform or embedded into existing healthcare applications.</p><ul class="special__text" style="list-style-type:disc;padding-left:1.5rem;margin:0"><li style="display:list-item;color:rgba(0,0,0,0.65);font-size:1rem;line-height:1.6">Embed forms or share via secure links</li><li style="display:list-item;color:rgba(0,0,0,0.65);font-size:1rem;line-height:1.6">Store data in Formbox or any FHIR server</li><li style="display:list-item;color:rgba(0,0,0,0.65);font-size:1rem;line-height:1.6">Connect to EHRs and downstream systems</li></ul></div></div><div style="margin-top:2.5rem"><img alt="Formbox architecture diagram — how Formbox fits into your healthcare stack" style="width:100%;height:auto;border-radius:0.5rem" loading="lazy" src="/assets/formbox-architecture.png"/></div></div></div></div></section>`;

  pageHtml = pageHtml.replace(
    /<section class="solution__section">[\s\S]*?<\/section>/,
    solutionSection
  );
}

// ── Insert "Deploy Formbox your way" section after solution section ──
{
  const deploySection = `<section class="deploy__section" style="padding:4rem 0"><div class="container-1200" style="max-width:1200px;margin:0 auto;padding:0 2rem"><p class="h2-style-42" style="text-align:center;margin-bottom:0.75rem">Deploy Formbox your way</p><p style="text-align:center;max-width:600px;margin:0 auto 2.5rem;color:rgba(0,0,0,0.65);font-size:1.05rem;line-height:1.6">Choose the deployment model that fits your security and infrastructure requirements.</p><div style="display:grid;grid-template-columns:repeat(3,1fr);gap:1rem">${[
    { title: 'Managed Cloud', desc: 'We host and operate Formbox for you.', icon: '<svg width="56" height="56" viewBox="0 0 56 56" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M28 12C20 12 14 16 14 16V36C14 36 20 40 28 40C36 40 42 36 42 36V16C42 16 36 12 28 12Z" stroke="#EF4136" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" fill="none"/><ellipse cx="28" cy="16" rx="14" ry="4" stroke="#EF4136" stroke-width="1.5" fill="#FFB8B6" opacity="0.4"/><path d="M14 26C14 26 20 30 28 30C36 30 42 26 42 26" stroke="#EF4136" stroke-width="1.5" stroke-linecap="round" opacity="0.5"/><circle cx="28" cy="44" r="3" stroke="#414042" stroke-width="1.5" fill="none"/><path d="M28 40V41" stroke="#414042" stroke-width="1.5" stroke-linecap="round"/></svg>' },
    { title: 'Your Cloud', desc: 'Run Formbox in your own cloud environment.', icon: '<svg width="56" height="56" viewBox="0 0 56 56" fill="none" xmlns="http://www.w3.org/2000/svg"><rect x="12" y="14" width="32" height="22" rx="4" stroke="#414042" stroke-width="1.5" fill="none"/><path d="M20 40H36" stroke="#414042" stroke-width="1.5" stroke-linecap="round"/><path d="M28 36V40" stroke="#414042" stroke-width="1.5" stroke-linecap="round"/><path d="M22 22L26 26L22 30" stroke="#EF4136" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/><path d="M29 30H34" stroke="#EF4136" stroke-width="1.5" stroke-linecap="round"/></svg>' },
    { title: 'On-Premise', desc: 'Deploy Formbox in your own data center.', icon: '<svg width="56" height="56" viewBox="0 0 56 56" fill="none" xmlns="http://www.w3.org/2000/svg"><rect x="14" y="12" width="28" height="32" rx="3" stroke="#414042" stroke-width="1.5" fill="none"/><rect x="18" y="16" width="8" height="6" rx="1.5" stroke="#EF4136" stroke-width="1.5" fill="#FFB8B6" opacity="0.3"/><rect x="30" y="16" width="8" height="6" rx="1.5" stroke="#EF4136" stroke-width="1.5" fill="#FFB8B6" opacity="0.3"/><rect x="18" y="26" width="8" height="6" rx="1.5" stroke="#EF4136" stroke-width="1.5" fill="#FFB8B6" opacity="0.3"/><rect x="30" y="26" width="8" height="6" rx="1.5" stroke="#414042" stroke-width="1.5" fill="none"/><circle cx="28" cy="40" r="2" fill="#EF4136"/></svg>' },
  ].map(c => `<div class="bento-card"><div style="display:flex;flex-direction:column;align-items:center;text-align:center;height:100%;border-radius:0.75rem;background:#f3f4f6;padding:2rem 1.5rem">${c.icon}<div style="font-size:1.125rem;font-weight:600;color:#111827;margin:1rem 0 0.5rem">${c.title}</div><p style="font-size:0.875rem;line-height:1.5;color:#4b5563">${c.desc}</p></div></div>`).join('')}</div></div></section>`;

  // Insert after the solution section's closing tag
  pageHtml = pageHtml.replace(
    /(<section class="solution__section">[\s\S]*?<\/section>)/,
    `$1${deploySection}`
  );
}

// ── Insert "What you can build with Formbox" section after deploy section ──
{
  const capabilitiesSection = `<section class="capabilities__section" style="padding:4rem 0"><div class="container-1200" style="max-width:1200px;margin:0 auto;padding:0 2rem"><p class="h2-style-42" style="text-align:center;margin-bottom:0.75rem">What you can build with Formbox</p><p style="text-align:center;max-width:760px;margin:0 auto 2.5rem;color:rgba(0,0,0,0.65);font-size:1.05rem;line-height:1.6">Create versatile healthcare forms that adapt to different user scenarios and customize their appearance to fit specific needs — from dynamic form logic to multilingual support.</p></div></section>`;

  pageHtml = pageHtml.replace(
    /(<section class="deploy__section">[\s\S]*?<\/section>)/,
    `$1${capabilitiesSection}`
  );
}

// ── Render AppearanceForm carousel and inject into capabilities section ──
{
  const { AppearanceForm } = await import('../devlink/AppearanceForm');
  const appearanceHtml = renderToStaticMarkup(React.createElement(AppearanceForm));

  // Extract just the carousel (slider-main_component) from the rendered HTML
  const sliderIdx = appearanceHtml.indexOf('slider-main_component');
  const sliderDivStart = appearanceHtml.lastIndexOf('<div', sliderIdx);
  const secEnd = appearanceHtml.lastIndexOf('</section>');
  let carousel = appearanceHtml.slice(sliderDivStart, secEnd);

  // Remove "not supported" placeholders
  carousel = carousel.replace(/<div>This builtin is not currently supported: [^<]+<\/div>/g, '');

  // Balance divs: trim extra closing </div> tags that belong to section wrapper
  const countOpens = (s: string) => (s.match(/<div/g) || []).length;
  const countCloses = (s: string) => (s.match(/<\/div>/g) || []).length;
  let bal = countOpens(carousel) - countCloses(carousel);
  while (bal < 0) {
    const lastClose = carousel.lastIndexOf('</div>');
    carousel = carousel.slice(0, lastClose);
    bal++;
  }

  // Insert carousel after the capabilities section description
  pageHtml = pageHtml.replace(
    'from dynamic form logic to multilingual support.</p></div></section>',
    `from dynamic form logic to multilingual support.</p>${carousel}</div></section>`
  );
}

// ──────────────────────────────────────────────────────────────
// 2. Activate the first tab pane in each tab group
// ──────────────────────────────────────────────────────────────
// Webflow hides .w-tab-pane by default and shows .w--tab-active.
// Since we render static HTML without Webflow JS, we need to manually
// activate the first tab in every tab group.

// Add w--tab-active to all Tab 1 panes
pageHtml = pageHtml.replace(
  /data-w-tab="Tab 1"([^>]*?)class="([^"]*w-tab-pane[^"]*)"/g,
  'data-w-tab="Tab 1"$1class="$2 w--tab-active"'
);

// Add w--current to all Tab 1 links
pageHtml = pageHtml.replace(
  /data-w-tab="Tab 1"([^>]*?)class="([^"]*w-tab-link[^"]*)"/g,
  'data-w-tab="Tab 1"$1class="$2 w--current"'
);

// ──────────────────────────────────────────────────────────────
// 3. Wrap in scoping container and save HTML
// ──────────────────────────────────────────────────────────────
pageHtml = `<div class="webflow-medical-form">${pageHtml}</div>`;

const outputDir = 'public/devlink';
await Bun.write(`${outputDir}/medical-form-raw.html`, fullHtml);
await Bun.write(`${outputDir}/medical-form.html`, pageHtml);
console.log(`Saved medical-form HTML: ${pageHtml.length} bytes`);

// ──────────────────────────────────────────────────────────────
// 4. Build safe CSS (no global resets that conflict with our styles)
// ──────────────────────────────────────────────────────────────
const globalCss = await Bun.file('devlink/global.css').text();
const moduleCss = await Bun.file('devlink/Formbox.module.css').text();

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
  const selectors = selectorStr.split(',').map(s => s.trim()).filter(Boolean);
  if (selectors.length === 0) return false;
  
  return selectors.every(sel => {
    const base = sel.replace(/::?[\w-]+(\([^)]*\))?/g, '').replace(/\[[^\]]*\]/g, '').trim();
    return BARE_ELEMENTS.has(base);
  });
}

function extractSafeCss(css: string): string {
  const result: string[] = [];
  let pos = 0;
  
  const normalizeStart = css.indexOf('/*! normalize.css');
  const webflowIconsIdx = css.indexOf("font-family: 'webflow-icons'", normalizeStart !== -1 ? normalizeStart : 0);
  let skipStart = normalizeStart;
  let skipEnd = -1;
  
  if (webflowIconsIdx !== -1) {
    const before = css.substring(0, webflowIconsIdx);
    skipEnd = before.lastIndexOf('@font-face');
  }
  
  while (pos < css.length) {
    while (pos < css.length && /\s/.test(css[pos])) pos++;
    if (pos >= css.length) break;
    
    if (skipStart !== -1 && skipEnd !== -1 && pos >= skipStart && pos < skipEnd) {
      pos = skipEnd;
      continue;
    }
    
    // Comments
    if (css[pos] === '/' && css[pos + 1] === '*') {
      const commentEnd = css.indexOf('*/', pos + 2);
      if (commentEnd === -1) break;
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
      pos = braceEnd + 1;
      continue;
    }
    
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

// Scope the Formbox.module.css inside .webflow-medical-form to prevent
// generic class names (.container, .gap-*, etc.) from leaking to our
// site header/footer. Uses CSS nesting (supported in all modern browsers).
const scopedCss = `.webflow-medical-form {\n${moduleCss}\n}`;

// Custom CSS overrides for bullet lists and button hover inversion
const buttonOverrides = `
/* === Bullet list fix for feature blocks === */
.webflow-medical-form .special__text ul {
  list-style-type: disc;
}
.webflow-medical-form .special__text ul li {
  display: list-item;
}

/* === Bento grid cards === */
.webflow-medical-form .bento-card > div {
  transition: background-color 0.2s ease;
}
.webflow-medical-form .bento-card:hover > div {
  background-color: rgba(234, 74, 53, 0.1) !important;
}
@media screen and (max-width: 767px) {
  .webflow-medical-form .bento-card {
    grid-column: span 1 !important;
  }
}

/* === Button hover inversion (primary ↔ outline) === */
.webflow-medical-form .hs-new-button.slider-link:not(.outline-caps):not(.outline-caps-2):hover {
  background-color: var(--color--hs-new-white) !important;
  color: var(--color--hs-new-black-353b50) !important;
}
.webflow-medical-form .hs-new-button.slider-link:not(.outline-caps):not(.outline-caps-2) {
  transition: background-color 0.2s, color 0.2s;
}
.webflow-medical-form .hs-new-button.slider-link.outline-caps {
  transition: background-color 0.2s, color 0.2s;
}
`;

const combinedCss = `/* Webflow DevLink CSS for Medical Form page */
/* Auto-generated — do not edit manually */
/* Regenerate with: bun --tsconfig-override tsconfig.devlink.json scripts/render-webflow-medical-form.tsx */

/* === Safe Global Styles (fonts, variables, .w-* framework) === */
${safeCss}

/* === Medical Form Page Styles (scoped to .webflow-medical-form) === */
${scopedCss}

${buttonOverrides}
`;

await Bun.write(`${outputDir}/medical-form.css`, combinedCss);
console.log(`Saved medical-form CSS: ${combinedCss.length} bytes (was ${globalCss.length + moduleCss.length} bytes before filtering)`);

console.log('\nDone! Files saved to public/devlink/');
console.log('  medical-form.html     - HTML content (tabs pre-activated, no contact form)');
console.log('  medical-form.css      - Combined CSS (no global resets)');
console.log('  medical-form-raw.html - Full unprocessed render (for debugging)');
