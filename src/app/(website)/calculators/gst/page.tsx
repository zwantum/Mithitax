import React from "react";
import CalculatorPageShell from "@/components/website/calculators/CalculatorPageShell";
import GstCalculatorTool from "@/components/website/calculators/GstCalculatorTool";

export const metadata = {
  title: "Free GST Calculator Online India | CGST, SGST & IGST | Mithi Tax",
  description:
    "Calculate GST inclusive and exclusive amounts online across 5%, 12%, 18%, and 28% GST slabs. Instant CGST, SGST, IGST breakdown and total invoice value by Mithi Tax.",
  keywords: [
    "GST Calculator India",
    "Online GST Calculator",
    "CGST SGST IGST Calculator",
    "GST Inclusive Exclusive Calculator",
    "GST Tax Slab Calculator",
    "Reverse GST Calculator",
  ],
};

export default function GSTCalculatorPage() {
  return (
    <CalculatorPageShell
      eyebrow="GOODS & SERVICES TAX"
      title="Free Online GST Calculator"
      highlightWord="GST Calculator"
      description="Instantly calculate Goods and Services Tax (GST) for both GST-exclusive and GST-inclusive prices across 5%, 12%, 18%, and 28% tax slabs with CGST, SGST, and IGST splits."
      tool={<GstCalculatorTool />}
      guideTitle="What is a GST Calculator & How Does It Work?"
      guideParagraphs={[
        "A GST Calculator is a free online business utility that helps entrepreneurs, accountants, and consumers compute Goods and Services Tax (GST) amounts accurately in seconds without manual math.",
        "Whether you are generating a B2B tax invoice (GST Exclusive) or verifying an MRP / gross bill (GST Inclusive), the calculator separates the net taxable value and breaks down Central GST (CGST), State GST (SGST), or Integrated GST (IGST) automatically.",
      ]}
      formulaLabel="GST Calculation Formulas"
      formulaText="Add GST (Exclusive): GST = (Amount × GST%) / 100  |  Remove GST (Inclusive): GST = Total − [Total × 100 / (100 + GST%)]"
      howToSteps={[
        "Select Calculation Type: Choose GST Exclusive to add GST, or GST Inclusive to extract GST from a total amount.",
        "Choose Supply Type: Select Intra-State for CGST + SGST (within the same state) or Inter-State for IGST.",
        "Enter the Amount: Type the net price or gross invoice value in Indian Rupees (₹).",
        "Pick the Applicable GST Slab (5%, 12%, 18%, or 28%) to view the instant tax breakdown and total invoice value.",
      ]}
      examplesTitle="GST Calculation Examples"
      examples={[
        {
          title: "GST Exclusive Example (Adding 18% GST)",
          scenario:
            "Suppose you sell consulting services worth ₹10,000 (excluding GST) to a client in the same state at an 18% GST slab.",
          result:
            "CGST (9%): ₹900 + SGST (9%): ₹900 = Total GST ₹1,800 | Final Invoice: ₹11,800",
        },
        {
          title: "GST Inclusive Example (Extracting 18% GST)",
          scenario:
            "Suppose a product is sold at a gross inclusive price of ₹11,800 at an 18% GST rate and you want to find the base value.",
          result:
            "Net Principal: ₹10,000 + GST Component (18%): ₹1,800 | Total: ₹11,800",
        },
      ]}
      keyPointsTitle="Benefits & Indian GST Slab Overview"
      keyPoints={[
        "Eliminates Manual Billing Errors: Ensures accurate invoice totals and clean Input Tax Credit (ITC) matching.",
        "5% & 12% GST Slabs: Applicable to essential goods, food items, and select business services.",
        "18% GST Slab: Standard slab for most IT, consulting, SaaS, professional services, and electronics.",
        "28% GST Slab: Applicable to luxury items, automobiles, and select high-rate goods.",
      ]}
      faqs={[
        {
          question: "What is the difference between GST Exclusive and GST Inclusive?",
          answer:
            "GST Exclusive means GST is added on top of the base price. GST Inclusive means the final price already includes the GST component, and the calculator separates the net value and tax.",
        },
        {
          question: "How are CGST, SGST, and IGST applied?",
          answer:
            "For intra-state supplies (buyer and seller in the same state), total GST splits equally into CGST and SGST (e.g., 9% + 9%). For inter-state supplies (across different states), IGST (18%) applies.",
        },
        {
          question: "When is GST registration mandatory for businesses in India?",
          answer:
            "GST registration is generally required when aggregate annual turnover exceeds ₹40 lakh for goods (₹20 lakh for services, or lower thresholds in special category states), or for inter-state and e-commerce sellers.",
        },
        {
          question: "Can Mithi Tax help with GST registration and monthly GSTR filings?",
          answer:
            "Yes. Mithi Tax assists with new GSTIN registration, monthly and quarterly GSTR-1 & GSTR-3B filings, ITC reconciliation, and E-Way Bills.",
        },
      ]}
      relatedCalculators={[
        {
          href: "/calculators/income-tax",
          title: "Income Tax Calculator",
          description: "Compare Old vs New tax regime liability for FY 2025-26.",
        },
        {
          href: "/calculators/tds",
          title: "TDS Calculator",
          description: "Calculate TDS deductions under Sections 194J, 194C, and 194I.",
        },
        {
          href: "/calculators/startup-incorporation",
          title: "Startup Incorporation Cost",
          description: "Estimate Pvt Ltd, LLP, or OPC registration fees.",
        },
      ]}
    />
  );
}
