import React from "react";
import ConsultationSection from "@/components/website/home/ConsultationSection";

export const metadata = {
  title: "Contact Mithi Tax | Corporate Consultation & Support",
  description:
    "Get in touch with Mithi Tax for business setup, GST filing, tax assessment representation, and company compliance. Guaranteed 1 business day response.",
};

export default function ContactPage() {
  return (
    <div className="py-6 sm:py-12 bg-white">
      <ConsultationSection />
    </div>
  );
}
