/**
 * Ad landing pages. Same domain as the homepage, deliberately not linked from
 * it: each one is bought traffic for a single package.
 *
 * Per the copy deck: no navigation, one CTA repeated, footer links to privacy
 * and cookies only.
 *
 * `[n]`, `[ ]` and `[bracketed phrases]` are deliberate blanks — they render
 * with a dotted underline. Nothing here is invented.
 */

export type LpField = { name: string; label: string; type?: string; autoComplete?: string };

export type Lp = {
  slug: string;
  metaTitle: string;
  metaDescription: string;
  hero: { tag: string; h1: string; price: string; sub: string; cta: string; reassure: string };
  strip: string[];
  problem: { heading: string; body: string[] };
  covers: { heading: string; items: string[]; meta: string };
  excludes: { heading: string; lead: string; items: string[]; note?: string };
  steps: { title: string; body: string }[];
  stepsNote?: string;
  promise?: { heading: string; body: string };
  faq: { q: string; a: string }[];
  close: { heading: string; body: string; fields: LpField[]; submit: string; fine: string };
};

const PROOF_BODY =
  "Built by one of our directors, catalogue structure through to launch. Open it on your phone, which is where most of its customers are.";
const ABOUT =
  "Centangle Global has been building websites since 2013. US-registered, with delivery teams in Pakistan, around thirty people. Four to five hours ahead of the UK, so your morning overlaps our afternoon.";
const EXCLUDES_LEAD =
  "Printed here rather than discovered later. A fixed price without a published edge isn’t a fixed price.";
const FIXED_PRICE_FAQ = {
  q: "Is the price actually fixed?",
  a: "Yes, for the scope printed above. If you ask for something outside it, we quote that separately and you decide before we build it. Nothing is added to an invoice without your agreement first.",
};
const UPFRONT_FAQ = {
  q: "What do I pay upfront?",
  a: "Half. The rest at launch. If you’ve been burned before, that’s the point of the split.",
};
const STORE_FIELDS: LpField[] = [
  { name: "url", label: "Your store URL", type: "url" },
  { name: "problem", label: "What’s wrong with it right now?" },
  { name: "email", label: "Your email", type: "email", autoComplete: "email" },
  { name: "name", label: "Name", autoComplete: "name" },
];

export const shared = { proofBody: PROOF_BODY, about: ABOUT, excludesLead: EXCLUDES_LEAD };

