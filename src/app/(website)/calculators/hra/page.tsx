import React from "react";
import CalculatorPageShell from "@/components/website/calculators/CalculatorPageShell";
import HraCalculatorTool from "@/components/website/calculators/HraCalculatorTool";

export const metadata = {
  title: "HRA Exemption Calculator India | Section 10(13A) | Mithi Tax",
  description:
    "Calculate your House Rent Allowance (HRA) tax exemption online under Section 10(13A) of the Income Tax Act based on basic salary, rent paid, and metro vs non-metro city.",
  keywords: [
    "HRA Exemption Calculator",
    "HRA Tax Calculator India",
    "Section 10(13A) HRA Calculator",
    "House Rent Allowance Exemption",
    "Metro Non-Metro HRA Calculation",
  ],
};

export default function HraCalculatorPage() {
  return (
    <CalculatorPageShell
      eyebrow="SALARY & DEDUCTIONS"
      title="HRA Exemption Calculator"
      highlightWord="HRA Exemption"
      description="Estimate your tax-free House Rent Allowance (HRA) under Section 10(13A) of the Income Tax Act based on your basic salary, HRA received, rent paid, and city category."
      tool={<HraCalculatorTool />}
      guideTitle="What is HRA Exemption & How Section 10(13A) Works"
      guideParagraphs={[
        "House Rent Allowance (HRA) is a salary component provided by employers to help cover rented accommodation expenses. Under Section 10(13A) of the Income Tax Act, salaried employees opting for the Old Tax Regime can claim partial or full tax exemption on HRA.",
        "The exempt HRA amount is calculated as the lowest of three statutory limits: actual HRA received, 50% (metro) or 40% (non-metro) of Basic Salary + DA, and actual rent paid minus 10% of Basic Salary + DA.",
      ]}
      formulaLabel="Section 10(13A) HRA Exemption Rule"
      formulaText="Exempt HRA = Minimum of (1) Actual HRA Received, (2) 50% / 40% of Basic + DA, (3) Rent Paid − 10% of Basic + DA"
      howToSteps={[
        "Enter your Annual Basic Salary + Dearness Allowance (DA) in Indian Rupees (₹).",
        "Enter the total Annual HRA Received from your employer and Annual Rent Paid.",
        "Select Metro City (Delhi, Mumbai, Kolkata, Chennai — 50%) or Non-Metro City (40%).",
        "View your Exempt (tax-free) HRA and Taxable HRA immediately.",
      ]}
      examplesTitle="HRA Exemption Calculation Examples"
      examples={[
        {
          title: "Metro City Example (50% Basic Limit)",
          scenario:
            "An employee in Mumbai earns ₹6,00,000 basic salary, receives ₹2,40,000 HRA, and pays ₹2,16,000 annual rent.",
          result:
            "Min of (₹2,40,000 | ₹3,00,000 | ₹1,56,000) → Exempt HRA: ₹1,56,000 | Taxable HRA: ₹84,000",
        },
        {
          title: "Non-Metro City Example (40% Basic Limit)",
          scenario:
            "An employee in Darbhanga or Patna earns ₹5,00,000 basic salary, receives ₹2,00,000 HRA, and pays ₹1,44,000 annual rent.",
          result:
            "Min of (₹2,00,000 | ₹2,00,000 | ₹94,000) → Exempt HRA: ₹94,000 | Taxable HRA: ₹1,06,000",
        },
      ]}
      keyPointsTitle="Important HRA Exemption Rules"
      keyPoints={[
        "Metro Cities (50%): Only Delhi, Mumbai, Kolkata, and Chennai qualify for the 50% basic salary limit; all other cities use 40%.",
        "Tax Regime Eligibility: HRA exemption under Section 10(13A) is available under the Old Tax Regime (not under the New Tax Regime).",
        "Landlord PAN Requirement: If annual rent exceeds ₹1,00,000, quoting the landlord's PAN is mandatory to claim HRA exemption.",
        "Rent Receipts: Keep signed rent receipts or rental agreement records for employer payroll verification and ITR filing.",
      ]}
      faqs={[
        {
          question: "Can I claim HRA exemption under the New Tax Regime?",
          answer:
            "No, HRA exemption under Section 10(13A) is only available if you choose the Old Tax Regime.",
        },
        {
          question: "Which cities qualify as metro cities for 50% HRA?",
          answer:
            "Under Indian Income Tax rules, only Delhi, Mumbai, Kolkata, and Chennai are classified as metro cities for the 50% limit. Other cities qualify for 40%.",
        },
        {
          question: "Can I claim HRA if I pay rent to my parents?",
          answer:
            "Yes, provided you genuinely pay rent (preferably via bank transfer), have a valid rent agreement, and your parents declare that rental income in their ITR.",
        },
        {
          question: "What if I don't receive HRA in my salary but pay rent?",
          answer:
            "Self-employed individuals or salaried employees without HRA can explore deduction under Section 80GG, subject to statutory conditions.",
        },
      ]}
      relatedCalculators={[
        {
          href: "/calculators/income-tax",
          title: "Income Tax Calculator",
          description: "Compare Old vs New Tax Regime liability with deductions.",
        },
        {
          href: "/calculators/gratuity",
          title: "Gratuity Calculator",
          description: "Estimate statutory gratuity based on salary and tenure.",
        },
        {
          href: "/calculators/tds",
          title: "TDS Calculator",
          description: "Calculate withholding tax on rent and professional fees.",
        },
      ]}
    />
  );
}
