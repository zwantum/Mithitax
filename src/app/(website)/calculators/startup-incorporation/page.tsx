import React from "react";
import CalculatorPageShell from "@/components/website/calculators/CalculatorPageShell";
import StartupCostCalculatorTool from "@/components/website/calculators/StartupCostCalculatorTool";

export const metadata = {
  title: "Startup Incorporation Cost Calculator India | Pvt Ltd, LLP, OPC | Mithi Tax",
  description:
    "Estimate your company registration and startup incorporation cost in India for Private Limited Company, LLP, and One Person Company (OPC), including DSC, DIN, and MCA fees.",
  keywords: [
    "Startup Incorporation Cost Calculator",
    "Company Registration Cost India",
    "Private Limited Company Registration Fees",
    "LLP Registration Cost India",
    "OPC Incorporation Cost",
    "MCA Filing Fees Calculator",
  ],
};

export default function StartupIncorporationCalculatorPage() {
  return (
    <CalculatorPageShell
      eyebrow="BUSINESS SETUP"
      title="Startup Incorporation Cost Calculator"
      highlightWord="Incorporation Cost"
      description="Get an instant, transparent cost overview for registering a Private Limited Company, Limited Liability Partnership (LLP), or One Person Company (OPC) in India."
      tool={<StartupCostCalculatorTool />}
      guideTitle="What Goes Into Company Incorporation Costs in India?"
      guideParagraphs={[
        "Registering a new business in India involves statutory government fees (MCA filing fees, stamp duty, PAN/TAN allotment) alongside essential founder credentials like Digital Signature Certificates (DSC) and Director Identification Numbers (DIN).",
        "While Private Limited Companies and OPCs are incorporated via the MCA SPICe+ integrated web form, LLPs are registered using the FiLLiP form. Estimating these expenses upfront helps founders budget cleanly from day one.",
      ]}
      formulaLabel="Cost Components Included"
      formulaText="Total Incorporation Cost = DSC & DIN + Name Approval + MCA Government Fees & Stamp Duty + Professional Drafting"
      howToSteps={[
        "Select your preferred Business Structure: Private Limited Company, LLP, or One Person Company (OPC).",
        "Enter your planned Authorized Share Capital (minimum ₹1,00,000).",
        "Set the Number of Directors / Partners (automatically 1 for OPC, minimum 2 for Pvt Ltd & LLP).",
        "View the itemized breakdown of DSC/DIN, name approval, MCA fees, and total estimated setup cost.",
      ]}
      examplesTitle="Startup Setup Cost Examples"
      examples={[
        {
          title: "Private Limited Company (2 Directors, ₹1L Capital)",
          scenario:
            "A 2-founder tech or trading startup incorporating a Private Limited Company with ₹1,00,000 authorized capital.",
          result:
            "DSC/DIN: ₹2,500 + Name: ₹1,000 + Govt Fees: ₹1,000 + Prof/Stamp: ₹3,999 = Est. ₹8,499",
        },
        {
          title: "Limited Liability Partnership (2 Partners)",
          scenario:
            "Two consultants or agency founders registering an LLP with standard partner agreement drafting.",
          result:
            "DSC/DIN: ₹2,500 + Name: ₹1,000 + Govt Fees: ₹500 + Prof/Stamp: ₹3,499 = Est. ₹7,499",
        },
      ]}
      keyPointsTitle="Choosing the Right Structure for Your Startup"
      keyPoints={[
        "Private Limited Company: Best for startups planning to raise equity funding, issue ESOPs, or scale rapidly with limited liability.",
        "Limited Liability Partnership (LLP): Ideal for consulting firms, agencies, and partnerships wanting limited liability with lower annual compliance overhead.",
        "One Person Company (OPC): Designed for solo founders who want corporate limited liability and separate legal status.",
        "Post-Incorporation Essentials: Plan for GST registration, MSME Udyam registration, current bank account setup, and bookkeeping.",
      ]}
      faqs={[
        {
          question: "How long does company or LLP registration take in India?",
          answer:
            "Once all director/partner KYC documents and DSCs are ready, Private Limited, OPC, and LLP registrations typically complete within 7 to 10 working days depending on MCA processing.",
        },
        {
          question: "Does authorized capital affect government registration fees?",
          answer:
            "Yes. Higher authorized share capital increases MCA registration fees and state-specific stamp duty on MoA and AoA.",
        },
        {
          question: "Are PAN and TAN included in company incorporation?",
          answer:
            "Yes, under the MCA SPICe+ process, PAN and TAN are allotted simultaneously along with your Certificate of Incorporation.",
        },
        {
          question: "Can Mithi Tax handle end-to-end company incorporation?",
          answer:
            "Yes. Mithi Tax handles name reservation, DSC/DIN, MoA & AoA drafting, MCA filing, and post-incorporation GST and compliance setup.",
        },
      ]}
      relatedCalculators={[
        {
          href: "/calculators/gst",
          title: "GST Calculator",
          description: "Compute GST tax components and invoice totals across slabs.",
        },
        {
          href: "/calculators/tds",
          title: "TDS Calculator",
          description: "Calculate vendor and contractor TDS deductions easily.",
        },
        {
          href: "/calculators/income-tax",
          title: "Income Tax Calculator",
          description: "Estimate annual tax liability under New vs Old Regime.",
        },
      ]}
    />
  );
}
