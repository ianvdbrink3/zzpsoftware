import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: "Algemene voorwaarden als ZZP'er: waarom en hoe | SlimBoekhoud",
  description: "Waarom heb je als ZZP'er algemene voorwaarden nodig, wat moet erin staan en hoe verklaar je ze van toepassing? De complete uitleg voor freelancers.",
}

export default function AlgemeneVoorwaardenZzpPage() {
  return (
    <div style={{ maxWidth: 780, margin: '0 auto', padding: '48px 24px' }}>
      <div style={{ fontSize: 13, color: 'var(--text-tertiary)', marginBottom: 24 }}>
        <a href="/" style={{ color: 'var(--text-tertiary)' }}>Home</a> / <a href="/gids" style={{ color: 'var(--text-tertiary)' }}>Gidsen</a> / Algemene voorwaarden ZZP
      </div>

      <div style={{ display: 'flex', gap: 8, marginBottom: 20, flexWrap: 'wrap' }}>
        <span className="badge badge-green">Juridisch</span>
        <span style={{ fontSize: 13, color: 'var(--text-tertiary)' }}>Bijgewerkt mei 2026 · 6 min leestijd</span>
      </div>

      <h1 style={{ fontSize: 'clamp(26px, 4vw, 38px)', fontWeight: 700, marginBottom: 16, lineHeight: 1.2 }}>
        Algemene voorwaarden als ZZP'er: bescherm jezelf juridisch
      </h1>
      <p style={{ fontSize: 17, color: 'var(--text-secondary)', marginBottom: 40, lineHeight: 1.7 }}>
        Algemene voorwaarden zijn niet verplicht, maar wel onmisbaar. Ze beschermen je als ZZP'er tegen onbetaalde facturen, onrealistische aansprakelijkheidsclaims en conflicten over levertijden. Zonder AV sta je juridisch zwakker als het misgaat met een opdrachtgever.
      </p>

      <div className="card" style={{ padding: '20px 24px', marginBottom: 40, background: 'var(--accent-light)', border: '1px solid var(--accent)' }}>
        <div style={{ fontWeight: 600, marginBottom: 10, color: 'var(--accent-text)' }}>In het kort</div>
        <ul style={{ margin: 0, paddingLeft: 20 }}>
          {[
            'Algemene voorwaarden zijn niet wettelijk verplicht, maar geven je juridische bescherming',
            'Je moet de voorwaarden voor of bij het sluiten van de overeenkomst beschikbaar stellen',
            'Beperk je aansprakelijkheid altijd tot het factuurbedrag of een vaste maximumsom',
            'De FNV, FNV Zelfstandigen en brancheorganisaties bieden modelvoorwaarden aan',
          ].map(item => (
            <li key={item} style={{ marginBottom: 6, fontSize: 14, color: 'var(--accent-text)' }}>{item}</li>
          ))}
        </ul>
      </div>

      <div className="prose">
        <h2>Waarom heb je algemene voorwaarden nodig?</h2>
        <p>Zonder algemene voorwaarden gelden uitsluitend de wettelijke regels en de afspraken die je expliciet in een contract of offerte hebt vastgelegd. Dat betekent dat veel praktische situaties niet geregeld zijn: wat gebeurt er als de klant te laat betaalt? Wie is aansprakelijk als er iets misgaat? Hoeveel dagen heeft de klant om te reclameren?</p>
        <p>Algemene voorwaarden vullen die leemtes in op een manier die gunstig is voor jouw positie. Ze voorkomen dat je per opdracht alles opnieuw moet onderhandelen en geven je een duidelijk vertrekpunt bij conflicten.</p>

        <h2>Wat staat er in goede algemene voorwaarden?</h2>
        <p>De inhoud verschilt per branche, maar de volgende onderwerpen zijn voor vrijwel elke ZZP'er relevant:</p>
        <h3>Betaaltermijnen en incasso</h3>
        <p>Stel een betalingstermijn in van 14 of 30 dagen. Bepaal welke rente je rekent bij te late betaling (wettelijke handelsrente is gebruikelijk) en of je incassokosten doorberekent. Zonder deze clausule heb je weinig verhaal als een klant traag betaalt.</p>
        <h3>Aansprakelijkheidsbeperking</h3>
        <p>Beperk je aansprakelijkheid tot het bedrag van de betreffende opdracht, of tot het bedrag dat je beroepsaansprakelijkheidsverzekering maximaal uitkeert. Zonder aansprakelijkheidsbeperking kun je in theorie aansprakelijk worden gesteld voor vervolgschade die vele malen hoger is dan je factuur.</p>
        <h3>Eigendomsvoorbehoud en intellectueel eigendom</h3>
        <p>Geleverde producten, ontwerpen of software blijven jouw eigendom totdat de factuur volledig betaald is. Bepaal ook wanneer intellectuele eigendomsrechten overgaan naar de klant — dit is standaard pas na volledige betaling.</p>
        <h3>Opzegging en annulering</h3>
        <p>Wat gebeurt er als een opdracht halverwege wordt afgebroken? Leg vast dat reeds verrichte werkzaamheden altijd gefactureerd worden, en dat bij annulering na een bepaald moment een vergoeding verschuldigd is.</p>

        <h2>Hoe verklaar je algemene voorwaarden van toepassing?</h2>
        <p>Het is niet genoeg om algemene voorwaarden te hebben — je moet ze ook correct van toepassing verklaren. Dit doe je door:</p>
        <ul>
          <li>Een verwijzing op je offerte, opdrachtbevestiging en factuur: "Op al onze diensten zijn onze algemene voorwaarden van toepassing, te raadplegen op [website]"</li>
          <li>De voorwaarden toe te sturen of ter hand te stellen bij het aangaan van de overeenkomst</li>
          <li>De klant te laten bevestigen dat hij de voorwaarden heeft ontvangen (e-mailbevestiging is voldoende)</li>
        </ul>
        <p>Verklaar je de AV van toepassing nadat de overeenkomst al gesloten is, dan zijn ze niet geldig voor die opdracht. Timing is dus essentieel.</p>
        <h3>Conflicterende voorwaarden</h3>
        <p>Grote bedrijven sturen vaak hun eigen inkoopvoorwaarden mee. Als jij je AV van toepassing verklaart en de klant zijn inkoop-AV, kan er een "battle of the forms" ontstaan. In de meeste gevallen prevaleert de eerste set die van toepassing is verklaard. Voeg in je AV een clausule toe die stelt dat jouw voorwaarden prevaleren boven die van de opdrachtgever.</p>

        <h2>Modelvoorwaarden en professionele hulp</h2>
        <p>Je hoeft de algemene voorwaarden niet zelf helemaal op te stellen. Diverse organisaties bieden modelvoorwaarden aan die je kunt aanpassen aan je situatie:</p>
        <ul>
          <li>FNV Zelfstandigen biedt gratis modelvoorwaarden voor ZZP'ers</li>
          <li>Brancheorganisaties zoals de NOvA (advocaten), KVGO (grafisch ontwerpers) of ICTWaarborg (IT) hebben sectorspecifieke voorwaarden</li>
          <li>Online juridische diensten zoals Legaldesk of LegalLounge bieden betaalde maar direct bruikbare sjablonen</li>
        </ul>
        <p>Laat je AV minimaal eenmalig controleren door een jurist, zeker als je werkt voor grote opdrachtgevers of in een branche met hoge aansprakelijkheidsrisico's. De kosten hiervan zijn een beperkte investering vergeleken met de bescherming die goede AV bieden.</p>
      </div>

      <div style={{ background: 'var(--accent-light)', border: '1px solid var(--accent)', borderRadius: 16, padding: '28px 32px', textAlign: 'center', marginTop: 48 }}>
        <h3 style={{ fontSize: 20, fontWeight: 700, marginTop: 0, marginBottom: 8, color: 'var(--accent-text)' }}>Facturen met verwijzing naar je AV</h3>
        <p style={{ color: 'var(--accent-text)', margin: '0 0 20px', opacity: 0.85 }}>Goed boekhoudprogramma laat je een vaste voettekst toevoegen aan facturen met verwijzing naar je algemene voorwaarden.</p>
        <a href="/boekhoudprogramma" className="btn-primary" style={{ fontSize: 15, padding: '12px 28px' }}>Vergelijk software →</a>
      </div>
    </div>
  )
}
