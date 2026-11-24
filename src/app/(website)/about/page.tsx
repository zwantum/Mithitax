import React from "react";
import Image from "next/image";
import { ShieldCheck, Target, Clock } from "lucide-react";
import { Button } from "@/components/ui/button";

export const metadata = {
  title: "About Us | Mithi Tax Financial & Legal Advisory",
  description:
    "Learn about Mithi Tax — our seasoned team of Chartered Accountants, Company Secretaries, and tax consultants committed to simplifying compliance across India.",
};

export default function AboutPage() {
  return (
    <div className="py-14 sm:py-20 bg-white">
      <div className="max-w-content mx-auto px-4 sm:px-6 lg:px-8">
        {/* Page Header */}
        <div className="max-w-3xl mx-auto text-center mb-16">
          <div className="inline-flex items-center gap-2 mb-3">
            <span className="w-2 h-2 rounded-full bg-brand-lime" />
            <span className="text-xs font-semibold tracking-wider text-brand-muted uppercase">
              ABOUT MITHI TAX
            </span>
          </div>
          <h1 className="font-serif text-3xl sm:text-5xl font-semibold text-brand-text tracking-tight mb-5">
            Empowering Indian Businesses with Confident Compliance
          </h1>
          <p className="text-base sm:text-lg text-brand-muted leading-relaxed font-normal">
            We bridge the gap between complex regulatory mandates and everyday business execution, letting entrepreneurs focus on innovation and sustainable growth.
          </p>
        </div>

        {/* Narrative Section */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center mb-20">
          <div
            className="lg:col-span-6 relative aspect-[4/3] rounded-3xl overflow-hidden border border-brand-border shadow-card bg-brand-alt"
            style={{
              position: "relative",
              width: "100%",
              aspectRatio: "4 / 3",
              overflow: "hidden",
            }}
          >
            <Image
              src="https://images.unsplash.com/photo-1556761175-5973dc0f32e7?auto=format&fit=crop&w=1200&q=85"
              alt="Mithi Tax corporate consultancy team collaborating"
              fill
              className="object-cover"
              style={{ objectFit: "cover" }}
            />
          </div>

          <div className="lg:col-span-6 space-y-5">
            <h2 className="font-serif text-2xl sm:text-3xl font-semibold text-brand-text">
              Built on Precision, Transparency, and Professional Integrity
            </h2>
            <p className="text-sm sm:text-base text-brand-muted leading-relaxed">
              Mithi Tax was established with a singular mission: to make corporate registrations, accounting, and tax compliance accessible, transparent, and completely hassle-free for entrepreneurs and enterprises across India.
            </p>
            <p className="text-sm sm:text-base text-brand-muted leading-relaxed">
              Over the years, our multi-disciplinary panel of Chartered Accountants, Company Secretaries, Corporate Lawyers, and Financial Analysts has supported thousands of firms — from nascent pre-seed startups navigating incorporation and GST to multi-crore enterprises seeking rigorous statutory audits and risk advisory.
            </p>
            <div className="pt-2">
              <Button href="/contact" variant="primary" size="md" withArrow>
                Schedule an Advisory Call
              </Button>
            </div>
          </div>
        </div>

        {/* Core Pillars */}
        <div className="mb-20">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <h2 className="font-serif text-2xl sm:text-3xl font-semibold text-brand-text mb-3">
              Our Core Operating Values
            </h2>
            <p className="text-sm text-brand-muted">
              Every client engagement is grounded in clear principles that protect your business reputation and financial health.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="p-7 rounded-2xl bg-brand-alt border border-brand-border">
              <div className="w-10 h-10 rounded-xl bg-brand-purple-subtle flex items-center justify-center text-brand-purple mb-4">
                <ShieldCheck className="w-5 h-5" />
              </div>
              <h3 className="font-serif text-lg font-semibold text-brand-text mb-2">
                Absolute Confidentiality
              </h3>
              <p className="text-xs sm:text-sm text-brand-muted leading-relaxed">
                Your financial statements, tax filings, and corporate contracts are protected with rigorous data governance and non-disclosure standards.
              </p>
            </div>

            <div className="p-7 rounded-2xl bg-brand-alt border border-brand-border">
              <div className="w-10 h-10 rounded-xl bg-brand-purple-subtle flex items-center justify-center text-brand-purple mb-4">
                <Clock className="w-5 h-5" />
              </div>
              <h3 className="font-serif text-lg font-semibold text-brand-text mb-2">
                Zero Late Penalties
              </h3>
              <p className="text-xs sm:text-sm text-brand-muted leading-relaxed">
                With automated tracking of statutory calendars, advance tax dates, and return schedules, we safeguard you from compounding interest and fines.
              </p>
            </div>

            <div className="p-7 rounded-2xl bg-brand-alt border border-brand-border">
              <div className="w-10 h-10 rounded-xl bg-brand-purple-subtle flex items-center justify-center text-brand-purple mb-4">
                <Target className="w-5 h-5" />
              </div>
              <h3 className="font-serif text-lg font-semibold text-brand-text mb-2">
                Upfront Fixed Pricing
              </h3>
              <p className="text-xs sm:text-sm text-brand-muted leading-relaxed">
                No hidden hourly charges or unexpected filing retainers. We provide upfront clarity on government fees and professional facilitation charges.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
