import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: "Bewaarplicht ZZP: wat 7 jaar bewaren? (2026)",
  description: "De Belastingdienst verplicht ZZP'ers 7 jaar bewaarplicht. Welke documenten, hoe lang, digitaal vs papier en hoe je het praktisch organiseert.",
}

export default function AdministratieBewaarplichtPage() {
  return (
    <div style={{ maxWidth: 780, margin: '0 auto', padding: '48px 24px' }}>
      <div style={{ fontSize: 13, color: 'var(--text-tertiary)', marginBottom: 24 }}>
        <a href="/" style={{ color: 'var(--text-tertiary)' }}>Home</a> / <a href="/gids" style={{ color: 'var(--text-tertiary)' }}>Gidsen</a> / Bewaarplicht administratie
      </div>

      <div style={{ display: 'flex', gap: 8, marginBottom: 20, flexWrap: 'wrap' }}>
        <span className="badge badge-green">Administratie</span>
        <span style={{ fontSize: 13, color: 'var(--text-tertiary)' }}>Bijgewerkt mei 2026 · 5 min leestijd</span>
      </div>

      <h1 style={{ fontSize: 'clamp(26px, 4vw, 38px)', fontWeight: 700, marginBottom: 16, lineHeight: 1.2 }}>
        Bewaarplicht administratie voor ZZP&apos;ers: wat, hoe lang en hoe
      </h1>
      <p style={{ fontSize: 17, color: 'var(--text-secondary)', marginBottom: 40, lineHeight: 1.7 }}>
        Als ZZP&apos;er ben je wettelijk verplicht je administratie minimaal 7 jaar te bewaren. Wat valt er precies onder die bewaarplicht, welke documenten bewaar je langer en mag alles digitaal? In deze gids lees je alles.
      </p>

      <div className="card" style={{ padding: '20px 24px', marginBottom: 40, background: 'var(--accent-light)', border: '1px solid var(--accent)' }}>
        <div style={{ fontWeight: 600, marginBottom: 10, color: 'var(--accent-text)' }}>In het kort</div>
        <ul style={{ margin: 0, paddingLeft: 20 }}>
          {[
            'De wettelijke bewaarplicht voor de meeste zakelijke administratie is 7 jaar',
            'Onroerende zaak-gerelateerde documenten bewaar je 10 jaar',
            'Digitaal bewaren is toegestaan, mits bestanden authentiek en leesbaar blijven',
            'De Belastingdienst kan tot 5 jaar terug controleren',
          ].map(item => (
            <li key={item} style={{ marginBottom: 6, fontSize: 14, color: 'var(--accent-text)' }}>{item}</li>
          ))}
        </ul>
      </div>

      <div className="prose">
        <h2>Wat zegt de wet over de bewaarplicht?</h2>
        <p>
          De bewaarplicht is vastgelegd in artikel 52 van de Algemene wet inzake rijksbelastingen. Je bent verplicht je administratie zodanig bij te houden en te bewaren dat de Belastingdienst bij een controle de aangifte kan controleren. De standaard bewaartermijn is <strong>7 jaar</strong> na het einde van het boekjaar. Voor onroerende zaken geldt <strong>10 jaar</strong>.
        </p>

        <h2>Welke documenten moet je bewaren?</h2>
        <ul>
          <li>Alle verstuurde en ontvangen facturen</li>
          <li>Bank- en giroafschriften</li>
          <li>Contracten met opdrachtgevers</li>
          <li>Geaccepteerde offertes</li>
          <li>Urenregistraties</li>
          <li>BTW-aangiftes en correspondentie met de Belastingdienst</li>
          <li>Jaarrekeningen en belastingaangiftes</li>
          <li>Agenda&apos;s en planningsoverzichten (voor de urennorm)</li>
        </ul>

        <h2>Digitaal bewaren: wat zijn de regels?</h2>
        <p>
          Digitaal bewaren is uitdrukkelijk toegestaan. Een digitale bon of factuur moet voldoen aan:
        </p>
        <ul>
          <li>Authenticiteit: de inhoud mag niet zijn gewijzigd na ontvangst of verzending</li>
          <li>Leesbaarheid: bestanden moeten gedurende de volledige bewaartermijn leesbaar blijven</li>
          <li>Toegankelijkheid: documenten moeten binnen redelijke termijn opvraagbaar zijn</li>
        </ul>
        <p>
          Bonnetjes gefotografeerd via de app van <a href="/tools/moneybird" style={{ color: 'var(--accent)' }}>Moneybird</a> of <a href="/tools/snelstart" style={{ color: 'var(--accent)' }}>SnelStart</a> zijn geldig — de papieren bon mag daarna weg. Sla bestanden op in gangbare formaten zoals PDF.
        </p>

        <h2>Praktische mappenstructuur</h2>
        <ul>
          <li>Map per jaar (bijv. &apos;2026&apos;)</li>
          <li>Submap &apos;Verkoopfacturen&apos;</li>
          <li>Submap &apos;Inkoopfacturen en bonnetjes&apos;</li>
          <li>Submap &apos;Bank&apos; — maandelijkse afschriften of exports</li>
          <li>Submap &apos;Aangiftes&apos; — BTW-aangiftes en inkomstenbelasting</li>
          <li>Submap &apos;Contracten&apos;</li>
          <li>Submap &apos;Urenregistratie&apos;</li>
        </ul>
        <p>
          Sla alles op in cloudopslag met versiegeschiedenis. Maak ook periodiek een lokale back-up. <a href="/tools/exact-online" style={{ color: 'var(--accent)' }}>Exact Online</a> en <a href="/tools/twinfield" style={{ color: 'var(--accent)' }}>Twinfield</a> slaan facturen en boekingen automatisch op in de cloud inclusief versiegeschiedenis — ideaal voor bewaarplicht-compliance.
        </p>

        <h2>Wat als je stopt als ZZP&apos;er?</h2>
        <p>
          Als je je onderneming uitschrijft bij de KVK, eindigt je bewaarplicht niet. Je moet je administratie van de laatste 7 jaar privé blijven bewaren voor het geval de Belastingdienst een controle uitvoert.
        </p>

        <h2>Boekhoudprogramma en bewaarplicht</h2>
        <p>
          Moderne <a href="/boekhoudprogramma" style={{ color: 'var(--accent)' }}>boekhoudprogramma&apos;s voor ZZP&apos;ers</a> bewaren automatisch alle facturen en bonnetjes in de cloud. <a href="/tools/e-boekhouden" style={{ color: 'var(--accent)' }}>e-Boekhouden</a> en <a href="/tools/jortt" style={{ color: 'var(--accent)' }}>Jortt</a> koppelen bonnen direct aan de bijbehorende boeking — wat een belastingcontrole aanzienlijk vergemakkelijkt.
        </p>
      </div>

      <div style={{ background: 'var(--accent-light)', border: '1px solid var(--accent)', borderRadius: 16, padding: '28px 32px', textAlign: 'center', marginTop: 48 }}>
        <h3 style={{ fontSize: 20, fontWeight: 700, marginTop: 0, marginBottom: 8, color: 'var(--accent-text)' }}>Administratie automatisch georganiseerd</h3>
        <p style={{ color: 'var(--accent-text)', margin: '0 0 20px', opacity: 0.85 }}>Moderne boekhoudprogramma&apos;s slaan je facturen en bonnetjes automatisch op in de cloud. Vergelijk de beste opties.</p>
        <a href="/boekhoudprogramma" className="btn-primary" style={{ fontSize: 15, padding: '12px 28px' }}>Vergelijk boekhoudprogramma&apos;s →</a>
      </div>
    </div>
  )
}
