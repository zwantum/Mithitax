import React from "react";
import Image from "next/image";
import Link from "next/link";
import {
  ShieldCheck,
  FileCheck,
  BadgeCheck,
  Clock,
  Lock,
  GraduationCap,
  Headphones,
  BadgePercent,
  Award,
  Building2,
  FileSpreadsheet,
  ReceiptText,
  Calculator,
  ArrowRight,
  Target,
  Compass,
  CalendarDays,
  Users,
  Layers,
  CheckCircle2,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import ConsultationSection from "@/components/website/home/ConsultationSection";

export const metadata = {
  title: "About Us | Mithi Tax — Tax, Accounting & Legal Compliance",
  description:
    "Learn about Mithi Tax — our team of tax consultants, accounting specialists, and business registration advisors helping entrepreneurs and businesses across Darbhanga, Bihar and India.",
};

const highlights = [
  {
    icon: ShieldCheck,
    title: "Experienced Professionals",
    description:
      "Professional guidance for business registration, taxation, accounting and compliance requirements.",
  },
  {
    icon: FileCheck,
    title: "End-to-End Business Solutions",
    description:
      "From business incorporation to annual compliance, access multiple essential services under one roof.",
  },
  {
    icon: BadgeCheck,
    title: "Client-Focused Approach",
    description:
      "Clear communication, personalized assistance and solutions based on your business requirements.",
  },
];

const processSteps = [
  {
    step: "01",
    title: "Share Your Requirement",
    description:
      "Connect with our team online, by phone, or at our Darbhanga office to discuss your business or tax needs.",
  },
  {
    step: "02",
    title: "Clear Guidance & Checklist",
    description:
      "We recommend the right business structure or filing pathway with a clear document checklist and transparent pricing.",
  },
  {
    step: "03",
    title: "Preparation & Filing",
    description:
      "Our specialists verify your documents, draft applications or financial statements, and file them accurately.",
  },
  {
    step: "04",
    title: "Ongoing Compliance",
    description:
      "Receive your registrations on time and stay informed on upcoming GST, TDS, and income tax schedules.",
  },
];

const coreValues = [
  {
    icon: Lock,
    title: "Data Security & Confidentiality",
    description:
      "Your business information, financial records, and personal documents are handled with strict confidentiality and care.",
  },
  {
    icon: Clock,
    title: "On-Time Service & Filings",
    description:
      "Stay informed about important compliance requirements, filing schedules, and documentation timelines.",
  },
  {
    icon: BadgePercent,
    title: "Transparent & Affordable",
    description:
      "Practical business and compliance solutions with clear, upfront pricing and no hidden charges.",
  },
  {
    icon: GraduationCap,
    title: "Trained & Professional Experts",
    description:
      "Get dependable guidance from experienced professionals across business registration, taxation, and accounting.",
  },
  {
    icon: Headphones,
    title: "Quick Response Team",
    description:
      "Get timely responses and dedicated support throughout every stage of your service journey.",
  },
  {
    icon: Award,
    title: "Quality-Driven Standards",
    description:
      "Committed to maintaining professional service standards, accuracy, and reliable documentation processes.",
  },
];

const servicePillars = [
  {
    title: "Business Setup",
    subtitle: "Company, LLP, Partnership & NGO",
    href: "/services/category/business-setup",
    icon: Building2,
  },
  {
    title: "GST Services",
    subtitle: "Registration, Returns & E-Way Bills",
    href: "/services/category/gst",
    icon: FileSpreadsheet,
  },
  {
    title: "Income Tax",
    subtitle: "ITR, TDS/TCS & Tax Valuation",
    href: "/services/category/income-tax-records",
    icon: ReceiptText,
  },
  {
    title: "Accounting",
    subtitle: "Bookkeeping, Payroll & Statements",
    href: "/services/category/accounting-records",
    icon: Calculator,
  },
  {
    title: "Special Licenses",
    subtitle: "FSSAI, MSME, Trademark & DSC",
    href: "/services/category/special-registrations",
    icon: ShieldCheck,
  },
];

export default function AboutPage() {
  return (
    <div className="bg-white">
      {/* 1. Hero Header Section (Matches Home Hero ambient waves & typography) */}
      <section className="relative overflow-hidden pt-8 pb-10 sm:pt-12 sm:pb-14 md:pt-16 md:pb-20 bg-white">
        <div className="absolute inset-0 pointer-events-none overflow-hidden">
          <div
            className="absolute top-0 left-1/2 -translate-x-1/2 w-[900px] h-[500px] pointer-events-none"
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
              <linearGradient id="about-left-grad" x1="0%" y1="0%" x2="100%" y2="80%">
                <stop offset="0%" stopColor="#710ac6" stopOpacity="0.16" />
                <stop offset="50%" stopColor="#8c1fe3" stopOpacity="0.08" />
                <stop offset="100%" stopColor="#FFFFFF" stopOpacity="0" />
              </linearGradient>
            </defs>
            <path
              d="M-50 -20 C 180 80, 360 220, 320 440 C 280 620, 110 740, -50 820 Z"
              fill="url(#about-left-grad)"
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
              <linearGradient id="about-right-grad" x1="100%" y1="0%" x2="0%" y2="90%">
                <stop offset="0%" stopColor="#B4E717" stopOpacity="0.2" />
                <stop offset="50%" stopColor="#ccf24b" stopOpacity="0.08" />
                <stop offset="100%" stopColor="#FFFFFF" stopOpacity="0" />
              </linearGradient>
            </defs>
            <path
              d="M690 -30 C 470 80, 290 240, 340 460 C 390 640, 550 740, 690 820 Z"
              fill="url(#about-right-grad)"
            />
          </svg>
        </div>

        <div className="relative z-10 max-w-content mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">

            <h1 className="text-3xl sm:text-5xl lg:text-[3.4rem] font-semibold tracking-tight text-brand-text leading-[1.15] mb-5">
              Your Dedicated Partner for{" "}
              <span className="text-brand-purple">Tax, Accounting</span> &amp; Business Compliance
            </h1>

            <p className="text-base sm:text-lg text-slate-600 leading-relaxed font-normal mb-8">
              Mithi Tax is a professional business, taxation and compliance consultancy dedicated to helping entrepreneurs, startups, individuals and established businesses manage their financial and legal responsibilities with clarity and trust.
            </p>

            <div className="flex flex-wrap items-center justify-center gap-4">
              <Button
                href="/services"
                variant="lime"
                size="lg"
                withArrow
                className="px-7 py-3.5 text-sm font-semibold rounded-full shadow-[0_4px_14px_rgba(180,231,23,0.35)] hover:shadow-[0_6px_22px_rgba(180,231,23,0.45)] hover:-translate-y-0.5"
              >
                Explore All Services
              </Button>
              <Button
                href="/contact"
                variant="secondary"
                size="lg"
                className="px-7 py-3.5 text-sm font-semibold rounded-full bg-white text-brand-text border border-slate-200/90 shadow-[0_4px_14px_rgba(23,21,45,0.04)] hover:border-brand-purple/40 hover:text-brand-purple hover:bg-white hover:-translate-y-0.5"
              >
                Book a Consultation
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* 2. Who We Are / Story Section (Keeps tinted background, blends smoothly at top) */}
      <section className="relative py-8 sm:py-12 md:py-16 bg-gradient-to-b from-[#F4F5FA] via-[#F6F7FC] to-white">
        <div
          className="absolute inset-x-0 top-0 h-14 sm:h-20 bg-gradient-to-b from-white to-transparent pointer-events-none"
          aria-hidden="true"
        />
        <div className="relative z-10 max-w-content mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
            {/* Left Column: Photo with Ambient Glow */}
            <div className="lg:col-span-6 relative">
              <div className="absolute -top-8 -left-8 w-60 h-60 bg-brand-purple/10 rounded-full blur-3xl pointer-events-none -z-10" />
              <div className="absolute -bottom-8 -right-8 w-60 h-60 bg-brand-lime/25 rounded-full blur-3xl pointer-events-none -z-10" />

              <div
                className="relative w-full aspect-[4/3] lg:aspect-auto lg:h-[520px] rounded-3xl overflow-hidden border border-slate-200/80 shadow-[0_12px_32px_rgba(23,21,45,0.06)] bg-brand-alt group"
                style={{
                  position: "relative",
                  width: "100%",
                  overflow: "hidden",
                }}
              >
                <Image
                  src="https://images.unsplash.com/photo-1556761175-5973dc0f32e7?auto=format&fit=crop&w=1200&q=85"
                  alt="Mithi Tax financial and legal advisory team collaborating"
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 600px"
                  className="object-cover object-center transition-transform duration-700 group-hover:scale-105"
                  style={{ objectFit: "cover" }}
                />
                <div className="absolute inset-0 bg-gradient-to-tr from-brand-text/10 via-transparent to-transparent pointer-events-none" />
              </div>
            </div>

            {/* Right Column: Narrative & 3 Highlights */}
            <div className="lg:col-span-6 flex flex-col items-start lg:pl-4">
              <div className="mb-3">
                <span className="text-xs font-semibold tracking-wider text-brand-purple uppercase">
                  WHO WE ARE
                </span>
                <div className="w-8 h-[2px] bg-brand-lime/70 mt-1.5 rounded-full" />
              </div>

              <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-[2.1rem] font-semibold text-brand-text tracking-tight leading-snug mb-5">
                Expert Guidance for Every Stage of Business
              </h2>

              <div className="text-sm sm:text-[0.9375rem] text-brand-muted leading-relaxed font-normal mb-7 space-y-3">
                <p>
                  From company incorporation and GST registration to income tax filing, accounting, bookkeeping and statutory compliance, Mithi Tax offers a comprehensive range of services designed to simplify complex business requirements.
                </p>
                <p>
                  Based in Darbhanga, Bihar and serving entrepreneurs across India, our focus is on providing clear guidance, dependable assistance and practical solutions that help businesses stay organized, compliant and prepared for long-term growth.
                </p>
              </div>

              <div className="space-y-4 w-full">
                {highlights.map((point) => {
                  const Icon = point.icon;
                  return (
                    <div key={point.title} className="group flex items-start gap-3.5 sm:gap-4">
                      <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-xl bg-purple-50 border border-purple-100 text-brand-purple flex items-center justify-center flex-shrink-0 mt-0.5 transition-all duration-300 group-hover:bg-brand-purple group-hover:text-white group-hover:border-brand-purple shadow-xs">
                        <Icon className="w-4 h-4 sm:w-5 sm:h-5" strokeWidth={2} />
                      </div>
                      <div>
                        <h3 className="text-sm sm:text-base font-semibold text-brand-text leading-snug">
                          {point.title}
                        </h3>
                        <p className="text-xs sm:text-[0.875rem] text-brand-muted mt-1 leading-relaxed">
                          {point.description}
                        </p>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. Mission, Vision & Impact (Balanced White SaaS Cards + Dark Navy Metrics Bar) */}
      <section className="py-8 sm:py-12 md:py-16 bg-white">
        <div className="max-w-content mx-auto px-4 sm:px-6 lg:px-8">


          {/* Clean White Mission & Vision Cards */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">
            {/* Mission Card */}
            <div className="group p-7 sm:p-8 rounded-2xl bg-gradient-to-b from-white to-[#FAF9FD] border border-slate-200/90 shadow-[0_6px_24px_rgba(23,21,45,0.04)] hover:border-brand-purple/35 hover:shadow-[0_14px_32px_rgba(113,10,198,0.08)] transition-all duration-300">
              <div className="flex items-center gap-3.5 mb-4">
                <div className="w-11 h-11 rounded-xl bg-brand-purple-light/80 border border-brand-purple/15 flex items-center justify-center text-brand-purple group-hover:bg-brand-purple group-hover:text-white transition-all duration-300">
                  <Target className="w-5 h-5" strokeWidth={1.9} />
                </div>
                <div>

                  <h3 className="text-lg sm:text-xl font-semibold text-brand-text leading-snug">
                    Our Mission
                  </h3>
                </div>
              </div>
              <p className="text-sm sm:text-[0.9375rem] text-brand-muted leading-relaxed">
                To make business registration, taxation, accounting, and statutory compliance simple, transparent, and accessible - empowering founders and businesses to focus on growth without regulatory stress.
              </p>
            </div>

            {/* Vision Card */}
            <div className="group p-7 sm:p-8 rounded-2xl bg-gradient-to-b from-white to-[#FAFCF5] border border-slate-200/90 shadow-[0_6px_24px_rgba(23,21,45,0.04)] hover:border-brand-lime hover:shadow-[0_14px_32px_rgba(180,231,23,0.18)] transition-all duration-300">
              <div className="flex items-center gap-3.5 mb-4">
                <div className="w-11 h-11 rounded-xl bg-brand-lime-light border border-brand-lime/60 flex items-center justify-center text-brand-text group-hover:bg-brand-lime transition-all duration-300">
                  <Compass className="w-5 h-5" strokeWidth={1.9} />
                </div>
                <div>

                  <h3 className="text-lg sm:text-xl font-semibold text-brand-text leading-snug">
                    Our Vision
                  </h3>
                </div>
              </div>
              <p className="text-sm sm:text-[0.9375rem] text-brand-muted leading-relaxed">
                To be the most trusted financial and legal compliance partner for startups, SMEs, and entrepreneurs - recognized for accuracy, ethical advisory, timely execution, and lasting client relationships.
              </p>
            </div>
          </div>

          {/* Clean Borderless Impact Metrics Row with Vertical Dividers */}
          <div className="pt-8 mt-4 border-slate-200/80">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-y-6 md:gap-y-0 md:divide-x md:divide-slate-200/80">
              <div className="flex items-center justify-start md:justify-center gap-3.5 px-2 md:px-6">
                <CalendarDays className="w-7 h-7 sm:w-8 sm:h-8 text-brand-lime flex-shrink-0" strokeWidth={1.9} />
                <div>
                  <div className="text-lg sm:text-xl font-semibold text-brand-text leading-tight">
                    10+ Years
                  </div>
                  <div className="text-xs text-brand-muted">of Experience</div>
                </div>
              </div>

              <div className="flex items-center justify-start md:justify-center gap-3.5 px-2 md:px-6">
                <Users className="w-7 h-7 sm:w-8 sm:h-8 text-brand-lime flex-shrink-0" strokeWidth={1.9} />
                <div>
                  <div className="text-lg sm:text-xl font-semibold text-brand-text leading-tight">
                    1,500+
                  </div>
                  <div className="text-xs text-brand-muted">Businesses Served</div>
                </div>
              </div>

              <div className="flex items-center justify-start md:justify-center gap-3.5 px-2 md:px-6">
                <Layers className="w-7 h-7 sm:w-8 sm:h-8 text-brand-lime flex-shrink-0" strokeWidth={1.9} />
                <div>
                  <div className="text-lg sm:text-xl font-semibold text-brand-text leading-tight">
                    30+
                  </div>
                  <div className="text-xs text-brand-muted">Service Offerings</div>
                </div>
              </div>

              <div className="flex items-center justify-start md:justify-center gap-3.5 px-2 md:px-6">
                <CheckCircle2 className="w-7 h-7 sm:w-8 sm:h-8 text-brand-lime flex-shrink-0" strokeWidth={1.9} />
                <div>
                  <div className="text-lg sm:text-xl font-semibold text-brand-text leading-tight">
                    100%
                  </div>
                  <div className="text-xs text-brand-muted">Online &amp; Transparent</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 4. Core Operating Values (Matches WhyChooseUs 3-column grid & lime hover interaction) */}
      <section className="relative py-8 sm:py-12 md:py-18 bg-gradient-to-b from-[#F4F5FA] via-[#F7F8FD] to-white">
        <div
          className="absolute inset-x-0 top-0 h-14 sm:h-20 bg-gradient-to-b from-white to-transparent pointer-events-none"
          aria-hidden="true"
        />
        <div className="relative z-10 max-w-content mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mb-10 md:mb-12">
            <div className="mb-3">
              <span className="text-xs font-semibold tracking-wider text-brand-purple uppercase">
                OUR VALUES
              </span>
              <div className="w-8 h-[2px] bg-brand-lime/70 mt-1.5 rounded-full" />
            </div>
            <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-[2rem] font-semibold text-brand-text tracking-tight leading-snug mb-3">
              Our Core Operating Principles
            </h2>
            <p className="text-sm sm:text-[0.9375rem] text-brand-muted leading-relaxed font-normal">
              Every client engagement is grounded in clear principles that protect your business compliance, privacy, and financial peace of mind.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 lg:gap-6">
            {coreValues.map((value) => {
              const Icon = value.icon;
              return (
                <div
                  key={value.title}
                  className="group relative flex flex-col justify-between p-6 sm:p-7 bg-white rounded-2xl border border-slate-200/80 shadow-[0_4px_16px_rgba(23,21,45,0.03)] transition-all duration-300 hover:bg-brand-lime hover:border-brand-lime hover:shadow-[0_16px_36px_rgba(180,231,23,0.35)] hover:-translate-y-1.5"
                >
                  <div>
                    <div className="mb-5">
                      <div className="w-12 h-12 rounded-2xl bg-brand-purple-light/80 border border-brand-purple/15 flex items-center justify-center text-brand-purple transition-all duration-300 group-hover:bg-white group-hover:border-white group-hover:text-brand-purple group-hover:shadow-[0_4px_14px_rgba(23,21,45,0.08)] group-hover:scale-105">
                        <Icon className="w-5 h-5" strokeWidth={1.8} />
                      </div>
                    </div>

                    <h3 className="text-base sm:text-[1.1rem] font-semibold text-brand-text mb-2 tracking-tight leading-snug">
                      {value.title}
                    </h3>

                    <p className="text-xs sm:text-[0.875rem] text-brand-muted leading-relaxed group-hover:text-brand-text/85 transition-colors">
                      {value.description}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* 5. How We Work (4-Step Process) */}
      <section className="pt-8 pb-4 sm:pt-12 sm:pb-6 md:pt-16 md:pb-8 bg-white">
        <div className="max-w-content mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-10 md:mb-12">
            <div className="inline-flex flex-col items-center mb-3">
              <span className="text-xs font-semibold tracking-wider text-brand-purple uppercase">
                HOW WE WORK
              </span>
              <div className="w-8 h-[2px] bg-brand-lime mt-1.5 rounded-full" />
            </div>
            <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-[2rem] font-semibold text-brand-text tracking-tight leading-snug mb-3">
              Simple, Structured &amp; Reliable Execution
            </h2>
            <p className="text-sm sm:text-[0.9375rem] text-brand-muted leading-relaxed">
              From your initial consultation to final certification and ongoing filings, our workflow keeps everything clear and hassle-free.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {processSteps.map((item) => (
              <div
                key={item.step}
                className="p-6 rounded-2xl bg-gradient-to-b from-white to-[#FAF9FD] border border-slate-200/90 shadow-[0_4px_16px_rgba(23,21,45,0.03)] hover:border-brand-purple/40 hover:shadow-[0_12px_28px_rgba(113,10,198,0.08)] transition-all duration-300"
              >
                <div className="inline-flex items-center justify-center px-3 py-1 rounded-lg bg-brand-purple-light text-brand-purple text-xs font-bold mb-4">
                  STEP {item.step}
                </div>
                <h3 className="text-base sm:text-[1.05rem] font-semibold text-brand-text mb-2 leading-snug">
                  {item.title}
                </h3>
                <p className="text-xs sm:text-[0.875rem] text-brand-muted leading-relaxed">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>



      {/* 7. Consultation & Contact Section (Matches Home Page ConsultationSection) */}
      <ConsultationSection className="pt-4 pb-12 sm:pt-6 sm:pb-16 md:pt-8 md:pb-20" />
    </div>
  );
}
