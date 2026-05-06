import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: "Boekhouder of software ZZP: vergelijking 2026",
  description: "Boekhouder inhuren (€80–€200/mnd) of zelf boekhouden met software (€15–€40/mnd)? Vergelijking van kosten, voor- en nadelen voor ZZP'ers.",
}

export default function BoekhouderOfSoftwarePage() {
  return (
    <div style={{ maxWidth: 780, margin: '0 auto', padding: '48px 24px' }}>
      <div style={{ fontSize: 13, color: 'var(--text-tertiary)', marginBottom: 24 }}>
        <a href="/" style={{ color: 'var(--text-tertiary)' }}>Home</a> / <a href="/gids" style={{ color: 'var(--text-tertiary)' }}>Gidsen</a> / Boekhouder of software
      </div>

      <div style={{ display: 'flex', gap: 8, marginBottom: 20, flexWrap: 'wrap' }}>
        <span className="badge badge-green">Advies</span>
        <span style={{ fontSize: 13, color: 'var(--text-tertiary)' }}>Bijgewerkt mei 2026 · 8 min leestijd</span>
      </div>

      <h1 style={{ fontSize: 'clamp(26px, 4vw, 38px)', fontWeight: 700, marginBottom: 16, lineHeight: 1.2 }}>
        Boekhouder inhuren of zelf boekhouden: wat past bij jou?
      </h1>
      <p style={{ fontSize: 17, color: 'var(--text-secondary)', marginBottom: 40, lineHeight: 1.7 }}>
        Een van de eerste praktische vragen als ZZP&apos;er: doe ik mijn boekhouding zelf, of besteed ik het uit? Het antwoord hangt af van je omzet, complexiteit, persoonlijke voorkeur en hoeveel tijd je wilt investeren.
      </p>

      <div className="card" style={{ padding: '20px 24px', marginBottom: 40, background: 'var(--accent-light)', border: '1px solid var(--accent)' }}>
        <div style={{ fontWeight: 600, marginBottom: 10, color: 'var(--accent-text)' }}>In het kort</div>
        <ul style={{ margin: 0, paddingLeft: 20 }}>
          {[
            'Software kost gemiddeld €15–€40/mnd, een boekhouder €80–€200/mnd',
            'Voor eenvoudige ZZP-situaties is goede software volledig voldoende',
            'Een boekhouder loont bij hogere omzet, complexe situaties of weinig eigen tijd',
            'Hybride aanpak — zelf boekhouden, boekhouder voor de aangifte — is populair',
          ].map(item => (
            <li key={item} style={{ marginBottom: 6, fontSize: 14, color: 'var(--accent-text)' }}>{item}</li>
          ))}
        </ul>
      </div>

      <div className="prose">
        <h2>Wat kost een boekhouder voor een ZZP&apos;er?</h2>
        <p>
          Een boekhouder voor eenmanszaken kost in 2026 doorgaans <strong>€80 tot €150 per maand</strong> voor volledig ontzorgen — inclusief BTW-aangiftes, jaarrekening en inkomstenbelastingaangifte. Complexere situaties of extra diensten kunnen oplopen tot €200/mnd.
        </p>
        <p>
          Alleen de jaarlijkse aangifte laten doen door een boekhouder? Dan betaal je eenmalig €300 tot €600 per jaar.
        </p>

        <h2>Wat kost zelf boekhouden met software?</h2>
        <p>
          De meeste boekhoudprogramma&apos;s voor ZZP&apos;ers kosten <strong>€15 tot €40 per maand</strong>. Populaire opties:
        </p>
        <ul>
          <li><a href="/tools/moneybird" style={{ color: 'var(--accent)' }}>Moneybird</a> — gratis instapversie, betaald v.a. €14/mnd</li>
          <li><a href="/tools/jortt" style={{ color: 'var(--accent)' }}>Jortt</a> — eenvoudig, v.a. €7/mnd</li>
          <li><a href="/tools/e-boekhouden" style={{ color: 'var(--accent)' }}>e-Boekhouden</a> — uitgebreid, v.a. €9/mnd</li>
          <li><a href="/tools/snelstart" style={{ color: 'var(--accent)' }}>SnelStart</a> — bankkoppeling en BTW-aangifte, v.a. €9/mnd</li>
        </ul>
        <p>
          Jaarlijks: €180 tot €480 — een stuk minder dan een boekhouder. Bekijk alle opties op <a href="/boekhoudprogramma" style={{ color: 'var(--accent)' }}>onze vergelijkingspagina</a>.
        </p>

        <h2>Wanneer is zelf boekhouden de juiste keuze?</h2>
        <p>
          Zelf boekhouden met software werkt goed als:
        </p>
        <ul>
          <li>Je een eenmanszaak hebt met overzichtelijke inkomsten en uitgaven</li>
          <li>Je een beperkt aantal facturen per maand verstuurt</li>
          <li>Je geen personeel in dienst hebt</li>
          <li>Je geen complexe BTW-situaties hebt met buitenlandse opdrachtgevers</li>
          <li>Je bereid bent een paar uur per maand aan administratie te besteden</li>
        </ul>
        <p>
          Moderne boekhoudprogramma&apos;s zijn zo gebruiksvriendelijk dat je geen boekhoudkundige achtergrond nodig hebt.
        </p>

        <h2>Wanneer is een boekhouder de betere keuze?</h2>
        <p>
          Een boekhouder inhuren loont als:
        </p>
        <ul>
          <li>Je omzet boven circa €80.000 per jaar uitkomt</li>
          <li>Je overweegt over te stappen naar een BV</li>
          <li>Je werkt met buitenlandse klanten en intracommunautaire leveringen</li>
          <li>Je personeel in dienst hebt of dat overweegt</li>
          <li>Je administratie consequent blijft liggen</li>
        </ul>
        <p>
          Voor complexe situaties werken professionals vaak met <a href="/tools/exact-online" style={{ color: 'var(--accent)' }}>Exact Online</a> of <a href="/tools/twinfield" style={{ color: 'var(--accent)' }}>Twinfield</a> — professionele platforms die een boekhouder direct kan koppelen aan jouw administratie.
        </p>

        <h2>De hybride aanpak: het beste van twee werelden</h2>
        <p>
          Populair en kosteneffectief: je doet de dagelijkse boekhouding zelf via software, maar laat de jaarlijkse inkomstenbelastingaangifte verzorgen door een boekhouder. Je hebt controle en overzicht, maar profiteert ook van professioneel advies op cruciale momenten.
        </p>
        <p>
          Alle genoemde boekhoudprogramma&apos;s kunnen hun data eenvoudig exporteren, zodat een boekhouder er snel mee aan de slag kan.
        </p>

        <h2>Vergelijking: boekhouder vs. software</h2>
        <ul>
          <li><strong>Kosten:</strong> Software €180–€480/jaar, boekhouder €960–€2.400/jaar</li>
          <li><strong>Tijdsinvestering:</strong> Software vereist eigen tijd, boekhouder neemt het uit handen</li>
          <li><strong>Fiscaal advies:</strong> Software geeft geen advies op maat, boekhouder wel</li>
          <li><strong>Inzicht:</strong> Software geeft direct inzicht, boekhouder rapporteert achteraf</li>
        </ul>
      </div>

      <div style={{ background: 'var(--accent-light)', border: '1px solid var(--accent)', borderRadius: 16, padding: '28px 32px', textAlign: 'center', marginTop: 48 }}>
        <h3 style={{ fontSize: 20, fontWeight: 700, marginTop: 0, marginBottom: 8, color: 'var(--accent-text)' }}>Vind het beste boekhoudprogramma voor jouw situatie</h3>
        <p style={{ color: 'var(--accent-text)', margin: '0 0 20px', opacity: 0.85 }}>Vergelijk prijzen, functies en gebruiksgemak van de populairste pakketten voor ZZP&apos;ers.</p>
        <a href="/boekhoudprogramma" className="btn-primary" style={{ fontSize: 15, padding: '12px 28px' }}>Vergelijk boekhoudprogramma&apos;s →</a>
      </div>
    </div>
  )
}
