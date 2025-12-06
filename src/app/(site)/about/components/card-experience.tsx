import React from 'react'

import { BorderBeam } from '~/components/ui/border-beam'

interface CardExperienceProps {
  title: string
  description: string
  icon: React.ReactNode
}

export default function CardExperience({ title, description, icon }: CardExperienceProps) {
  return (
    <div className="relative overflow-hidden rounded-lg border">
      <div className="flex h-full flex-grow flex-col gap-2 p-4">
        <div className="text-muted-foreground flex flex-row items-center gap-2">
          <div className="rounded-sm bg-neutral-100 p-1 dark:bg-neutral-800">{icon}</div>

          <p className="text-sm">{title}</p>
        </div>
        <p className="font-semibold">{description}</p>
      </div>

      <BorderBeam duration={10} size={50} className="from-primary-200/80 via-primary-100 to-transparent" />
      <BorderBeam duration={10} delay={5} size={50} className="from-primary-200/80 via-primary-100 to-transparent" />
    </div>
  )
}
