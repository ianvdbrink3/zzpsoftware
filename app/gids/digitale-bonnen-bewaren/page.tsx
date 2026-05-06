import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: "Digitale bonnen bewaren als ZZP'er | SlimBoekhoud",
  description: "Hoe bewaar je bonnen digitaal als ZZP'er? Wat accepteert de Belastingdienst, welke scanner apps zijn er en wat zijn de regels voor cloud- of lokale opslag?",
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
        Digitale bonnen bewaren: regels, apps en tips voor ZZP'ers
      </h1>
      <p style={{ fontSize: 17, color: 'var(--text-secondary)', marginBottom: 40, lineHeight: 1.7 }}>
        Je hoeft bonnen en facturen al lang niet meer in schoenendozen te bewaren. De Belastingdienst accepteert digitale kopieën, mits ze aan een aantal voorwaarden voldoen. Welke apps helpen je daarbij, en wat zijn de regels voor cloud- versus lokale opslag?
      </p>

      <div className="card" style={{ padding: '20px 24px', marginBottom: 40, background: 'var(--accent-light)', border: '1px solid var(--accent)' }}>
        <div style={{ fontWeight: 600, marginBottom: 10, color: 'var(--accent-text)' }}>In het kort</div>
        <ul style={{ margin: 0, paddingLeft: 20 }}>
          {[
            'De Belastingdienst accepteert digitale bonnen als ze volledig leesbaar en authentiek zijn',
            'Een smartphonefoto of scan is voldoende, zolang datum, bedrag en leverancier zichtbaar zijn',
            'Bewaarplicht is 7 jaar (10 jaar voor onroerend goed en BTW-gerelateerde documenten)',
            'Koppel bonnen direct aan boekingen in je boekhoudprogramma voor optimale controleerbaarheid',
          ].map(item => (
            <li key={item} style={{ marginBottom: 6, fontSize: 14, color: 'var(--accent-text)' }}>{item}</li>
          ))}
        </ul>
      </div>

      <div className="prose">
        <h2>Wat zijn de wettelijke eisen voor digitale bonnen?</h2>
        <p>De Belastingdienst accepteert digitale administratie al jaren, maar stelt wel voorwaarden. Een digitale bon of factuur moet voldoen aan de eisen van authenticiteit, integriteit en leesbaarheid. Dat betekent concreet:</p>
        <ul>
          <li>De afbeelding moet volledig leesbaar zijn, ook na jaren</li>
          <li>De informatie mag niet zijn aangepast na het digitaliseren</li>
          <li>Het moet duidelijk zijn dat het om een origineel document gaat</li>
          <li>Je moet de documenten kunnen reproduceren op verzoek van de Belastingdienst</li>
        </ul>
        <p>Een JPEG-foto met je smartphone voldoet in de meeste gevallen aan deze eisen. PDF-bestanden zijn ideaal omdat ze moeilijker te manipuleren zijn en altijd goed leesbaar blijven. Vermijd zeer kleine afbeeldingen of wazige foto's — als de Belastingdienst de tekst niet kan lezen, kan de aftrek worden geweigerd.</p>

        <h2>Scanner-apps voor ZZP'ers</h2>
        <p>Diverse apps helpen je bonnen snel en kwalitatief te digitaliseren. De meeste lezen ook automatisch de gegevens uit (OCR) en categoriseren bonnen voor je administratie.</p>
        <h3>Populaire opties</h3>
        <p>Dext (voorheen Receipt Bank) is een van de meest gebruikte apps voor ondernemers. Je fotografeert een bon, de app leest datum, bedrag en leverancier uit en stuurt de informatie door naar je boekhoudprogramma. Hubdoc werkt vergelijkbaar en integreert goed met Xero en QuickBooks. Voor gebruikers van Moneybird, Exact of Snelstart zijn de ingebouwde scanfuncties van die pakketten vaak voldoende.</p>
        <p>Microsoft Lens en Adobe Scan zijn gratis alternatieven die geen OCR doen maar wel uitstekende scankwaliteit leveren. Je verwerkt de documenten daarna handmatig in je boekhouding.</p>
        <h3>Thermische bonnen</h3>
        <p>Kassabonnen van winkels zijn vaak thermisch gedrukt en vervagen na verloop van tijd — soms al binnen een jaar. Digitaliseer thermische bonnen zo snel mogelijk na ontvangst. De papieren bon bewaren heeft weinig zin als de tekst na twee jaar onleesbaar is.</p>

        <h2>Cloud versus lokale opslag</h2>
        <p>Je kunt digitale bonnen bewaren in de cloud (Google Drive, Dropbox, OneDrive, iCloud) of lokaal op je eigen computer of externe harde schijf. Beide zijn toegestaan, maar er zijn praktische verschillen.</p>
        <h3>Cloudopslag</h3>
        <p>Cloudopslag heeft als voordeel dat je bestanden altijd toegankelijk zijn, automatisch worden gesynchroniseerd en beschermd zijn tegen diefstal of brand van je computer. Zorg dat je cloudprovider gegevens bewaart in de EU (AVG-compliant) en dat je meervoudige verificatie hebt ingeschakeld op je account.</p>
        <h3>Lokale opslag</h3>
        <p>Lokale opslag geeft je volledige controle, maar vraagt om een goede back-upstrategie. De 3-2-1-regel wordt aanbevolen: 3 kopieën van je data, op 2 verschillende media, waarvan 1 op een externe locatie. Een externe harde schijf die je thuis bewaart is geen volwaardige back-up als er brand uitbreekt.</p>
        <p>In de praktijk kiezen de meeste ZZP'ers voor een combinatie: bonnen opslaan in hun boekhoudprogramma (cloud) en daarnaast een lokale back-up van de exportbestanden.</p>

        <h2>Optimale werkwijze: direct koppelen aan je boekhouding</h2>
        <p>De meest efficiënte aanpak is bonnen direct te koppelen aan de bijbehorende boeking in je boekhoudprogramma. Zo weet je bij een controle direct welk document bij welke transactie hoort. De meeste moderne boekhoudpakketten ondersteunen dit: je uploadt de bon via een app, het systeem herkent de details en stelt een boeking voor die jij bevestigt of aanpast.</p>
        <p>Maak het bewaren van bonnen een dagelijkse gewoonte. Verwerk bonnen aan het einde van de werkdag of week, niet kwartaal per kwartaal. Zo raak je niets kwijt en kost het je uiteindelijk veel minder tijd dan een groot inhaalsessie later.</p>
      </div>

      <div style={{ background: 'var(--accent-light)', border: '1px solid var(--accent)', borderRadius: 16, padding: '28px 32px', textAlign: 'center', marginTop: 48 }}>
        <h3 style={{ fontSize: 20, fontWeight: 700, marginTop: 0, marginBottom: 8, color: 'var(--accent-text)' }}>Bonnen scannen met je boekhoudprogramma</h3>
        <p style={{ color: 'var(--accent-text)', margin: '0 0 20px', opacity: 0.85 }}>Vergelijk pakketten met ingebouwde bonnenscanner en automatische herkenning van bongegevens.</p>
        <a href="/boekhoudprogramma" className="btn-primary" style={{ fontSize: 15, padding: '12px 28px' }}>Vergelijk software →</a>
      </div>
    </div>
  )
}
