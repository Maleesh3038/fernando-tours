"use client"
import { useState } from "react"
import Link from "next/link"

const packages = [
  {
    id: 1,
    icon: "🌿",
    name: "Sri Lanka Highlights Escape",
    duration: "3 Nights / 4 Days",
    bestFor: "Short holiday, first-time visitors",
    desc: "Perfect for first-time visitors and short holidays. Experience the best of Sri Lanka — elephants, temples, tea country, and wildlife in just 4 days.",
    days: [
      {
        day: "Day 1",
        route: "Airport → Kandy",
        items: [
          "Pickup from Airport / Hotel",
          "Visit Pinnawala Elephant Orphanage",
          "Spice Garden experience in Mawanella",
          "Evening cultural show",
          "Overnight in Kandy"
        ]
      },
      {
        day: "Day 2",
        route: "Kandy → Ella",
        items: [
          "Visit Temple of the Sacred Tooth Relic",
          "Ambuluwawa Tower",
          "Tea factory & plantation visit",
          "Ramboda Falls stop",
          "Overnight in Ella"
        ]
      },
      {
        day: "Day 3",
        route: "Ella → Yala",
        items: [
          "Visit Nine Arches Bridge",
          "Little Adam's Peak hike",
          "Ravana Falls",
          "Evening Safari at Yala National Park",
          "Overnight stay in Yala"
        ]
      },
      {
        day: "Day 4",
        route: "Yala → Beach / Departure",
        items: [
          "Udawalawe Elephant Transit Home Visit",
          "Airport drop / Hotel drop"
        ]
      }
    ]
  },
  {
    id: 2,
    icon: "🌿",
    name: "Nature + Culture Experience",
    duration: "4 Nights / 5 Days",
    bestFor: "Balanced experience",
    desc: "A perfect balance of ancient culture, scenic highlands, and wildlife. Includes Sigiriya Rock Fortress, Kandy, Ella, and Yala Safari.",
    days: [
      {
        day: "Day 1",
        route: "Airport → Sigiriya / Dambulla",
        items: [
          "Visit Dambulla Cave Temple",
          "Village tour experience",
          "Overnight in Sigiriya"
        ]
      },
      {
        day: "Day 2",
        route: "Sigiriya → Kandy",
        items: [
          "Climb Sigiriya Rock Fortress",
          "Travel to Kandy",
          "Evening cultural show",
          "Overnight in Kandy"
        ]
      },
      {
        day: "Day 3",
        route: "Kandy → Ella",
        items: [
          "Visit Temple of the Sacred Tooth Relic",
          "Ambuluwawa Tower",
          "Tea factory & plantation visit",
          "Ramboda Falls stop",
          "Overnight in Ella"
        ]
      },
      {
        day: "Day 4",
        route: "Ella → Yala",
        items: [
          "Visit Nine Arches Bridge",
          "Little Adam's Peak hike",
          "Ravana Falls",
          "Evening Safari at Yala National Park",
          "Overnight stay in Yala"
        ]
      },
      {
        day: "Day 5",
        route: "Yala → Beach / Departure",
        items: [
          "Udawalawe Elephant Transit Home Visit",
          "Airport drop / Hotel drop"
        ]
      }
    ]
  },
  {
    id: 3,
    icon: "🌿",
    name: "Classic Sri Lanka Journey",
    duration: "5 Nights / 6 Days",
    bestFor: "Most popular full experience",
    featured: true,
    desc: "Our most popular tour! The complete Sri Lanka experience — ancient ruins, highlands, tea country, wildlife safari, and beaches all in one journey.",
    days: [
      {
        day: "Day 1",
        route: "Airport → Sigiriya",
        items: [
          "Visit Dambulla Cave Temple",
          "Village tour experience",
          "Overnight in Sigiriya"
        ]
      },
      {
        day: "Day 2",
        route: "Sigiriya + Polonnaruwa",
        items: [
          "Climbing Sigiriya Rock Fortress",
          "Explore Polonnaruwa ancient ruins",
          "Overnight in Sigiriya"
        ]
      },
      {
        day: "Day 3",
        route: "Sigiriya → Kandy",
        items: [
          "Travel to Kandy",
          "Visit Temple of the Sacred Tooth Relic",
          "Evening cultural show",
          "Overnight in Kandy"
        ]
      },
      {
        day: "Day 4",
        route: "Kandy → Ella",
        items: [
          "Ambuluwawa Tower",
          "Tea factory & plantation visit",
          "Ramboda Falls stop",
          "Overnight in Ella"
        ]
      },
      {
        day: "Day 5",
        route: "Ella → Yala",
        items: [
          "Visit Nine Arches Bridge",
          "Little Adam's Peak hike",
          "Ravana Falls",
          "Evening Safari at Yala National Park",
          "Overnight stay in Yala"
        ]
      },
      {
        day: "Day 6",
        route: "Yala → Beach → Departure",
        items: [
          "Udawalawe Elephant Transit Home Visit",
          "Airport drop / Hotel drop"
        ]
      }
    ]
  },
  {
    id: 4,
    icon: "🌿",
    name: "Ultimate Sri Lanka Discovery",
    duration: "6 Nights / 7 Days",
    bestFor: "Full island experience",
    desc: "The complete island experience with an extra day for late arrivals. See everything Sri Lanka has to offer — from ancient kingdoms to golden beaches.",
    days: [
      {
        day: "Day 1",
        route: "Airport → Negombo",
        items: [
          "Late evening arrivals",
          "Overnight in Negombo"
        ]
      },
      {
        day: "Day 2",
        route: "Airport → Sigiriya",
        items: [
          "Visit Dambulla Cave Temple",
          "Village tour experience",
          "Overnight in Sigiriya"
        ]
      },
      {
        day: "Day 3",
        route: "Sigiriya + Polonnaruwa",
        items: [
          "Climbing Sigiriya Rock Fortress",
          "Explore Polonnaruwa ancient ruins",
          "Overnight in Sigiriya"
        ]
      },
      {
        day: "Day 4",
        route: "Sigiriya → Kandy",
        items: [
          "Travel to Kandy",
          "Visit Temple of the Sacred Tooth Relic",
          "Evening cultural show",
          "Overnight in Kandy"
        ]
      },
      {
        day: "Day 5",
        route: "Kandy → Ella",
        items: [
          "Ambuluwawa Tower",
          "Tea factory & plantation visit",
          "Ramboda Falls stop",
          "Overnight in Ella"
        ]
      },
      {
        day: "Day 6",
        route: "Ella → Yala",
        items: [
          "Visit Nine Arches Bridge",
          "Little Adam's Peak hike",
          "Ravana Falls",
          "Evening Safari at Yala National Park",
          "Overnight stay in Yala"
        ]
      },
      {
        day: "Day 7",
        route: "Yala → Beach → Departure",
        items: [
          "Udawalawe Elephant Transit Home Visit",
          "Airport drop / Hotel drop"
        ]
      }
    ]
  }
]

