'use client';

export default function Footer() {
  return (
    <footer className="border-t border-white/10 bg-[#07122f]/95 py-10">
      <div className="container mx-auto grid gap-6 text-sm text-slate-300 md:grid-cols-3">
        <div>
          <p className="font-semibold text-white">Fernando Tours</p>
          <p className="mt-4 text-slate-400">Sri Lanka tourism specialists since 1990. Personalized journeys across culture, coast, and wildlife.</p>
        </div>
        <div>
          <p className="font-semibold text-white">Contact</p>
          <p className="mt-4">Phone: +94 71 222 7665</p>
          <p>Email: fernandotourshikka@gmail.com</p>
        </div>
        <div>
          <p className="font-semibold text-white">Quick Links</p>
          <div className="mt-4 flex flex-col gap-2 text-slate-300">
            <a href="/packages">Packages</a>
            <a href="/about">About</a>
            <a href="/contact">Contact</a>
          </div>
        </div>
      </div>
      <div className="container mx-auto mt-10 border-t border-white/10 pt-6 text-center text-xs text-slate-500">
        © 1990–2026 Fernando Tours. All rights reserved.
      </div>
    </footer>
  );
}
