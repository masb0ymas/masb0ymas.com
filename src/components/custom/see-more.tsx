import { IconArrowRight } from '@tabler/icons-react'
import Link from 'next/link'

type SeeMoreProps = {
  label: string
  link: string
}

export default function SeeMore({ label, link }: SeeMoreProps) {
  return (
    <Link href={link} className="flex flex-row items-center gap-2 hover:underline">
      <span className="text-neutral-800 dark:text-neutral-200">{label}</span>
      <IconArrowRight className="h-6 w-6 text-neutral-800 dark:text-neutral-200" />
    </Link>
  )
}
