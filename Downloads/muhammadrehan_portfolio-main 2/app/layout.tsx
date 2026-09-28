import type { Metadata, Viewport } from 'next'
import { Inter, Space_Grotesk } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import './globals.css'

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
})

const spaceGrotesk = Space_Grotesk({
  subsets: ['latin'],
  variable: '--font-space-grotesk',
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'Muhammad Rehan Saleem — UI/UX Designer & Digital Professional',
  description:
    'Portfolio of Muhammad Rehan Saleem — UI/UX Designer, Graphic Designer, Digital Marketer, and MERN Full-Stack Developer designing user-centered digital experiences.',
  generator: 'v0.app',
  keywords: [
    'UI/UX Designer',
    'Graphic Designer',
    'Digital Marketer',
    'MERN Developer',
    'Product Designer',
    'Muhammad Rehan Saleem',
  ],
  authors: [{ name: 'Muhammad Rehan Saleem' }],
  openGraph: {
    title: 'Muhammad Rehan Saleem — UI/UX Designer & Digital Professional',
    description:
      'Designing digital experiences that look great, work seamlessly, and deliver real value.',
    type: 'website',
  },
}

export const viewport: Viewport = {
  colorScheme: 'dark',
  themeColor: '#28281f',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className={`${inter.variable} ${spaceGrotesk.variable}`}>
      <body className="font-sans antialiased">
        {children}
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}
