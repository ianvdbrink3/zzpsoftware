import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: "Schijnzelfstandigheid 2026: risico's en preventie",
  description: "Belastingdienst handhaaft actief op schijnzelfstandigheid. Wat is het, welke risico's loop je en hoe toon je echte zelfstandigheid aan?",
}

export default function SchijnzelfstandigheidZzpPage() {
  return (
    <div style={{ maxWidth: 780, margin: '0 auto', padding: '48px 24px' }}>
      <div style={{ fontSize: 13, color: 'var(--text-tertiary)', marginBottom: 24 }}>
        <a href="/" style={{ color: 'var(--text-tertiary)' }}>Home</a> / <a href="/gids" style={{ color: 'var(--text-tertiary)' }}>Gidsen</a> / Schijnzelfstandigheid ZZP
      </div>

      <div style={{ display: 'flex', gap: 8, marginBottom: 20, flexWrap: 'wrap' }}>
        <span className="badge badge-green">Juridisch</span>
        <span style={{ fontSize: 13, color: 'var(--text-tertiary)' }}>Bijgewerkt mei 2026 · 8 min leestijd</span>
      </div>

      <h1 style={{ fontSize: 'clamp(26px, 4vw, 38px)', fontWeight: 700, marginBottom: 16, lineHeight: 1.2 }}>
        Schijnzelfstandigheid in 2026: risico&apos;s, DBA-wet en hoe je het voorkomt
      </h1>
      <p style={{ fontSize: 17, color: 'var(--text-secondary)', marginBottom: 40, lineHeight: 1.7 }}>
        Sinds 1 januari 2025 handhaaft de Belastingdienst actief op schijnzelfstandigheid. ZZP&apos;ers en opdrachtgevers die feitelijk in een arbeidsrelatie werken maar een ZZP-constructie hanteren, kunnen worden gecorrigeerd met naheffingen en boetes.
      </p>

      <div className="card" style={{ padding: '20px 24px', marginBottom: 40, background: 'var(--accent-light)', border: '1px solid var(--accent)' }}>
        <div style={{ fontWeight: 600, marginBottom: 10, color: 'var(--accent-text)' }}>In het kort</div>
        <ul style={{ margin: 0, paddingLeft: 20 }}>
          {[
            "Schijnzelfstandigheid: ZZP'er werkt feitelijk in loondienst zonder bijbehorende bescherming",
            'Belastingdienst handhaaft actief sinds 2025 na jaren gedoogbeleid',
            'Zowel opdrachtgever als opdrachtnemer lopen risico',
            "Zelfstandigheid aantonen vereist meer dan een KVK-inschrijving en een contract",
          ].map(item => (
            <li key={item} style={{ marginBottom: 6, fontSize: 14, color: 'var(--accent-text)' }}>{item}</li>
          ))}
        </ul>
      </div>

      <div className="prose">
        <h2>Wat is schijnzelfstandigheid?</h2>
        <p>Schijnzelfstandigheid ontstaat wanneer iemand formeel als ZZP&apos;er werkt, maar de werkelijke situatie kenmerken heeft van loondienst. De Belastingdienst en rechters kijken niet naar het etiket, maar naar de feiten.</p>
        <p>Er is sprake van een arbeidsovereenkomst als er drie elementen aanwezig zijn: arbeid verrichten, loon ontvangen, en een gezagsverhouding (de opdrachtgever bepaalt hoe, wanneer en waar het werk wordt uitgevoerd).</p>

        <h3>Wanneer is er een gezagsverhouding?</h3>
        <p>Een gezagsverhouding bestaat als de opdrachtgever instructies geeft over de uitvoering, als je werk integreert in vaste bedrijfsprocessen, als je met bedrijfsmiddelen van de opdrachtgever werkt, of als je je werkzaamheden niet door een ander mag laten uitvoeren.</p>

        <h2>De Wet DBA en handhaving in 2026</h2>
        <p>De Wet Deregulering Beoordeling Arbeidsrelaties (DBA) is per 1 januari 2025 volledig in handhaving. In 2026 worden inspecties steekproefsgewijs en gericht uitgevoerd, met bijzondere aandacht voor zorg, bouw, IT, onderwijs en transport.</p>

        <h3>Wat zijn de risico&apos;s?</h3>
        <p>Bij geconstateerde schijnzelfstandigheid kan de Belastingdienst de opdrachtgever een naheffing opleggen voor niet-betaalde loonheffingen en premies. De naheffing kan tot 5 jaar terug worden opgelegd. De opdrachtnemer kan zijn zelfstandigenaftrek en startersaftrek kwijtraken.</p>

        <h2>Hoe toon je echte zelfstandigheid aan?</h2>
        <p>De Belastingdienst beoordeelt op basis van een combinatie van factoren:</p>
        <ul>
          <li>Je werkt voor meerdere opdrachtgevers tegelijk of opeenvolgend</li>
          <li>Je bepaalt zelf hoe en wanneer je het werk uitvoert</li>
          <li>Je kunt je laten vervangen door een ander</li>
          <li>Je draagt zelf ondernemersrisico</li>
          <li>Je investeert zelf in bedrijfsmiddelen en vakkennis</li>
          <li>Je hebt eigen klanten geworven via acquisitie</li>
          <li>Je tarief ligt duidelijk hoger dan het marktloon in loondienst</li>
          <li>Je staat ingeschreven bij de KVK en hebt een actieve onderneming</li>
        </ul>

        <h3>Wat helpt niet</h3>
        <p>Alleen een KVK-inschrijving, een goedgekeurd modelcontract of een hoog uurtarief zijn op zichzelf onvoldoende. Als de feitelijke situatie niet overeenkomt met de contractuele, prevaleert de werkelijkheid.</p>

        <h2>Praktische maatregelen</h2>
        <p>Zorg voor voldoende spreiding: werk niet jarenlang exclusief voor één opdrachtgever. Gebruik je eigen tools en stel je eigen werktijden vast. Leg in het contract expliciet het vervangingsrecht vast. Bewaar bewijs van je ondernemerschap: meerdere klanten, eigen acquisitie, investeringen.</p>
        <p>
          Een professionele administratie toont je ondernemerschap aan. Houd je facturen, contracten en omzet bij via een <a href="/boekhoudprogramma" style={{ color: 'var(--accent)' }}>goed boekhoudprogramma</a>. <a href="/tools/moneybird" style={{ color: 'var(--accent)' }}>Moneybird</a> toont overzichtelijk al je klanten en facturen — bewijs dat je voor meerdere opdrachtgevers werkt. <a href="/tools/exact-online" style={{ color: 'var(--accent)' }}>Exact Online</a> en <a href="/tools/twinfield" style={{ color: 'var(--accent)' }}>Twinfield</a> bieden uitgebreide rapportages die een fiscalist direct kan gebruiken als onderbouwing van je ondernemerschap.
        </p>
        <p>
          Bij twijfel: raadpleeg een fiscalist of arbeidsrechtjurist voordat je een lange opdracht aanvaardt.
        </p>
      </div>

      <div style={{ background: 'var(--accent-light)', border: '1px solid var(--accent)', borderRadius: 16, padding: '28px 32px', textAlign: 'center', marginTop: 48 }}>
        <h3 style={{ fontSize: 20, fontWeight: 700, marginTop: 0, marginBottom: 8, color: 'var(--accent-text)' }}>Meerdere opdrachtgevers, nette boekhouding</h3>
        <p style={{ color: 'var(--accent-text)', margin: '0 0 20px', opacity: 0.85 }}>Bewijs je ondernemerschap met een professionele administratie. Vergelijk boekhoudprogramma&apos;s die ZZP&apos;ers dagelijks gebruiken.</p>
        <a href="/boekhoudprogramma" className="btn-primary" style={{ fontSize: 15, padding: '12px 28px' }}>Vergelijk boekhoudprogramma&apos;s →</a>
      </div>
    </div>
  )
}
