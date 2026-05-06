import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: "KOR 2026: BTW-vrijstelling voor ZZP'ers uitgelegd",
  description: "De KOR stelt ZZP'ers met omzet onder €20.000 vrij van BTW-plicht. Voordelen, nadelen, aanmelden en voor wie het écht loont.",
}

export default function KorKleineOndernemersregelingPage() {
  return (
    <div style={{ maxWidth: 780, margin: '0 auto', padding: '48px 24px' }}>
      <div style={{ fontSize: 13, color: 'var(--text-tertiary)', marginBottom: 24 }}>
        <a href="/" style={{ color: 'var(--text-tertiary)' }}>Home</a> / <a href="/gids" style={{ color: 'var(--text-tertiary)' }}>Gidsen</a> / KOR kleine ondernemersregeling
      </div>

      <div style={{ display: 'flex', gap: 8, marginBottom: 20, flexWrap: 'wrap' }}>
        <span className="badge badge-green">BTW</span>
        <span style={{ fontSize: 13, color: 'var(--text-tertiary)' }}>Bijgewerkt mei 2026 · 7 min leestijd</span>
      </div>

      <h1 style={{ fontSize: 'clamp(26px, 4vw, 38px)', fontWeight: 700, marginBottom: 16, lineHeight: 1.2 }}>
        KOR: de Kleine Ondernemersregeling uitgelegd voor ZZP&apos;ers
      </h1>
      <p style={{ fontSize: 17, color: 'var(--text-secondary)', marginBottom: 40, lineHeight: 1.7 }}>
        De Kleine Ondernemersregeling (KOR) stelt ZZP&apos;ers met een beperkte omzet vrij van BTW-verplichtingen. Dat klinkt aantrekkelijk — maar de KOR heeft ook nadelen. In deze gids lees je precies hoe de regeling werkt en voor wie het geschikt is.
      </p>

      <div className="card" style={{ padding: '20px 24px', marginBottom: 40, background: 'var(--accent-light)', border: '1px solid var(--accent)' }}>
        <div style={{ fontWeight: 600, marginBottom: 10, color: 'var(--accent-text)' }}>In het kort</div>
        <ul style={{ margin: 0, paddingLeft: 20 }}>
          {[
            'KOR geldt voor ondernemers met jaaromzet onder €20.000 (excl. BTW)',
            'Bij de KOR hoef je geen BTW te berekenen, in rekening te brengen of aan te geven',
            'Nadeel: je kunt de BTW op zakelijke kosten ook niet terugvragen',
            'Aanmelden via Mijn Belastingdienst Zakelijk, minimaal 4 weken voor aanvang kwartaal',
          ].map(item => (
            <li key={item} style={{ marginBottom: 6, fontSize: 14, color: 'var(--accent-text)' }}>{item}</li>
          ))}
        </ul>
      </div>

      <div className="prose">
        <h2>Wat is de KOR precies?</h2>
        <p>
          De Kleine Ondernemersregeling is een BTW-vrijstelling voor Nederlandse ondernemers met een beperkte omzet. Kies je voor de KOR, dan ben je vrijgesteld van het berekenen en afdragen van BTW én hoef je geen BTW-aangifte te doen. In ruil daarvoor mag je de BTW op je eigen inkopen <strong>niet terugvragen</strong>.
        </p>
        <p>
          De KOR is een keuzeregeling: je bent niet verplicht gebruik te maken van de regeling als je aan de omzetgrens voldoet.
        </p>

        <h2>Omzetgrens van €20.000</h2>
        <p>
          De KOR is beschikbaar als je jaaromzet onder de <strong>€20.000 exclusief BTW</strong> blijft. Overschrijd je de grens gedurende het jaar, dan vervalt je vrijstelling per direct. Let op: bij een gedeeld jaar geldt de grens naar rato.
        </p>

        <h2>Voor wie is de KOR geschikt?</h2>
        <p>
          De KOR is aantrekkelijk als:
        </p>
        <ul>
          <li>Je een lage omzet hebt en verwacht onder de €20.000 te blijven</li>
          <li>Je klanten particulieren zijn (die BTW niet kunnen terugvragen)</li>
          <li>Je weinig zakelijke kosten maakt waarop BTW zit</li>
          <li>Je de administratieve last van kwartaalaangiftes wilt vermijden</li>
        </ul>
        <p>
          De KOR is <strong>minder</strong> geschikt als:
        </p>
        <ul>
          <li>Je voornamelijk werkt voor zakelijke opdrachtgevers die BTW verrekenen</li>
          <li>Je hoge zakelijke kosten hebt met veel BTW (apparatuur, software)</li>
          <li>Je omzet de grens van €20.000 dreigt te overschrijden</li>
          <li>Je internationale activiteiten hebt</li>
        </ul>

        <h2>Voordelen van de KOR</h2>
        <ul>
          <li><strong>Geen BTW-administratie:</strong> geen kwartaalaangiftes, geen BTW op facturen. Scheelt aanzienlijk in tijd.</li>
          <li><strong>Lagere prijzen voor particulieren:</strong> je kunt scherper prijzen of een hogere marge pakken.</li>
          <li><strong>Eenvoudiger factureren:</strong> facturen zonder BTW-bedragen — wel met de tekst &apos;BTW vrijgesteld o.g.v. de KOR&apos;.</li>
        </ul>

        <h2>Nadelen van de KOR</h2>
        <ul>
          <li><strong>Geen BTW-aftrek:</strong> de BTW op software-abonnementen, laptop en andere kosten mag je niet terugvragen. Dat verhoogt effectief je kosten.</li>
          <li><strong>Concurrentieel nadeel bij zakelijke klanten:</strong> zij kunnen geen BTW op jouw facturen verrekenen.</li>
          <li><strong>Gebonden periode:</strong> je bent minimaal 3 jaar aan de KOR gebonden na aanmelding.</li>
        </ul>
        <p>
          Val je onder de KOR maar wil je toch een <a href="/boekhoudprogramma" style={{ color: 'var(--accent)' }}>boekhoudprogramma</a> gebruiken? <a href="/tools/moneybird" style={{ color: 'var(--accent)' }}>Moneybird</a> en <a href="/tools/jortt" style={{ color: 'var(--accent)' }}>Jortt</a> ondersteunen de KOR volledig en passen je factuursjablonen automatisch aan.
        </p>

        <h2>Hoe meld je je aan voor de KOR?</h2>
        <p>
          Aanmelden doe je via <strong>Mijn Belastingdienst Zakelijk</strong>, minimaal <strong>4 weken voor het begin van het kwartaal</strong> waarop je de KOR wilt laten ingaan. Wil je de KOR toepassen vanaf 1 januari, meld je dan uiterlijk 1 december van het voorgaande jaar aan.
        </p>

        <h2>KOR en de grens overschrijden: wat dan?</h2>
        <p>
          Merk je dat je de €20.000 gaat overschrijden, meld dit dan bij de Belastingdienst. Vanaf de datum van overschrijding gelden de normale BTW-regels. Houd je omzet gedurende het jaar bij in je boekhoudprogramma — <a href="/tools/snelstart" style={{ color: 'var(--accent)' }}>SnelStart</a> en <a href="/tools/e-boekhouden" style={{ color: 'var(--accent)' }}>e-Boekhouden</a> tonen je omzet real-time per kwartaal.
        </p>
      </div>

      <div style={{ background: 'var(--accent-light)', border: '1px solid var(--accent)', borderRadius: 16, padding: '28px 32px', textAlign: 'center', marginTop: 48 }}>
        <h3 style={{ fontSize: 20, fontWeight: 700, marginTop: 0, marginBottom: 8, color: 'var(--accent-text)' }}>Boekhoudprogramma dat de KOR ondersteunt</h3>
        <p style={{ color: 'var(--accent-text)', margin: '0 0 20px', opacity: 0.85 }}>Of je nu onder de KOR valt of gewone BTW-aangifte doet — vergelijk welk boekhoudpakket het beste bij jou past.</p>
        <a href="/boekhoudprogramma" className="btn-primary" style={{ fontSize: 15, padding: '12px 28px' }}>Vergelijk boekhoudprogramma&apos;s →</a>
      </div>
    </div>
  )
}
