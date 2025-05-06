import BlogList from './partials/blog-list'
import { PostProvider } from './partials/context'
import Hero from './partials/hero'

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
