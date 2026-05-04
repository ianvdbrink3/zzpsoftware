import type { Metadata } from "next";
import "./globals.css";
export const metadata: Metadata = {title:{default:"ZZP Software Vergelijker - Beste Boekhoudprogramma 2025",template:"%s | ZZP Software Vergelijker"},description:"Vergelijk de beste boekhoudprogramma's voor ZZP'ers. Onafhankelijke reviews, prijzen en functionaliteiten."};
export default function RootLayout({children}:{children:React.ReactNode}) {
  return (
    <html lang="nl">
      <body>
        <header style={{background:"#fff",borderBottom:"1px solid #e2e8f0",position:"sticky",top:0,zIndex:100}}>
          <div className="container" style={{display:"flex",alignItems:"center",justifyContent:"space-between",padding:"1rem 1.5rem"}}>
            <a href="/" style={{fontWeight:700,fontSize:"1.25rem",color:"#2563eb",textDecoration:"none"}}>ZZP Software</a>
            <nav style={{display:"flex",gap:"1.5rem"}}>
              <a href="/boekhoudprogramma" style={{color:"#64748b",textDecoration:"none",fontSize:".95rem"}}>Vergelijk</a>
              <a href="/gids" style={{color:"#64748b",textDecoration:"none",fontSize:".95rem"}}>Gidsen</a>
            </nav>
          </div>
        </header>
        <main>{children}</main>
        <footer style={{background:"#0f172a",color:"#94a3b8",padding:"3rem 0",marginTop:"4rem"}}>
          <div className="container">
            <div style={{display:"flex",justifyContent:"space-between",flexWrap:"wrap",gap:"2rem"}}>
              <div><h3 style={{color:"#fff",marginBottom:".75rem"}}>ZZP Software</h3><p style={{fontSize:".9rem"}}>Onafhankelijke vergelijking van boekhoudprogramma's voor ZZP'ers.</p></div>
              <div><h4 style={{color:"#fff",marginBottom:".75rem"}}>Links</h4><nav style={{display:"flex",flexDirection:"column",gap:".5rem"}}><a href="/boekhoudprogramma" style={{color:"#94a3b8",textDecoration:"none",fontSize:".9rem"}}>Boekhoudprogramma's</a><a href="/gids" style={{color:"#94a3b8",textDecoration:"none",fontSize:".9rem"}}>Gidsen</a></nav></div>
            </div>
            <div style={{borderTop:"1px solid #1e293b",marginTop:"2rem",paddingTop:"1.5rem",fontSize:".85rem"}}>© 2025 ZZP Software Vergelijker. Affiliate links aanwezig.</div>
          </div>
        </footer>
      </body>
    </html>
  );
}
