import CardPost from '~/components/common/card-post'
import SectionTitle from '~/components/common/section-title'
import SeeMore from '~/components/common/see-more'
import { Separator } from '~/components/ui/separator'
import postJson from '~/data/posts.json'

export default function FeaturedPosts() {
  const posts = postJson.posts

  return (
    <section className="mx-auto max-w-7xl px-4 py-10 md:px-6 lg:py-20">
      <SectionTitle title="Featured" subtitle="Posts" description="Some articles I've written" />

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
