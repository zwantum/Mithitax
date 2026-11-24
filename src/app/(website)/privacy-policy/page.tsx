import React from "react";
import { siteConfig } from "@/lib/constants";

export const metadata = {
  title: "Privacy Policy | Mithi Tax",
  description: "Privacy policy and client data protection commitments of Mithi Tax.",
};

export default function PrivacyPolicyPage() {
  return (
    <div className="py-16 sm:py-24 bg-white">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 prose prose-slate">
        <h1 className="font-serif text-3xl sm:text-4xl font-semibold text-brand-text mb-6">
          Privacy Policy
        </h1>
        <p className="text-sm text-brand-muted mb-8">
          Last updated: November 2026
        </p>

        <p className="text-brand-muted leading-relaxed">
          At Mithi Tax ({siteConfig.url}), we hold the confidentiality and security of our clients&apos; financial, corporate, and personal records in the highest regard. This Privacy Policy details our protocols for collecting, storing, and safeguarding your information.
        </p>

        <h2 className="font-serif text-xl font-semibold text-brand-text mt-8 mb-4">
          1. Information We Collect
        </h2>
        <p className="text-brand-muted leading-relaxed">
          When you request a consultation or engage our professional services, we collect necessary KYC documents, PAN/TAN information, corporate certificates, contact details, and financial statements strictly required to fulfill statutory filings with MCA, GSTN, and CBDT.
        </p>

        <h2 className="font-serif text-xl font-semibold text-brand-text mt-8 mb-4">
          2. Data Confidentiality & Non-Disclosure
        </h2>
        <p className="text-brand-muted leading-relaxed">
          All client information is treated with strict professional confidentiality. We never sell, lease, or monetize client data. Information is only submitted to designated government portals or authorized regulatory authorities upon your verified consent.
        </p>

        <h2 className="font-serif text-xl font-semibold text-brand-text mt-8 mb-4">
          3. Contact Us
        </h2>
        <p className="text-brand-muted leading-relaxed">
          For any data privacy inquiries, please contact our Compliance Officer at {siteConfig.email}.
        </p>
      </div>
    </div>
  );
}
