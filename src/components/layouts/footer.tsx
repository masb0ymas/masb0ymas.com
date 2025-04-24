import React from 'react'
import { env } from '~/lib/constant/env'

export default function Footer() {
  return (
    <footer className="border-t border-neutral-700/80 py-4 dark:border-neutral-200/80">
      <div className="mx-auto max-w-7xl px-4 md:px-6">
        <div className="flex items-center justify-center">
          <p className="text-sm text-neutral-800 lg:text-base dark:text-white">
            &copy; {new Date().getFullYear()} {env.APP_NAME}. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}
