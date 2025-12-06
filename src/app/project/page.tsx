import { Metadata } from 'next'

import { ProjectProvider } from './partials/context'
import Hero from './partials/hero'
import ProjectList from './partials/project-list'

const metaTitle = 'Project Showcase: Web, Mobile and Backend Development from My Professional Journey that I have worked including, company as i work and open source'
const metaDescription = 'Discover my project showcase featuring web, mobile, and backend development work from my professional journey. Browse projects from companies I\'ve worked with and my open-source contributions in technology, web development, AI, and Web3.'

export const metadata: Metadata = {
  title: metaTitle,
  description: metaDescription,
  keywords: ['Tech', 'Web', 'AI', 'Web3', 'masb0ymas', 'masb0ymas project'],
  openGraph: {
    title: metaTitle,
    description: metaDescription,
  },
  twitter: {
    title: metaTitle,
    description: metaDescription,
  },
}

export default function ProjectPage() {
  return (
    <ProjectProvider>
      {/* Hero Section */}
      <Hero />

      {/* Blog List */}
      <ProjectList />
    </ProjectProvider>
  )
}
