export type Role = "super_admin" | "admin" | "editor" | "support";

export const PERMISSIONS = {
  MANAGE_SERVICES: ["super_admin", "admin", "editor"],
  MANAGE_BLOG: ["super_admin", "admin", "editor"],
  MANAGE_ENQUIRIES: ["super_admin", "admin", "support"],
  MANAGE_USERS: ["super_admin"],
  MANAGE_SETTINGS: ["super_admin", "admin"],
  MANAGE_SEO: ["super_admin", "admin", "editor"],
} as const;

export function hasPermission(role: Role, action: keyof typeof PERMISSIONS): boolean {
  const allowedRoles = PERMISSIONS[action] as readonly string[];
  return allowedRoles.includes(role);
}
