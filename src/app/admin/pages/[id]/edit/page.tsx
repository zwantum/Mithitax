"use client";

import React, { use } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { ArrowLeft } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

export default function EditStaticPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const router = useRouter();
  const { id } = use(params);

  const handleSave = (e: React.FormEvent) => {
    e.preventDefault();
    router.push("/admin/pages");
  };

  return (
    <div className="max-w-2xl mx-auto space-y-6">
      <Link
        href="/admin/pages"
        className="inline-flex items-center gap-1.5 text-xs font-semibold text-brand-purple hover:underline"
      >
        <ArrowLeft className="w-3.5 h-3.5" />
        <span>Back to pages</span>
      </Link>

      <div className="bg-white rounded-2xl border border-brand-border p-6 sm:p-8 shadow-subtle">
        <h1 className="font-serif text-2xl font-semibold text-brand-text mb-6">
          Edit Page Content: {id}
        </h1>

        <form onSubmit={handleSave} className="space-y-4">
          <Input label="Page Title" defaultValue={id.replace(/-/g, " ").toUpperCase()} required />
          <Input label="Meta Title" defaultValue={`${id} | Mithi Tax Corporate Advisory`} required />
          <div className="flex flex-col gap-1.5">
            <label className="text-xs sm:text-sm font-medium text-brand-text">
              Meta Description
            </label>
            <textarea
              rows={3}
              defaultValue="End-to-end support for business setup, accounting, taxation and regulatory compliance."
              className="w-full px-3.5 py-2.5 rounded-xl border border-brand-border text-sm text-brand-text focus:outline-none focus:ring-2 focus:ring-brand-purple resize-none"
            />
          </div>
          <div className="pt-4 flex justify-end gap-3">
            <Button href="/admin/pages" variant="secondary" size="md">
              Cancel
            </Button>
            <Button type="submit" variant="primary" size="md">
              Save Content
            </Button>
          </div>
        </form>
      </div>
    </div>
  );
}
