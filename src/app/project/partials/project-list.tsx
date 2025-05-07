'use client'

import { CardProjectLeft, CardProjectRight } from '~/components/custom/card-project'
import { useProjectContext } from './context'

export default function ProjectList() {
  const { projects } = useProjectContext()

  return (
    <section className="mx-auto max-w-7xl px-4 pb-10 md:px-6 lg:pb-20">
      <div className="mt-10 flex flex-col gap-4 lg:gap-8">
        {projects.map((project, index) => (
          <div className="grid grid-cols-8 gap-4 lg:gap-6" key={project.title}>
            {index % 2 === 0 ? <CardProjectLeft {...project} /> : <CardProjectRight {...project} />}
          </div>
        ))}
      </div>
    </section>
  )
}
