#!/usr/bin/env bun
/**
 * List all available routes
 */

import { readdirSync } from "fs";
import { join } from "path";

const pagesDir = join(import.meta.dir, "../src/pages");

function getRoutes(dir: string, prefix = ""): string[] {
  const routes: string[] = [];
  const entries = readdirSync(dir, { withFileTypes: true });

  for (const entry of entries) {
    if (entry.isDirectory()) {
      routes.push(...getRoutes(join(dir, entry.name), `${prefix}/${entry.name}`));
    } else if (entry.name.endsWith(".tsx")) {
      const name = entry.name.replace(".tsx", "");
      if (name === "index") {
        routes.push(prefix || "/");
      } else {
        routes.push(`${prefix}/${name}`);
      }
    }
  }

  return routes;
}

console.log("\x1b[36m");
console.log("Available Routes:");
console.log("═════════════════\x1b[0m\n");

const routes = getRoutes(pagesDir).sort();

for (const route of routes) {
  console.log(`  \x1b[32m→\x1b[0m ${route}`);
}

console.log(`\n\x1b[90mTotal: ${routes.length} routes\x1b[0m`);
