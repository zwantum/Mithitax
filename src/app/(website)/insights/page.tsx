import React from "react";
import { insightArticles } from "@/lib/constants";
import InsightsListingClient from "@/components/website/insights/InsightsListingClient";

export const metadata = {
  title: "Insights & Regulatory Updates | Mithi Tax",
  description:
    "Explore practical guides, expert insights, and important updates on GST registration, company incorporation, income tax compliance, and accounting.",
};

export default function InsightsPage() {
  return (
    <div className="bg-white pb-12 sm:pb-16">
      <InsightsListingClient articles={insightArticles} />
    </div>
  );
}
