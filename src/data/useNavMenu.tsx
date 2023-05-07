import { IconBrandDiscord } from '@tabler/icons-react'
import React from 'react'

interface LinkProps {
  label: string
  icon?: React.ReactNode
  link?: string
}

export interface MainLinkProps extends LinkProps {
  links?: LinkProps[]
}

function useNavMenu(): { data: MainLinkProps[]; total: number } {
  const data = [
    {
      link: '/blog',
      label: 'Blog',
    },
    {
      link: '#',
      icon: <IconBrandDiscord size={18} />,
      label: 'Discord',
    },
  ]

  return { data, total: data.length }
}

export default useNavMenu
