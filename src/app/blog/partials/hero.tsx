'use client'

import Fuse from 'fuse.js'
import { useCallback, useEffect, useMemo, useState } from 'react'
import { Input } from '~/components/ui/input'
import { Separator } from '~/components/ui/separator'
import { Post } from '~/types/post'
import { usePostContext } from './context'

export default function Hero() {
  const { posts, updatePosts, resetPosts } = usePostContext()
  const [post, setPost] = useState('')

  // Memoize the fuseOptions to prevent recreation on each render
  const fuseOptions = useMemo(
    () => ({
      keys: ['title', 'description', 'tags'],
    }),
    []
  )

  // Memoize the Fuse instance to prevent recreation on each render
  // Only recreate when posts change (which happens when context updates)
  const fuse = useMemo(() => new Fuse(posts, fuseOptions), [posts, fuseOptions])

  // Memoize the search function with minimal dependencies
  const searchPosts = useCallback(() => {
    if (post.trim() === '') {
      resetPosts()
      return
    }

    const searchResults = fuse.search(post)

    // Extract the item objects from the Fuse results
    const filteredPosts: Post[] = searchResults.map((result) => result.item)

    // Update the posts in context
    updatePosts(filteredPosts)
  }, [post, fuse, resetPosts, updatePosts])

  // Effect to trigger search when dependencies change
  useEffect(() => {
    // Add a small delay to avoid searching on every keystroke
    const timer = setTimeout(() => {
      searchPosts()
    }, 1000)

    // Cleanup the timer on dependency changes
    return () => clearTimeout(timer)
  }, [searchPosts])

  return (
    <section className="px-4 py-10 md:px-6 lg:pt-40">
      <div className="mx-auto max-w-7xl">
        <div className="flex flex-col items-center justify-center gap-2">
          <h2 className="text-3xl font-bold text-neutral-800 lg:text-5xl dark:text-white">Blog</h2>
          <p className="text-sm text-neutral-600 lg:text-lg dark:text-neutral-200">
            My thoughts and experiences on software development and web technologies
          </p>
        </div>

        <div className="mx-auto mt-4 max-w-xl">
          <Input
            type="text"
            placeholder="Search posts..."
            value={post}
            onChange={(e) => setPost(e.target.value)}
          />
        </div>
      </div>

      <Separator className="mt-10" />
    </section>
  )
}
