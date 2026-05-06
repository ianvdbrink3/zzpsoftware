import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: "Schijnzelfstandigheid 2026: wat is het en hoe voorkom je het | SlimBoekhoud",
  description: "Wat is schijnzelfstandigheid, welke risico's loop je in 2026 nu de DBA-wet gehandhaafd wordt, en hoe bescherm je jezelf als ZZP'er? De complete uitleg.",
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
        Schijnzelfstandigheid in 2026: risico's, DBA-wet en hoe je het voorkomt
      </h1>
      <p style={{ fontSize: 17, color: 'var(--text-secondary)', marginBottom: 40, lineHeight: 1.7 }}>
        Sinds 1 januari 2025 handhaaft de Belastingdienst actief op schijnzelfstandigheid. ZZP'ers en opdrachtgevers die feitelijk in een arbeidsrelatie werken terwijl ze een ZZP-constructie hanteren, kunnen worden gecorrigeerd met naheffingen en boetes. Wat is schijnzelfstandigheid precies en hoe zorg je dat je aan de goede kant staat?
      </p>

      <div className="card" style={{ padding: '20px 24px', marginBottom: 40, background: 'var(--accent-light)', border: '1px solid var(--accent)' }}>
        <div style={{ fontWeight: 600, marginBottom: 10, color: 'var(--accent-text)' }}>In het kort</div>
        <ul style={{ margin: 0, paddingLeft: 20 }}>
          {[
            'Schijnzelfstandigheid is wanneer een ZZP\'er feitelijk in loondienst werkt zonder de bijbehorende bescherming',
            'De Belastingdienst handhaaft actief sinds 2025 na jaren van gedoogbeleid',
            'Zowel opdrachtgever als opdrachtnemer lopen risico bij schijnzelfstandigheid',
            'Zelfstandigheid aantonen vereist meer dan een KVK-inschrijving en een contract',
          ].map(item => (
            <li key={item} style={{ marginBottom: 6, fontSize: 14, color: 'var(--accent-text)' }}>{item}</li>
          ))}
        </ul>
      </div>

      <div className="prose">
        <h2>Wat is schijnzelfstandigheid?</h2>
        <p>Schijnzelfstandigheid ontstaat wanneer iemand formeel als ZZP'er werkt, maar de werkelijke situatie kenmerken heeft van loondienst. De Belastingdienst en rechters kijken niet naar het etiket (ZZP'er of werknemer), maar naar de feiten: hoe ziet de arbeidsrelatie er in de praktijk uit?</p>
        <p>De wet spreekt van een arbeidsovereenkomst als er sprake is van drie elementen: arbeid verrichten, loon ontvangen, en het bestaan van een gezagsverhouding (de opdrachtgever bepaalt hoe, wanneer en waar het werk wordt uitgevoerd). Als alle drie aanwezig zijn, ongeacht wat er in het contract staat, is er fiscaal en arbeidsrechtelijk gezien sprake van loondienst.</p>
        <h3>Wanneer is er een gezagsverhouding?</h3>
        <p>Een gezagsverhouding bestaat als de opdrachtgever instructies geeft over de uitvoering van het werk, je werk integreert in de vaste bedrijfsprocessen, je werkt met bedrijfsmiddelen van de opdrachtgever, je aanwezig moet zijn op vaste tijden en locaties, of als je je werkzaamheden niet door een ander mag laten uitvoeren.</p>

        <h2>De Wet DBA en de handhaving in 2026</h2>
        <p>De Wet Deregulering Beoordeling Arbeidsrelaties (DBA) verving in 2016 de VAR-verklaring. De wet moest opdrachtgevers meer verantwoordelijkheid geven voor de kwalificatie van arbeidsrelaties. Na jaren van handhavingsmoratorium is de Belastingdienst per 1 januari 2025 volledig begonnen met handhaven.</p>
        <p>In 2026 worden inspecties steekproefsgewijs uitgevoerd, maar ook gericht bij bedrijven en sectoren waar schijnzelfstandigheid een bekend probleem is. Bijzondere aandacht gaat uit naar de zorg, bouw, IT, onderwijs en transport. De Belastingdienst kijkt daarbij naar de feitelijke werksituatie en niet alleen naar het contract.</p>
        <h3>Wat zijn de risico's?</h3>
        <p>Bij een geconstateerde schijnzelfstandigheid kan de Belastingdienst de opdrachtgever een naheffing opleggen voor niet-betaalde loonheffingen, premies werknemersverzekeringen en eventueel boetes. De naheffing kan tot 5 jaar terug worden opgelegd. Ook de opdrachtnemer kan worden gecorrigeerd: de zelfstandigenaftrek en startersaftrek worden teruggedraaid als achteraf blijkt dat er geen sprake was van ondernemerschap.</p>

        <h2>Hoe toon je echte zelfstandigheid aan?</h2>
        <p>De Belastingdienst beoordeelt zelfstandigheid aan de hand van een combinatie van factoren. Geen enkel kenmerk is doorslaggevend, maar hoe meer kenmerken van zelfstandigheid aanwezig zijn, hoe sterker je positie.</p>
        <h3>Kenmerken van echte zelfstandigheid</h3>
        <ul>
          <li>Je werkt voor meerdere opdrachtgevers tegelijk of opeenvolgend</li>
          <li>Je bepaalt zelf hoe en wanneer je het werk uitvoert</li>
          <li>Je kunt je laten vervangen door een ander</li>
          <li>Je draagt zelf ondernemersrisico (je bent aansprakelijk voor fouten)</li>
          <li>Je investeert zelf in bedrijfsmiddelen en vakkennis</li>
          <li>Je hebt eigen klanten geworven via acquisitie</li>
          <li>Je tarief ligt duidelijk hoger dan het marktloon voor vergelijkbaar werk in loondienst</li>
          <li>Je staat ingeschreven bij de KVK en hebt een actieve onderneming</li>
        </ul>
        <h3>Wat helpt niet</h3>
        <p>Alleen een KVK-inschrijving, een goedgekeurd modelcontract of een hoog uurtarief zijn op zichzelf onvoldoende bewijs van zelfstandigheid. Als de feitelijke situatie niet overeenkomt met de contractuele situatie, prevaleert de werkelijkheid. Een mooi contract dat de praktijk niet weergeeft, biedt geen bescherming.</p>

        <h2>Praktische maatregelen om schijnzelfstandigheid te voorkomen</h2>
        <p>Zorg voor voldoende spreiding: werk niet jarenlang exclusief voor één opdrachtgever. Richt je bedrijfsprocessen in als een echte ondernemer: stuur facturen, gebruik je eigen tools, stel je eigen werktijden vast. Leg in het contract expliciet vast dat je het recht hebt je te laten vervangen en dat je vrij bent in de uitvoering van het werk.</p>
        <p>Gebruik modelovereenkomsten van de Belastingdienst als basis, maar pas ze aan op de werkelijke situatie. Bewaar bewijs van je ondernemerschap: meerdere klanten, eigen acquisitie, investeringen in materiaal of opleiding. Bij twijfel: raadpleeg een fiscalist of arbeidsrechtjurist voordat je een lange opdracht aanvaardt die kenmerken van loondienst heeft.</p>
      </div>

      <div style={{ background: 'var(--accent-light)', border: '1px solid var(--accent)', borderRadius: 16, padding: '28px 32px', textAlign: 'center', marginTop: 48 }}>
        <h3 style={{ fontSize: 20, fontWeight: 700, marginTop: 0, marginBottom: 8, color: 'var(--accent-text)' }}>Meerdere opdrachtgevers, nette boekhouding</h3>
        <p style={{ color: 'var(--accent-text)', margin: '0 0 20px', opacity: 0.85 }}>Bewijs je ondernemerschap met een professionele administratie. Vergelijk boekhoudprogramma's die ZZP'ers dagelijks gebruiken.</p>
        <a href="/boekhoudprogramma" className="btn-primary" style={{ fontSize: 15, padding: '12px 28px' }}>Vergelijk software →</a>
      </div>
    </div>
  )
}
