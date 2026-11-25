"use client";

import React, { useState } from "react";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

export default function GstCalculatorTool() {
  const [amount, setAmount] = useState<number>(100000);
  const [rate, setRate] = useState<number>(18);
  const [type, setType] = useState<"exclusive" | "inclusive">("exclusive");
  const [supplyType, setSupplyType] = useState<"intrastate" | "interstate">("intrastate");

  const gst =
    type === "exclusive"
      ? (amount * rate) / 100
      : (amount * rate) / (100 + rate);

  const total = type === "exclusive" ? amount + gst : amount;
  const net = type === "exclusive" ? amount : amount - gst;

  return (
    <div className="bg-white rounded-3xl border border-slate-200/90 shadow-[0_10px_34px_rgba(23,21,45,0.05)] p-6 sm:p-8 lg:p-10">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
        {/* Inputs */}
        <div className="lg:col-span-7 space-y-6">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label className="text-xs font-semibold text-brand-muted uppercase tracking-wider block mb-2">
                Calculation Type
              </label>
              <div className="grid grid-cols-2 gap-2">
                <button
                  type="button"
                  onClick={() => setType("exclusive")}
                  className={`py-2.5 px-3 text-xs font-semibold rounded-xl border transition cursor-pointer ${
                    type === "exclusive"
                      ? "bg-brand-purple text-white border-brand-purple shadow-sm"
                      : "bg-[#FAF9FD] border-slate-200 text-brand-text hover:border-brand-purple/40"
                  }`}
                >
                  GST Exclusive
                </button>
                <button
                  type="button"
                  onClick={() => setType("inclusive")}
                  className={`py-2.5 px-3 text-xs font-semibold rounded-xl border transition cursor-pointer ${
                    type === "inclusive"
                      ? "bg-brand-purple text-white border-brand-purple shadow-sm"
                      : "bg-[#FAF9FD] border-slate-200 text-brand-text hover:border-brand-purple/40"
                  }`}
                >
                  GST Inclusive
                </button>
              </div>
            </div>

            <div>
              <label className="text-xs font-semibold text-brand-muted uppercase tracking-wider block mb-2">
                Supply Type
              </label>
              <div className="grid grid-cols-2 gap-2">
                <button
                  type="button"
                  onClick={() => setSupplyType("intrastate")}
                  className={`py-2.5 px-3 text-xs font-semibold rounded-xl border transition cursor-pointer ${
                    supplyType === "intrastate"
                      ? "bg-brand-purple text-white border-brand-purple shadow-sm"
                      : "bg-[#FAF9FD] border-slate-200 text-brand-text hover:border-brand-purple/40"
                  }`}
                >
                  Intra-State
                </button>
                <button
                  type="button"
                  onClick={() => setSupplyType("interstate")}
                  className={`py-2.5 px-3 text-xs font-semibold rounded-xl border transition cursor-pointer ${
                    supplyType === "interstate"
                      ? "bg-brand-purple text-white border-brand-purple shadow-sm"
                      : "bg-[#FAF9FD] border-slate-200 text-brand-text hover:border-brand-purple/40"
                  }`}
                >
                  Inter-State
                </button>
              </div>
            </div>
          </div>

          <div>
            <label
              htmlFor="gst-amount"
              className="text-xs font-semibold text-brand-muted uppercase tracking-wider block mb-2"
            >
              {type === "exclusive" ? "Net Principal Amount (₹)" : "Total Invoice Amount (₹)"}
            </label>
            <input
              id="gst-amount"
              type="number"
              min={0}
              value={amount}
              onChange={(e) => setAmount(Math.max(0, Number(e.target.value) || 0))}
              className="w-full px-4 py-3 rounded-xl border border-slate-200 text-base font-medium text-brand-text bg-white focus:outline-none focus:ring-2 focus:ring-brand-purple"
            />
          </div>

          <div>
            <label className="text-xs font-semibold text-brand-muted uppercase tracking-wider block mb-2">
              Applicable GST Slab (%)
            </label>
            <div className="grid grid-cols-4 gap-2.5">
              {[5, 12, 18, 28].map((r) => (
                <button
                  key={r}
                  type="button"
                  onClick={() => setRate(r)}
                  className={`py-2.5 text-sm font-semibold rounded-xl border transition cursor-pointer ${
                    rate === r
                      ? "bg-brand-lime text-brand-text border-brand-lime shadow-xs"
                      : "bg-[#FAF9FD] border-slate-200 text-brand-muted hover:border-brand-purple/40"
                  }`}
                >
                  {r}%
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Results Panel */}
        <div className="lg:col-span-5 bg-[#FAF9FD] rounded-2xl border border-slate-200/90 p-6 space-y-4">
          <div className="text-xs font-semibold uppercase tracking-wider text-brand-purple">
            GST Calculation Breakdown
          </div>

          <div className="space-y-3 text-sm">
            <div className="flex justify-between items-center text-brand-muted">
              <span>Net Principal Amount</span>
              <span className="font-semibold text-brand-text">
                ₹{Math.round(net).toLocaleString("en-IN")}
              </span>
            </div>

            {supplyType === "intrastate" ? (
              <>
                <div className="flex justify-between items-center text-brand-muted">
                  <span>CGST ({rate / 2}%)</span>
                  <span className="font-medium text-brand-text">
                    ₹{Math.round(gst / 2).toLocaleString("en-IN")}
                  </span>
                </div>
                <div className="flex justify-between items-center text-brand-muted">
                  <span>SGST ({rate / 2}%)</span>
                  <span className="font-medium text-brand-text">
                    ₹{Math.round(gst / 2).toLocaleString("en-IN")}
                  </span>
                </div>
              </>
            ) : (
              <div className="flex justify-between items-center text-brand-muted">
                <span>IGST ({rate}%)</span>
                <span className="font-medium text-brand-text">
                  ₹{Math.round(gst).toLocaleString("en-IN")}
                </span>
              </div>
            )}

            <div className="flex justify-between items-center text-brand-muted">
              <span>Total GST ({rate}%)</span>
              <span className="font-bold text-brand-purple">
                ₹{Math.round(gst).toLocaleString("en-IN")}
              </span>
            </div>
          </div>

          <div className="pt-4 border-t border-slate-200 flex justify-between items-center">
            <span className="text-sm font-semibold text-brand-text">
              Total Invoice Value
            </span>
            <span className="text-2xl font-bold text-brand-text">
              ₹{Math.round(total).toLocaleString("en-IN")}
            </span>
          </div>

          <Link
            href="/services/gst-registration"
            className="mt-2 w-full inline-flex items-center justify-center gap-2 py-3 px-4 rounded-xl bg-brand-lime text-brand-text text-xs sm:text-sm font-semibold hover:bg-[#a6d812] transition-all"
          >
            <span>Need GST Registration or Return Filing?</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </div>
  );
}
