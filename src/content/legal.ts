/**
 * Privacy and Terms, lifted verbatim from the pages they replaced.
 *
 * Legal wording is not ours to edit: nothing below was reworded when these
 * moved into the pivot design. Where the text no longer matches how the new
 * site behaves, it is flagged in ../../../NewPivot/PLACEHOLDERS.md rather than
 * quietly corrected.
 */

export type LegalSection = {
  heading: string;
  /** Anchor target, so the footer can deep-link to a single clause. */
  id?: string;
  body?: string[];
  list?: string[];
};

export type LegalDoc = {
  title: string;
  metaTitle: string;
  metaDescription: string;
  lastUpdated: string;
  intro: string;
  sections: LegalSection[];
};

export const privacy: LegalDoc = {
  title: "Privacy Policy",
  metaTitle: "Privacy Policy — Centangle Global",
  metaDescription:
    "How Centangle Global collects, uses, and protects personal data submitted through this website.",
  lastUpdated: "28 July 2026",
  intro:
    "This policy explains what personal data this website collects, why we collect it, who processes it, and what rights you have over it.",
  sections: [
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
  ],
};

export const terms: LegalDoc = {
  title: "Terms of Service",
  metaTitle: "Terms of Service — Centangle Global",
  metaDescription:
    "The terms governing use of the Centangle Global website, including acceptable use, intellectual property, and limitation of liability.",
  lastUpdated: "28 July 2026",
  intro:
    "These terms govern your use of this website. Work we carry out for clients is covered by a separate signed agreement, not by this page.",
  sections: [
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
  ],
};
