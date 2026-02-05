import type { DocsConfig, ProductConfig } from "./config";

export interface TocItem {
  id: string;
  text: string;
  level: number;
  children?: TocItem[];
}

export interface NavigationItem {
  title: string;
  href: string;
  children?: NavigationItem[];
  isCrossSection?: boolean;
  isExternal?: boolean;
}

export interface NavigationSection {
  title: string;
  children: NavigationItem[];
}

export interface ParsedMarkdown {
  filepath: string;
  title: string;
  description: string;
  html: string;
  toc: TocItem[];
  schemaType?: "howto" | "faq" | "article" | null;
}

export interface RenderedPage {
  filepath: string;
  uri: string;
  title: string;
  description: string;
  html: string;
  toc: TocItem[];
  lastmod?: string;
  schemaType?: "howto" | "faq" | "article" | null;
}

export interface ProductState {
  // Parsed SUMMARY.md as navigation tree
  navigation: NavigationSection[];

  // URI → filepath mapping (e.g., "/docs/aidbox/api/rest" → "api/rest.md")
  uriToFile: Map<string, string>;

  // filepath → URI mapping (reverse)
  fileToUri: Map<string, string>;

  // Redirects from redirects.yaml
  redirects: Map<string, string>;

  // Raw markdown content cache
  mdFiles: Map<string, string>;

  // Parsed markdown cache
  parsedMarkdown: Map<string, ParsedMarkdown>;

  // Pre-rendered HTML cache (production only)
  renderedPages: Map<string, RenderedPage>;

  // Git lastmod timestamps
  lastmod: Map<string, string>;

  // Sitemap XML content
  sitemap: string;

  // llms.txt content from repo (if present)
  llmsTxt?: string;

  // Flat navigation for prev/next
  flatNavigation: NavigationItem[];

  // Last indexed timestamp
  lastIndexed?: Date;
}

export interface ExamplesState {
  items: any[];
  lastUpdated: Date | null;
}

export interface DocsState {
  config: DocsConfig;
  products: Map<string, ProductState>;
  examples: ExamplesState;
  cache: {
    sitemapIndex: string;
    gitHeads: Map<string, string>;
    appVersion: string;
    initialized: boolean;
  };
}

// Global state atom
let state: DocsState | null = null;

export function getState(): DocsState {
  if (!state) throw new Error("Docs state not initialized");
  return state;
}

export function isInitialized(): boolean {
  return state?.cache.initialized ?? false;
}

export function initState(config: DocsConfig): void {
  state = {
    config,
    products: new Map(),
    examples: { items: [], lastUpdated: null },
    cache: {
      sitemapIndex: "",
      gitHeads: new Map(),
      appVersion: process.env.VERSION || "dev",
      initialized: false,
    },
  };
}

export function getProductState(productId: string): ProductState | undefined {
  return state?.products.get(productId);
}

export function setProductState(productId: string, productState: ProductState): void {
  if (!state) throw new Error("Docs state not initialized");
  state.products.set(productId, productState);
}

export function createEmptyProductState(): ProductState {
  return {
    navigation: [],
    uriToFile: new Map(),
    fileToUri: new Map(),
    redirects: new Map(),
    mdFiles: new Map(),
    parsedMarkdown: new Map(),
    renderedPages: new Map(),
    lastmod: new Map(),
    sitemap: "",
    flatNavigation: [],
  };
}

export function markInitialized(): void {
  if (state) {
    state.cache.initialized = true;
  }
}

export function setExamplesState(items: any[]): void {
  if (state) {
    state.examples = { items, lastUpdated: new Date() };
  }
}

export function clearState(): void {
  state = null;
}
