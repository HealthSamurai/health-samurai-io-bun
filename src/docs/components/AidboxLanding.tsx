/**
 * Aidbox Documentation Landing Page
 *
 * Replaces the standard markdown index page at /docs/aidbox/ root.
 * Returns only the main content area -- the docs layout (header, left nav,
 * right TOC) is handled by the caller.
 *
 * Sections:
 *  1. Hero  -- gray background, terminal prompt, "Getting Started" card
 *  2. Bento grid -- "Main concepts" (8 cards, 4-column grid)
 *  3. Modules -- 3 cards (MPI, ePrescription, Forms)
 *  4. See also -- 4 cards (Features, Architecture, Licensing, Release Notes)
 *  5. Zulip community CTA
 */

import {
  ICON_FHIR_DATABASE,
  ICON_API,
  ICON_AR,
  ICON_ACCESS_CONTROL,
  ICON_TERMINOLOGY,
  ICON_DEVELOPER_EXPERIENCE,
  ICON_UI,
} from "./bento-icons";

// ---------------------------------------------------------------------------
// Prefix helper -- keeps links DRY
// ---------------------------------------------------------------------------
const P = "/docs/aidbox";
function href(path: string): string {
  return `${P}${path}`;
}

// ---------------------------------------------------------------------------
// Shared card styles (matches Clojure source)
// ---------------------------------------------------------------------------
const CARD_BASE =
  "block rounded-lg bg-gradient-to-b from-surface to-surface-alt border border-outline transition-all duration-300";
const CARD_HOVER =
  "hover:bg-surface hover:bg-none hover:border-outline-hover";
const CARD_CLICKABLE = `${CARD_BASE} ${CARD_HOVER} cursor-pointer`;

// Card onclick JS -- supports Ctrl/Cmd+click for new tab
const cardOnClick =
  "if(!event.target.closest('a')){if(event.ctrlKey||event.metaKey){window.open(this.dataset.href,'_blank')}else{window.location.href=this.dataset.href}}";

function escapeAttr(s: string): string {
  return s
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;");
}

// ---------------------------------------------------------------------------
// Tag component (matches gitbok.ui.tags/render-tag)
// ---------------------------------------------------------------------------
function tag(text: string, tagHref?: string): string {
  const base =
    "inline-flex items-center px-2 py-0.5 h-[25px] rounded text-[13px] font-normal transition-colors bg-tag-bg text-on-surface-secondary hover:bg-outline-hover hover:text-on-surface-placeholder";
  if (tagHref) {
    return `<a href="${escapeAttr(tagHref)}" class="${base} no-underline">${escapeAttr(text)}</a>`;
  }
  return `<span class="${base}">${escapeAttr(text)}</span>`;
}

function tags(items: Array<{ text: string; href?: string }>): string {
  return `<div class="flex flex-wrap gap-2">${items.map((t) => tag(t.text, t.href)).join("")}</div>`;
}

// ---------------------------------------------------------------------------
// SDK icon button (Getting Started card)
// ---------------------------------------------------------------------------
function sdkIcon(
  imgSrc: string,
  alt: string,
  linkHref: string,
  tooltip: string
): string {
  return `<a class="p-3 rounded-lg bg-gradient-to-b from-surface to-surface-alt border border-outline transition-colors duration-300 relative group"
     href="${escapeAttr(linkHref)}">
    <img src="${escapeAttr(imgSrc)}" alt="${escapeAttr(alt)}" class="w-8 h-8" />
    <span class="absolute -top-10 left-1/2 -translate-x-1/2 px-2 py-1 bg-gray-900 text-white text-xs rounded whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity duration-150 pointer-events-none z-50">${escapeAttr(tooltip)}</span>
  </a>`;
}

