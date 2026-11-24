"use client";

import React from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { ArrowLeft } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Select } from "@/components/ui/select";
import { Button } from "@/components/ui/button";

export default function CreateBlogArticlePage() {
  const router = useRouter();

  const handlePublish = (e: React.FormEvent) => {
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
          Write New Insights Article
        </h1>

        <form onSubmit={handlePublish} className="space-y-4">
          <Input label="Article Title" placeholder="e.g. Critical MCA Filing Dates for FY 2026-27" required />
          <Input label="URL Slug" placeholder="e.g. critical-mca-filing-dates-2026" required />
          <Select label="Category" required>
            <option value="Tax & Compliance">Tax & Compliance</option>
            <option value="Income Tax">Income Tax</option>
            <option value="Business Setup">Business Setup</option>
            <option value="GST">GST</option>
          </Select>
          <Input label="Estimated Read Time" placeholder="e.g. 5 min read" defaultValue="5 min read" />
          <div className="flex flex-col gap-1.5">
            <label className="text-xs sm:text-sm font-medium text-brand-text">
              Brief Excerpt / Summary
            </label>
            <textarea
              rows={3}
              placeholder="A 2-3 sentence overview for search previews and article cards..."
              className="w-full px-3.5 py-2.5 rounded-xl border border-brand-border text-sm text-brand-text focus:outline-none focus:ring-2 focus:ring-brand-purple resize-none"
            />
          </div>
          <div className="flex flex-col gap-1.5">
            <label className="text-xs sm:text-sm font-medium text-brand-text">
              Full Article Markdown / HTML Content
            </label>
            <textarea
              rows={8}
              placeholder="Write the full analytical guide, breakdown, and statutory references..."
              className="w-full px-3.5 py-2.5 rounded-xl border border-brand-border text-sm text-brand-text focus:outline-none focus:ring-2 focus:ring-brand-purple resize-none font-mono text-xs"
            />
          </div>
          <div className="pt-4 flex justify-end gap-3">
            <Button href="/admin/blog" variant="secondary" size="md">
              Cancel
            </Button>
            <Button type="submit" variant="primary" size="md">
              Publish Article
            </Button>
          </div>
        </form>
      </div>
    </div>
  );
}
