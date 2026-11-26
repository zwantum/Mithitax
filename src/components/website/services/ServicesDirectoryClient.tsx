"use client";

import React, { useState } from "react";
import Link from "next/link";
import {
  Building2,
  FileSpreadsheet,
  ReceiptText,
  ShieldCheck,
  Scale,
  ArrowRight,
  CheckCircle2,
  Search,
  X,
  Briefcase,
} from "lucide-react";
import { ServiceCategory } from "@/types";
import { cn } from "@/lib/utils";

interface ServicesDirectoryClientProps {
  categories: ServiceCategory[];
}

const categoryIcons: Record<string, React.ComponentType<{ className?: string; strokeWidth?: number }>> = {
  "business-setup": Building2,
  "accounting-records": FileSpreadsheet,
  "income-tax-records": ReceiptText,
  gst: ShieldCheck,
  "special-registrations": Scale,
};

export default function ServicesDirectoryClient({
  categories,
}: ServicesDirectoryClientProps) {
  const [selectedCategory, setSelectedCategory] = useState<string>("all");
  const [searchQuery, setSearchQuery] = useState<string>("");

  const q = searchQuery.trim().toLowerCase();

  const filteredCategories = categories
    .filter((cat) => selectedCategory === "all" || cat.id === selectedCategory)
    .map((cat) => ({
      ...cat,
      services: cat.services.filter(
        (srv) =>
          !q ||
          srv.title.toLowerCase().includes(q) ||
          srv.description?.toLowerCase().includes(q) ||
          cat.title.toLowerCase().includes(q)
      ),
    }))
    .filter((cat) => cat.services.length > 0);

  return (
    <>
      {/* 1. Hero Header Section + Centered Pill Search Bar */}
      <section className="relative overflow-hidden pt-8 pb-8 sm:pt-12 sm:pb-10 bg-white">
        <div className="absolute inset-0 pointer-events-none overflow-hidden">
          <div
            className="absolute top-0 left-1/2 -translate-x-1/2 w-[900px] h-[420px] pointer-events-none"
            style={{
              background:
                "radial-gradient(ellipse 65% 50% at 50% 15%, rgba(113, 10, 198, 0.08) 0%, rgba(180, 231, 23, 0.04) 40%, transparent 75%)",
            }}
            aria-hidden="true"
          />
          <svg
            className="absolute top-0 left-0 w-[340px] sm:w-[460px] lg:w-[580px] h-full pointer-events-none opacity-50 select-none"
            viewBox="0 0 640 820"
            fill="none"
            preserveAspectRatio="none"
            aria-hidden="true"
          >
            <defs>
              <linearGradient id="srv-left-grad" x1="0%" y1="0%" x2="100%" y2="80%">
                <stop offset="0%" stopColor="#710ac6" stopOpacity="0.16" />
                <stop offset="50%" stopColor="#8c1fe3" stopOpacity="0.08" />
                <stop offset="100%" stopColor="#FFFFFF" stopOpacity="0" />
              </linearGradient>
            </defs>
            <path
              d="M-50 -20 C 180 80, 360 220, 320 440 C 280 620, 110 740, -50 820 Z"
              fill="url(#srv-left-grad)"
            />
          </svg>
          <svg
            className="absolute top-0 right-0 w-[340px] sm:w-[460px] lg:w-[580px] h-full pointer-events-none opacity-50 select-none"
            viewBox="0 0 640 820"
            fill="none"
            preserveAspectRatio="none"
            aria-hidden="true"
          >
            <defs>
              <linearGradient id="srv-right-grad" x1="100%" y1="0%" x2="0%" y2="90%">
                <stop offset="0%" stopColor="#B4E717" stopOpacity="0.2" />
                <stop offset="50%" stopColor="#ccf24b" stopOpacity="0.08" />
                <stop offset="100%" stopColor="#FFFFFF" stopOpacity="0" />
              </linearGradient>
            </defs>
            <path
              d="M690 -30 C 470 80, 290 240, 340 460 C 390 640, 550 740, 690 820 Z"
              fill="url(#srv-right-grad)"
            />
          </svg>
        </div>

        <div className="relative z-10 max-w-content mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <div className="inline-flex flex-col items-center mb-3">
              <span className="text-xs font-semibold tracking-wider text-brand-purple uppercase">
                OUR SERVICES
              </span>
              <div className="w-8 h-[2px] bg-brand-lime mt-1.5 rounded-full" />
            </div>

            <h1 className="text-3xl sm:text-4xl lg:text-[3rem] font-semibold tracking-tight text-brand-text leading-[1.2] mb-4">
              Complete Business Solutions,{" "}
              <span className="text-brand-purple">Under One Roof</span>
            </h1>

            <p className="text-sm sm:text-base text-brand-muted leading-relaxed max-w-2xl mx-auto mb-7">
              Whether you&apos;re starting a new business, managing financial records or handling tax obligations, Mithi Tax offers comprehensive registration, accounting, taxation and compliance services.
            </p>

            {/* Centered Hero Search Bar (Matches Home Hero Pill Style) */}
            <div className="max-w-xl mx-auto">
              <div className="relative flex items-center bg-white rounded-full border border-slate-200/90 shadow-[0_6px_24px_rgba(23,21,45,0.06)] hover:border-slate-300 focus-within:border-brand-purple/50 focus-within:ring-4 focus-within:ring-brand-purple/10 transition-all p-1.5 sm:p-2 pl-4 sm:pl-5 gap-2.5">
                <Search className="w-4 h-4 sm:w-5 sm:h-5 text-brand-purple flex-shrink-0" />
                <input
                  type="text"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  placeholder="Search services (e.g. GST Registration, Company Incorporation, ITR...)"
                  className="w-full text-xs sm:text-sm text-brand-text placeholder:text-slate-400 bg-transparent focus:outline-none font-medium"
                />
                {searchQuery && (
                  <button
                    type="button"
                    onClick={() => setSearchQuery("")}
                    aria-label="Clear search"
                    className="p-1.5 rounded-full text-slate-400 hover:text-brand-text hover:bg-slate-100 transition-colors cursor-pointer"
                  >
                    <X className="w-4 h-4" />
                  </button>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 2. Interactive Services Directory */}
      <section className="relative py-8 sm:py-12 bg-gradient-to-b from-[#F4F5FA] via-[#F7F8FC] to-white">
        <div
          className="absolute inset-x-0 top-0 h-12 sm:h-16 bg-gradient-to-b from-white to-transparent pointer-events-none"
          aria-hidden="true"
        />

        <div className="relative z-10 max-w-content mx-auto px-4 sm:px-6 lg:px-8">
          {/* Full-Width Single-Row Category Filter Pills */}
          <div className="pb-6 mb-10 border-b border-slate-200/80">
            <div className="flex items-center justify-start xl:justify-center gap-2 overflow-x-auto no-scrollbar [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none] -mx-4 px-4 pb-1 sm:mx-0 sm:px-0 xl:overflow-visible xl:pb-0">
              <button
                type="button"
                onClick={() => setSelectedCategory("all")}
                className={cn(
                  "px-4 py-2 rounded-full text-xs sm:text-sm font-medium whitespace-nowrap flex-shrink-0 transition-all duration-200 cursor-pointer",
                  selectedCategory === "all"
                    ? "bg-brand-purple text-white shadow-[0_4px_12px_rgba(113,10,198,0.22)]"
                    : "bg-white border border-slate-200/90 text-brand-muted hover:border-brand-purple/40 hover:text-brand-purple"
                )}
              >
                All Services
              </button>

              {categories.map((cat) => {
                const isActive = selectedCategory === cat.id;
                return (
                  <button
                    key={cat.id}
                    type="button"
                    onClick={() => setSelectedCategory(cat.id)}
                    className={cn(
                      "px-4 py-2 rounded-full text-xs sm:text-sm font-medium whitespace-nowrap flex-shrink-0 transition-all duration-200 cursor-pointer",
                      isActive
                        ? "bg-brand-purple text-white shadow-[0_4px_12px_rgba(113,10,198,0.22)]"
                        : "bg-white border border-slate-200/90 text-brand-muted hover:border-brand-purple/40 hover:text-brand-purple"
                    )}
                  >
                    {cat.title}
                  </button>
                );
              })}
            </div>
          </div>

          {/* Categories & Service Cards (Box-free sections) */}
          {filteredCategories.length > 0 ? (
            <div className="space-y-14">
              {filteredCategories.map((cat) => {
                const Icon = categoryIcons[cat.id] || Building2;
                return (
                  <div key={cat.id} id={cat.id} className="scroll-mt-24">
                    {/* Clean Category Header */}
                    <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-6">
                      <div className="flex items-start gap-3.5">
                        <div className="w-11 h-11 rounded-xl bg-brand-purple-light/80 border border-brand-purple/15 flex items-center justify-center text-brand-purple flex-shrink-0">
                          <Icon className="w-5 h-5" strokeWidth={1.8} />
                        </div>
                        <div>
                          <h2 className="text-xl sm:text-2xl font-semibold text-brand-text tracking-tight leading-snug">
                            {cat.title}
                          </h2>
                          <p className="text-xs sm:text-sm text-brand-muted mt-0.5">
                            {cat.description}
                          </p>
                        </div>
                      </div>

                      <Link
                        href={`/services/category/${cat.slug}`}
                        className="inline-flex items-center gap-1.5 text-xs font-semibold text-brand-purple hover:underline flex-shrink-0 self-start sm:self-auto"
                      >
                        <span>Explore {cat.title}</span>
                        <ArrowRight className="w-3.5 h-3.5" />
                      </Link>
                    </div>

                    {/* 3-Column Service Cards Grid */}
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 lg:gap-6">
                      {cat.services.map((service) => (
                        <Link
                          key={service.slug}
                          href={`/services/${service.slug}`}
                          className="group flex flex-col justify-between p-6 bg-white rounded-2xl border border-slate-200/90 shadow-[0_4px_16px_rgba(23,21,45,0.03)] hover:border-brand-purple/40 hover:shadow-[0_16px_36px_-6px_rgba(113,10,198,0.12),0_4px_12px_rgba(23,21,45,0.04)] hover:-translate-y-1 transition-all duration-300"
                        >
                          <div>
                            <div className="flex items-center justify-between gap-2 mb-4">
                              <div className="w-10 h-10 rounded-xl bg-brand-purple-light/80 border border-brand-purple/15 flex items-center justify-center text-brand-purple group-hover:bg-brand-purple group-hover:text-white transition-all duration-300 flex-shrink-0">
                                <Icon className="w-5 h-5" strokeWidth={1.8} />
                              </div>
                              <span className="px-2.5 py-0.5 rounded-full bg-slate-100 text-[11px] font-medium text-brand-muted">
                                {cat.title}
                              </span>
                            </div>

                            <h3 className="text-base sm:text-[1.08rem] font-semibold text-brand-text group-hover:text-brand-purple transition-colors leading-snug mb-2">
                              {service.title}
                            </h3>

                            {service.description && (
                              <p className="text-xs sm:text-sm text-brand-muted leading-relaxed mb-4 line-clamp-2">
                                {service.description}
                              </p>
                            )}

                            {service.deliverables && service.deliverables.length > 0 && (
                              <ul className="space-y-1.5 pt-3 border-t border-slate-100">
                                {service.deliverables.slice(0, 2).map((item) => (
                                  <li
                                    key={item}
                                    className="flex items-center gap-2 text-xs text-brand-muted"
                                  >
                                    <CheckCircle2 className="w-3.5 h-3.5 text-brand-purple flex-shrink-0" />
                                    <span className="truncate">{item}</span>
                                  </li>
                                ))}
                              </ul>
                            )}
                          </div>

                          <div className="mt-5 pt-4 border-t border-slate-100 flex items-center justify-between">
                            <span className="text-xs font-semibold text-brand-purple">
                              Explore service
                            </span>
                            <span className="w-6 h-6 rounded-full bg-brand-lime/30 text-brand-text flex items-center justify-center transition-all duration-300 group-hover:bg-brand-lime group-hover:translate-x-0.5">
                              <ArrowRight className="w-3.5 h-3.5" strokeWidth={2.2} />
                            </span>
                          </div>
                        </Link>
                      ))}
                    </div>
                  </div>
                );
              })}
            </div>
          ) : (
            <div className="text-center py-14 px-6 bg-white rounded-2xl border border-slate-200/80 max-w-lg mx-auto">
              <div className="w-12 h-12 rounded-2xl bg-brand-purple-light text-brand-purple flex items-center justify-center mx-auto mb-4">
                <Briefcase className="w-6 h-6" />
              </div>
              <h3 className="text-lg font-semibold text-brand-text mb-2">
                No matching services found
              </h3>
              <p className="text-sm text-brand-muted mb-5">
                Try clearing your search or selecting another category.
              </p>
              <button
                type="button"
                onClick={() => {
                  setSelectedCategory("all");
                  setSearchQuery("");
                }}
                className="px-5 py-2.5 rounded-full bg-brand-lime text-brand-text text-xs font-semibold hover:bg-[#a6d812] transition-colors cursor-pointer"
              >
                Show All Services
              </button>
            </div>
          )}
        </div>
      </section>
    </>
  );
}
