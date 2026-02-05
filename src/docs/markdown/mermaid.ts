/**
 * Server-Side Mermaid Rendering
 *
 * Renders mermaid diagrams to SVG at build time using beautiful-mermaid.
 * Produces two SVGs (light + dark) wrapped in a container that toggles
 * visibility based on the current theme via CSS.
 */

import { renderMermaid, type RenderOptions } from "beautiful-mermaid";

/** Light theme — matches the client-side config from DocsLayout */
const LIGHT: RenderOptions = {
  bg: "#ffffff",
  fg: "#1D2331",
  line: "#717684",
  accent: "#F58685",
  muted: "#717684",
  surface: "#F5F5F6",
  border: "#CCCED4",
  font: "Inter, verdana",
  transparent: true,
};

/** Dark theme — matches the client-side config from DocsLayout */
const DARK: RenderOptions = {
  bg: "#1a1a1a",
  fg: "#e5e5e5",
  line: "#999999",
  accent: "#E66B55",
  muted: "#999999",
  surface: "#2a2a2a",
  border: "#666666",
  font: "Inter, verdana",
  transparent: true,
};

/**
 * Render a mermaid diagram to SVG (light + dark variants).
 * Returns HTML with both SVGs, toggled by .dark class on <html>.
 */
export async function renderMermaidDiagram(code: string): Promise<string> {
  const [lightSvg, darkSvg] = await Promise.all([
    renderMermaid(code, LIGHT),
    renderMermaid(code, DARK),
  ]);

  return `<span class="mermaid-light">${lightSvg}</span><span class="mermaid-dark">${darkSvg}</span>`;
}
