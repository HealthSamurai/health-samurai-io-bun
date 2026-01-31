/**
 * Google OAuth 2.0 Authentication
 * Restricted to @health-samurai.io domain
 */

import { db } from "../db";
import { createSession, createSessionCookie } from "../middleware/session";
import { BareLayout } from "../components/BareLayout";
import { getAnalyticsSessionId, linkSessionToUser } from "../analytics";

// OAuth configuration from environment
const GOOGLE_CLIENT_ID = process.env.GOOGLE_CLIENT_ID || "";
const GOOGLE_CLIENT_SECRET = process.env.GOOGLE_CLIENT_SECRET || "";
const GOOGLE_REDIRECT_URI = process.env.GOOGLE_REDIRECT_URI || "http://localhost:4444/auth/google/callback";
const ALLOWED_DOMAIN = process.env.GOOGLE_ALLOWED_DOMAIN || "health-samurai.io";

// Google OAuth endpoints
const GOOGLE_AUTH_URL = "https://accounts.google.com/o/oauth2/v2/auth";
const GOOGLE_TOKEN_URL = "https://oauth2.googleapis.com/token";
const GOOGLE_USERINFO_URL = "https://www.googleapis.com/oauth2/v2/userinfo";

interface GoogleUserInfo {
  id: string;
  email: string;
  verified_email: boolean;
  name: string;
  given_name: string;
  family_name: string;
  picture: string;
  hd?: string; // hosted domain (for Google Workspace users)
}

/**
 * Render error page
 */
function renderError(message: string): string {
  const content = `
    <div class="min-h-screen flex items-center justify-center py-12 px-4">
      <div class="max-w-md w-full space-y-8">
        <div class="text-center">
          <h1 class="text-2xl font-bold text-gray-900 mb-4">Authentication Error</h1>
          <div class="rounded-md bg-red-50 p-4 mb-6">
            <div class="flex">
              <div class="flex-shrink-0">
                <svg class="h-5 w-5 text-red-400" viewBox="0 0 20 20" fill="currentColor">
                  <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.28 7.22a.75.75 0 00-1.06 1.06L8.94 10l-1.72 1.72a.75.75 0 101.06 1.06L10 11.06l1.72 1.72a.75.75 0 101.06-1.06L11.06 10l1.72-1.72a.75.75 0 00-1.06-1.06L10 8.94 8.28 7.22z" clip-rule="evenodd" />
                </svg>
              </div>
              <div class="ml-3">
                <p class="text-sm font-medium text-red-800">${message}</p>
              </div>
            </div>
          </div>
          <a href="/login" class="text-primary hover:text-primary-dark">
            &larr; Back to login
          </a>
        </div>
      </div>
    </div>
  `;
  return BareLayout({ title: "Authentication Error", children: content });
}

/**
 * GET /auth/google - Redirect to Google OAuth consent screen
 */
export async function googleLogin(req: Request): Promise<Response> {
  console.log("[OAuth] Starting Google login flow");
  console.log("[OAuth] Config:", {
    clientId: GOOGLE_CLIENT_ID ? `${GOOGLE_CLIENT_ID.substring(0, 20)}...` : "NOT SET",
    redirectUri: GOOGLE_REDIRECT_URI,
    allowedDomain: ALLOWED_DOMAIN,
  });

  if (!GOOGLE_CLIENT_ID) {
    console.error("[OAuth] GOOGLE_CLIENT_ID not configured");
    return new Response(renderError("Google OAuth is not configured. Please set GOOGLE_CLIENT_ID environment variable."), {
      status: 500,
      headers: { "Content-Type": "text/html" },
    });
  }

  // Build Google OAuth URL
  const params = new URLSearchParams({
    client_id: GOOGLE_CLIENT_ID,
    redirect_uri: GOOGLE_REDIRECT_URI,
    response_type: "code",
    scope: "openid email profile",
    access_type: "offline",
    prompt: "select_account",
    hd: ALLOWED_DOMAIN, // Restrict to specified domain
  });

  const authUrl = `${GOOGLE_AUTH_URL}?${params.toString()}`;
  console.log("[OAuth] Redirecting to Google consent screen");

  return new Response(null, {
    status: 302,
    headers: { Location: authUrl },
  });
}

/**
 * GET /auth/google/callback - Handle OAuth callback from Google
 */
