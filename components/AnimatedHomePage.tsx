'use client'
import { useRef } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'
import { Reveal, StaggerContainer, StaggerItem } from './Reveal'
import { SectionDots } from './SectionDots'
import { getCheapestPlan, formatPrice } from '@/lib/tools'
import type { Tool } from '@/types'

const EASE: [number, number, number, number] = [0.25, 0.1, 0.25, 1]

function StarRating({ rating }: { rating: number }) {
  return (
    <span className="stars">
      {[1, 2, 3, 4, 5].map(i => (
        <span key={i} style={{ opacity: i <= Math.round(rating) ? 1 : 0.25 }}>★</span>
      ))}
    </span>
  )
}

function ToolCard({ tool, rank }: { tool: Tool; rank: number }) {
  const lowestPrice = getCheapestPlan(tool)
  const isTopPick = rank === 1
  return (
    <motion.div
      className="card"
      style={{ padding: 24, position: 'relative', border: isTopPick ? '2px solid var(--accent)' : undefined }}
      whileHover={{ y: -4, boxShadow: '0 12px 32px rgba(0,0,0,0.10)' }}
      transition={{ duration: 0.2 }}
    >
      {isTopPick && (
        <div style={{ position: 'absolute', top: -12, left: 20, background: 'var(--accent)', color: '#fff', fontSize: 11, fontWeight: 700, padding: '3px 10px', borderRadius: 20, textTransform: 'uppercase', letterSpacing: '0.06em' }}>
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
        {([
          tool.features.btwAangifte && 'BTW-aangifte',
          tool.features.bankKoppeling && 'Bankkoppeling',
          tool.features.mobieleApp && 'App',
          tool.features.offertes && 'Offertes',
          tool.features.gratisPlan && 'Gratis plan',
        ] as (string | false)[]).filter(Boolean).map(f => (
          <span key={f as string} className="badge badge-gray">{f}</span>
        ))}
      </div>
      <div style={{ display: 'flex', gap: 10, alignItems: 'center', flexWrap: 'wrap' }}>
        <a href={tool.affiliateUrl} className="btn-primary" style={{ flex: 1, justifyContent: 'center' }}>Probeer {tool.name} gratis →</a>
        <a href={`/tools/${tool.slug}`} className="btn-secondary" style={{ fontSize: 13 }}>Lees meer</a>
      </div>
    </motion.div>
  )
}

function WordReveal({ text, delay = 0, style }: { text: string; delay?: number; style?: React.CSSProperties }) {
  const words = text.split(' ')
  return (
    <span style={{ display: 'inline', ...style }}>
      {words.map((word, i) => (
        <motion.span
          key={i}
          style={{ display: 'inline-block', marginRight: '0.28em' }}
          initial={{ opacity: 0, y: 22, filter: 'blur(6px)' }}
          animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
          transition={{ delay: delay + i * 0.07, duration: 0.55, ease: EASE }}
        >
          {word}
        </motion.span>
      ))}
    </span>
  )
}

function ScrollIndicator() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 1.6, duration: 0.6 }}
      style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 8, marginTop: 56 }}
    >
      <div style={{ width: 1, height: 32, background: 'rgba(255,255,255,0.25)', overflow: 'hidden', borderRadius: 1 }}>
        <motion.div
          style={{ width: '100%', height: '50%', background: 'rgba(255,255,255,0.8)', borderRadius: 1 }}
          animate={{ y: ['-100%', '200%'] }}
          transition={{ duration: 1.4, repeat: Infinity, ease: 'easeInOut', repeatDelay: 0.3 }}
        />
      </div>
      <span style={{ fontSize: 10, letterSpacing: '0.18em', textTransform: 'uppercase', color: 'rgba(255,255,255,0.5)', fontWeight: 500 }}>scroll</span>
    </motion.div>
  )
}

