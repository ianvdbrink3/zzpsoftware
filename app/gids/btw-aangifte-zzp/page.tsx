import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: "BTW-aangifte doen als ZZP'er 2026: stap voor stap",
  description: "Hoe doe je BTW-aangifte als ZZP'er? Deadlines, berekeningen, de KOR en welke software helpt. Complete uitleg voor 2026.",
}

export default function BtwAangifteGidsPage() {
  return (
    <div style={{ maxWidth: 780, margin: '0 auto', padding: '48px 24px' }}>
      <div style={{ fontSize: 13, color: 'var(--text-tertiary)', marginBottom: 24 }}>
        <a href="/" style={{ color: 'var(--text-tertiary)' }}>Home</a> / <a href="/gids" style={{ color: 'var(--text-tertiary)' }}>Gidsen</a> / BTW-aangifte ZZP
      </div>

      <div style={{ display: 'flex', gap: 8, marginBottom: 20, flexWrap: 'wrap' }}>
        <span className="badge badge-green">BTW</span>
        <span style={{ fontSize: 13, color: 'var(--text-tertiary)' }}>📅 Bijgewerkt mei 2026 · ⏱ 8 min leestijd</span>
      </div>

      <h1 style={{ fontSize: 'clamp(26px, 4vw, 38px)', fontWeight: 700, marginBottom: 16, lineHeight: 1.2 }}>
        BTW-aangifte doen als ZZP'er: stap voor stap (2026)
      </h1>
      <p style={{ fontSize: 17, color: 'var(--text-secondary)', marginBottom: 40, lineHeight: 1.7 }}>
        Elk kwartaal moet je als ZZP'er BTW-aangifte doen bij de Belastingdienst. In deze gids leg ik precies uit hoe dat werkt, wat de deadlines zijn en hoe je het makkelijker maakt met de juiste software.
      </p>

      <div className="card" style={{ padding: '20px 24px', marginBottom: 40, background: 'var(--accent-light)', border: '1px solid var(--accent)' }}>
        <div style={{ fontWeight: 600, marginBottom: 10, color: 'var(--accent-text)' }}>Deadlines BTW-aangifte 2026</div>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(140px, 1fr))', gap: 12 }}>
          {[['Q1 (jan-mrt)', '30 april'], ['Q2 (apr-jun)', '31 juli'], ['Q3 (jul-sep)', '31 oktober'], ['Q4 (okt-dec)', '31 januari']].map(([period, deadline]) => (
            <div key={period} style={{ background: 'rgba(255,255,255,0.6)', borderRadius: 8, padding: '10px 14px' }}>
              <div style={{ fontSize: 12, color: 'var(--accent-text)', opacity: 0.7 }}>{period}</div>
              <div style={{ fontWeight: 700, color: 'var(--accent-text)' }}>{deadline}</div>
            </div>
          ))}
        </div>
      </div>

      <div className="prose">
        <h2>Wie moet BTW-aangifte doen?</h2>
        <p>
          Als ZZP'er ben je in de meeste gevallen verplicht om BTW in rekening te brengen bij je klanten en periodiek aangifte te doen. Je bent BTW-plichtig zodra je ondernemer bent voor de Belastingdienst — dat is het geval als je regelmatig diensten of producten levert tegen vergoeding.
        </p>
        <p>
          Er zijn een paar uitzonderingen. Sommige beroepen zijn vrijgesteld van BTW, zoals medische beroepen, onderwijs en een deel van de culturele sector. Controleer op belastingdienst.nl of jouw diensten vrijgesteld zijn.
        </p>

        <h2>Welk BTW-tarief geldt er?</h2>
        <p>Er zijn drie BTW-tarieven in Nederland:</p>
        <ul>
          <li><strong>21%</strong> — het standaardtarief voor de meeste diensten en producten</li>
          <li><strong>9%</strong> — voor voedingsmiddelen, geneesmiddelen, boeken, theater en sommige arbeidsintensieve diensten</li>
          <li><strong>0%</strong> — voor export buiten de EU en een aantal specifieke sectoren</li>
        </ul>
        <p>
          Als ZZP'er in de creatieve, technische of zakelijke dienstverlening betaal je vrijwel altijd 21% BTW.
        </p>

        <h2>Hoe bereken je je BTW?</h2>
        <p>
          BTW-aangifte is eigenlijk vrij eenvoudig: je berekent hoeveel BTW je hebt ontvangen van je klanten (de <em>verschuldigde BTW</em>) en trekt daar de BTW op af die jij zelf hebt betaald op zakelijke kosten (de <em>voorbelasting</em>). Het verschil draag je af aan de Belastingdienst — of je krijgt het terug.
        </p>
        <p><strong>Voorbeeld:</strong></p>
        <div className="card" style={{ padding: '16px 20px', marginBottom: '1rem', fontFamily: 'monospace', fontSize: 14 }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: 6 }}>
            <span>Ontvangen BTW van klanten (21% over €10.000)</span>
            <span style={{ fontWeight: 600 }}>€ 2.100</span>
          </div>
          <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: 6 }}>
            <span>Betaalde BTW op kosten (software, telefoon etc.)</span>
            <span style={{ fontWeight: 600 }}>- € 210</span>
          </div>
          <div style={{ borderTop: '1px solid var(--border)', paddingTop: 8, display: 'flex', justifyContent: 'space-between' }}>
            <span style={{ fontWeight: 700 }}>Af te dragen aan Belastingdienst</span>
            <span style={{ fontWeight: 700, color: 'var(--accent)' }}>€ 1.890</span>
          </div>
        </div>

        <h2>Stap voor stap: BTW-aangifte doen</h2>

        <h3>Stap 1 — Verzamel alle facturen en bonnen</h3>
        <p>
          Ga door alle uitgaande facturen van het kwartaal en tel de BTW-bedragen op. Doe hetzelfde met je inkomende facturen (je zakelijke kosten). Als je een boekhoudprogramma gebruikt dat koppelt met je bank, is dit al automatisch bijgewerkt.
        </p>

        <h3>Stap 2 — Log in op Mijn Belastingdienst Zakelijk</h3>
        <p>
          Ga naar <em>mijn.belastingdienst.nl</em> en log in met eHerkenning (voor ondernemers) of DigiD. Kies voor "Omzetbelasting" en selecteer het juiste tijdvak.
        </p>

        <h3>Stap 3 — Vul de rubrieken in</h3>
        <p>Het aangifteformulier heeft de volgende hoofdrubrieken:</p>
        <ul>
          <li><strong>Rubriek 1a:</strong> Omzet belast met 21% en de verschuldigde BTW</li>
          <li><strong>Rubriek 1b:</strong> Omzet belast met 9% en de verschuldigde BTW</li>
          <li><strong>Rubriek 5b:</strong> Voorbelasting (BTW die je zelf hebt betaald)</li>
          <li><strong>Rubriek 5g:</strong> Het te betalen of te ontvangen bedrag</li>
        </ul>
        <p>
          De meeste boekhoudprogramma's vullen dit formulier voor je in. Je hoeft alleen te controleren en te bevestigen — een klik op "Versturen" en je aangifte is gedaan.
        </p>

        <h3>Stap 4 — Betaal op tijd</h3>
        <p>
          Betaal het verschuldigde BTW-bedrag vóór de deadline via iDEAL of overboeking naar de Belastingdienst. Te laat betalen kost je minimaal €68 verzuimboete.
        </p>

        <h2>De Kleine Ondernemersregeling (KOR): slim of niet?</h2>
        <p>
          Als je verwacht minder dan €20.000 omzet per jaar te maken, kun je kiezen voor de KOR. Voordelen:
        </p>
        <ul>
          <li>Geen BTW berekenen op je facturen</li>
          <li>Geen BTW-aangifte doen</li>
          <li>Minder administratieve lasten</li>
        </ul>
        <p>Nadelen:</p>
        <ul>
          <li>Je kunt zelf ook geen BTW terugvragen op kosten</li>
          <li>Zakelijke klanten kunnen jouw BTW niet terugvragen — dit maakt je duurder voor BTW-plichtige klanten</li>
          <li>Als je over de €20.000-grens gaat, wordt het ingewikkeld</li>
        </ul>
        <p>
          De KOR is het meest interessant als je bijna uitsluitend voor particulieren werkt en weinig zakelijke kosten hebt.
        </p>

        <h2>Automatiseer je BTW-aangifte met software</h2>
        <p>
          Verreweg de makkelijkste manier om BTW-aangifte te doen is via een boekhoudprogramma. Deze tools registreren automatisch de BTW op elke factuur, importeren je bankafschriften en berekenen het te betalen bedrag. Bij sommige programma's kun je de aangifte direct vanuit de app versturen naar de Belastingdienst.
        </p>
        <p>
          De drie beste opties voor ZZP'ers:
        </p>
      </div>

      <div style={{ display: 'flex', flexDirection: 'column', gap: 14, marginTop: 8, marginBottom: 40 }}>
        {[
          { name: 'Moneybird', slug: 'moneybird', desc: 'Directe koppeling met Belastingdienst, aangifte met één klik', price: 'Gratis / €14/mnd' },
          { name: 'Jortt', slug: 'jortt', desc: 'Berekent BTW automatisch, overzichtelijk dashboard', price: 'Vanaf €7/mnd' },
          { name: 'Snelstart', slug: 'snelstart', desc: 'Uitgebreide BTW-functies, ook voor complexere situaties', price: 'Vanaf €9/mnd' },
        ].map(tool => (
          <div key={tool.slug} className="card" style={{ padding: '16px 20px', display: 'flex', justifyContent: 'space-between', alignItems: 'center', gap: 12, flexWrap: 'wrap' }}>
            <div>
              <span style={{ fontWeight: 600 }}>{tool.name}</span>
              <span style={{ fontSize: 13, color: 'var(--text-secondary)', marginLeft: 10 }}>{tool.desc}</span>
            </div>
            <div style={{ display: 'flex', gap: 8, alignItems: 'center' }}>
              <span style={{ fontSize: 13, color: 'var(--text-tertiary)' }}>{tool.price}</span>
              <a href={`/tools/${tool.slug}`} className="btn-secondary" style={{ fontSize: 13, padding: '6px 14px' }}>Lees meer</a>
            </div>
          </div>
        ))}
      </div>

      <div className="prose">
        <h2>Veelgestelde vragen over BTW-aangifte</h2>

        <h3>Wat als ik mijn aangifte te laat doe?</h3>
        <p>
          Je ontvangt een verzuimboete van €68. Bij herhaling loopt dat op. Doe je jarenlang niet aan, dan kan de Belastingdienst een schatting maken en ambtshalve aanslag opleggen — dat is vrijwel altijd nadeliger dan zelf aangifte doen.
        </p>

        <h3>Kan ik een negatieve BTW-aangifte hebben?</h3>
        <p>
          Ja. Als je in een kwartaal veel zakelijke kosten hebt gemaakt maar weinig gefactureerd, kan de voorbelasting hoger zijn dan de ontvangen BTW. Je krijgt dan geld terug. Dit komt voor bij starters die flink investeren.
        </p>

        <h3>Moet ik BTW-aangifte doen als ik alleen voor het buitenland werk?</h3>
        <p>
          Als je factureert aan bedrijven buiten de EU, geldt 0% BTW (exporttarief). Je doet dan wel aangifte maar draagt niets af. Werk je voor bedrijven binnen de EU? Dan gelden de regels voor intracommunautaire leveringen — hier is een aparte Opgaaf ICP voor nodig.
        </p>

        <h3>Hoe lang moet ik mijn BTW-administratie bewaren?</h3>
        <p>
          Minimaal 7 jaar, digitaal of op papier. Voor onroerend goed geldt zelfs 10 jaar.
        </p>
      </div>

      <div style={{ background: 'var(--accent-light)', border: '1px solid var(--accent)', borderRadius: 16, padding: '28px 32px', textAlign: 'center', marginTop: 48 }}>
        <h3 style={{ fontSize: 20, fontWeight: 700, marginTop: 0, marginBottom: 8, color: 'var(--accent-text)' }}>Boekhoudprogramma met automatische BTW-aangifte</h3>
        <p style={{ color: 'var(--accent-text)', margin: '0 0 20px', opacity: 0.85 }}>Vergelijk de 6 beste boekhoudprogramma's voor ZZP'ers — allemaal met BTW-aangifte functie.</p>
        <a href="/boekhoudprogramma" className="btn-primary" style={{ fontSize: 15, padding: '12px 28px' }}>Bekijk vergelijking →</a>
      </div>
    </div>
  )
}
