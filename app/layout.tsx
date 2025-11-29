// app/layout.tsx
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import Script from 'next/script'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  metadataBase: new URL('https://lmktreeservices.com.au'),
  title: {
    default:
      'Tree Removal Pakenham, Berwick & Melbourne South-East | LMK Tree Services',
    template: '%s | LMK Tree Services',
  },
  description:
    "Fast, safe and fully insured tree removal, lopping, pruning, stump grinding and land clearing across Melbourne's south-east, including Pakenham, Berwick, Beaconsfield, Officer, Narre Warren, Clyde, Cranbourne and surrounding suburbs. Same-day free quotes available.",
  keywords: [
    'tree removal Melbourne',
    'tree removal Pakenham',
    'tree removal Berwick',
    'tree removal Beaconsfield',
    'tree removal Officer',
    'tree removal Narre Warren',
    'tree removal Clyde',
    'tree removal Cranbourne',
    'tree lopping Melbourne',
    'tree lopping Pakenham',
    'tree services Melbourne',
    'arborist Melbourne south-east',
    'stump grinding Pakenham',
    'tree pruning Melbourne',
  ],
  robots: {
    index: true,
    follow: true,
  },
  openGraph: {
    type: 'website',
    title:
      'Tree Removal Pakenham, Berwick & Melbourne South-East | LMK Tree Services',
    description:
      "Professional, fully insured tree removal, lopping, pruning and stump grinding across Melbourne's south-east including Pakenham, Berwick, Officer, Narre Warren and Clyde. Free quotes and same-day emergency call-outs.",
    url: 'https://lmktreeservices.com.au',
    siteName: 'LMK Tree Services',
  },
  twitter: {
    card: 'summary_large_image',
    title:
      'Tree Removal Pakenham, Berwick & Melbourne South-East | LMK Tree Services',
    description:
      "Professional tree removal, lopping, pruning and stump grinding across Melbourne's south-east. Fully insured arborists with fast, free quotes.",
  },
  icons: {
    icon: '/favicon.ico',
  },
  alternates: {
    canonical: '/',
  },
}

// JSON-LD local business schema for SEO
const localBusinessSchema = {
  '@context': 'https://schema.org',
  '@type': ['LocalBusiness', 'HomeAndConstructionBusiness'],
  name: 'LMK Tree Services',
  url: 'https://lmktreeservices.com.au',
  telephone: '+61 429 187 791',
  description:
    "LMK Tree Services provides professional tree removal, lopping, pruning, stump grinding and land clearing across Melbourne's south-east.",
  areaServed: [
    'Pakenham',
    'Beaconsfield',
    'Berwick',
    'Cranbourne',
    'Officer',
    'Narre Warren',
    'Clyde',
    'Emerald',
    'Gembrook',
    'Koo Wee Rup',
    'Cardinia',
    'Garfield',
    'Bunyip',
    'Lang Lang',
    'Upper Beaconsfield',
    'Cockatoo',
    'Cora Lynn',
    'Pakenham Upper',
    'Pakenham East',
    'Rythdale',
  ],
  address: {
    '@type': 'PostalAddress',
    addressLocality: 'Melbourne',
    addressRegion: 'VIC',
    addressCountry: 'AU',
  },
  serviceType: [
    'Tree removal',
    'Tree lopping',
    'Tree pruning',
    'Stump grinding',
    'Land clearing',
    'Emergency tree services',
  ],
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={inter.className}>
        {/* JSON-LD local business schema for SEO */}
        <Script
          id="local-business-schema"
          type="application/ld+json"
          strategy="afterInteractive"
        >
          {JSON.stringify(localBusinessSchema)}
        </Script>

        {children}
      </body>
    </html>
  )
}
