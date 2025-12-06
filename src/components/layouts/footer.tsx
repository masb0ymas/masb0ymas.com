import { env } from '~/env'

export default function Footer() {
  return (
    <footer className="border-t bg-neutral-900 py-4">
      <div className="mx-auto max-w-7xl px-4 md:px-6">
        <div className="flex items-center justify-center">
          <p className="text-sm text-neutral-400 lg:text-base">
            Copyright &copy; {new Date().getFullYear()} {env.NEXT_PUBLIC_APP_NAME}. All rights
            reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}
