import React from "react";
import CalculatorsSection from "@/components/website/home/CalculatorsSection";

export const metadata = {
  title: "Free Business Calculators | GST, Income Tax & TDS | Mithi Tax",
  description:
    "Use our free online business and tax calculators to estimate GST, income tax, TDS deductions, HRA exemptions, startup incorporation costs, and gratuity.",
};

export default function CalculatorsPage() {
  return (
    <div className="bg-white">
      {/* 1. Hero Header Section (Matches Home, About, Insights & Contact ambient waves) */}
      <section className="relative overflow-hidden pt-8 pb-8 sm:pt-12 sm:pb-12 md:pt-16 md:pb-14 bg-white">
        <div className="absolute inset-0 pointer-events-none overflow-hidden">
          <div
            className="absolute top-0 left-1/2 -translate-x-1/2 w-[900px] h-[440px] pointer-events-none"
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
              <linearGradient id="calc-left-grad" x1="0%" y1="0%" x2="100%" y2="80%">
                <stop offset="0%" stopColor="#710ac6" stopOpacity="0.16" />
                <stop offset="50%" stopColor="#8c1fe3" stopOpacity="0.08" />
                <stop offset="100%" stopColor="#FFFFFF" stopOpacity="0" />
              </linearGradient>
            </defs>
            <path
              d="M-50 -20 C 180 80, 360 220, 320 440 C 280 620, 110 740, -50 820 Z"
              fill="url(#calc-left-grad)"
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
              <linearGradient id="calc-right-grad" x1="100%" y1="0%" x2="0%" y2="90%">
                <stop offset="0%" stopColor="#B4E717" stopOpacity="0.2" />
                <stop offset="50%" stopColor="#ccf24b" stopOpacity="0.08" />
                <stop offset="100%" stopColor="#FFFFFF" stopOpacity="0" />
              </linearGradient>
            </defs>
            <path
              d="M690 -30 C 470 80, 290 240, 340 460 C 390 640, 550 740, 690 820 Z"
              fill="url(#calc-right-grad)"
            />
          </svg>
        </div>

        <div className="relative z-10 max-w-content mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <div className="inline-flex flex-col items-center mb-4">
              <span className="text-xs font-semibold tracking-wider text-brand-purple uppercase">
                ONLINE TOOLS
              </span>
              <div className="w-8 h-[2px] bg-brand-lime mt-1.5 rounded-full" />
            </div>

            <h1 className="text-3xl sm:text-5xl lg:text-[3.3rem] font-semibold tracking-tight text-brand-text leading-[1.2] mb-5">
              Smart Financial &amp;{" "}
              <span className="text-brand-purple">Tax Calculators</span>
            </h1>

            <p className="text-base sm:text-lg text-slate-600 leading-relaxed font-normal">
              Use our free online business and tax calculators to estimate taxes, understand financial obligations, and make more informed business decisions.
            </p>
          </div>
        </div>
      </section>

      {/* 2. Quick Interactive Modal Calculators (6 Tools) */}
      <CalculatorsSection showExploreCta={false} showHeader={false} />
    </div>
  );
}
