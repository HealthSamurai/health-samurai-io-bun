import { Fragment } from "../lib/jsx-runtime";
import { Hero } from "../components/Hero";
import { Pricing } from "../components/Pricing";
import type { PricingTier } from "../components/Pricing";
import { SupportPlans } from "../components/SupportPlans";
import { ContactForm } from "../components/ContactForm";

export const metadata = {
  title: "FHIR-Compliant Medical Forms for Healthcare Workflows",
  description:
    "Design, manage, and embed intelligent medical forms with ease. Fully customizable and compliant with healthcare standards. No-code form builder with FHIR SDC support.",
  stylesheets: ["/devlink/medical-form.css"],
};

// ---------------------------------------------------------------------------
// Devlink HTML splitting — strip hero + special__section, keep the rest
// ---------------------------------------------------------------------------
let partsCache: { trustedHtml: string; restHtml: string } | null = null;

async function getPageParts() {
  if (!partsCache || process.env.NODE_ENV !== "production") {
    const full = await Bun.file("public/devlink/medical-form.html").text();
    const trustedStart = full.indexOf('<section class="trusted__section">');
    const specialStart = full.indexOf('<section class="special__section">');
    const partnerStart = full.indexOf('<section class="partner__section-2"');

    // Part 1: trusted section only (between hero and special)
    const trustedHtml =
      '<div class="webflow-medical-form">' +
      full.substring(trustedStart, specialStart) +
      "</div>";

    // Part 2: everything from partner marquee section to end (includes closing </div>)
    const restHtml =
      '<div class="webflow-medical-form">' + full.substring(partnerStart);

    partsCache = { trustedHtml, restHtml };
  }
  return partsCache;
}

// ---------------------------------------------------------------------------
// Value Props (4-column row under hero)
// ---------------------------------------------------------------------------
// 2x2 grid of circles: `filled` out of 4 are red, rest are gray
function DotsIcon(filled: number): string {
  const r = "#EA4A35";
  const g = "#e4e6ea";
  const c = [filled >= 1 ? r : g, filled >= 2 ? r : g, filled >= 3 ? r : g, filled >= 4 ? r : g];
  return `<svg width="36" height="36" viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg"><circle cx="10" cy="10" r="8" fill="${c[0]}"/><circle cx="26" cy="10" r="8" fill="${c[1]}"/><circle cx="10" cy="26" r="8" fill="${c[2]}"/><circle cx="26" cy="26" r="8" fill="${c[3]}"/></svg>`;
}

const valueProps = [
  {
    l1: "Design once,",
    l2: "reuse everywhere",
    desc: "Build and govern a shared clinical form library for all departments.",
    dots: 1,
  },
  {
    l1: "Modernize",
    l2: "clinical workflows",
    desc: "Replace paper, PDFs, and siloed tools with integrated digital forms.",
    dots: 2,
  },
  {
    l1: "Capture standardized,",
    l2: "interoperable data",
    desc: "Generate actionable data natively in FHIR for analytics and compliance.",
    dots: 3,
  },
  {
    l1: "Improve quality",
    l2: "without IT bottlenecks",
    desc: "Enable clinical teams to update forms and workflows with no-code tools.",
    dots: 4,
  },
];

function ValuePropsSection(): string {
  return (
    <section class="bg-[#f0f5fa] py-16">
      <div class="mx-auto max-w-7xl px-6 lg:px-8">
        <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          {valueProps.map(
            (p) => `
            <div>
              <div class="mb-4">${DotsIcon(p.dots)}</div>
              <h3 class="text-sm font-bold text-gray-900 mb-2">${p.l1}<br/>${p.l2}</h3>
              <p class="text-sm text-gray-500 leading-relaxed">${p.desc}</p>
            </div>`,
          )}
        </div>
      </div>
    </section>
  );
}

// ---------------------------------------------------------------------------
// Built For section — bento cards + expandable detail (Datastar)
// ---------------------------------------------------------------------------

