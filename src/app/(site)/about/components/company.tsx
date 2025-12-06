import { IconBriefcase, IconMapPin } from '@tabler/icons-react'

import Typography from '~/components/common/typography'

interface CompanyProps {
  company: string
  position: string
  location: string
  employeeType: string
  description: string
}

export default function Company({
  company,
  position,
  location,
  employeeType,
  description,
}: CompanyProps) {
  return (
    <div className="space-y-4">
      <div className="space-y-1">
        <h2 className="dark:text-primary-100 text-primary-200 text-xl font-bold lg:text-2xl">
          {company}
        </h2>
        <p className="text-base text-neutral-600 dark:text-neutral-200">{position}</p>
      </div>

      <div className="text-muted-foreground flex flex-col gap-2">
        <div className="flex flex-row items-center gap-1">
          <IconBriefcase className="size-5" />
          <p>{employeeType}</p>
        </div>

        <div className="flex flex-row items-center gap-1">
          <IconMapPin className="size-5" />
          <p>{location}</p>
        </div>
      </div>

      <div className="border-primary-100/80 bg-neutral-25 relative rounded-sm border-[0.5px] shadow-[4px_4px_0px_0px_rgba(251,146,60,1)] transition-all duration-300 hover:shadow-[2px_2px_0px_0px_rgba(251,146,60,1)] dark:border-neutral-600 dark:bg-neutral-900 dark:shadow-[4px_4px_0px_0px_rgba(164,167,174,1)] dark:hover:shadow-[2px_2px_0px_0px_rgba(164,167,174,1)]">
        <div className="flex h-full flex-grow flex-col gap-4 p-4">
          <Typography html={description} />
        </div>
      </div>
    </div>
  )
}
