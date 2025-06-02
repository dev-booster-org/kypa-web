import type { ReactNode } from 'react'
import { tv, type VariantProps } from 'tailwind-variants'

const tailwindVariants = tv({
  base: 'rounded px-4 py-2 cursor-pointer transition-all flex items-center gap-2',
  variants: {
    variant: {
      primary: 'bg-blue-500 text-white hover:bg-blue-600',
      ghost:
        'bg-transparent text-black hover:bg-blue-100 dark:text-white dark:hover:bg-zinc-600',
      outline:
        'bg-transparent text-black border border-zinc-400 hover:bg-blue-100 dark:text-white dark:border-zinc-600 dark:hover:bg-zinc-600',
    },
  },
})

type LinkVariants = VariantProps<typeof tailwindVariants>

interface LinkProps extends LinkVariants {
  children: ReactNode
  href: string
}

export function Link({ children, href, variant = 'primary' }: LinkProps) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className={tailwindVariants({ variant })}
    >
      {children}
    </a>
  )
}
