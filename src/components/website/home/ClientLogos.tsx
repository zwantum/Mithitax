"use client";

import React, { useState, useEffect, useRef } from "react";

// 9 Authentic Colorful Brand Logos matching the floating squircle SaaS layout reference
const trustedBrands = [
  {
    id: "hubspot",
    name: "HubSpot",
    renderIcon: () => (
      <svg viewBox="0 0 24 24" className="w-full h-full fill-[#FF7A59]">
        <path d="M18.8 7.3V5.5c.7-.3 1.2-1 1.2-1.8 0-1.1-.9-2-2-2s-2 .9-2 2c0 .8.5 1.5 1.2 1.8v1.8c-.8.2-1.5.7-1.9 1.4L9.8 5.4c.1-.3.1-.6.1-.9 0-1.7-1.3-3-3-3s-3 1.3-3 3 1.3 3 3 3c.4 0 .8-.1 1.1-.3l5.5 3.3c-.4.7-.6 1.6-.6 2.5s.2 1.8.6 2.5l-3.3 2c-.3-.2-.7-.3-1.1-.3-1.7 0-3 1.3-3 3s1.3 3 3 3 3-1.3 3-3c0-.3 0-.6-.1-.9l5.6-3.4c.4.7 1.1 1.2 1.9 1.4v1.8c-.7.3-1.2 1-1.2 1.8 0 1.1.9 2 2 2s2-.9 2-2c0-.8-.5-1.5-1.2-1.8v-1.8c1.3-.5 2.2-1.8 2.2-3.3s-.9-2.8-2.2-3.3zm-1.8-3.6c.4 0 .8.4.8.8s-.4.8-.8.8-.8-.4-.8-.8.4-.8.8-.8zM6.9 8.5c-.8 0-1.5-.7-1.5-1.5s.7-1.5 1.5-1.5 1.5.7 1.5 1.5-.7 1.5-1.5 1.5zm0 14c-.8 0-1.5-.7-1.5-1.5s.7-1.5 1.5-1.5 1.5.7 1.5 1.5-.7 1.5-1.5 1.5zm10.1-6.5c-1.1 0-2-.9-2-2s.9-2 2-2 2 .9 2 2-.9 2-2 2zm0 6.5c-.4 0-.8-.4-.8-.8s.4-.8.8-.8.8.4.8.8-.4.8-.8.8z" />
      </svg>
    ),
  },
  {
    id: "loom",
    name: "Loom",
    renderIcon: () => (
      <svg viewBox="0 0 24 24" className="w-full h-full fill-none">
        <circle cx="12" cy="12" r="4.5" fill="#625DF5" />
        <path
          d="M12 2v4M12 18v4M2 12h4M18 12h4M4.93 4.93l2.83 2.83M16.24 16.24l2.83 2.83M4.93 19.07l2.83-2.83M16.24 7.76l2.83-2.83"
          stroke="#625DF5"
          strokeWidth="2.5"
          strokeLinecap="round"
        />
      </svg>
    ),
  },
  {
    id: "clickup",
    name: "ClickUp",
    renderIcon: () => (
      <svg viewBox="0 0 24 24" className="w-full h-full">
        <defs>
          <linearGradient id="cu-top" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#FF005F" />
            <stop offset="100%" stopColor="#FFA600" />
          </linearGradient>
          <linearGradient id="cu-bottom" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#7B68EE" />
            <stop offset="100%" stopColor="#00E6FF" />
          </linearGradient>
        </defs>
        <path d="M4 11.5l3.2-2.5 4.8 4 4.8-4 3.2 2.5L12 18.2z" fill="url(#cu-top)" />
        <path
          d="M5.5 16.5c1.8 2.2 4.1 3.5 6.5 3.5s4.7-1.3 6.5-3.5l2.2 1.8C18.2 21.3 15.3 23 12 23s-6.2-1.7-8.7-4.7l2.2-1.8z"
          fill="url(#cu-bottom)"
        />
      </svg>
    ),
  },
  {
    id: "paypal",
    name: "PayPal",
    renderIcon: () => (
      <svg viewBox="0 0 24 24" className="w-full h-full">
        <path
          d="M7.076 21.337H2.47a.641.641 0 0 1-.633-.74L4.944 2.41a.855.855 0 0 1 .843-.722h6.586c3.42 0 5.688 1.554 5.378 5.097-.247 2.812-1.895 4.417-4.324 4.965l-.337.07-.638 4.025a.855.855 0 0 1-.843.722H7.928l-.852 4.77z"
          fill="#003087"
        />
        <path
          d="M8.771 16.567l1.047-6.623.337-.07c2.43-.548 4.077-2.153 4.324-4.965.31-3.543-1.958-5.097-5.378-5.097H2.516a.855.855 0 0 0-.843.722L.03 18.775a.641.641 0 0 0 .633.74h4.606l1.246-7.893.003-.02a.855.855 0 0 1 .843-.722h1.41z"
          fill="#0079C1"
        />
      </svg>
    ),
  },
  {
    id: "squarespace",
    name: "Squarespace",
    renderIcon: (isCenter?: boolean) => (
      <svg
        viewBox="0 0 24 24"
        className={`w-full h-full ${isCenter ? "fill-white" : "fill-slate-900"
          } transition-colors duration-700`}
      >
        <path d="M12.74 8.74l3.14-3.14a4.44 4.44 0 0 0-6.28-6.28L4.46 4.46a4.44 4.44 0 0 0 0 6.28l4.42 4.42 1.4-1.4-4.42-4.44a2.46 2.46 0 1 1 3.48-3.48l5.14 5.14a2.46 2.46 0 0 1 0 3.48l-1.4 1.4 1.42 1.42 1.4-1.4a4.44 4.44 0 0 0 0-6.28l-3.16-3.16zm-1.48 6.52l-3.14 3.14a4.44 4.44 0 0 0 6.28 6.28l5.14-5.14a4.44 4.44 0 0 0 0-6.28l-4.42-4.42-1.4 1.4 4.42 4.44a2.46 2.46 0 0 1-3.48 3.48l-5.14-5.14a2.46 2.46 0 0 1 0-3.48l1.4-1.4-1.42-1.42-1.4 1.4a4.44 4.44 0 0 0 0 6.28l3.16 3.16z" />
      </svg>
    ),
  },
  {
    id: "asana",
    name: "Asana",
    renderIcon: () => (
      <svg viewBox="0 0 24 24" className="w-full h-full">
        <circle cx="12" cy="7" r="4.2" fill="#F06A6A" />
        <circle cx="6.5" cy="16.5" r="4.2" fill="#FC636B" />
        <circle cx="17.5" cy="16.5" r="4.2" fill="#FF5263" />
      </svg>
    ),
  },
  {
    id: "zendesk",
    name: "Zendesk",
    renderIcon: () => (
      <svg viewBox="0 0 24 24" className="w-full h-full fill-[#00A699]">
        <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1.5 5.25c2.07 0 3.75 1.68 3.75 3.75H6.75c0-2.07 1.68-3.75 3.75-3.75zm-3.75 9.5c0-2.07 1.68-3.75 3.75-3.75v7.5c-2.07 0-3.75-1.68-3.75-3.75zm6.75-2c0 2.07-1.68 3.75-3.75 3.75h7.5c0-2.07-1.68-3.75-3.75-3.75zm3.75-3.75c0 2.07-1.68 3.75-3.75 3.75V7.25c2.07 0 3.75 1.68 3.75 3.75z" />
      </svg>
    ),
  },
  {
    id: "slack",
    name: "Slack",
    renderIcon: () => (
      <svg viewBox="0 0 24 24" className="w-full h-full">
        <path
          d="M5.042 15.165a2.528 2.528 0 0 1-2.52-2.523 2.52 2.52 0 0 1 2.52-2.52h2.52v2.52c0 1.394-1.127 2.523-2.52 2.523z"
          fill="#E01E5A"
        />
        <path
          d="M6.303 15.165a2.528 2.528 0 0 1 2.523-2.52 2.52 2.52 0 0 1 2.52 2.52v6.313A2.528 2.528 0 0 1 8.826 24a2.52 2.52 0 0 1-2.523-2.522v-6.313z"
          fill="#E01E5A"
        />
        <path
          d="M8.826 5.042a2.528 2.528 0 0 1-2.523-2.52A2.52 2.52 0 0 1 8.826 0a2.528 2.528 0 0 1 2.52 2.522v2.52H8.826z"
          fill="#36C5F0"
        />
        <path
          d="M8.826 6.303a2.528 2.528 0 0 1 2.52 2.523 2.52 2.52 0 0 1-2.52 2.52H2.513A2.528 2.528 0 0 1 0 8.826a2.52 2.52 0 0 1 2.522-2.523h6.304z"
          fill="#36C5F0"
        />
        <path
          d="M18.956 8.826a2.528 2.528 0 0 1 2.522 2.52 2.52 2.52 0 0 1-2.522 2.523h-2.52V11.35c0-1.395 1.127-2.524 2.52-2.524z"
          fill="#2EB67D"
        />
        <path
          d="M17.697 8.826a2.528 2.528 0 0 1-2.52-2.523 2.52 2.52 0 0 1 2.52-2.52h6.313A2.528 2.528 0 0 1 24 6.303a2.52 2.52 0 0 1-2.522 2.523h-6.313z"
          fill="#2EB67D"
        />
        <path
          d="M15.174 18.956a2.528 2.528 0 0 1 2.523 2.522 2.52 2.52 0 0 1-2.523 2.522 2.528 2.528 0 0 1-2.52-2.522v-2.522h2.52z"
          fill="#ECB22E"
        />
        <path
          d="M15.174 17.697a2.528 2.528 0 0 1-2.52-2.52 2.52 2.52 0 0 1 2.52-2.523h6.304A2.528 2.528 0 0 1 24 15.174a2.52 2.52 0 0 1-2.522 2.523h-6.304z"
          fill="#ECB22E"
        />
      </svg>
    ),
  },
  {
    id: "shopify",
    name: "Shopify",
    renderIcon: () => (
      <svg viewBox="0 0 24 24" className="w-full h-full">
        <path
          d="M19.98 6.78a.8.8 0 0 0-.75-.38c-.37 0-4.05.3-4.05.3s-2.7-2.65-2.98-2.92a.8.8 0 0 0-.67-.28c-.16 0-.27.06-.39.12l-1.09 3.2s-2.07.64-2.28.7a.8.8 0 0 0-.58.74l-.84 10.87c0 .1.03.22.1.32.1.15.28.25.48.25l10.36 1.95c.08.02.16.02.24 0l4.57-13.68c-.02-.1-.08-.22-.17-.31l-2.02-.9z"
          fill="#95BF47"
        />
        <path
          d="M12.14 3.5c-.16 0-.27.06-.39.12l-1.09 3.2s-2.07.64-2.28.7a.8.8 0 0 0-.58.74l-.84 10.87c0 .1.03.22.1.32.1.15.28.25.48.25l10.36 1.95c.08.02.16.02.24 0L14.7 6.4c-.37 0-4.05.3-4.05.3s-2.7-2.65-2.98-2.92a.8.8 0 0 0-.67-.28"
          fill="#5E8E3E"
        />
        <path
          d="M13.6 8.52l-1.02 2.94s-.8-.43-1.78-.43c-1.46 0-1.54.91-1.54 1.14 0 1.25 3.32 1.73 3.32 4.67 0 2.31-1.46 3.69-3.48 3.69-2.45 0-3.64-1.53-3.64-1.53l.65-2.16s1.26 1.07 2.37 1.07c.73 0 1.06-.57 1.06-1 0-1.72-3.32-1.8-3.32-4.63 0-2.44 1.75-3.83 3.93-3.83 1.5 0 2.45.47 2.45.47z"
          fill="#FFFFFF"
        />
      </svg>
    ),
  },
];

