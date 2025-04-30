import Image from 'next/image'
import Link from 'next/link'

type CardProjectProps = {
  thumbnail: string
  title: string
  description: string
  slug: string
}

export function CardProjectLeft({ thumbnail, title, description, slug }: CardProjectProps) {
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

      <Link href={slug} className="col-span-full flex flex-col gap-2 lg:col-span-6">
        <h3 className="text-xl font-bold text-neutral-800 dark:text-white">{title}</h3>
        <p className="text-base text-neutral-600 dark:text-neutral-400">{description}</p>
      </Link>
    </>
  )
}

export function CardProjectRight({ thumbnail, title, description, slug }: CardProjectProps) {
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

      <Link href={slug} className="col-span-full flex flex-col gap-2 lg:col-span-6">
        <h3 className="text-xl font-bold text-neutral-800 dark:text-white">{title}</h3>
        <p className="text-base text-neutral-600 dark:text-neutral-400">{description}</p>
      </Link>

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
