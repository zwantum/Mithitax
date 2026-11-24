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
    <div className="py-14 sm:py-20 bg-white">
      <div className="max-w-content mx-auto px-4 sm:px-6 lg:px-8">
        <Link
          href="/insights"
          className="inline-flex items-center gap-1.5 text-xs font-semibold text-brand-purple hover:underline mb-8"
        >
          <ArrowLeft className="w-3.5 h-3.5" />
          <span>Back to all insights</span>
        </Link>

        <div className="max-w-3xl mb-12">
          <div className="inline-flex items-center gap-2 mb-3">
            <span className="w-2 h-2 rounded-full bg-brand-lime" />
            <span className="text-xs font-semibold tracking-wider text-brand-muted uppercase">
              CATEGORY ARCHIVES
            </span>
          </div>
          <h1 className="font-serif text-3xl sm:text-5xl font-semibold text-brand-text tracking-tight mb-4">
            {categoryName}
          </h1>
          <p className="text-sm sm:text-base text-brand-muted">
            Articles, guides and regulatory advisories on {categoryName}.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {filteredArticles.map((article) => (
            <article
              key={article.id}
              className="group flex flex-col bg-white rounded-2xl border border-brand-border overflow-hidden shadow-subtle hover:shadow-card hover:border-gray-300 transition-all duration-300"
            >
              <div className="relative w-full aspect-[16/10] overflow-hidden bg-brand-alt">
                <Image
                  src={article.image}
                  alt={article.title}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>

              <div className="p-6 flex flex-col flex-1 justify-between">
                <div>
                  <div className="flex items-center justify-between text-xs text-brand-muted mb-3">
                    <span className="font-semibold text-brand-purple">
                      {article.category}
                    </span>
                    <span className="flex items-center gap-1">
                      <Clock className="w-3.5 h-3.5" />
                      {article.readTime}
                    </span>
                  </div>

                  <h3 className="font-serif text-lg font-semibold text-brand-text leading-snug group-hover:text-brand-purple transition-colors mb-3">
                    <Link href={`/insights/${article.slug}`}>
                      {article.title}
                    </Link>
                  </h3>

                  <p className="text-xs sm:text-sm text-brand-muted leading-relaxed line-clamp-3">
                    {article.summary}
                  </p>
                </div>

                <div className="pt-5 mt-4 border-t border-brand-border/60 flex items-center justify-between">
                  <span className="text-[11px] text-brand-muted font-medium">
                    {article.date}
                  </span>
                  <Link
                    href={`/insights/${article.slug}`}
                    className="inline-flex items-center gap-1 text-xs font-semibold text-brand-purple group-hover:underline"
                  >
                    <span>Read Article</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </Link>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </div>
  );
}
