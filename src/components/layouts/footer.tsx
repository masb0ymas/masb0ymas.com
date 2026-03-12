import Link from 'next/link'

import { env } from '~/env'

export default function Footer() {
  return (
    <footer className="border-t bg-neutral-900 py-4">
      <div className="mx-auto max-w-7xl px-4 md:px-6">
        <div className="flex items-center justify-center">
          <div className="flex flex-row items-center gap-2">
            <Link className="text-muted-foreground text-sm" href="/privacy">
              Privacy
            </Link>
            <span className="text-sm text-neutral-700">•</span>
            <Link className="text-muted-foreground text-sm" href="/terms">
              Terms
            </Link>
            <span className="text-sm text-neutral-700">•</span>
            <p className="text-sm text-neutral-400">
              Copyright &copy; {new Date().getFullYear()} {env.NEXT_PUBLIC_APP_NAME}. All rights
              reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}
