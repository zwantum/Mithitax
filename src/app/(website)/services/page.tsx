import React from "react";
import { serviceCategories } from "@/lib/constants";
import ServicesDirectoryClient from "@/components/website/services/ServicesDirectoryClient";

export const metadata = {
  title: "All Services | Mithi Tax Corporate, GST & Tax Solutions",
  description:
    "Explore our complete suite of business registration, GST filing, income tax compliance, accounting, bookkeeping, and special licensing services.",
};

export default function ServicesPage() {
  return (
    <div className="bg-white pb-10 sm:pb-14">
      <ServicesDirectoryClient categories={serviceCategories} />
    </div>
  );
}
