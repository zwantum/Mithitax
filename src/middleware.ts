import { NextResponse, type NextRequest } from "next/server";
import { updateSession } from "@/lib/supabase/middleware";

export async function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;

  // Do not intercept Next.js internal paths, HMR endpoints, or WebSocket upgrades
  if (
    pathname.startsWith("/_next") ||
    pathname.startsWith("/api") ||
    request.headers.get("upgrade") === "websocket"
  ) {
    return NextResponse.next();
  }

  return await updateSession(request);
}

export const config = {
  matcher: [
    /*
     * Match all request paths except for:
     * - _next (all internal Next.js assets, webpack-hmr WebSocket, static, image)
     * - api (API endpoints)
     * - favicon.ico and static media assets
     */
    "/((?!_next|api|favicon.ico|.*\\.(?:svg|png|jpg|jpeg|gif|webp|ico)$).*)",
  ],
};
