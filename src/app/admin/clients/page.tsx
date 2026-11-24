import React from "react";
import { clientLogos } from "@/lib/constants";

export default function AdminClientsPage() {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="font-serif text-2xl sm:text-3xl font-semibold text-brand-text">
          Client Brands & Partners
        </h1>
        <p className="text-xs sm:text-sm text-brand-muted mt-1">
          Approved enterprise logos displayed in the trusted clients carousel.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-5 gap-4">
        {clientLogos.map((client) => (
          <div key={client.name} className="p-5 rounded-2xl bg-white border border-brand-border text-center shadow-subtle">
            <div className="font-serif text-xl font-bold text-brand-text mb-1">
              {client.name}
            </div>
            <div className="text-[10px] font-semibold text-brand-muted uppercase tracking-wider">
              {client.tagline}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
