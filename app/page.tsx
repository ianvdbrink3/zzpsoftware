import { getToolsSortedByRating, getCheapestPlan, formatPrice } from '@/lib/tools'
import type { Tool } from '@/types'

function StarRating({ rating }: { rating: number }) {
  return (
    <span className="stars">
      {[1,2,3,4,5].map(i => (
        <span key={i} style={{ opacity: i <= Math.round(rating) ? 1 : 0.25 }}>★</span>
      ))}
    </span>
  )
}

function ToolCard({ tool, rank }: { tool: Tool; rank: number }) {
  const lowestPrice = getCheapestPlan(tool)
  const isTopPick = rank === 1
  return (
    <div className="card" style={{ padding: 24, position: 'relative', border: isTopPick ? '2px solid var(--accent)' : undefined }}>
      {isTopPick && (
        <div style={{ position: 'absolute', top: -12, left: 20, background: 'var(--accent)', color: '#fff', fontSize: 11, fontWeight: 700, padding: '3px 10px', borderRadius: 20, textTransform: 'uppercase', letterSpacing: '0.05em' }}>
          #1 Beste keuze
        </div>
      )}
      <div style={{ display: 'flex', alignItems: 'flex-start', gap: 16, marginBottom: 16 }}>
        <div style={{ width: 48, height: 48, borderRadius: 10, background: 'var(--bg-subtle)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 20, fontWeight: 700, color: 'var(--accent)', flexShrink: 0 }}>
          {tool.name[0]}
        </div>
        <div style={{ flex: 1 }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: 8, flexWrap: 'wrap' }}>
            <span style={{ fontWeight: 600, fontSize: 17 }}>{tool.name}</span>
            <span style={{ fontSize: 20, fontWeight: 700, color: 'var(--accent)' }}>{tool.rating}</span>
            <StarRating rating={tool.rating} />
            <span style={{ fontSize: 12, color: 'var(--text-tertiary)' }}>{tool.reviewCount} reviews</span>
          </div>
          <p style={{ margin: '4px 0 0', fontSize: 14, color: 'var(--text-secondary)' }}>{tool.tagline}</p>
        </div>
        <div style={{ textAlign: 'right', flexShrink: 0 }}>
          <div style={{ fontSize: 20, fontWeight: 700 }}>
            {lowestPrice === 0 ? <span style={{ color: 'var(--accent)' }}>Gratis</span> : `€${lowestPrice}`}
          </div>
          {lowestPrice > 0 && <div style={{ fontSize: 12, color: 'var(--text-tertiary)' }}>per maand</div>}
          {tool.pricing.freeTrial > 0 && <div style={{ fontSize: 12, color: 'var(--accent)', marginTop: 2 }}>✓ {tool.pricing.freeTrial} dagen gratis</div>}
        </div>
      </div>
      <div style={{ display: 'flex', gap: 6, flexWrap: 'wrap', marginBottom: 16 }}>
        {[
          tool.features.btwAangifte && 'BTW-aangifte',
          tool.features.bankKoppeling && 'Bankkoppeling',
          tool.features.mobieleApp && 'App',
          tool.features.offertes && 'Offertes',
          tool.features.gratisPlan && 'Gratis plan',
        ].filter(Boolean).map(f => (
          <span key={f as string} className="badge badge-gray">{f}</span>
        ))}
      </div>
      <div style={{ display: 'flex', gap: 10, alignItems: 'center', flexWrap: 'wrap' }}>
        <a href={tool.affiliateUrl} className="btn-primary" style={{ flex: 1, justifyContent: 'center' }}>Probeer {tool.name} gratis →</a>
        <a href={`/tools/${tool.slug}`} className="btn-secondary" style={{ fontSize: 13 }}>Lees meer</a>
      </div>
    </div>
  )
}

export default function HomePage() {
  const sortedTools = getToolsSortedByRating()
  return (
    <div>
      {/* Hero */}
      <section style={{ background: 'linear-gradient(135deg, #0F5232 0%, #1A7A4A 50%, #228B5A 100%)', padding: '72px 24px 80px', color: '#fff' }}>
        <div style={{ maxWidth: 740, margin: '0 auto', textAlign: 'center' }}>
          <div style={{ display: 'inline-flex', alignItems: 'center', gap: 6, background: 'rgba(255,255,255,0.15)', padding: '5px 14px', borderRadius: 20, fontSize: 13, marginBottom: 20 }}>
            ✓ Bijgewerkt mei 2026 · 6 programma's vergeleken
          </div>
          <h1 style={{ fontSize: 'clamp(28px, 5vw, 48px)', fontWeight: 700, marginBottom: 16, lineHeight: 1.15 }}>
            Het beste boekhoudprogramma<br />voor ZZP'ers in 2026
          </h1>
          <p style={{ fontSize: 18, opacity: 0.85, marginBottom: 32, lineHeight: 1.6 }}>
            We hebben alle populaire opties getest, vergeleken en eerlijk beoordeeld. Zodat jij in 5 minuten weet welk programma bij jou past.
          </p>
          <div style={{ display: 'flex', gap: 12, justifyContent: 'center', flexWrap: 'wrap' }}>
            <a href="#vergelijking" className="btn-primary" style={{ background: '#fff', color: 'var(--accent-text)', fontSize: 15, padding: '12px 28px' }}>Bekijk de vergelijking ↓</a>
            <a href="/boekhoudprogramma" className="btn-secondary" style={{ color: '#fff', borderColor: 'rgba(255,255,255,0.35)', fontSize: 15, padding: '12px 28px', background: 'transparent' }}>Alle opties →</a>
          </div>
        </div>
      </section>

      {/* Trust bar */}
      <section style={{ borderBottom: '1px solid var(--border)', background: 'var(--bg-card)' }}>
        <div style={{ maxWidth: 900, margin: '0 auto', padding: '0 24px', display: 'flex', flexWrap: 'wrap', justifyContent: 'center' }}>
          {[
            ['6', "Programma's getest"],
            ['30+ uur', 'Testperiode'],
            ['100%', 'Onafhankelijk'],
            ['Gratis', 'Te gebruiken'],
          ].map(([num, label], i, arr) => (
            <div key={label} style={{ padding: '20px 28px', textAlign: 'center', borderRight: i < arr.length - 1 ? '1px solid var(--border)' : undefined }}>
              <div style={{ fontSize: 20, fontWeight: 700, color: 'var(--accent)' }}>{num}</div>
              <div style={{ fontSize: 12, color: 'var(--text-secondary)', marginTop: 2 }}>{label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* Tool list */}
      <section id="vergelijking" style={{ maxWidth: 820, margin: '0 auto', padding: '64px 24px' }}>
        <h2 style={{ fontSize: 28, fontWeight: 700, marginBottom: 8 }}>Beste boekhoudprogramma's 2026</h2>
        <p style={{ color: 'var(--text-secondary)', marginBottom: 12, fontSize: 15 }}>
          Gesorteerd op overall score — gebaseerd op onze tests, gebruikerservaringen en prijsvergelijking.
        </p>
        <div style={{ display: 'flex', alignItems: 'center', gap: 8, marginBottom: 32, padding: '10px 14px', background: 'var(--bg-subtle)', borderRadius: 8, fontSize: 13, color: 'var(--text-secondary)' }}>
          <span style={{ color: 'var(--accent)' }}>ℹ</span>
          <span>We verdienen een commissie als je via onze links koopt — dit heeft <strong>geen invloed</strong> op onze scores. Programma's met lagere commissies staan soms hoger.</span>
        </div>
        <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
          {sortedTools.map((tool, i) => <ToolCard key={tool.slug} tool={tool} rank={i + 1} />)}
        </div>
      </section>

      {/* Feature table */}
      <section style={{ background: 'var(--bg-card)', borderTop: '1px solid var(--border)', borderBottom: '1px solid var(--border)', padding: '64px 24px' }}>
        <div style={{ maxWidth: 1100, margin: '0 auto' }}>
          <h2 style={{ fontSize: 26, fontWeight: 700, marginBottom: 8, textAlign: 'center' }}>Functies op een rij</h2>
          <p style={{ color: 'var(--text-secondary)', textAlign: 'center', marginBottom: 36 }}>Welk programma heeft wat je nodig hebt?</p>
          <div style={{ overflowX: 'auto' }}>
            <table style={{ width: '100%', borderCollapse: 'collapse', fontSize: 14, minWidth: 600 }}>
              <thead>
                <tr style={{ borderBottom: '2px solid var(--border)' }}>
                  <th style={{ textAlign: 'left', padding: '10px 12px', fontWeight: 600, color: 'var(--text-secondary)', fontSize: 12, textTransform: 'uppercase', letterSpacing: '0.05em', width: 160 }}>Functie</th>
                  {sortedTools.map(t => (
                    <th key={t.slug} style={{ padding: '10px 12px', fontWeight: 600, textAlign: 'center', fontSize: 13 }}>
                      <a href={`/tools/${t.slug}`} style={{ color: 'var(--accent)' }}>{t.name}</a>
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {[['BTW-aangifte','btwAangifte'],['Bankkoppeling','bankKoppeling'],['Mobiele app','mobieleApp'],['Offertes','offertes'],['Urenregistratie','urenRegistratie'],['Projecten','projecten'],['API-toegang','api'],['Gratis plan','gratisPlan']].map(([label, key]) => (
                  <tr key={key} style={{ borderBottom: '1px solid var(--border)' }}>
                    <td style={{ padding: '10px 12px', color: 'var(--text-secondary)' }}>{label}</td>
                    {sortedTools.map(t => (
                      <td key={t.slug} style={{ padding: '10px 12px', textAlign: 'center', color: t.features[key as keyof typeof t.features] ? 'var(--accent)' : 'var(--text-tertiary)' }}>
                        {t.features[key as keyof typeof t.features] ? '✓' : '—'}
                      </td>
                    ))}
                  </tr>
                ))}
                <tr style={{ borderBottom: '1px solid var(--border)' }}>
                  <td style={{ padding: '10px 12px', color: 'var(--text-secondary)' }}>Laagste prijs</td>
                  {sortedTools.map(t => <td key={t.slug} style={{ padding: '10px 12px', textAlign: 'center', fontWeight: 600 }}>{formatPrice(getCheapestPlan(t))}</td>)}
                </tr>
                <tr>
                  <td style={{ padding: '10px 12px', color: 'var(--text-secondary)' }}>Gratis proef</td>
                  {sortedTools.map(t => <td key={t.slug} style={{ padding: '10px 12px', textAlign: 'center', fontSize: 13, color: 'var(--accent)' }}>{t.pricing.freeTrial > 0 ? `${t.pricing.freeTrial} dgn` : '—'}</td>)}
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* Keuzehulp */}
      <section style={{ maxWidth: 820, margin: '0 auto', padding: '64px 24px' }}>
        <h2 style={{ fontSize: 26, fontWeight: 700, marginBottom: 8 }}>Welk programma past bij jou?</h2>
        <p style={{ color: 'var(--text-secondary)', fontSize: 15, marginBottom: 28 }}>Beantwoord één vraag en we wijzen je direct de juiste kant op.</p>
        <div style={{ display: 'grid', gap: 12 }}>
          {[
            { icon: '🚀', title: "Je bent net gestart als ZZP'er", text: 'Kies Jortt of Moneybird. Beide zijn intuïtief en je bent binnen 10 minuten up-and-running. Moneybird heeft een gratis plan.', link: '/tools/jortt', linkLabel: 'Bekijk Jortt' },
            { icon: '💰', title: 'Je wilt zo goedkoop mogelijk', text: 'e-Boekhouden.nl is de goedkoopste complete oplossing voor €8/mnd. Minder mooi, maar volledig functioneel.', link: '/tools/e-boekhouden', linkLabel: 'Bekijk e-Boekhouden' },
            { icon: '📊', title: 'Je werkt samen met een accountant', text: 'Exact Online en Twinfield zijn de standaard in de accountancy. Jouw accountant kent ze waarschijnlijk al.', link: '/tools/exact-online', linkLabel: 'Bekijk Exact Online' },
            { icon: '⚡', title: 'Je wilt de meeste functies', text: 'Snelstart of Exact Online bieden het uitgebreidste pakket voor een scherpe prijs.', link: '/tools/snelstart', linkLabel: 'Bekijk Snelstart' },
          ].map(({ icon, title, text, link, linkLabel }) => (
            <div key={title} className="card" style={{ padding: '20px 24px', display: 'flex', gap: 16, alignItems: 'flex-start' }}>
              <span style={{ fontSize: 24, flexShrink: 0, lineHeight: 1.4 }}>{icon}</span>
              <div style={{ flex: 1 }}>
                <div style={{ fontWeight: 600, marginBottom: 4 }}>{title}</div>
                <p style={{ margin: 0, fontSize: 14, color: 'var(--text-secondary)' }}>{text}</p>
              </div>
              <a href={link} className="btn-secondary" style={{ flexShrink: 0, fontSize: 13, padding: '7px 14px', whiteSpace: 'nowrap' }}>{linkLabel} →</a>
            </div>
          ))}
        </div>
      </section>

      {/* Methodology */}
      <section style={{ background: 'var(--bg-card)', borderTop: '1px solid var(--border)', borderBottom: '1px solid var(--border)', padding: '56px 24px' }}>
        <div style={{ maxWidth: 720, margin: '0 auto' }}>
          <h2 style={{ fontSize: 22, fontWeight: 700, marginBottom: 16, textAlign: 'center' }}>Hoe testen we?</h2>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: 20 }}>
            {[
              { step: '1', title: 'Proefaccount aanmaken', desc: 'We testen elk programma met een echt proefaccount, niet via demo-video\'s.' },
              { step: '2', title: 'Standaard ZZP-scenario', desc: 'Factuur aanmaken, bank koppelen, BTW-aangifte voorbereiden en support bereiken.' },
              { step: '3', title: 'Scores bepalen', desc: 'We scoren op vijf criteria: gebruiksgemak, functies, prijs, support en overall.' },
              { step: '4', title: 'Maandelijks bijwerken', desc: 'Prijzen en functies veranderen. We controleren elk programma minimaal eens per kwartaal.' },
            ].map(({ step, title, desc }) => (
              <div key={step} style={{ display: 'flex', gap: 14, alignItems: 'flex-start' }}>
                <div style={{ width: 28, height: 28, borderRadius: '50%', background: 'var(--accent)', color: '#fff', fontSize: 13, fontWeight: 700, display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>{step}</div>
                <div>
                  <div style={{ fontWeight: 600, fontSize: 14, marginBottom: 4 }}>{title}</div>
                  <div style={{ fontSize: 13, color: 'var(--text-secondary)', lineHeight: 1.5 }}>{desc}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter */}
      <section style={{ background: 'var(--bg)', padding: '64px 24px' }}>
        <div style={{ maxWidth: 520, margin: '0 auto', textAlign: 'center' }}>
          <h2 style={{ fontSize: 24, fontWeight: 700, marginBottom: 8 }}>Blijf op de hoogte</h2>
          <p style={{ color: 'var(--text-secondary)', marginBottom: 24 }}>Ontvang onze maandelijkse update met nieuwe software, prijswijzigingen en ZZP-tips. Geen spam.</p>
          <form style={{ display: 'flex', gap: 8, maxWidth: 400, margin: '0 auto' }} action="/api/subscribe" method="POST">
            <input type="email" name="email" placeholder="jouw@email.nl" required style={{ flex: 1, padding: '10px 14px', borderRadius: 10, border: '1px solid var(--border)', fontSize: 14, background: 'var(--bg-card)', outline: 'none' }} />
            <button type="submit" className="btn-primary" style={{ whiteSpace: 'nowrap' }}>Aanmelden</button>
          </form>
          <p style={{ fontSize: 12, color: 'var(--text-tertiary)', marginTop: 10 }}>Uitschrijven kan altijd met één klik.</p>
        </div>
      </section>
    </div>
  )
}
