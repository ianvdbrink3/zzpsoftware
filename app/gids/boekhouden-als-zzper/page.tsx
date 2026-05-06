import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: "Boekhouden als ZZP'er: de complete gids 2026",
  description: "Alles wat je moet weten over boekhouden als zelfstandige. Van je administratie bijhouden tot BTW-aangifte en de beste software kiezen.",
}

export default function BoekhoudenGidsPage() {
  return (
    <div style={{ maxWidth: 780, margin: '0 auto', padding: '48px 24px' }}>
      <div style={{ fontSize: 13, color: 'var(--text-tertiary)', marginBottom: 24 }}>
        <a href="/" style={{ color: 'var(--text-tertiary)' }}>Home</a> / <a href="/gids" style={{ color: 'var(--text-tertiary)' }}>Gidsen</a> / Boekhouden als ZZP'er
      </div>

      <div style={{ display: 'flex', gap: 8, marginBottom: 20, flexWrap: 'wrap' }}>
        <span className="badge badge-green">Boekhouden</span>
        <span style={{ fontSize: 13, color: 'var(--text-tertiary)' }}>📅 Bijgewerkt mei 2026 · ⏱ 12 min leestijd</span>
      </div>

      <h1 style={{ fontSize: 'clamp(26px, 4vw, 38px)', fontWeight: 700, marginBottom: 16, lineHeight: 1.2 }}>
        Boekhouden als ZZP'er: de complete gids 2026
      </h1>
      <p style={{ fontSize: 17, color: 'var(--text-secondary)', marginBottom: 40, lineHeight: 1.7 }}>
        Als ZZP'er ben je verplicht een administratie bij te houden. Maar wat houdt dat precies in, wat zijn de regels en hoe doe je het zo efficiënt mogelijk? In deze gids leg ik het stap voor stap uit.
      </p>

      <div className="card" style={{ padding: '20px 24px', marginBottom: 40, background: 'var(--accent-light)', border: '1px solid var(--accent)' }}>
        <div style={{ fontWeight: 600, marginBottom: 10, color: 'var(--accent-text)' }}>In het kort</div>
        <ul style={{ margin: 0, paddingLeft: 20 }}>
          {[
            "Je bent als ZZP'er verplicht je administratie 7 jaar te bewaren",
            'Elk kwartaal doe je BTW-aangifte (tenzij je de KOR hebt)',
            'Je betaalt inkomstenbelasting over je winst (omzet minus kosten)',
            'Een goed boekhoudprogramma bespaart je 3-5 uur per maand',
          ].map(item => (
            <li key={item} style={{ marginBottom: 6, fontSize: 14, color: 'var(--accent-text)' }}>{item}</li>
          ))}
        </ul>
      </div>

      <div className="prose">
        <h2>Waarom is boekhouden verplicht voor ZZP'ers?</h2>
        <p>
          De Belastingdienst verplicht iedere ondernemer — ook ZZP'ers — om een volledige administratie bij te houden. Dit is niet alleen voor de belasting: een goede administratie geeft jou ook inzicht in hoe je bedrijf er financieel voor staat. Je weet precies hoeveel je verdient, wat je kosten zijn en of je op schema ligt om je financiële doelen te halen.
        </p>
        <p>
          Concreet ben je verplicht om de volgende zaken bij te houden: alle inkomsten en uitgaven, verzonden en ontvangen facturen, bankafschriften, bonnen en kassabonnen van zakelijke uitgaven, en contracten met klanten en leveranciers. De bewaarplicht is 7 jaar — dat wil zeggen dat je alles minimaal 7 jaar moet kunnen overleggen als de Belastingdienst erom vraagt.
        </p>

        <h2>Wat hoort er in je administratie?</h2>
        <p>Een volledige ZZP-administratie bestaat uit de volgende onderdelen:</p>

        <h3>1. Verkoopadministratie (je facturen)</h3>
        <p>
          Elke dienst of product die je levert, factuur je aan je klant. Een correcte factuur bevat je naam en adres, het KVK-nummer, het BTW-nummer, een uniek factuurnummer, de datum, een omschrijving van de werkzaamheden, het bedrag exclusief BTW, het BTW-percentage en -bedrag, en het totaalbedrag inclusief BTW.
        </p>
        <p>
          Bewaar elke uitgaande factuur. De meeste boekhoudprogramma's doen dit automatisch en nummeren de facturen voor je door.
        </p>

        <h3>2. Inkoopadministratie (je kosten)</h3>
        <p>
          Alle zakelijke uitgaven hoor je te bewaren: de huur van je werkplek, softwareabonnementen, kantoormateriaal, reiskosten, telefoonkosten (voor het zakelijke deel), trainingen en cursussen, marketingkosten en meer. Maak een foto van bonnen met je telefoon — veel boekhoudapps hebben een ingebouwde bonnenscanner.
        </p>

        <h3>3. Bankadministratie</h3>
        <p>
          Zorg dat je een aparte zakelijke bankrekening hebt. Dit is niet wettelijk verplicht, maar maakt je administratie een stuk overzichtelijker. Alle zakelijke inkomsten en uitgaven lopen dan via één rekening. De meeste boekhoudprogramma's koppelen direct met je bank — transacties worden dan automatisch geïmporteerd.
        </p>

        <h3>4. Urenstaat (optioneel maar slim)</h3>
        <p>
          Als ZZP'er heb je recht op de zelfstandigenaftrek: een belastingvoordeel van €2.470 per jaar (2026). Voorwaarde is dat je minimaal 1.225 uur per jaar aan je onderneming besteedt. Je hoeft dit niet te bewijzen met een urenstaat, maar het is verstandig om het wel bij te houden voor het geval de Belastingdienst vragen stelt.
        </p>

        <h2>Hoe doe je je BTW-aangifte als ZZP'er?</h2>
        <p>
          De meeste ZZP'ers zijn BTW-plichtig en doen elk kwartaal aangifte bij de Belastingdienst. Je berekent het verschil tussen de BTW die je hebt ontvangen van klanten (omzetbelasting) en de BTW die je zelf hebt betaald op zakelijke uitgaven (voorbelasting). Het verschil draag je af — of je krijgt het terug als je meer hebt betaald dan ontvangen.
        </p>
        <p>
          De deadlines voor kwartaalaangifte zijn: 30 april (Q1), 31 juli (Q2), 31 oktober (Q3) en 31 januari (Q4). Vergeet je de deadline? Dan krijg je een boete van minimaal €68.
        </p>
        <p>
          <strong>Tip:</strong> zet de bedragen opzij op een aparte spaarrekening. Een vuistregel: reserveer 21% van je omzet voor BTW (bij 21% BTW-tarief). Dan kom je nooit voor verrassingen te staan.
        </p>

        <h2>De Kleine Ondernemersregeling (KOR)</h2>
        <p>
          Heb je een jaaromzet onder de €20.000? Dan kun je kiezen voor de KOR. Voordelen: je berekent geen BTW op je facturen, je doet geen BTW-aangifte en je hebt minder administratieve lasten. Nadeel: je kunt ook geen BTW terugvragen op je kosten. Voor starters met weinig kosten is de KOR vaak aantrekkelijk.
        </p>

        <h2>Inkomstenbelasting als ZZP'er</h2>
        <p>
          Anders dan een werknemer word je als ZZP'er belast op je winst: omzet minus aftrekbare kosten. Aftrekbare kosten zijn alle zakelijke uitgaven die je hebt gedaan om je omzet te genereren. Denk aan je boekhoudprogramma, telefoon, laptop, werkplek en reiskosten.
        </p>
        <p>
          Daarnaast heb je als ZZP'er recht op specifieke aftrekposten:
        </p>
        <ul>
          <li><strong>Zelfstandigenaftrek:</strong> €2.470 (2026) als je meer dan 1.225 uur per jaar werkt</li>
          <li><strong>Startersaftrek:</strong> extra €2.123 in de eerste 3 jaar</li>
          <li><strong>MKB-winstvrijstelling:</strong> 13,31% vrijstelling op je winst na aftrekposten</li>
        </ul>
        <p>
          Het belastingtarief in box 1 is progressief: over de eerste €75.518 betaal je 36,97%, daarboven 49,50% (tarieven 2026).
        </p>
        <p>
          <strong>Reserveer maandelijks:</strong> zet elke maand 25-30% van je netto-omzet opzij voor inkomstenbelasting. Dan sta je nooit voor verrassingen in maart als je aangifte doet.
        </p>

        <h2>Zelf boekhouden of uitbesteden?</h2>
        <p>
          Veel ZZP'ers beginnen met zelf boekhouden via een softwarepakket. Dit is voor de meeste starters prima te doen en bespaart kosten. Een boekhouder kost al snel €100-300 per maand. Met een goed boekhoudprogramma ben je daar zelf 1-2 uur per maand mee bezig.
        </p>
        <p>
          Overweeg wél een boekhouder in te schakelen als: je omzet groeit boven de €100.000, je personeel in dienst neemt, je veel complexe zakelijke transacties hebt, of als je gewoon liever je tijd aan je vak besteedt dan aan administratie.
        </p>

        <h2>Het beste boekhoudprogramma voor ZZP'ers</h2>
        <p>
          Een goed boekhoudprogramma koppelt met je bank, genereert professionele facturen, berekent je BTW automatisch en helpt je aangifte doen. De meest populaire opties voor ZZP'ers zijn:
        </p>
      </div>

      <div style={{ display: 'flex', flexDirection: 'column', gap: 14, marginTop: 8, marginBottom: 40 }}>
        {[
          { name: 'Moneybird', slug: 'moneybird', desc: 'Meest gebruiksvriendelijk, gratis startplan', price: 'Gratis / €14/mnd' },
          { name: 'Jortt', slug: 'jortt', desc: 'Simpelste interface, ideaal voor beginners', price: 'Vanaf €7/mnd' },
          { name: 'Snelstart', slug: 'snelstart', desc: 'Meeste functies, goede prijs-kwaliteit', price: 'Vanaf €9/mnd' },
        ].map(tool => (
          <div key={tool.slug} className="card" style={{ padding: '16px 20px', display: 'flex', justifyContent: 'space-between', alignItems: 'center', gap: 12, flexWrap: 'wrap' }}>
            <div>
              <span style={{ fontWeight: 600 }}>{tool.name}</span>
              <span style={{ fontSize: 13, color: 'var(--text-secondary)', marginLeft: 10 }}>{tool.desc}</span>
            </div>
            <div style={{ display: 'flex', gap: 8, alignItems: 'center' }}>
              <span style={{ fontSize: 13, color: 'var(--text-tertiary)' }}>{tool.price}</span>
              <a href={`/tools/${tool.slug}`} className="btn-secondary" style={{ fontSize: 13, padding: '6px 14px' }}>Lees meer</a>
            </div>
          </div>
        ))}
      </div>

      <div className="prose">
        <h2>Veelgemaakte fouten bij ZZP-administratie</h2>
        <ul>
          <li><strong>Privé en zakelijk door elkaar halen:</strong> open een aparte zakelijke rekening en betaal alle zakelijke kosten daaruit.</li>
          <li><strong>Bonnen weggooien:</strong> maak altijd een digitale foto. De meeste apps hebben een ingebouwde scanner.</li>
          <li><strong>BTW niet reserveren:</strong> zet 21% van elke factuur opzij. Anders kom je elk kwartaal tekort.</li>
          <li><strong>Te laat beginnen:</strong> begin met je boekhouding zodra je eerste klant betaalt, niet achteraf als je een jaar moet reconstrueren.</li>
          <li><strong>Uren niet bijhouden:</strong> je hebt de zelfstandigenaftrek alleen als je 1.225+ uur per jaar werkt. Houd een simpel urenoverzicht bij.</li>
        </ul>

        <h2>Conclusie</h2>
        <p>
          Boekhouden als ZZP'er hoeft niet ingewikkeld te zijn. Met een goed boekhoudprogramma ben je er maandelijks 1-2 uur mee bezig. De sleutel: doe het direct en consequent, niet achteraf als je maanden aan bonnen moet reconstrueren.
        </p>
        <p>
          Begin met Moneybird (gratis startplan) of Jortt (meest intuïtief) en kijk wat het beste bij je past. Beide bieden een gratis proefperiode van 30 dagen.
        </p>
      </div>

      <div style={{ background: 'var(--accent-light)', border: '1px solid var(--accent)', borderRadius: 16, padding: '28px 32px', textAlign: 'center', marginTop: 48 }}>
        <h3 style={{ fontSize: 20, fontWeight: 700, marginTop: 0, marginBottom: 8, color: 'var(--accent-text)' }}>Vergelijk alle boekhoudprogramma's</h3>
        <p style={{ color: 'var(--accent-text)', margin: '0 0 20px', opacity: 0.85 }}>Bekijk onze onafhankelijke vergelijking van 6 populaire programma's voor ZZP'ers.</p>
        <a href="/boekhoudprogramma" className="btn-primary" style={{ fontSize: 15, padding: '12px 28px' }}>Bekijk vergelijking →</a>
      </div>
    </div>
  )
}
