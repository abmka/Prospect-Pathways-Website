import type { Metadata, Viewport } from "next";
import type { ReactNode } from "react";
import SiteHeader from "../components/SiteHeader";
import SiteFooter from "../components/SiteFooter";
import AccessibilityBar from "../components/AccessibilityBar";
import { site } from "../site.config";
import "./globals.css";

/** Poppins is self-hosted from the @fontsource package: no third-party font request at runtime. */
import "@fontsource/poppins/300.css";
import "@fontsource/poppins/400.css";
import "@fontsource/poppins/500.css";
import "@fontsource/poppins/600.css";
import "@fontsource/poppins/700.css";

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: {
    default: `${site.name} — supported accommodation for adults in Birmingham`,
    template: `%s — ${site.name}`,
  },
  description: site.tagline,
  applicationName: site.name,
  alternates: { canonical: "./" },
  openGraph: {
    type: "website",
    siteName: site.name,
    locale: "en_GB",
    title: `${site.name} — supported accommodation for adults in Birmingham`,
    description: site.tagline,
  },
  twitter: { card: "summary_large_image" },
  robots: { index: true, follow: true },
};

export const viewport: Viewport = {
  themeColor: "#0b4b55",
  width: "device-width",
  initialScale: 1,
};

/** Applies remembered text-size / contrast before first paint, so nothing jumps. */
const restoreA11y = `(function(){try{var s=localStorage.getItem('pp-text-size');if(s==='large'||s==='larger'){document.documentElement.setAttribute('data-text-size',s)}if(localStorage.getItem('pp-contrast')==='high'){document.documentElement.setAttribute('data-contrast','high')}}catch(e){}})();`;

const organisationJsonLd = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: site.name,
  legalName: site.legalName,
  url: site.url,
  logo: `${site.url}/logo.png`,
  description: site.tagline,
  areaServed: { "@type": "City", name: "Birmingham" },
  address: {
    "@type": "PostalAddress",
    streetAddress: site.address.line1,
    addressLocality: site.address.city,
    addressRegion: site.address.region,
    postalCode: site.address.postcode,
    addressCountry: "GB",
  },
  telephone: site.phone,
  email: site.email,
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en-GB">
      <head>
        <script dangerouslySetInnerHTML={{ __html: restoreA11y }} />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organisationJsonLd) }}
        />
      </head>
      <body>
        <a className="skip-link" href="#main">
          Skip to content
        </a>
        <AccessibilityBar />
        <SiteHeader />
        <main id="main">{children}</main>
        <SiteFooter />
      </body>
    </html>
  );
}
