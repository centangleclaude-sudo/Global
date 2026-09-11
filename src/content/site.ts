/**
 * All page copy lives here.
 *
 * `[n]`, `[ ]` and `[bracketed phrases]` are deliberate blanks. They render
 * with a dotted underline via <Ph>, and every one is listed in report.md.
 * Nothing in this file is invented: no price, no date, no client claim.
 */

export const site = {
  name: "Centangle Global",
  tagline: "Shopify · WordPress · WooCommerce",
  blurb:
    "Websites and online stores, designed and approved before anything is coded. US-registered, with delivery teams in Pakistan.",
  email: "contact@centangleglobal.com",
  whatsapp: { label: "+1 (307) 269-6427", href: "https://wa.me/13072696427" },
  calendly: "https://calendly.com/centangle/book-a-call-centangle-global",
  legalName: "Centangle Global LLC",
};

/* From the live centangleglobal.com footer. */
export const socials = [
  { label: "LinkedIn", href: "https://www.linkedin.com/company/centangleglobal" },
  { label: "Instagram", href: "https://instagram.com/centangleglobal" },
  { label: "Facebook", href: "https://facebook.com/centangleglobal" },
  { label: "X", href: "https://x.com/centangleglobal" },
  { label: "Behance", href: "https://www.behance.net/centangle" },
] as const;

export const nav = [
  { href: "#work", label: "Work" },
  { href: "#build", label: "What we build" },
  { href: "#process", label: "How it works" },
  { href: "#packages", label: "Packages" },
  { href: "#questions", label: "Questions" },
];

export const hero = {
  headline: ["A store that looks like the business you", "’ve built."],
  sub: "You’ve spent years on the products. The website should look like it. Every page is designed first. You see the whole store in Figma, with your products in it, and we build exactly what you approve.",
  primary: { href: "#start", label: "Start a project" },
  secondary: { href: "#work", label: "See our work" },
  fieldCaption: "Design approved before code",
};

export const marquee = [
  "Designed before it is built",
  "Fixed scope, exclusions printed",
  "Everything in your name on handover day",
  "Two rounds of changes included",
  "Thirty days of fixes",
];

export const situations = {
  kicker: "01 / Situations",
  heading: "What usually brings someone here",
  items: [
    {
      title: "You’ve outgrown the theme you started on.",
      body: "It was right when you had twenty products. Now the collection pages don’t work the way you sell, and the theme editor has run out of options. We design what you actually need and build it, rather than bending a theme until it breaks.",
    },
    {
      title: "Your store doesn’t look like your competitors’.",
      body: "Same products, better website, and you can see it costing you. This is a design problem before it is a technical one, which is why the design comes first and you approve it before anything is built.",
    },
    {
      title: "You’re selling online properly for the first time.",
      body: "A business that already works, going from a Facebook page or a brochure site to a real shop. Products, payments, shipping, tax, all set up and explained once in plain words.",
    },
    {
      title: "You’re moving platform.",
      body: "From WooCommerce, Wix, Magento or BigCommerce to Shopify, or off a site you can’t edit. Products, customers and orders come across. Every old web address is redirected to its new one, so old links and search results still work.",
    },
    {
      title: "Someone started it and it isn’t finished.",
      body: "A build that stalled, or a site nobody can update. We look at what’s there, tell you what’s worth keeping and what isn’t, and give you a fixed price to finish it.",
    },
  ],
};

