import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: "Eerste klant vinden ZZP: bewezen strategieën",
  description: "Geen portfolio, geen trackrecord? 70% van freelance opdrachten komt via je netwerk. Zo vind je je eerste klant als startende ZZP'er.",
}

export default function EersteKlantVindenZzpPage() {
  return (
    <div style={{ maxWidth: 780, margin: '0 auto', padding: '48px 24px' }}>
      <div style={{ fontSize: 13, color: 'var(--text-tertiary)', marginBottom: 24 }}>
        <a href="/" style={{ color: 'var(--text-tertiary)' }}>Home</a> / <a href="/gids" style={{ color: 'var(--text-tertiary)' }}>Gidsen</a> / Eerste klant vinden
      </div>

      <div style={{ display: 'flex', gap: 8, marginBottom: 20, flexWrap: 'wrap' }}>
        <span className="badge badge-green">Acquisitie</span>
        <span style={{ fontSize: 13, color: 'var(--text-tertiary)' }}>Bijgewerkt mei 2026 · 8 min leestijd</span>
      </div>

      <h1 style={{ fontSize: 'clamp(26px, 4vw, 38px)', fontWeight: 700, marginBottom: 16, lineHeight: 1.2 }}>
        Eerste klant vinden als ZZP&apos;er: bewezen strategieën voor starters
      </h1>
      <p style={{ fontSize: 17, color: 'var(--text-secondary)', marginBottom: 40, lineHeight: 1.7 }}>
        De eerste klant vinden als ZZP&apos;er is vaak de grootste drempel. Je hebt geen portfolio, geen beoordelingen en geen trackrecord. Toch halen de meeste startende freelancers hun eerste opdracht binnen via kanalen die al binnen handbereik zijn.
      </p>

      <div className="card" style={{ padding: '20px 24px', marginBottom: 40, background: 'var(--accent-light)', border: '1px solid var(--accent)' }}>
        <div style={{ fontWeight: 600, marginBottom: 10, color: 'var(--accent-text)' }}>In het kort</div>
        <ul style={{ margin: 0, paddingLeft: 20 }}>
          {[
            'Je bestaande netwerk is veruit de snelste bron voor je eerste opdracht',
            'LinkedIn is onmisbaar: optimaliseer je profiel voordat je begint met netwerken',
            'Freelanceplatforms werken goed voor specifieke disciplines zoals IT, design en tekst',
            'Koude acquisitie is tijdrovend maar effectief als je het systematisch aanpakt',
          ].map(item => (
            <li key={item} style={{ marginBottom: 6, fontSize: 14, color: 'var(--accent-text)' }}>{item}</li>
          ))}
        </ul>
      </div>

      <div className="prose">
        <h2>Stap 1: Activeer je bestaande netwerk</h2>
        <p>Meer dan 70% van alle freelanceopdrachten komt tot stand via persoonlijke contacten. Oud-collega&apos;s, managers, studiegenoten en vrienden zijn potentiële opdrachtgevers of kunnen jou doorverwijzen.</p>
        <p>Stuur een persoonlijk bericht met wat je aanbiedt. Wees specifiek: &apos;Ik help scale-ups met Google Ads campagnes&apos; werkt beter dan &apos;Ik doe marketing&apos;. Vraag niet direct om werk, maar vraag of ze iemand kennen die van je diensten gebruik kan maken.</p>

        <h3>Ex-werkgever als eerste klant</h3>
        <p>Je vorige werkgever kent jou al en weet wat je waard bent. Veel ZZP&apos;ers starten met een opdracht voor het bedrijf waar ze in loondienst waren. Let wel op non-concurrentiebedingen in je arbeidscontract.</p>

        <h2>LinkedIn: je digitale visitekaartje</h2>
        <p>Voor de meeste B2B-freelancers is LinkedIn het belangrijkste platform. Zorg eerst dat je profiel op orde is: professionele foto, duidelijke kopregel en een samenvattende sectie over je specialisatie.</p>

        <h3>Content plaatsen werkt</h3>
        <p>Deel regelmatig inhoudelijke berichten over je vakgebied — geen promotie, maar kennis. Als je consistent waardevolle content deelt, groeien je bereik en autoriteit. Opdrachtgevers zoeken freelancers die aantoonbaar weten waar ze over praten.</p>

        <h2>Freelanceplatforms gebruiken</h2>
        <p>Platforms als Malt, Jellow, YER en Freelancer.nl verbinden opdrachtgevers direct met freelancers. Voor specifieke disciplines zijn ze bijzonder effectief.</p>

        <h3>Hoe val je op als starter?</h3>
        <p>Zonder beoordelingen is het moeilijker te winnen. Compenseer door je profiel compleet in te vullen, voorbeeldwerk te tonen en een scherp begintarief te hanteren. Reageer snel op aanvragen — binnen een uur reageren verhoogt je kans aanzienlijk.</p>

        <h2>Koude acquisitie: direct benaderen werkt</h2>
        <p>Maak een lijst van 20–30 bedrijven die je ideale opdrachtgever zijn. Zoek de juiste contactpersoon en stuur een korte, persoonlijke e-mail van maximaal 5 regels. Geen verkooppraatje, maar een gerichte observatie over hun bedrijf en hoe jij kunt helpen.</p>

        <h3>Follow-up is cruciaal</h3>
        <p>De meeste mensen reageren pas na 2 of 3 contactmomenten. Plan een follow-up in na 5–7 werkdagen. Na 2 follow-ups laat je het los en ga je naar de volgende op je lijst.</p>

        <h2>Netwerkevenementen en communities</h2>
        <p>Bezoek branche-evenementen, meetups en ZZP-bijeenkomsten. Wees nieuwsgierig naar anderen in plaats van direct jezelf te verkopen. Online communities op Slack of Discord zijn ook waardevol voor het opbouwen van reputatie.</p>

        <h2>Klaar voor je eerste factuur?</h2>
        <p>
          Zodra je eerste klant ja zegt, stuur je direct een professionele factuur. Kies voor die eerste factuur al een <a href="/boekhoudprogramma" style={{ color: 'var(--accent)' }}>goed boekhoudprogramma</a>. <a href="/tools/moneybird" style={{ color: 'var(--accent)' }}>Moneybird</a> heeft een gratis instapversie die perfect is voor starters. <a href="/tools/jortt" style={{ color: 'var(--accent)' }}>Jortt</a> is de snelste optie voor je eerste factuur — in 2 minuten klaar.
        </p>
      </div>

      <div style={{ background: 'var(--accent-light)', border: '1px solid var(--accent)', borderRadius: 16, padding: '28px 32px', textAlign: 'center', marginTop: 48 }}>
        <h3 style={{ fontSize: 20, fontWeight: 700, marginTop: 0, marginBottom: 8, color: 'var(--accent-text)' }}>Klaar voor je eerste factuur?</h3>
        <p style={{ color: 'var(--accent-text)', margin: '0 0 20px', opacity: 0.85 }}>Kies een boekhoudprogramma waarmee je direct professionele facturen verstuurt zodra je eerste klant ja zegt.</p>
        <a href="/boekhoudprogramma" className="btn-primary" style={{ fontSize: 15, padding: '12px 28px' }}>Vergelijk boekhoudprogramma&apos;s →</a>
      </div>
    </div>
  )
}
