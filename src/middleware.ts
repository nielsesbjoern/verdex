import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import { CITY_PAGES_PUBLICLY_ACCESSIBLE } from "@/lib/cities/cityPagesRollout";

export function middleware(request: NextRequest) {
  if (
    !CITY_PAGES_PUBLICLY_ACCESSIBLE &&
    request.nextUrl.pathname.startsWith("/kanzlei-website/")
  ) {
    return new NextResponse(null, {
      status: 404,
      headers: {
        "X-Robots-Tag": "noindex, nofollow",
      },
    });
  }

  return NextResponse.next();
}

export const config = {
  matcher: "/kanzlei-website/:path*",
};
