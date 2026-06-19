import type { MetadataRoute } from "next";
import { business } from "@/content/business";

export const dynamic = "force-static";

export default function sitemap(): MetadataRoute.Sitemap {
  const base = business.site.url;
  const now = new Date();
  return [
    { url: base, lastModified: now, changeFrequency: "weekly", priority: 1 },
    { url: `${base}/#menu`, lastModified: now, changeFrequency: "weekly", priority: 0.8 },
    { url: `${base}/#ubicacion`, lastModified: now, changeFrequency: "monthly", priority: 0.6 },
  ];
}
