/**
 * Documentation Engine
 *
 * Serves GitBook-style markdown documentation for multiple products.
 * Each product has its own GitHub repository with docs.
 */

export { loadConfig, getProductConfig, getAllProducts } from "./config";
export type { ProductConfig, DocsConfig } from "./config";

export {
  getState,
  isInitialized,
  initState,
  getProductState,
  setProductState,
  createEmptyProductState,
  markInitialized,
  clearState,
} from "./state";
export type {
  DocsState,
  ProductState,
  NavigationItem,
  NavigationSection,
  TocItem,
  RenderedPage,
} from "./state";

export {
  cloneOrFetch,
  getGitHead,
  getLastmod,
  getProductDir,
  getDocsDir,
  getAssetsDir,
  repoExists,
  isDevMode,
  ensureContentDir,
} from "./git";

export {
  createDocsContext,
  findNavPath,
  findPrevNext,
  flattenNavigation,
} from "./context";
export type { DocsContext } from "./context";

export { initializeDocs, reloadProduct } from "./init";

// Markdown parsing
export { initHighlighter, parseMarkdown } from "./markdown";
export type { ParsedMarkdown } from "./markdown";

// Request handling
export { handleDocsRequest } from "./handler";

// Components
export { DocsLayout } from "./components/DocsLayout";
