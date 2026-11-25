import React from "react";
import Link from "next/link";
import { ArrowRight, CheckCircle2 } from "lucide-react";
import CalculatorFaqAccordion, {
  CalculatorFAQ,
} from "@/components/website/calculators/CalculatorFaqAccordion";

export interface CalculationExample {
  title: string;
  scenario: string;
  result: string;
}

export interface RelatedCalculator {
  href: string;
  title: string;
  description: string;
}

interface CalculatorPageShellProps {
  eyebrow: string;
  title: string;
  highlightWord?: string;
  description: string;
  tool: React.ReactNode;
  guideTitle: string;
  guideParagraphs: string[];
  formulaLabel?: string;
  formulaText?: string;
  howToSteps: string[];
  examplesTitle?: string;
  examples?: CalculationExample[];
  keyPointsTitle?: string;
  keyPoints?: string[];
  faqs: CalculatorFAQ[];
  faqSubtitle?: string;
  relatedCalculators: RelatedCalculator[];
}

export default function CalculatorPageShell({
  eyebrow,
  title,
  highlightWord,
  description,
  tool,
  guideTitle,
  guideParagraphs,
  formulaLabel,
  formulaText,
  howToSteps,
  examplesTitle,
  examples,
  keyPointsTitle,
  keyPoints,
  faqs,
  faqSubtitle,
  relatedCalculators,
}: CalculatorPageShellProps) {
  const renderTitle = () => {
    if (!highlightWord || !title.includes(highlightWord)) {
      return title;
    }
    const parts = title.split(highlightWord);
    return (
      <>
        {parts[0]}
        <span className="text-brand-purple">{highlightWord}</span>
        {parts.slice(1).join(highlightWord)}
      </>
    );
  };

  return (
    <div className="bg-white">
      {/* 1. Hero Header (Full max-w-content, centered header, no Back link) */}
      <section className="relative overflow-hidden pt-8 pb-8 sm:pt-12 sm:pb-10 bg-white">
        <div
          className="absolute top-0 left-1/2 -translate-x-1/2 w-[900px] h-[400px] pointer-events-none"
          style={{
            background:
              "radial-gradient(ellipse 65% 50% at 50% 15%, rgba(113, 10, 198, 0.08) 0%, rgba(180, 231, 23, 0.04) 40%, transparent 75%)",
          }}
          aria-hidden="true"
        />

        <div className="relative z-10 max-w-content mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <div className="inline-flex flex-col items-center mb-3">
              <span className="text-xs font-semibold tracking-wider text-brand-purple uppercase">
                {eyebrow}
              </span>
              <div className="w-8 h-[2px] bg-brand-lime mt-1.5 rounded-full" />
            </div>

            <h1 className="text-3xl sm:text-4xl lg:text-[3rem] font-semibold tracking-tight text-brand-text leading-[1.2] mb-4">
              {renderTitle()}
            </h1>

            <p className="text-sm sm:text-base text-brand-muted leading-relaxed">
              {description}
            </p>
          </div>
        </div>
      </section>

      {/* 2. Interactive Calculator Workspace (Full max-w-content width) */}
      <section className="relative py-8 sm:py-12 bg-gradient-to-b from-[#F4F5FA] via-[#F7F8FC] to-white">
        <div
          className="absolute inset-x-0 top-0 h-14 sm:h-20 bg-gradient-to-b from-white to-transparent pointer-events-none"
          aria-hidden="true"
        />
        <div className="relative z-10 max-w-content mx-auto px-4 sm:px-6 lg:px-8">
          {tool}
        </div>
      </section>

      {/* 3. What It Is, Formula & How to Use (2-Column Tally-style SEO Content) */}
      <section className="py-10 sm:py-14 bg-white">
        <div className="max-w-content mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
            {/* Left: Overview & Formula */}
            <div className="lg:col-span-7 space-y-4">
              <h2 className="text-xl sm:text-2xl md:text-[1.75rem] font-semibold text-brand-text tracking-tight leading-snug">
                {guideTitle}
              </h2>
              <div className="space-y-3 text-sm sm:text-[0.95rem] text-brand-muted leading-relaxed">
                {guideParagraphs.map((para, idx) => (
                  <p key={idx}>{para}</p>
                ))}
              </div>

              {formulaLabel && formulaText && (
                <div className="mt-5 p-5 rounded-2xl bg-[#F8F7FD] border border-brand-purple/20">
                  <div className="text-xs font-semibold uppercase tracking-wider text-brand-purple mb-1.5">
                    {formulaLabel}
                  </div>
                  <p className="text-sm sm:text-base font-semibold text-brand-text">
                    {formulaText}
                  </p>
                </div>
              )}
            </div>

            {/* Right: Step-by-Step How to Use */}
            <div className="lg:col-span-5 p-6 sm:p-7 rounded-2xl bg-gradient-to-b from-white to-[#FAF9FD] border border-slate-200/90 shadow-[0_4px_16px_rgba(23,21,45,0.03)]">
              <h3 className="text-base sm:text-lg font-semibold text-brand-text mb-4">
                How to Use This Calculator
              </h3>
              <ol className="space-y-3.5">
                {howToSteps.map((step, idx) => (
                  <li key={idx} className="flex items-start gap-3">
                    <span className="w-6 h-6 rounded-full bg-brand-purple-light text-brand-purple text-xs font-bold flex items-center justify-center flex-shrink-0 mt-0.5">
                      {idx + 1}
                    </span>
                    <span className="text-xs sm:text-sm text-brand-muted leading-relaxed">
                      {step}
                    </span>
                  </li>
                ))}
              </ol>
            </div>
          </div>
        </div>
      </section>

      {/* 4. Calculation Examples & Key Rules/Benefits */}
      {(examples || keyPoints) && (
        <section className="relative py-10 sm:py-14 bg-gradient-to-b from-[#F4F5FA] via-[#F7F8FC] to-white">
          <div
            className="absolute inset-x-0 top-0 h-14 sm:h-20 bg-gradient-to-b from-white to-transparent pointer-events-none"
            aria-hidden="true"
          />
          <div className="relative z-10 max-w-content mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
            {examples && examples.length > 0 && (
              <div>
                <h2 className="text-xl sm:text-2xl font-semibold text-brand-text tracking-tight mb-5">
                  {examplesTitle || "Practical Calculation Examples"}
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                  {examples.map((ex) => (
                    <div
                      key={ex.title}
                      className="p-6 rounded-2xl bg-white border border-slate-200/90 shadow-[0_4px_16px_rgba(23,21,45,0.03)]"
                    >
                      <h3 className="text-base font-semibold text-brand-text mb-2">
                        {ex.title}
                      </h3>
                      <p className="text-xs sm:text-sm text-brand-muted leading-relaxed mb-3">
                        {ex.scenario}
                      </p>
                      <div className="px-3.5 py-2.5 rounded-xl bg-[#F8F7FD] text-xs sm:text-sm font-semibold text-brand-purple">
                        {ex.result}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {keyPointsTitle && keyPoints && keyPoints.length > 0 && (
              <div className="p-6 sm:p-8 rounded-2xl bg-white border border-slate-200/90 shadow-[0_4px_16px_rgba(23,21,45,0.03)]">
                <h2 className="text-lg sm:text-xl font-semibold text-brand-text mb-4">
                  {keyPointsTitle}
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-3.5">
                  {keyPoints.map((pt, i) => (
                    <div
                      key={i}
                      className="flex items-start gap-2.5 text-xs sm:text-sm text-brand-muted leading-relaxed"
                    >
                      <CheckCircle2 className="w-4 h-4 text-brand-purple flex-shrink-0 mt-0.5" />
                      <span>{pt}</span>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
        </section>
      )}

      {/* 5. Home-Style Interactive FAQ Accordion */}
      {faqs.length > 0 && (
        <CalculatorFaqAccordion faqs={faqs} subtitle={faqSubtitle} />
      )}

      {/* 6. Related Calculators Strip */}
      {relatedCalculators.length > 0 && (
        <section className="relative py-10 sm:py-14 bg-gradient-to-b from-[#F4F5FA] via-[#F7F8FC] to-white">
          <div
            className="absolute inset-x-0 top-0 h-14 sm:h-20 bg-gradient-to-b from-white to-transparent pointer-events-none"
            aria-hidden="true"
          />
          <div className="relative z-10 max-w-content mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex items-center justify-between gap-4 mb-6">
              <h2 className="text-xl sm:text-2xl font-semibold text-brand-text tracking-tight">
                More Free Business Calculators
              </h2>
              <Link
                href="/calculators"
                className="text-xs sm:text-sm font-semibold text-brand-purple hover:underline"
              >
                View All →
              </Link>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
              {relatedCalculators.map((rel) => (
                <Link
                  key={rel.href}
                  href={rel.href}
                  className="group p-6 rounded-2xl bg-white border border-slate-200/90 shadow-[0_4px_16px_rgba(23,21,45,0.03)] hover:border-brand-purple/40 hover:shadow-[0_12px_28px_rgba(113,10,198,0.08)] transition-all flex flex-col justify-between"
                >
                  <div>
                    <h3 className="text-base font-semibold text-brand-text group-hover:text-brand-purple transition-colors mb-1.5">
                      {rel.title}
                    </h3>
                    <p className="text-xs sm:text-sm text-brand-muted leading-relaxed">
                      {rel.description}
                    </p>
                  </div>
                  <span className="inline-flex items-center gap-1.5 text-xs font-semibold text-brand-purple mt-4">
                    <span>Open Calculator</span>
                    <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-0.5" />
                  </span>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}
    </div>
  );
}