// SVG illustrations for each card (compact versions of originals)
const svgs = {
  hospitals: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 280 220" fill="none" class="w-full h-full"><rect x="70" y="30" width="140" height="120" rx="8" fill="#fff" stroke="#e4e6ea" stroke-width="2"/><rect x="90" y="55" width="100" height="8" rx="4" fill="#e4e6ea"/><rect x="90" y="72" width="70" height="8" rx="4" fill="#e4e6ea"/><rect x="90" y="89" width="85" height="8" rx="4" fill="#e4e6ea"/><rect x="90" y="106" width="60" height="8" rx="4" fill="#e4e6ea"/><rect x="90" y="123" width="75" height="8" rx="4" fill="#e4e6ea"/><path d="M140 18L140 30" stroke="#ea4a35" stroke-width="3" stroke-linecap="round"/><path d="M134 24L146 24" stroke="#ea4a35" stroke-width="3" stroke-linecap="round"/><rect x="30" y="90" width="40" height="70" rx="6" fill="#fff" stroke="#e4e6ea" stroke-width="2"/><rect x="38" y="100" width="24" height="4" rx="2" fill="#e4e6ea"/><rect x="38" y="110" width="18" height="4" rx="2" fill="#e4e6ea"/><rect x="38" y="120" width="20" height="4" rx="2" fill="#e4e6ea"/><rect x="210" y="90" width="40" height="70" rx="6" fill="#fff" stroke="#e4e6ea" stroke-width="2"/><rect x="218" y="100" width="24" height="4" rx="2" fill="#e4e6ea"/><rect x="218" y="110" width="18" height="4" rx="2" fill="#e4e6ea"/><rect x="218" y="120" width="20" height="4" rx="2" fill="#e4e6ea"/><path d="M70 160L30 160" stroke="#ea4a35" stroke-width="1.5" stroke-dasharray="4 3" opacity="0.5"/><path d="M210 160L250 160" stroke="#ea4a35" stroke-width="1.5" stroke-dasharray="4 3" opacity="0.5"/></svg>`,

  ehr: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 280 220" fill="none" class="w-full h-full"><rect x="20" y="25" width="110" height="80" rx="8" fill="#fff" stroke="#e4e6ea" stroke-width="2"/><rect x="30" y="38" width="50" height="6" rx="3" fill="#353b50" opacity="0.7"/><rect x="30" y="50" width="80" height="5" rx="2.5" fill="#e4e6ea"/><rect x="30" y="60" width="65" height="5" rx="2.5" fill="#e4e6ea"/><rect x="30" y="70" width="70" height="5" rx="2.5" fill="#e4e6ea"/><rect x="30" y="84" width="40" height="12" rx="6" fill="#ea4a35"/><rect x="150" y="25" width="110" height="80" rx="8" fill="#fff" stroke="#e4e6ea" stroke-width="2"/><rect x="160" y="38" width="50" height="6" rx="3" fill="#353b50" opacity="0.7"/><rect x="160" y="50" width="80" height="5" rx="2.5" fill="#e4e6ea"/><rect x="160" y="60" width="65" height="5" rx="2.5" fill="#e4e6ea"/><rect x="160" y="70" width="70" height="5" rx="2.5" fill="#e4e6ea"/><rect x="160" y="84" width="40" height="12" rx="6" fill="#ea4a35"/><rect x="55" y="120" width="170" height="75" rx="8" fill="#fff" stroke="#ea4a35" stroke-width="2" stroke-dasharray="6 4"/><rect x="75" y="135" width="40" height="5" rx="2.5" fill="#353b50" opacity="0.5"/><rect x="75" y="146" width="120" height="5" rx="2.5" fill="#e4e6ea"/><rect x="75" y="157" width="100" height="5" rx="2.5" fill="#e4e6ea"/><rect x="75" y="168" width="60" height="12" rx="6" fill="#ea4a35" opacity="0.8"/><path d="M75 130L82 130L82 137" stroke="#ea4a35" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg>`,

  research: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 280 220" fill="none" class="w-full h-full"><rect x="60" y="20" width="160" height="110" rx="8" fill="#fff" stroke="#e4e6ea" stroke-width="2"/><rect x="80" y="40" width="120" height="6" rx="3" fill="#353b50" opacity="0.15"/><rect x="80" y="55" width="50" height="30" rx="4" fill="#ea4a35" opacity="0.1" stroke="#ea4a35" stroke-width="1.5"/><rect x="140" y="55" width="50" height="30" rx="4" fill="#e4e6ea" opacity="0.5"/><rect x="80" y="95" width="110" height="5" rx="2.5" fill="#e4e6ea"/><rect x="80" y="106" width="80" height="5" rx="2.5" fill="#e4e6ea"/><circle cx="95" cy="70" r="6" fill="#ea4a35" opacity="0.3"/><path d="M92 70L95 73L100 67" stroke="#ea4a35" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/><rect x="30" y="145" width="65" height="55" rx="6" fill="#fff" stroke="#e4e6ea" stroke-width="2"/><rect x="40" y="155" width="30" height="5" rx="2.5" fill="#353b50" opacity="0.4"/><rect x="40" y="165" width="45" height="4" rx="2" fill="#e4e6ea"/><rect x="40" y="174" width="35" height="4" rx="2" fill="#e4e6ea"/><rect x="110" y="145" width="65" height="55" rx="6" fill="#fff" stroke="#e4e6ea" stroke-width="2"/><rect x="120" y="155" width="30" height="5" rx="2.5" fill="#353b50" opacity="0.4"/><rect x="120" y="165" width="45" height="4" rx="2" fill="#e4e6ea"/><rect x="120" y="174" width="35" height="4" rx="2" fill="#e4e6ea"/><rect x="190" y="145" width="65" height="55" rx="6" fill="#fff" stroke="#e4e6ea" stroke-width="2"/><rect x="200" y="155" width="30" height="5" rx="2.5" fill="#353b50" opacity="0.4"/><rect x="200" y="165" width="45" height="4" rx="2" fill="#e4e6ea"/><rect x="200" y="174" width="35" height="4" rx="2" fill="#e4e6ea"/><path d="M62 145L90 130" stroke="#ea4a35" stroke-width="1.5" stroke-dasharray="4 3" opacity="0.4"/><path d="M140 145L140 130" stroke="#ea4a35" stroke-width="1.5" stroke-dasharray="4 3" opacity="0.4"/><path d="M222 145L190 130" stroke="#ea4a35" stroke-width="1.5" stroke-dasharray="4 3" opacity="0.4"/></svg>`,

  labs: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 280 220" fill="none" class="w-full h-full"><rect x="70" y="15" width="140" height="100" rx="8" fill="#fff" stroke="#e4e6ea" stroke-width="2"/><circle cx="140" cy="50" r="18" fill="#ea4a35" opacity="0.1" stroke="#ea4a35" stroke-width="1.5"/><path d="M133 50L140 50L140 43" stroke="#ea4a35" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/><rect x="100" y="78" width="80" height="6" rx="3" fill="#e4e6ea"/><rect x="110" y="90" width="60" height="6" rx="3" fill="#e4e6ea"/><rect x="15" y="130" width="75" height="75" rx="8" fill="#fff" stroke="#e4e6ea" stroke-width="2"/><rect x="25" y="142" width="40" height="5" rx="2.5" fill="#353b50" opacity="0.4"/><rect x="25" y="153" width="55" height="4" rx="2" fill="#e4e6ea"/><rect x="25" y="163" width="45" height="4" rx="2" fill="#e4e6ea"/><rect x="25" y="186" width="30" height="10" rx="5" fill="#ea4a35" opacity="0.8"/><path d="M52 130L100 115" stroke="#ea4a35" stroke-width="1.5" stroke-dasharray="4 3" opacity="0.4"/><rect x="190" y="130" width="75" height="75" rx="8" fill="#fff" stroke="#e4e6ea" stroke-width="2"/><circle cx="227" cy="155" r="15" fill="#ea4a35" opacity="0.08"/><path d="M221 155L230 155M225 151L225 159" stroke="#ea4a35" stroke-width="1.5" stroke-linecap="round" opacity="0.5"/><rect x="200" y="178" width="55" height="4" rx="2" fill="#e4e6ea"/><rect x="200" y="188" width="40" height="4" rx="2" fill="#e4e6ea"/><path d="M227 130L180 115" stroke="#ea4a35" stroke-width="1.5" stroke-dasharray="4 3" opacity="0.4"/><rect x="102" y="130" width="75" height="75" rx="8" fill="#fff" stroke="#ea4a35" stroke-width="1.5"/><rect x="112" y="142" width="40" height="5" rx="2.5" fill="#ea4a35" opacity="0.4"/><rect x="112" y="153" width="55" height="4" rx="2" fill="#e4e6ea"/><rect x="112" y="163" width="45" height="4" rx="2" fill="#e4e6ea"/><rect x="112" y="186" width="30" height="10" rx="5" fill="#ea4a35"/></svg>`,
};

