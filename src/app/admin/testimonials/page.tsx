import React from "react";
import { Quote } from "lucide-react";

export default function AdminTestimonialsPage() {
  const testimonials = [
    {
      id: "1",
      author: "Rahul Sharma",
      title: "Founder, RD Traders",
      text: "Mithi Tax has been a reliable partner for our business. Their team is professional, responsive and highly knowledgeable in tax and compliance matters.",
      rating: 5,
    },
  ];

  return (
    <div className="space-y-6">
      <div>
        <h1 className="font-serif text-2xl sm:text-3xl font-semibold text-brand-text">
          Client Testimonials
        </h1>
        <p className="text-xs sm:text-sm text-brand-muted mt-1">
          Verified corporate endorsements and customer reviews.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
        {testimonials.map((t) => (
          <div key={t.id} className="p-6 rounded-2xl bg-white border border-brand-border shadow-subtle">
            <Quote className="w-6 h-6 text-brand-purple mb-3" />
            <p className="text-xs sm:text-sm text-brand-text leading-relaxed mb-4 italic">
              &ldquo;{t.text}&rdquo;
            </p>
            <div className="pt-3 border-t border-brand-border">
              <div className="font-semibold text-xs sm:text-sm text-brand-text">{t.author}</div>
              <div className="text-xs text-brand-muted">{t.title}</div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
