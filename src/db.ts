import { SQL } from "bun";

// Get DATABASE_URL - fail fast if not set
const DATABASE_URL = process.env.DATABASE_URL;
if (!DATABASE_URL) {
  throw new Error("DATABASE_URL environment variable is required");
}

console.log("[DB] Initializing with:", DATABASE_URL.replace(/:[^:@]+@/, ":***@"));

// Create SQL connection - Bun.SQL is lazy, actual connection happens on first query
export const db = new SQL(DATABASE_URL);

let isClosed = false;

export async function closeDb(): Promise<void> {
  if (isClosed) return;
  isClosed = true;
  try {
    await db.close();
    console.log("[DB] Connection closed");
  } catch (err) {
    console.error("[DB] Connection close failed:", err);
  }
}

// Test connection on startup
db`SELECT 1 as connected`.then(() => {
  console.log("[DB] Connection test successful");
}).catch((err: Error) => {
  console.error("[DB] Connection test failed:", err.message);
});
