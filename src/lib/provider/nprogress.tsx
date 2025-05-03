'use client'

import { ProgressProvider } from '@bprogress/next/app'
import { memo, PropsWithChildren } from 'react'

type IProps = PropsWithChildren

const NProgressProvider = memo(function NProgressProvider({ children }: Readonly<IProps>) {
  return (
    <ProgressProvider
      height="4px"
      color="#ea580c"
      options={{
        showSpinner: true,
        minimum: 0.3,
        easing: 'ease',
        speed: 200,
      }}
      shallowRouting
    >
      {children}
    </ProgressProvider>
  )
})

export default NProgressProvider
