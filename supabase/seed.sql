-- Seed Service Categories
INSERT INTO public.service_categories (slug, title, description, icon, order_index) VALUES
('business-setup', 'Business Setup', 'Start and establish your business with the right structure.', 'Building2', 1),
('accounting-records', 'Accounting & Records', 'Maintain accurate financial records and reporting.', 'FileSpreadsheet', 2),
('income-tax-records', 'Income Tax Records', 'Tax filing, documentation and expert consultancy support.', 'ReceiptText', 3),
('gst', 'Goods & Services Tax (GST)', 'GST registration, returns and ongoing compliance.', 'ShieldCheck', 4),
('special-registrations', 'Special Registrations & Legal Support', 'Licenses, registrations and legal documentation for your business.', 'Scale', 5)
ON CONFLICT (slug) DO NOTHING;

-- Seed All 27 Corporate Services under their respective categories
INSERT INTO public.services (category_id, slug, title, summary, description, deliverables, price_inr, order_index)
SELECT 
  c.id,
  s.slug,
  s.title,
  s.summary,
  s.description,
  s.deliverables::jsonb,
  s.price_inr,
  s.order_index
FROM (
  VALUES
    -- Business Setup
    ('business-setup', 'company-incorporation', 'Company Incorporation', 'Private Limited, Public Limited & OPC end-to-end registration with MCA approvals.', 'Complete company incorporation under the Companies Act 2013 with MCA, ROC approvals, and tax registrations.', '["DIN & DSC for Directors", "MoA & AoA Drafting", "SPICe+ MCA Approval", "Certificate of Incorporation", "PAN & TAN Allocation"]', 6999, 1),
    ('business-setup', 'llp-registration', 'LLP Company Registration', 'Limited Liability Partnership registration with drafted partner agreements.', 'Complete LLP incorporation combining limited liability with partnership operational flexibility.', '["RUN-LLP Name Approval", "FiLLiP Incorporation", "LLP Agreement Drafting", "PAN & TAN"]', 5999, 2),
    ('business-setup', 'proprietorship-partnership', 'Proprietorship / Partnership Setup', 'Fast setup for sole proprietorships and traditional partnership deeds.', 'Streamlined formation for unincorporated sole proprietorships and registered partnership firms.', '["Partnership Deed Drafting", "ROF Filing", "MSME Registration", "Current Bank Account Assistance"]', 2999, 3),
    ('business-setup', 'ngo-registration', 'NGO / Non-Profit Registration', 'Section 8 company, Trust, or Society registration with 12A & 80G tax exemptions.', 'Charitable and developmental entity setup with full tax-exempt and CSR facilitation.', '["Section 8 License", "Trust / Society Deed", "12A & 80G Filings", "CSR-1 Compliance"]', 11999, 4),
    ('business-setup', 'nidhi-company-registration', 'Nidhi Company Registration', 'Complete incorporation and compliance under Nidhi Rules 2014.', 'Mutual benefit finance company incorporation under Section 406 of the Companies Act 2013.', '["NDH-4 Advisory", "Capital Structure Compliance", "MCA SPICe+ Filing", "Statutory Registers"]', 14999, 5),
    ('business-setup', 'shop-establishment', 'Shop & Establishment Registration', 'State-specific trade license and commercial establishment compliance.', 'Mandatory statutory registration under respective State Shops & Commercial Establishments Acts.', '["Labour Dept Application", "Premises Inspection Support", "Gumasta / Trade License Certificate"]', 1999, 6),

    -- Accounting & Records
    ('accounting-records', 'accounting-bookkeeping', 'Accounting and Book keeping Service', 'Systematic ledger maintenance, bank reconciliation and cloud accounting.', 'End-to-end accounting support, chart of accounts setup, and monthly ledger reconciliations.', '["Monthly Bank Reconciliation", "General Ledger Maintenance", "P&L and Balance Sheet", "Cloud Software Setup"]', 3499, 1),
    ('accounting-records', 'cost-accounting', 'Cost Accounting & Record Maintenance', 'Cost allocation, inventory valuation, and statutory cost record audits.', 'Detailed cost sheet development, variance tracking, and CRA-1 cost compliance.', '["Cost Sheet Preparation", "Inventory Valuation (FIFO/WAC)", "CRA-1 Statutory Records"]', 7999, 2),
    ('accounting-records', 'forecasted-financials', 'Forecasted Financial Statement', 'Projections, cash flow forecasting, and budgeting for bank loans and investors.', 'Rigorous 3-5 year financial models and project cash flows suitable for commercial loan underwriting.', '["3-5 Year Projections", "CMA Data for Bank Loans", "DCF Valuation Models", "Sensitivity Analysis"]', 5999, 3),
    ('accounting-records', 'payroll-hr-management', 'Payroll / HR Management', 'Salary processing, PF/ESI deductions, pay slips, and labour law compliance.', 'Full lifecycle payroll processing with automated tax deductions and employee self-service slips.', '["Monthly Pay Slips", "PF & ESI Returns", "TDS on Salary (24Q)", "Form 16 Generation"]', 2499, 4),
    ('accounting-records', 'project-viability-report', 'Project Viability Report', 'Detailed Project Reports (DPR) and financial viability models for funding.', 'Bank-ready project viability assessment evaluating technical, financial, and regulatory aspects.', '["Executive Summary & Market Analysis", "CAPEX & OPEX Forecasts", "Break-Even & DSCR Analysis"]', 9999, 5),
    ('accounting-records', 'financial-statements', 'Standalone & Consolidated Financial Statement', 'Ind AS / AS compliant Balance Sheets, P&L, and group consolidation.', 'Year-end financial preparation adhering to ICAI standards and Companies Act disclosure rules.', '["Ind AS Adjustments", "Inter-company Elimination", "Consolidated Balance Sheet", "Statutory Notes"]', 8999, 6),

    -- Income Tax Records
    ('income-tax-records', 'pan-tan-application', 'PAN & TAN Application', 'Expedited application, correction and re-issuance of PAN and TAN numbers.', 'Direct filing under Form 49A/49B with immediate e-PAN allotment and correction assistance.', '["Form 49A/49B Filing", "Document Verification", "Instant e-PAN Allocation"]', 999, 1),
    ('income-tax-records', 'tds-tcs-reconciliation', 'TDS / TCS Return & Reconciliation', 'Quarterly 24Q, 26Q, 27Q filing, Form 16/16A generation and 26AS matching.', 'Quarterly statutory withholding tax compliance with challan allocation and TRACES portal management.', '["Challan Verification", "Quarterly e-TDS Return", "TRACES Form 16/16A", "TDS Notice Response"]', 2499, 2),
    ('income-tax-records', 'capital-gain-tax-valuation', 'Capital Gain & Income Tax Valuation', 'Fair market valuation for real estate, shares, securities and capital assets.', 'Statutory valuation by registered valuers under Section 56(2)(x) and Rule 11UA guidelines.', '["Registered Valuer Report", "Indexed Cost of Acquisition", "Exemption Advisory (54/54EC/54F)"]', 6999, 3),
    ('income-tax-records', 'search-seizure-consultancy', 'Search & Seizure Consultancy', 'Strategic advisory, assessment representation and notice resolution.', 'Senior advocate and Chartered Accountant defense advisory for investigations under Section 132/133A.', '["Notice Analysis", "Written Submissions Drafting", "Representation before CIT(Appeals)/ITAT"]', 19999, 4),
    ('income-tax-records', 'tax-compliance-support', 'Tax Compliance Support', 'ITR-1 through ITR-7 filings, advance tax computations and assessment appeals.', 'Complete personal and corporate income tax computation, return filing, and refund management.', '["ITR Preparation & e-Filing", "Computation of Total Income", "Advance Tax Challans", "Refund Tracking"]', 1999, 5),

    -- Goods & Services Tax (GST)
    ('gst', 'gst-registration', 'GST Registration', 'New registration, amendment, cancellation and revocations under GST law.', 'Prompt GSTIN acquisition with jurisdictional mapping, business description, and Aadhaar authentication.', '["Aadhaar Authentication", "Jurisdiction Mapping", "GSTIN Certificate", "LUT for Zero-Rated Exports"]', 1499, 1),
    ('gst', 'gst-returns', 'GST Monthly / Quarterly / Annual Returns', 'Timely filing of GSTR-1, GSTR-3B, GSTR-9 annual returns and audits.', 'Accurate monthly and annual return filing with proactive ITC reconciliation and interest minimization.', '["GSTR-1 Sales Report", "GSTR-3B Tax Payment", "GSTR-9 Annual Return", "GSTR-9C Reconciliation"]', 1999, 2),
    ('gst', 'gst-input-reconciliation', 'GST Input Reconciliation', 'Rigorous 2B vs purchase ledger reconciliation to maximize eligible ITC.', 'Automated matching engine ensuring supplier compliance and preventing supplier default notices.', '["Monthly 2B Ledger Matching", "Vendor Follow-up Sheet", "ITC Ineligible Segregation", "Rule 37 Reversals"]', 2999, 3),
    ('gst', 'eway-bills', 'E-Way Bills', 'Fast generation, bulk tracking and compliance for consignment transport.', 'Electronic consignment notes for inter-state and intra-state movement under Rule 138.', '["NIC Portal Integration", "Bulk JSON Generation", "Part-A & Part-B Completion", "Multi-Vehicle E-Way Bills"]', 999, 4),
    ('gst', 'other-gst-compliances', 'Other GST Related Compliances', 'LOU export filings, refund applications, and response to department notices.', 'Statutory responses to SCNs, DRC-01 notices, and inverted duty refund applications.', '["Inverted Duty / Export Refunds", "DRC-01A / DRC-01 Reply", "Appeals under Section 107"]', 4999, 5),

    -- Special Registrations & Legal Support
    ('special-registrations', 'statutory-registrations', 'FSSAI, MSME, Startup, Trademark, RERA, PF, ESI Registration', 'Comprehensive licensing across central and state regulatory authorities.', 'Single-window statutory credential acquisition for domestic commerce and branding.', '["FSSAI Food License", "Udyam MSME Certificate", "DPIIT Startup India", "Trademark Class Filing"]', 2499, 1),
    ('special-registrations', 'legal-agreements', 'Document Drafting & Legal Agreements', 'Founders'' agreements, NDAs, vendor contracts, service agreements & bylaws.', 'Bespoke corporate and civil legal contract drafting mitigating statutory and commercial liabilities.', '["Bespoke Contract Drafting", "Legal Risk Review", "Stamp Duty & Notarization Guidance"]', 3999, 2),
    ('special-registrations', 'roc-mca-services', 'ROC & MCA Services', 'Annual filings (AOC-4, MGT-7), director changes, and share capital alterations.', 'Mandatory annual company secretarial compliance, board resolutions, and electronic filings.', '["Form AOC-4 (Financials)", "Form MGT-7 (Annual Return)", "DIR-3 KYC", "Form PAS-3 / SH-7"]', 4999, 3),
    ('special-registrations', 'gem-portal-registration', 'GEM Portal Registration', 'Government e-Marketplace vendor onboarding, cataloging and bid support.', 'End-to-end seller onboarding for Indian public procurement under Ministry of Commerce.', '["Primary Seller Account", "OEM / Reseller Authorization", "Product & Service Cataloging", "Direct Order Setup"]', 3499, 4),
    ('special-registrations', 'digital-signature-certificate', 'Digital Signature Certificate (DSC)', 'Class 3 DSC issuing for e-tendering, MCA filings, and tax submissions.', 'High-security cryptographic certificates with paperless video verification.', '["Class 3 DSC (Signing & Encryption)", "FIPS USB Cryptographic Token", "Paperless Video eKYC"]', 1499, 5)
) AS s(cat_slug, slug, title, summary, description, deliverables, price_inr, order_index)
JOIN public.service_categories c ON c.slug = s.cat_slug
ON CONFLICT (slug) DO UPDATE SET
  title = EXCLUDED.title,
  summary = EXCLUDED.summary,
  description = EXCLUDED.description,
  deliverables = EXCLUDED.deliverables,
  price_inr = EXCLUDED.price_inr,
  order_index = EXCLUDED.order_index;
