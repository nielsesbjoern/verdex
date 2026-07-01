import type { MetadataRoute } from "next";
import { BUNDESLAND_PAGE_SLUGS } from "@/lib/cities/bundeslandSlugs";
import { areBundeslandPagesPubliclyAccessible, areCityPagesPubliclyAccessible, LIVE_CITIES } from "@/lib/cities/citiesMeta";
import { SOLUTIONS } from "@/components/solutions/solutionsMeta";
import { siteUrl } from "@/lib/site";

const lastModified = new Date();

export default function sitemap(): MetadataRoute.Sitemap {
  const solutionRoutes: MetadataRoute.Sitemap = SOLUTIONS.map((s) => ({
    url: `${siteUrl}/leistungen/${s.slug}`,
    lastModified,
    changeFrequency: "monthly",
    priority: 0.8,
  }));

  const cityRoutes: MetadataRoute.Sitemap = areCityPagesPubliclyAccessible()
    ? LIVE_CITIES.map((c) => ({
        url: `${siteUrl}/kanzlei-website/${c.slug}`,
        lastModified,
        changeFrequency: "monthly",
        priority: c.rolloutPhase === 1 ? 0.75 : 0.6,
      }))
    : [];

  const bundeslandRoutes: MetadataRoute.Sitemap = areBundeslandPagesPubliclyAccessible()
    ? BUNDESLAND_PAGE_SLUGS.map((slug) => ({
        url: `${siteUrl}/deutschlandweit/bundesland/${slug}`,
        lastModified,
        changeFrequency: "monthly",
        priority: 0.7,
      }))
    : [];

  return [
    {
      url: `${siteUrl}/`,
      lastModified,
      changeFrequency: "weekly",
      priority: 1,
    },
    {
      url: `${siteUrl}/leistungen`,
      lastModified,
      changeFrequency: "monthly",
      priority: 0.9,
    },
    ...solutionRoutes,
    {
      url: `${siteUrl}/deutschlandweit`,
      lastModified,
      changeFrequency: "monthly",
      priority: 0.8,
    },
    ...cityRoutes,
    ...bundeslandRoutes,
    {
      url: `${siteUrl}/referenzen`,
      lastModified,
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: `${siteUrl}/ablauf`,
      lastModified,
      changeFrequency: "monthly",
      priority: 0.7,
    },
    {
      url: `${siteUrl}/faq`,
      lastModified,
      changeFrequency: "monthly",
      priority: 0.7,
    },
    {
      url: `${siteUrl}/about`,
      lastModified,
      changeFrequency: "monthly",
      priority: 0.7,
    },
    {
      url: `${siteUrl}/impressum`,
      lastModified,
      changeFrequency: "monthly",
      priority: 0.5,
    },
    {
      url: `${siteUrl}/datenschutz`,
      lastModified,
      changeFrequency: "monthly",
      priority: 0.5,
    },
  ];
}