export const build = {
  kicker: "02 / What we build",
  heading: "What we build",
  services: [
    {
      label: "Service 01",
      name: "Shopify",
      tone: "blue" as const,
      items: [
        "A store built on a theme, set up around your products rather than the other way round",
        "A store designed from scratch, for when a theme won’t carry the brand",
        "Moving a store to Shopify, with every old web address redirected so your links and search results keep working",
        "Taking over a store that was started and left",
      ],
    },
    {
      label: "Service 02",
      name: "WordPress and WooCommerce",
      tone: "ink" as const,
      items: [
        "A designed site you can edit yourself, without calling a developer for every change",
        "An online shop on WooCommerce, with payments, shipping and tax set up and tested",
        "A rebuild of a site that can’t be edited, into one that can",
        "Taking over and finishing a build someone else started",
      ],
    },
  ],
  note: "What each package covers, what it doesn’t, and the size it stops at are all further down. Larger projects, custom features and anything with logins for your customers are quoted after a call, in writing, with their own list of what’s not included.",
};

export const work = {
  kicker: "03 / Work",
  heading: ["Three you can ", "open now"],
  note: "We add work here as it launches and as clients agree to it being shown.",
  items: [
    {
      name: "eshopp",
      platform: "Shopify",
      body: "Mobile and repair retail in Canada. Product catalogue, variants, and a storefront built to survive comparison with the larger sellers in the same category.",
      image: "/work/eshopp.jpg",
      alt: "The eshopp storefront open on a laptop at a phone-repair bench.",
      href: "https://eshopp.ca/",
    },
    {
      name: "SEED",
      platform: "WordPress",
      body: "A website for a UK FCDO-funded programme.",
      image: "/work/seed.jpg",
      alt: "The SEED programme homepage open on a laptop.",
      href: "https://seed-pk.com/",
    },
    {
      name: "Convoa",
      platform: "WordPress",
      body: "An AI voice agent company in the United States. Nine industry landing pages sharing one design system, so their team can add a tenth without a designer.",
      image: "/work/convoa.jpg",
      alt: "The Convoa landing page on a desktop display.",
      href: "https://convoa.com/",
    },
  ],
};

export const process = {
  kicker: "04 / Process",
  heading: ["Design first,", "then build"],
  lead: "The order matters more than anything else we do. Most projects that go wrong go wrong because the client saw the thing for the first time in a browser, when it was already built.",
  note: "Payment is in two stages: half to start, half at launch. Never all of it up front. If you have been burned before, that is the point of the split.",
  noteMeta: "US-registered, with delivery teams in Pakistan.",
  steps: [
    {
      title: "A 20-minute call",
      body: "What you sell, what you have now, what it needs to do. If a package fits, we say which. If nothing does, we say that too.",
    },
    {
      title: "The scope, in writing",
      body: "What’s included, what isn’t, the price, the dates, and what we need from you and by when. Nothing starts until you’ve agreed it.",
    },
    {
      title: "The design",
      body: "Your pages in Figma, with your products and your words in them. You go through it and mark what you’d change. Two rounds of changes are included.",
    },
    {
      title: "You approve it",
      body: "Only then does anyone write code. This is the step that keeps the last week quiet.",
    },
    {
      title: "The build",
      body: "You get a written note at the end of every week on what moved and what is next. You can open the staging site, which is the private copy of your site while it is being built, whenever you like.",
    },
    {
      title: "Launch and handover",
      body: "On a dated day. What you receive is listed further down.",
    },
    {
      title: "Thirty days of fixes",
      body: "Anything that breaks in the first thirty days after launch, we fix, at no charge.",
    },
  ],
};

