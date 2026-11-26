"use client";

import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { CheckCircle2, Loader2, ArrowRight, ShieldCheck } from "lucide-react";
import { consultationSchema, ConsultationFormValues } from "@/lib/validations";
import { Input } from "@/components/ui/input";

interface ServiceBookingFormProps {
  serviceTitle: string;
}

export default function ServiceBookingForm({
  serviceTitle,
}: ServiceBookingFormProps) {
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
      serviceCategory: serviceTitle,
      requirementDetails: `I would like to book / enquire about ${serviceTitle}.`,
    },
  });

  const onSubmit = async (data: ConsultationFormValues) => {
    setIsSubmitting(true);
    try {
      const res = await fetch("/api/enquiries", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          ...data,
          serviceCategory: serviceTitle,
        }),
      });
      if (res.ok) {
        setIsSubmitted(true);
        reset({
          fullName: "",
          phoneNumber: "",
          email: "",
          companyName: "",
          serviceCategory: serviceTitle,
          requirementDetails: `I would like to book / enquire about ${serviceTitle}.`,
        });
      }
    } catch (err) {
      console.error(err);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="bg-white rounded-3xl border border-slate-200/90 shadow-[0_14px_40px_rgba(23,21,45,0.06)] p-6 sm:p-7">
      <div className="mb-5">
        <span className="text-[11px] font-semibold uppercase tracking-wider text-brand-purple block mb-1">
          BOOK THIS SERVICE
        </span>
        <h2 className="text-xl font-semibold text-brand-text tracking-tight leading-snug">
          Get Started with {serviceTitle}
        </h2>
        <p className="text-xs text-brand-muted mt-1">
          Share your details and our team will contact you with the document checklist and next steps.
        </p>
      </div>

      {isSubmitted ? (
        <div className="py-8 px-4 text-center bg-[#FAF9FD] rounded-2xl border border-brand-border animate-in fade-in">
          <div className="w-12 h-12 bg-brand-lime-light rounded-full flex items-center justify-center mx-auto mb-3 text-brand-purple">
            <CheckCircle2 className="w-7 h-7 text-brand-purple" />
          </div>
          <h3 className="text-lg font-semibold text-brand-text mb-1.5">
            Booking Request Received!
          </h3>
          <p className="text-xs sm:text-sm text-brand-muted mb-5 leading-relaxed">
            Thank you for choosing Mithi Tax for <strong>{serviceTitle}</strong>. Our specialist will reach out shortly.
          </p>
          <button
            type="button"
            onClick={() => setIsSubmitted(false)}
            className="text-xs font-semibold text-brand-purple hover:underline cursor-pointer"
          >
            Submit another request
          </button>
        </div>
      ) : (
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-3.5">
          <input type="hidden" {...register("serviceCategory")} />

          <Input
            label="Full Name"
            placeholder="e.g. Vikramaditya Sharma"
            required
            error={errors.fullName?.message}
            {...register("fullName")}
          />

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
            <Input
              label="Phone Number"
              type="tel"
              placeholder="+91 98765 43210"
              required
              error={errors.phoneNumber?.message}
              {...register("phoneNumber")}
            />

            <Input
              label="Email Address"
              type="email"
              placeholder="name@company.com"
              required
              error={errors.email?.message}
              {...register("email")}
            />
          </div>

          <Input
            label="Business / Entity Name (Optional)"
            placeholder="e.g. Acme Enterprises"
            error={errors.companyName?.message}
            {...register("companyName")}
          />

          <div className="flex flex-col gap-1.5">
            <label
              htmlFor="serviceRequirementDetails"
              className="text-xs sm:text-sm font-medium text-brand-text"
            >
              Requirement Details <span className="text-red-500">*</span>
            </label>
            <textarea
              id="serviceRequirementDetails"
              rows={2}
              placeholder="Briefly describe your requirement or questions..."
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
            className="w-full py-3.5 px-5 rounded-xl bg-brand-lime hover:bg-[#a6d812] text-brand-text font-semibold text-sm shadow-[0_4px_14px_rgba(180,231,23,0.35)] hover:shadow-[0_6px_20px_rgba(180,231,23,0.45)] transition-all flex items-center justify-center gap-2 disabled:opacity-70 cursor-pointer"
          >
            {isSubmitting ? (
              <>
                <Loader2 className="w-4 h-4 animate-spin" />
                <span>Submitting...</span>
              </>
            ) : (
              <>
                <span>Book {serviceTitle}</span>
                <ArrowRight className="w-4 h-4" />
              </>
            )}
          </button>

          <div className="flex items-center justify-center gap-1.5 pt-1 text-[11px] text-brand-muted">
            <ShieldCheck className="w-3.5 h-3.5 text-brand-purple" />
            <span>100% Confidential · Prompt Response Within 1 Business Day</span>
          </div>
        </form>
      )}
    </div>
  );
}
