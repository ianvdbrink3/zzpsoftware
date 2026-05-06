import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: "Uurtarief ZZP berekenen: complete gids 2026",
  description: "Te laag tarief is de meestgemaakte fout. Bereken in 4 stappen je minimum uurtarief als ZZP'er: kosten, belasting, vakantie en marktcheck.",
}

export default function ZzpTariefBepalenPage() {
  return (
    <div style={{ maxWidth: 780, margin: '0 auto', padding: '48px 24px' }}>
      <div style={{ fontSize: 13, color: 'var(--text-tertiary)', marginBottom: 24 }}>
        <a href="/" style={{ color: 'var(--text-tertiary)' }}>Home</a> / <a href="/gids" style={{ color: 'var(--text-tertiary)' }}>Gidsen</a> / Uurtarief bepalen ZZP
      </div>

      <div style={{ display: 'flex', gap: 8, marginBottom: 20, flexWrap: 'wrap' }}>
        <span className="badge badge-green">Financieel</span>
        <span style={{ fontSize: 13, color: 'var(--text-tertiary)' }}>Bijgewerkt mei 2026 · 8 min leestijd</span>
      </div>

      <h1 style={{ fontSize: 'clamp(26px, 4vw, 38px)', fontWeight: 700, marginBottom: 16, lineHeight: 1.2 }}>
        Uurtarief bepalen als ZZP&apos;er: de complete berekening (2026)
      </h1>
      <p style={{ fontSize: 17, color: 'var(--text-secondary)', marginBottom: 40, lineHeight: 1.7 }}>
        Een te laag uurtarief is de meest gemaakte fout door startende ZZP&apos;ers. Je vergeet rekening te houden met belastingen, niet-declarabele uren, vakantie en kosten. In deze gids doorloop je stap voor stap hoe je een realistisch en rendabel uurtarief berekent.
      </p>

      <div className="card" style={{ padding: '20px 24px', marginBottom: 40, background: 'var(--accent-light)', border: '1px solid var(--accent)' }}>
        <div style={{ fontWeight: 600, marginBottom: 10, color: 'var(--accent-text)' }}>In het kort</div>
        <ul style={{ margin: 0, paddingLeft: 20 }}>
          {[
            "Als ZZP'er declareer je gemiddeld 65–75% van je beschikbare tijd",
            'Houd rekening met vakantie, ziekte, feestdagen en niet-betaalde uren',
            'Voeg een opslag toe voor belasting, kosten en pensioenopbouw',
            "Gemiddeld uurtarief ZZP'ers Nederland: €75–€95 per uur (2025)",
          ].map(item => (
            <li key={item} style={{ marginBottom: 6, fontSize: 14, color: 'var(--accent-text)' }}>{item}</li>
          ))}
        </ul>
      </div>

      <div className="prose">
        <h2>Waarom je uurtarief hoger moet zijn dan je denkt</h2>
        <p>
          Als werknemer ontving je een bruto maandsalaris. Als ZZP&apos;er moet je dat salaris zelf verdienen — én alles uitbetalen wat een werkgever normaal regelde: vakantiegeld, pensioen, ziektekosten, arbeidsongeschiktheidsverzekering en werkgeverslasten.
        </p>
        <p>
          Bovendien declareer je niet alle uren die je werkt. Een deel gaat op aan acquisitie, offertes, administratie en bijscholing. Die uren zijn nodig voor je onderneming, maar leveren geen directe omzet op.
        </p>

        <h2>Stap 1: Bepaal je gewenste netto jaarinkomen</h2>
        <p>
          Begin met de vraag: hoeveel wil ik netto per jaar overhouden? Om €45.000 netto te verdienen heb je als ZZP&apos;er — afhankelijk van aftrekposten — een bruto winst nodig van grofweg <strong>€60.000 tot €70.000</strong>.
        </p>

        <h2>Stap 2: Bereken je declarabele uren per jaar</h2>
        <p>
          Een jaar telt 52 weken. Daarvan trek je af:
        </p>
        <ul>
          <li>Vakantie: gemiddeld 4 weken</li>
          <li>Feestdagen: circa 1,5 week</li>
          <li>Ziekte en onvoorziene uitval: 1–2 weken</li>
          <li>Opleiding, netwerken en niet-declarabele taken: 4–6 weken</li>
        </ul>
        <p>
          Resteert circa <strong>38 tot 42 werkweken</strong>. Bij een declarabel percentage van 70% over een 40-urige werkweek: 40 werkweken x 40 uur x 70% = <strong>1.120 declarabele uren per jaar</strong>.
        </p>

        <h2>Stap 3: Bereken je benodigde omzet</h2>
        <ul>
          <li>Gewenste netto inkomen: €45.000</li>
          <li>Inkomstenbelasting (schatting): €15.000</li>
          <li>Zakelijke kosten (boekhoudprogramma, verzekeringen, materialen): €5.000</li>
          <li>Pensioenopbouw: €4.000</li>
        </ul>
        <p>
          Totaal benodigde omzet: circa <strong>€69.000 per jaar</strong>.
        </p>
        <p>
          Met een tool als <a href="/tools/e-boekhouden" style={{ color: 'var(--accent)' }}>e-Boekhouden</a> of <a href="/tools/moneybird" style={{ color: 'var(--accent)' }}>Moneybird</a> zie je direct wat je omzet en winst zijn per maand, zodat je kunt bijsturen als je tarief te laag blijkt.
        </p>

        <h2>Stap 4: Bereken je minimale uurtarief</h2>
        <p>
          Deel de benodigde omzet door het aantal declarabele uren:
        </p>
        <p>
          €69.000 / 1.120 uur = <strong>€61,61 per uur</strong> als minimum.
        </p>
        <p>
          Voeg hier een opslag van 15–25% op toe voor onzekerheid en groei, wat uitkomt op circa <strong>€70 tot €77 per uur</strong>.
        </p>

        <h2>Stap 5: Toets aan de markt</h2>
        <p>
          Vergelijk je tarief met platforms als Malt en Jellow, brancherapporten van FNV ZZP en tarieven van collega-freelancers. Gemiddelde tarieven per sector (2025):
        </p>
        <ul>
          <li>IT en softwareontwikkeling: €80–€130 per uur</li>
          <li>Marketing en communicatie: €65–€100 per uur</li>
          <li>Financieel en juridisch advies: €85–€150 per uur</li>
          <li>Bouw en techniek: €50–€80 per uur</li>
          <li>Creatief (design, fotografie): €55–€90 per uur</li>
        </ul>

        <h2>Tarief verhogen: wanneer en hoe?</h2>
        <p>
          Verhoog je tarief minimaal eens per jaar voor inflatie en groeiende expertise. Heb je het druk? Dan is je tarief waarschijnlijk te laag. Communiceer tariefsverhogingen 1–3 maanden vooraf aan bestaande opdrachtgevers.
        </p>
        <p>
          Een <a href="/boekhoudprogramma" style={{ color: 'var(--accent)' }}>goed boekhoudprogramma</a> geeft je realtime inzicht in je omzet per klant, zodat je precies weet wanneer tariefverhoging nodig is. <a href="/tools/twinfield" style={{ color: 'var(--accent)' }}>Twinfield</a> en <a href="/tools/exact-online" style={{ color: 'var(--accent)' }}>Exact Online</a> bieden uitgebreide rapportages voor dit soort analyses.
        </p>
      </div>

      <div style={{ background: 'var(--accent-light)', border: '1px solid var(--accent)', borderRadius: 16, padding: '28px 32px', textAlign: 'center', marginTop: 48 }}>
        <h3 style={{ fontSize: 20, fontWeight: 700, marginTop: 0, marginBottom: 8, color: 'var(--accent-text)' }}>Hou je omzet en winst bij</h3>
        <p style={{ color: 'var(--accent-text)', margin: '0 0 20px', opacity: 0.85 }}>Met een goed boekhoudprogramma zie je direct of je tarief voldoende oplevert. Vergelijk de beste pakketten voor ZZP&apos;ers.</p>
        <a href="/boekhoudprogramma" className="btn-primary" style={{ fontSize: 15, padding: '12px 28px' }}>Vergelijk boekhoudprogramma&apos;s →</a>
      </div>
    </div>
  )
}