export const packages = {
  kicker: "05 / Packages",
  heading: ["What’s included, and what isn’t, at ", "the same size"],
  lead: "Five packages. Pick the one that sounds like you and read both columns — they are printed at the same weight on purpose. Every package is a fixed price, quoted in writing after a 20-minute call, and anything extra is priced before it’s done, never after.",
  items: [
    {
      tab: "A website on WordPress",
      meta: "[n] pages · live in [n] weeks",
      desc: "A designed site you can edit yourself, with a contact form that sends to your email and hosting set up in your name, on your card.",
      included: [
        "[n] designed pages you can edit yourself",
        "A contact form that sends to your email",
        "Hosting set up in your name, on your card",
        "A short, named list of plugins — each one in the handover, chosen for what it costs you in speed",
        "A recorded walkthrough of the three things you’ll most want to change",
        "Thirty days of fixes after launch",
      ],
      excluded: [
        "Hosting, paid by you to the host",
        "Domain renewal",
        "Writing your copy, beyond editing what you send",
        "Photography",
        "Pages beyond the ones included",
        "Anything after the thirty days",
      ],
    },
    {
      tab: "An online shop on WooCommerce",
      meta: "up to [n] products · live in [n] weeks",
      desc: "A WooCommerce shop designed around what you sell, with the plugins chosen with an eye on what they cost you in speed.",
      included: [
        "A shop designed around what you sell",
        "Up to [n] products loaded from what you send",
        "Payments, shipping and tax set up",
        "Plugins chosen for what they cost you in speed",
        "Hosting in your name, and a recorded walkthrough",
        "Thirty days of fixes",
      ],
      excluded: [
        "Hosting, paid by you to the host",
        "Domain renewal",
        "Paid plugin licences, each named and priced before it is installed",
        "Product photography",
        "Product descriptions beyond editing what you send",
        "Products above the number included",
        "Anything after the thirty days",
      ],
    },
    {
      tab: "A Shopify store",
      meta: "up to [n] products · live in [n] weeks",
      desc: "A Shopify theme set up around your products, colours and logo — or designed from scratch if that’s what the brief needs.",
      included: [
        "A theme set up around your products, colours and logo",
        "Or designed from scratch if the brief needs it",
        "Up to [n] products loaded",
        "Payments, shipping and tax set up",
        "Every app named, with its monthly cost, before it is installed",
        "Domain connected, a recorded walkthrough, thirty days of fixes",
      ],
      excluded: [
        "The Shopify subscription, paid by you to Shopify",
        "App subscriptions, named and priced before you agree to any",
        "A paid theme licence if the design needs one",
        "Product photography",
        "Product descriptions beyond editing what you send",
        "Products above the number included",
        "Anything after the thirty days",
      ],
    },
    {
      tab: "Moving a store to Shopify",
      meta: "up to [n] products · [n] to [n] weeks",
      desc: "Products, customers and order history moved across, with every old web address redirected so old links and search results still work.",
      included: [
        "Products, customers and order history moved across",
        "Every old web address redirected to its new one",
        "The old store kept live on a private address for an agreed period after launch",
        "A written rollback agreed before anything moves",
        "Switch-over at an hour you choose",
        "Thirty days of fixes",
      ],
      excluded: [
        "The Shopify subscription and app fees",
        "Products above the number included",
        "Non-standard product data — subscriptions, bundles, custom fields — quoted separately",
        "Cancelling your old platform, which you do once the new one has settled",
        "Any promise about where you appear on Google. We map every redirect, which is the thing that protects your position. Google is not ours to promise.",
      ],
    },
    {
      tab: "Taking over a build",
      meta: "fixed once we’ve seen it · [n] to [n] weeks",
      desc: "A written account of what was built, what was not, and what is worth keeping — then a fixed price to finish it.",
      included: [
        "A written account of what was built, before you commit to finishing it",
        "What was built, what was not, and what is worth keeping",
        "A fixed price to finish it",
        "The build completed",
        "The same handover as every other project",
      ],
      excluded: [
        "Repairing work where rebuilding costs less, which we’ll tell you about before doing either",
        "Content you haven’t written",
        "Photography",
        "Anything a previous developer still holds that can’t be recovered, which we’ll identify on day one",
      ],
    },
  ],
  footNote:
    "Bigger than these? Membership sites, catalogues above the ceilings, custom features, anything with customer logins: quoted after the call, in writing, with its own list of what’s not included.",
  footSmall:
    "Already have a site and just need someone to look at it properly? A paid diagnostic call, and the fee comes off a larger project if you go ahead.",
};

