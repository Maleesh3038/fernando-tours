'use client';

import { useState } from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

const TOUR_OPTIONS = [
  'Cultural Triangle Tour',
  'Coastal & Beach Tour',
  'Wildlife Safari',
  'Hill Country Tour',
  'Custom / Multi-destination',
  'Not sure yet',
];

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    travelDate: '',
    groupSize: '',
    tourInterest: '',
    message: '',
  });
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
  const [errorMsg, setErrorMsg] = useState('');

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('loading');
    setErrorMsg('');

    try {
      const res = await fetch('/api/enquiry', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });

      const data = await res.json();

      if (res.ok && data.success) {
        setStatus('success');
        setFormData({ name: '', email: '', travelDate: '', groupSize: '', tourInterest: '', message: '' });
      } else {
        setStatus('error');
        setErrorMsg(data.message || 'Something went wrong. Please try again.');
      }
    } catch {
      setStatus('error');
      setErrorMsg('Network error. Please check your connection and try again.');
    }
  };

  return (
    <main className="min-h-screen bg-[#0d1b3e] text-white">
      <Navbar />

      <section className="pt-28">
        <div className="container mx-auto grid gap-12 lg:grid-cols-[0.95fr,0.8fr] items-start">
          <div>
            <p className="text-sm uppercase tracking-[0.3em] text-[#FF8C00]">Get in touch</p>
            <h1 className="mt-4 text-5xl font-semibold">Plan your Sri Lanka adventure with us.</h1>
            <p className="mt-6 max-w-2xl text-lg text-slate-300">
              Reach out for personalized itineraries, pricing, and starting dates. Fernando Tours will design a memorable island journey for you.
            </p>
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

          {status === 'success' ? (
            <div className="text-center py-12">
              <p className="text-4xl mb-4">🌿</p>
              <p className="text-3xl font-semibold text-[#FF8C00]">Enquiry Sent!</p>
              <p className="mt-4 text-slate-300">We&apos;ll be in touch within 24 hours.</p>
              <button
                onClick={() => setStatus('idle')}
                className="mt-8 btn-primary px-8 py-3 text-sm font-semibold"
              >
                Send another enquiry
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="grid gap-6">

              {/* Row 1: Name + Email */}
              <div className="grid gap-6 sm:grid-cols-2">
                <div>
                  <label htmlFor="name" className="block text-sm font-semibold text-white">Name *</label>
                  <input
                    type="text" id="name" name="name"
                    value={formData.name} onChange={handleChange}
                    required className="input-field mt-3"
                    placeholder="Your full name"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-semibold text-white">Email *</label>
                  <input
                    type="email" id="email" name="email"
                    value={formData.email} onChange={handleChange}
                    required className="input-field mt-3"
                    placeholder="your@email.com"
                  />
                </div>
              </div>

              {/* Row 2: Tour Interest */}
              <div>
                <label htmlFor="tourInterest" className="block text-sm font-semibold text-white">Tour Interest</label>
                <select
                  id="tourInterest" name="tourInterest"
                  value={formData.tourInterest} onChange={handleChange}
                  className="input-field mt-3"
                >
                  <option value="">Select a tour...</option>
                  {TOUR_OPTIONS.map(opt => (
                    <option key={opt} value={opt}>{opt}</option>
                  ))}
                </select>
              </div>

              {/* Row 3: Travel Date + Group Size */}
              <div className="grid gap-6 sm:grid-cols-2">
                <div>
                  <label htmlFor="travelDate" className="block text-sm font-semibold text-white">Travel Date</label>
                  <input
                    type="date" id="travelDate" name="travelDate"
                    value={formData.travelDate} onChange={handleChange}
                    className="input-field mt-3"
                  />
                </div>
                <div>
                  <label htmlFor="groupSize" className="block text-sm font-semibold text-white">Group Size</label>
                  <select
                    id="groupSize" name="groupSize"
                    value={formData.groupSize} onChange={handleChange}
                    className="input-field mt-3"
                  >
                    <option value="">Select size...</option>
                    <option value="Solo">Solo (1)</option>
                    <option value="Couple">Couple (2)</option>
                    <option value="Small group (3–5)">Small group (3–5)</option>
                    <option value="Medium group (6–10)">Medium group (6–10)</option>
                    <option value="Large group (10+)">Large group (10+)</option>
                  </select>
                </div>
              </div>

              {/* Row 4: Message */}
              <div>
                <label htmlFor="message" className="block text-sm font-semibold text-white">Message</label>
                <textarea
                  id="message" name="message"
                  value={formData.message} onChange={handleChange}
                  rows={4} className="input-field mt-3"
                  placeholder="Tell us about your dream Sri Lanka trip..."
                />
              </div>

              {status === 'error' && (
                <p className="text-red-400 text-sm">{errorMsg}</p>
              )}

              <button
                type="submit"
                disabled={status === 'loading'}
                className="btn-primary w-full py-4 text-base font-semibold disabled:opacity-60"
              >
                {status === 'loading' ? 'Sending...' : 'Submit enquiry'}
              </button>
            </form>
          )}

        </div>
      </section>

      <Footer />
    </main>
  );
}