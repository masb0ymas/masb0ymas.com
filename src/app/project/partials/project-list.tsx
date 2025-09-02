'use client'

import React from 'react'
import { CardProjectLeft, CardProjectRight } from '~/components/common/card-project'
import { Separator } from '~/components/ui/separator'
import { useProjectContext } from './context'

export default function ProjectList() {
  const { projects } = useProjectContext()

  return (
    <section className="mx-auto max-w-7xl px-4 pb-10 md:px-6 lg:pb-20">
      <div className="mt-10 flex flex-col gap-4 lg:gap-8">
        {projects.map((project, index) => (
          <React.Fragment key={project.title}>
            <div className="grid grid-cols-8 items-center gap-4 lg:gap-6">
              {index % 2 === 0 ? (
                <CardProjectLeft {...project} />
              ) : (
                <CardProjectRight {...project} />
              )}
            </div>

            {index !== projects.length - 1 && <Separator className="mt-4" />}
          </React.Fragment>
        ))}
      </div>
    </section>
  )
}
