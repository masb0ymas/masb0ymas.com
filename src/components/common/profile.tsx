import {
  IconBrandBluesky,
  IconBrandGithub,
  IconBrandLinkedin,
  IconBrandX,
  IconFileSpark,
  IconMail,
} from '@tabler/icons-react'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import DotPulse from './dot-pulse'
import CommonTooltip from './tooltip'

const socials = [
  {
    name: 'X',
    href: 'https://x.com/masb0ymas',
    icon: IconBrandX,
  },
  {
    name: 'Bluesky',
    href: 'https://bsky.app/profile/masb0ymas.bsky.social',
    icon: IconBrandBluesky,
  },
  {
    name: 'LinkedIn',
    href: 'https://linkedin.com/in/masb0ymas',
    icon: IconBrandLinkedin,
  },
  {
    name: 'GitHub',
    href: 'https://github.com/masb0ymas',
    icon: IconBrandGithub,
  },
  {
    name: 'Email',
    href: 'mailto:me@masb0ymas.com',
    icon: IconMail,
  },
  {
    name: 'Resume',
    href: 'https://drive.google.com/file/d/1WV46YuFBQuWR4r1pSZ61ifQPxHZ0dazT/view?usp=sharing',
    icon: IconFileSpark,
  },
]

interface ProfileProps {
  available?: boolean
}

export default function Profile({ available = true }: ProfileProps) {
  return (
    <div className="flex flex-col items-center justify-center gap-2">
      <AvatarCard>
        <Image
          src="/static/images/profile.jpeg"
          alt="Profile"
          width={512}
          height={512}
          className="relative mx-auto w-full rounded-lg shadow backdrop-blur-xl md:w-1/2 dark:bg-zinc-900/90"
        />
      </AvatarCard>

      <div className="flex flex-row gap-4">
        {socials.map((social) => (
          <CommonTooltip key={social.name} content={social.name}>
            <Link
              key={social.name}
              href={social.href}
              target="_blank"
              rel="noopener noreferrer"
              className="cursor-newtab"
            >
              <social.icon className="text-primary-200 dark:text-primary-100/60 h-6 w-6" />
            </Link>
          </CommonTooltip>
        ))}
      </div>

      {available && (
        <div className="mt-2 flex items-center justify-center gap-2">
          <DotPulse />
          <span className="text-primary-200 dark:text-primary-100/60 font-bold">Available</span>
        </div>
      )}
    </div>
  )
}

interface CardProps {
  children: React.ReactNode
}

const AvatarCard = ({ children }: CardProps) => {
  return (
    <div className="py-10">
      <div className="relative w-full">
        <div className="absolute inset-0 mx-auto w-full scale-x-95 -rotate-[5deg] rounded-lg bg-gray-200 py-10 md:w-1/2 dark:bg-zinc-800" />
        {children}
      </div>
    </div>
  )
}
