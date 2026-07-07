import { PortfolioProject } from "./portfolioTypes";
import { projectsPart1 } from "./projectsPart1";
import { projectsPart2 } from "./projectsPart2";
import { projectsPart3 } from "./projectsPart3";

export type { PortfolioProject };

export const portfolioProjects: PortfolioProject[] = [
  ...projectsPart1,
  ...projectsPart2,
  ...projectsPart3,
];

export const getAllProjects = () => portfolioProjects;
export const getProjectBySlug = (slug: string) => portfolioProjects.find(p => p.slug === slug);
