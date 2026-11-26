import React from "react";
import Link from "next/link";
import { notFound } from "next/navigation";
import {
  Building2,
  FileSpreadsheet,
  ReceiptText,
  ShieldCheck,
  Scale,
  ArrowRight,
  CheckCircle2,
  MessageSquare,
  ChevronRight,
  Home,
} from "lucide-react";
import { serviceCategories, siteConfig } from "@/lib/constants";
import { categorySeoMap } from "@/lib/constants/service-seo";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

interface PageProps {
  params: Promise<{ slug: string }>;
}

const categoryIcons: Record<
  string,
  React.ComponentType<{ className?: string; strokeWidth?: number }>
> = {
  "business-setup": Building2,
  "accounting-records": FileSpreadsheet,
  "income-tax-records": ReceiptText,
  gst: ShieldCheck,
  "special-registrations": Scale,
};

export async function generateStaticParams() {
  return serviceCategories.map((cat) => ({
    slug: cat.slug,
  }));
}

export async function generateMetadata({ params }: PageProps) {
  const { slug } = await params;
  const category = serviceCategories.find((c) => c.slug === slug);
  if (!category) return { title: "Category Not Found" };

  const seo = categorySeoMap[category.slug];
  const baseUrl = siteConfig.url.replace(/\/$/, "");
  const canonicalUrl = `${baseUrl}/services/category/${category.slug}`;
  const title = seo?.metaTitle || `${category.title} Services | MithiTax`;
  const description = seo?.metaDescription || category.description;

  return {
    title,
    description,
    keywords: seo
      ? [seo.primaryKeyword, ...seo.secondaryKeywords]
      : undefined,
    alternates: {
      canonical: canonicalUrl,
    },
    openGraph: {
      title,
      description,
      url: canonicalUrl,
      siteName: siteConfig.name,
      type: "website",
    },
  };
}

