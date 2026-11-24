import { serviceCategories } from "@/lib/constants";
import { ServiceCategory } from "@/types";

export function getAllCategories(): ServiceCategory[] {
  return serviceCategories;
}

export function getCategoryBySlug(slug: string): ServiceCategory | undefined {
  return serviceCategories.find((c) => c.slug === slug);
}
