import { ProjectProvider } from './partials/context'
import Hero from './partials/hero'
import ProjectList from './partials/project-list'

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
