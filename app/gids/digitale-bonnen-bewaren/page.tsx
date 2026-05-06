import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: "Digitale bonnen bewaren ZZP: regels en apps",
  description: "De Belastingdienst accepteert digitale bonnen. Smartphonefoto volstaat mits leesbaar. Welke apps helpen en hoe organiseer je het slim?",
}

export default function DigitaleBonnenBewarenPage() {
  return (
    <div style={{ maxWidth: 780, margin: '0 auto', padding: '48px 24px' }}>
      <div style={{ fontSize: 13, color: 'var(--text-tertiary)', marginBottom: 24 }}>
        <a href="/" style={{ color: 'var(--text-tertiary)' }}>Home</a> / <a href="/gids" style={{ color: 'var(--text-tertiary)' }}>Gidsen</a> / Digitale bonnen bewaren
      </div>

      <div style={{ display: 'flex', gap: 8, marginBottom: 20, flexWrap: 'wrap' }}>
        <span className="badge badge-green">Administratie</span>
        <span style={{ fontSize: 13, color: 'var(--text-tertiary)' }}>Bijgewerkt mei 2026 · 5 min leestijd</span>
      </div>

      <h1 style={{ fontSize: 'clamp(26px, 4vw, 38px)', fontWeight: 700, marginBottom: 16, lineHeight: 1.2 }}>
        Digitale bonnen bewaren: regels, apps en tips voor ZZP&apos;ers
      </h1>
      <p style={{ fontSize: 17, color: 'var(--text-secondary)', marginBottom: 40, lineHeight: 1.7 }}>
        Je hoeft bonnen en facturen al lang niet meer in schoenendozen te bewaren. De Belastingdienst accepteert digitale kopieën, mits ze aan een aantal voorwaarden voldoen. Welke apps helpen je daarbij?
      </p>

      <div className="card" style={{ padding: '20px 24px', marginBottom: 40, background: 'var(--accent-light)', border: '1px solid var(--accent)' }}>
        <div style={{ fontWeight: 600, marginBottom: 10, color: 'var(--accent-text)' }}>In het kort</div>
        <ul style={{ margin: 0, paddingLeft: 20 }}>
          {[
            'De Belastingdienst accepteert digitale bonnen als ze volledig leesbaar en authentiek zijn',
            'Een smartphonefoto volstaat, zolang datum, bedrag en leverancier zichtbaar zijn',
            'Bewaarplicht is 7 jaar (10 jaar voor onroerend goed)',
            'Koppel bonnen direct aan boekingen in je boekhoudprogramma',
          ].map(item => (
            <li key={item} style={{ marginBottom: 6, fontSize: 14, color: 'var(--accent-text)' }}>{item}</li>
          ))}
        </ul>
      </div>

      <div className="prose">
        <h2>Wettelijke eisen voor digitale bonnen</h2>
        <p>Een digitale bon of factuur moet voldoen aan authenticiteit, integriteit en leesbaarheid:</p>
        <ul>
          <li>De afbeelding moet volledig leesbaar zijn, ook na jaren</li>
          <li>De informatie mag niet zijn aangepast na digitaliseren</li>
          <li>Documenten moeten binnen redelijke termijn opvraagbaar zijn</li>
        </ul>
        <p>Een JPEG-foto met je smartphone voldoet in de meeste gevallen aan deze eisen. PDF-bestanden zijn ideaal omdat ze moeilijker te manipuleren zijn.</p>

        <h2>Scanner-apps voor ZZP&apos;ers</h2>

        <h3>Ingebouwde scan in boekhoudprogramma</h3>
        <p>
          De meeste <a href="/boekhoudprogramma" style={{ color: 'var(--accent)' }}>boekhoudprogramma&apos;s</a> hebben een ingebouwde bonnenscanner. <a href="/tools/moneybird" style={{ color: 'var(--accent)' }}>Moneybird</a> en <a href="/tools/snelstart" style={{ color: 'var(--accent)' }}>SnelStart</a> lezen via OCR automatisch datum, bedrag en leverancier uit en koppelen dit direct aan je boekhouding. Dit is de meest efficiënte aanpak: bon fotograferen, boeking bevestigen, klaar.
        </p>
        <p>
          <a href="/tools/exact-online" style={{ color: 'var(--accent)' }}>Exact Online</a> en <a href="/tools/twinfield" style={{ color: 'var(--accent)' }}>Twinfield</a> integreren ook met externe apps als Dext (voorheen Receipt Bank) voor grote volumes aan bonnen.
        </p>

        <h3>Thermische bonnen</h3>
        <p>Kassabonnen van winkels zijn vaak thermisch gedrukt en vervagen soms al binnen een jaar. Digitaliseer ze zo snel mogelijk — de papieren bon bewaren heeft weinig zin als de tekst onleesbaar wordt.</p>

        <h2>Cloud versus lokale opslag</h2>

        <h3>Cloudopslag</h3>
        <p>Cloudopslag (Google Drive, Dropbox, OneDrive) heeft als voordeel dat je bestanden altijd toegankelijk zijn en beschermd zijn tegen diefstal of brand. Zorg dat je cloudprovider AVG-compliant is en meervoudige verificatie hebt ingeschakeld.</p>

        <h3>Lokale opslag</h3>
        <p>Lokale opslag vraagt om een goede back-upstrategie: de 3-2-1-regel wordt aanbevolen (3 kopieën, op 2 media, waarvan 1 op externe locatie). In de praktijk kiezen de meeste ZZP&apos;ers voor een combinatie: bonnen in hun boekhoudprogramma en een lokale back-up van exportbestanden.</p>

        <h2>Optimale werkwijze: direct koppelen aan boekhouding</h2>
        <p>
          Koppel bonnen direct aan de bijbehorende boeking in <a href="/tools/jortt" style={{ color: 'var(--accent)' }}>Jortt</a>, <a href="/tools/e-boekhouden" style={{ color: 'var(--accent)' }}>e-Boekhouden</a> of een ander boekhoudprogramma. Zo weet je bij een controle direct welk document bij welke transactie hoort.
        </p>
        <p>Maak het bewaren van bonnen een dagelijkse gewoonte. Verwerk bonnen aan het einde van de werkdag of week, niet kwartaal per kwartaal. Zo raak je niets kwijt en kost het je uiteindelijk veel minder tijd.</p>
      </div>

      <div style={{ background: 'var(--accent-light)', border: '1px solid var(--accent)', borderRadius: 16, padding: '28px 32px', textAlign: 'center', marginTop: 48 }}>
        <h3 style={{ fontSize: 20, fontWeight: 700, marginTop: 0, marginBottom: 8, color: 'var(--accent-text)' }}>Bonnen scannen met je boekhoudprogramma</h3>
        <p style={{ color: 'var(--accent-text)', margin: '0 0 20px', opacity: 0.85 }}>Vergelijk pakketten met ingebouwde bonnenscanner en automatische herkenning van bongegevens.</p>
        <a href="/boekhoudprogramma" className="btn-primary" style={{ fontSize: 15, padding: '12px 28px' }}>Vergelijk boekhoudprogramma&apos;s →</a>
      </div>
    </div>
  )
}
