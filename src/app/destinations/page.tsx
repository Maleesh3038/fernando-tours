"use client"
import { useState } from "react"
import Link from "next/link"

const destinations = [
  {
    id: 1,
    name: "Sigiriya Rock Fortress",
    tag: "UNESCO Heritage",
    tagColor: "#FFB347",
    location: "Central Province",
    duration: "Half Day",
    bestTime: "Jan – Apr",
    photo: "/images/destinations/sigiriya.jpg",
    desc: "Rising 200 metres from the jungle floor, Sigiriya is Sri Lanka's most dramatic ancient site. This 5th century sky palace was built by King Kashyapa, featuring stunning frescoes, a mirror wall, and royal water gardens at its base.",
    highlights: ["Ancient frescoes of celestial maidens", "Mirror wall with 1,000-year-old graffiti", "Royal water gardens & fountains", "Panoramic views of the jungle canopy"],
    tip: "Arrive before 7am to beat the crowds and catch the morning mist over the jungle."
  },
  {
    id: 2,
    name: "Yala National Park",
    tag: "Wildlife",
    tagColor: "#4CAF50",
    location: "Southern Province",
    duration: "Full Day Safari",
    bestTime: "Feb – Jul",
    photo: "/images/destinations/yala.jpg",
    desc: "Home to the world's highest density of leopards, Yala is Sri Lanka's most famous wildlife sanctuary. Spanning over 979 km², the park is a mosaic of monsoon forests, grasslands, and coastal lagoons teeming with life.",
    highlights: ["Sri Lankan leopard sightings", "Asian elephants in the wild", "Saltwater crocodiles & sloth bears", "Over 215 bird species"],
    tip: "The best leopard sightings are in Block 1. Book a private jeep for a more intimate experience."
  },
  {
    id: 3,
    name: "Temple of the Sacred Tooth",
    tag: "Sacred Site",
    tagColor: "#9C27B0",
    location: "Kandy, Central Province",
    duration: "2–3 Hours",
    bestTime: "Year Round",
    photo: "/images/destinations/kandy.jpg",
    desc: "The Temple of the Sacred Tooth Relic (Sri Dalada Maligawa) is the most sacred Buddhist temple in Sri Lanka, housing the relic of the tooth of the Buddha. Set beside the serene Kandy Lake, it remains a living place of worship.",
    highlights: ["Sacred Buddha tooth relic", "Stunning Kandyan architecture", "Daily puja ceremonies with drummers", "Museum of royal gifts & treasures"],
    tip: "Visit during the evening puja (6:30pm) for the most atmospheric experience with traditional drumming."
  },
  {
    id: 4,
    name: "Mirissa Beach",
    tag: "Beach",
    tagColor: "#00BCD4",
    location: "Southern Coast",
    duration: "Full Day",
    bestTime: "Nov – Apr",
    photo: "/images/destinations/mirissa.jpg",
    desc: "A crescent of golden sand fringed by swaying palms, Mirissa is Sri Lanka's most beloved beach town. By day it's a paradise for surfers and sun-seekers; by night its beach bars come alive with fire dancers and music.",
    highlights: ["Blue whale & dolphin watching", "World-class surf breaks", "Coconut Tree Hill sunset viewpoint", "Fresh seafood on the beach"],
    tip: "Whale watching season peaks November to April. Book your boat trip the evening before for sunrise departures."
  },
  {
    id: 5,
    name: "Nuwara Eliya Tea Country",
    tag: "Highland",
    tagColor: "#8BC34A",
    location: "Central Highlands",
    duration: "Full Day",
    bestTime: "Jan – Apr",
    photo: "/images/destinations/nuwara-eliya.jpg",
    desc: "Dubbed 'Little England', Nuwara Eliya sits at 1,868 metres above sea level surrounded by rolling emerald tea estates. The cool mountain air, colonial bungalows, and endless green hills make it feel like a different world.",
    highlights: ["Pedro & Mackwoods tea factory tours", "Gregory Lake boat rides", "Horton Plains & World's End hike", "Lover's Leap waterfall"],
    tip: "Stay overnight to experience the magical morning mist rolling over the tea estates at sunrise."
  },
  {
    id: 6,
    name: "Ella & Nine Arch Bridge",
    tag: "Scenic",
    tagColor: "#FF9800",
    location: "Uva Province",
    duration: "Full Day",
    bestTime: "Jan – Apr",
    photo: "/images/destinations/ella.jpg",
    desc: "The Nine Arch Bridge is Sri Lanka's most iconic colonial-era structure — a magnificent viaduct built entirely from stone and brick without steel. Perched above a lush valley, it's best experienced with a train rumbling across.",
    highlights: ["Nine Arch Bridge & train spotting", "Little Adam's Peak sunrise hike", "Ella Rock full-day trek", "Scenic train ride from Kandy"],
    tip: "Check train schedules — the Colombo-Badulla train crosses at around 9am and 3pm. Get there 20 mins early."
  },
  {
    id: 7,
    name: "Galle Fort",
    tag: "Heritage",
    tagColor: "#FF5722",
    location: "Southern Province",
    duration: "Half Day",
    bestTime: "Nov – Apr",
    photo: "/images/destinations/galle.jpg",
    desc: "Built by the Portuguese in 1588 and later fortified by the Dutch, Galle Fort is a UNESCO World Heritage Site and one of the best-preserved colonial fortifications in Asia. Its cobblestone streets are lined with boutiques, cafes, and galleries.",
    highlights: ["Dutch Reformed Church (1755)", "Lighthouse & rampart walks", "Boutique galleries & local art", "Sunset over the Indian Ocean"],
    tip: "Walk the full 1.3km rampart loop at sunset — the views over the ocean turn golden and dramatic."
  },
  {
    id: 8,
    name: "Trincomalee & Nilaveli",
    tag: "Beach & Ocean",
    tagColor: "#03A9F4",
    location: "Eastern Province",
    duration: "2–3 Days",
    bestTime: "May – Sep",
    photo: "/images/destinations/trinco.jpg",
    desc: "Sri Lanka's east coast gem, Trincomalee boasts one of the world's finest natural harbours. Nilaveli beach stretches for miles with crystal-clear waters perfect for snorkelling, whale watching, and exploring Pigeon Island National Park.",
    highlights: ["Pigeon Island coral reef snorkelling", "Whale & dolphin watching", "Koneswaram Hindu temple", "Powder-white Nilaveli beach"],
    tip: "The east coast is at its best May–September when the west coast is in monsoon season — a perfect alternative."
  },
  {
    id: 9,
    name: "Anuradhapura Sacred City",
    tag: "Ancient Kingdom",
    tagColor: "#795548",
    location: "North Central Province",
    duration: "Full Day",
    bestTime: "Year Round",
    photo: "/images/destinations/anuradhapura.jpg",
    desc: "One of the ancient capitals of Sri Lanka and a UNESCO World Heritage Site, Anuradhapura was the first established kingdom in Sri Lanka. Its colossal dagobas (stupas) rank among the tallest ancient structures in the world.",
    highlights: ["Sri Maha Bodhi — 2,300-year-old sacred fig tree", "Ruwanwelisaya dagoba", "Jetavanaramaya — once the world's tallest stupa", "Isurumuniya rock temple"],
    tip: "Hire a bicycle at the entrance — the sacred city is spread across 40 km² and cycling is the best way to explore."
  },
]

