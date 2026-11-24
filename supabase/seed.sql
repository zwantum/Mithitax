-- Seed Service Categories
INSERT INTO public.service_categories (slug, title, description, icon, order_index) VALUES
('business-setup', 'Business Setup', 'Start and establish your business with the right structure.', 'Building2', 1),
('accounting-records', 'Accounting & Records', 'Maintain accurate financial records and reporting.', 'FileSpreadsheet', 2),
('income-tax-records', 'Income Tax Records', 'Tax filing, documentation and expert consultancy support.', 'ReceiptText', 3),
('gst', 'Goods & Services Tax (GST)', 'GST registration, returns and ongoing compliance.', 'ShieldCheck', 4),
('special-registrations', 'Special Registrations & Legal Support', 'Licenses, registrations and legal documentation for your business.', 'Scale', 5)
ON CONFLICT (slug) DO NOTHING;
