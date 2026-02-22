import type { Metadata, Viewport } from "next"
import { Inter, DM_Serif_Display } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import "./globals.css"

const inter = Inter({ subsets: ["latin", "latin-ext"], variable: "--font-inter" })
const dmSerif = DM_Serif_Display({
  weight: "400",
  subsets: ["latin", "latin-ext"],
  variable: "--font-dm-serif",
})

export const metadata: Metadata = {
  metadataBase: new URL("https://pogotowiedachow24h.pl"),
  title: "Pogotowie Dachow 24h | Dekarz Wroclaw - Naprawa Dachow Dolny Slask",
  description:
    "Pogotowie Dachow 24h - kompleksowe uslugi dekarskie we Wroclawiu i na Dolnym Slasku. Naprawa dachow, wymiana pokrycia, montaz dachowki. Szybkie terminy, gwarancja jakosci. Zadzwon: 518 235 365",
  keywords: [
    "pogotowie dachow",
    "dekarz wroclaw",
    "naprawa dachow",
    "uslugi dekarskie",
    "wymiana pokrycia dachowego",
    "dekarz dolny slask",
    "dekarz legnica",
    "dekarz jelenia gora",
    "dekarz glogow",
    "dekarz walbrzych",
    "dekarz lubin",
    "dekarz zgorzelec",
    "dekarz zielona gora",
    "pogotowiedachow24h",
  ],
  openGraph: {
    title: "Pogotowie Dachow 24h | Dekarz Wroclaw - Naprawa Dachow Dolny Slask",
    description:
      "Pogotowie Dachow 24h - kompleksowe uslugi dekarskie we Wroclawiu i na Dolnym Slasku. Naprawa dachow, wymiana pokrycia, montaz dachowki. Zadzwon: 518 235 365",
    type: "website",
    locale: "pl_PL",
    url: "https://pogotowiedachow24h.pl",
  },
  robots: {
    index: true,
    follow: true,
  },
  alternates: {
    canonical: "https://pogotowiedachow24h.pl",
  },
}

export const viewport: Viewport = {
  themeColor: "#9A6F2E",
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
}

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  name: "Pogotowie Dachow 24h",
  description:
    "Kompleksowe uslugi dekarskie we Wroclawiu i na Dolnym Slasku. Naprawa dachow, wymiana pokrycia, montaz dachowki.",
  telephone: "+48518235365",
  url: "https://pogotowiedachow24h.pl",
  areaServed: [
    { "@type": "City", name: "Wroclaw" },
    { "@type": "City", name: "Legnica" },
    { "@type": "City", name: "Jelenia Gora" },
    { "@type": "City", name: "Glogow" },
    { "@type": "City", name: "Walbrzych" },
    { "@type": "City", name: "Lubin" },
    { "@type": "City", name: "Zgorzelec" },
    { "@type": "City", name: "Zielona Gora" },
    { "@type": "City", name: "Gorzow Wielkopolski" },
    { "@type": "City", name: "Swiebodzin" },
  ],
  priceRange: "$$",
  "@id": "https://pogotowiedachow24h.pl",
  address: {
    "@type": "PostalAddress",
    addressLocality: "Wroclaw",
    addressRegion: "dolnoslaskie",
    addressCountry: "PL",
  },
  serviceType: [
    "Naprawa dachow",
    "Wymiana pokrycia dachowego",
    "Montaz dachowki",
    "Obrobki blacharskie",
    "Hydroizolacje",
  ],
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="pl">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className={`${inter.variable} ${dmSerif.variable} font-sans antialiased`}>
        {children}
        <Analytics />
      </body>
    </html>
  )
}
