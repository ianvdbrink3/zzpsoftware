import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: "ZZP Administratie Gidsen — Tips en Uitleg",
  description: "Praktische gidsen voor ZZP'ers over boekhouden, BTW-aangifte en administratie.",
}

const guides = [
  { slug: 'boekhouden-als-zzper', title: "Boekhouden als ZZP'er: de complete gids 2026", desc: "Alles wat je moet weten over je administratie als zelfstandige.", readTime: 12, category: 'Boekhouden' },
  { slug: 'btw-aangifte-zzp', title: "BTW-aangifte doen als ZZP'er: stap voor stap", desc: "Hoe werkt de BTW-aangifte? Wanneer moet je het doen?", readTime: 8, category: 'BTW' },
  { slug: 'factuur-opmaken-zzp', title: "Factuur opmaken als ZZP'er: wat moet erin?", desc: "Een correcte factuur sturen voorkomt problemen.", readTime: 6, category: 'Facturatie' },
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
            <div style={{ fontSize: 12, color: 'var(--text-tertiary)' }}>{guide.readTime} min leestijd</div>
          </a>
        ))}
        <div className="card" style={{ padding: 24, display: 'flex', flexDirection: 'column', justifyContent: 'center', border: '2px dashed var(--border)', background: 'var(--bg-subtle)' }}>
          <div style={{ fontWeight: 600, marginBottom: 8 }}>Meer gidsen komen eraan</div>
          <p style={{ fontSize: 13, color: 'var(--text-secondary)', margin: '0 0 14px' }}>We werken aan nieuwe gidsen over urenregistratie, boekhouder vs software en meer.</p>
          <a href="/api/subscribe" className="btn-secondary" style={{ fontSize: 13, justifyContent: 'center' }}>Ontvang updates →</a>
        </div>
      </div>
    </div>
  )
}
