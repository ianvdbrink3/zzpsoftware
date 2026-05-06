import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: "Eerste klant vinden als ZZP'er | SlimBoekhoud",
  description: "Hoe vind je je eerste klant als startende ZZP'er? Praktische tips over je netwerk inzetten, LinkedIn, freelanceplatforms en koude acquisitie.",
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
        Eerste klant vinden als ZZP'er: bewezen strategieen voor starters
      </h1>
      <p style={{ fontSize: 17, color: 'var(--text-secondary)', marginBottom: 40, lineHeight: 1.7 }}>
        De eerste klant vinden als ZZP'er is often de grootste drempel. Je hebt geen portfolio, geen beoordelingen en geen trackrecord. Toch halen de meeste startende freelancers hun eerste opdracht binnen via kanalen die al binnen handbereik zijn — als je ze actief benut.
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
        <p>Meer dan 70% van alle freelanceopdrachten komt tot stand via persoonlijke contacten. Je oud-collega's, managers, studiegenoten, buren en zelfs vrienden zijn potentiele opdrachtgevers of kunnen jou doorverwijzen. Het is de snelste en meest effectieve manier om je eerste klant te vinden.</p>
        <p>Stuur een persoonlijk bericht naar de mensen in je netwerk waarin je vertelt dat je voor jezelf bent begonnen en wat je aanbiedt. Wees specifiek: "Ik help scale-ups met het opzetten van hun Google Ads campagnes" werkt beter dan "Ik doe marketing". Vraag niet direct om werk, maar vraag of ze iemand kennen die je kan helpen of van je diensten gebruik kan maken.</p>
        <h3>Ex-werkgever als eerste klant</h3>
        <p>Je vorige werkgever kennen je al, weten wat je waard bent en hebben mogelijk een directe behoefte. Veel ZZP'ers starten hun vrijheid met een opdracht voor het bedrijf waar ze in loondienst waren. Wees wel bewust van non-concurrentiebedingen in je arbeidscontract — raadpleeg bij twijfel een jurist.</p>

        <h2>LinkedIn: je digitale visitekaartje</h2>
        <p>LinkedIn is voor de meeste B2B-freelancers het belangrijkste sociale platform. Voordat je begint met actief netwerken, zorg je dat je profiel op orde is. Dat betekent: een professionele profielfoto, een duidelijke kopregel ("Freelance UX Designer | E-commerce en SaaS"), een samenvattende sectie die je specialisatie en werkwijze beschrijft, en werkervaring die je expertise aantoont.</p>
        <h3>Content plaatsen werkt</h3>
        <p>Deel regelmatig inhoudelijke berichten over je vakgebied. Geen promotie, maar kennis: een inzicht, een aanpak die werkte, een veelgemaakte fout in jouw branche. Als je consistent waardevolle content deelt, groeien je bereik en autoriteit. Opdrachtgevers zoeken freelancers die aantoonbaar weten waar ze over praten.</p>
        <p>Verbind je ook actief met beslissers in je doelgroep: marketing managers, IT-directeuren, HR-professionals — wie ook maar de inkoopbeslissing neemt voor jouw diensten. Een persoonlijk connectieverzoek met een korte toelichting converteert beter dan een blinde uitnodiging.</p>

        <h2>Freelanceplatforms gebruiken</h2>
        <p>Freelanceplatforms verbinden opdrachtgevers direct met freelancers. Voor specifieke disciplines zijn ze bijzonder effectief bij het vinden van je eerste klanten. Bekende platforms in Nederland zijn Malt, Jellow, YER, Freelancer.nl, People4Business en voor IT-profielen ook Twago en Toptal.</p>
        <h3>Hoe val je op als starter?</h3>
        <p>Zonder beoordelingen is het moeilijker om opdrachten te winnen. Compenseer dit door je profiel zo compleet mogelijk in te vullen, voorbeeldwerk te tonen (ook pro-bono of eigen projecten), en een scherp begintarief te hanteren. Neem de eerste paar opdrachten aan voor minder dan je streeftarief als dat je een recensie en referentie oplevert.</p>
        <p>Reageer snel op aanvragen — binnen een uur reageren verhoogt je kans op succes aanzienlijk. Schrijf een gerichte offerte die laat zien dat je de opdracht gelezen hebt en begrijpt wat de opdrachtgever nodig heeft.</p>

        <h2>Koude acquisitie: direct benaderen werkt</h2>
        <p>Koude acquisitie — bedrijven benaderen zonder vooraf contact — heeft een lage conversieratio maar kan zeer effectief zijn als je het systematisch aanpakt. De sleutel is relevantie: benader alleen bedrijven waarbij je oprecht een bijdrage kunt leveren, en laat dat duidelijk merken in je boodschap.</p>
        <p>Maak een lijst van 20 tot 30 bedrijven die jouw ideale opdrachtgever zijn. Zoek de juiste contactpersoon op LinkedIn of de bedrijfswebsite. Stuur een korte, persoonlijke e-mail van maximaal 5 regels: benoem wat je hebt gezien bij hun bedrijf, leg de link naar wat jij doet, en vraag om een kort gesprek van 15 minuten. Geen verkooppraatje, maar een gerichte observatie.</p>
        <h3>Follow-up is cruciaal</h3>
        <p>De meeste mensen reageren pas na 2 of 3 contactmomenten. Plan een follow-up e-mail of LinkedIn-berichtje in na 5 tot 7 werkdagen als je geen reactie hebt ontvangen. Wees vriendelijk en niet opdringerig. Na 2 follow-ups laat je het los en ga je naar de volgende op je lijst.</p>

        <h2>Netwerkevenementen en communities</h2>
        <p>Fysieke en online netwerkevenementen zijn een uitstekende manier om warm contact te leggen. Bezoek branche-evenementen, meetups en ZZP-bijeenkomsten in je regio. Wees nieuwsgierig naar anderen in plaats van direct jezelf te verkopen — de mensen die geven komen terug.</p>
        <p>Online communities op Slack, Discord of branchespecifieke forums zijn ook waardevol. Help anderen, beantwoord vragen en deel je kennis. Zo bouw je reputatie op die uiteindelijk leidt tot inkomende vragen en doorverwijzingen.</p>
      </div>

      <div style={{ background: 'var(--accent-light)', border: '1px solid var(--accent)', borderRadius: 16, padding: '28px 32px', textAlign: 'center', marginTop: 48 }}>
        <h3 style={{ fontSize: 20, fontWeight: 700, marginTop: 0, marginBottom: 8, color: 'var(--accent-text)' }}>Klaar voor je eerste factuur?</h3>
        <p style={{ color: 'var(--accent-text)', margin: '0 0 20px', opacity: 0.85 }}>Kies boekhoudprogramma waarmee je direct professionele facturen verstuurt zodra je eerste klant ja zegt.</p>
        <a href="/boekhoudprogramma" className="btn-primary" style={{ fontSize: 15, padding: '12px 28px' }}>Vergelijk software →</a>
      </div>
    </div>
  )
}
