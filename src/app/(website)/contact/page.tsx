import React from "react";
import Link from "next/link";
import {
  Phone,
  Mail,
  MapPin,
  Clock,
  ArrowRight,
  CheckCircle2,
  MessageSquare,
  FileText,
  Sparkles,
  ExternalLink,
} from "lucide-react";
import { siteConfig } from "@/lib/constants";
import { Button } from "@/components/ui/button";
import ContactFormSection from "@/components/website/contact/ContactFormSection";

export const metadata = {
  title: "Contact Us | Mithi Tax — Business, GST & Tax Consultancy",
  description:
    "Contact Mithi Tax in Darbhanga, Bihar for GST registration, company incorporation, income tax filing, accounting, and business compliance support.",
};

const responseSteps = [
  {
    step: "01",
    icon: MessageSquare,
    title: "Enquiry Review",
    description:
      "Our team reviews your business or tax requirement to assign the right specialist for your query.",
  },
  {
    step: "02",
    icon: FileText,
    title: "Consultation & Checklist",
    description:
      "We connect with you by phone or email to clarify scope, share a document checklist, and confirm transparent pricing.",
  },
  {
    step: "03",
    icon: Sparkles,
    title: "Smooth Execution",
    description:
      "Once documents are shared, we handle preparation, verification, and filing while keeping you updated at every step.",
  },
];

const contactFaqs = [
  {
    question: "Do I need to visit the office in person?",
    answer:
      "No. Most registrations, GST filings, income tax returns, and accounting services are handled 100% online. You are also welcome to visit our Darbhanga office.",
  },
  {
    question: "How quickly will your team respond?",
    answer:
      "We aim to respond to all phone, email, and form enquiries promptly during business hours (Mon – Sat, 9:30 AM – 6:30 PM IST).",
  },
  {
    question: "What details should I share in my enquiry?",
    answer:
      "Briefly mention the service you need (such as GST Registration, Company Incorporation, ITR, or Accounting) and your business stage so we can guide you accurately.",
  },
  {
    question: "Do you support businesses outside Darbhanga?",
    answer:
      "Yes. While our office is in Darbhanga, Bihar, we assist entrepreneurs, startups, and businesses across India.",
  },
];

