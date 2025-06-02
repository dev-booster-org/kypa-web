import { PublicMenu } from '@/components/public-menu'
import { Outlet } from 'react-router'

export function PublicLayout() {
  return (
    <main className="flex flex-col gap-8">
      <PublicMenu />
      <Outlet />
    </main>
  )
}
