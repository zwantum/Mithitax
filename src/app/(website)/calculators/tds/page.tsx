"use client";

import React, { useState } from "react";
import Link from "next/link";
import { ArrowLeft, Percent } from "lucide-react";

export default function TDSCalculatorPage() {
  const [amount, setAmount] = useState<number>(50000);
  const [section, setSection] = useState<string>("194J");

  const rates: Record<string, number> = {
    "194J": 10,
    "194I": 10,
    "194C": 2,
    "194H": 5,
  };

  const rate = rates[section] || 10;
  const tds = (amount * rate) / 100;
  const payout = amount - tds;

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
            <Percent className="w-5 h-5" />
          </div>
          <h1 className="font-serif text-3xl sm:text-4xl font-semibold text-brand-text">
            TDS Calculator
          </h1>
        </div>

        <p className="text-sm text-brand-muted mb-8">
          Calculate withholding tax under Sections 194J (Technical / Professional), 194I (Rent), 194C (Contractor), and 194H (Commission).
        </p>

        <div className="p-8 rounded-3xl bg-brand-alt border border-brand-border space-y-6">
          <div>
            <label className="text-xs font-semibold text-brand-muted uppercase tracking-wider block mb-2">
              Statutory TDS Section
            </label>
            <select
              value={section}
              onChange={(e) => setSection(e.target.value)}
              className="w-full px-4 py-3 rounded-xl border border-brand-border text-sm text-brand-text bg-white focus:outline-none focus:ring-2 focus:ring-brand-purple"
            >
              <option value="194J">Section 194J - Fees for Professional / Technical Services (10%)</option>
              <option value="194I">Section 194I - Rent on Land, Building or Furniture (10%)</option>
              <option value="194C">Section 194C - Payment to Contractors / Advertising (2%)</option>
              <option value="194H">Section 194H - Commission or Brokerage (5%)</option>
            </select>
          </div>

          <div>
            <label className="text-xs font-semibold text-brand-muted uppercase tracking-wider block mb-2">
              Invoice Amount (₹)
            </label>
            <input
              type="number"
              value={amount}
              onChange={(e) => setAmount(Number(e.target.value) || 0)}
              className="w-full px-4 py-3 rounded-xl border border-brand-border text-base text-brand-text bg-white focus:outline-none focus:ring-2 focus:ring-brand-purple"
            />
          </div>

          <div className="p-6 rounded-2xl bg-white border border-brand-border space-y-3">
            <div className="flex justify-between text-sm text-brand-muted">
              <span>Gross Invoice Amount:</span>
              <span className="font-semibold text-brand-text">₹{amount.toLocaleString("en-IN")}</span>
            </div>
            <div className="flex justify-between text-sm text-brand-muted">
              <span>Applicable TDS Rate:</span>
              <span className="font-semibold text-brand-text">{rate}%</span>
            </div>
            <div className="flex justify-between text-sm text-brand-muted">
              <span>TDS Amount to Withhold:</span>
              <span className="font-bold text-brand-purple">₹{tds.toLocaleString("en-IN")}</span>
            </div>
            <div className="pt-3 border-t border-brand-border flex justify-between font-serif text-lg font-bold text-brand-text">
              <span>Net Payout to Vendor:</span>
              <span>₹{payout.toLocaleString("en-IN")}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
