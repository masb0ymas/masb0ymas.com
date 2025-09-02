import './globals.css'

import type { Metadata } from 'next'
import { Nunito_Sans } from 'next/font/google'
import DecoratorProvider from '~/lib/provider/decorator'

const NunitoSans = Nunito_Sans({
  variable: '--font-nunito-sans',
  subsets: ['latin'],
})

const metaTitle = `masb0ymas - all about me and my journey including, personal, blog, projects, and more`
const metaDescription = `Explore my blog for in-depth articles, tutorials, and insights on technology, web development, AI, and Web3. Learn from my experiences as I share practical knowledge and solutions from my development journey.`
const metaImage = '/static/images/thumbnail.png'
const metaURL = 'https://masb0ymas.com'
const siteName = 'masb0ymas'

export const metadata: Metadata = {
  title: metaTitle,
  description: metaDescription,
  authors: [{ name: siteName, url: metaURL }],
  keywords: ['Tech', 'Web', 'AI', 'Web3', 'masb0ymas', 'masb0ymas blog'],
  openGraph: {
    title: metaTitle,
    description: metaDescription,
    url: metaURL,
    siteName: siteName,
    locale: 'en_US',
    type: 'website',
    images: [metaImage],
  },
  twitter: {
    title: metaTitle,
    description: metaDescription,
    card: 'summary_large_image',
    creator: siteName,
    images: [metaImage],
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link
          rel="shortcut icon"
          sizes="16x16 24x24 32x32 48x48 64x64"
          href="/static/favicon/favicon.ico"
        />

        {/* Mobile (Android, iOS & others) */}
        <link rel="apple-touch-icon" sizes="57x57" href="/static/favicon/apple-touch-icon.png" />
        <link
          rel="apple-touch-icon-precomposed"
          sizes="57x57"
          href="/static/favicon/apple-touch-icon.png"
        />
        <link rel="apple-touch-icon" sizes="72x72" href="/static/favicon/apple-touch-icon.png" />
        <link rel="apple-touch-icon" sizes="114x114" href="/static/favicon/apple-touch-icon.png" />
        <link rel="apple-touch-icon" sizes="120x120" href="/static/favicon/apple-touch-icon.png" />
        <link rel="apple-touch-icon" sizes="144x144" href="/static/favicon/apple-touch-icon.png" />
        <link rel="apple-touch-icon" sizes="152x152" href="/static/favicon/apple-touch-icon.png" />

        <meta name="theme-color" content="#ea580c" />
        <link rel="canonical" href={metaURL} />

        {/* Windows 8 Tiles */}
        <meta name="application-name" content="masb0ymas" />
        <meta name="msapplication-TileImage" content="/static/favicon/apple-touch-icon.png" />
        <meta name="msapplication-TileColor" content="#ea580c" />

        {/* iOS Settings */}
        <meta content="yes" name="apple-mobile-web-app-capable" />
        <meta name="apple-mobile-web-app-status-bar-style" content="black-translucent" />
      </head>
      <body className={`${NunitoSans.variable} antialiased`}>
        <DecoratorProvider>{children}</DecoratorProvider>
      </body>
    </html>
  )
}
