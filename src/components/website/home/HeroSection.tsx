"use client";

import React, { useState, useRef, useEffect } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import {
  Search,
  ArrowRight,
  Building2,
  FileSpreadsheet,
  ReceiptText,
  Calculator,
  ShieldCheck,
} from "lucide-react";
import { serviceCategories } from "@/lib/constants";

export default function HeroSection() {
  const router = useRouter();
  const [searchQuery, setSearchQuery] = useState("");
  const [isOpen, setIsOpen] = useState(false);
  const searchContainerRef = useRef<HTMLDivElement>(null);

  // Flatten all services for live search suggestion
  const allServices = serviceCategories.flatMap((category) =>
    category.services.map((s) => ({
      ...s,
      categoryTitle: category.title,
    }))
  );

  const filteredServices = searchQuery.trim()
    ? allServices
      .filter(
        (s) =>
          s.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
          s.description?.toLowerCase().includes(searchQuery.toLowerCase())
      )
      .slice(0, 5)
    : [];

  useEffect(() => {
    const handleOutsideClick = (event: MouseEvent) => {
      if (
        searchContainerRef.current &&
        !searchContainerRef.current.contains(event.target as Node)
      ) {
        setIsOpen(false);
      }
    };
    document.addEventListener("mousedown", handleOutsideClick);
    return () => document.removeEventListener("mousedown", handleOutsideClick);
  }, []);

  const handleConsultationSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      router.push(`/contact?service=${encodeURIComponent(searchQuery.trim())}`);
    } else {
      router.push("/contact");
    }
  };

  const trendingTags = [
    { label: "GST Registration", href: "/services/gst-registration" },
    { label: "Company Incorporation", href: "/services/company-incorporation" },
    { label: "Income Tax Filing", href: "/services/tax-compliance-support" },
    { label: "Trademark Registration", href: "/services/statutory-registrations" },
  ];

  // 5 Clickable Categories with uniform primary (#7D28FF) and secondary (#B4E717) styling
  const heroBoxes = [
    {
      title: "Business Setup",
      subtitle: "Start Your Business",
      href: "/services/category/business-setup",
      icon: Building2,
    },
    {
      title: "GST Services",
      subtitle: "Stay GST Compliant",
      href: "/services/category/gst",
      icon: FileSpreadsheet,
    },
    {
      title: "Income Tax",
      subtitle: "File, Plan & Save",
      href: "/services/category/income-tax-records",
      icon: ReceiptText,
    },
    {
      title: "Accounting",
      subtitle: "Bookkeeping & Reports",
      href: "/services/category/accounting-records",
      icon: Calculator,
    },
    {
      title: "Special Licenses",
      subtitle: "Protect Your Business",
      href: "/services/category/special-registrations",
      icon: ShieldCheck,
    },
  ];

  return (
    <section className="relative overflow-hidden pt-12 pb-16 md:pt-16 md:pb-24 bg-white">
      {/* SaaS Fluid Curved Ambient Background (Matching Reference) */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        {/* Soft Radial Core Light behind Headline */}
        <div
          className="absolute top-0 left-1/2 -translate-x-1/2 w-[900px] h-[550px] pointer-events-none"
          style={{
            background:
              "radial-gradient(ellipse 65% 50% at 50% 15%, rgba(113, 10, 198, 0.08) 0%, rgba(180, 231, 23, 0.04) 40%, transparent 75%)",
          }}
          aria-hidden="true"
        />

        {/* Left Side Organic Curved Waves (Purple / Lavender) */}
        <svg
          className="absolute top-0 left-0 w-[380px] sm:w-[500px] lg:w-[640px] h-full pointer-events-none opacity-55 select-none"
          viewBox="0 0 640 820"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          preserveAspectRatio="none"
          aria-hidden="true"
        >
          <defs>
            <linearGradient id="hero-left-grad-1" x1="0%" y1="0%" x2="100%" y2="80%">
              <stop offset="0%" stopColor="#710ac6" stopOpacity="0.18" />
              <stop offset="45%" stopColor="#8c1fe3" stopOpacity="0.10" />
              <stop offset="100%" stopColor="#c488f7" stopOpacity="0.02" />
            </linearGradient>
            <linearGradient id="hero-left-grad-2" x1="0%" y1="10%" x2="85%" y2="90%">
              <stop offset="0%" stopColor="#8019d6" stopOpacity="0.14" />
              <stop offset="55%" stopColor="#a74ef0" stopOpacity="0.07" />
              <stop offset="100%" stopColor="#FFFFFF" stopOpacity="0" />
            </linearGradient>
            <linearGradient id="hero-left-grad-3" x1="0%" y1="20%" x2="70%" y2="60%">
              <stop offset="0%" stopColor="#710ac6" stopOpacity="0.22" />
              <stop offset="100%" stopColor="#9a35e8" stopOpacity="0.04" />
            </linearGradient>
          </defs>

          {/* Deep back wave */}
          <path
            d="M-50 -20 C 180 80, 360 220, 320 440 C 280 620, 110 740, -50 820 Z"
            fill="url(#hero-left-grad-1)"
          />

          {/* Mid fluid wave ribbon */}
          <path
            d="M-40 40 C 220 160, 420 320, 310 520 C 210 680, 40 760, -40 820 Z"
            fill="url(#hero-left-grad-2)"
          />

          {/* Accent soft ribbon */}
          <path
            d="M-60 120 C 120 200, 260 340, 200 480 C 140 600, 20 700, -60 760 Z"
            fill="url(#hero-left-grad-3)"
          />
        </svg>

        {/* Right Side Organic Curved Waves (Soft Lime blending into Lavender) */}
        <svg
          className="absolute top-0 right-0 w-[380px] sm:w-[500px] lg:w-[640px] h-full pointer-events-none opacity-55 select-none"
          viewBox="0 0 640 820"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          preserveAspectRatio="none"
          aria-hidden="true"
        >
          <defs>
            <linearGradient id="hero-right-lime" x1="100%" y1="0%" x2="0%" y2="90%">
              <stop offset="0%" stopColor="#B4E717" stopOpacity="0.22" />
              <stop offset="40%" stopColor="#ccf24b" stopOpacity="0.12" />
              <stop offset="75%" stopColor="#E2D4FD" stopOpacity="0.08" />
              <stop offset="100%" stopColor="#FFFFFF" stopOpacity="0" />
            </linearGradient>
            <linearGradient id="hero-right-lavender" x1="100%" y1="15%" x2="15%" y2="85%">
              <stop offset="0%" stopColor="#8c1fe3" stopOpacity="0.14" />
              <stop offset="50%" stopColor="#ba76f5" stopOpacity="0.06" />
              <stop offset="100%" stopColor="#FFFFFF" stopOpacity="0" />
            </linearGradient>
          </defs>

          {/* Lime / Lavender flowing wave on the right */}
          <path
            d="M690 -30 C 470 80, 290 240, 340 460 C 390 640, 550 740, 690 820 Z"
            fill="url(#hero-right-lime)"
          />

          {/* Secondary layered wave */}
          <path
            d="M690 60 C 430 200, 240 380, 350 560 C 450 700, 600 760, 690 820 Z"
            fill="url(#hero-right-lavender)"
          />
        </svg>
      </div>

      <div className="relative z-10 max-w-content mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center flex flex-col items-center">


          {/* Main Headline */}
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-[4.1rem] font-semibold tracking-tight text-brand-text leading-[1.14] mb-6">
            Your Trusted Online{" "}
            <span className="text-brand-purple">Tax</span>,
            <br className="hidden sm:inline" />{" "}
            <span className="text-brand-purple">Accounting</span> & Legal Partner
          </h1>

          {/* Description */}
          <div className="text-base sm:text-lg text-slate-600 leading-relaxed font-normal max-w-2xl mx-auto mb-10 space-y-3">
            <p>
              From company incorporation and GST registration to income tax filing, accounting and regulatory compliance, Mithi Tax provides end-to-end business solutions with professional guidance and reliable support.
            </p>

          </div>

          {/* Wide Search & Consultation Bar */}
          <div
            ref={searchContainerRef}
            className="w-full max-w-3xl relative mb-6 z-20"
          >
            <form
              onSubmit={handleConsultationSubmit}
              className="relative flex items-center bg-white rounded-full border border-slate-200/90 shadow-[0_6px_24px_rgba(23,21,45,0.06)] hover:border-slate-300 focus-within:border-brand-purple/50 focus-within:ring-4 focus-within:ring-brand-purple/10 transition-all p-1.5 sm:p-2 pl-3.5 sm:pl-5 gap-2"
            >
              <Search className="w-4 h-4 sm:w-5 sm:h-5 text-brand-purple flex-shrink-0" />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => {
                  setSearchQuery(e.target.value);
                  setIsOpen(true);
                }}
                onFocus={() => setIsOpen(true)}
                placeholder="Search services (e.g. GST Registration, Company Incorporation...)"
                className="w-full text-xs sm:text-sm text-brand-text placeholder:text-slate-400 bg-transparent focus:outline-none font-medium truncate"
              />

              <button
                type="submit"
                className="inline-flex items-center justify-center gap-1.5 px-4 sm:px-6 py-2 sm:py-2.5 rounded-full bg-brand-lime text-brand-text text-xs sm:text-sm font-semibold hover:bg-[#a6d812] active:scale-[0.98] transition-all flex-shrink-0 cursor-pointer shadow-sm hover:shadow"
              >
                <span>Explore Services</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </form>

            {/* Live Search Suggestions Dropdown */}
            {isOpen && filteredServices.length > 0 && (
              <div className="absolute top-full left-0 right-0 mt-2 bg-white rounded-2xl border border-slate-200 shadow-dropdown p-2 z-30 text-left">
                <div className="text-[10px] uppercase font-bold tracking-wider text-slate-400 px-3 py-1.5">
                  Suggested Services
                </div>
                <div className="divide-y divide-slate-100">
                  {filteredServices.map((service) => (
                    <Link
                      key={service.slug}
                      href={`/services/${service.slug}`}
                      onClick={() => setIsOpen(false)}
                      className="flex items-center justify-between p-3 rounded-xl hover:bg-slate-50 transition group"
                    >
                      <div>
                        <div className="text-xs sm:text-sm font-semibold text-brand-text group-hover:text-brand-purple transition-colors">
                          {service.title}
                        </div>
                        <div className="text-[11px] text-slate-500">
                          {service.categoryTitle}
                        </div>
                      </div>
                      <ArrowRight className="w-3.5 h-3.5 text-slate-400 group-hover:text-brand-purple group-hover:translate-x-0.5 transition" />
                    </Link>
                  ))}
                </div>
              </div>
            )}
          </div>

          {/* Trending Services Tags */}
          <div className="flex flex-wrap items-center justify-center gap-2 text-xs mb-12 sm:mb-14">
            <span className="text-slate-500 font-medium">Trending:</span>
            {trendingTags.map((tag) => (
              <Link
                key={tag.label}
                href={tag.href}
                className="px-3 py-1 rounded-full bg-slate-100/90 hover:bg-brand-purple-subtle hover:text-brand-purple hover:border-brand-purple/20 text-slate-700 font-medium transition-colors border border-slate-200/50"
              >
                {tag.label}
              </Link>
            ))}
          </div>

          {/* 5 Clickable Boxes: Horizontal Slider on Mobile, 5-Column Grid on Desktop */}
          <div className="w-full max-w-5xl flex sm:grid sm:grid-cols-3 lg:grid-cols-5 gap-3.5 sm:gap-4 overflow-x-auto sm:overflow-visible no-scrollbar [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none] snap-x snap-mandatory justify-start sm:justify-center pt-2 pb-2 px-4 sm:px-0">
            {heroBoxes.map((box) => {
              const Icon = box.icon;
              return (
                <Link
                  key={box.title}
                  href={box.href}
                  className="group relative flex flex-col items-center text-center px-4 py-5 sm:p-5 rounded-2xl bg-gradient-to-b from-white to-[#FAF9FD] border border-slate-200/90 shadow-[0_2px_12px_rgba(23,21,45,0.03)] hover:shadow-[0_14px_30px_-4px_rgba(113,10,198,0.12)] hover:-translate-y-1 transition-all duration-300 w-[150px] sm:w-auto flex-shrink-0 snap-start"
                >
                  {/* Soft backlight glow effect in background on hover */}
                  <div
                    className="absolute -inset-0.5 rounded-2xl bg-gradient-to-b from-brand-purple/15 via-brand-purple/5 to-transparent opacity-0 group-hover:opacity-100 blur-md transition-opacity duration-300 -z-10 pointer-events-none"
                    aria-hidden="true"
                  />
                  {/* Subtle surface tint on hover */}
                  <div
                    className="absolute inset-0 rounded-2xl bg-gradient-to-b from-white via-white to-purple-50/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"
                    aria-hidden="true"
                  />

                  {/* Uniform Brand Icon Container (Primary #710ac6 with subtle lavender tint, transitioning on hover) */}
                  <div className="relative z-10 w-12 h-12 rounded-xl bg-brand-purple-light/70 border border-brand-purple/15 flex items-center justify-center text-brand-purple mb-3.5 transition-all duration-300 group-hover:scale-105 group-hover:bg-brand-purple group-hover:text-white group-hover:border-brand-purple shadow-xs">
                    <Icon className="w-5 h-5 transition-transform duration-300" strokeWidth={1.8} />
                  </div>

                  {/* Single Line Guaranteed Title */}
                  <h3 className="relative z-10 text-xs sm:text-[14px] lg:text-[15px] font-semibold text-brand-text group-hover:text-brand-purple transition-colors mb-1 whitespace-nowrap tracking-tight">
                    {box.title}
                  </h3>

                  {/* Subtitle */}
                  <p className="relative z-10 text-[10px] sm:text-[11px] lg:text-xs text-brand-muted font-normal whitespace-nowrap tracking-tight">
                    {box.subtitle}
                  </p>
                </Link>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
