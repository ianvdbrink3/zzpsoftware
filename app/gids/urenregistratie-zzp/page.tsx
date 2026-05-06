import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: "Urenregistratie voor ZZP'ers — Urennorm 1225 Uur en Tools (2026)",
  description: "Waarom urenregistratie als ZZP'er verplicht is, hoe de urennorm van 1225 uur werkt en welke tools je kunt gebruiken om uren bij te houden.",
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
        Urenregistratie voor ZZP&apos;ers: waarom het moet en hoe je het goed doet
      </h1>
      <p style={{ fontSize: 17, color: 'var(--text-secondary)', marginBottom: 40, lineHeight: 1.7 }}>
        Als ZZP&apos;er ben je verplicht om je uren bij te houden. Zonder een deugdelijke urenregistratie loop je belastingvoordelen mis — waaronder de waardevolle zelfstandigenaftrek. In deze gids lees je waarom de urennorm van 1.225 uur zo belangrijk is, wat er precies telt en welke tools het bijhouden makkelijk maken.
      </p>

      <div className="card" style={{ padding: '20px 24px', marginBottom: 40, background: 'var(--accent-light)', border: '1px solid var(--accent)' }}>
        <div style={{ fontWeight: 600, marginBottom: 10, color: 'var(--accent-text)' }}>In het kort</div>
        <ul style={{ margin: 0, paddingLeft: 20 }}>
          {[
            'De urennorm is 1.225 uur per jaar — haal je dit niet, dan vervalt de zelfstandigenaftrek',
            'Zowel declarabele uren als niet-declarabele zakelijke uren tellen mee',
            'De Belastingdienst kan tot 5 jaar terugkijken — sla registraties goed op',
            'Digitale tijdregistratietools zijn betrouwbaarder en makkelijker dan Excel of papier',
          ].map(item => (
            <li key={item} style={{ marginBottom: 6, fontSize: 14, color: 'var(--accent-text)' }}>{item}</li>
          ))}
        </ul>
      </div>

      <div className="prose">
        <h2>Waarom is urenregistratie verplicht voor ZZP&apos;ers?</h2>
        <p>
          De Belastingdienst stelt de eis van een deugdelijke urenregistratie om toegang te krijgen tot ondernemersaftrekken, met name de <strong>zelfstandigenaftrek</strong> en de <strong>startersaftrek</strong>. Zonder bewijs dat je minimaal 1.225 uur per jaar aan je onderneming hebt besteed, erkent de Belastingdienst je niet als &apos;ondernemer voor de inkomstenbelasting&apos;.
        </p>
        <p>
          Dit klinkt misschien als een formaliteit, maar de Belastingdienst controleert dit actief. Bij een boekenonderzoek moet je per dag kunnen aantonen hoeveel uur je aan welke activiteit hebt besteed. Een globale schatting achteraf is niet voldoende.
        </p>

        <h2>De urennorm van 1.225 uur — wat telt mee?</h2>
        <p>
          Niet alleen de uren die je direct bij een opdrachtgever declareert tellen mee. De Belastingdienst hanteert een breed begrip van &apos;uren besteed aan de onderneming&apos;. De volgende activiteiten mogen worden meegeteld:
        </p>
        <ul>
          <li>Declarabele uren bij opdrachtgevers</li>
          <li>Acquisitie en netwerken</li>
          <li>Offertes schrijven en onderhandelen</li>
          <li>Administratie en facturatie</li>
          <li>Bijscholing en cursussen die direct bijdragen aan je werk</li>
          <li>Reistijd naar en van opdrachtgevers (als dit zakelijk is)</li>
          <li>Website onderhoud en marketing</li>
        </ul>
        <p>
          Wat <strong>niet</strong> meetelt: privéreizen, algemene studie zonder directe link aan je onderneming, en tijd besteed aan hobby-activiteiten.
        </p>

        <h2>Deeltijd ZZP&apos;er: de 50%-eis</h2>
        <p>
          Als je naast je ZZP-werk ook in loondienst werkt, gelden aanvullende regels. Je moet dan niet alleen de 1.225 uur halen, maar ook meer dan 50% van je totale werktijd aan de onderneming besteden. Stel je werkt 20 uur per week in loondienst (circa 1.040 uur per jaar) en 25 uur per week als ZZP&apos;er — dan haal je de 50%-eis wel. Maar werk je in loondienst 32 uur per week, dan moet je als ZZP&apos;er meer uren maken dan die 32 uur wekelijks om aan de eis te voldoen.
        </p>

        <h2>Hoe hou je uren bij — praktische methoden</h2>
        <h3>Methode 1: Gespecialiseerde tijdregistratiesoftware</h3>
        <p>
          Tools als Toggl Track, Clockify of de urenregistratie ingebouwd in je boekhoudprogramma zijn de meest betrouwbare optie. Je klikt een timer aan bij het starten van een taak en stopt die als je klaar bent. Hierdoor bouw je automatisch een gedetailleerd logboek op dat je bij een belastingcontrole kunt overleggen.
        </p>
        <h3>Methode 2: Boekhoudprogramma met urenmodule</h3>
        <p>
          Veel boekhoudprogramma&apos;s voor ZZP&apos;ers — zoals Moneybird, Twinfield of Jortt — hebben een ingebouwde urenregistratie. Het voordeel is dat je direct vanuit je urenregistratie facturen kunt aanmaken. Dit bespaart dubbel werk en verkleint de kans op fouten.
        </p>
        <h3>Methode 3: Spreadsheet</h3>
        <p>
          Een Excel- of Google Sheets-bestand is acceptabel, mits je het consequent bijhoudt en per dag noteert. Zorg voor kolommen als datum, project/opdrachtgever, omschrijving activiteit en aantal uren. Nadeel is dat achteraf invullen snel tot onnauwkeurigheden leidt en de Belastingdienst een spreadsheet zonder tijdstempel als minder betrouwbaar beschouwt.
        </p>

        <h2>Hoeveel uur per week is 1.225 uur?</h2>
        <p>
          Als je het jaar verdeelt over 47 werkweken (rekening houdend met vakantie en feestdagen), moet je gemiddeld <strong>26 uur per week</strong> aan je onderneming besteden. Voor full-time ZZP&apos;ers is dit doorgaans geen probleem. Voor deeltijd-ZZP&apos;ers is het een bewuste keuze en vraagt om strakke registratie.
        </p>

        <h2>Wat bewaar je en hoe lang?</h2>
        <p>
          Je bent verplicht je urenregistratie minimaal 7 jaar te bewaren als onderdeel van je administratie. Digitale bestanden zijn prima, zolang ze leesbaar en aantoonbaar ongewijzigd zijn. Exporteer je urenregistratie regelmatig naar PDF of bewaar de data in een cloudoplossing met versiegeschiedenis.
        </p>
      </div>

      <div style={{ background: 'var(--accent-light)', border: '1px solid var(--accent)', borderRadius: 16, padding: '28px 32px', textAlign: 'center', marginTop: 48 }}>
        <h3 style={{ fontSize: 20, fontWeight: 700, marginTop: 0, marginBottom: 8, color: 'var(--accent-text)' }}>Automatisch uren bijhouden via je boekhoudprogramma</h3>
        <p style={{ color: 'var(--accent-text)', margin: '0 0 20px', opacity: 0.85 }}>Veel boekhoudpakketten voor ZZP&apos;ers hebben urenregistratie ingebouwd. Vergelijk de opties en kies het pakket dat bij jou past.</p>
        <a href="/boekhoudprogramma" className="btn-primary" style={{ fontSize: 15, padding: '12px 28px' }}>Vergelijk boekhoudprogramma&apos;s →</a>
      </div>
    </div>
  )
}
