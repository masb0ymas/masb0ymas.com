import { PropsWithChildren } from 'react'
import { Toaster } from '~/components/ui/sonner'
import { TooltipProvider } from '~/components/ui/tooltip'
import { ThemeProvider } from './next-themes'
import NProgressProvider from './nprogress'

type Props = { children: React.ReactNode }
type Provider = React.ComponentType<Props>

const composeProviders = (...providers: Provider[]) =>
  providers.reduceRight(
    (AccumulatedProviders, CurrentProvider) => {
      const ComposedProvider = ({ children }: Props) => (
        <CurrentProvider>
          <AccumulatedProviders>{children}</AccumulatedProviders>
        </CurrentProvider>
      )
      ComposedProvider.displayName = 'ComposedProvider'
      return ComposedProvider
    },
    ({ children }: Props) => <>{children}</>
  )

type DecoratorProviderProps = PropsWithChildren

export default function DecoratorProvider({ children }: DecoratorProviderProps) {
  const ComposedProvider = composeProviders(ThemeProvider, NProgressProvider, TooltipProvider)

  return (
    <ComposedProvider>
      <Toaster />
      {children}
    </ComposedProvider>
  )
}
