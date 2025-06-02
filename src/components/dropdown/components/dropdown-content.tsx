import { DropdownMenu } from 'radix-ui'
import type { ReactNode } from 'react'

type Option = {
  label: string
  value: string
  icon?: ReactNode
  action?: () => void
}

interface DropdownContentProps {
  options: Option[]
}

export function DropdownContent({ options }: DropdownContentProps) {
  return (
    <DropdownMenu.Portal>
      <DropdownMenu.Content
        className="min-w-[220px] flex flex-col gap-2 rounded-md bg-white dark:bg-zinc-700 p-2 shadow-[0px_10px_38px_-10px_rgba(22,_23,_24,_0.35),_0px_10px_20px_-15px_rgba(22,_23,_24,_0.2)] will-change-[opacity,transform] data-[side=bottom]:animate-slideUpAndFade data-[side=left]:animate-slideRightAndFade data-[side=right]:animate-slideLeftAndFade data-[side=top]:animate-slideDownAndFade"
        sideOffset={5}
      >
        <DropdownMenu.Arrow className="fill-white dark:fill-zinc-700" />
        {options.map((option, index) => (
          <DropdownMenu.Item
            key={index}
            className="p-2 rounded flex items-center gap-2 cursor-pointer bg-blue-50 hover:bg-blue-100 dark:bg-zinc-600 dark:hover:bg-zinc-500 text-sm"
            onClick={option.action}
          >
            {option.icon}
            {option.label}
          </DropdownMenu.Item>
        ))}
      </DropdownMenu.Content>
    </DropdownMenu.Portal>
  )
}
