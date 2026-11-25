"use client";

import React, { useState } from "react";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

export default function HraCalculatorTool() {
  const [basicSalary, setBasicSalary] = useState<number>(600000);
  const [hraReceived, setHraReceived] = useState<number>(240000);
  const [rentPaid, setRentPaid] = useState<number>(216000);
  const [isMetro, setIsMetro] = useState<boolean>(true);

  const tenPercentBasic = basicSalary * 0.1;
  const rentMinusTenPercent = Math.max(0, rentPaid - tenPercentBasic);
  const salaryPercentLimit = isMetro ? basicSalary * 0.5 : basicSalary * 0.4;
  const exemptHra = Math.min(hraReceived, salaryPercentLimit, rentMinusTenPercent);
  const taxableHra = Math.max(0, hraReceived - exemptHra);

  return (
    <div className="bg-white rounded-3xl border border-slate-200/90 shadow-[0_10px_34px_rgba(23,21,45,0.05)] p-6 sm:p-8">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        {/* Inputs */}
        <div className="lg:col-span-7 space-y-5">
          <div>
            <label
              htmlFor="hra-basic"
              className="text-xs font-semibold text-brand-muted uppercase tracking-wider block mb-2"
            >
              Annual Basic Salary + DA (₹)
            </label>
            <input
              id="hra-basic"
              type="number"
              min={0}
              value={basicSalary}
              onChange={(e) => setBasicSalary(Math.max(0, Number(e.target.value) || 0))}
              className="w-full px-4 py-3 rounded-xl border border-slate-200 text-base font-medium text-brand-text bg-white focus:outline-none focus:ring-2 focus:ring-brand-purple"
            />
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label
                htmlFor="hra-received"
                className="text-xs font-semibold text-brand-muted uppercase tracking-wider block mb-2"
              >
                Annual HRA Received (₹)
              </label>
              <input
                id="hra-received"
                type="number"
                min={0}
                value={hraReceived}
                onChange={(e) => setHraReceived(Math.max(0, Number(e.target.value) || 0))}
                className="w-full px-4 py-3 rounded-xl border border-slate-200 text-base font-medium text-brand-text bg-white focus:outline-none focus:ring-2 focus:ring-brand-purple"
              />
            </div>

            <div>
              <label
                htmlFor="hra-rent"
                className="text-xs font-semibold text-brand-muted uppercase tracking-wider block mb-2"
              >
                Annual Rent Paid (₹)
              </label>
              <input
                id="hra-rent"
                type="number"
                min={0}
                value={rentPaid}
                onChange={(e) => setRentPaid(Math.max(0, Number(e.target.value) || 0))}
                className="w-full px-4 py-3 rounded-xl border border-slate-200 text-base font-medium text-brand-text bg-white focus:outline-none focus:ring-2 focus:ring-brand-purple"
              />
            </div>
          </div>

          <div>
            <label className="text-xs font-semibold text-brand-muted uppercase tracking-wider block mb-2">
              City Category
            </label>
            <div className="grid grid-cols-2 gap-3">
              <button
                type="button"
                onClick={() => setIsMetro(true)}
                className={`py-2.5 px-4 text-xs sm:text-sm font-semibold rounded-xl border transition cursor-pointer ${
                  isMetro
                    ? "bg-brand-purple text-white border-brand-purple shadow-sm"
                    : "bg-[#FAF9FD] border-slate-200 text-brand-text hover:border-brand-purple/40"
                }`}
              >
                Metro City (50% Limit)
              </button>
              <button
                type="button"
                onClick={() => setIsMetro(false)}
                className={`py-2.5 px-4 text-xs sm:text-sm font-semibold rounded-xl border transition cursor-pointer ${
                  !isMetro
                    ? "bg-brand-purple text-white border-brand-purple shadow-sm"
                    : "bg-[#FAF9FD] border-slate-200 text-brand-text hover:border-brand-purple/40"
                }`}
              >
                Non-Metro City (40% Limit)
              </button>
            </div>
          </div>
        </div>

        {/* Results Panel */}
        <div className="lg:col-span-5 bg-[#FAF9FD] rounded-2xl border border-slate-200/90 p-6 space-y-4">
          <div className="text-xs font-semibold uppercase tracking-wider text-brand-purple">
            Section 10(13A) HRA Breakdown
          </div>

          <div className="space-y-3 text-sm">
            <div className="flex justify-between items-center text-brand-muted">
              <span>1. Actual HRA Received</span>
              <span className="font-medium text-brand-text">
                ₹{Math.round(hraReceived).toLocaleString("en-IN")}
              </span>
            </div>
            <div className="flex justify-between items-center text-brand-muted">
              <span>2. {isMetro ? "50%" : "40%"} of Basic Salary</span>
              <span className="font-medium text-brand-text">
                ₹{Math.round(salaryPercentLimit).toLocaleString("en-IN")}
              </span>
            </div>
            <div className="flex justify-between items-center text-brand-muted">
              <span>3. Rent Paid − 10% Basic</span>
              <span className="font-medium text-brand-text">
                ₹{Math.round(rentMinusTenPercent).toLocaleString("en-IN")}
              </span>
            </div>
          </div>

          <div className="pt-4 border-t border-slate-200 space-y-2">
            <div className="flex justify-between items-center">
              <span className="text-sm font-semibold text-brand-text">
                Exempt HRA (Tax-Free)
              </span>
              <span className="text-2xl font-bold text-brand-purple">
                ₹{Math.round(exemptHra).toLocaleString("en-IN")}
              </span>
            </div>
            <div className="flex justify-between items-center text-xs text-brand-muted">
              <span>Taxable HRA</span>
              <span className="font-semibold text-brand-text">
                ₹{Math.round(taxableHra).toLocaleString("en-IN")}
              </span>
            </div>
          </div>

          <Link
            href="/services/tax-compliance-support"
            className="mt-2 w-full inline-flex items-center justify-center gap-2 py-3 px-4 rounded-xl bg-brand-lime text-brand-text text-xs sm:text-sm font-semibold hover:bg-[#a6d812] transition-all"
          >
            <span>Need Income Tax Return Assistance?</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </div>
  );
}
