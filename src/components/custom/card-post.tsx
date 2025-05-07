import Image from 'next/image'
import Link from 'next/link'
import { formatLocalDate } from '~/lib/date'
import { Post } from '~/types/post'
import { Badge } from '../ui/badge'

export default function CardPost({ thumbnail, title, description, slug, date, tags }: Post) {
  return (
    <div className="grid grid-cols-8 items-center gap-4">
      <Link href={slug} className="col-span-full flex lg:col-span-2 lg:hidden">
        <Image
          quality={100}
          src={thumbnail}
          alt={title}
          width={200}
          height={200}
          className="w-full rounded-lg object-cover lg:w-auto"
        />
      </Link>

      <div className="col-span-full flex flex-col gap-2 lg:col-span-6">
        <time dateTime={date} className="text-sm text-neutral-600 dark:text-neutral-400">
          {formatLocalDate(date, 'dd MMM yyyy')}
        </time>

        <Link href={slug} className="flex flex-col gap-2">
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
          width={200}
          height={200}
          className="w-full rounded-lg object-cover lg:w-auto"
        />
      </Link>
    </div>
  )
}
