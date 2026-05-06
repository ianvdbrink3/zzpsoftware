import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: "Freelance contract ZZP: wat moet erin? (2026)",
  description: "Een waterdicht freelance contract beschermt je als ZZP'er en toont zelfstandigheid aan. Verplichte elementen, modelcontracten en schijnzelfstandigheid.",
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
        Freelance contract als ZZP&apos;er: wat moet erin en waarom
      </h1>
      <p style={{ fontSize: 17, color: 'var(--text-secondary)', marginBottom: 40, lineHeight: 1.7 }}>
        Een goed freelance contract beschermt je als ZZP&apos;er bij conflicten, bewaakt de scope van je opdracht en toont aan dat er sprake is van echte zelfstandigheid. Zeker nu de handhaving op schijnzelfstandigheid is aangescherpt.
      </p>

      <div className="card" style={{ padding: '20px 24px', marginBottom: 40, background: 'var(--accent-light)', border: '1px solid var(--accent)' }}>
        <div style={{ fontWeight: 600, marginBottom: 10, color: 'var(--accent-text)' }}>In het kort</div>
        <ul style={{ margin: 0, paddingLeft: 20 }}>
          {[
            'Een schriftelijk contract is niet verplicht, maar sterk aanbevolen',
            'Leg opdracht, tarief, looptijd en opzegregeling altijd schriftelijk vast',
            'Goede contracten helpen schijnzelfstandigheid te voorkomen',
            'Modelcontracten van de Belastingdienst bieden een goedgekeurd startpunt',
          ].map(item => (
            <li key={item} style={{ marginBottom: 6, fontSize: 14, color: 'var(--accent-text)' }}>{item}</li>
          ))}
        </ul>
      </div>

      <div className="prose">
        <h2>Waarom een freelance contract onmisbaar is</h2>
        <p>Mondelinge afspraken zijn juridisch geldig maar bijna onmogelijk te bewijzen als het misgaat. Een schriftelijk contract geeft houvast bij scope-discussies, betalingsconflicten of voortijdige beëindiging.</p>
        <p>Bovendien speelt het contract een cruciale rol in het aantonen van echte zelfstandigheid. Sinds de Belastingdienst de handhaving op de Wet DBA heeft aangescherpt per 1 januari 2025, kijken inspecteurs ook naar contractuele afspraken.</p>

        <h2>Wat moet er in een freelance contract staan?</h2>

        <h3>Partijen en opdracht</h3>
        <p>Vermeld de volledige naam, KVK-nummer en adres van beide partijen. Beschrijf de opdracht zo concreet mogelijk: wat lever je op, in welke vorm, binnen welke termijn?</p>

        <h3>Tarief en betaling</h3>
        <p>Leg je uurtarief of projecttarief vast, de factureringsfrequentie en de betalingstermijn. Vermeld ook wat er bij te late betaling geldt: wettelijke handelsrente plus incassokosten.</p>

        <h3>Looptijd en opzegging</h3>
        <p>Is de opdracht voor een vaste periode of onbepaalde tijd? Wat is de opzegtermijn (doorgaans 1–4 weken)? Leg ook vast wat er gefactureerd wordt bij vroegtijdige opzegging door de opdrachtgever.</p>

        <h3>Aansprakelijkheid en verzekering</h3>
        <p>Beperk je aansprakelijkheid en verwijs naar je beroepsaansprakelijkheidsverzekering. Bepaal welk recht van toepassing is (Nederlands recht).</p>

        <h3>Vervanging en onderaanneming</h3>
        <p>Om schijnzelfstandigheid te voorkomen is het belangrijk dat het contract het recht op vervanging expliciet benoemt. Dit is een van de kenmerken van echte zelfstandigheid voor de Belastingdienst.</p>

        <h2>Modelcontracten: goedgekeurde startpunten</h2>
        <p>De Belastingdienst heeft modelovereenkomsten gepubliceerd die zijn goedgekeurd voor gebruik (belastingdienst.nl). Let op: een goedgekeurd modelcontract biedt alleen zekerheid als de feitelijke werkwijze ook overeenkomt met het contract.</p>
        <p>Brancheorganisaties bieden ook sectorspecifieke modelcontracten — voor IT-freelancers via ICTWaarborg, voor creatieve beroepen via de BNO.</p>

        <h2>Hoe sluit je een contract af?</h2>
        <p>Stuur het contract als PDF voor digitale ondertekening via DocuSign of SignRequest (juridisch geldig in Nederland). Bewaar een gesigneerde kopie minimaal voor de duur van de opdracht plus 5 jaar.</p>
        <p>
          Bewaar contracten in je boekhoudadministratie. <a href="/tools/exact-online" style={{ color: 'var(--accent)' }}>Exact Online</a> en <a href="/tools/twinfield" style={{ color: 'var(--accent)' }}>Twinfield</a> hebben documentbeheer ingebouwd. Via een <a href="/boekhoudprogramma" style={{ color: 'var(--accent)' }}>goed boekhoudprogramma</a> als <a href="/tools/moneybird" style={{ color: 'var(--accent)' }}>Moneybird</a> of <a href="/tools/snelstart" style={{ color: 'var(--accent)' }}>SnelStart</a> kun je vervolgens direct vanuit het geaccepteerde contract een factuur aanmaken.
        </p>
      </div>

      <div style={{ background: 'var(--accent-light)', border: '1px solid var(--accent)', borderRadius: 16, padding: '28px 32px', textAlign: 'center', marginTop: 48 }}>
        <h3 style={{ fontSize: 20, fontWeight: 700, marginTop: 0, marginBottom: 8, color: 'var(--accent-text)' }}>Facturen en offertes professioneel versturen</h3>
        <p style={{ color: 'var(--accent-text)', margin: '0 0 20px', opacity: 0.85 }}>Na een getekend contract stuur je eenvoudig je facturen met de juiste betalingstermijn via je boekhoudprogramma.</p>
        <a href="/boekhoudprogramma" className="btn-primary" style={{ fontSize: 15, padding: '12px 28px' }}>Vergelijk boekhoudprogramma&apos;s →</a>
      </div>
    </div>
  )
}
