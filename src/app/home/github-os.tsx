'use client'

/* eslint-disable @next/next/no-img-element */
import { useTheme } from 'next-themes'
import Link from 'next/link'
import SeeMore from '~/components/custom/see-more'

export default function GithubOS() {
  const { theme } = useTheme()

  const lightTheme =
    'title_color=535862&text_color=252B37&border_color=fb923c&icon_color=fb923c&border_radius=10'
  const darkTheme =
    'bg_color=181D27&title_color=fb923c&text_color=FAFAFA&border_color=535862&icon_color=fb923c&border_radius=10'

  const reviews = [
    {
      id: 1,
      title: 'express-api-typeorm',
      repository_url: 'https://github.com/masb0ymas/express-api-typeorm',
      gsr_url: `https://grs.masb0ymas.com/api/pin/?username=masb0ymas&repo=express-api-typeorm&${theme === 'dark' ? darkTheme : lightTheme}`,
    },
    {
      id: 2,
      title: 'express-api-sequelize',
      repository_url: 'https://github.com/masb0ymas/express-api-sequelize',
      gsr_url: `https://grs.masb0ymas.com/api/pin/?username=masb0ymas&repo=express-api-sequelize&${theme === 'dark' ? darkTheme : lightTheme}`,
    },
    {
      id: 3,
      title: 'express-api',
      repository_url: 'https://github.com/masb0ymas/express-api',
      gsr_url: `https://grs.masb0ymas.com/api/pin/?username=masb0ymas&repo=express-api&${theme === 'dark' ? darkTheme : lightTheme}`,
    },
    {
      id: 4,
      title: 'gofi',
      repository_url: 'https://github.com/masb0ymas/gofi',
      gsr_url: `https://grs.masb0ymas.com/api/pin/?username=masb0ymas&repo=gofi&${theme === 'dark' ? darkTheme : lightTheme}`,
    },
    {
      id: 5,
      title: 'create-expressjs-starterkit',
      repository_url: 'https://github.com/masb0ymas/create-expressjs-starterkit',
      gsr_url: `https://grs.masb0ymas.com/api/pin/?username=masb0ymas&repo=create-expressjs-starterkit&${theme === 'dark' ? darkTheme : lightTheme}`,
    },
    {
      id: 6,
      title: 'go-utils',
      repository_url: 'https://github.com/masb0ymas/go-utils',
      gsr_url: `https://grs.masb0ymas.com/api/pin/?username=masb0ymas&repo=go-utils&${theme === 'dark' ? darkTheme : lightTheme}`,
    },
  ]

  return (
    <section className="mx-auto max-w-7xl px-4 py-10 md:px-6 lg:py-20">
      <div className="flex flex-col gap-2">
        <h2 className="text-3xl font-bold text-neutral-800 lg:text-5xl dark:text-white">
          Github <span className="dark:text-primary-100 text-primary-200">Open Source</span>
        </h2>
        <p className="text-sm text-neutral-600 lg:text-lg dark:text-neutral-200">
          Some open source I&apos;ve created
        </p>
      </div>

      <div className="mt-10 flex flex-col gap-4">
        <div className="grid grid-cols-3 gap-4">
          {reviews.map((review) => (
            <Link
              key={review.id}
              href={review.repository_url}
              target="_blank"
              rel="noopener noreferrer"
              className="col-span-full flex flex-col items-center gap-2 lg:col-span-1"
            >
              <img className="w-full" alt={review.title} src={review.gsr_url} />
            </Link>
          ))}
        </div>

        <div className="mt-4 flex items-center justify-center">
          <SeeMore label="See more open source" link="https://github.com/masb0ymas" />
        </div>
      </div>
    </section>
  )
}
