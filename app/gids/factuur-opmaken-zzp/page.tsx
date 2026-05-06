import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: "Factuur opmaken ZZP: wettelijke eisen 2026",
  description: "Wat moet er verplicht op een factuur als ZZP'er? Wettelijke eisen, voorbeeld en 5 tips om sneller betaald te worden.",
}

export default function FactuurOpmakenGidsPage() {
  return (
    <div style={{ maxWidth: 780, margin: '0 auto', padding: '48px 24px' }}>
      <div style={{ fontSize: 13, color: 'var(--text-tertiary)', marginBottom: 24 }}>
        <a href="/" style={{ color: 'var(--text-tertiary)' }}>Home</a> / <a href="/gids" style={{ color: 'var(--text-tertiary)' }}>Gidsen</a> / Factuur opmaken ZZP
      </div>

      <div style={{ display: 'flex', gap: 8, marginBottom: 20, flexWrap: 'wrap' }}>
        <span className="badge badge-green">Facturatie</span>
        <span style={{ fontSize: 13, color: 'var(--text-tertiary)' }}>Bijgewerkt mei 2026 · 6 min leestijd</span>
      </div>

      <h1 style={{ fontSize: 'clamp(26px, 4vw, 38px)', fontWeight: 700, marginBottom: 16, lineHeight: 1.2 }}>
        Factuur opmaken als ZZP&apos;er: wat moet erin? (2026)
      </h1>
      <p style={{ fontSize: 17, color: 'var(--text-secondary)', marginBottom: 40, lineHeight: 1.7 }}>
        Een correcte factuur sturen is cruciaal: het is de basis van je inkomsten én je BTW-administratie. Mis je één verplicht onderdeel? Dan kan je klant de factuur weigeren of mag de Belastingdienst de BTW niet erkennen.
      </p>

      <div className="card" style={{ padding: '20px 24px', marginBottom: 40, background: 'var(--accent-light)', border: '1px solid var(--accent)' }}>
        <div style={{ fontWeight: 600, marginBottom: 12, color: 'var(--accent-text)' }}>Verplichte onderdelen op een factuur</div>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: 8 }}>
          {[
            'Naam en adres van je bedrijf',
            'Naam en adres van je klant',
            'KVK-nummer',
            'BTW-nummer (OB-nummer)',
            'Uniek factuurnummer',
            'Factuurdatum',
            'Omschrijving van de dienst/product',
            'Bedrag exclusief BTW',
            'BTW-percentage en BTW-bedrag',
            'Totaalbedrag inclusief BTW',
            'Betalingstermijn',
            'Bankrekeningnummer (IBAN)',
          ].map(item => (
            <div key={item} style={{ display: 'flex', gap: 8, fontSize: 14, color: 'var(--accent-text)' }}>
              <span style={{ flexShrink: 0 }}>✓</span><span>{item}</span>
            </div>
          ))}
        </div>
      </div>

      <div className="prose">
        <h2>De verplichte factuurvereisten uitgelegd</h2>

        <h3>1. Naam, adres en KVK-nummer</h3>
        <p>
          Zet je volledige bedrijfsnaam en zakelijk adres op de factuur. KVK-nummer en BTW-nummer zijn allebei verplicht. Het BTW-nummer (NL123456789B01) ontvang je van de Belastingdienst na inschrijving bij de KVK.
        </p>

        <h3>2. Uniek factuurnummer</h3>
        <p>
          Elk factuurnummer moet uniek en opeenvolgend zijn — je mag geen nummers overslaan. Veel ZZP&apos;ers beginnen met 2026001, 2026002 enzovoort. <a href="/tools/moneybird" style={{ color: 'var(--accent)' }}>Moneybird</a> en <a href="/tools/jortt" style={{ color: 'var(--accent)' }}>Jortt</a> nummeren facturen automatisch. Is er een fout? Maak een creditnota — nooit een factuur aanpassen of verwijderen.
        </p>

        <h3>3. Duidelijke omschrijving</h3>
        <p>
          Omschrijf specifiek wat je hebt geleverd. "Websiteontwerp voor klant X, zoals beschreven in offerte #2026-003, inclusief 3 revisierondes" is beter dan "consultancywerkzaamheden april 2026". Hoe specifieker, hoe minder discussie achteraf.
        </p>

        <h3>4. BTW-bedragen</h3>
        <p>
          Vermeld het bedrag exclusief BTW, het percentage (21%, 9% of 0%), het BTW-bedrag en het totaal inclusief BTW. Bij meerdere posten met verschillende tarieven: een aparte regel per tarief.
        </p>

        <h3>5. Betalingstermijn en IBAN</h3>
        <p>
          Standaard in Nederland is 30 dagen, maar je mag dit zelf kiezen. Voeg een QR-code toe — <a href="/tools/snelstart" style={{ color: 'var(--accent)' }}>SnelStart</a> en <a href="/tools/e-boekhouden" style={{ color: 'var(--accent)' }}>e-Boekhouden</a> genereren dit automatisch en je wordt sneller betaald.
        </p>

        <h2>Voorbeeld: zo ziet een correcte factuur eruit</h2>
      </div>

      <div className="card" style={{ padding: 24, marginBottom: 32, fontFamily: 'monospace', fontSize: 13 }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: 20, flexWrap: 'wrap', gap: 16 }}>
          <div>
            <div style={{ fontWeight: 700, fontSize: 16, fontFamily: 'var(--font-sans)' }}>Jan Jansen Webdesign</div>
            <div style={{ color: 'var(--text-secondary)' }}>Voorbeeldstraat 12</div>
            <div style={{ color: 'var(--text-secondary)' }}>1234 AB Amsterdam</div>
            <div style={{ color: 'var(--text-secondary)', marginTop: 8 }}>KVK: 12345678</div>
            <div style={{ color: 'var(--text-secondary)' }}>BTW: NL123456789B01</div>
          </div>
          <div style={{ textAlign: 'right' }}>
            <div style={{ fontSize: 22, fontWeight: 700, fontFamily: 'var(--font-sans)', color: 'var(--accent)' }}>FACTUUR</div>
            <div style={{ color: 'var(--text-secondary)' }}>Factuurnummer: 2026-042</div>
            <div style={{ color: 'var(--text-secondary)' }}>Datum: 5 mei 2026</div>
            <div style={{ color: 'var(--text-secondary)' }}>Vervaldatum: 4 juni 2026</div>
          </div>
        </div>
        <div style={{ borderTop: '1px solid var(--border)', paddingTop: 16, marginBottom: 16 }}>
          <div style={{ color: 'var(--text-secondary)', fontSize: 11, textTransform: 'uppercase', letterSpacing: '0.05em', marginBottom: 6 }}>Factuur aan</div>
          <div style={{ fontWeight: 600 }}>Bedrijf B.V.</div>
          <div style={{ color: 'var(--text-secondary)' }}>Klantenweg 99, 5678 CD Rotterdam</div>
        </div>
        <table style={{ width: '100%', borderCollapse: 'collapse', marginBottom: 16 }}>
          <thead>
            <tr style={{ borderBottom: '1px solid var(--border)', textAlign: 'left' }}>
              <th style={{ padding: '6px 0', color: 'var(--text-secondary)', fontWeight: 600 }}>Omschrijving</th>
              <th style={{ padding: '6px 0', color: 'var(--text-secondary)', fontWeight: 600, textAlign: 'right' }}>Bedrag</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td style={{ padding: '8px 0', color: 'var(--text-secondary)' }}>Websiteontwerp – april 2026 (offerte #2026-003)</td>
              <td style={{ padding: '8px 0', textAlign: 'right' }}>€ 2.000,00</td>
            </tr>
          </tbody>
        </table>
        <div style={{ borderTop: '1px solid var(--border)', paddingTop: 12 }}>
          {[['Subtotaal excl. BTW', '€ 2.000,00'], ['BTW 21%', '€ 420,00']].map(([label, amount]) => (
            <div key={label} style={{ display: 'flex', justifyContent: 'space-between', marginBottom: 6, color: 'var(--text-secondary)' }}>
              <span>{label}</span><span>{amount}</span>
            </div>
          ))}
          <div style={{ display: 'flex', justifyContent: 'space-between', fontWeight: 700, fontSize: 15, borderTop: '1px solid var(--border)', paddingTop: 8, marginTop: 4 }}>
            <span>Totaal incl. BTW</span><span style={{ color: 'var(--accent)' }}>€ 2.420,00</span>
          </div>
        </div>
        <div style={{ marginTop: 20, padding: '12px 16px', background: 'var(--bg-subtle)', borderRadius: 8, color: 'var(--text-secondary)', fontSize: 12 }}>
          Betaling binnen 30 dagen op NL12 ABNA 0123 4567 89 t.n.v. Jan Jansen. Vermeld bij betaling factuurnummer 2026-042.
        </div>
      </div>

      <div className="prose">
        <h2>Speciale situaties</h2>

        <h3>Facturen voor buitenlandse klanten (EU)</h3>
        <p>
          Lever je B2B aan een bedrijf in de EU? Dan mag je 0% BTW hanteren als je klant een geldig BTW-nummer heeft. Vermeld dit op je factuur: "BTW verlegd" of "VAT reverse charged". Controleer het BTW-nummer via het VIES-systeem.
        </p>

        <h3>Creditnota</h3>
        <p>
          Fout op een factuur? Maak een creditnota aan — nooit een factuur aanpassen of verwijderen. Stuur daarna een nieuwe correcte factuur.
        </p>

        <h2>5 tips om sneller betaald te worden</h2>
        <ul>
          <li><strong>Stuur direct:</strong> factureer dezelfde dag dat je de werkzaamheden afrond</li>
          <li><strong>Kortere termijn:</strong> gebruik 14 dagen in plaats van 30 als de klant het accepteert</li>
          <li><strong>QR-code:</strong> klanten betalen direct via hun telefoon</li>
          <li><strong>Automatische herinneringen:</strong> stel een herinnering in na 7 en 14 dagen</li>
          <li><strong>Aanbetaling:</strong> vraag bij grotere projecten 30–50% vooraf</li>
        </ul>

        <h2>Het beste factuurprogramma voor ZZP&apos;ers</h2>
        <p>
          Een goed factuurprogramma nummert automatisch, koppelt met je bank en stuurt herinneringen. Populaire keuzes:
        </p>
        <ul>
          <li><a href="/tools/moneybird" style={{ color: 'var(--accent)' }}>Moneybird</a> — mooiste ontwerp, QR-code, gratis instapversie</li>
          <li><a href="/tools/jortt" style={{ color: 'var(--accent)' }}>Jortt</a> — simpelste interface, snel een factuur sturen</li>
          <li><a href="/tools/snelstart" style={{ color: 'var(--accent)' }}>SnelStart</a> — uitgebreid met offertes en inkoopfacturen</li>
        </ul>
      </div>

      <div style={{ background: 'var(--accent-light)', border: '1px solid var(--accent)', borderRadius: 16, padding: '28px 32px', textAlign: 'center', marginTop: 32 }}>
        <h3 style={{ fontSize: 20, fontWeight: 700, marginTop: 0, marginBottom: 8, color: 'var(--accent-text)' }}>Vergelijk alle factuurprogramma&apos;s</h3>
        <p style={{ color: 'var(--accent-text)', margin: '0 0 20px', opacity: 0.85 }}>Bekijk onze vergelijking van de beste boekhoudprogramma&apos;s voor ZZP&apos;ers op prijs, functies en gebruiksgemak.</p>
        <a href="/boekhoudprogramma" className="btn-primary" style={{ fontSize: 15, padding: '12px 28px' }}>Vergelijk boekhoudprogramma&apos;s →</a>
      </div>
    </div>
  )
}
