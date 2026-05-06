import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: "Jaarrekening ZZP: verplicht en hoe opstellen?",
  description: "Een eenmanszaak is niet verplicht een jaarrekening op te stellen, een BV wel. Wat staat erin, hoe stel je het op en wanneer heb je een accountant nodig?",
}

export default function JaarrekeningZzpPage() {
  return (
    <div style={{ maxWidth: 780, margin: '0 auto', padding: '48px 24px' }}>
      <div style={{ fontSize: 13, color: 'var(--text-tertiary)', marginBottom: 24 }}>
        <a href="/" style={{ color: 'var(--text-tertiary)' }}>Home</a> / <a href="/gids" style={{ color: 'var(--text-tertiary)' }}>Gidsen</a> / Jaarrekening ZZP
      </div>

      <div style={{ display: 'flex', gap: 8, marginBottom: 20, flexWrap: 'wrap' }}>
        <span className="badge badge-green">Administratie</span>
        <span style={{ fontSize: 13, color: 'var(--text-tertiary)' }}>Bijgewerkt mei 2026 · 6 min leestijd</span>
      </div>

      <h1 style={{ fontSize: 'clamp(26px, 4vw, 38px)', fontWeight: 700, marginBottom: 16, lineHeight: 1.2 }}>
        Jaarrekening als ZZP&apos;er: wanneer verplicht en hoe stel je het op?
      </h1>
      <p style={{ fontSize: 17, color: 'var(--text-secondary)', marginBottom: 40, lineHeight: 1.7 }}>
        Veel ZZP&apos;ers denken dat een jaarrekening alleen voor grote bedrijven is. Dat klopt niet helemaal. Welke verplichtingen je hebt hangt af van je rechtsvorm. Voor eenmanszaken is het niet verplicht, maar wel nuttig.
      </p>

      <div className="card" style={{ padding: '20px 24px', marginBottom: 40, background: 'var(--accent-light)', border: '1px solid var(--accent)' }}>
        <div style={{ fontWeight: 600, marginBottom: 10, color: 'var(--accent-text)' }}>In het kort</div>
        <ul style={{ margin: 0, paddingLeft: 20 }}>
          {[
            'Een eenmanszaak is niet wettelijk verplicht een jaarrekening op te stellen',
            'Een BV is wel verplicht een jaarrekening op te stellen en te deponeren bij de KVK',
            'Een jaarrekening bestaat uit een balans, winst-en-verliesrekening en toelichting',
            "Moderne boekhoudprogramma's genereren automatisch een jaarrapportage",
          ].map(item => (
            <li key={item} style={{ marginBottom: 6, fontSize: 14, color: 'var(--accent-text)' }}>{item}</li>
          ))}
        </ul>
      </div>

      <div className="prose">
        <h2>Wat is een jaarrekening?</h2>
        <p>Een jaarrekening is een formeel financieel overzicht over een boekjaar. Een volledige jaarrekening bestaat uit:</p>
        <ul>
          <li>De <strong>balans</strong>: momentopname van bezittingen (activa) en schulden plus eigen vermogen (passiva) op 31 december</li>
          <li>De <strong>winst-en-verliesrekening</strong>: alle inkomsten en kosten over het jaar, resulterend in nettowinst of -verlies</li>
          <li>De <strong>toelichting</strong>: verklaringen bij de cijfers en gehanteerde grondslagen</li>
        </ul>

        <h2>Wanneer is een jaarrekening verplicht?</h2>
        <p>Als ZZP&apos;er met een eenmanszaak heb je geen wettelijke verplichting om een jaarrekening op te stellen of te publiceren. Je bent wel verplicht aangifte inkomstenbelasting te doen — maar dat is geen jaarrekening.</p>

        <h3>BV: wel verplicht</h3>
        <p>Heb je je activiteiten ondergebracht in een BV, dan ben je verplicht elk jaar een jaarrekening op te stellen en te deponeren bij de KVK. De deponeringstermijn is 13 maanden na het einde van het boekjaar. Micro-BV&apos;s mogen een vereenvoudigde jaarrekening deponeren met alleen de balans.</p>

        <h2>Waarom ook eenmanszaken een jaarrekening nuttig vinden</h2>
        <p>Banken vragen vrijwel altijd om de laatste 1–3 jaarrekeningen bij een zakelijke lening of hypotheekaanvraag. Grote opdrachtgevers vragen soms om een financieel overzicht als onderdeel van hun leveranciersbeoordeling.</p>
        <p>Bovendien dwingt het opstellen van een jaarrekening je om je cijfers jaarlijks goed door te nemen — zo ontdek je trends vroeg.</p>

        <h2>Hoe stel je een jaarrekening op met software?</h2>
        <p>
          De meeste moderne <a href="/boekhoudprogramma" style={{ color: 'var(--accent)' }}>boekhoudprogramma&apos;s</a> genereren automatisch een jaarrapportage zodra je het jaar hebt afgesloten. <a href="/tools/moneybird" style={{ color: 'var(--accent)' }}>Moneybird</a> en <a href="/tools/snelstart" style={{ color: 'var(--accent)' }}>SnelStart</a> doen dit met een druk op de knop — inclusief balans en winst-en-verliesrekening. <a href="/tools/exact-online" style={{ color: 'var(--accent)' }}>Exact Online</a> en <a href="/tools/twinfield" style={{ color: 'var(--accent)' }}>Twinfield</a> bieden meer uitgebreide rapportages voor complexere situaties.
        </p>
        <p>Sluit het jaar af door: alle facturen en bonnen te verwerken, bankrekeningen te reconciliëren en openstaande posten te controleren.</p>

        <h3>Accountant inschakelen</h3>
        <p>Voor eenmanszaken is een accountant niet verplicht, maar bij een omzet boven circa €150.000 of bij complexe situaties loont het. De kosten zijn volledig aftrekbaar als zakelijke kosten.</p>
        <p>
          <a href="/tools/jortt" style={{ color: 'var(--accent)' }}>Jortt</a> en <a href="/tools/e-boekhouden" style={{ color: 'var(--accent)' }}>e-Boekhouden</a> bieden exportmogelijkheden waarmee een accountant direct aan je boekhouding kan werken zonder dat je alles opnieuw moet aanleveren.
        </p>
      </div>

      <div style={{ background: 'var(--accent-light)', border: '1px solid var(--accent)', borderRadius: 16, padding: '28px 32px', textAlign: 'center', marginTop: 48 }}>
        <h3 style={{ fontSize: 20, fontWeight: 700, marginTop: 0, marginBottom: 8, color: 'var(--accent-text)' }}>Automatische jaarrapportage uit je boekhouding</h3>
        <p style={{ color: 'var(--accent-text)', margin: '0 0 20px', opacity: 0.85 }}>Vergelijk pakketten die met een druk op de knop een volledige jaarrapportage genereren voor jou of je accountant.</p>
        <a href="/boekhoudprogramma" className="btn-primary" style={{ fontSize: 15, padding: '12px 28px' }}>Vergelijk boekhoudprogramma&apos;s →</a>
      </div>
    </div>
  )
}
