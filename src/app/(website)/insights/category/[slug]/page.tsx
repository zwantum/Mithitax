import React from "react";
import Link from "next/link";
import Image from "next/image";
import { notFound } from "next/navigation";
import { ArrowLeft, ArrowRight, Clock } from "lucide-react";
import { insightArticles } from "@/lib/constants";

interface PageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  const categories = Array.from(
    new Set(insightArticles.map((a) => a.categorySlug || "tax-compliance"))
  );
  return categories.map((slug) => ({ slug }));
}

export default async function InsightCategoryPage({ params }: PageProps) {
  const { slug } = await params;
  const filteredArticles = insightArticles.filter(
    (a) => (a.categorySlug || "tax-compliance") === slug
  );

  if (filteredArticles.length === 0) {
    notFound();
  }

  const categoryName = filteredArticles[0]?.category || slug;

  return (
    <div className="bg-white">
      {/* Header Section */}
      <section className="relative overflow-hidden pt-8 pb-10 sm:pt-12 sm:pb-12 bg-white">
        <div
          className="absolute top-0 left-1/2 -translate-x-1/2 w-[900px] h-[420px] pointer-events-none"
          style={{
            background:
              "radial-gradient(ellipse 65% 50% at 50% 15%, rgba(113, 10, 198, 0.08) 0%, rgba(180, 231, 23, 0.04) 40%, transparent 75%)",
          }}
          aria-hidden="true"
        />

        <div className="relative z-10 max-w-content mx-auto px-4 sm:px-6 lg:px-8">
          <Link
            href="/insights"
            className="inline-flex items-center gap-2 text-xs sm:text-sm font-semibold text-brand-purple hover:underline mb-6"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>Back to All Insights</span>
          </Link>

          <div className="max-w-3xl">
            <div className="mb-3">
              <span className="text-xs font-semibold tracking-wider text-brand-purple uppercase">
                CATEGORY ARCHIVE
              </span>
              <div className="w-8 h-[2px] bg-brand-lime mt-1.5 rounded-full" />
            </div>
            <h1 className="text-3xl sm:text-5xl font-semibold text-brand-text tracking-tight mb-4">
              {categoryName}
            </h1>
            <p className="text-sm sm:text-base text-brand-muted leading-relaxed">
              Practical guides, regulatory updates, and compliance insights on {categoryName}.
            </p>
          </div>
        </div>
      </section>

      {/* Articles Grid */}
      <section className="relative py-8 sm:py-12 md:py-16 bg-gradient-to-b from-[#F4F5FA] via-[#F7F8FC] to-white">
        <div
          className="absolute inset-x-0 top-0 h-14 sm:h-20 bg-gradient-to-b from-white to-transparent pointer-events-none"
          aria-hidden="true"
        />

        <div className="relative z-10 max-w-content mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
            {filteredArticles.map((article) => (
              <article
                key={article.id}
                className="group flex flex-col bg-gradient-to-b from-white to-[#FAF9FD] rounded-2xl border border-slate-200/90 overflow-hidden shadow-[0_4px_16px_rgba(23,21,45,0.03)] hover:shadow-[0_16px_36px_-6px_rgba(113,10,198,0.12),0_4px_12px_rgba(23,21,45,0.04)] hover:border-brand-purple/40 hover:-translate-y-1 transition-all duration-300"
              >
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
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 400px"
                    className="object-cover object-center transition-transform duration-500 group-hover:scale-105"
                    style={{ objectFit: "cover" }}
                  />
                </div>

                <div className="p-6 flex flex-col flex-1 justify-between">
                  <div>
                    <div className="flex items-center justify-between text-xs text-brand-muted mb-3">
                      <span className="px-2.5 py-0.5 rounded-full bg-brand-purple-light/80 font-semibold text-brand-purple">
                        {article.category}
                      </span>
                      <span className="flex items-center gap-1">
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
    </div>
  );
}
