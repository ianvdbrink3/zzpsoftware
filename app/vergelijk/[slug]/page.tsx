import { getToolBySlug, formatPrice } from "@/lib/tools";
import { notFound } from "next/navigation";
const pairs=[["moneybird","snelstart"],["moneybird","jortt"],["snelstart","exact-online"],["jortt","e-boekhouden"],["exact-online","twinfield"]];
export async function generateStaticParams(){return pairs.map(([a,b])=>({slug:`${a}-vs-${b}`}));}
export default async function VergelijkPage({params}:{params:Promise<{slug:string}>}){
  const {slug}=await params;
  const parts=slug.split("-vs-");
  if(parts.length!==2)notFound();
  const toolA=getToolBySlug(parts[0]);
  const toolB=getToolBySlug(parts[1]);
  if(!toolA||!toolB)notFound();
  return(
    <div className="container" style={{padding:"3rem 1.5rem"}}>
      <h1 className="section-title">{toolA.name} vs {toolB.name}</h1>
      <p className="section-subtitle">Uitgebreide vergelijking</p>
      <div className="grid-2">
        {[toolA,toolB].map(tool=>(
          <div key={tool.id} className="card" style={{textAlign:"center"}}>
            <h2 style={{fontSize:"1.5rem",marginBottom:".5rem"}}>{tool.name}</h2>
            <div style={{fontSize:"3rem",fontWeight:800,color:"#2563eb"}}>{tool.scores.overall}</div>
            <div style={{color:"#64748b",marginBottom:"1rem"}}>Totaalscore</div>
            <div style={{fontWeight:600,marginBottom:"1.5rem"}}>Vanaf {formatPrice(tool.pricing.startingPrice)}</div>
            <a href={tool.affiliateUrl} className="btn-primary" target="_blank" rel="noopener noreferrer">Probeer gratis &#8594;</a>
          </div>
        ))}
      </div>
    </div>
  );
}
