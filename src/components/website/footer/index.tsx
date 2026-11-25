"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import {
  Phone,
  Mail,
  MapPin,
  ExternalLink,
} from "lucide-react";
import { siteConfig } from "@/lib/constants";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const services = [
    { label: "Company Incorporation", href: "/services/company-incorporation" },
    { label: "LLP Company Registration", href: "/services/llp-registration" },
    { label: "Proprietorship / Partnership Setup", href: "/services/proprietorship-partnership" },
    { label: "NGO / Non-Profit Registration", href: "/services/ngo-registration" },
    { label: "GST Registration", href: "/services/gst-registration" },
    { label: "GST Return Filing", href: "/services/gst-returns" },
    { label: "Accounting & Bookkeeping", href: "/services/accounting-bookkeeping" },
    { label: "PAN & TAN Application", href: "/services/pan-tan-application" },
  ];

  const quickLinks = [
    { label: "Home", href: "/" },
    { label: "About Us", href: "/about" },
    { label: "All Services", href: "/services" },
    { label: "Insights", href: "/insights" },
    { label: "Business Calculators", href: "/calculators" },
    { label: "Contact Us", href: "/contact" },
    { label: "FAQs", href: "/#faq" },
  ];

  const socialLinks = [
    {
      name: "Facebook",
      href: "https://www.facebook.com/Mithitax",
      hoverClass:
        "hover:bg-[#1877F2] hover:border-[#1877F2] hover:text-white hover:shadow-[0_8px_20px_rgba(24,119,242,0.35)]",
      icon: (
        <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
          <path d="M14 13.5h2.5l1-4H14v-2c0-1.03 0-2 2-2h1.5V2.14c-.326-.043-1.52-.14-2.71-.14-2.8 0-4.79 1.71-4.79 4.92v2.58H7v4h3v9.5h4v-9.5z" />
        </svg>
      ),
    },
    {
      name: "Instagram",
      href: "https://www.instagram.com/mithitax.in/?hl=en",
      hoverClass:
        "hover:bg-gradient-to-tr hover:from-[#F58529] hover:via-[#DD2A7B] hover:to-[#8134AF] hover:border-transparent hover:text-white hover:shadow-[0_8px_20px_rgba(221,42,123,0.35)]",
      icon: (
        <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
          <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
        </svg>
      ),
    },
    {
      name: "Youtube",
      href: "https://www.youtube.com/@MithiTax",
      hoverClass:
        "hover:bg-[#FF0000] hover:border-[#FF0000] hover:text-white hover:shadow-[0_8px_20px_rgba(255,0,0,0.35)]",
      icon: (
        <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
          <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.5 12 3.5 12 3.5s-7.505 0-9.377.55a3.016 3.016 0 0 0-2.122 2.136C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.55 9.376.55 9.376.55s7.505 0 9.377-.55a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
        </svg>
      ),
    },
  ];

  return (
    <footer className="w-full bg-gradient-to-b from-[#FAF9FE] via-[#F8F7FD] to-white border-t border-slate-200/80 pt-16 pb-10">
      <div className="max-w-content mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Footer Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-8 pb-14 border-b border-slate-200/80">
          {/* Col 1: Brand Info & Socials (Span 4) */}
          <div className="lg:col-span-4 flex flex-col justify-between pr-0 lg:pr-6">
            <div>
              <Link href="/" className="inline-block mb-4 group">
                <Image
                  src="/logos/MithiTax_Logo.webp"
                  alt="Mithi Tax"
                  width={150}
                  height={40}
                  className="h-9 w-auto object-contain transition-transform group-hover:scale-[1.02]"
                />
              </Link>

              <p className="text-xs sm:text-sm text-brand-muted leading-relaxed font-normal mb-7 max-w-sm">
                Mithi Tax provides professional business registration, taxation, accounting and compliance consultancy services to help entrepreneurs, startups and businesses manage their financial and legal responsibilities with confidence.
              </p>

              {/* Upgraded Social Media Icons with Distinctive Branded Hover States */}
              <div>
                <span className="text-[11px] font-bold tracking-wider text-brand-text uppercase block mb-3">
                  Connect With Us
                </span>
                <div className="flex items-center gap-3">
                  {socialLinks.map((social) => (
                    <a
                      key={social.name}
                      href={social.href}
                      target="_blank"
                      rel="noreferrer"
                      className={`w-10 h-10 rounded-xl bg-white border border-slate-200/90 shadow-[0_2px_8px_rgba(23,21,45,0.04)] flex items-center justify-center text-slate-600 transition-all duration-300 hover:-translate-y-1 ${social.hoverClass}`}
                      aria-label={social.name}
                    >
                      {social.icon}
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Col 2: Services (Span 3) */}
          <div className="lg:col-span-3">
            <div className="mb-4">
              <h4 className="text-sm font-bold text-brand-text tracking-tight uppercase">
                SERVICES
              </h4>
              <div className="w-8 h-[2px] bg-brand-lime mt-1.5 rounded-full" />
            </div>

            <ul className="space-y-2.5 text-xs sm:text-sm text-brand-muted">
              {services.map((service) => (
                <li key={service.label}>
                  <Link
                    href={service.href}
                    className="hover:text-brand-purple hover:translate-x-1 inline-flex items-center transition-all duration-200"
                  >
                    <span>{service.label}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 3: Quick Links (Span 2) */}
          <div className="lg:col-span-2">
            <div className="mb-4">
              <h4 className="text-sm font-bold text-brand-text tracking-tight uppercase">
                Quick Links
              </h4>
              <div className="w-8 h-[2px] bg-brand-lime mt-1.5 rounded-full" />
            </div>

            <ul className="space-y-2.5 text-xs sm:text-sm text-brand-muted">
              {quickLinks.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="hover:text-brand-purple hover:translate-x-1 inline-flex items-center transition-all duration-200"
                  >
                    <span>{link.label}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 4: Contact Us & Address (Span 3) */}
          <div className="lg:col-span-3 flex flex-col justify-between">
            <div>
              <div className="mb-4">
                <h4 className="text-sm font-bold text-brand-text tracking-tight uppercase">
                  Contact Us
                </h4>
                <div className="w-8 h-[2px] bg-brand-lime mt-1.5 rounded-full" />
              </div>

              <div className="space-y-3.5 text-xs sm:text-sm text-brand-muted">
                {/* Address with Google Maps link */}
                <a
                  href="https://maps.app.goo.gl/g7UcF1B32wgZwtFC6"
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-start gap-3 group hover:text-brand-purple transition-colors"
                >
                  <div className="w-8 h-8 rounded-lg bg-brand-purple-light/80 border border-brand-purple/15 flex items-center justify-center text-brand-purple flex-shrink-0 mt-0.5 group-hover:bg-brand-purple group-hover:text-white transition-all">
                    <MapPin className="w-4 h-4" />
                  </div>
                  <span className="leading-snug">
                    Bishoul, Tatuar, Manigachhi, Darbhanga, Bihar – 847422
                  </span>
                </a>

                {/* Email */}
                <a
                  href="mailto:mithitax.in@gmail.com"
                  className="flex items-center gap-3 group hover:text-brand-purple transition-colors"
                >
                  <div className="w-8 h-8 rounded-lg bg-brand-purple-light/80 border border-brand-purple/15 flex items-center justify-center text-brand-purple flex-shrink-0 group-hover:bg-brand-purple group-hover:text-white transition-all">
                    <Mail className="w-4 h-4" />
                  </div>
                  <span className="font-medium text-brand-text group-hover:text-brand-purple transition-colors">
                    mithitax.in@gmail.com
                  </span>
                </a>

                {/* Phone */}
                <a
                  href="tel:+919334359514"
                  className="flex items-center gap-3 group hover:text-brand-purple transition-colors"
                >
                  <div className="w-8 h-8 rounded-lg bg-brand-purple-light/80 border border-brand-purple/15 flex items-center justify-center text-brand-purple flex-shrink-0 group-hover:bg-brand-purple group-hover:text-white transition-all">
                    <Phone className="w-4 h-4" />
                  </div>
                  <span className="font-semibold text-brand-text group-hover:text-brand-purple transition-colors">
                    +91 93343 59514
                  </span>
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Sub-Footer Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-brand-muted">
          {/* Copyright */}
          <div>
            <Link href="/" className="hover:text-brand-purple transition-colors font-medium">
              © {currentYear} MithiTax. All Rights Reserved.
            </Link>
          </div>

          {/* Powered by Zwantum on the right */}
          <div className="flex items-center gap-1.5 font-medium">
            <span>Powered by</span>
            <a
              href="https://www.zwantum.com/"
              target="_blank"
              rel="noreferrer"
              className="text-brand-purple font-semibold hover:underline inline-flex items-center gap-1"
            >
              <span>Zwantum</span>

            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
