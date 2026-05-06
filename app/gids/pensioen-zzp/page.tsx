import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: "Pensioen ZZP: zelf regelen in 5 stappen (2026)",
  description: "Als ZZP'er bouw je geen pensioen op via werkgever. Lijfrente, banksparen, beleggen: hoeveel moet je maandelijks opzijzetten voor later?",
}

export default function PensioenZzpPage() {
  return (
    <div style={{ maxWidth: 780, margin: '0 auto', padding: '48px 24px' }}>
      <div style={{ fontSize: 13, color: 'var(--text-tertiary)', marginBottom: 24 }}>
        <a href="/" style={{ color: 'var(--text-tertiary)' }}>Home</a> / <a href="/gids" style={{ color: 'var(--text-tertiary)' }}>Gidsen</a> / Pensioen als ZZP&apos;er
      </div>

      <div style={{ display: 'flex', gap: 8, marginBottom: 20, flexWrap: 'wrap' }}>
        <span className="badge badge-green">Financieel</span>
        <span style={{ fontSize: 13, color: 'var(--text-tertiary)' }}>Bijgewerkt mei 2026 · 9 min leestijd</span>
      </div>

      <h1 style={{ fontSize: 'clamp(26px, 4vw, 38px)', fontWeight: 700, marginBottom: 16, lineHeight: 1.2 }}>
        Pensioen als ZZP&apos;er: zelf regelen in 5 stappen
      </h1>
      <p style={{ fontSize: 17, color: 'var(--text-secondary)', marginBottom: 40, lineHeight: 1.7 }}>
        Als ZZP&apos;er bouw je geen automatisch pensioen op via een werkgever. Je bent zelf verantwoordelijk voor je oudedagsvoorziening. Met de juiste strategie leg je een solide basis voor later.
      </p>

      <div className="card" style={{ padding: '20px 24px', marginBottom: 40, background: 'var(--accent-light)', border: '1px solid var(--accent)' }}>
        <div style={{ fontWeight: 600, marginBottom: 10, color: 'var(--accent-text)' }}>In het kort</div>
        <ul style={{ margin: 0, paddingLeft: 20 }}>
          {[
            'Je hebt wel recht op AOW, maar dat dekt doorgaans niet je volledige inkomen',
            'Lijfrente en banksparen zijn fiscaal aantrekkelijk: inleg is aftrekbaar',
            'Beleggen via een vrije rekening geeft meer flexibiliteit, maar minder belastingvoordeel',
            "Vuistregel: zet 10–15% van je bruto-inkomen opzij voor pensioen",
          ].map(item => (
            <li key={item} style={{ marginBottom: 6, fontSize: 14, color: 'var(--accent-text)' }}>{item}</li>
          ))}
        </ul>
      </div>

      <div className="prose">
        <h2>Waarom pensioen als ZZP&apos;er anders is</h2>
        <p>In loondienst bouwt je werkgever automatisch pensioen op via een fonds. Als ZZP&apos;er mis je deze opbouw volledig. Je hebt wel recht op AOW (circa €1.450 netto/mnd voor alleenstaanden in 2026, AOW-leeftijd 67 jaar). Maar voor de meeste ZZP&apos;ers is dat aanzienlijk minder dan hun huidige inkomen.</p>
        <p>Het pensioengat moet je zelf dichten. Hoe eerder je begint, hoe minder je maandelijks opzij hoeft te leggen door het rente-op-rente-effect.</p>

        <h2>Optie 1: Lijfrente</h2>
        <p>Een lijfrenterekening of -verzekering is populair omdat de inleg fiscaal aftrekbaar is. Je stort geld op een geblokkeerde rekening, belegt dit geld, en bij pensionering ontvang je maandelijkse uitkeringen.</p>

        <h3>Hoeveel mag je aftrekken?</h3>
        <p>De jaarruimte bepaalt hoeveel je fiscaal aftrekbaar mag inleggen. Berekening: 30% van je premiegrondslag (inkomen minus drempelinkomen van circa €15.000). Maximaal circa €34.550 in 2026. Via reserveringsruimte kun je ook achterstallige jaren inhalen.</p>

        <h3>Lijfrenteverzekering versus lijfrenterekening</h3>
        <p>Een lijfrenteverzekering biedt een gegarandeerde uitkering maar heeft doorgaans hogere kosten. Een lijfrenterekening (banksparen) geeft meer controle over beleggingen en is transparanter.</p>

        <h2>Optie 2: Banksparen</h2>
        <p>Banksparen is fiscaal hetzelfde als een lijfrenterekening maar dan via een bank. De inleg is aftrekbaar binnen de jaarruimte; belasting betaal je pas bij uitkering. Nadeel: het geld staat geblokkeerd tot je pensioenleeftijd.</p>

        <h2>Optie 3: Vrij beleggen</h2>
        <p>Beleggen via een vrije rekening geeft maximale flexibiliteit — je kunt op elk moment opnemen. De inleg is niet aftrekbaar. In box 3 betaal je belasting over fictief rendement boven de vrijstelling (circa €57.000 per persoon in 2026).</p>

        <h3>Combinatiestrategie</h3>
        <p>Veel ZZP&apos;ers kiezen voor een combinatie: maximale inleg in een lijfrenterekening voor het belastingvoordeel, en daarboven vrij beleggen voor de flexibiliteit.</p>

        <h2>Hoeveel moet je opzij zetten?</h2>
        <p>Vuistregel: 10–15% van je bruto-inkomen per maand. Bij €60.000 bruto per jaar: €500–€750 per maand. Hoe eerder je begint, hoe minder je procentueel hoeft op te leggen.</p>
        <p>Maak pensioensparen een vaste kostenpost in je begroting. Gebruik een <a href="/boekhoudprogramma" style={{ color: 'var(--accent)' }}>boekhoudprogramma</a> om je maandelijkse winst inzichtelijk te houden. <a href="/tools/moneybird" style={{ color: 'var(--accent)' }}>Moneybird</a> en <a href="/tools/exact-online" style={{ color: 'var(--accent)' }}>Exact Online</a> tonen je netto winst per maand, zodat je goed kunt inschatten hoeveel ruimte je hebt voor pensioensparen.</p>

        <h2>Pensioen en je boekhouding</h2>
        <p>
          Pensioeninleg via lijfrente is aftrekbaar bij de aangifte inkomstenbelasting — niet als zakelijke kostenpost in je boekhouding. Houd het wel bij als privé-aftrekpost. <a href="/tools/twinfield" style={{ color: 'var(--accent)' }}>Twinfield</a> en <a href="/tools/snelstart" style={{ color: 'var(--accent)' }}>SnelStart</a> bieden exportmogelijkheden voor je boekhouder die je jaarlijkse aangifte verwerkt.
        </p>
      </div>

      <div style={{ background: 'var(--accent-light)', border: '1px solid var(--accent)', borderRadius: 16, padding: '28px 32px', textAlign: 'center', marginTop: 48 }}>
        <h3 style={{ fontSize: 20, fontWeight: 700, marginTop: 0, marginBottom: 8, color: 'var(--accent-text)' }}>Inzicht in je financien als ZZP&apos;er</h3>
        <p style={{ color: 'var(--accent-text)', margin: '0 0 20px', opacity: 0.85 }}>Een goed boekhoudprogramma helpt je winst bewaken zodat je maandelijks genoeg opzij kunt zetten voor later.</p>
        <a href="/boekhoudprogramma" className="btn-primary" style={{ fontSize: 15, padding: '12px 28px' }}>Vergelijk boekhoudprogramma&apos;s →</a>
      </div>
    </div>
  )
}
