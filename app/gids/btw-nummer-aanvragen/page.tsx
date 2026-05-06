import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: "BTW-nummer aanvragen ZZP: zo werkt het (2026)",
  description: "Je BTW-nummer krijg je automatisch na KVK-inschrijving. Verschil OB-nummer en BTW-ID, doorlooptijd en hoe aangifte doen daarna werkt.",
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
        BTW-nummer aanvragen als ZZP&apos;er: zo werkt het
      </h1>
      <p style={{ fontSize: 17, color: 'var(--text-secondary)', marginBottom: 40, lineHeight: 1.7 }}>
        Vrijwel elke ZZP&apos;er heeft een BTW-nummer nodig om facturen te sturen en BTW-aangifte te doen. Het aanvragen gaat automatisch via de KVK-inschrijving — maar er zijn een paar dingen die je moet weten over het verschil tussen je OB-nummer en je BTW-identificatienummer.
      </p>

      <div className="card" style={{ padding: '20px 24px', marginBottom: 40, background: 'var(--accent-light)', border: '1px solid var(--accent)' }}>
        <div style={{ fontWeight: 600, marginBottom: 10, color: 'var(--accent-text)' }}>In het kort</div>
        <ul style={{ margin: 0, paddingLeft: 20 }}>
          {[
            'Je BTW-nummer krijg je automatisch na inschrijving bij de KVK',
            'Het OB-nummer (intern) verschilt van je BTW-identificatienummer (voor facturen)',
            'Doorlooptijd na KVK-inschrijving: doorgaans 5 tot 10 werkdagen',
            'Val je onder de KOR, dan hoef je geen BTW te berekenen onder €20.000 omzet',
          ].map(item => (
            <li key={item} style={{ marginBottom: 6, fontSize: 14, color: 'var(--accent-text)' }}>{item}</li>
          ))}
        </ul>
      </div>

      <div className="prose">
        <h2>Hoe vraag je een BTW-nummer aan?</h2>
        <p>Als ZZP&apos;er hoef je je BTW-nummer niet apart aan te vragen. Zodra je je inschrijft bij de KVK, geeft de KVK je gegevens door aan de Belastingdienst. Die registreert je automatisch als BTW-ondernemer en stuurt binnen 5 tot 10 werkdagen een brief met twee nummers:</p>
        <ul>
          <li>Je <strong>OB-nummer</strong> (omzetbelastingnummer), bijv. NL123456789B01</li>
          <li>Je <strong>BTW-identificatienummer</strong> — dit nummer zet je op facturen</li>
        </ul>
        <p>Heb je geen brief ontvangen? Bel de Belastingdienst op 0800-0543 om je registratie te controleren.</p>

        <h2>OB-nummer versus BTW-identificatienummer</h2>
        <p>Tot 2020 was het BSN van eenmanszaken verwerkt in het BTW-nummer — een privacyrisico. Sindsdien krijgen ZZP&apos;ers met een eenmanszaak een apart BTW-identificatienummer zonder BSN-koppeling.</p>

        <h3>Welk nummer gebruik je waar?</h3>
        <p>Op je <strong>facturen</strong> gebruik je altijd het BTW-identificatienummer. Het OB-nummer gebruik je voor communicatie met de Belastingdienst — zoals bij BTW-aangifte via Mijn Belastingdienst Zakelijk.</p>

        <h2>Kleineondernemersregeling (KOR)</h2>
        <p>
          Verwacht je minder dan €20.000 per jaar aan BTW-belaste omzet? Dan kom je mogelijk in aanmerking voor de <a href="/gids/kor-kleine-ondernemersregeling" style={{ color: 'var(--accent)' }}>KOR</a>. Je factureert dan zonder BTW en doet geen kwartaalaangiftes. Maar: je mag ook geen BTW terugvragen op zakelijke kosten.
        </p>

        <h2>BTW-aangifte doen na ontvangst van je nummer</h2>
        <p>Zodra je BTW-nummer actief is, ben je verplicht BTW-aangifte te doen — standaard per kwartaal. In de aangifte geef je op:</p>
        <ul>
          <li>Hoeveel BTW je hebt ontvangen van klanten (af te dragen)</li>
          <li>Hoeveel BTW je hebt betaald op zakelijke inkopen (terug te vragen)</li>
          <li>Het saldo: te betalen of terug te ontvangen</li>
        </ul>
        <p>
          Lever de aangifte voor de deadline in, ook als je omzet nul was. Te laat levert een boete op van minimaal €68. Een <a href="/boekhoudprogramma" style={{ color: 'var(--accent)' }}>goed boekhoudprogramma</a> automatiseert de BTW-aangifte volledig. <a href="/tools/moneybird" style={{ color: 'var(--accent)' }}>Moneybird</a> en <a href="/tools/snelstart" style={{ color: 'var(--accent)' }}>SnelStart</a> dienen de aangifte met één klik in bij de Belastingdienst via een directe koppeling.
        </p>
        <p>
          <a href="/tools/e-boekhouden" style={{ color: 'var(--accent)' }}>e-Boekhouden</a> en <a href="/tools/jortt" style={{ color: 'var(--accent)' }}>Jortt</a> berekenen je BTW automatisch per kwartaal en tonen direct het te betalen of terug te ontvangen bedrag.
        </p>
      </div>

      <div style={{ background: 'var(--accent-light)', border: '1px solid var(--accent)', borderRadius: 16, padding: '28px 32px', textAlign: 'center', marginTop: 48 }}>
        <h3 style={{ fontSize: 20, fontWeight: 700, marginTop: 0, marginBottom: 8, color: 'var(--accent-text)' }}>BTW-aangifte zonder stress</h3>
        <p style={{ color: 'var(--accent-text)', margin: '0 0 20px', opacity: 0.85 }}>Met de juiste boekhoudsoftware doe je je BTW-aangifte in enkele minuten, rechtstreeks naar de Belastingdienst.</p>
        <a href="/boekhoudprogramma" className="btn-primary" style={{ fontSize: 15, padding: '12px 28px' }}>Vergelijk boekhoudprogramma&apos;s →</a>
      </div>
    </div>
  )
}
