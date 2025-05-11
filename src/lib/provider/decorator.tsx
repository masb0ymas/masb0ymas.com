import { PropsWithChildren } from 'react'
import { Toaster } from '~/components/ui/sonner'
import { ThemeProvider } from './next-themes'
import NProgressProvider from './nprogress'

type DecoratorProviderProps = PropsWithChildren

export default function DecoratorProvider({ children }: DecoratorProviderProps) {
  return (
    <ThemeProvider attribute="class" defaultTheme="system" enableSystem disableTransitionOnChange>
      <NProgressProvider>
        <Toaster />
        {children}
      </NProgressProvider>
    </ThemeProvider>
  )
}
