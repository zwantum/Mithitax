import { serviceCategories } from "@/lib/constants";
import { ServiceItem } from "@/types";

export function getAllServices(): ServiceItem[] {
  return serviceCategories.flatMap((c) => c.services);
}

export function getServiceBySlug(slug: string): ServiceItem | undefined {
  return getAllServices().find((s) => s.slug === slug);
}
