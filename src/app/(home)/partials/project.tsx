import React from 'react'

import { CardProjectLeft, CardProjectRight } from '~/components/common/card-project'
import SectionTitle from '~/components/common/section-title'
import SeeMore from '~/components/common/see-more'
import { Separator } from '~/components/ui/separator'
import projectJson from '~/data/projects.json'

export default function FeaturedProjects() {
  const projects = projectJson.projects.slice(0, 4)

  return (
    <section className="mx-auto max-w-7xl px-4 py-10 md:px-6 lg:py-20">
      <SectionTitle
        title="Featured"
        subtitle="Projects"
        description="Some projects I've created and open source projects"
      />

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
