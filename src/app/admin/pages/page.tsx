import React from "react";
import Link from "next/link";
import { Edit } from "lucide-react";

export default function AdminPagesManager() {
  const pages = [
    { title: "Home Page", slug: "/", status: "published", updated: "Nov 17, 2026" },
    { title: "About Us", slug: "/about", status: "published", updated: "Nov 15, 2026" },
    { title: "Services Directory", slug: "/services", status: "published", updated: "Nov 15, 2026" },
    { title: "Contact Us", slug: "/contact", status: "published", updated: "Nov 12, 2026" },
    { title: "Privacy Policy", slug: "/privacy-policy", status: "published", updated: "Nov 01, 2026" },
    { title: "Terms & Conditions", slug: "/terms-and-conditions", status: "published", updated: "Nov 01, 2026" },
  ];

  return (
    <div className="space-y-6">
      <div>
        <h1 className="font-serif text-2xl sm:text-3xl font-semibold text-brand-text">
          Static Pages & Content
        </h1>
        <p className="text-xs sm:text-sm text-brand-muted mt-1">
          Manage headers, descriptions, and metadata for primary corporate pages.
        </p>
      </div>

      <div className="bg-white rounded-2xl border border-brand-border shadow-subtle overflow-hidden">
        <table className="w-full text-left text-xs sm:text-sm">
          <thead className="bg-brand-alt/80 border-b border-brand-border text-xs uppercase font-semibold text-brand-muted">
            <tr>
              <th className="py-3 px-4">Page Title</th>
              <th className="py-3 px-4">Route</th>
              <th className="py-3 px-4">Status</th>
              <th className="py-3 px-4">Last Modified</th>
              <th className="py-3 px-4 text-right">Edit</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-brand-border text-brand-text">
            {pages.map((p) => (
              <tr key={p.slug} className="hover:bg-brand-alt/40 transition">
                <td className="py-3 px-4 font-semibold">{p.title}</td>
                <td className="py-3 px-4 font-mono text-xs text-brand-muted">{p.slug}</td>
                <td className="py-3 px-4">
                  <span className="text-[10px] font-bold px-2 py-0.5 rounded-full bg-emerald-50 text-emerald-700 border border-emerald-200 uppercase">
                    {p.status}
                  </span>
                </td>
                <td className="py-3 px-4 text-brand-muted">{p.updated}</td>
                <td className="py-3 px-4 text-right">
                  <Link
                    href={`/admin/pages/${encodeURIComponent(p.title.toLowerCase().replace(/\s+/g, "-"))}/edit`}
                    className="inline-flex p-1.5 rounded-lg border border-brand-border text-brand-muted hover:text-brand-purple hover:bg-brand-alt transition"
                    aria-label="Edit page"
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
