import React from 'react'

interface CardHighlightProps {
  content: string
}

export default function CardHighlight({ content }: CardHighlightProps) {
  return (
    <div className="border-primary-100/80 bg-neutral-25 relative rounded-sm border-[0.5px] shadow-[4px_4px_0px_0px_rgba(251,146,60,1)] transition-all duration-300 hover:shadow-[2px_2px_0px_0px_rgba(251,146,60,1)] dark:border-neutral-600 dark:bg-neutral-900 dark:shadow-[4px_4px_0px_0px_rgba(164,167,174,1)] dark:hover:shadow-[2px_2px_0px_0px_rgba(164,167,174,1)]">
      <div className="flex h-full flex-grow flex-col gap-2 p-4">
        <p>{content}</p>
      </div>
    </div>
  )
}
