import { IconBolt, IconCalendar, IconTarget, IconUsers } from '@tabler/icons-react'
import React from 'react'
import SectionTitle from '~/components/common/section-title'
import { Separator } from '~/components/ui/separator'
import experienceJson from '~/data/experience.json'
import CardExperience from '../components/card-experience'
import CardHighlight from '../components/card-highlight'
import Company from '../components/company'

export default function Experience() {
  const experiences = experienceJson.data

  return (
    <section className="mx-auto max-w-7xl px-4 py-10 md:px-6 lg:py-20">
      <SectionTitle
        title="Professional"
        subtitle="Experience"
        description="Detailed career journey and achievements."
      />

      <div className="mt-10 flex flex-col gap-4">
        {experiences.map((experience, index) => (
          <React.Fragment key={index}>
            <div className="grid grid-cols-10 gap-4">
              <div className="col-span-full flex flex-col gap-2 lg:col-span-4">
                <Company
                  company={experience.company}
                  position={experience.position}
                  location={experience.location}
                  employeeType={experience.employee_type}
                  description={experience.description}
                />
              </div>

              <div className="col-span-full flex flex-col gap-2 lg:col-span-6">
                <div className="grid grid-cols-3 gap-4">
                  <div className="col-span-1">
                    <CardExperience
                      title="Duration"
                      description={experience.duration}
                      icon={<IconCalendar className="h-4 w-4 items-center" />}
                    />
                  </div>

                  <div className="col-span-1">
                    <CardExperience
                      title="Team Size"
                      description={experience.team}
                      icon={<IconUsers className="h-4 w-4 items-center" />}
                    />
                  </div>

                  <div className="col-span-1">
                    <CardExperience
                      title="Project"
                      description={experience.project}
                      icon={<IconTarget className="h-4 w-4 items-center" />}
                    />
                  </div>
                </div>

                <div className="text-muted-foreground my-4 flex flex-row items-center gap-2">
                  <div className="rounded-sm bg-neutral-100 p-1 dark:bg-neutral-800">
                    <IconBolt className="h-4 w-4 items-center" />
                  </div>
                  <p className="text-sm">Key Highlights</p>
                </div>

                <div className="space-y-4">
                  {experience.highlights.map((highlight, index) => (
                    <CardHighlight key={index} content={highlight} />
                  ))}
                </div>

                <div className="text-muted-foreground my-4 flex flex-row items-center gap-2">
                  <p className="text-sm">Show more...</p>
                </div>
              </div>
            </div>

            {index !== experiences.length - 1 && <Separator className="my-6" />}
          </React.Fragment>
        ))}
      </div>
    </section>
  )
}
