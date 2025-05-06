'use client'

import { createContext, useCallback, useContext, useMemo, useState } from 'react'
import postJson from '~/data/posts.json'
import { Post } from '~/types/post'

type PostContextType = {
  posts: Post[]
  updatePosts: (newPosts: Post[]) => void
  resetPosts: () => void
}

const PostContext = createContext<PostContextType | undefined>(undefined)

export function PostProvider({ children }: { children: React.ReactNode }) {
  // Memoize allPosts to ensure it doesn't change on re-renders
  const allPosts = useMemo(() => postJson.posts, [])
  const [posts, setPosts] = useState<Post[]>(allPosts)

  const updatePosts = useCallback((newPosts: Post[]) => {
    setPosts(newPosts)
  }, [])

  const resetPosts = useCallback(() => {
    setPosts(allPosts)
  }, [allPosts])

  // Memoize the context value to prevent unnecessary re-renders of consumers
  const contextValue = useMemo(
    () => ({
      posts,
      updatePosts,
      resetPosts,
    }),
    [posts, updatePosts, resetPosts]
  )

  return <PostContext.Provider value={contextValue}>{children}</PostContext.Provider>
}

export function usePostContext() {
  const context = useContext(PostContext)

  if (!context) {
    throw new Error('usePostContext must be used within a PostProvider')
  }

  return context
}
