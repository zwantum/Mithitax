import type { Metadata, Viewport } from "next";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://mithitax.com"),
  title: {
    default: "Mithi Tax | Tax Consultant, GST & Company Registration Services",
    template: "%s | Mithi Tax",
  },
  description:
    "Get expert support for GST registration, company incorporation, income tax filing, accounting, bookkeeping and legal compliance with Mithi Tax in Darbhanga, Bihar.",
  keywords: [
    "Tax, Accounting & Legal Compliance Services",
    "GST Registration Services",
    "Company Registration in India",
    "Income Tax Filing Services",
    "Accounting and Bookkeeping Services",
    "Business Registration Consultancy",
    "Tax Consultant in Darbhanga",
    "GST Consultant in Bihar",
    "Business Compliance Services",
  ],
  authors: [{ name: "Mithi Tax Advisory" }],
  openGraph: {
    title: "Mithi Tax | Tax Consultant, GST & Company Registration Services",
    description:
      "Get expert support for GST registration, company incorporation, income tax filing, accounting, bookkeeping and legal compliance with Mithi Tax in Darbhanga, Bihar.",
    url: "https://mithitax.com",
    siteName: "Mithi Tax",
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Mithi Tax | Tax Consultant, GST & Company Registration Services",
    description:
      "Get expert support for GST registration, company incorporation, income tax filing, accounting, bookkeeping and legal compliance with Mithi Tax in Darbhanga, Bihar.",
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
