import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: "Uurtarief Bepalen als ZZP'er — Berekening met Kosten en Belasting (2026)",
  description: "Hoe bepaal je een realistisch uurtarief als ZZP'er? Stap-voor-stap berekening met kosten, belasting, vakantiedagen, ziekte en gewenste winst.",
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
        Uurtarief bepalen als ZZP&apos;er: de complete berekening
      </h1>
      <p style={{ fontSize: 17, color: 'var(--text-secondary)', marginBottom: 40, lineHeight: 1.7 }}>
        Een te laag uurtarief is een van de meest gemaakte fouten door startende ZZP&apos;ers. Je vergeet rekening te houden met belastingen, niet-declarabele uren, vakantie en kosten. In deze gids doorloop je stap voor stap hoe je een realistisch en rendabel uurtarief berekent.
      </p>

      <div className="card" style={{ padding: '20px 24px', marginBottom: 40, background: 'var(--accent-light)', border: '1px solid var(--accent)' }}>
        <div style={{ fontWeight: 600, marginBottom: 10, color: 'var(--accent-text)' }}>In het kort</div>
        <ul style={{ margin: 0, paddingLeft: 20 }}>
          {[
            'Je kunt als ZZP\'er gemiddeld 60–75% van je beschikbare tijd declareren — de rest gaat op aan acquisitie en administratie',
            'Houd rekening met vakantie, ziekte, feestdagen en niet-betaalde uren bij de berekening',
            'Voeg een opslag toe voor belasting, kosten en pensioenopbouw',
            'Het gemiddelde uurtarief van ZZP\'ers in Nederland lag in 2025 rond de €75–€95 per uur',
          ].map(item => (
            <li key={item} style={{ marginBottom: 6, fontSize: 14, color: 'var(--accent-text)' }}>{item}</li>
          ))}
        </ul>
      </div>

      <div className="prose">
        <h2>Waarom je uurtarief hoger moet zijn dan je denkt</h2>
        <p>
          Als werknemer in loondienst ontving je een bruto maandsalaris. Als ZZP&apos;er moet je dat salaris zelf verdienen — maar je moet er ook alles uitbetalen wat een werkgever normaal voor je regelde: vakantiegeld, pensioen, ziektekosten, arbeidsongeschiktheidsverzekering, opleidingen en werkgeverslasten.
        </p>
        <p>
          Bovendien declareer je als ZZP&apos;er niet alle uren die je werkt. Een deel van je tijd gaat op aan acquisitie, offertes schrijven, administratie, netwerken en bijscholing. Die uren zijn nodig voor je onderneming, maar leveren geen directe omzet op.
        </p>

        <h2>Stap 1: Bepaal je gewenste netto jaarinkomen</h2>
        <p>
          Begin met de vraag: hoeveel wil ik netto per jaar overhouden? Denk hierbij aan je privéuitgaven, hypotheek of huur, boodschappen, verzekeringen en wat je wilt sparen. Stel je wilt netto €45.000 per jaar overhouden.
        </p>
        <p>
          Om €45.000 netto te verdienen als ZZP&apos;er, heb je — afhankelijk van je aftrekposten en schijfindeling — een bruto winst nodig van grofweg <strong>€60.000 tot €70.000</strong>. Dit verschilt per persoon. Gebruik een belastingcalculator voor een nauwkeurige berekening.
        </p>

        <h2>Stap 2: Bereken je declarabele uren per jaar</h2>
        <p>
          Een jaar telt 52 weken. Daarvan trek je af:
        </p>
        <ul>
          <li>Vakantie: gemiddeld 4 weken = 4 weken</li>
          <li>Feestdagen: circa 8 dagen = 1,5 week</li>
          <li>Ziekte en onvoorziene uitval: gemiddeld 1–2 weken</li>
          <li>Opleiding, netwerken en niet-declarabele taken: gemiddeld 4–6 weken</li>
        </ul>
        <p>
          Resteert: circa <strong>38 tot 42 werkweken</strong>. Bij een werkweek van 40 uur komen we op 1.520 tot 1.680 beschikbare uren. Maar niet al die uren zijn declarabel. Een realistisch declarabel percentage voor een full-time ZZP&apos;er is <strong>65 tot 75%</strong> van de totale werktijd.
        </p>
        <p>
          Concreet: 40 werkweken x 40 uur x 70% = <strong>1.120 declarabele uren per jaar</strong>.
        </p>

        <h2>Stap 3: Bereken je benodigde omzet</h2>
        <p>
          Je benodigde omzet bestaat uit:
        </p>
        <ul>
          <li>Gewenste netto inkomen: €45.000</li>
          <li>Inkomstenbelasting (schatting): €15.000</li>
          <li>Zakelijke kosten (boekhoudprogramma, verzekeringen, materialen, etc.): €5.000</li>
          <li>Pensioenopbouw (optioneel, maar aanbevolen): €4.000</li>
        </ul>
        <p>
          Totaal benodigde omzet: circa <strong>€69.000 per jaar</strong>.
        </p>

        <h2>Stap 4: Bereken je minimale uurtarief</h2>
        <p>
          Deel de benodigde omzet door het aantal declarabele uren:
        </p>
        <p>
          €69.000 / 1.120 uur = <strong>€61,61 per uur</strong> als minimum.
        </p>
        <p>
          Dit is het absolute minimum om uit te komen. In de praktijk wil je hier een opslag op zetten voor onzekerheid, niet-declarabele periodes die langer duren dan gepland, en om je onderneming te laten groeien. Een opslag van 15–25% is gebruikelijk, wat het tarief brengt op circa <strong>€70 tot €77 per uur</strong>.
        </p>

        <h2>Stap 5: Toets aan de markt</h2>
        <p>
          Je berekende tarief moet ook marktconform zijn. Vergelijk je tarief met:
        </p>
        <ul>
          <li>Tarieven op platforms als Malt, Freelancer.nl en Jellow voor jouw specialisme</li>
          <li>Brancherapporten van FNV ZZP of Platform ZZP</li>
          <li>Wat collega-freelancers in jouw vakgebied vragen</li>
          <li>De inlenersvergoeding die bemiddelaars of uitzendbureaus in jouw sector hanteren</li>
        </ul>
        <p>
          Zit je berekende tarief ver onder het marktgemiddelde? Dan kun je overwegen je tarief te verhogen — de markt is bereid meer te betalen. Zit je er ver boven? Dan is het de vraag of je voldoende opdrachten kunt binnenhalen, tenzij je een duidelijk onderscheidend aanbod hebt.
        </p>

        <h2>Tariefverschillen per sector</h2>
        <p>
          Het gemiddelde uurtarief verschilt sterk per sector. In 2025 lagen de gemiddelde tarieven globaal als volgt:
        </p>
        <ul>
          <li>IT en softwareontwikkeling: €80–€130 per uur</li>
          <li>Marketing en communicatie: €65–€100 per uur</li>
          <li>Financieel en juridisch advies: €85–€150 per uur</li>
          <li>Bouw en techniek: €50–€80 per uur</li>
          <li>Zorg en begeleiding: €40–€70 per uur</li>
          <li>Creatief (design, fotografie): €55–€90 per uur</li>
        </ul>

        <h2>Tarief verhogen: wanneer en hoe?</h2>
        <p>
          Verhoog je tarief periodiek, minimaal eens per jaar. Redenen om te verhogen zijn inflatie, meer ervaring en expertise, veranderde marktomstandigheden of een vollere agenda (als je het druk hebt, is je tarief waarschijnlijk te laag). Communiceer tariefsverhogingen tijdig aan bestaande opdrachtgevers — bij voorkeur 1 tot 3 maanden van tevoren — en leg ze schriftelijk vast.
        </p>
      </div>

      <div style={{ background: 'var(--accent-light)', border: '1px solid var(--accent)', borderRadius: 16, padding: '28px 32px', textAlign: 'center', marginTop: 48 }}>
        <h3 style={{ fontSize: 20, fontWeight: 700, marginTop: 0, marginBottom: 8, color: 'var(--accent-text)' }}>Hou je omzet en winst eenvoudig bij</h3>
        <p style={{ color: 'var(--accent-text)', margin: '0 0 20px', opacity: 0.85 }}>Met een goed boekhoudprogramma zie je direct of je tarief voldoende oplevert. Vergelijk de beste pakketten voor ZZP&apos;ers.</p>
        <a href="/boekhoudprogramma" className="btn-primary" style={{ fontSize: 15, padding: '12px 28px' }}>Vergelijk boekhoudprogramma&apos;s →</a>
      </div>
    </div>
  )
}
