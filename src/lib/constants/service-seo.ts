export interface ServiceSeoMeta {
  metaTitle: string;
  metaDescription: string;
  primaryKeyword: string;
  secondaryKeywords: string[];
  h1: string;
}

export interface CategorySeoMeta {
  metaTitle: string;
  metaDescription: string;
  primaryKeyword: string;
  secondaryKeywords: string[];
}

export const BUSINESS_ADDRESS =
  "Bishoul, Tatuar, Manigachhi, Darbhanga, Bihar – 847422, India";

export const categorySeoMap: Record<string, CategorySeoMeta> = {
  "business-setup": {
    metaTitle: "Business Registration Services in Bihar | MithiTax",
    metaDescription:
      "Start your business with professional company incorporation, LLP registration, proprietorship and NGO registration assistance from MithiTax in Bihar and across India.",
    primaryKeyword: "Business Registration in Bihar",
    secondaryKeywords: [
      "Company Incorporation in Bihar",
      "LLP Registration in Bihar",
      "Proprietorship Registration in Bihar",
      "NGO Registration in Bihar",
      "Business Registration in Darbhanga",
    ],
  },
  "accounting-records": {
    metaTitle: "Accounting & Bookkeeping Services in Bihar | MithiTax",
    metaDescription:
      "Get reliable accounting, bookkeeping, payroll management and financial reporting support for your business in Darbhanga, Bihar and across India.",
    primaryKeyword: "Accounting Services in Bihar",
    secondaryKeywords: [
      "Bookkeeping Services in Bihar",
      "Accounting Services in Darbhanga",
      "Payroll Management Services in Bihar",
      "Forecasted Financial Statements",
      "Project Viability Report Services",
    ],
  },
  "income-tax-records": {
    metaTitle: "Income Tax Services in Bihar | Tax Consultant – MithiTax",
    metaDescription:
      "Simplify income tax documentation, PAN/TAN applications, TDS/TCS returns and tax compliance with professional assistance from MithiTax.",
    primaryKeyword: "Income Tax Services in Bihar",
    secondaryKeywords: [
      "Tax Consultant in Darbhanga",
      "Tax Consultant in Bihar",
      "TDS Return Filing in Bihar",
      "PAN TAN Application in Bihar",
      "Capital Gains Tax Services in Bihar",
    ],
  },
  gst: {
    metaTitle: "GST Registration & Return Filing in Bihar | MithiTax",
    metaDescription:
      "Get assistance with GST registration, return filing, input tax credit reconciliation, E-Way Bills and GST compliance in Bihar and across India.",
    primaryKeyword: "GST Services in Bihar",
    secondaryKeywords: [
      "GST Registration in Bihar",
      "GST Return Filing in Bihar",
      "GST Consultant in Darbhanga",
      "GST Input Tax Credit Reconciliation",
      "E-Way Bill Services in Bihar",
    ],
  },
  "special-registrations": {
    metaTitle: "Business Licenses & Legal Services in Bihar | MithiTax",
    metaDescription:
      "Get assistance with FSSAI, MSME, Startup, Trademark, RERA, PF, ESI, ROC, MCA and other business registration requirements.",
    primaryKeyword: "Business Registration Services in Bihar",
    secondaryKeywords: [
      "FSSAI Registration in Bihar",
      "MSME Udyam Registration",
      "ROC Compliance Services in Bihar",
      "GeM Registration in Bihar",
      "Digital Signature Certificate in Bihar",
    ],
  },
};