export const landingPages: Lp[] = [
  {
    slug: "shopify-speed",
    metaTitle: "Shopify Speed Fix — £950, measured before and after | Centangle Global",
    metaDescription:
      "Speed work on a fixed £950 price. We measure your store on five pages, fix what is slowing it down, and measure the same five pages again. You get both files.",
    hero: {
      tag: "Shopify speed",
      h1: "Your Shopify store is slow. We’ll show you the numbers before and after.",
      price: "£950",
      sub: "We measure your store on five pages, fix what’s actually slowing it down, and measure the same five pages again. You get both files.",
      cta: "Send us your store URL",
      reassure: "We’ll run it before you pay us anything",
    },
    strip: [
      "Building websites since 2013",
      "Measured before and after",
      "Fixed price, published scope",
      "Same-week replies, ahead of the UK",
    ],
    problem: {
      heading: "Slow stores lose mobile sales quietly",
      body: [
        "There’s no alert when someone leaves. They tap, wait, and go somewhere else, and it shows up as traffic that never converted rather than as a problem you can see.",
      ],
    },
    covers: {
      heading: "What £950 covers",
      items: [
        "One store, up to 300 products",
        "Up to 6 template types",
        "Image compression and correct sizing",
        "Script and app audit; unused scripts removed",
        "Font loading, lazy-loading and render-blocking fixes",
        "Before and after measurements on the same five pages, as a file",
      ],
      meta: "Typically 5–10 working days · Half to start, half at launch · Prices in GBP · [VAT line]",
    },
    excludes: {
      heading: "And what it doesn’t",
      lead: EXCLUDES_LEAD,
      items: [
        "Redesign or layout changes",
        "New pages or features",
        "App subscription costs",
        "Apps you need to keep",
        "Ongoing monitoring",
      ],
    },
    promise: {
      heading: "What we won’t promise you",
      body: "We won’t guarantee a score. Anyone who does either hasn’t looked at your store or is planning to strip out something you need. What we’ll do is measure honestly, fix what can be fixed at theme level, and show you the same pages before and after. If something can’t be fixed without removing a feature you rely on, we’ll tell you and let you decide.",
    },
    steps: [
      { title: "You send the URL", body: "Your store address and one sentence about what feels slow." },
      { title: "We measure it", body: "Five pages, before you pay us anything, with what we’d fix first." },
      { title: "We fix it", body: "Images, scripts, fonts and theme code. Typically 5–10 working days." },
      { title: "We measure again", body: "Same five pages. You get both files to keep." },
    ],
    faq: [
      FIXED_PRICE_FAQ,
      {
        q: "Will you guarantee a PageSpeed score?",
        a: "No, and be wary of anyone who does. A guaranteed number usually means stripping out something you need. We measure the same five pages before and after and send you both files, so you can judge the work yourself.",
      },
      {
        q: "What if an app I need is the thing slowing it down?",
        a: "We’ll name it and tell you what it costs you in speed. Then it’s your call. We won’t quietly remove something your store depends on to make a number look better.",
      },
      {
        q: "My store is bigger than 300 products. Now what?",
        a: "Then the package doesn’t fit and we’ll quote you properly. Send the URL and we’ll tell you what it costs. Being outside the ceiling isn’t a problem, it’s just a different number.",
      },
      {
        q: "Do you redesign anything while you’re in there?",
        a: "No. Speed work is speed work. Layout and design changes are a separate project, and mixing them makes it impossible to tell what actually caused the improvement.",
      },
      UPFRONT_FAQ,
    ],
    close: {
      heading: "Send us your store URL.",
      body: "We’ll run it before you pay us anything and tell you what we’d fix first. If speed isn’t your real problem, we’ll say that instead.",
      fields: STORE_FIELDS,
      submit: "Send it over",
      fine: "Reply within one working day · No call unless you want one · Half up front, half at launch · Before and after files are yours to keep",
    },
  },

  {
    slug: "shopify-migration",
    metaTitle: "Move your store to Shopify — £1,250, redirects included | Centangle Global",
    metaDescription:
      "Shopify migration on a fixed £1,250 price. Up to 300 products, your order and customer history, and every old URL redirected to the right new page.",
    hero: {
      tag: "Shopify migration",
      h1: "Move your store to Shopify without losing your Google rankings.",
      price: "£1,250",
      sub: "Up to 300 products, your order and customer history, and every old URL redirected to the right new page.",
      cta: "Send us your store URL",
      reassure: "Reply within one working day · No call unless you want one",
    },
    strip: [
      "Building websites since 2013",
      "A live store you can open and check",
      "Fixed price, published scope",
      "Same-week replies, ahead of the UK",
    ],
    problem: {
      heading: "The redirects are the part most people get wrong",
      body: [
        "A migration that moves your products but not your URLs costs you the traffic you already had. Every existing link needs to land on the right new page. That mapping is in the price here, because leaving it out is how migrations quietly go wrong.",
      ],
    },
    covers: {
      heading: "What £1,250 covers",
      items: [
        "Up to 300 products and 1,000 variants",
        "Customer and order history",
        "Up to 8 content pages rebuilt",
        "A theme configured to your brand",
        "Full URL redirect map",
        "Up to 3 apps configured",
        "Payment and shipping setup",
        "Recorded handover call",
        "30 days of bug fixes",
      ],
      meta: "Typically 3–4 weeks · Half to start, half at launch · Prices in GBP · [VAT line]",
    },
    excludes: {
      heading: "And what it doesn’t",
      lead: EXCLUDES_LEAD,
      items: [
        "Product copywriting",
        "Photography",
        "Shopify and app fees",
        "Domain or theme licences",
        "Custom app or API development",
        "Ongoing SEO or marketing",
      ],
      note: "Above 300 products? Then this isn’t your price, and we’ll tell you that before you pay us anything — not in week two.",
    },
    steps: [
      { title: "You send the URL", body: "Your store address and one sentence about what’s wrong." },
      { title: "We reply in a day", body: "Whether you fit the package, and what we’d do first." },
      { title: "We build", body: "Weekly updates. Design goes to you before anything is built out." },
      { title: "Launch, then 30 days", body: "Recorded handover, and bug fixes for thirty days." },
    ],
    faq: [
      FIXED_PRICE_FAQ,
      {
        q: "Will I lose my Google rankings?",
        a: "Not if the redirects are done properly, which is why redirect mapping is in the package rather than an add-on. Every old URL points to its new equivalent. Rankings usually wobble for a couple of weeks after any migration while search engines re-crawl, then settle.",
      },
      {
        q: "My store is bigger than 300 products. Now what?",
        a: "Then the package doesn’t fit and we’ll quote you properly. Send the URL and we’ll tell you what it costs. Being outside the ceiling isn’t a problem, it’s just a different number.",
      },
      {
        q: "Should I move off WooCommerce at all?",
        a: "Not necessarily. WooCommerce runs plenty of good stores and we build on it too. The people who move are usually the ones spending more time on plugin conflicts and checkout problems than on selling. If that isn’t you, you may not need this.",
      },
      {
        q: "Do I own everything?",
        a: "Yes. Domain, Shopify account, theme files, images. All in your name from the start, so nobody can hold them over you.",
      },
      UPFRONT_FAQ,
    ],
    close: {
      heading: "Send us your store URL.",
      body: "One link and one line on what’s wrong. We’ll reply with which package fits, what it costs, and what we’d do first. If nothing we sell is right for you, we’ll say that instead.",
      fields: STORE_FIELDS,
      submit: "Send it over",
      fine: "Reply within one working day · No call unless you want one · Half up front, half at launch · You own the domain, account and files from day one",
    },
  },

  {
    slug: "store-redesign",
    metaTitle: "Shopify store redesign — £1,250, design approved first | Centangle Global",
    metaDescription:
      "A Shopify redesign on a fixed £1,250 price, built on your existing catalogue. Same products, same account, design approved before any code.",
    hero: {
      tag: "Store redesign",
      h1: "Same products. Same Shopify account. A store people trust.",
      price: "£1,250",
      sub: "A redesign built on your existing catalogue, so nothing breaks and nothing gets re-entered. You approve the design before anything is built.",
      cta: "Send us your store URL",
      reassure: "Reply within one working day · No call unless you want one",
    },
    strip: [
      "Building websites since 2013",
      "Design approved before any code",
      "Fixed price, published scope",
      "Same-week replies, ahead of the UK",
    ],
    problem: {
      heading: "Your store looks older than your business is",
      body: [
        "The theme was right when you had twenty products. Now the collection pages don’t work the way you sell, the editor has run out of options, and you can see it costing you against a competitor with the same stock and a better shop.",
        "That’s a design problem before it’s a technical one. Which is why the design comes first here, and you approve it before anybody writes code.",
      ],
    },
    covers: {
      heading: "What £1,250 covers",
      items: [
        "Up to 8 templates redesigned",
        "Up to 10 static pages",
        "Mobile-first design, checked on real devices",
        "Your existing product data — no re-entry",
        "Two rounds of revisions at the design stage",
        "Recorded handover call · 30 days of bug fixes",
      ],
      meta: "Typically 4–5 weeks · Half to start, half at launch · Prices in GBP · [VAT line]",
    },
    excludes: {
      heading: "And what it doesn’t",
      lead: EXCLUDES_LEAD,
      items: [
        "Logo or brand identity design",
        "Copywriting",
        "Photography",
        "Custom app development",
        "Migration from another platform",
        "Changes after the 30 days",
      ],
      note: "Moving from another platform is a different job with a different price. Say so and we’ll quote that instead.",
    },
    steps: [
      { title: "You send the URL", body: "Your store address and one line on what looks wrong." },
      { title: "We reply in a day", body: "What we’d change first, and whether you fit the package." },
      { title: "You approve the design", body: "Your pages, your products. Two rounds of revisions included." },
      { title: "Launch, then 30 days", body: "Recorded handover, and bug fixes for thirty days." },
    ],
    faq: [
      FIXED_PRICE_FAQ,
      {
        q: "Will my products or orders be affected?",
        a: "No. You keep the same Shopify account and the same catalogue. We redesign the templates around your existing product data, so nothing is re-entered and nothing is at risk.",
      },
      {
        q: "What if I don’t like the design?",
        a: "Two rounds of revisions are included at the design stage, and nothing is built until you’ve approved it. That’s the whole reason the design comes first.",
      },
      {
        q: "Do you write the copy or take the photos?",
        a: "No. We’ll edit and place what you send, but writing product descriptions and photography are separate jobs and we’d rather say so than quietly charge for them.",
      },
      {
        q: "Can I keep my current apps?",
        a: "Usually, yes. We design around what your store depends on. If an app blocks something in the design, we tell you before the build starts, not after.",
      },
      UPFRONT_FAQ,
    ],
    close: {
      heading: "Send us your store URL.",
      body: "One link and one line on what’s wrong with how it looks. We’ll reply with what we’d change first. If a redesign isn’t what you need, we’ll say that instead.",
      fields: STORE_FIELDS,
      submit: "Send it over",
      fine: "Reply within one working day · Two rounds of revisions at the design stage · Half up front, half at launch · Nothing built until you approve it",
    },
  },

  {
    slug: "first-store",
    metaTitle: "Your first online shop, on Shopify | Centangle Global",
    metaDescription:
      "A Shopify store built around what you sell, with payments, shipping and tax set up and explained once in plain words. Fixed price, published scope.",
    hero: {
      tag: "Your first shop",
      h1: "You already have a business. We’ll build the shop that sells it.",
      price: "£[ ]",
      sub: "A Shopify store built around what you sell, with payments, shipping and tax set up and explained once in plain words. You’ve never done this before. We have, since 2013.",
      cta: "Tell us what you sell",
      reassure: "Reply within one working day · No call unless you want one",
    },
    strip: [
      "Building websites since 2013",
      "Everything in your name from day one",
      "Fixed price, published scope",
      "Explained in plain words",
    ],
    problem: {
      heading: "You don’t need to understand any of it",
      body: [
        "Most people selling online for the first time have been quoted by someone who talked about themes, gateways and integrations and left them no clearer than before. You shouldn’t have to learn a vocabulary to buy a shop.",
        "Tell us what you sell and who buys it. We’ll tell you what it costs, what it doesn’t include, and when it could be live — in words you’d use yourself.",
      ],
    },
    covers: {
      heading: "What the price covers",
      items: [
        "A Shopify store set up around your products",
        "Up to [n] products loaded from what you send",
        "Payments set up and tested",
        "Shipping rates and tax configured",
        "Your domain connected, in your name",
        "Up to [n] apps, each named and priced first",
        "A recorded walkthrough of the admin",
        "30 days of bug fixes after launch",
      ],
      meta: "Typically [n] weeks · Half to start, half at launch · Prices in GBP · [VAT line]",
    },
    excludes: {
      heading: "And what it doesn’t",
      lead: EXCLUDES_LEAD,
      items: [
        "The Shopify subscription",
        "App subscriptions",
        "Domain renewal",
        "Product photography",
        "Writing your descriptions",
        "Logo or brand identity",
        "SEO or marketing",
      ],
      note: "The running costs are yours and paid directly by you, so nothing sits in our name. We’ll tell you what each one is and roughly what it comes to before you commit.",
    },
    steps: [
      { title: "Tell us what you sell", body: "A couple of lines. No form with fourteen fields." },
      { title: "We reply in a day", body: "What it costs, what it doesn’t include, and when it could be live." },
      { title: "You approve the design", body: "Your products in it, before anybody writes code." },
      { title: "Launch, then 30 days", body: "Recorded walkthrough, and bug fixes for thirty days." },
    ],
    stepsNote:
      "What we need from you: your products, your logo if you have one, and an answer within a day or two when we ask something. That’s the whole list.",
    faq: [
      {
        q: "I’ve never sold online. Is this going to be over my head?",
        a: "No. You send us the products and answer a few questions in plain English. We set up the parts that are fiddly — payments, shipping rules, tax — and record a walkthrough of the three things you’ll most often want to change.",
      },
      {
        q: "Can I edit it myself afterwards?",
        a: "Yes, and you’ll be shown how. You get the admin login and a recorded walkthrough. If you’d rather never touch it, that’s fine too, and you’ll know what a change costs before you ask for it.",
      },
      {
        q: "What does it cost to run each month?",
        a: "The Shopify subscription and any apps, both paid by you directly, plus your domain renewal. We tell you what each one is and roughly what it comes to before you commit to anything, and we won’t install a paid app without pricing it first.",
      },
      {
        q: "I don’t have product photos or descriptions yet.",
        a: "Then that’s the first thing to sort, and it isn’t in the price. We’ll place and tidy what you send, but writing descriptions and taking photographs are separate jobs. We’d rather say so than quietly charge you for them.",
      },
      {
        q: "Do I own everything?",
        a: "Yes. Domain, Shopify account, theme files, images. All in your name and on your card from the start, so nobody can hold them over you.",
      },
      {
        q: "What do I pay upfront?",
        a: "Half. The rest at launch. If you’ve heard stories about deposits disappearing, that’s the point of the split.",
      },
      {
        q: "What if I’m not ready yet?",
        a: "Then we’ll say so. If you have twelve products and no photos, a shop is premature and we’d rather tell you that than take the money.",
      },
    ],
    close: {
      heading: "Tell us what you sell.",
      body: "A couple of lines is plenty. We’ll reply with what it costs, what it doesn’t include, and when it could be live. If you’re not ready for a shop yet, we’ll say that instead.",
      fields: [
        { name: "sells", label: "What do you sell?" },
        { name: "count", label: "Roughly how many products?" },
        { name: "email", label: "Your email", type: "email", autoComplete: "email" },
        { name: "name", label: "Name", autoComplete: "name" },
      ],
      submit: "Send it over",
      fine: "Reply within one working day · No call unless you want one · Half up front, half at launch · You own the domain, account and files from day one",
    },
  },
];

export const bySlug = (slug: string) => landingPages.find((l) => l.slug === slug);
