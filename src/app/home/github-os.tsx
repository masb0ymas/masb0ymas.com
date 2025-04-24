/* eslint-disable @next/next/no-img-element */
import Link from 'next/link'
import { Button } from '~/components/ui/button'

const reviews = [
  {
    id: 1,
    title: 'express-api-typeorm',
    repository_url: 'https://github.com/masb0ymas/express-api-typeorm',
    gsr_url:
      'https://grs.masb0ymas.com/api/pin/?username=masb0ymas&repo=express-api-typeorm&theme=vue-dark',
  },
  {
    id: 2,
    title: 'express-api-sequelize',
    repository_url: 'https://github.com/masb0ymas/express-api-sequelize',
    gsr_url:
      'https://grs.masb0ymas.com/api/pin/?username=masb0ymas&repo=express-api-sequelize&theme=vue-dark',
  },
  {
    id: 3,
    title: 'express-api',
    repository_url: 'https://github.com/masb0ymas/express-api',
    gsr_url:
      'https://grs.masb0ymas.com/api/pin/?username=masb0ymas&repo=express-api&theme=vue-dark',
  },
  {
    id: 4,
    title: 'gofi',
    repository_url: 'https://github.com/masb0ymas/gofi',
    gsr_url: 'https://grs.masb0ymas.com/api/pin/?username=masb0ymas&repo=gofi&theme=vue-dark',
  },
  {
    id: 5,
    title: 'create-expressjs-starterkit',
    repository_url: 'https://github.com/masb0ymas/create-expressjs-starterkit',
    gsr_url:
      'https://grs.masb0ymas.com/api/pin/?username=masb0ymas&repo=create-expressjs-starterkit&theme=vue-dark',
  },
  {
    id: 6,
    title: 'go-utils',
    repository_url: 'https://github.com/masb0ymas/go-utils',
    gsr_url: 'https://grs.masb0ymas.com/api/pin/?username=masb0ymas&repo=go-utils&theme=vue-dark',
  },
]

export default function GithubOS() {
  return (
    <section className="px-4 py-10 md:px-6 lg:py-20">
      <div className="mx-auto max-w-4xl">
        <h2 className="mb-6 text-center text-2xl font-bold lg:mb-10 lg:text-4xl">
          Github Open Source
        </h2>
      </div>

      <div className="mx-auto flex max-w-7xl flex-col gap-4">
        <div className="grid grid-cols-3 gap-4">
          {reviews.map((review) => (
            <div
              key={review.id}
              className="col-span-full flex flex-col items-center gap-2 lg:col-span-1"
            >
              <img className="w-full" alt={review.title} src={review.gsr_url} />
            </div>
          ))}
        </div>

        <div className="flex items-center justify-center">
          <Link href="https://github.com/masb0ymas" target="_blank" rel="noopener noreferrer">
            <Button variant="outline" className="px-6 font-semibold">
              See more
            </Button>
          </Link>
        </div>
      </div>
    </section>
  )
}
