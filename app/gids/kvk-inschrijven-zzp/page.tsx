import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: "KVK Inschrijven als ZZP'er — Stap voor Stap (2026)",
  description: "Alles over inschrijven bij de KVK als ZZP'er: kosten, benodigde documenten, rechtsvorm kiezen en wat je daarna moet regelen.",
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
        KVK inschrijven als ZZP&apos;er: stap voor stap uitgelegd
      </h1>
      <p style={{ fontSize: 17, color: 'var(--text-secondary)', marginBottom: 40, lineHeight: 1.7 }}>
        Voordat je als zelfstandige aan de slag kunt, moet je je onderneming inschrijven bij de Kamer van Koophandel. Dit is verplicht in Nederland. In deze gids leggen we precies uit hoe je dat doet, wat het kost en wat je na de inschrijving moet regelen.
      </p>

      <div className="card" style={{ padding: '20px 24px', marginBottom: 40, background: 'var(--accent-light)', border: '1px solid var(--accent)' }}>
        <div style={{ fontWeight: 600, marginBottom: 10, color: 'var(--accent-text)' }}>In het kort</div>
        <ul style={{ margin: 0, paddingLeft: 20 }}>
          {[
            'Inschrijven bij de KVK is verplicht zodra je als ondernemer actief bent',
            'Eenmanszaak is de meest gekozen rechtsvorm voor ZZP\'ers — geen notaris nodig',
            'De inschrijfkosten bij de KVK bedragen €75,- (eenmalig, 2026)',
            'Na inschrijving ontvang je automatisch een BTW-nummer van de Belastingdienst',
          ].map(item => (
            <li key={item} style={{ marginBottom: 6, fontSize: 14, color: 'var(--accent-text)' }}>{item}</li>
          ))}
        </ul>
      </div>

      <div className="prose">
        <h2>Wanneer moet je je inschrijven bij de KVK?</h2>
        <p>
          Je bent verplicht om je in te schrijven bij de KVK zodra je een onderneming start. Dit geldt ook als je nog maar een paar uur per week werkt als freelancer. Wacht hier niet te lang mee: je kunt boetes krijgen als je zonder inschrijving factureert. De vuistregel is: schrijf je in voordat je je eerste factuur verstuurt.
        </p>
        <p>
          Een uitzondering geldt voor zogenaamde &apos;hobby-activiteiten&apos; zonder winstoogmerk, maar zodra je structureel inkomen genereert, is er sprake van een onderneming en is inschrijving verplicht.
        </p>

        <h2>Welke rechtsvorm kies je?</h2>
        <p>
          De meeste ZZP&apos;ers kiezen voor een <strong>eenmanszaak</strong>. Dit is de eenvoudigste en goedkoopste rechtsvorm: je hoeft niet naar de notaris, er is geen minimumkapitaal vereist en de administratie is relatief eenvoudig. Het belangrijkste nadeel is dat je privé aansprakelijk bent voor schulden van de onderneming.
        </p>
        <p>
          Een <strong>BV (Besloten Vennootschap)</strong> is interessant als je een jaarwinst van meer dan circa €100.000 verwacht of als je het aansprakelijkheidsrisico wilt beperken. De oprichtingskosten voor een BV (notariskosten + KVK-inschrijving) liggen rond de €500 tot €1.000. Voor de meeste startende ZZP&apos;ers is een eenmanszaak de logische keuze.
        </p>

        <h2>Hoe schrijf je je in — stap voor stap</h2>
        <h3>Stap 1: Maak een afspraak of kom langs</h3>
        <p>
          Je kunt terecht bij elk KVK-kantoor in Nederland. Een afspraak maken kan via kvk.nl. Inschrijven kan ook online via de KVK-website, maar in de meeste gevallen moet je nog wel even langskomen met een geldig legitimatiebewijs om de inschrijving te voltooien.
        </p>
        <h3>Stap 2: Neem de juiste documenten mee</h3>
        <p>
          Zorg dat je een geldig paspoort of rijbewijs bij je hebt. Als je een eenmanszaak inschrijft heb je verder geen andere documenten nodig. Wil je een VOF of BV inschrijven, dan zijn er aanvullende documenten of een notariële akte nodig.
        </p>
        <h3>Stap 3: Vul het inschrijfformulier in</h3>
        <p>
          Je geeft onder andere op: de handelsnaam van je onderneming, de activiteiten die je gaat uitvoeren (SBI-code), je privéadres of bedrijfsadres, en de startdatum van de onderneming. De SBI-code bepaalt in welke branche je wordt ingedeeld en heeft geen directe fiscale gevolgen.
        </p>
        <h3>Stap 4: Betaal de inschrijfkosten</h3>
        <p>
          De eenmalige inschrijfkosten bij de KVK bedragen in 2026 €75,-. Dit betaal je ter plaatse of online. Dit is een eenmalig bedrag — er zijn geen jaarlijkse kosten voor de KVK-inschrijving zelf.
        </p>

        <h2>Wat gebeurt er na de inschrijving?</h2>
        <p>
          Na de inschrijving ontvang je een KVK-nummer (8 cijfers). Dit nummer gebruik je op alle zakelijke documenten, zoals facturen en offertes. Binnen enkele dagen stelt de Belastingdienst je BTW-nummer vast en stuurt dit per post toe. Je BTW-nummer is verplicht op je facturen.
        </p>
        <p>
          Zorg dat je direct na de inschrijving ook de volgende zaken regelt:
        </p>
        <ul>
          <li>Open een zakelijke bankrekening (niet wettelijk verplicht, maar sterk aanbevolen)</li>
          <li>Kies een boekhoudprogramma of overweeg een boekhouder</li>
          <li>Sluit eventueel een arbeidsongeschiktheidsverzekering af (AOV)</li>
          <li>Controleer of je BTW-plichtig bent of voor de KOR kiest</li>
          <li>Registreer je voor de BTW-aangifte bij de Belastingdienst</li>
        </ul>

        <h2>KVK-nummer en BTW-nummer: het verschil</h2>
        <p>
          Je KVK-nummer (ook wel het handelsregisternummer) is openbaar en staat in het Handelsregister. Je BTW-nummer gebruik je uitsluitend voor fiscale doeleinden: op facturen, in communicatie met de Belastingdienst en bij intracommunautaire leveringen binnen de EU. Voor een eenmanszaak is het BTW-nummer gekoppeld aan je BSN-nummer, wat privacyrisico&apos;s met zich meebrengt. Je kunt bij de Belastingdienst een apart zakelijk BTW-id aanvragen dat je op facturen zet.
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
