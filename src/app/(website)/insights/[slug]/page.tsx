import React from "react";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import {
  ArrowLeft,
  ArrowRight,
  Clock,
  Calendar,
  User,
  CheckCircle2,
  Phone,
  Mail,
} from "lucide-react";
import { insightArticles, siteConfig } from "@/lib/constants";
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

  const relatedArticles = insightArticles.filter((a) => a.slug !== slug);

  return (
    <div className="bg-white">
      {/* 1. Article Hero Header */}
      <section className="relative overflow-hidden pt-8 pb-8 sm:pt-12 sm:pb-10 bg-white">
        <div
          className="absolute top-0 left-1/2 -translate-x-1/2 w-[900px] h-[420px] pointer-events-none"
          style={{
            background:
              "radial-gradient(ellipse 65% 50% at 50% 15%, rgba(113, 10, 198, 0.07) 0%, rgba(180, 231, 23, 0.03) 45%, transparent 75%)",
          }}
          aria-hidden="true"
        />

        <div className="relative z-10 max-w-content mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <Link
              href="/insights"
              className="inline-flex items-center gap-2 text-xs sm:text-sm font-semibold text-brand-purple hover:underline mb-6"
            >
              <ArrowLeft className="w-4 h-4" />
              <span>Back to All Insights</span>
            </Link>

            <div className="flex flex-wrap items-center gap-3 text-xs text-brand-muted mb-4">
              <Link
                href={`/insights/category/${article.categorySlug || "tax-compliance"}`}
                className="px-3 py-1 rounded-full bg-brand-purple-light text-brand-purple font-semibold hover:bg-brand-purple hover:text-white transition-colors"
              >
                {article.category}
              </Link>
              <span className="flex items-center gap-1.5">
                <Clock className="w-3.5 h-3.5 text-brand-purple" />
                {article.readTime}
              </span>
              <span className="flex items-center gap-1.5">
                <Calendar className="w-3.5 h-3.5 text-brand-purple" />
                {article.date}
              </span>
              {article.author && (
                <span className="flex items-center gap-1.5">
                  <User className="w-3.5 h-3.5 text-brand-purple" />
                  {article.author}
                </span>
              )}
            </div>

            <h1 className="text-2xl sm:text-4xl lg:text-[2.75rem] font-semibold text-brand-text tracking-tight leading-[1.2] mb-6">
              {article.title}
            </h1>

            <div
              className="relative w-full aspect-[16/9] rounded-3xl overflow-hidden border border-slate-200/80 shadow-[0_12px_32px_rgba(23,21,45,0.06)] bg-slate-100"
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
                sizes="(max-width: 1024px) 100vw, 900px"
                className="object-cover"
                style={{ objectFit: "cover" }}
              />
            </div>
          </div>
        </div>
      </section>

      {/* 2. Editorial Body + Sticky Sidebar */}
      <section className="relative py-8 sm:py-12 bg-gradient-to-b from-[#F4F5FA] via-[#F7F8FC] to-white">
        <div
          className="absolute inset-x-0 top-0 h-14 sm:h-20 bg-gradient-to-b from-white to-transparent pointer-events-none"
          aria-hidden="true"
        />

        <div className="relative z-10 max-w-content mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-5xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12">
            {/* Main Article Content */}
            <article className="lg:col-span-8 bg-white rounded-3xl border border-slate-200/90 shadow-[0_6px_24px_rgba(23,21,45,0.04)] p-6 sm:p-8 lg:p-10 space-y-6">
              {/* Summary Callout */}
              <div className="border-l-4 border-brand-purple bg-[#F8F7FD] rounded-r-2xl p-5">
                <p className="text-sm sm:text-base font-medium text-brand-text leading-relaxed">
                  {article.summary}
                </p>
              </div>

              <div className="space-y-5 text-sm sm:text-[0.975rem] text-brand-muted leading-relaxed">
                <p>
                  {article.content}
                </p>

                <p>
                  When establishing or scaling an enterprise in India, statutory compliance is not merely an annual checkbox — it is the cornerstone of operational stability, bankability, and business credibility. Timely registrations and accurate periodic filings protect your business from avoidable interest penalties and regulatory notices.
                </p>

                <h2 className="text-xl sm:text-2xl font-semibold text-brand-text pt-4 border-t border-slate-100">
                  Key Regulatory Checkpoints
                </h2>

                <p>
                  Businesses should regularly review their statutory obligations across the Ministry of Corporate Affairs (MCA), GST portal, and Income Tax Department. Keeping your accounting books aligned with GST returns and TDS filings avoids reconciliation mismatches.
                </p>

                <div className="bg-[#FAF9FD] rounded-2xl border border-slate-200/80 p-5 sm:p-6 space-y-3">
                  <h3 className="text-base font-semibold text-brand-text">
                    Essential Action Checklist
                  </h3>
                  <ul className="space-y-2.5 text-xs sm:text-sm text-brand-muted">
                    <li className="flex items-start gap-2.5">
                      <CheckCircle2 className="w-4 h-4 text-brand-purple flex-shrink-0 mt-0.5" />
                      <span>Verify entity eligibility, turnover thresholds, and required KYC documentation before applying.</span>
                    </li>
                    <li className="flex items-start gap-2.5">
                      <CheckCircle2 className="w-4 h-4 text-brand-purple flex-shrink-0 mt-0.5" />
                      <span>Maintain organized monthly accounting, invoices, and input tax credit (ITC) records.</span>
                    </li>
                    <li className="flex items-start gap-2.5">
                      <CheckCircle2 className="w-4 h-4 text-brand-purple flex-shrink-0 mt-0.5" />
                      <span>Track due dates for GSTR filings, TDS payments, advance tax, and annual ROC compliance.</span>
                    </li>
                  </ul>
                </div>

                <h2 className="text-xl sm:text-2xl font-semibold text-brand-text pt-4 border-t border-slate-100">
                  How Mithi Tax Can Help
                </h2>

                <p>
                  Our team provides end-to-end assistance — from initial documentation review and online application filing to ongoing accounting, GST return management, and income tax compliance — so you can focus on growing your business with peace of mind.
                </p>
              </div>
            </article>

            {/* Sticky Sidebar */}
            <aside className="lg:col-span-4 space-y-6">
              {/* Expert Consultation Card */}
              <div className="rounded-2xl bg-gradient-to-b from-white to-[#FAF9FD] border border-slate-200/90 shadow-[0_6px_24px_rgba(23,21,45,0.04)] p-6">
                <div className="mb-3">
                  <span className="text-[11px] font-semibold tracking-wider text-brand-purple uppercase">
                    EXPERT ASSISTANCE
                  </span>
                  <div className="w-8 h-[2px] bg-brand-lime mt-1 rounded-full" />
                </div>
                <h3 className="text-lg font-semibold text-brand-text mb-2">
                  Need guidance on this topic?
                </h3>
                <p className="text-xs sm:text-sm text-brand-muted leading-relaxed mb-5">
                  Speak with our team for tailored assistance with business registration, GST, income tax, and compliance.
                </p>

                <Button
                  href="/contact"
                  variant="lime"
                  size="md"
                  withArrow
                  className="w-full justify-center py-3 rounded-full text-sm font-semibold shadow-[0_4px_14px_rgba(180,231,23,0.35)] mb-4"
                >
                  Book Free Consultation
                </Button>

                <div className="pt-4 border-t border-slate-100 space-y-2.5 text-xs text-brand-muted">
                  <a
                    href={`tel:${siteConfig.phone.replace(/\s+/g, "")}`}
                    className="flex items-center gap-2 hover:text-brand-purple transition-colors font-medium"
                  >
                    <Phone className="w-3.5 h-3.5 text-brand-purple" />
                    <span>{siteConfig.phone}</span>
                  </a>
                  <a
                    href={`mailto:${siteConfig.email}`}
                    className="flex items-center gap-2 hover:text-brand-purple transition-colors font-medium"
                  >
                    <Mail className="w-3.5 h-3.5 text-brand-purple" />
                    <span>{siteConfig.email}</span>
                  </a>
                </div>
              </div>

              {/* Related Insights Card */}
              {relatedArticles.length > 0 && (
                <div className="rounded-2xl bg-white border border-slate-200/90 shadow-[0_6px_24px_rgba(23,21,45,0.04)] p-6">
                  <h3 className="text-base font-semibold text-brand-text mb-4">
                    More Insights
                  </h3>
                  <div className="space-y-4 divide-y divide-slate-100">
                    {relatedArticles.map((rel) => (
                      <Link
                        key={rel.slug}
                        href={`/insights/${rel.slug}`}
                        className="group block pt-4 first:pt-0"
                      >
                        <span className="text-[11px] font-semibold text-brand-purple block mb-1">
                          {rel.category}
                        </span>
                        <h4 className="text-sm font-semibold text-brand-text group-hover:text-brand-purple transition-colors leading-snug mb-1.5">
                          {rel.title}
                        </h4>
                        <span className="inline-flex items-center gap-1 text-xs text-brand-muted group-hover:text-brand-purple transition-colors">
                          <span>Read guide</span>
                          <ArrowRight className="w-3 h-3" />
                        </span>
                      </Link>
                    ))}
                  </div>
                </div>
              )}
            </aside>
          </div>
        </div>
      </section>
    </div>
  );
}
