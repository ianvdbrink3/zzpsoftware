import { getToolsSortedByRating, formatPrice } from "@/lib/tools";
import type { Tool } from "@/types";
export default function Home() {
  const tools = getToolsSortedByRating();
  return (
    <>
      <section style={{background:"linear-gradient(135deg,#eff6ff 0%,#fff 100%)",padding:"5rem 0 4rem"}}>
        <div className="container" style={{textAlign:"center"}}>
          <span className="badge" style={{marginBottom:"1rem"}}>Onafhankelijk vergelijken</span>
          <h1 style={{fontSize:"clamp(2rem,5vw,3.5rem)",fontWeight:800,lineHeight:1.2,marginBottom:"1.5rem"}}>Beste boekhoudprogramma<br/>voor ZZP&apos;ers in 2025</h1>
          <p style={{fontSize:"1.2rem",color:"#64748b",maxWidth:"600px",margin:"0 auto 2.5rem"}}>Vergelijk {tools.length} boekhoudprogramma&apos;s op prijs, functies en gebruiksgemak.</p>
          <a href="/boekhoudprogramma" className="btn-primary">Bekijk alle vergelijkingen</a>
        </div>
      </section>
      <section style={{padding:"4rem 0"}}>
        <div className="container">
          <h2 className="section-title">Top boekhoudprogramma&apos;s</h2>
          <p className="section-subtitle">Gesorteerd op beoordeling</p>
          <div style={{display:"flex",flexDirection:"column",gap:"1rem"}}>
            {tools.map((tool: Tool, i: number) => (
              <a key={tool.id} href={`/tools/${tool.slug}`} style={{textDecoration:"none",color:"inherit"}}>
                <div className="card" style={{display:"flex",alignItems:"center",gap:"1.5rem",flexWrap:"wrap"}}>
                  <div style={{background:"#f1f5f9",borderRadius:"8px",width:"48px",height:"48px",display:"flex",alignItems:"center",justifyContent:"center",fontWeight:700,color:"#2563eb",flexShrink:0}}>{i+1}</div>
                  <div style={{flex:1,minWidth:"200px"}}>
                    <div style={{display:"flex",alignItems:"center",gap:".75rem",marginBottom:".25rem"}}>
                      <h3 style={{fontSize:"1.1rem",fontWeight:700}}>{tool.name}</h3>
                      {tool.badge && <span className="badge">{tool.badge}</span>}
                    </div>
                    <p style={{color:"#64748b",fontSize:".9rem"}}>{tool.tagline}</p>
                  </div>
                  <div style={{textAlign:"center",minWidth:"80px"}}>
                    <div style={{fontSize:"1.5rem",fontWeight:800,color:"#2563eb"}}>{tool.scores.overall}</div>
                    <div style={{fontSize:".8rem",color:"#94a3b8"}}>/ 10</div>
                  </div>
                  <div style={{textAlign:"center",minWidth:"100px"}}>
                    <div style={{fontWeight:700,fontSize:"1.1rem"}}>{formatPrice(tool.pricing.startingPrice)}</div>
                    <div style={{fontSize:".8rem",color:"#94a3b8"}}>vanaf</div>
                  </div>
                  <span className="btn-outline" style={{flexShrink:0}}>Bekijk &#8594;</span>
                </div>
              </a>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
