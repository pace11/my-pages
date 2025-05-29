import './globals.css'
import type { Metadata } from 'next'
import { Roboto } from 'next/font/google'
import Layout from '@/components/layout'

const roboto = Roboto({
  subsets: ['latin'],
  weight: ['300', '400', '500', '700', '900'],
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'Muhammad Iriansyah - Software Engineer Portfolio',
  description:
    'Discover the portfolio of Muhammad Iriansyah, a skilled Software Engineer with 5+ years of experience in building web applications using modern technologies like React, Next.js, Typescript and Golang.',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <link rel="shortcut icon" href="/favicon.png" type="image/png" />
      </head>
      <body className={roboto.className}>
        <Layout>{children}</Layout>
      </body>
    </html>
  )
}
