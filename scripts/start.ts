#!/usr/bin/env bun
/**
 * Production server script
 * - No hot reload
 * - Optimized for production
 */

const PORT = process.env.PORT || "4444";

console.log(`\x1b[32m→\x1b[0m Starting production server on port ${PORT}`);

// Import and run server
import("../src/server.ts");