// ---------------------------------------------------------------------------
// Getting Started Card
// ---------------------------------------------------------------------------
function gettingStartedCard(): string {
  const copyJS = `const btn=this;const o=btn.textContent;btn.textContent='COPIED';navigator.clipboard.writeText('curl -JO https://aidbox.app/runme && docker compose up');setTimeout(()=>{btn.textContent=o},2000);`;

  return `
  <div class="bg-gradient-to-b from-surface to-surface-alt border border-outline relative rounded-lg p-6 shadow-[0px_6px_13px_0px_#00000008,0px_24px_24px_0px_#00000005,0px_54px_32px_0px_#00000003]">
    <div class="flex flex-col gap-6">
      <!-- Heading -->
      <div class="flex flex-col">
        <h2 class="text-xl leading-8 m-0 text-on-surface-strong font-medium">Get your Aidbox up and running</h2>
        <p class="text-on-surface-secondary text-sm leading-[22.75px] m-0 mt-0.5 font-normal">Get started in just a few minutes.</p>
      </div>

      <!-- One-liner command -->
      <div class="bg-black rounded-lg px-[17px] py-[9px] h-[42px] flex items-center justify-between gap-4">
        <div class="font-code font-normal text-sm leading-[22.75px] tracking-[-0.02em] flex-1 min-w-0 overflow-hidden text-ellipsis whitespace-nowrap">
          <span class="text-gray-300 select-none">$ </span>
          <span class="text-white">curl -JO https://aidbox.app/runme &amp;&amp; docker compose up</span>
        </div>
        <button class="bg-brand text-white px-2.5 py-0.5 rounded text-xs font-medium shadow-[inset_0px_-2px_1.4px_0px_#00000026] hover:bg-brand-hover transition-colors whitespace-nowrap cursor-pointer"
                id="copy-button"
                onclick="${escapeAttr(copyJS)}">COPY</button>
      </div>

      <!-- SDK icons -->
      <div class="flex flex-wrap gap-3 sm:flex-nowrap">
        ${sdkIcon("/docs/aidbox/assets/docker-mark-blue.svg", "Run locally", href("/getting-started/run-aidbox-locally"), "Run Aidbox locally with Docker")}
        ${sdkIcon("/docs/aidbox/assets/cloud.svg", "Run in Sandbox", href("/getting-started/run-aidbox-in-sandbox"), "Try Aidbox in Sandbox")}
        ${sdkIcon("/docs/aidbox/assets/typescript.svg", "TypeScript", href("/getting-started/typescript"), "TypeScript SDK Tutorial")}
        ${sdkIcon("/docs/aidbox/assets/java.svg", "Java", href("/getting-started/java"), "Java SDK Tutorial")}
        ${sdkIcon("/docs/aidbox/assets/python.svg", "Python", href("/getting-started/python"), "Python SDK Tutorial")}
        ${sdkIcon("/docs/aidbox/assets/csharp.svg", "C#", href("/getting-started/csharp"), "C# SDK Tutorial")}
        ${sdkIcon("/docs/aidbox/assets/mcp.png", "MCP", href("/modules/other-modules/mcp"), "Model Context Protocol (MCP)")}
      </div>

      <!-- AI MCP Server link -->
      <a class="inline-flex self-start h-[47px] items-center rounded-[26px] border border-outline bg-surface py-2 pr-3 pl-2 gap-2 hover:border-outline-input-focus transition-all no-underline"
         href="${escapeAttr(href("/developer-experience/ai"))}">
        <div class="w-7 h-[31px] rounded-[25px] bg-surface-nav-hover flex items-center justify-center text-xs font-medium text-on-surface-secondary">AI</div>
        <span class="text-sm leading-[22.75px] font-normal text-on-surface-secondary">Learn about Aidbox MCP Server and AI prompts</span>
        <svg class="size-3 text-on-surface-secondary" fill="none" stroke="currentColor" viewBox="0 0 24 24" stroke-width="2"><path stroke-linecap="round" stroke-linejoin="round" d="M9 5l7 7-7 7"/></svg>
      </a>
    </div>
  </div>`;
}

