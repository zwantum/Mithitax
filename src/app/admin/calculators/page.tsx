import React from "react";
import { calculatorsList } from "@/lib/constants";

export default function AdminCalculatorsPage() {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="font-serif text-2xl sm:text-3xl font-semibold text-brand-text">
          Tax Calculators Engine
        </h1>
        <p className="text-xs sm:text-sm text-brand-muted mt-1">
          Adjust statutory slabs, exemptions, and standard deduction parameters.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
        {calculatorsList.map((c) => (
          <div key={c.id} className="p-6 rounded-2xl bg-white border border-brand-border shadow-subtle">
            <div className="text-[10px] uppercase font-bold text-brand-purple tracking-wider mb-1">
              {c.category}
            </div>
            <h3 className="font-serif text-lg font-semibold text-brand-text mb-2">
              {c.title}
            </h3>
            <p className="text-xs text-brand-muted leading-relaxed mb-4">
              {c.description}
            </p>
            <div className="pt-3 border-t border-brand-border flex items-center justify-between text-xs">
              <span className="font-medium text-emerald-600">● Engine Active</span>
              <span className="text-brand-muted">FY 2026-27</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
