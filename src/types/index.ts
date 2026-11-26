export interface ServiceItem {
  title: string;
  slug: string;
  description?: string;
  categorySlug?: string;
  deliverables?: string[];
  timelineDays?: number;
  startingPriceINR?: number;
  h1?: string;
  metaTitle?: string;
  metaDescription?: string;
  primaryKeyword?: string;
  secondaryKeywords?: string[];
}

export interface ServiceCategory {
  id: string;
  slug: string;
  title: string;
  count: number;
  description: string;
  iconName: string;
  services: ServiceItem[];
  metaTitle?: string;
  metaDescription?: string;
  primaryKeyword?: string;
  secondaryKeywords?: string[];
}

export interface ClientLogo {
  name: string;
  tagline?: string;
  iconType: string;
  logoUrl?: string;
}

export interface WhyChooseUsFeature {
  id: number;
  title: string;
  description: string;
  iconName: string;
}

export interface CalculatorItem {
  id: string;
  slug: string;
  title: string;
  description: string;
  iconName: string;
  category: string;
}

export interface InsightArticle {
  id: string;
  slug: string;
  title: string;
  category: string;
  categorySlug?: string;
  readTime: string;
  image: string;
  summary: string;
  content?: string;
  date: string;
  author?: string;
  publishedAt?: string;
}

export interface FAQItem {
  id: string;
  question: string;
  answer: string;
  category?: string;
}

export interface ConsultationFormData {
  fullName: string;
  phoneNumber: string;
  email: string;
  companyName?: string;
  serviceCategory: string;
  requirementDetails: string;
}

export interface EnquiryRecord extends ConsultationFormData {
  id: string;
  createdAt: string;
  status: "new" | "contacted" | "in_progress" | "converted" | "closed";
  notes?: string;
}

export interface UserProfile {
  id: string;
  email: string;
  role: "super_admin" | "admin" | "editor" | "support";
  fullName: string;
  createdAt: string;
}
