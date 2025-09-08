import { cn } from '~/lib/utils'

interface TypographyProps {
  html: string
}

export default function Typography({ html }: TypographyProps) {
  return (
    <div
      className={cn(
        'prose',
        'prose-h1:text-white prose-h2:text-white prose-h3:text-white prose-h4:text-white',
        'w-full max-w-none dark:text-white text-black'
      )}
      dangerouslySetInnerHTML={{ __html: html }}
    />
  )
}
