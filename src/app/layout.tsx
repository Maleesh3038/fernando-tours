import type { Metadata } from "next"
import { Inter, Playfair_Display } from "next/font/google"
import "./globals.css"
import WhatsAppButton from "@/components/WhatsAppButton"

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" })
const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
  style: ["normal", "italic"],
})

export const metadata: Metadata = {
  title: "Fernando Tours Sri Lanka | Best Tour Operator Since 1990",
  description: "Fernando Tours Sri Lanka – Award-winning tour operator since 1990. Sigiriya, Yala Safari, Mirissa Beach, Ella, Kandy & more. Tailor-made tours, whale watching, wildlife safaris. Book your Sri Lanka holiday today!",
  keywords: [
    "Sri Lanka tours", "Sri Lanka tour operator", "Hikkaduwa tours",
    "Sigiriya tours", "Yala safari", "Sri Lanka holiday packages",
    "best tours Sri Lanka", "Fernando Tours", "Sri Lanka travel",
    "whale watching Sri Lanka", "Ella train Sri Lanka", "Kandy tours",
    "Sri Lanka wildlife safari", "Mirissa beach tours", "Galle fort tours",
    "Sri Lanka honeymoon", "cultural tours Sri Lanka", "budget tours Sri Lanka",
    "luxury tours Sri Lanka", "Nuwara Eliya tea country", "Anuradhapura tours",
    "Sri Lanka travel agency", "Fernando Tours Hikkaduwa"
  ],
  authors: [{ name: "Fernando Tours", url: "https://www.fernandotourslk.com" }],
  creator: "Fernando Tours Sri Lanka",
  publisher: "Fernando Tours",
  metadataBase: new URL("https://www.fernandotourslk.com"),
  alternates: {
    canonical: "https://www.fernandotourslk.com",
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://www.fernandotourslk.com",
    siteName: "Fernando Tours Sri Lanka",
    title: "Fernando Tours Sri Lanka | Best Tour Operator Since 1990",
    description: "Discover Sri Lanka with Fernando Tours – trusted since 1990. Sigiriya, Yala Safari, whale watching, tea country & more. Tailor-made holidays for every traveler.",
    images: [
      {
        url: "/images/sigiriya.png",
        width: 1200,
        height: 630,
        alt: "Fernando Tours Sri Lanka - Sigiriya Rock Fortress",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Fernando Tours Sri Lanka | Best Tour Operator Since 1990",
    description: "Discover Sri Lanka with Fernando Tours – trusted since 1990. Sigiriya, Yala Safari, whale watching, tea country & more.",
    images: ["/images/sigiriya.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  verification: {
    google: "add-your-google-search-console-code-here",
  },
  category: "travel",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        {/* Structured Data - Local Business */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "TravelAgency",
              "name": "Fernando Tours",
              "description": "Award-winning Sri Lanka tour operator since 1990. Specializing in tailor-made holidays, wildlife safaris, cultural tours, and beach holidays across Sri Lanka.",
              "url": "https://www.fernandotourslk.com",
              "logo": "https://www.fernandotourslk.com/images/logo.jpg",
              "image": "https://www.fernandotourslk.com/images/sigiriya.png",
              "telephone": "+94712227665",
              "email": "fernandotourshikka@gmail.com",
              "foundingDate": "1990",
              "address": {
                "@type": "PostalAddress",
                "addressLocality": "Hikkaduwa",
                "addressRegion": "Galle District",
                "addressCountry": "LK"
              },
              "geo": {
                "@type": "GeoCoordinates",
                "latitude": "6.1395",
                "longitude": "80.1065"
              },
              "openingHours": "Mo-Su 08:00-20:00",
              "priceRange": "$$",
              "sameAs": [
                "https://www.tripadvisor.com/Attraction_Review-g304134-d13385779-Reviews-Fernando_Tours-Hikkaduwa_Galle_District_Southern_Province.html"
              ],
              "hasMap": "https://maps.app.goo.gl/9YYbV18RazjHBzVLA",
              "areaServed": {
                "@type": "Country",
                "name": "Sri Lanka"
              },
              "aggregateRating": {
                "@type": "AggregateRating",
                "ratingValue": "4.9",
                "reviewCount": "200",
                "bestRating": "5"
              }
            })
          }}
        />
        {/* Tour Package Structured Data */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "ItemList",
              "name": "Fernando Tours Sri Lanka - Tour Packages",
              "itemListElement": [
                {
                  "@type": "ListItem",
                  "position": 1,
                  "item": {
                    "@type": "TouristTrip",
                    "name": "Classic Sri Lanka Tour - 10 Days",
                    "description": "The ultimate Sri Lanka experience — Sigiriya, Yala safari, Kandy, tea country, Ella, and beaches.",
                    "touristType": "Cultural tourists, Adventure travelers",
                    "offers": {
                      "@type": "Offer",
                      "price": "890",
                      "priceCurrency": "USD"
                    }
                  }
                },
                {
                  "@type": "ListItem",
                  "position": 2,
                  "item": {
                    "@type": "TouristTrip",
                    "name": "Yala Wildlife Safari",
                    "description": "Sri Lanka wildlife expedition — leopards, elephants, and exotic birds at Yala National Park.",
                    "touristType": "Wildlife enthusiasts",
                    "offers": {
                      "@type": "Offer",
                      "price": "680",
                      "priceCurrency": "USD"
                    }
                  }
                },
                {
                  "@type": "ListItem",
                  "position": 3,
                  "item": {
                    "@type": "TouristTrip",
                    "name": "Sri Lanka Beach Holiday",
                    "description": "Beach and leisure tour — whale watching, Mirissa beach, Galle Fort, and coastal culture.",
                    "touristType": "Beach lovers",
                    "offers": {
                      "@type": "Offer",
                      "price": "450",
                      "priceCurrency": "USD"
                    }
                  }
                }
              ]
            })
          }}
        />
      </head>
      <body className={`${inter.variable} ${playfair.variable}`}>
        {children}
        <WhatsAppButton />
      </body>
    </html>
  )
}