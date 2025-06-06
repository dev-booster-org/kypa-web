import type { ReactNode } from 'react'

import { Button } from '@/components/button'

type Option = {
  label: string
  icon: ReactNode
  action: () => void
}

interface OptionsCardProps {
  title?: string
  options: Option[]
}

export function OptionsCard({ title, options }: OptionsCardProps) {
  return (
    <div className=" bg-blue-50 dark:bg-zinc-700  rounded p-4 flex flex-col gap-4 shadow">
      <span className="text-lg font-bold">{title}</span>
      <hr className="border-gray-200 dark:border-zinc-600" />
      <div className="flex flex-col gap-2">
        {options.map((option) => (
          <Button
            key={option.label}
            onClick={option.action}
            align="left"
            variant="ghost"
          >
            {option.icon} {option.label}
          </Button>
        ))}
      </div>
    </div>
  )
}
