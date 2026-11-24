import React from "react";
import Link from "next/link";
import { ArrowRight, Building2, FileSpreadsheet, ReceiptText, ShieldCheck, Scale, LucideIcon } from "lucide-react";
import { ServiceCategory } from "@/types";
import { cn } from "@/lib/utils";

const iconMap: Record<string, LucideIcon> = {
  Building2,
  FileSpreadsheet,
  ReceiptText,
  ShieldCheck,
  Scale,
};

interface ServiceCardProps {
  category: ServiceCategory;
  className?: string;
}

export function ServiceCard({ category, className }: ServiceCardProps) {
  const Icon = iconMap[category.iconName] || Building2;

  return (
    <div
      className={cn(
        "group relative flex flex-col justify-between p-6 bg-gradient-to-b from-white to-[#FAF9FE] rounded-2xl border border-slate-200/90 shadow-[0_4px_16px_rgba(23,21,45,0.03)] transition-all duration-300",
        "hover:shadow-[0_16px_36px_-6px_rgba(113,10,198,0.12),0_4px_12px_rgba(23,21,45,0.04)] hover:-translate-y-1 hover:border-brand-purple/40",
        className
      )}
    >
      <div>
        {/* Icon: Refined squircle with soft lavender tint and primary purple */}
        <div className="w-11 h-11 rounded-xl bg-brand-purple-light/80 border border-brand-purple/15 flex items-center justify-center text-brand-purple mb-5 transition-all duration-300 group-hover:bg-brand-purple group-hover:text-white group-hover:border-brand-purple group-hover:shadow-[0_6px_16px_rgba(113,10,198,0.25)]">
          <Icon className="w-5 h-5 transition-transform duration-300 group-hover:scale-105" strokeWidth={1.8} />
        </div>

        {/* Title: Balanced font weight & size */}
        <h3 className="text-[1.05rem] sm:text-lg font-semibold text-brand-text mb-2 tracking-tight group-hover:text-brand-purple transition-colors leading-snug">
          {category.title}
        </h3>

        {/* Description: Refined readable size */}
        <p className="text-[0.8125rem] text-brand-muted leading-relaxed mb-4">
          {category.description}
        </p>
      </div>

      <div className="pt-4 border-t border-slate-100/90">
        {/* Link with circular arrow icon moved to the far right with a lighter lime background */}
        <Link
          href={`/services/category/${category.slug}`}
          className="flex items-center justify-between w-full text-xs sm:text-sm font-semibold text-brand-purple transition-all"
        >
          <span>Explore services</span>
          <span className="w-6 h-6 rounded-full bg-brand-lime/20 text-brand-text border border-brand-lime/40 flex items-center justify-center transition-all duration-300 group-hover:bg-brand-lime group-hover:border-brand-lime group-hover:translate-x-0.5">
            <ArrowRight className="w-3.5 h-3.5 text-brand-text" strokeWidth={2.2} />
          </span>
        </Link>
      </div>
    </div>
  );
}
