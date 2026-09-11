# Deploying the website pivot

Branch: `website-pivot` · static export, no Node needed on the server.

## What's in the zip

`centangle-website-pivot.zip` is the contents of `out/`, zipped **at the root**
— so extracting it into your web root puts `index.html` at the top level. Do
not extract it into a subfolder called `out`.

## Routes

| URL | What it is |
|---|---|
| `/` | The new one-pager |
| `/lp/shopify-speed/` | Ad landing page — Speed Fix, £950 |
| `/lp/shopify-migration/` | Ad landing page — Migration, £1,250 |
| `/lp/store-redesign/` | Ad landing page — Redesign, £1,250 |
| `/lp/first-store/` | Ad landing page — first shop, price TBC |
| `/privacy/` | Privacy Policy, rebuilt in the pivot design |
| `/terms/` | Terms of Service, rebuilt in the pivot design |

**That is the whole site — seven pages.** The old Centangle site is gone from
this build, not hidden: `/home-legacy/`, `/services/`, `/projects/`,
`/contact/` and `/coming-soon/` no longer exist and will 404. Everything that
served them — the `(legacy)` route group, fifteen components, `globals.css`,
`src/lib/` and 42 MB of imagery — is in `../archive/legacy-site/`.

**If those URLs are indexed**, add 301 redirects to `/` on the server before
this goes live, or you lose whatever ranking they carry.

Privacy and Terms keep their wording exactly as it was. Only the shell around
them changed.

The four `/lp/` pages are `noindex, follow` — they're paid destinations and
should not compete with the homepage in search. They are not linked from the
homepage by design.

## Server notes

- **Trailing slashes.** `next.config.ts` sets `trailingSlash: true`, so every
  page is a folder with an `index.html`. Apache and Nginx serve this without
  configuration. Do not add a rule that strips trailing slashes.
- **404.** `404/index.html` is generated. Point your server's error document at
  it if you want the styled page.
- **No server runtime.** Plain static files. Nothing to install, no Node
  process, no environment variables.

## Rebuilding

```bash
cd Global
npm install         # first time only
npm run build       # writes out/
cd out && zip -r ../centangle-website-pivot.zip .
```

## Before this replaces the live homepage

1. **Scope ceilings.** 14 `[n]` blanks remain in the packages section of the
   homepage — 3 in each of the first four packages, 2 in "Taking over a build"
   — plus four on `/lp/first-store/` (price, product ceiling, app ceiling,
   timeline). They render with a dotted underline. Delivery sign-off needed —
   see `../NewPivot/PLACEHOLDERS.md`.
2. **`[VAT line]`** appears on all four landing pages.
3. ~~The three work links~~ — done. They point at the live sites:
   eshopp.ca, seed-pk.com, convoa.com. All three open in a new tab.
4. **Convoa clearance.** Confirm in writing before publishing.
5. **`src/app/sitemap.ts`** still lists the old routes only. The `/lp/` pages
   are left out deliberately — they are paid destinations — but confirm the
   production domain, which is still a `TODO` in that file.
6. **The form does not submit.** `action="#"` on the homepage and all four
   landing pages. Point it at a handler before you spend on ads.
7. ~~Payload~~ — done. Removing the legacy pages took the export from **46 MB
   to 3.2 MB**. `public/` now holds only the brand mark, the three work
   screenshots and `.htaccess`.
8. **Two different addresses.** The footer says 23075 Sullivans Cove Sq,
   Brambleton, VA 20148. `/privacy/` and `/terms/` say the registered address
   is 30 N Gould St, Ste R, Sheridan, WY 82801, and `/terms/` puts the
   governing law in Wyoming. A registered agent address and an office address
   can legitimately differ — but confirm which is which before launch, because
   the terms are enforceable and the footer is not.
9. **The privacy policy describes a site that no longer exists.** It names
   Web3Forms as the form processor and describes a newsletter signup. This
   build has neither: the forms do not submit at all, and there is no
   newsletter. Whichever way item 6 is resolved, this section needs to match.
