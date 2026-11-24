import React from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";

export default function NotFound() {
  return (
    <div className="min-h-[70vh] flex flex-col items-center justify-center text-center px-4">
      <div className="w-16 h-16 rounded-full bg-brand-purple-subtle border border-brand-purple/20 flex items-center justify-center text-brand-purple font-serif font-bold text-2xl mb-6">
        404
      </div>
      <h1 className="font-serif text-3xl sm:text-4xl font-semibold text-brand-text mb-3">
        Page Not Found
      </h1>
      <p className="text-sm sm:text-base text-brand-muted max-w-md mb-8">
        The page you requested could not be found or has been moved to a new regulatory category.
      </p>
      <Button href="/" variant="primary" size="md" withArrow>
        Return to Homepage
      </Button>
    </div>
  );
}
