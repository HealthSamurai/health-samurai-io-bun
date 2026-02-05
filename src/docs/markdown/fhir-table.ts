/**
 * FHIR Structure Table Renderer
 *
 * Renders FHIR resource structure tables from JSON data in code blocks
 * with language "fhir-structure". Ported from the Clojure documentation
 * engine (gitbok.ui.fhir_structure_table / gitbok.ui.fhir_icons).
 *
 * Each element in the JSON array has fields:
 *   name, path, lvl, min, max, type, desc, union?, extension-url, slice-type
 */

// ============================================================
// Types
// ============================================================

interface FhirElement {
  name?: string;
  path?: string;
  lvl: number;
  min?: number;
  max?: number | string;
  type?: string;
  desc?: string;
  "union?"?: boolean;
  "extension-url"?: string;
  "slice-type"?: string;
}

interface TreeNode extends FhirElement {
  children: TreeNode[];
}

// ============================================================
// SVG Icons
// ============================================================

const SVG_ATTRS_16 =
  'width="16" height="17" viewBox="0 0 16 17" fill="none" xmlns="http://www.w3.org/2000/svg" class="inline-block"';

const STROKE_ATTRS =
  'stroke="currentColor" stroke-width="1.25" stroke-linecap="round" stroke-linejoin="round"';

/** Icon for complex data types (cube) */
function datatypeIcon(): string {
  return `<svg ${SVG_ATTRS_16}><g><path d="M3.91406 5.77679L8.00281 8.08304L12.0793 5.77691" ${STROKE_ATTRS}/><path d="M8 12.6996V8.08301" ${STROKE_ATTRS}/><path d="M14 5.41636C13.9998 5.18254 13.938 4.9529 13.821 4.75047C13.704 4.54803 13.5358 4.37993 13.3333 4.26302L8.66667 1.59636C8.46397 1.47933 8.23405 1.41772 8 1.41772C7.76595 1.41772 7.53603 1.47933 7.33333 1.59636L2.66667 4.26302C2.46418 4.37993 2.29599 4.54803 2.17897 4.75047C2.06196 4.9529 2.00024 5.18254 2 5.41636V10.7497C2.00024 10.9835 2.06196 11.2132 2.17897 11.4156C2.29599 11.618 2.46418 11.7861 2.66667 11.903L7.33333 14.5697C7.53603 14.6867 7.76595 14.7483 8 14.7483C8.23405 14.7483 8.46397 14.6867 8.66667 14.5697L13.3333 11.903C13.5358 11.7861 13.704 11.618 13.821 11.4156C13.938 11.2132 13.9998 10.9835 14 10.7497V5.41636Z" ${STROKE_ATTRS}/></g></svg>`;
}

/** Icon for primitive types (curly braces) */
function primitiveIcon(): string {
  return `<svg ${SVG_ATTRS_16}><path d="M3.33594 2.74969H4.0026C4.53304 2.74969 5.04175 2.96041 5.41682 3.33548C5.79189 3.71055 6.0026 4.21926 6.0026 4.74969C6.0026 4.21926 6.21332 3.71055 6.58839 3.33548C6.96346 2.96041 7.47217 2.74969 8.0026 2.74969H8.66927" ${STROKE_ATTRS}/><path d="M8.66927 13.4163H8.0026C7.47217 13.4163 6.96346 13.2056 6.58839 12.8305C6.21332 12.4555 6.0026 11.9468 6.0026 11.4163C6.0026 11.9468 5.79189 12.4555 5.41682 12.8305C5.04175 13.2056 4.53304 13.4163 4.0026 13.4163H3.33594" ${STROKE_ATTRS}/><path d="M3.33594 10.7497H2.66927C2.31565 10.7497 1.97651 10.6092 1.72646 10.3591C1.47641 10.1091 1.33594 9.76994 1.33594 9.41632V6.74965C1.33594 6.39603 1.47641 6.05689 1.72646 5.80685C1.97651 5.5568 2.31565 5.41632 2.66927 5.41632H3.33594" ${STROKE_ATTRS}/><path d="M8.66406 5.41632H13.3307C13.6844 5.41632 14.0235 5.5568 14.2735 5.80685C14.5236 6.05689 14.6641 6.39603 14.6641 6.74965V9.41632C14.6641 9.76994 14.5236 10.1091 14.2735 10.3591C14.0235 10.6092 13.6844 10.7497 13.3307 10.7497H8.66406" ${STROKE_ATTRS}/><path d="M6 4.74969V11.4164" ${STROKE_ATTRS}/></svg>`;
}

