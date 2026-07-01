import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import { REGIONAL_PAGES_PUBLICLY_ACCESSIBLE } from "@/lib/cities/cityPagesRollout";

export function middleware(request: NextRequest) {
  if (!REGIONAL_PAGES_PUBLICLY_ACCESSIBLE) {
    if (request.nextUrl.pathname.startsWith("/kanzlei-website/")) {
      return new NextResponse(null, {
        status: 404,
        headers: {
          "X-Robots-Tag": "noindex, nofollow",
        },
      });
    }

    if (request.nextUrl.pathname.startsWith("/deutschlandweit/bundesland/")) {
      return new NextResponse(null, {
        status: 404,
        headers: {
          "X-Robots-Tag": "noindex, nofollow",
        },
      });
    }
  }

  return NextResponse.next();
}

export const config = {
  matcher: ["/kanzlei-website/:path*", "/deutschlandweit/bundesland/:path*"],
};
