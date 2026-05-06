import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: "Inkomstenbelasting als ZZP'er — Tarieven 2026, Aftrekposten en Aangifte",
  description: "Hoe werkt inkomstenbelasting als ZZP'er? Tarieven 2026, alle aftrekposten voor ondernemers, belastingreservering en aangifte invullen stap voor stap.",
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
        Als ZZP&apos;er betaal je inkomstenbelasting over je winst, niet over je omzet. Hoe dat precies werkt, welke aftrekposten je kunt benutten en hoe je de aangifte aanpakt — dit alles lees je in deze uitgebreide gids over inkomstenbelasting voor ZZP&apos;ers in 2026.
      </p>

      <div className="card" style={{ padding: '20px 24px', marginBottom: 40, background: 'var(--accent-light)', border: '1px solid var(--accent)' }}>
        <div style={{ fontWeight: 600, marginBottom: 10, color: 'var(--accent-text)' }}>In het kort</div>
        <ul style={{ margin: 0, paddingLeft: 20 }}>
          {[
            'Je betaalt inkomstenbelasting over je winst (omzet minus zakelijke kosten en aftrekposten)',
            'Belastingtarieven 2026: 36,97% tot €75.518 en 49,50% daarboven',
            'Ondernemersaftrekken (zelfstandigenaftrek, MKB-winstvrijstelling) verlagen je belastbaar inkomen fors',
            'Reserveer maandelijks 25–35% van je winst voor de belastingaanslag',
          ].map(item => (
            <li key={item} style={{ marginBottom: 6, fontSize: 14, color: 'var(--accent-text)' }}>{item}</li>
          ))}
        </ul>
      </div>

      <div className="prose">
        <h2>Hoe werkt inkomstenbelasting voor ZZP&apos;ers?</h2>
        <p>
          Als ZZP&apos;er met een eenmanszaak betaal je geen vennootschapsbelasting, maar <strong>inkomstenbelasting</strong>. Je winst — omzet minus zakelijke kosten — wordt opgeteld bij eventueel ander inkomen (zoals inkomsten uit loondienst of box 3) en belast in box 1.
        </p>
        <p>
          In tegenstelling tot een werknemer houdt niemand inkomstenbelasting voor jou in. Je betaalt achteraf, na afloop van het belastingjaar. Dat betekent dat je zelf moet reserveren gedurende het jaar, of een voorlopige aanslag kunt aanvragen zodat je in termijnen betaalt.
        </p>

        <h2>Belastingtarieven 2026: box 1</h2>
        <p>
          In 2026 gelden de volgende tarieven voor box 1 (werk en woning):
        </p>
        <ul>
          <li><strong>Schijf 1:</strong> inkomen tot circa €75.518 — tarief <strong>36,97%</strong></li>
          <li><strong>Schijf 2:</strong> inkomen boven €75.518 — tarief <strong>49,50%</strong></li>
        </ul>
        <p>
          Over het inkomen in schijf 1 is ook premie volksverzekeringen inbegrepen (AOW, ANW, WLZ). Het gecombineerde tarief voor box 1 is daarmee voor de meeste ZZP&apos;ers 36,97% over het inkomen tot de schijfgrens.
        </p>

        <h2>Van omzet naar belastbaar inkomen: de berekening</h2>
        <p>
          Je inkomstenbelasting wordt berekend over je <strong>belastbaar inkomen</strong>, niet over je omzet. Dit is een stapsgewijze berekening:
        </p>
        <ul>
          <li>Omzet (alle inkomsten uit je onderneming)</li>
          <li>Minus: zakelijke kosten (kantoorkosten, software, reiskosten, opleidingen, etc.)</li>
          <li>Is gelijk aan: <strong>winst uit onderneming</strong></li>
          <li>Minus: zelfstandigenaftrek (€2.470 in 2026, mits je voldoet aan de urennorm)</li>
          <li>Minus: eventuele startersaftrek (€2.123, maximaal 3 keer in 5 jaar)</li>
          <li>Minus: MKB-winstvrijstelling (13,31% van de winst na ondernemersaftrekken)</li>
          <li>Is gelijk aan: <strong>belastbaar inkomen uit werk en woning (box 1)</strong></li>
        </ul>
        <p>
          Op dit belastbaar inkomen pas je de tarieven toe. Hierna worden eventuele heffingskortingen afgetrokken van het te betalen belastingbedrag.
        </p>

        <h2>Heffingskortingen: direct voordeel op je belasting</h2>
        <p>
          Heffingskortingen verminderen het bedrag dat je uiteindelijk betaalt — niet je inkomen, maar de belasting zelf. De belangrijkste kortingen voor ZZP&apos;ers in 2026:
        </p>
        <ul>
          <li><strong>Algemene heffingskorting:</strong> maximaal €3.362 (afbouwend bij hoger inkomen)</li>
          <li><strong>Arbeidskorting:</strong> maximaal €5.158 (voor actief werkenden, ook ZZP&apos;ers)</li>
        </ul>
        <p>
          De combinatie van heffingskortingen en ondernemersaftrekken zorgt ervoor dat de effectieve belastingdruk voor veel ZZP&apos;ers aanzienlijk lager is dan de nominale tarieven doen vermoeden.
        </p>

        <h2>Zakelijke kosten aftrekken</h2>
        <p>
          Alle kosten die je maakt voor je onderneming zijn aftrekbaar van je winst. Voorbeelden van zakelijke kosten voor ZZP&apos;ers:
        </p>
        <ul>
          <li>Kantoorkosten en thuiswerkaftrek</li>
          <li>Laptop, telefoon en andere apparatuur (soms te activeren als investering)</li>
          <li>Software en abonnementen (boekhoudprogramma, ontwerpprogramma&apos;s, etc.)</li>
          <li>Reiskosten (€0,23 per km voor eigen auto, of werkelijke kosten OV)</li>
          <li>Opleiding en bijscholing direct gerelateerd aan je werk</li>
          <li>Zakelijke verzekeringen</li>
          <li>Representatiekosten (gedeeltelijk, voor zakelijke lunches geldt een drempel)</li>
          <li>Kosten voor je zakelijke website en marketing</li>
        </ul>

        <h2>Voorlopige aanslag aanvragen</h2>
        <p>
          Als je verwacht meer dan €500 belasting te moeten betalen, kun je een <strong>voorlopige aanslag</strong> aanvragen bij de Belastingdienst. Je betaalt dan gedurende het jaar maandelijks of per kwartaal een deel van de verwachte belasting. Dit voorkomt een grote aanslag in een keer na afloop van het jaar.
        </p>
        <p>
          Je kunt de voorlopige aanslag elk jaar aanpassen als je verwachte inkomen verandert. Heb je de aanslag te laag ingeschat, dan betaal je het resterende bedrag achteraf (plus eventueel belastingrente). Heb je te veel betaald, dan krijg je geld terug.
        </p>

        <h2>Belasting reserveren: hoeveel houd je apart?</h2>
        <p>
          Een vuistregel voor ZZP&apos;ers: reserveer maandelijks <strong>25 tot 35% van je netto winst</strong> op een aparte (sub)rekening. Het exacte percentage hangt af van je inkomensniveau, aftrekposten en persoonlijke situatie. Hoe hoger je winst, hoe hoger het te reserveren percentage vanwege de hogere belastingschijf.
        </p>
        <p>
          Bij een winst van €40.000 per jaar en na aftrek van alle aftrekposten betaal je als ZZP&apos;er effectief vaak tussen de 15% en 25% belasting. Bij hogere winsten loopt dit op. Gebruik een belastingcalculator of vraag je boekhouder om een specifieke berekening voor jouw situatie.
        </p>

        <h2>Aangifte inkomstenbelasting: deadlines en aanpak</h2>
        <p>
          De aangifte inkomstenbelasting moet elk jaar worden ingediend. De deadline voor ZZP&apos;ers die zelf aangifte doen is <strong>1 mei</strong>. Laat je je aangifte doen door een belastingadviseur, dan geldt vaak een uitgestelde deadline tot 1 september of later.
        </p>
        <p>
          De aangifte doe je via Mijn Belastingdienst. Zorg dat je de volgende gegevens bij de hand hebt: je jaarrekening of winstoverzicht, urenregistratie (voor de zelfstandigenaftrek), en eventuele andere inkomsten, hypotheekgegevens of aftrekposten.
        </p>
      </div>

      <div style={{ background: 'var(--accent-light)', border: '1px solid var(--accent)', borderRadius: 16, padding: '28px 32px', textAlign: 'center', marginTop: 48 }}>
        <h3 style={{ fontSize: 20, fontWeight: 700, marginTop: 0, marginBottom: 8, color: 'var(--accent-text)' }}>Automatisch je winst berekenen voor de aangifte</h3>
        <p style={{ color: 'var(--accent-text)', margin: '0 0 20px', opacity: 0.85 }}>Een goed boekhoudprogramma houdt je winst bij en maakt de aangifte een stuk eenvoudiger. Vergelijk de beste opties voor ZZP&apos;ers.</p>
        <a href="/boekhoudprogramma" className="btn-primary" style={{ fontSize: 15, padding: '12px 28px' }}>Vergelijk boekhoudprogramma&apos;s →</a>
      </div>
    </div>
  )
}
