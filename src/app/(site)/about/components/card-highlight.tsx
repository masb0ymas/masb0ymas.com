'use client'

import { useTheme } from 'next-themes'
import { MagicCard } from '~/components/ui/magic-card'

interface CardHighlightProps {
  content: string
}

export default function CardHighlight({ content }: CardHighlightProps) {
  const { theme } = useTheme()

  return (
    <div className="relative rounded-lg border-none">
      <MagicCard gradientColor={theme === 'dark' ? '#262626' : '#D9D9D955'} className="p-0">
        <div className="flex h-full flex-grow flex-col gap-2 p-4">
          <p>{content}</p>
        </div>
      </MagicCard>
    </div>
  )
}
