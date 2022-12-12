// middleware.ts
import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import { verifyToken } from "./services/jwt";

// This function can be marked `async` if using `await` inside
export function middleware(request: NextRequest) {
  const jwtToken = request.cookies.get("jwt_token")?.value;

  if (!jwtToken || !verifyToken(jwtToken)) {
    return new NextResponse(
      JSON.stringify({ success: false, message: "authentication failed" }),
      { status: 401, headers: { "content-type": "application/json" } }
    );
  }
}

// See "Matching Paths" below to learn more
export const config = {
  matcher: "/bots/:path*",
};
