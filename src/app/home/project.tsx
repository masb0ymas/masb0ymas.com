import Image from 'next/image'
import Link from 'next/link'

const projects = [
  {
    title: 'Moneyflow ID',
    description: 'Description 1',
    thumbnail: '/static/project/moneyflow-id.webp',
    date: '2024-11-04',
    tags: ['Docker', 'CI/CD', 'GitHub Actions'],
    link: '/project/moneyflow-id',
  },
  {
    title: 'DeFi Calculator',
    description: 'Description 1',
    thumbnail: '/static/project/defi-calculator.webp',
    date: '2024-11-04',
    tags: ['Docker', 'CI/CD', 'GitHub Actions'],
    link: '/project/defi-calculator',
  },
]

export default function FeaturedProjects() {
  return (
    <section className="px-4 py-10 md:px-6 lg:py-20">
      <div className="mx-auto max-w-7xl">
        <div className="flex flex-col gap-2">
          <h2 className="text-3xl font-bold text-neutral-800 lg:text-5xl dark:text-white">
            Featured <span className="text-primary-200 dark:text-primary-100">Projects</span>
          </h2>
          <p className="text-sm text-neutral-600 lg:text-lg dark:text-neutral-200">
            Some projects I&apos;ve created and open source projects
          </p>
        </div>

        <div className="mt-10 flex flex-col gap-4">
          {projects.map((project, index) => (
            <div className="grid grid-cols-8 gap-4 lg:gap-6" key={project.title}>
              {index % 2 === 0 ? (
                <CardProjectLeft {...project} />
              ) : (
                <CardProjectRight {...project} />
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

type CardProjectProps = {
  thumbnail: string
  title: string
  description: string
  link: string
}

function CardProjectLeft({ thumbnail, title, description, link }: CardProjectProps) {
  return (
    <>
      <div className="col-span-full lg:col-span-2">
        <Image
          quality={100}
          src={thumbnail}
          alt={title}
          width={300}
          height={300}
          className="w-full rounded-lg object-cover lg:w-auto"
        />
      </div>
      <div className="col-span-full flex flex-col gap-2 lg:col-span-6">
        <h3 className="text-xl font-bold text-neutral-800 dark:text-white">
          <Link href={link}>{title}</Link>
        </h3>
        <p className="text-base text-neutral-600 dark:text-neutral-400">{description}</p>
      </div>
    </>
  )
}

function CardProjectRight({ thumbnail, title, description, link }: CardProjectProps) {
  return (
    <>
      <div className="col-span-full flex flex-col gap-2 lg:col-span-6">
        <h3 className="text-xl font-bold text-neutral-800 dark:text-white">
          <Link href={link}>{title}</Link>
        </h3>
        <p className="text-base text-neutral-600 dark:text-neutral-400">{description}</p>
      </div>
      <div className="col-span-full lg:col-span-2">
        <Image
          quality={100}
          src={thumbnail}
          alt={title}
          width={300}
          height={300}
          className="w-full rounded-lg object-cover lg:w-auto"
        />
      </div>
    </>
  )
}
