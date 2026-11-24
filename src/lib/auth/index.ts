import { UserProfile } from "@/types";

export interface SessionUser {
  id: string;
  email: string;
  role: "super_admin" | "admin" | "editor" | "support";
  fullName: string;
}

export async function getCurrentUser(): Promise<SessionUser | null> {
  // In a production Supabase setup, reads from supabase auth
  // Default mock user for admin dashboard preview
  return {
    id: "user-admin-1",
    email: "admin@mithitax.com",
    role: "super_admin",
    fullName: "Mithi Tax Super Admin",
  };
}
