import toolsData from '@/data/tools.json'
import type { Tool } from '@/types'

export const tools: Tool[] = toolsData as Tool[]

export function getToolBySlug(slug: string): Tool | undefined {
  return tools.find(t => t.slug === slug)
}

export function getToolsSortedByRating(): Tool[] {
  return [...tools].sort((a, b) => b.rating - a.rating)
}

export function getCheapestPlan(tool: Tool): number {
  const paid = tool.pricing.plans.filter(p => p.price > 0)
  if (paid.length === 0) return 0
  return Math.min(...paid.map(p => p.price))
}

export function formatPrice(price: number): string {
  if (price === 0) return 'Gratis'
  return `€${price}/mnd`
}