/** Icon for union/choice types (diamond with question mark) */
function choiceIcon(): string {
  return `<svg width="16" height="17" viewBox="0 0 16 17" fill="none" xmlns="http://www.w3.org/2000/svg" class="inline-block text-[#405CBF]"><g><path d="M1.21109 6.84206C1.04758 7.0054 0.917866 7.19937 0.829365 7.41287C0.740865 7.62638 0.695313 7.85523 0.695312 8.08635C0.695313 8.31747 0.740865 8.54632 0.829365 8.75983C0.917866 8.97333 1.04758 9.1673 1.21109 9.33064L6.7502 14.8698C6.91354 15.0333 7.10751 15.163 7.32101 15.2515C7.53452 15.34 7.76337 15.3855 7.99449 15.3855C8.22561 15.3855 8.45446 15.34 8.66797 15.2515C8.88147 15.163 9.07544 15.0333 9.23878 14.8698L14.7779 9.33064C14.9414 9.1673 15.0711 8.97333 15.1596 8.75983C15.2481 8.54632 15.2937 8.31747 15.2937 8.08635C15.2937 7.85523 15.2481 7.62638 15.1596 7.41287C15.0711 7.19937 14.9414 7.0054 14.7779 6.84206L9.23878 1.30295C9.07544 1.13944 8.88147 1.00972 8.66797 0.921223C8.45446 0.832723 8.22561 0.78717 7.99449 0.78717C7.76337 0.78717 7.53452 0.832723 7.32101 0.921223C7.10751 1.00972 6.91354 1.13944 6.7502 1.30295L1.21109 6.84206Z" ${STROKE_ATTRS}/><path fill-rule="evenodd" clip-rule="evenodd" d="M8.18179 5.7278C7.86175 5.67291 7.5326 5.73305 7.25265 5.89758C6.9727 6.06211 6.76001 6.32041 6.65225 6.62673C6.53771 6.95235 6.18089 7.12346 5.85527 7.00891C5.52965 6.89437 5.35854 6.53754 5.47309 6.21192C5.6788 5.62713 6.08484 5.13402 6.6193 4.81992C7.15375 4.50581 7.78212 4.391 8.39312 4.4958C9.00411 4.6006 9.5583 4.91826 9.95753 5.39251C10.3567 5.8667 10.5752 6.46684 10.5743 7.08667C10.574 8.08475 9.83365 8.74761 9.29602 9.10602C9.00813 9.29795 8.72468 9.43923 8.51567 9.53213C8.41028 9.57897 8.32158 9.61449 8.25777 9.6388C8.08575 9.70433 8.22306 9.66463 8.14777 9.67866C8.20338 9.66012 8.22643 9.6509 8.14777 9.67866C7.8203 9.78781 7.46556 9.6111 7.35641 9.28364C7.2474 8.9566 7.42377 8.60314 7.75042 8.49349L7.75172 8.49305L7.76242 8.4893C7.77295 8.48555 7.79005 8.47935 7.81278 8.47069C7.85834 8.45333 7.92589 8.42635 8.008 8.38986C8.17399 8.31609 8.39054 8.20737 8.60265 8.06596C9.0649 7.7578 9.32434 7.42087 9.32434 7.08599C9.32482 6.76127 9.21037 6.44593 9.00125 6.19751C8.79213 5.94909 8.50184 5.7827 8.18179 5.7278Z" fill="currentColor"/><path fill-rule="evenodd" clip-rule="evenodd" d="M7.375 11.7526C7.375 11.4074 7.65482 11.1276 8 11.1276H8.00667C8.35184 11.1276 8.63167 11.4074 8.63167 11.7526C8.63167 12.0978 8.35184 12.3776 8.00667 12.3776H8C7.65482 12.3776 7.375 12.0978 7.375 11.7526Z" fill="currentColor"/></g></svg>`;
}

