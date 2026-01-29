#!/usr/bin/env bun
/**
 * Download images from health-samurai.io and save them locally
 *
 * Usage:
 *   bun scripts/download-images.ts                     # Download predefined images
 *   bun scripts/download-images.ts --from-url <url>    # Extract and download images from URL
 *   bun scripts/download-images.ts --list-local        # List all local images
 *   bun scripts/download-images.ts --dry-run           # Show what would be downloaded
 */

import * as fs from "fs";
import * as path from "path";
import { $ } from "bun";

const ASSETS_DIR = "./public/assets/images";
const BASE_URL = "https://www.health-samurai.io";

// Maps feature names to local icon paths (already existing)
const LOCAL_ICONS: Record<string, string> = {
  "fhir-database": "/assets/images/icons/database.svg",
  "api": "/assets/images/icons/api.svg",
  "artifact-registry": "/assets/images/icons/artifact-registry.svg",
  "access-control": "/assets/images/icons/auth.svg",
  "terminology": "/assets/images/icons/terminology.svg",
  "developer-experience": "/assets/images/icons/sdk.svg",
  "ui": "/assets/images/icons/ui.svg",
};

// Maps illustration names to local paths
const LOCAL_ILLUSTRATIONS: Record<string, string> = {
  "cdr-diagram": "/assets/images/illustrations/cdr-diagram.svg",
  "cds-diagram": "/assets/images/illustrations/cds-diagram.png",
  "portal-diagram": "/assets/images/illustrations/portal-diagram.png",
  "ehr-diagram": "/assets/images/illustrations/ehr-diagram.png",
  "deploy-diagram": "/assets/images/illustrations/deploy-diagram.svg",
  "managed-cloud": "/assets/images/illustrations/managed-cloud.svg",
  "cloud-platform": "/assets/images/illustrations/cloud-platform.svg",
  "on-premise": "/assets/images/illustrations/on-premise.svg",
  "pricing-dev": "/assets/images/illustrations/pricing-dev.svg",
  "pricing-core": "/assets/images/illustrations/pricing-core.svg",
  "pricing-enterprise": "/assets/images/illustrations/pricing-enterprise.svg",
};

// Images that need to be downloaded (URLs that work)
const IMAGES_TO_DOWNLOAD: Record<string, string> = {
  // Add working URLs here as they are discovered
};

async function downloadImage(url: string, localPath: string): Promise<boolean> {
  try {
    const fullPath = path.join(ASSETS_DIR, localPath);
    const dir = path.dirname(fullPath);

    if (!fs.existsSync(dir)) {
      fs.mkdirSync(dir, { recursive: true });
    }

    if (fs.existsSync(fullPath)) {
      console.log(`  ⏭️  Exists: ${localPath}`);
      return true;
    }

    // Try with curl which sometimes works better
    const result = await $`curl -sL -o ${fullPath} -H "User-Agent: Mozilla/5.0" -H "Referer: https://www.health-samurai.io/" "${url}"`.quiet();

    if (fs.existsSync(fullPath) && fs.statSync(fullPath).size > 0) {
      console.log(`  ✅ Downloaded: ${localPath}`);
      return true;
    } else {
      console.log(`  ❌ Failed: ${url}`);
      if (fs.existsSync(fullPath)) fs.unlinkSync(fullPath);
      return false;
    }
  } catch (error) {
    console.error(`  ❌ Error: ${url}`, error);
    return false;
  }
}

async function extractImagesFromUrl(pageUrl: string): Promise<string[]> {
  console.log(`\nFetching page: ${pageUrl}`);

  try {
    const result = await $`curl -sL -H "User-Agent: Mozilla/5.0" "${pageUrl}"`.text();

    // Extract image URLs from the HTML
    const imgRegex = /src=["']([^"']*cdn\.prod\.website-files\.com[^"']*)["']/gi;
    const urls: string[] = [];
    let match;

    while ((match = imgRegex.exec(result)) !== null) {
      urls.push(match[1]);
    }

    // Also check for background images
    const bgRegex = /url\(["']?([^"')]*cdn\.prod\.website-files\.com[^"')]*)["']?\)/gi;
    while ((match = bgRegex.exec(result)) !== null) {
      urls.push(match[1]);
    }

    return [...new Set(urls)]; // Remove duplicates
  } catch (error) {
    console.error("Failed to fetch page:", error);
    return [];
  }
}

