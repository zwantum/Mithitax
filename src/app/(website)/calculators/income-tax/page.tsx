import React from "react";
import CalculatorPageShell from "@/components/website/calculators/CalculatorPageShell";
import IncomeTaxCalculatorTool from "@/components/website/calculators/IncomeTaxCalculatorTool";

export const metadata = {
  title: "Income Tax Calculator India | New vs Old Tax Regime | Mithi Tax",
  description:
    "Calculate your income tax liability online in India. Compare the New Tax Regime (with ₹75,000 standard deduction & Section 87A rebate) vs the Old Tax Regime.",
  keywords: [
    "Income Tax Calculator India",
    "New vs Old Tax Regime Calculator",
    "ITR Tax Calculator",
    "Standard Deduction Calculator",
    "Section 87A Rebate Calculator",
    "Income Tax Slab Calculator",
  ],
};

export default function IncomeTaxCalculatorPage() {
  return (
    <CalculatorPageShell
      eyebrow="DIRECT TAXATION"
      title="Income Tax Calculator India"
      highlightWord="Income Tax"
      description="Estimate your annual income tax payable under the New Tax Regime (with ₹75,000 standard deduction) or the Old Tax Regime (with Section 80C deductions)."
      tool={<IncomeTaxCalculatorTool />}
      guideTitle="What is an Income Tax Calculator & How Regimes Compare"
      guideParagraphs={[
        "An Income Tax Calculator helps salaried professionals, business owners, and freelancers estimate their annual tax liability before filing their Income Tax Return (ITR).",
        "In India, taxpayers can choose between the New Tax Regime (default, featuring lower slab rates, ₹75,000 standard deduction, and Section 87A rebate up to ₹7 lakh taxable income) and the Old Tax Regime (allowing deductions under Section 80C, HRA, and 80D).",
      ]}
      formulaLabel="Taxable Income Formula"
      formulaText="Net Taxable Income = Gross Annual Income − Standard Deduction − Eligible Deductions (e.g., Sec 80C under Old Regime)"
      howToSteps={[
        "Choose your preferred Tax Regime: New Tax Regime (default) or Old Tax Regime.",
        "Enter your Annual Gross Income in Indian Rupees (₹).",
        "If using the Old Tax Regime, enter your eligible Section 80C deductions (up to ₹1,50,000).",
        "Review your Net Taxable Income, Base Income Tax, 4% Health & Education Cess, and Effective Tax Rate instantly.",
      ]}
      examplesTitle="Income Tax Calculation Examples"
      examples={[
        {
          title: "New Tax Regime Example (₹7,75,000 Income)",
          scenario:
            "A salaried individual earning ₹7,75,000 annually opts for the New Tax Regime with a ₹75,000 standard deduction.",
          result:
            "Net Taxable Income: ₹7,00,000 | Eligible for Section 87A Rebate → Total Tax Payable: ₹0",
        },
        {
          title: "New Tax Regime Example (₹12,00,000 Income)",
          scenario:
            "A salaried professional earning ₹12,00,000 annually under the New Tax Regime after ₹75,000 standard deduction.",
          result:
            "Taxable Income: ₹11,25,000 | Base Tax: ₹68,750 + 4% Cess: ₹2,750 | Total Tax: ₹71,500",
        },
      ]}
      keyPointsTitle="Key Highlights of Indian Income Tax Slabs"
      keyPoints={[
        "Standard Deduction: ₹75,000 under the New Tax Regime (₹50,000 under the Old Regime).",
        "Section 87A Rebate: Zero tax for resident individuals with net taxable income up to ₹7,00,000 under the New Regime.",
        "New Regime Slabs: 0% up to ₹3L, 5% (₹3L–₹7L), 10% (₹7L–₹10L), 15% (₹10L–₹12L), 20% (₹12L–₹15L), 30% above ₹15L.",
        "Health & Education Cess: Mandatory 4% cess is added on top of base income tax in both regimes.",
      ]}
      faqs={[
        {
          question: "Which tax regime is better: New or Old?",
          answer:
            "If you do not claim substantial deductions (like HRA, home loan interest, and full 80C/80D limits), the New Tax Regime usually results in lower tax. If your total deductions are high, the Old Regime may save more.",
        },
        {
          question: "What is the standard deduction for salaried employees?",
          answer:
            "Under the New Tax Regime, salaried employees receive a flat ₹75,000 standard deduction (₹50,000 under the Old Tax Regime).",
        },
        {
          question: "Is Health & Education Cess included in the estimate?",
          answer:
            "Yes, the calculator automatically adds the mandatory 4% Health & Education Cess on the base income tax amount.",
        },
        {
          question: "Can Mithi Tax help file my business or individual ITR?",
          answer:
            "Yes. Our team provides end-to-end income tax return preparation, tax planning, capital gains computation, and compliance support.",
        },
      ]}
      relatedCalculators={[
        {
          href: "/calculators/hra",
          title: "HRA Exemption Calculator",
          description: "Calculate Section 10(13A) HRA tax exemption on rent paid.",
        },
        {
          href: "/calculators/tds",
          title: "TDS Calculator",
          description: "Check TDS deduction rates under Sections 194J, 194I, and 194C.",
        },
        {
          href: "/calculators/gst",
          title: "GST Calculator",
          description: "Calculate inclusive & exclusive GST amounts across all slabs.",
        },
      ]}
    />
  );
}
