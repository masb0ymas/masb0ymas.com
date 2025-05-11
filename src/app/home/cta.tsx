import { AnimatedGridPattern } from '~/components/magicui/animated-grid-pattern'
import { Button } from '~/components/ui/button'

export default function CTA() {
  return (
    <section className="mx-auto mb-10 max-w-7xl px-4 md:px-6">
      <div className="bg-primary-100 relative overflow-hidden rounded-2xl py-10 lg:py-20">
        <div className="flex flex-col items-center justify-center gap-4 lg:gap-6">
          <h2 className="z-10 text-center text-2xl font-semibold text-neutral-800 lg:text-4xl dark:text-white">
            Boost Your Team with Expert Developers
          </h2>
          <p className="z-10 text-center text-sm text-neutral-800 lg:text-lg dark:text-white">
            Do you need additional developers as full-time/part-time/freelance workers?
          </p>

          <Button className="bg-primary-200 hover:bg-primary-200/80 z-10 h-10 cursor-pointer px-6 text-sm text-white transition-colors duration-300 lg:text-base">
            <a href="mailto:me@masb0ymas.com" target="_blank" rel="noopener noreferrer">
              Contact me
            </a>
          </Button>
        </div>

        <AnimatedGridPattern
          numSquares={30}
          maxOpacity={0.1}
          duration={3}
          className="inset-x-0 [mask-image:radial-gradient(600px_circle_at_center,white,transparent)]"
        />
      </div>
    </section>
  )
}
