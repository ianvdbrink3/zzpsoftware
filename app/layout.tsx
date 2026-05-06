import type { Metadata } from 'next'
import Script from 'next/script'
import { ScrollProgress } from '@/components/ScrollProgress'
import './globals.css'

export const metadata: Metadata = {
  title: { default: 'SlimBoekhoud — Beste Boekhoudprogramma voor ZZP 2026', template: '%s | SlimBoekhoud' },
  description: "Vergelijk de beste boekhoudprogramma's, factuurapps en software voor ZZP'ers. Eerlijke reviews en onafhankelijk advies.",
  metadataBase: new URL('https://slimboekhoud.nl'),
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="nl">
      <body>
        {process.env.NEXT_PUBLIC_GA_ID && (
          <>
            <Script src={`https://www.googletagmanager.com/gtag/js?id=${process.env.NEXT_PUBLIC_GA_ID}`} strategy="afterInteractive" />
            <Script id="ga4-init" strategy="afterInteractive">{`
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', '${process.env.NEXT_PUBLIC_GA_ID}');
            `}</Script>
          </>
        )}
        <header style={{ background: 'var(--bg-card)', borderBottom: '1px solid var(--border)', position: 'sticky', top: 0, zIndex: 50 }}>
          <div style={{ maxWidth: 1100, margin: '0 auto', padding: '0 24px', height: 60, display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
            <a href="/" style={{ display: 'flex', alignItems: 'center', gap: 10, textDecoration: 'none' }}>
              <div style={{ width: 32, height: 32, background: 'var(--accent)', borderRadius: 8, display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                  <rect x="2" y="9" width="3" height="5" rx="1" fill="white" />
                  <rect x="6.5" y="5" width="3" height="9" rx="1" fill="white" opacity="0.85" />
                  <rect x="11" y="2" width="3" height="12" rx="1" fill="white" opacity="0.7" />
                </svg>
              </div>
              <span style={{ fontSize: 17, fontWeight: 700, letterSpacing: '-0.3px', color: 'var(--text)' }}>
                <span style={{ color: 'var(--accent)' }}>Slim</span>Boekhoud<span style={{ color: 'var(--text-tertiary)', fontWeight: 400, fontSize: 15 }}>.nl</span>
              </span>
            </a>
            <nav style={{ display: 'flex', gap: 4 }}>
              {[['/', 'Home'], ['/boekhoudprogramma', 'Boekhouden'], ['/factuurprogramma', 'Facturatie'], ['/vergelijk', 'Vergelijk'], ['/gids', 'Gidsen']].map(([href, label]) => (
                <a key={href} href={href} style={{ padding: '6px 12px', borderRadius: 8, fontSize: 14, color: 'var(--text-secondary)' }}>{label}</a>
              ))}
            </nav>
          </div>
        </header>
        <ScrollProgress />
        <main>{children}</main>
        <footer style={{ borderTop: '1px solid var(--border)', marginTop: 80, padding: '48px 24px', background: 'var(--bg-card)' }}>
          <div style={{ maxWidth: 1100, margin: '0 auto' }}>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: 40, marginBottom: 40 }}>
              <div>
                <div style={{ fontWeight: 700, marginBottom: 12 }}>SlimBoekhoud</div>
                <p style={{ fontSize: 13, color: 'var(--text-secondary)', lineHeight: 1.6, margin: 0 }}>
                  Onafhankelijke vergelijkingssite voor ZZP-software. We verdienen een vergoeding als je via onze links koopt — dit beinvloedt onze reviews niet.
                </p>
              </div>
              <div>
                <div style={{ fontWeight: 600, fontSize: 13, marginBottom: 12, color: 'var(--text-secondary)' }}>CATEGORIEËN</div>
                {[["Boekhoudprogramma's", '/boekhoudprogramma'], ["Factuurprogramma's", '/factuurprogramma']].map(([l, href]) => (
                  <div key={l} style={{ fontSize: 14, marginBottom: 6 }}><a href={href} style={{ color: 'var(--text-secondary)' }}>{l}</a></div>
                ))}
              </div>
              <div>
                <div style={{ fontWeight: 600, fontSize: 13, marginBottom: 12, color: 'var(--text-secondary)' }}>VERGELIJKINGEN</div>
                {[['Moneybird vs Snelstart', '/vergelijk/moneybird-vs-snelstart'], ['Moneybird vs Jortt', '/vergelijk/moneybird-vs-jortt'], ['Exact vs Twinfield', '/vergelijk/exact-online-vs-twinfield']].map(([l, href]) => (
                  <div key={l} style={{ fontSize: 14, marginBottom: 6 }}><a href={href} style={{ color: 'var(--text-secondary)' }}>{l}</a></div>
                ))}
              </div>
              <div>
                <div style={{ fontWeight: 600, fontSize: 13, marginBottom: 12, color: 'var(--text-secondary)' }}>GIDSEN</div>
                {[["Boekhouden als ZZP'er", '/gids/boekhouden-als-zzper'], ['BTW-aangifte', '/gids/btw-aangifte-zzp'], ['Factuur opmaken', '/gids/factuur-opmaken-zzp']].map(([l, href]) => (
                  <div key={l} style={{ fontSize: 14, marginBottom: 6 }}><a href={href} style={{ color: 'var(--text-secondary)' }}>{l}</a></div>
                ))}
              </div>
            </div>
            <div style={{ borderTop: '1px solid var(--border)', paddingTop: 20, display: 'flex', justifyContent: 'space-between', fontSize: 13, color: 'var(--text-tertiary)' }}>
              <span>© 2026 SlimBoekhoud</span>
              <div style={{ display: 'flex', gap: 16 }}>
                <a href="/privacy" style={{ color: 'var(--text-tertiary)' }}>Privacy</a>
                <a href="/disclaimer" style={{ color: 'var(--text-tertiary)' }}>Disclaimer</a>
              </div>
            </div>
          </div>
        </footer>
      </body>
    </html>
  )
}
