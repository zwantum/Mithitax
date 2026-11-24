import type { Metadata, Viewport } from "next";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://mithitax.com"),
  title: {
    default: "Mithi Tax | Business Setup, Accounting, GST & Tax Compliance",
    template: "%s | Mithi Tax",
  },
  description:
    "End-to-end corporate financial and legal consultancy. Business registration, accounting, income tax records, GST compliance, and regulatory licensing under one roof.",
  keywords: [
    "Mithi Tax",
    "Company Registration India",
    "GST Filing Services",
    "Income Tax Consultancy",
    "Accounting and Bookkeeping",
    "LLP Registration",
    "Tax Compliance India",
    "Corporate Compliance",
  ],
  authors: [{ name: "Mithi Tax Advisory" }],
  openGraph: {
    title: "Mithi Tax — Simplifying Business. Strengthening Financial Confidence.",
    description:
      "Expert corporate and tax consulting for startups, SMEs, and entrepreneurs across India.",
    url: "https://mithitax.com",
    siteName: "Mithi Tax",
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Mithi Tax — Simplifying Business. Strengthening Financial Confidence.",
    description: "End-to-end support for business setup, accounting, taxation and regulatory compliance.",
  },
  robots: {
    index: true,
    follow: true,
  },
  icons: {
    icon: [
      { url: "/logos/MithiTax_Logo_Siteicon.webp", type: "image/webp" },
      { url: "/favicon.ico" },
    ],
    shortcut: "/logos/MithiTax_Logo_Siteicon.webp",
    apple: [
      { url: "/logos/MithiTax_Logo_Siteicon.webp", type: "image/webp" },
    ],
  },
};

export const viewport: Viewport = {
  themeColor: "#710ac6",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/logos/MithiTax_Logo_Siteicon.webp" type="image/webp" />
        <link rel="apple-touch-icon" href="/logos/MithiTax_Logo_Siteicon.webp" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=DM+Sans:ital,opsz,wght@0,9..40,100..1000;1,9..40,100..1000&family=Playfair+Display:ital,wght@0,400..900;1,400..900&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="min-h-screen bg-brand-bg font-sans text-brand-text flex flex-col selection:bg-brand-purple selection:text-white">
        {children}
      </body>
    </html>
  );
}
