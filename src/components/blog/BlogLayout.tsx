import { Header } from "../Header"
import { Footer } from "../Footer"
import type { Context } from "../../context"

interface BlogLayoutProps {
  title: string
  description?: string
  children: string
  ctx?: Context
  devMode?: boolean
}

/**
 * Blog-specific layout
 * Uses unified main.css (same as rest of site)
 */
export function BlogLayout({ title, description, children, ctx, devMode }: BlogLayoutProps): string {
  return `<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>${title}</title>
    ${description ? `<meta name="description" content="${description}" />` : ''}
    <link rel="icon" href="https://cdn.prod.website-files.com/57441aa5da71fdf07a0a2e19/5a2ff62247c38400019e81f3_32.png" />
    <link rel="stylesheet" href="/styles/main.css" />
    <link rel="preconnect" href="https://fonts.googleapis.com" />
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin="anonymous" />
    <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800&family=JetBrains+Mono:wght@400;500&display=swap" rel="stylesheet" />
    <script src="https://unpkg.com/htmx.org@1.9.10"></script>
  </head>
  <body class="bg-bg-primary text-text-secondary min-h-screen flex flex-col antialiased font-sans">
    ${Header({ ctx })}
    ${children}
    ${Footer()}
  </body>
</html>`
}
