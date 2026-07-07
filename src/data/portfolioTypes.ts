export interface PortfolioProject {
  slug: string;
  title: string;
  client: string;
  category: string;
  categorySlug: string;
  thumbnailColor: string;
  image?: string;
  summary: string;
  challenge: string[];
  execution: string[];
  solution: string[];
  results: string[];
}
