import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: "Algemene voorwaarden ZZP: bescherm jezelf",
  description: "Algemene voorwaarden zijn niet verplicht maar onmisbaar voor ZZP'ers. Aansprakelijkheidsbeperking, betaaltermijnen en hoe je ze toepast.",
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
        Algemene voorwaarden als ZZP&apos;er: bescherm jezelf juridisch
      </h1>
      <p style={{ fontSize: 17, color: 'var(--text-secondary)', marginBottom: 40, lineHeight: 1.7 }}>
        Algemene voorwaarden zijn niet verplicht, maar wel onmisbaar. Ze beschermen je als ZZP&apos;er tegen onbetaalde facturen, onrealistische aansprakelijkheidsclaims en conflicten over levertijden. Zonder AV sta je juridisch zwakker als het misgaat.
      </p>

      <div className="card" style={{ padding: '20px 24px', marginBottom: 40, background: 'var(--accent-light)', border: '1px solid var(--accent)' }}>
        <div style={{ fontWeight: 600, marginBottom: 10, color: 'var(--accent-text)' }}>In het kort</div>
        <ul style={{ margin: 0, paddingLeft: 20 }}>
          {[
            'Algemene voorwaarden zijn niet wettelijk verplicht, maar geven juridische bescherming',
            'Je moet de voorwaarden voor of bij het sluiten van de overeenkomst beschikbaar stellen',
            'Beperk je aansprakelijkheid altijd tot het factuurbedrag of een vaste maximumsom',
            'FNV Zelfstandigen en brancheorganisaties bieden gratis modelvoorwaarden aan',
          ].map(item => (
            <li key={item} style={{ marginBottom: 6, fontSize: 14, color: 'var(--accent-text)' }}>{item}</li>
          ))}
        </ul>
      </div>

      <div className="prose">
        <h2>Waarom heb je algemene voorwaarden nodig?</h2>
        <p>Zonder algemene voorwaarden gelden uitsluitend de wettelijke regels en expliciete contractafspraken. Veel praktische situaties zijn dan niet geregeld: wat als de klant te laat betaalt? Wie is aansprakelijk als er iets misgaat? AV vullen die leemtes op een manier die gunstig is voor jouw positie.</p>

        <h2>Wat staat er in goede algemene voorwaarden?</h2>

        <h3>Betaaltermijnen en incasso</h3>
        <p>Stel een betalingstermijn in van 14 of 30 dagen. Bepaal welke rente je rekent bij te late betaling (wettelijke handelsrente) en of je incassokosten doorberekent.</p>

        <h3>Aansprakelijkheidsbeperking</h3>
        <p>Beperk je aansprakelijkheid tot het bedrag van de betreffende opdracht of het maximum van je beroepsaansprakelijkheidsverzekering. Zonder beperking kun je aansprakelijk worden gesteld voor vervolgschade die vele malen hoger is dan je factuur.</p>

        <h3>Eigendomsvoorbehoud en intellectueel eigendom</h3>
        <p>Geleverde producten, ontwerpen of software blijven jouw eigendom totdat de factuur volledig betaald is. Intellectuele eigendomsrechten gaan pas over na volledige betaling.</p>

        <h3>Opzegging en annulering</h3>
        <p>Leg vast dat reeds verrichte werkzaamheden altijd gefactureerd worden, en dat bij annulering na een bepaald moment een vergoeding verschuldigd is.</p>

        <h2>Hoe verklaar je AV van toepassing?</h2>
        <ul>
          <li>Verwijs op je offerte, opdrachtbevestiging en factuur naar je AV</li>
          <li>Stuur de voorwaarden mee of link ernaar bij het aangaan van de overeenkomst</li>
          <li>Laat de klant bevestigen dat hij de voorwaarden heeft ontvangen</li>
        </ul>
        <p>Verklaar je de AV van toepassing ná het sluiten van de overeenkomst, dan zijn ze niet geldig voor die opdracht. Timing is essentieel.</p>
        <p>
          Met een <a href="/boekhoudprogramma" style={{ color: 'var(--accent)' }}>boekhoudprogramma</a> als <a href="/tools/moneybird" style={{ color: 'var(--accent)' }}>Moneybird</a> of <a href="/tools/snelstart" style={{ color: 'var(--accent)' }}>SnelStart</a> kun je een vaste voettekst toevoegen aan al je facturen en offertes — inclusief een verwijzing naar je algemene voorwaarden. Zo vergeet je het nooit.
        </p>

        <h2>Modelvoorwaarden en professionele hulp</h2>
        <ul>
          <li>FNV Zelfstandigen biedt gratis modelvoorwaarden voor ZZP&apos;ers</li>
          <li>Brancheorganisaties zoals KVGO (grafisch ontwerpers) of ICTWaarborg (IT) bieden sectorspecifieke voorwaarden</li>
          <li>Online juridische diensten zoals Legaldesk bieden betaalde, direct bruikbare sjablonen</li>
        </ul>
        <p>Laat je AV minimaal eenmalig controleren door een jurist, zeker als je werkt voor grote opdrachtgevers.</p>
      </div>

      <div style={{ background: 'var(--accent-light)', border: '1px solid var(--accent)', borderRadius: 16, padding: '28px 32px', textAlign: 'center', marginTop: 48 }}>
        <h3 style={{ fontSize: 20, fontWeight: 700, marginTop: 0, marginBottom: 8, color: 'var(--accent-text)' }}>Facturen met verwijzing naar je AV</h3>
        <p style={{ color: 'var(--accent-text)', margin: '0 0 20px', opacity: 0.85 }}>Goed boekhoudprogramma laat je een vaste voettekst toevoegen aan facturen met verwijzing naar je algemene voorwaarden.</p>
        <a href="/boekhoudprogramma" className="btn-primary" style={{ fontSize: 15, padding: '12px 28px' }}>Vergelijk boekhoudprogramma&apos;s →</a>
      </div>
    </div>
  )
}
