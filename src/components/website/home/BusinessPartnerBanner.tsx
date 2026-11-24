import React from "react";
import Image from "next/image";
import { CalendarDays, Users, Layers } from "lucide-react";

export default function BusinessPartnerBanner() {
  return (
    <section className="py-8 sm:py-10 md:py-14 bg-white">
      <div className="max-w-content mx-auto px-4 sm:px-6 lg:px-8">
        {/* Banner Card: Sophisticated Multi-Stop Purple Gradient with Elevated Depth */}
        <div className="relative w-full rounded-3xl overflow-hidden bg-gradient-to-r from-[#550795] via-[#710ac6] to-[#8817eb] shadow-[0_20px_50px_-10px_rgba(113,10,198,0.3)] ">
          {/* Subtle ambient light glows */}
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,rgba(180,231,23,0.15),transparent_55%)] pointer-events-none" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_left,rgba(0,0,0,0.12),transparent_40%)] pointer-events-none" />

          {/* Left Side: Modern Glass Skyscraper with clean diagonal cut on desktop */}
          <div className="lg:absolute lg:inset-y-0 lg:left-0 lg:w-[32%] h-60 sm:h-72 lg:h-full relative overflow-hidden [clip-path:none] lg:[clip-path:polygon(0_0,100%_0,76%_100%,0_100%)]">
            {/* Top-Left Corner Lime Accent Wedge */}
            <div className="absolute top-0 left-0 w-24 sm:w-32 h-14 sm:h-18 bg-brand-lime [clip-path:polygon(0_0,100%_0,0_100%)] z-20 pointer-events-none" />

            <Image
              src="https://images.unsplash.com/photo-1486325212027-8081e485255e?auto=format&fit=crop&w=1200&q=85"
              alt="Modern corporate glass architecture in sunny blue sky"
              fill
              sizes="(max-width: 1024px) 100vw, 35vw"
              className="object-cover object-center"
              priority
            />
          </div>

          {/* Right Side: Primary Purple Content Area spread naturally across the card */}
          <div className="relative lg:ml-[28%] p-8 sm:p-10 lg:py-12 lg:px-12 flex flex-col justify-center z-10">
            {/* Main Headline: Refined font-semibold with natural line breaks */}
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-[2.5rem] font-semibold text-white tracking-tight leading-[1.2] mb-3">
              One Partner for Every

              Stage of Your Business
            </h2>

            {/* Subtitle */}
            <p className="text-sm sm:text-base text-white/90 font-normal leading-relaxed mb-8 sm:mb-9 max-w-2xl">
              Comprehensive support for your business, from setup to compliance.
            </p>

            {/* Stats Metrics Row: Spread evenly with clean dividers */}
            <div className="flex flex-wrap sm:flex-nowrap items-center gap-6 sm:gap-8 lg:gap-10 pt-1">
              {/* Stat 1: Years of Experience */}
              <div className="flex items-center gap-3.5">
                <CalendarDays
                  className="w-8 h-8 sm:w-9 sm:h-9 text-brand-lime flex-shrink-0"
                  strokeWidth={1.8}
                />
                <div>
                  <div className="text-base sm:text-lg font-bold text-white tracking-tight leading-snug">
                    10+ Years
                  </div>
                  <div className="text-xs text-white/80 font-normal mt-0.5 whitespace-nowrap">
                    of Experience
                  </div>
                </div>
              </div>

              {/* Vertical Divider 1 */}
              <div className="hidden sm:block w-[1px] h-8 bg-white/25 flex-shrink-0" />

              {/* Stat 2: Businesses Served */}
              <div className="flex items-center gap-3.5">
                <Users
                  className="w-8 h-8 sm:w-9 sm:h-9 text-brand-lime flex-shrink-0"
                  strokeWidth={1.8}
                />
                <div>
                  <div className="text-base sm:text-lg font-bold text-white tracking-tight leading-snug">
                    1,500+
                  </div>
                  <div className="text-xs text-white/80 font-normal mt-0.5 whitespace-nowrap">
                    Businesses Served
                  </div>
                </div>
              </div>

              {/* Vertical Divider 2 */}
              <div className="hidden sm:block w-[1px] h-8 bg-white/25 flex-shrink-0" />

              {/* Stat 3: Service Offerings */}
              <div className="flex items-center gap-3.5">
                <Layers
                  className="w-8 h-8 sm:w-9 sm:h-9 text-brand-lime flex-shrink-0"
                  strokeWidth={1.8}
                />
                <div>
                  <div className="text-base sm:text-lg font-bold text-white tracking-tight leading-snug">
                    30+
                  </div>
                  <div className="text-xs text-white/80 font-normal mt-0.5 whitespace-nowrap">
                    Service Offerings
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
