import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
// @ts-ignore No type declarations needed for global CSS import
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Abisha B - AI & Data Science Student | Full Stack Developer',
  description: 'Portfolio of Abisha B - AI Solutions Builder, Full Stack Developer showcasing projects like Anbu Enterprises Website, AI Business Chatbot, and BizAI SaaS Platform',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  )
}