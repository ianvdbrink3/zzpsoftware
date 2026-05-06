'use client'
import { motion } from 'framer-motion'
import { ReactNode } from 'react'

const EASE: [number, number, number, number] = [0.25, 0.1, 0.25, 1]

type RevealProps = {
  children: ReactNode
  delay?: number
  direction?: 'up' | 'left' | 'right' | 'fade'
  className?: string
  style?: React.CSSProperties
}

export function Reveal({ children, delay = 0, direction = 'up', className, style }: RevealProps) {
  const from =
    direction === 'left' ? { opacity: 0, x: -40, y: 0 }
    : direction === 'right' ? { opacity: 0, x: 40, y: 0 }
    : direction === 'fade' ? { opacity: 0, x: 0, y: 0 }
    : { opacity: 0, x: 0, y: 36 }

  return (
    <motion.div
      initial={from}
      whileInView={{ opacity: 1, x: 0, y: 0 }}
      viewport={{ once: true, margin: '-80px' }}
      transition={{ duration: 0.6, ease: EASE, delay }}
      className={className}
      style={style}
    >
      {children}
    </motion.div>
  )
}

type StaggerProps = {
  children: ReactNode
  className?: string
  style?: React.CSSProperties
  stagger?: number
}

export function StaggerContainer({ children, className, style, stagger = 0.1 }: StaggerProps) {
  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: '-60px' }}
      variants={{ hidden: {}, visible: { transition: { staggerChildren: stagger } } }}
      className={className}
      style={style}
    >
      {children}
    </motion.div>
  )
}

export function StaggerItem({ children, className, style }: { children: ReactNode; className?: string; style?: React.CSSProperties }) {
  return (
    <motion.div
      variants={{
        hidden: { opacity: 0, y: 28 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.55, ease: EASE } },
      }}
      className={className}
      style={style}
    >
      {children}
    </motion.div>
  )
}
