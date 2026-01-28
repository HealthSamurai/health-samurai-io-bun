import { Header } from "./Header";
import { Footer } from "./Footer";

type LayoutProps = {
  title: string;
  description?: string;
  children: string;
};

export function Layout({ title, description, children }: LayoutProps): string {
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
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;900&display=swap" rel="stylesheet" />

        {/* Styles */}
        <link rel="stylesheet" href="/styles/global.css" />
        <link rel="stylesheet" href="/styles/header.css" />
        <link rel="stylesheet" href="/styles/footer.css" />
        <link rel="stylesheet" href="/styles/hero.css" />
        <link rel="stylesheet" href="/styles/sections.css" />
        <link rel="stylesheet" href="/styles/fhir-server.css" />

        {/* htmx */}
        <script src="https://unpkg.com/htmx.org@1.9.10"></script>

        {/* Datastar */}
        <script type="module" src="/assets/js/datastar.js"></script>

        {/* Favicon */}
        <link rel="icon" type="image/png" href="/assets/images/logos/aidbox-mini.svg" />
      </head>
      <body>
        <a href="#main-content" className="skip-link">Skip to main content</a>
        <Header />
        <main id="main-content" dangerouslySetInnerHTML={{ __html: children }} />
        <Footer />
      </body>
    </html>
  );

  return `<!DOCTYPE html>${html}`;
}