type UseCase = {
  id: string;
  title: string;
  oneLiner: string;
  svg: string;
  boldIntro: string;
  body: string;
  helpsLine: string;
  items: string[];
  keyValue: string;
};

const useCases: UseCase[] = [
  {
    id: "hospitals",
    title: "Hospitals & Clinics",
    oneLiner: "Bring order to hundreds of hospital forms",
    svg: svgs.hospitals,
    boldIntro: "Bring order to hundreds of hospital forms",
    body: "Hospitals manage hundreds of paper, PDF, and digital forms that vary across departments and are hard to maintain. Updates are slow, data is fragmented, and patients are often asked to re-enter the same information.",
    helpsLine: "Formbox helps hospitals:",
    items: [
      "Replace paper and PDF forms",
      "Standardize forms across departments",
      "Reuse structured FHIR data",
      "Update forms without IT delays",
    ],
    keyValue: "consistency, quality of care, and operational efficiency",
  },
  {
    id: "ehr",
    title: "EHR / PHR Vendors",
    oneLiner:
      "Add a full forms system to your platform — without building one",
    svg: svgs.ehr,
    boldIntro:
      "Add a full forms system to your platform — without building one",
    body: "Healthcare IT vendors need powerful, flexible forms, but building and maintaining a forms system in-house creates long-term technical debt and slows product roadmaps.",
    helpsLine: "Formbox helps vendors:",
    items: [
      "Avoid building and maintaining forms from scratch",
      "Embed forms that look and feel native to their applications",
      "Give clinicians and admins tools to create and update forms",
      "Capture FHIR-native structured data without custom mapping",
      "Reuse and version forms across customers and tenants",
      "Support real clinical workflows, not just data entry",
    ],
    keyValue:
      "faster time to market, lower engineering cost, and easier enterprise adoption",
  },
  {
    id: "research",
    title: "Clinical Research",
    oneLiner: "Capture structured research data you can trust",
    svg: svgs.research,
    boldIntro: "Capture structured research data you can trust",
    body: "Clinical research teams rely on validated questionnaires and precise data collection, but studies often suffer from inconsistent forms, manual processes, and data that's hard to standardize or reuse across sites.",
    helpsLine: "Formbox helps research teams:",
    items: [
      "Use standardized, validated questionnaires across studies",
      "Capture FHIR-native structured data ready for analysis and exchange",
      "Reuse and version forms across protocols and sites",
      "Reduce manual handling and data transformation errors",
      "Support multilingual and multi-site data collection",
    ],
    keyValue: "data quality, reproducibility, and interoperability",
  },
  {
    id: "labs",
    title: "Labs & Telehealth",
    oneLiner: "Streamline digital onboarding and follow-ups",
    svg: svgs.labs,
    boldIntro: "Streamline digital onboarding and follow-ups",
    body: "Labs and telehealth providers depend on smooth pre- and post-visit workflows, but paper forms, PDFs, and disconnected tools slow patients down and create operational friction.",
    helpsLine: "Formbox helps labs and telehealth teams:",
    items: [
      "Collect patient information digitally before or after visits",
      "Automate form delivery and follow-ups as part of workflows",
      "Reduce repeated data entry for patients",
      "Capture structured FHIR data ready for downstream systems",
      "Embed forms seamlessly into remote care experiences",
    ],
    keyValue:
      "faster workflows, better patient experience, and higher completion rates",
  },
];

