import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: "BTW-nummer aanvragen als ZZP'er | SlimBoekhoud",
  description: "Hoe vraag je een BTW-nummer aan als ZZP'er? Lees over de procedure bij de Belastingdienst, het verschil tussen OB-nummer en BTW-nummer en de doorlooptijd.",
}

export default function BtwNummerAanvragenPage() {
  return (
    <div style={{ maxWidth: 780, margin: '0 auto', padding: '48px 24px' }}>
      <div style={{ fontSize: 13, color: 'var(--text-tertiary)', marginBottom: 24 }}>
        <a href="/" style={{ color: 'var(--text-tertiary)' }}>Home</a> / <a href="/gids" style={{ color: 'var(--text-tertiary)' }}>Gidsen</a> / BTW-nummer aanvragen
      </div>

      <div style={{ display: 'flex', gap: 8, marginBottom: 20, flexWrap: 'wrap' }}>
        <span className="badge badge-green">BTW</span>
        <span style={{ fontSize: 13, color: 'var(--text-tertiary)' }}>Bijgewerkt mei 2026 · 5 min leestijd</span>
      </div>

      <h1 style={{ fontSize: 'clamp(26px, 4vw, 38px)', fontWeight: 700, marginBottom: 16, lineHeight: 1.2 }}>
        BTW-nummer aanvragen als ZZP'er: zo werkt het
      </h1>
      <p style={{ fontSize: 17, color: 'var(--text-secondary)', marginBottom: 40, lineHeight: 1.7 }}>
        Vrijwel elke ZZP'er heeft een BTW-nummer nodig om facturen te sturen en BTW-aangifte te doen. Het aanvragen gaat automatisch via de KVK-inschrijving, maar er zijn een paar dingen die je moet weten over het verschil tussen je OB-nummer en je BTW-identificatienummer.
      </p>

      <div className="card" style={{ padding: '20px 24px', marginBottom: 40, background: 'var(--accent-light)', border: '1px solid var(--accent)' }}>
        <div style={{ fontWeight: 600, marginBottom: 10, color: 'var(--accent-text)' }}>In het kort</div>
        <ul style={{ margin: 0, paddingLeft: 20 }}>
          {[
            'Je BTW-nummer krijg je automatisch na inschrijving bij de KVK',
            'Het OB-nummer (intern) verschilt van je BTW-identificatienummer (voor facturen)',
            'Doorlooptijd na KVK-inschrijving is doorgaans 5 tot 10 werkdagen',
            'Val je onder de KOR, dan hoef je geen BTW te berekenen onder 20.000 euro omzet',
          ].map(item => (
            <li key={item} style={{ marginBottom: 6, fontSize: 14, color: 'var(--accent-text)' }}>{item}</li>
          ))}
        </ul>
      </div>

      <div className="prose">
        <h2>Hoe vraag je een BTW-nummer aan?</h2>
        <p>Als ZZP'er hoef je je BTW-nummer niet apart aan te vragen. Zodra je je inschrijft bij de Kamer van Koophandel (KVK), geeft de KVK je gegevens door aan de Belastingdienst. De Belastingdienst registreert je vervolgens automatisch als btw-ondernemer en stuurt je binnen 5 tot 10 werkdagen een brief met je BTW-gegevens.</p>
        <p>In die brief vind je twee nummers:</p>
        <ul>
          <li>Je <strong>OB-nummer</strong> (ook wel btw-nummer of omzetbelastingnummer), bijvoorbeeld: NL123456789B01</li>
          <li>Je <strong>BTW-identificatienummer</strong>, dat je op facturen zet en dat bescherming biedt van je BSN</li>
        </ul>
        <p>Ben je al KVK-ingeschreven maar heb je nog geen BTW-brief ontvangen, dan kun je de Belastingdienst bellen op 0800-0543 om je registratie te controleren.</p>

        <h2>OB-nummer versus BTW-identificatienummer</h2>
        <p>Tot 2020 werd het BSN van eenmanszaken direct verwerkt in het BTW-nummer. Dat zorgde voor privacyrisico's. Sindsdien geeft de Belastingdienst ZZP'ers met een eenmanszaak een apart BTW-identificatienummer dat geen relatie heeft met het BSN.</p>
        <h3>Welk nummer gebruik je waar?</h3>
        <p>Op je facturen gebruik je altijd het <strong>BTW-identificatienummer</strong>. Dit nummer begint met NL, gevolgd door 9 cijfers en eindigt op B01 of B02. Het OB-nummer gebruik je voor communicatie met de Belastingdienst zelf, zoals bij het doen van BTW-aangifte via Mijn Belastingdienst Zakelijk.</p>
        <h3>BV of VOF?</h3>
        <p>Heb je een BV of VOF, dan is je BTW-nummer gebaseerd op het RSIN-nummer (Rechtspersonen en Samenwerkingsverbanden Informatienummer) en niet op een BSN. Voor deze rechtsvormen is er dus geen apart BTW-identificatienummer nodig.</p>

        <h2>Kleineondernemersregeling (KOR)</h2>
        <p>Als je verwacht minder dan 20.000 euro per jaar aan btw-belaste omzet te draaien, kom je mogelijk in aanmerking voor de Kleineondernemersregeling (KOR). Met de KOR bereken je geen BTW aan je klanten en doe je ook geen BTW-aangifte. Je factureert dan zonder BTW.</p>
        <p>Let op: als je kiest voor de KOR, mag je ook geen BTW terugvragen op je zakelijke inkopen. Voor ZZP'ers die veel investeren in materialen of apparatuur kan dat nadelig zijn. De KOR geldt voor minimaal 3 jaar nadat je je hebt aangemeld.</p>
        <p>Aanmelden voor de KOR doe je via Mijn Belastingdienst Zakelijk. De aanmelding moet minimaal 4 weken voor het begin van het kwartaal waarop je de KOR wilt laten ingaan, worden ingediend.</p>

        <h2>BTW-aangifte doen na ontvangst van je nummer</h2>
        <p>Zodra je BTW-nummer actief is, ben je verplicht BTW-aangifte te doen. Standaard doe je dit per kwartaal, maar je kunt ook verzoeken om maandelijkse of jaarlijkse aangifte.</p>
        <p>In de aangifte geef je op:</p>
        <ul>
          <li>Hoeveel BTW je hebt ontvangen van klanten (af te dragen)</li>
          <li>Hoeveel BTW je hebt betaald op zakelijke inkopen (terug te vragen)</li>
          <li>Het saldo dat je betaalt of terugkrijgt</li>
        </ul>
        <p>Lever de aangifte altijd voor de deadline in, ook als je omzet nul is geweest. Te late aangifte levert een boete op. Goede boekhoudsoftware kan de BTW-aangifte direct koppelen aan je administratie en de aangifte met een paar klikken indienen bij de Belastingdienst.</p>
      </div>

      <div style={{ background: 'var(--accent-light)', border: '1px solid var(--accent)', borderRadius: 16, padding: '28px 32px', textAlign: 'center', marginTop: 48 }}>
        <h3 style={{ fontSize: 20, fontWeight: 700, marginTop: 0, marginBottom: 8, color: 'var(--accent-text)' }}>BTW-aangifte zonder stress</h3>
        <p style={{ color: 'var(--accent-text)', margin: '0 0 20px', opacity: 0.85 }}>Met de juiste boekhoudsoftware doe je je BTW-aangifte in enkele minuten, rechtstreeks naar de Belastingdienst.</p>
        <a href="/boekhoudprogramma" className="btn-primary" style={{ fontSize: 15, padding: '12px 28px' }}>Vergelijk boekhoudprogramma's →</a>
      </div>
    </div>
  )
}
