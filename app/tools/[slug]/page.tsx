import { getAllTools, getToolBySlug, formatPrice } from "@/lib/tools";
import { notFound } from "next/navigation";
export async function generateStaticParams() { return getAllTools().map((t) => ({ slug: t.slug })); }
export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const tool = getToolBySlug(slug);
  if (!tool) return {};
  return { title: `${tool.name} Review 2025`, description: tool.description };
}
export default async function ToolPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const tool = getToolBySlug(slug);
  if (!tool) notFound();
  return (
    <div className="container" style={{padding:"3rem 1.5rem"}}>
      <div style={{display:"flex",alignItems:"flex-start",gap:"1.5rem",marginBottom:"2rem",flexWrap:"wrap"}}>
        <div style={{flex:1}}>
          <div style={{display:"flex",alignItems:"center",gap:"1rem",marginBottom:".5rem"}}>
            <h1 style={{fontSize:"2.5rem",fontWeight:800}}>{tool.name}</h1>
            {tool.badge && <span className="badge">{tool.badge}</span>}
          </div>
          <p style={{fontSize:"1.2rem",color:"#64748b",marginBottom:"1.5rem"}}>{tool.tagline}</p>
          <a href={tool.affiliateUrl} className="btn-primary" target="_blank" rel="noopener noreferrer">Probeer {tool.name} gratis →</a>
        </div>
        <div className="card" style={{textAlign:"center",minWidth:"160px"}}>
          <div style={{fontSize:"3rem",fontWeight:800,color:"#2563eb"}}>{tool.scores.overall}</div>
          <div style={{color:"#64748b"}}>Totaalscore</div>
          <div style={{marginTop:"1rem",fontSize:".9rem",color:"#64748b"}}>Vanaf {formatPrice(tool.pricing.startingPrice)}</div>
        </div>
      </div>
      <div className="grid-2" style={{marginBottom:"2rem"}}>
        <div className="card">
          <h2 style={{marginBottom:"1rem"}}>Scores</h2>
          {Object.entries({Gebruiksgemak:tool.scores.easeOfUse,Functies:tool.scores.features,Support:tool.scores.support,"Prijs/kwaliteit":tool.scores.valueForMoney}).map(([k,v])=>(
            <div key={k} style={{marginBottom:"1rem"}}>
              <div style={{display:"flex",justifyContent:"space-between",marginBottom:".25rem"}}><span style={{fontSize:".9rem"}}>{k}</span><span style={{fontWeight:600}}>{v}/10</span></div>
              <div className="score-bar"><div className="score-fill" style={{width:`${v*10}%`}}></div></div>
            </div>
          ))}
        </div>
        <div className="card">
          <h2 style={{marginBottom:"1rem"}}>Functies</h2>
          <div style={{display:"grid",gridTemplateColumns:"1fr 1fr",gap:".5rem"}}>
            {Object.entries({BTW:tool.features.btwAangifte,Facturen:tool.features.facturen,Bank:tool.features.bankKoppeling,Uren:tool.features.urenRegistratie,Projecten:tool.features.projectAdministratie,Offertes:tool.features.offertes,"Mobiel":tool.features.mobileApp,"API":tool.features.api}).map(([k,v])=>(
              <div key={k} style={{display:"flex",alignItems:"center",gap:".5rem",fontSize:".9rem"}}>
                <span style={{color:v?"#16a34a":"#ef4444"}}>{v?"✓":"✗"}</span>{k}
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className="grid-2" style={{marginBottom:"2rem"}}>
        <div className="card">
          <h2 style={{marginBottom:"1rem",color:"#16a34a"}}>Voordelen</h2>
          {tool.pros.map((p,i)=><div key={i} style={{display:"flex",gap:".5rem",marginBottom:".5rem",fontSize:".95rem"}}><span style={{color:"#16a34a",flexShrink:0}}>✓</span>{p}</div>)}
        </div>
        <div className="card">
          <h2 style={{marginBottom:"1rem",color:"#ef4444"}}>Nadelen</h2>
          {tool.cons.map((c,i)=><div key={i} style={{display:"flex",gap:".5rem",marginBottom:".5rem",fontSize:".95rem"}}><span style={{color:"#ef4444",flexShrink:0}}>✗</span>{c}</div>)}
        </div>
      </div>
      <div className="card" style={{marginBottom:"2rem"}}>
        <h2 style={{marginBottom:"1.5rem"}}>Prijzen</h2>
        <div style={{display:"flex",gap:"1rem",flexWrap:"wrap"}}>
          {tool.pricing.plans.map((plan,i)=>(
            <div key={i} style={{flex:1,minWidth:"200px",border:"1px solid #e2e8f0",borderRadius:"8px",padding:"1.25rem"}}>
              <h3 style={{marginBottom:".5rem"}}>{plan.name}</h3>
              <div style={{fontSize:"1.75rem",fontWeight:800,color:"#2563eb",marginBottom:"1rem"}}>{formatPrice(plan.price)}</div>
              {plan.features.map((f,j)=><div key={j} style={{fontSize:".9rem",marginBottom:".25rem",display:"flex",gap:".5rem"}}><span style={{color:"#16a34a"}}>✓</span>{f}</div>)}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
