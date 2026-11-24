import React from "react";
import { ServiceCard } from "@/components/website/services/ServiceCard";
import { Button } from "@/components/ui/button";
import { serviceCategories } from "@/lib/constants";

export default function ServicesSection() {
  return (
    <section id="services" className="py-12 md:py-18 bg-gradient-to-b from-[#F7F8FC] via-[#F4F4FA] to-white">
      <div className="max-w-content mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header: Split Layout as in Reference */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-12 items-end mb-14 md:mb-16">
          <div className="lg:col-span-7">
            <div className="mb-3">
              <span className="text-xs font-semibold tracking-wider text-brand-purple uppercase">
                OUR SERVICES
              </span>
              <div className="w-8 h-[2px] bg-brand-lime/70 mt-1.5 rounded-full" />
            </div>
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-[2.65rem] font-semibold text-brand-text tracking-tight leading-[1.2]">
              Complete Business Solutions,
              <br />
              Under One Roof
            </h2>
          </div>

          <div className="lg:col-span-5 relative lg:pl-6">
            {/* Lighter, reduced-height vertical divider */}
            <div className="hidden lg:block absolute left-0 top-1/2 -translate-y-1/2 w-[2px] h-[3.5rem] bg-brand-lime/50 rounded-full" />
            <p className="text-sm sm:text-[0.9375rem] text-brand-muted leading-relaxed">
              From business registration to taxation and legal compliance, Mithi Tax provides end-to-end professional support for individuals, startups and growing businesses.
            </p>
          </div>
        </div>

        {/* 5 Service Category Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-5 lg:gap-4 xl:gap-5 mb-14">
          {serviceCategories.map((category) => (
            <ServiceCard key={category.id} category={category} />
          ))}
        </div>

        {/* Centered "View All Services" Button */}
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
