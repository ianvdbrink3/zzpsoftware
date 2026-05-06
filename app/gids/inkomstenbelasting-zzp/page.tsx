import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: "Inkomstenbelasting ZZP 2026: tarieven & aangifte",
  description: "Als ZZP'er betaal je belasting over je winst, niet je omzet. Tarieven 2026, alle aftrekposten, hoeveel reserveren en aangifte doen.",
}

export default function InkomstenbelastingZzpPage() {
  return (
    <div style={{ maxWidth: 780, margin: '0 auto', padding: '48px 24px' }}>
      <div style={{ fontSize: 13, color: 'var(--text-tertiary)', marginBottom: 24 }}>
        <a href="/" style={{ color: 'var(--text-tertiary)' }}>Home</a> / <a href="/gids" style={{ color: 'var(--text-tertiary)' }}>Gidsen</a> / Inkomstenbelasting ZZP
      </div>

      <div style={{ display: 'flex', gap: 8, marginBottom: 20, flexWrap: 'wrap' }}>
        <span className="badge badge-green">Belasting</span>
        <span style={{ fontSize: 13, color: 'var(--text-tertiary)' }}>Bijgewerkt mei 2026 · 9 min leestijd</span>
      </div>

      <h1 style={{ fontSize: 'clamp(26px, 4vw, 38px)', fontWeight: 700, marginBottom: 16, lineHeight: 1.2 }}>
        Inkomstenbelasting als ZZP&apos;er: tarieven 2026, aftrekposten en aangifte
      </h1>
      <p style={{ fontSize: 17, color: 'var(--text-secondary)', marginBottom: 40, lineHeight: 1.7 }}>
        Als ZZP&apos;er betaal je inkomstenbelasting over je winst, niet over je omzet. Hoe dat precies werkt, welke aftrekposten je kunt benutten en hoe je de aangifte aanpakt — dit alles lees je in deze gids.
      </p>

      <div className="card" style={{ padding: '20px 24px', marginBottom: 40, background: 'var(--accent-light)', border: '1px solid var(--accent)' }}>
        <div style={{ fontWeight: 600, marginBottom: 10, color: 'var(--accent-text)' }}>In het kort</div>
        <ul style={{ margin: 0, paddingLeft: 20 }}>
          {[
            'Je betaalt belasting over je winst: omzet minus kosten en aftrekposten',
            'Tarieven 2026: 36,97% tot €75.518 en 49,50% daarboven',
            'Zelfstandigenaftrek en MKB-winstvrijstelling verlagen je belastbaar inkomen fors',
            'Reserveer maandelijks 25–35% van je winst voor de belastingaanslag',
          ].map(item => (
            <li key={item} style={{ marginBottom: 6, fontSize: 14, color: 'var(--accent-text)' }}>{item}</li>
          ))}
        </ul>
      </div>

      <div className="prose">
        <h2>Hoe werkt inkomstenbelasting voor ZZP&apos;ers?</h2>
        <p>
          Als ZZP&apos;er met een eenmanszaak betaal je <strong>inkomstenbelasting</strong> over je winst in box 1. Je winst is je omzet minus aftrekbare zakelijke kosten. Niemand houdt inkomstenbelasting voor je in — je betaalt achteraf, na afloop van het belastingjaar.
        </p>
        <p>
          Dat betekent: zelf reserveren gedurende het jaar, of een voorlopige aanslag aanvragen zodat je maandelijks betaalt.
        </p>

        <h2>Belastingtarieven 2026</h2>
        <ul>
          <li><strong>Schijf 1:</strong> inkomen tot €75.518 — tarief <strong>36,97%</strong></li>
          <li><strong>Schijf 2:</strong> inkomen boven €75.518 — tarief <strong>49,50%</strong></li>
        </ul>

        <h2>Van omzet naar belastbaar inkomen</h2>
        <p>
          De berekening stap voor stap:
        </p>
        <ul>
          <li>Omzet (alle inkomsten)</li>
          <li>Minus: zakelijke kosten</li>
          <li>= <strong>winst uit onderneming</strong></li>
          <li>Minus: zelfstandigenaftrek (€2.470, mits 1.225+ uur)</li>
          <li>Minus: startersaftrek (€2.123, max 3x in 5 jaar)</li>
          <li>Minus: MKB-winstvrijstelling (13,31% van winst)</li>
          <li>= <strong>belastbaar inkomen box 1</strong></li>
        </ul>
        <p>
          Een goed <a href="/boekhoudprogramma" style={{ color: 'var(--accent)' }}>boekhoudprogramma</a> berekent je winst automatisch. <a href="/tools/moneybird" style={{ color: 'var(--accent)' }}>Moneybird</a> en <a href="/tools/snelstart" style={{ color: 'var(--accent)' }}>SnelStart</a> tonen realtime wat je winst is en hoeveel belasting je kunt verwachten.
        </p>

        <h2>Heffingskortingen: direct voordeel</h2>
        <p>
          Heffingskortingen verminderen de belasting zelf (niet het inkomen). De belangrijkste in 2026:
        </p>
        <ul>
          <li><strong>Algemene heffingskorting:</strong> maximaal €3.362</li>
          <li><strong>Arbeidskorting:</strong> maximaal €5.158</li>
        </ul>

        <h2>Zakelijke kosten aftrekken</h2>
        <p>
          Veelvoorkomende aftrekbare kosten voor ZZP&apos;ers:
        </p>
        <ul>
          <li>Abonnementen op boekhoud- en factuursoftware</li>
          <li>Reiskosten (€0,23 per km voor eigen auto)</li>
          <li>Opleiding en bijscholing</li>
          <li>Zakelijke verzekeringen (AOV, beroepsaansprakelijkheid)</li>
          <li>Marketing en websitekosten</li>
        </ul>
        <p>
          <a href="/tools/jortt" style={{ color: 'var(--accent)' }}>Jortt</a> en <a href="/tools/e-boekhouden" style={{ color: 'var(--accent)' }}>e-Boekhouden</a> categoriseren kosten automatisch bij bankkoppeling, zodat je bij de aangifte precies weet wat aftrekbaar is.
        </p>

        <h2>Belasting reserveren: hoeveel houd je apart?</h2>
        <p>
          Vuistregel: reserveer maandelijks <strong>25 tot 35% van je netto winst</strong> op een aparte rekening. Bij een winst van €40.000 betaal je als ZZP&apos;er effectief vaak 15–25% belasting. Bij hogere winst loopt dit op.
        </p>

        <h2>Voorlopige aanslag aanvragen</h2>
        <p>
          Verwacht je meer dan €500 belasting te betalen? Vraag een voorlopige aanslag aan bij de Belastingdienst. Je betaalt dan maandelijks of per kwartaal — geen grote rekening achteraf. Je kunt de aanslag elk jaar bijstellen als je inkomen verandert.
        </p>

        <h2>Aangifte inkomstenbelasting: deadlines</h2>
        <p>
          Deadline voor ZZP&apos;ers: <strong>1 mei</strong>. Via een belastingadviseur of boekhouder kan dit worden verlengd tot 1 september. Zorg voor: winstoverzicht, urenregistratie en eventuele andere inkomsten.
        </p>
        <p>
          <a href="/tools/exact-online" style={{ color: 'var(--accent)' }}>Exact Online</a> en <a href="/tools/twinfield" style={{ color: 'var(--accent)' }}>Twinfield</a> genereren een volledig winstoverzicht dat je boekhouder direct kan gebruiken voor de aangifte.
        </p>
      </div>

      <div style={{ background: 'var(--accent-light)', border: '1px solid var(--accent)', borderRadius: 16, padding: '28px 32px', textAlign: 'center', marginTop: 48 }}>
        <h3 style={{ fontSize: 20, fontWeight: 700, marginTop: 0, marginBottom: 8, color: 'var(--accent-text)' }}>Winst automatisch berekenen voor de aangifte</h3>
        <p style={{ color: 'var(--accent-text)', margin: '0 0 20px', opacity: 0.85 }}>Een goed boekhoudprogramma houdt je winst bij en maakt de aangifte een stuk eenvoudiger. Vergelijk de beste opties.</p>
        <a href="/boekhoudprogramma" className="btn-primary" style={{ fontSize: 15, padding: '12px 28px' }}>Vergelijk boekhoudprogramma&apos;s →</a>
      </div>
    </div>
  )
}
