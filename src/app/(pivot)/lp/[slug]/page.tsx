import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { LandingPage } from "@/components/pivot/LandingPage";
import { bySlug, landingPages } from "@/content/lp";

/* Static export needs every route enumerated at build time. */
export function generateStaticParams() {
  return landingPages.map((l) => ({ slug: l.slug }));
}

export const dynamicParams = false;

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const lp = bySlug(slug);
  if (!lp) return {};
  return {
    title: lp.metaTitle,
    description: lp.metaDescription,
    /* Bought traffic only — these should never compete with the homepage. */
    robots: { index: false, follow: true },
    openGraph: { type: "website", title: lp.metaTitle, description: lp.metaDescription },
  };
}

export default async function LandingRoute({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const lp = bySlug(slug);
  if (!lp) notFound();
  return <LandingPage lp={lp} />;
}