// ---------------------------------------------------------------------------
// Bento Grid -- Main Concepts (8 cards, 4-col)
// ---------------------------------------------------------------------------
function bentoGrid(): string {
  const card = (
    cardHref: string,
    icon: string,
    title: string,
    tagItems: Array<{ text: string; href?: string }>,
    description: string,
    colSpan = ""
  ) => `
    <div class="${CARD_CLICKABLE} p-4 group ${colSpan}"
         data-href="${escapeAttr(cardHref)}"
         onclick="${escapeAttr(cardOnClick)}">
      ${icon}
      <h3 class="text-lg font-medium leading-8 tracking-[-0.03em] mb-3 text-on-surface-strong font-sans">${escapeAttr(title)}</h3>
      <div class="mb-3">${tags(tagItems)}</div>
      <p class="text-sm leading-[22.75px] font-normal text-on-surface-secondary">${description}</p>
    </div>`;

  return `
  <div>
    <div class="mb-6">
      <h2 class="text-[28px] font-semibold leading-9 tracking-[-0.03em] mb-4 text-on-surface-strong font-sans">Main concepts</h2>
    </div>

    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
      ${card(
        href("/database/overview"),
        ICON_FHIR_DATABASE,
        "FHIR Database",
        [
          { text: "PostgreSQL", href: href("/database/overview") },
          { text: "JSONB", href: href("/database/overview#the-postgresql-jsonb-approach") },
          { text: "Indexes", href: href("/deployment-and-maintenance/indexes") },
          { text: "Custom resources", href: href("/tutorials/artifact-registry-tutorials/custom-resources/custom-resources-using-structuredefinition") },
          { text: "SQL on FHIR", href: href("/modules/sql-on-fhir") },
        ],
        "Manage FHIR data with the power of PostgreSQL &mdash; fully under your control. Aidbox stores resources transparently as JSONB, enabling you to query, join, and aggregate by any element, with full support for transactional operations, reporting, and seamless migrations.",
        "lg:col-span-2"
      )}

      ${card(
        href("/api/api-overview"),
        ICON_API,
        "API",
        [
          { text: "FHIR", href: href("/api/api-overview") },
          { text: "SQL", href: href("/api/rest-api/other/sql-endpoints") },
          { text: "GraphQL", href: href("/api/graphql-api") },
          { text: "Subscriptions", href: href("/modules/topic-based-subscriptions") },
        ],
        "Multiple APIs &mdash; FHIR, SQL, GraphQL, Bulk, and Subscription &mdash; to work efficiently with FHIR data for maximum flexibility and performance."
      )}

      ${card(
        href("/artifact-registry/artifact-registry-overview"),
        ICON_AR,
        "Artifact Registry",
        [
          { text: "IGs", href: href("/artifact-registry/artifact-registry-overview") },
          { text: "Profiles", href: href("/artifact-registry/structuredefinition") },
          { text: "Search params", href: href("/api/rest-api/fhir-search/searchparameter") },
        ],
        "Multiple FHIR versions: STU3, R4, R5, and R6. 500+ ready-to-use IGs: IPS, national (US, DE, CA, etc.), domain (mCode, Da Vinci, etc.), custom IGs."
      )}

      ${card(
        href("/access-control/access-control"),
        ICON_ACCESS_CONTROL,
        "Access Control",
        [
          { text: "OAuth 2.0", href: href("/access-control/authentication/oauth-2-0") },
          { text: "SMART", href: "https://www.health-samurai.io/docs/aidbox/access-control/authorization/smart-on-fhir" },
          { text: "RBAC/ABAC", href: href("/access-control/authorization#role-based-access-control") },
          { text: "Access Policies", href: href("/access-control/authorization/access-policies") },
        ],
        "Enterprise-grade security with OAuth 2.0, multitenancy, flexible user management, granular access policies, and complete audit trails."
      )}

      ${card(
        href("/terminology-module/overview"),
        ICON_TERMINOLOGY,
        "Terminology",
        [
          { text: "CodeSystems", href: href("/terminology-module/fhir-terminology/codesystem") },
          { text: "ValueSets", href: href("/terminology-module/fhir-terminology/valueset") },
        ],
        "Validate codes and perform fast lookups in ICD-10, SNOMED, LOINC. Use custom code systems and value sets."
      )}

      ${card(
        href("/developer-experience/developer-experience-overview"),
        ICON_DEVELOPER_EXPERIENCE,
        "Developer Experience",
        [
          { text: "Python", href: href("/getting-started/python") },
          { text: "C#", href: href("/getting-started/csharp") },
          { text: "TS", href: href("/getting-started/typescript") },
          { text: "Codegen", href: href("/developer-experience/developer-experience-overview#use-aidbox-sdks-for-customized-experience") },
        ],
        "TypeScript, C#, and Python SDKs for easy Aidbox integration and rapid app development. SDK generator for custom toolkits tailored to your stack."
      )}

      ${card(
        href("/overview/aidbox-ui"),
        ICON_UI,
        "UI",
        [
          { text: "FHIR Viewer" },
          { text: "Search params", href: href("/api/rest-api/fhir-search/searchparameter") },
        ],
        "Intuitive UI to work with FHIR data, manage users, clients, access policies, and configure system settings."
      )}
    </div>
  </div>`;
}

