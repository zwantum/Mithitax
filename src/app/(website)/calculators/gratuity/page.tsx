import React from "react";
import CalculatorPageShell from "@/components/website/calculators/CalculatorPageShell";
import GratuityCalculatorTool from "@/components/website/calculators/GratuityCalculatorTool";

export const metadata = {
  title: "Gratuity Calculator India Online | 15/26 Statutory Formula | Mithi Tax",
  description:
    "Calculate employee gratuity amount online in India using the Payment of Gratuity Act, 1972 (15/26 statutory formula) based on last drawn basic salary, DA, and years of service.",
  keywords: [
    "Gratuity Calculator India",
    "Gratuity Calculation Formula 15/26",
    "Payment of Gratuity Act 1972",
    "Employee Gratuity Estimator",
    "Gratuity Tax Exemption Limit",
  ],
};

export default function GratuityCalculatorPage() {
  return (
    <CalculatorPageShell
      eyebrow="LABOR & PAYROLL"
      title="Online Gratuity Calculator India"
      highlightWord="Gratuity Calculator"
      description="Estimate statutory gratuity benefits based on your last drawn monthly Basic + DA salary and completed years of service under the Payment of Gratuity Act, 1972."
      tool={<GratuityCalculatorTool />}
      guideTitle="What is Gratuity & How the 15/26 Formula Works"
      guideParagraphs={[
        "Gratuity is a statutory retirement and long-service benefit paid by employers to employees who have completed at least 5 years of continuous service in an establishment covered under the Payment of Gratuity Act, 1972.",
        "The statutory formula calculates 15 days' salary for every completed year of service based on a 26-working-day month, using the employee's last drawn Basic Salary plus Dearness Allowance (DA), capped at ₹20,00,000.",
      ]}
      formulaLabel="Statutory Gratuity Formula (Covered Employees)"
      formulaText="Gratuity = (15 × Last Drawn Monthly Basic Salary + DA × Completed Years of Service) / 26"
      howToSteps={[
        "Enter your Last Drawn Monthly Salary (Basic Salary + Dearness Allowance only).",
        "Adjust the Completed Years of Service slider (minimum 5 years for statutory eligibility).",
        "Instantly view your eligibility status and estimated gratuity payout capped at ₹20,00,000.",
      ]}
      examplesTitle="Gratuity Calculation Examples"
      examples={[
        {
          title: "7 Years of Service Example",
          scenario:
            "An employee with a last drawn Basic + DA of ₹65,000 completes 7 years of continuous service.",
          result:
            "(15 × ₹65,000 × 7) / 26 = Estimated Gratuity: ₹2,62,500",
        },
        {
          title: "12 Years of Service Example",
          scenario:
            "An employee with a last drawn Basic + DA of ₹90,000 completes 12 years of continuous service.",
          result:
            "(15 × ₹90,000 × 12) / 26 = Estimated Gratuity: ₹6,23,077",
        },
      ]}
      keyPointsTitle="Key Gratuity Eligibility & Tax Rules"
      keyPoints={[
        "5-Year Eligibility Rule: Employees generally become eligible for gratuity after completing 5 years of continuous service (except in cases of death or disablement).",
        "26-Day Divisor: A month is counted as 26 working days for calculating 15 days' wage per year.",
        "Rounding of Service Tenure: Any service period exceeding 6 months in the final year is rounded up to the next full year.",
        "Maximum Statutory Cap: Gratuity exemption/cap under the Payment of Gratuity Act is ₹20,00,000.",
      ]}
      faqs={[
        {
          question: "What salary components are included in gratuity calculation?",
          answer:
            "Only Basic Salary and Dearness Allowance (DA) are included in the last drawn monthly salary for statutory gratuity calculation. Allowances like HRA and bonuses are excluded.",
        },
        {
          question: "Is 4 years and 8 months counted as 5 years for gratuity?",
          answer:
            "Under Section 2A / judicial precedents, once an employee completes 4 years and 240 days (or >6 months in the 5th year), it is often treated as 5 completed years for gratuity calculation, subject to company/Act rules.",
        },
        {
          question: "Is gratuity amount taxable for employees?",
          answer:
            "For private sector employees covered under the Payment of Gratuity Act, gratuity received up to ₹20 lakh is exempt from income tax.",
        },
        {
          question: "Can Mithi Tax assist businesses with payroll and HR compliance?",
          answer:
            "Yes. Mithi Tax offers Payroll & HR Management services covering salary structuring, TDS on salary, PF/ESI, and statutory compliance.",
        },
      ]}
      relatedCalculators={[
        {
          href: "/calculators/hra",
          title: "HRA Exemption Calculator",
          description: "Calculate Section 10(13A) HRA tax exemption on salary.",
        },
        {
          href: "/calculators/income-tax",
          title: "Income Tax Calculator",
          description: "Estimate annual income tax under New vs Old Regime.",
        },
        {
          href: "/calculators/tds",
          title: "TDS Calculator",
          description: "Calculate TDS deductions across key Income Tax sections.",
        },
      ]}
    />
  );
}
