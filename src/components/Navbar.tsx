'use client';

import Link from 'next/link';
import { useEffect, useState } from 'react';

const navItems = [
  { href: '/', label: 'Home' },
  { href: '/packages', label: 'Packages' },
  { href: '/about', label: 'About' },
  { href: '/contact', label: 'Contact' },
];

export default function Navbar() {
  const [isSticky, setIsSticky] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsSticky(window.scrollY > 40);
    handleScroll();
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ${isSticky ? 'bg-[#0d1b3e]/95 shadow-xl shadow-slate-950/40 backdrop-blur-xl' : 'bg-transparent'}`}>
      <div className="container mx-auto flex items-center justify-between px-6 py-4">
        <Link href="/" className="text-lg font-semibold tracking-[0.2em] text-[#FF8C00]">
          FERNANDO TOURS
        </Link>
        <nav className="hidden items-center gap-8 md:flex">
          {navItems.map((item) => (
            <Link key={item.href} href={item.href} className="text-sm uppercase tracking-[0.2em] text-slate-200 transition hover:text-white">
              {item.label}
            </Link>
          ))}
          <Link href="/contact" className="rounded-full border border-[#FF8C00] px-5 py-2 text-sm font-semibold text-[#FF8C00] transition hover:bg-[#FF8C00] hover:text-slate-950">
            Book Now
          </Link>
        </nav>

        <button onClick={() => setMenuOpen((prev) => !prev)} className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-white/10 bg-slate-950/70 text-white md:hidden">
          <span className="sr-only">Toggle menu</span>
          <div className="flex h-5 w-5 flex-col justify-between">
            <span className={`block h-0.5 w-full bg-white transition ${menuOpen ? 'translate-y-2 rotate-45' : ''}`} />
            <span className={`block h-0.5 w-full bg-white transition ${menuOpen ? 'opacity-0' : ''}`} />
            <span className={`block h-0.5 w-full bg-white transition ${menuOpen ? '-translate-y-2 -rotate-45' : ''}`} />
          </div>
        </button>
      </div>
      {menuOpen && (
        <div className="border-t border-white/10 bg-[#0d1b3e]/95 md:hidden">
          <div className="container mx-auto flex flex-col gap-4 px-6 py-6">
            {navItems.map((item) => (
              <Link key={item.href} href={item.href} onClick={() => setMenuOpen(false)} className="text-base uppercase tracking-[0.2em] text-slate-200">
                {item.label}
              </Link>
            ))}
            <Link href="/contact" onClick={() => setMenuOpen(false)} className="rounded-full border border-[#FF8C00] px-5 py-3 text-sm font-semibold text-[#FF8C00] transition hover:bg-[#FF8C00] hover:text-slate-950">
              Book Now
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
