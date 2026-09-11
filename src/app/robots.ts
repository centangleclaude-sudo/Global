import type { MetadataRoute } from "next";
import { SITE_URL, isPreview } from "@/lib/site-url";

/**
 * Emitted as a static /robots.txt at build time, so it survives
 * `output: "export"`.
 *
 * Previews disallow everything. Vercel already sends X-Robots-Tag: noindex on
 * preview deployments, but a crawler that reaches a file directly never sees
 * that header — and a staging copy of the site indexed alongside the real one
 * is duplicate content competing with itself.
 */
export const dynamic = "force-static";

export default function robots(): MetadataRoute.Robots {
  if (isPreview) {
    return { rules: [{ userAgent: "*", disallow: "/" }] };
  }

  return {
    rules: [
      {
        userAgent: "*",
        allow: "/",
        // Paid destinations. They carry noindex in their own metadata too;
        // this keeps them out of a crawl budget as well as out of the index.
        disallow: "/lp/",
      },
    ],
    sitemap: `${SITE_URL}/sitemap.xml`,
  };
}
