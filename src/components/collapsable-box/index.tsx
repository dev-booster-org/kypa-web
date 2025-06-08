import { useState, type ReactNode } from 'react'
import { ChevronDown } from 'lucide-react'
import { tv, type VariantProps } from 'tailwind-variants'

const collapsableBoxVariants = tv({
  base: 'rounded flex flex-col gap-4',
  variants: {
    variant: {
      default: 'bg-blue-50 dark:bg-zinc-700 p-2',
      ghost: '',
      outline: 'border border-gray-200 dark:border-zinc-600 p-2',
    },
  },
})

type CollapsableBoxVariants = VariantProps<typeof collapsableBoxVariants>

interface CollapsableBoxProps extends CollapsableBoxVariants {
  title: string
  children: ReactNode
  defaultOpen?: boolean
}

export function CollapsableBox({
  title,
  children,
  variant = 'default',
  defaultOpen = false,
}: CollapsableBoxProps) {
  const [isOpen, setIsOpen] = useState(defaultOpen)

  return (
    <div className={collapsableBoxVariants({ variant })}>
      <div
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center justify-between pb-2 border-b border-gray-200 dark:border-zinc-600 w-full cursor-pointer"
      >
        <span className="text-lg font-bold ">{title}</span>
        <ChevronDown
          size={18}
          className={`transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`}
        />
      </div>
      <div
        className={`flex flex-col gap-2 transition-all duration-300 ${isOpen ? 'block' : 'hidden'}`}
      >
        {children}
      </div>
    </div>
  )
}
