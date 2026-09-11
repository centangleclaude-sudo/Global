import type { MetadataRoute } from "next";
import { SITE_URL } from "@/lib/site-url";

/**
 * Emitted as a static /sitemap.xml at build time, so it works under
 * `output: "export"` — no route handler and no server involved.
 *
 * `trailingSlash: true` in next.config.ts means the canonical URLs all end in
 * a slash; the entries below match that so the sitemap doesn't advertise URLs
 * that only resolve via a redirect.
 */
export const dynamic = "force-static";

// Resolved per build, so a preview never advertises live URLs. Set
// NEXT_PUBLIC_SITE_URL for the cPanel build.
const BASE_URL = SITE_URL;

// The /lp/ pages are deliberately absent: they are bought traffic, marked
// noindex, and should never compete with the homepage in search.
const routes: { path: string; priority: number; changeFrequency: MetadataRoute.Sitemap[number]["changeFrequency"] }[] = [
  { path: "/", priority: 1.0, changeFrequency: "monthly" },
  { path: "/privacy/", priority: 0.3, changeFrequency: "yearly" },
  { path: "/terms/", priority: 0.3, changeFrequency: "yearly" },
];

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date();

  return routes.map(({ path, priority, changeFrequency }) => ({
    url: `${BASE_URL}${path}`,
    lastModified,
    changeFrequency,
    priority,
  }));
}