// Helper for classes corresponding to distance from center (0 = center hero, 4 = outer edges, 5 = buffer)
const getSlotVisuals = (distance: number) => {
  switch (distance) {
    case 0:
      // Active center hero card: large, dark slate, large icon, no box shadow
      return {
        cardClass:
          "bg-slate-900 border border-slate-800 shadow-none rounded-2xl sm:rounded-3xl",
        iconClass: "w-13 h-13 sm:w-16 sm:h-16 md:w-20 md:h-20",
        isCenter: true,
      };
    case 1:
      // Immediate neighbor cards
      return {
        cardClass:
          "bg-white border border-slate-200/80 shadow-[0_4px_16px_rgba(23,23,42,0.04)] rounded-2xl sm:rounded-3xl",
        iconClass: "w-9 h-9 sm:w-12 sm:h-12 md:w-14 md:h-14",
        isCenter: false,
      };
    case 2:
      // Intermediate step
      return {
        cardClass:
          "bg-white border border-slate-200/80 shadow-[0_4px_16px_rgba(23,23,42,0.04)] rounded-2xl",
        iconClass: "w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12",
        isCenter: false,
      };
    case 3:
      // Inner edge
      return {
        cardClass:
          "bg-white border border-slate-200/80 shadow-[0_4px_16px_rgba(23,23,42,0.04)] rounded-xl sm:rounded-2xl",
        iconClass: "w-7 h-7 sm:w-8 sm:h-8 md:w-10 md:h-10",
        isCenter: false,
      };
    case 4:
    default:
      // Outermost edge / buffer
      return {
        cardClass:
          "bg-white border border-slate-200/80 shadow-[0_4px_16px_rgba(23,23,42,0.04)] rounded-xl sm:rounded-2xl",
        iconClass: "w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8",
        isCenter: false,
      };
  }
};

