import React from "react";
import { serviceCategories } from "@/lib/constants";
import { Building2, FileSpreadsheet, ReceiptText, ShieldCheck, Scale } from "lucide-react";

const icons = {
  Building2,
  FileSpreadsheet,
  ReceiptText,
  ShieldCheck,
  Scale,
};

export default function AdminServiceCategoriesPage() {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="font-serif text-2xl sm:text-3xl font-semibold text-brand-text">
          Service Categories
        </h1>
        <p className="text-xs sm:text-sm text-brand-muted mt-1">
          High-level classification groups displayed in the navigation and homepage sections.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
        {serviceCategories.map((cat, idx) => {
          const Icon = icons[cat.iconName as keyof typeof icons] || Building2;
          return (
            <div
              key={cat.id}
              className="p-6 rounded-2xl bg-white border border-brand-border shadow-subtle flex flex-col justify-between"
            >
              <div>
                <div className="w-10 h-10 rounded-xl bg-brand-purple-subtle text-brand-purple flex items-center justify-center mb-4">
                  <Icon className="w-5 h-5" />
                </div>
                <div className="text-[10px] uppercase font-bold text-brand-purple tracking-wider mb-1">
                  Category #{idx + 1}
                </div>
                <h3 className="font-serif text-lg font-semibold text-brand-text mb-2">
                  {cat.title}
                </h3>
                <p className="text-xs text-brand-muted leading-relaxed mb-4">
                  {cat.description}
                </p>
              </div>
              <div className="pt-3 border-t border-brand-border text-xs font-semibold text-brand-text">
                {cat.count} Configured Services
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
