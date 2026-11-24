import React from "react";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, ArrowRight, CheckCircle2 } from "lucide-react";
import { serviceCategories } from "@/lib/constants";
import { Button } from "@/components/ui/button";

interface PageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return serviceCategories.map((cat) => ({
    slug: cat.slug,
  }));
}

export async function generateMetadata({ params }: PageProps) {
  const { slug } = await params;
  const category = serviceCategories.find((c) => c.slug === slug);
  if (!category) return { title: "Category Not Found" };
  return {
    title: `${category.title} Services | Mithi Tax`,
    description: category.description,
  };
}

export default async function ServiceCategoryPage({ params }: PageProps) {
  const { slug } = await params;
  const category = serviceCategories.find((c) => c.slug === slug);

  if (!category) {
    notFound();
  }

  return (
    <div className="py-14 sm:py-20 bg-white">
      <div className="max-w-content mx-auto px-4 sm:px-6 lg:px-8">
        <Link
          href="/services"
          className="inline-flex items-center gap-1.5 text-xs font-semibold text-brand-purple hover:underline mb-8"
        >
          <ArrowLeft className="w-3.5 h-3.5" />
          <span>Back to all services</span>
        </Link>

        <div className="max-w-3xl mb-12">
          <div className="inline-flex items-center gap-2 mb-3">
            <span className="w-2 h-2 rounded-full bg-brand-lime" />
            <span className="text-xs font-semibold tracking-wider text-brand-muted uppercase">
              CATEGORY OVERVIEW
            </span>
          </div>
          <h1 className="font-serif text-3xl sm:text-5xl font-semibold text-brand-text tracking-tight mb-4">
            {category.title}
          </h1>
          <p className="text-base sm:text-lg text-brand-muted leading-relaxed font-normal">
            {category.description}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          {category.services.map((service) => (
            <div
              key={service.slug}
              className="p-6 rounded-2xl bg-white border border-brand-border shadow-subtle hover:shadow-card hover:border-brand-purple/30 transition flex flex-col justify-between"
            >
              <div>
                <h3 className="font-serif text-lg font-semibold text-brand-text mb-2">
                  {service.title}
                </h3>
                <p className="text-xs sm:text-sm text-brand-muted leading-relaxed mb-4">
                  {service.description}
                </p>
              </div>

              <div className="pt-4 border-t border-brand-border/60 flex items-center justify-between">
                <Link
                  href={`/services/${service.slug}`}
                  className="inline-flex items-center gap-1 text-xs font-semibold text-brand-purple hover:underline"
                >
                  <span>Explore Service</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </Link>
                <Link
                  href="/contact"
                  className="text-xs text-brand-muted hover:text-brand-text"
                >
                  Book Free Call →
                </Link>
              </div>
            </div>
          ))}
        </div>

        <div className="p-8 rounded-3xl bg-brand-purple-subtle/60 border border-brand-purple/20 flex flex-col sm:flex-row items-center justify-between gap-6">
          <div>
            <h3 className="font-serif text-xl sm:text-2xl font-semibold text-brand-text mb-1">
              Need assistance with multiple {category.title} requirements?
            </h3>
            <p className="text-xs sm:text-sm text-brand-muted">
              Our enterprise team offers bundled statutory retainers with dedicated compliance officers.
            </p>
          </div>
          <Button href="/contact" variant="primary" size="md" withArrow className="flex-shrink-0">
            Request Custom Quotation
          </Button>
        </div>
      </div>
    </div>
  );
}