export default function PackagesPage() {
  const [selected, setSelected] = useState<number | null>(null)

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,400;0,700;1,400&family=Inter:wght@300;400;500;600&display=swap');
        *{margin:0;padding:0;box-sizing:border-box}
        body{font-family:'Inter',sans-serif;background:#F7F3EE;color:#1a1a2e;overflow-x:hidden}
        .playfair{font-family:'Playfair Display',serif}
        .nav-link{color:rgba(255,255,255,0.85);text-decoration:none;font-size:0.87rem;font-weight:500;transition:color .25s}
        .nav-link:hover{color:white}
        .pkg-card{background:white;border-radius:20px;border:1px solid rgba(0,0,0,0.07);box-shadow:0 2px 16px rgba(0,0,0,0.06);transition:all .3s;cursor:pointer;overflow:hidden}
        .pkg-card:hover{transform:translateY(-4px);box-shadow:0 16px 40px rgba(0,0,0,0.11);border-color:rgba(200,134,10,0.3)}
        .pkg-card.featured{border-color:rgba(200,134,10,0.5);box-shadow:0 4px 24px rgba(200,134,10,0.12)}
        .day-card{background:#F9F6F1;border-radius:12px;padding:1rem 1.2rem;border-left:3px solid #C8860A;margin-bottom:0.75rem}
        .modal-overlay{position:fixed;inset:0;background:rgba(0,0,0,0.6);backdrop-filter:blur(8px);z-index:500;display:flex;align-items:center;justify-content:center;padding:1rem;animation:fadeIn .25s ease}
        @keyframes fadeIn{from{opacity:0}to{opacity:1}}
        .modal{background:white;border-radius:20px;max-width:700px;width:100%;max-height:90vh;overflow-y:auto;animation:slideUp .3s ease}
        @keyframes slideUp{from{opacity:0;transform:translateY(30px)}to{opacity:1;transform:translateY(0)}}
        .modal-header{background:linear-gradient(135deg,#1a3d2b,#2d6a4f);padding:2rem;position:sticky;top:0;z-index:10}
        @media(max-width:768px){
          .pkg-grid{grid-template-columns:1fr!important}
          .nav-desktop{display:none!important}
        }
      `}</style>

      {/* NAV */}
      <nav style={{position:"fixed",top:0,left:0,right:0,zIndex:200,padding:"0.85rem 5%",display:"flex",alignItems:"center",justifyContent:"space-between",background:"rgba(15,30,60,0.96)",backdropFilter:"blur(20px)",borderBottom:"1px solid rgba(255,255,255,0.08)"}}>
        <Link href="/" style={{display:"flex",alignItems:"center",gap:10,textDecoration:"none"}}>
          <img src="/images/logo.jpg" alt="Fernando Tours" style={{height:38,width:"auto",objectFit:"contain",borderRadius:8,mixBlendMode:"lighten"}} />
          <span className="playfair" style={{fontSize:"1.15rem",color:"white"}}>Fernando Tours</span>
        </Link>
        <div className="nav-desktop" style={{display:"flex",gap:"1.5rem",alignItems:"center"}}>
          <Link href="/" className="nav-link">Home</Link>
          <Link href="/destinations" className="nav-link">Destinations</Link>
          <Link href="/packages" className="nav-link" style={{color:"#FFB347"}}>Packages</Link>
          <Link href="/gallery" className="nav-link">Gallery</Link>
          <Link href="/contact" className="nav-link">Contact</Link>
          <Link href="/contact" style={{background:"#FF8C00",color:"white",padding:"0.45rem 1.2rem",borderRadius:50,fontWeight:600,fontSize:"0.83rem",textDecoration:"none"}}>Book Now</Link>
        </div>
      </nav>

      {/* HERO BANNER */}
      <div style={{background:"linear-gradient(135deg,#0f1e3a 0%,#1a3d2b 100%)",paddingTop:"5rem",paddingBottom:"3rem",textAlign:"center",marginTop:0}}>
        <div style={{paddingTop:"2rem"}}>
          <span style={{color:"#90EE90",fontSize:"0.74rem",fontWeight:700,letterSpacing:"2.5px",textTransform:"uppercase",display:"block",marginBottom:"0.9rem"}}>Curated Journeys</span>
          <h1 className="playfair" style={{fontSize:"clamp(2rem,5vw,3rem)",color:"white",marginBottom:"0.8rem"}}>Tour Packages</h1>
          <p style={{color:"rgba(255,255,255,0.72)",fontSize:"0.95rem",maxWidth:520,margin:"0 auto",lineHeight:1.7,padding:"0 1rem"}}>
            All tours include private air-conditioned vehicle, English-speaking guide, and all transfers. Click any package to view the full day-by-day itinerary.
          </p>
        </div>
      </div>

      {/* PACKAGES GRID */}
      <section style={{padding:"3rem 5% 6rem"}}>
        <div className="pkg-grid" style={{display:"grid",gridTemplateColumns:"repeat(2,1fr)",gap:"1.5rem"}}>
          {packages.map(pkg => (
            <div key={pkg.id} className={`pkg-card${pkg.featured ? " featured" : ""}`} onClick={() => setSelected(pkg.id)}>
              {/* Card header */}
              <div style={{background:"linear-gradient(135deg,#1a3d2b,#2d6a4f)",padding:"1.5rem 1.8rem",position:"relative"}}>
                {pkg.featured && (
                  <span style={{position:"absolute",top:"1rem",right:"1rem",background:"#FF8C00",color:"white",fontSize:"0.68rem",fontWeight:700,padding:"0.28rem 0.8rem",borderRadius:50}}>Most Popular</span>
                )}
                <span style={{fontSize:"2rem",display:"block",marginBottom:"0.6rem"}}>{pkg.icon}</span>
                <h2 className="playfair" style={{fontSize:"1.35rem",color:"white",marginBottom:"0.3rem"}}>{pkg.name}</h2>
                <div style={{color:"rgba(255,255,255,0.75)",fontSize:"0.82rem",marginBottom:"0.5rem"}}>⏱ {pkg.duration}</div>
                <div style={{display:"inline-flex",alignItems:"center",gap:6,background:"rgba(255,255,255,0.15)",borderRadius:50,padding:"0.28rem 0.8rem"}}>
                  <span style={{color:"#90EE90",fontSize:"0.7rem",fontWeight:700}}>✦ Best for:</span>
                  <span style={{color:"rgba(255,255,255,0.9)",fontSize:"0.7rem"}}>{pkg.bestFor}</span>
                </div>
              </div>

              {/* Card body */}
              <div style={{padding:"1.5rem 1.8rem"}}>
                <p style={{color:"rgba(26,26,46,0.65)",fontSize:"0.88rem",lineHeight:1.65,marginBottom:"1.2rem"}}>{pkg.desc}</p>

                {/* Day previews */}
                <div style={{marginBottom:"1.2rem"}}>
                  {pkg.days.slice(0,3).map((d,i) => (
                    <div key={i} style={{display:"flex",alignItems:"center",gap:10,padding:"0.45rem 0",borderBottom:"1px solid rgba(0,0,0,0.05)"}}>
                      <span style={{background:"#C8860A",color:"white",fontSize:"0.65rem",fontWeight:700,padding:"0.18rem 0.55rem",borderRadius:50,flexShrink:0}}>{d.day}</span>
                      <span style={{color:"rgba(26,26,46,0.7)",fontSize:"0.82rem"}}>{d.route}</span>
                    </div>
                  ))}
                  {pkg.days.length > 3 && (
                    <div style={{color:"#C8860A",fontSize:"0.78rem",fontWeight:600,padding:"0.45rem 0"}}>+ {pkg.days.length - 3} more days...</div>
                  )}
                </div>

                <button style={{width:"100%",background:"rgba(200,134,10,0.1)",border:"1.5px solid rgba(200,134,10,0.4)",color:"#C8860A",padding:"0.72rem",borderRadius:10,fontWeight:700,fontSize:"0.88rem",cursor:"pointer",fontFamily:"'Inter',sans-serif",transition:"all .25s"}}
                  onMouseEnter={e=>(e.currentTarget as HTMLElement).style.background="#C8860A"}
                  onMouseLeave={e=>(e.currentTarget as HTMLElement).style.background="rgba(200,134,10,0.1)"}
                  onClick={e=>{e.stopPropagation();setSelected(pkg.id)}}>
                  View Full Itinerary →
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div style={{textAlign:"center",marginTop:"3rem",padding:"2.5rem",background:"linear-gradient(135deg,#1a3a5c,#1e4a70)",borderRadius:20}}>
          <span style={{color:"#90CAF9",fontSize:"0.74rem",fontWeight:700,letterSpacing:"2.5px",textTransform:"uppercase",display:"block",marginBottom:"0.8rem"}}>Custom Tours Available</span>
          <h3 className="playfair" style={{fontSize:"1.6rem",color:"white",marginBottom:"0.8rem"}}>Can&apos;t find the perfect package?</h3>
          <p style={{color:"rgba(255,255,255,0.72)",fontSize:"0.92rem",marginBottom:"1.5rem"}}>We create fully custom itineraries tailored to your dates, interests, and budget.</p>
          <Link href="/contact" style={{background:"#FF8C00",color:"white",padding:"0.85rem 2.5rem",borderRadius:50,fontWeight:700,fontSize:"0.93rem",textDecoration:"none",display:"inline-block"}}>
            Request Custom Tour
          </Link>
        </div>
      </section>

      {/* MODAL - Full Itinerary */}
      {selected !== null && (() => {
        const pkg = packages.find(p => p.id === selected)!
        return (
          <div className="modal-overlay" onClick={() => setSelected(null)}>
            <div className="modal" onClick={e => e.stopPropagation()}>
              {/* Modal header */}
              <div className="modal-header">
                <button onClick={() => setSelected(null)} style={{position:"absolute",top:"1rem",right:"1rem",background:"rgba(255,255,255,0.15)",border:"none",borderRadius:"50%",width:36,height:36,color:"white",fontSize:"1.1rem",cursor:"pointer",display:"flex",alignItems:"center",justifyContent:"center"}}>✕</button>
                <span style={{fontSize:"2rem",display:"block",marginBottom:"0.5rem"}}>{pkg.icon}</span>
                <h2 className="playfair" style={{fontSize:"1.6rem",color:"white",marginBottom:"0.3rem"}}>{pkg.name}</h2>
                <div style={{color:"rgba(255,255,255,0.75)",fontSize:"0.82rem",marginBottom:"0.6rem"}}>⏱ {pkg.duration}</div>
                <div style={{display:"inline-flex",alignItems:"center",gap:6,background:"rgba(255,255,255,0.15)",borderRadius:50,padding:"0.3rem 0.9rem"}}>
                  <span style={{color:"#90EE90",fontSize:"0.7rem",fontWeight:700}}>✦ Best for:</span>
                  <span style={{color:"rgba(255,255,255,0.9)",fontSize:"0.7rem"}}>{pkg.bestFor}</span>
                </div>
              </div>

              {/* Modal body */}
              <div style={{padding:"1.8rem"}}>
                <p style={{color:"rgba(26,26,46,0.7)",lineHeight:1.7,marginBottom:"1.8rem",fontSize:"0.93rem"}}>{pkg.desc}</p>

                <h3 style={{fontSize:"0.8rem",fontWeight:700,color:"#C8860A",letterSpacing:"1.5px",textTransform:"uppercase",marginBottom:"1.2rem"}}>Day by Day Itinerary</h3>

                {pkg.days.map((day, i) => (
                  <div key={i} className="day-card">
                    <div style={{display:"flex",alignItems:"center",gap:10,marginBottom:"0.6rem"}}>
                      <span style={{background:"#C8860A",color:"white",fontSize:"0.68rem",fontWeight:700,padding:"0.22rem 0.65rem",borderRadius:50,flexShrink:0}}>{day.day}</span>
                      <span style={{fontWeight:700,fontSize:"0.9rem",color:"#1a1a2e"}}>{day.route}</span>
                    </div>
                    <ul style={{listStyle:"none",paddingLeft:"0.5rem"}}>
                      {day.items.map((item, j) => (
                        <li key={j} style={{fontSize:"0.84rem",color:"rgba(26,26,46,0.72)",padding:"0.22rem 0",paddingLeft:"1rem",position:"relative"}}>
                          <span style={{position:"absolute",left:0,color:"#C8860A",fontSize:"0.7rem",top:"4px"}}>→</span>
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}

                {/* Includes */}
                <div style={{background:"#F0FAF4",border:"1px solid rgba(45,106,79,0.2)",borderRadius:12,padding:"1.2rem",margin:"1.5rem 0"}}>
                  <h4 style={{fontSize:"0.8rem",fontWeight:700,color:"#2d6a4f",letterSpacing:"1px",textTransform:"uppercase",marginBottom:"0.8rem"}}>All Tours Include</h4>
                  <div style={{display:"grid",gridTemplateColumns:"1fr 1fr",gap:"0.5rem"}}>
                    {["Private air-conditioned vehicle","English-speaking expert guide","All transfers & pick-ups","Entrance fees to sites","Hotel drop / Airport drop","Flexible itinerary changes"].map(item => (
                      <div key={item} style={{display:"flex",alignItems:"center",gap:6,fontSize:"0.82rem",color:"rgba(26,26,46,0.75)"}}>
                        <span style={{color:"#2d6a4f",fontWeight:700,fontSize:"0.8rem"}}>✓</span> {item}
                      </div>
                    ))}
                  </div>
                </div>

                <Link href="/contact" onClick={() => setSelected(null)} style={{display:"block",width:"100%",textAlign:"center",background:"#FF8C00",color:"white",padding:"1rem",borderRadius:12,fontWeight:700,fontSize:"0.95rem",textDecoration:"none",boxShadow:"0 4px 16px rgba(255,140,0,0.3)"}}>
                  Book This Tour — Get a Free Quote →
                </Link>
              </div>
            </div>
          </div>
        )
      })()}

      {/* Back button */}
      <div style={{position:"fixed",bottom:"2rem",left:"2rem",zIndex:300}}>
        <button onClick={() => window.history.back()} style={{display:"flex",alignItems:"center",gap:8,background:"rgba(15,30,60,0.92)",backdropFilter:"blur(12px)",border:"1px solid rgba(255,255,255,0.15)",borderRadius:50,padding:"0.6rem 1.3rem",color:"white",fontSize:"0.85rem",fontWeight:600,cursor:"pointer",fontFamily:"'Inter',sans-serif"}}>
          ← Back
        </button>
      </div>
    </>
  )
}