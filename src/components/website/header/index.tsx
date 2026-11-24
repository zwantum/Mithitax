"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import {
  ChevronDown,
  Menu,
  X,
  Phone,
  Building2,
  FileSpreadsheet,
  ReceiptText,
  ShieldCheck,
  Scale,
  ArrowRight,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { serviceCategories, siteConfig } from "@/lib/constants";
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
        "sticky top-0 z-40 w-full bg-white transition-all duration-200 border-b",
        isScrolled
          ? "border-brand-border shadow-subtle py-3"
          : "border-brand-border/70 py-4"
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
                <div className="absolute top-full -left-20 w-[640px] bg-white rounded-2xl shadow-dropdown border border-brand-border p-5 z-50 animate-in fade-in slide-in-from-top-2 duration-150">
                  <div className="grid grid-cols-2 gap-3">
                    {serviceCategories.map((cat) => {
                      const Icon =
                        categoryIcons[cat.id as keyof typeof categoryIcons] || Building2;
                      return (
                        <Link
                          key={cat.id}
                          href={`/services/category/${cat.slug}`}
                          className="flex items-start gap-3 p-3 rounded-xl hover:bg-brand-alt transition-colors group"
                        >
                          <div className="w-9 h-9 rounded-lg bg-brand-purple-subtle flex items-center justify-center text-brand-purple flex-shrink-0 group-hover:scale-105 transition-transform">
                            <Icon className="w-4 h-4" strokeWidth={1.75} />
                          </div>
                          <div>
                            <div className="text-sm font-semibold text-brand-text group-hover:text-brand-purple transition-colors flex items-center gap-1.5">
                              <span>{cat.title}</span>
                              <span className="text-[10px] font-normal text-brand-muted px-1.5 py-0.5 rounded-full bg-brand-alt border border-brand-border">
                                {cat.count}
                              </span>
                            </div>
                            <p className="text-xs text-brand-muted mt-0.5 line-clamp-1">
                              {cat.description}
                            </p>
                          </div>
                        </Link>
                      );
                    })}
                  </div>

                  <div className="mt-4 pt-3 border-t border-brand-border flex items-center justify-between px-2">
                    <span className="text-xs text-brand-muted">
                      Need custom corporate advisory or registrations?
                    </span>
                    <Link
                      href="/services"
                      className="text-xs font-semibold text-brand-purple hover:underline inline-flex items-center gap-1"
                    >
                      <span>View All Categories</span>
                      <ArrowRight className="w-3 h-3" />
                    </Link>
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
            <a
              href={`tel:${siteConfig.phone.replace(/\s+/g, "")}`}
              className="flex items-center gap-2 text-xs font-medium text-brand-muted hover:text-brand-purple transition-colors"
            >
              <div className="w-7 h-7 rounded-full bg-brand-alt border border-brand-border flex items-center justify-center text-brand-text">
                <Phone className="w-3.5 h-3.5 text-brand-purple" />
              </div>
              <span>{siteConfig.phone}</span>
            </a>

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
          <div className="flex md:hidden items-center gap-3">
            <Button
              href="/contact"
              variant="lime"
              size="sm"
              className="text-xs px-3 py-1.5 font-semibold"
            >
              Consult
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
          <div className="md:hidden mt-3 pt-3 pb-6 border-t border-brand-border animate-in fade-in slide-in-from-top-1">
            <div className="flex flex-col gap-2">
              <Link
                href="/"
                className="px-3 py-2 text-sm font-medium rounded-lg hover:bg-brand-alt text-brand-text"
              >
                Home
              </Link>
              <Link
                href="/about"
                className="px-3 py-2 text-sm font-medium rounded-lg hover:bg-brand-alt text-brand-text"
              >
                About Us
              </Link>

              {/* Mobile Services Accordion */}
              <div>
                <button
                  type="button"
                  onClick={() => setMobileServicesOpen(!mobileServicesOpen)}
                  className="w-full flex items-center justify-between px-3 py-2 text-sm font-medium rounded-lg hover:bg-brand-alt text-brand-text"
                >
                  <span>Services</span>
                  <ChevronDown
                    className={cn(
                      "w-4 h-4 transition-transform",
                      mobileServicesOpen ? "rotate-180" : ""
                    )}
                  />
                </button>
                {mobileServicesOpen && (
                  <div className="pl-4 pr-2 py-2 flex flex-col gap-2 bg-brand-alt/60 rounded-xl my-1 border border-brand-border/60">
                    {serviceCategories.map((cat) => (
                      <Link
                        key={cat.id}
                        href={`/services/category/${cat.slug}`}
                        className="py-1.5 px-2 text-xs font-medium text-brand-muted hover:text-brand-purple flex items-center justify-between"
                      >
                        <span>{cat.title}</span>
                        <span className="text-[10px] text-brand-muted bg-white px-2 py-0.5 rounded-full border border-brand-border">
                          {cat.count}
                        </span>
                      </Link>
                    ))}
                    <Link
                      href="/services"
                      className="py-1.5 px-2 text-xs font-semibold text-brand-purple border-t border-brand-border/60 pt-2"
                    >
                      View All Services →
                    </Link>
                  </div>
                )}
              </div>

              <Link
                href="/insights"
                className="px-3 py-2 text-sm font-medium rounded-lg hover:bg-brand-alt text-brand-text"
              >
                Insights
              </Link>
              <Link
                href="/calculators"
                className="px-3 py-2 text-sm font-medium rounded-lg hover:bg-brand-alt text-brand-text"
              >
                Calculators
              </Link>
              <Link
                href="/contact"
                className="px-3 py-2 text-sm font-medium rounded-lg hover:bg-brand-alt text-brand-text"
              >
                Contact
              </Link>

              <div className="pt-4 mt-2 border-t border-brand-border flex flex-col gap-3">
                <a
                  href={`tel:${siteConfig.phone.replace(/\s+/g, "")}`}
                  className="flex items-center gap-2 px-3 text-xs font-medium text-brand-muted"
                >
                  <Phone className="w-3.5 h-3.5 text-brand-purple" />
                  <span>{siteConfig.phone}</span>
                </a>
                <Button
                  href="/contact"
                  variant="lime"
                  size="md"
                  withArrow
                  className="w-full justify-center font-semibold shadow-[0_2px_10px_rgba(180,231,23,0.25)]"
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
