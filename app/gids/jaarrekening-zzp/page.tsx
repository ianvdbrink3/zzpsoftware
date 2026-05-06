import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: "Jaarrekening als ZZP'er: wanneer verplicht en hoe opstellen | SlimBoekhoud",
  description: "Wanneer is een jaarrekening verplicht als ZZP'er? Wat is het verschil met een aangifte, wat staat erin en hoe stel je het op met boekhoudprogramma's.",
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
        Jaarrekening als ZZP'er: wanneer verplicht en hoe stel je het op?
      </h1>
      <p style={{ fontSize: 17, color: 'var(--text-secondary)', marginBottom: 40, lineHeight: 1.7 }}>
        Veel ZZP'ers denken dat een jaarrekening alleen voor grote bedrijven is. Dat klopt niet helemaal. Welke verplichtingen je hebt, hangt af van je rechtsvorm. Voor eenmanszaken is een volledige jaarrekening niet verplicht, maar voor een BV wel. En toch is ook voor ZZP'ers met een eenmanszaak een jaarrekening bijzonder nuttig.
      </p>

      <div className="card" style={{ padding: '20px 24px', marginBottom: 40, background: 'var(--accent-light)', border: '1px solid var(--accent)' }}>
        <div style={{ fontWeight: 600, marginBottom: 10, color: 'var(--accent-text)' }}>In het kort</div>
        <ul style={{ margin: 0, paddingLeft: 20 }}>
          {[
            'Een eenmanszaak is niet wettelijk verplicht een jaarrekening op te stellen',
            'Een BV is wel verplicht een jaarrekening op te stellen en te deponeren bij de KVK',
            'Een jaarrekening bestaat uit een balans, een winst-en-verliesrekening en een toelichting',
            'Moderne boekhoudprogramma\'s genereren automatisch een jaarrapportage uit je boekingen',
          ].map(item => (
            <li key={item} style={{ marginBottom: 6, fontSize: 14, color: 'var(--accent-text)' }}>{item}</li>
          ))}
        </ul>
      </div>

      <div className="prose">
        <h2>Wat is een jaarrekening?</h2>
        <p>Een jaarrekening is een formeel financieel overzicht van een onderneming over een boekjaar. Het geeft een compleet beeld van de financiele positie en de resultaten van je bedrijf. Een volledige jaarrekening bestaat uit drie onderdelen:</p>
        <ul>
          <li>De <strong>balans</strong>: een momentopname van je bezittingen (activa) en schulden plus eigen vermogen (passiva) op 31 december</li>
          <li>De <strong>winst-en-verliesrekening</strong>: een overzicht van alle inkomsten en kosten over het jaar, resulterend in de nettowinst of het nettoverlies</li>
          <li>De <strong>toelichting</strong>: verklaringen bij de cijfers, gehanteerde grondslagen en bijzondere posten</li>
        </ul>

        <h2>Wanneer is een jaarrekening verplicht?</h2>
        <p>Als ZZP'er met een eenmanszaak heb je geen wettelijke verplichting om een jaarrekening op te stellen of te publiceren. Je bent wel verplicht een volledige boekhouding bij te houden en aangifte inkomstenbelasting te doen. De aangifte is echter geen jaarrekening — het is een belastingformulier.</p>
        <h3>BV: wel verplicht</h3>
        <p>Heb je je ZZP-activiteiten ondergebracht in een BV, dan ben je wettelijk verplicht elk jaar een jaarrekening op te stellen, te laten controleren (afhankelijk van de omvang) en te deponeren bij de KVK. De deponeringstermijn is 13 maanden na het einde van het boekjaar. Te late deponering kan leiden tot een boete en reputatieschade.</p>
        <p>Micro-BV's (omzet onder 700.000 euro, balanstotaal onder 350.000 euro, minder dan 10 medewerkers) mogen een vereenvoudigde jaarrekening deponeren die alleen de balans bevat.</p>

        <h2>Waarom ook eenmanszaken een jaarrekening nuttig vinden</h2>
        <p>Hoewel het niet verplicht is, helpt een jaarrapportage je als eenmanszaak enorm. Banken vragen vrijwel altijd om de laatste 1 tot 3 jaarrekeningen bij een zakelijke lening of hypotheekaanvraag. Opdrachtgevers in het publieke domein of grote bedrijven vragen soms ook om een financieel overzicht als onderdeel van hun leveranciersbeoordeling.</p>
        <p>Bovendien dwingt het opstellen van een jaarrekening je om je cijfers jaarlijks goed door te nemen. Zo ontdek je trends — stijgende kosten, dalende marges — voordat ze een probleem worden.</p>

        <h2>Hoe stel je een jaarrekening op met software?</h2>
        <p>De meeste moderne boekhoudprogramma's genereren automatisch een jaarrapportage zodra je het jaar hebt afgesloten. Dit is geen volledige juridische jaarrekening in de wettelijke zin, maar een gedetailleerd overzicht van je balans en winst-en-verliesrekening dat voor de meeste praktische doeleinden volstaat.</p>
        <p>Sluit het jaar af door alle facturen en bonnen te verwerken, de bankrekeningen te reconciliëren (kloppen de banksaldi in de software met je echte rekeningsaldo?) en openstaande posten te controleren. Daarna genereer je met een druk op de knop een overzicht dat je kunt gebruiken voor je belastingaangifte, je bank of je boekhouder.</p>
        <h3>Accountant inschakelen</h3>
        <p>Voor eenmanszaken is een accountant niet verplicht, maar bij een omzet boven circa 150.000 euro of bij complexe situaties (meerdere activiteiten, investeringen, personeel) loont het om een accountant de cijfers te laten controleren en de jaarrekening samen op te stellen. De kosten hiervan zijn volledig aftrekbaar als zakelijke kosten.</p>
      </div>

      <div style={{ background: 'var(--accent-light)', border: '1px solid var(--accent)', borderRadius: 16, padding: '28px 32px', textAlign: 'center', marginTop: 48 }}>
        <h3 style={{ fontSize: 20, fontWeight: 700, marginTop: 0, marginBottom: 8, color: 'var(--accent-text)' }}>Automatische jaarrapportage uit je boekhouding</h3>
        <p style={{ color: 'var(--accent-text)', margin: '0 0 20px', opacity: 0.85 }}>Vergelijk pakketten die met een druk op de knop een volledige jaarrapportage genereren voor jou of je accountant.</p>
        <a href="/boekhoudprogramma" className="btn-primary" style={{ fontSize: 15, padding: '12px 28px' }}>Vergelijk software →</a>
      </div>
    </div>
  )
}
