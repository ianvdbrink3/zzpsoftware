import { getToolBySlug, getToolsSortedByRating, getCheapestPlan } from '@/lib/tools'
import { notFound } from 'next/navigation'
import type { Metadata } from 'next'

export async function generateStaticParams() {
  return getToolsSortedByRating().map(t => ({ slug: t.slug }))
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params
  const tool = getToolBySlug(slug)
  if (!tool) return {}
  return {
    title: `${tool.name} Review 2026 — Eerlijke beoordeling voor ZZP'ers`,
    description: `Uitgebreide ${tool.name} review: gebruiksgemak, functies, prijzen en voor wie het geschikt is. Onze eerlijke beoordeling voor ZZP'ers.`,
  }
}

function ScoreRow({ label, score }: { label: string; score: number }) {
  return (
    <div style={{ display: 'flex', alignItems: 'center', gap: 12, marginBottom: 10 }}>
      <span style={{ fontSize: 13, color: 'var(--text-secondary)', width: 120, flexShrink: 0 }}>{label}</span>
      <div className="score-bar" style={{ flex: 1 }}>
        <div className="score-bar-fill" style={{ width: `${(score / 5) * 100}%` }} />
      </div>
      <span style={{ fontSize: 14, fontWeight: 600, width: 28, textAlign: 'right' }}>{score}</span>
    </div>
  )
}

const FEATURE_LABELS: Record<string, string> = {
  btwAangifte: 'BTW-aangifte',
  bankKoppeling: 'Bankkoppeling',
  mobieleApp: 'Mobiele app',
  offertes: 'Offertes',
  urenRegistratie: 'Urenregistratie',
  projecten: 'Projecten',
  api: 'API',
  gratisPlan: 'Gratis plan',
}