export async function googleCallback(req: Request): Promise<Response> {
  const url = new URL(req.url);
  const code = url.searchParams.get("code");
  const error = url.searchParams.get("error");

  console.log("[OAuth] Callback received", { hasCode: !!code, error });

  // Handle errors from Google
  if (error) {
    console.log("[OAuth] Error from Google:", error);
    return new Response(renderError(`Google authentication failed: ${error}`), {
      status: 400,
      headers: { "Content-Type": "text/html" },
    });
  }

  if (!code) {
    console.log("[OAuth] No authorization code received");
    return new Response(renderError("No authorization code received from Google"), {
      status: 400,
      headers: { "Content-Type": "text/html" },
    });
  }

  try {
    console.log("[OAuth] Exchanging code for tokens...");
    console.log("[OAuth] Redirect URI:", GOOGLE_REDIRECT_URI);

    // Exchange code for tokens
    const tokenResponse = await fetch(GOOGLE_TOKEN_URL, {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: new URLSearchParams({
        code,
        client_id: GOOGLE_CLIENT_ID,
        client_secret: GOOGLE_CLIENT_SECRET,
        redirect_uri: GOOGLE_REDIRECT_URI,
        grant_type: "authorization_code",
      }),
    });

    if (!tokenResponse.ok) {
      const errorData = await tokenResponse.text();
      console.error("[OAuth] Token exchange failed:", tokenResponse.status, errorData);
      console.error("[OAuth] Request details:", {
        code: code?.substring(0, 20) + "...",
        client_id: GOOGLE_CLIENT_ID?.substring(0, 30) + "...",
        client_secret_length: GOOGLE_CLIENT_SECRET?.length,
        redirect_uri: GOOGLE_REDIRECT_URI,
      });
      return new Response(renderError(`Failed to exchange authorization code: ${errorData}`), {
        status: 400,
        headers: { "Content-Type": "text/html" },
      });
    }

    const tokens = (await tokenResponse.json()) as { access_token: string; id_token?: string };
    console.log("[OAuth] Token exchange successful");

    // Fetch user info from Google
    console.log("[OAuth] Fetching user info...");
    const userInfoResponse = await fetch(GOOGLE_USERINFO_URL, {
      headers: { Authorization: `Bearer ${tokens.access_token}` },
    });

    if (!userInfoResponse.ok) {
      console.error("[OAuth] Failed to fetch user info:", userInfoResponse.status);
      return new Response(renderError("Failed to fetch user information from Google"), {
        status: 400,
        headers: { "Content-Type": "text/html" },
      });
    }

    const googleUser = (await userInfoResponse.json()) as GoogleUserInfo;
    console.log("[OAuth] User info received:", { email: googleUser.email, id: googleUser.id });

    // Verify email domain
    const emailDomain = googleUser.email.split("@")[1];
    if (emailDomain !== ALLOWED_DOMAIN) {
      console.log("[OAuth] Domain rejected:", emailDomain, "expected:", ALLOWED_DOMAIN);
      return new Response(
        renderError(`Access restricted to @${ALLOWED_DOMAIN} accounts. Your email domain: @${emailDomain}`),
        { status: 403, headers: { "Content-Type": "text/html" } }
      );
    }

    // Find or create user
    console.log("[OAuth] Looking up user by google_id...");
    let user;
    try {
      const users = await db`SELECT * FROM users WHERE google_id = ${googleUser.id}`;
      user = users[0];
    } catch (dbError) {
      console.error("[OAuth] DB error on user lookup:", dbError);
      return new Response(renderError(`Database error: ${dbError instanceof Error ? dbError.message : String(dbError)}`), {
        status: 500,
        headers: { "Content-Type": "text/html" },
      });
    }

    if (!user) {
      console.log("[OAuth] No user found by google_id, checking email...");
      // Check if user exists with same email (for linking accounts)
      const usersByEmail = await db`SELECT * FROM users WHERE email = ${googleUser.email}`;
      user = usersByEmail[0];

      if (user) {
        console.log("[OAuth] Found user by email, linking Google account...");
        // Link Google account to existing user
        await db`
          UPDATE users
          SET google_id = ${googleUser.id}, avatar_url = ${googleUser.picture}, updated_at = CURRENT_TIMESTAMP
          WHERE id = ${user.id}
        `;
      } else {
        console.log("[OAuth] Creating new user...");
        // Create new user
        const username = await generateUniqueUsername(googleUser.email.split("@")[0]);
        const newUsers = await db`
          INSERT INTO users (email, username, google_id, first_name, last_name, avatar_url, is_active, role)
          VALUES (${googleUser.email}, ${username}, ${googleUser.id}, ${googleUser.given_name}, ${googleUser.family_name}, ${googleUser.picture}, true, 'user')
          RETURNING *
        `;
        user = newUsers[0];
        console.log("[OAuth] User created:", user.id);
      }
    } else {
      console.log("[OAuth] Found existing user:", user.id);
      // Update avatar if changed
      if (user.avatar_url !== googleUser.picture) {
        await db`UPDATE users SET avatar_url = ${googleUser.picture}, updated_at = CURRENT_TIMESTAMP WHERE id = ${user.id}`;
      }
    }

    // Check if user is active
    if (user.is_active === false) {
      console.log("[OAuth] User is deactivated:", user.id);
      return new Response(renderError("Your account has been deactivated."), {
        status: 403,
        headers: { "Content-Type": "text/html" },
      });
    }

    // Update last login time
    console.log("[OAuth] Updating last login time...");
    await db`UPDATE users SET last_login_at = CURRENT_TIMESTAMP WHERE id = ${user.id}`;

    // Link anonymous analytics session to authenticated user
    const analyticsSessionId = getAnalyticsSessionId(req);
    await linkSessionToUser(analyticsSessionId, user.id!);

    // Create session
    console.log("[OAuth] Creating session...");
    const sessionId = await createSession(user.id!);
    console.log("[OAuth] Session created, redirecting to home");

    // Redirect to home with session cookie
    return new Response(null, {
      status: 303,
      headers: {
        Location: "/",
        "Set-Cookie": createSessionCookie(sessionId),
      },
    });
  } catch (error) {
    console.error("[OAuth] Unhandled error:", error);
    const errorMessage = error instanceof Error ? error.message : String(error);
    const errorStack = error instanceof Error ? error.stack : "";
    console.error("[OAuth] Error details:", errorMessage, errorStack);
    return new Response(renderError(`Auth error: ${errorMessage}`), {
      status: 500,
      headers: { "Content-Type": "text/html" },
    });
  }
}

/**
 * Generate a unique username by appending numbers if needed
 */
async function generateUniqueUsername(baseUsername: string): Promise<string> {
  let username = baseUsername;
  let counter = 1;

  while (true) {
    const existing = await db`SELECT id FROM users WHERE username = ${username}`;
    if (existing.length === 0) break;
    username = `${baseUsername}${counter}`;
    counter++;
  }

  return username;
}

/**
 * Check if Google OAuth is configured
 */
export function isGoogleOAuthConfigured(): boolean {
  return !!(GOOGLE_CLIENT_ID && GOOGLE_CLIENT_SECRET);
}
