import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export function middleware(request: NextRequest) {
  const authToken = request.cookies.get("auth_token")?.value;

  if (!authToken) {
    return NextResponse.redirect(new URL("/login", request.url));
  }

  const requestHeaders = new Headers(request.headers);
  requestHeaders.set("Authorization", `Bearer ${authToken}`);

  const response = NextResponse.next({ request: { headers: requestHeaders } });

  response.cookies.set("auth_token", authToken ?? "", {
    expires: new Date(Date.now() + 86400 * 1000),
    sameSite: "strict",
  });

  return response;
}

export const config = {
  matcher: ["/usuarios/:path*"],
};
