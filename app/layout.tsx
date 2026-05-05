import type { Metadata } from 'next'
import Script from 'next/script'
import './globals.css'

export const metadata: Metadata = {
  title: { default: 'ZZP Software Vergelijker — Beste Boekhoudprogramma 2026', template: '%s | ZZP Software Vergelijker' },
  description: "Vergelijk de beste boekhoudprogramma's, factuurapps en software voor ZZP'ers. Eerlijke reviews en onafhankelijk advies.",
  metadataBase: new URL('https://zzpsoftware.nl'),
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
            <a href="/" style={{ display: 'flex', alignItems: 'center', gap: 8, fontWeight: 600, fontSize: 16 }}>
              <span style={{ background: 'var(--accent)', color: '#fff', padding: '3px 8px', borderRadius: 6, fontSize: 13, fontWeight: 700 }}>ZZP</span>
              <span>Software Vergelijker</span>
            </a>
            <nav style={{ display: 'flex', gap: 4 }}>
              {[['/', 'Home'], ['/boekhoudprogramma', 'Boekhouden'], ['/factuurprogramma', 'Facturatie'], ['/vergelijk', 'Vergelijk'], ['/gids', 'Gidsen']].map(([href, label]) => (
                <a key={href} href={href} style={{ padding: '6px 12px', borderRadius: 8, fontSize: 14, color: 'var(--text-secondary)' }}>{label}</a>
              ))}
            </nav>
          </div>
        </header>
        <main>{children}</main>
        <footer style={{ borderTop: '1px solid var(--border)', marginTop: 80, padding: '48px 24px', background: 'var(--bg-card)' }}>
          <div style={{ maxWidth: 1100, margin: '0 auto' }}>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: 40, marginBottom: 40 }}>
              <div>
                <div style={{ fontWeight: 700, marginBottom: 12 }}>ZZP Software Vergelijker</div>
                <p style={{ fontSize: 13, color: 'var(--text-secondary)', lineHeight: 1.6, margin: 0 }}>
                  Onafhankelijke vergelijkingssite voor ZZP-software. We verdienen een vergoeding als je via onze links koopt — dit beinvloedt onze reviews niet.
                </p>
              </div>
              <div>
                <div style={{ fontWeight: 600, fontSize: 13, marginBottom: 12, color: 'var(--text-secondary)' }}>CATEGORIEN</div>
                {["Boekhoudprogramma's", "Factuurprogramma's", 'CRM-software', 'Urenregistratie'].map(l => (
                  <div key={l} style={{ fontSize: 14, marginBottom: 6 }}><a style={{ color: 'var(--text-secondary)' }}>{l}</a></div>
                ))}
              </div>
              <div>
                <div style={{ fontWeight: 600, fontSize: 13, marginBottom: 12, color: 'var(--text-secondary)' }}>VERGELIJKINGEN</div>
                {['Moneybird vs Snelstart', 'Moneybird vs Jortt', 'Exact vs Twinfield'].map(l => (
                  <div key={l} style={{ fontSize: 14, marginBottom: 6 }}><a style={{ color: 'var(--text-secondary)' }}>{l}</a></div>
                ))}
              </div>
              <div>
                <div style={{ fontWeight: 600, fontSize: 13, marginBottom: 12, color: 'var(--text-secondary)' }}>GIDSEN</div>
                {["Boekhouden als ZZP'er", 'BTW-aangifte', 'Factuur opmaken'].map(l => (
                  <div key={l} style={{ fontSize: 14, marginBottom: 6 }}><a style={{ color: 'var(--text-secondary)' }}>{l}</a></div>
                ))}
              </div>
            </div>
            <div style={{ borderTop: '1px solid var(--border)', paddingTop: 20, display: 'flex', justifyContent: 'space-between', fontSize: 13, color: 'var(--text-tertiary)' }}>
              <span>© 2026 ZZP Software Vergelijker</span>
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
