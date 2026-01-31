import { Pool } from "pg";

// Connection URL
const DATABASE_URL = process.env.DATABASE_URL ||
  "postgres://healthsamurai:healthsamurai@localhost:5436/healthsamurai";

console.log("[DB] Connecting to:", DATABASE_URL.replace(/:[^:@]+@/, ":***@"));

// Create a connection pool using pg
const pool = new Pool({
  connectionString: DATABASE_URL,
  max: 10,
  idleTimeoutMillis: 30000,
  connectionTimeoutMillis: 10000,
});

// Test connection on startup
pool.query("SELECT 1 as connected").then(() => {
  console.log("[DB] Connection successful");
}).catch((err: Error) => {
  console.error("[DB] Connection failed:", err.message);
});

// Tagged template literal wrapper to maintain compatibility with existing code
export const db = async (strings: TemplateStringsArray, ...values: unknown[]) => {
  // Build the query with $1, $2, etc. placeholders
  let query = strings[0];
  for (let i = 0; i < values.length; i++) {
    query += `$${i + 1}${strings[i + 1]}`;
  }

  const result = await pool.query(query, values);
  return result.rows;
};

// Also export the pool for direct access if needed
export { pool };