export default async function ServiceCategoryPage({ params }: PageProps) {
  const { slug } = await params;
  const category = serviceCategories.find((c) => c.slug === slug);

  if (!category) {
    notFound();
  }

  const Icon = categoryIcons[category.id] || Building2;
  const seo = categorySeoMap[category.slug];
  const baseUrl = siteConfig.url.replace(/\/$/, "");
  const pageUrl = `${baseUrl}/services/category/${category.slug}`;

  const breadcrumbJsonLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: "Home",
        item: `${baseUrl}/`,
      },
      {
        "@type": "ListItem",
        position: 2,
        name: "Services",
        item: `${baseUrl}/services`,
      },
      {
        "@type": "ListItem",
        position: 3,
        name: category.title,
        item: pageUrl,
      },
    ],
  };

  return (
    <div className="bg-white">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }}
      />
      {/* 1. Hero Header Section */}
      <section className="relative overflow-hidden pt-8 pb-8 sm:pt-12 sm:pb-10 bg-white">
        <div className="absolute inset-0 pointer-events-none overflow-hidden">
          <div
            className="absolute top-0 left-1/2 -translate-x-1/2 w-[900px] h-[420px] pointer-events-none"
            style={{
              background:
                "radial-gradient(ellipse 65% 50% at 50% 15%, rgba(113, 10, 198, 0.08) 0%, rgba(180, 231, 23, 0.04) 40%, transparent 75%)",
            }}
            aria-hidden="true"
          />
          <svg
            className="absolute top-0 left-0 w-[340px] sm:w-[460px] lg:w-[580px] h-full pointer-events-none opacity-50 select-none"
            viewBox="0 0 640 820"
            fill="none"
            preserveAspectRatio="none"
            aria-hidden="true"
          >
            <defs>
              <linearGradient id="cat-left-grad" x1="0%" y1="0%" x2="100%" y2="80%">
                <stop offset="0%" stopColor="#710ac6" stopOpacity="0.16" />
                <stop offset="50%" stopColor="#8c1fe3" stopOpacity="0.08" />
                <stop offset="100%" stopColor="#FFFFFF" stopOpacity="0" />
              </linearGradient>
            </defs>
            <path
              d="M-50 -20 C 180 80, 360 220, 320 440 C 280 620, 110 740, -50 820 Z"
              fill="url(#cat-left-grad)"
            />
          </svg>
          <svg
            className="absolute top-0 right-0 w-[340px] sm:w-[460px] lg:w-[580px] h-full pointer-events-none opacity-50 select-none"
            viewBox="0 0 640 820"
            fill="none"
            preserveAspectRatio="none"
            aria-hidden="true"
          >
            <defs>
              <linearGradient id="cat-right-grad" x1="100%" y1="0%" x2="0%" y2="90%">
                <stop offset="0%" stopColor="#B4E717" stopOpacity="0.2" />
                <stop offset="50%" stopColor="#ccf24b" stopOpacity="0.08" />
                <stop offset="100%" stopColor="#FFFFFF" stopOpacity="0" />
              </linearGradient>
            </defs>
            <path
              d="M690 -30 C 470 80, 290 240, 340 460 C 390 640, 550 740, 690 820 Z"
              fill="url(#cat-right-grad)"
            />
          </svg>
        </div>

        <div className="relative z-10 max-w-content mx-auto px-4 sm:px-6 lg:px-8">
          <nav
            aria-label="Breadcrumb"
            className="flex items-center justify-center gap-1.5 text-xs text-brand-muted mb-5"
          >
            <Link href="/" className="inline-flex items-center gap-1 hover:text-brand-purple transition-colors">
              <Home className="w-3.5 h-3.5" />
              <span>Home</span>
            </Link>
            <ChevronRight className="w-3.5 h-3.5 text-slate-400" />
            <Link href="/services" className="hover:text-brand-purple transition-colors">
              Services
            </Link>
            <ChevronRight className="w-3.5 h-3.5 text-slate-400" />
            <span className="font-medium text-brand-text">{category.title}</span>
          </nav>

          <div className="max-w-3xl mx-auto text-center">
            <div className="inline-flex flex-col items-center mb-3">
              <span className="text-xs font-semibold tracking-wider text-brand-purple uppercase">
                SERVICE CATEGORY
              </span>
              <div className="w-8 h-[2px] bg-brand-lime mt-1.5 rounded-full" />
            </div>

            <h1 className="text-3xl sm:text-4xl lg:text-[3rem] font-semibold tracking-tight text-brand-text leading-[1.2] mb-4">
              {category.title}
            </h1>

            <p className="text-sm sm:text-base text-brand-muted leading-relaxed max-w-2xl mx-auto">
              {seo?.metaDescription || category.description}
            </p>
          </div>
        </div>
      </section>

      {/* 2. Category Switcher & Services Grid */}
      <section className="relative py-8 sm:py-12 bg-gradient-to-b from-[#F4F5FA] via-[#F7F8FC] to-white">
        <div
          className="absolute inset-x-0 top-0 h-12 sm:h-16 bg-gradient-to-b from-white to-transparent pointer-events-none"
          aria-hidden="true"
        />

        <div className="relative z-10 max-w-content mx-auto px-4 sm:px-6 lg:px-8">
          {/* Single-Row Category Navigation Pills */}
          <div className="pb-6 mb-10 border-b border-slate-200/80">
            <div className="flex items-center justify-start xl:justify-center gap-2 overflow-x-auto no-scrollbar [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none] -mx-4 px-4 pb-1 sm:mx-0 sm:px-0">
              <Link
                href="/services"
                className="px-4 py-2 rounded-full text-xs sm:text-sm font-medium whitespace-nowrap flex-shrink-0 bg-white border border-slate-200/90 text-brand-muted hover:border-brand-purple/40 hover:text-brand-purple transition-all duration-200"
              >
                All Services
              </Link>
              {serviceCategories.map((cat) => {
                const isActive = cat.slug === slug;
                return (
                  <Link
                    key={cat.id}
                    href={`/services/category/${cat.slug}`}
                    className={cn(
                      "px-4 py-2 rounded-full text-xs sm:text-sm font-medium whitespace-nowrap flex-shrink-0 transition-all duration-200",
                      isActive
                        ? "bg-brand-purple text-white shadow-[0_4px_12px_rgba(113,10,198,0.22)]"
                        : "bg-white border border-slate-200/90 text-brand-muted hover:border-brand-purple/40 hover:text-brand-purple"
                    )}
                  >
                    {cat.title}
                  </Link>
                );
              })}
            </div>
          </div>

          {/* 3-Column Service Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 lg:gap-6">
            {category.services.map((service) => (
              <Link
                key={service.slug}
                href={`/services/${service.slug}`}
                className="group flex flex-col justify-between p-6 bg-white rounded-2xl border border-slate-200/90 shadow-[0_4px_16px_rgba(23,21,45,0.03)] hover:border-brand-purple/40 hover:shadow-[0_16px_36px_-6px_rgba(113,10,198,0.12),0_4px_12px_rgba(23,21,45,0.04)] hover:-translate-y-1 transition-all duration-300"
              >
                <div>
                  <div className="flex items-center justify-between gap-2 mb-4">
                    <div className="w-10 h-10 rounded-xl bg-brand-purple-light/80 border border-brand-purple/15 flex items-center justify-center text-brand-purple group-hover:bg-brand-purple group-hover:text-white transition-all duration-300 flex-shrink-0">
                      <Icon className="w-5 h-5" strokeWidth={1.8} />
                    </div>
                    <span className="px-2.5 py-0.5 rounded-full bg-slate-100 text-[11px] font-medium text-brand-muted">
                      {category.title}
                    </span>
                  </div>

                  <h2 className="text-base sm:text-[1.08rem] font-semibold text-brand-text group-hover:text-brand-purple transition-colors leading-snug mb-2">
                    {service.title}
                  </h2>

                  {service.description && (
                    <p className="text-xs sm:text-sm text-brand-muted leading-relaxed mb-4 line-clamp-2">
                      {service.description}
                    </p>
                  )}

                  {service.deliverables && service.deliverables.length > 0 && (
                    <ul className="space-y-1.5 pt-3 border-t border-slate-100">
                      {service.deliverables.slice(0, 2).map((item) => (
                        <li
                          key={item}
                          className="flex items-center gap-2 text-xs text-brand-muted"
                        >
                          <CheckCircle2 className="w-3.5 h-3.5 text-brand-purple flex-shrink-0" />
                          <span className="truncate">{item}</span>
                        </li>
                      ))}
                    </ul>
                  )}
                </div>

                <div className="mt-5 pt-4 border-t border-slate-100 flex items-center justify-between">
                  <span className="text-xs font-semibold text-brand-purple">
                    Explore service
                  </span>
                  <span className="w-6 h-6 rounded-full bg-brand-lime/30 text-brand-text flex items-center justify-center transition-all duration-300 group-hover:bg-brand-lime group-hover:translate-x-0.5">
                    <ArrowRight className="w-3.5 h-3.5" strokeWidth={2.2} />
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* 3. Consultation CTA Banner */}
      <section className="py-10 sm:py-14 bg-white">
        <div className="max-w-content mx-auto px-4 sm:px-6 lg:px-8">
          <div className="rounded-2xl bg-gradient-to-r from-[#F5F1FD] to-[#FAF9FE] border border-brand-purple/15 p-6 sm:p-8 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-5">
            <div className="flex items-start sm:items-center gap-4">
              <div className="w-11 h-11 rounded-full bg-white border border-brand-purple/20 flex items-center justify-center text-brand-purple flex-shrink-0">
                <MessageSquare className="w-5 h-5" />
              </div>
              <div>
                <h3 className="text-lg sm:text-xl font-semibold text-brand-text">
                  Need assistance with {category.title}?
                </h3>
                <p className="text-xs sm:text-sm text-brand-muted mt-1">
                  Speak with our team for clear guidance, transparent pricing, and end-to-end compliance support.
                </p>
              </div>
            </div>

            <Button
              href="/contact"
              variant="lime"
              size="md"
              withArrow
              className="px-6 py-3 rounded-full text-sm font-semibold shadow-sm flex-shrink-0"
            >
              Book Free Consultation
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
