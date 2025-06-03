import type { ReactNode } from 'react'

interface CardProps {
  children: ReactNode
}

export function Card({ children }: CardProps) {
  return (
    <div className="rounded p-4 bg-white shadow flex flex-col gap-4 items-center w-full lg:w-auto text-center dark:bg-zinc-700 flex-1">
      {children}
    </div>
  )
}
