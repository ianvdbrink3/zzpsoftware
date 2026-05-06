import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: "Boekhouden ZZP: Complete Gids 2026",
  description: "Alles over boekhouden als ZZP'er: bewaarplicht, BTW-aangifte, kosten aftrekken en de beste software. Bespaar 3 uur per maand.",
}

export default function BoekhoudenGidsPage() {
  return (
    <div style={{ maxWidth: 780, margin: '0 auto', padding: '48px 24px' }}>
      <div style={{ fontSize: 13, color: 'var(--text-tertiary)', marginBottom: 24 }}>
        <a href="/" style={{ color: 'var(--text-tertiary)' }}>Home</a> / <a href="/gids" style={{ color: 'var(--text-tertiary)' }}>Gidsen</a> / Boekhouden als ZZP'er
      </div>
      <div style={{ display: 'flex', gap: 8, marginBottom: 20, flexWrap: 'wrap' }}>
        <span className="badge badge-green">Boekhouden</span>
        <span style={{ fontSize: 13, color: 'var(--text-tertiary)' }}>Bijgewerkt mei 2026 · 12 min leestijd</span>
      </div>
      <h1 style={{ fontSize: 'clamp(26px, 4vw, 38px)', fontWeight: 700, marginBottom: 16, lineHeight: 1.2 }}>
        Boekhouden als ZZP'er: de complete gids 2026
      </h1>
      <p style={{ fontSize: 17, color: 'var(--text-secondary)', marginBottom: 40, lineHeight: 1.7 }}>
        Als ZZP'er ben je verplicht een administratie bij te houden. Maar wat houdt dat precies in, welke regels gelden er en hoe doe je het zo efficiënt mogelijk? In deze gids krijg je een helder overzicht — inclusief de beste tools om tijd te besparen.
      </p>

      <div className="card" style={{ padding: '20px 24px', marginBottom: 40, background: 'var(--accent-light)', border: '1px solid var(--accent)' }}>
        <div style={{ fontWeight: 600, marginBottom: 10, color: 'var(--accent-text)' }}>In het kort</div>
        <ul style={{ margin: 0, paddingLeft: 20 }}>
          {[
            "Bewaarplicht: alle administratie minimaal 7 jaar bewaren",
            "Elk kwartaal BTW-aangifte doen (tenzij je de KOR hebt)",
            "Inkomstenbelasting betaal je over je winst (omzet minus kosten)",
            "Goed boekhoudprogramma bespaart 3–5 uur per maand",
          ].map(item => (
            <li key={item} style={{ marginBottom: 6, fontSize: 14, color: 'var(--accent-text)' }}>{item}</li>
          ))}
        </ul>
      </div>

      <div className="prose">
        <h2>Waarom is boekhouden verplicht voor ZZP'ers?</h2>
        <p>
          De Belastingdienst verplicht iedere ondernemer — ook ZZP'ers — om een volledige administratie bij te houden. Niet alleen voor de belasting: een goede boekhouding geeft jou ook inzicht in je financiële situatie. Je ziet precies wat je verdient, wat je kosten zijn en of je winst maakt.
        </p>
        <p>
          De <strong>bewaarplicht</strong> bedraagt 7 jaar. Alles wat je vastlegt — facturen, bankafschriften, bonnen, contracten — moet je minimaal zeven jaar kunnen overleggen als de Belastingdienst erom vraagt.
        </p>

        <h2>Wat hoort er in je administratie?</h2>
        <p>Een volledige ZZP-administratie bestaat uit vier onderdelen:</p>

        <h3>1. Verkoopfacturen</h3>
        <p>
          Elke dienst of product die je levert, factuur je aan je klant. Een correcte factuur bevat je naam, adres, KVK-nummer, BTW-nummer, een uniek factuurnummer, datum, omschrijving, bedrag excl. BTW en totaalbedrag incl. BTW. Moderne <a href="/boekhoudprogramma" style={{ color: 'var(--accent)' }}>boekhoudprogramma's voor ZZP'ers</a> nummeren facturen automatisch en bewaren ze in de cloud.
        </p>

        <h3>2. Inkoopfacturen en bonnen</h3>
        <p>
          Alle zakelijke uitgaven bewaar je: kantoormateriaal, softwareabonnementen, reiskosten, telefoon, trainingen. Gebruik een bonnenscanner-app om papieren bonnen direct digitaal te archiveren. De Belastingdienst accepteert digitale kopieën als ze leesbaar en volledig zijn.
        </p>

        <h3>3. Bankafschriften</h3>
        <p>
          Houd zakelijk en privé strikt gescheiden — open een aparte zakelijke bankrekening. De meeste boekhoudprogramma's koppelen direct met je bank, zodat transacties automatisch worden geïmporteerd en gecategoriseerd.
        </p>

        <h3>4. Urenstaat</h3>
        <p>
          Voor de <a href="/gids/zelfstandigenaftrek-2026" style={{ color: 'var(--accent)' }}>zelfstandigenaftrek</a> moet je minimaal 1.225 uur per jaar aan je onderneming besteden. Houd dit bij — ook al is het niet strikt verplicht, het beschermt je bij een eventuele controle.
        </p>

        <h2>BTW-aangifte als ZZP'er</h2>
        <p>
          De meeste ZZP'ers doen elk kwartaal BTW-aangifte. Je berekent het verschil tussen ontvangen BTW (van klanten) en betaalde BTW (op zakelijke kosten). Dat verschil draag je af aan de Belastingdienst — of je krijgt het terug.
        </p>
        <p>
          Deadlines: 30 april (Q1), 31 juli (Q2), 31 oktober (Q3) en 31 januari (Q4). Te laat? Minimaal €68 boete. Tools zoals <a href="/tools/moneybird" style={{ color: 'var(--accent)' }}>Moneybird</a> berekenen je BTW automatisch en dienen de aangifte met één klik in bij de Belastingdienst.
        </p>

        <h2>Inkomstenbelasting als ZZP'er</h2>
        <p>
          Je betaalt inkomstenbelasting over je winst: omzet minus aftrekbare kosten. De belangrijkste aftrekposten zijn:
        </p>
        <ul>
          <li><strong>Zelfstandigenaftrek:</strong> €2.470 (2026) bij meer dan 1.225 gewerkte uren</li>
          <li><strong>Startersaftrek:</strong> extra €2.123 in de eerste drie jaar</li>
          <li><strong>MKB-winstvrijstelling:</strong> 13,31% vrijstelling op je winst</li>
        </ul>
        <p>
          Reserveer maandelijks 25–30% van je omzet voor belasting, zodat je nooit voor verrassingen staat.
        </p>

        <h2>Zelf boekhouden of uitbesteden?</h2>
        <p>
          Met de juiste software doe je je eigen boekhouding in 1–2 uur per maand. Een boekhouder kost €100–300 per maand — dat loont pas als je omzet boven de €80.000 stijgt, je personeel in dienst neemt of je liever je tijd besteedt aan je vak.
        </p>
        <p>
          Voor de meeste ZZP'ers is zelf boekhouden de slimste keuze. Bekijk onze <a href="/boekhoudprogramma" style={{ color: 'var(--accent)' }}>vergelijking van de beste boekhoudprogramma's</a> om te zien welke tool het beste bij jou past.
        </p>

        <h2>Veelgemaakte fouten bij ZZP-administratie</h2>
        <ul>
          <li><strong>Privé en zakelijk mengen:</strong> gebruik altijd een aparte zakelijke rekening</li>
          <li><strong>Bonnen weggooien:</strong> scan ze direct met je telefoon</li>
          <li><strong>BTW niet reserveren:</strong> zet 21% van elke factuur opzij</li>
          <li><strong>Te laat beginnen:</strong> start meteen bij je eerste factuur</li>
          <li><strong>Uren niet bijhouden:</strong> je verliest de zelfstandigenaftrek als je de urennorm niet haalt</li>
        </ul>

        <h2>Conclusie</h2>
        <p>
          Boekhouden hoeft niet ingewikkeld te zijn. Met een goed programma ben je er maandelijks 1–2 uur mee bezig. Begin direct, doe het consequent en kies een tool die bij je werkniveau past.
        </p>
      </div>

      <div style={{ background: 'var(--accent-light)', border: '1px solid var(--accent)', borderRadius: 16, padding: '28px 32px', textAlign: 'center', marginTop: 48 }}>
        <h3 style={{ fontSize: 20, fontWeight: 700, marginTop: 0, marginBottom: 8, color: 'var(--accent-text)' }}>Klaar om je boekhouding te automatiseren?</h3>
        <p style={{ color: 'var(--accent-text)', margin: '0 0 20px', opacity: 0.85 }}>Vergelijk de 6 beste boekhoudprogramma's voor ZZP'ers op prijs, functies en gebruiksgemak.</p>
        <a href="/boekhoudprogramma" className="btn-primary" style={{ fontSize: 15, padding: '12px 28px' }}>Bekijk de vergelijking →</a>
      </div>
    </div>
  )
}
