import type { MetadataRoute } from "next";
import { CITY_PAGES_PUBLICLY_ACCESSIBLE } from "@/lib/cities/cityPagesRollout";
import { siteUrl } from "@/lib/site";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
      ...(CITY_PAGES_PUBLICLY_ACCESSIBLE
        ? {}
        : { disallow: "/kanzlei-website/" }),
    },
    sitemap: `${siteUrl}/sitemap.xml`,
    host: siteUrl,
  };
}
