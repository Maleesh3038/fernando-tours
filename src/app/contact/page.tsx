import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

export default function ContactPage() {
  return (
    <main className="min-h-screen bg-[#0d1b3e] text-white">
      <Navbar />
      <section className="pt-28">
        <div className="container mx-auto grid gap-12 lg:grid-cols-[0.95fr,0.8fr] items-start">
          <div>
            <p className="text-sm uppercase tracking-[0.3em] text-[#FF8C00]">Get in touch</p>
            <h1 className="mt-4 text-5xl font-semibold">Plan your Sri Lanka adventure with us.</h1>
            <p className="mt-6 max-w-2xl text-lg text-slate-300">Reach out for personalized itineraries, pricing, and starting dates. Fernando Tours will design a memorable island journey for you.</p>
          </div>
          <div className="rounded-[32px] border border-white/10 bg-[#07122f]/90 p-8 shadow-[0_30px_60px_rgba(0,0,0,0.25)]">
            <p className="text-sm uppercase tracking-[0.3em] text-[#FF8C00]">Contact details</p>
            <div className="mt-6 space-y-4 text-slate-300">
              <p>hello@fernandotours.lk</p>
              <p>+94 77 123 4567</p>
              <p>Colombo, Sri Lanka</p>
            </div>
          </div>
        </div>
      </section>

      <section className="container mx-auto pt-16 pb-20">
        <div className="rounded-[32px] border border-white/10 bg-[#07122f]/90 p-10 shadow-[0_30px_60px_rgba(0,0,0,0.25)]">
          <form action="/api/enquiry" method="post" className="grid gap-6">
            <div>
              <label htmlFor="name" className="block text-sm font-semibold text-white">Name</label>
              <input type="text" id="name" name="name" required className="input-field mt-3" />
            </div>
            <div>
              <label htmlFor="email" className="block text-sm font-semibold text-white">Email</label>
              <input type="email" id="email" name="email" required className="input-field mt-3" />
            </div>
            <div>
              <label htmlFor="message" className="block text-sm font-semibold text-white">Message</label>
              <textarea id="message" name="message" required className="input-field mt-3" />
            </div>
            <button type="submit" className="btn-primary w-full py-4 text-base font-semibold">Submit enquiry</button>
          </form>
        </div>
      </section>

      <Footer />
    </main>
  );
}
