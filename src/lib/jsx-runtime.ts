// Custom JSX runtime for server-side HTML string rendering

type Child = string | number | boolean | null | undefined | Child[];
type Props = Record<string, unknown> & { children?: Child };

// Void elements (self-closing, no children)
const VOID_ELEMENTS = new Set([
  "area", "base", "br", "col", "embed", "hr", "img", "input",
  "link", "meta", "param", "source", "track", "wbr",
]);

// Escape HTML to prevent XSS - exported for use with user content
export function escapeHtml(str: string): string {
  return str
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#39;");
}

// Convert camelCase to kebab-case for CSS properties
function toKebabCase(str: string): string {
  return str.replace(/([A-Z])/g, "-$1").toLowerCase();
}

// Render children to string
function renderChildren(children: Child): string {
  if (children == null || children === false || children === true) {
    return "";
  }
  if (Array.isArray(children)) {
    return children.map(renderChildren).join("");
  }
  return String(children);
}

// Render props to HTML attributes
function renderProps(props: Props): string {
  const attrs: string[] = [];

  for (const [key, value] of Object.entries(props)) {
    if (key === "children" || value == null || value === false) {
      continue;
    }

    // Handle className -> class
    const attrName = key === "className" ? "class" : key;

    // Handle style object
    if (key === "style" && typeof value === "object") {
      const styleStr = Object.entries(value as Record<string, string | number>)
        .map(([k, v]) => `${toKebabCase(k)}: ${v}`)
        .join("; ");
      attrs.push(`style="${escapeHtml(styleStr)}"`);
      continue;
    }

    // Handle boolean attributes
    if (value === true) {
      attrs.push(attrName);
      continue;
    }

    attrs.push(`${attrName}="${escapeHtml(String(value))}"`);
  }

  return attrs.length > 0 ? " " + attrs.join(" ") : "";
}

// JSX factory function
export function jsx(
  tag: string | ((props: Props) => string),
  props: Props
): string {
  // Handle function components
  if (typeof tag === "function") {
    return tag(props);
  }

  const { children, dangerouslySetInnerHTML, ...restProps } = props as Props & {
    dangerouslySetInnerHTML?: { __html: string };
  };
  const attributes = renderProps(restProps as Props);

  // Handle void elements
  if (VOID_ELEMENTS.has(tag)) {
    return `<${tag}${attributes} />`;
  }

  // Handle dangerouslySetInnerHTML (raw HTML injection)
  if (dangerouslySetInnerHTML && typeof dangerouslySetInnerHTML.__html === "string") {
    return `<${tag}${attributes}>${dangerouslySetInnerHTML.__html}</${tag}>`;
  }

  const content = renderChildren(children);

  return `<${tag}${attributes}>${content}</${tag}>`;
}

// jsxs is the same as jsx for our purposes (used for multiple children)
export const jsxs = jsx;

// Fragment just renders children
export function Fragment({ children }: { children?: Child }): string {
  return renderChildren(children);
}

// For JSX namespace (TypeScript)
export namespace JSX {
  export type Element = string;
  export interface IntrinsicElements {
    [elemName: string]: Record<string, unknown>;
  }
}
