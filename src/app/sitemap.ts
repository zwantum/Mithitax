import type { MetadataRoute } from "next";
import {
  siteConfig,
  serviceCategories,
  calculatorsList,
  insightArticles,
} from "@/lib/constants";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = siteConfig.url.replace(/\/$/, "");
  const now = new Date();

  const staticRoutes: MetadataRoute.Sitemap = [
    { url: `${baseUrl}/`, lastModified: now, changeFrequency: "weekly", priority: 1.0 },
    { url: `${baseUrl}/about`, lastModified: now, changeFrequency: "monthly", priority: 0.8 },
    { url: `${baseUrl}/services`, lastModified: now, changeFrequency: "weekly", priority: 0.9 },
    { url: `${baseUrl}/insights`, lastModified: now, changeFrequency: "weekly", priority: 0.8 },
    { url: `${baseUrl}/calculators`, lastModified: now, changeFrequency: "monthly", priority: 0.8 },
    { url: `${baseUrl}/contact`, lastModified: now, changeFrequency: "monthly", priority: 0.8 },
  ];

  const categoryRoutes: MetadataRoute.Sitemap = serviceCategories.map((cat) => ({
    url: `${baseUrl}/services/category/${cat.slug}`,
    lastModified: now,
    changeFrequency: "weekly",
    priority: 0.85,
  }));

  const serviceRoutes: MetadataRoute.Sitemap = serviceCategories.flatMap((cat) =>
    cat.services.map((service) => ({
      url: `${baseUrl}/services/${service.slug}`,
      lastModified: now,
      changeFrequency: "weekly" as const,
      priority: 0.9,
    }))
  );

  const calculatorRoutes: MetadataRoute.Sitemap = calculatorsList.map((calc) => ({
    url: `${baseUrl}/calculators/${calc.slug}`,
    lastModified: now,
    changeFrequency: "monthly",
    priority: 0.7,
  }));

  const insightRoutes: MetadataRoute.Sitemap = insightArticles.map((article) => ({
    url: `${baseUrl}/insights/${article.slug}`,
    lastModified: now,
    changeFrequency: "monthly",
    priority: 0.75,
  }));

  return [
    ...staticRoutes,
    ...categoryRoutes,
    ...serviceRoutes,
    ...calculatorRoutes,
    ...insightRoutes,
  ];
}
