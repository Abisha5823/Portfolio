import type { Metadata } from 'next'
import { Inter, Poppins, Space_Grotesk } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'], variable: '--font-inter' })
const poppins = Poppins({ 
  weight: ['400', '500', '600', '700'],
  subsets: ['latin'],
  variable: '--font-poppins'
})
const spaceGrotesk = Space_Grotesk({ 
  subsets: ['latin'],
  variable: '--font-space'
})

export const metadata: Metadata = {
  title: 'Abisha B - AI & Data Science Portfolio',
  description: 'Full Stack Developer, AI Solutions Builder, and Mobile Developer showcasing innovative projects',
  keywords: 'AI, Data Science, Full Stack Developer, React Native, Next.js, Portfolio',
  authors: [{ name: 'Abisha B' }],
  openGraph: {
    title: 'Abisha B - AI & Data Science Portfolio',
    description: 'Full Stack Developer & AI Solutions Builder',
    url: 'https://abisha-portfolio.vercel.app',
    siteName: 'Abisha B Portfolio',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Abisha B Portfolio',
      },
    ],
    type: 'website',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={`${inter.variable} ${poppins.variable} ${spaceGrotesk.variable}`}>
      <body className={inter.className}>{children}</body>
    </html>
  )
}