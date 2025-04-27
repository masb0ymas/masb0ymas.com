import MainLayout from '~/components/layouts/main'
import Benefit from './home/benefit'
import FeaturedPosts from './home/blog'
import CTA from './home/cta'
import GithubOS from './home/github-os'
import Hero from './home/hero'
import FeaturedProjects from './home/project'

export default function Home() {
  return (
    <MainLayout>
      {/* Hero Section */}
      <Hero />

      {/* Benefit Section */}
      <Benefit />

      {/* Featured Post */}
      <FeaturedPosts />

      {/* Featured Project */}
      <FeaturedProjects />

      {/* Github Section */}
      <GithubOS />

      {/* CTA Section */}
      <CTA />
    </MainLayout>
  )
}
