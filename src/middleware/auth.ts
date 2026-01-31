/**
 * Authentication and authorization middleware
 */

import type { Context } from "../context";
import { newContext } from "../context";
import { getSession } from "./session";
import { UserRole } from "../types";
import { db } from "../db";

export type Handler = (ctx: Context, req: Request) => Response | Promise<Response>;

/**
 * Middleware to load user session into context
 */
export function withAuth(handler: Handler): Handler {
  return async (ctx: Context, req: Request) => {
    const user = await getSession(req);
    const contextWithUser = newContext(ctx.db, user);
    return handler(contextWithUser, req);
  };
}

/**
 * Require authentication - redirect to login if not authenticated
 */
export function requireAuth(handler: Handler): Handler {
  return async (ctx: Context, req: Request) => {
    if (!ctx.user) {
      return new Response(null, {
        status: 303,
        headers: {
          Location: `/login?redirect=${encodeURIComponent(new URL(req.url).pathname)}`,
        },
      });
    }
    return handler(ctx, req);
  };
}

/**
 * Require a specific role - return 403 if user doesn't have the role
 */
export function requireRole(role: UserRole, handler: Handler): Handler {
  return async (ctx: Context, req: Request) => {
    if (!ctx.user) {
      return new Response(null, {
        status: 303,
        headers: {
          Location: `/login?redirect=${encodeURIComponent(new URL(req.url).pathname)}`,
        },
      });
    }

    // Admin has access to everything
    if (ctx.user.role !== UserRole.ADMIN && ctx.user.role !== role) {
      return new Response("Access Denied", { status: 403 });
    }

    return handler(ctx, req);
  };
}

/**
 * Compose multiple middleware functions from left to right
 */
export function compose(...middleware: ((handler: Handler) => Handler)[]): (handler: Handler) => Handler {
  return (handler: Handler) => {
    return middleware.reduceRight((wrappedHandler, currentMiddleware) => {
      return currentMiddleware(wrappedHandler);
    }, handler);
  };
}

/**
 * Create a base context with database connection
 */
export function createContext(): Context {
  return newContext(db);
}