function listLocalImages(): void {
  console.log("\n📁 Local Images Available:\n");

  console.log("Feature Icons:");
  for (const [name, path] of Object.entries(LOCAL_ICONS)) {
    const exists = fs.existsSync(`./public${path}`);
    console.log(`  ${exists ? '✓' : '✗'} ${name}: ${path}`);
  }

  console.log("\nIllustrations:");
  for (const [name, path] of Object.entries(LOCAL_ILLUSTRATIONS)) {
    const exists = fs.existsSync(`./public${path}`);
    console.log(`  ${exists ? '✓' : '✗'} ${name}: ${path}`);
  }

  console.log("\n📂 All images in assets:");
  const walkDir = (dir: string, prefix = ""): void => {
    if (!fs.existsSync(dir)) return;
    const files = fs.readdirSync(dir);
    for (const file of files) {
      const fullPath = path.join(dir, file);
      const stat = fs.statSync(fullPath);
      if (stat.isDirectory()) {
        console.log(`${prefix}📁 ${file}/`);
        walkDir(fullPath, prefix + "  ");
      } else if (/\.(svg|png|jpg|jpeg|webp|gif)$/i.test(file)) {
        console.log(`${prefix}  ${file}`);
      }
    }
  };
  walkDir(ASSETS_DIR);
}

function generateIconMapping(): void {
  console.log("\n📋 Icon Mapping for fhir-server page:\n");
  console.log("Copy this to your page component:\n");
  console.log("```typescript");
  console.log("const featureIcons: Record<string, string> = {");
  for (const [name, path] of Object.entries(LOCAL_ICONS)) {
    console.log(`  "${name}": "${path}",`);
  }
  console.log("};");
  console.log("```");
}

async function main(): Promise<void> {
  const args = process.argv.slice(2);

  console.log("🖼️  Image Manager for Health Samurai");
  console.log("=====================================");

  if (args.includes("--list-local")) {
    listLocalImages();
    return;
  }

  if (args.includes("--mapping")) {
    generateIconMapping();
    return;
  }

  const fromUrlIndex = args.indexOf("--from-url");
  if (fromUrlIndex !== -1 && args[fromUrlIndex + 1]) {
    const pageUrl = args[fromUrlIndex + 1];
    const urls = await extractImagesFromUrl(pageUrl);
    console.log(`\nFound ${urls.length} CDN images on page:\n`);
    urls.forEach((url, i) => {
      const filename = url.split('/').pop() || 'unknown';
      console.log(`${i + 1}. ${filename}`);
      console.log(`   ${url}\n`);
    });
    return;
  }

  if (args.includes("--dry-run")) {
    console.log("\nDRY RUN - Images that would be downloaded:\n");
    for (const [localPath, url] of Object.entries(IMAGES_TO_DOWNLOAD)) {
      const exists = fs.existsSync(path.join(ASSETS_DIR, localPath));
      console.log(`  ${exists ? '✓ exists' : '○ missing'}: ${localPath}`);
    }
    return;
  }

  // Default: download any missing images
  const total = Object.keys(IMAGES_TO_DOWNLOAD).length;
  if (total === 0) {
    console.log("\nNo images configured for download.");
    console.log("Use --from-url <url> to discover images from a page.");
    console.log("Use --list-local to see available local images.");
    console.log("Use --mapping to generate icon mapping code.");
    return;
  }

  console.log(`\nDownloading ${total} images...\n`);

  let success = 0;
  for (const [localPath, url] of Object.entries(IMAGES_TO_DOWNLOAD)) {
    if (await downloadImage(url, localPath)) {
      success++;
    }
  }

  console.log(`\n✅ Downloaded: ${success}/${total}`);
}

main().catch(console.error);
