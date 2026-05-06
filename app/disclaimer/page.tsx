import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Disclaimer — SlimBoekhoud',
  description: 'Disclaimer en gebruiksvoorwaarden van SlimBoekhoud.nl.',
}

export default function DisclaimerPage() {
  return (
    <div style={{ maxWidth: 780, margin: '0 auto', padding: '48px 24px' }}>
      <div style={{ fontSize: 13, color: 'var(--text-tertiary)', marginBottom: 24 }}>
        <a href="/" style={{ color: 'var(--text-tertiary)' }}>Home</a> / Disclaimer
      </div>
      <h1 style={{ fontSize: 34, fontWeight: 700, marginBottom: 8 }}>Disclaimer</h1>
      <p style={{ color: 'var(--text-secondary)', marginBottom: 40, fontSize: 14 }}>Laatst bijgewerkt: mei 2026</p>

      <div className="prose">
        <h2>Onafhankelijkheid en objectiviteit</h2>
        <p>
          SlimBoekhoud streeft naar eerlijke, onafhankelijke en zo objectief mogelijke informatie over boekhoud- en factuurprogramma's. Onze beoordelingen zijn gebaseerd op eigen tests en onderzoek, niet op betaalde plaatsing of instructies van softwareleveranciers.
        </p>

        <h2>Affiliate-commissies</h2>
        <p>
          Onze website bevat affiliate-links. Dit betekent dat we een vergoeding kunnen ontvangen als je via onze links een product of dienst aanschaft. Deze vergoeding heeft <strong>geen invloed</strong> op de inhoud van onze reviews, de volgorde van onze rankings of onze aanbevelingen. Producten met een lagere commissie of zonder commissie kunnen hoger in onze lijsten staan dan producten met hogere commissies.
        </p>
        <p>
          We zijn transparant over affiliate-relaties: links naar externe leveranciers zijn gemarkeerd, en we vermelden bij elke vergelijkingspagina dat we mogelijk een vergoeding ontvangen.
        </p>

        <h2>Nauwkeurigheid van informatie</h2>
        <p>
          We doen ons best om de informatie op SlimBoekhoud actueel en correct te houden. Toch kunnen prijzen, functies en voorwaarden van softwarepakketten veranderen zonder dat we dit direct weten. Controleer altijd de actuele informatie op de website van de leverancier voordat je een beslissing neemt.
        </p>
        <p>
          SlimBoekhoud is niet aansprakelijk voor eventuele schade als gevolg van onjuiste of verouderde informatie op onze website.
        </p>

        <h2>Geen financieel of juridisch advies</h2>
        <p>
          De inhoud van SlimBoekhoud is uitsluitend bedoeld als algemene informatie en mag niet worden beschouwd als financieel, boekhoudkundig of juridisch advies. Raadpleeg altijd een gecertificeerde accountant, belastingadviseur of juridisch adviseur voor specifieke situaties.
        </p>

        <h2>Externe links</h2>
        <p>
          Onze website bevat links naar externe websites. SlimBoekhoud is niet verantwoordelijk voor de inhoud, het privacybeleid of de dienstverlening van deze externe websites. Het gebruik van externe links is voor eigen risico.
        </p>

        <h2>Intellectueel eigendom</h2>
        <p>
          Alle teksten, afbeeldingen en andere content op SlimBoekhoud zijn eigendom van SlimBoekhoud, tenzij anders aangegeven. Het is niet toegestaan content te kopiëren of te publiceren zonder schriftelijke toestemming.
        </p>

        <h2>Toepasselijk recht</h2>
        <p>
          Op deze disclaimer en het gebruik van SlimBoekhoud.nl is Nederlands recht van toepassing.
        </p>

        <h2>Contact</h2>
        <p>
          Vragen over deze disclaimer? Stuur een e-mail naar <strong>info@slimboekhoud.nl</strong>.
        </p>
      </div>
    </div>
  )
}
