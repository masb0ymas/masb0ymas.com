import React from 'react'

interface CardExperienceProps {
  title: string
  description: string
  icon: React.ReactNode
}

export default function CardExperience({ title, description, icon }: CardExperienceProps) {
  return (
    <div className="border-primary-100/80 bg-neutral-25 relative rounded-sm border-[0.5px] shadow-[4px_4px_0px_0px_rgba(251,146,60,1)] transition-all duration-300 hover:shadow-[2px_2px_0px_0px_rgba(251,146,60,1)] dark:border-neutral-600 dark:bg-neutral-900 dark:shadow-[4px_4px_0px_0px_rgba(164,167,174,1)] dark:hover:shadow-[2px_2px_0px_0px_rgba(164,167,174,1)]">
      <div className="flex h-full flex-grow flex-col gap-2 p-4">
        <div className="text-muted-foreground flex flex-row items-center gap-2">
          <div className="rounded-sm dark:bg-neutral-800 bg-neutral-100 p-1">{icon}</div>

          <p className="text-sm">{title}</p>
        </div>
        <p className="font-semibold">{description}</p>
      </div>
    </div>
  )
}
