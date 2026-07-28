import type { MetadataRoute } from "next";

/**
 * Emitted as a static /sitemap.xml at build time, so it works under
 * `output: "export"` — no route handler and no server involved.
 *
 * `trailingSlash: true` in next.config.ts means the canonical URLs all end in
 * a slash; the entries below match that so the sitemap doesn't advertise URLs
 * that only resolve via a redirect.
 */
export const dynamic = "force-static";

// TODO: confirm the production domain before launch.
const BASE_URL = "https://centangleglobal.com";

// /coming-soon is deliberately absent — it's a placeholder, not a destination.
const routes: { path: string; priority: number; changeFrequency: MetadataRoute.Sitemap[number]["changeFrequency"] }[] = [
  { path: "/", priority: 1.0, changeFrequency: "monthly" },
  { path: "/services/", priority: 0.9, changeFrequency: "monthly" },
  { path: "/projects/", priority: 0.9, changeFrequency: "monthly" },
  { path: "/contact/", priority: 0.8, changeFrequency: "yearly" },
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