function BuiltForSection(): string {
  const defaultId = useCases[0]!.id;
  return (
    <section
      class="py-20"
      data-signals={`{builtFor: '${defaultId}'}`}
    >
      <div class="mx-auto max-w-7xl px-6 lg:px-8">
        <h2 class="text-[2.25rem] font-bold text-gray-900 mb-12 text-center">
          Built for healthcare platforms and providers
        </h2>

        {/* Bento cards row */}
        <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {useCases.map(
            (uc) => `
            <div
              data-on:click="$builtFor = '${uc.id}'"
              data-class="{'ring-2 ring-primary shadow-md': $builtFor == '${uc.id}'}"
              class="cursor-pointer rounded-xl overflow-hidden bg-[#f7f8fa] transition-all duration-200 hover:shadow-md"
            >
              <div class="p-4 flex items-center justify-center h-36">
                ${uc.svg}
              </div>
              <div class="px-5 pb-5">
                <h3 class="text-base font-bold text-gray-900 mb-1">${uc.title}</h3>
                <p class="text-sm text-gray-500 leading-relaxed">${uc.oneLiner}</p>
              </div>
            </div>`,
          )}
        </div>

        {/* Detail panels — styled like "How Formbox fits into your stack" */}
        <div class="mt-8 rounded-xl bg-[#f7f8fa] p-8 lg:p-12">
          {useCases
            .map(
              (uc, i) => `
            <div data-show="$builtFor == '${uc.id}'" ${i > 0 ? 'style="display:none"' : ""}>
              <div style="max-width:720px">
                <p class="text-base leading-relaxed mb-3" style="color:rgba(0,0,0,0.65)">${uc.body}</p>
                <p class="text-base leading-relaxed mb-2" style="color:rgba(0,0,0,0.65)">${uc.helpsLine}</p>
                <ul style="list-style-type:disc;padding-left:1.5rem;margin:0 0 1rem 0">
                  ${uc.items.map((item) => `<li style="color:rgba(0,0,0,0.65);font-size:1rem;line-height:1.6">${item}</li>`).join("")}
                </ul>
                <p class="text-base leading-relaxed" style="color:rgba(0,0,0,0.65)"><strong>Key value:</strong> ${uc.keyValue}.</p>
              </div>
            </div>`,
            )
            .join("")}
        </div>
      </div>
    </section>
  );
}

