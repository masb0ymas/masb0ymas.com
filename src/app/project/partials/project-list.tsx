import React from 'react'
import { CardProjectLeft, CardProjectRight } from '~/components/custom/card-project'

const projects = [
  {
    title: 'Moneyflow ID',
    description: 'Description 1',
    thumbnail: '/static/project/moneyflow-id.webp',
    date: '2024-11-04',
    tags: ['Docker', 'CI/CD', 'GitHub Actions'],
    slug: '/project/moneyflow-id',
  },
  {
    title: 'DeFi Calculator',
    description: 'Description 1',
    thumbnail: '/static/project/defi-calculator.webp',
    date: '2024-11-04',
    tags: ['Docker', 'CI/CD', 'GitHub Actions'],
    slug: '/project/defi-calculator',
  },
]

export default function ProjectList() {
  return (
    <section className="mx-auto max-w-7xl px-4 pb-10 lg:pb-20 md:px-6">
      <div className="mt-10 flex flex-col gap-4">
        {projects.map((project, index) => (
          <div className="grid grid-cols-8 gap-4 lg:gap-6" key={project.title}>
            {index % 2 === 0 ? <CardProjectLeft {...project} /> : <CardProjectRight {...project} />}
          </div>
        ))}
      </div>
    </section>
  )
}
