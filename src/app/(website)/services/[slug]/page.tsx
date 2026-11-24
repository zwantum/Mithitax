import React from "react";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, CheckCircle2, Clock, ShieldCheck, Tag } from "lucide-react";
import { serviceCategories } from "@/lib/constants";
import { Button } from "@/components/ui/button";

interface PageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  const params: { slug: string }[] = [];
  serviceCategories.forEach((cat) => {
    cat.services.forEach((s) => {
      params.push({ slug: s.slug });
    });
  });
  return params;
}

export async function generateMetadata({ params }: PageProps) {
  const { slug } = await params;
  let serviceFound;
  for (const cat of serviceCategories) {
    const s = cat.services.find((item) => item.slug === slug);
    if (s) {
      serviceFound = s;
      break;
    }
  }
  if (!serviceFound) return { title: "Service Not Found" };
  return {
    title: `${serviceFound.title} | Mithi Tax Services`,
    description: serviceFound.description,
  };
}

export default async function ServiceDetailPage({ params }: PageProps) {
  const { slug } = await params;
  let service;
  let category;

  for (const cat of serviceCategories) {
    const s = cat.services.find((item) => item.slug === slug);
    if (s) {
      service = s;
      category = cat;
      break;
    }
  }

  if (!service || !category) {
    notFound();
  }

  return (
    <div className="py-14 sm:py-20 bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <Link
          href={`/services/category/${category.slug}`}
          className="inline-flex items-center gap-1.5 text-xs font-semibold text-brand-purple hover:underline mb-8"
        >
          <ArrowLeft className="w-3.5 h-3.5" />
          <span>Back to {category.title}</span>
        </Link>

        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand-purple-subtle text-brand-purple text-xs font-semibold mb-4">
          <Tag className="w-3.5 h-3.5" />
          <span>{category.title}</span>
        </div>

        <h1 className="font-serif text-3xl sm:text-5xl font-semibold text-brand-text tracking-tight mb-4 leading-tight">
          {service.title}
        </h1>

        <p className="text-base sm:text-lg text-brand-muted leading-relaxed font-normal mb-8">
          {service.description}
        </p>

        {/* Deliverables Card */}
        <div className="p-8 rounded-3xl bg-brand-alt/60 border border-brand-border mb-10">
          <h2 className="font-serif text-xl sm:text-2xl font-semibold text-brand-text mb-4">
            Included Statutory Deliverables
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {service.deliverables?.map((item, idx) => (
              <div key={idx} className="flex items-start gap-3 p-3 bg-white rounded-xl border border-brand-border/60">
                <CheckCircle2 className="w-4 h-4 text-brand-purple mt-0.5 flex-shrink-0" />
                <span className="text-xs sm:text-sm font-medium text-brand-text">{item}</span>
              </div>
            ))}
          </div>

          <div className="mt-6 pt-6 border-t border-brand-border flex flex-wrap items-center justify-between gap-4">
            <div className="flex items-center gap-4 text-xs text-brand-muted">
              {service.timelineDays && (
                <span className="flex items-center gap-1.5">
                  <Clock className="w-4 h-4 text-brand-purple" />
                  Estimated: {service.timelineDays} working days
                </span>
              )}
              <span className="flex items-center gap-1.5">
                <ShieldCheck className="w-4 h-4 text-brand-purple" />
                100% MCA / GSTN Compliant
              </span>
            </div>

            <Button href="/contact" variant="primary" size="md" withArrow>
              Enquire for this Service
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
