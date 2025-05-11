import React from 'react'
import { CardProjectLeft, CardProjectRight } from '~/components/custom/card-project'
import SeeMore from '~/components/custom/see-more'
import { Separator } from '~/components/ui/separator'
import projectJson from '~/data/projects.json'

export default function FeaturedProjects() {
  const projects = projectJson.projects.slice(0, 4)

  return (
    <section className="mx-auto max-w-7xl px-4 py-10 md:px-6 lg:py-20">
      <div className="flex flex-col gap-2">
        <h2 className="text-3xl font-bold text-neutral-800 lg:text-5xl dark:text-white">
          Featured <span className="dark:text-primary-100 text-primary-200">Projects</span>
        </h2>
        <p className="text-sm text-neutral-600 lg:text-lg dark:text-neutral-200">
          Some projects I&apos;ve created and open source projects
        </p>
      </div>

      <div className="mt-10 flex flex-col gap-4">
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

      <div className="mt-10 flex items-center justify-center">
        <SeeMore label="See more projects" link="/project" />
      </div>
    </section>
  )
}