const KEUZEHULP = [
  { num: '01', title: "Net gestart als ZZP'er", text: 'Kies Jortt of Moneybird. Beide zijn intuïtief en je bent binnen 10 minuten up-and-running. Moneybird heeft een gratis plan.', link: '/tools/jortt', linkLabel: 'Bekijk Jortt' },
  { num: '02', title: 'Zo goedkoop mogelijk', text: 'e-Boekhouden.nl is de goedkoopste complete oplossing voor €8/mnd. Minder mooi, maar volledig functioneel.', link: '/tools/e-boekhouden', linkLabel: 'Bekijk e-Boekhouden' },
  { num: '03', title: 'Samenwerken met een accountant', text: 'Exact Online en Twinfield zijn de standaard in de accountancy. Jouw accountant kent ze waarschijnlijk al.', link: '/tools/exact-online', linkLabel: 'Bekijk Exact Online' },
  { num: '04', title: 'De meeste functies gewenst', text: 'Snelstart of Exact Online bieden het uitgebreidste pakket voor een scherpe prijs.', link: '/tools/snelstart', linkLabel: 'Bekijk Snelstart' },
]

const FEATURES: [string, string][] = [
  ['BTW-aangifte', 'btwAangifte'],
  ['Bankkoppeling', 'bankKoppeling'],
  ['Mobiele app', 'mobieleApp'],
  ['Offertes', 'offertes'],
  ['Urenregistratie', 'urenRegistratie'],
  ['Projecten', 'projecten'],
  ['API-toegang', 'api'],
  ['Gratis plan', 'gratisPlan'],
]

const STEPS = [
  { step: '1', title: 'Proefaccount aanmaken', desc: "We testen elk programma met een echt proefaccount, niet via demo-video's." },
  { step: '2', title: 'Standaard ZZP-scenario', desc: 'Factuur aanmaken, bank koppelen, BTW-aangifte voorbereiden en support bereiken.' },
  { step: '3', title: 'Scores bepalen', desc: 'We scoren op vijf criteria: gebruiksgemak, functies, prijs, support en overall.' },
  { step: '4', title: 'Maandelijks bijwerken', desc: 'Prijzen en functies veranderen. We controleren elk programma minimaal eens per kwartaal.' },
]

