import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: "ZZP Administratie Gidsen — Tips en Uitleg",
  description: "Praktische gidsen voor ZZP'ers over boekhouden, BTW-aangifte en administratie.",
}

const guides = [
  { slug: 'boekhouden-als-zzper', title: "Boekhouden als ZZP'er: de complete gids 2026", desc: "Alles wat je moet weten over je administratie als zelfstandige.", readTime: 12, category: 'Boekhouden' },
  { slug: 'btw-aangifte-zzp', title: "BTW-aangifte doen als ZZP'er: stap voor stap", desc: "Hoe werkt de BTW-aangifte? Wanneer moet je het doen?", readTime: 8, category: 'BTW' },
  { slug: 'factuur-opmaken-zzp', title: "Factuur opmaken als ZZP'er: wat moet erin?", desc: "Een correcte factuur sturen voorkomt problemen.", readTime: 6, category: 'Facturatie' },
  { slug: 'administratie-tips-zzp', title: "10 administratietips die ZZP'ers tijd besparen", desc: "Praktische tips om je administratie efficiënt bij te houden.", readTime: 7, category: 'Tips' },
  { slug: 'urenregistratie-zzp', title: "Urenregistratie voor ZZP'ers: waarom en hoe?", desc: "Als ZZP'er is urenregistratie niet altijd verplicht, maar wel slim.", readTime: 5, category: 'Urenregistratie' },
  { slug: 'boekhouder-of-software', title: "Boekhouder of software: wat kies jij als ZZP'er?", desc: "Moet je een boekhouder inhuren of kun je het zelf doen?", readTime: 9, category: 'Advies' },
]

export default function GidsPage() {
  return (
    <div style={{ maxWidth: 900, margin: '0 auto', padding: '48px 24px' }}>
      <div style={{ fontSize: 13, color: 'var(--text-tertiary)', marginBottom: 24 }}>
        <a href="/" style={{ color: 'var(--text-tertiary)' }}>Home</a> / Gidsen
      </div>
      <h1 style={{ fontSize: 34, fontWeight: 700, marginBottom: 8 }}>ZZP Administratie Gidsen</h1>
      <p style={{ color: 'var(--text-secondary)', marginBottom: 40, fontSize: 16 }}>Praktische gidsen over boekhouden, BTW en administratie voor zelfstandigen.</p>
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))', gap: 20 }}>
        {guides.map(guide => (
          <a key={guide.slug} href={`/gids/${guide.slug}`} className="card" style={{ padding: 24, display: 'block', cursor: 'pointer' }}>
            <div className="badge badge-green" style={{ marginBottom: 12 }}>{guide.category}</div>
            <h2 style={{ fontSize: 16, fontWeight: 600, marginTop: 0, marginBottom: 8, lineHeight: 1.4 }}>{guide.title}</h2>
            <p style={{ fontSize: 13, color: 'var(--text-secondary)', margin: '0 0 12px' }}>{guide.desc}</p>
            <div style={{ fontSize: 12, color: 'var(--text-tertiary)' }}>⏱ {guide.readTime} min leestijd</div>
          </a>
        ))}
      </div>
    </div>
  )
}
