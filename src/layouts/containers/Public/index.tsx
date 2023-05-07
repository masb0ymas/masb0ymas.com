/* eslint-disable react/jsx-no-constructed-context-values */
import { Loader } from '@mantine/core'
import { ReactComponentLike } from 'prop-types'
import React, { useState } from 'react'
import PublicFooter from './Footer'
import PublicHeader from './Header'

interface IProps {
  Component: ReactComponentLike
}

const PublicContext = React.createContext<
  {
    stateLayoutLoading: [boolean, (loading: boolean) => void]
  } & any
>({
  stateLayoutLoading: [false, () => {}],
})

function PublicContainer(props: IProps) {
  const { Component } = props

  const stateLayoutLoading = useState(false)
  const [isLayoutLoading] = stateLayoutLoading

  return (
    <PublicContext.Provider value={{ stateLayoutLoading }}>
      <PublicHeader />

      {isLayoutLoading && <Loader />}
      {/* start render component */}

      <Component {...props} />

      {/* end render component */}
      <PublicFooter />
    </PublicContext.Provider>
  )
}

export default PublicContainer
