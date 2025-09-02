import React from 'react'

interface SectionTitleProps {
  title: string
  subtitle: string
  description: string
}

export default function SectionTitle({ title, subtitle, description }: SectionTitleProps) {
  return (
    <div className="flex flex-col gap-2">
      <h2 className="text-3xl font-bold text-neutral-800 lg:text-5xl dark:text-white">
        {title} <span className="dark:text-primary-100 text-primary-200">{subtitle}</span>
      </h2>
      <p className="text-sm text-neutral-600 lg:text-lg dark:text-neutral-200">{description}</p>
    </div>
  )
}
