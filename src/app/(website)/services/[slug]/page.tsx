import React from "react";
import Link from "next/link";
import { notFound } from "next/navigation";
import {
  CheckCircle2,
  Clock,
  ShieldCheck,
  ArrowRight,
  FileText,
  Phone,
  Building2,
  FileSpreadsheet,
  ReceiptText,
  Scale,
  BadgeCheck,
  ChevronRight,
  Home,
  MapPin,
  Award,
} from "lucide-react";
import { serviceCategories, siteConfig } from "@/lib/constants";
import { serviceSeoMap, BUSINESS_ADDRESS } from "@/lib/constants/service-seo";
import { Button } from "@/components/ui/button";
import ServiceBookingForm from "@/components/website/services/ServiceBookingForm";
import CalculatorFaqAccordion from "@/components/website/calculators/CalculatorFaqAccordion";

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

const categoryContextMap: Record<
  string,
  {
    eligibility: string[];
    documents: string[];
    benefits: string[];
  }
> = {
  "business-setup": {
    eligibility: [
      "Entrepreneurs, startups, and founders launching a new commercial or non-profit venture in India.",
      "Existing sole proprietors or partnerships upgrading to a corporate or limited liability structure.",
      "Founders seeking separate legal entity status, limited liability protection, and bankability.",
    ],
    documents: [
      "PAN Card & Aadhaar Card of all Directors / Partners",
      "Passport-size Photographs & Valid Email / Mobile Number",
      "Registered Office Address Proof (Electricity / Water Bill)",
      "Rent Agreement & Owner NOC (if premises are rented)",
      "Bank Statement / Utility Bill for Address Verification",
      "Proposed Business Name Options & Main Object Details",
    ],
    benefits: [
      "Full legal recognition under the Ministry of Corporate Affairs (MCA) or state authorities.",
      "Faster opening of current bank accounts, vendor onboarding, and investor readiness.",
      "End-to-end handling of DSC, DIN, name reservation, and statutory certificates.",
    ],
  },
  "accounting-records": {
    eligibility: [
      "Startups, SMEs, traders, and growing enterprises needing organized financial books.",
      "Businesses preparing monthly MIS reports, payroll schedules, or bank loan projections.",
      "Entities seeking audit-ready balance sheets, P&L statements, and statutory compliance.",
    ],
    documents: [
      "Monthly Bank Statements (Current & Savings Business Accounts)",
      "Sales Invoices, Purchase Bills & Expense Vouchers",
      "Employee Salary & Attendance Records (for Payroll Services)",
      "Previous Year Financial Statements / Trial Balance",
      "GST & TDS Return Summaries for Reconciliation",
      "Loan Sanction Letters & Asset Schedules (if applicable)",
    ],
    benefits: [
      "Accurate, up-to-date books that simplify GST, TDS, and Income Tax filings.",
      "Clear cash flow visibility, cost control, and investor/bank-ready financial reports.",
      "Reduced risk of audit discrepancies, statutory notices, and late compliance penalties.",
    ],
  },
  "income-tax-records": {
    eligibility: [
      "Salaried individuals, freelancers, proprietors, partnerships, LLPs, and companies.",
      "Businesses deducting or collecting TDS/TCS on vendor payments, rent, or salaries.",
      "Taxpayers needing capital gains valuation, PAN/TAN applications, or assessment support.",
    ],
    documents: [
      "PAN Card, Aadhaar Card & Registered Income Tax Portal Credentials",
      "Form 16 / 16A, Form 26AS & AIS / TIS Statements",
      "Bank Statements & Interest Certificates for the Financial Year",
      "Investment & Deduction Proofs (80C, 80D, HRA, Home Loan)",
      "Business Profit & Loss Account and Balance Sheet (if applicable)",
      "TDS Challans & Deductee PAN Details (for TDS/TCS Filings)",
    ],
    benefits: [
      "Accurate tax computation ensuring all eligible exemptions and deductions are claimed.",
      "Timely quarterly TDS/TCS and annual ITR filings with zero late fees.",
      "Seamless reconciliation between AIS, Form 26AS, and financial statements.",
    ],
  },
  gst: {
    eligibility: [
      "Businesses exceeding statutory GST turnover thresholds or selling across state borders.",
      "E-commerce sellers, wholesalers, service providers, and B2B suppliers.",
      "Registered GST taxpayers requiring monthly/quarterly returns, ITC reconciliation, or E-Way Bills.",
    ],
    documents: [
      "PAN Card & Aadhaar Card of Proprietor / Partners / Directors",
      "Business Registration Proof (Incorporation Certificate / Partnership Deed)",
      "Principal Place of Business Proof (Electricity Bill + Rent Agreement / NOC)",
      "Cancelled Cheque or Front Page of Business Bank Passbook",
      "Monthly Sales & Purchase Registers (for Return Filings & ITC Matching)",
      "GSTR-2B & E-Way Bill Transport Details (where applicable)",
    ],
    benefits: [
      "Smooth GSTIN registration and uninterrupted Input Tax Credit (ITC) claims.",
      "Error-free GSTR-1, GSTR-3B, and annual return filings ahead of deadlines.",
      "Proactive reconciliation to prevent GST notices and blocked e-way bill generation.",
    ],
  },
  "special-registrations": {
    eligibility: [
      "Businesses requiring food (FSSAI), MSME Udyam, Trademark, RERA, PF/ESI, or GeM registration.",
      "Companies needing ROC/MCA annual filings, director changes, or legal agreement drafting.",
      "Founders and authorized signatories requiring Class 3 Digital Signature Certificates (DSC).",
    ],
    documents: [
      "PAN Card & Aadhaar Card of Applicant / Authorized Signatory",
      "Business Entity Proof & Address Proof (Utility Bill / Rent Agreement)",
      "Brand Logo / Wordmark Details (for Trademark Applications)",
      "Product / Food Category List & Premises Layout (for FSSAI)",
      "Existing Registration Certificates & Bank Account Details",
      "Board Resolution / Authorization Letter (for Companies & LLPs)",
    ],
    benefits: [
      "Protects your brand identity, intellectual property, and regulatory standing.",
      "Unlocks government MSME subsidies, GeM portal tenders, and marketplace onboarding.",
      "Single-window assistance from documentation drafting to certificate delivery.",
    ],
  },
};

