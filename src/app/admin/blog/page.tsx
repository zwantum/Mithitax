import React from "react";
import Link from "next/link";
import { Plus, Edit } from "lucide-react";
import { insightArticles } from "@/lib/constants";
import { Button } from "@/components/ui/button";

export default function AdminBlogPage() {
  return (
    <div className="space-y-6">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <h1 className="font-serif text-2xl sm:text-3xl font-semibold text-brand-text">
            Blog & Insights Articles
          </h1>
          <p className="text-xs sm:text-sm text-brand-muted mt-1">
            Publish guides, circular updates, and corporate tax advisories.
          </p>
        </div>
        <div className="flex items-center gap-2">
          <Button href="/admin/blog/categories" variant="secondary" size="sm">
            Manage Categories
          </Button>
          <Button href="/admin/blog/create" variant="primary" size="sm" withArrow>
            <Plus className="w-4 h-4 mr-1" />
            <span>Create Article</span>
          </Button>
        </div>
      </div>

      <div className="bg-white rounded-2xl border border-brand-border shadow-subtle overflow-hidden">
        <table className="w-full text-left text-xs sm:text-sm">
          <thead className="bg-brand-alt/80 border-b border-brand-border text-xs uppercase font-semibold text-brand-muted">
            <tr>
              <th className="py-3 px-4">Article Title</th>
              <th className="py-3 px-4">Category</th>
              <th className="py-3 px-4">Read Time</th>
              <th className="py-3 px-4">Published Date</th>
              <th className="py-3 px-4 text-right">Edit</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-brand-border text-brand-text">
            {insightArticles.map((art) => (
              <tr key={art.id} className="hover:bg-brand-alt/40 transition">
                <td className="py-3 px-4 font-semibold">{art.title}</td>
                <td className="py-3 px-4 text-brand-purple font-medium text-xs">
                  {art.category}
                </td>
                <td className="py-3 px-4 text-brand-muted">{art.readTime}</td>
                <td className="py-3 px-4 text-brand-muted">{art.date}</td>
                <td className="py-3 px-4 text-right">
                  <Link
                    href={`/admin/blog/${art.slug}/edit`}
                    className="inline-flex p-1.5 rounded-lg border border-brand-border text-brand-muted hover:text-brand-purple hover:bg-brand-alt transition"
                    aria-label="Edit article"
                  >
                    <Edit className="w-3.5 h-3.5" />
                  </Link>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