export const serviceSeoMap: Record<string, ServiceSeoMeta> = {
  "company-incorporation": {
    metaTitle: "Company Registration in Bihar | Private Limited Company – MithiTax",
    metaDescription:
      "Register your Private Limited Company with MithiTax. Get expert assistance with company incorporation, documentation and MCA registration in Bihar and across India.",
    primaryKeyword: "Company Registration in Bihar",
    secondaryKeywords: [
      "Private Limited Company Registration",
      "Company Incorporation Services",
      "Company Registration in Darbhanga",
      "Online Company Registration in India",
      "MCA Company Registration",
      "New Business Registration",
    ],
    h1: "Private Limited Company Registration Services",
  },
  "llp-registration": {
    metaTitle: "LLP Registration in Bihar | Limited Liability Partnership – MithiTax",
    metaDescription:
      "Start your LLP with professional registration assistance from MithiTax. Get support with LLP incorporation, documentation and MCA formalities in Bihar and India.",
    primaryKeyword: "LLP Registration in Bihar",
    secondaryKeywords: [
      "LLP Company Registration",
      "Limited Liability Partnership Registration",
      "LLP Registration in Darbhanga",
      "Online LLP Registration India",
      "LLP Incorporation Services",
      "MCA LLP Registration",
    ],
    h1: "LLP Company Registration Services",
  },
  "proprietorship-partnership": {
    metaTitle: "Proprietorship & Partnership Registration in Bihar | MithiTax",
    metaDescription:
      "Start your proprietorship or partnership business with MithiTax. Get assistance with business setup, documentation and applicable registrations in Bihar and India.",
    primaryKeyword: "Proprietorship Registration in Bihar",
    secondaryKeywords: [
      "Partnership Firm Registration",
      "Proprietorship Business Setup",
      "Partnership Registration in Darbhanga",
      "Business Registration in Bihar",
      "Sole Proprietorship Registration",
      "Partnership Firm Setup in India",
    ],
    h1: "Proprietorship & Partnership Business Setup",
  },
  "ngo-registration": {
    metaTitle: "NGO Registration in Bihar | Trust, Society & Section 8 – MithiTax",
    metaDescription:
      "Get professional assistance with NGO and non-profit registration in Bihar. MithiTax helps with documentation and registration formalities for eligible organizations.",
    primaryKeyword: "NGO Registration in Bihar",
    secondaryKeywords: [
      "NGO Registration in Darbhanga",
      "Trust Registration in Bihar",
      "Society Registration in Bihar",
      "Section 8 Company Registration",
      "Non-Profit Organization Registration",
      "NGO Registration Consultant",
    ],
    h1: "NGO & Non-Profit Organization Registration",
  },
  "nidhi-company-registration": {
    metaTitle: "Nidhi Company Registration in Bihar | MCA Assistance – MithiTax",
    metaDescription:
      "Looking to register a Nidhi Company? Get professional assistance with incorporation, required documentation and applicable MCA registration formalities in Bihar and India.",
    primaryKeyword: "Nidhi Company Registration in Bihar",
    secondaryKeywords: [
      "Nidhi Company Incorporation",
      "Nidhi Company Registration Consultant",
      "Nidhi Company Registration in India",
      "MCA Registration Services",
      "Nidhi Company Setup",
    ],
    h1: "Nidhi Company Registration Services",
  },
  "shop-establishment": {
    metaTitle: "Shop & Establishment Registration in Bihar | MithiTax",
    metaDescription:
      "Get assistance with Shop and Establishment registration in Bihar. MithiTax helps businesses with application documentation and applicable state registration requirements.",
    primaryKeyword: "Shop and Establishment Registration in Bihar",
    secondaryKeywords: [
      "Shop Act Registration Bihar",
      "Shop Registration in Darbhanga",
      "Commercial Establishment Registration",
      "Shop License in Bihar",
      "Business Registration Bihar",
      "Establishment License Application",
    ],
    h1: "Shop & Establishment Registration Services",
  },
  "accounting-bookkeeping": {
    metaTitle: "Accounting & Bookkeeping Services in Bihar | MithiTax",
    metaDescription:
      "Simplify your business finances with professional accounting and bookkeeping services. MithiTax supports businesses in Darbhanga, Bihar and across India.",
    primaryKeyword: "Accounting Services in Bihar",
    secondaryKeywords: [
      "Bookkeeping Services in Bihar",
      "Accounting Services in Darbhanga",
      "Online Accounting Services India",
      "Business Accounting Services",
      "Small Business Bookkeeping",
      "Professional Bookkeeping Services",
    ],
    h1: "Professional Accounting & Bookkeeping Services",
  },
  "cost-accounting": {
    metaTitle: "Cost Accounting Services in Bihar | Financial Record Management",
    metaDescription:
      "Maintain accurate financial and cost records with MithiTax. Get professional cost accounting and record maintenance support for your business in Bihar and India.",
    primaryKeyword: "Cost Accounting Services in Bihar",
    secondaryKeywords: [
      "Cost Accounting Services",
      "Cost Record Maintenance",
      "Business Financial Record Management",
      "Cost Accounting Consultant",
      "Financial Accounting Services",
      "Cost Management Services India",
    ],
    h1: "Cost Accounting & Record Maintenance Services",
  },
  "forecasted-financials": {
    metaTitle: "Forecasted Financial Statements in Bihar | MithiTax",
    metaDescription:
      "Plan your business finances with forecasted financial statements. Get assistance with projected income, expenses, cash flow and financial planning in Bihar and India.",
    primaryKeyword: "Forecasted Financial Statements",
    secondaryKeywords: [
      "Projected Financial Statements",
      "Financial Forecasting Services",
      "Business Financial Projections",
      "Financial Statement Preparation",
      "Cash Flow Forecasting",
      "Financial Planning Services Bihar",
    ],
    h1: "Forecasted Financial Statement Preparation",
  },
  "payroll-hr-management": {
    metaTitle: "Payroll Management Services in Bihar | HR & Payroll – MithiTax",
    metaDescription:
      "Simplify employee salary processing and payroll administration with MithiTax. Get payroll and HR management support for businesses in Bihar and across India.",
    primaryKeyword: "Payroll Management Services in Bihar",
    secondaryKeywords: [
      "Payroll Services in Darbhanga",
      "HR Management Services",
      "Employee Payroll Processing",
      "Salary Processing Services",
      "Payroll Compliance Services",
      "Outsourced Payroll Management India",
    ],
    h1: "Payroll & HR Management Services",
  },
  "project-viability-report": {
    metaTitle: "Project Viability Report Services in Bihar | MithiTax",
    metaDescription:
      "Evaluate your business project with professional viability report assistance. Get financial projections, cost estimates and feasibility analysis support from MithiTax.",
    primaryKeyword: "Project Viability Report Services",
    secondaryKeywords: [
      "Project Feasibility Report",
      "Business Project Report",
      "Project Financial Analysis",
      "Project Cost Estimation",
      "Business Viability Assessment",
      "Project Report Consultant in Bihar",
    ],
    h1: "Project Viability & Financial Report Services",
  },
  "financial-statements": {
    metaTitle: "Standalone & Consolidated Financial Statements | MithiTax",
    metaDescription:
      "Get assistance with standalone and consolidated financial statement preparation. MithiTax supports businesses with organized financial reporting and accounting services in Bihar and India.",
    primaryKeyword: "Consolidated Financial Statement Services",
    secondaryKeywords: [
      "Standalone Financial Statements",
      "Financial Statement Preparation",
      "Consolidated Accounts Preparation",
      "Business Financial Reporting",
      "Financial Accounting Services",
      "Annual Financial Statements",
    ],
    h1: "Standalone & Consolidated Financial Statement Services",
  },
  "pan-tan-application": {
    metaTitle: "PAN & TAN Application Services in Bihar | MithiTax",
    metaDescription:
      "Apply for PAN and TAN with professional documentation assistance from MithiTax. Get support for individual and business PAN and TAN applications in Bihar and India.",
    primaryKeyword: "PAN TAN Application in Bihar",
    secondaryKeywords: [
      "PAN Card Application Services",
      "TAN Registration Services",
      "Business PAN Application",
      "Company PAN Card",
      "TAN Application in Darbhanga",
      "Online PAN TAN Application India",
    ],
    h1: "PAN & TAN Application Services",
  },
  "tds-tcs-reconciliation": {
    metaTitle: "TDS & TCS Return Filing in Bihar | Reconciliation – MithiTax",
    metaDescription:
      "Get assistance with TDS and TCS return filing, reconciliation and tax compliance. MithiTax supports businesses with TDS/TCS requirements in Bihar and across India.",
    primaryKeyword: "TDS Return Filing in Bihar",
    secondaryKeywords: [
      "TCS Return Filing",
      "TDS Reconciliation Services",
      "TDS Consultant in Darbhanga",
      "Quarterly TDS Return Filing",
      "TDS Compliance Services",
      "TCS Reconciliation Services",
    ],
    h1: "TDS / TCS Return Filing & Reconciliation Services",
  },
  "capital-gain-tax-valuation": {
    metaTitle: "Capital Gains & Income Tax Valuation Services | MithiTax",
    metaDescription:
      "Get professional assistance with capital gains calculations, income tax valuation and related tax documentation. Serving individuals and businesses in Bihar and India.",
    primaryKeyword: "Capital Gains Tax Services in Bihar",
    secondaryKeywords: [
      "Capital Gains Tax Calculation",
      "Income Tax Valuation Services",
      "Capital Gains Tax Consultant",
      "Property Capital Gains Tax",
      "Capital Gains Tax Consultancy India",
      "Income Tax Consultancy in Darbhanga",
    ],
    h1: "Capital Gains & Income Tax Valuation Services",
  },
  "search-seizure-consultancy": {
    metaTitle: "Income Tax Search & Seizure Consultancy in Bihar | MithiTax",
    metaDescription:
      "Get professional guidance for income tax search and seizure matters, documentation and compliance requirements. MithiTax offers consultancy support in Bihar and India.",
    primaryKeyword: "Income Tax Search and Seizure Consultancy",
    secondaryKeywords: [
      "Income Tax Search Consultancy",
      "Income Tax Seizure Assistance",
      "Tax Investigation Consultancy",
      "Income Tax Proceedings Support",
      "Income Tax Consultant in Bihar",
      "Tax Documentation Assistance",
    ],
    h1: "Income Tax Search & Seizure Consultancy",
  },
  "tax-compliance-support": {
    metaTitle: "Tax Compliance Services in Bihar | Income Tax Support – MithiTax",
    metaDescription:
      "Manage your tax obligations with professional compliance support from MithiTax. Get assistance with tax documentation, filing requirements and regulatory compliance in Bihar and India.",
    primaryKeyword: "Tax Compliance Services in Bihar",
    secondaryKeywords: [
      "Tax Compliance Consultant",
      "Income Tax Compliance Services",
      "Business Tax Compliance",
      "Tax Filing Assistance",
      "Tax Consultant in Darbhanga",
      "Tax Compliance Support India",
    ],
    h1: "Professional Tax Compliance Support Services",
  },
  "gst-registration": {
    metaTitle: "GST Registration in Bihar | GST Consultant in Darbhanga – MithiTax",
    metaDescription:
      "Need GST registration in Bihar? MithiTax provides professional assistance with GST applications, documentation and registration requirements for businesses across India.",
    primaryKeyword: "GST Registration in Bihar",
    secondaryKeywords: [
      "GST Registration in Darbhanga",
      "Online GST Registration",
      "GST Consultant in Bihar",
      "GST Registration for New Business",
      "GST Number Application",
      "GST Registration Services India",
    ],
    h1: "GST Registration Services in Bihar & Across India",
  },
  "gst-returns": {
    metaTitle: "GST Return Filing in Bihar | Monthly & Annual Returns – MithiTax",
    metaDescription:
      "Get professional assistance with monthly, quarterly and annual GST return filing. MithiTax helps businesses manage GST returns and compliance in Bihar and India.",
    primaryKeyword: "GST Return Filing in Bihar",
    secondaryKeywords: [
      "GST Monthly Return Filing",
      "GST Quarterly Return Filing",
      "Annual GST Return Filing",
      "GSTR-1 Filing Services",
      "GSTR-3B Filing Services",
      "GST Return Consultant in Darbhanga",
    ],
    h1: "Monthly, Quarterly & Annual GST Return Filing",
  },
  "gst-input-reconciliation": {
    metaTitle: "GST Input Tax Credit Reconciliation Services in Bihar | MithiTax",
    metaDescription:
      "Simplify GST input tax credit reconciliation with MithiTax. Get assistance with purchase records, ITC matching and GST reconciliation for businesses in Bihar and India.",
    primaryKeyword: "GST Input Tax Credit Reconciliation",
    secondaryKeywords: [
      "GST ITC Reconciliation",
      "Input Tax Credit Matching",
      "GSTR-2B Reconciliation",
      "GST Purchase Reconciliation",
      "GST Reconciliation Services in Bihar",
      "GST Consultant in Darbhanga",
    ],
    h1: "GST Input Tax Credit Reconciliation Services",
  },
  "eway-bills": {
    metaTitle: "E-Way Bill Generation Services in Bihar | GST Compliance – MithiTax",
    metaDescription:
      "Get assistance with GST E-Way Bill generation and related documentation for business transportation. MithiTax supports businesses in Bihar and across India.",
    primaryKeyword: "E-Way Bill Services in Bihar",
    secondaryKeywords: [
      "E-Way Bill Generation",
      "GST E-Way Bill Assistance",
      "E-Way Bill Consultant",
      "E-Way Bill Documentation",
      "E-Way Bill Compliance",
      "GST Transportation Compliance",
    ],
    h1: "GST E-Way Bill Generation & Compliance Services",
  },
  "other-gst-compliances": {
    metaTitle: "GST Compliance Services in Bihar | GST Consultant – MithiTax",
    metaDescription:
      "Manage your GST compliance requirements with MithiTax. Get assistance with GST documentation, notices, registration updates and other applicable GST-related services in Bihar and India.",
    primaryKeyword: "GST Compliance Services in Bihar",
    secondaryKeywords: [
      "GST Compliance Consultant",
      "GST Notice Assistance",
      "GST Documentation Services",
      "GST Amendment Services",
      "GST Consultancy in Darbhanga",
      "GST Advisory Services India",
    ],
    h1: "Other GST-Related Compliance Services",
  },
  "statutory-registrations": {
    metaTitle: "Business Registrations & Licenses in Bihar | MithiTax",
    metaDescription:
      "Get assistance with FSSAI, MSME, Startup India, trademark, RERA, PF and ESI registrations. MithiTax supports business registration requirements in Bihar and across India.",
    primaryKeyword: "Business Registration Services in Bihar",
    secondaryKeywords: [
      "FSSAI Registration in Bihar",
      "MSME Udyam Registration",
      "Startup India Registration",
      "Trademark Registration in Bihar",
      "RERA Registration Services",
      "PF ESI Registration",
      "Business License Consultancy",
    ],
    h1: "Business Registrations, Licenses & Statutory Approvals",
  },
  "legal-agreements": {
    metaTitle: "Legal Document Drafting Services in Bihar | MithiTax",
    metaDescription:
      "Get assistance with business document drafting and legal agreements. MithiTax supports businesses and individuals with professional documentation services in Darbhanga, Bihar and India.",
    primaryKeyword: "Legal Document Drafting Services in Bihar",
    secondaryKeywords: [
      "Legal Agreement Drafting",
      "Business Agreement Preparation",
      "Business Legal Documentation",
      "Partnership Agreement Drafting",
      "Contract Drafting Services",
      "Legal Documentation Consultant",
    ],
    h1: "Document Drafting & Legal Agreement Services",
  },
  "roc-mca-services": {
    metaTitle: "ROC & MCA Compliance Services in Bihar | Company Filings – MithiTax",
    metaDescription:
      "Get assistance with ROC filings, MCA documentation and company compliance requirements. MithiTax supports businesses with corporate compliance services in Bihar and across India.",
    primaryKeyword: "ROC Compliance Services in Bihar",
    secondaryKeywords: [
      "MCA Filing Services",
      "ROC Annual Filing",
      "Company Annual Compliance",
      "MCA Compliance Consultant",
      "ROC Filing in Darbhanga",
      "Company Compliance Services India",
    ],
    h1: "ROC & MCA Filing and Compliance Services",
  },
  "gem-portal-registration": {
    metaTitle: "GeM Portal Registration in Bihar | Government E-Marketplace – MithiTax",
    metaDescription:
      "Register your business on the Government e-Marketplace (GeM) with MithiTax. Get assistance with seller registration, documentation and portal onboarding in Bihar and India.",
    primaryKeyword: "GeM Registration in Bihar",
    secondaryKeywords: [
      "GeM Portal Registration",
      "Government E-Marketplace Registration",
      "GeM Seller Registration",
      "GeM Registration Consultant",
      "GeM Portal Assistance",
      "Government Tender Registration Assistance",
    ],
    h1: "Government e-Marketplace (GeM) Portal Registration",
  },
  "digital-signature-certificate": {
    metaTitle: "Digital Signature Certificate in Bihar | DSC Application – MithiTax",
    metaDescription:
      "Get assistance with Digital Signature Certificate applications for business, MCA and other online filing requirements. MithiTax supports DSC documentation in Bihar and India.",
    primaryKeyword: "Digital Signature Certificate in Bihar",
    secondaryKeywords: [
      "DSC Registration in Bihar",
      "Digital Signature Certificate Application",
      "Class 3 DSC",
      "DSC for Company Registration",
      "DSC for MCA Filing",
      "Digital Signature Services in Darbhanga",
    ],
    h1: "Digital Signature Certificate (DSC) Services",
  },
};
