import { getToolsSortedByRating, formatPrice } from "@/lib/tools";
export const metadata = {title:"Boekhoudprogrammas vergelijken",description:"Vergelijk alle boekhoudprogrammas voor ZZPers."};
export default function BoekhoudprogrammaPage() {
  const tools = getToolsSortedByRating();
  return (
    <div className="container" style={{padding:"3rem 1.5rem"}}>
      <h1 className="section-title">Boekhoudprogramma&apos;s vergelijken</h1>
      <p className="section-subtitle">{tools.length} pakketten vergeleken</p>
      <div className="grid-3">
        {tools.map((tool)=>(
          <div key={tool.id} className="card">
            {tool.badge && <span className="badge" style={{marginBottom:"1rem",display:"inline-block"}}>{tool.badge}</span>}
            <h2 style={{fontSize:"1.3rem",marginBottom:".5rem"}}>{tool.name}</h2>
            <p style={{color:"#64748b",fontSize:".9rem",marginBottom:"1rem"}}>{tool.tagline}</p>
            <div style={{display:"flex",justifyContent:"space-between",alignItems:"center",marginBottom:"1.5rem"}}>
              <span style={{fontWeight:700,color:"#2563eb",fontSize:"1.1rem"}}>{formatPrice(tool.pricing.startingPrice)}</span>
              <span style={{fontWeight:700,fontSize:"1.25rem"}}>{tool.scores.overall}<span style={{color:"#94a3b8",fontSize:".9rem"}}>/10</span></span>
            </div>
            <a href={`/tools/${tool.slug}`} className="btn-primary" style={{width:"100%",justifyContent:"center"}}>Bekijk review &#8594;</a>
          </div>
        ))}
      </div>
    </div>
  );
}
