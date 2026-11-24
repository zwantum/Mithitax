import React from "react";
import { Users, Plus } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function AdminUsersPage() {
  const staff = [
    { name: "Super Admin", email: "admin@mithitax.com", role: "Super Admin", access: "Full Control", active: true },
    { name: "CA Rajesh Varma", email: "rajesh@mithitax.com", role: "Tax Lead / Admin", access: "Services & Enquiries", active: true },
    { name: "Ananya Deshmukh", email: "ananya@mithitax.com", role: "Senior Consultant", access: "Enquiries Only", active: true },
    { name: "CS Vikram Singhania", email: "vikram@mithitax.com", role: "Corporate Secretary", access: "Services & Articles", active: true },
  ];

  return (
    <div className="space-y-6">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <h1 className="font-serif text-2xl sm:text-3xl font-semibold text-brand-text">
            Staff & Access Roles
          </h1>
          <p className="text-xs sm:text-sm text-brand-muted mt-1">
            Assign role-based access for Chartered Accountants, compliance officers, and editors.
          </p>
        </div>
        <Button variant="primary" size="sm">
          <Plus className="w-4 h-4 mr-1.5" />
          <span>Invite Team Member</span>
        </Button>
      </div>

      <div className="bg-white rounded-2xl border border-brand-border shadow-subtle overflow-hidden">
        <table className="w-full text-left text-xs sm:text-sm">
          <thead className="bg-brand-alt/80 border-b border-brand-border text-xs uppercase font-semibold text-brand-muted">
            <tr>
              <th className="py-3 px-4">Member Name</th>
              <th className="py-3 px-4">Email</th>
              <th className="py-3 px-4">Role</th>
              <th className="py-3 px-4">Permissions Scope</th>
              <th className="py-3 px-4">Status</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-brand-border text-brand-text">
            {staff.map((u) => (
              <tr key={u.email} className="hover:bg-brand-alt/40 transition">
                <td className="py-3 px-4 font-semibold">{u.name}</td>
                <td className="py-3 px-4 text-brand-muted">{u.email}</td>
                <td className="py-3 px-4 font-medium text-brand-purple">{u.role}</td>
                <td className="py-3 px-4 text-brand-muted">{u.access}</td>
                <td className="py-3 px-4">
                  <span className="text-[10px] font-bold px-2 py-0.5 rounded-full bg-emerald-50 text-emerald-700 border border-emerald-200 uppercase">
                    Active
                  </span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
