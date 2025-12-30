'use client'

/* eslint-disable @next/next/no-img-element */
import Link from 'next/link'
import { useTheme } from 'next-themes'

import SectionTitle from '~/components/common/section-title'
import SeeMore from '~/components/common/see-more'
import { useMemo } from 'react'

export default function GithubOS() {
  const { theme } = useTheme()

  const lightTheme =
    'title_color=535862&text_color=252B37&border_color=fb923c&icon_color=fb923c&border_radius=10'
  const darkTheme =
    'bg_color=181D27&title_color=fb923c&text_color=FAFAFA&border_color=535862&icon_color=fb923c&border_radius=10'

  const currentThemes = useMemo(() => {
    return theme === 'light' ? lightTheme : darkTheme
  }, [theme])

  const reviews = [
    {
      id: 1,
      title: 'express-api-typeorm',
      repository_url: 'https://github.com/masb0ymas/express-api-typeorm',
      gsr_url: `https://grs.masb0ymas.com/api/pin/?username=masb0ymas&repo=express-api-typeorm&${currentThemes}`,
    },
    {
      id: 2,
      title: 'express-api-sequelize',
      repository_url: 'https://github.com/masb0ymas/express-api-sequelize',
      gsr_url: `https://grs.masb0ymas.com/api/pin/?username=masb0ymas&repo=express-api-sequelize&${currentThemes}`,
    },
    {
      id: 3,
      title: 'express-api',
      repository_url: 'https://github.com/masb0ymas/express-api',
      gsr_url: `https://grs.masb0ymas.com/api/pin/?username=masb0ymas&repo=express-api&${currentThemes}`,
    },
    {
      id: 4,
      title: 'gofi',
      repository_url: 'https://github.com/masb0ymas/gofi',
      gsr_url: `https://grs.masb0ymas.com/api/pin/?username=masb0ymas&repo=gofi&${currentThemes}`,
    },
    {
      id: 5,
      title: 'gintama',
      repository_url: 'https://github.com/masb0ymas/gintama',
      gsr_url: `https://grs.masb0ymas.com/api/pin/?username=masb0ymas&repo=gintama&${currentThemes}`,
    },
    {
      id: 6,
      title: 'audiopintar',
      repository_url: 'https://github.com/masb0ymas/audiopintar',
      gsr_url: `https://grs.masb0ymas.com/api/pin/?username=masb0ymas&repo=audiopintar&${currentThemes}`,
    },
  ]

  return (
    <section className="mx-auto max-w-7xl px-4 py-10 md:px-6 lg:py-20">
      <SectionTitle
        title="Github"
        subtitle="Open Source"
        description="Some open source I've created"
      />

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
