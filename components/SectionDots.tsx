'use client'
import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

const SECTIONS = [
  { id: 'top', label: 'Intro' },
  { id: 'vergelijking', label: 'Top 6' },
  { id: 'functies', label: 'Functies' },
  { id: 'keuzehulp', label: 'Keuzehulp' },
  { id: 'methode', label: 'Methode' },
  { id: 'nieuwsbrief', label: 'Updates' },
]

export function SectionDots() {
  const [active, setActive] = useState('top')
  const [hovered, setHovered] = useState<string | null>(null)

  useEffect(() => {
    const observers: IntersectionObserver[] = []
    SECTIONS.forEach(({ id }) => {
      const el = document.getElementById(id)
      if (!el) return
      const obs = new IntersectionObserver(
        ([entry]) => { if (entry.isIntersecting) setActive(id) },
        { threshold: 0.25, rootMargin: '-10% 0px -65% 0px' }
      )
      obs.observe(el)
      observers.push(obs)
    })
    return () => observers.forEach(o => o.disconnect())
  }, [])

  return (
    <div className="section-dots" style={{ position: 'fixed', right: 22, top: '50%', transform: 'translateY(-50%)', zIndex: 40, display: 'flex', flexDirection: 'column', gap: 12 }}>
      {SECTIONS.map(({ id, label }) => (
        <div key={id} style={{ position: 'relative', display: 'flex', alignItems: 'center', justifyContent: 'flex-end' }}>
          <AnimatePresence>
            {hovered === id && (
              <motion.div
                initial={{ opacity: 0, x: 6 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: 6 }}
                transition={{ duration: 0.15 }}
                style={{
                  position: 'absolute', right: 20, whiteSpace: 'nowrap',
                  background: 'var(--bg-card)', border: '1px solid var(--border)',
                  borderRadius: 6, padding: '3px 9px', fontSize: 11, fontWeight: 500,
                  color: 'var(--text)', boxShadow: '0 2px 8px rgba(0,0,0,0.08)',
                }}
              >
                {label}
              </motion.div>
            )}
          </AnimatePresence>
          <a
            href={`#${id}`}
            onMouseEnter={() => setHovered(id)}
            onMouseLeave={() => setHovered(null)}
            style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', width: 18, height: 18 }}
          >
            <motion.div
              animate={{
                width: active === id ? 10 : 5,
                height: active === id ? 10 : 5,
                backgroundColor: active === id ? 'var(--accent)' : 'var(--border-strong)',
                opacity: active === id ? 1 : 0.6,
              }}
              transition={{ duration: 0.22 }}
              style={{ borderRadius: '50%' }}
            />
          </a>
        </div>
      ))}
    </div>
  )
}
