'use client'

import 'highlight.js/styles/atom-one-dark.min.css'

import hljs from 'highlight.js'
import React, { PropsWithChildren, useEffect } from 'react'

type IProps = PropsWithChildren

export default function SyntaxHighlighting({ children }: IProps) {
  useEffect(() => {
    hljs.highlightAll()
  }, [])

  return <>{children}</>
}
