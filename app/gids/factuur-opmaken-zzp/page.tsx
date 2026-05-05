import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: "Factuur opmaken als ZZP'er 2026: wat moet erin?",
  description: "Wat moet er verplicht op een factuur als ZZP'er? Wettelijke eisen, een voorbeeldfactuur en tips voor sneller betaald worden.",
}

export default function FactuurOpmakenGidsPage() {
  return (
    <div style={{ maxWidth: 780, margin: '0 auto', padding: '48px 24px' }}>
      <div style={{ fontSize: 13, color: 'var(--text-tertiary)', marginBottom: 24 }}>
        <a href="/" style={{ color: 'var(--text-tertiary)' }}>Home</a> / <a href="/gids" style={{ color: 'var(--text-tertiary)' }}>Gidsen</a> / Factuur opmaken ZZP
      </div>

      <div style={{ display: 'flex', gap: 8, marginBottom: 20, flexWrap: 'wrap' }}>
        <span className="badge badge-green">Facturatie</span>
        <span style={{ fontSize: 13, color: 'var(--text-tertiary)' }}>📅 Bijgewerkt mei 2026 · ⏱ 6 min leestijd</span>
      </div>

      <h1 style={{ fontSize: 'clamp(26px, 4vw, 38px)', fontWeight: 700, marginBottom: 16, lineHeight: 1.2 }}>
        Factuur opmaken als ZZP'er: wat moet erin? (2026)
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

        <h3>1. Naam en adres</h3>
        <p>
          Zet je volledige bedrijfsnaam (of je eigen naam als je als eenmanszaak werkt) en je zakelijk adres op de factuur. Als je thuiswerkt mag dat je privéadres zijn. Zet ook het adres van je klant erop — dit is verplicht en voorkomt discussies.
        </p>

        <h3>2. KVK-nummer en BTW-nummer</h3>
        <p>
          Beide zijn verplicht vermeld te staan. Het KVK-nummer staat in je inschrijving bij de Kamer van Koophandel. Je BTW-nummer (ook wel OB-nummer of omzetbelastingnummer) krijg je van de Belastingdienst na aanmelding als ondernemer. Het ziet eruit als: NL123456789B01.
        </p>

        <h3>3. Uniek factuurnummer</h3>
        <p>
          Elk factuurnummer moet uniek zijn en opeenvolgend genummerd — je mag geen nummers overslaan. Veel ZZP'ers beginnen met 2026001, 2026002 enzovoorts. Boekhoudprogramma's doen dit automatisch. <strong>Let op:</strong> je mag een factuurnummer niet achteraf wijzigen of verwijderen. Is er een fout? Maak een creditnota aan.
        </p>

        <h3>4. Datum</h3>
        <p>
          De factuurdatum is de datum waarop je de factuur verstuurt, niet de datum waarop de werkzaamheden zijn uitgevoerd. In principe moet je factureren binnen een maand na de prestatie, maar in de praktijk wijkt hier niemand van af.
        </p>

        <h3>5. Omschrijving van de dienst of het product</h3>
        <p>
          Omschrijf duidelijk wat je hebt geleverd. "Consultancywerkzaamheden april 2026" is te vaag. Beter: "Websiteontwerp voor klant X, zoals beschreven in offerte #2026-003, inclusief 3 revisierondes." Hoe specifieker, hoe minder discussie achteraf.
        </p>

        <h3>6. BTW-bedragen</h3>
        <p>
          Vermeld het bedrag exclusief BTW, het BTW-percentage (21%, 9% of 0%), het BTW-bedrag en het totaalbedrag inclusief BTW. Bij meerdere posten met verschillende tarieven: een aparte regel per tarief.
        </p>

        <h3>7. Betalingstermijn en IBAN</h3>
        <p>
          Standaard in Nederland is 30 dagen betalingstermijn, maar je mag dit zelf kiezen. Vermeld ook je IBAN zodat je klant direct kan betalen. Tip: voeg een QR-code toe — moderne factuurprogramma's doen dit automatisch en je wordt sneller betaald.
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

        <h3>Facturen voor particulieren (B2C)</h3>
        <p>
          Lever je aan particulieren? Dan hoef je niet per se een factuur te sturen — een kassabon of bonnetje volstaat. Toch is een factuur verstandig: het voorkomt discussies en is netjes. Wil je een vereenvoudigde factuur sturen? Dan mag je het BTW-nummer weglaten als het bedrag onder de €100 (incl. BTW) blijft.
        </p>

        <h3>Facturen voor buitenlandse klanten (EU)</h3>
        <p>
          Lever je B2B aan een bedrijf in de EU? Dan mag je 0% BTW hanteren (intracommunautaire levering) als je klant een geldig BTW-nummer heeft. Vermeld dit BTW-nummer op je factuur en voeg toe: "BTW verlegd" of "VAT reverse charged". Controleer het BTW-nummer altijd via het VIES-systeem van de Europese Commissie.
        </p>

        <h3>Creditnota</h3>
        <p>
          Is er een fout op een factuur? Je mag facturen nooit verwijderen of aanpassen — dat is verplicht om je administratie sluitend te houden. Maak in plaats daarvan een creditnota aan: een negatieve factuur die de originele annuleert. Stuur daarna een nieuwe correcte factuur.
        </p>

        <h2>Tips voor sneller betaald worden</h2>
        <ul>
          <li><strong>Stuur direct:</strong> stuur de factuur dezelfde dag als je de werkzaamheden afrond, niet aan het eind van de maand.</li>
          <li><strong>Kortere betalingstermijn:</strong> gebruik 14 dagen in plaats van 30 als je klant het accepteert.</li>
          <li><strong>QR-code met betaallink:</strong> klanten betalen direct via hun telefoon — veel factuurprogramma's genereren dit automatisch.</li>
          <li><strong>Automatische herinneringen:</strong> stel een herinnering in na 7 en 14 dagen. De meeste boekhoudapps doen dit automatisch.</li>
          <li><strong>Vooruitbetaling of aanbetaling:</strong> bij grotere projecten is het normaal om 30-50% vooraf te vragen.</li>
        </ul>

        <h2>Het beste factuurprogramma voor ZZP'ers</h2>
        <p>
          Een goed factuurprogramma stuurt automatisch herinneringen, koppelt met je bank, berekent de BTW en houdt je factuurnummering bij. De drie beste opties:
        </p>
      </div>

      <div style={{ display: 'flex', flexDirection: 'column', gap: 14, marginTop: 8, marginBottom: 40 }}>
        {[
          { name: 'Moneybird', slug: 'moneybird', desc: 'Mooiste factuurontwerp, automatische herinneringen, QR-code', price: 'Gratis / €14/mnd' },
          { name: 'Jortt', slug: 'jortt', desc: 'Simpelste interface, snel een factuur maken', price: 'Vanaf €7/mnd' },
          { name: 'Snelstart', slug: 'snelstart', desc: 'Uitgebreide opties inclusief offertes en inkoopfacturen', price: 'Vanaf €9/mnd' },
        ].map(tool => (
          <div key={tool.slug} className="card" style={{ padding: '16px 20px', display: 'flex', justifyContent: 'space-between', alignItems: 'center', gap: 12, flexWrap: 'wrap' }}>
            <div>
              <span style={{ fontWeight: 600 }}>{tool.name}</span>
              <span style={{ fontSize: 13, color: 'var(--text-secondary)', marginLeft: 10 }}>{tool.desc}</span>
            </div>
            <div style={{ display: 'flex', gap: 8, alignItems: 'center' }}>
              <span style={{ fontSize: 13, color: 'var(--text-tertiary)' }}>{tool.price}</span>
              <a href={`/tools/${tool.slug}`} className="btn-secondary" style={{ fontSize: 13, padding: '6px 14px' }}>Lees review</a>
            </div>
          </div>
        ))}
      </div>

      <div style={{ background: 'var(--accent-light)', border: '1px solid var(--accent)', borderRadius: 16, padding: '28px 32px', textAlign: 'center', marginTop: 16 }}>
        <h3 style={{ fontSize: 20, fontWeight: 700, marginTop: 0, marginBottom: 8, color: 'var(--accent-text)' }}>Vergelijk alle factuurprogramma's</h3>
        <p style={{ color: 'var(--accent-text)', margin: '0 0 20px', opacity: 0.85 }}>Bekijk onze vergelijking van de beste factuurprogramma's voor ZZP'ers.</p>
        <a href="/factuurprogramma" className="btn-primary" style={{ fontSize: 15, padding: '12px 28px' }}>Bekijk factuurprogramma's →</a>
      </div>
    </div>
  )
}