/** Icon for resource types (three boxes) */
function resourceIcon(): string {
  return `<svg ${SVG_ATTRS_16}><path d="M13.9974 11.167H11.3307C10.9625 11.167 10.6641 11.4655 10.6641 11.8337V14.5003C10.6641 14.8685 10.9625 15.167 11.3307 15.167H13.9974C14.3656 15.167 14.6641 14.8685 14.6641 14.5003V11.8337C14.6641 11.4655 14.3656 11.167 13.9974 11.167Z" ${STROKE_ATTRS}/><path d="M4.66927 11.167H2.0026C1.63441 11.167 1.33594 11.4655 1.33594 11.8337V14.5003C1.33594 14.8685 1.63441 15.167 2.0026 15.167H4.66927C5.03746 15.167 5.33594 14.8685 5.33594 14.5003V11.8337C5.33594 11.4655 5.03746 11.167 4.66927 11.167Z" ${STROKE_ATTRS}/><path d="M9.33333 1.83301H6.66667C6.29848 1.83301 6 2.13148 6 2.49967V5.16634C6 5.53453 6.29848 5.83301 6.66667 5.83301H9.33333C9.70152 5.83301 10 5.53453 10 5.16634V2.49967C10 2.13148 9.70152 1.83301 9.33333 1.83301Z" ${STROKE_ATTRS}/><path d="M3.33594 11.1667V9.16667C3.33594 8.98986 3.40618 8.82029 3.5312 8.69526C3.65622 8.57024 3.82579 8.5 4.0026 8.5H12.0026C12.1794 8.5 12.349 8.57024 12.474 8.69526C12.599 8.82029 12.6693 8.98986 12.6693 9.16667V11.1667" ${STROKE_ATTRS}/><path d="M8 8.49967V5.83301" ${STROKE_ATTRS}/></svg>`;
}

/** Icon for Reference types (arrow) */
function externalLinkIcon(): string {
  return `<svg xmlns="http://www.w3.org/2000/svg" width="17" height="17" viewBox="0 0 17 17" fill="none" class="inline-block text-[#405CBF]"><path d="M10.4004 2.5H14.4004V6.5" fill="white"/><path d="M10.4004 2.5H14.4004V6.5" ${STROKE_ATTRS}/><path d="M7.06641 9.83333L14.3997 2.5L7.06641 9.83333Z" fill="white"/><path d="M7.06641 9.83333L14.3997 2.5" ${STROKE_ATTRS}/><path d="M12.4004 9.16667V13.1667C12.4004 13.5203 12.2599 13.8594 12.0099 14.1095C11.7598 14.3595 11.4207 14.5 11.0671 14.5H3.73372C3.3801 14.5 3.04096 14.3595 2.79091 14.1095C2.54087 13.8594 2.40039 13.5203 2.40039 13.1667V5.83333C2.40039 5.47971 2.54087 5.14057 2.79091 4.89052C3.04096 4.64048 3.3801 4.5 3.73372 4.5H7.73372" ${STROKE_ATTRS}/></svg>`;
}

