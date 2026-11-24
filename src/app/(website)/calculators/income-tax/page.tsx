"use client";

import React, { useState } from "react";
import Link from "next/link";
import { ArrowLeft, Receipt } from "lucide-react";

export default function IncomeTaxCalculatorPage() {
  const [income, setIncome] = useState<number>(1200000);

  const calculateTax = (val: number) => {
    const taxable = Math.max(0, val - 75000); // 75,000 standard deduction
    if (taxable <= 300000) return 0;
    if (taxable <= 700000) return 0; // 87A rebate
    let t = 0;
    if (taxable > 300000) t += Math.min(taxable - 300000, 400000) * 0.05;
    if (taxable > 700000) t += Math.min(taxable - 700000, 300000) * 0.1;
    if (taxable > 1000000) t += Math.min(taxable - 1000000, 200000) * 0.15;
    if (taxable > 1200000) t += Math.min(taxable - 1200000, 300000) * 0.2;
    if (taxable > 1500000) t += (taxable - 1500000) * 0.3;
    const cess = t * 0.04;
    return Math.round(t + cess);
  };

  const tax = calculateTax(income);

  return (
    <div className="py-14 sm:py-20 bg-white">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <Link
          href="/calculators"
          className="inline-flex items-center gap-1.5 text-xs font-semibold text-brand-purple hover:underline mb-8"
        >
          <ArrowLeft className="w-3.5 h-3.5" />
          <span>Back to all calculators</span>
        </Link>

        <div className="flex items-center gap-3 mb-4">
          <div className="w-10 h-10 rounded-xl bg-brand-purple-subtle flex items-center justify-center text-brand-purple">
            <Receipt className="w-5 h-5" />
          </div>
          <h1 className="font-serif text-3xl sm:text-4xl font-semibold text-brand-text">
            Income Tax Calculator
          </h1>
        </div>

        <p className="text-sm text-brand-muted mb-8">
          Calculate individual income tax liability under the revised Section 115BAC New Tax Regime with ₹75,000 standard deduction and 4% Health & Education Cess.
        </p>

        <div className="p-8 rounded-3xl bg-brand-alt border border-brand-border space-y-6">
          <div>
            <label className="text-xs font-semibold text-brand-muted uppercase tracking-wider block mb-2">
              Annual Gross Income (₹)
            </label>
            <input
              type="number"
              value={income}
              onChange={(e) => setIncome(Number(e.target.value) || 0)}
              className="w-full px-4 py-3 rounded-xl border border-brand-border text-base text-brand-text bg-white focus:outline-none focus:ring-2 focus:ring-brand-purple"
            />
          </div>

          <div className="p-6 rounded-2xl bg-white border border-brand-border space-y-3">
            <div className="flex justify-between text-sm text-brand-muted">
              <span>Gross Income:</span>
              <span className="font-semibold text-brand-text">₹{income.toLocaleString("en-IN")}</span>
            </div>
            <div className="flex justify-between text-sm text-brand-muted">
              <span>Standard Deduction (Sec 16ia):</span>
              <span className="font-semibold text-brand-text">₹75,000</span>
            </div>
            <div className="flex justify-between text-sm text-brand-muted">
              <span>Net Taxable Income:</span>
              <span className="font-semibold text-brand-text">
                ₹{Math.max(0, income - 75000).toLocaleString("en-IN")}
              </span>
            </div>
            <div className="pt-3 border-t border-brand-border flex justify-between font-serif text-lg font-bold text-brand-text">
              <span>Total Estimated Tax (Inc. Cess):</span>
              <span className="text-brand-purple">₹{tax.toLocaleString("en-IN")}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
