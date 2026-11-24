import React from "react";
import { Image as ImageIcon, Upload } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function AdminMediaPage() {
  const images = [
    { title: "Hero Business Review", path: "/images/home/hero-review.jpg", size: "480 KB", date: "Nov 17, 2026" },
    { title: "About Meeting Conference", path: "/images/about/meeting.jpg", size: "520 KB", date: "Nov 15, 2026" },
    { title: "GST Guide Thumbnail", path: "/images/blog/gst-guide.jpg", size: "310 KB", date: "Nov 10, 2026" },
    { title: "Income Tax Thumbnail", path: "/images/blog/income-tax.jpg", size: "290 KB", date: "Nov 05, 2026" },
    { title: "Company vs LLP Thumbnail", path: "/images/blog/incorporation.jpg", size: "340 KB", date: "Oct 28, 2026" },
  ];

  return (
    <div className="space-y-6">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <h1 className="font-serif text-2xl sm:text-3xl font-semibold text-brand-text">
            Media & Asset Library
          </h1>
          <p className="text-xs sm:text-sm text-brand-muted mt-1">
            Store and manage corporate photography, logos, and publication covers.
          </p>
        </div>
        <Button variant="primary" size="sm">
          <Upload className="w-4 h-4 mr-1.5" />
          <span>Upload Image</span>
        </Button>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5">
        {images.map((img) => (
          <div key={img.title} className="p-4 rounded-2xl bg-white border border-brand-border shadow-subtle flex flex-col justify-between">
            <div className="aspect-[16/10] bg-brand-alt rounded-xl border border-brand-border/60 flex items-center justify-center text-brand-muted mb-3">
              <ImageIcon className="w-8 h-8 text-brand-muted/40" />
            </div>
            <div>
              <h3 className="font-semibold text-xs text-brand-text">{img.title}</h3>
              <p className="text-[10px] text-brand-muted font-mono">{img.path}</p>
            </div>
            <div className="mt-3 pt-2 border-t border-brand-border flex items-center justify-between text-[10px] text-brand-muted">
              <span>{img.size}</span>
              <span>{img.date}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
