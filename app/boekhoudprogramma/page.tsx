import { getToolsSortedByRating, getCheapestPlan } from '@/lib/tools'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: "Beste Boekhoudprogramma ZZP 2026 — Top 6 vergeleken",
  description: "Vergelijk de 6 beste boekhoudprogramma's voor ZZP'ers. Prijzen, functies en eerlijke reviews.",
}

export default function BoekhoudprogrammaPage() {
  const tools = getToolsSortedByRating()
  return (
    <div style={{ maxWidth: 900, margin: '0 auto', padding: '48px 24px' }}>
      <div style={{ marginBottom: 8, fontSize: 13, color: 'var(--text-tertiary)' }}>
        <a href="/" style={{ color: 'var(--text-tertiary)' }}>Home</a> / Boekhoudprogramma's
      </div>
      <h1 style={{ fontSize: 36, fontWeight: 700, marginBottom: 12 }}>Beste boekhoudprogramma ZZP 2026</h1>
      <p style={{ fontSize: 16, color: 'var(--text-secondary)', marginBottom: 8, maxWidth: 640 }}>We hebben de 6 populairste boekhoudprogramma's voor ZZP'ers getest op gebruiksgemak, functies, prijs en support.</p>
      <div style={{ display: 'flex', gap: 8, marginBottom: 40, fontSize: 13, color: 'var(--text-tertiary)' }}>
        <span>📅 Bijgewerkt mei 2026</span><span>·</span><span>⏱ 8 min leestijd</span><span>·</span><span>🔍 6 programma's getest</span>
      </div>
      <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
        {tools.map((tool, i) => {
          const price = getCheapestPlan(tool)
          return (
            <div key={tool.slug} className="card" style={{ padding: 24, display: 'flex', gap: 20, alignItems: 'center', flexWrap: 'wrap' }}>
              <div style={{ fontSize: 20, fontWeight: 700, color: 'var(--text-tertiary)', width: 28, flexShrink: 0 }}>#{i+1}</div>
              <div style={{ width: 48, height: 48, borderRadius: 10, background: 'var(--bg-subtle)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 20, fontWeight: 700, color: 'var(--accent)', flexShrink: 0 }}>{tool.name[0]}</div>
              <div style={{ flex: 1 }}>
                <div style={{ fontWeight: 600, fontSize: 16, marginBottom: 2 }}>{tool.name}</div>
                <p style={{ margin: 0, fontSize: 13, color: 'var(--text-secondary)' }}>{tool.tagline}</p>
              </div>
              <div style={{ display: 'flex', gap: 6, alignItems: 'center' }}>
                <span style={{ fontSize: 22, color: '#F59E0B' }}>★</span>
                <span style={{ fontWeight: 700 }}>{tool.rating}</span>
              </div>
              <div style={{ textAlign: 'right' }}>
                <div style={{ fontWeight: 700, fontSize: 17 }}>{price === 0 ? 'Gratis' : `€${price}/mnd`}</div>
                {tool.pricing.freeTrial > 0 && <div style={{ fontSize: 12, color: 'var(--accent)' }}>{tool.pricing.freeTrial} dgn gratis</div>}
              </div>
              <div style={{ display: 'flex', gap: 8 }}>
                <a href={`/tools/${tool.slug}`} className="btn-secondary" style={{ fontSize: 13, padding: '8px 14px' }}>Review</a>
                <a href={tool.affiliateUrl} className="btn-primary" style={{ fontSize: 13, padding: '8px 14px' }}>Probeer →</a>
              </div>
            </div>
          )
        })}
      </div>
      <div className="prose" style={{ marginTop: 56 }}>
        <h2>Hoe kiezen we de beste boekhoudprogramma's?</h2>
        <p>We testen elk programma op een standaard ZZP-scenario: een factuur aanmaken, een BTW-aangifte voorbereiden, een bankafschrift importeren en de klantenservice bereiken.</p>
        <h2>Veelgestelde vragen</h2>
        <h3>Wat is het beste gratis boekhoudprogramma voor ZZP?</h3>
        <p>Moneybird biedt een gratis plan waarmee je 5 facturen per maand kunt sturen. Er zijn geen volledig gratis programma's met alle functies.</p>
        <h3>Heb ik als ZZP'er een boekhoudprogramma nodig?</h3>
        <p>Ja — de Belastingdienst verplicht je een administratie bij te houden. Een goed programma bespaart je uren per kwartaal en helpt fouten in de BTW-aangifte voorkomen.</p>
      </div>
    </div>
  )
}
