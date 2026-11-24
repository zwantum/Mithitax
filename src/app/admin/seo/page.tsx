import React from "react";
import { Search } from "lucide-react";

export default function AdminSEOPage() {
  const seoItems = [
    { title: "Home Page", canonical: "https://mithitax.com", index: "index, follow", ogType: "website" },
    { title: "About Us", canonical: "https://mithitax.com/about", index: "index, follow", ogType: "website" },
    { title: "Services Directory", canonical: "https://mithitax.com/services", index: "index, follow", ogType: "website" },
    { title: "Insights & Guides", canonical: "https://mithitax.com/insights", index: "index, follow", ogType: "article" },
    { title: "Business Calculators", canonical: "https://mithitax.com/calculators", index: "index, follow", ogType: "website" },
  ];

  return (
    <div className="space-y-6">
      <div>
        <h1 className="font-serif text-2xl sm:text-3xl font-semibold text-brand-text">
          SEO & Meta Indexing
        </h1>
        <p className="text-xs sm:text-sm text-brand-muted mt-1">
          Monitor canonical URLs, Open Graph parameters, robots.txt, and sitemap.xml.
        </p>
      </div>

      <div className="bg-white rounded-2xl border border-brand-border shadow-subtle overflow-hidden">
        <table className="w-full text-left text-xs sm:text-sm">
          <thead className="bg-brand-alt/80 border-b border-brand-border text-xs uppercase font-semibold text-brand-muted">
            <tr>
              <th className="py-3 px-4">Page</th>
              <th className="py-3 px-4">Canonical URL</th>
              <th className="py-3 px-4">Robots Index</th>
              <th className="py-3 px-4">OG Type</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-brand-border text-brand-text">
            {seoItems.map((s) => (
              <tr key={s.title} className="hover:bg-brand-alt/40 transition">
                <td className="py-3 px-4 font-semibold">{s.title}</td>
                <td className="py-3 px-4 font-mono text-xs text-brand-purple">{s.canonical}</td>
                <td className="py-3 px-4 text-emerald-600 font-medium">{s.index}</td>
                <td className="py-3 px-4 text-brand-muted">{s.ogType}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
