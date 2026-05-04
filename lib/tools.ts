import toolsData from "@/data/tools.json";
import type { Tool } from "@/types";
const tools = toolsData as Tool[];
export function getAllTools(): Tool[] { return tools; }
export function getToolBySlug(slug: string): Tool | undefined { return tools.find((t) => t.slug === slug); }
export function getToolsSortedByRating(): Tool[] { return [...tools].sort((a, b) => b.scores.overall - a.scores.overall); }
export function getCheapestPlan(tool: Tool): number { return tool.pricing.startingPrice; }
export function formatPrice(price: number): string { return price === 0 ? "Gratis" : `€${price}/mnd`; }
