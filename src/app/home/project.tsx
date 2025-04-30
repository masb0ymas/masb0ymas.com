import { CardProjectLeft, CardProjectRight } from '~/components/custom/card-project'
import SeeMore from '~/components/custom/see-more'

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

export default function FeaturedProjects() {
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
          <div className="grid grid-cols-8 gap-4 lg:gap-6" key={project.title}>
            {index % 2 === 0 ? <CardProjectLeft {...project} /> : <CardProjectRight {...project} />}
          </div>
        ))}
      </div>

      <div className="mt-10 flex items-center justify-center">
        <SeeMore label="See more projects" link="/project" />
      </div>
    </section>
  )
}