export default function ClientLogos() {
  const total = trustedBrands.length;
  // Start with Squarespace (index 4) at center, matching the approved reference
  const [centerVirtualIndex, setCenterVirtualIndex] = useState(4);
  const [isPaused, setIsPaused] = useState(false);
  const timerRef = useRef<NodeJS.Timeout | null>(null);

  // Auto-scroll loop: smoothly advance by 1 card every 2.8s
  useEffect(() => {
    if (isPaused) return;

    timerRef.current = setInterval(() => {
      setCenterVirtualIndex((prev) => prev + 1);
    }, 2800);

    return () => {
      if (timerRef.current) clearInterval(timerRef.current);
    };
  }, [isPaused]);

  // Render 11 slots from offset -5 to +5 (9 visible + 2 offscreen transition buffers)
  // Keying by persistent virtualIndex ensures smooth leftward sliding with zero snap/jump or fly-backwards
  const offsets = [-5, -4, -3, -2, -1, 0, 1, 2, 3, 4, 5];

  return (
    <section className="pt-8 pb-14  overflow-hidden">
      {/* Dynamic CSS variables for exact responsive slot dimensions and center positions */}
      <style jsx>{`
        .carousel-stage {
          --slot-w-0: 8rem;
          --slot-h-0: 8rem;
          --slot-w-1: 6.5rem;
          --slot-h-1: 6.5rem;
          --slot-w-2: 5.5rem;
          --slot-h-2: 5.5rem;
          --slot-w-3: 4.75rem;
          --slot-h-3: 4.75rem;
          --slot-w-4: 4rem;
          --slot-h-4: 4rem;
          --slot-w-5: 3.25rem;
          --slot-h-5: 3.25rem;

          --slot-x-0: 0px;
          --slot-x-1: 134px;
          --slot-x-2: 248px;
          --slot-x-3: 348px;
          --slot-x-4: 436px;
          --slot-x-5: 530px;
        }

        @media (max-width: 767px) {
          .carousel-stage {
            --slot-w-0: 6.5rem;
            --slot-h-0: 6.5rem;
            --slot-w-1: 5.5rem;
            --slot-h-1: 5.5rem;
            --slot-w-2: 4.75rem;
            --slot-h-2: 4.75rem;
            --slot-w-3: 4rem;
            --slot-h-3: 4rem;
            --slot-w-4: 3.5rem;
            --slot-h-4: 3.5rem;
            --slot-w-5: 2.75rem;
            --slot-h-5: 2.75rem;

            --slot-x-0: 0px;
            --slot-x-1: 108px;
            --slot-x-2: 202px;
            --slot-x-3: 284px;
            --slot-x-4: 356px;
            --slot-x-5: 430px;
          }
        }

        @media (max-width: 639px) {
          .carousel-stage {
            --slot-w-0: 5rem;
            --slot-h-0: 5rem;
            --slot-w-1: 4.25rem;
            --slot-h-1: 4.25rem;
            --slot-w-2: 3.75rem;
            --slot-h-2: 3.75rem;
            --slot-w-3: 3.25rem;
            --slot-h-3: 3.25rem;
            --slot-w-4: 2.75rem;
            --slot-h-4: 2.75rem;
            --slot-w-5: 2.25rem;
            --slot-h-5: 2.25rem;

            --slot-x-0: 0px;
            --slot-x-1: 82px;
            --slot-x-2: 154px;
            --slot-x-3: 218px;
            --slot-x-4: 274px;
            --slot-x-5: 330px;
          }
        }
      `}</style>

      <div className="max-w-content mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Heading with Site-Wide Font Family */}
        <div className="text-center mb-10 sm:mb-14">
          <h2 className="text-xl sm:text-2xl md:text-[1.75rem] font-bold text-brand-text tracking-tight">
            Trusted by Businesses &amp; Entrepreneurs
          </h2>
          <div className="w-10 h-1 bg-brand-lime mx-auto mt-2.5 rounded-full" />
        </div>

        {/* Carousel Container: Auto-scrolls smoothly, pauses on hover, click to center */}
        <div
          className="carousel-stage relative max-w-5xl mx-auto h-28 sm:h-36 md:h-40 overflow-hidden select-none"
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
        >
          {/* Subtle lateral edge fade gradients for seamless entrance and exit */}
          <div className="pointer-events-none absolute left-0 top-0 bottom-0 w-8 sm:w-16 bg-gradient-to-r from-white to-transparent z-20" />
          <div className="pointer-events-none absolute right-0 top-0 bottom-0 w-8 sm:w-16 bg-gradient-to-l from-white to-transparent z-20" />

          {offsets.map((offset) => {
            const virtualIndex = centerVirtualIndex + offset;
            const brandIndex = ((virtualIndex % total) + total) % total;
            const brand = trustedBrands[brandIndex];
            const distance = Math.abs(offset);
            const { cardClass, iconClass, isCenter } = getSlotVisuals(distance);

            const abs = Math.min(distance, 5);
            const sign = offset < 0 ? -1 : 1;
            const isOffscreen = distance >= 5;

            return (
              <div
                key={virtualIndex}
                title={brand.name}
                onClick={() => setCenterVirtualIndex(virtualIndex)}
                style={{
                  position: "absolute",
                  left: "50%",
                  top: "50%",
                  transform: `translate(calc(-50% + (${sign} * var(--slot-x-${abs}))), -50%)`,
                  width: `var(--slot-w-${abs})`,
                  height: `var(--slot-h-${abs})`,
                  opacity: isOffscreen ? 0 : 1,
                  pointerEvents: isOffscreen ? "none" : "auto",
                  zIndex: isCenter ? 15 : 10 - abs,
                }}
                className={`group flex items-center justify-center transition-all duration-700 ease-[cubic-bezier(0.25,1,0.5,1)] cursor-pointer ${cardClass}`}
              >
                {/* Brand Logo: smooth proportional scaling and color transition */}
                <div
                  className={`${iconClass} transition-all duration-700 ease-[cubic-bezier(0.25,1,0.5,1)] flex items-center justify-center`}
                >
                  {brand.renderIcon(isCenter)}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}