import type { MetadataRoute } from "next";
import { REGIONAL_PAGES_PUBLICLY_ACCESSIBLE } from "@/lib/cities/cityPagesRollout";
import { siteUrl } from "@/lib/site";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
      ...(REGIONAL_PAGES_PUBLICLY_ACCESSIBLE
        ? {}
        : {
            disallow: ["/kanzlei-website/", "/deutschlandweit/bundesland/"],
          }),
    },
    sitemap: `${siteUrl}/sitemap.xml`,
    host: siteUrl,
  };
}
