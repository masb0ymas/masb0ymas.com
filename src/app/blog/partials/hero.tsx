/* eslint-disable react-hooks/exhaustive-deps */
'use client'

import { useDebounce } from '@uidotdev/usehooks'
import Fuse from 'fuse.js'
import { useEffect, useMemo, useState } from 'react'

import { Input } from '~/components/ui/input'
import { Separator } from '~/components/ui/separator'
import { Post } from '~/types/post'

import { usePostContext } from './context'

export default function Hero() {
  const { posts, updatePosts, resetPosts } = usePostContext()
  const [post, setPost] = useState('')
  const debouncedSearch = useDebounce(post, 300)

  // Memoize the fuseOptions to prevent recreation on each render
  const fuseOptions = useMemo(() => ({ keys: ['title', 'description', 'tags'] }), [])

  useEffect(() => {
    if (debouncedSearch.trim() === '') {
      resetPosts()
      return
    }

    if (debouncedSearch) {
      const searchResult = new Fuse(posts, fuseOptions).search(debouncedSearch)

      const filteredPosts: Post[] = searchResult.map((result) => result.item)
      updatePosts(filteredPosts)
    }
  }, [debouncedSearch])

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
            onChange={(e) => setPost(e.target.value)}
          />
        </div>
      </div>

      <Separator className="mt-10" />
    </section>
  )
}
