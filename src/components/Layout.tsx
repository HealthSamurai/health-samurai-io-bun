import { Header } from "./Header";
import { Footer } from "./Footer";
import { PageStatsPanel } from "./PageStatsPanel";
import type { Context } from "../context";
import { gitInfo } from "../lib/git-info";

type LayoutProps = {
  title: string;
  description?: string;
  children: string;
  hideFooter?: boolean;
  devMode?: boolean;
  ctx?: Context;
  path?: string;
  fullWidth?: boolean; // For docs pages that need more width
};

export async function Layout({ title, description, children, hideFooter, devMode, ctx, path, fullWidth }: LayoutProps): Promise<string> {
  const fullTitle = title === "Home"
    ? "Health Samurai: FHIR solutions | FHIR integration software"
    : `${title} | Health Samurai`;

  const metaDescription = description || "Health Samurai provides FHIR server and database solutions for healthcare applications. Build healthcare solutions from CDRs to EHRs using FHIR, PostgreSQL, and our SDK.";
  const isDev = devMode ?? ctx?.devMode ?? false;
  const cssVersion = isDev ? ctx?.serverId : undefined;
  const cssHref = cssVersion
    ? `/styles/main.css?v=${cssVersion}`
    : `/styles/main.css?v=${gitInfo.shortCommit || "prod"}`;

  // Skip client-side analytics for internal users
  const isInternalUser = ctx?.user?.email?.endsWith("@health-samurai.io") ?? false;

  const html = (
    <html lang="en">
      <head>
        <meta charset="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="description" content={metaDescription} />
        <title>{fullTitle}</title>

        {/* Preconnects for performance */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
        <link rel="preconnect" href="https://unpkg.com" />

        {/* Fonts */}
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;900&family=Montserrat:wght@400;500;600;700;800;900&family=Open+Sans:wght@400;500;600;700&display=swap" rel="stylesheet" />

        {/* Tailwind CSS */}
        <link rel="stylesheet" href={cssHref} />

        {/* htmx - defer to not block render */}
        <script src="https://unpkg.com/htmx.org@1.9.10" defer></script>

        {/* Datastar - defer to not block render */}
        <script type="module" src="https://cdn.jsdelivr.net/gh/starfederation/datastar@1.0.0-RC.7/bundles/datastar.js"></script>

        {/* Theme toggle utilities - defer, FOUC prevented by inline script above */}
        <script src="/assets/js/theme.js" defer></script>

        {/* Analytics tracking - defer since it only needs DOM ready */}
        <script src="/assets/js/analytics.js" defer></script>

        {/* Favicon */}
        <link rel="shortcut icon" type="image/png" href="/assets/images/favicons/favicon-32.png" />
        <link rel="apple-touch-icon" href="/assets/images/favicons/apple-touch-icon.png" />

        {/* RSS feed autodiscovery */}
        <link rel="alternate" type="application/rss+xml" title="Health Samurai Blog" href="/blog/rss.xml" />

        {/* Color scheme detection - runs before render to prevent flash */}
        <script>{`(function(){try{var t=localStorage.getItem('theme');if(t==='dark'||(t!=='light'&&window.matchMedia('(prefers-color-scheme:dark)').matches)){document.documentElement.classList.add('dark')}}catch(e){}})()`}</script>
      </head>
      <body data-no-track={isInternalUser ? "true" : undefined} data-signals="{agentOpen: false}" class="min-h-screen md:grid agent-grid-closed" data-class="{'agent-grid-open': $agentOpen}">
        {/* Main content wrapper - gets pushed left when agent opens */}
        <div class="transition-all duration-300 min-w-0">
          <Header ctx={ctx} />
          <main id="main-content" class={fullWidth ? "w-full" : ""}>{children}</main>
          {!hideFooter && <Footer />}
          {path && ctx && <div>{await PageStatsPanel({ path, ctx })}</div>}
        </div>

        {/* Samurai Agent - Fixed Right Bar (Desktop) */}
        <div class="hidden md:flex h-screen sticky top-0 z-40 transition-all duration-300 bg-gray-100 dark:bg-dark-bg-alt border-l-2 border-gray-200 dark:border-dark-border w-12" data-class="{'agent-panel-open': $agentOpen}">
          {/* Collapsed bar */}
          <div
            class="absolute inset-0 flex flex-col items-center py-4 cursor-pointer hover:bg-gray-100 dark:hover:bg-dark-border transition-colors"
            data-on:click="$agentOpen = true; setTimeout(() => document.getElementById('agent-input')?.focus(), 0)"
            data-show="!$agentOpen"
          >
            <div class="text-primary mb-4">
              {/* Sparkles icon */}
              <svg viewBox="0 0 24 24" fill="currentColor" class="size-7">
                <path d="M5 3.5 6.2 6.2 8.9 7.4 6.2 8.6 5 11.3 3.8 8.6 1.1 7.4 3.8 6.2 5 3.5z"/>
                <path d="M16 2.5 17.4 6 20.9 7.4 17.4 8.8 16 12.3 14.6 8.8 11.1 7.4 14.6 6 16 2.5z"/>
                <path d="M14.5 13 16 16.2 19.2 17.7 16 19.2 14.5 22.4 13 19.2 9.8 17.7 13 16.2 14.5 13z"/>
              </svg>
            </div>
            <span class="text-gray-700 dark:text-dark-text text-xs font-medium" style="writing-mode: vertical-rl; text-orientation: mixed">
              Samurai Agent
            </span>
          </div>

          {/* Expanded chat panel */}
          <div
            class="absolute inset-0 bg-gray-100 dark:bg-dark-bg-alt flex flex-col border-l border-gray-200 dark:border-dark-border"
            data-show="$agentOpen"
            style="display: none"
          >
            {/* Header */}
            <div class="agent-panel-header flex items-center justify-between px-4 py-3 bg-gray-100 dark:bg-dark-border">
              <div class="flex items-center gap-2">
                <span class="text-primary">
                  {/* Sparkles icon */}
                  <svg viewBox="0 0 24 24" fill="currentColor" class="size-6">
                    <path d="M5 3.5 6.2 6.2 8.9 7.4 6.2 8.6 5 11.3 3.8 8.6 1.1 7.4 3.8 6.2 5 3.5z"/>
                    <path d="M16 2.5 17.4 6 20.9 7.4 17.4 8.8 16 12.3 14.6 8.8 11.1 7.4 14.6 6 16 2.5z"/>
                    <path d="M14.5 13 16 16.2 19.2 17.7 16 19.2 14.5 22.4 13 19.2 9.8 17.7 13 16.2 14.5 13z"/>
                  </svg>
                </span>
                <h2 class="text-base font-semibold text-gray-900 dark:text-dark-text">Samurai Agent</h2>
              </div>
              <button
                type="button"
                data-on:click="$agentOpen = false"
                class="rounded-lg p-1.5 text-gray-500 hover:text-gray-700 hover:bg-gray-200 dark:text-dark-text-muted dark:hover:text-dark-text dark:hover:bg-dark-border"
              >
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" class="size-5">
                  <path stroke-linecap="round" stroke-linejoin="round" d="m8.25 4.5 7.5 7.5-7.5 7.5"/>
                </svg>
              </button>
            </div>

            {/* Messages */}
            <div id="agent-messages" class="flex-1 overflow-y-auto p-4 space-y-4">
              {/* Welcome message */}
              <div class="flex gap-3">
                <div class="flex-shrink-0 size-8 rounded-full bg-primary flex items-center justify-center text-white">
                  {/* Sparkles icon */}
                  <svg viewBox="0 0 24 24" fill="currentColor" class="size-5">
                    <path d="M5 3.5 6.2 6.2 8.9 7.4 6.2 8.6 5 11.3 3.8 8.6 1.1 7.4 3.8 6.2 5 3.5z"/>
                    <path d="M16 2.5 17.4 6 20.9 7.4 17.4 8.8 16 12.3 14.6 8.8 11.1 7.4 14.6 6 16 2.5z"/>
                    <path d="M14.5 13 16 16.2 19.2 17.7 16 19.2 14.5 22.4 13 19.2 9.8 17.7 13 16.2 14.5 13z"/>
                  </svg>
                </div>
                <div class="flex-1">
                  <p class="text-sm font-medium text-gray-900 dark:text-dark-text">Samurai Agent</p>
                  <div class="mt-1 text-sm text-gray-700 dark:text-dark-text-light">
                    <p>Hi! I'm your FHIR assistant. Ask me about:</p>
                    <ul class="mt-2 space-y-1 text-gray-600 dark:text-dark-text-muted">
                      <li>• FHIR resources &amp; APIs</li>
                      <li>• Aidbox configuration</li>
                      <li>• SQL on FHIR queries</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>

            {/* Input */}
            <div class="border-t border-gray-200 dark:border-dark-border p-3">
              <form
                hx-post="/api/agent/chat"
                hx-target="#agent-messages"
                hx-swap="beforeend"
                hx-on--after-request="this.reset(); document.getElementById('agent-messages').scrollTop = document.getElementById('agent-messages').scrollHeight"
                class="flex gap-2"
              >
                <input
                  type="text"
                  name="message"
                  id="agent-input"
                  placeholder="Ask anything..."
                  required
                  autocomplete="off"
                  class="flex-1 rounded-lg border border-gray-300 dark:border-dark-border bg-white dark:bg-dark-bg px-3 py-2 text-sm text-gray-900 dark:text-dark-text placeholder:text-gray-400 dark:placeholder:text-dark-text-muted focus:border-primary focus:ring-1 focus:ring-primary focus:outline-none"
                />
                <button
                  type="submit"
                  class="rounded-lg bg-primary p-2 text-white hover:bg-primary-dark focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 transition-colors"
                >
                  <svg viewBox="0 0 24 24" fill="currentColor" class="size-5">
                    <path d="M3.478 2.404a.75.75 0 0 0-.926.941l2.432 7.905H13.5a.75.75 0 0 1 0 1.5H4.984l-2.432 7.905a.75.75 0 0 0 .926.94 60.519 60.519 0 0 0 18.445-8.986.75.75 0 0 0 0-1.218A60.517 60.517 0 0 0 3.478 2.404Z"/>
                  </svg>
                </button>
              </form>
            </div>
          </div>
        </div>

        {/* Mobile floating button */}
        <div class="md:hidden" data-signals="{mobileAgentOpen: false}">
          <button
            type="button"
            data-on:click="$mobileAgentOpen = !$mobileAgentOpen"
            class="fixed bottom-6 right-6 z-50 flex items-center justify-center size-14 rounded-full bg-primary text-white shadow-lg hover:bg-primary-dark transition-colors"
          >
            {/* Sparkles icon */}
            <svg viewBox="0 0 24 24" fill="currentColor" class="size-7">
              <path d="M5 3.5 6.2 6.2 8.9 7.4 6.2 8.6 5 11.3 3.8 8.6 1.1 7.4 3.8 6.2 5 3.5z"/>
              <path d="M16 2.5 17.4 6 20.9 7.4 17.4 8.8 16 12.3 14.6 8.8 11.1 7.4 14.6 6 16 2.5z"/>
              <path d="M14.5 13 16 16.2 19.2 17.7 16 19.2 14.5 22.4 13 19.2 9.8 17.7 13 16.2 14.5 13z"/>
            </svg>
          </button>

          {/* Mobile backdrop */}
          <div
            class="fixed inset-0 z-40 bg-gray-900/50"
            data-show="$mobileAgentOpen"
            data-on:click="$mobileAgentOpen = false"
            style="display: none"
          />

          {/* Mobile chat panel */}
          <div
            class="fixed inset-x-4 bottom-24 top-20 z-50 rounded-2xl bg-white dark:bg-dark-bg shadow-2xl flex flex-col overflow-hidden"
            data-show="$mobileAgentOpen"
            style="display: none"
          >
            <div class="flex items-center justify-between border-b border-gray-200 dark:border-dark-border px-4 py-3 bg-gray-50 dark:bg-dark-bg-alt">
              <div class="flex items-center gap-2">
                <span class="text-primary">
                  {/* Sparkles icon */}
                  <svg viewBox="0 0 24 24" fill="currentColor" class="size-6">
                    <path d="M5 3.5 6.2 6.2 8.9 7.4 6.2 8.6 5 11.3 3.8 8.6 1.1 7.4 3.8 6.2 5 3.5z"/>
                    <path d="M16 2.5 17.4 6 20.9 7.4 17.4 8.8 16 12.3 14.6 8.8 11.1 7.4 14.6 6 16 2.5z"/>
                    <path d="M14.5 13 16 16.2 19.2 17.7 16 19.2 14.5 22.4 13 19.2 9.8 17.7 13 16.2 14.5 13z"/>
                  </svg>
                </span>
                <h2 class="text-base font-semibold text-gray-900 dark:text-dark-text">Samurai Agent</h2>
              </div>
              <button
                type="button"
                data-on:click="$mobileAgentOpen = false"
                class="rounded-lg p-1.5 text-gray-500 hover:text-gray-700 dark:text-dark-text-muted dark:hover:text-dark-text"
              >
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" class="size-5">
                  <path stroke-linecap="round" stroke-linejoin="round" d="M6 18 18 6M6 6l12 12"/>
                </svg>
              </button>
            </div>
            <div id="agent-messages-mobile" class="flex-1 overflow-y-auto p-4 space-y-4">
              <div class="flex gap-3">
                <div class="flex-shrink-0 size-8 rounded-full bg-primary flex items-center justify-center text-white">
                  {/* Sparkles icon */}
                  <svg viewBox="0 0 24 24" fill="currentColor" class="size-5">
                    <path d="M5 3.5 6.2 6.2 8.9 7.4 6.2 8.6 5 11.3 3.8 8.6 1.1 7.4 3.8 6.2 5 3.5z"/>
                    <path d="M16 2.5 17.4 6 20.9 7.4 17.4 8.8 16 12.3 14.6 8.8 11.1 7.4 14.6 6 16 2.5z"/>
                    <path d="M14.5 13 16 16.2 19.2 17.7 16 19.2 14.5 22.4 13 19.2 9.8 17.7 13 16.2 14.5 13z"/>
                  </svg>
                </div>
                <div class="flex-1">
                  <p class="text-sm font-medium text-gray-900 dark:text-dark-text">Samurai Agent</p>
                  <p class="mt-1 text-sm text-gray-700 dark:text-dark-text-light">Hi! Ask me anything about FHIR.</p>
                </div>
              </div>
            </div>
            <div class="border-t border-gray-200 dark:border-dark-border p-3">
              <form
                hx-post="/api/agent/chat"
                hx-target="#agent-messages-mobile"
                hx-swap="beforeend"
                hx-on--after-request="this.reset()"
                class="flex gap-2"
              >
                <input
                  type="text"
                  name="message"
                  placeholder="Ask anything..."
                  required
                  autocomplete="off"
                  class="flex-1 rounded-lg border border-gray-300 dark:border-dark-border bg-white dark:bg-dark-bg px-3 py-2 text-sm"
                />
                <button type="submit" class="rounded-lg bg-primary p-2 text-white hover:bg-primary-dark">
                  <svg viewBox="0 0 24 24" fill="currentColor" class="size-5">
                    <path d="M3.478 2.404a.75.75 0 0 0-.926.941l2.432 7.905H13.5a.75.75 0 0 1 0 1.5H4.984l-2.432 7.905a.75.75 0 0 0 .926.94 60.519 60.519 0 0 0 18.445-8.986.75.75 0 0 0 0-1.218A60.517 60.517 0 0 0 3.478 2.404Z"/>
                  </svg>
                </button>
              </form>
            </div>
          </div>
        </div>

        {devMode && (
          <script>{`let _id;setInterval(async()=>{const r=await fetch("/__ping").catch(()=>null);const n=await r?.text();if(_id&&n&&_id!==n)location.reload();if(n)_id=n},1000)`}</script>
        )}
      </body>
    </html>
  );

  return `<!DOCTYPE html>${html}`;
}
