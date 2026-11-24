import React from "react";
import Image from "next/image";
import { ShieldCheck, FileCheck, BadgeCheck } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function AboutSection() {
  const trustPoints = [
    {
      icon: ShieldCheck,
      title: "Experienced and Qualified Professionals",
      description: "Chartered Accountants, CS, and corporate advocates guiding your statutory compliance.",
    },
    {
      icon: FileCheck,
      title: "End-to-End Business and Tax Solutions",
      description: "From initial incorporation to monthly GST filings and annual corporate audits.",
    },
    {
      icon: BadgeCheck,
      title: "Client-Focused and Transparent Approach",
      description: "Clear fixed pricing, zero hidden clauses, and proactive regulatory reminders.",
    },
  ];

  return (
    <section className="pt-0 pb-10 md:pb-16 bg-white overflow-hidden relative">
      <div className="max-w-content mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
          {/* Left Column: Photo with Ambient Glow */}
          <div className="lg:col-span-6 relative">
            {/* Soft Ambient Glows mixing Primary Purple and Secondary Lime */}
            <div className="absolute -top-8 -left-8 w-60 h-60 bg-brand-purple/10 rounded-full blur-3xl pointer-events-none -z-10" />
            <div className="absolute -bottom-8 -right-8 w-60 h-60 bg-brand-lime/25 rounded-full blur-3xl pointer-events-none -z-10" />

            <div
              className="relative w-full aspect-[4/3.2] sm:aspect-[4/3] rounded-3xl overflow-hidden border border-slate-200/80 shadow-[0_12px_32px_rgba(23,23,42,0.06)] bg-brand-alt group"
              style={{
                position: "relative",
                width: "100%",
                aspectRatio: "4 / 3",
                overflow: "hidden",
              }}
            >
              <Image
                src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?auto=format&fit=crop&w=1200&q=85"
                alt="Professional tax and financial advisory team collaborating in modern conference room"
                fill
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 600px"
                className="object-cover object-center transition-transform duration-700 group-hover:scale-105"
                style={{ objectFit: "cover" }}
              />
              <div className="absolute inset-0 bg-gradient-to-tr from-brand-text/10 via-transparent to-transparent pointer-events-none" />
            </div>
          </div>

          {/* Right Column: About Details */}
          <div className="lg:col-span-6 flex flex-col items-start lg:pl-4">
            {/* Reduced, balanced heading size */}
            <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-[2rem] font-semibold text-brand-text tracking-tight leading-snug mb-5">
              Expert Guidance for Every Stage of Business
            </h2>

            <p className="text-sm sm:text-[0.9375rem] text-brand-muted leading-relaxed font-normal mb-7">
              Mithi Tax is a professional financial and compliance consultancy helping businesses, startups and individuals manage their legal, accounting and taxation requirements with confidence.
            </p>

            {/* Three Trust Points with Clean Primary Icon Badges (No secondary color, no text hover animation) */}
            <div className="space-y-4 sm:space-y-4.5 mb-8 w-full">
              {trustPoints.map((point) => {
                const Icon = point.icon;
                return (
                  <div key={point.title} className="group flex items-start gap-3.5 sm:gap-4">
                    <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-xl bg-purple-50 border border-purple-100 text-brand-purple flex items-center justify-center flex-shrink-0 mt-0.5 transition-all duration-300 group-hover:bg-brand-purple group-hover:text-white group-hover:border-brand-purple shadow-xs">
                      <Icon className="w-4 h-4 sm:w-5 sm:h-5 transition-transform duration-300" strokeWidth={2} />
                    </div>
                    <div>
                      <h4 className="text-sm sm:text-base font-semibold text-brand-text leading-snug">
                        {point.title}
                      </h4>
                      <p className="text-xs sm:text-[0.875rem] text-brand-muted mt-1 leading-relaxed">
                        {point.description}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>

            {/* CTA Button in Secondary Lime */}
            <Button
              href="/about"
              variant="lime"
              size="md"
              withArrow
              className="px-8 py-3.5 text-sm font-semibold rounded-xl shadow-[0_4px_14px_rgba(180,231,23,0.35)] hover:shadow-[0_6px_22px_rgba(180,231,23,0.45)] hover:-translate-y-0.5 transition-all duration-300"
            >
              Know More About Us
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
