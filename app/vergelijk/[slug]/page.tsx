import { getToolBySlug, getToolsSortedByRating, getCheapestPlan } from '@/lib/tools'
import { notFound } from 'next/navigation'
import type { Metadata } from 'next'

const VERSUS_PAIRS = [
  ['moneybird', 'snelstart'],
  ['moneybird', 'jortt'],
  ['exact-online', 'twinfield'],
  ['snelstart', 'jortt'],
  ['moneybird', 'e-boekhouden'],
  ['moneybird', 'exact-online'],
  ['snelstart', 'e-boekhouden'],
  ['jortt', 'e-boekhouden'],
]

export async function generateStaticParams() {
  return VERSUS_PAIRS.map(([a, b]) => ({ slug: `${a}-vs-${b}` }))
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params
  const parts = slug.split('-vs-')
  const a = getToolBySlug(parts[0])
  const b = getToolBySlug(parts[1])
  if (!a || !b) return {}
  return {
    title: `${a.name} vs ${b.name} 2026 — Welke kies jij?`,
    description: `${a.name} of ${b.name}? We vergelijken functies, prijs en gebruiksgemak.`,
  }
}

export default async function VergelijkPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  const parts = slug.split('-vs-')
  if (parts.length !== 2) notFound()
  const toolA = getToolBySlug(parts[0])
  const toolB = getToolBySlug(parts[1])
  if (!toolA || !toolB) notFound()

  const criteria: Array<{ label: string; key: keyof typeof toolA.score }> = [
    { label: 'Gebruiksgemak', key: 'gebruiksgemak' },
    { label: 'Functies', key: 'functies' },
    { label: 'Prijs-kwaliteit', key: 'prijs' },
    { label: 'Support', key: 'support' },
    { label: 'Overall', key: 'overall' },
  ]

  return (
    <div style={{ maxWidth: 820, margin: '0 auto', padding: '48px 24px' }}>
      <div style={{ fontSize: 13, color: 'var(--text-tertiary)', marginBottom: 24 }}>
        <a href="/" style={{ color: 'var(--text-tertiary)' }}>Home</a> / <a href="/vergelijk" style={{ color: 'var(--text-tertiary)' }}>Vergelijk</a> / {toolA.name} vs {toolB.name}
      </div>
      <h1 style={{ fontSize: 34, fontWeight: 700, marginBottom: 8 }}>{toolA.name} vs {toolB.name}</h1>
      <p style={{ color: 'var(--text-secondary)', marginBottom: 40, fontSize: 16 }}>Een eerlijke vergelijking op functies, prijs en gebruiksgemak. Bijgewerkt mei 2026.</p>

      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 16, marginBottom: 32 }}>
        {[toolA, toolB].map(tool => (
          <div key={tool.slug} className="card" style={{ padding: 24, textAlign: 'center' }}>
            <div style={{ width: 56, height: 56, borderRadius: 12, background: 'var(--bg-subtle)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 24, fontWeight: 700, color: 'var(--accent)', margin: '0 auto 12px' }}>{tool.name[0]}</div>
            <div style={{ fontWeight: 700, fontSize: 18, marginBottom: 4 }}>{tool.name}</div>
            <div style={{ fontSize: 13, color: 'var(--text-secondary)', marginBottom: 12 }}>{tool.tagline}</div>
            <div style={{ fontSize: 24, fontWeight: 700, marginBottom: 4 }}>{getCheapestPlan(tool) === 0 ? <span style={{ color: 'var(--accent)' }}>Gratis</span> : `€${getCheapestPlan(tool)}/mnd`}</div>
            <div style={{ fontSize: 22, color: '#F59E0B', marginBottom: 12 }}>
              {'★'.repeat(Math.round(tool.rating))}{'☆'.repeat(5 - Math.round(tool.rating))}
              <span style={{ fontSize: 14, color: 'var(--text)', marginLeft: 6 }}>{tool.rating}</span>
            </div>
            <a href={tool.affiliateUrl} className="btn-primary" style={{ width: '100%', justifyContent: 'center' }}>Probeer {tool.name}</a>
          </div>
        ))}
      </div>

      <div className="card" style={{ padding: 24, marginBottom: 24 }}>
        <h2 style={{ fontSize: 18, fontWeight: 600, marginTop: 0, marginBottom: 20 }}>Score vergelijking</h2>
        {criteria.map(({ label, key }) => (
          <div key={key} style={{ marginBottom: 16 }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: 6, fontSize: 14 }}>
              <span style={{ color: 'var(--text-secondary)' }}>{label}</span>
              <span style={{ color: 'var(--text-tertiary)', fontSize: 13 }}>{toolA.score[key]} vs {toolB.score[key]}</span>
            </div>
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 8 }}>
              {[toolA, toolB].map((tool, idx) => (
                <div key={tool.slug}>
                  <div style={{ fontSize: 11, color: 'var(--text-tertiary)', marginBottom: 3 }}>{tool.name}</div>
                  <div className="score-bar">
                    <div className="score-bar-fill" style={{ width: `${(tool.score[key] / 5) * 100}%`, background: idx === 0 ? 'var(--accent)' : '#534AB7' }} />
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 16 }}>
        {[toolA, toolB].map(tool => (
          <div key={tool.slug} className="card" style={{ padding: 20 }}>
            <h3 style={{ fontSize: 15, fontWeight: 600, marginTop: 0, marginBottom: 12 }}>Kies {tool.name} als...</h3>
            {tool.bestFor.map(b => (
              <div key={b} style={{ display: 'flex', gap: 6, marginBottom: 6, fontSize: 13 }}>
                <span style={{ color: 'var(--accent)' }}>→</span>
                <span style={{ color: 'var(--text-secondary)' }}>{b}</span>
              </div>
            ))}
            <a href={tool.affiliateUrl} className="btn-primary" style={{ marginTop: 14, width: '100%', justifyContent: 'center', fontSize: 13 }}>Probeer {tool.name} →</a>
          </div>
        ))}
      </div>
    </div>
  )
}
