'use client'

import { createContext, useCallback, useContext, useMemo, useState } from 'react'

import projectJson from '~/data/projects.json'
import { Project } from '~/types/project'

type ProjectContextType = {
  projects: Project[]
  updateProjects: (newProjects: Project[]) => void
  resetProjects: () => void
}

const ProjectContext = createContext<ProjectContextType | undefined>(undefined)

export function ProjectProvider({ children }: { children: React.ReactNode }) {
  // Memoize allPosts to ensure it doesn't change on re-renders
  const allProjects = useMemo(() => projectJson.projects, [])
  const [projects, setProjects] = useState<Project[]>(allProjects)

  const updateProjects = useCallback((newProjects: Project[]) => {
    setProjects(newProjects)
  }, [])

  const resetProjects = useCallback(() => {
    setProjects(allProjects)
  }, [allProjects])

  // Memoize the context value to prevent unnecessary re-renders of consumers
  const contextValue = useMemo(
    () => ({
      projects,
      updateProjects,
      resetProjects,
    }),
    [projects, updateProjects, resetProjects]
  )

  return <ProjectContext.Provider value={contextValue}>{children}</ProjectContext.Provider>
}

export function useProjectContext() {
  const context = useContext(ProjectContext)

  if (!context) {
    throw new Error('useProjectContext must be used within a ProjectProvider')
  }

  return context
}
