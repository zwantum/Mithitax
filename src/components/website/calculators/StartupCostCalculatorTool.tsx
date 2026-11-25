"use client";

import React, { useState } from "react";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

const entityOptions = [
  { id: "pvt" as const, label: "Private Limited Company", govt: 1000, prof: 3999 },
  { id: "llp" as const, label: "LLP Registration", govt: 500, prof: 3499 },
  { id: "opc" as const, label: "One Person Company (OPC)", govt: 1000, prof: 3499 },
];

export default function StartupCostCalculatorTool() {
  const [entityType, setEntityType] = useState<"pvt" | "llp" | "opc">("pvt");
  const [authorizedCapital, setAuthorizedCapital] = useState<number>(100000);
  const [directorsCount, setDirectorsCount] = useState<number>(2);

  const selected = entityOptions.find((e) => e.id === entityType) || entityOptions[0];
  let govtFees = selected.govt;
  if (authorizedCapital > 1500000) {
    govtFees += Math.round((authorizedCapital - 1500000) * 0.005);
  }
  const effectiveDirectors = entityType === "opc" ? 1 : Math.max(2, directorsCount);
  const dscAndDin = effectiveDirectors * 1250;
  const nameApproval = 1000;
  const professionalAndStamp = selected.prof;
  const total = govtFees + dscAndDin + nameApproval + professionalAndStamp;

  return (
    <div className="bg-white rounded-3xl border border-slate-200/90 shadow-[0_10px_34px_rgba(23,21,45,0.05)] p-6 sm:p-8">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        {/* Inputs */}
        <div className="lg:col-span-7 space-y-6">
          <div>
            <label className="text-xs font-semibold text-brand-muted uppercase tracking-wider block mb-2">
              Business Structure
            </label>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-2.5">
              {entityOptions.map((opt) => (
                <button
                  key={opt.id}
                  type="button"
                  onClick={() => setEntityType(opt.id)}
                  className={`py-2.5 px-3 text-xs font-semibold rounded-xl border transition cursor-pointer ${
                    entityType === opt.id
                      ? "bg-brand-purple text-white border-brand-purple shadow-sm"
                      : "bg-[#FAF9FD] border-slate-200 text-brand-text hover:border-brand-purple/40"
                  }`}
                >
                  {opt.label}
                </button>
              ))}
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label
                htmlFor="startup-capital"
                className="text-xs font-semibold text-brand-muted uppercase tracking-wider block mb-2"
              >
                Authorized Capital (₹)
              </label>
              <input
                id="startup-capital"
                type="number"
                min={100000}
                step={50000}
                value={authorizedCapital}
                onChange={(e) =>
                  setAuthorizedCapital(Math.max(100000, Number(e.target.value) || 100000))
                }
                className="w-full px-4 py-3 rounded-xl border border-slate-200 text-base font-medium text-brand-text bg-white focus:outline-none focus:ring-2 focus:ring-brand-purple"
              />
            </div>

            <div>
              <label
                htmlFor="startup-directors"
                className="text-xs font-semibold text-brand-muted uppercase tracking-wider block mb-2"
              >
                Number of Directors / Partners
              </label>
              <input
                id="startup-directors"
                type="number"
                min={entityType === "opc" ? 1 : 2}
                max={15}
                disabled={entityType === "opc"}
                value={effectiveDirectors}
                onChange={(e) =>
                  setDirectorsCount(Math.min(15, Math.max(2, Number(e.target.value) || 2)))
                }
                className="w-full px-4 py-3 rounded-xl border border-slate-200 text-base font-medium text-brand-text bg-white focus:outline-none focus:ring-2 focus:ring-brand-purple disabled:opacity-60"
              />
            </div>
          </div>
        </div>

        {/* Results Panel */}
        <div className="lg:col-span-5 bg-[#FAF9FD] rounded-2xl border border-slate-200/90 p-6 space-y-4">
          <div className="text-xs font-semibold uppercase tracking-wider text-brand-purple">
            Estimated Incorporation Cost
          </div>

          <div className="space-y-3 text-sm">
            <div className="flex justify-between items-center text-brand-muted">
              <span>DSC &amp; DIN ({effectiveDirectors} {effectiveDirectors === 1 ? "person" : "persons"})</span>
              <span className="font-medium text-brand-text">
                ₹{dscAndDin.toLocaleString("en-IN")}
              </span>
            </div>
            <div className="flex justify-between items-center text-brand-muted">
              <span>Name Reservation (RUN / SPICe+)</span>
              <span className="font-medium text-brand-text">
                ₹{nameApproval.toLocaleString("en-IN")}
              </span>
            </div>
            <div className="flex justify-between items-center text-brand-muted">
              <span>MCA Filing &amp; Govt Fees</span>
              <span className="font-medium text-brand-text">
                ₹{govtFees.toLocaleString("en-IN")}
              </span>
            </div>
            <div className="flex justify-between items-center text-brand-muted">
              <span>Stamp Duty &amp; Professional Fee</span>
              <span className="font-medium text-brand-text">
                ₹{professionalAndStamp.toLocaleString("en-IN")}
              </span>
            </div>
          </div>

          <div className="pt-4 border-t border-slate-200 flex justify-between items-center">
            <span className="text-sm font-semibold text-brand-text">
              Total Estimated Cost
            </span>
            <span className="text-2xl font-bold text-brand-purple">
              ₹{total.toLocaleString("en-IN")}
            </span>
          </div>

          <Link
            href="/services/company-incorporation"
            className="mt-2 w-full inline-flex items-center justify-center gap-2 py-3 px-4 rounded-xl bg-brand-lime text-brand-text text-xs sm:text-sm font-semibold hover:bg-[#a6d812] transition-all"
          >
            <span>Start Company Incorporation</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </div>
  );
}
