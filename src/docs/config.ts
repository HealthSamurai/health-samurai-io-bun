import { parse } from "yaml";
import path from "path";

// Project root directory (where products.yaml lives relative to)
const PROJECT_ROOT = process.cwd();

// Base directory for docs repos. In dev mode with convention: {DOCS_REPOS_PATH}/{id}-docs
const DOCS_REPOS_PATH = process.env.DOCS_REPOS_PATH;

export interface ProductConfig {
  id: string;
  name: string;
  repo: string; // Full GitHub repo path (e.g., health-samurai/aidbox-docs)
  path: string; // URL path prefix, e.g. /docs/aidbox
  branch: string;
  docs: string; // Markdown files location within repo
  assets: string; // Images location within repo
  summary: string; // Navigation file
  redirects: string; // Redirects file
  llms: string; // llms.txt location
  meilisearchIndex: string;
  webhookSecret?: string;
  devPath?: string; // Local path for dev mode (overrides git clone)
}

export interface DocsConfig {
  products: ProductConfig[];
}

let cachedConfig: DocsConfig | null = null;

export async function loadConfig(): Promise<DocsConfig> {
  if (cachedConfig) return cachedConfig;

  const configPath = process.env.DOCS_CONFIG_PATH || "./src/data/products.yaml";
  const file = Bun.file(configPath);

  if (!(await file.exists())) {
    throw new Error(`Products config not found: ${configPath}`);
  }

  const content = await file.text();
  const raw = parse(content);

  const defaults = raw.defaults || {};

  const isDevMode = process.env.DOCS_DEV_MODE === "true";

  cachedConfig = {
    products: raw.products.map((p: any) => {
      // Resolve dev path: explicit local-path > DOCS_REPOS_PATH convention > none
      let devPath: string | undefined;
      if (isDevMode) {
        if (p["local-path"]) {
          // Explicit override: resolve relative to DOCS_REPOS_PATH or PROJECT_ROOT
          const base = DOCS_REPOS_PATH || PROJECT_ROOT;
          devPath = path.resolve(base, p["local-path"]);
        } else if (DOCS_REPOS_PATH) {
          // Convention: {DOCS_REPOS_PATH}/{id}-docs
          devPath = path.resolve(DOCS_REPOS_PATH, `${p.id}-docs`);
        }
      }

      return {
        id: p.id,
        name: p.name,
        repo: p.repo,
        path: `/docs/${p.id}`,
        branch: p.branch || defaults.branch || "main",
        docs: p.docs || defaults.docs || "./docs",
        assets: p.assets || defaults.assets || "./assets",
        summary: p.summary || defaults.summary || "SUMMARY.md",
        redirects: p.redirects || defaults.redirects || "redirects.yaml",
        llms: p.llms || defaults.llms || "llms.txt",
        meilisearchIndex: p["meilisearch-index"] || p.id,
        // Webhook secret from env var by convention: WEBHOOK_SECRET_AIDBOX
        webhookSecret: process.env[`WEBHOOK_SECRET_${p.id.toUpperCase()}`],
        // Dev mode path resolved from local-path in yaml
        devPath,
      };
    }),
  };

  return cachedConfig;
}

export function getProductConfig(productId: string): ProductConfig | undefined {
  if (!cachedConfig) {
    throw new Error("Config not loaded. Call loadConfig() first.");
  }
  return cachedConfig.products.find((p) => p.id === productId);
}

export function getAllProducts(): ProductConfig[] {
  if (!cachedConfig) {
    throw new Error("Config not loaded. Call loadConfig() first.");
  }
  return cachedConfig.products;
}

export function clearConfigCache(): void {
  cachedConfig = null;
}
