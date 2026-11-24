import React from "react";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";

export default function AdminBlogTagsPage() {
  const tags = ["SPICe+", "GSTR-3B", "Section 80C", "LLP Deed", "DIN", "DSC", "ITR-6", "E-Way Bill"];

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
          Article Tags
        </h1>
        <p className="text-xs sm:text-sm text-brand-muted mt-1">
          Regulatory keywords attached to guides.
        </p>
      </div>

      <div className="flex flex-wrap gap-2.5">
        {tags.map((t) => (
          <span
            key={t}
            className="px-3.5 py-1.5 rounded-full bg-white border border-brand-border text-xs font-semibold text-brand-text shadow-subtle"
          >
            #{t}
          </span>
        ))}
      </div>
    </div>
  );
}
