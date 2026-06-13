import Link from 'next/link';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { packages } from '@/lib/data';

type Props = { params: { id: string } };

export default function PackageDetailPage({ params }: Props) {
  const packageData = packages.find((item) => item.id === params.id);

  if (!packageData) {
    return (
      <main className="min-h-screen bg-[#0d1b3e] text-white">
        <Navbar />
        <section className="container mx-auto pt-32 text-center">
          <h1 className="text-4xl font-semibold">Package not found</h1>
          <p className="mt-4 text-slate-300">Please return to the packages page to select a valid tour.</p>
          <Link href="/packages" className="btn-outline mt-8 inline-flex">
            Back to packages
          </Link>
        </section>
        <Footer />
      </main>
    );
  }

  return (
    <main className="min-h-screen bg-[#0d1b3e] text-white">
      <Navbar />
      <section className="pt-28">
        <div className="container mx-auto grid gap-12 lg:grid-cols-[1.05fr,0.95fr] items-start">
          <div className="space-y-6">
            <p className="text-sm uppercase tracking-[0.3em] text-[#FF8C00]">{packageData.duration}</p>
            <h1 className="text-5xl font-semibold">{packageData.title}</h1>
            <p className="max-w-2xl text-lg text-slate-300">{packageData.description}</p>
            <div className="flex flex-wrap gap-4">
              <span className="rounded-full bg-[#FF8C00] px-5 py-3 text-sm font-semibold text-slate-950">{packageData.price}</span>
              <Link href="/contact" className="btn-primary">
                Book this tour
              </Link>
            </div>
          </div>
          <div className="rounded-[32px] border border-white/10 bg-[#07122f]/90 p-8 shadow-[0_30px_60px_rgba(0,0,0,0.25)]">
            <h2 className="text-2xl font-semibold text-white">Package highlights</h2>
            <ul className="mt-6 space-y-4 text-slate-300">
              {packageData.highlights.map((item) => (
                <li key={item} className="flex items-start gap-3">
                  <span className="mt-1 inline-flex h-3 w-3 rounded-full bg-[#FF8C00]" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>
      <section className="container mx-auto pt-16 pb-16">
        <div className="rounded-[32px] border border-white/10 bg-[#07122f]/90 p-10">
          <h2 className="text-3xl font-semibold text-white">Booking details</h2>
          <p className="mt-4 text-slate-300">This package is designed to showcase the best of Sri Lanka tailored to your travel dates. Fernando Tours will help with accommodations, guided experiences, private transfers, and local support throughout your journey.</p>
          <div className="mt-10 grid gap-6 md:grid-cols-2">
            <div className="rounded-3xl border border-white/10 bg-[#0a172f]/95 p-6">
              <p className="text-sm uppercase tracking-[0.3em] text-[#FF8C00]">Travel style</p>
              <p className="mt-4 text-slate-300">Comfortable, curated, and immersive experiences with local experts and authentic accommodations.</p>
            </div>
            <div className="rounded-3xl border border-white/10 bg-[#0a172f]/95 p-6">
              <p className="text-sm uppercase tracking-[0.3em] text-[#FF8C00]">Included</p>
              <p className="mt-4 text-slate-300">Transfers, accommodations, sightseeing, guided tours, and expert support from start to finish.</p>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </main>
  );
}
