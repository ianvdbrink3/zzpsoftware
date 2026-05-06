import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: "Zakelijke kosten aftrekken ZZP: complete gids",
  description: "Welke kosten mag je als ZZP'er aftrekken? Auto, telefoon, thuiswerkplek en gemengd gebruik uitgelegd. Plus: bonnen 7 jaar bewaren.",
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
        Zakelijke kosten aftrekken als ZZP&apos;er: de complete gids
      </h1>
      <p style={{ fontSize: 17, color: 'var(--text-secondary)', marginBottom: 40, lineHeight: 1.7 }}>
        Als ZZP&apos;er mag je zakelijke kosten aftrekken van je winst, waardoor je minder belasting betaalt. Maar welke kosten zijn echt aftrekbaar, wat doe je met gemengd gebruik en hoe bewaar je bonnen correct?
      </p>

      <div className="card" style={{ padding: '20px 24px', marginBottom: 40, background: 'var(--accent-light)', border: '1px solid var(--accent)' }}>
        <div style={{ fontWeight: 600, marginBottom: 10, color: 'var(--accent-text)' }}>In het kort</div>
        <ul style={{ margin: 0, paddingLeft: 20 }}>
          {[
            'Zakelijke kosten verlagen je winst en daarmee je inkomstenbelasting',
            'Bij gemengd gebruik mag je alleen het zakelijke deel aftrekken',
            'Bonnen en facturen bewaar je 7 jaar voor de Belastingdienst',
            'Auto, thuiswerkplek en telefoon kennen speciale regels',
          ].map(item => (
            <li key={item} style={{ marginBottom: 6, fontSize: 14, color: 'var(--accent-text)' }}>{item}</li>
          ))}
        </ul>
      </div>

      <div className="prose">
        <h2>Welke kosten zijn aftrekbaar als ZZP&apos;er?</h2>
        <p>Een kostenpost is aftrekbaar als die noodzakelijk is voor het uitoefenen van je onderneming. Veelvoorkomende volledig aftrekbare kosten:</p>
        <ul>
          <li>Abonnementen op vakliteratuur en brancheorganisaties</li>
          <li>Boekhoud- en factuursoftware (zoals <a href="/tools/moneybird" style={{ color: 'var(--accent)' }}>Moneybird</a> of <a href="/tools/jortt" style={{ color: 'var(--accent)' }}>Jortt</a>)</li>
          <li>Zakelijke verzekeringen (beroepsaansprakelijkheid, AOV)</li>
          <li>Marketing en advertentiekosten</li>
          <li>Inkoopkosten van materialen en goederen</li>
          <li>Kosten voor onderaannemers en ingehuurde freelancers</li>
          <li>Reiskosten voor klantbezoeken (€0,23 per km of OV-kosten)</li>
          <li>Opleidingen en cursussen die je vakkennis verbeteren</li>
        </ul>

        <h2>Gemengd gebruik: zakelijk en privé</h2>
        <p>Veel kosten zijn zowel zakelijk als privé. Je mag alleen het zakelijke deel aftrekken.</p>

        <h3>Telefoon en internet</h3>
        <p>Gebruik je je telefoon voor 70% zakelijk? Dan trek je 70% van de maandelijkse kosten af. Houd dit bij in een logboek of schat op basis van je werkzaamheden.</p>

        <h3>Thuiswerkplek</h3>
        <p>Een thuiswerkplek is alleen aftrekbaar als de ruimte exclusief zakelijk gebruikt wordt en een eigen ingang heeft. In de praktijk is dit voor de meeste ZZP&apos;ers niet van toepassing. Een aparte kantoorruimte buiten je woning is wel volledig aftrekbaar.</p>

        <h3>Auto van de zaak</h3>
        <p>Rijd je meer dan 500 km per jaar privé in een auto op naam van de zaak, dan moet je bijtelling betalen. Voor een elektrische auto bedraagt de bijtelling in 2026 16% van de cataloguswaarde. Rij je minder dan 500 km privé, houd dan een rittenregistratie bij.</p>

        <h2>Kosten die je NIET mag aftrekken</h2>
        <ul>
          <li>Representatiekosten (etentjes, recepties) zijn slechts 80% aftrekbaar</li>
          <li>Boetes en belastingaanslagen zijn nooit aftrekbaar</li>
          <li>Kleding is alleen aftrekbaar als het specifieke werkkleding betreft</li>
          <li>Privé-uitgaven die toevallig ook zakelijk van pas komen</li>
          <li>Kosten die je vergoed krijgt van een opdrachtgever</li>
        </ul>

        <h2>Bonnen bewaren: de regels</h2>
        <p>
          Je bent verplicht je administratie 7 jaar te bewaren. De Belastingdienst accepteert digitale kopieën van bonnen, mits leesbaar en volledig. Een foto met je smartphone is voldoende als datum, bedrag, leverancier en BTW-bedrag zichtbaar zijn.
        </p>
        <p>
          <a href="/tools/snelstart" style={{ color: 'var(--accent)' }}>SnelStart</a>, <a href="/tools/e-boekhouden" style={{ color: 'var(--accent)' }}>e-Boekhouden</a> en <a href="/tools/exact-online" style={{ color: 'var(--accent)' }}>Exact Online</a> koppelen automatisch de bon aan de bijbehorende boeking, wat controles door de Belastingdienst aanzienlijk eenvoudiger maakt.
        </p>

        <h2>Praktische tips voor maximale aftrek</h2>
        <ul>
          <li>Open een aparte zakelijke bankrekening zodat zakelijke en privétransacties niet door elkaar lopen</li>
          <li>Verwerk bonnen direct in je boekhoudprogramma — nooit kwartaal per kwartaal inhalen</li>
          <li>Leg bij twijfel vast waarom een aankoop zakelijk is</li>
          <li>Vraag altijd een factuur op naam van je onderneming bij zakelijke inkopen</li>
        </ul>
      </div>

      <div style={{ background: 'var(--accent-light)', border: '1px solid var(--accent)', borderRadius: 16, padding: '28px 32px', textAlign: 'center', marginTop: 48 }}>
        <h3 style={{ fontSize: 20, fontWeight: 700, marginTop: 0, marginBottom: 8, color: 'var(--accent-text)' }}>Kosten automatisch categoriseren</h3>
        <p style={{ color: 'var(--accent-text)', margin: '0 0 20px', opacity: 0.85 }}>Goede boekhoudsoftware herkent zakelijke kosten automatisch en houdt je aftrekposten bij. Vergelijk de beste opties.</p>
        <a href="/boekhoudprogramma" className="btn-primary" style={{ fontSize: 15, padding: '12px 28px' }}>Vergelijk boekhoudprogramma&apos;s →</a>
      </div>
    </div>
  )
}
