"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import {
  ChevronDown,
  Menu,
  X,
  Building2,
  FileSpreadsheet,
  ReceiptText,
  ShieldCheck,
  Scale,
  ArrowRight,
  Home,
  Users,
  Briefcase,
  BookOpen,
  Calculator,
  Mail,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { serviceCategories } from "@/lib/constants";
import { cn } from "@/lib/utils";

const categoryIcons = {
  "business-setup": Building2,
  "accounting-records": FileSpreadsheet,
  "income-tax-records": ReceiptText,
  gst: ShieldCheck,
  "special-registrations": Scale,
};

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [servicesDropdownOpen, setServicesDropdownOpen] = useState(false);
  const [mobileServicesOpen, setMobileServicesOpen] = useState(false);
  const [openMobileCategory, setOpenMobileCategory] = useState<string | null>(null);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setMobileMenuOpen(false);
    setServicesDropdownOpen(false);
  }, [pathname]);

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 w-full bg-white transition-shadow duration-200 border-b py-3 md:py-3.5",
        isScrolled
          ? "border-brand-border shadow-subtle"
          : "border-brand-border/70"
      )}
    >
      <div className="max-w-content mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center group">
            <Image
              src="/logos/MithiTax_Logo.webp"
              alt="Mithi Tax"
              width={145}
              height={38}
              priority
              className="h-9 w-auto object-contain"
            />
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            <Link
              href="/"
              className={cn(
                "text-sm font-medium transition-colors hover:text-brand-purple",
                pathname === "/" ? "text-brand-purple font-semibold" : "text-brand-text"
              )}
            >
              Home
            </Link>

            <Link
              href="/about"
              className={cn(
                "text-sm font-medium transition-colors hover:text-brand-purple",
                pathname === "/about" ? "text-brand-purple font-semibold" : "text-brand-text"
              )}
            >
              About Us
            </Link>

            {/* Services Dropdown */}
            <div
              className="relative"
              onMouseEnter={() => setServicesDropdownOpen(true)}
              onMouseLeave={() => setServicesDropdownOpen(false)}
            >
              <button
                type="button"
                className={cn(
                  "flex items-center gap-1.5 text-sm font-medium transition-colors hover:text-brand-purple py-2",
                  pathname.startsWith("/services") ? "text-brand-purple font-semibold" : "text-brand-text"
                )}
                aria-expanded={servicesDropdownOpen}
              >
                <span>Services</span>
                <ChevronDown
                  className={cn(
                    "w-4 h-4 transition-transform duration-200",
                    servicesDropdownOpen ? "rotate-180 text-brand-purple" : "text-brand-muted"
                  )}
                />
              </button>

              {/* Mega Dropdown Menu */}
              {servicesDropdownOpen && (
                <div className="absolute top-full -left-64 w-[1060px] max-w-[95vw] bg-white rounded-2xl shadow-[0_24px_60px_rgba(23,21,45,0.14)] border border-slate-200/90 p-7 z-50 animate-in fade-in slide-in-from-top-2 duration-150">
                  {/* 5-Column Services Directory Grid */}
                  <div className="grid grid-cols-5 gap-6">
                    {serviceCategories.map((cat) => {
                      const Icon =
                        categoryIcons[cat.id as keyof typeof categoryIcons] || Building2;
                      return (
                        <div key={cat.id} className="flex flex-col">
                          {/* Category Header Label (Not a link) */}
                          <div className="flex items-center gap-2 pb-3 mb-3 border-b border-slate-100">
                            <div className="w-7 h-7 rounded-lg bg-brand-purple-subtle flex items-center justify-center text-brand-purple flex-shrink-0">
                              <Icon className="w-3.5 h-3.5" strokeWidth={2} />
                            </div>
                            <span className="text-[13px] font-bold text-brand-text leading-snug">
                              {cat.title}
                            </span>
                          </div>

                          {/* Sub-services List: Spacious & Legible */}
                          <ul className="space-y-2 flex-1">
                            {cat.services.map((srv) => (
                              <li key={srv.slug}>
                                <Link
                                  href={`/services/${srv.slug}`}
                                  className="text-[13px] text-slate-600 hover:text-brand-purple hover:translate-x-1 transition-all block leading-snug py-1 px-1 rounded-md hover:bg-brand-purple-subtle/30"
                                  title={srv.title}
                                >
                                  {srv.title}
                                </Link>
                              </li>
                            ))}
                          </ul>
                        </div>
                      );
                    })}
                  </div>
                </div>
              )}
            </div>

            <Link
              href="/insights"
              className={cn(
                "text-sm font-medium transition-colors hover:text-brand-purple",
                pathname.startsWith("/insights") ? "text-brand-purple font-semibold" : "text-brand-text"
              )}
            >
              Insights
            </Link>

            <Link
              href="/calculators"
              className={cn(
                "text-sm font-medium transition-colors hover:text-brand-purple",
                pathname.startsWith("/calculators") ? "text-brand-purple font-semibold" : "text-brand-text"
              )}
            >
              Calculators
            </Link>

            <Link
              href="/contact"
              className={cn(
                "text-sm font-medium transition-colors hover:text-brand-purple",
                pathname === "/contact" ? "text-brand-purple font-semibold" : "text-brand-text"
              )}
            >
              Contact
            </Link>
          </nav>

          {/* Right Desktop CTA */}
          <div className="hidden lg:flex items-center gap-5">
            <Button
              href="/contact"
              variant="lime"
              size="sm"
              withArrow
              className="px-5 py-2 font-semibold shadow-[0_2px_10px_rgba(180,231,23,0.25)] hover:shadow-[0_4px_16px_rgba(180,231,23,0.4)]"
            >
              Book a Consultation
            </Button>
          </div>

          {/* Mobile Hamburger Button */}
          <div className="flex md:hidden items-center gap-2.5">
            <Button
              href="/contact"
              variant="lime"
              size="sm"
              className="text-xs px-3.5 py-1.5 font-semibold whitespace-nowrap"
            >
              Contact Us
            </Button>
            <button
              type="button"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-lg text-brand-text hover:bg-brand-alt focus:outline-none"
              aria-label="Toggle navigation menu"
            >
              {mobileMenuOpen ? (
                <X className="w-6 h-6 text-brand-text" />
              ) : (
                <Menu className="w-6 h-6 text-brand-text" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Dropdown Drawer */}
        {mobileMenuOpen && (
          <div className="md:hidden mt-3 pt-3 pb-5 border-t border-brand-border max-h-[78vh] overflow-y-auto animate-in fade-in slide-in-from-top-1">
            <div className="flex flex-col gap-1">
              <Link
                href="/"
                className={cn(
                  "flex items-center gap-3 px-3 py-2.5 text-[15px] font-medium rounded-xl transition-colors",
                  pathname === "/"
                    ? "bg-brand-purple-light/70 text-brand-purple font-semibold"
                    : "hover:bg-brand-alt text-brand-text"
                )}
              >
                <Home className="w-4 h-4 text-brand-purple flex-shrink-0" />
                <span>Home</span>
              </Link>
              <Link
                href="/about"
                className={cn(
                  "flex items-center gap-3 px-3 py-2.5 text-[15px] font-medium rounded-xl transition-colors",
                  pathname === "/about"
                    ? "bg-brand-purple-light/70 text-brand-purple font-semibold"
                    : "hover:bg-brand-alt text-brand-text"
                )}
              >
                <Users className="w-4 h-4 text-brand-purple flex-shrink-0" />
                <span>About Us</span>
              </Link>

              {/* Mobile Services Nested Accordion (No counts, clean category-by-category expand) */}
              <div>
                <button
                  type="button"
                  onClick={() => setMobileServicesOpen(!mobileServicesOpen)}
                  className={cn(
                    "w-full flex items-center justify-between px-3 py-2.5 text-[15px] font-medium rounded-xl transition-colors",
                    mobileServicesOpen
                      ? "bg-brand-alt text-brand-purple font-semibold"
                      : "hover:bg-brand-alt text-brand-text"
                  )}
                >
                  <div className="flex items-center gap-3">
                    <Briefcase className="w-4 h-4 text-brand-purple flex-shrink-0" />
                    <span>Services</span>
                  </div>
                  <ChevronDown
                    className={cn(
                      "w-4 h-4 transition-transform duration-200",
                      mobileServicesOpen ? "rotate-180 text-brand-purple" : ""
                    )}
                  />
                </button>
                {mobileServicesOpen && (
                  <div className="pl-3 ml-3 border-l border-slate-200/80 my-1 flex flex-col divide-y divide-slate-100">
                    {serviceCategories.map((cat) => {
                      const Icon =
                        categoryIcons[cat.id as keyof typeof categoryIcons] ||
                        Building2;
                      const isCatOpen = openMobileCategory === cat.id;

                      return (
                        <div key={cat.id} className="py-0.5">
                          <button
                            type="button"
                            onClick={() =>
                              setOpenMobileCategory(isCatOpen ? null : cat.id)
                            }
                            className="w-full flex items-center justify-between px-2 py-2.5 text-left text-[13.5px] font-medium text-brand-text hover:text-brand-purple transition-colors"
                          >
                            <div className="flex items-center gap-2.5">
                              <Icon className="w-4 h-4 text-brand-purple flex-shrink-0" />
                              <span>{cat.title}</span>
                            </div>
                            <ChevronDown
                              className={cn(
                                "w-3.5 h-3.5 text-slate-400 transition-transform duration-200 flex-shrink-0",
                                isCatOpen ? "rotate-180 text-brand-purple" : ""
                              )}
                            />
                          </button>

                          {isCatOpen && (
                            <div className="pl-6 pb-2 pt-0.5 flex flex-col gap-1">
                              {cat.services.map((srv) => (
                                <Link
                                  key={srv.slug}
                                  href={`/services/${srv.slug}`}
                                  className="text-[13px] text-brand-muted hover:text-brand-purple py-1 transition-colors leading-snug"
                                >
                                  {srv.title}
                                </Link>
                              ))}
                            </div>
                          )}
                        </div>
                      );
                    })}
                  </div>
                )}
              </div>

              <Link
                href="/insights"
                className={cn(
                  "flex items-center gap-3 px-3 py-2.5 text-[15px] font-medium rounded-xl transition-colors",
                  pathname.startsWith("/insights")
                    ? "bg-brand-purple-light/70 text-brand-purple font-semibold"
                    : "hover:bg-brand-alt text-brand-text"
                )}
              >
                <BookOpen className="w-4 h-4 text-brand-purple flex-shrink-0" />
                <span>Insights</span>
              </Link>
              <Link
                href="/calculators"
                className={cn(
                  "flex items-center gap-3 px-3 py-2.5 text-[15px] font-medium rounded-xl transition-colors",
                  pathname.startsWith("/calculators")
                    ? "bg-brand-purple-light/70 text-brand-purple font-semibold"
                    : "hover:bg-brand-alt text-brand-text"
                )}
              >
                <Calculator className="w-4 h-4 text-brand-purple flex-shrink-0" />
                <span>Calculators</span>
              </Link>
              <Link
                href="/contact"
                className={cn(
                  "flex items-center gap-3 px-3 py-2.5 text-[15px] font-medium rounded-xl transition-colors",
                  pathname === "/contact"
                    ? "bg-brand-purple-light/70 text-brand-purple font-semibold"
                    : "hover:bg-brand-alt text-brand-text"
                )}
              >
                <Mail className="w-4 h-4 text-brand-purple flex-shrink-0" />
                <span>Contact</span>
              </Link>

              <div className="pt-4 mt-2 border-t border-brand-border">
                <Button
                  href="/contact"
                  variant="lime"
                  size="md"
                  withArrow
                  className="w-full justify-center py-3 font-semibold shadow-[0_2px_10px_rgba(180,231,23,0.25)]"
                >
                  Book a Consultation
                </Button>
              </div>
            </div>
          </div>
        )}
      </div>
    </header>
  );
}
