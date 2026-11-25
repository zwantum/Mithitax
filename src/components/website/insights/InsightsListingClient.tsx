"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Search, Clock, ArrowRight, User, BookOpen, X } from "lucide-react";
import { InsightArticle } from "@/types";
import { cn } from "@/lib/utils";

interface InsightsListingClientProps {
  articles: InsightArticle[];
}

export default function InsightsListingClient({
  articles,
}: InsightsListingClientProps) {
  const [selectedCategory, setSelectedCategory] = useState<string>("all");
  const [searchQuery, setSearchQuery] = useState<string>("");

  const categories = [
    { slug: "all", label: "All Articles", count: articles.length },
    ...Array.from(
      articles.reduce((map, a) => {
        const slug = a.categorySlug || "tax-compliance";
        const existing = map.get(slug);
        if (existing) {
          existing.count += 1;
        } else {
          map.set(slug, { slug, label: a.category, count: 1 });
        }
        return map;
      }, new Map<string, { slug: string; label: string; count: number }>()).values()
    ),
  ];

  const filteredArticles = articles.filter((article) => {
    const matchesCategory =
      selectedCategory === "all" ||
      (article.categorySlug || "tax-compliance") === selectedCategory;
    const q = searchQuery.trim().toLowerCase();
    const matchesQuery =
      !q ||
      article.title.toLowerCase().includes(q) ||
      article.summary.toLowerCase().includes(q) ||
      article.category.toLowerCase().includes(q);
    return matchesCategory && matchesQuery;
  });

  return (
    <>
      {/* 1. Clean Archive Hero Header */}
      <section className="relative overflow-hidden pt-8 pb-8 sm:pt-12 sm:pb-10 bg-white">
        <div
          className="absolute top-0 left-1/2 -translate-x-1/2 w-[900px] h-[380px] pointer-events-none"
          style={{
            background:
              "radial-gradient(ellipse 65% 50% at 50% 15%, rgba(113, 10, 198, 0.07) 0%, rgba(180, 231, 23, 0.03) 45%, transparent 75%)",
          }}
          aria-hidden="true"
        />

        <div className="relative z-10 max-w-content mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">

            <h1 className="text-3xl sm:text-4xl lg:text-[3rem] font-semibold tracking-tight text-brand-text leading-[2.35rem] sm:leading-[3rem] lg:leading-[3rem] mb-4">
              Insights, Guides &amp;{" "}
              <span className="text-brand-purple">Compliance Updates</span>
            </h1>

            <p className="text-sm sm:text-base text-brand-muted leading-relaxed font-normal max-w-2xl mx-auto">
              Practical articles and expert perspectives on business registration, GST, income tax, accounting, and statutory compliance in India.
            </p>
          </div>
        </div>
      </section>

      {/* 2. Professional Blog Archive Section */}
      <section className="relative py-8 sm:py-10 md:py-12 bg-gradient-to-b from-[#F4F5FA] via-[#F7F8FC] to-white">
        <div
          className="absolute inset-x-0 top-0 h-12 sm:h-16 bg-gradient-to-b from-white to-transparent pointer-events-none"
          aria-hidden="true"
        />

        <div className="relative z-10 max-w-content mx-auto px-4 sm:px-6 lg:px-8">
          {/* Archive Toolbar: Category Tabs (Single-row on mobile/tablet, side-by-side on desktop) + Compact Search */}
          <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4 pb-6 mb-8 border-b border-slate-200/80">
            <div className="flex items-center gap-2 overflow-x-auto no-scrollbar [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none] -mx-4 px-4 pb-1 sm:mx-0 sm:px-0 lg:overflow-visible lg:pb-0 lg:flex-wrap">
              {categories.map((cat) => {
                const isActive = selectedCategory === cat.slug;
                return (
                  <button
                    key={cat.slug}
                    type="button"
                    onClick={() => setSelectedCategory(cat.slug)}
                    className={cn(
                      "inline-flex items-center gap-1.5 px-3.5 sm:px-4 py-2 rounded-full text-xs sm:text-sm font-medium whitespace-nowrap flex-shrink-0 transition-all duration-200 cursor-pointer",
                      isActive
                        ? "bg-brand-purple text-white shadow-[0_4px_12px_rgba(113,10,198,0.22)]"
                        : "bg-white border border-slate-200/90 text-brand-muted hover:border-brand-purple/40 hover:text-brand-purple"
                    )}
                  >
                    <span>{cat.label}</span>
                    <span
                      className={cn(
                        "text-[11px] px-1.5 py-0.2 rounded-full font-semibold",
                        isActive
                          ? "bg-white/20 text-white"
                          : "bg-slate-100 text-slate-500"
                      )}
                    >
                      {cat.count}
                    </span>
                  </button>
                );
              })}
            </div>

            <div className="relative w-full sm:max-w-sm lg:w-72 flex-shrink-0">
              <Search className="w-4 h-4 text-brand-purple absolute left-3.5 top-1/2 -translate-y-1/2 pointer-events-none" />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search articles..."
                className="w-full pl-10 pr-9 py-2.5 bg-white rounded-full border border-slate-200/90 text-xs sm:text-sm text-brand-text placeholder:text-slate-400 focus:outline-none focus:border-brand-purple/50 focus:ring-4 focus:ring-brand-purple/10 shadow-xs transition-all"
              />
              {searchQuery && (
                <button
                  type="button"
                  onClick={() => setSearchQuery("")}
                  aria-label="Clear search"
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-400 hover:text-brand-text transition-colors cursor-pointer"
                >
                  <X className="w-3.5 h-3.5" />
                </button>
              )}
            </div>
          </div>

          {/* Uniform 3-Column Blog Archive Grid */}
          {filteredArticles.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-7">
              {filteredArticles.map((article) => (
                <article
                  key={article.id}
                  className="group flex flex-col bg-white rounded-2xl border border-slate-200/90 overflow-hidden shadow-[0_4px_16px_rgba(23,21,45,0.03)] hover:shadow-[0_16px_36px_-6px_rgba(113,10,198,0.12),0_4px_12px_rgba(23,21,45,0.04)] hover:border-brand-purple/40 hover:-translate-y-1 transition-all duration-300"
                >
                  {/* Thumbnail */}
                  <Link
                    href={`/insights/${article.slug}`}
                    className="relative w-full aspect-[16/10] overflow-hidden bg-slate-100 block"
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
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 400px"
                      className="object-cover object-center transition-transform duration-500 group-hover:scale-105"
                      style={{ objectFit: "cover" }}
                    />
                  </Link>

                  {/* Card Body */}
                  <div className="p-6 flex flex-col flex-1 justify-between">
                    <div>
                      <div className="flex items-center justify-between gap-2 text-xs text-brand-muted mb-3">
                        <Link
                          href={`/insights/category/${article.categorySlug || "tax-compliance"}`}
                          className="px-2.5 py-0.5 rounded-full bg-brand-purple-light text-brand-purple font-semibold hover:bg-brand-purple hover:text-white transition-colors"
                        >
                          {article.category}
                        </Link>
                        <span className="flex items-center gap-1 text-slate-500">
                          <Clock className="w-3.5 h-3.5" />
                          {article.readTime}
                        </span>
                      </div>

                      <h2 className="text-lg font-semibold text-brand-text leading-snug group-hover:text-brand-purple transition-colors mb-2.5">
                        <Link href={`/insights/${article.slug}`}>
                          {article.title}
                        </Link>
                      </h2>

                      <p className="text-xs sm:text-sm text-brand-muted leading-relaxed line-clamp-3">
                        {article.summary}
                      </p>
                    </div>

                    {/* Card Footer */}
                    <div className="pt-4 mt-5 border-t border-slate-100 flex items-center justify-between gap-3">
                      <div className="flex items-center gap-1.5 text-[11px] text-brand-muted font-medium truncate">
                        <User className="w-3.5 h-3.5 text-slate-400 flex-shrink-0" />
                        <span className="truncate">{article.date}</span>
                      </div>

                      <Link
                        href={`/insights/${article.slug}`}
                        className="inline-flex items-center gap-1.5 text-xs font-semibold text-brand-purple group/btn flex-shrink-0"
                      >
                        <span>Read More</span>
                        <span className="w-5 h-5 rounded-full bg-brand-lime/30 text-brand-text flex items-center justify-center transition-all duration-300 group-hover/btn:bg-brand-lime group-hover/btn:translate-x-0.5">
                          <ArrowRight className="w-3 h-3 text-brand-text" strokeWidth={2.2} />
                        </span>
                      </Link>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          ) : (
            <div className="text-center py-14 px-6 bg-white rounded-2xl border border-slate-200/80 max-w-lg mx-auto">
              <div className="w-12 h-12 rounded-2xl bg-brand-purple-light text-brand-purple flex items-center justify-center mx-auto mb-4">
                <BookOpen className="w-6 h-6" />
              </div>
              <h3 className="text-lg font-semibold text-brand-text mb-2">
                No matching articles found
              </h3>
              <p className="text-sm text-brand-muted mb-5">
                Try clearing your search or selecting another category.
              </p>
              <button
                type="button"
                onClick={() => {
                  setSelectedCategory("all");
                  setSearchQuery("");
                }}
                className="px-5 py-2.5 rounded-full bg-brand-lime text-brand-text text-xs font-semibold hover:bg-[#a6d812] transition-colors cursor-pointer"
              >
                Reset Filters
              </button>
            </div>
          )}
        </div>
      </section>
    </>
  );
}
