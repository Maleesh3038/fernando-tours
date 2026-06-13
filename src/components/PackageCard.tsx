import Link from 'next/link';
import { Package } from '@/lib/data';

export default function PackageCard({ packageData }: { packageData: Package }) {
  return (
    <article className={`card-glow rounded-[32px] p-8 transition hover:-translate-y-1 hover:border-[#FF8C00] ${packageData.featured ? 'border-2 border-[#FF8C00]' : 'border border-white/10'}`}>
      <div className="flex items-center justify-between gap-4">
        <div>
          <p className="text-sm uppercase tracking-[0.3em] text-[#FF8C00]">{packageData.duration}</p>
          <h3 className="mt-4 text-2xl font-semibold text-white">{packageData.title}</h3>
        </div>
        <span className="rounded-full bg-[#FF8C00] px-5 py-3 text-sm font-semibold text-slate-950">{packageData.price}</span>
      </div>
      <p className="mt-6 text-slate-300">{packageData.description}</p>
      <ul className="mt-6 space-y-2 text-slate-300">
        {packageData.highlights.map((highlight) => (
          <li key={highlight} className="flex items-center gap-3">
            <span className="inline-flex h-2.5 w-2.5 rounded-full bg-[#FF8C00]" />
            <span>{highlight}</span>
          </li>
        ))}
      </ul>
      <Link href={`/packages/${packageData.id}`} className="mt-8 inline-flex items-center gap-2 text-sm font-semibold text-[#FF8C00]">
        Learn more →
      </Link>
    </article>
  );
}
