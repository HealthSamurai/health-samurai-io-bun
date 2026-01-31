import { SQL } from "bun";

// Connection URL
const DATABASE_URL = process.env.DATABASE_URL ||
  "postgres://healthsamurai:healthsamurai@localhost:5436/healthsamurai";

console.log("[DB] Connecting to:", DATABASE_URL.replace(/:[^:@]+@/, ":***@"));

// Create connection using URL directly (simpler, less error-prone)
export const db = new SQL(DATABASE_URL);

// Test connection on startup
db`SELECT 1 as connected`.then(() => {
  console.log("[DB] Connection successful");
}).catch((err: Error) => {
  console.error("[DB] Connection failed:", err.message);
});
