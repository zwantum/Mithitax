import React from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Clock } from "lucide-react";
import { insightArticles } from "@/lib/constants";

export default function InsightsSection() {
  return (
    <section className="py-12 md:py-18 bg-gradient-to-b from-[#F7F8FD] via-[#F4F5FA] to-white">
      <div className="max-w-content mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header: Clean sans-serif typography */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-6 mb-10 md:mb-12">
          <div>
            <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-[2rem] font-semibold text-brand-text tracking-tight leading-snug">
              Latest Insights &amp; Updates
            </h2>
          </div>

          <Link
            href="/insights"
            className="inline-flex items-center gap-2 text-xs sm:text-sm font-semibold text-brand-purple self-start sm:self-auto group"
          >
            <span className="hover:underline">View All Insights</span>
            <span className="w-6 h-6 rounded-full bg-brand-lime text-brand-text flex items-center justify-center transition-all duration-300 group-hover:translate-x-0.5 group-hover:shadow-[0_2px_8px_rgba(180,231,23,0.4)]">
              <ArrowRight className="w-3.5 h-3.5 text-brand-text" strokeWidth={2.4} />
            </span>
          </Link>
        </div>

        {/* Three Blog Cards with Elevated SaaS Depth */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
          {insightArticles.map((article) => (
            <article
              key={article.id}
              className="group flex flex-col bg-gradient-to-b from-white to-[#FAF9FD] rounded-2xl border border-slate-200/90 overflow-hidden shadow-[0_4px_16px_rgba(23,21,45,0.03)] hover:shadow-[0_16px_36px_-6px_rgba(113,10,198,0.12),0_4px_12px_rgba(23,21,45,0.04)] hover:border-brand-purple/40 hover:-translate-y-1 transition-all duration-300"
            >
              {/* Image Container with Safe Inlined Aspect Bounds */}
              <div
                className="relative w-full aspect-[16/10] overflow-hidden bg-slate-100"
                style={{
                  position: "relative",
                  width: "100%",
                  aspectRatio: "16 / 10",
                  overflow: "hidden",
                }}
              >
                <Image
                  src={article.image}
                  alt={article.title}
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 33vw, 400px"
                  className="object-cover object-center transition-transform duration-500 group-hover:scale-105"
                  style={{ objectFit: "cover" }}
                />
              </div>

              {/* Content */}
              <div className="p-6 flex flex-col flex-1 justify-between">
                <div>
                  <div className="flex items-center justify-between text-xs text-brand-muted mb-3">
                    <span className="px-2.5 py-0.5 rounded-full bg-brand-purple-light/80 text-brand-purple font-semibold text-[11px] border border-brand-purple/20">
                      {article.category}
                    </span>
                    <span className="flex items-center gap-1 text-[11px] text-brand-muted font-medium">
                      <Clock className="w-3.5 h-3.5" />
                      {article.readTime}
                    </span>
                  </div>

                  <h3 className="text-base sm:text-[1.05rem] font-semibold text-brand-text leading-snug group-hover:text-brand-purple transition-colors mb-2.5">
                    <Link href={`/insights/${article.slug}`}>
                      {article.title}
                    </Link>
                  </h3>

                  <p className="text-xs sm:text-[0.8125rem] text-brand-muted leading-relaxed line-clamp-2">
                    {article.summary}
                  </p>
                </div>

                <div className="pt-4 mt-5 border-t border-slate-100/90 flex items-center justify-between">
                  <span className="text-[11px] text-brand-muted font-medium">
                    {article.date}
                  </span>
                  <Link
                    href={`/insights/${article.slug}`}
                    className="inline-flex items-center gap-1.5 text-xs font-semibold text-brand-purple group/btn"
                  >
                    <span>Read Article</span>
                    <span className="w-5 h-5 rounded-full bg-brand-lime/25 text-brand-text flex items-center justify-center transition-all duration-300 group-hover/btn:bg-brand-lime group-hover/btn:translate-x-0.5">
                      <ArrowRight className="w-3 h-3 text-brand-text" strokeWidth={2.2} />
                    </span>
                  </Link>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
