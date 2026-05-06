import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: "AOV voor ZZP'ers: kosten, broodfonds & tips",
  description: "Als ZZP'er heb je geen WIA bij ziekte. Een AOV kost €150–€400/mnd. Wat dekt het, wat is een broodfonds en wanneer sluit je af?",
}

export default function ArbeidsongeschiktheidsverzekeringZzpPage() {
  return (
    <div style={{ maxWidth: 780, margin: '0 auto', padding: '48px 24px' }}>
      <div style={{ fontSize: 13, color: 'var(--text-tertiary)', marginBottom: 24 }}>
        <a href="/" style={{ color: 'var(--text-tertiary)' }}>Home</a> / <a href="/gids" style={{ color: 'var(--text-tertiary)' }}>Gidsen</a> / AOV voor ZZP&apos;ers
      </div>

      <div style={{ display: 'flex', gap: 8, marginBottom: 20, flexWrap: 'wrap' }}>
        <span className="badge badge-green">Verzekering</span>
        <span style={{ fontSize: 13, color: 'var(--text-tertiary)' }}>Bijgewerkt mei 2026 · 8 min leestijd</span>
      </div>

      <h1 style={{ fontSize: 'clamp(26px, 4vw, 38px)', fontWeight: 700, marginBottom: 16, lineHeight: 1.2 }}>
        Arbeidsongeschiktheidsverzekering voor ZZP&apos;ers: wat je moet weten
      </h1>
      <p style={{ fontSize: 17, color: 'var(--text-secondary)', marginBottom: 40, lineHeight: 1.7 }}>
        Als ZZP&apos;er heb je geen recht op een WIA- of WW-uitkering als je ziek of arbeidsongeschikt wordt. Je inkomen stopt, maar je vaste lasten lopen door. Een AOV beschermt je daartegen.
      </p>

      <div className="card" style={{ padding: '20px 24px', marginBottom: 40, background: 'var(--accent-light)', border: '1px solid var(--accent)' }}>
        <div style={{ fontWeight: 600, marginBottom: 10, color: 'var(--accent-text)' }}>In het kort</div>
        <ul style={{ margin: 0, paddingLeft: 20 }}>
          {[
            "ZZP'ers hebben geen automatische bescherming bij ziekte of arbeidsongeschiktheid",
            'Een AOV kost gemiddeld €150–€400/mnd afhankelijk van leeftijd en beroep',
            'Een broodfonds is een goedkoper alternatief via onderlinge solidariteit',
            'De premie van een AOV is volledig aftrekbaar als zakelijke kostenpost',
          ].map(item => (
            <li key={item} style={{ marginBottom: 6, fontSize: 14, color: 'var(--accent-text)' }}>{item}</li>
          ))}
        </ul>
      </div>

      <div className="prose">
        <h2>Waarom een AOV voor ZZP&apos;ers zo belangrijk is</h2>
        <p>In Nederland heeft iedere werknemer recht op loondoorbetaling bij ziekte en daarna eventueel een WIA-uitkering. Als ZZP&apos;er heb je dit recht niet. Stopt je inkomen, dan lopen je huur, zorgverzekering en andere vaste lasten gewoon door.</p>
        <p>Uit onderzoek blijkt dat ruim 1 op de 3 ZZP&apos;ers op enig moment langdurig te maken krijgt met ziekte of arbeidsongeschiktheid. Zonder voorziening kun je in financiële problemen komen.</p>

        <h2>Wat is een AOV en wat dekt het?</h2>
        <p>Een arbeidsongeschiktheidsverzekering (AOV) keert een maandelijks bedrag uit als je door ziekte of letsel niet meer (volledig) kunt werken. Je kiest zelf het verzekerde bedrag, de wachttijd en de maximale uitkeringsduur.</p>

        <h3>Wachttijd en uitkeringsduur</h3>
        <p>De wachttijd is de periode die je zelf overbrugt voordat de verzekering uitkeert. Een kortere wachttijd (14 of 30 dagen) maakt de premie duurder. Kies een wachttijd die past bij jouw financiële buffer. De uitkering loopt meestal tot je AOW-leeftijd.</p>

        <h3>Wat kost een AOV?</h3>
        <p>Een 35-jarige consultant die €3.000/mnd verzekert met 30 dagen wachttijd betaalt al snel €250–€350/mnd. Beroepen met hoger fysiek risico betalen meer. De premie is volledig aftrekbaar als zakelijke kosten.</p>

        <h2>Het broodfonds: een alternatief</h2>
        <p>Een broodfonds is een samenwerking tussen ZZP&apos;ers die elkaar bij ziekte financieel ondersteunen. Je betaalt maandelijks een bedrag in een persoonlijk potje (gemiddeld €50–€150). Bij ziekte ontvang je een uitkering uit de potten van de andere deelnemers.</p>
        <p>Voordelen: aanzienlijk lagere kosten dan een traditionele AOV, geen medische keuring. Nadelen: maximale uitkering is doorgaans 2 jaar, en de groepspot moet groot genoeg zijn. Een broodfonds is geen volwaardig alternatief bij langdurige of permanente arbeidsongeschiktheid.</p>

        <h2>Wanneer een AOV afsluiten?</h2>
        <p>Zo snel mogelijk na het starten als ZZP&apos;er. Hoe jonger en gezonder je bent, hoe lager de premie en hoe minder medische uitzonderingen er zijn. Wacht je te lang, dan kunnen bestaande klachten worden uitgesloten.</p>

        <h3>Stappenplan</h3>
        <p>Vergelijk meerdere verzekeraars via een onafhankelijk adviseur. Let niet alleen op de premie maar ook op de polisvoorwaarden: is arbeidsongeschiktheid gedefinieerd als het niet kunnen uitoefenen van je <em>eigen</em> beroep (betere bescherming, duurder) of van <em>welk</em> beroep dan ook?</p>

        <h2>Fiscale voordelen van een AOV</h2>
        <p>De AOV-premie is volledig aftrekbaar als zakelijke kosten. Bij een marginaal tarief van 37% betaal je effectief circa 63% van de nominale premie.</p>
        <p>
          Registreer je AOV-premie als zakelijke kostenpost in je boekhoudprogramma. <a href="/tools/moneybird" style={{ color: 'var(--accent)' }}>Moneybird</a> en <a href="/tools/jortt" style={{ color: 'var(--accent)' }}>Jortt</a> categoriseren dit als &apos;verzekeringspremies&apos; zodat het automatisch meeloopt in je winstberekening. Zo profiteer je altijd van de belastingaftrek. Bekijk alle <a href="/boekhoudprogramma" style={{ color: 'var(--accent)' }}>boekhoudprogramma&apos;s voor ZZP&apos;ers</a> op onze vergelijkingspagina.
        </p>
      </div>

      <div style={{ background: 'var(--accent-light)', border: '1px solid var(--accent)', borderRadius: 16, padding: '28px 32px', textAlign: 'center', marginTop: 48 }}>
        <h3 style={{ fontSize: 20, fontWeight: 700, marginTop: 0, marginBottom: 8, color: 'var(--accent-text)' }}>Verzekeringspremie bijhouden in je boekhouding</h3>
        <p style={{ color: 'var(--accent-text)', margin: '0 0 20px', opacity: 0.85 }}>Registreer je AOV-premie als zakelijke kostenpost en profiteer automatisch van de belastingaftrek.</p>
        <a href="/boekhoudprogramma" className="btn-primary" style={{ fontSize: 15, padding: '12px 28px' }}>Vergelijk boekhoudprogramma&apos;s →</a>
      </div>
    </div>
  )
}
