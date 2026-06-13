"use client"
import { useState, useEffect } from "react"
import Link from "next/link"

const photos = Array.from({ length: 20 }, (_, i) => ({
  id: i + 1,
  src: `/images/gallery/gallery-${i + 1}.jpg`,
  alt: `Fernando Tours - Sri Lanka Memory ${i + 1}`,
}))

export default function GalleryPage() {
  const [selected, setSelected] = useState<number | null>(null)

  // Keyboard navigation
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (selected === null) return
      if (e.key === "ArrowRight") setSelected(s => s !== null && s < 20 ? s + 1 : s)
      if (e.key === "ArrowLeft") setSelected(s => s !== null && s > 1 ? s - 1 : s)
      if (e.key === "Escape") setSelected(null)
    }
    window.addEventListener("keydown", onKey)
    return () => window.removeEventListener("keydown", onKey)
  }, [selected])

  // Lock body scroll when modal open
  useEffect(() => {
    document.body.style.overflow = selected !== null ? "hidden" : ""
    return () => { document.body.style.overflow = "" }
  }, [selected])

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,400;0,700;1,400&family=Inter:wght@300;400;500;600&display=swap');
        *{margin:0;padding:0;box-sizing:border-box}
        body{font-family:'Inter',sans-serif;background:#0D1B3E;color:white;overflow-x:hidden}
        .playfair{font-family:'Playfair Display',serif}
        .nav-link{color:rgba(255,255,255,0.7);text-decoration:none;font-size:0.87rem;font-weight:500;transition:color .25s}
        .nav-link:hover{color:white}
        .nav-desktop{display:flex;gap:2rem;align-items:center}
        .photo-card{position:relative;overflow:hidden;border-radius:12px;cursor:pointer;background:#0a1628;aspect-ratio:4/3;border:1px solid rgba(255,255,255,0.08);transition:all .3s}
        .photo-card:hover{transform:translateY(-4px);border-color:rgba(255,140,0,0.4);box-shadow:0 16px 40px rgba(0,0,0,0.5)}
        .photo-card img{width:100%;height:100%;object-fit:cover;transition:transform .5s;display:block}
        .photo-card:hover img{transform:scale(1.07)}
        .photo-card .overlay{position:absolute;inset:0;background:rgba(0,0,0,0);transition:background .3s;display:flex;align-items:center;justify-content:center}
        .photo-card:hover .overlay{background:rgba(0,0,0,0.35)}
        .photo-card .zoom-icon{opacity:0;transition:opacity .3s;font-size:2rem}
        .photo-card:hover .zoom-icon{opacity:1}
        .modal-overlay{position:fixed;inset:0;background:rgba(0,0,0,0.92);backdrop-filter:blur(12px);z-index:1000;display:flex;align-items:center;justify-content:center;animation:fadeIn .2s ease}
        @keyframes fadeIn{from{opacity:0}to{opacity:1}}
        .modal-img{max-width:90vw;max-height:85vh;object-fit:contain;border-radius:8px;animation:zoomIn .25s ease;box-shadow:0 30px 80px rgba(0,0,0,0.8)}
        @keyframes zoomIn{from{opacity:0;transform:scale(0.92)}to{opacity:1;transform:scale(1)}}
        .nav-btn{position:fixed;top:50%;transform:translateY(-50%);background:rgba(255,255,255,0.1);backdrop-filter:blur(8px);border:1px solid rgba(255,255,255,0.2);border-radius:50%;width:52px;height:52px;display:flex;align-items:center;justify-content:center;cursor:pointer;color:white;font-size:1.4rem;transition:all .25s;z-index:1001}
        .nav-btn:hover{background:rgba(255,140,0,0.3);border-color:rgba(255,140,0,0.6)}
        .nav-btn:disabled{opacity:0.25;cursor:not-allowed}
        @media(max-width:768px){
          .gallery-grid{grid-template-columns:repeat(2,1fr)!important}
          .nav-desktop{display:none!important}
          .nav-btn{width:40px;height:40px;font-size:1rem}
        }
      `}</style>

      {/* NAV */}
      <nav style={{position:"fixed",top:0,left:0,right:0,zIndex:200,padding:"1rem 5%",display:"flex",alignItems:"center",justifyContent:"space-between",background:"rgba(10,20,50,0.97)",backdropFilter:"blur(16px)",borderBottom:"1px solid rgba(255,255,255,0.07)"}}>
        <Link href="/" style={{display:"flex",alignItems:"center",gap:11,textDecoration:"none"}}>
          <img src="/images/logo.jpg" alt="Fernando Tours" style={{height:42,width:"auto",objectFit:"contain",borderRadius:10,mixBlendMode:"lighten"}} />
          <span className="playfair" style={{fontSize:"1.25rem",color:"white"}}>Fernando Tours</span>
        </Link>
        <div className="nav-desktop">
          <Link href="/" className="nav-link">Home</Link>
          <Link href="/destinations" className="nav-link">Destinations</Link>
          <Link href="/gallery" className="nav-link" style={{color:"#FFB347"}}>Gallery</Link>
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
      <div style={{position:"relative",height:300,overflow:"hidden"}}>
        <img src="/images/gallery/gallery-1.jpg" alt="Gallery" style={{width:"100%",height:"100%",objectFit:"cover",objectPosition:"center 40%",filter:"brightness(0.6)"}} />
        <div style={{position:"absolute",inset:0,background:"linear-gradient(180deg,rgba(8,14,36,0.4) 0%,rgba(8,14,36,0.8) 100%)"}} />
        <div style={{position:"absolute",inset:0,display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center",paddingTop:"4rem"}}>
          <span style={{color:"#FF8C00",fontSize:"0.74rem",fontWeight:700,letterSpacing:"2.5px",textTransform:"uppercase",marginBottom:"0.9rem",display:"block"}}>Our Memories</span>
          <h1 className="playfair" style={{fontSize:"clamp(2rem,5vw,3.2rem)",textAlign:"center",marginBottom:"0.8rem"}}>Travel Gallery</h1>
          <p style={{color:"rgba(255,255,255,0.72)",fontSize:"0.95rem",maxWidth:480,textAlign:"center",lineHeight:1.7}}>Real moments from real journeys — our travelers across the Pearl of the Indian Ocean.</p>
        </div>
      </div>

      {/* GALLERY GRID */}
      <section style={{padding:"3rem 5% 6rem"}}>
        <div style={{display:"flex",alignItems:"center",justifyContent:"space-between",marginBottom:"2rem",flexWrap:"wrap",gap:"1rem"}}>
          <p style={{color:"rgba(255,255,255,0.45)",fontSize:"0.82rem"}}>{photos.length} photos · Click to view full size · ← → to navigate</p>
          <Link href="/#contact" style={{background:"rgba(255,140,0,0.14)",border:"1px solid rgba(255,140,0,0.4)",color:"#FFB347",padding:"0.5rem 1.2rem",borderRadius:50,fontSize:"0.82rem",fontWeight:600,textDecoration:"none"}}>
            📸 Book Your Tour
          </Link>
        </div>

        <div className="gallery-grid" style={{display:"grid",gridTemplateColumns:"repeat(4,1fr)",gap:"1rem"}}>
          {photos.map((photo) => (
            <div key={photo.id} className="photo-card" onClick={() => setSelected(photo.id)}>
              <img src={photo.src} alt={photo.alt} loading="lazy" />
              <div className="overlay">
                <span className="zoom-icon">🔍</span>
              </div>
              <div style={{position:"absolute",bottom:0,left:0,right:0,padding:"0.6rem 0.8rem",background:"linear-gradient(to top,rgba(0,0,0,0.7),transparent)",opacity:0,transition:"opacity .3s"}}
                onMouseEnter={e => (e.currentTarget as HTMLElement).style.opacity = "1"}
                onMouseLeave={e => (e.currentTarget as HTMLElement).style.opacity = "0"}>
                <span style={{fontSize:"0.72rem",color:"rgba(255,255,255,0.8)"}}>Photo {photo.id}</span>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section style={{padding:"4rem 5%",textAlign:"center",background:"rgba(255,140,0,0.05)",borderTop:"1px solid rgba(255,140,0,0.1)"}}>
        <span style={{color:"#FF8C00",fontSize:"0.74rem",fontWeight:700,letterSpacing:"2.5px",textTransform:"uppercase",display:"block",marginBottom:"0.9rem"}}>Your Turn</span>
        <h2 className="playfair" style={{fontSize:"clamp(1.7rem,3.5vw,2.4rem)",marginBottom:"1rem"}}>Create Your Own Memories</h2>
        <p style={{color:"rgba(255,255,255,0.65)",marginBottom:"2rem",fontSize:"0.95rem",maxWidth:480,margin:"0 auto 2rem"}}>Join thousands of happy travelers and let us craft your perfect Sri Lanka journey.</p>
        <Link href="/#contact" style={{background:"#FF8C00",color:"white",padding:"0.85rem 2.5rem",borderRadius:50,fontWeight:600,fontSize:"0.95rem",textDecoration:"none",boxShadow:"0 4px 20px rgba(255,140,0,.35)"}}>
          Plan My Trip
        </Link>
      </section>

      {/* LIGHTBOX MODAL */}
      {selected !== null && (
        <div className="modal-overlay" onClick={() => setSelected(null)}>

          {/* Close */}
          <button onClick={() => setSelected(null)} style={{position:"fixed",top:"1.5rem",right:"1.5rem",background:"rgba(255,255,255,0.1)",backdropFilter:"blur(8px)",border:"1px solid rgba(255,255,255,0.2)",borderRadius:"50%",width:44,height:44,color:"white",fontSize:"1.2rem",cursor:"pointer",zIndex:1002,display:"flex",alignItems:"center",justifyContent:"center"}}>✕</button>

          {/* Counter */}
          <div style={{position:"fixed",top:"1.5rem",left:"50%",transform:"translateX(-50%)",background:"rgba(0,0,0,0.5)",backdropFilter:"blur(8px)",border:"1px solid rgba(255,255,255,0.15)",borderRadius:50,padding:"0.4rem 1.2rem",fontSize:"0.82rem",color:"rgba(255,255,255,0.8)",zIndex:1002}}>
            {selected} / {photos.length}
          </div>

          {/* Prev */}
          <button className="nav-btn" style={{left:"1.5rem"}} disabled={selected <= 1}
            onClick={e => { e.stopPropagation(); setSelected(s => s !== null && s > 1 ? s - 1 : s) }}>
            ‹
          </button>

          {/* Image */}
          <img
            key={selected}
            src={`/images/gallery/gallery-${selected}.jpg`}
            alt={`Fernando Tours Photo ${selected}`}
            className="modal-img"
            onClick={e => e.stopPropagation()}
          />

          {/* Next */}
          <button className="nav-btn" style={{right:"1.5rem"}} disabled={selected >= photos.length}
            onClick={e => { e.stopPropagation(); setSelected(s => s !== null && s < 20 ? s + 1 : s) }}>
            ›
          </button>

        </div>
      )}
    </>
  )
}