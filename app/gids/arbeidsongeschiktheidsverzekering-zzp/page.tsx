import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: "Arbeidsongeschiktheidsverzekering voor ZZP'ers (AOV) 2026 | SlimBoekhoud",
  description: "Wat is een AOV voor ZZP'ers, wat kost het, wat is een broodfonds en wanneer sluit je het af? Alles over arbeidsongeschiktheid en inkomensbescherming.",
}

export default function ArbeidsongeschiktheidsverzekeringZzpPage() {
  return (
    <div style={{ maxWidth: 780, margin: '0 auto', padding: '48px 24px' }}>
      <div style={{ fontSize: 13, color: 'var(--text-tertiary)', marginBottom: 24 }}>
        <a href="/" style={{ color: 'var(--text-tertiary)' }}>Home</a> / <a href="/gids" style={{ color: 'var(--text-tertiary)' }}>Gidsen</a> / AOV voor ZZP'ers
      </div>

      <div style={{ display: 'flex', gap: 8, marginBottom: 20, flexWrap: 'wrap' }}>
        <span className="badge badge-green">Verzekering</span>
        <span style={{ fontSize: 13, color: 'var(--text-tertiary)' }}>Bijgewerkt mei 2026 · 8 min leestijd</span>
      </div>

      <h1 style={{ fontSize: 'clamp(26px, 4vw, 38px)', fontWeight: 700, marginBottom: 16, lineHeight: 1.2 }}>
        Arbeidsongeschiktheidsverzekering voor ZZP'ers: wat je moet weten
      </h1>
      <p style={{ fontSize: 17, color: 'var(--text-secondary)', marginBottom: 40, lineHeight: 1.7 }}>
        Als ZZP'er heb je geen recht op een WIA- of WW-uitkering als je ziek of arbeidsongeschikt wordt. Je inkomen stopt, maar je vaste lasten lopen gewoon door. Een arbeidsongeschiktheidsverzekering (AOV) beschermt je daartegen — maar er zijn ook alternatieven.
      </p>

      <div className="card" style={{ padding: '20px 24px', marginBottom: 40, background: 'var(--accent-light)', border: '1px solid var(--accent)' }}>
        <div style={{ fontWeight: 600, marginBottom: 10, color: 'var(--accent-text)' }}>In het kort</div>
        <ul style={{ margin: 0, paddingLeft: 20 }}>
          {[
            'ZZP\'ers hebben geen automatische bescherming bij ziekte of arbeidsongeschiktheid',
            'Een AOV kost gemiddeld 150 tot 400 euro per maand afhankelijk van leeftijd en beroep',
            'Een broodfonds is een goedkoper alternatief via onderlinge solidariteit',
            'De premie van een AOV is volledig aftrekbaar als zakelijke kostenpost',
          ].map(item => (
            <li key={item} style={{ marginBottom: 6, fontSize: 14, color: 'var(--accent-text)' }}>{item}</li>
          ))}
        </ul>
      </div>

      <div className="prose">
        <h2>Waarom een AOV voor ZZP'ers zo belangrijk is</h2>
        <p>In Nederland heeft iedere werknemer recht op loondoorbetaling bij ziekte (minimaal 2 jaar) en daarna eventueel een WIA-uitkering. Als ZZP'er heb je dit recht niet. Als je door ziekte of een ongeluk niet meer kunt werken, stopt je inkomen direct. Tegelijkertijd lopen je huur of hypotheek, zorgverzekering en andere vaste lasten gewoon door.</p>
        <p>Uit onderzoek blijkt dat ruim 1 op de 3 ZZP'ers op enig moment langdurig te maken krijgt met ziekte of arbeidsongeschiktheid. Zonder voorziening kun je in financiele problemen komen. De overheid verwacht dat ZZP'ers zich zelf verzekeren of een alternatief hebben geregeld.</p>

        <h2>Wat is een AOV en wat dekt het?</h2>
        <p>Een arbeidsongeschiktheidsverzekering (AOV) keert een maandelijks bedrag uit als je door ziekte of letsel niet meer (volledig) kunt werken. Je kiest zelf het verzekerde bedrag (tot maximaal je gemiddelde inkomen), de wachttijd voordat de uitkering ingaat en de maximale uitkeringsduur.</p>
        <h3>Wachttijd en uitkeringsduur</h3>
        <p>De wachttijd is de periode die je zelf moet overbruggen voordat de verzekering uitkeert. Een kortere wachttijd (14 of 30 dagen) maakt de premie duurder. De meeste ZZP'ers kiezen een wachttijd van 30 tot 90 dagen en zorgen zelf voor een buffer die die periode dekt. De uitkeringsduur loopt meestal tot je AOW-leeftijd, maar sommige polissen bieden ook kortere varianten (bijv. 2 of 5 jaar).</p>
        <h3>Wat kost een AOV?</h3>
        <p>De premie hangt af van je leeftijd, beroep, gewenste uitkeringshoogte, wachttijd en gezondheid. Een 35-jarige consultant die 3.000 euro per maand verzekert met een wachttijd van 30 dagen betaalt al snel 250 tot 350 euro per maand. Beroepen met een hoger fysiek risico (bijv. bouwvak, zorg) betalen meer. De premie is volledig aftrekbaar als zakelijke kosten.</p>

        <h2>Het broodfonds: een alternatief</h2>
        <p>Een broodfonds is een samenwerking tussen ZZP'ers die elkaar bij ziekte financieel ondersteunen. Je betaalt maandelijks een bedrag in een persoonlijk potje (gemiddeld 50 tot 150 euro). Bij ziekte ontvang je een uitkering uit de potten van de andere deelnemers, en dat wordt achteraf verrekend.</p>
        <p>Voordelen van een broodfonds: de kosten zijn aanzienlijk lager dan een traditionele AOV, er is geen medische keuring, en je bouwt een gemeenschap op met andere freelancers. Nadeel: de bescherming is beperkter. De maximale uitkering is doorgaans 2 jaar, en het potje van de groep moet groot genoeg zijn om langdurig zieken te ondersteunen.</p>
        <p>Een broodfonds is geschikt als tijdelijke oplossing of aanvulling, maar vervangt een volwaardige AOV niet bij langdurige of permanente arbeidsongeschiktheid.</p>

        <h2>Wanneer een AOV afsluiten?</h2>
        <p>Het beste moment om een AOV af te sluiten is zo snel mogelijk na het starten als ZZP'er. Hoe jonger en gezonder je bent, hoe lager de premie en hoe minder medische uitzonderingen er in de polis staan. Wacht je te lang, dan kunnen bestaande klachten worden uitgesloten van de dekking.</p>
        <p>Bij het aanvragen van een AOV doorloop je een gezondheidsverklaring. Afhankelijk van je situatie kan een verzekeraar een medisch onderzoek eisen of bepaalde aandoeningen uitsluiten. Transparantie bij de aanvraag is cruciaal — onjuiste informatie kan er later toe leiden dat een uitkering geweigerd wordt.</p>
        <h3>Stappenplan</h3>
        <p>Vergelijk eerst meerdere verzekeraars via een onafhankelijk adviseur of vergelijkingssite. Let niet alleen op de premie maar ook op de polisvoorwaarden: hoe wordt arbeidsongeschiktheid gedefinieerd? Is dat het niet kunnen uitoefenen van je eigen beroep, of het niet kunnen werken in welk beroep dan ook? De eerste definitie (beroepsgebonden) biedt betere bescherming maar is duurder.</p>

        <h2>Fiscale voordelen van een AOV</h2>
        <p>De premie die je betaalt voor een AOV is volledig aftrekbaar als zakelijke kosten. Hierdoor daalt je belastbare winst, wat betekent dat je netto-kosten lager zijn dan de bruto-premie. Bij een marginaal belastingtarief van 37% betaal je effectief circa 63% van de nominale premie.</p>
        <p>De uitkering die je ontvangt bij arbeidsongeschiktheid is wel belast als inkomen. Je betaalt dan inkomstenbelasting over de uitkering, maar geen zelfstandigenaftrek of andere ondernemersfaciliteiten meer, omdat je dan geen ondernemer meer bent voor de Belastingdienst.</p>
      </div>

      <div style={{ background: 'var(--accent-light)', border: '1px solid var(--accent)', borderRadius: 16, padding: '28px 32px', textAlign: 'center', marginTop: 48 }}>
        <h3 style={{ fontSize: 20, fontWeight: 700, marginTop: 0, marginBottom: 8, color: 'var(--accent-text)' }}>Verzekeringspremie bijhouden in je boekhouding</h3>
        <p style={{ color: 'var(--accent-text)', margin: '0 0 20px', opacity: 0.85 }}>Registreer je AOV-premie als zakelijke kostenpost in je boekhoudprogramma en profiteer van de belastingaftrek.</p>
        <a href="/boekhoudprogramma" className="btn-primary" style={{ fontSize: 15, padding: '12px 28px' }}>Vergelijk software →</a>
      </div>
    </div>
  )
}
