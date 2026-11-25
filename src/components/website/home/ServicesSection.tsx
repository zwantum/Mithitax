"use client";

import React, { useRef } from "react";
import Link from "next/link";
import {
  Building2,
  FileSpreadsheet,
  ReceiptText,
  ShieldCheck,
  Scale,
  Users,
  FileCheck,
  Calculator,
  FileText,
  Key,
  Award,
  ArrowRight,
  CheckCircle2,
  ChevronLeft,
  ChevronRight,
  LucideIcon,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { serviceCategories } from "@/lib/constants";

// Icon mapping per specific service
const serviceIconMap: Record<string, LucideIcon> = {
  "company-incorporation": Building2,
  "gst-returns": ShieldCheck,
  "gst-registration": ShieldCheck,
  "tax-compliance-support": ReceiptText,
  "accounting-bookkeeping": FileSpreadsheet,
  "statutory-registrations": Award,
  "llp-registration": Users,
  "tds-tcs-reconciliation": FileCheck,
  "payroll-hr-management": Calculator,
  "roc-mca-services": FileText,
  "digital-signature-certificate": Key,
  "legal-agreements": Scale,
  "gem-portal-registration": Award,
  "pan-tan-application": ReceiptText,
  "eway-bills": ShieldCheck,
  "forecasted-financials": FileSpreadsheet,
  "cost-accounting": Calculator,
  "capital-gain-tax-valuation": ReceiptText,
  "ngo-registration": Building2,
  "proprietorship-partnership": Users,
  "nidhi-company-registration": Building2,
  "shop-establishment": Building2,
  "project-viability-report": FileSpreadsheet,
  "financial-statements": FileSpreadsheet,
  "gst-input-reconciliation": ShieldCheck,
  "other-gst-compliances": ShieldCheck,
  "search-seizure-consultancy": ReceiptText,
};

// Priority slugs for the top flagship services to show first
const prioritySlugs = [
  "company-incorporation",
  "gst-registration",
  "tax-compliance-support",
  "accounting-bookkeeping",
  "statutory-registrations",
  "llp-registration",
  "gst-returns",
  "tds-tcs-reconciliation",
  "payroll-hr-management",
  "roc-mca-services",
  "digital-signature-certificate",
  "legal-agreements",
  "gem-portal-registration",
  "pan-tan-application",
  "eway-bills",
  "forecasted-financials",
];

export default function ServicesSection() {
  const scrollRef = useRef<HTMLDivElement>(null);

  // Flatten all services and sort them so top featured services appear first
  const allServices = serviceCategories.flatMap((category) =>
    category.services.map((service) => ({
      ...service,
      categoryName: category.title,
    }))
  );

  const sortedServices = [...allServices].sort((a, b) => {
    const indexA = prioritySlugs.indexOf(a.slug);
    const indexB = prioritySlugs.indexOf(b.slug);
    if (indexA !== -1 && indexB !== -1) return indexA - indexB;
    if (indexA !== -1) return -1;
    if (indexB !== -1) return 1;
    return 0;
  });

  const scroll = (direction: "left" | "right") => {
    if (scrollRef.current) {
      const scrollAmount = scrollRef.current.clientWidth * 0.75;
      scrollRef.current.scrollBy({
        left: direction === "left" ? -scrollAmount : scrollAmount,
        behavior: "smooth",
      });
    }
  };

  return (
    <section id="services" className="py-12 md:py-18 bg-gradient-to-b from-[#F7F8FC] via-[#F4F4FA] to-white overflow-hidden">
      <div className="max-w-content mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Eyebrow Label */}
        <div className="mb-3">
          <span className="text-xs font-semibold tracking-wider text-brand-purple uppercase">
            OUR SERVICES
          </span>
          <div className="w-8 h-[2px] bg-brand-lime/70 mt-1.5 rounded-full" />
        </div>

        {/* Section Header Grid: Heading & Description in same alignment */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-12 items-start mb-10 md:mb-12">
          <div className="lg:col-span-7">
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-[2.65rem] font-semibold text-brand-text tracking-tight leading-[1.2]">
              Complete Business Solutions,
              <br />
              Under One Roof
            </h2>
          </div>

          <div className="lg:col-span-5 flex flex-col justify-between gap-3 relative lg:pl-6">
            <div className="relative">
              <div className="hidden lg:block absolute -left-6 top-1 bottom-1 w-[2px] bg-brand-lime/50 rounded-full" />
              <p className="text-sm sm:text-[0.9375rem] text-brand-muted leading-relaxed">
                Whether you&apos;re starting a new business, managing financial records or handling tax obligations, Mithi Tax offers comprehensive business registration, accounting, taxation and legal compliance services to help you operate with confidence.
              </p>
            </div>

            {/* Scroll Navigation Controls: Placed below description, retaining right alignment */}
            <div className="flex items-center justify-end gap-2 pt-1">
              <button
                type="button"
                onClick={() => scroll("left")}
                className="w-8 h-8 sm:w-9 sm:h-9 rounded-full bg-white border border-slate-200/90 shadow-sm flex items-center justify-center text-brand-text hover:bg-brand-purple hover:text-white hover:border-brand-purple transition-all duration-200 active:scale-95 cursor-pointer"
                aria-label="Scroll services left"
              >
                <ChevronLeft className="w-4 h-4" />
              </button>
              <button
                type="button"
                onClick={() => scroll("right")}
                className="w-8 h-8 sm:w-9 sm:h-9 rounded-full bg-white border border-slate-200/90 shadow-sm flex items-center justify-center text-brand-text hover:bg-brand-purple hover:text-white hover:border-brand-purple transition-all duration-200 active:scale-95 cursor-pointer"
                aria-label="Scroll services right"
              >
                <ChevronRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>

        {/* Horizontal Scroll Services Track with top/bottom padding so cards are never cut off */}
        <div
          ref={scrollRef}
          className="flex gap-5 overflow-x-auto no-scrollbar [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none] snap-x snap-mandatory scroll-smooth pt-4 pb-6 px-1 sm:px-0 mb-10"
        >
          {sortedServices.map((service) => {
            const Icon = serviceIconMap[service.slug] || FileCheck;
            return (
              <div
                key={service.slug}
                className="group relative flex flex-col justify-between p-6 bg-gradient-to-b from-white to-[#FAF9FE] rounded-2xl border border-slate-200/90 shadow-[0_4px_16px_rgba(23,21,45,0.03)] transition-all duration-300 hover:shadow-[0_16px_36px_-6px_rgba(113,10,198,0.12),0_4px_12px_rgba(23,21,45,0.04)] hover:-translate-y-1 hover:border-brand-purple/40 w-[275px] sm:w-[305px] lg:w-[calc(20%-16px)] flex-shrink-0 snap-start"
              >
                <div>
                  {/* Icon */}
                  <div className="w-11 h-11 rounded-xl bg-brand-purple-light/80 border border-brand-purple/15 flex items-center justify-center text-brand-purple mb-5 transition-all duration-300 group-hover:bg-brand-purple group-hover:text-white group-hover:border-brand-purple group-hover:shadow-[0_6px_16px_rgba(113,10,198,0.25)]">
                    <Icon className="w-5 h-5 transition-transform duration-300 group-hover:scale-105" strokeWidth={1.8} />
                  </div>

                  {/* Service Title */}
                  <h3 className="text-[1.05rem] font-semibold text-brand-text mb-2 tracking-tight group-hover:text-brand-purple transition-colors leading-snug line-clamp-2 min-h-[2.6rem]">
                    {service.title}
                  </h3>

                  {/* Service Description */}
                  <p className="text-[0.8125rem] text-brand-muted leading-relaxed mb-4 line-clamp-3 min-h-[3.6rem]">
                    {service.description}
                  </p>

                  {/* Deliverables Preview (2 Bullets) */}
                  {service.deliverables && service.deliverables.length > 0 && (
                    <div className="space-y-1.5 mb-5 pt-3 border-t border-slate-100/90">
                      {service.deliverables.slice(0, 2).map((del, idx) => (
                        <div key={idx} className="flex items-center gap-1.5 text-xs text-slate-600">
                          <CheckCircle2 className="w-3.5 h-3.5 text-brand-purple/80 flex-shrink-0" />
                          <span className="line-clamp-1">{del}</span>
                        </div>
                      ))}
                    </div>
                  )}
                </div>

                {/* Bottom Link to Service Details */}
                <div className="pt-4 border-t border-slate-100/90">
                  <Link
                    href={`/services/${service.slug}`}
                    className="flex items-center justify-between w-full text-xs sm:text-sm font-semibold text-brand-purple transition-all"
                  >
                    <span>Explore service</span>
                    <span className="w-6 h-6 rounded-full bg-brand-lime/20 text-brand-text border border-brand-lime/40 flex items-center justify-center transition-all duration-300 group-hover:bg-brand-lime group-hover:border-brand-lime group-hover:translate-x-0.5">
                      <ArrowRight className="w-3.5 h-3.5 text-brand-text" strokeWidth={2.2} />
                    </span>
                  </Link>
                </div>
              </div>
            );
          })}
        </div>

        {/* Centered Single "View All Services" CTA */}
        <div className="text-center">
          <Button
            href="/services"
            variant="lime"
            size="md"
            withArrow
            className="px-8 py-3 text-sm font-semibold rounded-xl shadow-[0_4px_14px_rgba(180,231,23,0.35)] hover:shadow-[0_6px_22px_rgba(180,231,23,0.45)] hover:-translate-y-0.5 transition-all duration-300"
          >
            View All Services
          </Button>
        </div>
      </div>
    </section>
  );
}
