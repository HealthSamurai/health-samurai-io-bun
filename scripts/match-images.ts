#!/usr/bin/env bun
/**
 * Match Webflow node assetIds with downloaded images
 * Creates a mapping file for use in page generation
 */

import * as fs from "fs";
import * as path from "path";

const NODES_FILE = "./webflow/fhir-server-nodes.json";
const DOWNLOADED_DIR = "./public/assets/images/downloaded";
const OUTPUT_FILE = "./webflow/image-mapping.json";

interface ImageNode {
  type: string;
  id: string;
  image?: {
    alt: string;
    assetId: string;
  };
}

function main() {
  // Load nodes
  if (!fs.existsSync(NODES_FILE)) {
    console.error(`❌ Nodes file not found: ${NODES_FILE}`);
    return;
  }

  const nodes: ImageNode[] = JSON.parse(fs.readFileSync(NODES_FILE, "utf-8"));
  const imageNodes = nodes.filter((n) => n.type === "image" && n.image?.assetId);

  console.log(`Found ${imageNodes.length} image nodes in Webflow export\n`);

  // Get downloaded files
  if (!fs.existsSync(DOWNLOADED_DIR)) {
    console.error(`❌ Downloaded images directory not found: ${DOWNLOADED_DIR}`);
    return;
  }

  const downloadedFiles = fs.readdirSync(DOWNLOADED_DIR);
  console.log(`Found ${downloadedFiles.length} downloaded images\n`);

  // Create mapping
  const mapping: Record<string, { localPath: string; alt: string; nodeId: string }> = {};
  let matched = 0;
  let unmatched = 0;

  for (const node of imageNodes) {
    const assetId = node.image!.assetId;
    const alt = node.image!.alt;

    // Find matching file (starts with assetId)
    const matchingFile = downloadedFiles.find((f) => f.startsWith(assetId));

    if (matchingFile) {
      mapping[assetId] = {
        localPath: `/assets/images/downloaded/${matchingFile}`,
        alt: alt === "__wf_reserved_inherit" ? "" : alt,
        nodeId: node.id,
      };
      matched++;
    } else {
      console.log(`⚠️  No match for assetId: ${assetId} (alt: ${alt})`);
      unmatched++;
    }
  }

  // Save mapping
  fs.writeFileSync(OUTPUT_FILE, JSON.stringify(mapping, null, 2));

  console.log(`\n================================`);
  console.log(`✅ Matched: ${matched}`);
  console.log(`⚠️  Unmatched: ${unmatched}`);
  console.log(`📁 Mapping saved to: ${OUTPUT_FILE}`);

  // Print sample mapping
  console.log(`\nSample mapping entries:`);
  const entries = Object.entries(mapping).slice(0, 5);
  for (const [assetId, info] of entries) {
    console.log(`  ${assetId}:`);
    console.log(`    path: ${info.localPath}`);
    console.log(`    alt: ${info.alt || "(none)"}`);
  }

  // Print useful exports for page generation
  console.log(`\n📋 TypeScript mapping for pages:\n`);
  console.log("const imageAssets: Record<string, string> = {");
  for (const [assetId, info] of Object.entries(mapping)) {
    if (info.alt && info.alt !== "__wf_reserved_inherit") {
      const key = info.alt.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/-+/g, "-").replace(/^-|-$/g, "");
      if (key) {
        console.log(`  "${key}": "${info.localPath}",`);
      }
    }
  }
  console.log("};");
}

main();
