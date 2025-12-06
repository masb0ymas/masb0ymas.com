import React from 'react'

import { Tooltip, TooltipContent, TooltipTrigger } from '../ui/tooltip'

interface CommonTooltipProps {
  children: React.ReactNode
  content: string
}

export default function CommonTooltip({ children, content }: CommonTooltipProps) {
  return (
    <Tooltip>
      <TooltipTrigger asChild>{children}</TooltipTrigger>
      <TooltipContent>{content}</TooltipContent>
    </Tooltip>
  )
}
