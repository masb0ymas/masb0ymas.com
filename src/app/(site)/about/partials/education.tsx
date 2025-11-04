import Link from 'next/link'
import React from 'react'
import SectionTitle from '~/components/common/section-title'
import { Separator } from '~/components/ui/separator'
import educationJson from '~/data/education.json'

export default function Education() {
  const educations = educationJson.data

  return (
    <section className="mx-auto max-w-7xl px-4 py-10 md:px-6 lg:py-20">
      <SectionTitle
        title="Education"
        subtitle="& Learning"
        description="Formal and non-formal educational journey that shaped technical foundations and character"
      />

      <div className="mt-10 flex flex-col gap-4">
        {educations.map((education, index) => (
          <React.Fragment key={index}>
            <div className="col-span-full flex flex-col gap-2 lg:col-span-6">
              <Link href={education.url} className="space-y-2">
                <div className="flex flex-row items-start justify-between">
                  <div className="flex flex-col">
                    <h2 className="text-xl font-bold text-neutral-800 dark:text-white">
                      {education.title}
                    </h2>
                    <h4 className="text-base text-neutral-600 dark:text-neutral-200">
                      {education.subtitle}
                      <span className="text-muted-foreground/80"> - {education.highlights}</span>
                    </h4>
                  </div>

                  <p className="text-base font-semibold text-neutral-800 dark:text-white">
                    {education.duration}
                  </p>
                </div>
              </Link>
            </div>

            {index !== educations.length - 1 && <Separator className="my-4" />}
          </React.Fragment>
        ))}
      </div>
    </section>
  )
}
