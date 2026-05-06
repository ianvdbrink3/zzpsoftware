import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: "Offerte maken ZZP: eisen, tips en opvolgen",
  description: "Een professionele offerte als ZZP'er: juridische betekenis, verplichte elementen, opbouw en hoe je opvolgmail je conversie verhoogt.",
}

export default function OffertesMakenZzpPage() {
  return (
    <div style={{ maxWidth: 780, margin: '0 auto', padding: '48px 24px' }}>
      <div style={{ fontSize: 13, color: 'var(--text-tertiary)', marginBottom: 24 }}>
        <a href="/" style={{ color: 'var(--text-tertiary)' }}>Home</a> / <a href="/gids" style={{ color: 'var(--text-tertiary)' }}>Gidsen</a> / Offertes maken als ZZP&apos;er
      </div>

      <div style={{ display: 'flex', gap: 8, marginBottom: 20, flexWrap: 'wrap' }}>
        <span className="badge badge-green">Facturatie</span>
        <span style={{ fontSize: 13, color: 'var(--text-tertiary)' }}>Bijgewerkt mei 2026 · 6 min leestijd</span>
      </div>

      <h1 style={{ fontSize: 'clamp(26px, 4vw, 38px)', fontWeight: 700, marginBottom: 16, lineHeight: 1.2 }}>
        Professionele offerte maken als ZZP&apos;er: opbouw, eisen en opvolgen
      </h1>
      <p style={{ fontSize: 17, color: 'var(--text-secondary)', marginBottom: 40, lineHeight: 1.7 }}>
        Een goede offerte is meer dan een prijsopgave — het is je eerste zakelijke indruk. Een duidelijke, professionele offerte verhoogt je kans op een opdracht en voorkomt discussies achteraf.
      </p>

      <div className="card" style={{ padding: '20px 24px', marginBottom: 40, background: 'var(--accent-light)', border: '1px solid var(--accent)' }}>
        <div style={{ fontWeight: 600, marginBottom: 10, color: 'var(--accent-text)' }}>In het kort</div>
        <ul style={{ margin: 0, paddingLeft: 20 }}>
          {[
            'Een offerte is een juridisch aanbod — akkoord van de klant = bindende overeenkomst',
            'Vermeld altijd je KVK-nummer, BTW-nummer, geldigheid en betalingsvoorwaarden',
            'Specificeer werkzaamheden zo concreet mogelijk om meerwerk-discussies te voorkomen',
            'Volg een offerte na 3–5 werkdagen op als je nog geen reactie hebt',
          ].map(item => (
            <li key={item} style={{ marginBottom: 6, fontSize: 14, color: 'var(--accent-text)' }}>{item}</li>
          ))}
        </ul>
      </div>

      <div className="prose">
        <h2>Juridisch gewicht van een offerte</h2>
        <p>
          Een offerte is een aanbod in de zin van het Burgerlijk Wetboek. Zodra een opdrachtgever jouw offerte accepteert — mondeling, schriftelijk of per e-mail — is er een bindende overeenkomst tot stand gekomen. Geef altijd een <strong>geldigheidsdatum</strong> op (bijv. 30 dagen) zodat je prijzen niet eeuwig geldig zijn.
        </p>

        <h2>Verplichte elementen op een offerte</h2>
        <ul>
          <li>Volledige naam of handelsnaam en adresgegevens</li>
          <li>KVK-nummer en BTW-nummer</li>
          <li>Naam en adres van de opdrachtgever</li>
          <li>Datum en offertenummer</li>
          <li>Omschrijving van de werkzaamheden of producten</li>
          <li>Prijs exclusief en inclusief BTW</li>
          <li>Geldigheidsduur van de offerte</li>
          <li>Betalingsvoorwaarden en leveringstermijn</li>
        </ul>

        <h2>Opbouw van een effectieve offerte</h2>

        <h3>1. Inleiding: toon dat je geluisterd hebt</h3>
        <p>
          Begin met een korte samenvatting van de vraag van de opdrachtgever. Dit geeft vertrouwen en laat zien dat je de situatie begrijpt.
        </p>

        <h3>2. Omschrijving van de werkzaamheden</h3>
        <p>
          Beschrijf zo specifiek mogelijk wat je gaat doen. Vermeld ook expliciet wat er <em>buiten</em> de scope valt. Dat voorkomt scope-creep en discussies over meerwerk.
        </p>

        <h3>3. Prijsoverzicht</h3>
        <p>
          Splits de prijs uit in onderdelen. Vermeld altijd of bedragen exclusief of inclusief BTW zijn — dat is een veelgemaakte bron van misverstanden.
        </p>

        <h3>4. Planning en oplevering</h3>
        <p>
          Geef een indicatie van de doorlooptijd. Als je afhankelijk bent van aanlevering door de opdrachtgever, vermeld dat dan expliciet.
        </p>

        <h3>5. Algemene voorwaarden</h3>
        <p>
          Verwijs naar je algemene voorwaarden en stuur ze mee. Ze beschermen je bij meerwerk, annuleringen en niet-betaling.
        </p>

        <h2>Meerwerk voorkomen</h2>
        <p>
          Vermeld in je offerte dat eventueel meerwerk op basis van je uurtarief wordt uitgevoerd. Leg meerwerk altijd schriftelijk vast vóórdat je ermee begint.
        </p>

        <h2>Offerte opvolgen: zo doe je dat professioneel</h2>
        <p>
          Stuur na 3–5 werkdagen een vriendelijke opvolgmail. Vraag of er nog vragen zijn en of je de offerte mee kunt nemen in je planning. Een telefoontje werkt vaak beter dan een e-mail. De meeste ZZP&apos;ers laten dit na — terwijl opvolgen de conversie aanzienlijk verhoogt.
        </p>

        <h2>Offerte-naar-factuur met boekhoudprogramma</h2>
        <p>
          Met de juiste software zet je een geaccepteerde offerte met één klik om naar een factuur. <a href="/tools/moneybird" style={{ color: 'var(--accent)' }}>Moneybird</a> en <a href="/tools/snelstart" style={{ color: 'var(--accent)' }}>SnelStart</a> bieden dit als ingebouwde functie. Bekijk alle opties op <a href="/boekhoudprogramma" style={{ color: 'var(--accent)' }}>onze vergelijkingspagina</a>.
        </p>
      </div>

      <div style={{ background: 'var(--accent-light)', border: '1px solid var(--accent)', borderRadius: 16, padding: '28px 32px', textAlign: 'center', marginTop: 48 }}>
        <h3 style={{ fontSize: 20, fontWeight: 700, marginTop: 0, marginBottom: 8, color: 'var(--accent-text)' }}>Offertes en facturen in hetzelfde programma</h3>
        <p style={{ color: 'var(--accent-text)', margin: '0 0 20px', opacity: 0.85 }}>Met een goed boekhoudprogramma maak je offertes die je met een klik omzet naar een factuur. Vergelijk de beste opties.</p>
        <a href="/boekhoudprogramma" className="btn-primary" style={{ fontSize: 15, padding: '12px 28px' }}>Vergelijk boekhoudprogramma&apos;s →</a>
      </div>
    </div>
  )
}
