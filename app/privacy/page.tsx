import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Privacybeleid — SlimBoekhoud',
  description: 'Hoe SlimBoekhoud omgaat met jouw persoonsgegevens.',
}

export default function PrivacyPage() {
  return (
    <div style={{ maxWidth: 780, margin: '0 auto', padding: '48px 24px' }}>
      <div style={{ fontSize: 13, color: 'var(--text-tertiary)', marginBottom: 24 }}>
        <a href="/" style={{ color: 'var(--text-tertiary)' }}>Home</a> / Privacybeleid
      </div>
      <h1 style={{ fontSize: 34, fontWeight: 700, marginBottom: 8 }}>Privacybeleid</h1>
      <p style={{ color: 'var(--text-secondary)', marginBottom: 40, fontSize: 14 }}>Laatst bijgewerkt: mei 2026</p>

      <div className="prose">
        <h2>1. Wie zijn wij?</h2>
        <p>
          SlimBoekhoud (slimboekhoud.nl) is een onafhankelijke vergelijkingswebsite voor boekhoud- en factuurprogramma's voor ZZP'ers. We bieden informatie, reviews en vergelijkingen om ondernemers te helpen de juiste software te kiezen.
        </p>

        <h2>2. Welke gegevens verzamelen we?</h2>

        <h3>Nieuwsbrief</h3>
        <p>
          Als je je aanmeldt voor onze nieuwsbrief, bewaren we je e-mailadres. We gebruiken dit uitsluitend voor het versturen van onze maandelijkse update. Je kunt je op elk moment uitschrijven via de link in elke e-mail.
        </p>

        <h3>Analytische gegevens</h3>
        <p>
          We gebruiken Google Analytics 4 om te begrijpen hoe bezoekers onze website gebruiken. Google Analytics verzamelt geanonimiseerde gegevens zoals welke pagina's je bezoekt, hoe lang je op een pagina blijft en welk apparaat je gebruikt. We bewaren IP-adressen niet volledig (IP-anonimisering is ingeschakeld).
        </p>

        <h3>Cookies</h3>
        <p>
          Onze website gebruikt cookies van Google Analytics (analytisch). Affiliate-netwerken waarnaar we doorlinken kunnen ook cookies plaatsen wanneer je via een van onze links doorklikt — deze vallen onder het privacybeleid van de betreffende partij.
        </p>

        <h2>3. Affiliate-links</h2>
        <p>
          Onze website bevat affiliate-links naar softwareleveranciers. Als je via zo'n link een aankoop of aanmelding doet, ontvangen wij mogelijk een vergoeding van de leverancier. Dit heeft <strong>geen invloed</strong> op onze beoordelingen en rankings. We vermelden altijd transparant wanneer een link een affiliate-link is.
        </p>

        <h2>4. Met wie delen we gegevens?</h2>
        <p>
          We verkopen nooit persoonsgegevens aan derden. We delen gegevens alleen met:
        </p>
        <ul>
          <li><strong>Google</strong> — voor Google Analytics (verwerker)</li>
          <li><strong>Resend</strong> — voor het versturen van nieuwsbrieven (verwerker)</li>
          <li><strong>Vercel</strong> — voor het hosten van onze website (verwerker)</li>
        </ul>
        <p>
          Al deze partijen verwerken data conform de AVG (GDPR).
        </p>

        <h2>5. Jouw rechten</h2>
        <p>Op grond van de AVG heb je de volgende rechten:</p>
        <ul>
          <li><strong>Inzage:</strong> je kunt opvragen welke gegevens we van je bewaren</li>
          <li><strong>Correctie:</strong> je kunt onjuiste gegevens laten corrigeren</li>
          <li><strong>Verwijdering:</strong> je kunt vragen om je gegevens te laten verwijderen</li>
          <li><strong>Bezwaar:</strong> je kunt bezwaar maken tegen de verwerking van je gegevens</li>
        </ul>
        <p>
          Stuur een e-mail naar <strong>privacy@slimboekhoud.nl</strong> om een van deze rechten uit te oefenen. We reageren binnen 30 dagen.
        </p>

        <h2>6. Beveiliging</h2>
        <p>
          We nemen redelijke technische en organisatorische maatregelen om jouw gegevens te beveiligen. Onze website maakt gebruik van HTTPS-versleuteling.
        </p>

        <h2>7. Wijzigingen</h2>
        <p>
          We kunnen dit privacybeleid aanpassen. Bij significante wijzigingen plaatsen we een melding op onze website. De meest recente versie is altijd op deze pagina te vinden.
        </p>

        <h2>8. Contact</h2>
        <p>
          Heb je vragen over ons privacybeleid? Stuur een e-mail naar <strong>privacy@slimboekhoud.nl</strong>.
        </p>
      </div>
    </div>
  )
}