export function AnimatedHomePage({ tools }: { tools: Tool[] }) {
  const heroRef = useRef<HTMLDivElement>(null)
  const { scrollY } = useScroll()
  const heroBgY = useTransform(scrollY, [0, 900], [0, -140])
  const heroOpacity = useTransform(scrollY, [0, 450], [1, 0])
  const heroScale = useTransform(scrollY, [0, 600], [1, 1.04])

  return (
    <div>
      <SectionDots />

      {/* ── HERO ── */}
      <section id="top" ref={heroRef} style={{ position: 'relative', overflow: 'hidden', minHeight: '100svh', display: 'flex', alignItems: 'center' }}>
        {/* Parallax background with subtle zoom */}
        <motion.div
          style={{
            position: 'absolute', inset: '-15% 0', y: heroBgY, scale: heroScale,
            background: 'linear-gradient(140deg, #0A3D24 0%, #12643A 45%, #1A7A4A 75%, #1E8F54 100%)',
            zIndex: 0,
          }}
        />
        {/* Subtle noise texture overlay */}
        <div style={{ position: 'absolute', inset: 0, zIndex: 1, opacity: 0.04, backgroundImage: 'url("data:image/svg+xml,%3Csvg viewBox=\'0 0 256 256\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cfilter id=\'noise\'%3E%3CfeTurbulence type=\'fractalNoise\' baseFrequency=\'0.9\' numOctaves=\'4\' stitchTiles=\'stitch\'/%3E%3C/filter%3E%3Crect width=\'100%25\' height=\'100%25\' filter=\'url(%23noise)\'/%3E%3C/svg%3E")' }} />
        {/* Bottom fade into page */}
        <div style={{ position: 'absolute', bottom: 0, left: 0, right: 0, height: 100, background: 'linear-gradient(to bottom, transparent, var(--bg))', zIndex: 2 }} />

        {/* Content */}
        <motion.div
          style={{ position: 'relative', zIndex: 3, maxWidth: 720, margin: '0 auto', textAlign: 'center', padding: '100px 24px 80px', opacity: heroOpacity }}
        >
          <h1 style={{ fontSize: 'clamp(32px, 5.5vw, 58px)', fontWeight: 700, marginBottom: 22, lineHeight: 1.08, color: '#fff', letterSpacing: '-0.03em' }}>
            <span style={{ display: 'block' }}>
              <WordReveal text="Het beste boekhoudprogramma" delay={0.1} />
            </span>
            <span style={{ display: 'block', marginTop: 4 }}>
              <WordReveal text="voor ZZP'ers in 2026" delay={0.42} />
            </span>
          </h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.9, duration: 0.6, ease: EASE }}
            style={{ fontSize: 18, color: 'rgba(255,255,255,0.78)', marginBottom: 36, lineHeight: 1.65, maxWidth: 560, margin: '0 auto 36px' }}
          >
            We hebben alle populaire opties getest, vergeleken en eerlijk beoordeeld — zodat jij in 5 minuten weet welk programma bij jou past.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.15, duration: 0.5, ease: EASE }}
            style={{ display: 'flex', gap: 12, justifyContent: 'center', flexWrap: 'wrap' }}
          >
            <a href="#vergelijking" className="btn-primary" style={{ background: '#fff', color: 'var(--accent-text)', fontSize: 15, padding: '13px 30px' }}>Bekijk de vergelijking</a>
            <a href="/boekhoudprogramma" className="btn-secondary" style={{ color: '#fff', borderColor: 'rgba(255,255,255,0.3)', fontSize: 15, padding: '13px 30px', background: 'transparent' }}>Alle opties →</a>
          </motion.div>

          <ScrollIndicator />
        </motion.div>
      </section>

      {/* ── TRUST BAR ── */}
      <section style={{ borderBottom: '1px solid var(--border)', background: 'var(--bg-card)' }}>
        <StaggerContainer
          style={{ maxWidth: 900, margin: '0 auto', padding: '0 24px', display: 'flex', flexWrap: 'wrap', justifyContent: 'center' }}
          stagger={0.14}
        >
          {[
            ['6', "Programma's getest"],
            ['30+', 'Testuren'],
            ['100%', 'Onafhankelijk'],
            ['Gratis', 'Te gebruiken'],
          ].map(([num, label], i, arr) => (
            <StaggerItem key={label} style={{ padding: '22px 32px', textAlign: 'center', borderRight: i < arr.length - 1 ? '1px solid var(--border)' : undefined }}>
              <div style={{ fontSize: 24, fontWeight: 700, color: 'var(--accent)', letterSpacing: '-0.02em' }}>{num}</div>
              <div style={{ fontSize: 12, color: 'var(--text-secondary)', marginTop: 3, letterSpacing: '0.03em' }}>{label}</div>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </section>

      {/* ── TOOL LIST ── */}
      <section id="vergelijking" style={{ maxWidth: 820, margin: '0 auto', padding: '88px 24px' }}>
        <Reveal>
          <h2 style={{ fontSize: 32, fontWeight: 700, marginBottom: 10, letterSpacing: '-0.02em' }}>Beste boekhoudprogramma's 2026</h2>
          <p style={{ color: 'var(--text-secondary)', marginBottom: 12, fontSize: 16 }}>
            Gesorteerd op overall score — gebaseerd op onze tests, gebruikerservaringen en prijsvergelijking.
          </p>
          <div style={{ marginBottom: 36, padding: '10px 14px', background: 'var(--bg-subtle)', borderRadius: 8, fontSize: 13, color: 'var(--text-secondary)' }}>
            We verdienen een commissie als je via onze links koopt — dit heeft <strong>geen invloed</strong> op onze scores.
          </div>
        </Reveal>
        <StaggerContainer style={{ display: 'flex', flexDirection: 'column', gap: 16 }} stagger={0.11}>
          {tools.map((tool, i) => (
            <StaggerItem key={tool.slug}>
              <ToolCard tool={tool} rank={i + 1} />
            </StaggerItem>
          ))}
        </StaggerContainer>
      </section>

      {/* ── FEATURE TABLE ── */}
      <section id="functies" style={{ background: 'var(--bg-card)', borderTop: '1px solid var(--border)', borderBottom: '1px solid var(--border)', padding: '88px 24px' }}>
        <div style={{ maxWidth: 1100, margin: '0 auto' }}>
          <Reveal>
            <h2 style={{ fontSize: 30, fontWeight: 700, marginBottom: 8, textAlign: 'center', letterSpacing: '-0.02em' }}>Functies op een rij</h2>
            <p style={{ color: 'var(--text-secondary)', textAlign: 'center', marginBottom: 44, fontSize: 15 }}>Welk programma heeft wat je nodig hebt?</p>
          </Reveal>
          <Reveal delay={0.12}>
            <div style={{ overflowX: 'auto' }}>
              <table style={{ width: '100%', borderCollapse: 'collapse', fontSize: 14, minWidth: 600 }}>
                <thead>
                  <tr style={{ borderBottom: '2px solid var(--border)' }}>
                    <th style={{ textAlign: 'left', padding: '10px 12px', fontWeight: 600, color: 'var(--text-secondary)', fontSize: 11, textTransform: 'uppercase', letterSpacing: '0.06em', width: 160 }}>Functie</th>
                    {tools.map(t => (
                      <th key={t.slug} style={{ padding: '10px 12px', fontWeight: 600, textAlign: 'center', fontSize: 13 }}>
                        <a href={`/tools/${t.slug}`} style={{ color: 'var(--accent)' }}>{t.name}</a>
                      </th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  {FEATURES.map(([label, key], rowIdx) => (
                    <motion.tr
                      key={key}
                      style={{ borderBottom: '1px solid var(--border)' }}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true, margin: '-10px' }}
                      transition={{ duration: 0.38, delay: rowIdx * 0.04 }}
                    >
                      <td style={{ padding: '11px 12px', color: 'var(--text-secondary)', fontSize: 13 }}>{label}</td>
                      {tools.map(t => (
                        <td key={t.slug} style={{ padding: '11px 12px', textAlign: 'center', color: t.features[key] ? 'var(--accent)' : 'var(--text-tertiary)', fontWeight: t.features[key] ? 600 : 400 }}>
                          {t.features[key] ? '✓' : '—'}
                        </td>
                      ))}
                    </motion.tr>
                  ))}
                  <tr style={{ borderBottom: '1px solid var(--border)', background: 'var(--bg-subtle)' }}>
                    <td style={{ padding: '11px 12px', color: 'var(--text-secondary)', fontSize: 13, fontWeight: 500 }}>Laagste prijs</td>
                    {tools.map(t => <td key={t.slug} style={{ padding: '11px 12px', textAlign: 'center', fontWeight: 600, fontSize: 13 }}>{formatPrice(getCheapestPlan(t))}</td>)}
                  </tr>
                  <tr style={{ background: 'var(--bg-subtle)' }}>
                    <td style={{ padding: '11px 12px', color: 'var(--text-secondary)', fontSize: 13, fontWeight: 500 }}>Gratis proef</td>
                    {tools.map(t => <td key={t.slug} style={{ padding: '11px 12px', textAlign: 'center', fontSize: 13, color: 'var(--accent)', fontWeight: 500 }}>{t.pricing.freeTrial > 0 ? `${t.pricing.freeTrial} dgn` : '—'}</td>)}
                  </tr>
                </tbody>
              </table>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ── KEUZEHULP — sticky scrollytelling ── */}
      <section id="keuzehulp" style={{ maxWidth: 980, margin: '0 auto', padding: '88px 24px' }}>
        <div className="sticky-grid">
          <div className="sticky-grid-pin">
            <Reveal direction="left">
              <div style={{ fontSize: 11, fontWeight: 600, letterSpacing: '0.12em', textTransform: 'uppercase', color: 'var(--accent)', marginBottom: 14 }}>Keuzehulp</div>
              <h2 style={{ fontSize: 32, fontWeight: 700, marginBottom: 18, lineHeight: 1.15, letterSpacing: '-0.02em' }}>Welk programma past bij jou?</h2>
              <p style={{ color: 'var(--text-secondary)', fontSize: 15, lineHeight: 1.7, marginBottom: 28 }}>
                Elke ZZP'er heeft andere behoeften. Hiernaast vind je voor vier veelvoorkomende situaties de beste match.
              </p>
              <a href="/vergelijk" className="btn-secondary" style={{ display: 'inline-flex' }}>Uitgebreid vergelijken →</a>
            </Reveal>
          </div>

          <StaggerContainer style={{ display: 'flex', flexDirection: 'column', gap: 14 }} stagger={0.14}>
            {KEUZEHULP.map(({ num, title, text, link, linkLabel }) => (
              <StaggerItem key={num}>
                <motion.div
                  className="card"
                  style={{ padding: '22px 24px' }}
                  whileHover={{ scale: 1.018, boxShadow: '0 10px 28px rgba(0,0,0,0.09)' }}
                  transition={{ duration: 0.18 }}
                >
                  <div style={{ display: 'flex', gap: 16, alignItems: 'flex-start' }}>
                    <div style={{ width: 34, height: 34, borderRadius: 8, background: 'var(--accent-light)', color: 'var(--accent)', fontWeight: 700, fontSize: 12, display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0, letterSpacing: '0.04em' }}>
                      {num}
                    </div>
                    <div style={{ flex: 1 }}>
                      <div style={{ fontWeight: 600, marginBottom: 6, fontSize: 15 }}>{title}</div>
                      <p style={{ margin: 0, fontSize: 13, color: 'var(--text-secondary)', lineHeight: 1.65 }}>{text}</p>
                    </div>
                  </div>
                  <div style={{ marginTop: 16, paddingTop: 14, borderTop: '1px solid var(--border)', display: 'flex', justifyContent: 'flex-end' }}>
                    <a href={link} className="btn-secondary" style={{ fontSize: 12, padding: '6px 14px' }}>{linkLabel} →</a>
                  </div>
                </motion.div>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* ── METHODOLOGY ── */}
      <section id="methode" style={{ background: 'var(--bg-card)', borderTop: '1px solid var(--border)', borderBottom: '1px solid var(--border)', padding: '80px 24px' }}>
        <div style={{ maxWidth: 760, margin: '0 auto' }}>
          <Reveal style={{ textAlign: 'center', marginBottom: 48 }}>
            <div style={{ fontSize: 11, fontWeight: 600, letterSpacing: '0.12em', textTransform: 'uppercase', color: 'var(--accent)', marginBottom: 12 }}>Transparantie</div>
            <h2 style={{ fontSize: 26, fontWeight: 700, marginBottom: 10, letterSpacing: '-0.02em' }}>Hoe testen we?</h2>
            <p style={{ color: 'var(--text-secondary)', fontSize: 15 }}>Elke beoordeling is gebaseerd op hands-on gebruik — geen PR-materiaal, geen betaalde plaatsing.</p>
          </Reveal>
          <StaggerContainer style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: 28 }} stagger={0.13}>
            {STEPS.map(({ step, title, desc }) => (
              <StaggerItem key={step}>
                <div style={{ display: 'flex', gap: 14, alignItems: 'flex-start' }}>
                  <motion.div
                    style={{ width: 34, height: 34, borderRadius: '50%', background: 'var(--accent)', color: '#fff', fontSize: 13, fontWeight: 700, display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}
                    whileInView={{ scale: [0.4, 1.2, 1] }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, ease: 'backOut' }}
                  >
                    {step}
                  </motion.div>
                  <div>
                    <div style={{ fontWeight: 600, fontSize: 14, marginBottom: 5 }}>{title}</div>
                    <div style={{ fontSize: 13, color: 'var(--text-secondary)', lineHeight: 1.6 }}>{desc}</div>
                  </div>
                </div>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

    </div>
  )
}
