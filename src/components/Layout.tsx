import { Header } from "./Header";
import { Footer } from "./Footer";
import { PageStatsPanel } from "./PageStatsPanel";
import type { Context } from "../context";

type LayoutProps = {
  title: string;
  description?: string;
  children: string;
  hideFooter?: boolean;
  devMode?: boolean;
  ctx?: Context;
  path?: string;
};

export async function Layout({ title, description, children, hideFooter, devMode, ctx, path }: LayoutProps): Promise<string> {
  const fullTitle = title === "Home"
    ? "Health Samurai: FHIR solutions | FHIR integration software"
    : `${title} | Health Samurai`;

  const metaDescription = description || "Health Samurai provides FHIR server and database solutions for healthcare applications. Build healthcare solutions from CDRs to EHRs using FHIR, PostgreSQL, and our SDK.";

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
        <link rel="stylesheet" href="/styles/main.css" />

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
      <body data-no-track={isInternalUser ? "true" : undefined}>
        <Header ctx={ctx} />
        <main id="main-content">{children}</main>
        {!hideFooter && <Footer />}
        {path && ctx && <div>{await PageStatsPanel({ path, ctx })}</div>}
        {devMode && (
          <script>{`let _id;setInterval(async()=>{const r=await fetch("/__ping").catch(()=>null);const n=await r?.text();if(_id&&n&&_id!==n)location.reload();if(n)_id=n},1000)`}</script>
        )}
      </body>
    </html>
  );

  return `<!DOCTYPE html>${html}`;
}
