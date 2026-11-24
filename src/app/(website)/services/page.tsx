import React from "react";
import Link from "next/link";
import {
  Building2,
  FileSpreadsheet,
  ReceiptText,
  ShieldCheck,
  Scale,
  ArrowRight,
  CheckCircle2,
} from "lucide-react";
import { serviceCategories } from "@/lib/constants";
import { Button } from "@/components/ui/button";

export const metadata = {
  title: "All Services | Mithi Tax Corporate & Tax Solutions",
  description:
    "Explore our complete suite of corporate services: business setup, accounting & records, income tax filing, GST compliance, and regulatory licensing.",
};

const categoryIcons = {
  "business-setup": Building2,
  "accounting-records": FileSpreadsheet,
  "income-tax-records": ReceiptText,
  gst: ShieldCheck,
  "special-registrations": Scale,
};

export default function ServicesPage() {
  return (
    <div className="py-14 sm:py-20 bg-white">
      <div className="max-w-content mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="max-w-3xl mx-auto text-center mb-16">
          <div className="inline-flex items-center gap-2 mb-3">
            <span className="w-2 h-2 rounded-full bg-brand-lime" />
            <span className="text-xs font-semibold tracking-wider text-brand-muted uppercase">
              SERVICES DIRECTORY
            </span>
          </div>
          <h1 className="font-serif text-3xl sm:text-5xl font-semibold text-brand-text tracking-tight mb-5">
            Complete Business Solutions, Under One Roof
          </h1>
          <p className="text-base sm:text-lg text-brand-muted leading-relaxed font-normal">
            Every service is handled by experienced Chartered Accountants, Company Secretaries, and compliance specialists.
          </p>
        </div>

        {/* Categories List */}
        <div className="space-y-16">
          {serviceCategories.map((cat, idx) => {
            const Icon =
              categoryIcons[cat.id as keyof typeof categoryIcons] || Building2;
            return (
              <div
                key={cat.id}
                id={cat.id}
                className="p-8 sm:p-10 rounded-3xl bg-brand-alt/40 border border-brand-border scroll-mt-28"
              >
                <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 pb-6 mb-8 border-b border-brand-border">
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-xl bg-brand-purple-subtle border border-brand-purple/20 flex items-center justify-center text-brand-purple">
                      <Icon className="w-6 h-6" strokeWidth={1.75} />
                    </div>
                    <div>
                      <div className="text-xs font-semibold uppercase tracking-wider text-brand-purple mb-0.5">
                        Category 0{idx + 1} · {cat.count} Services
                      </div>
                      <h2 className="font-serif text-2xl sm:text-3xl font-semibold text-brand-text">
                        {cat.title}
                      </h2>
                    </div>
                  </div>

                  <div className="flex items-center gap-4">
                    <p className="text-sm text-brand-muted max-w-md hidden sm:block">
                      {cat.description}
                    </p>
                    <Link
                      href={`/services/category/${cat.slug}`}
                      className="text-xs font-semibold text-brand-purple hover:underline inline-flex items-center gap-1"
                    >
                      <span>Category Overview</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </Link>
                  </div>
                </div>

                {/* Sub-services Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
                  {cat.services.map((sub) => (
                    <div
                      key={sub.slug}
                      className="p-5 rounded-2xl bg-white border border-brand-border/80 shadow-subtle hover:shadow-card hover:border-brand-purple/30 transition flex flex-col justify-between"
                    >
                      <div>
                        <div className="flex items-center gap-2 text-brand-text font-semibold text-base mb-2">
                          <CheckCircle2 className="w-4 h-4 text-brand-purple flex-shrink-0" />
                          <span>{sub.title}</span>
                        </div>
                        {sub.description && (
                          <p className="text-xs text-brand-muted leading-relaxed">
                            {sub.description}
                          </p>
                        )}
                      </div>

                      <div className="mt-4 pt-3 border-t border-brand-border/60 flex items-center justify-between">
                        <Link
                          href={`/services/${sub.slug}`}
                          className="inline-flex items-center gap-1 text-xs font-semibold text-brand-purple hover:underline"
                        >
                          <span>View Details</span>
                          <ArrowRight className="w-3.5 h-3.5" />
                        </Link>
                        <Link
                          href="/contact"
                          className="text-xs text-brand-muted hover:text-brand-text"
                        >
                          Enquire →
                        </Link>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
