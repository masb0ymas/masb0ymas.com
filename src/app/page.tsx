import MainLayout from '~/components/layouts/main'
import CTA from './home/cta'
import GithubOS from './home/github-os'
import Hero from './home/hero'
import FeaturedBlog from './home/blog'

export default function Home() {
  return (
    <MainLayout>
      {/* Hero Section */}
      <Hero />

      {/* Featured Blog */}
      <FeaturedBlog />

      {/* Github Section */}
      <GithubOS />

      {/* CTA Section */}
      <CTA />
    </MainLayout>
  )
}
