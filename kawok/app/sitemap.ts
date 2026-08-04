import type { MetadataRoute } from "next";
import { site } from "@/lib/content";

const routes = [
  "",
  "/vision",
  "/toledo-temple-trail",
  "/toledo-temple-trail/architecture",
  "/chaos-oasis",
  "/kulcha-fair",
  "/get-involved",
  "/contact",
];

export const dynamic = "force-static";

export default function sitemap(): MetadataRoute.Sitemap {
  return routes.map((route) => ({
    url: `${site.url}${route}`,
    changeFrequency: "monthly" as const,
    priority: route === "" ? 1 : 0.7,
  }));
}
