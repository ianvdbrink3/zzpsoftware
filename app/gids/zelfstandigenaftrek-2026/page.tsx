import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: "Zelfstandigenaftrek 2026 — Bedrag, Urennorm en Belastingvoordeel",
  description: "Alles over de zelfstandigenaftrek in 2026: het bedrag van €2.470, de urennorm van 1.225 uur, hoe je het berekent en hoeveel belasting je bespaart.",
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
        De zelfstandigenaftrek is een van de belangrijkste belastingvoordelen voor ZZP&apos;ers. In 2026 bedraagt de aftrek €2.470. Maar om er gebruik van te maken moet je aan de urennorm voldoen. In deze gids lees je alles over de voorwaarden, de berekening en wat de aftrek concreet voor jou oplevert.
      </p>

      <div className="card" style={{ padding: '20px 24px', marginBottom: 40, background: 'var(--accent-light)', border: '1px solid var(--accent)' }}>
        <div style={{ fontWeight: 600, marginBottom: 10, color: 'var(--accent-text)' }}>In het kort</div>
        <ul style={{ margin: 0, paddingLeft: 20 }}>
          {[
            'Zelfstandigenaftrek 2026: €2.470 (afgebouwd van oorspronkelijk €7.280 naar uiteindelijk €900 in 2027)',
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
          De zelfstandigenaftrek is een fiscale aftrekpost die speciaal bedoeld is voor ondernemers die inkomstenbelasting betalen — waaronder ZZP&apos;ers met een eenmanszaak. Je mag het bedrag van de zelfstandigenaftrek aftrekken van je winst, waardoor je over een lager bedrag belasting betaalt.
        </p>
        <p>
          De aftrek is al jaren in afbouw. In 2020 bedroeg de zelfstandigenaftrek nog €7.030. De overheid bouwt het bedrag jaarlijks af naar €900 in 2027. In 2026 bedraagt de zelfstandigenaftrek <strong>€2.470</strong>.
        </p>

        <h2>Voorwaarden: de urennorm</h2>
        <p>
          Om gebruik te mogen maken van de zelfstandigenaftrek moet je voldoen aan het <strong>urencriterium</strong>: je moet minimaal <strong>1.225 uur per jaar</strong> aan je onderneming hebben besteed. Dit komt neer op gemiddeld ruim 23 uur per week over 52 weken, of circa 26 uur per week als je 47 werkweken rekent.
        </p>
        <p>
          Naast de 1.225-ureneis gelden de volgende voorwaarden:
        </p>
        <ul>
          <li>Je drijft een onderneming voor de inkomstenbelasting (de Belastingdienst beoordeelt dit op basis van criteria zoals zelfstandigheid, continuiteit en omvang)</li>
          <li>Je bent aan het begin van het kalenderjaar jonger dan de AOW-leeftijd</li>
          <li>Als je ook in loondienst werkt, moet je meer dan 50% van je totale werktijd aan de onderneming besteden</li>
        </ul>

        <h2>Hoeveel belasting bespaar je met de zelfstandigenaftrek?</h2>
        <p>
          De zelfstandigenaftrek verlaagt je <strong>belastbaar inkomen</strong>. Hoeveel belasting je bespaart hangt af van je belastingschijf. In 2026 gelden twee schijven in box 1:
        </p>
        <ul>
          <li>Schijf 1: tot circa €75.518 — tarief 36,97%</li>
          <li>Schijf 2: boven €75.518 — tarief 49,50%</li>
        </ul>
        <p>
          De aftrek wordt echter gemaximeerd tot het lagere tarief van 36,97%, ook als je in de hoogste schijf valt. Concreet betekent een zelfstandigenaftrek van €2.470 in 2026 een belastingbesparing van:
        </p>
        <ul>
          <li>€2.470 x 36,97% = circa <strong>€913 minder belasting</strong></li>
        </ul>
        <p>
          Ter vergelijking: in 2021 was de zelfstandigenaftrek nog €6.670, wat een besparing van ruim €2.500 opleverde. De afbouw heeft dus een significante impact op het nettoresultaat van ZZP&apos;ers.
        </p>

        <h2>De startersaftrek: extra voordeel voor nieuwe ZZP&apos;ers</h2>
        <p>
          Ben je een startende ondernemer? Dan kun je bovenop de zelfstandigenaftrek ook de <strong>startersaftrek</strong> claimen. In 2026 bedraagt de startersaftrek <strong>€2.123</strong>. Je mag de startersaftrek maximaal 3 keer toepassen in de eerste 5 jaar van je onderneming.
        </p>
        <p>
          Gecombineerd met de zelfstandigenaftrek en de MKB-winstvrijstelling kan dit in de beginjaren een substantieel belastingvoordeel opleveren.
        </p>

        <h2>MKB-winstvrijstelling: ook voor ZZP&apos;ers</h2>
        <p>
          Naast de zelfstandigenaftrek is er ook de <strong>MKB-winstvrijstelling</strong>: een aftrek van 13,31% van de winst na toepassing van de ondernemersaftrekken. Je hoeft voor de MKB-winstvrijstelling niet te voldoen aan de urennorm — deze aftrek geldt voor alle ondernemers voor de inkomstenbelasting. Dit maakt de effectieve belastingdruk voor ZZP&apos;ers lager dan die voor werknemers in loondienst.
        </p>

        <h2>Hoe claim je de zelfstandigenaftrek?</h2>
        <p>
          Je claimt de zelfstandigenaftrek bij de jaarlijkse aangifte inkomstenbelasting. In de aangifte geef je je winst op en trek je vervolgens de zelfstandigenaftrek en eventuele andere ondernemersaftrekken af. Zorg dat je je urenregistratie op orde hebt — de Belastingdienst kan hierom vragen.
        </p>
        <p>
          Als je een boekhoudprogramma gebruikt, berekent het programma vaak automatisch welke aftrekken van toepassing zijn op basis van de door jou ingevoerde gegevens. Sommige programma&apos;s helpen je ook bij de export van gegevens voor de belastingaangifte.
        </p>
      </div>

      <div style={{ background: 'var(--accent-light)', border: '1px solid var(--accent)', borderRadius: 16, padding: '28px 32px', textAlign: 'center', marginTop: 48 }}>
        <h3 style={{ fontSize: 20, fontWeight: 700, marginTop: 0, marginBottom: 8, color: 'var(--accent-text)' }}>Hou je winst en aftrekken automatisch bij</h3>
        <p style={{ color: 'var(--accent-text)', margin: '0 0 20px', opacity: 0.85 }}>Een goed boekhoudprogramma berekent je winst correct en helpt je alle aftrekken te benutten. Vergelijk de beste pakketten.</p>
        <a href="/boekhoudprogramma" className="btn-primary" style={{ fontSize: 15, padding: '12px 28px' }}>Vergelijk boekhoudprogramma&apos;s →</a>
      </div>
    </div>
  )
}
