"use client";

import React, { useState } from "react";
import Link from "next/link";
import { ArrowLeft, Calculator } from "lucide-react";

export default function GSTCalculatorPage() {
  const [amount, setAmount] = useState<number>(100000);
  const [rate, setRate] = useState<number>(18);
  const [type, setType] = useState<"exclusive" | "inclusive">("exclusive");

  const gst =
    type === "exclusive"
      ? (amount * rate) / 100
      : (amount * rate) / (100 + rate);

  const total = type === "exclusive" ? amount + gst : amount;
  const net = type === "exclusive" ? amount : amount - gst;

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
            <Calculator className="w-5 h-5" />
          </div>
          <h1 className="font-serif text-3xl sm:text-4xl font-semibold text-brand-text">
            GST Calculator
          </h1>
        </div>

        <p className="text-sm text-brand-muted mb-8">
          Calculate GST inclusive or exclusive amounts with instantaneous breakdown for CGST, SGST, and IGST components.
        </p>

        <div className="p-8 rounded-3xl bg-brand-alt border border-brand-border space-y-6">
          <div>
            <label className="text-xs font-semibold text-brand-muted uppercase tracking-wider block mb-2">
              Calculation Method
            </label>
            <div className="grid grid-cols-2 gap-3">
              <button
                type="button"
                onClick={() => setType("exclusive")}
                className={`py-2.5 px-4 text-xs font-semibold rounded-xl border transition ${
                  type === "exclusive"
                    ? "bg-brand-purple text-white border-brand-purple"
                    : "bg-white border-brand-border text-brand-text"
                }`}
              >
                GST Exclusive (Add GST)
              </button>
              <button
                type="button"
                onClick={() => setType("inclusive")}
                className={`py-2.5 px-4 text-xs font-semibold rounded-xl border transition ${
                  type === "inclusive"
                    ? "bg-brand-purple text-white border-brand-purple"
                    : "bg-white border-brand-border text-brand-text"
                }`}
              >
                GST Inclusive (Extract GST)
              </button>
            </div>
          </div>

          <div>
            <label className="text-xs font-semibold text-brand-muted uppercase tracking-wider block mb-2">
              Base Amount (₹)
            </label>
            <input
              type="number"
              value={amount}
              onChange={(e) => setAmount(Number(e.target.value) || 0)}
              className="w-full px-4 py-3 rounded-xl border border-brand-border text-base text-brand-text bg-white focus:outline-none focus:ring-2 focus:ring-brand-purple"
            />
          </div>

          <div>
            <label className="text-xs font-semibold text-brand-muted uppercase tracking-wider block mb-2">
              Applicable GST Slab
            </label>
            <div className="grid grid-cols-4 gap-3">
              {[5, 12, 18, 28].map((r) => (
                <button
                  key={r}
                  type="button"
                  onClick={() => setRate(r)}
                  className={`py-2.5 text-xs font-bold rounded-xl border transition ${
                    rate === r
                      ? "bg-brand-purple text-white border-brand-purple"
                      : "bg-white border-brand-border text-brand-text"
                  }`}
                >
                  {r}%
                </button>
              ))}
            </div>
          </div>

          {/* Results Box */}
          <div className="p-6 rounded-2xl bg-white border border-brand-border space-y-3">
            <div className="flex justify-between text-sm text-brand-muted">
              <span>Net Taxable Value:</span>
              <span className="font-semibold text-brand-text">₹{net.toLocaleString("en-IN", { maximumFractionDigits: 2 })}</span>
            </div>
            <div className="flex justify-between text-sm text-brand-muted">
              <span>CGST ({rate / 2}%):</span>
              <span className="font-semibold text-brand-text">₹{(gst / 2).toLocaleString("en-IN", { maximumFractionDigits: 2 })}</span>
            </div>
            <div className="flex justify-between text-sm text-brand-muted">
              <span>SGST ({rate / 2}%):</span>
              <span className="font-semibold text-brand-text">₹{(gst / 2).toLocaleString("en-IN", { maximumFractionDigits: 2 })}</span>
            </div>
            <div className="flex justify-between text-sm text-brand-muted">
              <span>Total GST ({rate}%):</span>
              <span className="font-bold text-brand-purple">₹{gst.toLocaleString("en-IN", { maximumFractionDigits: 2 })}</span>
            </div>
            <div className="pt-3 border-t border-brand-border flex justify-between font-serif text-lg font-bold text-brand-text">
              <span>Total Invoice Amount:</span>
              <span>₹{total.toLocaleString("en-IN", { maximumFractionDigits: 2 })}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
