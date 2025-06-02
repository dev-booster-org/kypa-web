import { DropdownMenu } from 'radix-ui'
import type { ReactNode } from 'react'

interface DropdownTriggerProps {
  children: ReactNode
}

export function DropdownTrigger({ children }: DropdownTriggerProps) {
  return <DropdownMenu.Trigger asChild>{children}</DropdownMenu.Trigger>
}
