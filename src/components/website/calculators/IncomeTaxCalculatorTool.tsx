"use client";

import React, { useState } from "react";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

export default function IncomeTaxCalculatorTool() {
  const [income, setIncome] = useState<number>(1200000);
  const [regime, setRegime] = useState<"new" | "old">("new");
  const [deductions80C, setDeductions80C] = useState<number>(150000);

  const calculateNewRegime = (gross: number) => {
    const standardDeduction = 75000;
    const taxable = Math.max(0, gross - standardDeduction);
    if (taxable <= 700000) {
      return { taxable, baseTax: 0, cess: 0, totalTax: 0 };
    }
    let t = 0;
    if (taxable > 300000) t += Math.min(taxable - 300000, 400000) * 0.05;
    if (taxable > 700000) t += Math.min(taxable - 700000, 300000) * 0.1;
    if (taxable > 1000000) t += Math.min(taxable - 1000000, 200000) * 0.15;
    if (taxable > 1200000) t += Math.min(taxable - 1200000, 300000) * 0.2;
    if (taxable > 1500000) t += (taxable - 1500000) * 0.3;
    const cess = t * 0.04;
    return {
      taxable,
      baseTax: Math.round(t),
      cess: Math.round(cess),
      totalTax: Math.round(t + cess),
    };
  };

  const calculateOldRegime = (gross: number, sec80C: number) => {
    const standardDeduction = 50000;
    const capped80C = Math.min(150000, Math.max(0, sec80C));
    const taxable = Math.max(0, gross - standardDeduction - capped80C);
    if (taxable <= 500000) {
      return { taxable, baseTax: 0, cess: 0, totalTax: 0 };
    }
    let t = 0;
    if (taxable > 250000) t += Math.min(taxable - 250000, 250000) * 0.05;
    if (taxable > 500000) t += Math.min(taxable - 500000, 500000) * 0.2;
    if (taxable > 1000000) t += (taxable - 1000000) * 0.3;
    const cess = t * 0.04;
    return {
      taxable,
      baseTax: Math.round(t),
      cess: Math.round(cess),
      totalTax: Math.round(t + cess),
    };
  };

  const result =
    regime === "new"
      ? calculateNewRegime(income)
      : calculateOldRegime(income, deductions80C);

  const effectiveRate = income > 0 ? ((result.totalTax / income) * 100).toFixed(1) : "0.0";

  return (
    <div className="bg-white rounded-3xl border border-slate-200/90 shadow-[0_10px_34px_rgba(23,21,45,0.05)] p-6 sm:p-8">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        {/* Inputs */}
        <div className="lg:col-span-7 space-y-6">
          <div>
            <label className="text-xs font-semibold text-brand-muted uppercase tracking-wider block mb-2">
              Select Tax Regime
            </label>
            <div className="grid grid-cols-2 gap-3">
              <button
                type="button"
                onClick={() => setRegime("new")}
                className={`py-2.5 px-4 text-xs sm:text-sm font-semibold rounded-xl border transition cursor-pointer ${
                  regime === "new"
                    ? "bg-brand-purple text-white border-brand-purple shadow-sm"
                    : "bg-[#FAF9FD] border-slate-200 text-brand-text hover:border-brand-purple/40"
                }`}
              >
                New Tax Regime (Default)
              </button>
              <button
                type="button"
                onClick={() => setRegime("old")}
                className={`py-2.5 px-4 text-xs sm:text-sm font-semibold rounded-xl border transition cursor-pointer ${
                  regime === "old"
                    ? "bg-brand-purple text-white border-brand-purple shadow-sm"
                    : "bg-[#FAF9FD] border-slate-200 text-brand-text hover:border-brand-purple/40"
                }`}
              >
                Old Tax Regime
              </button>
            </div>
          </div>

          <div>
            <label
              htmlFor="annual-income"
              className="text-xs font-semibold text-brand-muted uppercase tracking-wider block mb-2"
            >
              Annual Gross Income (₹)
            </label>
            <input
              id="annual-income"
              type="number"
              min={0}
              value={income}
              onChange={(e) => setIncome(Math.max(0, Number(e.target.value) || 0))}
              className="w-full px-4 py-3 rounded-xl border border-slate-200 text-base font-medium text-brand-text bg-white focus:outline-none focus:ring-2 focus:ring-brand-purple"
            />
          </div>

          {regime === "old" && (
            <div>
              <label
                htmlFor="deduction-80c"
                className="text-xs font-semibold text-brand-muted uppercase tracking-wider block mb-2"
              >
                Section 80C Deductions (Max ₹1,50,000)
              </label>
              <input
                id="deduction-80c"
                type="number"
                min={0}
                max={150000}
                value={deductions80C}
                onChange={(e) =>
                  setDeductions80C(Math.min(150000, Math.max(0, Number(e.target.value) || 0)))
                }
                className="w-full px-4 py-3 rounded-xl border border-slate-200 text-base font-medium text-brand-text bg-white focus:outline-none focus:ring-2 focus:ring-brand-purple"
              />
            </div>
          )}
        </div>

        {/* Results Panel */}
        <div className="lg:col-span-5 bg-[#FAF9FD] rounded-2xl border border-slate-200/90 p-6 space-y-4">
          <div className="text-xs font-semibold uppercase tracking-wider text-brand-purple">
            Estimated Tax Liability
          </div>

          <div className="space-y-3 text-sm">
            <div className="flex justify-between items-center text-brand-muted">
              <span>Standard Deduction</span>
              <span className="font-medium text-brand-text">
                ₹{regime === "new" ? "75,000" : "50,000"}
              </span>
            </div>
            <div className="flex justify-between items-center text-brand-muted">
              <span>Net Taxable Income</span>
              <span className="font-semibold text-brand-text">
                ₹{result.taxable.toLocaleString("en-IN")}
              </span>
            </div>
            <div className="flex justify-between items-center text-brand-muted">
              <span>Base Income Tax</span>
              <span className="font-medium text-brand-text">
                ₹{result.baseTax.toLocaleString("en-IN")}
              </span>
            </div>
            <div className="flex justify-between items-center text-brand-muted">
              <span>Health &amp; Education Cess (4%)</span>
              <span className="font-medium text-brand-text">
                ₹{result.cess.toLocaleString("en-IN")}
              </span>
            </div>
          </div>

          <div className="pt-4 border-t border-slate-200 flex justify-between items-center">
            <div>
              <span className="text-sm font-semibold text-brand-text block">
                Total Tax Payable
              </span>
              <span className="text-[11px] text-brand-muted">
                Effective Rate: {effectiveRate}%
              </span>
            </div>
            <span className="text-2xl font-bold text-brand-purple">
              ₹{result.totalTax.toLocaleString("en-IN")}
            </span>
          </div>

          <Link
            href="/services/tax-compliance-support"
            className="mt-2 w-full inline-flex items-center justify-center gap-2 py-3 px-4 rounded-xl bg-brand-lime text-brand-text text-xs sm:text-sm font-semibold hover:bg-[#a6d812] transition-all"
          >
            <span>Get Expert ITR Filing Support</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </div>
  );
}
