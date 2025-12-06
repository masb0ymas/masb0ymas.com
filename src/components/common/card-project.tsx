import Image from 'next/image'
import Link from 'next/link'

import { Project } from '~/types/project'

import { Badge } from '../ui/badge'

export function CardProjectLeft({ thumbnail, title, description, slug, tags }: Project) {
  return (
    <>
      <Link href={slug} className="col-span-full lg:col-span-2">
        <Image
          quality={100}
          src={thumbnail}
          alt={title}
          width={300}
          height={300}
          className="w-full rounded-lg object-cover lg:w-auto"
        />
      </Link>

      <div className="col-span-full flex flex-col gap-2 lg:col-span-6">
        <Link href={slug} className="space-y-2">
          <h3 className="text-xl font-bold text-neutral-800 dark:text-white">{title}</h3>
          <p className="text-base text-neutral-600 dark:text-neutral-400">{description}</p>
        </Link>

        <div className="mt-2 flex flex-row gap-2">
          {tags.map((tag) => (
            <Badge
              key={tag}
              variant="outline"
              className="border-primary-200 dark:border-primary-100 text-primary-200 dark:text-primary-100 cursor-pointer"
            >
              {tag}
            </Badge>
          ))}
        </div>
      </div>
    </>
  )
}

export function CardProjectRight({ thumbnail, title, description, slug, tags }: Project) {
  return (
    <>
      <Link href={slug} className="col-span-full flex lg:col-span-2 lg:hidden">
        <Image
          quality={100}
          src={thumbnail}
          alt={title}
          width={300}
          height={300}
          className="w-full rounded-lg object-cover lg:w-auto"
        />
      </Link>

      <div className="col-span-full flex flex-col gap-2 lg:col-span-6">
        <Link href={slug} className="space-y-2">
          <h3 className="text-xl font-bold text-neutral-800 dark:text-white">{title}</h3>
          <p className="text-base text-neutral-600 dark:text-neutral-400">{description}</p>
        </Link>

        <div className="mt-2 flex flex-row gap-2">
          {tags.map((tag) => (
            <Badge
              key={tag}
              variant="outline"
              className="border-primary-200 dark:border-primary-100 text-primary-200 dark:text-primary-100 cursor-pointer"
            >
              {tag}
            </Badge>
          ))}
        </div>
      </div>

      <Link href={slug} className="col-span-full hidden lg:col-span-2 lg:flex">
        <Image
          quality={100}
          src={thumbnail}
          alt={title}
          width={300}
          height={300}
          className="w-full rounded-lg object-cover lg:w-auto"
        />
      </Link>
    </>
  )
}
