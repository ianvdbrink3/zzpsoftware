import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: "Freelance contract voor ZZP'ers: wat moet erin? | SlimBoekhoud",
  description: "Wat moet er in een freelance contract staan? Leer over modelcontracten, bescherming tegen schijnzelfstandigheid en hoe je jezelf juridisch beschermt als ZZP'er.",
}

export default function FreelanceContractZzpPage() {
  return (
    <div style={{ maxWidth: 780, margin: '0 auto', padding: '48px 24px' }}>
      <div style={{ fontSize: 13, color: 'var(--text-tertiary)', marginBottom: 24 }}>
        <a href="/" style={{ color: 'var(--text-tertiary)' }}>Home</a> / <a href="/gids" style={{ color: 'var(--text-tertiary)' }}>Gidsen</a> / Freelance contract ZZP
      </div>

      <div style={{ display: 'flex', gap: 8, marginBottom: 20, flexWrap: 'wrap' }}>
        <span className="badge badge-green">Juridisch</span>
        <span style={{ fontSize: 13, color: 'var(--text-tertiary)' }}>Bijgewerkt mei 2026 · 7 min leestijd</span>
      </div>

      <h1 style={{ fontSize: 'clamp(26px, 4vw, 38px)', fontWeight: 700, marginBottom: 16, lineHeight: 1.2 }}>
        Freelance contract als ZZP'er: wat moet erin en waarom
      </h1>
      <p style={{ fontSize: 17, color: 'var(--text-secondary)', marginBottom: 40, lineHeight: 1.7 }}>
        Een goed freelance contract beschermt je als ZZP'er bij conflicten, bewaakt de scope van je opdracht en toont aan dat er sprake is van echte zelfstandigheid. Zeker nu de handhaving op schijnzelfstandigheid is aangescherpt, is een waterdicht contract geen luxe maar een noodzaak.
      </p>

      <div className="card" style={{ padding: '20px 24px', marginBottom: 40, background: 'var(--accent-light)', border: '1px solid var(--accent)' }}>
        <div style={{ fontWeight: 600, marginBottom: 10, color: 'var(--accent-text)' }}>In het kort</div>
        <ul style={{ margin: 0, paddingLeft: 20 }}>
          {[
            'Een schriftelijk contract is niet verplicht, maar wel sterk aanbevolen',
            'Leg de opdracht, het tarief, de looptijd en de opzegregeling altijd schriftelijk vast',
            'Goede contracten helpen schijnzelfstandigheid te voorkomen door zelfstandigheid expliciet te benoemen',
            'Modelcontracten van de Belastingdienst bieden een goedgekeurd startpunt',
          ].map(item => (
            <li key={item} style={{ marginBottom: 6, fontSize: 14, color: 'var(--accent-text)' }}>{item}</li>
          ))}
        </ul>
      </div>

      <div className="prose">
        <h2>Waarom een freelance contract onmisbaar is</h2>
        <p>Mondelinge afspraken zijn juridisch geldig, maar bijna onmogelijk te bewijzen als het misgaat. Een schriftelijk contract geeft je houvast bij scope-discussies ("dit valt buiten de opdracht"), betalingsconflicten ("de betalingstermijn is 30 dagen"), of als de samenwerking voortijdig wordt beeindigd.</p>
        <p>Daarnaast speelt het contract een cruciale rol in het aantonen van echte zelfstandigheid. Sinds de Belastingdienst de handhaving op de Wet DBA heeft aangescherpt, kijken inspecteurs ook naar contractuele afspraken om te beoordelen of er sprake is van een dienstbetrekking of van zelfstandig ondernemerschap.</p>

        <h2>Wat moet er in een freelance contract staan?</h2>
        <p>Een compleet freelance contract bevat minimaal de volgende onderdelen:</p>
        <h3>Partijen en opdracht</h3>
        <p>Vermeld de volledige naam, KVK-nummer en adres van beide partijen. Beschrijf de opdracht zo concreet mogelijk: wat lever je op, in welke vorm, binnen welke termijn? Vage omschrijvingen leiden tot scope-creep en discussies achteraf.</p>
        <h3>Tarief en betaling</h3>
        <p>Leg je uurtarief of projecttarief vast, de factureringsfrequentie (wekelijks, maandelijks, per mijlpaal) en de betalingstermijn. Vermeld ook wat er gebeurt bij te late betaling: de wettelijke handelsrente plus incassokosten.</p>
        <h3>Looptijd en opzegging</h3>
        <p>Is de opdracht voor een vaste periode of onbepaalde tijd? Wat is de opzegtermijn? Bij opdrachten van meerdere maanden is een opzegtermijn van 1 tot 4 weken gebruikelijk. Leg ook vast wat er gefactureerd wordt bij vroegtijdige opzegging door de opdrachtgever.</p>
        <h3>Aansprakelijkheid en verzekering</h3>
        <p>Beperk je aansprakelijkheid en verwijs naar je beroepsaansprakelijkheidsverzekering. Bepaal welk recht van toepassing is (Nederlands recht) en welke rechtbank bevoegd is bij geschillen.</p>
        <h3>Vervanging en onderaanneming</h3>
        <p>Om schijnzelfstandigheid te voorkomen is het belangrijk dat het contract het recht op vervanging expliciet benoemt. Je mag als ZZP'er een vervanger sturen als je zelf verhinderd bent. Dit is een van de kenmerken van echte zelfstandigheid volgens de Belastingdienst.</p>

        <h2>Modelcontracten: goedgekeurde startpunten</h2>
        <p>De Belastingdienst heeft diverse modelovereenkomsten gepubliceerd die zijn goedgekeurd voor gebruik. Ze zijn beschikbaar via belastingdienst.nl en zijn bedoeld om vooraf zekerheid te geven over de fiscale kwalificatie van de arbeidsrelatie. Let op: een goedgekeurd modelcontract biedt alleen zekerheid als de feitelijke werkwijze ook overeenkomt met wat er in het contract staat.</p>
        <p>Brancheorganisaties bieden ook sectorspecifieke modelcontracten. Voor IT-freelancers zijn er modellen van ICTWaarborg, voor creatieve beroepen van Beroepsorganisatie Nederlandse Ontwerpers (BNO). Deze zijn toegespitst op de specifieke risico's en gebruiken in de branche.</p>

        <h2>Hoe sluit je een contract af?</h2>
        <p>Stuur het contract als PDF naar je opdrachtgever voor ondertekening. Digitaal ondertekenen via tools als DocuSign of SignRequest is juridisch geldig in Nederland en gaat sneller dan papieren handtekeningen. Bewaar een gesigneerde kopie altijd in je eigen administratie, minimaal voor de duur van de opdracht plus 5 jaar.</p>
        <p>Begint een opdrachtgever te dralen met het tekenen? Stuur dan geen uur werk in voordat het contract getekend is. Het ontbreken van een handtekening is een risicosignaal. Bij kleine of langlopende opdrachten is het ook verstandig om tussentijdse voortgangsbevestigingen te sturen per e-mail — die vormen aanvullend bewijs van de gemaakte afspraken.</p>
      </div>

      <div style={{ background: 'var(--accent-light)', border: '1px solid var(--accent)', borderRadius: 16, padding: '28px 32px', textAlign: 'center', marginTop: 48 }}>
        <h3 style={{ fontSize: 20, fontWeight: 700, marginTop: 0, marginBottom: 8, color: 'var(--accent-text)' }}>Facturen en offertes professioneel versturen</h3>
        <p style={{ color: 'var(--accent-text)', margin: '0 0 20px', opacity: 0.85 }}>Na een getekend contract stuur je eenvoudig je facturen met de juiste betalingstermijn via je boekhoudprogramma.</p>
        <a href="/boekhoudprogramma" className="btn-primary" style={{ fontSize: 15, padding: '12px 28px' }}>Vergelijk software →</a>
      </div>
    </div>
  )
}
