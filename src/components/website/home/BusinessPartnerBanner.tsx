import React from "react";
import Image from "next/image";
import { CalendarDays, Users, Layers } from "lucide-react";

export default function BusinessPartnerBanner() {
  return (
    <section className="pt-0 pb-8 sm:py-10 md:py-14 bg-white">
      <div className="max-w-content mx-auto px-0 sm:px-6 lg:px-8">
        {/* Banner: Edge-to-edge full width on mobile, rounded card box on desktop */}
        <div className="relative w-full rounded-none sm:rounded-3xl overflow-hidden bg-gradient-to-br from-[#4a0684] via-[#710ac6] to-[#8817eb] shadow-none sm:shadow-[0_20px_50px_-10px_rgba(113,10,198,0.28)]">
          {/* Ambient Lighting Accents */}
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,rgba(180,231,23,0.15),transparent_55%)] pointer-events-none" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_left,rgba(0,0,0,0.15),transparent_40%)] pointer-events-none" />

          {/* Architectural Image Container: Perfectly Blended via Mask Image on Mobile, Diagonal Cut on Desktop */}
          <div className="absolute inset-x-0 top-0 h-64 sm:h-72 lg:inset-y-0 lg:left-0 lg:w-[34%] lg:h-full overflow-hidden pointer-events-none lg:[clip-path:polygon(0_0,100%_0,76%_100%,0_100%)] [mask-image:linear-gradient(to_bottom,black_25%,transparent_90%)] [-webkit-mask-image:linear-gradient(to_bottom,black_25%,transparent_90%)] lg:[mask-image:none] lg:[-webkit-mask-image:none]">
            {/* Top-Left Corner Lime Accent Wedge */}
            <div className="absolute top-0 left-0 w-24 sm:w-32 h-12 sm:h-18 bg-brand-lime [clip-path:polygon(0_0,100%_0,0_100%)] z-20 pointer-events-none" />

            <Image
              src="https://images.unsplash.com/photo-1486325212027-8081e485255e?auto=format&fit=crop&w=1200&q=85"
              alt="Modern corporate architecture"
              fill
              sizes="(max-width: 1024px) 100vw, 35vw"
              className="object-cover object-center"
              priority
            />
          </div>

          {/* Content Area: Positioned cleanly below the skyline on mobile, comfortably clear of the diagonal slant on desktop */}
          <div className="relative z-20 lg:ml-[35%] pt-44 sm:pt-48 lg:pt-12 px-5 sm:px-8 lg:pl-8 lg:pr-10 pb-8 lg:pb-12 flex flex-col justify-center">
            {/* Main Headline */}
            <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-[2.4rem] font-bold text-white tracking-tight leading-snug mb-2 sm:mb-3">
              One Partner for Every Stage of Your Business
            </h2>

            {/* Subtitle */}
            <p className="text-xs sm:text-sm md:text-base text-white/90 font-normal leading-relaxed mb-6 sm:mb-8 max-w-2xl">
              Comprehensive business support, from setting up your company to managing taxation, accounting and ongoing compliance.
            </p>

            {/* Stats Metrics: Symmetrical 3-Column Grid, No top divider on mobile */}
            <div className="grid grid-cols-3 gap-2 sm:gap-6 lg:gap-10 pt-2 sm:pt-6 border-t-0 sm:border-t sm:border-white/20">
              {/* Stat 1: Years of Experience */}
              <div className="flex flex-col sm:flex-row sm:items-center gap-1.5 sm:gap-3.5 p-2 sm:p-0 rounded-xl bg-white/10 sm:bg-transparent backdrop-blur-xs border border-white/10 sm:border-0 text-center sm:text-left">
                <div className="w-7 h-7 sm:w-9 sm:h-9 rounded-lg bg-brand-lime/20 sm:bg-transparent flex items-center justify-center mx-auto sm:mx-0 flex-shrink-0">
                  <CalendarDays className="w-4 h-4 sm:w-8 sm:h-8 text-brand-lime" strokeWidth={1.9} />
                </div>
                <div>
                  <div className="text-xs sm:text-base lg:text-lg font-bold text-white tracking-tight leading-tight">
                    10+ Years
                  </div>
                  <div className="text-[10px] sm:text-xs text-white/80 font-normal mt-0.5 leading-tight">
                    of Experience
                  </div>
                </div>
              </div>

              {/* Stat 2: Businesses Served */}
              <div className="flex flex-col sm:flex-row sm:items-center gap-1.5 sm:gap-3.5 p-2 sm:p-0 rounded-xl bg-white/10 sm:bg-transparent backdrop-blur-xs border border-white/10 sm:border-0 text-center sm:text-left">
                <div className="w-7 h-7 sm:w-9 sm:h-9 rounded-lg bg-brand-lime/20 sm:bg-transparent flex items-center justify-center mx-auto sm:mx-0 flex-shrink-0">
                  <Users className="w-4 h-4 sm:w-8 sm:h-8 text-brand-lime" strokeWidth={1.9} />
                </div>
                <div>
                  <div className="text-xs sm:text-base lg:text-lg font-bold text-white tracking-tight leading-tight">
                    1,500+
                  </div>
                  <div className="text-[10px] sm:text-xs text-white/80 font-normal mt-0.5 leading-tight">
                    Businesses Served
                  </div>
                </div>
              </div>

              {/* Stat 3: Service Offerings */}
              <div className="flex flex-col sm:flex-row sm:items-center gap-1.5 sm:gap-3.5 p-2 sm:p-0 rounded-xl bg-white/10 sm:bg-transparent backdrop-blur-xs border border-white/10 sm:border-0 text-center sm:text-left">
                <div className="w-7 h-7 sm:w-9 sm:h-9 rounded-lg bg-brand-lime/20 sm:bg-transparent flex items-center justify-center mx-auto sm:mx-0 flex-shrink-0">
                  <Layers className="w-4 h-4 sm:w-8 sm:h-8 text-brand-lime" strokeWidth={1.9} />
                </div>
                <div>
                  <div className="text-xs sm:text-base lg:text-lg font-bold text-white tracking-tight leading-tight">
                    30+
                  </div>
                  <div className="text-[10px] sm:text-xs text-white/80 font-normal mt-0.5 leading-tight">
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
