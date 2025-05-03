import SyntaxHighlighting from './partials/SyntaxHighlighting'

type IParams = {
  slug: string
}

type IProps = {
  params: Promise<IParams>
}

export default async function BlogDetailPage({ params }: IProps) {
  const { slug } = await params
  const { default: Post } = await import(`~/contents/blog/${slug}.mdx`)

  return (
    <section className="mx-auto max-w-5xl px-4 py-10 md:px-6 lg:pt-0 lg:pb-20">
      <article className="prose lg:prose-lg max-w-full">
        <SyntaxHighlighting>
          <Post />
        </SyntaxHighlighting>
      </article>
    </section>
  )
}
