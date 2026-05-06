import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: "Zakelijke kosten aftrekken als ZZP'er | SlimBoekhoud",
  description: "Welke kosten mag je als ZZP'er aftrekken van de belasting? Leer over gemengd gebruik, bonnen bewaren en de regels van de Belastingdienst.",
}

export default function ZakelijkeKostenAftrekkenPage() {
  return (
    <div style={{ maxWidth: 780, margin: '0 auto', padding: '48px 24px' }}>
      <div style={{ fontSize: 13, color: 'var(--text-tertiary)', marginBottom: 24 }}>
        <a href="/" style={{ color: 'var(--text-tertiary)' }}>Home</a> / <a href="/gids" style={{ color: 'var(--text-tertiary)' }}>Gidsen</a> / Zakelijke kosten aftrekken
      </div>

      <div style={{ display: 'flex', gap: 8, marginBottom: 20, flexWrap: 'wrap' }}>
        <span className="badge badge-green">Belasting</span>
        <span style={{ fontSize: 13, color: 'var(--text-tertiary)' }}>Bijgewerkt mei 2026 · 7 min leestijd</span>
      </div>

      <h1 style={{ fontSize: 'clamp(26px, 4vw, 38px)', fontWeight: 700, marginBottom: 16, lineHeight: 1.2 }}>
        Zakelijke kosten aftrekken als ZZP'er: de complete gids
      </h1>
      <p style={{ fontSize: 17, color: 'var(--text-secondary)', marginBottom: 40, lineHeight: 1.7 }}>
        Als ZZP'er mag je zakelijke kosten aftrekken van je winst, waardoor je minder belasting betaalt. Maar welke kosten zijn echt aftrekbaar, wat doe je met gemengd gebruik en hoe bewaar je je bonnen correct? Deze gids geeft je een helder overzicht.
      </p>

      <div className="card" style={{ padding: '20px 24px', marginBottom: 40, background: 'var(--accent-light)', border: '1px solid var(--accent)' }}>
        <div style={{ fontWeight: 600, marginBottom: 10, color: 'var(--accent-text)' }}>In het kort</div>
        <ul style={{ margin: 0, paddingLeft: 20 }}>
          {[
            'Zakelijke kosten verlagen je winst en daarmee je inkomstenbelasting',
            'Bij gemengd gebruik (zakelijk en privé) mag je alleen het zakelijke deel aftrekken',
            'Bonnen en facturen moet je 7 jaar bewaren voor de Belastingdienst',
            'Kosten voor je auto, thuiswerkplek en telefoon kennen speciale regels',
          ].map(item => (
            <li key={item} style={{ marginBottom: 6, fontSize: 14, color: 'var(--accent-text)' }}>{item}</li>
          ))}
        </ul>
      </div>

      <div className="prose">
        <h2>Welke kosten zijn aftrekbaar als ZZP'er?</h2>
        <p>Een zakelijke kostenpost is aftrekbaar als deze kosten noodzakelijk zijn voor het uitoefenen van je onderneming en je er inkomsten mee genereert of verwacht te genereren. De Belastingdienst hanteert als basisregel: de kosten moeten gemaakt zijn ten behoeve van de onderneming.</p>
        <p>Veelvoorkomende volledig aftrekbare kosten zijn:</p>
        <ul>
          <li>Abonnementen op vakliteratuur en brancheorganisaties</li>
          <li>Accountants- en boekhoudsoftware kosten</li>
          <li>Zakelijke verzekeringen (beroepsaansprakelijkheid, AOV)</li>
          <li>Marketing en advertentiekosten</li>
          <li>Inkoopkosten van materialen en goederen</li>
          <li>Kosten voor onderaannemers en ingehuurde freelancers</li>
          <li>Reiskosten voor klantbezoeken (openbaar vervoer of 0,23 euro per km)</li>
          <li>Opleidingen en cursussen die je vakkennis verbeteren</li>
        </ul>

        <h2>Gemengd gebruik: zakelijk en privé</h2>
        <p>Veel kosten zijn zowel zakelijk als privé te gebruiken, zoals een smartphone, laptop of auto. De Belastingdienst noemt dit "gemengd gebruik". Je mag dan alleen het zakelijke deel aftrekken.</p>
        <h3>Telefoon en internet</h3>
        <p>Gebruik je je telefoon voor 70% zakelijk? Dan mag je 70% van de maandelijkse kosten aftrekken. Houd dit bij in een logboek of schat een reeel percentage op basis van je werkzaamheden. Hetzelfde geldt voor je internetabonnement thuis als je vanuit huis werkt.</p>
        <h3>Thuiswerkplek</h3>
        <p>Een thuiswerkplek is alleen aftrekbaar als de ruimte exclusief zakelijk gebruikt wordt en een eigen ingang heeft. In de praktijk is dit voor de meeste ZZP'ers niet van toepassing. Kosten voor een aparte kantoorruimte buiten je woning zijn wel volledig aftrekbaar.</p>
        <h3>Auto van de zaak</h3>
        <p>Rijd je meer dan 500 kilometer per jaar privé in een auto die op naam van de zaak staat, dan moet je bijtelling betalen. Voor een elektrische auto geldt in 2026 een bijtelling van 16% van de cataloguswaarde. Rij je minder dan 500 km privé, dan moet je een rittenregistratie bijhouden als bewijs.</p>

        <h2>Kosten die je NIET mag aftrekken</h2>
        <p>De Belastingdienst heeft een aantal kostenposten uitdrukkelijk uitgesloten van aftrek, of stelt beperkingen aan de aftrek:</p>
        <ul>
          <li>Representatiekosten (etentjes, recepties) zijn slechts 80% aftrekbaar</li>
          <li>Boetes en belastingaanslagen zijn nooit aftrekbaar</li>
          <li>Kleding is alleen aftrekbaar als het specifieke werkkleding betreft (met logo of beschermingsfunctie)</li>
          <li>Privé-uitgaven die toevallig ook zakelijk van pas komen</li>
          <li>Kosten die je vergoed krijgt van een opdrachtgever</li>
        </ul>

        <h2>Bonnen bewaren: de regels</h2>
        <p>Je bent wettelijk verplicht je administratie 7 jaar te bewaren. Dit geldt voor zowel papieren als digitale bonnen. Voor onroerende goederen geldt zelfs een bewaartermijn van 10 jaar.</p>
        <p>De Belastingdienst accepteert digitale kopieën van bonnen, mits de afbeelding leesbaar is en de oorspronkelijke informatie volledig bewaard blijft. Een foto met je smartphone of een scan is voldoende, als de datum, het bedrag, de leverancier en het btw-bedrag duidelijk zichtbaar zijn.</p>
        <p>Bewaar je bonnen geordend per jaar en per categorie. Goede boekhoudsoftware koppelt automatisch de bon aan de bijbehorende boeking, wat controles door de Belastingdienst een stuk eenvoudiger maakt.</p>

        <h2>Praktische tips voor maximale aftrek</h2>
        <p>Om optimaal gebruik te maken van je aftrekmogelijkheden als ZZP'er:</p>
        <ul>
          <li>Open een aparte zakelijke bankrekening zodat zakelijke en privétransacties niet door elkaar lopen</li>
          <li>Verwerk bonnen direct in je boekhoudsoftware zodat je niets vergeet</li>
          <li>Leg bij twijfel altijd vast waarom een aankoop zakelijk is</li>
          <li>Vraag altijd een factuur op naam van je onderneming als je inkoopt bij andere bedrijven</li>
          <li>Laat je boekhouding jaarlijks controleren door een accountant om aftrekposten te optimaliseren</li>
        </ul>
      </div>

      <div style={{ background: 'var(--accent-light)', border: '1px solid var(--accent)', borderRadius: 16, padding: '28px 32px', textAlign: 'center', marginTop: 48 }}>
        <h3 style={{ fontSize: 20, fontWeight: 700, marginTop: 0, marginBottom: 8, color: 'var(--accent-text)' }}>Kosten automatisch categoriseren</h3>
        <p style={{ color: 'var(--accent-text)', margin: '0 0 20px', opacity: 0.85 }}>Goede boekhoudsoftware herkent zakelijke kosten automatisch en houdt je aftrekposten bij zonder gedoe.</p>
        <a href="/boekhoudprogramma" className="btn-primary" style={{ fontSize: 15, padding: '12px 28px' }}>Vergelijk boekhoudprogramma's →</a>
      </div>
    </div>
  )
}
