// app/layout.tsx
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'LMK Tree Services | Professional Tree Removal & Lopping Melbourne',
  description:
    "Melbourne's trusted tree service provider. Expert tree removal, lopping, pruning, and stump removal. Fully insured, safe, and reliable. Get your free consultation today.",
  keywords:
    'tree removal, tree lopping, tree services, arborist, Melbourne, tree pruning, stump removal',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={inter.className}>{children}</body>
    </html>
  )
}
