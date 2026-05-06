import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: "Zelfstandigenaftrek 2026: bedrag & urennorm",
  description: "Zelfstandigenaftrek 2026 is €2.470. Wat zijn de voorwaarden, hoe bereken je het voordeel en wat doet de afbouw met jouw belasting?",
}

export default function ZelfstandigenaftrekPage() {
  return (
    <div style={{ maxWidth: 780, margin: '0 auto', padding: '48px 24px' }}>
      <div style={{ fontSize: 13, color: 'var(--text-tertiary)', marginBottom: 24 }}>
        <a href="/" style={{ color: 'var(--text-tertiary)' }}>Home</a> / <a href="/gids" style={{ color: 'var(--text-tertiary)' }}>Gidsen</a> / Zelfstandigenaftrek 2026
      </div>

      <div style={{ display: 'flex', gap: 8, marginBottom: 20, flexWrap: 'wrap' }}>
        <span className="badge badge-green">Belasting</span>
        <span style={{ fontSize: 13, color: 'var(--text-tertiary)' }}>Bijgewerkt mei 2026 · 7 min leestijd</span>
      </div>

      <h1 style={{ fontSize: 'clamp(26px, 4vw, 38px)', fontWeight: 700, marginBottom: 16, lineHeight: 1.2 }}>
        Zelfstandigenaftrek 2026: bedrag, urennorm en hoeveel je bespaart
      </h1>
      <p style={{ fontSize: 17, color: 'var(--text-secondary)', marginBottom: 40, lineHeight: 1.7 }}>
        De zelfstandigenaftrek is een van de belangrijkste belastingvoordelen voor ZZP&apos;ers. In 2026 bedraagt de aftrek €2.470. Maar om er gebruik van te maken moet je aan de urennorm voldoen. In deze gids lees je alles over de voorwaarden, de berekening en wat de aftrek concreet oplevert.
      </p>

      <div className="card" style={{ padding: '20px 24px', marginBottom: 40, background: 'var(--accent-light)', border: '1px solid var(--accent)' }}>
        <div style={{ fontWeight: 600, marginBottom: 10, color: 'var(--accent-text)' }}>In het kort</div>
        <ul style={{ margin: 0, paddingLeft: 20 }}>
          {[
            'Zelfstandigenaftrek 2026: €2.470 (afgebouwd richting €900 in 2027)',
            'Voorwaarde: minimaal 1.225 uur per jaar besteed aan je onderneming',
            'De aftrek verlaagt je belastbaar inkomen, niet je belasting direct',
            'Starters kunnen bovendien de startersaftrek van €2.123 extra claimen',
          ].map(item => (
            <li key={item} style={{ marginBottom: 6, fontSize: 14, color: 'var(--accent-text)' }}>{item}</li>
          ))}
        </ul>
      </div>

      <div className="prose">
        <h2>Wat is de zelfstandigenaftrek?</h2>
        <p>
          De zelfstandigenaftrek is een fiscale aftrekpost voor ondernemers die inkomstenbelasting betalen — waaronder ZZP&apos;ers met een eenmanszaak. Je trekt het bedrag af van je winst, waardoor je over een lager bedrag belasting betaalt.
        </p>
        <p>
          In 2026 bedraagt de zelfstandigenaftrek <strong>€2.470</strong>. De overheid bouwt het bedrag jaarlijks af richting €900 in 2027. In 2020 was het nog €7.030 — de afbouw heeft dus een forse impact op het nettoresultaat van ZZP&apos;ers.
        </p>

        <h2>Voorwaarden: het urencriterium van 1.225 uur</h2>
        <p>
          Om de zelfstandigenaftrek te claimen moet je voldoen aan het <strong>urencriterium</strong>: minimaal <strong>1.225 uur per jaar</strong> aan je onderneming besteden. Dat is gemiddeld circa 26 uur per week over 47 werkweken.
        </p>
        <p>
          Naast de urennorm gelden deze voorwaarden:
        </p>
        <ul>
          <li>Je drijft een onderneming voor de inkomstenbelasting</li>
          <li>Je bent bij aanvang van het jaar jonger dan de AOW-leeftijd</li>
          <li>Werk je ook in loondienst, dan moet meer dan 50% van je totale werktijd naar de onderneming gaan</li>
        </ul>
        <p>
          Houd je uren bij met een tijdregistratietool. Programma&apos;s als <a href="/tools/moneybird" style={{ color: 'var(--accent)' }}>Moneybird</a> en <a href="/tools/jortt" style={{ color: 'var(--accent)' }}>Jortt</a> hebben ingebouwde urenregistratie die je ook kunt gebruiken voor je urencriterium-bewijs.
        </p>

        <h2>Hoeveel belasting bespaar je?</h2>
        <p>
          De zelfstandigenaftrek verlaagt je <strong>belastbaar inkomen</strong>. In 2026 gelden twee schijven in box 1:
        </p>
        <ul>
          <li>Schijf 1: tot circa €75.518 — tarief 36,97%</li>
          <li>Schijf 2: boven €75.518 — tarief 49,50%</li>
        </ul>
        <p>
          De aftrek wordt gemaximeerd tot het lagere tarief van 36,97%, ook als je in de hoogste schijf valt. Concreet levert €2.470 zelfstandigenaftrek in 2026 een besparing op van:
        </p>
        <ul>
          <li>€2.470 x 36,97% = circa <strong>€913 minder belasting</strong></li>
        </ul>

        <h2>Startersaftrek: extra voordeel voor nieuwe ZZP&apos;ers</h2>
        <p>
          Startende ondernemers mogen bovenop de zelfstandigenaftrek de <strong>startersaftrek</strong> claimen: <strong>€2.123</strong> in 2026. Dit is maximaal 3 keer toe te passen in de eerste 5 jaar van je onderneming.
        </p>

        <h2>MKB-winstvrijstelling</h2>
        <p>
          Naast de zelfstandigenaftrek geldt de <strong>MKB-winstvrijstelling</strong>: 13,31% vrijstelling op je winst na toepassing van ondernemersaftrekken. Voor de MKB-winstvrijstelling hoef je niet aan de urennorm te voldoen — deze geldt voor alle ondernemers voor de inkomstenbelasting.
        </p>

        <h2>Hoe claim je de zelfstandigenaftrek?</h2>
        <p>
          Je claimt de zelfstandigenaftrek bij de jaarlijkse aangifte inkomstenbelasting (deadline 1 mei). Zorg dat je urenregistratie compleet is — de Belastingdienst kan hierom vragen bij een boekenonderzoek.
        </p>
        <p>
          Een goed <a href="/boekhoudprogramma" style={{ color: 'var(--accent)' }}>boekhoudprogramma voor ZZP&apos;ers</a> berekent je winst en aftrekken automatisch. <a href="/tools/snelstart" style={{ color: 'var(--accent)' }}>SnelStart</a> en <a href="/tools/exact-online" style={{ color: 'var(--accent)' }}>Exact Online</a> exporteren ook gegevens die je boekhouder direct kan gebruiken voor de aangifte.
        </p>
      </div>

      <div style={{ background: 'var(--accent-light)', border: '1px solid var(--accent)', borderRadius: 16, padding: '28px 32px', textAlign: 'center', marginTop: 48 }}>
        <h3 style={{ fontSize: 20, fontWeight: 700, marginTop: 0, marginBottom: 8, color: 'var(--accent-text)' }}>Winst en aftrekken automatisch berekenen</h3>
        <p style={{ color: 'var(--accent-text)', margin: '0 0 20px', opacity: 0.85 }}>Een goed boekhoudprogramma berekent je winst correct en helpt je alle aftrekken te benutten. Vergelijk de beste pakketten.</p>
        <a href="/boekhoudprogramma" className="btn-primary" style={{ fontSize: 15, padding: '12px 28px' }}>Vergelijk boekhoudprogramma&apos;s →</a>
      </div>
    </div>
  )
}
