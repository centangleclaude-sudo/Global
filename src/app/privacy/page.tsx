import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import LegalPage, { type LegalSection } from "@/components/LegalPage";

export const metadata = {
  title: "Privacy Policy - Centangle Global",
  description:
    "How Centangle Global collects, uses, and protects personal data submitted through this website.",
};

const LAST_UPDATED = "28 July 2026";

const sections: LegalSection[] = [
  {
    heading: "Who we are",
    body: [
      "This website is operated by Centangle Global LLC, a company registered in the United States. Centangle Global LLC is the data controller for personal data submitted through this site.",
      "Registered address: 30 N Gould St, Ste R, Sheridan, WY 82801, United States.",
      "For anything in this policy, contact us at contact@centangleglobal.com.",
    ],
  },
  {
    heading: "What this policy covers",
    body: [
      "This policy explains what happens to personal data you send us through this website. It does not cover data handled inside a client engagement — that is governed by the contract and any data processing agreement signed for that project.",
    ],
  },
  {
    heading: "What we collect",
    body: [
      "We only collect what you type into a form. We do not create accounts, and we do not buy or enrich contact data from third parties.",
      "The contact form collects:",
    ],
    list: [
      "Your name",
      "Your email address",
      "Your phone number (optional)",
      "An indicative budget range (optional)",
      "The content of your message",
    ],
  },
  {
    heading: "The newsletter form",
    body: [
      "The signup form collects your email address only, so we can tell you when the relevant part of the site goes live. Every email we send includes a way to unsubscribe, and you can ask us to remove you at any time by emailing contact@centangleglobal.com.",
    ],
  },
  {
    heading: "How submissions are processed",
    body: [
      "Form submissions are handled by Web3Forms, a third-party form processor, which forwards them to us by email. Your data passes through Web3Forms’ systems in transit and is delivered to our inbox — it is not stored in a database on this website.",
      "Web3Forms acts as a processor on our behalf. Their privacy terms are published at web3forms.com.",
      "Once delivered, submissions are stored in mailboxes hosted by our web hosting provider.",
    ],
  },
  {
    heading: "Why we use it",
    body: [
      "We use what you send us to reply to your enquiry, scope potential work, and stay in touch about it. Where you have asked to be notified about the site, we use your email address for that alone.",
      "Our basis for doing so is your consent when you submit the form, and our legitimate interest in responding to business enquiries addressed to us.",
    ],
  },
  {
    heading: "How long we keep it",
    body: [
      "Enquiries are retained for 24 months from our last contact with you and then deleted, unless the enquiry becomes a client engagement, in which case it is retained for the life of the contract and for seven years afterwards to meet accounting and legal obligations.",
      "Newsletter addresses are kept until you unsubscribe.",
    ],
  },
  {
    heading: "Who we share it with",
    body: [
      "We do not sell personal data and we do not share it for advertising. It is shared only with the processors named above, and with anyone we are legally required to disclose it to.",
    ],
  },
  {
    heading: "Cookies and analytics",
    body: [
      "This website sets no tracking or advertising cookies, and currently runs no analytics. Nothing on the site profiles you or follows you across other websites.",
      "If we add analytics later, we will update this policy and, where required, ask for your consent first.",
    ],
  },
  {
    heading: "International transfers",
    body: [
      "Our delivery team is based in Pakistan, and our processors may store or route data outside your country.",
    ],
  },
  {
    heading: "Your rights",
    body: [
      "You can ask us to do any of the following with the personal data we hold about you:",
    ],
    list: [
      "Send you a copy of it",
      "Correct anything that is wrong or out of date",
      "Delete it",
      "Limit how we use it",
      "Stop using it for a particular purpose",
      "Send it to you in a portable, machine-readable format",
      "Withdraw your consent at any time — this does not undo anything we did before you withdrew it",
    ],
  },
  {
    heading: "How to exercise them",
    body: [
      "Email contact@centangleglobal.com and we will respond within one month. We may ask you to confirm your identity before acting on a request.",
    ],
  },
  {
    heading: "Security",
    body: [
      "Form submissions are sent over an encrypted connection (HTTPS). Access to the inbox that receives them is limited to staff who need it. No system is perfectly secure, so please don’t send confidential material, credentials, or sensitive personal data through the contact form.",
    ],
  },
  {
    heading: "Changes to this policy",
    body: [
      "If we change how we handle personal data, we will update this page and revise the “last updated” date above. Material changes will be highlighted on the site.",
    ],
  },
  {
    heading: "Contact",
    body: [
      "Questions about this policy, or about data we hold: contact@centangleglobal.com.",
    ],
  },
];

export default function PrivacyPage() {
  return (
    <div className="bg-[#0a0a0f] min-h-screen text-white relative overflow-x-hidden">
      <div className="relative z-10">
        <Navbar />
        <LegalPage
          title="Privacy Policy"
          lastUpdated={LAST_UPDATED}
          intro="This policy explains what personal data this website collects, why we collect it, who processes it, and what rights you have over it."
          sections={sections}
        />
        <Footer />
      </div>
    </div>
  );
}