// ---------------------------------------------------------------------------
// Modules Section -- 3 cards
// ---------------------------------------------------------------------------
function modulesSection(): string {
  const moduleCard = (
    label: string,
    title: string,
    description: string,
    cardHref: string
  ) => `
    <a class="module-card-gradient rounded-lg p-6 flex flex-col border border-module-border min-h-[171px] no-underline transition-all duration-300"
       href="${escapeAttr(cardHref)}">
      <div class="text-xs font-medium uppercase tracking-[0.05em] text-module-label leading-[14px]">${escapeAttr(label)}</div>
      <h3 class="text-base font-medium leading-8 tracking-[-0.03em] text-on-surface-strong m-0">${escapeAttr(title)}</h3>
      <p class="text-sm font-normal text-on-surface-secondary m-0 mt-2 leading-[22.75px]">${description}</p>
    </a>`;

  return `
  <div class="mt-16 mb-12">
    <div class="mb-6">
      <h2 class="text-[28px] font-semibold leading-9 tracking-[-0.03em] text-on-surface-strong font-sans">Modules</h2>
    </div>

    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
      ${moduleCard("MPI", "Master Patient Index", "A module in Aidbox that ensures accurate patient identification by detecting and removing duplicate records", href("/modules/mpi"))}
      ${moduleCard("ePrescription", "Electronic prescriptions", "A module for managing electronic prescriptions. Modern solution for healthcare organizations compliant with strict industry standards", href("/modules/eprescription"))}
      ${moduleCard("Forms", "Form building and SDC", "A pluggable module for healthcare vendors who need to create digital forms, questionnaires, and surveys for clinical workflows", href("/modules/aidbox-forms"))}
    </div>
  </div>`;
}

// ---------------------------------------------------------------------------
// See Also Section -- 4 cards
// ---------------------------------------------------------------------------
function seeAlsoSection(): string {
  const linkCard = (
    icon: string,
    title: string,
    description: string,
    cardHref: string
  ) => `
    <a class="${CARD_BASE} ${CARD_HOVER} p-6 h-[176px] no-underline"
       href="${escapeAttr(cardHref)}">
      ${icon}
      <h3 class="text-lg font-medium leading-8 tracking-[-0.03em] text-on-surface-strong m-0">${escapeAttr(title)}</h3>
      <p class="text-sm leading-[22.75px] font-normal text-on-surface-secondary m-0 mt-2">${description}</p>
    </a>`;

  // Simple small SVG icons for each card
  const starIcon = `<svg class="w-6 h-6 mb-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.2"><path class="dark:stroke-white" stroke="#414042" stroke-linecap="round" stroke-linejoin="round" d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/></svg>`;

  const archIcon = `<svg class="w-6 h-6 mb-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.2"><path class="dark:stroke-white" stroke="#414042" stroke-linecap="round" stroke-linejoin="round" d="M3 21h18M3 7v14M21 7v14M6 7h12M6 7V4h12v3M9 21v-4h6v4"/></svg>`;

  const licenseIcon = `<svg class="w-6 h-6 mb-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.2"><path class="dark:stroke-white" stroke="#414042" stroke-linecap="round" stroke-linejoin="round" d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z"/></svg>`;

  const releaseIcon = `<svg class="w-6 h-6 mb-4" viewBox="0 0 18 22" fill="none" stroke="currentColor" stroke-width="1.2"><path class="dark:stroke-white" stroke="#414042" stroke-linecap="round" stroke-linejoin="round" d="M5 1v4M9 1v4M13 1v4"/><path class="dark:stroke-white" stroke="#414042" stroke-linecap="round" stroke-linejoin="round" d="M15 3H3a2 2 0 00-2 2v14a2 2 0 002 2h12a2 2 0 002-2V5a2 2 0 00-2-2z"/><path class="dark:stroke-white" stroke="#414042" stroke-linecap="round" stroke-linejoin="round" d="M5 9h6M5 13h8"/></svg>`;

  return `
  <div class="mt-16 mb-12">
    <div class="mb-12">
      <h2 class="text-[28px] font-semibold leading-9 tracking-[-0.03em] text-on-surface-strong font-sans">See also</h2>
    </div>

    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
      ${linkCard(starIcon, "Features", "Explore all the features and capabilities that Aidbox offers", href("/features"))}
      ${linkCard(archIcon, "Architecture", "Learn about Aidbox's technical architecture and design principles", href("/architecture"))}
      ${linkCard(licenseIcon, "Licensing & Support", "Information about licensing options and support services", href("/overview/licensing-and-support"))}
      ${linkCard(releaseIcon, "Release Notes", "Stay up to date with the latest updates and improvements", href("/overview/release-notes"))}
    </div>
  </div>`;
}

