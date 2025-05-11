import { Metadata } from 'next'
import BlogList from './partials/blog-list'
import { PostProvider } from './partials/context'
import Hero from './partials/hero'

const metaTitle = "Tech, Web, AI, Web3: Insights and Tutorials from My Development Journey"
const metaDescription = "Explore my blog for in-depth articles, tutorials, and insights on technology, web development, AI, and Web3. Learn from my experiences as I share practical knowledge and solutions from my development journey."

export const metadata: Metadata = {
  title: metaTitle,
  description: metaDescription,
  keywords: ['Tech', 'Web', 'AI', 'Web3', 'masb0ymas', 'masb0ymas blog'],
  openGraph: {
    title: metaTitle,
    description: metaDescription,
  },
  twitter: {
    title: metaTitle,
    description: metaDescription,
  },
}

export default function BlogPage() {
  return (
    <PostProvider>
      {/* Hero Section */}
      <Hero />

      {/* Blog List */}
      <BlogList />
    </PostProvider>
  )
}
