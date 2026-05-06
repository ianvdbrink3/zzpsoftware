import { getToolsSortedByRating, getCheapestPlan } from '@/lib/tools'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: "Beste Factuurprogramma ZZP 2026 — Top 5 vergeleken",
  description: "Vergelijk de beste factuurprogramma's voor ZZP'ers. Professionele facturen maken, automatische herinneringen en BTW-berekening.",
}

export default function FactuurprogrammaPage() {
  const tools = getToolsSortedByRating().filter(t => t.features.offertes || t.categories.includes('facturatie'))

  return (
    <div style={{ maxWidth: 900, margin: '0 auto', padding: '48px 24px' }}>
      <div style={{ marginBottom: 8, fontSize: 13, color: 'var(--text-tertiary)' }}>
        <a href="/" style={{ color: 'var(--text-tertiary)' }}>Home</a> / Factuurprogramma's
      </div>
      <h1 style={{ fontSize: 36, fontWeight: 700, marginBottom: 12 }}>Beste factuurprogramma ZZP 2026</h1>
      <p style={{ fontSize: 16, color: 'var(--text-secondary)', marginBottom: 8, maxWidth: 640 }}>
        Een professioneel factuurprogramma stuurt automatisch herinneringen, koppelt met je bank en berekent de BTW. We vergeleken de beste opties voor ZZP'ers.
      </p>
      <div style={{ display: 'flex', gap: 8, marginBottom: 40, fontSize: 13, color: 'var(--text-tertiary)' }}>
        <span>Bijgewerkt mei 2026</span><span>·</span><span>5 min leestijd</span><span>·</span><span>6 programma's getest</span>
      </div>

      <div className="card" style={{ padding: '20px 24px', marginBottom: 40, background: 'var(--accent-light)', border: '1px solid var(--accent)' }}>
        <div style={{ fontWeight: 600, marginBottom: 10, color: 'var(--accent-text)' }}>Wat maakt een goed factuurprogramma?</div>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: 8 }}>
          {['Professionele factuursjablonen', 'Automatische betalingsherinneringen', 'Bankkoppeling en -reconciliatie', 'BTW-berekening en aangifte', 'Offertes omzetten naar facturen', 'Mobiele app voor onderweg'].map(f => (
            <div key={f} style={{ display: 'flex', gap: 8, fontSize: 14, color: 'var(--accent-text)' }}>
              <span style={{ flexShrink: 0 }}>✓</span><span>{f}</span>
            </div>
          ))}
        </div>
      </div>

      <div style={{ display: 'flex', flexDirection: 'column', gap: 16, marginBottom: 48 }}>
        {tools.map((tool, i) => {
          const price = getCheapestPlan(tool)
          return (
            <div key={tool.slug} className="card" style={{ padding: 24, display: 'flex', gap: 20, alignItems: 'center', flexWrap: 'wrap', border: i === 0 ? '2px solid var(--accent)' : undefined, position: 'relative' }}>
              {i === 0 && (
                <div style={{ position: 'absolute', top: -12, left: 20, background: 'var(--accent)', color: '#fff', fontSize: 11, fontWeight: 700, padding: '3px 10px', borderRadius: 20, textTransform: 'uppercase', letterSpacing: '0.05em' }}>
                  Beste keuze
                </div>
              )}
              <div style={{ fontSize: 20, fontWeight: 700, color: 'var(--text-tertiary)', width: 28, flexShrink: 0 }}>#{i + 1}</div>
              <div style={{ width: 48, height: 48, borderRadius: 10, background: 'var(--bg-subtle)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 20, fontWeight: 700, color: 'var(--accent)', flexShrink: 0 }}>{tool.name[0]}</div>
              <div style={{ flex: 1 }}>
                <div style={{ fontWeight: 600, fontSize: 16, marginBottom: 2 }}>{tool.name}</div>
                <p style={{ margin: 0, fontSize: 13, color: 'var(--text-secondary)' }}>{tool.tagline}</p>
                <div style={{ display: 'flex', gap: 6, marginTop: 8, flexWrap: 'wrap' }}>
                  {[
                    tool.features.offertes && 'Offertes',
                    tool.features.bankKoppeling && 'Bankkoppeling',
                    tool.features.mobieleApp && 'Mobiele app',
                    tool.features.btwAangifte && 'BTW-aangifte',
                    tool.features.gratisPlan && 'Gratis plan',
                  ].filter(Boolean).map(f => (
                    <span key={f as string} className="badge badge-gray">{f}</span>
                  ))}
                </div>
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
                <a href={`/tools/${tool.slug}`} className="btn-secondary" style={{ fontSize: 13, padding: '8px 14px' }}>Lees meer</a>
                <a href={tool.affiliateUrl} className="btn-primary" style={{ fontSize: 13, padding: '8px 14px' }}>Probeer →</a>
              </div>
            </div>
          )
        })}
      </div>

      <div className="prose">
        <h2>Factuurprogramma of boekhoudprogramma: wat is het verschil?</h2>
        <p>
          Een factuurprogramma richt zich specifiek op het aanmaken en versturen van facturen. Een boekhoudprogramma doet dat ook, maar heeft daarnaast functies voor het bijhouden van je complete boekhouding: bankimport, BTW-aangifte, balans en winst- en verliesrekening.
        </p>
        <p>
          Voor de meeste ZZP'ers is een combinatie handiger: kies een boekhoudprogramma dat ook uitstekende facturatiefuncties heeft. Moneybird en Snelstart zijn hier de beste voorbeelden van.
        </p>

        <h2>Wat is de beste gratis factuurapp voor ZZP?</h2>
        <p>
          Moneybird biedt een gratis plan waarmee je 5 facturen per maand kunt versturen. Voor ZZP'ers die net starten of weinig facturen sturen, is dit ruim voldoende. Heb je meer volume? Dan is het ZZP-plan van €14 per maand de volgende stap.
        </p>

        <h2>Veelgestelde vragen</h2>

        <h3>Moet ik een factuurprogramma gebruiken?</h3>
        <p>
          Nee, je mag facturen ook in Word of Excel maken. Maar een programma bespaart je tijd, voorkomt fouten in factuurnummering en BTW-berekening, en stuurt automatisch herinneringen bij te late betaling. De tijdsbesparing verdient de kosten snel terug.
        </p>

        <h3>Kan ik een factuur aanpassen nadat ik hem heb verstuurd?</h3>
        <p>
          Nee — een verstuurde factuur mag je niet wijzigen. Heb je een fout gemaakt? Stuur een creditnota (negatieve factuur) en maak daarna een nieuwe correcte factuur aan.
        </p>

        <h3>Hoe lang moet ik facturen bewaren?</h3>
        <p>
          Minimaal 7 jaar. De meeste boekhoudprogramma's bewaren alles automatisch in de cloud, dus hier hoef je verder niet over na te denken.
        </p>
      </div>

      <div style={{ marginTop: 20, padding: '12px 16px', background: 'var(--bg-subtle)', borderRadius: 8, fontSize: 13, color: 'var(--text-tertiary)' }}>
        * We ontvangen mogelijk een vergoeding als je via onze links een aankoop doet. Dit heeft geen invloed op onze beoordelingen.
      </div>
    </div>
  )
}