// ---------------------------------------------------------------------------
// Webflow scripts (tabs + read-more)
// ---------------------------------------------------------------------------
const tabSwitchScript = `
<script>
document.addEventListener('DOMContentLoaded', function() {
  document.querySelectorAll('.w-tab-link').forEach(function(link) {
    link.addEventListener('click', function(e) {
      e.preventDefault();
      var tabId = this.getAttribute('data-w-tab');
      var tabsContainer = this.closest('.w-tabs');
      if (!tabsContainer) return;
      tabsContainer.querySelectorAll('.w-tab-link').forEach(function(l) {
        l.classList.remove('w--current');
      });
      this.classList.add('w--current');
      tabsContainer.querySelectorAll('.w-tab-pane').forEach(function(pane) {
        pane.classList.remove('w--tab-active');
      });
      var targetPane = tabsContainer.querySelector('.w-tab-pane[data-w-tab="' + tabId + '"]');
      if (targetPane) targetPane.classList.add('w--tab-active');
    });
  });
});
</script>`;

const readMoreScript = `
<script>
document.addEventListener('DOMContentLoaded', function() {
  document.querySelectorAll('.button-ico').forEach(function(btn) {
    btn.addEventListener('click', function(e) {
      e.preventDefault();
      var hideContent = this.closest('.hide-content') || this.parentElement.querySelector('.hide-content');
      if (!hideContent) {
        var parent = this.closest('[class*="col"]') || this.parentElement;
        hideContent = parent.querySelector('.hide-content');
      }
      var readBtn = this.querySelector('.read');
      var lessBtn = this.querySelector('.less');
      if (hideContent) {
        var isOpen = hideContent.style.height !== '0px' && hideContent.style.height !== '';
        if (isOpen) { hideContent.style.height = '0px'; hideContent.style.overflow = 'hidden'; }
        else { hideContent.style.height = 'auto'; hideContent.style.overflow = 'visible'; }
      }
      if (readBtn && lessBtn) {
        var readVisible = readBtn.style.display !== 'none';
        readBtn.style.display = readVisible ? 'none' : 'block';
        lessBtn.style.display = readVisible ? 'block' : 'none';
      }
    });
  });
});
</script>`;

