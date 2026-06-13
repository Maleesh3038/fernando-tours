import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-[#0d1b3e] text-white">
      <Navbar />
      <section className="pt-28">
        <div className="container mx-auto grid gap-12 lg:grid-cols-[0.95fr,0.85fr] items-center">
          <div>
            <p className="text-sm uppercase tracking-[0.3em] text-[#FF8C00]">About us</p>
            <h1 className="mt-4 text-5xl font-semibold">Fernando Tours: local knowledge, trusted service.</h1>
            <p className="mt-6 max-w-2xl text-lg text-slate-300">Since 1990, Fernando Tours has guided travelers through Sri Lanka’s rich history, lush landscapes, and remarkable wildlife with warmth and expertise.</p>
          </div>
          <div className="rounded-[32px] border border-white/10 bg-[#07122f]/90 p-10 shadow-[0_30px_60px_rgba(0,0,0,0.25)]">
            <p className="text-slate-300">Our focus remains on authentic immersion, flexible service, and meaningful experiences that honor Sri Lanka’s culture, nature, and hospitality.</p>
          </div>
        </div>
      </section>

      <section className="container mx-auto py-16">
        <div className="grid gap-8 lg:grid-cols-3">
          <div className="rounded-[32px] border border-white/10 bg-[#07122f]/90 p-8">
            <h2 className="text-2xl font-semibold text-white">Heritage</h2>
            <p className="mt-4 text-slate-300">Local guides, family-led care, and deep connections to the island’s past frame every itinerary.</p>
          </div>
          <div className="rounded-[32px] border border-white/10 bg-[#07122f]/90 p-8">
            <h2 className="text-2xl font-semibold text-white">Sustainability</h2>
            <p className="mt-4 text-slate-300">We prioritize responsible tourism, supporting communities and conserving wildlife habitats across Sri Lanka.</p>
          </div>
          <div className="rounded-[32px] border border-white/10 bg-[#07122f]/90 p-8">
            <h2 className="text-2xl font-semibold text-white">Service</h2>
            <p className="mt-4 text-slate-300">From the first enquiry to the last goodbye, we deliver thoughtful service and seamless travel logistics.</p>
          </div>
        </div>
      </section>

      <section className="container mx-auto pb-20">
        <div className="rounded-[32px] border border-white/10 bg-[#0a172f]/95 p-10 text-center">
          <p className="text-sm uppercase tracking-[0.3em] text-[#FF8C00]">Our promise</p>
          <h2 className="mt-4 text-4xl font-semibold text-white">Every trip is designed to feel personal, authentic, and unforgettable.</h2>
          <p className="mt-5 text-slate-300">We match the spirit of Sri Lanka to your travel style, from quiet relaxation and romance to cultural discovery and adventure.</p>
        </div>
      </section>

      <Footer />
    </main>
  );
}
