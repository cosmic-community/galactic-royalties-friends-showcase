import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import CosmicBadge from '@/components/CosmicBadge'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Galactic Royalties - Friends Showcase',
  description: 'A luxurious showcase of extraordinary individuals and their unique talents',
  keywords: ['friends', 'showcase', 'portfolio', 'cosmic', 'luxury'],
  openGraph: {
    title: 'Galactic Royalties - Friends Showcase',
    description: 'A luxurious showcase of extraordinary individuals and their unique talents',
    type: 'website',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const bucketSlug = process.env.COSMIC_BUCKET_SLUG as string;
  
  return (
    <html lang="en">
      <body className={inter.className}>
        <script src="/dashboard-console-capture.js"></script>
        {children}
        <CosmicBadge bucketSlug={bucketSlug} />
      </body>
    </html>
  )
}