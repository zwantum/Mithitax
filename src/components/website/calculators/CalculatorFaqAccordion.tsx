"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown } from "lucide-react";
import { cn } from "@/lib/utils";

export interface CalculatorFAQ {
  question: string;
  answer: string;
}

export default function CalculatorFaqAccordion({
  faqs,
  subtitle = "Find answers to common questions about calculations, formulas, and tax compliance.",
}: {
  faqs: CalculatorFAQ[];
  subtitle?: string;
}) {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggle = (index: number) => {
    setOpenIndex((prev) => (prev === index ? null : index));
  };

  return (
    <section className="py-10 md:py-16 bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Centered Heading matching Home FAQSection */}
        <div className="text-center mb-10 md:mb-12">
          <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-[2rem] font-semibold text-brand-text tracking-tight leading-snug mb-3">
            Frequently Asked Questions
          </h2>
          <p className="text-sm sm:text-[0.9375rem] text-brand-muted leading-relaxed font-normal max-w-xl mx-auto">
            {subtitle}
          </p>
        </div>

        {/* Vertical Accordion matching Home FAQSection */}
        <div className="w-full divide-y divide-brand-border border-y border-brand-border">
          {faqs.map((item, index) => {
            const isOpen = openIndex === index;
            return (
              <div
                key={item.question}
                className={cn(
                  "transition-colors duration-200 rounded-xl",
                  isOpen ? "bg-brand-purple-light/40" : "hover:bg-brand-alt/60"
                )}
              >
                <button
                  type="button"
                  onClick={() => toggle(index)}
                  className="w-full py-5 sm:py-6 px-4 sm:px-6 flex items-center justify-between gap-4 text-left focus:outline-none focus-visible:ring-2 focus-visible:ring-brand-purple cursor-pointer"
                  aria-expanded={isOpen}
                >
                  <span className="text-base sm:text-lg font-medium text-brand-text">
                    {item.question}
                  </span>
                  <div
                    className={cn(
                      "flex-shrink-0 w-8 h-8 rounded-full border border-brand-border flex items-center justify-center transition-all duration-300",
                      isOpen
                        ? "bg-brand-purple text-white border-brand-purple rotate-180"
                        : "bg-white text-brand-muted hover:border-brand-purple/40"
                    )}
                  >
                    <ChevronDown className="w-4 h-4" />
                  </div>
                </button>

                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      key="content"
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.25, ease: "easeInOut" }}
                      className="overflow-hidden"
                    >
                      <div className="px-4 sm:px-6 pb-6 text-sm sm:text-base text-brand-muted leading-relaxed font-normal">
                        {item.answer}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
