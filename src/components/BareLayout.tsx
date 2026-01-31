type BareLayoutProps = {
  title: string;
  description?: string;
  children: string;
};

/**
 * Minimal layout for auth pages (login, etc.) - no header/footer
 */
export function BareLayout({ title, description, children }: BareLayoutProps): string {
  const fullTitle = `${title} | Health Samurai`;
  const metaDescription = description || "Health Samurai - FHIR solutions for healthcare";

  const html = (
    <html lang="en">
      <head>
        <meta charset="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="description" content={metaDescription} />
        <title>{fullTitle}</title>

        {/* Fonts */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;900&display=swap" rel="stylesheet" />

        {/* Tailwind CSS */}
        <link rel="stylesheet" href="/styles/main.css" />

        {/* Favicon */}
        <link rel="shortcut icon" type="image/png" href="/assets/images/favicons/favicon-32.png" />
      </head>
      <body class="bg-gray-50" dangerouslySetInnerHTML={{ __html: children }} />
    </html>
  );

  return html;
}
