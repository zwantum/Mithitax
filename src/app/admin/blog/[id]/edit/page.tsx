"use client";

import React, { use } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { ArrowLeft } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Select } from "@/components/ui/select";
import { Button } from "@/components/ui/button";

export default function EditBlogArticlePage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const router = useRouter();
  const { id } = use(params);

  const handleUpdate = (e: React.FormEvent) => {
    e.preventDefault();
    router.push("/admin/blog");
  };

  return (
    <div className="max-w-2xl mx-auto space-y-6">
      <Link
        href="/admin/blog"
        className="inline-flex items-center gap-1.5 text-xs font-semibold text-brand-purple hover:underline"
      >
        <ArrowLeft className="w-3.5 h-3.5" />
        <span>Back to articles list</span>
      </Link>

      <div className="bg-white rounded-2xl border border-brand-border p-6 sm:p-8 shadow-subtle">
        <h1 className="font-serif text-2xl font-semibold text-brand-text mb-6">
          Edit Article: {id}
        </h1>

        <form onSubmit={handleUpdate} className="space-y-4">
          <Input label="Article Title" defaultValue={id.replace(/-/g, " ").toUpperCase()} required />
          <Input label="Slug" defaultValue={id} required />
          <Select label="Category">
            <option value="Tax & Compliance">Tax & Compliance</option>
            <option value="Income Tax">Income Tax</option>
            <option value="Business Setup">Business Setup</option>
          </Select>
          <div className="flex flex-col gap-1.5">
            <label className="text-xs sm:text-sm font-medium text-brand-text">
              Summary Excerpt
            </label>
            <textarea
              rows={3}
              defaultValue="Critical regulatory advisory and compliance breakdown for business founders."
              className="w-full px-3.5 py-2.5 rounded-xl border border-brand-border text-sm text-brand-text focus:outline-none focus:ring-2 focus:ring-brand-purple resize-none"
            />
          </div>
          <div className="pt-4 flex justify-end gap-3">
            <Button href="/admin/blog" variant="secondary" size="md">
              Cancel
            </Button>
            <Button type="submit" variant="primary" size="md">
              Save Article
            </Button>
          </div>
        </form>
      </div>
    </div>
  );
}
