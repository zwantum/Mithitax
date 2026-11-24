import React from "react";
import HeroSection from "@/components/website/home/HeroSection";
import ClientLogos from "@/components/website/home/ClientLogos";
import ServicesSection from "@/components/website/home/ServicesSection";
import BusinessPartnerBanner from "@/components/website/home/BusinessPartnerBanner";
import ConsultationSection from "@/components/website/home/ConsultationSection";
import AboutSection from "@/components/website/home/AboutSection";
import WhyChooseUs from "@/components/website/home/WhyChooseUs";
import CalculatorsSection from "@/components/website/home/CalculatorsSection";
import FAQSection from "@/components/website/home/FAQSection";
import InsightsSection from "@/components/website/home/InsightsSection";

export default function HomePage() {
  return (
    <>
      {/* Section 2: Hero Section */}
      <HeroSection />

      {/* Section 3: Trusted Clients */}
      <ClientLogos />

      {/* Section 4: Services Overview */}
      <ServicesSection />

      {/* Section 5: Business Partner Stats Banner */}
      <BusinessPartnerBanner />

      {/* Section 6: About Mithi Tax */}
      <AboutSection />

      {/* Section 7: Why Choose Us (3x3 grid) */}
      <WhyChooseUs />

      {/* Section 8: Free Business Calculators */}
      <CalculatorsSection />

      {/* Section 9: FAQ */}
      <FAQSection />

      {/* Section 10: Blog / Insights */}
      <InsightsSection />

      {/* Section 11: Consultation / Enquiry Section */}
      <ConsultationSection />
    </>
  );
}
