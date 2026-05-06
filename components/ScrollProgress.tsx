'use client'
import { useScroll, useSpring, motion } from 'framer-motion'

export function ScrollProgress() {
  const { scrollYProgress } = useScroll()
  // Slow, deliberate spring — bar lags slightly behind scroll for a cinematic feel
  const scaleX = useSpring(scrollYProgress, { stiffness: 28, damping: 28, restDelta: 0.001 })
  return (
    <motion.div
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        height: 3,
        background: 'var(--accent)',
        transformOrigin: '0%',
        scaleX,
        zIndex: 100,
      }}
    />
  )
}
