import { Metadata } from 'next'

import SyntaxHighlighting from '~/components/common/syntax-highlighting'
import projectsJson from '~/data/projects.json'

type IParams = {
  slug: string
}

type IProps = {
  params: Promise<IParams>
}

export async function generateMetadata({ params }: IProps): Promise<Metadata> {
  const { slug } = await params
  const project = projectsJson.projects.find((project) => project.slug === `/project/${slug}`)
  const tags = project?.tags || []

  return {
    title: project?.title,
    description: project?.description,
    keywords: [...tags, 'Tech', 'Web', 'AI', 'Web3', 'masb0ymas', 'masb0ymas project'],
    openGraph: {
      title: project?.title,
      description: project?.description,
    },
    twitter: {
      title: project?.title,
      description: project?.description,
    },
  }
}

export default async function ProjectDetailPage({ params }: IProps) {
  const { slug } = await params
  const { default: Project } = await import(`~/contents/project/${slug}.mdx`)

  return (
    <section className="mx-auto max-w-5xl px-4 py-10 md:px-6 lg:pt-0 lg:pb-20">
      <article className="prose lg:prose-lg max-w-full">
        <SyntaxHighlighting>
          <Project />
        </SyntaxHighlighting>
      </article>
    </section>
  )
}
