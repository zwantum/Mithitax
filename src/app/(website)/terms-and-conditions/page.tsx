import React from "react";
import { siteConfig } from "@/lib/constants";

export const metadata = {
  title: "Terms & Conditions | Mithi Tax",
  description: "Terms and conditions governing professional engagement with Mithi Tax.",
};

export default function TermsAndConditionsPage() {
  return (
    <div className="py-16 sm:py-24 bg-white">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 prose prose-slate">
        <h1 className="font-serif text-3xl sm:text-4xl font-semibold text-brand-text mb-6">
          Terms & Conditions
        </h1>
        <p className="text-sm text-brand-muted mb-8">
          Last updated: November 2026
        </p>

        <p className="text-brand-muted leading-relaxed">
          Welcome to Mithi Tax. By accessing our platform ({siteConfig.url}) or engaging our advisory, registration, or tax filing services, you agree to comply with the terms set forth herein.
        </p>

        <h2 className="font-serif text-xl font-semibold text-brand-text mt-8 mb-4">
          1. Scope of Professional Advisory
        </h2>
        <p className="text-brand-muted leading-relaxed">
          Mithi Tax acts as an independent corporate facilitation and tax consultancy. All government registrations, approvals, and certifications are subject to the statutory review and discretion of relevant authorities including the Ministry of Corporate Affairs (MCA), the Income Tax Department, and state licensing bodies.
        </p>

        <h2 className="font-serif text-xl font-semibold text-brand-text mt-8 mb-4">
          2. Client Responsibilities
        </h2>
        <p className="text-brand-muted leading-relaxed">
          Clients are responsible for ensuring the authenticity, veracity, and timely provision of all financial records, identity proofs, and corporate resolutions required for statutory filings.
        </p>
      </div>
    </div>
  );
}
