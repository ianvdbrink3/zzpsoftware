import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: "ZZP Administratie Gidsen 2026 — Praktische Tips & Uitleg",
  description: "Praktische gidsen voor ZZP'ers over boekhouden, BTW, belasting, starten en administratie. Alles wat je nodig hebt als zelfstandige.",
}

const guides = [
  { slug: 'boekhouden-als-zzper', title: "Boekhouden als ZZP'er: de complete gids 2026", desc: "Alles wat je moet weten over je administratie als zelfstandige.", readTime: 12, category: 'Boekhouden' },
  { slug: 'btw-aangifte-zzp', title: "BTW-aangifte doen als ZZP'er: stap voor stap", desc: "Hoe werkt de BTW-aangifte? Wanneer moet je het doen en wat zijn de deadlines?", readTime: 8, category: 'BTW' },
  { slug: 'factuur-opmaken-zzp', title: "Factuur opmaken als ZZP'er: wat moet erin?", desc: "Een correcte factuur sturen voorkomt problemen met klanten en de Belastingdienst.", readTime: 6, category: 'Facturatie' },
  { slug: 'kvk-inschrijven-zzp', title: "KVK inschrijven als ZZP'er: zo doe je het", desc: "Stap-voor-stap uitleg van de KVK-inschrijving: kosten, wat je nodig hebt en wat daarna.", readTime: 6, category: 'Starten' },
  { slug: 'urenregistratie-zzp', title: "Urenregistratie voor ZZP'ers: waarom en hoe?", desc: "Hoe houd je uren bij voor de zelfstandigenaftrek en wat is de urennorm van 1.225 uur?", readTime: 7, category: 'Administratie' },
  { slug: 'boekhouder-of-software', title: "Boekhouder of boekhoudprogramma: wat kies jij?", desc: "Vergelijking van kosten, voor- en nadelen van zelf boekhouden vs. een boekhouder inhuren.", readTime: 8, category: 'Advies' },
  { slug: 'zakelijke-rekening-zzp', title: "Zakelijke bankrekening voor ZZP'ers: nodig of niet?", desc: "Is een zakelijke rekening verplicht? Welke bank is het goedkoopst? Alles uitgelegd.", readTime: 5, category: 'Bankieren' },
  { slug: 'offertes-maken-zzp', title: "Professionele offerte maken als ZZP'er", desc: "Wettelijke eisen, opbouw van een goede offerte en tips om sneller akkoord te krijgen.", readTime: 6, category: 'Facturatie' },
  { slug: 'zelfstandigenaftrek-2026', title: "Zelfstandigenaftrek 2026: bedrag, voorwaarden en berekening", desc: "Hoeveel is de zelfstandigenaftrek in 2026? Wat zijn de voorwaarden en hoeveel bespaar je?", readTime: 7, category: 'Belasting' },
  { slug: 'kor-kleine-ondernemersregeling', title: "KOR: de Kleine Ondernemersregeling uitgelegd", desc: "Wat is de KOR, voor wie is het interessant en hoe meld je je aan bij de Belastingdienst?", readTime: 7, category: 'BTW' },
  { slug: 'inkomstenbelasting-zzp', title: "Inkomstenbelasting als ZZP'er: tarieven en aftrekposten 2026", desc: "Hoe werkt inkomstenbelasting voor zelfstandigen? Tarieven, aftrekposten en aangifte uitgelegd.", readTime: 9, category: 'Belasting' },
  { slug: 'administratie-bewaarplicht', title: "Bewaarplicht administratie: wat moet je hoe lang bewaren?", desc: "De Belastingdienst verplicht je 7 jaar bewaarplicht. Wat bewaar je, hoe en in welke vorm?", readTime: 5, category: 'Administratie' },
  { slug: 'zzp-tarief-bepalen', title: "Uurtarief bepalen als ZZP'er: de juiste berekening", desc: "Hoe bepaal je een realistisch uurtarief? Inclusief berekening met kosten, belasting en winst.", readTime: 8, category: 'Financieel' },
  { slug: 'zakelijke-kosten-aftrekken', title: "Zakelijke kosten aftrekken als ZZP'er", desc: "Welke kosten zijn aftrekbaar? Hoe ga je om met gemengd gebruik en bonnen bewaren?", readTime: 7, category: 'Belasting' },
  { slug: 'btw-nummer-aanvragen', title: "BTW-nummer aanvragen als ZZP'er: zo werkt het", desc: "Hoe vraag je een BTW-nummer aan, wat is het verschil met het OB-nummer en hoe lang duurt het?", readTime: 5, category: 'BTW' },
  { slug: 'pensioen-zzp', title: "Pensioen als ZZP'er: zelf regelen en slim sparen", desc: "Als ZZP'er bouw je geen pensioen op via een werkgever. Welke opties heb je en hoeveel heb je nodig?", readTime: 9, category: 'Financieel' },
  { slug: 'arbeidsongeschiktheidsverzekering-zzp', title: "AOV voor ZZP'ers: arbeidsongeschiktheidsverzekering uitgelegd", desc: "Wat is een AOV, wat kost het, wat is een broodfonds en wanneer sluit je af?", readTime: 8, category: 'Verzekering' },
  { slug: 'eerste-klant-vinden-zzp', title: "Eerste klant vinden als ZZP'er: praktische aanpak", desc: "Hoe vind je je eerste opdrachtgever? Netwerk, LinkedIn, platforms en koude acquisitie.", readTime: 8, category: 'Acquisitie' },
  { slug: 'algemene-voorwaarden-zzp', title: "Algemene voorwaarden als ZZP'er: waarom en wat erin?", desc: "Bescherm je als ZZP'er met goede algemene voorwaarden. Wat moet erin en hoe pas je ze toe?", readTime: 6, category: 'Juridisch' },
  { slug: 'digitale-bonnen-bewaren', title: "Digitale bonnen bewaren: wat accepteert de Belastingdienst?", desc: "Mag je bonnen inscannen en het origineel weggooien? Welke apps werken het beste?", readTime: 5, category: 'Administratie' },
  { slug: 'freelance-contract-zzp', title: "Freelance contract als ZZP'er: wat moet erin?", desc: "Een goed contract beschermt je als opdrachtnemer. Wettelijke eisen, modelcontract en tips.", readTime: 7, category: 'Juridisch' },
  { slug: 'jaarrekening-zzp', title: "Jaarrekening als ZZP'er: wanneer verplicht en hoe opstellen?", desc: "Wanneer moet je als ZZP'er een jaarrekening maken en hoe doe je dat met boekhoudprogramma?", readTime: 6, category: 'Administratie' },
  { slug: 'schijnzelfstandigheid-zzp', title: "Schijnzelfstandigheid 2026: risico's en hoe je het voorkomt", desc: "Wat is schijnzelfstandigheid, wat zijn de risico's van de DBA-wet en hoe bescherm je jezelf?", readTime: 8, category: 'Juridisch' },
]

