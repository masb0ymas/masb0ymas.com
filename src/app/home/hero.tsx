import Image from 'next/image'
import React from 'react'

export default function Hero() {
  return (
    <section className="px-4 py-10 md:px-6 lg:py-20">
      <div className="mx-auto max-w-7xl">
        <div className="grid grid-cols-2 gap-4 lg:gap-8">
          <div className="col-span-full lg:col-span-1">
            <h2 className="text-2xl font-bold lg:mb-10 lg:text-4xl">
              Hi, I&apos;m <span className="dark:text-primary-100 text-primary-200">N. Fajri</span>,{' '}
              <br /> a{' '}
              <span className="underline">
                Software Engineer
              </span>
              .
            </h2>
            <p className="text-base text-neutral-100 lg:text-lg dark:text-neutral-800">
              My software engineering journey, which began in 2017, has provided me with a strong
              understanding of software development lifecycle and principles. I&apos;ve actively
              pursued opportunities to expand my skill set, including developing junior-level
              expertise in web3.
              <br />
              <br />I excel at tackling complex problems, fostering collaborative team dynamics, and
              navigating project challenges with a solution-oriented mindset. My capacity to quickly
              adapt to new technologies and manage stressful situations has consistently proven
              valuable.
            </p>
          </div>
          <div className="col-span-full lg:col-span-1">
            <AvatarCard>
              <Image
                src="/static/images/profile.jpeg"
                alt="Profile"
                width={512}
                height={512}
                className="relative mx-auto w-full rounded-lg shadow backdrop-blur-xl md:w-1/2 dark:bg-zinc-900/90"
              />
            </AvatarCard>
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
    <div className="py-14">
      <div className="relative w-full">
        <div className="absolute inset-0 mx-auto w-full scale-x-95 -rotate-[5deg] rounded-lg bg-gray-200 py-10 md:w-1/2 dark:bg-zinc-800" />
        {children}
      </div>
    </div>
  )
}
