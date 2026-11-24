import React from "react";
import { faqItems } from "@/lib/constants";

export default function AdminFAQsPage() {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="font-serif text-2xl sm:text-3xl font-semibold text-brand-text">
          Frequently Asked Questions
        </h1>
        <p className="text-xs sm:text-sm text-brand-muted mt-1">
          Common customer queries displayed in the vertical accordion.
        </p>
      </div>

      <div className="bg-white rounded-2xl border border-brand-border shadow-subtle divide-y divide-brand-border">
        {faqItems.map((faq, idx) => (
          <div key={faq.id} className="p-6">
            <div className="flex items-start justify-between gap-4">
              <div>
                <div className="text-[10px] font-bold text-brand-purple uppercase tracking-wider mb-1">
                  Question 0{idx + 1}
                </div>
                <h3 className="font-medium text-sm sm:text-base text-brand-text mb-2">
                  {faq.question}
                </h3>
                <p className="text-xs sm:text-sm text-brand-muted leading-relaxed">
                  {faq.answer}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
