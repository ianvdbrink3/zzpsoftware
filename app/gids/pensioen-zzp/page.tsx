import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: "Pensioen als ZZP'er regelen in 2026 | SlimBoekhoud",
  description: "Als ZZP'er bouw je geen pensioen op via een werkgever. Ontdek je opties: lijfrente, banksparen, beleggen en hoeveel je maandelijks moet sparen.",
}

export default function PensioenZzpPage() {
  return (
    <div style={{ maxWidth: 780, margin: '0 auto', padding: '48px 24px' }}>
      <div style={{ fontSize: 13, color: 'var(--text-tertiary)', marginBottom: 24 }}>
        <a href="/" style={{ color: 'var(--text-tertiary)' }}>Home</a> / <a href="/gids" style={{ color: 'var(--text-tertiary)' }}>Gidsen</a> / Pensioen als ZZP'er
      </div>

      <div style={{ display: 'flex', gap: 8, marginBottom: 20, flexWrap: 'wrap' }}>
        <span className="badge badge-green">Financieel</span>
        <span style={{ fontSize: 13, color: 'var(--text-tertiary)' }}>Bijgewerkt mei 2026 · 9 min leestijd</span>
      </div>

      <h1 style={{ fontSize: 'clamp(26px, 4vw, 38px)', fontWeight: 700, marginBottom: 16, lineHeight: 1.2 }}>
        Pensioen als ZZP'er: zelf regelen in 5 stappen
      </h1>
      <p style={{ fontSize: 17, color: 'var(--text-secondary)', marginBottom: 40, lineHeight: 1.7 }}>
        Als ZZP'er bouw je geen automatisch pensioen op via een werkgever. Je bent zelf verantwoordelijk voor je oudedagsvoorziening. Dat klinkt ingewikkeld, maar met de juiste strategie en een paar slimme keuzes leg je een solide basis voor later.
      </p>

      <div className="card" style={{ padding: '20px 24px', marginBottom: 40, background: 'var(--accent-light)', border: '1px solid var(--accent)' }}>
        <div style={{ fontWeight: 600, marginBottom: 10, color: 'var(--accent-text)' }}>In het kort</div>
        <ul style={{ margin: 0, paddingLeft: 20 }}>
          {[
            'Je hebt wel recht op AOW, maar dat dekt doorgaans niet je volledige inkomen',
            'Lijfrente en banksparen zijn fiscaal aantrekkelijk: inleg is aftrekbaar van de belasting',
            'Beleggen via een vrije beleggingsrekening geeft meer flexibiliteit, maar minder belastingvoordeel',
            'Vuistregel: zet 10 tot 15% van je bruto-inkomen opzij voor pensioen',
          ].map(item => (
            <li key={item} style={{ marginBottom: 6, fontSize: 14, color: 'var(--accent-text)' }}>{item}</li>
          ))}
        </ul>
      </div>

      <div className="prose">
        <h2>Waarom pensioen als ZZP'er anders is</h2>
        <p>In loondienst bouwt je werkgever automatisch pensioen voor je op via een pensioenfonds. Als ZZP'er mis je deze automatische opbouw volledig. Je hebt wel recht op AOW (Algemene Ouderdomswet) zodra je de AOW-leeftijd bereikt — in 2026 is dat 67 jaar. Maar de AOW bedraagt voor een alleenstaande circa 1.450 euro netto per maand. Voor de meeste ZZP'ers is dat aanzienlijk minder dan hun huidige inkomen.</p>
        <p>Het pensioengat — het verschil tussen je gewenste pensioeninkomen en je verwachte AOW — moet je zelf dichten. Hoe eerder je hiermee begint, hoe minder je maandelijks opzij hoeft te leggen door het rente-op-rente-effect.</p>

        <h2>Optie 1: Lijfrente</h2>
        <p>Een lijfrenteverzekering of lijfrenterekening is een van de meest populaire pensioenvormen voor ZZP'ers, omdat de inleg fiscaal aftrekbaar is. Je stort geld op een geblokkeerde rekening of polis, belegt dit geld (bij een rekening) of laat het verzekeren (bij een verzekering), en bij pensionering ontvang je maandelijkse uitkeringen waarover je dan belasting betaalt.</p>
        <h3>Hoeveel mag je aftrekken?</h3>
        <p>De jaarruimte bepaalt hoeveel je fiscaal aftrekbaar mag inleggen. De berekening is: 30% van je premiegrondslag (inkomen minus een drempelinkomen van circa 15.000 euro) minus de pensioenaangroei bij een eventuele vorige werkgever. Voor 2026 bedraagt de jaarruimte maximaal circa 34.550 euro. Heb je in voorgaande jaren onvoldoende ingelegd, dan kun je via de reserveringsruimte ook achterstallige jaren inhalen.</p>
        <h3>Lijfrenteverzekering versus lijfrenterekening</h3>
        <p>Een lijfrenteverzekering biedt vaak een gegarandeerde uitkering maar heeft doorgaans hogere kosten. Een lijfrenterekening (banksparen) geeft je meer controle over je beleggingen en is transparanter qua kosten. Bij overlijden gaat het tegoed op een lijfrenterekening naar je erfgenamen; bij een verzekering hangt dit af van de polisvoorwaarden.</p>

        <h2>Optie 2: Banksparen</h2>
        <p>Banksparen is fiscaal gezien hetzelfde als een lijfrenterekening, maar dan via een bank in plaats van een verzekeraar. Je stort geld op een geblokkeerde spaar- of beleggingsrekening. De inleg is aftrekbaar binnen de jaarruimte, en je betaalt pas belasting bij uitkering.</p>
        <p>Het grote voordeel van banksparen is de transparantie: je ziet precies wat je hebt staan en wat de kosten zijn. Nadeel is dat je weinig flexibiliteit hebt: het geld staat geblokkeerd tot je pensioenleeftijd en tussentijds opnemen is alleen mogelijk in bijzondere situaties (en dan met forse belastinggevolgen).</p>

        <h2>Optie 3: Vrij beleggen</h2>
        <p>Je kunt ook buiten de fiscale pensioenpot om gewoon beleggen via een vrije beleggingsrekening. Je inleg is dan niet aftrekbaar, maar je houdt maximale flexibiliteit: je kunt op elk moment geld opnemen en je bent niet gebonden aan uitkeringsregels.</p>
        <p>In box 3 betaal je belasting over een fictief rendement op je vermogen boven de vrijstelling (circa 57.000 euro per persoon in 2026). Heb je een bescheiden vermogen, dan is beleggen in box 3 belastingvriendelijk. Zodra je vermogen groeit, wordt de belastingdruk zwaarder.</p>
        <h3>Combinatiestrategie</h3>
        <p>Veel ZZP'ers kiezen voor een combinatie: maximale inleg in een lijfrenterekening voor het belastingvoordeel, en daarboven vrij beleggen voor de flexibiliteit. Spreiding over meerdere instrumenten vermindert ook risico's.</p>

        <h2>Hoeveel moet je opzij zetten?</h2>
        <p>Een veelgebruikte vuistregel is 10 tot 15% van je bruto-inkomen per maand. Stel je verdient 60.000 euro bruto per jaar, dan is dat 6.000 tot 9.000 euro per jaar, of 500 tot 750 euro per maand. Hoe eerder je begint, hoe minder je procentueel opzij hoeft te leggen.</p>
        <p>Gebruik de rekentool van het Nibud of een financieel adviseur om te berekenen hoeveel je exact nodig hebt op basis van je gewenste pensioeninkomen, de verwachte AOW en de jaren die je nog hebt tot je pensioenleeftijd. Houd ook rekening met inflatie: geld is over 30 jaar aanzienlijk minder waard dan nu.</p>
        <p>Maak pensioensparen een vaste kostenpost in je begroting, net als je zakelijke verzekering of belastingpot. Automatische overschrijvingen helpen om de discipline op te houden, ook in maanden dat het wat minder gaat.</p>
      </div>

      <div style={{ background: 'var(--accent-light)', border: '1px solid var(--accent)', borderRadius: 16, padding: '28px 32px', textAlign: 'center', marginTop: 48 }}>
        <h3 style={{ fontSize: 20, fontWeight: 700, marginTop: 0, marginBottom: 8, color: 'var(--accent-text)' }}>Inzicht in je financien als ZZP'er</h3>
        <p style={{ color: 'var(--accent-text)', margin: '0 0 20px', opacity: 0.85 }}>Goed boekhoudprogramma helpt je winst bewaken zodat je maandelijks genoeg opzij kunt zetten voor later.</p>
        <a href="/boekhoudprogramma" className="btn-primary" style={{ fontSize: 15, padding: '12px 28px' }}>Vergelijk software →</a>
      </div>
    </div>
  )
}
