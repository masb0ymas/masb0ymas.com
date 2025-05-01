import CardPost from '~/components/custom/card-post'
import SeeMore from '~/components/custom/see-more'
import { Separator } from '~/components/ui/separator'
import { posts } from '~/data/posts.json'

export default function FeaturedPosts() {
  return (
    <section className="mx-auto max-w-7xl px-4 py-10 md:px-6 lg:py-20">
      <div className="flex flex-col gap-2">
        <h2 className="text-3xl font-bold text-neutral-800 lg:text-5xl dark:text-white">
          Featured <span className="dark:text-primary-100 text-primary-200">Posts</span>
        </h2>
        <p className="text-sm text-neutral-600 lg:text-lg dark:text-neutral-200">
          Some articles I&apos;ve written
        </p>
      </div>

      <div className="mt-10 flex flex-col gap-4">
        {posts.slice(0, 3).map((post, index) => (
          <div key={index}>
            <CardPost {...post} />
            {index !== posts.length - 1 && <Separator className="mt-4" />}
          </div>
        ))}
      </div>

      <div className="mt-10 flex items-center justify-center">
        <SeeMore label="See more posts" link="/blog" />
      </div>
    </section>
  )
}
