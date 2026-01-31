/**
 * Session management using database-backed storage
 */

import type { Context, SessionUser } from "../context";
import type { UserRole } from "../types";

/**
 * Generate a random session ID
 */
function generateSessionId(): string {
  return crypto.randomUUID();
}

/**
 * Parse cookies from request
 */
function parseCookies(cookieHeader: string | null): Record<string, string> {
  if (!cookieHeader) return {};

  return cookieHeader.split(";").reduce(
    (cookies, cookie) => {
      const [name, value] = cookie.trim().split("=");
      if (name && value) {
        cookies[name] = decodeURIComponent(value);
      }
      return cookies;
    },
    {} as Record<string, string>
  );
}

/**
 * Get session from request
 */
export async function getSession(ctx: Context, req: Request): Promise<SessionUser | undefined> {
  const cookies = parseCookies(req.headers.get("Cookie"));
  const sessionId = cookies["session_id"];

  if (!sessionId) return undefined;

  try {
    // Get session from database
    const [session] = await ctx.db`
      SELECT data, expires_at
      FROM user_sessions
      WHERE id = ${sessionId}
      AND expires_at > NOW()
    `;

    if (!session) return undefined;

    // Parse JSON if data is a string
    const sessionData = typeof session.data === "string" ? JSON.parse(session.data) : session.data;

    return sessionData as SessionUser;
  } catch (error) {
    console.error("Error getting session:", error);
    return undefined;
  }
}

/**
 * Create a new session for a user
 */
export async function createSession(ctx: Context, userId: number): Promise<string> {
  // Get user details
  const [user] = await ctx.db`
    SELECT id, email, username, role, avatar_url
    FROM users
    WHERE id = ${userId}
  `;

  if (!user) {
    throw new Error("User not found");
  }

  // Create session user object
  const sessionUser: SessionUser = {
    id: user.id!,
    email: user.email,
    username: user.username,
    role: user.role as UserRole,
    avatarUrl: user.avatar_url || undefined,
  };

  // Generate session ID
  const sessionId = generateSessionId();

  // Store session in database (expires in 7 days)
  const expiresAt = new Date(Date.now() + 7 * 24 * 60 * 60 * 1000);
  await ctx.db`
    INSERT INTO user_sessions (id, user_id, data, expires_at)
    VALUES (${sessionId}, ${userId}, ${JSON.stringify(sessionUser)}, ${expiresAt})
  `;

  return sessionId;
}

/**
 * Destroy a session
 */
export async function destroySession(ctx: Context, sessionId: string): Promise<void> {
  await ctx.db`DELETE FROM user_sessions WHERE id = ${sessionId}`;
}

/**
 * Create session cookie header
 */
export function createSessionCookie(sessionId: string): string {
  const isProduction = process.env.NODE_ENV === "production";
  const secure = isProduction ? "; Secure" : "";
  return `session_id=${sessionId}; HttpOnly; Path=/; Max-Age=${60 * 60 * 24 * 7}${secure}`; // 7 days
}

/**
 * Create cookie to clear session
 */
export function clearSessionCookie(): string {
  return `session_id=; HttpOnly; Path=/; Max-Age=0`;
}

/**
 * Get session ID from request
 */
export function getSessionId(req: Request): string | undefined {
  const cookies = parseCookies(req.headers.get("Cookie"));
  return cookies["session_id"];
}
