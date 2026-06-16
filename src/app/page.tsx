"use client"
import { useEffect, useRef } from "react"
import Link from "next/link"

const packages = [
  {
    id: 1, icon: "🌿", name: "Sri Lanka Highlights Escape", duration: "3 Nights / 4 Days", price: null, featured: false,
    desc: "Perfect for first-time visitors and short holidays. Kandy, Ella, Yala — the best of Sri Lanka in 4 days.",
    highlights: [
      "Day 1: Airport → Pinnawala Elephant Orphanage → Spice Garden → Kandy Cultural Show",
      "Day 2: Temple of the Tooth → Ambuluwawa Tower → Tea Factory → Ramboda Falls → Ella",
      "Day 3: Nine Arches Bridge → Little Adam's Peak → Ravana Falls → Yala Evening Safari",
      "Day 4: Udawalawe Elephant Transit Home → Airport / Hotel Drop"
    ]
  },
  {
    id: 2, icon: "🌿", name: "Nature + Culture Experience", duration: "4 Nights / 5 Days", price: null, featured: false,
    desc: "A balanced mix of ancient culture, wildlife, and scenic highlands. Sigiriya, Kandy, Ella & Yala.",
    highlights: [
      "Day 1: Airport → Dambulla Cave Temple → Village Tour → Sigiriya",
      "Day 2: Sigiriya Rock Fortress → Kandy → Evening Cultural Show",
      "Day 3: Temple of the Tooth → Ambuluwawa Tower → Tea Factory → Ramboda Falls → Ella",
      "Day 4: Nine Arches Bridge → Little Adam's Peak → Ravana Falls → Yala Evening Safari",
      "Day 5: Udawalawe Elephant Transit Home → Airport / Hotel Drop"
    ]
  },
  {
    id: 3, icon: "🌿", name: "Classic Sri Lanka Journey", duration: "5 Nights / 6 Days", price: null, featured: true,
    desc: "Our most popular tour! The full Sri Lanka experience — ruins, highlands, wildlife, and beaches.",
    highlights: [
      "Day 1: Airport → Dambulla Cave Temple → Village Tour → Sigiriya",
      "Day 2: Sigiriya Rock Fortress → Polonnaruwa Ancient Ruins",
      "Day 3: Travel to Kandy → Temple of the Tooth → Evening Cultural Show",
      "Day 4: Ambuluwawa Tower → Tea Factory → Ramboda Falls → Ella",
      "Day 5: Nine Arches Bridge → Little Adam's Peak → Ravana Falls → Yala Evening Safari",
      "Day 6: Udawalawe Elephant Transit Home → Beach → Airport / Hotel Drop"
    ]
  },
  {
    id: 4, icon: "🌿", name: "Ultimate Sri Lanka Discovery", duration: "6 Nights / 7 Days", price: null, featured: false,
    desc: "The complete island experience with an extra day for late arrivals. Perfect for those who want it all.",
    highlights: [
      "Day 1: Airport → Negombo (Late Evening Arrivals)",
      "Day 2: Dambulla Cave Temple → Village Tour → Sigiriya",
      "Day 3: Sigiriya Rock Fortress → Polonnaruwa Ancient Ruins",
      "Day 4: Kandy → Temple of the Tooth → Evening Cultural Show",
      "Day 5: Ambuluwawa Tower → Tea Factory → Ramboda Falls → Ella",
      "Day 6: Nine Arches Bridge → Little Adam's Peak → Ravana Falls → Yala Evening Safari",
      "Day 7: Udawalawe Elephant Transit Home → Beach → Airport / Hotel Drop"
    ]
  },
]
const testimonials = [
  { initials: "SR", name: "Sarah & Ryan Mitchell", country: "🇬🇧 United Kingdom", text: "Fernando Tours made our honeymoon absolutely magical. Every detail was perfect — the villa, the safaris, the beach sunsets. We'll treasure every memory." },
  { initials: "MK", name: "Michael Kaufmann", country: "🇩🇪 Germany", text: "The 10-day Classic tour exceeded every expectation. Our guide was incredible — knowledgeable, funny, and made us feel like family from day one." },
  { initials: "AP", name: "Anika Patel", country: "🇺🇸 United States", text: "The Yala safari was breathtaking — 3 leopards in one day! Fernando Tours handled everything flawlessly. Worth every rupee and more." },
]

const cultureStrip = [
  { icon: "🐘", label: "Wildlife Safaris" },
  { icon: "🏛️", label: "Ancient Kingdoms" },
  { icon: "🌊", label: "Pristine Beaches" },
  { icon: "☕", label: "Tea Highlands" },
  { icon: "🪷", label: "Sacred Temples" },
  { icon: "🍛", label: "Ceylon Cuisine" },
]

