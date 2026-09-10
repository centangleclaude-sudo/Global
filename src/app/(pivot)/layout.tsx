import type { Metadata, Viewport } from "next";
import type { ReactNode } from "react";
import { Bricolage_Grotesque, Instrument_Sans, JetBrains_Mono } from "next/font/google";
import "./pivot.css";

const bricolage = Bricolage_Grotesque({
  subsets: ["latin"],
  weight: ["500", "600", "700"],
  variable: "--font-bricolage",
  display: "swap",
});
const instrument = Instrument_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  style: ["normal", "italic"],
  variable: "--font-instrument",
  display: "swap",
});
const jetbrains = JetBrains_Mono({
  subsets: ["latin"],
  weight: ["400", "500"],
  variable: "--font-jetbrains",
  display: "swap",
});

export const metadata: Metadata = {
  title:
    "Centangle Global — Design first, then build. Websites and online stores for UK and US businesses",
  description:
    "Websites and online stores on Shopify, WordPress and WooCommerce. Every page designed and approved before anything is coded. Fixed scope with the exclusions printed, everything in your name on handover day, thirty days of fixes.",
  icons: { icon: "/brand/mark.png", apple: "/brand/mark.png" },
  openGraph: {
    type: "website",
    title: "Centangle Global — Design first, then build",
    description:
      "Websites and online stores on Shopify, WordPress and WooCommerce. Designed and approved before anything is coded.",
  },
};

export const viewport: Viewport = { themeColor: "#F5F2EC", colorScheme: "light" };

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    /* suppressHydrationWarning: the inline script below adds a class to <html>
       before React hydrates, which is a deliberate mismatch, not a bug. */
    <html
      lang="en-GB"
      className={`${bricolage.variable} ${instrument.variable} ${jetbrains.variable}`}
      suppressHydrationWarning
    >
      <head>
        {/* Hides reveal targets before first paint so there is no flash of
            un-animated content — and arms a failsafe that un-hides them if the
            motion script never runs, so a JS failure cannot blank the page. */}
        <script
          dangerouslySetInnerHTML={{
            __html:
              "document.documentElement.classList.add('js');" +
              "window.__revealFailsafe=setTimeout(function(){document.documentElement.classList.remove('js')},2500);",
          }}
        />
      </head>
      <body>{children}</body>
    </html>
  );
}
