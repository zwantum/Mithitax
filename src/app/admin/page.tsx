import React from "react";
import Link from "next/link";
import {
  MessageSquare,
  Briefcase,
  BookOpen,
  Users,
  ArrowUpRight,
  Clock,
  TrendingUp,
} from "lucide-react";
import { serviceCategories, insightArticles } from "@/lib/constants";

export default function AdminDashboardPage() {
  const stats = [
    { label: "New Enquiries (7d)", value: "38", change: "+14%", icon: MessageSquare, href: "/admin/enquiries" },
    { label: "Active Services", value: "27", change: "5 Categories", icon: Briefcase, href: "/admin/services" },
    { label: "Published Insights", value: String(insightArticles.length), change: "3 Topics", icon: BookOpen, href: "/admin/blog" },
    { label: "Staff & Admins", value: "6", change: "3 Online", icon: Users, href: "/admin/users" },
  ];

  const recentEnquiries = [
    { id: "enq-101", name: "Rahul Deshmukh", email: "rahul@krypton.io", service: "Company Incorporation", status: "new", time: "10 mins ago" },
    { id: "enq-102", name: "Pooja Hegde", email: "pooja@zenithlog.com", service: "GST Monthly Returns", status: "contacted", time: "1 hour ago" },
    { id: "enq-103", name: "Amitav Sanyal", email: "amitav@sanyalconsulting.com", service: "Tax Compliance Support", status: "in_progress", time: "3 hours ago" },
    { id: "enq-104", name: "Sneha Nair", email: "sneha@craftfood.in", service: "FSSAI & MSME Registration", status: "new", time: "5 hours ago" },
  ];

  return (
    <div className="space-y-8">
      <div>
        <h1 className="font-serif text-2xl sm:text-3xl font-semibold text-brand-text">
          Console Overview
        </h1>
        <p className="text-xs sm:text-sm text-brand-muted mt-1">
          Real-time snapshot of consultation enquiries, statutory services, and publishing activity.
        </p>
      </div>

      {/* Stats Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
        {stats.map((stat) => {
          const Icon = stat.icon;
          return (
            <Link
              key={stat.label}
              href={stat.href}
              className="p-5 rounded-2xl bg-white border border-brand-border shadow-subtle hover:shadow-card hover:border-brand-purple/30 transition flex flex-col justify-between"
            >
              <div className="flex items-center justify-between mb-4">
                <span className="text-xs font-semibold text-brand-muted uppercase tracking-wider">
                  {stat.label}
                </span>
                <div className="w-8 h-8 rounded-lg bg-brand-purple-subtle text-brand-purple flex items-center justify-center">
                  <Icon className="w-4 h-4" />
                </div>
              </div>
              <div className="flex items-baseline justify-between">
                <span className="font-serif text-3xl font-bold text-brand-text">
                  {stat.value}
                </span>
                <span className="text-xs font-semibold text-emerald-600 flex items-center gap-0.5">
                  <TrendingUp className="w-3.5 h-3.5" />
                  {stat.change}
                </span>
              </div>
            </Link>
          );
        })}
      </div>

      {/* Recent Enquiries Table */}
      <div className="bg-white rounded-2xl border border-brand-border shadow-subtle p-6">
        <div className="flex items-center justify-between pb-4 mb-4 border-b border-brand-border">
          <div>
            <h2 className="font-serif text-lg font-semibold text-brand-text">
              Recent Consultation Inquiries
            </h2>
            <p className="text-xs text-brand-muted">
              Leads requiring response within 1 business day.
            </p>
          </div>
          <Link
            href="/admin/enquiries"
            className="text-xs font-semibold text-brand-purple hover:underline inline-flex items-center gap-1"
          >
            <span>View All Leads</span>
            <ArrowUpRight className="w-3.5 h-3.5" />
          </Link>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full text-left text-xs sm:text-sm">
            <thead>
              <tr className="border-b border-brand-border text-brand-muted text-xs uppercase font-semibold">
                <th className="py-2.5 px-3">Client</th>
                <th className="py-2.5 px-3">Email</th>
                <th className="py-2.5 px-3">Requested Service</th>
                <th className="py-2.5 px-3">Status</th>
                <th className="py-2.5 px-3 text-right">Received</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-brand-border">
              {recentEnquiries.map((enq) => (
                <tr key={enq.id} className="hover:bg-brand-alt/50 transition">
                  <td className="py-3 px-3 font-semibold text-brand-text">{enq.name}</td>
                  <td className="py-3 px-3 text-brand-muted">{enq.email}</td>
                  <td className="py-3 px-3">{enq.service}</td>
                  <td className="py-3 px-3">
                    <span
                      className={`text-[10px] font-bold px-2 py-0.5 rounded-full uppercase ${
                        enq.status === "new"
                          ? "bg-amber-50 text-amber-700 border border-amber-200"
                          : enq.status === "contacted"
                          ? "bg-blue-50 text-blue-700 border border-blue-200"
                          : "bg-emerald-50 text-emerald-700 border border-emerald-200"
                      }`}
                    >
                      {enq.status}
                    </span>
                  </td>
                  <td className="py-3 px-3 text-right text-brand-muted text-xs">{enq.time}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
