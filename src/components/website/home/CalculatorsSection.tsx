import React from "react";
import Link from "next/link";
import {
  Calculator,
  Receipt,
  Percent,
  ArrowRight,
  Home,
  Building2,
  Wallet,
} from "lucide-react";

const calculators = [
  {
    id: "gst-calculator",
    href: "/calculators/gst",
    title: "GST Calculator",
    subtitle: "Calculate GST amounts, tax components and total invoice values quickly.",
    icon: Calculator,
  },
  {
    id: "income-tax-calculator",
    href: "/calculators/income-tax",
    title: "Income Tax Calculator",
    subtitle: "Estimate your income tax liability based on income and chosen tax regime.",
    icon: Receipt,
  },
  {
    id: "tds-calculator",
    href: "/calculators/tds",
    title: "TDS Calculator",
    subtitle: "Calculate applicable TDS deductions and estimated payable amounts easily.",
    icon: Percent,
  },
  {
    id: "hra-calculator",
    href: "/calculators/hra",
    title: "HRA Exemption Calculator",
    subtitle: "Estimate your House Rent Allowance exemption based on salary and rent paid.",
    icon: Home,
  },
  {
    id: "startup-incorporation-calculator",
    href: "/calculators/startup-incorporation",
    title: "Startup Incorporation Cost",
    subtitle: "Estimate incorporation expenses based on your chosen business structure.",
    icon: Building2,
  },
  {
    id: "gratuity-calculator",
    href: "/calculators/gratuity",
    title: "Gratuity Calculator",
    subtitle: "Estimate gratuity benefits based on salary and eligible years of service.",
    icon: Wallet,
  },
];

export default function CalculatorsSection({
  showExploreCta = true,
  showHeader = true,
}: {
  showExploreCta?: boolean;
  showHeader?: boolean;
}) {
  return (
    <section className="relative py-10 sm:py-12 md:py-16 bg-gradient-to-b from-[#F4F5FA] via-[#F6F7FC] to-white">
      <div
        className="absolute inset-x-0 top-0 h-14 sm:h-20 bg-gradient-to-b from-white to-transparent pointer-events-none"
        aria-hidden="true"
      />
      <div className="relative z-10 max-w-content mx-auto px-4 sm:px-6 lg:px-8">
        {/* Centered Heading */}
        {showHeader && (
          <div className="text-center max-w-2xl mx-auto mb-10 md:mb-12">
            <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-[2rem] font-semibold text-brand-text tracking-tight leading-snug mb-3">
              Business Calculators
            </h2>

            <p className="text-sm sm:text-[0.9375rem] text-brand-muted leading-relaxed font-normal">
              Use our free online business and tax calculators to estimate taxes, understand financial obligations and make more informed business decisions.
            </p>
          </div>
        )}

        {/* 6 Dedicated Calculator Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 max-w-5xl mx-auto">
          {calculators.map((calc) => {
            const Icon = calc.icon;
            return (
              <Link
                key={calc.id}
                href={calc.href}
                className="group flex items-start justify-between p-5 sm:p-6 bg-gradient-to-b from-white to-[#FAF9FD] rounded-2xl border border-slate-200/90 shadow-[0_4px_16px_rgba(23,21,45,0.03)] hover:border-brand-purple/40 hover:shadow-[0_16px_36px_-6px_rgba(113,10,198,0.12),0_4px_12px_rgba(23,21,45,0.04)] hover:-translate-y-0.5 transition-all duration-300 text-left h-full"
              >
                <div className="flex items-start gap-3.5 sm:gap-4 flex-1 min-w-0 pr-2 sm:pr-3">
                  <div className="w-11 h-11 min-w-[2.75rem] min-h-[2.75rem] rounded-xl bg-brand-purple-light/80 border border-brand-purple/15 flex items-center justify-center text-brand-purple transition-all duration-300 group-hover:bg-brand-purple group-hover:text-white group-hover:shadow-[0_4px_12px_rgba(113,10,198,0.25)] group-hover:scale-105 flex-shrink-0 mt-0.5">
                    <Icon className="w-5 h-5 flex-shrink-0 transition-transform duration-300" strokeWidth={1.8} />
                  </div>
                  <div className="flex-1 min-w-0">
                    <h3 className="text-sm sm:text-[1.05rem] font-semibold text-brand-text group-hover:text-brand-purple transition-colors leading-snug">
                      {calc.title}
                    </h3>
                    <p className="text-xs text-brand-muted font-normal mt-1 leading-relaxed">
                      {calc.subtitle}
                    </p>
                  </div>
                </div>

                <div className="w-7 h-7 rounded-full bg-slate-100 flex items-center justify-center text-slate-500 group-hover:bg-brand-lime group-hover:text-brand-text transition-all duration-300 flex-shrink-0 mt-0.5">
                  <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-0.5" strokeWidth={2.2} />
                </div>
              </Link>
            );
          })}
        </div>

        {/* Explore All Calculators CTA */}
        {showExploreCta && (
          <div className="text-center mt-10">
            <Link
              href="/calculators"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-brand-lime text-brand-text font-semibold text-sm hover:bg-[#a6d812] shadow-sm hover:shadow transition-all"
            >
              <span>Explore All Calculators</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        )}
      </div>
    </section>
  );
}
