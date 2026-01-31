import { Header } from "./Header";
import { Footer } from "./Footer";

type LayoutProps = {
  title: string;
  description?: string;
  children: string;
  hideFooter?: boolean;
  devMode?: boolean;
};

export function Layout({ title, description, children, hideFooter, devMode }: LayoutProps): string {
  const fullTitle = title === "Home"
    ? "Health Samurai: FHIR solutions | FHIR integration software"
    : `${title} | Health Samurai`;

  const metaDescription = description || "Health Samurai provides FHIR server and database solutions for healthcare applications. Build healthcare solutions from CDRs to EHRs using FHIR, PostgreSQL, and our SDK.";

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

        {/* htmx */}
        <script src="https://unpkg.com/htmx.org@1.9.10"></script>

        {/* Datastar */}
        <script type="module" src="https://cdn.jsdelivr.net/gh/starfederation/datastar@1.0.0-RC.7/bundles/datastar.js"></script>

        {/* Favicon */}
        <link rel="shortcut icon" type="image/png" href="/assets/images/favicons/favicon-32.png" />
        <link rel="apple-touch-icon" href="/assets/images/favicons/apple-touch-icon.png" />
      </head>
      <body>
        <Header />
        <main id="main-content" dangerouslySetInnerHTML={{ __html: children }} />
        {!hideFooter && <Footer />}
        {devMode && (
          <script dangerouslySetInnerHTML={{ __html: `let _id;setInterval(async()=>{const r=await fetch("/__ping").catch(()=>null);const n=await r?.text();if(_id&&n&&_id!==n)location.reload();if(n)_id=n},1000)` }} />
        )}
      </body>
    </html>
  );

  return `<!DOCTYPE html>${html}`;
}
