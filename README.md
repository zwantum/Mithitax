# Mithi Tax — Full-Stack Enterprise Platform

Modern corporate website and administrative platform for **Mithi Tax**, a financial, taxation, accounting, business registration, and regulatory compliance consultancy in India.

---

## 📁 Architecture Overview

```text
mithi-tax/
├── public/
│   ├── images/
│   │   ├── home/
│   │   ├── about/
│   │   ├── services/
│   │   └── blog/
│   ├── logos/
│   ├── icons/
│   └── fonts/
│
├── src/
│   ├── app/
│   │   ├── (website)/         # Public corporate portal matching approved reference design
│   │   │   ├── layout.tsx
│   │   │   ├── page.tsx       # Homepage (10 sections in exact approved order)
│   │   │   ├── about/
│   │   │   ├── services/
│   │   │   │   ├── page.tsx
│   │   │   │   ├── [slug]/
│   │   │   │   └── category/[slug]/
│   │   │   ├── insights/
│   │   │   │   ├── page.tsx
│   │   │   │   ├── [slug]/
│   │   │   │   └── category/[slug]/
│   │   │   ├── calculators/
│   │   │   │   ├── page.tsx
│   │   │   │   ├── gst/
│   │   │   │   ├── income-tax/
│   │   │   │   └── tds/
│   │   │   ├── contact/
│   │   │   ├── privacy-policy/
│   │   │   └── terms-and-conditions/
│   │   ├── (auth)/            # Authentication flows
│   │   │   ├── login/
│   │   │   ├── forgot-password/
│   │   │   └── reset-password/
│   │   ├── admin/             # Full administration console
│   │   │   ├── layout.tsx
│   │   │   ├── page.tsx
│   │   │   ├── services/
│   │   │   ├── service-categories/
│   │   │   ├── pages/
│   │   │   ├── blog/
│   │   │   ├── enquiries/
│   │   │   ├── testimonials/
│   │   │   ├── clients/
│   │   │   ├── faqs/
│   │   │   ├── media/
│   │   │   ├── calculators/
│   │   │   ├── seo/
│   │   │   ├── users/
│   │   │   └── settings/
│   │   ├── api/               # API Route Handlers
│   │   │   ├── enquiries/
│   │   │   ├── upload/
│   │   │   └── revalidate/
│   │   ├── layout.tsx
│   │   ├── globals.css
│   │   ├── not-found.tsx
│   │   └── error.tsx
│   │
│   ├── components/
│   │   ├── website/           # Website header, footer, hero, services, FAQ, calculators
│   │   ├── admin/             # Admin sidebar, header, tables, dashboard widgets
│   │   └── ui/                # Core UI primitives: Button, Input, Select, Modal, DataTable
│   │
│   ├── features/              # Modular business logic by domain
│   ├── lib/                   # Supabase client/server, validations, constants, auth
│   ├── hooks/                 # Custom React hooks
│   ├── types/                 # Shared TypeScript interfaces
│   ├── config/                # Site configurations
│   └── middleware.ts          # Edge session update middleware
│
├── supabase/
│   ├── migrations/            # PostgreSQL relational schemas
│   ├── seed.sql               # Seed data for services & categories
│   └── config.toml            # Local Supabase CLI configuration
│
├── .env.local
├── .env.example
├── next.config.ts
├── tsconfig.json
├── package.json
└── postcss.config.mjs
```

---

## 🚀 Getting Started

1. **Install dependencies**:
   ```bash
   npm install
   ```

2. **Run development server**:
   ```bash
   npm run dev
   ```

3. **Build for production**:
   ```bash
   npm run build
   npm start
   ```

---

## 🎨 Design System

- **Primary Purple**: `#7D28FF`
- **Lime Accent**: `#B4E717`
- **Primary Text**: `#17172A`
- **Secondary Text**: `#626477`
- **Background**: `#FFFFFF` / `#FAFAFC`
- **Border**: `#EAEAF0`
