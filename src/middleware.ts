import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export function middleware(request: NextRequest) {
  const authToken = request.cookies.get("auth_token");
  const requestHeaders = new Headers(request.headers);

  requestHeaders.set("Authorization", `Bearer ${authToken?.value}`);

  const response = NextResponse.next({ request: { headers: requestHeaders } });

  response.cookies.set("auth_token", authToken?.value ?? "", {
    expires: new Date(Date.now() + 86400 * 1000),
  });

  return response;
}