/** Icon for extensions/slices (cylinders) */
function sliceItemIcon(): string {
  return `<svg width="16" height="17" viewBox="0 0 16 17" fill="none" xmlns="http://www.w3.org/2000/svg" class="inline-block text-[#00A984]"><path d="M8 8.41632C11.3137 8.41632 14 7.52089 14 6.41632C14 5.31175 11.3137 4.41632 8 4.41632C4.68629 4.41632 2 5.31175 2 6.41632C2 7.52089 4.68629 8.41632 8 8.41632Z" ${STROKE_ATTRS}/><path d="M2 6.41632V9.74965C2 10.2801 2.63214 10.7888 3.75736 11.1639C4.88258 11.5389 6.4087 11.7497 8 11.7497C9.5913 11.7497 11.1174 11.5389 12.2426 11.1639C13.3679 10.7888 14 10.2801 14 9.74965V6.41632" ${STROKE_ATTRS}/></svg>`;
}

// ============================================================
// Primitive Types
// ============================================================

const PRIMITIVE_TYPES = new Set([
  "boolean",
  "integer",
  "string",
  "decimal",
  "uri",
  "url",
  "canonical",
  "base64Binary",
  "instant",
  "date",
  "dateTime",
  "time",
  "code",
  "oid",
  "id",
  "markdown",
  "unsignedInt",
  "positiveInt",
  "uuid",
  "xhtml",
]);

// ============================================================
// Type Icon Selection
// ============================================================

/**
 * Returns the appropriate icon SVG for a given FHIR element.
 */
function typeIcon(element: FhirElement): string {
  if (element.type === "root") {
    return resourceIcon();
  }

  if (element["extension-url"] || element["slice-type"]) {
    return sliceItemIcon();
  }

  if (element.type && PRIMITIVE_TYPES.has(element.type)) {
    return primitiveIcon();
  }

  if (element["union?"]) {
    return choiceIcon();
  }

  if (element.type === "Reference") {
    return externalLinkIcon();
  }

  return datatypeIcon();
}

// ============================================================
// Nest by Level (flat list -> tree)
// ============================================================

/**
 * Converts a flat list of elements with lvl keys into a nested tree structure.
 * Uses a stack-based algorithm matching the Clojure implementation.
 */
function nestByLevel(items: FhirElement[]): TreeNode[] {
  const result: TreeNode[] = [];

  // Stack stores paths into the result tree.
  // Each entry is an array of indices to navigate: [rootIdx, childIdx, childIdx, ...]
  const stack: number[][] = [];

  function getNode(path: number[]): TreeNode {
    let node = result[path[0]];
    for (let i = 1; i < path.length; i++) {
      node = node.children[path[i]];
    }
    return node;
  }

  for (const item of items) {
    const node: TreeNode = { ...item, children: [] };
    const lvl = item.lvl;

    // Pop stack entries where parent level >= current level
    while (stack.length > 0) {
      const parentPath = stack[stack.length - 1];
      const parent = getNode(parentPath);
      if (parent.lvl >= lvl) {
        stack.pop();
      } else {
        break;
      }
    }

    if (stack.length === 0) {
      // No parent - add as root
      const idx = result.length;
      result.push(node);
      stack.push([idx]);
    } else {
      // Add as child of current parent
      const parentPath = stack[stack.length - 1];
      const parent = getNode(parentPath);
      parent.children.push(node);
      const newChildIdx = parent.children.length - 1;
      const childPath = [...parentPath, newChildIdx];
      stack.push(childPath);
    }
  }

  return result;
}

// ============================================================
// Compute "last child" set
// ============================================================

/**
 * Determines which elements are "last children" at their level.
 * An element is a last child if:
 * - the next element has a lower level (going back up the tree), OR
 * - the next element has level 0 (new root), OR
 * - it is the last element in the list
 */
function computeLastChilds(elements: FhirElement[]): Set<string> {
  const lastChildPaths = new Set<string>();

  for (let idx = 0; idx < elements.length; idx++) {
    const el = elements[idx];
    const nextEl = elements[idx + 1];
    const nextLvl = nextEl?.lvl;

    if (
      nextLvl === undefined || // last element
      nextLvl === 0 || // next is root
      nextLvl < el.lvl // going back up
    ) {
      lastChildPaths.add(el.path || el.name || "");
    }
  }

  return lastChildPaths;
}

