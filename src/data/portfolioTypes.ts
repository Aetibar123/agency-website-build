export interface PortfolioProject {
  slug: string;
  title: string;
  client: string;
  category: string;
  categorySlug: string;
  thumbnailColor: string;
  image?: string;
  summary: string;
  metric?: string;
  metricLabel?: string;
  timeline?: string;
  techStack?: string[];
  challenge: string[];
  execution: string[];
  solution: string[];
  results: string[];
}
