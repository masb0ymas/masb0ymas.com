import {
  IconBulb,
  IconCode,
  IconDatabase,
  IconGitMerge,
  IconMessages,
  IconServer,
} from '@tabler/icons-react'

const benefits = [
  {
    title: 'Frontend Development',
    description:
      'Creating responsive and user-friendly interfaces using React, Next.js, and Tailwind CSS',
    icon: IconCode,
  },
  {
    title: 'UI/UX Implementation',
    description:
      'I translate Figma and design mockups into responsive, pixel-perfect user interfaces.',
    icon: IconBulb,
  },
  {
    title: 'Third Party Integration',
    description:
      'I integrate third-party services and APIs to enhance functionality and user experience.',
    icon: IconGitMerge,
  },
  {
    title: 'Backend Development',
    description:
      'Build a scalable and secure backend using Node.js, TypeScript, Laravel, and Golang',
    icon: IconDatabase,
  },
  {
    title: 'DevOps',
    description:
      'I manage and optimize the deployment process, ensuring smooth and efficient delivery of web apps.',
    icon: IconServer,
  },
  {
    title: 'Technical Leadership',
    description:
      'I lead and mentor technical teams, fostering a culture of innovation and excellence.',
    icon: IconMessages,
  },
]

export default function Benefit() {
  return (
    <section className="mx-auto max-w-7xl px-4 py-10 md:px-6 lg:py-20">
      <div className="flex flex-col gap-2">
        <h2 className="text-3xl font-bold text-neutral-800 lg:text-5xl dark:text-white">
          What I do
        </h2>
        <p className="text-sm text-neutral-600 lg:text-lg dark:text-neutral-200">
          Delivering high-quality web solutions with modern technologies and best practices
        </p>
      </div>

      <div className="mt-10 grid grid-cols-3 gap-4">
        {benefits.map((item, index) => (
          <div className="col-span-full h-full lg:col-span-1" key={index}>
            <CardBenefit {...item} />
          </div>
        ))}
      </div>
    </section>
  )
}

type CardBenefitProps = {
  title: string
  description: string
  icon: typeof IconCode
}

function CardBenefit(props: CardBenefitProps) {
  return (
    <div className="border-primary-100/80 bg-neutral-25 relative rounded-sm border-[0.5px] shadow-[4px_4px_0px_0px_rgba(251,146,60,1)] transition-all duration-300 hover:shadow-[2px_2px_0px_0px_rgba(251,146,60,1)] dark:border-neutral-600 dark:bg-neutral-900 dark:shadow-[4px_4px_0px_0px_rgba(164,167,174,1)] dark:hover:shadow-[2px_2px_0px_0px_rgba(164,167,174,1)]">
      <div className="flex h-full flex-grow flex-col gap-4 p-6">
        {<props.icon className="text-primary-200 dark:text-primary-100 size-8" strokeWidth={1.5} />}

        <div className="flex h-full flex-grow flex-col justify-between space-y-2">
          <h3 className="dark:text-primary-100 text-xl font-bold text-neutral-600">
            {props.title}
          </h3>
          <p className="text-sm text-neutral-600 dark:text-neutral-200">{props.description}</p>
        </div>
      </div>
    </div>
  )
}
