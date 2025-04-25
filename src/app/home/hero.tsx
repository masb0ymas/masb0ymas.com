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
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from '~/components/ui/tooltip'

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
    href: 'https://drive.google.com/file/d/1An3Sb1dhqLFqtNt7fXvf5qK0HN_vovLV/view?usp=sharing',
    icon: IconFileSpark,
  },
]

export default function Hero() {
  return (
    <section className="px-4 py-10 md:px-6 lg:py-20">
      <div className="mx-auto max-w-7xl">
        <div className="grid h-full grid-cols-2 items-center gap-4 lg:gap-8">
          <div className="col-span-full lg:col-span-1">
            <div className="flex flex-col gap-4">
              <h2 className="text-2xl font-bold text-neutral-800 lg:text-5xl dark:text-white">
                Hi, I&apos;m{' '}
                <span className="dark:text-primary-100 text-primary-200">N. Fajri</span>, <br /> a{' '}
                <span className="underline lg:text-4xl">Software Engineer</span>.
              </h2>
              <p className="text-base text-neutral-600 lg:text-lg dark:text-neutral-200">
                My software engineering journey, which began in 2017, has provided me with a strong
                understanding of software development lifecycle and principles. I&apos;ve actively
                pursued opportunities to expand my skill set, including developing junior-level
                expertise in web3.
                <br />
                <br />I excel at tackling complex problems, fostering collaborative team dynamics,
                and navigating project challenges with a solution-oriented mindset. My capacity to
                quickly adapt to new technologies and manage stressful situations has consistently
                proven valuable.
              </p>
            </div>
          </div>
          <div className="col-span-full h-full lg:col-span-1">
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
                  <TooltipProvider key={social.name}>
                    <Tooltip>
                      <TooltipTrigger asChild>
                        <Link
                          key={social.name}
                          href={social.href}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="cursor-newtab"
                        >
                          <social.icon className="text-primary-200 dark:text-primary-100/60 h-6 w-6" />
                        </Link>
                      </TooltipTrigger>
                      <TooltipContent>{social.name}</TooltipContent>
                    </Tooltip>
                  </TooltipProvider>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

interface CardProps {
  children: React.ReactNode
}

const AvatarCard = ({ children }: CardProps) => {
  return (
    <div className="py-10 lg:py-14">
      <div className="relative w-full">
        <div className="absolute inset-0 mx-auto w-full scale-x-95 -rotate-[5deg] rounded-lg bg-gray-200 py-10 md:w-1/2 dark:bg-zinc-800" />
        {children}
      </div>
    </div>
  )
}