// ---------------------------------------------------------------------------
// Zulip Community Section
// ---------------------------------------------------------------------------
function zulipCommunity(): string {
  const arrowIcon = `<svg class="ml-2 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" stroke-width="2"><path stroke-linecap="round" stroke-linejoin="round" d="M13.5 6H5.25A2.25 2.25 0 003 8.25v10.5A2.25 2.25 0 005.25 21h10.5A2.25 2.25 0 0018 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25"/></svg>`;

  return `
  <div class="mt-16 mb-12">
    <div class="bg-surface-alt rounded-lg p-[33px] border border-outline">
      <div class="flex flex-col md:flex-row items-center justify-between gap-6">
        <div class="flex items-center gap-4">
          <div class="w-10 h-10 flex items-center justify-center">
            <img src="/docs/aidbox/assets/zulip_logo_svg.svg" alt="Zulip" class="w-8 h-8" />
          </div>
          <div>
            <h3 class="text-xl leading-8 font-medium text-on-surface-strong m-0 mb-1">Join our Zulip Community</h3>
            <p class="text-sm leading-5 font-normal text-on-surface-secondary m-0">Connect with other developers, ask questions, and share your experiences with Aidbox</p>
          </div>
        </div>
        <a class="inline-flex items-center px-5 py-2.5 bg-brand text-white font-medium font-sans rounded-lg hover:bg-brand-hover transition-colors no-underline"
           href="https://connect.health-samurai.io/"
           target="_blank"
           rel="noopener noreferrer">
          Join Zulip Workspace
          ${arrowIcon}
        </a>
      </div>
    </div>
  </div>`;
}

// ---------------------------------------------------------------------------
// Hero Section
// ---------------------------------------------------------------------------
function heroSection(): string {
  return `
  <div class="w-full relative pb-6">
    <!-- Gray background - full width, reduced height so card extends beyond it -->
    <div class="absolute top-0 left-0 right-0 w-screen bg-surface-alt" style="z-index:0; height: calc(60% + 52px); margin-left: calc(50% - 50vw);"></div>

    <!-- Content -->
    <div class="max-w-screen-2xl mx-auto px-4 md:px-8 pt-8 sm:pt-12 xl:pt-16 pb-8 relative z-10">
      <div class="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start px-6">
        <!-- Left side -->
        <div class="flex items-center gap-4">
          <div class="flex flex-col">
            <div class="font-mono font-medium text-base leading-[22.75px] text-brand mb-3">&gt;_</div>
            <h1 class="m-0 mb-3 text-[36px] leading-[36px] tracking-[-0.03em] text-on-surface-strong font-sans font-semibold">Aidbox Documentation</h1>
            <p class="m-0 text-on-surface-secondary text-base leading-6 font-normal max-w-[370px]">Learn how to get up and running with Aidbox through tutorials, APIs and platform resources.</p>
          </div>
        </div>

        <!-- Right side -->
        ${gettingStartedCard()}
      </div>
    </div>
  </div>`;
}

// ---------------------------------------------------------------------------
// Main export
// ---------------------------------------------------------------------------
export function AidboxLanding(): string {
  return `
  <!-- Hero (gray bg) -->
  ${heroSection()}

  <!-- Main content -->
  <div class="max-w-screen-2xl mx-auto px-4 md:px-8 pt-6 pb-8">
    ${bentoGrid()}
    ${modulesSection()}
    ${seeAlsoSection()}
    ${zulipCommunity()}
  </div>

  <!-- Card click handler -->
  <script>
    // Clickable cards with data-href already handled via inline onclick
  </script>`;
}
