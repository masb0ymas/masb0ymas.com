import { PropsWithChildren } from 'react'
import Footer from './footer'
import Navbar from './navbar'

type MainLayoutProps = PropsWithChildren

export default function MainLayout({ children }: MainLayoutProps) {
  return (
    <>
      <Navbar />
      <main className="pt-20">{children}</main>
      <Footer />
    </>
  )
}