export async function generateStaticParams() {
  const params: { slug: string }[] = [];
  serviceCategories.forEach((cat) => {
    cat.services.forEach((s) => {
      params.push({ slug: s.slug });
    });
  });
  return params;
}

export async function generateMetadata({ params }: PageProps) {
  const { slug } = await params;
  let serviceFound;
  for (const cat of serviceCategories) {
    const s = cat.services.find((item) => item.slug === slug);
    if (s) {
      serviceFound = s;
      break;
    }
  }
  if (!serviceFound) return { title: "Service Not Found" };

  const seo = serviceSeoMap[serviceFound.slug];
  const baseUrl = siteConfig.url.replace(/\/$/, "");
  const canonicalUrl = `${baseUrl}/services/${serviceFound.slug}`;
  const title = seo?.metaTitle || `${serviceFound.title} | MithiTax`;
  const description = seo?.metaDescription || serviceFound.description;

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

export default async function ServiceDetailPage({ params }: PageProps) {
  const { slug } = await params;
  let service;
  let category;

  for (const cat of serviceCategories) {
    const s = cat.services.find((item) => item.slug === slug);
    if (s) {
      service = s;
      category = cat;
      break;
    }
  }

  if (!service || !category) {
    notFound();
  }

  const Icon = categoryIcons[category.id] || Building2;
  const seo = serviceSeoMap[service.slug];
  const displayH1 = seo?.h1 || service.title;
  const baseUrl = siteConfig.url.replace(/\/$/, "");
  const serviceUrl = `${baseUrl}/services/${service.slug}`;

  const structuredData = [
    {
      "@context": "https://schema.org",
      "@type": "Service",
      name: displayH1,
      description: seo?.metaDescription || service.description,
      serviceType: service.title,
      url: serviceUrl,
      provider: {
        "@type": "LocalBusiness",
        name: siteConfig.name,
        url: baseUrl,
        telephone: siteConfig.phone,
        email: siteConfig.email,
        address: {
          "@type": "PostalAddress",
          streetAddress: "Bishoul, Tatuar, Manigachhi",
          addressLocality: "Darbhanga",
          addressRegion: "Bihar",
          postalCode: "847422",
          addressCountry: "IN",
        },
      },
      areaServed: [
        { "@type": "City", name: "Darbhanga" },
        { "@type": "State", name: "Bihar" },
        { "@type": "Country", name: "India" },
      ],
    },
    {
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Home", item: `${baseUrl}/` },
        { "@type": "ListItem", position: 2, name: "Services", item: `${baseUrl}/services` },
        {
          "@type": "ListItem",
          position: 3,
          name: category.title,
          item: `${baseUrl}/services/category/${category.slug}`,
        },
        { "@type": "ListItem", position: 4, name: service.title, item: serviceUrl },
      ],
    },
  ];
  const contextInfo =
    categoryContextMap[category.id] || categoryContextMap["business-setup"];
  const relatedServices = category.services
    .filter((s) => s.slug !== service.slug)
    .slice(0, 3);

  const processSteps = [
    {
      step: "01",
      title: "Submit Enquiry",
      desc: `Fill out the ${service.title} booking form with your basic contact and business details.`,
    },
    {
      step: "02",
      title: "Document Checklist",
      desc: "Our specialist reviews your requirements and shares a clear, customized document checklist.",
    },
    {
      step: "03",
      title: "Drafting & Filing",
      desc: "We verify your documents, prepare all statutory forms, and submit your application accurately.",
    },
    {
      step: "04",
      title: "Delivery & Support",
      desc: "Receive your registration certificates or filed acknowledgements along with ongoing compliance guidance.",
    },
  ];

  const serviceFaqs = [
    {
      question: `How long does ${service.title} typically take?`,
      answer: service.timelineDays
        ? `${service.title} generally takes around ${service.timelineDays} working days once all required KYC documents and details are verified, subject to government portal processing timelines.`
        : `Timelines depend on document readiness and government authority processing. Our team keeps you updated at every step for fast turnaround.`,
    },
    {
      question: `Is the ${service.title} process 100% online?`,
      answer:
        "Yes. You can share documents securely online from anywhere in India, or visit our Darbhanga office if you prefer an in-person consultation.",
    },
    {
      question: `What documents do I need to get started with ${service.title}?`,
      answer:
        "Basic KYC documents such as PAN, Aadhaar, business address proof, and relevant entity or financial records are typically required. Once you submit the booking form, our team shares the exact checklist for your case.",
    },
    {
      question: "Will Mithi Tax assist with post-service compliance as well?",
      answer:
        "Yes. Beyond completing your initial service, we help manage ongoing monthly, quarterly, and annual GST, TDS, accounting, and statutory filings.",
    },
  ];

  return (
    <div className="bg-white">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />
      {/* 1. Split Hero Section with Embedded Booking Form */}
      <section className="relative overflow-hidden pt-8 pb-12 sm:pt-12 sm:pb-16 bg-white">
        <div className="absolute inset-0 pointer-events-none overflow-hidden">
          <div
            className="absolute top-0 left-1/2 -translate-x-1/2 w-[900px] h-[480px] pointer-events-none"
            style={{
              background:
                "radial-gradient(ellipse 65% 50% at 50% 15%, rgba(113, 10, 198, 0.08) 0%, rgba(180, 231, 23, 0.04) 40%, transparent 75%)",
            }}
            aria-hidden="true"
          />
          <svg
            className="absolute top-0 left-0 w-[340px] sm:w-[460px] h-full pointer-events-none opacity-45 select-none"
            viewBox="0 0 640 820"
            fill="none"
            preserveAspectRatio="none"
            aria-hidden="true"
          >
            <defs>
              <linearGradient id="srv-detail-grad" x1="0%" y1="0%" x2="100%" y2="80%">
                <stop offset="0%" stopColor="#710ac6" stopOpacity="0.16" />
                <stop offset="50%" stopColor="#8c1fe3" stopOpacity="0.08" />
                <stop offset="100%" stopColor="#FFFFFF" stopOpacity="0" />
              </linearGradient>
            </defs>
            <path
              d="M-50 -20 C 180 80, 360 220, 320 440 C 280 620, 110 740, -50 820 Z"
              fill="url(#srv-detail-grad)"
            />
          </svg>
        </div>

        <div className="relative z-10 max-w-content mx-auto px-4 sm:px-6 lg:px-8">
          <nav
            aria-label="Breadcrumb"
            className="flex flex-wrap items-center gap-1.5 text-xs text-brand-muted mb-6"
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
            <Link
              href={`/services/category/${category.slug}`}
              className="hover:text-brand-purple transition-colors"
            >
              {category.title}
            </Link>
            <ChevronRight className="w-3.5 h-3.5 text-slate-400" />
            <span className="font-medium text-brand-text">{service.title}</span>
          </nav>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-start">
            {/* Left: Service Overview & Trust Highlights */}
            <div className="lg:col-span-7 pt-2">
              <Link
                href={`/services/category/${category.slug}`}
                className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-brand-purple-light text-brand-purple text-xs font-semibold hover:bg-brand-purple hover:text-white transition-colors mb-5"
              >
                <Icon className="w-3.5 h-3.5" />
                <span>{category.title}</span>
              </Link>

              <h1 className="text-3xl sm:text-4xl lg:text-[2.9rem] font-semibold text-brand-text tracking-tight leading-[1.18] lg:leading-[3rem] mb-5">
                {displayH1}
              </h1>

              <p className="text-base sm:text-lg text-slate-600 leading-relaxed font-normal mb-7 max-w-2xl">
                {seo?.metaDescription || service.description} Serving individuals, startups, and growing businesses across Darbhanga, Bihar, and Pan-India with accurate documentation and timely compliance support.
              </p>

              {/* Key Service Badges */}
              <div className="flex flex-wrap gap-3 mb-8">
                {service.timelineDays && (
                  <div className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-[#FAF9FD] border border-slate-200/80 text-xs sm:text-sm font-medium text-brand-text">
                    <Clock className="w-4 h-4 text-brand-purple" />
                    <span>Est. Timeline: {service.timelineDays} Working Days</span>
                  </div>
                )}
                <div className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-[#FAF9FD] border border-slate-200/80 text-xs sm:text-sm font-medium text-brand-text">
                  <ShieldCheck className="w-4 h-4 text-brand-purple" />
                  <span>100% Online &amp; Compliant</span>
                </div>
                <div className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-[#FAF9FD] border border-slate-200/80 text-xs sm:text-sm font-medium text-brand-text">
                  <BadgeCheck className="w-4 h-4 text-brand-purple" />
                  <span>Dedicated Expert Support</span>
                </div>
              </div>

              {/* Quick Deliverables Preview */}
              {service.deliverables && service.deliverables.length > 0 && (
                <div className="p-5 sm:p-6 rounded-2xl bg-[#FAF9FD] border border-slate-200/80 mb-7">
                  <div className="text-xs font-semibold uppercase tracking-wider text-brand-purple mb-3">
                    Key Highlights
                  </div>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                    {service.deliverables.slice(0, 4).map((item) => (
                      <div key={item} className="flex items-start gap-2 text-xs sm:text-sm text-brand-text">
                        <CheckCircle2 className="w-4 h-4 text-brand-lime flex-shrink-0 mt-0.5" strokeWidth={2.4} />
                        <span>{item}</span>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* Direct Call CTA */}
              <div className="flex flex-wrap items-center gap-4">
                <Button
                  href={`tel:${siteConfig.phone.replace(/\s+/g, "")}`}
                  variant="secondary"
                  size="lg"
                  className="px-6 py-3 rounded-full text-sm font-semibold bg-white border border-slate-200/90 shadow-xs hover:border-brand-purple/40 hover:text-brand-purple"
                >
                  <Phone className="w-4 h-4 text-brand-purple" />
                  <span>Call {siteConfig.phone}</span>
                </Button>
                <a
                  href="#service-details"
                  className="inline-flex items-center gap-1.5 text-sm font-semibold text-brand-purple hover:underline"
                >
                  <span>View Complete Details</span>
                  <ArrowRight className="w-4 h-4" />
                </a>
              </div>
            </div>

            {/* Right: Service Booking Form */}
            <div className="lg:col-span-5">
              <ServiceBookingForm serviceTitle={service.title} />
            </div>
          </div>
        </div>
      </section>

      {/* 2. Included Statutory Deliverables */}
      {service.deliverables && service.deliverables.length > 0 && (
        <section
          id="service-details"
          className="relative py-10 sm:py-14 bg-gradient-to-b from-[#F4F5FA] via-[#F7F8FC] to-white"
        >
          <div
            className="absolute inset-x-0 top-0 h-14 sm:h-20 bg-gradient-to-b from-white to-transparent pointer-events-none"
            aria-hidden="true"
          />
          <div className="relative z-10 max-w-content mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-2xl mb-8">
              <div className="mb-2.5">
                <span className="text-xs font-semibold tracking-wider text-brand-purple uppercase">
                  WHAT&apos;S INCLUDED
                </span>
                <div className="w-8 h-[2px] bg-brand-lime mt-1.5 rounded-full" />
              </div>
              <h2 className="text-xl sm:text-2xl md:text-3xl font-semibold text-brand-text tracking-tight">
                Deliverables Covered in {service.title}
              </h2>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 lg:gap-5">
              {service.deliverables.map((item) => (
                <div
                  key={item}
                  className="p-5 rounded-2xl bg-white border border-slate-200/90 shadow-[0_4px_16px_rgba(23,21,45,0.03)] flex items-start gap-3.5"
                >
                  <div className="w-9 h-9 rounded-xl bg-brand-purple-light/80 border border-brand-purple/15 flex items-center justify-center text-brand-purple flex-shrink-0">
                    <CheckCircle2 className="w-4 h-4" strokeWidth={2} />
                  </div>
                  <span className="text-sm font-semibold text-brand-text leading-snug pt-1.5">
                    {item}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* 3. Complete Information: Overview, Eligibility, Benefits & Documents Required */}
      <section className="py-10 sm:py-14 bg-white">
        <div className="max-w-content mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
            {/* Left: Overview, Eligibility & Benefits */}
            <div className="lg:col-span-6 space-y-8">
              <div>
                <h2 className="text-lg sm:text-xl font-semibold text-brand-text border-l-[3px] border-brand-lime pl-3 mb-3">
                  Who Should Opt for {service.title}?
                </h2>
                <div className="space-y-2.5">
                  {contextInfo.eligibility.map((pt) => (
                    <div key={pt} className="flex items-start gap-2.5">
                      <CheckCircle2 className="w-4 h-4 text-brand-purple flex-shrink-0 mt-0.5" />
                      <span className="text-xs sm:text-sm text-brand-muted leading-relaxed">
                        {pt}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              <div>
                <h2 className="text-lg sm:text-xl font-semibold text-brand-text border-l-[3px] border-brand-lime pl-3 mb-3">
                  Key Benefits &amp; Compliance Advantages
                </h2>
                <div className="space-y-2.5">
                  {contextInfo.benefits.map((b) => (
                    <div key={b} className="flex items-start gap-2.5">
                      <CheckCircle2 className="w-4 h-4 text-brand-lime flex-shrink-0 mt-0.5" strokeWidth={2.4} />
                      <span className="text-xs sm:text-sm text-brand-muted leading-relaxed">
                        {b}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Right: Documents Required Card */}
            <div className="lg:col-span-6 p-6 sm:p-8 rounded-3xl bg-gradient-to-b from-white to-[#FAF9FD] border border-slate-200/90 shadow-[0_6px_24px_rgba(23,21,45,0.04)]">
              <h2 className="text-lg sm:text-xl font-semibold text-brand-text border-l-[3px] border-brand-lime pl-3 mb-2">
                Documents &amp; Information Required
              </h2>
              <p className="text-xs sm:text-sm text-brand-muted mb-5">
                Keep these standard documents ready for quick verification and filing:
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                {contextInfo.documents.map((doc) => (
                  <div
                    key={doc}
                    className="p-3.5 rounded-xl bg-white border border-slate-200/80 flex items-start gap-2.5"
                  >
                    <FileText className="w-4 h-4 text-brand-purple flex-shrink-0 mt-0.5" />
                    <span className="text-xs text-brand-text leading-snug font-medium">
                      {doc}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 4. 4-Step Execution Process */}
      <section className="relative py-10 sm:py-14 bg-gradient-to-b from-[#F4F5FA] via-[#F7F8FC] to-white">
        <div
          className="absolute inset-x-0 top-0 h-14 sm:h-20 bg-gradient-to-b from-white to-transparent pointer-events-none"
          aria-hidden="true"
        />
        <div className="relative z-10 max-w-content mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-10">
            <div className="inline-flex flex-col items-center mb-3">
              <span className="text-xs font-semibold tracking-wider text-brand-purple uppercase">
                HOW IT WORKS
              </span>
              <div className="w-8 h-[2px] bg-brand-lime mt-1.5 rounded-full" />
            </div>
            <h2 className="text-xl sm:text-2xl md:text-3xl font-semibold text-brand-text tracking-tight mb-2">
              Simple 4-Step Process
            </h2>
            <p className="text-xs sm:text-sm text-brand-muted">
              From booking to final completion, our specialists handle every step seamlessly.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {processSteps.map((st) => (
              <div
                key={st.step}
                className="p-6 rounded-2xl bg-white border border-slate-200/90 shadow-[0_4px_16px_rgba(23,21,45,0.03)]"
              >
                <span className="inline-flex items-center px-3 py-1 rounded-lg bg-brand-purple-light text-brand-purple text-xs font-bold mb-4">
                  STEP {st.step}
                </span>
                <h3 className="text-base font-semibold text-brand-text mb-2">
                  {st.title}
                </h3>
                <p className="text-xs sm:text-sm text-brand-muted leading-relaxed">
                  {st.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 4B. Why Choose MithiTax & Service Availability in Darbhanga & Bihar */}
      <section className="py-10 sm:py-14 bg-white">
        <div className="max-w-content mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-8">
            <div className="p-6 sm:p-8 rounded-3xl bg-[#FAF9FD] border border-slate-200/80">
              <div className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-brand-purple mb-3">
                <Award className="w-4 h-4" />
                <span>WHY CHOOSE MITHITAX</span>
              </div>
              <h2 className="text-xl sm:text-2xl font-semibold text-brand-text mb-3">
                Why Choose MithiTax for {service.title}?
              </h2>
              <p className="text-xs sm:text-sm text-brand-muted leading-relaxed mb-4">
                Our team combines practical regulatory expertise with clear communication so your {seo?.primaryKeyword || service.title} requirements are handled accurately from start to finish.
              </p>
              <ul className="space-y-2.5 text-xs sm:text-sm text-brand-text">
                <li className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-brand-purple flex-shrink-0 mt-0.5" />
                  <span>Dedicated tax &amp; compliance specialists for every filing</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-brand-purple flex-shrink-0 mt-0.5" />
                  <span>Thorough document verification to avoid portal rejections</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-brand-purple flex-shrink-0 mt-0.5" />
                  <span>100% confidential handling of financial and KYC records</span>
                </li>
              </ul>
            </div>

            <div className="p-6 sm:p-8 rounded-3xl bg-[#FAF9FD] border border-slate-200/80">
              <div className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-brand-purple mb-3">
                <MapPin className="w-4 h-4" />
                <span>LOCAL &amp; PAN-INDIA SUPPORT</span>
              </div>
              <h2 className="text-xl sm:text-2xl font-semibold text-brand-text mb-3">
                {service.title} in Darbhanga, Bihar &amp; Across India
              </h2>
              <p className="text-xs sm:text-sm text-brand-muted leading-relaxed mb-4">
                MithiTax serves businesses and individuals both online across India and in person from our office in Darbhanga, Bihar. Whether you are starting a new venture or managing ongoing statutory filings, our team provides prompt remote and local assistance.
              </p>
              <div className="p-4 rounded-2xl bg-white border border-slate-200/80 text-xs text-brand-text space-y-1.5">
                <div className="font-semibold text-brand-purple">Office Address</div>
                <div className="text-brand-muted">{BUSINESS_ADDRESS}</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 5. Home-Style Interactive FAQ Accordion */}
      <CalculatorFaqAccordion
        faqs={serviceFaqs}
        subtitle={`Common questions about ${service.title}, timelines, documentation, and compliance support.`}
      />

      {/* 6. Related Services in Same Category */}
      {relatedServices.length > 0 && (
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
                    MORE IN {category.title}
                  </span>
                  <div className="w-8 h-[2px] bg-brand-lime mt-1 rounded-full" />
                </div>
                <h2 className="text-xl sm:text-2xl font-semibold text-brand-text tracking-tight">
                  Related Services
                </h2>
              </div>

              <Link
                href={`/services/category/${category.slug}`}
                className="inline-flex items-center gap-2 text-xs sm:text-sm font-semibold text-brand-purple group"
              >
                <span className="hover:underline">View All in {category.title}</span>
                <span className="w-6 h-6 rounded-full bg-brand-lime text-brand-text flex items-center justify-center transition-transform group-hover:translate-x-0.5">
                  <ArrowRight className="w-3.5 h-3.5" strokeWidth={2.4} />
                </span>
              </Link>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-5 lg:gap-6">
              {relatedServices.map((rel) => (
                <Link
                  key={rel.slug}
                  href={`/services/${rel.slug}`}
                  className="group flex flex-col justify-between p-6 bg-white rounded-2xl border border-slate-200/90 shadow-[0_4px_16px_rgba(23,21,45,0.03)] hover:border-brand-purple/40 hover:shadow-[0_16px_36px_-6px_rgba(113,10,198,0.12)] hover:-translate-y-1 transition-all duration-300"
                >
                  <div>
                    <div className="w-10 h-10 rounded-xl bg-brand-purple-light/80 border border-brand-purple/15 flex items-center justify-center text-brand-purple mb-4 group-hover:bg-brand-purple group-hover:text-white transition-all duration-300">
                      <Icon className="w-5 h-5" strokeWidth={1.8} />
                    </div>
                    <h3 className="text-base sm:text-lg font-semibold text-brand-text group-hover:text-brand-purple transition-colors mb-2">
                      {rel.title}
                    </h3>
                    {rel.description && (
                      <p className="text-xs sm:text-sm text-brand-muted leading-relaxed line-clamp-2">
                        {rel.description}
                      </p>
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
      )}
    </div>
  );
}
