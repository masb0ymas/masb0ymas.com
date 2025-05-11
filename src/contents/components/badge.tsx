import { Badge } from '~/components/ui/badge'

type IProps = {
  labels: string[]
}

export default function BadgeList({ labels }: IProps) {
  return (
    <div className="my-2 flex flex-row gap-2">
      {labels.map((label) => (
        <Badge
          key={label}
          variant="outline"
          className="border-primary-200 dark:border-primary-100 text-primary-200 dark:text-primary-100 cursor-pointer lg:h-8 lg:text-base"
        >
          {label}
        </Badge>
      ))}
    </div>
  )
}