// ============================================================
// HTML Escaping
// ============================================================

function escapeHtml(str: string): string {
  return str
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;");
}

// ============================================================
// Cell Renderers
// ============================================================

/**
 * Renders the name cell with appropriate icon
 */
function nameCell(element: FhirElement): string {
  const icon = typeIcon(element);
  const name = element.name || element.path || "";
  const suffix = element["union?"] ? "[x]" : "";
  return `<div class="flex pt-2 pb-1 ml-1"><div class="pt-[1px]">${icon}</div><div class="pl-2">${escapeHtml(name)}${suffix}</div></div>`;
}

/**
 * Renders the cardinality cell (e.g., "0..1", "0..*", "1..1")
 */
function cardinalityCell(element: FhirElement): string {
  const min = element.min ?? 0;
  const max = element.max ?? 1;
  return `<div class="flex flex-row h-full font-mono pt-2">${min}..${max}</div>`;
}

/**
 * Renders the type cell
 */
function typeCell(element: FhirElement): string {
  return `<div class="flex flex-row h-full pt-2">${escapeHtml(element.type || "")}</div>`;
}

/**
 * Renders the description cell.
 * Applies basic inline markdown (bold, code, links).
 */
function descriptionCell(element: FhirElement): string {
  if (!element.desc) return "";
  const html = simpleInlineMarkdown(element.desc);
  return `<div><div>${html}</div></div>`;
}

/**
 * Simple inline markdown parser for descriptions.
 * Handles **bold**, `code`, and [links](url).
 */
function simpleInlineMarkdown(text: string): string {
  let result = escapeHtml(text);
  // Bold
  result = result.replace(/\*\*(.+?)\*\*/g, "<strong>$1</strong>");
  // Inline code
  result = result.replace(/`(.+?)`/g, '<code class="text-[11px]">$1</code>');
  // Links
  result = result.replace(
    /\[([^\]]+)\]\(([^)]+)\)/g,
    '<a href="$2" class="text-brand hover:underline">$1</a>'
  );
  return result;
}

// ============================================================
// Tree Node Rendering
// ============================================================

/**
 * Recursively renders a tree node with proper indentation and connecting lines.
 */
function renderTreeNode(
  element: TreeNode,
  lastChilds: Set<string>
): string {
  const elementPath = element.path || element.name || "";
  const isLastChild = lastChilds.has(elementPath);

  if (element.children.length === 0) {
    // Leaf node
    const indentSpans = renderIndentSpans(element.lvl, isLastChild);

    const coverDiv = isLastChild
      ? `<div class="relative -left-[15px] h-full -top-[10px] border-l border-surface group-even:border-surface-alt"></div>`
      : "";

    return `<tr class="group"><td class="flex h-full pl-[15px] py-0 px-4 align-top"><div class="element flex h-full">${indentSpans}</div><div class="relative">${nameCell(element)}${coverDiv}</div></td><td class="px-4 py-0 align-top">${cardinalityCell(element)}</td><td class="px-4 py-0 align-top">${typeCell(element)}</td><td class="px-4 pt-2 pb-0 align-top text-[12px]">${descriptionCell(element)}</td></tr>`;
  }

  // Node with children
  const indentSpans = renderIndentSpansParent(element.lvl);

  const verticalLine =
    element.lvl !== 0
      ? `<div class="ml-[10px] h-[calc(100%-6px)] border-l border-dotted border-outline-tree"></div>`
      : "";

  let html = `<tr class="group"><td class="flex h-full pl-[15px] py-0 px-4 align-top"><div class="element flex">${indentSpans}</div><div class="relative">${nameCell(element)}${verticalLine}</div></td><td class="px-4 py-0 align-top">${cardinalityCell(element)}</td><td class="px-4 py-0 align-top">${typeCell(element)}</td><td class="px-4 pt-2 pb-0 align-top text-[12px]">${descriptionCell(element)}</td></tr>`;

  for (const child of element.children) {
    html += renderTreeNode(child, lastChilds);
  }

  return html;
}

