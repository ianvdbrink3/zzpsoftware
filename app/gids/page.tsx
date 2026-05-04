export const metadata={title:"ZZP Boekhoud Gidsen",description:"Handige gidsen voor ZZP boekhouding."};
const guides=[{title:"Hoe kies je het beste boekhoudprogramma?",slug:"beste-boekhoudprogramma-kiezen",desc:"Stap voor stap gids om de juiste software te vinden voor jouw situatie."},{title:"BTW aangifte als ZZP'er",slug:"btw-aangifte-zzper",desc:"Alles over BTW-aangifte: wanneer, hoe en welke software helpt je hierbij."},{title:"Zelf boekhouden of uitbesteden?",slug:"zelf-boekhouden-of-uitbesteden",desc:"Vergelijk de voor- en nadelen van zelf boekhouden versus een boekhouder inhuren."},{title:"Kosten boekhoudprogramma aftrekken",slug:"kosten-boekhoudprogramma-aftrekken",desc:"Ontdek hoe je je boekhoudkosten als zakelijke kosten kunt opgeven."},{title:"Overstappen naar nieuw boekhoudprogramma",slug:"overstappen-boekhoudprogramma",desc:"Hoe je vlekkeloos kunt overstappen zonder gegevens te verliezen."},{title:"Boekhoudprogramma vergelijken: checklist",slug:"boekhoudprogramma-vergelijken-checklist",desc:"Gebruik onze checklist om programma's naast elkaar te leggen."}];
export default function GidsPage(){
  return(
    <div className="container" style={{padding:"3rem 1.5rem"}}>
      <h1 className="section-title">ZZP Boekhoud Gidsen</h1>
      <p className="section-subtitle">Praktische hulp bij je boekhouding</p>
      <div className="grid-3">
        {guides.map(g=>(
          <div key={g.slug} className="card">
            <h2 style={{fontSize:"1.1rem",marginBottom:".75rem"}}>{g.title}</h2>
            <p style={{color:"#64748b",fontSize:".9rem"}}>{g.desc}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
