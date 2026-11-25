"use client";

import React, { useState } from "react";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

const tdsSections = [
  { code: "194J", label: "194J — Professional & Technical Fees", rate: 10 },
  { code: "194I", label: "194I — Rent of Land, Building or Furniture", rate: 10 },
  { code: "194C", label: "194C — Contractor Payment (Company / Firm)", rate: 2 },
  { code: "194C-IND", label: "194C — Contractor Payment (Individual / HUF)", rate: 1 },
  { code: "194H", label: "194H — Commission or Brokerage", rate: 5 },
];

export default function TdsCalculatorTool() {
  const [amount, setAmount] = useState<number>(50000);
  const [section, setSection] = useState<string>("194J");

  const activeSection =
    tdsSections.find((s) => s.code === section) || tdsSections[0];
  const tds = Math.round((amount * activeSection.rate) / 100);
  const payout = Math.max(0, amount - tds);

  return (
    <div className="bg-white rounded-3xl border border-slate-200/90 shadow-[0_10px_34px_rgba(23,21,45,0.05)] p-6 sm:p-8">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        {/* Inputs */}
        <div className="lg:col-span-7 space-y-6">
          <div>
            <label
              htmlFor="tds-section"
              className="text-xs font-semibold text-brand-muted uppercase tracking-wider block mb-2"
            >
              Nature of Payment &amp; TDS Section
            </label>
            <select
              id="tds-section"
              value={section}
              onChange={(e) => setSection(e.target.value)}
              className="w-full px-4 py-3 rounded-xl border border-slate-200 text-sm font-medium text-brand-text bg-white focus:outline-none focus:ring-2 focus:ring-brand-purple"
            >
              {tdsSections.map((s) => (
                <option key={s.code} value={s.code}>
                  {s.label} ({s.rate}%)
                </option>
              ))}
            </select>
          </div>

          <div>
            <label
              htmlFor="tds-amount"
              className="text-xs font-semibold text-brand-muted uppercase tracking-wider block mb-2"
            >
              Gross Payment / Invoice Amount (₹)
            </label>
            <input
              id="tds-amount"
              type="number"
              min={0}
              value={amount}
              onChange={(e) => setAmount(Math.max(0, Number(e.target.value) || 0))}
              className="w-full px-4 py-3 rounded-xl border border-slate-200 text-base font-medium text-brand-text bg-white focus:outline-none focus:ring-2 focus:ring-brand-purple"
            />
          </div>
        </div>

        {/* Results Panel */}
        <div className="lg:col-span-5 bg-[#FAF9FD] rounded-2xl border border-slate-200/90 p-6 space-y-4">
          <div className="text-xs font-semibold uppercase tracking-wider text-brand-purple">
            TDS Deduction Summary
          </div>

          <div className="space-y-3 text-sm">
            <div className="flex justify-between items-center text-brand-muted">
              <span>Gross Payment</span>
              <span className="font-semibold text-brand-text">
                ₹{amount.toLocaleString("en-IN")}
              </span>
            </div>
            <div className="flex justify-between items-center text-brand-muted">
              <span>Applicable TDS Rate</span>
              <span className="font-semibold text-brand-text">
                {activeSection.rate}%
              </span>
            </div>
            <div className="flex justify-between items-center text-brand-muted">
              <span>TDS Amount to Deduct</span>
              <span className="font-bold text-brand-purple">
                ₹{tds.toLocaleString("en-IN")}
              </span>
            </div>
          </div>

          <div className="pt-4 border-t border-slate-200 flex justify-between items-center">
            <span className="text-sm font-semibold text-brand-text">
              Net Payable to Party
            </span>
            <span className="text-2xl font-bold text-brand-text">
              ₹{payout.toLocaleString("en-IN")}
            </span>
          </div>

          <Link
            href="/services/tds-tcs-reconciliation"
            className="mt-2 w-full inline-flex items-center justify-center gap-2 py-3 px-4 rounded-xl bg-brand-lime text-brand-text text-xs sm:text-sm font-semibold hover:bg-[#a6d812] transition-all"
          >
            <span>Need TDS Return &amp; Reconciliation?</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </div>
  );
}
