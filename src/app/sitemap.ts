import type { MetadataRoute } from "next";

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? "https://verdex.de";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: `${siteUrl}/`,
      changeFrequency: "weekly",
      priority: 1,
    },
    {
      url: `${siteUrl}/about`,
      changeFrequency: "monthly",
      priority: 0.7,
    },
    {
      url: `${siteUrl}/impressum`,
      changeFrequency: "monthly",
      priority: 0.5,
    },
    {
      url: `${siteUrl}/datenschutz`,
      changeFrequency: "monthly",
      priority: 0.5,
    },
  ];
}
