"use client";

import React, { useState } from "react";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

export default function GratuityCalculatorTool() {
  const [lastDrawnSalary, setLastDrawnSalary] = useState<number>(65000);
  const [yearsOfService, setYearsOfService] = useState<number>(7);

  const rawGratuity = Math.round((15 * lastDrawnSalary * yearsOfService) / 26);
  const statutoryCap = 2000000;
  const calculatedGratuity = Math.min(statutoryCap, rawGratuity);
  const isEligible = yearsOfService >= 5;

  return (
    <div className="bg-white rounded-3xl border border-slate-200/90 shadow-[0_10px_34px_rgba(23,21,45,0.05)] p-6 sm:p-8">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        {/* Inputs */}
        <div className="lg:col-span-7 space-y-6">
          <div>
            <label
              htmlFor="gratuity-salary"
              className="text-xs font-semibold text-brand-muted uppercase tracking-wider block mb-2"
            >
              Last Drawn Monthly Salary (Basic + DA) (₹)
            </label>
            <input
              id="gratuity-salary"
              type="number"
              min={0}
              value={lastDrawnSalary}
              onChange={(e) =>
                setLastDrawnSalary(Math.max(0, Number(e.target.value) || 0))
              }
              className="w-full px-4 py-3 rounded-xl border border-slate-200 text-base font-medium text-brand-text bg-white focus:outline-none focus:ring-2 focus:ring-brand-purple"
            />
          </div>

          <div>
            <div className="flex justify-between items-center mb-2">
              <label
                htmlFor="gratuity-years"
                className="text-xs font-semibold text-brand-muted uppercase tracking-wider"
              >
                Completed Years of Service
              </label>
              <span className="text-sm font-semibold text-brand-purple">
                {yearsOfService} {yearsOfService === 1 ? "Year" : "Years"}
              </span>
            </div>
            <input
              id="gratuity-years"
              type="range"
              min={1}
              max={40}
              value={yearsOfService}
              onChange={(e) => setYearsOfService(Number(e.target.value))}
              className="w-full accent-[#710ac6] cursor-pointer"
            />
            <div className="flex justify-between text-[11px] text-brand-muted mt-1">
              <span>1 Year</span>
              <span>5 Years (Min. Eligibility)</span>
              <span>40 Years</span>
            </div>
          </div>
        </div>

        {/* Results Panel */}
        <div className="lg:col-span-5 bg-[#FAF9FD] rounded-2xl border border-slate-200/90 p-6 space-y-4">
          <div className="text-xs font-semibold uppercase tracking-wider text-brand-purple">
            Gratuity Estimation
          </div>

          <div className="space-y-3 text-sm">
            <div className="flex justify-between items-center text-brand-muted">
              <span>Monthly Basic + DA</span>
              <span className="font-semibold text-brand-text">
                ₹{lastDrawnSalary.toLocaleString("en-IN")}
              </span>
            </div>
            <div className="flex justify-between items-center text-brand-muted">
              <span>Service Tenure</span>
              <span className="font-semibold text-brand-text">
                {yearsOfService} {yearsOfService === 1 ? "Year" : "Years"}
              </span>
            </div>
            <div className="flex justify-between items-center text-brand-muted">
              <span>Statutory Eligibility (5+ Yrs)</span>
              <span
                className={`font-semibold ${
                  isEligible ? "text-emerald-600" : "text-amber-600"
                }`}
              >
                {isEligible ? "Eligible" : "Under 5 Years"}
              </span>
            </div>
          </div>

          <div className="pt-4 border-t border-slate-200 flex justify-between items-center">
            <span className="text-sm font-semibold text-brand-text">
              Estimated Gratuity
            </span>
            <span className="text-2xl font-bold text-brand-purple">
              ₹{calculatedGratuity.toLocaleString("en-IN")}
            </span>
          </div>

          <Link
            href="/services/payroll-hr-management"
            className="mt-2 w-full inline-flex items-center justify-center gap-2 py-3 px-4 rounded-xl bg-brand-lime text-brand-text text-xs sm:text-sm font-semibold hover:bg-[#a6d812] transition-all"
          >
            <span>Need Payroll &amp; HR Compliance?</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </div>
  );
}
