import {
  ColorScheme,
  ColorSchemeProvider,
  MantineProvider,
} from '@mantine/core'
import { ModalsProvider } from '@mantine/modals'
import { Notifications } from '@mantine/notifications'
import { BRAND } from 'config/env'
import { getCookie, setCookie } from 'cookies-next'
import { RouterTransition } from 'core/components/RouterTransition'
import getSiteLayout from 'layouts/core'
import _ from 'lodash'
import { GetServerSidePropsContext } from 'next'
import { AppProps } from 'next/app'
import Head from 'next/head'
import { useState } from 'react'
import slugify from 'slugify'

const brand = _.toLower(slugify(BRAND))
const cookieName = `${brand}-color-scheme`

export default function App(props: AppProps & { colorScheme: ColorScheme }) {
  const [colorScheme, setColorScheme] = useState<ColorScheme>(props.colorScheme)

  const toggleColorScheme = (value?: ColorScheme) => {
    const nextColorScheme = value || (colorScheme === 'dark' ? 'light' : 'dark')
    setColorScheme(nextColorScheme)
    setCookie(cookieName, nextColorScheme, { maxAge: 60 * 60 * 24 * 30 })
  }

  const siteLayout = getSiteLayout(props)

  return (
    <>
      <Head>
        <title>{`${BRAND} Stack`}</title>
        <link rel="shortcut icon" href="/favicon.svg" />
        <meta
          name="viewport"
          content="minimum-scale=1, initial-scale=1, width=device-width"
        />
      </Head>

      <ColorSchemeProvider
        colorScheme={colorScheme}
        toggleColorScheme={toggleColorScheme}
      >
        <MantineProvider
          withGlobalStyles
          withNormalizeCSS
          theme={{
            /** Put your mantine theme override here */
            colorScheme,
            fontFamily: 'Open Sans',
            components: {
              Container: {
                defaultProps: {
                  sizes: {
                    xs: 540,
                    sm: 720,
                    md: 1080,
                    lg: 1240,
                    xl: 1420,
                  },
                },
              },
            },
          }}
        >
          {/* nprogress loader */}
          <RouterTransition />

          {/* notification provider */}
          <Notifications position="top-right" zIndex={2077} />

          {/* modal provider */}
          <ModalsProvider>
            {/* render site layout */}
            {siteLayout}
            {/* render site layout */}
          </ModalsProvider>
        </MantineProvider>
      </ColorSchemeProvider>
    </>
  )
}

App.getInitialProps = ({ ctx }: { ctx: GetServerSidePropsContext }) => ({
  colorScheme: getCookie(cookieName, ctx) || 'light',
})
