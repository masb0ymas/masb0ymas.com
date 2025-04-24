import MainLayout from '~/components/layouts/main'
import CTA from './home/cta'
import GithubOS from './home/github-os'
import Hero from './home/hero'

export default function Home() {
  return (
    <MainLayout>
      {/* Hero Section */}
      <Hero />

      {/* Github Section */}
      <GithubOS />

      {/* CTA Section */}
      <CTA />
    </MainLayout>
  )
}
