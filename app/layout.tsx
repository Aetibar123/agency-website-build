import type { Metadata, Viewport } from 'next'
import { Plus_Jakarta_Sans } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import './globals.css'

const plusJakarta = Plus_Jakarta_Sans({ 
  subsets: ["latin"],
  variable: '--font-sans',
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'Aetibar | Premium Software Development & Digital Marketing Agency',
  description: 'We build scalable digital products and growth systems. Custom web apps, mobile apps, AI solutions, branding, SEO, and performance marketing for startups and enterprises.',
  keywords: ['software development', 'digital marketing', 'web development', 'mobile apps', 'AI solutions', 'SEO', 'branding'],
  authors: [{ name: 'Aetibar' }],
  openGraph: {
    title: 'Aetibar | Premium Software Development & Digital Marketing Agency',
    description: 'We build scalable digital products and growth systems.',
    type: 'website',
  },
}

export const viewport: Viewport = {
  themeColor: '#050816',
  width: 'device-width',
  initialScale: 1,
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className="dark bg-background">
      <body className={`${plusJakarta.variable} font-sans antialiased`}>
        {children}
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}
