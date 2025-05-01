import React from 'react'
import { Input } from '~/components/ui/input'
import { Separator } from '~/components/ui/separator'

export default function Hero() {
  return (
    <section className="px-4 py-10 md:px-6 lg:pt-40">
      <div className="mx-auto max-w-7xl">
        <div className="flex flex-col items-center justify-center gap-2">
          <h2 className="text-3xl font-bold text-neutral-800 lg:text-5xl dark:text-white">Project</h2>
          <p className="text-sm text-neutral-600 lg:text-lg dark:text-neutral-200">
            My thoughts and experiences on software development and web technologies
          </p>
        </div>

        <div className="mx-auto mt-4 max-w-xl">
          <Input type="text" placeholder="Search projects..." />
        </div>
      </div>

      <Separator className="mt-10" />
    </section>
  )
}
