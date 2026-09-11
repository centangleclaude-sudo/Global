import type { Metadata } from "next";
import { Legal } from "@/components/pivot/Legal";
import { terms } from "@/content/legal";

export const metadata: Metadata = {
  title: terms.metaTitle,
  description: terms.metaDescription,
};

export default function TermsPage() {
  return <Legal doc={terms} />;
}
