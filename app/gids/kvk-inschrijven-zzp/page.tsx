import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: "KVK inschrijven ZZP: stap voor stap (2026)",
  description: "Hoe schrijf je je in bij de KVK als ZZP'er? Kosten €75, benodigde documenten, eenmanszaak of BV en wat je daarna moet regelen.",
}

export default function KvkInschrijvenZzpPage() {
  return (
    <div style={{ maxWidth: 780, margin: '0 auto', padding: '48px 24px' }}>
      <div style={{ fontSize: 13, color: 'var(--text-tertiary)', marginBottom: 24 }}>
        <a href="/" style={{ color: 'var(--text-tertiary)' }}>Home</a> / <a href="/gids" style={{ color: 'var(--text-tertiary)' }}>Gidsen</a> / KVK inschrijven als ZZP&apos;er
      </div>

      <div style={{ display: 'flex', gap: 8, marginBottom: 20, flexWrap: 'wrap' }}>
        <span className="badge badge-green">Starten</span>
        <span style={{ fontSize: 13, color: 'var(--text-tertiary)' }}>Bijgewerkt mei 2026 · 6 min leestijd</span>
      </div>

      <h1 style={{ fontSize: 'clamp(26px, 4vw, 38px)', fontWeight: 700, marginBottom: 16, lineHeight: 1.2 }}>
        KVK inschrijven als ZZP&apos;er: stap voor stap uitgelegd (2026)
      </h1>
      <p style={{ fontSize: 17, color: 'var(--text-secondary)', marginBottom: 40, lineHeight: 1.7 }}>
        Voordat je als zelfstandige aan de slag kunt, moet je je onderneming inschrijven bij de Kamer van Koophandel. Dit is verplicht in Nederland. In deze gids leggen we precies uit hoe je dat doet, wat het kost en wat je na de inschrijving moet regelen.
      </p>

      <div className="card" style={{ padding: '20px 24px', marginBottom: 40, background: 'var(--accent-light)', border: '1px solid var(--accent)' }}>
        <div style={{ fontWeight: 600, marginBottom: 10, color: 'var(--accent-text)' }}>In het kort</div>
        <ul style={{ margin: 0, paddingLeft: 20 }}>
          {[
            'Inschrijven bij de KVK is verplicht zodra je als ondernemer actief bent',
            "Eenmanszaak is de meest gekozen rechtsvorm voor ZZP'ers — geen notaris nodig",
            'Inschrijfkosten: €75 eenmalig (2026)',
            'Na inschrijving ontvang je automatisch een BTW-nummer van de Belastingdienst',
          ].map(item => (
            <li key={item} style={{ marginBottom: 6, fontSize: 14, color: 'var(--accent-text)' }}>{item}</li>
          ))}
        </ul>
      </div>

      <div className="prose">
        <h2>Wanneer moet je je inschrijven bij de KVK?</h2>
        <p>
          Je bent verplicht om je in te schrijven bij de KVK zodra je een onderneming start — ook als je maar een paar uur per week werkt als freelancer. Schrijf je in vóórdat je je eerste factuur verstuurt: zonder inschrijving facturen sturen kan leiden tot boetes.
        </p>

        <h2>Welke rechtsvorm kies je?</h2>
        <p>
          De meeste ZZP&apos;ers kiezen voor een <strong>eenmanszaak</strong>: eenvoudig, geen notaris nodig, geen minimumkapitaal. Het nadeel: privé aansprakelijkheid voor schulden.
        </p>
        <p>
          Een <strong>BV</strong> is interessant bij een jaarwinst boven circa €100.000 of als je aansprakelijkheidsrisico wilt beperken. De oprichtingskosten liggen rond de €500–€1.000.
        </p>

        <h2>Stap voor stap inschrijven bij de KVK</h2>

        <h3>Stap 1: Maak een afspraak</h3>
        <p>
          Je kunt bij elk KVK-kantoor terecht. Een afspraak maken kan via kvk.nl. In de meeste gevallen moet je ook langskomen met een geldig legitimatiebewijs om de inschrijving te voltooien.
        </p>

        <h3>Stap 2: Neem de juiste documenten mee</h3>
        <p>
          Voor een eenmanszaak heb je alleen een geldig paspoort of rijbewijs nodig. Voor een VOF of BV zijn aanvullende documenten of een notariële akte vereist.
        </p>

        <h3>Stap 3: Vul het inschrijfformulier in</h3>
        <p>
          Je geeft op: handelsnaam, SBI-code (sector), adres en startdatum. De SBI-code bepaalt je branche-indeling en heeft geen directe fiscale gevolgen.
        </p>

        <h3>Stap 4: Betaal de inschrijfkosten</h3>
        <p>
          Eenmalige kosten in 2026: <strong>€75</strong>. Daarna zijn er geen jaarlijkse KVK-kosten.
        </p>

        <h2>Wat gebeurt er na de inschrijving?</h2>
        <p>
          Je ontvangt een KVK-nummer (8 cijfers) dat op alle zakelijke documenten moet staan. Binnen enkele dagen stuurt de Belastingdienst je BTW-nummer per post.
        </p>
        <p>
          Direct na inschrijving regelen:
        </p>
        <ul>
          <li>Open een zakelijke bankrekening</li>
          <li>Kies een boekhoudprogramma — vergelijk de opties op <a href="/boekhoudprogramma" style={{ color: 'var(--accent)' }}>onze vergelijkingspagina</a></li>
          <li>Overweeg een arbeidsongeschiktheidsverzekering (AOV)</li>
          <li>Controleer of je BTW-plichtig bent of voor de <a href="/gids/kor-kleine-ondernemersregeling" style={{ color: 'var(--accent)' }}>KOR</a> kiest</li>
        </ul>
        <p>
          Populaire boekhoudprogramma&apos;s voor starters zijn <a href="/tools/moneybird" style={{ color: 'var(--accent)' }}>Moneybird</a> (gratis instapversie), <a href="/tools/jortt" style={{ color: 'var(--accent)' }}>Jortt</a> (eenvoudig, v.a. €7/mnd) en <a href="/tools/e-boekhouden" style={{ color: 'var(--accent)' }}>e-Boekhouden</a> (v.a. €9/mnd).
        </p>

        <h2>KVK-nummer vs. BTW-nummer: het verschil</h2>
        <p>
          Je KVK-nummer staat in het openbare Handelsregister. Je BTW-nummer gebruik je op facturen en in fiscale communicatie. Voor een eenmanszaak vraag je bij de Belastingdienst een apart zakelijk BTW-identificatienummer aan — dat beschermt je BSN-nummer op facturen.
        </p>
      </div>

      <div style={{ background: 'var(--accent-light)', border: '1px solid var(--accent)', borderRadius: 16, padding: '28px 32px', textAlign: 'center', marginTop: 48 }}>
        <h3 style={{ fontSize: 20, fontWeight: 700, marginTop: 0, marginBottom: 8, color: 'var(--accent-text)' }}>Klaar om je administratie op te zetten?</h3>
        <p style={{ color: 'var(--accent-text)', margin: '0 0 20px', opacity: 0.85 }}>Vergelijk de beste boekhoudprogramma&apos;s voor ZZP&apos;ers en start goed van begin af aan.</p>
        <a href="/boekhoudprogramma" className="btn-primary" style={{ fontSize: 15, padding: '12px 28px' }}>Vergelijk boekhoudprogramma&apos;s →</a>
      </div>
    </div>
  )
}