/**
 * Render indent spans for a leaf node.
 * Each span represents one level of indentation with a vertical dotted line.
 * The last span at the element's own level gets "last-li" class if it's a last child.
 */
function renderIndentSpans(lvl: number, isLastChild: boolean): string {
  let html = "";
  for (let i = 0; i < lvl; i++) {
    const isLast = isLastChild && i === lvl - 1;
    const cls = `block li w-[15px] h-auto${isLast ? " last-li" : ""}`;
    html += `<span class="${cls}"></span>`;
  }
  return html;
}

/**
 * Render indent spans for a parent node (no last-li handling).
 */
function renderIndentSpansParent(lvl: number): string {
  let html = "";
  for (let i = 0; i < lvl; i++) {
    html += `<span class="block li w-[15px]"></span>`;
  }
  return html;
}

// ============================================================
// Main Render Function
// ============================================================

/**
 * Renders a FHIR structure table from JSON content.
 *
 * @param jsonContent - JSON string containing an array of FHIR elements
 * @param resourceType - Optional resource type name; if provided, adds a root row
 *                        and increments all element levels by 1
 * @returns HTML string for the complete table
 */
export function renderFhirStructureTable(
  jsonContent: string,
  resourceType?: string
): string {
  let elements: FhirElement[];
  try {
    elements = JSON.parse(jsonContent);
  } catch {
    return `<div class="text-red-500 p-4 border border-red-300 rounded">Failed to parse FHIR structure table JSON</div>`;
  }

  if (!Array.isArray(elements)) {
    return `<div class="text-red-500 p-4 border border-red-300 rounded">FHIR structure table content must be a JSON array</div>`;
  }

  // If resourceType is provided, increment all levels by 1 to nest under root
  const adjustedElements: FhirElement[] = resourceType
    ? elements.map((el) => ({ ...el, lvl: el.lvl + 1 }))
    : elements;

  // Compute which elements are "last children" before nesting
  const lastChilds = computeLastChilds(adjustedElements);

  // Nest into tree
  const nestedElements = nestByLevel(adjustedElements);

  // Build table HTML
  let tbody = "";

  // Resource root row (if resourceType provided)
  if (resourceType) {
    tbody += `<tr class="group"><td class="flex h-full pl-[15px] py-0 px-4 align-top"><div class="element flex"></div><div class="relative"><div class="flex pt-2 pb-1 ml-1"><div class="pt-[1px]">${resourceIcon()}</div><div class="pl-2 font-medium">${escapeHtml(resourceType)}</div></div><div class="ml-[10px] h-[calc(100%-6px)] border-l border-dotted border-outline-tree"></div></div></td><td class="px-4 py-0 align-top"></td><td class="px-4 py-0 align-top"></td><td class="px-4 pt-2 pb-0 align-top"></td></tr>`;
  }

  // Render all top-level tree nodes
  for (const node of nestedElements) {
    tbody += renderTreeNode(node, lastChilds);
  }

  return `<table class="fhir-structure w-full font-sans text-[12px] font-normal border border-outline border-separate border-spacing-0"><thead><tr class="sticky top-0 z-50"><th class="px-4 py-2 text-left font-normal bg-surface-alt text-on-surface-strong">Name</th><th class="px-4 py-2 text-left font-normal bg-surface-alt text-on-surface-strong">Card.</th><th class="px-4 py-2 text-left font-normal bg-surface-alt text-on-surface-strong">Type</th><th class="px-4 py-2 text-left font-normal bg-surface-alt text-on-surface-strong">Description</th></tr></thead><tbody class="tree">${tbody}</tbody></table>`;
}
