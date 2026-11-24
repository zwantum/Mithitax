import React from "react";
import Link from "next/link";
import { Calculator, Receipt, Percent, ArrowRight } from "lucide-react";
import { calculatorsList } from "@/lib/constants";
import CalculatorsSection from "@/components/website/home/CalculatorsSection";

export const metadata = {
  title: "Free Business Calculators | GST, Income Tax & TDS | Mithi Tax",
  description:
    "Free interactive online business tax tools: calculate GST, compare Old vs New Income Tax regimes, and estimate TDS deductions accurately.",
};

const icons = {
  "gst-calculator": Calculator,
  "income-tax-calculator": Receipt,
  "tds-calculator": Percent,
};

export default function CalculatorsPage() {
  return (
    <div className="py-14 sm:py-20 bg-white">
      <div className="max-w-content mx-auto px-4 sm:px-6 lg:px-8 mb-16">
        <div className="max-w-3xl mx-auto text-center mb-12">
          <div className="inline-flex items-center gap-2 mb-3">
            <span className="w-2 h-2 rounded-full bg-brand-lime" />
            <span className="text-xs font-semibold tracking-wider text-brand-muted uppercase">
              ONLINE TOOLS
            </span>
          </div>
          <h1 className="font-serif text-3xl sm:text-5xl font-semibold text-brand-text tracking-tight mb-4">
            Interactive Business Calculators
          </h1>
          <p className="text-base sm:text-lg text-brand-muted leading-relaxed font-normal">
            Dedicated statutory calculation modules tailored for Indian entrepreneurs, SMEs, and finance teams.
          </p>
        </div>

        {/* Dedicated Calculator Navigation Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto mb-16">
          <Link
            href="/calculators/gst"
            className="p-6 rounded-2xl bg-brand-alt border border-brand-border hover:border-brand-purple/40 hover:shadow-card transition flex flex-col justify-between group"
          >
            <div>
              <div className="w-10 h-10 rounded-xl bg-brand-purple-subtle flex items-center justify-center text-brand-purple mb-4">
                <Calculator className="w-5 h-5" />
              </div>
              <h3 className="font-serif text-xl font-semibold text-brand-text mb-2 group-hover:text-brand-purple transition-colors">
                GST Calculator
              </h3>
              <p className="text-xs text-brand-muted">
                Compute intra-state and inter-state tax components across 5%, 12%, 18%, and 28% slabs.
              </p>
            </div>
            <div className="mt-6 pt-3 border-t border-brand-border/60 flex items-center text-xs font-semibold text-brand-purple gap-1">
              <span>Open Dedicated Tool</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </div>
          </Link>

          <Link
            href="/calculators/income-tax"
            className="p-6 rounded-2xl bg-brand-alt border border-brand-border hover:border-brand-purple/40 hover:shadow-card transition flex flex-col justify-between group"
          >
            <div>
              <div className="w-10 h-10 rounded-xl bg-brand-purple-subtle flex items-center justify-center text-brand-purple mb-4">
                <Receipt className="w-5 h-5" />
              </div>
              <h3 className="font-serif text-xl font-semibold text-brand-text mb-2 group-hover:text-brand-purple transition-colors">
                Income Tax Calculator
              </h3>
              <p className="text-xs text-brand-muted">
                Compare liability under the revised New Tax Regime with ₹75,000 standard deduction and 87A rebate.
              </p>
            </div>
            <div className="mt-6 pt-3 border-t border-brand-border/60 flex items-center text-xs font-semibold text-brand-purple gap-1">
              <span>Open Dedicated Tool</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </div>
          </Link>

          <Link
            href="/calculators/tds"
            className="p-6 rounded-2xl bg-brand-alt border border-brand-border hover:border-brand-purple/40 hover:shadow-card transition flex flex-col justify-between group"
          >
            <div>
              <div className="w-10 h-10 rounded-xl bg-brand-purple-subtle flex items-center justify-center text-brand-purple mb-4">
                <Percent className="w-5 h-5" />
              </div>
              <h3 className="font-serif text-xl font-semibold text-brand-text mb-2 group-hover:text-brand-purple transition-colors">
                TDS Calculator
              </h3>
              <p className="text-xs text-brand-muted">
                Calculate withholding taxes for professional services (194J), rent (194I), and contracts (194C).
              </p>
            </div>
            <div className="mt-6 pt-3 border-t border-brand-border/60 flex items-center text-xs font-semibold text-brand-purple gap-1">
              <span>Open Dedicated Tool</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </div>
          </Link>
        </div>
      </div>

      <CalculatorsSection />
    </div>
  );
}
