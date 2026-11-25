"use client";

import React, { useState } from "react";
import {
  Calculator,
  Receipt,
  Percent,
  ArrowRight,
  Home,
  Building2,
  Wallet,
} from "lucide-react";
import { Modal } from "@/components/ui/modal";

const calculators = [
  {
    id: "gst-calculator",
    title: "GST Calculator",
    subtitle: "Calculate GST amounts, tax components and total invoice values quickly.",
    category: "Goods & Services Tax",
    icon: Calculator,
  },
  {
    id: "income-tax-calculator",
    title: "Income Tax Calculator",
    subtitle: "Estimate your income tax liability based on income and chosen tax regime.",
    category: "Direct Taxation",
    icon: Receipt,
  },
  {
    id: "tds-calculator",
    title: "TDS Calculator",
    subtitle: "Calculate applicable TDS deductions and estimated payable amounts easily.",
    category: "Withholding Tax",
    icon: Percent,
  },
  {
    id: "hra-calculator",
    title: "HRA Exemption Calculator",
    subtitle: "Estimate your House Rent Allowance exemption based on salary and rent paid.",
    category: "Salary & Deductions",
    icon: Home,
  },
  {
    id: "startup-incorporation-calculator",
    title: "Startup Incorporation Cost",
    subtitle: "Estimate incorporation expenses based on your chosen business structure.",
    category: "Business Setup",
    icon: Building2,
  },
  {
    id: "gratuity-calculator",
    title: "Gratuity Calculator",
    subtitle: "Estimate gratuity benefits based on salary and eligible years of service.",
    category: "Labor & Payroll",
    icon: Wallet,
  },
];

