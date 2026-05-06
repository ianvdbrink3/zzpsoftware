import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: "Urenregistratie ZZP: 1225-uur norm uitgelegd",
  description: "Zonder urenregistratie verlies je de zelfstandigenaftrek. Hoe werkt de 1225-uursnorm, wat telt mee en welke tools helpen je dit bijhouden?",
}

export default function UrenregistratieZzpPage() {
  return (
    <div style={{ maxWidth: 780, margin: '0 auto', padding: '48px 24px' }}>
      <div style={{ fontSize: 13, color: 'var(--text-tertiary)', marginBottom: 24 }}>
        <a href="/" style={{ color: 'var(--text-tertiary)' }}>Home</a> / <a href="/gids" style={{ color: 'var(--text-tertiary)' }}>Gidsen</a> / Urenregistratie ZZP
      </div>

      <div style={{ display: 'flex', gap: 8, marginBottom: 20, flexWrap: 'wrap' }}>
        <span className="badge badge-green">Administratie</span>
        <span style={{ fontSize: 13, color: 'var(--text-tertiary)' }}>Bijgewerkt mei 2026 · 7 min leestijd</span>
      </div>

      <h1 style={{ fontSize: 'clamp(26px, 4vw, 38px)', fontWeight: 700, marginBottom: 16, lineHeight: 1.2 }}>
        Urenregistratie voor ZZP&apos;ers: de 1.225-uursnorm uitgelegd
      </h1>
      <p style={{ fontSize: 17, color: 'var(--text-secondary)', marginBottom: 40, lineHeight: 1.7 }}>
        Als ZZP&apos;er ben je verplicht uren bij te houden. Zonder deugdelijke urenregistratie loop je belastingvoordelen mis — waaronder de waardevolle zelfstandigenaftrek. In deze gids lees je waarom de urennorm zo belangrijk is en welke tools het bijhouden makkelijk maken.
      </p>

      <div className="card" style={{ padding: '20px 24px', marginBottom: 40, background: 'var(--accent-light)', border: '1px solid var(--accent)' }}>
        <div style={{ fontWeight: 600, marginBottom: 10, color: 'var(--accent-text)' }}>In het kort</div>
        <ul style={{ margin: 0, paddingLeft: 20 }}>
          {[
            'De urennorm is 1.225 uur per jaar — haal je dit niet, dan vervalt de zelfstandigenaftrek',
            'Zowel declarabele als niet-declarabele zakelijke uren tellen mee',
            'De Belastingdienst kan tot 5 jaar terugkijken — sla registraties goed op',
            'Digitale tijdregistratietools zijn betrouwbaarder dan Excel of papier',
          ].map(item => (
            <li key={item} style={{ marginBottom: 6, fontSize: 14, color: 'var(--accent-text)' }}>{item}</li>
          ))}
        </ul>
      </div>

      <div className="prose">
        <h2>Waarom is urenregistratie verplicht?</h2>
        <p>
          De Belastingdienst stelt een deugdelijke urenregistratie verplicht om toegang te krijgen tot ondernemersaftrekken — met name de <strong>zelfstandigenaftrek</strong> en de <strong>startersaftrek</strong>. Zonder bewijs dat je minimaal 1.225 uur per jaar aan je onderneming hebt besteed, erkent de Belastingdienst je niet als &apos;ondernemer voor de inkomstenbelasting&apos;.
        </p>
        <p>
          Bij een boekenonderzoek moet je per dag kunnen aantonen hoeveel uur je aan welke activiteit hebt besteed. Een globale schatting achteraf is niet voldoende.
        </p>

        <h2>Wat telt mee voor de 1.225 uur?</h2>
        <p>
          Niet alleen declarabele uren bij opdrachtgevers tellen mee. De Belastingdienst hanteert een breed begrip:
        </p>
        <ul>
          <li>Declarabele uren bij opdrachtgevers</li>
          <li>Acquisitie en netwerken</li>
          <li>Offertes schrijven en onderhandelen</li>
          <li>Administratie en facturatie</li>
          <li>Bijscholing en cursussen direct gerelateerd aan je werk</li>
          <li>Reistijd naar opdrachtgevers</li>
          <li>Website-onderhoud en marketing</li>
        </ul>
        <p>
          Wat <strong>niet</strong> meetelt: privéreizen, algemene studie zonder directe link aan je onderneming en hobby-activiteiten.
        </p>

        <h2>Deeltijd ZZP&apos;er: de 50%-eis</h2>
        <p>
          Werk je naast je ZZP-activiteiten ook in loondienst? Dan gelden aanvullende regels: je moet meer dan 50% van je totale werktijd aan de onderneming besteden én de 1.225 uur halen.
        </p>

        <h2>Hoe hou je uren bij?</h2>

        <h3>Methode 1: Boekhoudprogramma met urenmodule</h3>
        <p>
          Veel boekhoudprogramma&apos;s hebben ingebouwde urenregistratie. <a href="/tools/moneybird" style={{ color: 'var(--accent)' }}>Moneybird</a> en <a href="/tools/twinfield" style={{ color: 'var(--accent)' }}>Twinfield</a> laten je vanuit je urenregistratie direct facturen aanmaken — dit bespaart dubbel werk. Bekijk de mogelijkheden van alle tools op <a href="/boekhoudprogramma" style={{ color: 'var(--accent)' }}>onze vergelijkingspagina</a>.
        </p>

        <h3>Methode 2: Gespecialiseerde tijdregistratiesoftware</h3>
        <p>
          Tools als Toggl Track of Clockify zijn gratis en bouwen automatisch een gedetailleerd logboek op. Je klikt een timer aan bij het starten van een taak — ideaal als bewijs bij een belastingcontrole.
        </p>

        <h3>Methode 3: Spreadsheet</h3>
        <p>
          Een Excel- of Google Sheets-bestand is acceptabel, mits je het consequent bijhoudt per dag. Zorg voor kolommen: datum, project, omschrijving en aantal uren. Nadeel: achteraf invullen leidt snel tot onnauwkeurigheden.
        </p>

        <h2>Hoeveel uur per week is 1.225 uur?</h2>
        <p>
          Over 47 werkweken (met vakantie en feestdagen) moet je gemiddeld <strong>26 uur per week</strong> aan je onderneming besteden. Voor full-time ZZP&apos;ers is dit doorgaans geen probleem. Voor deeltijders vraagt het om strakke registratie.
        </p>

        <h2>Hoelang bewaar je de urenregistratie?</h2>
        <p>
          Je bent verplicht je urenregistratie minimaal <strong>7 jaar</strong> te bewaren. Exporteer je registratie regelmatig naar PDF of bewaar de data in een cloudoplossing als <a href="/tools/exact-online" style={{ color: 'var(--accent)' }}>Exact Online</a> of <a href="/tools/snelstart" style={{ color: 'var(--accent)' }}>SnelStart</a> met versiegeschiedenis.
        </p>
      </div>

      <div style={{ background: 'var(--accent-light)', border: '1px solid var(--accent)', borderRadius: 16, padding: '28px 32px', textAlign: 'center', marginTop: 48 }}>
        <h3 style={{ fontSize: 20, fontWeight: 700, marginTop: 0, marginBottom: 8, color: 'var(--accent-text)' }}>Uren bijhouden via je boekhoudprogramma</h3>
        <p style={{ color: 'var(--accent-text)', margin: '0 0 20px', opacity: 0.85 }}>Veel boekhoudpakketten hebben urenregistratie ingebouwd. Vergelijk de opties en kies het pakket dat bij jou past.</p>
        <a href="/boekhoudprogramma" className="btn-primary" style={{ fontSize: 15, padding: '12px 28px' }}>Vergelijk boekhoudprogramma&apos;s →</a>
      </div>
    </div>
  )
}