// Swiper carousel for "What you can build with Formbox" section
const swiperScript = `
<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/swiper@11/swiper-bundle.min.css" />
<style>
  /* Override the 3-col grid inside slider so swiper is full-width */
  .slider-main_component ._3-col-grid.margin-top-32 {
    display: flex !important;
    flex-direction: column !important;
    grid-template-columns: none !important;
  }
  .swiper.apperance-slider {
    overflow: hidden !important;
    width: 100% !important;
  }
  .swiper-slide.apperance-slider {
    width: 100% !important;
    flex-shrink: 0;
  }
  /* Slide inner grid: image left, text right */
  .swiper-slide.apperance-slider ._3-col-grid.sliders {
    display: grid !important;
    grid-template-columns: 2fr 1fr !important;
    gap: 2.5rem !important;
    align-items: start;
  }
  /* Don't crop the slide image — show entire screenshot */
  .capabilities__section .slide-video-wrp {
    overflow: visible !important;
    height: auto !important;
  }
  .capabilities__section .slide-video-wrp .img-100 {
    object-fit: contain !important;
    height: auto !important;
    border-radius: 0.5rem;
  }
  .capabilities__section .slide-video-wrp .video-bg {
    border-radius: 0.5rem;
    overflow: hidden;
  }
  /* Navigation arrows: below the slide content, centered */
  .slider-main_component .slider-control-arrows {
    display: flex !important;
    justify-content: center;
    gap: 1rem;
    margin-top: 1.5rem;
    position: static !important;
  }
  .slider-main_component .slider-control-arrows svg {
    width: 48px;
    height: 48px;
    cursor: pointer;
    opacity: 0.7;
    transition: opacity 0.2s;
  }
  .slider-main_component .slider-control-arrows svg:hover {
    opacity: 1;
  }
  /* Pagination bullets */
  .slider-main_component .swiper-bullet-wrapper {
    display: flex !important;
    gap: 8px;
    justify-content: center;
    margin-top: 1.5rem;
    position: static !important;
  }
  .slider-main_component .swiper-bullet {
    width: 10px;
    height: 10px;
    border-radius: 50%;
    background: #ccc;
    border: none;
    padding: 0;
    cursor: pointer;
    transition: background 0.2s;
  }
  .slider-main_component .swiper-bullet.is-active {
    background: #c9362b;
  }
</style>
<script src="https://cdn.jsdelivr.net/npm/swiper@11/swiper-bundle.min.js"></script>
<script>
(function initSwipers() {
  if (typeof Swiper === 'undefined') {
    setTimeout(initSwipers, 100);
    return;
  }

  // Populate slide content (Webflow export has empty richtext areas)
  var slideData = [
    { title: 'Smart Dynamic Forms', desc: 'Design forms that reduce cognitive load by displaying only the fields that require attention. Fields appear as needed, based on user input and set conditions.' },
    { title: 'Multi-Page Forms or Forms with Navigation Tab', desc: 'Easily organize large forms, like the Adult Assessment Form, into multi-page layouts or add a navigation tab for smooth navigation. This feature allows users to enter information step-by-step or quickly switch between sections, reducing overwhelm and enhancing usability.' },
    { title: 'Enhanced Forms with Annotation Pad &amp; Speech-to-Text', desc: 'Add advanced input options to your forms. The Annotation Pad lets clinicians mark images, like indicating wound locations, while Speech-to-Text enables quick, hands-free data entry. These features streamline data collection, improving accuracy and efficiency.' },
    { title: 'Forms with Personalized Styling', desc: 'Customize forms with pre-designed themes or create unique styles by adjusting fonts, color schemes, and branding elements. Apply the same theme across multiple forms or use different themes for each client without duplicating forms.' },
    { title: 'Multilingual Forms', desc: 'Create multilingual forms to serve users in different languages effortlessly, with the help of AI-assisted translations. This feature makes localization easy and efficient, enabling a seamless experience for users across multiple languages.' }
  ];

  var capSection = document.querySelector('.capabilities__section');
  if (capSection) {
    var slides = capSection.querySelectorAll('.slider__content.top-margin-content');
    slides.forEach(function(slide, i) {
      if (!slideData[i]) return;
      var d = slideData[i];
      // Add title if missing
      var h3 = slide.querySelector('.h3-style-26');
      if (!h3) {
        h3 = document.createElement('p');
        h3.className = 'h3-style-26 special__text';
        slide.insertBefore(h3, slide.firstChild);
      }
      h3.textContent = d.title;
      // Add description
      var rt = slide.querySelector('.w-richtext');
      if (rt) {
        rt.innerHTML = '<p>' + d.desc + '</p>';
      }
    });
  }

  document.querySelectorAll('.slider-main_component').forEach(function(component) {
    var swiperEl = component.querySelector('.swiper');
    if (!swiperEl || swiperEl.swiper) return;
    new Swiper(swiperEl, {
      speed: 500,
      loop: true,
      loopedSlides: 4,
      autoHeight: true,
      slidesPerView: 1,
      spaceBetween: 32,
      rewind: false,
      mousewheel: { forceToAxis: true },
      keyboard: { enabled: true, onlyInViewport: true },
      pagination: {
        el: component.querySelector('.swiper-bullet-wrapper'),
        bulletActiveClass: 'is-active',
        bulletClass: 'swiper-bullet',
        bulletElement: 'button',
        clickable: true
      },
      navigation: {
        nextEl: component.querySelector('.swiper-next'),
        prevEl: component.querySelector('.swiper-prev'),
        disabledClass: 'is-disabled'
      },
      slideActiveClass: 'is-active',
      slideDuplicateActiveClass: 'is-active'
    });
  });
})();
</script>`;

