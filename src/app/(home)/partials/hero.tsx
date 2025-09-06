import Profile from '~/components/common/profile'

export default function Hero() {
  return (
    <section className="mx-auto max-w-7xl px-4 py-10 md:px-6 lg:pt-40 lg:pb-20">
      <div className="grid h-full grid-cols-2 items-center gap-4 lg:gap-8">
        <div className="col-span-full lg:col-span-1">
          <div className="flex flex-col gap-4">
            <h2 className="text-3xl font-bold text-neutral-800 lg:text-5xl dark:text-white">
              Hi, I&apos;m <span className="dark:text-primary-100 text-primary-200">N. Fajri</span>,{' '}
              <br /> a <span className="underline lg:text-4xl">Software Engineer</span>.
            </h2>
            <p className="text-base text-neutral-600 lg:text-lg dark:text-neutral-200">
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
        </div>
        <div className="col-span-full h-full lg:col-span-1">
          <Profile available={false} />
        </div>
      </div>
    </section>
  )
}
