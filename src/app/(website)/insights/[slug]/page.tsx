import React from "react";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import {
  ArrowRight,
  Clock,
  Calendar,
  User,
  CheckCircle2,
  Phone,
  Mail,
  Calculator,
  FileText,
  Building2,
  FolderOpen,
  MessageSquare,
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

  const relatedArticles = insightArticles
    .filter((a) => a.slug !== slug)
    .slice(0, 3);

  const categoriesList = Array.from(
    insightArticles.reduce((map, a) => {
      const catSlug = a.categorySlug || "tax-compliance";
      const existing = map.get(catSlug);
      if (existing) {
        existing.count += 1;
      } else {
        map.set(catSlug, { slug: catSlug, label: a.category, count: 1 });
      }
      return map;
    }, new Map<string, { slug: string; label: string; count: number }>()).values()
  );

  const eligibilityPoints = [
    "Businesses meeting statutory turnover or registration thresholds under Indian tax laws.",
    "Entities engaged in inter-state supply, e-commerce, or regulated commercial activities.",
    "Startups, LLPs, Private Limited Companies, and Sole Proprietors seeking formal compliance.",
    "Organizations maintaining regular GST, TDS, and Income Tax documentation.",
  ];

  const documentItems = [
    "PAN Card of Business / Proprietor / Directors",
    "Bank Account Details (Cancelled Cheque / Statement)",
    "Business Address Proof (Utility Bill / Rent Agreement)",
    "Identity & Address Proof of Promoters / Partners",
    "Certificate of Incorporation / Partnership Deed (if applicable)",
    "Digital Signature Certificate (DSC) & Relevant Registrations",
  ];

  const processSteps = [
    {
      num: "1",
      title: "Assess Eligibility",
      desc: "Confirm entity structure, thresholds, and statutory scope.",
    },
    {
      num: "2",
      title: "Prepare Documents",
      desc: "Gather verified KYC, address, and financial records.",
    },
    {
      num: "3",
      title: "Submit Filing",
      desc: "File accurately on the MCA, GST, or Income Tax portal.",
    },
    {
      num: "4",
      title: "Stay Compliant",
      desc: "Track due dates, reconciliations, and ongoing returns.",
    },
  ];

  const benefitsList = [
    "Full legal recognition and stronger business credibility with banks and enterprise clients.",
    "Seamless Input Tax Credit (ITC) claims and clean audit-ready financial records.",
    "Protection against avoidable late fees, interest penalties, and departmental notices.",
    "Smooth scalability across states and simplified year-end tax filings.",
  ];

  return (
    <div className="bg-white">
      {/* Main Blog Article (Left Column) + Sticky Sidebar (Right Column) */}
      <section className="py-8 sm:py-12">
        <div className="max-w-content mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
            {/* Left Main Article Column (Clean, Box-Free Editorial Layout) */}
            <article className="lg:col-span-8 space-y-7">
              {/* Article Header */}
              <div>
                <div className="flex flex-wrap items-center gap-3 text-xs text-brand-muted mb-3">
                  <Link
                    href={`/insights/category/${article.categorySlug || "tax-compliance"}`}
                    className="px-3 py-1 rounded-full bg-brand-purple-light text-brand-purple font-semibold hover:bg-brand-purple hover:text-white transition-colors"
                  >
                    {article.category}
                  </Link>
                  <span className="flex items-center gap-1.5">
                    <Calendar className="w-3.5 h-3.5 text-brand-purple" />
                    {article.date}
                  </span>
                  <span>•</span>
                  <span className="flex items-center gap-1.5">
                    <Clock className="w-3.5 h-3.5 text-brand-purple" />
                    {article.readTime}
                  </span>
                </div>

                <h1 className="text-2xl sm:text-3xl lg:text-[2.45rem] font-semibold text-brand-text tracking-tight leading-[1.2] mb-3.5">
                  {article.title}
                </h1>

                <p className="text-sm sm:text-base text-brand-muted leading-relaxed mb-5">
                  {article.summary}
                </p>

                {/* Author Row */}
                {article.author && (
                  <div className="flex items-center gap-3 pt-2 pb-1">
                    <div className="w-10 h-10 rounded-full bg-brand-purple-light border border-brand-purple/15 flex items-center justify-center text-brand-purple flex-shrink-0">
                      <User className="w-5 h-5" />
                    </div>
                    <div>
                      <div className="text-xs sm:text-sm font-semibold text-brand-text">
                        By {article.author}
                      </div>
                      <div className="text-[11px] text-brand-muted">
                        Mithi Tax Advisory Board
                      </div>
                    </div>
                  </div>
                )}
              </div>

              {/* Cover Image */}
              <div
                className="relative w-full aspect-[16/9] rounded-2xl overflow-hidden border border-slate-200/80 shadow-[0_6px_24px_rgba(23,21,45,0.05)] bg-slate-100"
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
                  sizes="(max-width: 1024px) 100vw, 850px"
                  className="object-cover"
                  style={{ objectFit: "cover" }}
                />
              </div>

              {/* Intro Paragraph */}
              <p className="text-sm sm:text-[0.975rem] text-brand-muted leading-relaxed">
                {article.content}{" "}
                When establishing or scaling an enterprise in India, statutory compliance is not merely an annual checkbox — it is the foundation of operational stability, bankability, and long-term business credibility.
              </p>

              {/* Section 1: Overview */}
              <div className="space-y-2.5">
                <h2 className="text-lg sm:text-xl font-semibold text-brand-text border-l-[3px] border-brand-lime pl-3">
                  Overview &amp; Regulatory Importance
                </h2>
                <p className="text-sm sm:text-[0.95rem] text-brand-muted leading-relaxed">
                  Businesses operating in India must align their registrations, periodic returns, and financial statements across the Ministry of Corporate Affairs (MCA), GST portal, and Income Tax Department. Maintaining organized records prevents reconciliation mismatches, preserves Input Tax Credit, and avoids compounding late penalties.
                </p>
              </div>

              {/* Section 2: Key Requirements Box */}
              <div className="space-y-3">
                <h2 className="text-lg sm:text-xl font-semibold text-brand-text border-l-[3px] border-brand-lime pl-3">
                  Who Needs This &amp; Key Requirements
                </h2>
                <p className="text-sm sm:text-[0.95rem] text-brand-muted leading-relaxed">
                  Compliance applies across multiple business structures and turnover scenarios:
                </p>
                <div className="rounded-2xl border border-slate-200/90 bg-white p-5 sm:p-6 space-y-3">
                  {eligibilityPoints.map((pt) => (
                    <div key={pt} className="flex items-start gap-2.5">
                      <CheckCircle2 className="w-4 h-4 text-brand-lime flex-shrink-0 mt-0.5" strokeWidth={2.4} />
                      <span className="text-xs sm:text-sm text-brand-text/90 leading-relaxed">
                        {pt}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Section 3: Documents & Information Needed */}
              <div className="space-y-3">
                <h2 className="text-lg sm:text-xl font-semibold text-brand-text border-l-[3px] border-brand-lime pl-3">
                  Documents &amp; Information Required
                </h2>
                <p className="text-sm sm:text-[0.95rem] text-brand-muted leading-relaxed">
                  Keep the following standard documents ready for smooth processing and verification:
                </p>
                <div className="rounded-2xl border border-slate-200/90 bg-white p-5 sm:p-6 grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                  {documentItems.map((doc) => (
                    <div key={doc} className="flex items-start gap-2.5">
                      <FileText className="w-4 h-4 text-brand-purple flex-shrink-0 mt-0.5" />
                      <span className="text-xs sm:text-sm text-brand-muted leading-snug">
                        {doc}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Section 4: Step-by-Step Process */}
              <div className="space-y-4">
                <h2 className="text-lg sm:text-xl font-semibold text-brand-text border-l-[3px] border-brand-lime pl-3">
                  Step-by-Step Execution Process
                </h2>
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 pt-1">
                  {processSteps.map((st, idx) => (
                    <div key={st.num} className="relative text-center px-2">
                      <div className="w-9 h-9 rounded-full bg-brand-purple-light border border-brand-purple/20 text-brand-purple text-xs font-bold flex items-center justify-center mx-auto mb-2.5">
                        {st.num}
                      </div>
                      {idx < processSteps.length - 1 && (
                        <ArrowRight className="hidden sm:block w-3.5 h-3.5 text-slate-300 absolute top-2.5 -right-2.5" />
                      )}
                      <h3 className="text-xs sm:text-sm font-semibold text-brand-text mb-1">
                        {st.title}
                      </h3>
                      <p className="text-[11px] sm:text-xs text-brand-muted leading-relaxed">
                        {st.desc}
                      </p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Section 5: Key Benefits */}
              <div className="space-y-3">
                <h2 className="text-lg sm:text-xl font-semibold text-brand-text border-l-[3px] border-brand-lime pl-3">
                  Key Benefits &amp; Advantages
                </h2>
                <div className="space-y-2.5">
                  {benefitsList.map((benefit) => (
                    <div key={benefit} className="flex items-start gap-2.5">
                      <CheckCircle2 className="w-4 h-4 text-brand-lime flex-shrink-0 mt-0.5" strokeWidth={2.4} />
                      <span className="text-xs sm:text-sm text-brand-muted leading-relaxed">
                        {benefit}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Section 6: Conclusion */}
              <div className="space-y-2.5">
                <h2 className="text-lg sm:text-xl font-semibold text-brand-text border-l-[3px] border-brand-lime pl-3">
                  Conclusion
                </h2>
                <p className="text-sm sm:text-[0.95rem] text-brand-muted leading-relaxed">
                  Staying proactive with your registrations, tax filings, and financial records builds lasting confidence for your business. If you need dependable guidance for {article.category.toLowerCase()}, our team at Mithi Tax is here to help at every step.
                </p>
              </div>

              {/* Bottom Soft CTA Banner */}
              <div className="rounded-2xl bg-gradient-to-r from-[#F5F1FD] to-[#FAF9FE] border border-brand-purple/15 p-5 sm:p-6 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
                <div className="flex items-start sm:items-center gap-3.5">
                  <div className="w-10 h-10 rounded-full bg-white border border-brand-purple/20 flex items-center justify-center text-brand-purple flex-shrink-0">
                    <MessageSquare className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="text-sm sm:text-base font-semibold text-brand-text">
                      Need Help with {article.category}?
                    </h3>
                    <p className="text-xs text-brand-muted mt-0.5">
                      Get expert guidance and end-to-end compliance support from Mithi Tax.
                    </p>
                  </div>
                </div>

                <Button
                  href="/contact"
                  variant="lime"
                  size="sm"
                  withArrow
                  className="px-5 py-2.5 rounded-full text-xs sm:text-sm font-semibold shadow-sm flex-shrink-0"
                >
                  Book a Free Consultation
                </Button>
              </div>
            </article>

            {/* Right Sticky Sidebar (Kept Expert Assistance + Free Online Tools, added Categories) */}
            <aside className="lg:col-span-4 lg:sticky lg:top-24 space-y-6">
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

              {/* Categories Card */}
              <div className="rounded-2xl bg-white border border-slate-200/90 shadow-[0_6px_24px_rgba(23,21,45,0.04)] p-6">
                <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-brand-purple mb-4">
                  <FolderOpen className="w-4 h-4" />
                  <span>Categories</span>
                </div>
                <div className="divide-y divide-slate-100">
                  {categoriesList.map((cat) => (
                    <Link
                      key={cat.slug}
                      href={`/insights/category/${cat.slug}`}
                      className="group flex items-center justify-between py-2.5 first:pt-0 last:pb-0 text-xs sm:text-sm hover:text-brand-purple transition-colors"
                    >
                      <div className="flex items-center gap-2.5">
                        <div className="w-7 h-7 rounded-lg bg-brand-purple-light/80 flex items-center justify-center text-brand-purple flex-shrink-0">
                          <Building2 className="w-3.5 h-3.5" />
                        </div>
                        <span className="font-medium text-brand-text group-hover:text-brand-purple transition-colors">
                          {cat.label}
                        </span>
                      </div>
                      <span className="text-xs font-semibold text-brand-muted">
                        {String(cat.count).padStart(2, "0")}
                      </span>
                    </Link>
                  ))}
                </div>
              </div>

              {/* Helpful Tools Card */}
              <div className="rounded-2xl bg-white border border-slate-200/90 shadow-[0_6px_24px_rgba(23,21,45,0.04)] p-6">
                <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-brand-purple mb-3">
                  <Calculator className="w-4 h-4" />
                  <span>Free Online Tools</span>
                </div>
                <div className="space-y-2.5">
                  <Link
                    href="/calculators/gst"
                    className="group flex items-center justify-between p-3 rounded-xl bg-[#FAF9FD] hover:bg-brand-purple-light/50 transition-colors"
                  >
                    <span className="text-xs sm:text-sm font-medium text-brand-text group-hover:text-brand-purple">
                      GST Calculator
                    </span>
                    <ArrowRight className="w-3.5 h-3.5 text-brand-purple" />
                  </Link>
                  <Link
                    href="/calculators/income-tax"
                    className="group flex items-center justify-between p-3 rounded-xl bg-[#FAF9FD] hover:bg-brand-purple-light/50 transition-colors"
                  >
                    <span className="text-xs sm:text-sm font-medium text-brand-text group-hover:text-brand-purple">
                      Income Tax Calculator
                    </span>
                    <ArrowRight className="w-3.5 h-3.5 text-brand-purple" />
                  </Link>
                  <Link
                    href="/calculators/tds"
                    className="group flex items-center justify-between p-3 rounded-xl bg-[#FAF9FD] hover:bg-brand-purple-light/50 transition-colors"
                  >
                    <span className="text-xs sm:text-sm font-medium text-brand-text group-hover:text-brand-purple">
                      TDS Calculator
                    </span>
                    <ArrowRight className="w-3.5 h-3.5 text-brand-purple" />
                  </Link>
                </div>
              </div>
            </aside>
          </div>
        </div>
      </section>

      {/* 3. Related Insights Grid (Matches Home InsightsSection cards, full max-w-content) */}
      {relatedArticles.length > 0 && (
        <section className="relative py-10 sm:py-14 bg-gradient-to-b from-[#F4F5FA] via-[#F7F8FC] to-white">
          <div
            className="absolute inset-x-0 top-0 h-14 sm:h-20 bg-gradient-to-b from-white to-transparent pointer-events-none"
            aria-hidden="true"
          />
          <div className="relative z-10 max-w-content mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-8">
              <div>
                <div className="mb-2">
                  <span className="text-xs font-semibold tracking-wider text-brand-purple uppercase">
                    KEEP READING
                  </span>
                  <div className="w-8 h-[2px] bg-brand-lime mt-1 rounded-full" />
                </div>
                <h2 className="text-xl sm:text-2xl font-semibold text-brand-text tracking-tight">
                  More Insights &amp; Compliance Guides
                </h2>
              </div>

              <Link
                href="/insights"
                className="inline-flex items-center gap-2 text-xs sm:text-sm font-semibold text-brand-purple group"
              >
                <span className="hover:underline">View All Insights</span>
                <span className="w-6 h-6 rounded-full bg-brand-lime text-brand-text flex items-center justify-center transition-transform group-hover:translate-x-0.5">
                  <ArrowRight className="w-3.5 h-3.5" strokeWidth={2.4} />
                </span>
              </Link>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
              {relatedArticles.map((rel) => (
                <article
                  key={rel.id}
                  className="group flex flex-col bg-white rounded-2xl border border-slate-200/90 overflow-hidden shadow-[0_4px_16px_rgba(23,21,45,0.03)] hover:shadow-[0_16px_36px_-6px_rgba(113,10,198,0.12),0_4px_12px_rgba(23,21,45,0.04)] hover:border-brand-purple/40 hover:-translate-y-1 transition-all duration-300"
                >
                  <Link
                    href={`/insights/${rel.slug}`}
                    className="relative w-full aspect-[16/10] overflow-hidden bg-slate-100 block"
                    style={{
                      position: "relative",
                      width: "100%",
                      aspectRatio: "16 / 10",
                      overflow: "hidden",
                    }}
                  >
                    <Image
                      src={rel.image}
                      alt={rel.title}
                      fill
                      sizes="(max-width: 768px) 100vw, 400px"
                      className="object-cover object-center transition-transform duration-500 group-hover:scale-105"
                      style={{ objectFit: "cover" }}
                    />
                  </Link>

                  <div className="p-6 flex flex-col flex-1 justify-between">
                    <div>
                      <div className="flex items-center justify-between text-xs text-brand-muted mb-3">
                        <span className="font-semibold text-brand-purple">
                          {rel.category}
                        </span>
                        <span className="flex items-center gap-1">
                          <Clock className="w-3.5 h-3.5" />
                          {rel.readTime}
                        </span>
                      </div>

                      <h3 className="text-lg font-semibold text-brand-text leading-snug group-hover:text-brand-purple transition-colors mb-2.5">
                        <Link href={`/insights/${rel.slug}`}>{rel.title}</Link>
                      </h3>

                      <p className="text-xs sm:text-sm text-brand-muted leading-relaxed line-clamp-3">
                        {rel.summary}
                      </p>
                    </div>

                    <div className="pt-4 mt-5 border-t border-slate-100/90 flex items-center justify-between">
                      <span className="text-[11px] text-brand-muted font-medium">
                        {rel.date}
                      </span>
                      <Link
                        href={`/insights/${rel.slug}`}
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
      )}
    </div>
  );
}