export default function CalculatorsSection() {
  const [activeModal, setActiveModal] = useState<string | null>(null);

  // GST State
  const [gstAmount, setGstAmount] = useState<number>(100000);
  const [gstRate, setGstRate] = useState<number>(18);
  const [gstType, setGstType] = useState<"exclusive" | "inclusive">("exclusive");

  // TDS State
  const [tdsAmount, setTdsAmount] = useState<number>(50000);
  const [tdsSection, setTdsSection] = useState<string>("194J");

  // Income Tax State
  const [annualIncome, setAnnualIncome] = useState<number>(1200000);

  // HRA State
  const [basicSalary, setBasicSalary] = useState<number>(600000);
  const [hraReceived, setHraReceived] = useState<number>(240000);
  const [rentPaid, setRentPaid] = useState<number>(216000);
  const [isMetro, setIsMetro] = useState<boolean>(true);

  // Startup Incorporation State
  const [entityType, setEntityType] = useState<"pvt" | "llp" | "opc">("pvt");
  const [authorizedCapital, setAuthorizedCapital] = useState<number>(100000);

  // Gratuity State
  const [lastDrawnSalary, setLastDrawnSalary] = useState<number>(65000);
  const [yearsOfService, setYearsOfService] = useState<number>(7);

  // 1. GST Calculation
  const calculatedGst =
    gstType === "exclusive"
      ? (gstAmount * gstRate) / 100
      : (gstAmount * gstRate) / (100 + gstRate);

  const totalGstAmount =
    gstType === "exclusive" ? gstAmount + calculatedGst : gstAmount;

  // 2. TDS Calculation
  const tdsRates: Record<string, number> = {
    "194J": 10,
    "194I": 10,
    "194C": 2,
    "194H": 5,
  };
  const currentTdsRate = tdsRates[tdsSection] || 10;
  const calculatedTds = (tdsAmount * currentTdsRate) / 100;
  const netPayable = tdsAmount - calculatedTds;

  // 3. Income Tax New Regime Estimate
  const calculateNewRegimeTax = (income: number) => {
    const taxable = Math.max(0, income - 75000);
    if (taxable <= 300000) return 0;
    if (taxable <= 700000) return 0;
    let tax = 0;
    if (taxable > 300000) tax += Math.min(taxable - 300000, 400000) * 0.05;
    if (taxable > 700000) tax += Math.min(taxable - 700000, 300000) * 0.1;
    if (taxable > 1000000) tax += Math.min(taxable - 1000000, 200000) * 0.15;
    if (taxable > 1200000) tax += Math.min(taxable - 1200000, 300000) * 0.2;
    if (taxable > 1500000) tax += (taxable - 1500000) * 0.3;
    const cess = tax * 0.04;
    return Math.round(tax + cess);
  };
  const newRegimeTax = calculateNewRegimeTax(annualIncome);

  // 4. HRA Exemption Calculation
  const tenPercentBasic = basicSalary * 0.1;
  const rentMinusTenPercent = Math.max(0, rentPaid - tenPercentBasic);
  const salaryPercentExemption = isMetro ? basicSalary * 0.5 : basicSalary * 0.4;
  const exemptHra = Math.min(hraReceived, salaryPercentExemption, rentMinusTenPercent);
  const taxableHra = Math.max(0, hraReceived - exemptHra);

  // 5. Startup Incorporation Estimation
  const getStartupCostEstimate = () => {
    let govtFees = entityType === "pvt" ? 1000 : entityType === "llp" ? 500 : 1000;
    if (authorizedCapital > 1500000) {
      govtFees += (authorizedCapital - 1500000) * 0.005;
    }
    const dscAndDin = 2500;
    const nameApproval = 1000;
    const professionalAndStamp = entityType === "pvt" ? 3999 : entityType === "llp" ? 3499 : 3499;
    const total = govtFees + dscAndDin + nameApproval + professionalAndStamp;
    return { govtFees, dscAndDin, nameApproval, professionalAndStamp, total };
  };
  const startupCost = getStartupCostEstimate();

  // 6. Gratuity Calculation (15 * last drawn * tenure / 26)
  const calculatedGratuity = Math.min(
    2000000,
    Math.round((15 * lastDrawnSalary * yearsOfService) / 26)
  );

  return (
    <section className="py-12 md:py-18 bg-gradient-to-b from-[#F7F8FC] via-[#F4F5FA] to-white">
      <div className="max-w-content mx-auto px-4 sm:px-6 lg:px-8">
        {/* Centered Heading with deep navy typography */}
        <div className="text-center max-w-2xl mx-auto mb-10 md:mb-12">
          <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-[2rem] font-semibold text-brand-text tracking-tight leading-snug mb-3">
            Business Calculators
          </h2>

          <p className="text-sm sm:text-[0.9375rem] text-brand-muted leading-relaxed font-normal">
            Use our free online business and tax calculators to estimate taxes, understand financial obligations and make more informed business decisions.
          </p>
        </div>

        {/* 6 Interactive Calculator Cards Grid (3-column × 2-row) with elevated SaaS card depth */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 max-w-5xl mx-auto mb-10">
          {calculators.map((calc) => {
            const Icon = calc.icon;
            return (
              <button
                key={calc.id}
                type="button"
                onClick={() => setActiveModal(calc.id)}
                className="group flex items-start justify-between p-5 sm:p-6 bg-gradient-to-b from-white to-[#FAF9FD] rounded-2xl border border-slate-200/90 shadow-[0_4px_16px_rgba(23,21,45,0.03)] hover:shadow-[0_16px_36px_-6px_rgba(113,10,198,0.12),0_4px_12px_rgba(23,21,45,0.04)] transition-all duration-300 text-left cursor-pointer h-full"
              >
                <div className="flex items-start gap-3.5 sm:gap-4 flex-1 min-w-0 pr-2 sm:pr-3">
                  <div className="w-11 h-11 min-w-[2.75rem] min-h-[2.75rem] rounded-xl bg-brand-purple-light/80 border border-brand-purple/15 flex items-center justify-center text-brand-purple transition-all duration-300 group-hover:bg-brand-purple group-hover:text-white group-hover:shadow-[0_4px_12px_rgba(113,10,198,0.25)] group-hover:scale-105 flex-shrink-0 mt-0.5">
                    <Icon className="w-5 h-5 flex-shrink-0 transition-transform duration-300" strokeWidth={1.8} />
                  </div>
                  <div className="flex-1 min-w-0">
                    <h3 className="text-sm sm:text-[1.05rem] font-semibold text-brand-text group-hover:text-brand-purple transition-colors leading-snug">
                      {calc.title}
                    </h3>
                    <p className="text-xs text-brand-muted font-normal mt-1 leading-relaxed">
                      {calc.subtitle}
                    </p>
                  </div>
                </div>

                <div className="w-7 h-7 rounded-full bg-slate-100 flex items-center justify-center text-slate-500 group-hover:bg-brand-lime group-hover:text-brand-text transition-all duration-300 flex-shrink-0 mt-0.5">
                  <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-0.5" strokeWidth={2.2} />
                </div>
              </button>
            );
          })}
        </div>

        {/* Explore All Calculators CTA */}
        <div className="text-center">
          <a
            href="/calculators"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-brand-lime text-brand-text font-semibold text-sm hover:bg-[#a6d812] shadow-sm hover:shadow transition-all"
          >
            <span>Explore All Calculators</span>
            <ArrowRight className="w-4 h-4" />
          </a>
        </div>

        {/* 1. GST Interactive Modal */}
        <Modal
          isOpen={activeModal === "gst-calculator"}
          onClose={() => setActiveModal(null)}
          title="GST Calculator"
        >
          <div className="space-y-5 text-left">
            <div>
              <label className="text-xs font-semibold text-brand-muted uppercase tracking-wider block mb-1.5">
                Calculation Type
              </label>
              <div className="grid grid-cols-2 gap-2">
                <button
                  type="button"
                  onClick={() => setGstType("exclusive")}
                  className={`py-2 px-3 text-xs font-medium rounded-lg border transition ${gstType === "exclusive"
                      ? "bg-brand-purple text-white border-brand-purple"
                      : "bg-brand-alt border-brand-border text-brand-text"
                    }`}
                >
                  GST Exclusive (Add GST)
                </button>
                <button
                  type="button"
                  onClick={() => setGstType("inclusive")}
                  className={`py-2 px-3 text-xs font-medium rounded-lg border transition ${gstType === "inclusive"
                      ? "bg-brand-purple text-white border-brand-purple"
                      : "bg-brand-alt border-brand-border text-brand-text"
                    }`}
                >
                  GST Inclusive (Extract GST)
                </button>
              </div>
            </div>

            <div>
              <label className="text-xs font-semibold text-brand-muted uppercase tracking-wider block mb-1.5">
                Amount (₹)
              </label>
              <input
                type="number"
                value={gstAmount}
                onChange={(e) => setGstAmount(Number(e.target.value) || 0)}
                className="w-full px-3.5 py-2.5 rounded-xl border border-brand-border text-sm text-brand-text focus:outline-none focus:ring-2 focus:ring-brand-purple"
              />
            </div>

            <div>
              <label className="text-xs font-semibold text-brand-muted uppercase tracking-wider block mb-1.5">
                GST Rate Slabs
              </label>
              <div className="grid grid-cols-4 gap-2">
                {[5, 12, 18, 28].map((rate) => (
                  <button
                    key={rate}
                    type="button"
                    onClick={() => setGstRate(rate)}
                    className={`py-2 text-xs font-semibold rounded-lg border transition ${gstRate === rate
                        ? "bg-brand-purple text-white border-brand-purple"
                        : "bg-brand-alt border-brand-border text-brand-text"
                      }`}
                  >
                    {rate}%
                  </button>
                ))}
              </div>
            </div>

            <div className="p-4 rounded-xl bg-brand-alt border border-brand-border space-y-2 text-sm">
              <div className="flex justify-between text-brand-muted">
                <span>Net Amount:</span>
                <span className="font-semibold text-brand-text">
                  ₹{(gstType === "exclusive" ? gstAmount : gstAmount - calculatedGst).toLocaleString("en-IN", { maximumFractionDigits: 2 })}
                </span>
              </div>
              <div className="flex justify-between text-brand-muted">
                <span>GST ({gstRate}%):</span>
                <span className="font-semibold text-brand-purple">
                  ₹{calculatedGst.toLocaleString("en-IN", { maximumFractionDigits: 2 })}
                </span>
              </div>
              <div className="pt-2 border-t border-brand-border flex justify-between font-bold text-base text-brand-text">
                <span>Total Amount:</span>
                <span>
                  ₹{totalGstAmount.toLocaleString("en-IN", { maximumFractionDigits: 2 })}
                </span>
              </div>
            </div>
          </div>
        </Modal>

        {/* 2. Income Tax Interactive Modal */}
        <Modal
          isOpen={activeModal === "income-tax-calculator"}
          onClose={() => setActiveModal(null)}
          title="Income Tax Calculator (New Tax Regime)"
        >
          <div className="space-y-5 text-left">
            <div>
              <label className="text-xs font-semibold text-brand-muted uppercase tracking-wider block mb-1.5">
                Annual Gross Income (₹)
              </label>
              <input
                type="number"
                value={annualIncome}
                onChange={(e) => setAnnualIncome(Number(e.target.value) || 0)}
                className="w-full px-3.5 py-2.5 rounded-xl border border-brand-border text-sm text-brand-text focus:outline-none focus:ring-2 focus:ring-brand-purple"
              />
            </div>

            <div className="p-4 rounded-xl bg-brand-alt border border-brand-border space-y-2 text-sm">
              <div className="flex justify-between text-brand-muted">
                <span>Gross Income:</span>
                <span className="font-medium text-brand-text">₹{annualIncome.toLocaleString("en-IN")}</span>
              </div>
              <div className="flex justify-between text-brand-muted">
                <span>Standard Deduction:</span>
                <span className="font-medium text-brand-text">₹75,000</span>
              </div>
              <div className="flex justify-between text-brand-muted">
                <span>Taxable Income:</span>
                <span className="font-medium text-brand-text">
                  ₹{Math.max(0, annualIncome - 75000).toLocaleString("en-IN")}
                </span>
              </div>
              <div className="pt-2 border-t border-brand-border flex justify-between font-bold text-base text-brand-text">
                <span>Estimated Total Tax (Inc. 4% Cess):</span>
                <span className="text-brand-purple">
                  ₹{newRegimeTax.toLocaleString("en-IN")}
                </span>
              </div>
            </div>
          </div>
        </Modal>

        {/* 3. TDS Interactive Modal */}
        <Modal
          isOpen={activeModal === "tds-calculator"}
          onClose={() => setActiveModal(null)}
          title="TDS Calculator"
        >
          <div className="space-y-5 text-left">
            <div>
              <label className="text-xs font-semibold text-brand-muted uppercase tracking-wider block mb-1.5">
                Select Section
              </label>
              <select
                value={tdsSection}
                onChange={(e) => setTdsSection(e.target.value)}
                className="w-full px-3.5 py-2.5 rounded-xl border border-brand-border text-sm text-brand-text focus:outline-none focus:ring-2 focus:ring-brand-purple"
              >
                <option value="194J">Section 194J - Professional / Technical Services (10%)</option>
                <option value="194I">Section 194I - Rent on Land, Building or Furniture (10%)</option>
                <option value="194C">Section 194C - Payment to Contractors (2%)</option>
                <option value="194H">Section 194H - Commission or Brokerage (5%)</option>
              </select>
            </div>

            <div>
              <label className="text-xs font-semibold text-brand-muted uppercase tracking-wider block mb-1.5">
                Invoice / Contract Amount (₹)
              </label>
              <input
                type="number"
                value={tdsAmount}
                onChange={(e) => setTdsAmount(Number(e.target.value) || 0)}
                className="w-full px-3.5 py-2.5 rounded-xl border border-brand-border text-sm text-brand-text focus:outline-none focus:ring-2 focus:ring-brand-purple"
              />
            </div>

            <div className="p-4 rounded-xl bg-brand-alt border border-brand-border space-y-2 text-sm">
              <div className="flex justify-between text-brand-muted">
                <span>Invoice Amount:</span>
                <span className="font-semibold text-brand-text">₹{tdsAmount.toLocaleString("en-IN")}</span>
              </div>
              <div className="flex justify-between text-brand-muted">
                <span>Applicable TDS Rate:</span>
                <span className="font-semibold text-brand-text">{currentTdsRate}%</span>
              </div>
              <div className="flex justify-between text-brand-muted">
                <span>TDS to Deduct:</span>
                <span className="font-semibold text-brand-purple">₹{calculatedTds.toLocaleString("en-IN")}</span>
              </div>
              <div className="pt-2 border-t border-brand-border flex justify-between font-bold text-base text-brand-text">
                <span>Net Payout to Vendor:</span>
                <span>₹{netPayable.toLocaleString("en-IN")}</span>
              </div>
            </div>
          </div>
        </Modal>

        {/* 4. HRA Exemption Modal */}
        <Modal
          isOpen={activeModal === "hra-calculator"}
          onClose={() => setActiveModal(null)}
          title="HRA Exemption Calculator (Sec 10(13A))"
        >
          <div className="space-y-4 text-left">
            <div>
              <label className="text-xs font-semibold text-brand-muted uppercase tracking-wider block mb-1">
                Annual Basic Salary (₹)
              </label>
              <input
                type="number"
                value={basicSalary}
                onChange={(e) => setBasicSalary(Number(e.target.value) || 0)}
                className="w-full px-3.5 py-2 rounded-xl border border-brand-border text-sm text-brand-text focus:outline-none focus:ring-2 focus:ring-brand-purple"
              />
            </div>

            <div className="grid grid-cols-2 gap-3">
              <div>
                <label className="text-xs font-semibold text-brand-muted uppercase tracking-wider block mb-1">
                  Annual HRA Received (₹)
                </label>
                <input
                  type="number"
                  value={hraReceived}
                  onChange={(e) => setHraReceived(Number(e.target.value) || 0)}
                  className="w-full px-3.5 py-2 rounded-xl border border-brand-border text-sm text-brand-text focus:outline-none focus:ring-2 focus:ring-brand-purple"
                />
              </div>

              <div>
                <label className="text-xs font-semibold text-brand-muted uppercase tracking-wider block mb-1">
                  Total Annual Rent Paid (₹)
                </label>
                <input
                  type="number"
                  value={rentPaid}
                  onChange={(e) => setRentPaid(Number(e.target.value) || 0)}
                  className="w-full px-3.5 py-2 rounded-xl border border-brand-border text-sm text-brand-text focus:outline-none focus:ring-2 focus:ring-brand-purple"
                />
              </div>
            </div>

            <div>
              <label className="text-xs font-semibold text-brand-muted uppercase tracking-wider block mb-1">
                City Type
              </label>
              <div className="grid grid-cols-2 gap-2">
                <button
                  type="button"
                  onClick={() => setIsMetro(true)}
                  className={`py-2 px-3 text-xs font-semibold rounded-lg border transition ${isMetro
                      ? "bg-brand-purple text-white border-brand-purple"
                      : "bg-brand-alt border-brand-border text-brand-text"
                    }`}
                >
                  Metro (Delhi, Mumbai, Kolkata, Chennai) - 50%
                </button>
                <button
                  type="button"
                  onClick={() => setIsMetro(false)}
                  className={`py-2 px-3 text-xs font-semibold rounded-lg border transition ${!isMetro
                      ? "bg-brand-purple text-white border-brand-purple"
                      : "bg-brand-alt border-brand-border text-brand-text"
                    }`}
                >
                  Non-Metro City - 40%
                </button>
              </div>
            </div>

            <div className="p-4 rounded-xl bg-brand-alt border border-brand-border space-y-2 text-sm mt-3">
              <div className="flex justify-between text-brand-muted">
                <span>Actual HRA Received:</span>
                <span className="font-semibold text-brand-text">₹{hraReceived.toLocaleString("en-IN")}</span>
              </div>
              <div className="flex justify-between text-brand-muted">
                <span>Tax-Exempt HRA (Sec 10(13A)):</span>
                <span className="font-semibold text-emerald-600">₹{exemptHra.toLocaleString("en-IN")}</span>
              </div>
              <div className="pt-2 border-t border-brand-border flex justify-between font-bold text-base text-brand-text">
                <span>Taxable HRA Component:</span>
                <span className="text-brand-purple">₹{taxableHra.toLocaleString("en-IN")}</span>
              </div>
            </div>
          </div>
        </Modal>

        {/* 5. Startup Incorporation Modal */}
        <Modal
          isOpen={activeModal === "startup-incorporation-calculator"}
          onClose={() => setActiveModal(null)}
          title="Startup Incorporation Cost Estimator"
        >
          <div className="space-y-4 text-left">
            <div>
              <label className="text-xs font-semibold text-brand-muted uppercase tracking-wider block mb-1.5">
                Entity Structure
              </label>
              <div className="grid grid-cols-3 gap-2">
                {[
                  { id: "pvt", label: "Private Limited" },
                  { id: "llp", label: "LLP (Partnership)" },
                  { id: "opc", label: "One Person Co (OPC)" },
                ].map((type) => (
                  <button
                    key={type.id}
                    type="button"
                    onClick={() => setEntityType(type.id as typeof entityType)}
                    className={`py-2 px-2 text-xs font-semibold rounded-lg border text-center transition ${entityType === type.id
                        ? "bg-brand-purple text-white border-brand-purple"
                        : "bg-brand-alt border-brand-border text-brand-text"
                      }`}
                  >
                    {type.label}
                  </button>
                ))}
              </div>
            </div>

            <div>
              <label className="text-xs font-semibold text-brand-muted uppercase tracking-wider block mb-1">
                Authorized Share Capital (₹)
              </label>
              <input
                type="number"
                value={authorizedCapital}
                onChange={(e) => setAuthorizedCapital(Number(e.target.value) || 0)}
                className="w-full px-3.5 py-2 rounded-xl border border-brand-border text-sm text-brand-text focus:outline-none focus:ring-2 focus:ring-brand-purple"
              />
            </div>

            <div className="p-4 rounded-xl bg-brand-alt border border-brand-border space-y-2 text-sm">
              <div className="flex justify-between text-brand-muted">
                <span>Govt &amp; MCA Filing Fees:</span>
                <span className="font-semibold text-brand-text">₹{startupCost.govtFees.toLocaleString("en-IN")}</span>
              </div>
              <div className="flex justify-between text-brand-muted">
                <span>Name Approval (RUN / SPICe+):</span>
                <span className="font-semibold text-brand-text">₹{startupCost.nameApproval.toLocaleString("en-IN")}</span>
              </div>
              <div className="flex justify-between text-brand-muted">
                <span>DSC &amp; DIN for 2 Directors:</span>
                <span className="font-semibold text-brand-text">₹{startupCost.dscAndDin.toLocaleString("en-IN")}</span>
              </div>
              <div className="flex justify-between text-brand-muted">
                <span>Professional &amp; Stamp Duty:</span>
                <span className="font-semibold text-brand-text">₹{startupCost.professionalAndStamp.toLocaleString("en-IN")}</span>
              </div>
              <div className="pt-2 border-t border-brand-border flex justify-between font-bold text-base text-brand-text">
                <span>Estimated All-Inclusive Setup Cost:</span>
                <span className="text-brand-purple">₹{startupCost.total.toLocaleString("en-IN")}</span>
              </div>
            </div>
          </div>
        </Modal>

        {/* 6. Gratuity Calculator Modal */}
        <Modal
          isOpen={activeModal === "gratuity-calculator"}
          onClose={() => setActiveModal(null)}
          title="Gratuity Calculator (Payment of Gratuity Act)"
        >
          <div className="space-y-4 text-left">
            <div>
              <label className="text-xs font-semibold text-brand-muted uppercase tracking-wider block mb-1">
                Last Drawn Monthly Basic + DA (₹)
              </label>
              <input
                type="number"
                value={lastDrawnSalary}
                onChange={(e) => setLastDrawnSalary(Number(e.target.value) || 0)}
                className="w-full px-3.5 py-2 rounded-xl border border-brand-border text-sm text-brand-text focus:outline-none focus:ring-2 focus:ring-brand-purple"
              />
            </div>

            <div>
              <label className="text-xs font-semibold text-brand-muted uppercase tracking-wider block mb-1">
                Completed Years of Service (Min 5 Years)
              </label>
              <input
                type="number"
                value={yearsOfService}
                onChange={(e) => setYearsOfService(Number(e.target.value) || 0)}
                className="w-full px-3.5 py-2 rounded-xl border border-brand-border text-sm text-brand-text focus:outline-none focus:ring-2 focus:ring-brand-purple"
              />
            </div>

            <div className="p-4 rounded-xl bg-brand-alt border border-brand-border space-y-2 text-sm mt-3">
              <div className="flex justify-between text-brand-muted">
                <span>Calculation Basis:</span>
                <span className="font-semibold text-brand-text">(15 × {lastDrawnSalary.toLocaleString("en-IN")} × {yearsOfService}) / 26</span>
              </div>
              <div className="flex justify-between text-brand-muted">
                <span>Statutory Tax-Free Limit:</span>
                <span className="font-semibold text-brand-text">₹20,00,000</span>
              </div>
              <div className="pt-2 border-t border-brand-border flex justify-between font-bold text-base text-brand-text">
                <span>Total Gratuity Payable:</span>
                <span className="text-brand-purple">₹{calculatedGratuity.toLocaleString("en-IN")}</span>
              </div>
            </div>
          </div>
        </Modal>
      </div>
    </section>
  );
}
