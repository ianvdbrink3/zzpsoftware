export interface ToolPlan {
  name: string
  price: number
  per: string
  features: string[]
}

export interface ToolPricing {
  free: boolean
  freeTrial: number
  plans: ToolPlan[]
}

export interface ToolFeatures {
  btwAangifte: boolean
  bankKoppeling: boolean
  mobieleApp: boolean
  offertes: boolean
  urenRegistratie: boolean
  projecten: boolean
  api: boolean
  gratisPlan: boolean
  [key: string]: boolean
}

export interface ToolScore {
  gebruiksgemak: number
  functies: number
  prijs: number
  support: number
  overall: number
}

export interface ToolReviewText {
  intro: string
  gebruiksgemak: string
  functies: string
  prijs: string
}

export interface Tool {
  slug: string
  name: string
  tagline: string
  description: string
  logo: string
  affiliateUrl: string
  affiliateNetwork: string
  commissionEur: number
  commissionType: string
  reviewText: ToolReviewText
  pricing: ToolPricing
  rating: number
  reviewCount: number
  pros: string[]
  cons: string[]
  bestFor: string[]
  categories: string[]
  features: ToolFeatures
  score: ToolScore
}
