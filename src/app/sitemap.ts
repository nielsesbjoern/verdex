import type { MetadataRoute } from "next";
import { SOLUTIONS } from "@/components/solutions/solutionsMeta";

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? "https://verdex.de";

export default function sitemap(): MetadataRoute.Sitemap {
  const solutionRoutes: MetadataRoute.Sitemap = SOLUTIONS.map((s) => ({
    url: `${siteUrl}/leistungen/${s.slug}`,
    changeFrequency: "monthly",
    priority: 0.8,
  }));

  return [
    {
      url: `${siteUrl}/`,
      changeFrequency: "weekly",
      priority: 1,
    },
    {
      url: `${siteUrl}/leistungen`,
      changeFrequency: "monthly",
      priority: 0.9,
    },
    ...solutionRoutes,
    {
      url: `${siteUrl}/referenzen`,
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: `${siteUrl}/ablauf`,
      changeFrequency: "monthly",
      priority: 0.7,
    },
    {
      url: `${siteUrl}/faq`,
      changeFrequency: "monthly",
      priority: 0.7,
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
