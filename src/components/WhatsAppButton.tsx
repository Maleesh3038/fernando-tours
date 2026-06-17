'use client';

export default function WhatsAppButton() {
  const phoneNumber = '94712227665';
  const message = encodeURIComponent(
    "Hi Fernando Tours! I'm interested in planning a Sri Lanka trip. Could you help me with more details?"
  );
  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${message}`;

  return (
    <a
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat with us on WhatsApp"
      className="fixed bottom-6 right-6 z-50 flex flex-col items-end gap-3 group"
    >
      {/* Persistent pill label */}
      <span className="flex items-center gap-2 px-4 py-2 rounded-full bg-[#0d1b3e] border border-white/10 shadow-lg text-white text-sm font-medium transition-transform duration-300 group-hover:-translate-y-1">
        <span className="w-2 h-2 rounded-full bg-[#25D366] animate-pulse" />
        Chat with us
      </span>

      {/* Button */}
      <span className="relative flex items-center justify-center w-14 h-14 rounded-full bg-[#25D366] shadow-[0_8px_24px_rgba(37,211,102,0.4)] transition-transform duration-300 group-hover:scale-110">
        <span className="absolute inset-0 rounded-full bg-[#25D366] opacity-75 animate-ping" />
        <svg
          viewBox="0 0 32 32"
          className="relative w-7 h-7 fill-white"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M16.001 0C7.164 0 0 7.163 0 16c0 3.2.94 6.173 2.555 8.674L.59 31.41l6.945-1.926A15.9 15.9 0 0 0 16.001 32C24.836 32 32 24.837 32 16S24.836 0 16.001 0zm0 29.27c-2.69 0-5.21-.79-7.32-2.16l-.524-.327-4.94 1.371 1.385-4.81-.34-.5A13.21 13.21 0 0 1 2.73 16c0-7.32 5.95-13.27 13.27-13.27S29.27 8.68 29.27 16 23.32 29.27 16 29.27zm7.27-9.79c-.4-.2-2.36-1.16-2.73-1.3-.36-.13-.63-.2-.9.2-.27.4-1.02 1.3-1.26 1.56-.23.27-.46.3-.86.1-.4-.2-1.68-.62-3.2-1.97-1.18-1.05-1.98-2.35-2.21-2.75-.23-.4-.02-.62.18-.83.2-.2.4-.46.6-.7.2-.23.27-.4.4-.66.13-.27.07-.5-.04-.7-.1-.2-.93-2.23-1.27-3.04-.34-.81-.69-.7-.94-.7-.24-.02-.52-.02-.8-.02-.27 0-.71.1-1.08.5-.37.4-1.41 1.38-1.41 3.36 0 1.98 1.44 3.9 1.64 4.17.2.27 2.73 4.16 6.62 5.67 3.9 1.5 3.9 1 4.6.93.7-.07 2.27-.93 2.6-1.83.33-.9.33-1.66.23-1.83-.1-.16-.36-.26-.76-.46z" />
        </svg>
      </span>
    </a>
  );
}