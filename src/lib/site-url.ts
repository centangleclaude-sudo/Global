/**
 * Where this particular build thinks it lives.
 *
 * The same commit is built three ways — a Vercel preview, a Vercel production
 * deploy, and the static zip that goes to cPanel — and each needs a different
 * answer. Hardcoding the live domain would make every preview advertise live
 * URLs in its sitemap and invite Google to index a duplicate of the site.
 *
 * Resolution order:
 *   1. NEXT_PUBLIC_SITE_URL   — set this for the cPanel build, or to override
 *   2. Vercel production      — the project's production domain
 *   3. Vercel preview         — that deployment's own URL
 *   4. Local                  — localhost
 *
 * Vercel injects the VERCEL_* variables at build time; nothing to configure.
 */

const strip = (u: string) => u.replace(/\/+$/, "");
const withProtocol = (u: string) => (/^https?:\/\//.test(u) ? u : `https://${u}`);

export const isPreview = process.env.VERCEL_ENV === "preview";

export const SITE_URL = strip(
  withProtocol(
    process.env.NEXT_PUBLIC_SITE_URL ||
      (process.env.VERCEL_ENV === "production"
        ? process.env.VERCEL_PROJECT_PRODUCTION_URL || "centangleglobal.com"
        : process.env.VERCEL_URL) ||
      "http://localhost:3013",
  ),
);
