import React from "react";
import { Button } from "@/components/ui/button";
import { siteConfig } from "@/lib/constants";
import { Phone } from "lucide-react";

export default function FinalCTA() {
  return (
    <section className="py-20 md:py-28 bg-brand-purple-subtle/50">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-semibold text-brand-text tracking-tight leading-[1.18] mb-4">
          Ready to Move Your Business Forward?
        </h2>

        <p className="text-base sm:text-lg text-brand-muted leading-relaxed font-normal max-w-xl mx-auto mb-8 sm:mb-10">
          Get expert support for business setup, accounting, taxation and compliance — all under one roof.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <Button
            href="/contact"
            variant="primary"
            size="lg"
            withArrow
            className="w-full sm:w-auto px-8 py-3.5"
          >
            Book a Consultation
          </Button>

          <Button
            href={`tel:${siteConfig.phone.replace(/\s+/g, "")}`}
            variant="secondary"
            size="lg"
            className="w-full sm:w-auto px-8 py-3.5 border-brand-border text-brand-text hover:bg-white"
          >
            <span className="flex items-center gap-2">
              <Phone className="w-4 h-4 text-brand-purple" />
              <span>Call Us: {siteConfig.phone}</span>
            </span>
          </Button>
        </div>
      </div>
    </section>
  );
}