export default function HomePage() {
  const starsRef = useRef<HTMLDivElement>(null)
  const cloudsRef = useRef<HTMLDivElement>(null)

  useEffect(() => {

    // ── 1. DAY/NIGHT OVERLAY based on real local time ──
    const updateTime = () => {
      const hour = new Date().getHours()
      const overlay = document.getElementById("timeOverlay")
      const starsLayer = document.getElementById("starsLayer")
      const badge = document.getElementById("timeBadge")
      let bg = ""
      let starsOp = "0"
      let icon = ""
      let label = ""

      if (hour >= 5 && hour < 7) {
        bg = "linear-gradient(180deg,rgba(180,80,20,0.45) 0%,rgba(220,120,40,0.25) 40%,rgba(8,14,36,0.2) 100%)"
        starsOp = "0.2"; icon = "🌅"; label = "Dawn"
      } else if (hour >= 7 && hour < 11) {
        bg = "linear-gradient(180deg,rgba(10,40,80,0.12) 0%,rgba(8,14,36,0.05) 40%,rgba(8,14,36,0.68) 100%)"
        starsOp = "0"; icon = "☀️"; label = "Morning"
      } else if (hour >= 11 && hour < 15) {
        bg = "linear-gradient(180deg,rgba(8,14,36,0.08) 0%,rgba(8,14,36,0.04) 30%,rgba(8,14,36,0.72) 100%)"
        starsOp = "0"; icon = "🌤️"; label = "Midday"
      } else if (hour >= 15 && hour < 18) {
        bg = "linear-gradient(180deg,rgba(180,100,20,0.2) 0%,rgba(200,120,30,0.1) 40%,rgba(8,14,36,0.72) 100%)"
        starsOp = "0"; icon = "🌇"; label = "Afternoon"
      } else if (hour >= 18 && hour < 20) {
        bg = "linear-gradient(180deg,rgba(100,30,60,0.55) 0%,rgba(180,70,20,0.4) 35%,rgba(8,14,36,0.65) 100%)"
        starsOp = "0.3"; icon = "🌆"; label = "Sunset"
      } else if (hour >= 20 && hour < 22) {
        bg = "linear-gradient(180deg,rgba(20,10,60,0.72) 0%,rgba(30,15,70,0.5) 40%,rgba(8,14,36,0.78) 100%)"
        starsOp = "0.6"; icon = "🌃"; label = "Dusk"
      } else {
        bg = "linear-gradient(180deg,rgba(5,5,30,0.85) 0%,rgba(8,10,40,0.68) 40%,rgba(5,8,25,0.88) 100%)"
        starsOp = "1"; icon = "🌙"; label = "Night"
      }

      if (overlay) overlay.style.background = bg
      if (starsLayer) starsLayer.style.opacity = starsOp
      if (badge) badge.textContent = `${icon} ${label} · Sri Lanka`
    }

    updateTime()
    const timeInterval = setInterval(updateTime, 60000)

    // ── 2. STARS ──
    if (starsRef.current) {
      for (let i = 0; i < 90; i++) {
        const s = document.createElement("div")
        const sz = Math.random() * 2.8 + 0.5
        const bright = Math.random() > 0.85
        s.style.cssText = `position:absolute;background:white;border-radius:50%;width:${sz}px;height:${sz}px;top:${Math.random()*100}%;left:${Math.random()*100}%;animation:twinkle ${Math.random()*3+2}s ease-in-out ${Math.random()*5}s infinite;box-shadow:0 0 ${bright ? sz*4 : sz*1.5}px rgba(255,255,255,${bright ? 0.9 : 0.5});`
        starsRef.current.appendChild(s)
      }
    }

    // ── 3. REALISTIC CLOUDS ──
    if (cloudsRef.current) {
      const configs = [
        { top:5,  w:380, h:55,  dur:75, delay:0,   op:0.35, blur:12 },
        { top:12, w:260, h:42,  dur:55, delay:-22, op:0.28, blur:10 },
        { top:3,  w:460, h:65,  dur:90, delay:-42, op:0.30, blur:14 },
        { top:18, w:200, h:35,  dur:48, delay:-14, op:0.22, blur:9  },
        { top:9,  w:300, h:48,  dur:78, delay:-60, op:0.25, blur:11 },
        { top:1,  w:220, h:40,  dur:62, delay:-30, op:0.20, blur:10 },
        { top:16, w:170, h:32,  dur:44, delay:-38, op:0.18, blur:8  },
      ]
      configs.forEach(({ top, w, h, dur, delay, op, blur }) => {
        const cloud = document.createElement("div")
        const numPuffs = Math.floor(w / 50) + 3
        let inner = `<div style="position:absolute;inset:0;background:white;border-radius:${h}px;opacity:0.9;"></div>`
        for (let i = 0; i < numPuffs; i++) {
          const ps = h * (0.8 + Math.random() * 0.7)
          const pl = (i / (numPuffs - 1)) * 70
          const pt = -ps * 0.4 + Math.random() * h * 0.2
          inner += `<div style="position:absolute;width:${ps}px;height:${ps}px;border-radius:50%;background:white;left:${pl}%;top:${pt}px;"></div>`
        }
        cloud.innerHTML = inner
        cloud.style.cssText = `position:absolute;top:${top}%;width:${w}px;height:${h+20}px;opacity:${op};filter:blur(${blur}px);animation:drift ${dur}s linear ${delay}s infinite;pointer-events:none;`
        cloudsRef.current!.appendChild(cloud)
      })
    }

    // ── 4. SCROLL REVEAL ──
    const obs = new IntersectionObserver((entries) => {
      entries.forEach((e) => {
        if (e.isIntersecting) {
          const el = e.target as HTMLElement
          el.style.opacity = "1"
          el.style.transform = "translateY(0)"
        }
      })
    }, { threshold: 0.1 })
    document.querySelectorAll(".reveal").forEach((el) => obs.observe(el))

    // ── 5. CULTURE STRIP ──
    const strip = document.getElementById("strip")
    if (strip) {
      const so = new IntersectionObserver((entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting)
            strip.querySelectorAll(".ci").forEach((it, i) =>
              setTimeout(() => { (it as HTMLElement).style.opacity = "1" }, i * 120))
        })
      }, { threshold: 0.5 })
      so.observe(strip)
    }

    return () => { obs.disconnect(); clearInterval(timeInterval) }
  }, [])

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,400;0,700;1,400&family=Inter:wght@300;400;500;600&display=swap');
        *{margin:0;padding:0;box-sizing:border-box}
        body{font-family:'Inter',sans-serif;background:#F7F3EE;color:#1a1a2e;overflow-x:hidden}
        @keyframes twinkle{0%,100%{opacity:.9;transform:scale(1)}50%{opacity:.1;transform:scale(0.3)}}
        @keyframes drift{0%{transform:translateX(-120%)}100%{transform:translateX(115vw)}}
        @keyframes pulse{0%,100%{opacity:1;transform:scale(1)}50%{opacity:.3;transform:scale(2)}}
        .playfair{font-family:'Playfair Display',serif}
        .reveal{opacity:0;transform:translateY(28px);transition:opacity .65s ease,transform .65s ease}
        .ci{opacity:0;transition:opacity .5s ease}
        .pkg-card{background:white;border:1px solid rgba(0,0,0,0.08);border-radius:16px;padding:1.8rem;transition:all .3s;box-shadow:0 2px 12px rgba(0,0,0,0.06)}
        .pkg-card:hover{transform:translateY(-6px);border-color:rgba(200,134,10,0.4);box-shadow:0 20px 50px rgba(0,0,0,0.12)}
        .pkg-card.featured{border-color:rgba(200,134,10,0.5);background:linear-gradient(135deg,#fffdf7,#fff8e8);box-shadow:0 8px 30px rgba(200,134,10,0.12)}
        .nav-link{color:rgba(255,255,255,0.88);text-decoration:none;font-size:0.87rem;font-weight:500;transition:color .25s}
        .nav-link:hover{color:white}
        .why-card{text-align:center;padding:2rem 1.5rem;border-radius:16px;background:white;border:1px solid rgba(0,0,0,0.07);transition:all .3s;box-shadow:0 2px 12px rgba(0,0,0,0.05)}
        .why-card:hover{transform:translateY(-6px);border-color:rgba(200,134,10,0.3);box-shadow:0 16px 40px rgba(0,0,0,0.1)}
        .testi-card{background:white;border:1px solid rgba(0,0,0,0.07);border-radius:16px;padding:1.6rem;position:relative;box-shadow:0 2px 12px rgba(0,0,0,0.05);transition:all .3s}
        .testi-card:hover{transform:translateY(-4px);box-shadow:0 16px 40px rgba(0,0,0,0.1)}
        .foot-link{color:rgba(255,255,255,0.65);text-decoration:none;font-size:0.82rem;display:block;margin-bottom:0.5rem;transition:color .2s}
        .foot-link:hover{color:white}
        input,select,textarea{background:white;border:1.5px solid rgba(0,0,0,0.12);border-radius:10px;padding:0.75rem 1rem;color:#1a1a2e;font-size:0.87rem;font-family:'Inter',sans-serif;outline:none;width:100%;transition:border-color .25s}
        input:focus,select:focus,textarea:focus{border-color:#C8860A;box-shadow:0 0 0 3px rgba(200,134,10,0.1)}
        select option{background:white;color:#1a1a2e}
        input::placeholder,textarea::placeholder{color:rgba(0,0,0,0.35)}
        /* ── TABLET ── */
        @media(max-width:1024px){
          .pkg-grid{grid-template-columns:repeat(2,1fr)!important}
          .why-grid{grid-template-columns:repeat(2,1fr)!important}
          .testi-grid{grid-template-columns:repeat(2,1fr)!important}
          .dest-grid-3{grid-template-columns:repeat(2,1fr)!important}
          .gallery-prev-grid{grid-template-columns:repeat(4,1fr)!important}
        }
        /* ── MOBILE ── */
        @media(max-width:768px){
          #timeBadge{display:none!important}
          .pkg-grid{grid-template-columns:1fr!important}
          .why-grid{grid-template-columns:1fr 1fr!important}
          .testi-grid{grid-template-columns:1fr!important}
          .contact-grid{grid-template-columns:1fr!important}
          .foot-grid{grid-template-columns:1fr 1fr!important}
          .cult-grid-8{grid-template-columns:1fr 1fr!important}
          .dest-grid-3{grid-template-columns:1fr!important}
          .gallery-prev-grid{grid-template-columns:repeat(2,1fr)!important}
          .hero-stats{gap:1rem!important;flex-wrap:wrap}
          .nav-desktop{display:none!important}
          .hero-btns{flex-direction:column!important;align-items:flex-start!important}
          .hero-btns a{width:100%!important;text-align:center!important}
          .cult-grid{grid-template-columns:1fr!important}
          .contact-grid{gap:2rem!important}
        }
        /* ── SMALL MOBILE ── */
        .mobile-ham{display:none!important}
        @media(max-width:768px){.mobile-ham{display:flex!important}}
        @media(max-width:480px){
          .why-grid{grid-template-columns:1fr!important}
          .foot-grid{grid-template-columns:1fr!important}
          .cult-grid-8{grid-template-columns:1fr!important}
          .gallery-prev-grid{grid-template-columns:repeat(2,1fr)!important}
          .hero-stats{gap:0.8rem!important}
        }
      `}</style>

      {/* ── NAV ── */}
      <nav style={{position:"fixed",top:0,left:0,right:0,zIndex:200,padding:"0.85rem 5%",display:"flex",alignItems:"center",justifyContent:"space-between",background:"rgba(15,30,60,0.95)",backdropFilter:"blur(20px)",borderBottom:"1px solid rgba(255,255,255,0.08)"}}>
        <Link href="/" style={{display:"flex",alignItems:"center",gap:10,textDecoration:"none"}}>
          <img src="/images/logo.jpg" alt="Fernando Tours" style={{height:38,width:"auto",objectFit:"contain",borderRadius:8,mixBlendMode:"lighten"}} />
          <span className="playfair" style={{fontSize:"1.15rem",color:"white"}}>Fernando Tours</span>
        </Link>
        <div className="nav-desktop" style={{display:"flex",gap:"1.5rem",alignItems:"center"}}>
          {[["/#packages","Packages"],["/destinations","Destinations"],["/gallery","Gallery"],["/#culture","Culture"],["/#about","About"],["/#contact","Contact"]].map(([href,label])=>(
            <Link key={label} href={href} className="nav-link" style={{fontSize:"0.82rem"}}>{label}</Link>
          ))}
          <Link href="/#contact" style={{background:"#FF8C00",color:"white",padding:"0.45rem 1.1rem",borderRadius:50,fontWeight:600,fontSize:"0.82rem",textDecoration:"none"}}>Book Now</Link>
        </div>
        {/* Mobile menu button */}
        <button id="mobileMenuBtn" onClick={()=>{
          const m = document.getElementById("mobileMenu")
          if(m) m.style.display = m.style.display === "flex" ? "none" : "flex"
        }} style={{display:"none",flexDirection:"column",gap:5,background:"none",border:"none",cursor:"pointer",padding:4}} className="mobile-ham">
          <span style={{width:22,height:2,background:"white",borderRadius:2,display:"block"}} />
          <span style={{width:22,height:2,background:"white",borderRadius:2,display:"block"}} />
          <span style={{width:22,height:2,background:"white",borderRadius:2,display:"block"}} />
        </button>
      </nav>
      {/* Mobile dropdown menu */}
      <div id="mobileMenu" style={{display:"none",flexDirection:"column",position:"fixed",top:63,left:0,right:0,background:"rgba(10,20,50,0.98)",backdropFilter:"blur(16px)",borderBottom:"1px solid rgba(255,255,255,0.1)",zIndex:199,padding:"1.5rem 5%",gap:"1.2rem"}}>
        {[["/#packages","Packages"],["/destinations","Destinations"],["/gallery","Gallery"],["/#culture","Culture"],["/#about","About"],["/#contact","Contact"]].map(([href,label])=>(
          <Link key={label} href={href} onClick={()=>{const m=document.getElementById("mobileMenu");if(m)m.style.display="none"}} style={{color:"rgba(255,255,255,0.85)",textDecoration:"none",fontSize:"0.95rem",fontWeight:500,padding:"0.3rem 0",borderBottom:"1px solid rgba(255,255,255,0.07)"}}>{label}</Link>
        ))}
        <Link href="/#contact" onClick={()=>{const m=document.getElementById("mobileMenu");if(m)m.style.display="none"}} style={{background:"#FF8C00",color:"white",padding:"0.75rem",borderRadius:10,fontWeight:700,fontSize:"0.92rem",textDecoration:"none",textAlign:"center",marginTop:"0.5rem"}}>Book Now</Link>
      </div>

      {/* ── HERO ── */}
      <section style={{position:"relative",minHeight:"100vh",display:"flex",flexDirection:"column",overflow:"hidden"}}>

        {/* Real Sigiriya photo */}
        <img
          src="/images/sigiriya.png"
          alt="Sigiriya Rock Fortress Sri Lanka"
          style={{position:"absolute",inset:0,width:"100%",height:"100%",objectFit:"cover",objectPosition:"center 25%"}}
        />

        {/* Day/Night overlay - changes automatically by real time */}
        <div id="timeOverlay" style={{position:"absolute",inset:0,transition:"background 2s ease"}} />

        {/* Stars layer - visible at night */}
        <div ref={starsRef} id="starsLayer" style={{position:"absolute",top:0,left:0,right:0,height:"60%",pointerEvents:"none",opacity:0,transition:"opacity 2s ease"}} />

        {/* Animated clouds */}
        <div ref={cloudsRef} style={{position:"absolute",inset:0,pointerEvents:"none",overflow:"hidden"}} />

        {/* Bottom gradient so text is always readable */}
        <div style={{position:"absolute",bottom:0,left:0,right:0,height:"70%",background:"linear-gradient(to top,rgba(5,10,30,0.92) 0%,rgba(8,14,36,0.45) 40%,rgba(0,0,0,0.1) 70%,transparent 100%)",pointerEvents:"none"}} />

        {/* Time badge - top right, hidden on mobile */}
        <div id="timeBadge" style={{position:"absolute",top:"5rem",right:"5%",zIndex:20,background:"rgba(255,140,0,0.22)",backdropFilter:"blur(10px)",border:"1px solid rgba(255,140,0,0.55)",borderRadius:50,padding:"0.45rem 1.1rem",fontSize:"0.8rem",color:"#FFB347",fontWeight:700,letterSpacing:"0.4px",textShadow:"0 1px 8px rgba(0,0,0,0.5)"}} />

        {/* Hero content - bottom aligned */}
        <div style={{position:"relative",zIndex:10,flex:1,display:"flex",alignItems:"center",padding:"0 5%",paddingTop:"clamp(5rem,8vw,8rem)",paddingBottom:"clamp(2rem,5vw,4rem)"}}>
          <div style={{maxWidth:620}}>

            <div style={{display:"inline-flex",alignItems:"center",gap:8,background:"rgba(255,140,0,0.18)",border:"1px solid rgba(255,140,0,0.45)",color:"#FFB347",padding:"0.4rem 1rem",borderRadius:50,fontSize:"0.75rem",fontWeight:600,letterSpacing:1,textTransform:"uppercase",marginBottom:"1.4rem"}}>
              <span style={{width:6,height:6,background:"#FFB347",borderRadius:"50%",animation:"pulse 2s ease infinite",display:"inline-block"}} />
              Since 1990 · Sri Lanka
            </div>

            <h1 className="playfair" style={{fontSize:"clamp(1.8rem,5vw,4.2rem)",lineHeight:1.12,marginBottom:"0.6rem",textShadow:"0 2px 30px rgba(0,0,0,0.7)",color:"white"}}>
              Discover the<br /><em style={{color:"#FFB347"}}>Pearl</em> of<br />the Indian Ocean
            </h1>

            <p style={{color:"rgba(255,220,150,0.9)",fontSize:"1rem",marginBottom:"1.2rem",letterSpacing:"1.5px",fontWeight:300}}>
              Sri Lanka · Since 1990 · We Create Memories
            </p>

            <p style={{color:"rgba(255,255,255,0.82)",lineHeight:1.72,marginBottom:"2rem",maxWidth:480,fontSize:"0.97rem"}}>
              From the ancient heights of Sigiriya to the golden shores of Mirissa — 35 years of crafting journeys that capture the true soul of Lanka.
            </p>

            <div style={{display:"flex",gap:"1rem",flexWrap:"wrap",marginBottom:"2.8rem"}}>
              <a href="#packages" style={{background:"#FF8C00",color:"white",padding:"0.85rem 2.2rem",borderRadius:50,fontWeight:600,fontSize:"0.95rem",textDecoration:"none",boxShadow:"0 4px 24px rgba(255,140,0,.45)"}}>Explore Packages</a>
              <a href="#contact" style={{background:"rgba(255,255,255,0.12)",color:"white",padding:"0.85rem 2.2rem",borderRadius:50,fontWeight:500,fontSize:"0.95rem",textDecoration:"none",border:"1.5px solid rgba(255,255,255,0.4)",backdropFilter:"blur(8px)"}}>Plan My Trip</a>
            </div>

            <div className="hero-stats" style={{display:"flex",gap:"2.5rem",paddingTop:"1.8rem",borderTop:"1px solid rgba(255,255,255,0.15)"}}>
              {[["35+","Years"],["12k+","Travelers"],["50+","Destinations"],["4.9★","Rating"]].map(([n,l])=>(
                <div key={l}>
                  <span className="playfair" style={{fontSize:"2rem",fontWeight:700,display:"block",color:"white"}}>{n}</span>
                  <span style={{color:"rgba(255,200,120,0.85)",fontSize:"0.7rem",textTransform:"uppercase",letterSpacing:"0.8px",marginTop:3,display:"block"}}>{l}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── CULTURE STRIP ── */}
      <div id="strip" style={{display:"flex",alignItems:"center",justifyContent:"center",background:"#1a1a2e",borderTop:"none",borderBottom:"none",overflowX:"auto"}}>
        {cultureStrip.map(({icon,label})=>(
          <div key={label} className="ci" style={{display:"flex",alignItems:"center",gap:9,padding:"0.85rem 1.8rem",borderRight:"1px solid rgba(255,255,255,0.07)",flexShrink:0}}>
            <span style={{fontSize:"1.2rem"}}>{icon}</span>
            <span style={{fontSize:"0.75rem",fontWeight:600,letterSpacing:"0.8px",textTransform:"uppercase",color:"rgba(255,220,180,0.95)"}}>{label}</span>
          </div>
        ))}
      </div>


      {/* ── DESTINATIONS PREVIEW ── */}
      <section style={{padding:"clamp(3rem,6vw,5.5rem) 5%",background:"white"}} id="destinations">
        <div className="reveal" style={{textAlign:"center",marginBottom:"3rem"}}>
          <span style={{color:"#C8860A",fontSize:"0.74rem",fontWeight:700,letterSpacing:"2.5px",textTransform:"uppercase",display:"block",marginBottom:"0.9rem"}}>Explore Sri Lanka</span>
          <h2 className="playfair" style={{fontSize:"clamp(1.7rem,3.5vw,2.6rem)",marginBottom:"0.9rem",color:"#1a1a2e"}}>Iconic Destinations</h2>
          <p style={{color:"rgba(26,26,46,0.6)",fontSize:"0.93rem",maxWidth:490,margin:"0 auto",lineHeight:1.7}}>From ancient rock fortresses to golden beaches — every corner of the island holds a story.</p>
        </div>
        <div className="reveal dest-grid-3" style={{display:"grid",gridTemplateColumns:"repeat(3,1fr)",gap:"1.5rem",marginBottom:"2.5rem"}}>
          {[
            {name:"Sigiriya Rock Fortress",tag:"UNESCO Heritage",tagColor:"#C8860A",loc:"Central Province",time:"Dec – Apr",photo:"/images/destinations/sigiriya.jpg",desc:"The 5th century sky palace rising 200m from the jungle — ancient frescoes, mirror wall, and royal water gardens."},
            {name:"Yala National Park",tag:"Wildlife",tagColor:"#2D6A2D",loc:"Southern Province",time:"Feb – Jun",photo:"/images/destinations/yala.jpg",desc:"World's highest leopard density. Elephants, sloth bears, crocodiles, and over 215 bird species in the wild."},
            {name:"Mirissa Beach",tag:"Beach",tagColor:"#1A6A8A",loc:"Southern Coast",time:"Nov – Apr",photo:"/images/destinations/mirissa.jpg",desc:"Crescent of golden sand with blue whale watching, world-class surf, and unforgettable sunsets."},
            {name:"Nuwara Eliya",tag:"Highland",tagColor:"#2D6A2D",loc:"Central Highlands",time:"Jan – Mar",photo:"/images/destinations/nuwara-eliya.jpg",desc:"Misty tea estates at 1,868m above sea level — colonial bungalows, tea factory tours, and cool mountain air."},
            {name:"Ella & Nine Arch Bridge",tag:"Scenic",tagColor:"#8B5A20",loc:"Uva Province",time:"Dec – Mar",photo:"/images/destinations/ella.jpg",desc:"The iconic colonial stone bridge best seen with a train rumbling through emerald tea hills."},
            {name:"Galle Fort",tag:"Heritage",tagColor:"#7A3A2A",loc:"Southern Province",time:"Nov – Apr",photo:"/images/destinations/galle.jpg",desc:"A UNESCO World Heritage fortress with cobblestone streets, Dutch architecture, and ocean sunsets."},
          ].map((d)=>(
            <Link key={d.name} href="/destinations" style={{textDecoration:"none",borderRadius:18,overflow:"hidden",display:"block",background:"white",boxShadow:"0 2px 16px rgba(0,0,0,0.07)",transition:"all .35s",border:"1px solid rgba(0,0,0,0.05)"}}
              onMouseEnter={e=>{(e.currentTarget as HTMLElement).style.transform="translateY(-5px)";(e.currentTarget as HTMLElement).style.boxShadow="0 14px 36px rgba(0,0,0,0.11)"}}
              onMouseLeave={e=>{(e.currentTarget as HTMLElement).style.transform="translateY(0)";(e.currentTarget as HTMLElement).style.boxShadow="0 2px 16px rgba(0,0,0,0.07)"}}>
              <div style={{position:"relative",height:200,overflow:"hidden"}}>
                <img src={d.photo} alt={d.name} style={{width:"100%",height:"100%",objectFit:"cover",transition:"transform .6s",display:"block"}}
                  onMouseEnter={e=>(e.currentTarget as HTMLElement).style.transform="scale(1.05)"}
                  onMouseLeave={e=>(e.currentTarget as HTMLElement).style.transform="scale(1)"}
                />
                <div style={{position:"absolute",inset:0,background:"linear-gradient(180deg,rgba(0,0,0,0) 45%,rgba(0,0,0,0.5) 100%)"}} />
                <span style={{position:"absolute",top:"0.85rem",left:"0.85rem",background:"rgba(255,255,255,0.93)",backdropFilter:"blur(6px)",color:d.tagColor,fontSize:"0.65rem",fontWeight:700,letterSpacing:"0.8px",textTransform:"uppercase",padding:"0.26rem 0.72rem",borderRadius:50}}>{d.tag}</span>
                <div style={{position:"absolute",bottom:"0.85rem",left:"0.9rem",right:"0.9rem"}}>
                  <div className="playfair" style={{fontSize:"1.1rem",color:"white",fontWeight:700,textShadow:"0 1px 8px rgba(0,0,0,0.55)"}}>{d.name}</div>
                  <div style={{color:"rgba(255,255,255,0.82)",fontSize:"0.72rem",marginTop:2}}>📍 {d.loc}</div>
                </div>
              </div>
              <div style={{padding:"1rem 1.1rem 1.2rem"}}>
                <p style={{color:"rgba(26,26,46,0.6)",fontSize:"0.81rem",lineHeight:1.65,marginBottom:"0.85rem"}}>{d.desc}</p>
                <div style={{display:"flex",alignItems:"center",justifyContent:"space-between"}}>
                  <span style={{background:"#F5F0E8",color:"#7A5010",fontSize:"0.7rem",fontWeight:600,padding:"0.26rem 0.72rem",borderRadius:50}}>🌤 {d.time}</span>
                  <span style={{color:"#C8860A",fontSize:"0.8rem",fontWeight:700}}>Explore →</span>
                </div>
              </div>
            </Link>
          ))}
        </div>
        <div style={{textAlign:"center"}}>
          <Link href="/destinations" style={{background:"#C8860A",color:"white",padding:"0.8rem 2.2rem",borderRadius:50,fontWeight:600,fontSize:"0.9rem",textDecoration:"none",boxShadow:"0 4px 16px rgba(200,134,10,0.28)",display:"inline-block"}}>
            View All 9 Destinations →
          </Link>
        </div>
      </section>

            {/* ── PACKAGES ── */}
      <section style={{padding:"clamp(3rem,6vw,5.5rem) 5%",background:"#F7F3EE"}} id="packages">
        <div className="reveal" style={{textAlign:"center",marginBottom:"3rem"}}>
          <span style={{color:"#C8860A",fontSize:"0.74rem",fontWeight:700,letterSpacing:"2.5px",textTransform:"uppercase",display:"block",marginBottom:"0.9rem"}}>Curated Journeys</span>
          <h2 className="playfair" style={{fontSize:"clamp(1.7rem,3.5vw,2.6rem)",marginBottom:"0.9rem",color:"#1a1a2e"}}>Tour Packages</h2>
          <p style={{color:"rgba(26,26,46,0.6)",fontSize:"0.93rem",maxWidth:490,margin:"0 auto",lineHeight:1.7}}>All tours include private vehicle, English-speaking guide, and all transfers. Click to view full itinerary.</p>
        </div>
        <div className="pkg-grid reveal" style={{display:"grid",gridTemplateColumns:"repeat(2,1fr)",gap:"1.5rem",marginBottom:"2.5rem"}}>
          {[
            {id:1,name:"Sri Lanka Highlights Escape",duration:"3 Nights / 4 Days",bestFor:"Short holiday, first-time visitors",featured:false,days:["Airport → Pinnawala Elephant Orphanage → Kandy","Temple of the Tooth → Tea Factory → Ella","Nine Arches Bridge → Yala Evening Safari","Udawalawe → Airport / Hotel Drop"]},
            {id:2,name:"Nature + Culture Experience",duration:"4 Nights / 5 Days",bestFor:"Balanced experience",featured:false,days:["Dambulla Cave Temple → Sigiriya","Sigiriya Rock Fortress → Kandy","Temple of the Tooth → Tea Factory → Ella","Nine Arches Bridge → Yala Evening Safari","Udawalawe → Airport / Hotel Drop"]},
            {id:3,name:"Classic Sri Lanka Journey",duration:"5 Nights / 6 Days",bestFor:"Most popular full experience",featured:true,days:["Dambulla Cave Temple → Sigiriya","Sigiriya Rock Fortress → Polonnaruwa","Kandy → Temple of the Tooth","Tea Factory → Ramboda Falls → Ella","Nine Arches Bridge → Yala Evening Safari","Udawalawe → Beach → Departure"]},
            {id:4,name:"Ultimate Sri Lanka Discovery",duration:"6 Nights / 7 Days",bestFor:"Full island experience",featured:false,days:["Airport → Negombo","Dambulla → Sigiriya","Sigiriya → Polonnaruwa","Kandy → Temple of the Tooth","Tea Factory → Ella","Nine Arches Bridge → Yala Safari","Udawalawe → Beach → Departure"]},
          ].map((pkg)=>(
            <Link key={pkg.id} href="/packages" style={{textDecoration:"none",display:"block",background:"white",borderRadius:20,border:`1.5px solid ${pkg.featured?"rgba(200,134,10,0.5)":"rgba(0,0,0,0.07)"}`,boxShadow:pkg.featured?"0 4px 24px rgba(200,134,10,0.12)":"0 2px 16px rgba(0,0,0,0.06)",overflow:"hidden",transition:"all .3s"}}
              onMouseEnter={e=>{(e.currentTarget as HTMLElement).style.transform="translateY(-5px)";(e.currentTarget as HTMLElement).style.boxShadow="0 16px 40px rgba(0,0,0,0.12)"}}
              onMouseLeave={e=>{(e.currentTarget as HTMLElement).style.transform="translateY(0)";(e.currentTarget as HTMLElement).style.boxShadow=pkg.featured?"0 4px 24px rgba(200,134,10,0.12)":"0 2px 16px rgba(0,0,0,0.06)"}}>
              {/* Green header */}
              <div style={{background:"linear-gradient(135deg,#1a3d2b,#2d6a4f)",padding:"1.4rem 1.6rem",position:"relative"}}>
                {pkg.featured && <span style={{position:"absolute",top:"1rem",right:"1rem",background:"#FF8C00",color:"white",fontSize:"0.67rem",fontWeight:700,padding:"0.25rem 0.75rem",borderRadius:50}}>Most Popular</span>}
                <span style={{fontSize:"1.8rem",display:"block",marginBottom:"0.5rem"}}>🌿</span>
                <div className="playfair" style={{fontSize:"1.2rem",color:"white",marginBottom:"0.3rem"}}>{pkg.name}</div>
                <div style={{color:"rgba(255,255,255,0.72)",fontSize:"0.78rem",marginBottom:"0.5rem"}}>⏱ {pkg.duration}</div>
                <div style={{display:"inline-flex",alignItems:"center",gap:5,background:"rgba(255,255,255,0.15)",borderRadius:50,padding:"0.22rem 0.75rem"}}>
                  <span style={{color:"#90EE90",fontSize:"0.68rem",fontWeight:700}}>✦</span>
                  <span style={{color:"rgba(255,255,255,0.88)",fontSize:"0.68rem"}}>Best for: {pkg.bestFor}</span>
                </div>
              </div>
              {/* Card body */}
              <div style={{padding:"1.3rem 1.6rem"}}>
                <div style={{marginBottom:"1rem"}}>
                  {pkg.days.slice(0,3).map((d,i)=>(
                    <div key={i} style={{display:"flex",alignItems:"center",gap:8,padding:"0.38rem 0",borderBottom:"1px solid rgba(0,0,0,0.05)"}}>
                      <span style={{background:"#C8860A",color:"white",fontSize:"0.62rem",fontWeight:700,padding:"0.15rem 0.5rem",borderRadius:50,flexShrink:0}}>Day {i+1}</span>
                      <span style={{color:"rgba(26,26,46,0.68)",fontSize:"0.8rem"}}>{d}</span>
                    </div>
                  ))}
                  {pkg.days.length > 3 && <div style={{color:"#C8860A",fontSize:"0.75rem",fontWeight:600,padding:"0.38rem 0"}}>+ {pkg.days.length-3} more days...</div>}
                </div>
                <div style={{display:"flex",alignItems:"center",justifyContent:"space-between",padding:"0.6rem 0.9rem",background:"rgba(200,134,10,0.08)",borderRadius:8,border:"1px solid rgba(200,134,10,0.2)"}}>
                  <span style={{color:"#C8860A",fontSize:"0.82rem",fontWeight:600}}>View Full Itinerary</span>
                  <span style={{color:"#C8860A",fontSize:"0.9rem"}}>→</span>
                </div>
              </div>
            </Link>
          ))}
        </div>
        <div style={{textAlign:"center"}}>
          <Link href="/packages" style={{background:"#C8860A",color:"white",padding:"0.85rem 2.5rem",borderRadius:50,fontWeight:700,fontSize:"0.93rem",textDecoration:"none",boxShadow:"0 4px 16px rgba(200,134,10,0.3)",display:"inline-block"}}>
            View All Packages & Itineraries →
          </Link>
        </div>
      </section>


      {/* ── CONTACT ── */}
      <section style={{padding:"clamp(3rem,6vw,5.5rem) 5%",background:"linear-gradient(135deg,#1a3a5c 0%,#1e4a70 50%,#1a3d5c 100%)"}} id="contact">
        <div className="reveal" style={{textAlign:"center",marginBottom:"3.5rem"}}>
          <span style={{color:"#90CAF9",fontSize:"0.74rem",fontWeight:700,letterSpacing:"2.5px",textTransform:"uppercase",display:"block",marginBottom:"0.9rem"}}>Let&apos;s Plan Together</span>
          <h2 className="playfair" style={{fontSize:"clamp(1.7rem,3.5vw,2.6rem)",marginBottom:"0.9rem",color:"white"}}>Start Your Journey</h2>
          <p style={{color:"rgba(255,255,255,0.75)",fontSize:"0.93rem",maxWidth:490,margin:"0 auto",lineHeight:1.7}}>Tell us your dream and we&apos;ll make it happen within 24 hours.</p>
        </div>
        <div className="contact-grid reveal" style={{display:"grid",gridTemplateColumns:"1fr 1.2fr",gap:"4rem",alignItems:"start"}}>
          <div>
            <h3 className="playfair" style={{fontSize:"1.65rem",marginBottom:"0.85rem",color:"white"}}>We&apos;re Here for You</h3>
            <p style={{color:"rgba(255,255,255,0.78)",lineHeight:1.7,marginBottom:"1.7rem",fontSize:"0.92rem"}}>Whether you have a trip in mind or just starting to dream, our team is ready to help you plan the perfect Sri Lanka adventure.</p>
            <div style={{display:"flex",flexDirection:"column",gap:"0.85rem"}}>
              {[["📞","Phone / WhatsApp","+94 71 222 7665"],["📧","Email","fernandotourshikka@gmail.com"],["📍","Location","Hikkaduwa, Galle, Sri Lanka"],["🕐","Response Time","Within 24 Hours Guaranteed"]].map(([ico,label,val])=>(
                <a key={label}
                  href={label==="Phone / WhatsApp"?"https://wa.me/94712227665":label==="Email"?"mailto:fernandotourshikka@gmail.com":label==="Location"?"https://maps.app.goo.gl/9YYbV18RazjHBzVLA":"#"}
                  target={label==="Location"||label==="Phone / WhatsApp"?"_blank":"_self"}
                  rel="noopener noreferrer"
                  style={{display:"flex",alignItems:"center",gap:12,padding:"0.85rem 1.1rem",background:"rgba(255,255,255,0.1)",border:"1px solid rgba(255,255,255,0.18)",borderRadius:10,textDecoration:"none",transition:"all .25s",backdropFilter:"blur(8px)"}}
                  onMouseEnter={e=>(e.currentTarget as HTMLElement).style.borderColor="rgba(255,140,0,0.4)"}
                  onMouseLeave={e=>(e.currentTarget as HTMLElement).style.borderColor="rgba(255,255,255,0.08)"}>
                  <div style={{width:36,height:36,background:"rgba(255,255,255,0.15)",borderRadius:8,display:"flex",alignItems:"center",justifyContent:"center",fontSize:"1rem",flexShrink:0}}>{ico}</div>
                  <div>
                    <span style={{display:"block",fontSize:"0.7rem",color:"rgba(255,255,255,0.6)",textTransform:"uppercase",letterSpacing:"0.5px",marginBottom:1}}>{label}</span>
                    <strong style={{fontSize:"0.88rem",fontWeight:500,color:"rgba(255,255,255,0.9)"}}>{val}</strong>
                  </div>
                </a>
              ))}
            </div>
          </div>
          <div style={{background:"rgba(255,255,255,0.97)",border:"none",borderRadius:16,padding:"2rem",boxShadow:"0 20px 60px rgba(0,0,0,0.2)"}}>
            {/* Google Maps */}
            <div style={{borderRadius:12,overflow:"hidden",marginBottom:"1.5rem",border:"1px solid rgba(255,255,255,0.08)"}}>
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3966.!2d80.1!3d6.14!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ae173!2sFernando+Tours+Hikkaduwa!5e0!3m2!1sen!2slk!4v1"
                width="100%" height="180" style={{border:0,display:"block",filter:"invert(0.9) hue-rotate(180deg)"}}
                allowFullScreen loading="lazy" referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
            <div id="formMsg" style={{display:"none",padding:"0.85rem",borderRadius:8,marginBottom:"1rem",fontWeight:600,fontSize:"0.9rem"}} />
            <div style={{display:"grid",gridTemplateColumns:"1fr 1fr",gap:"0.85rem",marginBottom:"0.85rem"}}>
              <div><label style={{fontSize:"0.76rem",color:"rgba(26,26,46,0.55)",fontWeight:500,display:"block",marginBottom:4}}>Your Name</label><input id="f-name" placeholder="John Smith" /></div>
              <div><label style={{fontSize:"0.76rem",color:"rgba(26,26,46,0.55)",fontWeight:500,display:"block",marginBottom:4}}>Email</label><input id="f-email" type="email" placeholder="john@email.com" /></div>
            </div>
            <div style={{display:"grid",gridTemplateColumns:"1fr 1fr",gap:"0.85rem",marginBottom:"0.85rem"}}>
              <div><label style={{fontSize:"0.76rem",color:"rgba(26,26,46,0.55)",fontWeight:500,display:"block",marginBottom:4}}>Travel Dates</label><input id="f-date" type="date" /></div>
              <div><label style={{fontSize:"0.76rem",color:"rgba(26,26,46,0.55)",fontWeight:500,display:"block",marginBottom:4}}>Group Size</label><input id="f-size" type="number" placeholder="2" min="1" /></div>
            </div>
            <div style={{marginBottom:"0.85rem"}}>
              <label style={{fontSize:"0.76rem",color:"rgba(26,26,46,0.55)",fontWeight:500,display:"block",marginBottom:4}}>Tour Interest</label>
              <select id="f-tour">{packages.map((p)=><option key={p.id}>{p.name}</option>)}</select>
            </div>
            <div style={{marginBottom:"1.2rem"}}>
              <label style={{fontSize:"0.76rem",color:"rgba(26,26,46,0.55)",fontWeight:500,display:"block",marginBottom:4}}>Message</label>
              <textarea id="f-msg" placeholder="Tell us about your dream trip..." style={{minHeight:88,resize:"vertical"}} />
            </div>
            <button
              id="submitBtn"
              onClick={async()=>{
                const btn=document.getElementById("submitBtn") as HTMLButtonElement
                const msg=document.getElementById("formMsg") as HTMLElement
                const name=(document.getElementById("f-name") as HTMLInputElement).value
                const email=(document.getElementById("f-email") as HTMLInputElement).value
                if(!name||!email){
                  msg.style.display="block";msg.style.background="rgba(231,76,60,0.15)";msg.style.border="1px solid rgba(231,76,60,0.4)";msg.style.color="#e74c3c";msg.textContent="Please fill in your name and email.";return
                }
                btn.textContent="Sending...";btn.style.opacity="0.7"
                try{
                  const res=await fetch("/api/enquiry",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({name,email,travelDate:(document.getElementById("f-date") as HTMLInputElement).value,groupSize:(document.getElementById("f-size") as HTMLInputElement).value,tourInterest:(document.getElementById("f-tour") as HTMLSelectElement).value,message:(document.getElementById("f-msg") as HTMLTextAreaElement).value})})
                  const data=await res.json()
                  msg.style.display="block";msg.style.background="rgba(39,174,96,0.15)";msg.style.border="1px solid rgba(39,174,96,0.4)";msg.style.color="#2ecc71";msg.textContent=data.message
                  btn.textContent="✓ Enquiry Sent!";btn.style.background="#27ae60";btn.style.opacity="1"
                }catch{
                  btn.textContent="Send Enquiry ✦";btn.style.opacity="1"
                }
              }}
              style={{width:"100%",background:"#FF8C00",color:"white",border:"none",padding:"0.95rem",borderRadius:8,fontWeight:700,fontSize:"0.93rem",cursor:"pointer",fontFamily:"'Inter',sans-serif"}}
            >
              Send Enquiry ✦
            </button>
          </div>
        </div>
      </section>

      {/* ── FOOTER ── */}
      <footer style={{background:"#0f1e30",borderTop:"none",padding:"2.8rem 5% 1.8rem"}}>
        <div className="foot-grid" style={{display:"grid",gridTemplateColumns:"2fr 1fr 1fr 1fr",gap:"2.5rem",marginBottom:"2rem"}}>
          <div>
            <div className="playfair" style={{fontSize:"1.3rem",marginBottom:"0.8rem",color:"white"}}>Fernando Tours</div>
            <p style={{fontSize:"0.82rem",color:"rgba(255,255,255,0.6)",lineHeight:1.7,maxWidth:265}}>Creating unforgettable memories across Sri Lanka since 1990. <em>We Create Memories...</em></p>
          </div>
          <div>
            <h4 style={{color:"#FF8C00",fontSize:"0.75rem",fontWeight:700,letterSpacing:"1.5px",textTransform:"uppercase",marginBottom:"1rem"}}>Explore</h4>
            {[["#packages","Packages"],["#culture","Culture"],["#about","About Us"],["#contact","Contact"]].map(([href,label])=>(
              <Link key={label} href={href} className="foot-link">{label}</Link>
            ))}
          </div>
          <div>
            <h4 style={{color:"#FF8C00",fontSize:"0.75rem",fontWeight:700,letterSpacing:"1.5px",textTransform:"uppercase",marginBottom:"1rem"}}>Tours</h4>
            {packages.map((p)=>(
              <a key={p.id} href="#packages" className="foot-link">{p.name}</a>
            ))}
          </div>
          <div>
            <h4 style={{color:"#FF8C00",fontSize:"0.75rem",fontWeight:700,letterSpacing:"1.5px",textTransform:"uppercase",marginBottom:"1rem"}}>Connect</h4>
            <div style={{display:"flex",gap:"0.65rem",marginBottom:"1rem"}}>
              {[
                {s:"f",href:"#"},
                {s:"ig",href:"#"},
                {s:"wa",href:"https://wa.me/94712227665"},
              ].map(({s,href})=>(
                <a key={s} href={href} target="_blank" rel="noopener noreferrer" style={{width:34,height:34,borderRadius:"50%",background:s==="wa"?"rgba(37,211,102,0.15)":"rgba(255,255,255,0.06)",border:s==="wa"?"1px solid rgba(37,211,102,0.4)":"1px solid rgba(255,255,255,0.1)",display:"flex",alignItems:"center",justifyContent:"center",color:s==="wa"?"#25D166":"rgba(255,255,255,0.6)",textDecoration:"none",fontSize:"0.75rem",fontWeight:600}}>{s}</a>
              ))}
            </div>
            <a href="#contact" className="foot-link">Get In Touch</a>
          </div>
        </div>
        <div style={{borderTop:"1px solid rgba(255,255,255,0.06)",paddingTop:"1.3rem",display:"flex",alignItems:"center",justifyContent:"space-between",flexWrap:"wrap",gap:"0.5rem"}}>
          <p style={{fontSize:"0.76rem",color:"rgba(255,255,255,0.5)"}}>© 2024 Fernando Tours · Crafting memories since 1990 · Licensed Tour Operator, Sri Lanka Tourism</p>
          <p style={{fontSize:"0.72rem",color:"rgba(255,255,255,0.3)"}}>🇱🇰 Proudly Sri Lankan</p>
        </div>
      </footer>
    </>
  )
}