export default async function ToolPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  const tool = getToolBySlug(slug)
  if (!tool) notFound()
  const cheapest = getCheapestPlan(tool)

  return (
    <div style={{ maxWidth: 820, margin: '0 auto', padding: '48px 24px' }}>
      <div style={{ fontSize: 13, color: 'var(--text-tertiary)', marginBottom: 24 }}>
        <a href="/" style={{ color: 'var(--text-tertiary)' }}>Home</a> / <a href="/boekhoudprogramma" style={{ color: 'var(--text-tertiary)' }}>Boekhoudprogramma's</a> / {tool.name}
      </div>

      <div style={{ display: 'flex', gap: 20, alignItems: 'flex-start', marginBottom: 8, flexWrap: 'wrap' }}>
        <div style={{ width: 64, height: 64, borderRadius: 14, background: 'var(--bg-subtle)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 28, fontWeight: 700, color: 'var(--accent)', flexShrink: 0 }}>{tool.name[0]}</div>
        <div style={{ flex: 1 }}>
          <h1 style={{ fontSize: 32, fontWeight: 700, margin: '0 0 4px' }}>{tool.name} Review 2026</h1>
          <p style={{ margin: 0, color: 'var(--text-secondary)', fontSize: 16 }}>{tool.tagline}</p>
          <div style={{ display: 'flex', gap: 8, marginTop: 10, alignItems: 'center' }}>
            <span className="stars">{[1,2,3,4,5].map(i => <span key={i} style={{ opacity: i <= Math.round(tool.rating) ? 1 : 0.25 }}>★</span>)}</span>
            <span style={{ fontWeight: 700, fontSize: 16 }}>{tool.rating}</span>
            <span style={{ color: 'var(--text-tertiary)', fontSize: 13 }}>({tool.reviewCount} beoordelingen)</span>
          </div>
        </div>
      </div>

      <div style={{ display: 'flex', gap: 8, marginBottom: 40, fontSize: 13, color: 'var(--text-tertiary)', flexWrap: 'wrap' }}>
        <span>Bijgewerkt mei 2026</span><span>·</span><span>5 min leestijd</span>
        {tool.pricing.freeTrial > 0 && <><span>·</span><span style={{ color: 'var(--accent)' }}>✓ {tool.pricing.freeTrial} dagen gratis proberen</span></>}
      </div>

      <div className="prose" style={{ marginBottom: 40 }}>
        <p style={{ fontSize: 17, lineHeight: 1.8 }}>{tool.reviewText.intro}</p>
      </div>

      <div className="card" style={{ padding: '20px 24px', marginBottom: 40, background: 'var(--accent-light)', border: '1px solid var(--accent)' }}>
        <div style={{ fontWeight: 600, marginBottom: 12, color: 'var(--accent-text)' }}>In het kort</div>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: 8 }}>
          {Object.entries(tool.features).filter(([, v]) => v).map(([k]) => (
            <div key={k} style={{ display: 'flex', gap: 8, fontSize: 14, color: 'var(--accent-text)' }}>
              <span style={{ flexShrink: 0 }}>✓</span><span>{FEATURE_LABELS[k] ?? k}</span>
            </div>
          ))}
        </div>
      </div>

      <div className="prose" style={{ marginBottom: 40 }}>
        <h2>Gebruiksgemak</h2>
        <p>{tool.reviewText.gebruiksgemak}</p>

        <h2>Functies</h2>
        <p>{tool.reviewText.functies}</p>

        <h2>Prijs en waarde</h2>
        <p>{tool.reviewText.prijs}</p>
      </div>

      <div className="card" style={{ padding: 24, marginBottom: 24 }}>
        <h2 style={{ fontSize: 18, fontWeight: 600, marginBottom: 16, marginTop: 0 }}>Onze beoordeling</h2>
        <ScoreRow label="Gebruiksgemak" score={tool.score.gebruiksgemak} />
        <ScoreRow label="Functies" score={tool.score.functies} />
        <ScoreRow label="Prijs-kwaliteit" score={tool.score.prijs} />
        <ScoreRow label="Klantenservice" score={tool.score.support} />
        <div style={{ borderTop: '1px solid var(--border)', paddingTop: 14, marginTop: 14 }}>
          <ScoreRow label="Overall" score={tool.score.overall} />
        </div>
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 16, marginBottom: 24 }}>
        <div className="card" style={{ padding: 20 }}>
          <h3 style={{ fontSize: 15, fontWeight: 600, color: 'var(--accent)', marginTop: 0, marginBottom: 12 }}>✓ Voordelen</h3>
          {tool.pros.map(p => <div key={p} style={{ display: 'flex', gap: 8, marginBottom: 8, fontSize: 14 }}><span style={{ color: 'var(--accent)', flexShrink: 0 }}>✓</span><span style={{ color: 'var(--text-secondary)' }}>{p}</span></div>)}
        </div>
        <div className="card" style={{ padding: 20 }}>
          <h3 style={{ fontSize: 15, fontWeight: 600, color: 'var(--red)', marginTop: 0, marginBottom: 12 }}>✗ Nadelen</h3>
          {tool.cons.map(c => <div key={c} style={{ display: 'flex', gap: 8, marginBottom: 8, fontSize: 14 }}><span style={{ color: 'var(--red)', flexShrink: 0 }}>✗</span><span style={{ color: 'var(--text-secondary)' }}>{c}</span></div>)}
        </div>
      </div>

      <div className="card" style={{ padding: 20, marginBottom: 40 }}>
        <h3 style={{ fontSize: 15, fontWeight: 600, marginTop: 0, marginBottom: 12 }}>Voor wie is {tool.name} het beste?</h3>
        <div style={{ display: 'flex', gap: 8, flexWrap: 'wrap' }}>
          {tool.bestFor.map(b => <span key={b} className="badge badge-green">{b}</span>)}
        </div>
      </div>

      <div style={{ borderTop: '2px solid var(--border)', marginBottom: 40, paddingTop: 40 }}>
        <h2 style={{ fontSize: 22, fontWeight: 700, marginTop: 0, marginBottom: 4 }}>Prijzen {tool.name}</h2>
        <p style={{ color: 'var(--text-secondary)', fontSize: 14, marginBottom: 24 }}>Alle plannen hebben een gratis proefperiode van {tool.pricing.freeTrial} dagen.</p>
        <div style={{ display: 'grid', gridTemplateColumns: `repeat(${tool.pricing.plans.length}, 1fr)`, gap: 14 }}>
          {tool.pricing.plans.map((plan, i) => (
            <div key={plan.name} className="card" style={{ padding: 20, border: i === 1 ? '2px solid var(--accent)' : undefined, position: 'relative' }}>
              {i === 1 && <div style={{ position: 'absolute', top: -11, left: '50%', transform: 'translateX(-50%)', background: 'var(--accent)', color: '#fff', fontSize: 11, fontWeight: 700, padding: '2px 10px', borderRadius: 20 }}>Populairste</div>}
              <div style={{ fontWeight: 600, marginBottom: 8 }}>{plan.name}</div>
              <div style={{ fontSize: 26, fontWeight: 700, marginBottom: 4 }}>{plan.price === 0 ? <span style={{ color: 'var(--accent)' }}>Gratis</span> : `€${plan.price}`}</div>
              {plan.price > 0 && <div style={{ fontSize: 12, color: 'var(--text-tertiary)', marginBottom: 14 }}>per {plan.per}</div>}
              {plan.features.map(f => <div key={f} style={{ fontSize: 13, color: 'var(--text-secondary)', marginBottom: 6, display: 'flex', gap: 6 }}><span style={{ color: 'var(--accent)' }}>✓</span>{f}</div>)}
              <a href={tool.affiliateUrl} className={i === 1 ? 'btn-primary' : 'btn-secondary'} style={{ marginTop: 16, width: '100%', justifyContent: 'center' }}>Kies {plan.name}</a>
            </div>
          ))}
        </div>
      </div>

      <div style={{ background: 'var(--accent-light)', border: '1px solid var(--accent)', borderRadius: 16, padding: '28px 32px', textAlign: 'center' }}>
        <h3 style={{ fontSize: 20, fontWeight: 700, marginTop: 0, marginBottom: 8, color: 'var(--accent-text)' }}>Klaar om {tool.name} te proberen?</h3>
        <p style={{ color: 'var(--accent-text)', margin: '0 0 20px', opacity: 0.8 }}>{tool.pricing.freeTrial > 0 ? `Start je gratis proefperiode van ${tool.pricing.freeTrial} dagen. Geen creditcard vereist.` : 'Bekijk de huidige aanbiedingen en start vandaag.'}</p>
        <a href={tool.affiliateUrl} className="btn-primary" style={{ fontSize: 15, padding: '12px 28px' }}>Probeer {tool.name} gratis →</a>
      </div>
      <p style={{ fontSize: 12, color: 'var(--text-tertiary)', marginTop: 12, textAlign: 'center' }}>* Affiliate link — wij ontvangen een vergoeding als je via deze link een abonnement afsluit.</p>
    </div>
  )
}
