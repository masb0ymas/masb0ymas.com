import { Metadata } from 'next'
import SyntaxHighlighting from './partials/SyntaxHighlighting'
import postsJson from '~/data/posts.json'

type IParams = {
  slug: string
}

type IProps = {
  params: Promise<IParams>
}

export async function generateMetadata({ params }: IProps): Promise<Metadata> {
  const { slug } = await params
  const post = postsJson.posts.find((post) => post.slug === `/blog/${slug}`)
  const tags = post?.tags || []

  return {
    title: post?.title,
    description: post?.description,
    keywords: [...tags, 'Tech', 'Web', 'AI', 'Web3', 'masb0ymas', 'masb0ymas blog'],
    openGraph: {
      title: post?.title,
      description: post?.description,
    },
    twitter: {
      title: post?.title,
      description: post?.description,
    },
  }
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
