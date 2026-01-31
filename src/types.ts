/**
 * Application-wide TypeScript types and enums
 */

/**
 * User roles in the system
 */
export enum UserRole {
  USER = "user",
  EDITOR = "editor",
  ADMIN = "admin",
}

/**
 * Type guard to check if a string is a valid UserRole
 */
export function isValidUserRole(role: string): role is UserRole {
  return Object.values(UserRole).includes(role as UserRole);
}

/**
 * Human-readable role names
 */
export const roleDisplayNames: Record<UserRole, string> = {
  [UserRole.USER]: "User",
  [UserRole.EDITOR]: "Editor",
  [UserRole.ADMIN]: "Admin",
};
