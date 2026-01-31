/**
 * Auth helpers for checking user permissions
 */

import type { SessionUser } from "../context";

const INTERNAL_DOMAIN = "@health-samurai.io";

/**
 * Check if user is a Health Samurai employee (internal user)
 * Used for: admin access, analytics exclusion, dev tools visibility
 */
export function isSamurai(user?: SessionUser | null): boolean {
  return user?.email?.endsWith(INTERNAL_DOMAIN) ?? false;
}

/**
 * Check if email belongs to Health Samurai domain
 */
export function isSamuraiEmail(email?: string | null): boolean {
  return email?.endsWith(INTERNAL_DOMAIN) ?? false;
}
