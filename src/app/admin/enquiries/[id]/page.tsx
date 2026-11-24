"use client";

import React, { use } from "react";
import Link from "next/link";
import { ArrowLeft, Mail, Phone, Building, Calendar, CheckCircle } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function EnquiryDetailPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = use(params);

  return (
    <div className="max-w-3xl mx-auto space-y-6">
      <Link
        href="/admin/enquiries"
        className="inline-flex items-center gap-1.5 text-xs font-semibold text-brand-purple hover:underline"
      >
        <ArrowLeft className="w-3.5 h-3.5" />
        <span>Back to all enquiries</span>
      </Link>

      <div className="bg-white rounded-2xl border border-brand-border p-6 sm:p-8 shadow-subtle space-y-6">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between pb-6 border-b border-brand-border gap-4">
          <div>
            <div className="text-xs uppercase font-bold text-brand-purple tracking-wider mb-1">
              Lead Reference: {id}
            </div>
            <h1 className="font-serif text-2xl font-semibold text-brand-text">
              Rahul Deshmukh
            </h1>
            <p className="text-xs text-brand-muted">
              Submitted on November 17, 2026 at 11:15 AM IST
            </p>
          </div>

          <div className="flex items-center gap-2">
            <span className="text-xs font-bold px-3 py-1 rounded-full bg-amber-50 text-amber-700 border border-amber-200 uppercase">
              Status: New Lead
            </span>
          </div>
        </div>

        {/* Contact Info */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div className="p-4 rounded-xl bg-brand-alt border border-brand-border/60 flex items-start gap-3">
            <Mail className="w-4 h-4 text-brand-purple mt-0.5" />
            <div>
              <div className="text-[11px] font-semibold text-brand-muted uppercase">Email Address</div>
              <a href="mailto:rahul@krypton.io" className="text-xs sm:text-sm font-semibold text-brand-text hover:underline">
                rahul@krypton.io
              </a>
            </div>
          </div>

          <div className="p-4 rounded-xl bg-brand-alt border border-brand-border/60 flex items-start gap-3">
            <Phone className="w-4 h-4 text-brand-purple mt-0.5" />
            <div>
              <div className="text-[11px] font-semibold text-brand-muted uppercase">Phone Number</div>
              <a href="tel:+919820012345" className="text-xs sm:text-sm font-semibold text-brand-text hover:underline">
                +91 98200 12345
              </a>
            </div>
          </div>
        </div>

        {/* Requirements */}
        <div>
          <h3 className="text-xs font-semibold text-brand-muted uppercase tracking-wider mb-2">
            Requested Category
          </h3>
          <div className="p-3.5 bg-brand-alt rounded-xl border border-brand-border text-sm font-medium text-brand-text">
            Company Incorporation (Private Limited Company Setup)
          </div>
        </div>

        <div>
          <h3 className="text-xs font-semibold text-brand-muted uppercase tracking-wider mb-2">
            Client Message / Specific Requirements
          </h3>
          <div className="p-4 bg-brand-alt rounded-xl border border-brand-border text-sm text-brand-text leading-relaxed">
            We are founding a fintech software venture in Bangalore with two co-founders and need end-to-end support with digital signature certificates, SPICe+ MCA filing, share allocation advisory, and initial GST registration. Please let us know the timeline and required KYC documents.
          </div>
        </div>

        {/* Action Controls */}
        <div className="pt-6 border-t border-brand-border flex items-center justify-between">
          <a
            href="mailto:rahul@krypton.io?subject=Mithi Tax Consultation Response - Company Incorporation"
            className="inline-flex items-center gap-1.5 px-4 py-2.5 rounded-full bg-brand-purple text-white text-xs font-semibold hover:bg-brand-purple-hover transition"
          >
            <Mail className="w-3.5 h-3.5" />
            <span>Send Direct Email Response</span>
          </a>

          <div className="flex items-center gap-2">
            <Button variant="secondary" size="sm">
              Mark In Progress
            </Button>
            <Button variant="lime" size="sm">
              Convert Lead
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
