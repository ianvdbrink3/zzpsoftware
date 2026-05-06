import { ImageResponse } from 'next/og'

export const runtime = 'edge'
export const alt = 'SlimBoekhoud — Beste boekhoudprogramma voor ZZP'
export const size = { width: 1200, height: 630 }
export const contentType = 'image/png'

export default function OgImage() {
  return new ImageResponse(
    (
      <div
        style={{
          background: 'linear-gradient(135deg, #f0f9ff 0%, #e0f2fe 100%)',
          width: '100%',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          fontFamily: 'system-ui, sans-serif',
        }}
      >
        <div style={{ display: 'flex', alignItems: 'center', gap: 24, marginBottom: 32 }}>
          <div
            style={{
              width: 80,
              height: 80,
              background: '#0ea5e9',
              borderRadius: 20,
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
            }}
          >
            <svg width="40" height="40" viewBox="0 0 16 16" fill="none">
              <rect x="2" y="9" width="3" height="5" rx="1" fill="white" />
              <rect x="6.5" y="5" width="3" height="9" rx="1" fill="white" opacity="0.85" />
              <rect x="11" y="2" width="3" height="12" rx="1" fill="white" opacity="0.7" />
            </svg>
          </div>
          <div style={{ fontSize: 52, fontWeight: 800, color: '#0f172a', letterSpacing: '-1px' }}>
            <span style={{ color: '#0ea5e9' }}>Slim</span>Boekhoud
          </div>
        </div>
        <div style={{ fontSize: 28, color: '#334155', textAlign: 'center', maxWidth: 800, lineHeight: 1.4 }}>
          Beste boekhoudprogramma voor ZZP&apos;ers
        </div>
        <div
          style={{
            marginTop: 40,
            display: 'flex',
            gap: 16,
          }}
        >
          {['Moneybird', 'SnelStart', 'Jortt', 'e-Boekhouden'].map((name) => (
            <div
              key={name}
              style={{
                background: 'white',
                borderRadius: 12,
                padding: '10px 20px',
                fontSize: 18,
                color: '#0f172a',
                fontWeight: 600,
                boxShadow: '0 2px 8px rgba(0,0,0,0.08)',
              }}
            >
              {name}
            </div>
          ))}
        </div>
        <div style={{ marginTop: 32, fontSize: 20, color: '#64748b' }}>
          slimboekhoud.nl — Eerlijke vergelijkingen & reviews
        </div>
      </div>
    ),
    { ...size },
  )
}