const categories = ["All", "UNESCO Heritage", "Wildlife", "Beach", "Highland", "Scenic", "Heritage", "Sacred Site", "Beach & Ocean", "Ancient Kingdom"]

export default function DestinationsPage() {
  const [active, setActive] = useState("All")
  const [selected, setSelected] = useState<typeof destinations[0] | null>(null)

  const filtered = active === "All" ? destinations : destinations.filter(d => d.tag === active)

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,400;0,700;1,400&family=Inter:wght@300;400;500;600&display=swap');
        *{margin:0;padding:0;box-sizing:border-box}
        body{font-family:'Inter',sans-serif;background:#0D1B3E;color:white;overflow-x:hidden}
        .playfair{font-family:'Playfair Display',serif}
        .dest-card{cursor:pointer;border-radius:16px;overflow:hidden;border:1px solid rgba(255,255,255,0.08);transition:all .3s;background:rgba(255,255,255,0.03)}
        .dest-card:hover{transform:translateY(-6px);border-color:rgba(255,140,0,0.35);box-shadow:0 24px 60px rgba(0,0,0,0.4)}
        .dest-card img{width:100%;height:220px;object-fit:cover;transition:transform .5s}
        .dest-card:hover img{transform:scale(1.05)}
        .cat-btn{padding:0.45rem 1.1rem;border-radius:50px;font-size:0.78rem;font-weight:600;border:1px solid rgba(255,255,255,0.15);background:transparent;color:rgba(255,255,255,0.65);cursor:pointer;transition:all .25s;white-space:nowrap}
        .cat-btn:hover{border-color:rgba(255,140,0,0.4);color:#FFB347}
        .cat-btn.active{background:rgba(255,140,0,0.2);border-color:rgba(255,140,0,0.6);color:#FFB347}
        .modal-overlay{position:fixed;inset:0;background:rgba(0,0,0,0.75);backdrop-filter:blur(8px);z-index:500;display:flex;align-items:center;justify-content:center;padding:2rem;animation:fadeIn .25s ease}
        @keyframes fadeIn{from{opacity:0}to{opacity:1}}
        .modal{background:#0f1e3a;border:1px solid rgba(255,255,255,0.1);border-radius:20px;max-width:760px;width:100%;max-height:90vh;overflow-y:auto;animation:slideUp .3s ease}
        @keyframes slideUp{from{opacity:0;transform:translateY(30px)}to{opacity:1;transform:translateY(0)}}
        .modal img{width:100%;height:320px;object-fit:cover;border-radius:16px 16px 0 0}
        .highlight-item{display:flex;align-items:flex-start;gap:10px;padding:0.6rem 0;border-bottom:1px solid rgba(255,255,255,0.06)}
        .highlight-item:last-child{border-bottom:none}
        .nav-link{color:rgba(255,255,255,0.7);text-decoration:none;font-size:0.87rem;font-weight:500;transition:color .25s}
        .nav-link:hover{color:white}
        @media(max-width:768px){
          .dest-grid{grid-template-columns:1fr!important}
          .cats{flex-wrap:wrap}
          .nav-desktop{display:none!important}
        }
      `}</style>

      {/* NAV */}
      <nav style={{position:"fixed",top:0,left:0,right:0,zIndex:200,padding:"1rem 5%",display:"flex",alignItems:"center",justifyContent:"space-between",background:"rgba(10,20,50,0.97)",backdropFilter:"blur(16px)",borderBottom:"1px solid rgba(255,255,255,0.07)"}}>
        <Link href="/" style={{display:"flex",alignItems:"center",gap:11,textDecoration:"none"}}>
          <img src="/images/logo.jpg" alt="Fernando Tours" style={{height:42,width:"auto",objectFit:"contain",borderRadius:10,mixBlendMode:"lighten"}} />
          <span className="playfair" style={{fontSize:"1.25rem",color:"white"}}>Fernando Tours</span>
        </Link>
        <div className="nav-desktop" style={{display:"flex",gap:"2rem",alignItems:"center"}}>
          <Link href="/" className="nav-link">Home</Link>
          <Link href="/destinations" className="nav-link" style={{color:"#FFB347"}}>Destinations</Link>
          <Link href="/#packages" className="nav-link">Packages</Link>
          <Link href="/#contact" className="nav-link">Contact</Link>
          <Link href="/#contact" style={{background:"#FF8C00",color:"white",padding:"0.5rem 1.4rem",borderRadius:50,fontWeight:600,fontSize:"0.85rem",textDecoration:"none"}}>Book Now</Link>
        </div>
      </nav>

      {/* BACK BUTTON */}
      <div style={{position:"fixed",bottom:"2rem",left:"2rem",zIndex:300}}>
        <button onClick={()=>window.history.back()} style={{display:"flex",alignItems:"center",gap:8,background:"rgba(10,20,50,0.92)",backdropFilter:"blur(12px)",border:"1px solid rgba(255,255,255,0.15)",borderRadius:50,padding:"0.6rem 1.3rem",color:"white",fontSize:"0.85rem",fontWeight:600,cursor:"pointer",fontFamily:"'Inter',sans-serif",boxShadow:"0 4px 20px rgba(0,0,0,0.4)",transition:"all .25s"}}
          onMouseEnter={e=>{(e.currentTarget as HTMLElement).style.background="rgba(255,140,0,0.25)";(e.currentTarget as HTMLElement).style.borderColor="rgba(255,140,0,0.5)"}}
          onMouseLeave={e=>{(e.currentTarget as HTMLElement).style.background="rgba(10,20,50,0.92)";(e.currentTarget as HTMLElement).style.borderColor="rgba(255,255,255,0.15)"}}>
          ← Back
        </button>
      </div>

      {/* HERO BANNER */}
      <div style={{position:"relative",height:340,overflow:"hidden",marginTop:0}}>
        <img src="/images/destinations/hero-banner.jpg" alt="Sri Lanka" style={{width:"100%",height:"100%",objectFit:"cover",objectPosition:"center 60%"}} />
        <div style={{position:"absolute",inset:0,background:"linear-gradient(180deg,rgba(8,14,36,0.5) 0%,rgba(8,14,36,0.75) 100%)"}} />
        <div style={{position:"absolute",inset:0,display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center",paddingTop:"4rem"}}>
          <span style={{color:"#FF8C00",fontSize:"0.74rem",fontWeight:700,letterSpacing:"2.5px",textTransform:"uppercase",marginBottom:"0.9rem",display:"block"}}>Explore Sri Lanka</span>
          <h1 className="playfair" style={{fontSize:"clamp(2rem,5vw,3.5rem)",textAlign:"center",marginBottom:"0.8rem"}}>Iconic Destinations</h1>
          <p style={{color:"rgba(255,255,255,0.72)",fontSize:"1rem",maxWidth:520,textAlign:"center",lineHeight:1.7}}>From ancient rock fortresses to golden beaches — every corner of the island holds a story.</p>
        </div>
      </div>

      {/* CATEGORY FILTER */}
      <div style={{padding:"2rem 5% 0",position:"sticky",top:65,zIndex:100,background:"rgba(13,27,62,0.97)",backdropFilter:"blur(12px)",borderBottom:"1px solid rgba(255,255,255,0.07)"}}>
        <div className="cats" style={{display:"flex",gap:"0.6rem",overflowX:"auto",paddingBottom:"1rem"}}>
          {categories.map(c => (
            <button key={c} className={`cat-btn${active===c?" active":""}`} onClick={()=>setActive(c)}>{c}</button>
          ))}
        </div>
      </div>

      {/* DESTINATIONS GRID */}
      <section style={{padding:"3rem 5% 6rem"}}>
        <p style={{color:"rgba(255,255,255,0.4)",fontSize:"0.82rem",marginBottom:"2rem"}}>{filtered.length} destination{filtered.length!==1?"s":""} found</p>
        <div className="dest-grid" style={{display:"grid",gridTemplateColumns:"repeat(3,1fr)",gap:"1.5rem"}}>
          {filtered.map(dest => (
            <div key={dest.id} className="dest-card" onClick={()=>setSelected(dest)}>
              <div style={{position:"relative",overflow:"hidden"}}>
                <img src={dest.photo} alt={dest.name} loading="lazy" />
                <div style={{position:"absolute",inset:0,background:"linear-gradient(to top,rgba(8,14,36,0.85) 0%,transparent 55%)"}} />
                <span style={{position:"absolute",top:"1rem",left:"1rem",background:"rgba(0,0,0,0.45)",backdropFilter:"blur(8px)",border:`1px solid ${dest.tagColor}55`,color:dest.tagColor,fontSize:"0.68rem",fontWeight:700,letterSpacing:"0.8px",textTransform:"uppercase",padding:"0.28rem 0.75rem",borderRadius:50}}>{dest.tag}</span>
                <div style={{position:"absolute",bottom:"1rem",left:"1rem",right:"1rem"}}>
                  <div className="playfair" style={{fontSize:"1.2rem",color:"white",marginBottom:"0.3rem"}}>{dest.name}</div>
                  <div style={{color:"rgba(255,255,255,0.65)",fontSize:"0.78rem"}}>📍 {dest.location}</div>
                </div>
              </div>
              <div style={{padding:"1.2rem"}}>
                <p style={{color:"rgba(255,255,255,0.65)",fontSize:"0.85rem",lineHeight:1.65,marginBottom:"1rem"}}>{dest.desc.slice(0,120)}...</p>
                <div style={{display:"flex",gap:"1rem",marginBottom:"1rem"}}>
                  <div style={{background:"rgba(255,255,255,0.05)",borderRadius:8,padding:"0.4rem 0.8rem",fontSize:"0.75rem",color:"rgba(255,255,255,0.7)"}}>⏱ {dest.duration}</div>
                  <div style={{background:"rgba(255,255,255,0.05)",borderRadius:8,padding:"0.4rem 0.8rem",fontSize:"0.75rem",color:"rgba(255,255,255,0.7)"}}>🌤 {dest.bestTime}</div>
                </div>
                <button style={{width:"100%",background:"rgba(255,140,0,0.14)",border:"1px solid rgba(255,140,0,0.4)",color:"#FFB347",padding:"0.62rem",borderRadius:8,fontWeight:600,fontSize:"0.85rem",cursor:"pointer",fontFamily:"'Inter',sans-serif"}}>
                  Learn More →
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section style={{padding:"4rem 5%",textAlign:"center",background:"rgba(255,140,0,0.05)",borderTop:"1px solid rgba(255,140,0,0.1)"}}>
        <span style={{color:"#FF8C00",fontSize:"0.74rem",fontWeight:700,letterSpacing:"2.5px",textTransform:"uppercase",display:"block",marginBottom:"0.9rem"}}>Ready to Go?</span>
        <h2 className="playfair" style={{fontSize:"clamp(1.7rem,3.5vw,2.4rem)",marginBottom:"1rem"}}>Plan Your Sri Lanka Adventure</h2>
        <p style={{color:"rgba(255,255,255,0.65)",marginBottom:"2rem",fontSize:"0.95rem"}}>Tell us which destinations excite you — we&apos;ll craft the perfect itinerary.</p>
        <Link href="/#contact" style={{background:"#FF8C00",color:"white",padding:"0.85rem 2.5rem",borderRadius:50,fontWeight:600,fontSize:"0.95rem",textDecoration:"none",boxShadow:"0 4px 20px rgba(255,140,0,.35)"}}>
          Plan My Trip
        </Link>
      </section>

      {/* MODAL - destination detail */}
      {selected && (
        <div className="modal-overlay" onClick={()=>setSelected(null)}>
          <div className="modal" onClick={e=>e.stopPropagation()}>
            <div style={{position:"relative"}}>
              <img src={selected.photo} alt={selected.name} />
              <button onClick={()=>setSelected(null)} style={{position:"absolute",top:"1rem",right:"1rem",background:"rgba(0,0,0,0.55)",backdropFilter:"blur(8px)",border:"1px solid rgba(255,255,255,0.2)",borderRadius:"50%",width:38,height:38,color:"white",fontSize:"1.1rem",cursor:"pointer",display:"flex",alignItems:"center",justifyContent:"center"}}>✕</button>
              <span style={{position:"absolute",top:"1rem",left:"1rem",background:"rgba(0,0,0,0.45)",backdropFilter:"blur(8px)",border:`1px solid ${selected.tagColor}55`,color:selected.tagColor,fontSize:"0.7rem",fontWeight:700,letterSpacing:"0.8px",textTransform:"uppercase",padding:"0.3rem 0.8rem",borderRadius:50}}>{selected.tag}</span>
            </div>
            <div style={{padding:"2rem"}}>
              <h2 className="playfair" style={{fontSize:"1.8rem",marginBottom:"0.4rem"}}>{selected.name}</h2>
              <div style={{display:"flex",gap:"1rem",marginBottom:"1.5rem",flexWrap:"wrap"}}>
                <span style={{color:"rgba(255,255,255,0.6)",fontSize:"0.82rem"}}>📍 {selected.location}</span>
                <span style={{color:"rgba(255,255,255,0.6)",fontSize:"0.82rem"}}>⏱ {selected.duration}</span>
                <span style={{color:"rgba(255,255,255,0.6)",fontSize:"0.82rem"}}>🌤 Best: {selected.bestTime}</span>
              </div>
              <p style={{color:"rgba(255,255,255,0.78)",lineHeight:1.78,marginBottom:"1.8rem",fontSize:"0.95rem"}}>{selected.desc}</p>

              <h4 style={{fontSize:"0.85rem",fontWeight:700,color:"#FFB347",letterSpacing:"1px",textTransform:"uppercase",marginBottom:"1rem"}}>Highlights</h4>
              <div style={{marginBottom:"1.8rem"}}>
                {selected.highlights.map(h=>(
                  <div key={h} className="highlight-item">
                    <span style={{color:"#FF8C00",fontSize:"0.7rem",marginTop:3,flexShrink:0}}>✦</span>
                    <span style={{color:"rgba(255,255,255,0.82)",fontSize:"0.88rem"}}>{h}</span>
                  </div>
                ))}
              </div>

              <div style={{background:"rgba(255,140,0,0.08)",border:"1px solid rgba(255,140,0,0.2)",borderRadius:12,padding:"1rem 1.2rem",marginBottom:"1.8rem"}}>
                <span style={{color:"#FFB347",fontSize:"0.78rem",fontWeight:700,letterSpacing:"0.5px",textTransform:"uppercase",display:"block",marginBottom:"0.4rem"}}>💡 Insider Tip</span>
                <p style={{color:"rgba(255,255,255,0.78)",fontSize:"0.88rem",lineHeight:1.65}}>{selected.tip}</p>
              </div>

              <Link href="/#contact" onClick={()=>setSelected(null)} style={{display:"block",width:"100%",textAlign:"center",background:"#FF8C00",color:"white",padding:"0.9rem",borderRadius:10,fontWeight:700,fontSize:"0.95rem",textDecoration:"none"}}>
                Add to My Trip →
              </Link>
            </div>
          </div>
        </div>
      )}
    </>
  )
}