import React from "react";
import CalculatorPageShell from "@/components/website/calculators/CalculatorPageShell";
import TdsCalculatorTool from "@/components/website/calculators/TdsCalculatorTool";

export const metadata = {
  title: "TDS Calculator Online India | Section 194J, 194C, 194I | Mithi Tax",
  description:
    "Calculate Tax Deducted at Source (TDS) online for professional fees (194J), rent (194I), contractor payments (194C), and commission (194H) with net payout breakdown.",
  keywords: [
    "TDS Calculator India",
    "Section 194J TDS Calculator",
    "Section 194C TDS Rate",
    "Section 194I Rent TDS",
    "TDS Deduction Calculator Online",
    "Withholding Tax Calculator India",
  ],
};

export default function TDSCalculatorPage() {
  return (
    <CalculatorPageShell
      eyebrow="WITHHOLDING TAX"
      title="Online TDS Calculator India"
      highlightWord="TDS Calculator"
      description="Quickly calculate Tax Deducted at Source (TDS) and net payable amounts across key Income Tax sections including 194J, 194I, 194C, and 194H."
      tool={<TdsCalculatorTool />}
      guideTitle="What is a TDS Calculator & Why Businesses Use It"
      guideParagraphs={[
        "Tax Deducted at Source (TDS) is an advance tax collection mechanism under the Income Tax Act where the payer deducts a prescribed percentage before releasing payment for professional services, rent, contracts, or commissions.",
        "Using a TDS Calculator before processing vendor invoices ensures accurate withholding deductions, prevents short-deduction interest penalties, and keeps your quarterly TDS returns (Forms 24Q, 26Q, 27Q) error-free.",
      ]}
      formulaLabel="TDS & Net Payout Formula"
      formulaText="TDS Amount = Gross Payment × (Applicable TDS Rate / 100)  |  Net Payable = Gross Payment − TDS Amount"
      howToSteps={[
        "Select the Nature of Payment / TDS Section (e.g., 194J Professional Fees, 194I Rent, 194C Contractor, or 194H Commission).",
        "Enter the Gross Payment or base invoice amount (excluding GST if shown separately).",
        "Instantly view the applicable TDS rate, exact TDS amount to deduct, and net payout to the vendor.",
      ]}
      examplesTitle="TDS Calculation Examples"
      examples={[
        {
          title: "Section 194J Professional Fees (10% TDS)",
          scenario:
            "A company pays ₹50,000 as consulting or legal fees to a professional under Section 194J.",
          result:
            "TDS Deducted (10%): ₹5,000 | Net Payable to Consultant: ₹45,000",
        },
        {
          title: "Section 194C Contractor Payment (2% TDS)",
          scenario:
            "A business pays ₹1,00,000 to a corporate contractor / agency under Section 194C.",
          result:
            "TDS Deducted (2%): ₹2,000 | Net Payable to Contractor: ₹98,000",
        },
      ]}
      keyPointsTitle="Common TDS Sections & Compliance Rules"
      keyPoints={[
        "Section 194J (10%): Fees for professional, legal, CA, consulting, or technical services.",
        "Section 194I (10%): Rent paid for land, building, office space, or furniture above the annual threshold.",
        "Section 194C (1% / 2%): Contractor payments (1% for Individual/HUF, 2% for Companies/Firms).",
        "Section 194H (5%): Commission or brokerage payments.",
      ]}
      faqs={[
        {
          question: "What is the due date for depositing deducted TDS?",
          answer:
            "TDS deducted during a month must generally be deposited to the government by the 7th of the next month (30th April for deductions made in March).",
        },
        {
          question: "What happens if PAN is not provided by the deductee?",
          answer:
            "Under Section 206AA, if the recipient does not furnish a valid PAN, TDS must be deducted at a higher rate of 20% or the rate in force, whichever is higher.",
        },
        {
          question: "Should TDS be deducted on the GST component?",
          answer:
            "If GST is shown separately on the invoice, TDS is generally deducted only on the base service value excluding the GST portion.",
        },
        {
          question: "Can Mithi Tax manage quarterly TDS returns and Form 26AS reconciliation?",
          answer:
            "Yes. We handle TDS calculation, challan verification, quarterly return filing, Form 16/16A generation, and TDS/TCS reconciliation.",
        },
      ]}
      relatedCalculators={[
        {
          href: "/calculators/gst",
          title: "GST Calculator",
          description: "Compute CGST, SGST, and IGST for business invoices.",
        },
        {
          href: "/calculators/income-tax",
          title: "Income Tax Calculator",
          description: "Estimate annual tax liability under New vs Old Regime.",
        },
        {
          href: "/calculators/gratuity",
          title: "Gratuity Calculator",
          description: "Calculate statutory employee gratuity benefits.",
        },
      ]}
    />
  );
}
