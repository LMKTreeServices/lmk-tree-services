// app/layout.tsx
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: {
    default: 'LMK Tree Services | Tree Removal & Lopping Melbourne South-East',
    template: '%s | LMK Tree Services',
  },
  description:
    "LMK Tree Services provides professional tree removal, lopping, pruning, stump grinding and land clearing across Melbourne's south-east including Pakenham, Berwick, Beaconsfield, Officer, Narre Warren, Clyde, Cranbourne and surrounding suburbs.",
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
    title: 'LMK Tree Services | Tree Removal & Lopping Melbourne South-East',
    description:
      "Fast, safe and fully insured tree removal, pruning, stump grinding and lopping across Melbourne's south-east including Pakenham, Berwick, Officer, Narre Warren and Clyde.",
    url: 'https://lmktreeservices.com.au',
    siteName: 'LMK Tree Services',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'LMK Tree Services | Tree Removal & Lopping Melbourne South-East',
    description:
      "Professional tree removal, lopping, pruning and stump grinding across Melbourne's south-east.",
  },
  icons: {
    icon: '/favicon.ico',
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
      <head>
        <script
          type="application/ld+json"
          // JSON-LD must be a plain string
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(localBusinessSchema),
          }}
        />
      </head>
      <body className={inter.className}>{children}</body>
    </html>
  )
}