export default function ContactPage() {
  return (
    <div className="bg-white">
      {/* 1. Hero Header Section (Matches Home, About & Insights ambient waves) */}
      <section className="relative overflow-hidden pt-8 pb-10 sm:pt-12 sm:pb-14 md:pt-16 md:pb-16 bg-white">
        <div className="absolute inset-0 pointer-events-none overflow-hidden">
          <div
            className="absolute top-0 left-1/2 -translate-x-1/2 w-[900px] h-[460px] pointer-events-none"
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
              <linearGradient id="contact-left-grad" x1="0%" y1="0%" x2="100%" y2="80%">
                <stop offset="0%" stopColor="#710ac6" stopOpacity="0.16" />
                <stop offset="50%" stopColor="#8c1fe3" stopOpacity="0.08" />
                <stop offset="100%" stopColor="#FFFFFF" stopOpacity="0" />
              </linearGradient>
            </defs>
            <path
              d="M-50 -20 C 180 80, 360 220, 320 440 C 280 620, 110 740, -50 820 Z"
              fill="url(#contact-left-grad)"
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
              <linearGradient id="contact-right-grad" x1="100%" y1="0%" x2="0%" y2="90%">
                <stop offset="0%" stopColor="#B4E717" stopOpacity="0.2" />
                <stop offset="50%" stopColor="#ccf24b" stopOpacity="0.08" />
                <stop offset="100%" stopColor="#FFFFFF" stopOpacity="0" />
              </linearGradient>
            </defs>
            <path
              d="M690 -30 C 470 80, 290 240, 340 460 C 390 640, 550 740, 690 820 Z"
              fill="url(#contact-right-grad)"
            />
          </svg>
        </div>

        <div className="relative z-10 max-w-content mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <div className="inline-flex flex-col items-center mb-4">
              <span className="text-xs font-semibold tracking-wider text-brand-purple uppercase">
                CONTACT US
              </span>
              <div className="w-8 h-[2px] bg-brand-lime mt-1.5 rounded-full" />
            </div>

            <h1 className="text-3xl sm:text-5xl lg:text-[3.3rem] font-semibold tracking-tight text-brand-text leading-[1.18] mb-5">
              Let’s Discuss Your{" "}
              <span className="text-brand-purple">Business, Tax</span> &amp; Compliance Needs
            </h1>

            <p className="text-base sm:text-lg text-slate-600 leading-relaxed font-normal mb-8">
              Have questions about business registration, GST, income tax filing, or accounting? Reach out to our team for clear guidance and dependable support.
            </p>

            <div className="flex flex-wrap items-center justify-center gap-4">
              <Button
                href={`tel:${siteConfig.phone.replace(/\s+/g, "")}`}
                variant="lime"
                size="lg"
                className="px-7 py-3.5 text-sm font-semibold rounded-full shadow-[0_4px_14px_rgba(180,231,23,0.35)] hover:shadow-[0_6px_22px_rgba(180,231,23,0.45)] hover:-translate-y-0.5"
              >
                <Phone className="w-4 h-4" />
                <span>Call {siteConfig.phone}</span>
              </Button>
              <Button
                href={`mailto:${siteConfig.email}`}
                variant="secondary"
                size="lg"
                className="px-7 py-3.5 text-sm font-semibold rounded-full bg-white text-brand-text border border-slate-200/90 shadow-[0_4px_14px_rgba(23,21,45,0.04)] hover:border-brand-purple/40 hover:text-brand-purple hover:bg-white hover:-translate-y-0.5"
              >
                <Mail className="w-4 h-4" />
                <span>Email Support</span>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* 2. Quick Contact Channels Grid (Top-Blended Tinted Section) */}
      <section className="relative py-8 sm:py-12 bg-gradient-to-b from-[#F4F5FA] via-[#F7F8FC] to-white">
        <div
          className="absolute inset-x-0 top-0 h-14 sm:h-20 bg-gradient-to-b from-white to-transparent pointer-events-none"
          aria-hidden="true"
        />

        <div className="relative z-10 max-w-content mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5 lg:gap-6">
            {/* Phone Card */}
            <a
              href={`tel:${siteConfig.phone.replace(/\s+/g, "")}`}
              className="group p-6 sm:p-7 rounded-2xl bg-white border border-slate-200/90 shadow-[0_4px_16px_rgba(23,21,45,0.03)] hover:border-brand-purple/40 hover:shadow-[0_14px_32px_rgba(113,10,198,0.1)] hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between"
            >
              <div>
                <div className="w-12 h-12 rounded-2xl bg-brand-purple-light/80 border border-brand-purple/15 flex items-center justify-center text-brand-purple mb-5 group-hover:bg-brand-purple group-hover:text-white transition-all duration-300">
                  <Phone className="w-5 h-5" strokeWidth={1.9} />
                </div>
                <span className="text-[11px] font-semibold uppercase tracking-wider text-brand-purple block mb-1">
                  Direct Consultation
                </span>
                <h2 className="text-lg font-semibold text-brand-text mb-2">
                  {siteConfig.phone}
                </h2>
                <p className="text-xs sm:text-sm text-brand-muted leading-relaxed">
                  Speak with our team about business setup, GST, income tax, and compliance requirements.
                </p>
              </div>
              <div className="mt-5 pt-4 border-t border-slate-100 flex items-center justify-between text-xs font-semibold text-brand-purple">
                <span>Call Now</span>
                <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
              </div>
            </a>

            {/* Email Card */}
            <a
              href={`mailto:${siteConfig.email}`}
              className="group p-6 sm:p-7 rounded-2xl bg-white border border-slate-200/90 shadow-[0_4px_16px_rgba(23,21,45,0.03)] hover:border-brand-purple/40 hover:shadow-[0_14px_32px_rgba(113,10,198,0.1)] hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between"
            >
              <div>
                <div className="w-12 h-12 rounded-2xl bg-brand-purple-light/80 border border-brand-purple/15 flex items-center justify-center text-brand-purple mb-5 group-hover:bg-brand-purple group-hover:text-white transition-all duration-300">
                  <Mail className="w-5 h-5" strokeWidth={1.9} />
                </div>
                <span className="text-[11px] font-semibold uppercase tracking-wider text-brand-purple block mb-1">
                  Email Support
                </span>
                <h2 className="text-lg font-semibold text-brand-text mb-2 break-all">
                  {siteConfig.email}
                </h2>
                <p className="text-xs sm:text-sm text-brand-muted leading-relaxed">
                  Send your service enquiries, documents, or compliance questions for prompt assistance.
                </p>
              </div>
              <div className="mt-5 pt-4 border-t border-slate-100 flex items-center justify-between text-xs font-semibold text-brand-purple">
                <span>Send an Email</span>
                <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
              </div>
            </a>

            {/* Office Address Card */}
            <a
              href={siteConfig.mapUrl}
              target="_blank"
              rel="noreferrer"
              className="group p-6 sm:p-7 rounded-2xl bg-white border border-slate-200/90 shadow-[0_4px_16px_rgba(23,21,45,0.03)] hover:border-brand-purple/40 hover:shadow-[0_14px_32px_rgba(113,10,198,0.1)] hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between"
            >
              <div>
                <div className="w-12 h-12 rounded-2xl bg-brand-purple-light/80 border border-brand-purple/15 flex items-center justify-center text-brand-purple mb-5 group-hover:bg-brand-purple group-hover:text-white transition-all duration-300">
                  <MapPin className="w-5 h-5" strokeWidth={1.9} />
                </div>
                <span className="text-[11px] font-semibold uppercase tracking-wider text-brand-purple block mb-1">
                  Office Location
                </span>
                <h2 className="text-base sm:text-lg font-semibold text-brand-text mb-2 leading-snug">
                  Darbhanga, Bihar
                </h2>
                <p className="text-xs sm:text-sm text-brand-muted leading-relaxed">
                  {siteConfig.address}
                </p>
              </div>
              <div className="mt-5 pt-4 border-t border-slate-100 flex items-center justify-between text-xs font-semibold text-brand-purple">
                <span>View on Google Maps</span>
                <ExternalLink className="w-4 h-4 transition-transform group-hover:translate-x-0.5" />
              </div>
            </a>
          </div>
        </div>
      </section>

      {/* 3. Main Consultation Form Section (Centered, compact, box-free) */}
      <ContactFormSection />

      {/* 4. Embedded Google Map Section */}
      <section className="relative py-8 sm:py-12 md:py-14 bg-gradient-to-b from-[#F4F5FA] via-[#F7F8FC] to-white">
        <div
          className="absolute inset-x-0 top-0 h-14 sm:h-20 bg-gradient-to-b from-white to-transparent pointer-events-none"
          aria-hidden="true"
        />

        <div className="relative z-10 max-w-content mx-auto px-4 sm:px-6 lg:px-8">

          <div className="rounded-3xl overflow-hidden border border-slate-200/90 shadow-[0_8px_30px_rgba(23,21,45,0.05)] bg-white">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3579.7131582009547!2d86.1604514!3d26.2060077!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39edd18ec39da557%3A0xf8e40b9b3d29f105!2sMithiTax.in!5e0!3m2!1sen!2sin!4v1795607762790!5m2!1sen!2sin"
              title="MithiTax.in Office Location Map"
              className="w-full h-[320px] sm:h-[400px] lg:h-[440px] border-0 block"
              allowFullScreen
              loading="lazy"
              referrerPolicy="strict-origin-when-cross-origin"
            />
          </div>
        </div>
      </section>


    </div>
  );
}
