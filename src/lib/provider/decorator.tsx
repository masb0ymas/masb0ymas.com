import { PropsWithChildren } from 'react'
import { Toaster } from '~/components/ui/sonner'
import { TooltipProvider } from '~/components/ui/tooltip'
import { ThemeProvider } from './next-themes'
import NProgressProvider from './nprogress'

type DecoratorProviderProps = PropsWithChildren

export default function DecoratorProvider({ children }: DecoratorProviderProps) {
  return (
    <ThemeProvider attribute="class" defaultTheme="system" enableSystem disableTransitionOnChange>
      <NProgressProvider>
        <Toaster />
        <TooltipProvider>{children}</TooltipProvider>
      </NProgressProvider>
    </ThemeProvider>
  )
}
