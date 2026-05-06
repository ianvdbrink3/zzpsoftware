import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: "Bewaarplicht Administratie ZZP'er — 7 Jaar, Wat Bewaren en Hoe (2026)",
  description: "Wat is de bewaarplicht voor ZZP'ers? Welke documenten 7 jaar bewaren, wat 10 jaar, digitaal vs papier en hoe je het praktisch organiseert.",
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
        Als ZZP&apos;er ben je wettelijk verplicht je administratie minimaal 7 jaar te bewaren. Maar wat valt er precies onder die bewaarplicht, welke documenten bewaar je langer en mag alles digitaal? In deze gids lees je alles over de bewaarplicht in de praktijk.
      </p>

      <div className="card" style={{ padding: '20px 24px', marginBottom: 40, background: 'var(--accent-light)', border: '1px solid var(--accent)' }}>
        <div style={{ fontWeight: 600, marginBottom: 10, color: 'var(--accent-text)' }}>In het kort</div>
        <ul style={{ margin: 0, paddingLeft: 20 }}>
          {[
            'De wettelijke bewaarplicht voor de meeste zakelijke administratie is 7 jaar',
            'Onroerende zaak-gerelateerde documenten bewaar je 10 jaar',
            'Digitaal bewaren is toegestaan, mits de bestanden authentiek en leesbaar blijven',
            'De Belastingdienst kan tot 5 jaar terug controleren, bij buitenlands vermogen 12 jaar',
          ].map(item => (
            <li key={item} style={{ marginBottom: 6, fontSize: 14, color: 'var(--accent-text)' }}>{item}</li>
          ))}
        </ul>
      </div>

      <div className="prose">
        <h2>Wat zegt de wet over de bewaarplicht?</h2>
        <p>
          De bewaarplicht voor ondernemers is vastgelegd in artikel 52 van de Algemene wet inzake rijksbelastingen (AWR). Je bent verplicht om je administratie zodanig bij te houden en te bewaren dat de Belastingdienst bij een controle de aangifte kan controleren. De standaard bewaartermijn is <strong>7 jaar</strong> na het einde van het boekjaar.
        </p>
        <p>
          Voor gegevens die betrekking hebben op onroerende zaken — zoals aankoop, verbouwingen en verkoop van een bedrijfspand — geldt een bewaartermijn van <strong>10 jaar</strong>.
        </p>

        <h2>Welke documenten moet je bewaren?</h2>
        <p>
          De bewaarplicht geldt voor alle gegevens die van belang zijn voor de belastingheffing. Voor een ZZP&apos;er zijn dit onder meer:
        </p>
        <ul>
          <li>Alle verstuurde facturen (verkoopfacturen)</li>
          <li>Alle ontvangen facturen (inkoopfacturen en bonnetjes)</li>
          <li>Bank- en giroafschriften</li>
          <li>Contracten met opdrachtgevers</li>
          <li>Offertes die zijn geaccepteerd</li>
          <li>Urenregistraties</li>
          <li>Loonstroken (als je personeel hebt)</li>
          <li>BTW-aangiftes en correspondentie met de Belastingdienst</li>
          <li>Jaarrekeningen en belastingaangiftes</li>
          <li>Agenda&apos;s en planningsoverzichten (voor de urennorm)</li>
          <li>Kasboek (als je contante betalingen ontvangt of doet)</li>
        </ul>

        <h2>Wat hoef je niet te bewaren?</h2>
        <p>
          Niet alle documenten vallen onder de bewaarplicht. Conceptversies van offertes die nooit zijn verstuurd, interne notities zonder fiscale relevantie en persoonlijke correspondentie die niets met de onderneming te maken heeft, hoef je niet te bewaren. Twijfel je? Bewaar het dan toch — opslag is goedkoop en het geeft rust bij een eventuele controle.
        </p>

        <h2>Digitaal bewaren: wat zijn de regels?</h2>
        <p>
          Digitaal bewaren is uitdrukkelijk toegestaan door de Belastingdienst. Je hoeft geen papieren kopie te bewaren als je een digitale versie hebt — mits die digitale versie voldoet aan de eisen:
        </p>
        <ul>
          <li>De bestanden moeten <strong>authentiek</strong> zijn: de inhoud mag niet zijn gewijzigd na ontvangst of verzending</li>
          <li>De bestanden moeten <strong>leesbaar</strong> blijven gedurende de volledige bewaartermijn</li>
          <li>De gegevens moeten binnen een redelijke termijn toegankelijk en raadpleegbaar zijn</li>
          <li>Sla bestanden op in gangbare formaten (PDF, XLSX, etc.) en zorg voor voldoende back-ups</li>
        </ul>
        <p>
          Bonnetjes die je fotografeert met je telefoon via de app van je boekhoudprogramma zijn een geldige digitale kopie, mits de originele gegevens er volledig en ongewijzigd op staan. De papieren bon mag je daarna weggooien.
        </p>

        <h2>Praktische opzet van je digitale administratie</h2>
        <p>
          Een overzichtelijke mappenstructuur maakt het bewaren en terugvinden van documenten een stuk eenvoudiger. Een bewezen structuur voor ZZP&apos;ers:
        </p>
        <ul>
          <li>Map per jaar (bijv. &apos;2026&apos;)</li>
          <li>Submap &apos;Verkoopfacturen&apos; — al je uitgaande facturen</li>
          <li>Submap &apos;Inkoopfacturen en bonnetjes&apos; — alle ontvangen facturen en uitgaven</li>
          <li>Submap &apos;Bank&apos; — maandelijkse bankafschriften of exports</li>
          <li>Submap &apos;Aangiftes&apos; — BTW-aangiftes en de inkomstenbelastingaangifte</li>
          <li>Submap &apos;Contracten&apos; — overeenkomsten met opdrachtgevers</li>
          <li>Submap &apos;Urenregistratie&apos; — exports van je tijdregistratie</li>
        </ul>
        <p>
          Sla deze mappen op in een cloudopslag met versiegeschiedenis, zoals Google Drive, OneDrive of Dropbox. Maak daarnaast periodiek een lokale back-up op een externe schijf.
        </p>

        <h2>Wat als je stopt als ZZP&apos;er?</h2>
        <p>
          Als je je onderneming uitschrijft bij de KVK, eindigt je bewaarplicht niet. Je moet je administratie van de laatste 7 jaar blijven bewaren, ook na beeindiging van de onderneming. Bewaar de documenten privé en zorg dat ze toegankelijk blijven voor het geval de Belastingdienst nog een controle uitvoert.
        </p>
      </div>

      <div style={{ background: 'var(--accent-light)', border: '1px solid var(--accent)', borderRadius: 16, padding: '28px 32px', textAlign: 'center', marginTop: 48 }}>
        <h3 style={{ fontSize: 20, fontWeight: 700, marginTop: 0, marginBottom: 8, color: 'var(--accent-text)' }}>Administratie automatisch georganiseerd</h3>
        <p style={{ color: 'var(--accent-text)', margin: '0 0 20px', opacity: 0.85 }}>Moderne boekhoudprogramma&apos;s slaan je facturen en bonnetjes automatisch op in de cloud. Vergelijk de beste opties voor ZZP&apos;ers.</p>
        <a href="/boekhoudprogramma" className="btn-primary" style={{ fontSize: 15, padding: '12px 28px' }}>Vergelijk boekhoudprogramma&apos;s →</a>
      </div>
    </div>
  )
}
