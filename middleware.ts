import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export default function middleware(_request: NextRequest) {
  const response = NextResponse.next();

  // Prevent browser caching in development
  if (process.env.NODE_ENV === "development") {
    response.headers.set("Cache-Control", "no-store, max-age=0");
  }

  return response;
}
