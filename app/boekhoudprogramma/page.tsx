import { getToolsSortedByRating, getCheapestPlan } from '@/lib/tools'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: "Beste Boekhoudprogramma ZZP 2026 — Top 6 vergeleken",
  description: "Vergelijk de 6 beste boekhoudprogramma's voor ZZP'ers. Prijzen, functies en eerlijke reviews.",
  alternates: { canonical: '/boekhoudprogramma' },
  openGraph: { type: 'website', url: '/boekhoudprogramma' },
}

export default function BoekhoudprogrammaPage() {
  const tools = getToolsSortedByRating()
  return (
    <div style={{ maxWidth: 900, margin: '0 auto', padding: '48px 24px' }}>
      <div style={{ marginBottom: 8, fontSize: 13, color: 'var(--text-tertiary)' }}>
        <a href="/" style={{ color: 'var(--text-tertiary)' }}>Home</a> / Boekhoudprogramma's
      </div>
      <h1 style={{ fontSize: 36, fontWeight: 700, marginBottom: 12 }}>Beste boekhoudprogramma ZZP 2026</h1>
      <p style={{ fontSize: 16, color: 'var(--text-secondary)', marginBottom: 8, maxWidth: 640 }}>
        We hebben de 6 populairste boekhoudprogramma's voor ZZP'ers getest op gebruiksgemak, functies, prijs en support.
      </p>
      <div style={{ display: 'flex', gap: 8, marginBottom: 32, fontSize: 13, color: 'var(--text-tertiary)', flexWrap: 'wrap' }}>
        <span>Bijgewerkt mei 2026</span><span>·</span><span>8 min leestijd</span><span>·</span><span>6 programma's getest</span>
      </div>

      <div style={{ display: 'flex', alignItems: 'center', gap: 8, marginBottom: 32, padding: '10px 14px', background: 'var(--bg-subtle)', borderRadius: 8, fontSize: 13, color: 'var(--text-secondary)' }}>
        <span>We verdienen een commissie als je via onze links koopt — dit heeft <strong>geen invloed</strong> op onze rangschikking. Lees meer over <a href="#methodiek" style={{ color: 'var(--accent)' }}>onze testmethode</a>.</span>
      </div>

      <div style={{ display: 'flex', flexDirection: 'column', gap: 16, marginBottom: 56 }}>
        {tools.map((tool, i) => {
          const price = getCheapestPlan(tool)
          const isTop = i === 0
          return (
            <div key={tool.slug} className="card" style={{ padding: 24, display: 'flex', gap: 20, alignItems: 'center', flexWrap: 'wrap', border: isTop ? '2px solid var(--accent)' : undefined, position: 'relative' }}>
              {isTop && (
                <div style={{ position: 'absolute', top: -12, left: 20, background: 'var(--accent)', color: '#fff', fontSize: 11, fontWeight: 700, padding: '3px 10px', borderRadius: 20, textTransform: 'uppercase', letterSpacing: '0.05em' }}>
                  #1 Beste keuze
                </div>
              )}
              <div style={{ fontSize: 20, fontWeight: 700, color: 'var(--text-tertiary)', width: 28, flexShrink: 0 }}>#{i + 1}</div>
              <div style={{ width: 48, height: 48, borderRadius: 10, background: 'var(--bg-subtle)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 20, fontWeight: 700, color: 'var(--accent)', flexShrink: 0 }}>{tool.name[0]}</div>
              <div style={{ flex: 1, minWidth: 180 }}>
                <div style={{ fontWeight: 600, fontSize: 16, marginBottom: 2 }}>{tool.name}</div>
                <p style={{ margin: 0, fontSize: 13, color: 'var(--text-secondary)' }}>{tool.tagline}</p>
                <div style={{ display: 'flex', gap: 6, marginTop: 6, flexWrap: 'wrap' }}>
                  {[
                    tool.features.btwAangifte && 'BTW-aangifte',
                    tool.features.bankKoppeling && 'Bankkoppeling',
                    tool.features.gratisPlan && 'Gratis plan',
                  ].filter(Boolean).map(f => (
                    <span key={f as string} className="badge badge-gray">{f}</span>
                  ))}
                </div>
              </div>
              <div style={{ display: 'flex', gap: 6, alignItems: 'center', flexShrink: 0 }}>
                <span style={{ fontSize: 18, color: '#F59E0B' }}>★</span>
                <span style={{ fontWeight: 700 }}>{tool.rating}</span>
                <span style={{ fontSize: 12, color: 'var(--text-tertiary)' }}>({tool.reviewCount})</span>
              </div>
              <div style={{ textAlign: 'right', flexShrink: 0 }}>
                <div style={{ fontWeight: 700, fontSize: 17 }}>{price === 0 ? 'Gratis' : `€${price}/mnd`}</div>
                {tool.pricing.freeTrial > 0 && <div style={{ fontSize: 12, color: 'var(--accent)' }}>✓ {tool.pricing.freeTrial} dgn gratis</div>}
              </div>
              <div style={{ display: 'flex', gap: 8, flexShrink: 0 }}>
                <a href={`/tools/${tool.slug}`} className="btn-secondary" style={{ fontSize: 13, padding: '8px 14px' }}>Lees meer</a>
                <a href={tool.affiliateUrl} className="btn-primary" style={{ fontSize: 13, padding: '8px 14px' }}>Probeer →</a>
              </div>
            </div>
          )
        })}
      </div>

      <div className="prose" id="methodiek">
        <h2>Hoe kiezen we de beste boekhoudprogramma's?</h2>
        <p>We maken voor elk programma een proefaccount aan en voeren een standaard ZZP-scenario uit: een factuur aanmaken en versturen, een bankafschrift importeren, een BTW-aangifte voorbereiden, en de klantenservice bereiken met een vraag. Vervolgens beoordelen we op vijf criteria:</p>
        <ul>
          <li><strong>Gebruiksgemak</strong> — hoe snel is een beginner productief?</li>
          <li><strong>Functies</strong> — dekt het pakket de typische ZZP-behoeften?</li>
          <li><strong>Prijs-kwaliteit</strong> — wat krijg je voor je geld vergeleken met alternatieven?</li>
          <li><strong>Support</strong> — hoe snel en behulpzaam is de klantenservice?</li>
          <li><strong>Overall</strong> — onze eindafweging op basis van alle criteria.</li>
        </ul>
        <p>We updaten onze beoordelingen minimaal eens per kwartaal. Prijswijzigingen of functie-updates verwerken we direct.</p>

        <h2>Veelgestelde vragen</h2>
        <h3>Wat is het beste gratis boekhoudprogramma voor ZZP?</h3>
        <p>Moneybird biedt het meest complete gratis plan: tot 5 facturen per maand, één bankrekening en basisfuncties. Er bestaan geen volledig gratis programma's zonder enige beperking.</p>

        <h3>Heb ik als ZZP'er een boekhoudprogramma nodig?</h3>
        <p>Ja — de Belastingdienst verplicht elke ondernemer een administratie bij te houden (bewaarplicht 7 jaar). Een goed programma bespaart je uren per kwartaal, voorkomt fouten in je BTW-aangifte en houdt je factuurnummering automatisch bij.</p>

        <h3>Wat is het verschil tussen boekhoud- en factuurprogramma?</h3>
        <p>Een factuurprogramma maakt alleen facturen aan. Een boekhoudprogramma doet dat ook, maar voegt bankimport, BTW-aangifte, balans en winst-en-verliesrekening toe. Voor de meeste ZZP'ers is een compleet boekhoudprogramma handiger.</p>
      </div>
    </div>
  )
}