export const handover = {
  kicker: "06 / Handover",
  heading: "What you get on handover day",
  lead: "If we’ve done the job properly, you could take the whole thing elsewhere the next morning and lose nothing. That’s the test we build to.",
  items: [
    "Your domain, registered in your name, on your card, with you as the account holder.",
    "Your hosting account, or your Shopify account, in your name, on your card.",
    "The admin login, and every other login we created, in a document you keep.",
    "The theme and source files, in a folder you can download.",
    "A written list of every recurring cost: what it is, who it is paid to, how much, and when.",
    "A recorded walkthrough of the three things you’ll most often want to change.",
    "The name and email of the person to contact if something breaks in the next thirty days.",
  ],
};

export const faq = {
  kicker: "07 / Questions",
  heading: "Questions",
  lead: "Anything not covered here, ask us. Every message gets a reply within one working day.",
  items: [
    {
      q: "How long does it take?",
      a: "It depends on which of the five above you need, and the dates are written into the scope before you agree to anything. The clock starts when you approve the design, not when you first email.",
    },
    {
      q: "What do you need from me?",
      a: "Your products or content, your logo if you have one, and answers within a day or two when we ask something. The scope lists exactly what we need and when we need it, so nothing waits on a surprise.",
    },
    {
      q: "Can I edit it myself afterwards?",
      a: "Yes. You get the admin login and a recorded walkthrough of the three things you’ll most often want to change. If you’d rather never touch it, that’s fine too, and you’ll know what a change costs before you ask for it.",
    },
    {
      q: "Will this get me more sales, or a better position on Google?",
      a: "A better-built site helps, but we won’t put a number on it and you should be wary of anyone who does. What we’ll commit to is the price, the date, what’s in the handover and how fast we reply. Those are ours to control.",
    },
    {
      q: "What if I don’t like the design?",
      a: "Two rounds of changes are included, and nothing is built until you’ve approved it. That’s the whole reason the design comes first.",
    },
    {
      q: "What happens if you go quiet?",
      a: "If we stop replying and haven’t told you in advance why, you keep everything built so far and owe nothing further. Your domain, hosting and logins are in your name from the start, so there’s nothing for us to hold.",
    },
    {
      q: "Do you do SEO, ads or email marketing?",
      a: "No. We design and build sites and stores. If you need marketing, we’ll say so plainly rather than sell you something we don’t do.",
    },
    {
      q: "Where are you based?",
      a: "Centangle Global is US-registered, with delivery teams in Pakistan, and we have been building websites since 2013. We work four to five hours ahead of the UK, so most of your working day overlaps ours, and every message gets a reply within one working day.",
    },
    {
      q: "What if it breaks after the thirty days?",
      a: "Email us. You get a fixed price for the fix, in writing, before anything is done. There is no retainer and nothing you have to keep paying.",
    },
  ],
};

export const start = {
  kicker: "08 / Start",
  heading: "Start a project",
  lead: "Tell us what you sell and what you need. You’ll get a reply with which package fits, what it costs, what it doesn’t include, and when it could be live. If nothing fits, we’ll say that instead.",
  fields: [
    { name: "name", label: "Your name", type: "text", autoComplete: "name", required: true },
    { name: "email", label: "Email", type: "email", autoComplete: "email", required: true },
    {
      name: "sells",
      label: "What you sell",
      type: "text",
      autoComplete: "organization",
      placeholder: "Handmade ceramics, plumbing, a café…",
    },
  ],
  textarea: { name: "needs", label: "What you need", placeholder: "A few lines is plenty" },
  submit: "Send",
  fine: "No newsletter, no follow-up sequence. One reply from a person.",
};

export const footer = {
  /* Same domain as the live site, so these resolve once this ships there. */
  legal: [
    { href: "/privacy/", label: "Privacy" },
    { href: "/terms/", label: "Terms" },
    { href: "/terms/#disclaimer", label: "Legal disclaimer" },
  ],
};
