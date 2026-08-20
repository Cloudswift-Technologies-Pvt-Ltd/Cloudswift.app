import type { MetadataRoute } from "next";
import { company } from "@/lib/data";
import { AGENT_PAGES } from "@/lib/agentPages";

const ORIGIN = company.website.replace(/\/$/, "");

const CORE = [
  "/",
  "/about",
  "/contact",
  "/ai-services",
  "/services",
  "/managed-cloud",
  "/solutions",
  "/industries",
  "/projects",
  "/blog",
];

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();
  return [
    ...CORE.map((path) => ({
      url: `${ORIGIN}${path}`,
      lastModified: now,
      changeFrequency: "weekly" as const,
      priority: path === "/" ? 1 : 0.7,
    })),
    ...AGENT_PAGES.map((page) => ({
      url: `${ORIGIN}${page.path}`,
      lastModified: now,
      changeFrequency: "monthly" as const,
      priority: 0.85,
    })),
  ];
}
