import React from "react";
import Link from "next/link";
import { Eye, Clock } from "lucide-react";

export default function AdminEnquiriesPage() {
  const enquiries = [
    {
      id: "enq-101",
      name: "Rahul Deshmukh",
      phone: "+91 98200 12345",
      email: "rahul@krypton.io",
      company: "Krypton Technologies Pvt Ltd",
      service: "Company Incorporation",
      status: "new",
      date: "Nov 17, 2026 - 11:15 AM",
    },
    {
      id: "enq-102",
      name: "Pooja Hegde",
      phone: "+91 98450 67890",
      email: "pooja@zenithlog.com",
      company: "Zenith Logistics LLP",
      service: "GST Monthly Returns",
      status: "contacted",
      date: "Nov 17, 2026 - 10:20 AM",
    },
    {
      id: "enq-103",
      name: "Amitav Sanyal",
      phone: "+91 99300 54321",
      email: "amitav@sanyalconsulting.com",
      company: "Sanyal Advisory",
      service: "Tax Compliance Support",
      status: "in_progress",
      date: "Nov 17, 2026 - 08:45 AM",
    },
    {
      id: "enq-104",
      name: "Sneha Nair",
      phone: "+91 97110 98765",
      email: "sneha@craftfood.in",
      company: "Craft Food Organics",
      service: "FSSAI & MSME Registration",
      status: "new",
      date: "Nov 17, 2026 - 06:30 AM",
    },
    {
      id: "enq-105",
      name: "Vikas Agrawal",
      phone: "+91 98190 11223",
      email: "vikas@agrawaltextiles.com",
      company: "Agrawal Textiles",
      service: "Cost Accounting & Record Maintenance",
      status: "closed",
      date: "Nov 16, 2026 - 04:10 PM",
    },
  ];

  return (
    <div className="space-y-6">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <h1 className="font-serif text-2xl sm:text-3xl font-semibold text-brand-text">
            Client Consultation Inquiries
          </h1>
          <p className="text-xs sm:text-sm text-brand-muted mt-1">
            Incoming leads with guaranteed 1 business day response requirement.
          </p>
        </div>
      </div>

      <div className="bg-white rounded-2xl border border-brand-border shadow-subtle overflow-hidden">
        <table className="w-full text-left text-xs sm:text-sm">
          <thead className="bg-brand-alt/80 border-b border-brand-border text-xs uppercase font-semibold text-brand-muted">
            <tr>
              <th className="py-3 px-4">Client Name</th>
              <th className="py-3 px-4">Contact Info</th>
              <th className="py-3 px-4">Service</th>
              <th className="py-3 px-4">Status</th>
              <th className="py-3 px-4">Received</th>
              <th className="py-3 px-4 text-right">View</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-brand-border text-brand-text">
            {enquiries.map((e) => (
              <tr key={e.id} className="hover:bg-brand-alt/40 transition">
                <td className="py-3 px-4">
                  <div className="font-semibold">{e.name}</div>
                  <div className="text-[11px] text-brand-muted">{e.company}</div>
                </td>
                <td className="py-3 px-4">
                  <div>{e.email}</div>
                  <div className="text-xs text-brand-muted">{e.phone}</div>
                </td>
                <td className="py-3 px-4 font-medium text-brand-purple">{e.service}</td>
                <td className="py-3 px-4">
                  <span
                    className={`text-[10px] font-bold px-2 py-0.5 rounded-full uppercase ${
                      e.status === "new"
                        ? "bg-amber-50 text-amber-700 border border-amber-200"
                        : e.status === "contacted"
                        ? "bg-blue-50 text-blue-700 border border-blue-200"
                        : e.status === "in_progress"
                        ? "bg-purple-50 text-purple-700 border border-purple-200"
                        : "bg-gray-100 text-gray-700 border border-gray-200"
                    }`}
                  >
                    {e.status}
                  </span>
                </td>
                <td className="py-3 px-4 text-brand-muted text-xs">{e.date}</td>
                <td className="py-3 px-4 text-right">
                  <Link
                    href={`/admin/enquiries/${e.id}`}
                    className="inline-flex p-1.5 rounded-lg border border-brand-border text-brand-muted hover:text-brand-purple hover:bg-brand-alt transition"
                    aria-label="View inquiry"
                  >
                    <Eye className="w-3.5 h-3.5" />
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
