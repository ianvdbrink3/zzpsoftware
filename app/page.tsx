import { getToolsSortedByRating } from '@/lib/tools'
import { AnimatedHomePage } from '@/components/AnimatedHomePage'

export default function HomePage() {
  const tools = getToolsSortedByRating()
  return <AnimatedHomePage tools={tools} />
}
