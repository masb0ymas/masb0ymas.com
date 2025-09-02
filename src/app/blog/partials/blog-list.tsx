'use client'

import CardPost from '~/components/common/card-post'
import { Separator } from '~/components/ui/separator'
import { usePostContext } from './context'

export default function BlogList() {
  const { posts } = usePostContext()

  return (
    <section className="mx-auto max-w-7xl px-4 pb-10 md:px-6 lg:pb-20">
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
