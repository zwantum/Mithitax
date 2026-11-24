"use client";

import React from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { ArrowLeft } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Select } from "@/components/ui/select";
import { Button } from "@/components/ui/button";
import { serviceCategories } from "@/lib/constants";

export default function CreateServicePage() {
  const router = useRouter();

  const handleSave = (e: React.FormEvent) => {
    e.preventDefault();
    router.push("/admin/services");
  };

  return (
    <div className="max-w-2xl mx-auto space-y-6">
      <Link
        href="/admin/services"
        className="inline-flex items-center gap-1.5 text-xs font-semibold text-brand-purple hover:underline"
      >
        <ArrowLeft className="w-3.5 h-3.5" />
        <span>Back to services list</span>
      </Link>

      <div className="bg-white rounded-2xl border border-brand-border p-6 sm:p-8 shadow-subtle">
        <h1 className="font-serif text-2xl font-semibold text-brand-text mb-6">
          Create New Service
        </h1>

        <form onSubmit={handleSave} className="space-y-4">
          <Input label="Service Title" placeholder="e.g. Trademark Class Registration" required />
          <Input label="Slug (URL Path)" placeholder="e.g. trademark-class-registration" required />
          <Select label="Assign to Category" required>
            {serviceCategories.map((c) => (
              <option key={c.id} value={c.slug}>
                {c.title}
              </option>
            ))}
          </Select>
          <div className="flex flex-col gap-1.5">
            <label className="text-xs sm:text-sm font-medium text-brand-text">
              Service Summary Description
            </label>
            <textarea
              rows={3}
              placeholder="Outline statutory scope, government filing triggers, and target business profiles..."
              className="w-full px-3.5 py-2.5 rounded-xl border border-brand-border text-sm text-brand-text focus:outline-none focus:ring-2 focus:ring-brand-purple resize-none"
            />
          </div>
          <div className="grid grid-cols-2 gap-4">
            <Input label="Estimated Turnaround (Days)" type="number" placeholder="5" />
            <Input label="Starting Fee (₹)" type="number" placeholder="4999" />
          </div>
          <div className="pt-4 flex justify-end gap-3">
            <Button href="/admin/services" variant="secondary" size="md">
              Cancel
            </Button>
            <Button type="submit" variant="primary" size="md">
              Publish Service
            </Button>
          </div>
        </form>
      </div>
    </div>
  );
}
