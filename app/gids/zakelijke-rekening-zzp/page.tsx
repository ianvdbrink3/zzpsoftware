import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: "Zakelijke Bankrekening voor ZZP'ers — Verplicht? Beste Opties 2026",
  description: "Is een zakelijke rekening verplicht als ZZP'er? Vergelijk de beste opties, kosten en voor- en nadelen van zakelijk bankieren in 2026.",
}

export default function ZakelijkeRekeningZzpPage() {
  return (
    <div style={{ maxWidth: 780, margin: '0 auto', padding: '48px 24px' }}>
      <div style={{ fontSize: 13, color: 'var(--text-tertiary)', marginBottom: 24 }}>
        <a href="/" style={{ color: 'var(--text-tertiary)' }}>Home</a> / <a href="/gids" style={{ color: 'var(--text-tertiary)' }}>Gidsen</a> / Zakelijke rekening ZZP
      </div>

      <div style={{ display: 'flex', gap: 8, marginBottom: 20, flexWrap: 'wrap' }}>
        <span className="badge badge-green">Bankieren</span>
        <span style={{ fontSize: 13, color: 'var(--text-tertiary)' }}>Bijgewerkt mei 2026 · 5 min leestijd</span>
      </div>

      <h1 style={{ fontSize: 'clamp(26px, 4vw, 38px)', fontWeight: 700, marginBottom: 16, lineHeight: 1.2 }}>
        Zakelijke bankrekening voor ZZP&apos;ers: verplicht, kosten en beste keuze
      </h1>
      <p style={{ fontSize: 17, color: 'var(--text-secondary)', marginBottom: 40, lineHeight: 1.7 }}>
        Veel startende ZZP&apos;ers vragen zich af of ze een aparte zakelijke rekening nodig hebben. Het korte antwoord: wettelijk verplicht is het niet voor eenmanszaken, maar praktisch gezien is het bijna onmisbaar. In deze gids lees je waarom, wat het kost en welke opties er zijn.
      </p>

      <div className="card" style={{ padding: '20px 24px', marginBottom: 40, background: 'var(--accent-light)', border: '1px solid var(--accent)' }}>
        <div style={{ fontWeight: 600, marginBottom: 10, color: 'var(--accent-text)' }}>In het kort</div>
        <ul style={{ margin: 0, paddingLeft: 20 }}>
          {[
            'Een zakelijke rekening is wettelijk niet verplicht voor eenmanszaken',
            'Zakelijk en privé scheiden is sterk aanbevolen voor administratie en belastingaangifte',
            'Online zakelijke rekeningen (Knab, Bunq, ANNA) zijn vaak goedkoper dan traditionele banken',
            'Kosten lopen uiteen van gratis tot circa €15 per maand afhankelijk van de bank en het pakket',
          ].map(item => (
            <li key={item} style={{ marginBottom: 6, fontSize: 14, color: 'var(--accent-text)' }}>{item}</li>
          ))}
        </ul>
      </div>

      <div className="prose">
        <h2>Is een zakelijke rekening verplicht voor ZZP&apos;ers?</h2>
        <p>
          Voor een <strong>eenmanszaak</strong> is een aparte zakelijke bankrekening wettelijk gezien niet verplicht. Je mag zakelijke inkomsten en uitgaven in principe op je privérekening ontvangen en betalen. Dit is echter in de praktijk een slechte keuze om meerdere redenen.
        </p>
        <p>
          Voor een <strong>BV of VOF</strong> is een zakelijke rekening wel verplicht — die rechtsvormen vereisen een volledig gescheiden vermogen.
        </p>

        <h2>Waarom toch een zakelijke rekening openen?</h2>
        <p>
          Hoewel het niet verplicht is, zijn er sterke praktische redenen om als ZZP&apos;er toch een zakelijke rekening te openen:
        </p>
        <ul>
          <li><strong>Administratie:</strong> Als je zakelijke en privétransacties door elkaar hebt lopen, kost het je veel meer tijd om je boekhouding bij te houden. Boekhoudprogramma&apos;s werken het eenvoudigst als je een losse zakelijke rekening koppelt.</li>
          <li><strong>Belastingdienst:</strong> Bij een boekenonderzoek wil de Belastingdienst inzage in je zakelijke administratie. Als alles door elkaar loopt, moet je elke transactie uitleggen — inclusief je privéboodschappen.</li>
          <li><strong>Professionaliteit:</strong> Opdrachtgevers en leveranciers zien liever een zakelijk rekeningnummer op je factuur dan een privénummer.</li>
          <li><strong>Privacybescherming:</strong> Op je facturen staat je rekeningnummer. Een zakelijke rekening houdt je privéfinancien buiten beeld.</li>
          <li><strong>Overzicht:</strong> Met een zakelijke rekening zie je direct wat je netto verdient en wat je spaart voor belastingen.</li>
        </ul>

        <h2>Welke zakelijke rekeningen zijn er voor ZZP&apos;ers?</h2>
        <h3>Traditionele banken</h3>
        <p>
          ING, ABN AMRO en Rabobank bieden allemaal zakelijke rekeningen aan voor eenmanszaken en ZZP&apos;ers. De kosten liggen doorgaans tussen de €7 en €15 per maand, afhankelijk van het pakket. Het voordeel is een uitgebreid kantorennetwerk en bekendheid, al heeft dit voor de meeste ZZP&apos;ers weinig praktische meerwaarde.
        </p>
        <h3>Online zakelijke banken</h3>
        <p>
          Bunq, Knab en ANNA Money richten zich specifiek op ondernemers en ZZP&apos;ers. Ze bieden veelal lagere maandkosten, snellere onboarding en handige integraties met boekhoudprogramma&apos;s. Knab Zakelijk kost vanaf circa €5 per maand. Bunq biedt een betaalbaar zakelijk account met automatische categorisering. ANNA Money heeft ook een gratis instapvariant.
        </p>
        <h3>Revolut Business en Wise Business</h3>
        <p>
          Als je regelmatig internationale betalingen doet of in meerdere valuta werkt, zijn Revolut Business en Wise Business interessante opties. Ze bieden gunstige wisselkoersen en lage internationale transferkosten. Voor puur Nederlandse activiteiten is dit minder relevant.
        </p>

        <h2>Waar let je op bij het kiezen van een zakelijke rekening?</h2>
        <ul>
          <li>Maandelijkse kosten en eventuele transactiekosten</li>
          <li>Integratie met jouw boekhoudprogramma</li>
          <li>Kwaliteit van de mobiele app</li>
          <li>Mogelijkheid om meerdere subrekeningen te openen (handig voor belastingreserveringen)</li>
          <li>Klantenservice en bereikbaarheid</li>
          <li>Pinpas en/of creditcard inbegrepen</li>
        </ul>

        <h2>Belastingreserveringen: slim gebruik van subrekeningen</h2>
        <p>
          Een handige tip: reserveer elke maand een percentage van je omzet voor je belastingaanslag. Als ZZP&apos;er betaal je inkomstenbelasting achteraf, en dat kan oplopen tot een fors bedrag. Sommige zakelijke banken laten je eenvoudig subrekeningen aanmaken. Zet elke maand circa 30–35% van je winst apart op zo&apos;n subrekening, zodat je niet voor verrassingen komt te staan.
        </p>
      </div>

      <div style={{ background: 'var(--accent-light)', border: '1px solid var(--accent)', borderRadius: 16, padding: '28px 32px', textAlign: 'center', marginTop: 48 }}>
        <h3 style={{ fontSize: 20, fontWeight: 700, marginTop: 0, marginBottom: 8, color: 'var(--accent-text)' }}>Koppel je bankrekening aan je boekhoudprogramma</h3>
        <p style={{ color: 'var(--accent-text)', margin: '0 0 20px', opacity: 0.85 }}>Moderne boekhoudpakketten koppelen automatisch met je zakelijke rekening. Vergelijk de beste opties voor ZZP&apos;ers.</p>
        <a href="/boekhoudprogramma" className="btn-primary" style={{ fontSize: 15, padding: '12px 28px' }}>Vergelijk boekhoudprogramma&apos;s →</a>
      </div>
    </div>
  )
}