// ---------------------------------------------------------------------------
// Aidbox Integration Section
// ---------------------------------------------------------------------------
function FhirIntegrationSection(): string {
  return (
    <section style="padding:4rem 0;background:#f7f8fa">
      <div style="max-width:1200px;margin:0 auto;padding:0 2rem">
        <p className="h2-style-42" style="text-align:center;margin-bottom:2rem;font-size:2.625rem;font-weight:600;color:#353b50;line-height:1.2">
          Seamless integration with Aidbox FHIR Server
        </p>
        <div style="max-width:720px;margin:0 auto">
          <p style="color:rgba(0,0,0,0.65);font-size:1.05rem;line-height:1.7;margin-bottom:1.25rem">
            Formbox is a standalone solution for managing healthcare forms and responses.
            When advanced data reuse and analytics are needed, it integrates seamlessly
            with the Aidbox FHIR Server.
          </p>
          <p style="color:rgba(0,0,0,0.85);font-size:1.05rem;line-height:1.7;margin-bottom:0.75rem">
            With Formbox + Aidbox, you can:
          </p>
          <ul style="list-style-type:disc;padding-left:1.5rem;margin:0">
            <li style="color:rgba(0,0,0,0.65);font-size:1.05rem;line-height:1.7">Pre-fill forms with data from the FHIR server</li>
            <li style="color:rgba(0,0,0,0.65);font-size:1.05rem;line-height:1.7">Extract form responses into other FHIR resources</li>
            <li style="color:rgba(0,0,0,0.65);font-size:1.05rem;line-height:1.7">Run advanced analytics on collected and extracted data</li>
            <li style="color:rgba(0,0,0,0.65);font-size:1.05rem;line-height:1.7">Query data using FHIR APIs, SQL-on-FHIR, or GraphQL</li>
            <li style="color:rgba(0,0,0,0.65);font-size:1.05rem;line-height:1.7">Build end-to-end Structured Data Capture (SDC) workflows</li>
          </ul>
        </div>
      </div>
    </section>
  );
}

// ---------------------------------------------------------------------------
// Resources / Knowledge Base
// ---------------------------------------------------------------------------
function ResourcesSection(): string {
  const resources = [
    {
      title: "Video Tutorials",
      desc: "Step-by-step video guides on Formbox features, form design, and workflow setup.",
      href: "#",
      icon: `<svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg"><rect x="4" y="8" width="40" height="28" rx="4" stroke="#EA4A35" stroke-width="1.5" fill="none"/><path d="M20 17l12 7-12 7V17z" fill="#EA4A35" opacity="0.8"/><path d="M16 42h16" stroke="#353b50" stroke-width="1.5" stroke-linecap="round"/><path d="M24 36v6" stroke="#353b50" stroke-width="1.5" stroke-linecap="round"/></svg>`,
    },
    {
      title: "Articles",
      desc: "In-depth articles on healthcare form design, FHIR data capture, and best practices.",
      href: "#",
      icon: `<svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg"><rect x="8" y="4" width="32" height="40" rx="3" stroke="#353b50" stroke-width="1.5" fill="none"/><path d="M16 14h16" stroke="#EA4A35" stroke-width="1.5" stroke-linecap="round"/><path d="M16 22h16" stroke="#353b50" stroke-width="1.5" stroke-linecap="round" opacity="0.5"/><path d="M16 30h12" stroke="#353b50" stroke-width="1.5" stroke-linecap="round" opacity="0.5"/><path d="M16 38h8" stroke="#353b50" stroke-width="1.5" stroke-linecap="round" opacity="0.3"/></svg>`,
    },
    {
      title: "Documentation",
      desc: "Technical docs, API references, and integration guides for developers and admins.",
      href: "#",
      icon: `<svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M8 6h14l2 2h16a2 2 0 012 2v30a2 2 0 01-2 2H8a2 2 0 01-2-2V8a2 2 0 012-2z" stroke="#353b50" stroke-width="1.5" fill="none"/><path d="M16 22h16" stroke="#EA4A35" stroke-width="1.5" stroke-linecap="round"/><path d="M16 28h12" stroke="#EA4A35" stroke-width="1.5" stroke-linecap="round" opacity="0.6"/><path d="M16 34h8" stroke="#EA4A35" stroke-width="1.5" stroke-linecap="round" opacity="0.3"/></svg>`,
    },
  ];

  return (
    <section style="padding:4rem 0">
      <div style="max-width:1200px;margin:0 auto;padding:0 2rem">
        <p className="h2-style-42" style="text-align:center;margin-bottom:0.75rem;font-size:2.625rem;font-weight:600;color:#353b50;line-height:1.2">
          Learning Resources
        </p>
        <p style="text-align:center;max-width:600px;margin:0 auto 2.5rem;color:rgba(0,0,0,0.65);font-size:1.05rem;line-height:1.6">
          Everything you need to get started and make the most of Formbox.
        </p>
        <div style="display:grid;grid-template-columns:repeat(3,1fr);gap:1.5rem">
          {resources.map(
            (r) => `
            <a href="${r.href}" style="display:flex;flex-direction:column;align-items:center;text-align:center;padding:2.5rem 2rem;border-radius:0.75rem;background:#f7f8fa;text-decoration:none;transition:box-shadow 0.2s,transform 0.2s" onmouseover="this.style.boxShadow='0 4px 24px rgba(0,0,0,0.08)';this.style.transform='translateY(-2px)'" onmouseout="this.style.boxShadow='none';this.style.transform='none'">
              <div style="margin-bottom:1.25rem">${r.icon}</div>
              <div style="font-size:1.25rem;font-weight:600;color:#353b50;margin-bottom:0.5rem">${r.title}</div>
              <p style="font-size:0.95rem;line-height:1.6;color:rgba(0,0,0,0.55);margin:0">${r.desc}</p>
            </a>`,
          )}
        </div>
      </div>
    </section>
  );
}

