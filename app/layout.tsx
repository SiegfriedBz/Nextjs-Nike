import type { Metadata } from 'next'
import './globals.css'
import { Header, Footer } from '@/components'

export const metadata: Metadata = {
  metadataBase: new URL('https://nike-landing-vert.vercel.app/'),
  title: 'Nike landing',
  openGraph: {
    images: '/opengraph-image.png',
    title: 'Nike landing',
    description: 'Nike landing',
    url: `${process.env.NEXTAUTH_URL}`,
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang='en'>
      <body>
        <main className='relative'>
          <Header />
          {children}
          <Footer />
        </main>
      </body>
    </html>
  )
}
