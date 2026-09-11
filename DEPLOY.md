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
| `/services/` `/projects/` `/contact/` `/privacy/` `/terms/` `/coming-soon/` | Existing pages, unchanged |

`/` is the only homepage. The previous one lived at `/home-legacy/` and has
been moved out to `../archive/homepages/global-legacy-home/`, along with the
eight components only it used.

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

1. **Scope ceilings.** 15 `[n]` blanks remain in the packages section of the
   homepage, plus four on `/lp/first-store/`. They render with a dotted
   underline. Delivery sign-off needed — see `../NewPivot/PLACEHOLDERS.md`.
2. **`[VAT line]`** appears on all four landing pages.
3. **The three work links** on the homepage point at `#work`, and the heading
   says "Three you can open now". Supply live URLs or change the heading.
4. **Convoa clearance.** Confirm in writing before publishing.
5. **`src/app/sitemap.ts`** still lists the old routes only. The `/lp/` pages
   are left out deliberately — they are paid destinations — but confirm the
   production domain, which is still a `TODO` in that file.
6. **The form does not submit.** `action="#"` on the homepage and all four
   landing pages. Point it at a handler before you spend on ads.
7. **Payload.** The export is ~46 MB, of which ~30 MB is legacy imagery — a
   19.8 MB `Hero video.mp4` still used by `/services/`, and a 9 MB `Cta bg.png`
   used by `/services/`, `/projects/` and `/contact/`. The new pages ship about
   2.4 MB in total. If you retire the legacy pages, delete those two files and
   the upload drops to a few MB.
