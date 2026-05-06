import { getToolsSortedByRating, getCheapestPlan } from '@/lib/tools'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: "Vergelijk Boekhoudprogramma's ZZP 2026 — Alle opties naast elkaar",
  description: "Vergelijk de populairste boekhoudprogramma's voor ZZP'ers naast elkaar op prijs, functies en gebruiksgemak.",
}

const VERSUS_PAIRS = [
  ['moneybird', 'snelstart'],
  ['moneybird', 'jortt'],
  ['moneybird', 'e-boekhouden'],
  ['moneybird', 'exact-online'],
  ['snelstart', 'jortt'],
  ['snelstart', 'e-boekhouden'],
  ['jortt', 'e-boekhouden'],
  ['exact-online', 'twinfield'],
]

export default function VergelijkPage() {
  const tools = getToolsSortedByRating()

  return (
    <div style={{ maxWidth: 900, margin: '0 auto', padding: '48px 24px' }}>
      <div style={{ fontSize: 13, color: 'var(--text-tertiary)', marginBottom: 24 }}>
        <a href="/" style={{ color: 'var(--text-tertiary)' }}>Home</a> / Vergelijk
      </div>
      <h1 style={{ fontSize: 34, fontWeight: 700, marginBottom: 8 }}>Vergelijk boekhoudprogramma's</h1>
      <p style={{ color: 'var(--text-secondary)', marginBottom: 40, fontSize: 16, maxWidth: 600 }}>
        Kies twee programma's om ze direct naast elkaar te vergelijken op prijs, functies en scores.
      </p>

      {/* Score overview */}
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(260px, 1fr))', gap: 16, marginBottom: 56 }}>
        {tools.map(tool => {
          const price = getCheapestPlan(tool)
          return (
            <div key={tool.slug} className="card" style={{ padding: 20 }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: 12, marginBottom: 14 }}>
                <div style={{ width: 40, height: 40, borderRadius: 8, background: 'var(--bg-subtle)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 18, fontWeight: 700, color: 'var(--accent)', flexShrink: 0 }}>{tool.name[0]}</div>
                <div>
                  <div style={{ fontWeight: 600, fontSize: 15 }}>{tool.name}</div>
                  <div style={{ fontSize: 12, color: 'var(--text-tertiary)' }}>{price === 0 ? 'Gratis' : `Vanaf €${price}/mnd`}</div>
                </div>
                <div style={{ marginLeft: 'auto', fontWeight: 700, fontSize: 18, color: 'var(--accent)' }}>{tool.score.overall}</div>
              </div>
              {(['gebruiksgemak', 'functies', 'prijs', 'support'] as const).map(key => (
                <div key={key} style={{ display: 'flex', alignItems: 'center', gap: 8, marginBottom: 6 }}>
                  <span style={{ fontSize: 12, color: 'var(--text-tertiary)', width: 90, flexShrink: 0, textTransform: 'capitalize' }}>{key}</span>
                  <div className="score-bar" style={{ flex: 1 }}>
                    <div className="score-bar-fill" style={{ width: `${(tool.score[key] / 5) * 100}%` }} />
                  </div>
                  <span style={{ fontSize: 12, fontWeight: 600, width: 24, textAlign: 'right' }}>{tool.score[key]}</span>
                </div>
              ))}
              <a href={`/tools/${tool.slug}`} className="btn-secondary" style={{ marginTop: 14, width: '100%', justifyContent: 'center', fontSize: 13 }}>Lees review</a>
            </div>
          )
        })}
      </div>

      {/* Versus pairs */}
      <h2 style={{ fontSize: 24, fontWeight: 700, marginBottom: 8 }}>Directe vergelijkingen</h2>
      <p style={{ color: 'var(--text-secondary)', marginBottom: 24, fontSize: 14 }}>Bekijk een uitgebreide head-to-head vergelijking tussen twee programma's.</p>
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))', gap: 12 }}>
        {VERSUS_PAIRS.map(([a, b]) => {
          const toolA = tools.find(t => t.slug === a)
          const toolB = tools.find(t => t.slug === b)
          if (!toolA || !toolB) return null
          return (
            <a key={`${a}-${b}`} href={`/vergelijk/${a}-vs-${b}`} className="card" style={{ padding: '16px 20px', display: 'flex', alignItems: 'center', gap: 12 }}>
              <div style={{ width: 32, height: 32, borderRadius: 6, background: 'var(--bg-subtle)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: 700, color: 'var(--accent)', fontSize: 14, flexShrink: 0 }}>{toolA.name[0]}</div>
              <span style={{ fontWeight: 600, fontSize: 14 }}>{toolA.name}</span>
              <span style={{ color: 'var(--text-tertiary)', fontWeight: 500, fontSize: 12, flexShrink: 0 }}>vs</span>
              <div style={{ width: 32, height: 32, borderRadius: 6, background: 'var(--bg-subtle)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: 700, color: '#534AB7', fontSize: 14, flexShrink: 0 }}>{toolB.name[0]}</div>
              <span style={{ fontWeight: 600, fontSize: 14 }}>{toolB.name}</span>
              <span style={{ marginLeft: 'auto', color: 'var(--accent)', fontSize: 13 }}>→</span>
            </a>
          )
        })}
      </div>
    </div>
  )
}
