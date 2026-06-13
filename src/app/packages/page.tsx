import Link from 'next/link';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import PackageCard from '@/components/PackageCard';
import { packages } from '@/lib/data';

export default function PackagesPage() {
  return (
    <main className="min-h-screen">
      <Navbar />
      <section className="pt-28">
        <div className="container mx-auto text-center">
          <p className="text-sm uppercase tracking-[0.3em] text-[#FF8C00]">Our tours</p>
          <h1 className="mt-4 text-5xl font-semibold text-white">Sri Lanka packages for every style.</h1>
          <p className="mx-auto mt-5 max-w-2xl text-lg text-slate-300">Choose from beach escapes, cultural treasures, wildlife stakes, and bespoke experiences designed to make your journey unforgettable.</p>
        </div>
      </section>

      <section className="container mx-auto pt-16">
        <div className="grid gap-8 lg:grid-cols-3">
          {packages.map((packageData) => (
            <PackageCard key={packageData.id} packageData={packageData} />
          ))}
        </div>
      </section>

      <section className="container mx-auto pt-20 pb-16 text-center">
        <p className="text-sm uppercase tracking-[0.3em] text-[#FF8C00]">Ready to travel?</p>
        <h2 className="mt-4 text-3xl font-semibold text-white">Create your custom itinerary with our team.</h2>
        <Link href="/contact" className="btn-primary mt-8 inline-flex">
          Start planning
        </Link>
      </section>

      <Footer />
    </main>
  );
}
