import { insightArticles } from "@/lib/constants";
import { InsightArticle } from "@/types";

export function getAllArticles(): InsightArticle[] {
  return insightArticles;
}

export function getArticleBySlug(slug: string): InsightArticle | undefined {
  return insightArticles.find((a) => a.slug === slug);
}