// ---------------------------------------------------------------------------
// Pricing data (unique to medical-form page — will be customized later)
// ---------------------------------------------------------------------------
const formboxPricingTiers: PricingTier[] = [
  {
    id: "formbuilder",
    name: "Formbuilder",
    description:
      "Access to the Form Builder. Create and test healthcare forms. Preview form behavior and logic.",
    priceMonthly: "$0",
    priceAnnually: "$0",
    href: "https://form-builder.aidbox.app/",
    icon: "/assets/aidbox/pricing/dev.svg",
    cta: "Try now",
    features: [],
  },
  {
    id: "core",
    name: "Formbox Core",
    description:
      "Design, manage, run, and store healthcare forms and responses. No-code Form Builder and customizable Renderer. Form Library, workflow automation, and flexible deployment.",
    priceMonthly: "$1,900",
    priceAnnually: "$19,000",
    href: "#contact-form",
    icon: "/assets/aidbox/pricing/core.svg",
    cta: "Contact Us",
    featured: true,
    features: [],
  },
  {
    id: "dev",
    name: "Formbox Dev",
    description:
      "Free for prototyping, testing and development. Not for use with Protected Health Information (PHI).",
    priceMonthly: "$0",
    priceAnnually: "$0",
    href: "https://form-builder.aidbox.app/",
    icon: "/assets/aidbox/pricing/dev.svg",
    cta: "Try now",
    features: [],
  },
];

const formboxSupportPlans = [
  {
    name: "Basic",
    price: "Free",
    features: [
      "Onboarding call",
      "Private chat with Health Samurai",
      "Bug fixing and Q&A",
      "Blocking issue resolution up to 1 day",
      "Response time up to 3 business days",
    ],
  },
  {
    name: "Professional",
    price: "$25,000",
    priceAnnual: "/year",
    recommended: true,
    features: [
      "Everything in Basic, plus:",
      "Complex Aidbox and FHIR guidance",
      "BAA & insurance",
      "Up to 12 video calls",
      "Blocking issue resolution up to 8 hours",
      "Response time up to 2 business days",
    ],
  },
  {
    name: "Enterprise",
    price: "Contact us",
    features: [
      "Everything in Professional, plus:",
      "24/7 support & phone number",
      "Weekly technical & architecture reviews",
      "New Formbox features prioritization",
      "Blocking issue resolution up to 4 hours",
      "Response time up to 1 business day",
    ],
  },
];

// ---------------------------------------------------------------------------
// Page
// ---------------------------------------------------------------------------
export default async function MedicalFormPage(): Promise<string> {
  const { trustedHtml, restHtml } = await getPageParts();
  return (
    <Fragment>
      <Hero
        productName={{ prefix: "FORM", suffix: "BOX" }}
        title="The Form Management Platform for Healthcare"
        description="Design, manage, and run digital healthcare forms with built-in FHIR data capture and insights across the entire form lifecycle."
        primaryCta={{
          label: "TRY FORMS FOR FREE",
          href: "https://form-builder.aidbox.app/",
        }}
        secondaryCta={{
          label: "Book a demo",
          href: "#contact-form",
        }}
        video={{
          src: "https://cdn.prod.website-files.com/57441aa5da71fdf07a0a2e19%2F67641eed45335704ef37e683_No-Code%20Form%20Builder%EF%BC%9A%20Easy%2C%20Ready%20Templates%2C%20PDF%20to%20Digital-transcode.mp4",
        }}
      />
      {ValuePropsSection()}
      <div dangerouslySetInnerHTML={{ __html: trustedHtml }} />
      {BuiltForSection()}
      <div
        dangerouslySetInnerHTML={{
          __html: restHtml + tabSwitchScript + readMoreScript + swiperScript,
        }}
      />
      {FhirIntegrationSection()}
      <Pricing
        title="Pricing"
        subtitle="Flat pricing with no hidden fees."
        tiers={formboxPricingTiers}
      />
      <SupportPlans plans={formboxSupportPlans} ctaText="Book a demo" ctaHref="#contact-form" />
      {ResourcesSection()}
      <div id="contact-form">
        <ContactForm
          title="Questions about Formbox?"
          description="Let us know how we can help you get started with healthcare forms."
          page="/medical-form"
        />
      </div>
    </Fragment>
  );
}
