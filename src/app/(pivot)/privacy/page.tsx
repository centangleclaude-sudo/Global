import type { Metadata } from "next";
import { Legal } from "@/components/pivot/Legal";
import { privacy } from "@/content/legal";

export const metadata: Metadata = {
  title: privacy.metaTitle,
  description: privacy.metaDescription,
};

export default function PrivacyPage() {
  return <Legal doc={privacy} />;
}
