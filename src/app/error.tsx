"use client";

import React, { useEffect } from "react";
import { Button } from "@/components/ui/button";

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <div className="min-h-[70vh] flex flex-col items-center justify-center text-center px-4">
      <div className="w-16 h-16 rounded-full bg-red-50 border border-red-200 flex items-center justify-center text-red-600 font-serif font-bold text-2xl mb-6">
        !
      </div>
      <h1 className="font-serif text-3xl sm:text-4xl font-semibold text-brand-text mb-3">
        Something Went Wrong
      </h1>
      <p className="text-sm sm:text-base text-brand-muted max-w-md mb-8">
        An unexpected error occurred while processing this request. Our technical team has been notified.
      </p>
      <div className="flex gap-4">
        <Button onClick={() => reset()} variant="primary" size="md">
          Try Again
        </Button>
        <Button href="/" variant="secondary" size="md">
          Return Home
        </Button>
      </div>
    </div>
  );
}
