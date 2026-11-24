import React from "react";
import Link from "next/link";
import { ArrowLeft, Tag } from "lucide-react";

export default function AdminBlogCategoriesPage() {
  const categories = [
    { name: "Tax & Compliance", slug: "tax-compliance", count: 12 },
    { name: "Income Tax", slug: "income-tax", count: 8 },
    { name: "Business Setup", slug: "business-setup", count: 15 },
    { name: "GST Circulars", slug: "gst-circulars", count: 9 },
  ];

  return (
    <div className="space-y-6">
      <Link
        href="/admin/blog"
        className="inline-flex items-center gap-1.5 text-xs font-semibold text-brand-purple hover:underline"
      >
        <ArrowLeft className="w-3.5 h-3.5" />
        <span>Back to articles</span>
      </Link>

      <div>
        <h1 className="font-serif text-2xl sm:text-3xl font-semibold text-brand-text">
          Article Categories
        </h1>
        <p className="text-xs sm:text-sm text-brand-muted mt-1">
          Organize editorial insights and taxonomies.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
        {categories.map((c) => (
          <div key={c.slug} className="p-5 rounded-2xl bg-white border border-brand-border shadow-subtle">
            <div className="w-8 h-8 rounded-lg bg-brand-purple-subtle text-brand-purple flex items-center justify-center mb-3">
              <Tag className="w-4 h-4" />
            </div>
            <h3 className="font-serif text-base font-semibold text-brand-text mb-1">
              {c.name}
            </h3>
            <p className="text-xs text-brand-muted">
              {c.count} Articles Published
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}
