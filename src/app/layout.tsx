import type { Metadata } from 'next'
import { Nunito_Sans } from 'next/font/google'
import DecoratorProvider from '~/lib/provider/decorator'
import './globals.css'

const NunitoSans = Nunito_Sans({
  variable: '--font-nunito-sans',
  subsets: ['latin'],
})

export const metadata: Metadata = {
  title: 'Web Masb0ymas',
  description: 'Web Masb0ymas',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${NunitoSans.variable} antialiased`}>
        <DecoratorProvider>{children}</DecoratorProvider>
      </body>
    </html>
  )
}
