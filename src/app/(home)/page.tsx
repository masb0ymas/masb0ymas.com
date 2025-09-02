import MainLayout from '~/components/layouts/main'
import Benefit from './partials/benefit'
import FeaturedPosts from './partials/blog'
import CTA from './partials/cta'
import GithubOS from './partials/github-os'
import Hero from './partials/hero'
import FeaturedProjects from './partials/project'

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
