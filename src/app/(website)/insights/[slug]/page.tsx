import React from "react";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, Clock, Calendar, User } from "lucide-react";
import { insightArticles } from "@/lib/constants";
import { Button } from "@/components/ui/button";

interface PageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return insightArticles.map((article) => ({
    slug: article.slug,
  }));
}

export async function generateMetadata({ params }: PageProps) {
  const { slug } = await params;
  const article = insightArticles.find((a) => a.slug === slug);
  if (!article) return { title: "Article Not Found" };
  return {
    title: `${article.title} | Mithi Tax Insights`,
    description: article.summary,
  };
}

export default async function InsightDetailPage({ params }: PageProps) {
  const { slug } = await params;
  const article = insightArticles.find((a) => a.slug === slug);

  if (!article) {
    notFound();
  }

  return (
    <article className="py-14 sm:py-20 bg-white">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <Link
          href="/insights"
          className="inline-flex items-center gap-1.5 text-xs font-semibold text-brand-purple hover:underline mb-8"
        >
          <ArrowLeft className="w-3.5 h-3.5" />
          <span>Back to all insights</span>
        </Link>

        <div className="flex flex-wrap items-center gap-4 text-xs text-brand-muted mb-4">
          <Link
            href={`/insights/category/${article.categorySlug || "tax-compliance"}`}
            className="px-2.5 py-1 rounded-full bg-brand-purple-subtle text-brand-purple font-semibold hover:underline"
          >
            {article.category}
          </Link>
          <span className="flex items-center gap-1">
            <Clock className="w-3.5 h-3.5" />
            {article.readTime}
          </span>
          <span className="flex items-center gap-1">
            <Calendar className="w-3.5 h-3.5" />
            {article.date}
          </span>
          {article.author && (
            <span className="flex items-center gap-1">
              <User className="w-3.5 h-3.5" />
              {article.author}
            </span>
          )}
        </div>

        <h1 className="font-serif text-3xl sm:text-4xl md:text-5xl font-semibold text-brand-text tracking-tight leading-[1.2] mb-6">
          {article.title}
        </h1>

        <div
          className="relative w-full aspect-[16/9] rounded-2xl overflow-hidden mb-10 border border-brand-border shadow-card bg-brand-alt"
          style={{
            position: "relative",
            width: "100%",
            aspectRatio: "16 / 9",
            overflow: "hidden",
          }}
        >
          <Image
            src={article.image}
            alt={article.title}
            fill
            priority
            className="object-cover"
            style={{ objectFit: "cover" }}
          />
        </div>

        <div className="prose prose-slate max-w-none text-brand-muted space-y-5 text-base sm:text-lg leading-relaxed">
          <p className="font-medium text-brand-text text-xl leading-relaxed">
            {article.summary}
          </p>

          <p>
            When establishing or scaling an enterprise in India, statutory compliance is not merely an annual checkbox — it is the cornerstone of operational stability, bankability, and investor readiness. Failing to comply with registration thresholds or periodic returns can trigger onerous interest penalties, director disqualification, and frozen credit lines.
          </p>

          <h2 className="font-serif text-2xl font-semibold text-brand-text mt-8 pt-4 border-t border-brand-border">
            Key Regulatory Checkpoints
          </h2>

          <p>
            Every entity must meticulously evaluate the specific triggers set out by the Ministry of Corporate Affairs (MCA), the Central Board of Indirect Taxes and Customs (CBIC), and the Central Board of Direct Taxes (CBDT). Harmonizing data across your accounting software, GSTR returns, and Income Tax forms avoids departmental discrepancies and ensures full input credit utilization.
          </p>

          <div className="p-6 rounded-2xl bg-brand-alt border border-brand-border my-8">
            <h3 className="font-serif text-lg font-semibold text-brand-text mb-2">
              Need personalized advisory on this topic?
            </h3>
            <p className="text-sm text-brand-muted mb-4">
              Our tax consultants and corporate secretaries can audit your current compliance health and streamline your filings.
            </p>
            <Button href="/contact" variant="primary" size="sm" withArrow>
              Connect with an Expert
            </Button>
          </div>
        </div>
      </div>
    </article>
  );
}
