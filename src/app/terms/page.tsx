import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import LegalPage, { type LegalSection } from "@/components/LegalPage";

export const metadata = {
  title: "Terms of Service - Centangle Global",
  description:
    "The terms governing use of the Centangle Global website, including acceptable use, intellectual property, and limitation of liability.",
};

const LAST_UPDATED = "28 July 2026";

const sections: LegalSection[] = [
  {
    heading: "Who these terms are with",
    body: [
      "This website is operated by Centangle Global LLC, a company registered in the United States, of 30 N Gould St, Ste R, Sheridan, WY 82801, United States (“we”, “us”).",
      "By using this website you accept these terms. If you do not accept them, please stop using the site.",
    ],
  },
  {
    heading: "These terms cover the website only",
    body: [
      "This page governs your use of this website and nothing else. It does not govern any work we do for you.",
      "Client engagements — development, staff augmentation, AI work, design, and anything else we are contracted to deliver — are governed exclusively by the separate written agreement signed for that engagement, including its own confidentiality, intellectual property, payment, warranty, and liability terms. Where that agreement and this page differ, the signed agreement wins.",
    ],
  },
  {
    heading: "Nothing here is an offer or a quote",
    body: [
      "Descriptions of services, case studies, timelines, and figures on this site are provided for general information. They describe past work and general capability. They are not an offer, a quotation, a warranty of results, or a commitment to deliver on particular terms. Any proposal we make is set out separately in writing.",
    ],
  },
  {
    heading: "Acceptable use",
    body: ["You agree not to:"],
    list: [
      "Use the site for any unlawful or fraudulent purpose",
      "Attempt to gain unauthorised access to the site, its servers, or any connected system",
      "Interfere with the site’s operation, or introduce malware or any other harmful code",
      "Scrape, harvest, or systematically extract content or contact details from the site",
      "Use the contact or signup forms to send spam, bulk solicitations, or abusive content",
      "Copy, republish, or redistribute site content beyond what is permitted below",
    ],
    // Kept a separate paragraph so the consequence follows the list.
  },
  {
    heading: "Suspension",
    body: [
      "We may restrict or withdraw access to the site, in whole or in part, without notice, if we reasonably believe you have breached these terms.",
    ],
  },
  {
    heading: "Intellectual property",
    body: [
      "All content on this site — text, layout, graphics, illustrations, photographs, logos, icons, and code — is owned by us or licensed to us, and is protected by copyright and trade mark law.",
      "You may view the site and print or download extracts for your own reference or to evaluate working with us. You may not reproduce, adapt, publish, or use any part of it commercially without our written permission.",
      "Client names, logos, and project imagery shown on this site remain the property of their respective owners and appear with permission or as permitted by the relevant engagement. Nothing here transfers any right in them to you.",
    ],
  },
  {
    heading: "Anything you send us",
    body: [
      "If you send us an idea, brief, or other material through this site, please don’t include anything confidential — we cannot guarantee confidentiality for unsolicited submissions, and we may already be working on something similar. Confidentiality obligations begin when we sign an NDA or an engagement contract.",
    ],
  },
  {
    heading: "Links to other websites",
    body: [
      "Where this site links to third-party websites, those links are provided for convenience. We do not control those sites, do not endorse them, and are not responsible for their content, security, or privacy practices.",
    ],
  },
  {
    id: "disclaimer",
    heading: "Disclaimer",
    body: [
      "This website is provided “as is” and “as available”, without warranty of any kind, whether express or implied, including any implied warranties of merchantability, fitness for a particular purpose, accuracy, or non-infringement.",
      "We do not warrant that the site will be uninterrupted, error-free, secure, or free of malicious code, or that any information on it is complete, accurate, or current. Content may be out of date, and we are under no obligation to update it.",
      "Nothing on this site is professional, legal, financial, or technical advice, and you should not act on it without taking appropriate advice for your circumstances.",
    ],
  },
  {
    heading: "Limitation of liability",
    body: [
      "To the fullest extent permitted by law, we are not liable for any loss of profit, loss of business, loss of data, business interruption, or any indirect or consequential loss arising from your use of, or inability to use, this website.",
      "Where liability cannot lawfully be excluded, our total liability arising out of or in connection with this website is limited to USD 100.",
      "Nothing in these terms limits or excludes liability for death or personal injury caused by negligence, for fraud or fraudulent misrepresentation, or for anything else that cannot lawfully be limited.",
    ],
  },
  {
    heading: "Governing law",
    body: [
      "These terms and any dispute arising from them are governed by the laws of the State of Wyoming, United States, and the state and federal courts located in Wyoming have exclusive jurisdiction.",
      "If you are a consumer, this does not deprive you of the protection of the mandatory laws of your country of residence.",
    ],
  },
  {
    heading: "Changes to these terms",
    body: [
      "We may update these terms from time to time. The version published here is the one in force, and the “last updated” date above shows when it changed. Continuing to use the site after a change means you accept the revised terms, so please check back periodically.",
    ],
  },
  {
    heading: "Severability",
    body: [
      "If any provision of these terms is found to be unenforceable, the rest remain in full effect.",
    ],
  },
  {
    heading: "Contact",
    body: ["Questions about these terms: contact@centangleglobal.com."],
  },
];

export default function TermsPage() {
  return (
    <div className="bg-[#0a0a0f] min-h-screen text-white relative overflow-x-hidden">
      <div className="relative z-10">
        <Navbar />
        <LegalPage
          title="Terms of Service"
          lastUpdated={LAST_UPDATED}
          intro="These terms govern your use of this website. Work we carry out for clients is covered by a separate signed agreement, not by this page."
          sections={sections}
        />
        <Footer />
      </div>
    </div>
  );
}
