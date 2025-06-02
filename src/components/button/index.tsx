import type { HTMLAttributes, ReactNode } from 'react'
import { tv, type VariantProps } from 'tailwind-variants'

const buttonVariants = tv({
  base: 'rounded px-4 py-2 cursor-pointer transition-all flex items-center gap-2',
  variants: {
    variant: {
      primary: 'bg-blue-500 text-white hover:bg-blue-600',
      ghost:
        'bg-transparent text-black hover:bg-gray-100 dark:text-white dark:hover:bg-zinc-600',
      outline:
        'bg-transparent text-black border border-gray-300 hover:bg-gray-100 dark:text-white dark:border-zinc-600 dark:hover:bg-zinc-600',
    },
  },
})

type ButtonVariants = VariantProps<typeof buttonVariants>

interface ButtonProps
  extends ButtonVariants,
    HTMLAttributes<HTMLButtonElement> {
  children: ReactNode
}

export function Button({
  variant = 'primary',
  children,
  ...rest
}: ButtonProps) {
  return (
    <button className={buttonVariants({ variant })} {...rest}>
      {children}
    </button>
  )
}
