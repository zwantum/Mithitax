import React from "react";
import Link from "next/link";
import { Plus, Edit, Trash2 } from "lucide-react";
import { serviceCategories } from "@/lib/constants";
import { Button } from "@/components/ui/button";

export default function AdminServicesPage() {
  const allServices = serviceCategories.flatMap((c) =>
    c.services.map((s) => ({ ...s, categoryName: c.title }))
  );

  return (
    <div className="space-y-6">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <h1 className="font-serif text-2xl sm:text-3xl font-semibold text-brand-text">
            Corporate Services
          </h1>
          <p className="text-xs sm:text-sm text-brand-muted mt-1">
            Manage catalogue, pricing, deliverables, and category assignments.
          </p>
        </div>
        <Button href="/admin/services/create" variant="primary" size="sm" withArrow>
          <Plus className="w-4 h-4 mr-1" />
          <span>Add New Service</span>
        </Button>
      </div>

      <div className="bg-white rounded-2xl border border-brand-border shadow-subtle overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full text-left text-xs sm:text-sm">
            <thead className="bg-brand-alt/80 border-b border-brand-border text-xs uppercase font-semibold text-brand-muted">
              <tr>
                <th className="py-3 px-4">Service Title</th>
                <th className="py-3 px-4">Category</th>
                <th className="py-3 px-4">Slug</th>
                <th className="py-3 px-4">Est. Timeline</th>
                <th className="py-3 px-4 text-right">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-brand-border text-brand-text">
              {allServices.map((srv) => (
                <tr key={srv.slug} className="hover:bg-brand-alt/40 transition">
                  <td className="py-3 px-4 font-semibold">{srv.title}</td>
                  <td className="py-3 px-4 text-brand-purple font-medium text-xs">
                    {srv.categoryName}
                  </td>
                  <td className="py-3 px-4 text-brand-muted font-mono text-xs">{srv.slug}</td>
                  <td className="py-3 px-4 text-brand-muted">{srv.timelineDays || 3} Days</td>
                  <td className="py-3 px-4 text-right">
                    <div className="flex items-center justify-end gap-2">
                      <Link
                        href={`/admin/services/${srv.slug}/edit`}
                        className="p-1.5 rounded-lg border border-brand-border text-brand-muted hover:text-brand-purple hover:bg-brand-alt transition"
                        aria-label="Edit service"
                      >
                        <Edit className="w-3.5 h-3.5" />
                      </Link>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
