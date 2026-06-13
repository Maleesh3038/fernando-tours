import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'Fernando Tours | Sri Lanka Travel Since 1990',
  description: 'Classic Sri Lanka travel experiences with expert guides, curated tours, and unforgettable adventures.',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        {children}
      </body>
    </html>
  );
}
