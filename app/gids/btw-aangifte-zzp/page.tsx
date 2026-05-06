import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: "BTW-aangifte ZZP 2026: Stap voor Stap",
  description: "BTW-aangifte doen als ZZP'er: deadlines, berekening, KOR en welke software je aangifte automatiseert. Voorkom een boete van €68.",
}

export default function BtwAangifteGidsPage() {
  return (
    <div style={{ maxWidth: 780, margin: '0 auto', padding: '48px 24px' }}>
      <div style={{ fontSize: 13, color: 'var(--text-tertiary)', marginBottom: 24 }}>
        <a href="/" style={{ color: 'var(--text-tertiary)' }}>Home</a> / <a href="/gids" style={{ color: 'var(--text-tertiary)' }}>Gidsen</a> / BTW-aangifte ZZP
      </div>
      <div style={{ display: 'flex', gap: 8, marginBottom: 20, flexWrap: 'wrap' }}>
        <span className="badge badge-green">BTW</span>
        <span style={{ fontSize: 13, color: 'var(--text-tertiary)' }}>Bijgewerkt mei 2026 · 8 min leestijd</span>
      </div>
      <h1 style={{ fontSize: 'clamp(26px, 4vw, 38px)', fontWeight: 700, marginBottom: 16, lineHeight: 1.2 }}>
        BTW-aangifte doen als ZZP'er: stap voor stap (2026)
      </h1>
      <p style={{ fontSize: 17, color: 'var(--text-secondary)', marginBottom: 40, lineHeight: 1.7 }}>
        Elk kwartaal BTW-aangifte doen is verplicht voor de meeste ZZP'ers. In deze gids leg ik precies uit hoe de berekening werkt, wat de deadlines zijn en hoe je dit in 10 minuten afhandelt met de juiste software.
      </p>

      <div className="card" style={{ padding: '20px 24px', marginBottom: 40, background: 'var(--accent-light)', border: '1px solid var(--accent)' }}>
        <div style={{ fontWeight: 600, marginBottom: 10, color: 'var(--accent-text)' }}>Deadlines BTW-aangifte 2026</div>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(140px, 1fr))', gap: 12 }}>
          {[['Q1 (jan–mrt)', '30 april'], ['Q2 (apr–jun)', '31 juli'], ['Q3 (jul–sep)', '31 oktober'], ['Q4 (okt–dec)', '31 januari']].map(([period, deadline]) => (
            <div key={period} style={{ background: 'rgba(255,255,255,0.6)', borderRadius: 8, padding: '10px 14px' }}>
              <div style={{ fontSize: 12, color: 'var(--accent-text)', opacity: 0.7 }}>{period}</div>
              <div style={{ fontWeight: 700, color: 'var(--accent-text)' }}>{deadline}</div>
            </div>
          ))}
        </div>
      </div>

      <div className="prose">
        <h2>Wie moet BTW-aangifte doen?</h2>
        <p>
          Als ZZP'er ben je in de meeste gevallen BTW-plichtig zodra je regelmatig diensten of producten levert tegen vergoeding. Uitzonderingen zijn medische beroepen, onderwijs en een deel van de culturele sector.
        </p>
        <p>
          Heb je een jaaromzet onder de €20.000? Dan is de <a href="/gids/kor-kleine-ondernemersregeling" style={{ color: 'var(--accent)' }}>Kleine Ondernemersregeling (KOR)</a> mogelijk interessant — daarmee vervalt je BTW-plicht.
        </p>

        <h2>Hoe bereken je de BTW?</h2>
        <p>
          BTW-aangifte werkt als een verrekening: je trekt de BTW die jij hebt betaald op zakelijke kosten (voorbelasting) af van de BTW die je hebt ontvangen van klanten. Het verschil draag je af.
        </p>
        <div className="card" style={{ padding: '16px 20px', marginBottom: '1rem', fontFamily: 'monospace', fontSize: 14 }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: 6 }}>
            <span>Ontvangen BTW van klanten (21% over €10.000)</span>
            <span style={{ fontWeight: 600 }}>€ 2.100</span>
          </div>
          <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: 6 }}>
            <span>Betaalde BTW op kosten</span>
            <span style={{ fontWeight: 600 }}>- € 210</span>
          </div>
          <div style={{ borderTop: '1px solid var(--border)', paddingTop: 8, display: 'flex', justifyContent: 'space-between' }}>
            <span style={{ fontWeight: 700 }}>Af te dragen aan Belastingdienst</span>
            <span style={{ fontWeight: 700, color: 'var(--accent)' }}>€ 1.890</span>
          </div>
        </div>

        <h2>Stap voor stap BTW-aangifte doen</h2>

        <h3>Stap 1 — Facturen en bonnen verzamelen</h3>
        <p>
          Tel alle BTW-bedragen op van je uitgaande facturen en je zakelijke kosten. Gebruik je een boekhoudprogramma met bankkoppeling, dan is dit al automatisch bijgewerkt. Tools als <a href="/tools/moneybird" style={{ color: 'var(--accent)' }}>Moneybird</a> genereren een kant-en-klaar BTW-overzicht per kwartaal.
        </p>

        <h3>Stap 2 — Inloggen op Mijn Belastingdienst Zakelijk</h3>
        <p>
          Log in via mijn.belastingdienst.nl met eHerkenning (of DigiD). Kies 'Omzetbelasting' en selecteer het juiste kwartaal.
        </p>

        <h3>Stap 3 — Rubrieken invullen</h3>
        <ul>
          <li><strong>1a:</strong> omzet belast met 21% en de verschuldigde BTW</li>
          <li><strong>1b:</strong> omzet belast met 9% en de verschuldigde BTW</li>
          <li><strong>5b:</strong> voorbelasting (BTW op jouw kosten)</li>
          <li><strong>5g:</strong> het te betalen of terug te ontvangen bedrag</li>
        </ul>
        <p>
          De meeste <a href="/boekhoudprogramma" style={{ color: 'var(--accent)' }}>boekhoudprogramma's voor ZZP'ers</a> vullen dit formulier automatisch in. Jij controleert en verstuurt — in sommige tools met één klik.
        </p>

        <h3>Stap 4 — Op tijd betalen</h3>
        <p>
          Betaal het verschuldigde bedrag vóór de deadline. Te laat? Minimaal €68 boete. Reserveer elke maand 21% van je omzet op een aparte rekening, dan sta je nooit voor verrassingen.
        </p>

        <h2>BTW-tarieven in Nederland</h2>
        <ul>
          <li><strong>21%</strong> — standaardtarief voor de meeste diensten en producten</li>
          <li><strong>9%</strong> — voedingsmiddelen, geneesmiddelen, boeken en theater</li>
          <li><strong>0%</strong> — export buiten de EU en intracommunautaire leveringen</li>
        </ul>

        <h2>Conclusie: automatiseer je BTW-aangifte</h2>
        <p>
          BTW-aangifte hoeft geen hoofdpijn te zijn. Met een goed boekhoudprogramma dat direct koppelt met de Belastingdienst ben je er minder dan 10 minuten per kwartaal mee bezig. Vergelijk welke tool het beste bij jou past via onze <a href="/boekhoudprogramma" style={{ color: 'var(--accent)' }}>onafhankelijke vergelijking van boekhoudprogramma's</a>.
        </p>
      </div>

      <div style={{ background: 'var(--accent-light)', border: '1px solid var(--accent)', borderRadius: 16, padding: '28px 32px', textAlign: 'center', marginTop: 48 }}>
        <h3 style={{ fontSize: 20, fontWeight: 700, marginTop: 0, marginBottom: 8, color: 'var(--accent-text)' }}>BTW-aangifte in 10 minuten afhandelen</h3>
        <p style={{ color: 'var(--accent-text)', margin: '0 0 20px', opacity: 0.85 }}>Bekijk welke boekhoudprogramma's direct koppelen met de Belastingdienst en je aangifte automatiseren.</p>
        <a href="/boekhoudprogramma" className="btn-primary" style={{ fontSize: 15, padding: '12px 28px' }}>Vergelijk boekhoudprogramma's →</a>
      </div>
    </div>
  )
}
