import React from 'react'
import { Ripple } from '~/components/magicui/ripple'
import { Button } from '~/components/ui/button'

export default function CTA() {
  return (
    <section className="bg-primary-100 relative overflow-hidden px-4 pb-10 md:px-6">
      <div className="mx-auto max-w-7xl py-10 lg:py-20">
        <div className="flex flex-col items-center justify-center gap-4 lg:gap-6">
          <h2 className="text-center text-2xl font-semibold text-neutral-800 lg:text-4xl">
            Boost Your Team with Expert Developers
          </h2>
          <p className="text-center text-sm text-neutral-800 lg:text-lg">
            Do you need additional developers as full-time/part-time/freelance workers?
          </p>

          <Button className="bg-primary-200 hover:bg-primary-100/80 h-10 cursor-pointer px-6 text-sm text-neutral-800 transition-colors duration-300 lg:text-base">
            <a href="mailto:me@masb0ymas.com" target="_blank" rel="noopener noreferrer">
              Contact me
            </a>
          </Button>
        </div>

        <Ripple />
      </div>
    </section>
  )
}
