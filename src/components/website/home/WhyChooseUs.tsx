import React from "react";
import {
  Award,
  Users,
  ShieldCheck,
  Lock,
  GraduationCap,
  Clock,
  Zap,
  Headphones,
  BadgePercent,
  LucideIcon,
} from "lucide-react";
import { whyChooseUsFeatures } from "@/lib/constants";
import { WhyChooseUsFeature } from "@/types";

const iconMap: Record<string, LucideIcon> = {
  Award,
  Users,
  ShieldCheck,
  Lock,
  GraduationCap,
  Clock,
  Zap,
  Headphones,
  BadgePercent,
};

export default function WhyChooseUs() {
  return (
    <section className="py-12 md:py-18 bg-gradient-to-b from-[#F7F8FD] via-[#F4F5FA] to-[#F7F8FD] ">
      <div className="max-w-content mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header: Clean sans-serif typography with deep navy */}
        <div className="max-w-3xl mb-10 md:mb-12">
          <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-[2rem] font-semibold text-brand-text tracking-tight leading-snug">
            A More Reliable Way to Manage Your Business Compliance
          </h2>
        </div>

        {/* 3-column × 3-row layout containing nine feature cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 lg:gap-6">
          {whyChooseUsFeatures.map((feature: WhyChooseUsFeature) => {
            const Icon = iconMap[feature.iconName] || Award;
            return (
              <div
                key={feature.id}
                className="group relative flex flex-col justify-between p-6 sm:p-7 bg-white rounded-2xl border border-slate-200/80 shadow-[0_4px_16px_rgba(23,21,45,0.03)] transition-all duration-300 hover:bg-brand-lime hover:border-brand-lime hover:shadow-[0_16px_36px_rgba(180,231,23,0.35)] hover:-translate-y-1.5 cursor-pointer"
              >
                <div>
                  {/* Icon squircle: shifts to crisp white squircle with purple icon on lime hover */}
                  <div className="mb-5">
                    <div className="w-12 h-12 rounded-2xl bg-brand-purple-light/80 border border-brand-purple/15 flex items-center justify-center text-brand-purple transition-all duration-300 group-hover:bg-white group-hover:border-white group-hover:text-brand-purple group-hover:shadow-[0_4px_14px_rgba(23,21,45,0.08)] group-hover:scale-105">
                      <Icon className="w-5 h-5 transition-transform duration-300" strokeWidth={1.8} />
                    </div>
                  </div>

                  <h3 className="text-base sm:text-[1.1rem] font-semibold text-brand-text mb-2 tracking-tight leading-snug">
                    {feature.title}
                  </h3>

                  <p className="text-xs sm:text-[0.875rem] text-brand-muted leading-relaxed group-hover:text-brand-text/85 transition-colors">
                    {feature.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
