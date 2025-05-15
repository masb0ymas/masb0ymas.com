import { cn } from "~/lib/utils"

interface DotPulseProps {
  className?: string
  width?: number
  height?: number
}

export default function DotPulse({ className, width = 20, height = 20 }: DotPulseProps) {
  return (
    <div className={cn('relative flex items-center justify-center', className)}>
      <svg width={width} height={height} viewBox="0 0 40 40" xmlns="http://www.w3.org/2000/svg">
        <circle cx="20" cy="20" r="10" fill="#ea580c" stroke="#ea580c" strokeWidth="1" strokeOpacity="0.5" />
        <circle cx="20" cy="20" r="10" fill="#ea580c" opacity="0.8">
          <animate
            attributeName="r"
            from="8"
            to="20"
            dur="1.5s"
            begin="0s"
            repeatCount="indefinite"
          />
          <animate
            attributeName="opacity"
            from="0.8"
            to="0"
            dur="1.5s"
            begin="0s"
            repeatCount="indefinite"
          />
        </circle>
      </svg>
    </div>
  )
}
