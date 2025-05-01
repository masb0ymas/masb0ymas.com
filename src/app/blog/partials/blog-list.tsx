import CardPost from '~/components/custom/card-post'
import { Separator } from '~/components/ui/separator'
import { posts } from '~/data/posts.json'

export default function BlogList() {
  return (
    <section className="mx-auto max-w-7xl px-4 pb-10 lg:pb-20 md:px-6">
      <div className="mt-10 flex flex-col gap-4">
        {posts.map((post, index) => (
          <div key={index}>
            <CardPost {...post} />
            {index !== posts.length - 1 && <Separator className="mt-4" />}
          </div>
        ))}
      </div>
    </section>
  )
}