const CATEGORIES = ['Alle', 'Boekhouden', 'BTW', 'Belasting', 'Administratie', 'Facturatie', 'Starten', 'Financieel', 'Juridisch', 'Advies', 'Bankieren', 'Verzekering', 'Acquisitie']

export default function GidsPage() {
  return (
    <div style={{ maxWidth: 1000, margin: '0 auto', padding: '48px 24px' }}>
      <div style={{ fontSize: 13, color: 'var(--text-tertiary)', marginBottom: 24 }}>
        <a href="/" style={{ color: 'var(--text-tertiary)' }}>Home</a> / Gidsen
      </div>
      <h1 style={{ fontSize: 36, fontWeight: 700, marginBottom: 8 }}>ZZP Administratie Gidsen</h1>
      <p style={{ color: 'var(--text-secondary)', marginBottom: 12, fontSize: 16, maxWidth: 620 }}>
        Praktische gidsen over boekhouden, belasting, starten en administratie voor zelfstandigen. Geschreven voor ZZP'ers, bijgewerkt voor 2026.
      </p>
      <p style={{ color: 'var(--text-tertiary)', marginBottom: 40, fontSize: 14 }}>{guides.length} gidsen beschikbaar</p>

      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(290px, 1fr))', gap: 20 }}>
        {guides.map(guide => (
          <a key={guide.slug} href={`/gids/${guide.slug}`} className="card" style={{ padding: 24, display: 'block', cursor: 'pointer' }}>
            <div style={{ display: 'flex', gap: 8, marginBottom: 12, alignItems: 'center', flexWrap: 'wrap' }}>
              <span className="badge badge-green">{guide.category}</span>
              <span style={{ fontSize: 11, color: 'var(--text-tertiary)' }}>{guide.readTime} min</span>
            </div>
            <h2 style={{ fontSize: 15, fontWeight: 600, marginTop: 0, marginBottom: 8, lineHeight: 1.4, color: 'var(--text)' }}>{guide.title}</h2>
            <p style={{ fontSize: 13, color: 'var(--text-secondary)', margin: 0, lineHeight: 1.55 }}>{guide.desc}</p>
          </a>
        ))}
      </div>
    </div>
  )
}
