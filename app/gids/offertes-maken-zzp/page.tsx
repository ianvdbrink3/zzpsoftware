import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: "Professionele Offerte Maken als ZZP'er — Eisen en Tips (2026)",
  description: "Leer hoe je een professionele offerte maakt als ZZP'er: wettelijke verplichtingen, opbouw, geldigheid en slim opvolgen van offertes.",
}

export default function OffertesMakenZzpPage() {
  return (
    <div style={{ maxWidth: 780, margin: '0 auto', padding: '48px 24px' }}>
      <div style={{ fontSize: 13, color: 'var(--text-tertiary)', marginBottom: 24 }}>
        <a href="/" style={{ color: 'var(--text-tertiary)' }}>Home</a> / <a href="/gids" style={{ color: 'var(--text-tertiary)' }}>Gidsen</a> / Offertes maken als ZZP&apos;er
      </div>

      <div style={{ display: 'flex', gap: 8, marginBottom: 20, flexWrap: 'wrap' }}>
        <span className="badge badge-green">Facturatie</span>
        <span style={{ fontSize: 13, color: 'var(--text-tertiary)' }}>Bijgewerkt mei 2026 · 6 min leestijd</span>
      </div>

      <h1 style={{ fontSize: 'clamp(26px, 4vw, 38px)', fontWeight: 700, marginBottom: 16, lineHeight: 1.2 }}>
        Professionele offerte maken als ZZP&apos;er: opbouw, eisen en opvolgen
      </h1>
      <p style={{ fontSize: 17, color: 'var(--text-secondary)', marginBottom: 40, lineHeight: 1.7 }}>
        Een goede offerte is meer dan een prijsopgave — het is je eerste zakelijke indruk. Een duidelijke, professionele offerte verhoogt je kans op een opdracht en voorkomt discussies achteraf. In deze gids lees je welke elementen verplicht zijn, hoe je een offerte opbouwt en hoe je slim opvolgt.
      </p>

      <div className="card" style={{ padding: '20px 24px', marginBottom: 40, background: 'var(--accent-light)', border: '1px solid var(--accent)' }}>
        <div style={{ fontWeight: 600, marginBottom: 10, color: 'var(--accent-text)' }}>In het kort</div>
        <ul style={{ margin: 0, paddingLeft: 20 }}>
          {[
            'Een offerte is een aanbod — zodra de klant akkoord geeft is er juridisch een overeenkomst',
            'Vermeld altijd je KVK-nummer, BTW-nummer, geldigheid en betalingsvoorwaarden',
            'Specificeer de werkzaamheden zo concreet mogelijk om meerwerk-discussies te voorkomen',
            'Volg een offerte na 3–5 werkdagen op als je nog geen reactie hebt ontvangen',
          ].map(item => (
            <li key={item} style={{ marginBottom: 6, fontSize: 14, color: 'var(--accent-text)' }}>{item}</li>
          ))}
        </ul>
      </div>

      <div className="prose">
        <h2>Wat is het juridische gewicht van een offerte?</h2>
        <p>
          Een offerte is een aanbod in de zin van het Burgerlijk Wetboek. Zodra een opdrachtgever jouw offerte accepteert — mondeling, schriftelijk of per e-mail — is er een bindende overeenkomst tot stand gekomen. Zorg er daarom voor dat je offerte volledig en juist is voordat je hem verstuurt. Onduidelijkheden of fouten kun je later moeilijk terugdraaien.
        </p>
        <p>
          Geef altijd een <strong>geldigheidsdatum</strong> op, bijvoorbeeld 30 dagen. Na die datum vervalt je aanbod en kun je een nieuwe offerte uitbrengen — handig als je tarieven in de tussentijd zijn veranderd of als je niet meer beschikbaar bent.
        </p>

        <h2>Verplichte elementen op een offerte</h2>
        <p>
          Er is geen wettelijke lijst van verplichte offerte-elementen zoals die voor facturen geldt, maar er zijn wel zaken die je altijd moet opnemen om problemen te voorkomen:
        </p>
        <ul>
          <li>Je volledige naam of handelsnaam en adresgegevens</li>
          <li>Je KVK-nummer</li>
          <li>Je BTW-nummer (als je BTW-plichtig bent)</li>
          <li>Naam en adres van de opdrachtgever</li>
          <li>Datum van de offerte en offertenummer</li>
          <li>Omschrijving van de werkzaamheden of producten</li>
          <li>Prijs exclusief en inclusief BTW</li>
          <li>BTW-percentage dat van toepassing is</li>
          <li>Geldigheidsduur van de offerte</li>
          <li>Betalingsvoorwaarden en betalingstermijn</li>
          <li>Leveringstermijn of doorlooptijd</li>
        </ul>

        <h2>Opbouw van een effectieve offerte</h2>
        <h3>1. Inleiding en aanleiding</h3>
        <p>
          Begin met een korte samenvatting van het gesprek of de vraag van de opdrachtgever. Laat zien dat je de situatie begrijpt. Dit geeft vertrouwen en toont aan dat je echt geluisterd hebt.
        </p>
        <h3>2. Omschrijving van de werkzaamheden</h3>
        <p>
          Beschrijf zo specifiek mogelijk wat je gaat doen. Vage omschrijvingen leiden tot discussies over wat wel en niet is inbegrepen. Vermeld ook expliciet wat er buiten de scope valt. Als je op uurbasis werkt, vermeld dan het verwachte aantal uren en je uurtarief apart van eventuele vaste kosten.
        </p>
        <h3>3. Prijsoverzicht</h3>
        <p>
          Geef een helder overzicht van de prijs. Splits eventuele onderdelen uit zodat de opdrachtgever ziet waar het geld naartoe gaat. Vermeld altijd of bedragen exclusief of inclusief BTW zijn — dit is een veelgemaakte bron van misverstanden.
        </p>
        <h3>4. Planning en oplevering</h3>
        <p>
          Geef een indicatie van de doorlooptijd en eventuele mijlpalen. Dit stelt verwachtingen en helpt de opdrachtgever beslissen. Als je afhankelijk bent van aanlevering van materialen door de opdrachtgever, vermeld dat dan expliciet.
        </p>
        <h3>5. Algemene voorwaarden</h3>
        <p>
          Verwijs naar je algemene voorwaarden en stuur deze mee of link ernaar. Goede algemene voorwaarden beschermen je bij meerwerk, annuleringen en niet-betaling. Je kunt gratis algemene voorwaarden gebruiken van de FNV of een set laten opstellen door een jurist.
        </p>

        <h2>Meerwerk voorkomen en afspreken</h2>
        <p>
          Meerwerk — werkzaamheden die buiten de oorspronkelijke opdracht vallen — is een veelvoorkomend knelpunt voor ZZP&apos;ers. Vermeld in je offerte dat eventueel meerwerk in overleg en op basis van je uurtarief wordt uitgevoerd. Leg meerwerk altijd schriftelijk vast, bij voorkeur per e-mail, voordat je ermee aan de slag gaat.
        </p>

        <h2>Offerte opvolgen: zo doe je dat professioneel</h2>
        <p>
          Stuur na 3 tot 5 werkdagen een vriendelijke opvolgmail als je nog geen reactie hebt ontvangen. Vraag of er nog vragen zijn en of je de offerte mee kunt nemen in je planning. Een persoonlijk telefoontje werkt vaak nog beter dan een e-mail. De meeste ZZP&apos;ers laten dit na — terwijl opvolgen de conversie significant verhoogt.
        </p>
      </div>

      <div style={{ background: 'var(--accent-light)', border: '1px solid var(--accent)', borderRadius: 16, padding: '28px 32px', textAlign: 'center', marginTop: 48 }}>
        <h3 style={{ fontSize: 20, fontWeight: 700, marginTop: 0, marginBottom: 8, color: 'var(--accent-text)' }}>Offertes en facturen in hetzelfde programma</h3>
        <p style={{ color: 'var(--accent-text)', margin: '0 0 20px', opacity: 0.85 }}>Met een goed boekhoudprogramma maak je offertes die je met een klik omzet naar een factuur. Vergelijk de beste opties.</p>
        <a href="/boekhoudprogramma" className="btn-primary" style={{ fontSize: 15, padding: '12px 28px' }}>Vergelijk boekhoudprogramma&apos;s →</a>
      </div>
    </div>
  )
}
