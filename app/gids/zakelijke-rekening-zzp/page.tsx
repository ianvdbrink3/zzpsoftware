import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: "Zakelijke rekening ZZP: verplicht? Beste opties",
  description: "Heb je als ZZP'er een zakelijke bankrekening nodig? Niet verplicht, maar bijna onmisbaar. Vergelijking van kosten en beste opties in 2026.",
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
        Veel startende ZZP&apos;ers vragen zich af of ze een aparte zakelijke rekening nodig hebben. Het korte antwoord: wettelijk verplicht is het niet voor eenmanszaken, maar praktisch gezien is het bijna onmisbaar.
      </p>

      <div className="card" style={{ padding: '20px 24px', marginBottom: 40, background: 'var(--accent-light)', border: '1px solid var(--accent)' }}>
        <div style={{ fontWeight: 600, marginBottom: 10, color: 'var(--accent-text)' }}>In het kort</div>
        <ul style={{ margin: 0, paddingLeft: 20 }}>
          {[
            'Een zakelijke rekening is wettelijk niet verplicht voor eenmanszaken',
            'Zakelijk en privé scheiden is sterk aanbevolen voor administratie en belastingaangifte',
            'Online zakelijke rekeningen (Knab, Bunq, ANNA) zijn vaak goedkoper dan traditionele banken',
            'Kosten: gratis tot circa €15 per maand',
          ].map(item => (
            <li key={item} style={{ marginBottom: 6, fontSize: 14, color: 'var(--accent-text)' }}>{item}</li>
          ))}
        </ul>
      </div>

      <div className="prose">
        <h2>Is een zakelijke rekening verplicht voor ZZP&apos;ers?</h2>
        <p>
          Voor een <strong>eenmanszaak</strong> is een aparte zakelijke bankrekening wettelijk niet verplicht. Voor een <strong>BV of VOF</strong> wel — die rechtsvormen vereisen volledig gescheiden vermogen.
        </p>

        <h2>Waarom toch een zakelijke rekening openen?</h2>
        <ul>
          <li><strong>Administratie:</strong> Boekhoudprogramma&apos;s werken het eenvoudigst als je een losse zakelijke rekening koppelt. <a href="/tools/moneybird" style={{ color: 'var(--accent)' }}>Moneybird</a>, <a href="/tools/snelstart" style={{ color: 'var(--accent)' }}>SnelStart</a> en <a href="/tools/jortt" style={{ color: 'var(--accent)' }}>Jortt</a> koppelen direct met je zakelijke bank voor automatische transactie-import.</li>
          <li><strong>Belastingdienst:</strong> Bij een boekenonderzoek wil de Belastingdienst inzage in je zakelijke administratie. Als alles door elkaar loopt, moet je elke transactie uitleggen.</li>
          <li><strong>Professionaliteit:</strong> Opdrachtgevers zien liever een zakelijk rekeningnummer op je factuur.</li>
          <li><strong>Privacy:</strong> Een zakelijke rekening houdt je privéfinancien buiten beeld.</li>
          <li><strong>Overzicht:</strong> Zie direct wat je netto verdient en wat je apart zet voor belastingen.</li>
        </ul>

        <h2>Welke zakelijke rekeningen zijn er voor ZZP&apos;ers?</h2>

        <h3>Traditionele banken</h3>
        <p>
          ING, ABN AMRO en Rabobank bieden zakelijke rekeningen aan voor eenmanszaken. Kosten: €7–€15 per maand. Voordeel: bekendheid en uitgebreid kantorennetwerk.
        </p>

        <h3>Online zakelijke banken</h3>
        <p>
          Bunq, Knab en ANNA Money richten zich specifiek op ondernemers. Lagere maandkosten, snelle onboarding en handige integraties met boekhoudprogramma&apos;s. Knab Zakelijk v.a. circa €5/mnd. ANNA Money heeft ook een gratis instapvariant.
        </p>

        <h3>Revolut Business en Wise Business</h3>
        <p>
          Interessant als je regelmatig internationale betalingen doet of in meerdere valuta werkt. Ze bieden gunstige wisselkoersen en lage transferkosten.
        </p>

        <h2>Waar let je op bij het kiezen?</h2>
        <ul>
          <li>Maandelijkse kosten en transactiekosten</li>
          <li>Integratie met je <a href="/boekhoudprogramma" style={{ color: 'var(--accent)' }}>boekhoudprogramma</a></li>
          <li>Kwaliteit van de mobiele app</li>
          <li>Mogelijkheid voor subrekeningen (handig voor belastingreserveringen)</li>
          <li>Klantenservice en bereikbaarheid</li>
        </ul>

        <h2>Slim gebruik van subrekeningen</h2>
        <p>
          Tip: maak een subrekening voor je belastingreservering. Zet elke maand circa 30–35% van je winst apart, zodat je nooit voor verrassingen staat als de belastingaanslag komt. <a href="/tools/e-boekhouden" style={{ color: 'var(--accent)' }}>e-Boekhouden</a> en <a href="/tools/exact-online" style={{ color: 'var(--accent)' }}>Exact Online</a> kunnen je helpen dit percentage nauwkeurig te berekenen op basis van je actuele winst.
        </p>
      </div>

      <div style={{ background: 'var(--accent-light)', border: '1px solid var(--accent)', borderRadius: 16, padding: '28px 32px', textAlign: 'center', marginTop: 48 }}>
        <h3 style={{ fontSize: 20, fontWeight: 700, marginTop: 0, marginBottom: 8, color: 'var(--accent-text)' }}>Koppel je bankrekening aan je boekhouding</h3>
        <p style={{ color: 'var(--accent-text)', margin: '0 0 20px', opacity: 0.85 }}>Moderne boekhoudpakketten koppelen automatisch met je zakelijke rekening. Vergelijk de beste opties voor ZZP&apos;ers.</p>
        <a href="/boekhoudprogramma" className="btn-primary" style={{ fontSize: 15, padding: '12px 28px' }}>Vergelijk boekhoudprogramma&apos;s →</a>
      </div>
    </div>
  )
}
