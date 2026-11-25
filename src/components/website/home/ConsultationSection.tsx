"use client";

import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import {
  Phone,
  Mail,
  MapPin,
  CheckCircle2,
  Loader2,
  Send,
  ArrowRight,
} from "lucide-react";
import { consultationSchema, ConsultationFormValues } from "@/lib/validations";
import { serviceCategories, siteConfig } from "@/lib/constants";
import { Input } from "@/components/ui/input";
import { Select } from "@/components/ui/select";
import { cn } from "@/lib/utils";

export default function ConsultationSection({
  className,
}: {
  className?: string;
}) {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<ConsultationFormValues>({
    resolver: zodResolver(consultationSchema),
    defaultValues: {
      fullName: "",
      phoneNumber: "",
      email: "",
      companyName: "",
      serviceCategory: "",
      requirementDetails: "",
    },
  });

  const onSubmit = async (data: ConsultationFormValues) => {
    setIsSubmitting(true);
    try {
      const res = await fetch("/api/enquiries", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });
      if (res.ok) {
        setIsSubmitted(true);
        reset();
      }
    } catch (err) {
      console.error(err);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section
      id="consultation"
      className={cn(
        "pt-4 pb-12 sm:pt-10 sm:pb-16 md:py-20 bg-white relative overflow-hidden",
        className
      )}
    >
      {/* Subtle Ambient Background Orbs */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div
          className="absolute -bottom-20 -left-20 w-[450px] h-[450px] rounded-full blur-[130px] opacity-20 pointer-events-none"
          style={{
            background:
              "radial-gradient(circle, rgba(113, 10, 198, 0.3) 0%, transparent 70%)",
          }}
          aria-hidden="true"
        />
        <div
          className="absolute -top-20 -right-20 w-[450px] h-[450px] rounded-full blur-[130px] opacity-20 pointer-events-none"
          style={{
            background:
              "radial-gradient(circle, rgba(180, 231, 23, 0.3) 0%, transparent 70%)",
          }}
          aria-hidden="true"
        />
      </div>

      <div className="max-w-content mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="bg-gradient-to-br from-white via-white to-[#F8F7FD] rounded-3xl border border-slate-200/90 shadow-[0_12px_40px_rgba(23,21,45,0.06)] p-6 sm:p-8 lg:p-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14">
            {/* Left Column: Details & Verified Contact Points */}
            <div className="lg:col-span-5 flex flex-col justify-between">
              <div>
                <h2 className="text-2xl sm:text-3xl md:text-4xl font-semibold text-brand-text tracking-tight leading-snug mb-4">
                  Let’s Get Your Finances &amp; Taxes Sorted
                </h2>

                <p className="text-sm sm:text-base text-brand-muted leading-relaxed mb-8">
                  Connect with our team for assistance with business registration, GST, income tax, accounting and legal compliance. Share your requirements and get guidance on the right solutions for your business.
                </p>

                {/* Contact Rows */}
                <div className="space-y-4">
                  <div className="flex items-start gap-3.5 p-3.5 rounded-xl bg-[#F7F8FD] border border-slate-200/70">
                    <div className="w-9 h-9 rounded-lg bg-brand-purple-light/80 flex items-center justify-center text-brand-purple flex-shrink-0 border border-brand-purple/15">
                      <Phone className="w-4 h-4" />
                    </div>
                    <div>
                      <div className="text-xs font-semibold text-brand-muted uppercase tracking-wider">
                        Direct Consultation
                      </div>

                      <a
                        href={`tel:${siteConfig.phone.replace(/\s+/g, "")}`}
                        className="text-sm font-semibold text-brand-text hover:text-brand-purple transition-colors mt-0.5 inline-block"
                      >
                        {siteConfig.phone}
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start gap-3.5 p-3.5 rounded-xl bg-[#F7F8FD] border border-slate-200/70">
                    <div className="w-9 h-9 rounded-lg bg-brand-purple-light/80 flex items-center justify-center text-brand-purple flex-shrink-0 border border-brand-purple/15">
                      <Mail className="w-4 h-4" />
                    </div>
                    <div>
                      <div className="text-xs font-semibold text-brand-muted uppercase tracking-wider">
                        Email Support
                      </div>

                      <a
                        href={`mailto:${siteConfig.email}`}
                        className="text-sm font-semibold text-brand-text hover:text-brand-purple transition-colors mt-0.5 inline-block"
                      >
                        {siteConfig.email}
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start gap-3.5 p-3.5 rounded-xl bg-[#F7F8FD] border border-slate-200/70">
                    <div className="w-9 h-9 rounded-lg bg-brand-purple-light/80 flex items-center justify-center text-brand-purple flex-shrink-0 border border-brand-purple/15">
                      <MapPin className="w-4 h-4" />
                    </div>
                    <div>
                      <div className="text-xs font-semibold text-brand-muted uppercase tracking-wider">
                        Office Location
                      </div>

                      <p className="text-sm font-semibold text-brand-text mt-0.5">
                        {siteConfig.address}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Column: Free Consultation Form */}
            <div className="lg:col-span-7 bg-gradient-to-b from-[#F9F9FE] to-white rounded-2xl p-6 sm:p-8 border border-slate-200/90 shadow-sm">
              <div className="mb-6">
                <h3 className="text-xl sm:text-2xl font-semibold text-brand-text tracking-tight">
                  Request a Free Consultation
                </h3>
                <p className="text-xs sm:text-sm text-brand-muted mt-1.5">
                  Fill out the form below. Share your requirements and our team will get in touch to discuss the appropriate services and next steps.
                </p>
              </div>

              {isSubmitted ? (
                <div className="py-12 px-6 text-center bg-white rounded-xl border border-brand-border shadow-subtle animate-in fade-in">
                  <div className="w-14 h-14 bg-brand-lime-light rounded-full flex items-center justify-center mx-auto mb-4 text-brand-purple">
                    <CheckCircle2 className="w-8 h-8 text-brand-purple" />
                  </div>
                  <h4 className="text-xl sm:text-2xl font-semibold text-brand-text mb-2">
                    Inquiry Submitted Successfully!
                  </h4>
                  <p className="text-sm text-brand-muted max-w-md mx-auto mb-6">
                    Thank you for contacting Mithi Tax! Your enquiry has been submitted successfully. Our team will review your requirements and contact you soon.
                  </p>
                  <button
                    type="button"
                    onClick={() => setIsSubmitted(false)}
                    className="inline-flex items-center text-xs font-semibold text-brand-purple hover:underline"
                  >
                    Submit another consultation enquiry
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <Input
                      label="Full Name"
                      placeholder="e.g. Vikramaditya Sharma"
                      required
                      error={errors.fullName?.message}
                      {...register("fullName")}
                    />

                    <Input
                      label="Phone Number"
                      type="tel"
                      placeholder="e.g. +91 98765 43210"
                      required
                      error={errors.phoneNumber?.message}
                      {...register("phoneNumber")}
                    />
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <Input
                      label="Email Address"
                      type="email"
                      placeholder="e.g. vikram@enterprise.com"
                      required
                      error={errors.email?.message}
                      {...register("email")}
                    />

                    <Input
                      label="Business / Company Name"
                      placeholder="e.g. Acme Tech Solutions LLP"
                      error={errors.companyName?.message}
                      {...register("companyName")}
                    />
                  </div>

                  <Select
                    label="Select Service"
                    required
                    error={errors.serviceCategory?.message}
                    {...register("serviceCategory")}
                  >
                    <option value="">-- Choose a Service --</option>
                    <option value="Company Incorporation">Company Incorporation</option>
                    <option value="LLP Registration">LLP Registration</option>
                    <option value="Proprietorship / Partnership">Proprietorship / Partnership</option>
                    <option value="GST Registration">GST Registration</option>
                    <option value="GST Return Filing">GST Return Filing</option>
                    <option value="Income Tax Filing (ITR)">Income Tax Filing (ITR)</option>
                    <option value="TDS / TCS Compliance">TDS / TCS Compliance</option>
                    <option value="Accounting & Bookkeeping">Accounting &amp; Bookkeeping</option>
                    <option value="Payroll Management">Payroll Management</option>
                    <option value="Trademark Registration">Trademark Registration</option>
                    <option value="FSSAI / Food License">FSSAI / Food License</option>
                    <option value="Startup India / MSME (Udyam)">Startup India / MSME (Udyam)</option>
                    <option value="ROC & MCA Compliance">ROC &amp; MCA Compliance</option>
                    <option value="Other Business / Tax Service">Other Business / Tax Service</option>
                  </Select>

                  <div className="flex flex-col gap-1.5">
                    <label
                      htmlFor="requirementDetails"
                      className="text-xs sm:text-sm font-medium text-brand-text"
                    >
                      Brief Details of Requirement <span className="text-red-500">*</span>
                    </label>
                    <textarea
                      id="requirementDetails"
                      rows={3}
                      placeholder="Tell us about your business stage, required filings, questions, or target timelines..."
                      {...register("requirementDetails")}
                      className="w-full px-3.5 py-2.5 bg-white rounded-xl border border-brand-border text-sm text-brand-text placeholder:text-brand-muted/60 focus:outline-none focus:ring-2 focus:ring-brand-purple focus:border-transparent transition resize-none"
                    />
                    {errors.requirementDetails && (
                      <span className="text-xs text-red-600 font-medium">
                        {errors.requirementDetails.message}
                      </span>
                    )}
                  </div>

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full py-3.5 px-6 rounded-xl bg-brand-lime hover:bg-[#a6d812] text-brand-text font-semibold text-sm shadow-[0_4px_14px_rgba(180,231,23,0.35)] hover:shadow-[0_6px_20px_rgba(180,231,23,0.45)] hover:-translate-y-0.5 transition-all flex items-center justify-center gap-2 focus:outline-none focus-visible:ring-2 focus-visible:ring-brand-lime focus-visible:ring-offset-2 disabled:opacity-70 cursor-pointer"
                  >
                    {isSubmitting ? (
                      <>
                        <Loader2 className="w-4 h-4 animate-spin" />
                        <span>Submitting Consultation Request...</span>
                      </>
                    ) : (
                      <>
                        <span>Submit Free Inquiry</span>
                        <ArrowRight className="w-4 h-4" />
                      </>
                    )}
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
