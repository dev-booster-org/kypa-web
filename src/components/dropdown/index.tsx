import type { ReactNode } from 'react'
import { DropdownMenu } from 'radix-ui'

import { DropdownTrigger } from './components/dropdown-trigger'
import { DropdownContent } from './components/dropdown-content'

interface DropdownProps {
  children: ReactNode
}

export function Dropdown({ children }: DropdownProps) {
  return <DropdownMenu.Root>{children}</DropdownMenu.Root>
}

Dropdown.Trigger = DropdownTrigger
Dropdown.Content = DropdownContent
