/* eslint-disable react-hooks/exhaustive-deps */
'use client'

import { useDebounce } from '@uidotdev/usehooks'
import Fuse from 'fuse.js'
import { useEffect, useMemo, useState } from 'react'

import { Input } from '~/components/ui/input'
import { Separator } from '~/components/ui/separator'
import { Project } from '~/types/project'

import { useProjectContext } from './context'

export default function Hero() {
  const { projects, updateProjects, resetProjects } = useProjectContext()
  const [project, setProject] = useState('')
  const debouncedSearch = useDebounce(project, 300)

  // Memoize the fuseOptions to prevent recreation on each render
  const fuseOptions = useMemo(() => ({ keys: ['title', 'description', 'tags'] }), [])

  useEffect(() => {
    if (debouncedSearch.trim() === '') {
      resetProjects()
      return
    }

    if (debouncedSearch) {
      const searchResult = new Fuse(projects, fuseOptions).search(debouncedSearch)

      const filteredProjects: Project[] = searchResult.map((result) => result.item)
      updateProjects(filteredProjects)
    }
  }, [debouncedSearch])

  return (
    <section className="px-4 py-10 md:px-6 lg:pt-40">
      <div className="mx-auto max-w-7xl">
        <div className="flex flex-col items-center justify-center gap-2">
          <h2 className="text-3xl font-bold text-neutral-800 lg:text-5xl dark:text-white">
            Project
          </h2>
          <p className="text-sm text-neutral-600 lg:text-lg dark:text-neutral-200">
            My thoughts and experiences on software development and web technologies
          </p>
        </div>

        <div className="mx-auto mt-4 max-w-xl">
          <Input
            type="text"
            placeholder="Search projects..."
            onChange={(e) => setProject(e.target.value)}
          />
        </div>
      </div>

      <Separator className="mt-10" />
    </section>
  )
}
